import { Redis } from '@upstash/redis';
const redis = Redis.fromEnv();

export async function POST(req) {
  const { subscription, userId } = await req.json();
  await redis.set(`zoe:push:${userId}`, JSON.stringify(subscription));
  return Response.json({ ok: true });
}
