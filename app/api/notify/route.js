import { Redis } from '@upstash/redis';
const redis = Redis.fromEnv();

export async function POST(req) {
  try {
    const { userId, title, body } = await req.json();
    const subStr = await redis.get(`zoe:push:${userId}`);
    if (!subStr) return Response.json({ ok: false, reason: 'no subscription' });

    const subscription = typeof subStr === 'string' ? JSON.parse(subStr) : subStr;
    const payload = JSON.stringify({ title, body });

    const vapidPublicKey = process.env.VAPID_PUBLIC_KEY;
    const vapidPrivateKey = process.env.VAPID_PRIVATE_KEY;

    // Manual VAPID using web-push
    const webpush = (await import('web-push')).default;
    webpush.setVapidDetails('mailto:zoeapp@example.com', vapidPublicKey, vapidPrivateKey);
    await webpush.sendNotification(subscription, payload);

    return Response.json({ ok: true });
  } catch(e) {
    return Response.json({ ok: false, error: e.message });
  }
}
