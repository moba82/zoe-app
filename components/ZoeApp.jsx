"use client";

import { useState, useRef, useEffect } from "react";

const C = {
  mintBg: "#E8F8F1", mintLight: "#C8EFD8", mint: "#A8DFC4",
  mintDark: "#5BBC8A", mintDeep: "#3A9E70",
  pinkLight: "#FFE4EE", pink: "#FFB7CC", pinkDark: "#FF85A8", pinkDeep: "#E8507A",
  yellow: "#FFF5C0", white: "#FFFFFF",
  textDark: "#2A3B2C", textMed: "#5A6E5C", textLight: "#9EB09F",
  red: "#FF5252",
};

const CONFETTI_COLORS = [
  C.mint, C.pink, C.yellow, C.pinkDark, C.mintDark,
  "#FFD700", "#FF6B9D", "#A8E6CF", "#FF8B94", "#B8F0E6",
];
const SHAPES = ["50%", "50%", "2px", "2px", "50% 0", "0 50%"];

function KawaiiTea({ level }) {
  const h = 72, fillH = (h * level) / 100, fillY = 36 + (h - fillH);
  const happy = level >= 100, med = level >= 50;
  return (
    <div style={{ position: "relative", width: 80 }}>
      {level > 60 && (
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          {[{ x: -8, y: 8, s: 14 }, { x: 72, y: 20, s: 12 }, { x: 64, y: 72, s: 10 }, { x: -4, y: 60, s: 11 }].map((sp, i) => (
            <span key={i} style={{
              position: "absolute", left: sp.x, top: sp.y, fontSize: sp.s,
              animation: `sparkle 1.5s ease-in-out ${i * 0.3}s infinite alternate`,
            }}>✨</span>
          ))}
        </div>
      )}
      <style>{`
        @keyframes sparkle { from{opacity:0.3;transform:scale(0.8)} to{opacity:1;transform:scale(1.2)} }
      `}</style>
      <svg width={80} height={140} viewBox="0 0 80 140">
        <rect x={32} y={0} width={11} height={40} rx={5.5} fill={C.pinkDark} />
        <rect x={32} y={5} width={4} height={35} rx={2} fill={C.pink} opacity={0.5} />
        <path d="M7,38 Q5,43 4,118 Q4,128 40,128 Q76,128 76,118 Q75,43 73,38 Z" fill={C.mintLight} />
        <clipPath id="tc"><path d="M7,38 Q5,43 4,118 Q4,128 40,128 Q76,128 76,118 Q75,43 73,38 Z" /></clipPath>
        <rect x={0} y={fillY} width={80} height={fillH + 35} fill={C.mint} clipPath="url(#tc)"
          style={{ transition: "y 0.7s cubic-bezier(.34,1.56,.64,1)" }} />
        {level > 12 && <circle cx={20} cy={116} r={7} fill={C.pinkDark} opacity={0.85} clipPath="url(#tc)" />}
        {level > 25 && <circle cx={40} cy={121} r={6} fill={C.pinkDark} opacity={0.85} clipPath="url(#tc)" />}
        {level > 40 && <circle cx={58} cy={115} r={8} fill={C.mintDark} opacity={0.75} clipPath="url(#tc)" />}
        {level > 55 && <circle cx={30} cy={110} r={5} fill={C.pink} opacity={0.8} clipPath="url(#tc)" />}
        {level > 70 && <circle cx={52} cy={108} r={6} fill={C.pinkDark} opacity={0.7} clipPath="url(#tc)" />}
        <rect x={3} y={33} width={74} height={12} rx={6} fill={C.pinkDark} />
        <rect x={8} y={35} width={40} height={4} rx={2} fill={C.pink} opacity={0.5} />
        {happy ? (
          <>
            <path d="M23,70 Q29,63 35,70" fill="none" stroke={C.textDark} strokeWidth={2.5} strokeLinecap="round" />
            <path d="M45,70 Q51,63 57,70" fill="none" stroke={C.textDark} strokeWidth={2.5} strokeLinecap="round" />
          </>
        ) : (
          <>
            <ellipse cx={29} cy={72} rx={7} ry={8} fill="white" />
            <ellipse cx={51} cy={72} rx={7} ry={8} fill="white" />
            <circle cx={30} cy={73} r={5} fill={C.textDark} />
            <circle cx={52} cy={73} r={5} fill={C.textDark} />
            <circle cx={32} cy={70} r={2} fill="white" />
            <circle cx={54} cy={70} r={2} fill="white" />
          </>
        )}
        <ellipse cx={18} cy={82} rx={8} ry={5} fill={C.pink} opacity={0.45} />
        <ellipse cx={62} cy={82} rx={8} ry={5} fill={C.pink} opacity={0.45} />
        {happy
          ? <path d="M30,86 Q40,96 50,86" fill="none" stroke={C.textDark} strokeWidth={2.5} strokeLinecap="round" />
          : med
            ? <path d="M32,87 Q40,93 48,87" fill="none" stroke={C.textDark} strokeWidth={2} strokeLinecap="round" />
            : <path d="M34,88 Q40,86 46,88" fill="none" stroke={C.textDark} strokeWidth={2} strokeLinecap="round" />
        }
        <text x={40} y={110} textAnchor="middle" fontSize={11} fontWeight={900}
          fill={level > 55 ? "white" : C.mintDeep} fontFamily="Nunito,sans-serif">{level}%</text>
      </svg>
    </div>
  );
}

