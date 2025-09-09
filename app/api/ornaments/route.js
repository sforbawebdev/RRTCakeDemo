// app/api/ornaments/route.js

import { ornamentList } from '@/data/Data';

export async function GET() {
  return Response.json(ornamentList);
}
