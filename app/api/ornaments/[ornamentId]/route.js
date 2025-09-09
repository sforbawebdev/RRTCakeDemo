// app/api/ornaments/[ornamentId]/route.js

import { ornamentList } from '@/data/Data';

export async function GET(request, { params }) {
  const { ornamentId } = params;

  const ornamentData = ornamentList.find(
    (ornament) => ornament.slug.toString() === ornamentId
  );

  if (ornamentData) {
    return Response.json(ornamentData);
  } else {
    return new Response(JSON.stringify({ message: 'Product not found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
