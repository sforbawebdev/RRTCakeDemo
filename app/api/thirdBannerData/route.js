// app/api/thirdBannerData/route.js

import { thirdBannerData } from '@/data/Data';

export async function GET() {
  return Response.json(thirdBannerData);
}
