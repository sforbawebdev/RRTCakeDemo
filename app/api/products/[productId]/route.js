import { allProductList } from '@/data/Data';
import { replaceImagesInObject } from '@/utils/imageReplace';

export async function GET(request, { params }) {
  const { productId } = params;

  const productData = allProductList.find(
    (product) => product.slug.toString() === productId
  );

  if (productData) {
    const updatedData = await replaceImagesInObject(productData);
    return Response.json(updatedData);
  } else {
    return new Response(JSON.stringify({ message: 'Product not found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