function CoachAvatar({ mood }) {
  const cel = mood === "celebrating";
  return (
    <svg width={90} height={92} viewBox="0 0 90 92">
      <polygon points="11,37 21,9 36,34" fill={C.mintDark} />
      <polygon points="16,34 22,15 33,32" fill={C.pinkDark} />
      <polygon points="54,34 69,9 79,37" fill={C.mintDark} />
      <polygon points="57,32 68,15 74,34" fill={C.pinkDark} />
      <circle cx={45} cy={54} r={35} fill={C.mint} />
      <ellipse cx={38} cy={44} rx={20} ry={15} fill="white" opacity={0.18} />
      <ellipse cx={31} cy={51} rx={11} ry={12} fill="white" />
      <ellipse cx={59} cy={51} rx={11} ry={12} fill="white" />
      {cel ? (
        <>
          <path d="M22,47 Q31,39 40,47" fill="none" stroke="#1A2E1A" strokeWidth={3.5} strokeLinecap="round" />
          <path d="M50,47 Q59,39 68,47" fill="none" stroke="#1A2E1A" strokeWidth={3.5} strokeLinecap="round" />
        </>
      ) : (
        <>
          <circle cx={32} cy={52} r={7.5} fill="#1A2E1A" />
          <circle cx={60} cy={52} r={7.5} fill="#1A2E1A" />
          <circle cx={35} cy={48} r={3} fill="white" />
          <circle cx={63} cy={48} r={3} fill="white" />
          <circle cx={30} cy={55} r={1.3} fill="white" opacity={0.45} />
          <circle cx={58} cy={55} r={1.3} fill="white" opacity={0.45} />
        </>
      )}
      <path d="M42,63 L45,59 L48,63 Q45,68 42,63 Z" fill={C.pinkDark} />
      {cel
        ? <path d="M32,71 Q45,83 58,71" fill="none" stroke={C.mintDeep} strokeWidth={2.5} strokeLinecap="round" />
        : <path d="M36,70 Q45,77 54,70" fill="none" stroke={C.mintDeep} strokeWidth={2} strokeLinecap="round" />
      }
      <line x1={4} y1={61} x2={28} y2={64} stroke={C.mintDeep} strokeWidth={1.2} opacity={0.35} strokeLinecap="round" />
      <line x1={4} y1={68} x2={28} y2={67} stroke={C.mintDeep} strokeWidth={1.2} opacity={0.35} strokeLinecap="round" />
      <line x1={62} y1={64} x2={86} y2={61} stroke={C.mintDeep} strokeWidth={1.2} opacity={0.35} strokeLinecap="round" />
      <line x1={62} y1={67} x2={86} y2={68} stroke={C.mintDeep} strokeWidth={1.2} opacity={0.35} strokeLinecap="round" />
      <circle cx={18} cy={62} r={10} fill={C.pink} opacity={0.35} />
      <circle cx={72} cy={62} r={10} fill={C.pink} opacity={0.35} />
    </svg>
  );
}

