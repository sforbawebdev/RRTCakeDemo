// app/api/firstBannerData/route.js

import { firstBannerData } from '@/data/Data';

export async function GET() {
  return Response.json(firstBannerData);
}
