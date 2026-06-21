import { Redis } from '@upstash/redis';
const redis = Redis.fromEnv();

export async function GET() {
  const today = new Date().toISOString().slice(0, 10);
  const lastReset = await redis.get('zoe:lastReset');

  let tasks = await redis.get('zoe:tasks') || [];

  if (lastReset !== today && tasks.length > 0) {
    tasks = tasks.map(t => ({ ...t, done: false, doneTime: null }));
    await redis.set('zoe:tasks', tasks);
    await redis.set('zoe:lastReset', today);
  }

  return Response.json(tasks);
}

export async function POST(req) {
  const tasks = await req.json();
  await redis.set('zoe:tasks', tasks);
  return Response.json({ ok: true });
}
