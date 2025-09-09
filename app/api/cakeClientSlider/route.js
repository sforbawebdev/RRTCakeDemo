// app/api/cakeClientSlider/route.js

import { cakeClientSlider } from '@/data/Data';

export async function GET() {
  return Response.json(cakeClientSlider);
}
