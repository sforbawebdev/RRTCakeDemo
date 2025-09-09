// app/api/cakes/route.js

import { allCakeList } from '@/data/Data';

export async function GET() {
  return Response.json(allCakeList);
}
