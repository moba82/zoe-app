const ICAL_URL = 'https://calendar.google.com/calendar/ical/t8pqtv2g5fipifd3oh0vu66tmo%40group.calendar.google.com/private-9cedf10cdc4b8df897e578109e86bb97/basic.ics';

const DAYS_IT = ['Dom','Lun','Mar','Mer','Gio','Ven','Sab'];
const MONTHS_IT = ['gen','feb','mar','apr','mag','giu','lug','ago','set','ott','nov','dic'];

function getIcon(name) {
  const n = name.toLowerCase();
  if (n.includes('equitaz') || n.includes('cavall')) return '🐎';
  if (n.includes('clarinet') || n.includes('music') || n.includes('solfeg')) return '🎵';
  if (n.includes('gatt')) return '🐈';
  return '🦦';
}

export async function GET() {
  try {
    const res = await fetch(ICAL_URL, { cache: 'no-store' });
    const raw = await res.text();
    const text = raw.replace(/\r\n/g, '\n').replace(/\r/g, '\n').replace(/\n[ \t]/g, '');

    const days = [];
    for (let i = 0; i < 3; i++) {
      const target = new Date();
      target.setDate(target.getDate() + i);
      const itTarget = new Date(target.getTime() + 2*3600000);
      const dateStr = itTarget.toISOString().slice(0,10).replace(/-/g,'');
      const label = `${DAYS_IT[target.getDay()]} ${target.getDate()} ${MONTHS_IT[target.getMonth()]}`;
      days.push({ dateStr, label, events: [] });
    }

    const blocks = text.split('BEGIN:VEVENT');
    for (const block of blocks.slice(1)) {
      const lines = {};
      for (const line of block.split('\n')) {
        const sep = line.indexOf(':');
        if (sep < 0) continue;
        const key = line.slice(0, sep).split(';')[0].trim().toUpperCase();
        lines[key] = line.slice(sep + 1).trim();
      }
      const summary = lines['SUMMARY'];
      const dtRaw = lines['DTSTART'];
      if (!summary || !dtRaw) continue;
      const dateOnly = dtRaw.replace(/T.*/,'');
      const day = days.find(d => d.dateStr === dateOnly);
      if (day) {
        let time = '';
        if (dtRaw.includes('T')) {
          const h = parseInt(dtRaw.slice(9,11));
          const m = dtRaw.slice(11,13);
          const fh = dtRaw.endsWith('Z') ? (h+2)%24 : h;
          time = `${String(fh).padStart(2,'0')}:${m}`;
        }
        day.events.push({ name: summary, icon: getIcon(summary), time });
      }
    }
    days.forEach(d => d.events.sort((a,b) => a.time.localeCompare(b.time)));
    return Response.json(days);
  } catch(e) {
    return Response.json([]);
  }
}
