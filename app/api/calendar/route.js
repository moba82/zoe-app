const ICAL_URL = 'https://calendar.google.com/calendar/ical/t8pqtv2g5fipifd3oh0vu66tmo%40group.calendar.google.com/private-9cedf10cdc4b8df897e578109e86bb97/basic.ics';

function getIcon(name) {
  const n = name.toLowerCase();
  if (n.includes('equitaz') || n.includes('cavall') || n.includes('horse')) return '🐎';
  if (n.includes('clarinet') || n.includes('music') || n.includes('solfeg') || n.includes('concert')) return '🎵';
  if (n.includes('gatt') || n.includes('cat')) return '🐈';
  return '🦦';
}

function parseDate(val) {
  // DTSTART;TZID=...:20260608T143000 or DTSTART:20260608T143000Z or DTSTART;VALUE=DATE:20260608
  const clean = val.split(':').pop();
  if (clean.length === 8) { // all day: 20260608
    return new Date(clean.slice(0,4), clean.slice(4,6)-1, clean.slice(6,8));
  }
  const y=clean.slice(0,4), mo=clean.slice(4,6)-1, d=clean.slice(6,8);
  const h=clean.slice(9,11), mi=clean.slice(11,13);
  return new Date(y, mo, d, h, mi);
}

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const day = searchParams.get('day') || 'oggi';

  try {
    const res = await fetch(ICAL_URL, { next: { revalidate: 300 } });
    const text = await res.text();

    const now = new Date();
    const target = new Date(now);
    if (day === 'domani') target.setDate(target.getDate() + 1);
    const targetDate = target.toISOString().slice(0, 10).replace(/-/g, '');

    const events = [];
    const blocks = text.split('BEGIN:VEVENT');
    for (const block of blocks.slice(1)) {
      const summary = (block.match(/SUMMARY:(.+)/) || [])[1]?.trim();
      const dtLine = (block.match(/DTSTART[^:]*:(.+)/) || [])[0];
      if (!summary || !dtLine) continue;
      const dt = parseDate(dtLine);
      const dtStr = dt.toISOString().slice(0,10).replace(/-/g,'');
      if (dtStr === targetDate) {
        events.push({
          name: summary,
          icon: getIcon(summary),
          time: dt.toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' }),
        });
      }
    }
    events.sort((a, b) => a.time.localeCompare(b.time));
    return Response.json(events);
  } catch {
    return Response.json([]);
  }
}