function ConfettiBlast({ active }) {
  const pieces = useRef(
    Array.from({ length: 45 }, (_, i) => ({
      x: 15 + Math.random() * 70,
      color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
      shape: SHAPES[Math.floor(Math.random() * SHAPES.length)],
      size: 7 + Math.random() * 7,
      vx: (Math.random() - 0.5) * 200,
      vy: -120 - Math.random() * 160,
      delay: (Math.random() * 0.25).toFixed(2),
      rot: Math.random() * 360,
    }))
  ).current;
  if (!active) return null;
  return (
    <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 300 }}>
      <style>{`
        @keyframes burst {
          0%   { transform: translate(0,0) rotate(0deg) scale(1); opacity: 1; }
          60%  { opacity: 1; }
          100% { transform: translate(var(--vx), var(--vy)) rotate(720deg) scale(0.3); opacity: 0; }
        }
        @keyframes celebText {
          0%   { transform: scale(0); opacity: 0; }
          25%  { transform: scale(1.2); opacity: 1; }
          70%  { transform: scale(1); opacity: 1; }
          100% { transform: scale(0.8) translateY(-30px); opacity: 0; }
        }
      `}</style>
      {pieces.map((p, i) => (
        <div key={i} style={{
          position: "absolute", left: `${p.x}%`, top: "55%",
          width: p.size, height: p.size, background: p.color,
          borderRadius: p.shape,
          "--vx": `${p.vx}px`, "--vy": `${p.vy}px`,
          animation: `burst 1.6s ease-out ${p.delay}s forwards`,
          transform: `rotate(${p.rot}deg)`,
        }} />
      ))}
      <div style={{
        position: "fixed", top: "28%", left: 0, right: 0,
        textAlign: "center", fontSize: 32, fontWeight: 900,
        color: C.mintDeep, fontFamily: "'Nunito', sans-serif",
        textShadow: `0 2px 0 ${C.pinkDark}`,
        animation: "celebText 1.8s ease-out forwards",
        zIndex: 301,
      }}>
        BRAVISSIMA! ⭐
      </div>
    </div>
  );
}

function Toggle({ value, onChange }) {
  return (
    <div onClick={() => onChange(!value)} style={{
      width: 52, height: 28, borderRadius: 14,
      background: value ? C.mintDark : "#CCC",
      position: "relative", cursor: "pointer", transition: "background 0.3s",
    }}>
      <div style={{
        position: "absolute", top: 3, left: value ? 26 : 3,
        width: 22, height: 22, borderRadius: "50%", background: "white",
        transition: "left 0.3s", boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
      }} />
    </div>
  );
}

const CAPYMESSAGES = (level, done, total) => {
  if (level === 0) return ["Buongiorno Zoe! 🌸", "Da dove partiamo oggi? Anche una sola cosa conta!"];
  if (level < 25) return ["Ottima partenza! 🎵", `${done} su ${total} già fatte. Come una nota che rompe il silenzio!`];
  if (level < 55) return ["Stai cavalcando forte! 🐎", "Sei a metà strada. Il bubble tea sta salendo!"];
  if (level < 100) return ["Quasi ci sei! 🧋", `Solo ${total - done} ancora. Forza, il bicchiere si sta riempiendo!`];
  return ["TUTTO FATTO! 🎉", "Sei una super star! Il telefono è tuo — goditi la libertà! 🌟"];
};

