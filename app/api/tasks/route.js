import { Redis } from '@upstash/redis';
const redis = Redis.fromEnv();

export async function GET() {
  const tasks = await redis.get('zoe:tasks');
  return Response.json(tasks || []);
}

export async function POST(req) {
  const tasks = await req.json();
  await redis.set('zoe:tasks', tasks);
  return Response.json({ ok: true });
}
