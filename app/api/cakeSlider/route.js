// app/api/cakeSlider/route.js

import { cakeSliderList } from '@/data/Data';

export async function GET() {
  return Response.json(cakeSliderList);
}
