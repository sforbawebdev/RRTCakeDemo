// app/api/faqData/route.js

import { accordionList } from '@/data/Data';

export async function GET() {
  return Response.json(accordionList);
}
