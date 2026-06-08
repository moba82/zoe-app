import { Redis } from '@upstash/redis';
const redis = Redis.fromEnv();

export async function GET() {
  const tasks = await redis.get('zoe:tasks') || [];
  const vacation = await redis.get('zoe:vacation');
  const essentialsDone = tasks
    .filter(t => t.essential)
    .every(t => t.done);
  const blocked = !vacation && !essentialsDone;
  return Response.json({ blocked });
}
