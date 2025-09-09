const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;

async function searchUnsplashImages(query = "office", perPage = 12, page = 1) {
  const res = await fetch(
    `https://api.unsplash.com/search/photos?query=${query}&per_page=${perPage}&page=${page}&orientation=landscape&content_filter=high`,
    {
      headers: {
        Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
      },
      next: { revalidate: false },
      cache: "force-cache",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to search Unsplash images");
  }

  const data = await res.json();
  return data.results; // array of image objects
}

module.exports = { searchUnsplashImages };
