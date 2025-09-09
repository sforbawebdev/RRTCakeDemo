// app/api/cakeCategories/route.js

import { cakeCategories } from '@/data/Data';

export async function GET() {
  return Response.json(cakeCategories);
}
