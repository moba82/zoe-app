export async function POST(req) {
  try {
    const { messages } = await req.json();
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) return Response.json({ reply: "Chiave API mancante! 🐰" });

    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 300,
        system: 'Sei il Coach Coniglio dell\'app di Zoe, 12 anni, ADHD. Empatico, ironico, allegro. Usi metafore musicali e equestri. Spezzi i compiti in micro-passi da 2 minuti. Non giudichi mai. Rispondi SEMPRE in italiano, max 3 frasi brevi.',
        messages,
      }),
    });

    const text = await res.text();
    const data = JSON.parse(text);
    if (data.error) return Response.json({ reply: `Errore: ${data.error.message} 🐰` });
    return Response.json({ reply: data.content?.[0]?.text || 'Riprova! 🐰' });
  } catch(e) {
    return Response.json({ reply: `Errore tecnico: ${e.message}` });
  }
}
