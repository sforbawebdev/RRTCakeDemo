// app/api/testimonialSliderList/route.js

import { testimonialSliderList } from '@/data/Data';

export async function GET() {
  return Response.json(testimonialSliderList);
}