const INIT_TASKS = [
  { id: 1, icon: "🌅", name: "Svegliarsi", done: true, doneTime: "07:10", essential: true },
  { id: 2, icon: "🦷", name: "Lavarsi i denti", done: true, doneTime: "07:42", essential: true },
  { id: 3, icon: "🥣", name: "Colazione", done: false, essential: true },
  { id: 4, icon: "🎒", name: "Zaino pronto", done: false, essential: true },
  { id: 5, icon: "🛏️", name: "Fare il letto", done: false, essential: false },
  { id: 6, icon: "🎵", name: "Clarinetto (20 min)", done: false, essential: false },
];

const EVENTS = [
  { time: "14:30", name: "Equitazione", icon: "🐎" },
  { time: "17:00", name: "Clarinetto", icon: "🎵" },
];

export default function ZoeApp() {
  const [view, setView] = useState("zoe");
  const [day, setDay] = useState("oggi");
  const [tasks, setTasks] = useState(INIT_TASKS);
  const [vacation, setVacation] = useState(false);
  const [confetti, setConfetti] = useState(false);
  const [newTask, setNewTask] = useState("");
  const [emergencyOpen, setEmergencyOpen] = useState(false);
  const [emergencyMsg, setEmergencyMsg] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch('/api/tasks').then(r => r.json()),
      fetch('/api/vacation').then(r => r.json()),
    ]).then(([t, v]) => {
      if (t?.length) setTasks(t);
      setVacation(v.vacation);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  const saveTasks = (newTasks) => {
    setTasks(newTasks);
    fetch('/api/tasks', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(newTasks) });
  };

  const saveVacation = (val) => {
    setVacation(val);
    fetch('/api/vacation', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ vacation: val }) });
  };

  const [calEvents, setCalEvents] = useState([]);

  useEffect(() => {
    fetch(`/api/calendar?day=${day}`)
      .then(r => r.json())
      .then(setCalEvents)
      .catch(() => {});
  }, [day]);
  const total = tasks.length;
  const level = Math.round((done / total) * 100);
  const essentialsDone = tasks.filter(t => t.essential && !t.done).length === 0;
  const [capyTitle, capyMsg] = CAPYMESSAGES(level, done, total);
  const capyMood = level === 100 ? "celebrating" : "neutral";

  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState("");
  const [chatLoading, setChatLoading] = useState(false);

  const sendChat = async () => {
    if (!chatInput.trim() || chatLoading) return;
    const userMsg = { role: "user", content: chatInput };
    const newMessages = [...chatMessages, userMsg];
    setChatMessages(newMessages);
    setChatInput("");
    setChatLoading(true);
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: newMessages }),
    });
    const data = await res.json();
    setChatMessages(prev => [...prev, { role: "assistant", content: data.reply }]);
    setChatLoading(false);
  };
    const t = tasks.find(t => t.id === id);
    if (!t || t.done) return;
    const updated = tasks.map(t => t.id === id
      ? { ...t, done: true, doneTime: new Date().toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" }) }
      : t
    );
    saveTasks(updated);
    setConfetti(true);
    setTimeout(() => setConfetti(false), 2000);
  };

  const removeTask = (id) => saveTasks(tasks.filter(t => t.id !== id));
  const addTask = () => {
    if (!newTask.trim()) return;
    saveTasks([...tasks, { id: Date.now(), icon: "🐱", name: newTask.trim(), done: false, essential: false }]);
    setNewTask("");
  };

  return (
    <div style={{ fontFamily: "'Nunito', sans-serif", background: C.mintBg, minHeight: "100vh", maxWidth: 430, margin: "0 auto" }}>
      {loading && (
        <div style={{ position: "fixed", inset: 0, background: C.mintBg, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 999, fontSize: 48 }}>
          🧋
        </div>
      )}
      <ConfettiBlast active={confetti} />

      {/* HEADER */}
      <div style={{
        background: `linear-gradient(135deg, ${C.mint} 0%, ${C.pink} 100%)`,
        padding: "18px 18px 0", borderRadius: "0 0 28px 28px",
        boxShadow: "0 4px 20px rgba(168,223,196,0.4)",
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={() => setView("zoe")} style={{
              padding: "8px 18px", borderRadius: 20, border: "none",
              background: view === "zoe" ? C.white : "rgba(255,255,255,0.35)",
              color: C.mintDeep, fontWeight: 900, fontSize: 14, cursor: "pointer",
              fontFamily: "'Nunito', sans-serif",
              boxShadow: view === "zoe" ? "0 3px 10px rgba(0,0,0,0.12)" : "none",
              transition: "all 0.25s",
            }}>🐴 Zoe</button>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <button onClick={() => setView(view === "mom" ? "zoe" : "mom")} style={{
              background: "transparent", border: "none", cursor: "pointer",
              fontSize: 18, opacity: 0.35, padding: "4px 6px", lineHeight: 1,
              color: "white",
            }}>♡</button>
            <span style={{ fontSize: 28 }}>🧋</span>
          </div>
        </div>
        {view === "zoe" && (
          <div style={{ display: "flex" }}>
            {[["oggi", "📅 Oggi"], ["domani", "🌙 Domani"]].map(([d, label]) => (
              <button key={d} onClick={() => setDay(d)} style={{
                flex: 1, padding: "12px 0", border: "none", cursor: "pointer",
                background: day === d ? C.white : "transparent",
                borderRadius: day === d ? "16px 16px 0 0" : 0,
                color: day === d ? C.mintDeep : "rgba(255,255,255,0.85)",
                fontWeight: 900, fontSize: 15, fontFamily: "'Nunito', sans-serif",
                transition: "all 0.25s",
              }}>{label}</button>
            ))}
          </div>
        )}
        {view === "mom" && <div style={{ height: 14 }} />}
      </div>

      <div style={{ padding: 16 }}>

        {view === "zoe" && (
          <>
            {/* COACH */}
            <div style={{
              background: C.white, borderRadius: 24, padding: "16px 20px",
              marginBottom: 14, display: "flex", alignItems: "flex-start", gap: 14,
              boxShadow: "0 4px 24px rgba(91,188,138,0.13)",
              border: `2px solid ${C.mintLight}`,
            }}>
              <div style={{ flexShrink: 0, marginTop: 4 }}>
                <CoachAvatar mood={capyMood} />
              </div>
              <div style={{ flex: 1, position: "relative" }}>
                <div style={{
                  background: C.mintBg, borderRadius: "4px 18px 18px 18px",
                  padding: "12px 14px", border: `1.5px solid ${C.mintLight}`,
                }}>
                  <div style={{ fontWeight: 900, fontSize: 14, color: C.mintDeep, marginBottom: 4 }}>{capyTitle}</div>
                  <div style={{ fontSize: 13, color: C.textMed, lineHeight: 1.5 }}>{capyMsg}</div>
                </div>
                {/* Messaggi chat */}
                {chatMessages.length > 0 && (
                  <div style={{ marginTop: 8, maxHeight: 160, overflowY: "auto", display: "flex", flexDirection: "column", gap: 6 }}>
                    {chatMessages.map((m, i) => (
                      <div key={i} style={{
                        alignSelf: m.role === "user" ? "flex-end" : "flex-start",
                        background: m.role === "user" ? C.mintDark : C.white,
                        color: m.role === "user" ? "white" : C.textDark,
                        padding: "7px 12px", borderRadius: 14, fontSize: 13,
                        maxWidth: "85%", border: m.role === "assistant" ? `1px solid ${C.mintLight}` : "none",
                      }}>{m.content}</div>
                    ))}
                    {chatLoading && <div style={{ fontSize: 20, alignSelf: "flex-start" }}>🐱💭</div>}
                  </div>
                )}
                {/* Input */}
                <div style={{ display: "flex", gap: 6, marginTop: 8 }}>
                  <input
                    value={chatInput}
                    onChange={e => setChatInput(e.target.value)}
                    onKeyDown={e => e.key === "Enter" && sendChat()}
                    placeholder="Scrivi al coach..."
                    style={{
                      flex: 1, padding: "8px 12px", borderRadius: 12,
                      border: `1.5px solid ${C.mintLight}`, outline: "none",
                      fontFamily: "'Nunito', sans-serif", fontSize: 13,
                    }}
                  />
                  <button onClick={sendChat} disabled={chatLoading} style={{
                    padding: "8px 14px", borderRadius: 12, border: "none",
                    background: C.mintDark, color: "white", fontWeight: 900,
                    cursor: "pointer", fontSize: 16,
                  }}>→</button>
                </div>
                <div style={{
                  position: "absolute", left: -10, top: 14, width: 0, height: 0,
                  borderTop: "8px solid transparent", borderBottom: "8px solid transparent",
                  borderRight: `10px solid ${C.mintLight}`,
                }} />
                <div style={{
                  position: "absolute", left: -8, top: 16, width: 0, height: 0,
                  borderTop: "6px solid transparent", borderBottom: "6px solid transparent",
                  borderRight: `8px solid ${C.mintBg}`,
                }} />
              </div>
            </div>

            {/* BUBBLE TEA */}
            <div style={{
              background: C.white, borderRadius: 24, padding: "16px 20px",
              display: "flex", alignItems: "center", gap: 16,
              marginBottom: 14, boxShadow: "0 4px 24px rgba(91,188,138,0.13)",
            }}>
              <KawaiiTea level={level} />
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 900, fontSize: 24, color: C.textDark }}>
                  {done} <span style={{ fontSize: 16, color: C.textLight }}>/ {total}</span>
                </div>
                <div style={{ color: C.textMed, fontSize: 13, marginBottom: 10 }}>
                  {level === 100 ? "🏆 Ricompensa sbloccata!" : "compiti completati"}
                </div>
                <div style={{ background: C.mintLight, borderRadius: 8, height: 12, overflow: "hidden" }}>
                  <div style={{
                    background: `linear-gradient(90deg, ${C.mintDark}, ${C.pinkDark})`,
                    width: `${level}%`, height: "100%", transition: "width 0.5s ease", borderRadius: 8,
                  }} />
                </div>
                <div style={{ marginTop: 8 }}>
                  {(!vacation && !essentialsDone)
                    ? <span style={{ fontSize: 11, fontWeight: 800, color: C.red, background: "#FFF0F0", padding: "3px 10px", borderRadius: 8 }}>🔒 Social bloccati</span>
                    : <span style={{ fontSize: 11, fontWeight: 800, color: C.mintDeep, background: C.mintLight, padding: "3px 10px", borderRadius: 8 }}>✅ Telefono libero</span>
                  }
                </div>
              </div>
            </div>

            {/* CALENDARIO */}
            {calEvents.length > 0 && (
              <div style={{ marginBottom: 14 }}>
                <div style={{ fontSize: 11, fontWeight: 800, color: C.textLight, textTransform: "uppercase", letterSpacing: 1.2, marginBottom: 8 }}>
                  Oggi nel calendario
                </div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {calEvents.map((e, i) => (
                    <div key={i} style={{ background: C.pinkLight, borderRadius: 14, padding: "8px 14px", display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ fontSize: 22 }}>{e.icon}</span>
                      <div>
                        <div style={{ fontWeight: 800, fontSize: 13, color: C.textDark }}>{e.name}</div>
                        <div style={{ fontSize: 11, color: C.pinkDeep, fontWeight: 700 }}>{e.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TASKS */}
            <div style={{ fontSize: 11, fontWeight: 800, color: C.textLight, textTransform: "uppercase", letterSpacing: 1.2, marginBottom: 10 }}>
              I tuoi compiti di oggi
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {tasks.map(task => (
                <button key={task.id} onClick={() => completeTask(task.id)} style={{
                  background: task.done ? `linear-gradient(135deg, ${C.mintLight}, ${C.pinkLight})` : C.white,
                  border: `2px solid ${task.done ? C.mintDark : C.mintLight}`,
                  borderRadius: 18, padding: "13px 16px",
                  display: "flex", alignItems: "center", gap: 12,
                  cursor: task.done ? "default" : "pointer",
                  boxShadow: task.done ? "none" : "0 3px 14px rgba(0,0,0,0.07)",
                  transition: "all 0.3s", textAlign: "left", width: "100%",
                }}>
                  <div style={{
                    width: 42, height: 42, borderRadius: "50%", flexShrink: 0,
                    background: task.done ? C.mintDark : C.mintLight,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: task.done ? 20 : 22, transition: "all 0.3s",
                    color: task.done ? "white" : "inherit",
                  }}>
                    {task.done ? "✓" : task.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontWeight: 800, fontSize: 15,
                      color: task.done ? C.textMed : C.textDark,
                      textDecoration: task.done ? "line-through" : "none",
                    }}>{task.name}</div>
                    {task.done && task.doneTime && (
                      <div style={{ fontSize: 11, color: C.mintDeep, fontWeight: 700, marginTop: 2 }}>✓ fatto alle {task.doneTime}</div>
                    )}
                    {task.essential && !task.done && (
                      <div style={{ fontSize: 10, color: C.pinkDeep, fontWeight: 800, marginTop: 2 }}>⚡ fondamentale</div>
                    )}
                  </div>
                  {!task.done && (
                    <div style={{
                      background: `linear-gradient(135deg, ${C.mint}, ${C.mintDark})`,
                      borderRadius: 10, padding: "5px 12px",
                      fontSize: 12, fontWeight: 900, color: "white",
                    }}>Fatto!</div>
                  )}
                </button>
              ))}
            </div>

            {/* PARLA CON MAMMA — quasi nascosto */}
            <div style={{ textAlign: "center", marginTop: 28, paddingBottom: 24 }}>
              <button onClick={() => setEmergencyOpen(!emergencyOpen)} style={{
                background: "transparent", border: `1px solid ${C.pink}`,
                color: C.textLight, fontSize: 12, fontWeight: 700,
                padding: "6px 18px", borderRadius: 20, cursor: "pointer",
                fontFamily: "'Nunito', sans-serif",
              }}>📞 parla con la mamma</button>
              {emergencyOpen && (
                <div style={{
                  marginTop: 10, background: C.white, borderRadius: 16, padding: 14,
                  border: `1.5px solid ${C.pink}`, textAlign: "left",
                }}>
                  <div style={{ display: "flex", gap: 8 }}>
                    <input
                      value={emergencyMsg}
                      onChange={e => setEmergencyMsg(e.target.value)}
                      placeholder="Scrivi alla mamma..."
                      style={{
                        flex: 1, padding: "9px 13px", borderRadius: 11,
                        border: `1.5px solid ${C.pink}`, outline: "none",
                        fontFamily: "'Nunito', sans-serif", fontSize: 13,
                      }}
                    />
                    <button style={{
                      padding: "9px 14px", borderRadius: 11, border: "none",
                      background: C.pinkDark, color: "white", fontWeight: 900, cursor: "pointer",
                    }}>→</button>
                  </div>
                </div>
              )}
            </div>
          </>
        )}

        {/* MOM VIEW */}
        {view === "mom" && (
          <>
            <div style={{ background: vacation ? `linear-gradient(135deg, ${C.yellow}, #FFD93D)` : C.white, borderRadius: 20, padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16, boxShadow: "0 4px 20px rgba(0,0,0,0.08)", transition: "background 0.4s" }}>
              <div>
                <div style={{ fontWeight: 900, fontSize: 16, color: C.textDark }}>{vacation ? "🏖️ Vacation Mode ATTIVO" : "🔒 Sistema blocco attivo"}</div>
                <div style={{ fontSize: 12, color: C.textMed, marginTop: 3 }}>{vacation ? "Tutti i blocchi sono disattivati" : "Zoe deve completare i fondamentali"}</div>
              </div>
              <Toggle value={vacation} onChange={saveVacation} />
            </div>

            <div style={{ background: C.white, borderRadius: 20, padding: "16px 20px", marginBottom: 16, boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
              <div style={{ fontWeight: 900, fontSize: 15, color: C.textDark, marginBottom: 12 }}>📊 Storico di oggi</div>
              {tasks.map(task => (
                <div key={task.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "9px 0", borderBottom: `1px solid ${C.mintLight}` }}>
                  <span style={{ fontSize: 14, color: C.textMed, fontWeight: 600 }}>{task.icon} {task.name}{task.essential && <span style={{ fontSize: 10, color: C.pinkDeep, marginLeft: 4 }}>⚡</span>}</span>
                  <span style={{ fontSize: 13, fontWeight: 800, color: task.done ? C.mintDeep : C.textLight }}>{task.done ? `✓ ${task.doneTime}` : "—"}</span>
                </div>
              ))}
              <div style={{ marginTop: 12, padding: "10px 14px", background: (!vacation && !essentialsDone) ? "#FFF0F0" : C.mintLight, borderRadius: 12, fontWeight: 800, fontSize: 13, color: (!vacation && !essentialsDone) ? C.red : C.mintDeep }}>
                {vacation ? "🏖️ Vacation mode — telefono libero" : essentialsDone ? "✅ Fondamentali completati — telefono libero" : "🔒 Fondamentali incompleti — social bloccati"}
              </div>
            </div>

            <div style={{ background: C.white, borderRadius: 20, padding: "16px 20px", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
              <div style={{ fontWeight: 900, fontSize: 15, color: C.textDark, marginBottom: 12 }}>✏️ Modifica compiti</div>
              <div style={{ display: "flex", gap: 8, marginBottom: 14 }}>
                <input value={newTask} onChange={e => setNewTask(e.target.value)} onKeyDown={e => e.key === "Enter" && addTask()} placeholder="Aggiungi compito..." style={{ flex: 1, padding: "10px 14px", borderRadius: 12, border: `2px solid ${C.mintLight}`, outline: "none", fontFamily: "'Nunito', sans-serif", fontSize: 14, color: C.textDark }} />
                <button onClick={addTask} style={{ padding: "10px 18px", borderRadius: 12, border: "none", background: C.mintDark, color: "white", fontWeight: 900, fontSize: 20, cursor: "pointer" }}>+</button>
              </div>
              {tasks.map(task => (
                <div key={task.id} style={{ display: "flex", alignItems: "center", gap: 10, background: C.mintBg, borderRadius: 12, padding: "10px 12px", marginBottom: 8 }}>
                  <span style={{ fontSize: 18 }}>{task.icon}</span>
                  <span style={{ flex: 1, fontSize: 14, fontWeight: 700, color: C.textDark }}>{task.name}</span>
                  {task.essential && <span style={{ fontSize: 10, fontWeight: 800, color: C.pinkDeep, background: C.pinkLight, padding: "2px 7px", borderRadius: 6 }}>fondamentale</span>}
                  <button onClick={() => removeTask(task.id)} style={{ background: C.pinkLight, border: "none", borderRadius: 8, padding: "4px 10px", cursor: "pointer", color: C.pinkDeep, fontWeight: 900, fontSize: 14 }}>✕</button>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 16, padding: "12px 16px", background: C.mintLight, borderRadius: 14, fontSize: 12, fontWeight: 700, color: C.textMed, textAlign: "center" }}>
              🔗 <code>/api/status</code> → <strong>{(!vacation && !essentialsDone) ? "blocked: true" : "blocked: false"}</strong>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
