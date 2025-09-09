// app/api/jewelleryGallery/route.js

import { jewelleryGallery } from '@/data/Data';

export async function GET() {
  return Response.json(jewelleryGallery);
}
