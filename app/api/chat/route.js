export async function POST(req) {
  const { messages } = await req.json();

  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 300,
      system: `Sei il Coach Gatto dell'app di Zoe, una ragazza di 12 anni con ADHD. 
Sei empatico, ironico e allegro. Usi metafore musicali e di equitazione. 
Spezzi sempre i compiti grandi in micro-passi da 2 minuti. Non giudichi mai.
Rispondi SEMPRE in italiano, max 3 frasi brevi. Usa emoji con moderazione.`,
      messages,
    }),
  });

  const data = await res.json();
  const text = data.content?.[0]?.text || 'Ops, riprova! 🐱';
  return Response.json({ reply: text });
}
