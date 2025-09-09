import { searchPhotos } from './pexels';

const IMAGE_KEYS = ['imgSrc', 'image', 'logo', 'thumbnail'];
const IMAGE_OBJECT_KEYS = ['images', 'customerImages']; // keys with nested image paths

export async function replaceImagesInObject(obj) {
  if (Array.isArray(obj)) {
    return Promise.all(obj.map(item => replaceImagesInObject(item)));
  }

  if (typeof obj === 'object' && obj !== null) {
    const newObj = {};

    for (const key in obj) {
      const value = obj[key];
      const isString = typeof value === 'string';
      const keyword = obj.name || obj.title || obj.category || 'modern door';

      // Replace known single image keys
      if (IMAGE_KEYS.includes(key) && isString) {
        const photos = await searchPhotos(keyword, 1);
        const photo = photos?.[0];

        newObj[key] = photo
          ? {
              src: photo.src.medium,
              width: photo.width,
              height: photo.height,
              alt: keyword,
            }
          : value;
      }

      // Replace arrays inside known image object keys
      else if (IMAGE_OBJECT_KEYS.includes(key) && Array.isArray(value)) {
        const updatedImages = await Promise.all(
          value.map(async (imgVal) => {
            if (typeof imgVal === 'string') {
              const photos = await searchPhotos(keyword, 1);
              const photo = photos?.[0];
              return photo
                ? {
                    src: photo.src.medium,
                    width: photo.width,
                    height: photo.height,
                    alt: keyword,
                  }
                : imgVal;
            }
            return await replaceImagesInObject(imgVal); // nested object
          })
        );
        newObj[key] = updatedImages;
      }

      // Replace objects inside known image object keys
      else if (IMAGE_OBJECT_KEYS.includes(key) && typeof value === 'object') {
        const updatedImages = {};
        for (const subKey in value) {
          const subVal = value[subKey];
          if (typeof subVal === 'string') {
            const photos = await searchPhotos(keyword, 1);
            const photo = photos?.[0];
            updatedImages[subKey] = photo
              ? {
                  src: photo.src.medium,
                  width: photo.width,
                  height: photo.height,
                  alt: keyword,
                }
              : subVal;
          } else {
            updatedImages[subKey] = await replaceImagesInObject(subVal);
          }
        }
        newObj[key] = updatedImages;
      }

      // Recurse for other nested keys
      else {
        newObj[key] = await replaceImagesInObject(value);
      }
    }

    return newObj;
  }

  return obj;
}
