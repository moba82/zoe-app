import { Redis } from '@upstash/redis';
const redis = Redis.fromEnv();

export async function POST(req) {
  const { msg } = await req.json();
  const msgs = await redis.get('zoe:emergency') || [];
  msgs.push({ msg, time: new Date().toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' }) });
  await redis.set('zoe:emergency', msgs);
  return Response.json({ ok: true });
}

export async function GET() {
  const msgs = await redis.get('zoe:emergency') || [];
  await redis.set('zoe:emergency', []);
  return Response.json(msgs);
}
