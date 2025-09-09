// app/api/brands/route.js

import { brandList } from '@/data/Data';

export async function GET() {
  return Response.json(brandList);
}
