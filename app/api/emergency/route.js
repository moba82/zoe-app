import { Redis } from '@upstash/redis';
const redis = Redis.fromEnv();

export async function POST(req) {
  const { msg } = await req.json();
  const time = new Date().toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' });
  // Salva su Redis
  const msgs = await redis.get('zoe:emergency') || [];
  msgs.push({ msg, time });
  await redis.set('zoe:emergency', msgs);
  // Invia WhatsApp via CallMeBot
  const phone = process.env.WHATSAPP_NUMBER;
  const apikey = process.env.CALLMEBOT_APIKEY;
  if (phone && apikey) {
    const text = encodeURIComponent(`📞 Zoe ti scrive (${time}): ${msg}`);
    await fetch(`https://api.callmebot.com/whatsapp.php?phone=${phone}&text=${text}&apikey=${apikey}`);
  }
  return Response.json({ ok: true });
}

export async function GET() {
  const msgs = await redis.get('zoe:emergency') || [];
  await redis.set('zoe:emergency', []);
  return Response.json(msgs);
}
