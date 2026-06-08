const ICAL_URL = 'https://calendar.google.com/calendar/ical/t8pqtv2g5fipifd3oh0vu66tmo%40group.calendar.google.com/private-9cedf10cdc4b8df897e578109e86bb97/basic.ics';

function getIcon(name) {
  const n = name.toLowerCase();
  if (n.includes('equitaz') || n.includes('cavall')) return '🐎';
  if (n.includes('clarinet') || n.includes('music') || n.includes('solfeg')) return '🎵';
  if (n.includes('gatt')) return '🐈';
  return '🦦';
}

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const day = searchParams.get('day') || 'oggi';

  try {
    const res = await fetch(ICAL_URL, { cache: 'no-store' });
    const raw = await res.text();

    // Normalizza line endings e unfold righe continuate
    const text = raw.replace(/\r\n/g, '\n').replace(/\r/g, '\n').replace(/\n[ \t]/g, '');

    const now = new Date();
    const target = new Date(now);
    if (day === 'domani') target.setDate(target.getDate() + 1);
    // Usa ora italiana (UTC+2)
    const itOffset = 2 * 60 * 60000;
    const itTarget = new Date(target.getTime() + itOffset);
    const targetStr = itTarget.toISOString().slice(0, 10).replace(/-/g, '');

    const events = [];
    const blocks = text.split('BEGIN:VEVENT');

    for (const block of blocks.slice(1)) {
      const lines = {};
      for (const line of block.split('\n')) {
        const sep = line.indexOf(':');
        if (sep < 0) continue;
        const key = line.slice(0, sep).split(';')[0].trim().toUpperCase();
        const val = line.slice(sep + 1).trim();
        lines[key] = val;
      }

      const summary = lines['SUMMARY'];
      const dtRaw = lines['DTSTART'];
      if (!summary || !dtRaw) continue;

      // Estrai data: 20260608 o 20260608T143000Z o 20260608T143000
      const dateOnly = dtRaw.replace(/T.*/, '');
      if (dateOnly === targetStr) {
        let time = '--:--';
        if (dtRaw.includes('T')) {
          const t = dtRaw.slice(9, 13);
          const h = parseInt(t.slice(0, 2));
          const m = t.slice(2, 4);
          // Se UTC (finisce Z), aggiungi +2
          const finalH = dtRaw.endsWith('Z') ? (h + 2) % 24 : h;
          time = `${String(finalH).padStart(2, '0')}:${m}`;
        }
        events.push({ name: summary, icon: getIcon(summary), time });
      }
    }

    events.sort((a, b) => a.time.localeCompare(b.time));
    return Response.json(events);
  } catch (e) {
    return Response.json({ error: e.message });
  }
}
