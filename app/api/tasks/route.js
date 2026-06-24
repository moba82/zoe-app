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
  const newTasks = await req.json();
  const oldTasks = await redis.get('zoe:tasks') || [];
  await redis.set('zoe:tasks', newTasks);

  // Notifica Monica su WhatsApp quando Zoe completa un task
  const phone = process.env.WHATSAPP_NUMBER;
  const apikey = process.env.CALLMEBOT_APIKEY;
  if (phone && apikey) {
    const justDone = newTasks.find(t => t.done && !oldTasks.find(o => o.id === t.id && o.done));
    if (justDone) {
      const text = encodeURIComponent(`✅ Zoe ha completato: ${justDone.name}`);
      fetch(`https://api.callmebot.com/whatsapp.php?phone=${phone}&text=${text}&apikey=${apikey}`).catch(()=>{});
    }
  }

  return Response.json({ ok: true });
}
