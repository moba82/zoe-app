import { Redis } from '@upstash/redis';
const redis = Redis.fromEnv();

export async function GET() {
  const tasks = await redis.get('zoe:tasks') || [];
  const vacation = await redis.get('zoe:vacation');
  if (vacation) return Response.json({ blocked: false });

  // Ora italiana (UTC+2)
  const now = new Date();
  const itHour = (now.getUTCHours() + 2) % 24;
  const itMin = now.getUTCMinutes();
  const timeNum = itHour * 60 + itMin; // minuti dalla mezzanotte

  const MORNING_START = 6 * 60;   // 06:00
  const EVENING_START = 21 * 60;  // 21:00

  const morningDone = tasks.filter(t => t.period === 'mattina' && t.essential && !t.done).length === 0;
  const eveningDone = tasks.filter(t => t.period === 'sera' && t.essential && !t.done).length === 0;

  let blocked = false;
  if (timeNum >= MORNING_START && timeNum < EVENING_START && !morningDone) blocked = true;
  if (timeNum >= EVENING_START && !eveningDone) blocked = true;

  return Response.json({ blocked, itHour, morningDone, eveningDone });
}
