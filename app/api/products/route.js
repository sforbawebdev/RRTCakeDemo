import { allProductList } from '@/data/Data';

export async function GET() {
  return Response.json(allProductList);
}
