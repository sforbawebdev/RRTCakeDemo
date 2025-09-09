// app/api/galleryList/route.js

import { galleryList } from '@/data/Data';

export async function GET() {
  return Response.json(galleryList);
}
