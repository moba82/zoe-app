import { Redis } from '@upstash/redis';
const redis = Redis.fromEnv();

export async function GET() {
  const val = await redis.get('zoe:vacation');
  return Response.json({ vacation: val === true });
}

export async function POST(req) {
  const { vacation } = await req.json();
  await redis.set('zoe:vacation', vacation);
  return Response.json({ ok: true });
}
