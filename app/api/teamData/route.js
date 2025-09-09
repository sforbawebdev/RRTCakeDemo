import { teamData } from '@/data/Data';
export async function GET() {

  return Response.json(teamData);
}
