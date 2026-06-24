export async function GET(req) {
  const authHeader = req.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const now = new Date();
  const itHour = (now.getUTCHours() + 2) % 24;
  const itMin = now.getUTCMinutes();

  const isMorning = itHour === 8 && itMin >= 30 && itMin < 35;
  const isEvening = itHour === 20 && itMin >= 30 && itMin < 35;

  if (!isMorning && !isEvening) return Response.json({ ok: true, skipped: true });

  const title = isMorning ? '🌅 Buongiorno Zoe!' : '🌙 Quasi ora di dormire!';
  const body = isMorning
    ? 'Hai i compiti del mattino da fare! Dai che ce la fai! 💪'
    : 'Fai i compiti della sera prima di dormire! 🌙';

  const base = process.env.NEXT_PUBLIC_APP_URL || 'https://zoe-app-iota.vercel.app';
  await fetch(`${base}/api/notify`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId: 'zoe', title, body }),
  });

  return Response.json({ ok: true, sent: true, itHour, itMin });
}
