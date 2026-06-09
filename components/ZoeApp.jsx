"use client";
import { useState, useRef, useEffect } from "react";

const C = {
  mintBg:"#E8F8F1",mintLight:"#C8EFD8",mint:"#A8DFC4",mintDark:"#5BBC8A",mintDeep:"#3A9E70",
  pinkLight:"#FFE4EE",pink:"#FFB7CC",pinkDark:"#FF85A8",pinkDeep:"#E8507A",
  yellow:"#FFF5C0",white:"#FFFFFF",textDark:"#2A3B2C",textMed:"#5A6E5C",textLight:"#9EB09F",red:"#FF5252",
};
const CONFETTI_COLORS=[C.mint,C.pink,C.yellow,C.pinkDark,C.mintDark,"#FFD700","#FF6B9D","#A8E6CF"];
const SHAPES=["50%","50%","2px","2px","50% 0"];

const QUOTES=[
  "\"Il segreto del successo? Iniziare.\" — anche solo con i denti! 🦷",
  "Ogni grande musicista ha fatto schifo all'inizio. Continua! 🎵",
  "I cavalli non si preoccupano di ieri. E tu? 🐎",
  "Le stelle non si scusano per aver brillato. ✨",
  "Un compito alla volta. Anche i capibara fanno così 🦦",
  "Il coraggio non è non avere paura. È fare lo stesso! 💪",
  "La perfezione è nemica del fatto. Fatto batte perfetto! ✅",
  "Anche oggi puoi sorprendere te stessa 🌸",
];

function KawaiiTea({level}){
  const h=72,fillH=(h*level)/100,fillY=36+(h-fillH);
  const happy=level>=100,med=level>=50;
  return(
    <div style={{position:"relative",width:70}}>
      {level>60&&<div style={{position:"absolute",inset:0,pointerEvents:"none"}}>
        {[{x:-6,y:6,s:11},{x:62,y:16,s:10}].map((sp,i)=>(
          <span key={i} style={{position:"absolute",left:sp.x,top:sp.y,fontSize:sp.s,animation:`sparkle 1.5s ease-in-out ${i*0.4}s infinite alternate`}}>✨</span>
        ))}
      </div>}
      <style>{`@keyframes sparkle{from{opacity:0.3;transform:scale(0.8)}to{opacity:1;transform:scale(1.2)}}`}</style>
      <svg width={70} height={125} viewBox="0 0 70 125">
        <rect x={28} y={0} width={10} height={35} rx={5} fill={C.pinkDark}/>
        <path d="M6,33 Q4,38 3,105 Q3,114 35,114 Q67,114 67,105 Q66,38 64,33 Z" fill={C.mintLight}/>
        <clipPath id="tc2"><path d="M6,33 Q4,38 3,105 Q3,114 35,114 Q67,114 67,105 Q66,38 64,33 Z"/></clipPath>
        <rect x={0} y={fillY} width={70} height={fillH+35} fill={C.mint} clipPath="url(#tc2)"/>
        {level>20&&<circle cx={17} cy={103} r={6} fill={C.pinkDark} opacity={0.85} clipPath="url(#tc2)"/>}
        {level>40&&<circle cx={35} cy={108} r={5} fill={C.pinkDark} opacity={0.85} clipPath="url(#tc2)"/>}
        {level>60&&<circle cx={52} cy={102} r={7} fill={C.mintDark} opacity={0.75} clipPath="url(#tc2)"/>}
        <rect x={2} y={29} width={66} height={10} rx={5} fill={C.pinkDark}/>
        {happy?(<>
          <path d="M20,62 Q25,56 31,62" fill="none" stroke={C.textDark} strokeWidth={2} strokeLinecap="round"/>
          <path d="M39,62 Q45,56 51,62" fill="none" stroke={C.textDark} strokeWidth={2} strokeLinecap="round"/>
        </>):(<>
          <ellipse cx={25} cy={64} rx={6} ry={7} fill="white"/>
          <ellipse cx={45} cy={64} rx={6} ry={7} fill="white"/>
          <circle cx={26} cy={65} r={4} fill={C.textDark}/>
          <circle cx={46} cy={65} r={4} fill={C.textDark}/>
          <circle cx={28} cy={62} r={1.5} fill="white"/>
          <circle cx={48} cy={62} r={1.5} fill="white"/>
        </>)}
        <ellipse cx={15} cy={73} rx={7} ry={4} fill={C.pink} opacity={0.4}/>
        <ellipse cx={55} cy={73} rx={7} ry={4} fill={C.pink} opacity={0.4}/>
        {happy?<path d="M26,78 Q35,87 44,78" fill="none" stroke={C.textDark} strokeWidth={2} strokeLinecap="round"/>
          :med?<path d="M28,79 Q35,84 42,79" fill="none" stroke={C.textDark} strokeWidth={2} strokeLinecap="round"/>
          :<path d="M30,80 Q35,78 40,80" fill="none" stroke={C.textDark} strokeWidth={2} strokeLinecap="round"/>}
        <text x={35} y={98} textAnchor="middle" fontSize={10} fontWeight={900}
          fill={level>55?"white":C.mintDeep} fontFamily="Nunito,sans-serif">{level}%</text>
      </svg>
    </div>
  );
}

function CoachAvatar({mood,small}){
  const cel=mood==="celebrating";
  const s=small?0.72:1;
  return(
    <svg width={65*s} height={66*s} viewBox="0 0 90 92">
      <polygon points="11,37 21,9 36,34" fill={C.mintDark}/>
      <polygon points="16,34 22,15 33,32" fill={C.pinkDark}/>
      <polygon points="54,34 69,9 79,37" fill={C.mintDark}/>
      <polygon points="57,32 68,15 74,34" fill={C.pinkDark}/>
      <circle cx={45} cy={54} r={35} fill={C.mint}/>
      <ellipse cx={38} cy={44} rx={20} ry={15} fill="white" opacity={0.18}/>
      <ellipse cx={31} cy={51} rx={11} ry={12} fill="white"/>
      <ellipse cx={59} cy={51} rx={11} ry={12} fill="white"/>
      {cel?(<>
        <path d="M22,47 Q31,39 40,47" fill="none" stroke="#1A2E1A" strokeWidth={3.5} strokeLinecap="round"/>
        <path d="M50,47 Q59,39 68,47" fill="none" stroke="#1A2E1A" strokeWidth={3.5} strokeLinecap="round"/>
      </>):(<>
        <circle cx={32} cy={52} r={7.5} fill="#1A2E1A"/>
        <circle cx={60} cy={52} r={7.5} fill="#1A2E1A"/>
        <circle cx={35} cy={48} r={3} fill="white"/>
        <circle cx={63} cy={48} r={3} fill="white"/>
      </>)}
      <path d="M42,63 L45,59 L48,63 Q45,68 42,63 Z" fill={C.pinkDark}/>
      {cel?<path d="M32,71 Q45,83 58,71" fill="none" stroke={C.mintDeep} strokeWidth={2.5} strokeLinecap="round"/>
        :<path d="M36,70 Q45,77 54,70" fill="none" stroke={C.mintDeep} strokeWidth={2} strokeLinecap="round"/>}
      <line x1={4} y1={61} x2={28} y2={64} stroke={C.mintDeep} strokeWidth={1.2} opacity={0.35} strokeLinecap="round"/>
      <line x1={4} y1={68} x2={28} y2={67} stroke={C.mintDeep} strokeWidth={1.2} opacity={0.35} strokeLinecap="round"/>
      <line x1={62} y1={64} x2={86} y2={61} stroke={C.mintDeep} strokeWidth={1.2} opacity={0.35} strokeLinecap="round"/>
      <line x1={62} y1={67} x2={86} y2={68} stroke={C.mintDeep} strokeWidth={1.2} opacity={0.35} strokeLinecap="round"/>
      <circle cx={18} cy={62} r={10} fill={C.pink} opacity={0.35}/>
      <circle cx={72} cy={62} r={10} fill={C.pink} opacity={0.35}/>
    </svg>
  );
}

function ConfettiBlast({active}){
  const pieces=useRef(Array.from({length:40},(_,i)=>({
    x:15+Math.random()*70,color:CONFETTI_COLORS[i%CONFETTI_COLORS.length],
    shape:SHAPES[Math.floor(Math.random()*SHAPES.length)],size:6+Math.random()*7,
    vx:(Math.random()-0.5)*200,vy:-120-Math.random()*150,
    delay:(Math.random()*0.25).toFixed(2),rot:Math.random()*360,
  }))).current;
  if(!active)return null;
  return(
    <div style={{position:"fixed",inset:0,pointerEvents:"none",zIndex:300}}>
      <style>{`
        @keyframes burst{0%{transform:translate(0,0) rotate(0deg) scale(1);opacity:1}100%{transform:translate(var(--vx),var(--vy)) rotate(720deg) scale(0.3);opacity:0}}
        @keyframes celebText{0%{transform:scale(0);opacity:0}25%{transform:scale(1.2);opacity:1}70%{opacity:1}100%{transform:scale(0.8) translateY(-30px);opacity:0}}
      `}</style>
      {pieces.map((p,i)=>(
        <div key={i} style={{position:"absolute",left:`${p.x}%`,top:"55%",width:p.size,height:p.size,
          background:p.color,borderRadius:p.shape,"--vx":`${p.vx}px`,"--vy":`${p.vy}px`,
          animation:`burst 1.6s ease-out ${p.delay}s forwards`,transform:`rotate(${p.rot}deg)`}}/>
      ))}
      <div style={{position:"fixed",top:"28%",left:0,right:0,textAlign:"center",fontSize:30,fontWeight:900,
        color:C.mintDeep,fontFamily:"'Nunito',sans-serif",textShadow:`0 2px 0 ${C.pinkDark}`,
        animation:"celebText 1.8s ease-out forwards",zIndex:301}}>BRAVISSIMA! ⭐</div>
    </div>
  );
}

function Toggle({value,onChange}){
  return(
    <div onClick={()=>onChange(!value)} style={{width:48,height:26,borderRadius:13,
      background:value?C.mintDark:"#CCC",position:"relative",cursor:"pointer",transition:"background 0.3s",flexShrink:0}}>
      <div style={{position:"absolute",top:3,left:value?24:3,width:20,height:20,borderRadius:"50%",
        background:"white",transition:"left 0.3s",boxShadow:"0 2px 4px rgba(0,0,0,0.2)"}}/>
    </div>
  );
}

const INIT_TASKS=[
  {id:1,icon:"🌅",name:"Svegliarsi",done:true,doneTime:"07:10",essential:true,period:"mattina"},
  {id:2,icon:"🦷",name:"Lavarsi i denti",done:true,doneTime:"07:42",essential:true,period:"mattina"},
  {id:3,icon:"🥣",name:"Colazione",done:false,essential:true,period:"mattina"},
  {id:4,icon:"🎒",name:"Zaino pronto",done:false,essential:true,period:"mattina"},
  {id:5,icon:"🛏️",name:"Fare il letto",done:false,essential:false,period:"mattina"},
  {id:6,icon:"🎵",name:"Clarinetto (20 min)",done:false,essential:false,period:"sera"},
];

export default function ZoeApp(){
  const [view,setView]=useState("zoe");
  const [day,setDay]=useState("oggi");
  const [tasks,setTasks]=useState(INIT_TASKS);
  const [vacation,setVacation]=useState(false);
  const [confetti,setConfetti]=useState(false);
  const [newTask,setNewTask]=useState("");
  const [newEssential,setNewEssential]=useState(false);
  const [newPeriod,setNewPeriod]=useState("mattina");
  const [emergencyOpen,setEmergencyOpen]=useState(false);
  const [emergencyMsg,setEmergencyMsg]=useState("");
  const [loading,setLoading]=useState(true);
  const [calEvents,setCalEvents]=useState([]);
  const [chatMessages,setChatMessages]=useState([]);
  const [chatInput,setChatInput]=useState("");
  const [chatLoading,setChatLoading]=useState(false);
  const [quoteIdx,setQuoteIdx]=useState(0);

  useEffect(()=>{
    Promise.all([
      fetch('/api/tasks').then(r=>r.json()),
      fetch('/api/vacation').then(r=>r.json()),
    ]).then(([t,v])=>{
      if(t?.length)setTasks(t);
      setVacation(v.vacation);
      setLoading(false);
    }).catch(()=>setLoading(false));
  },[]);

  useEffect(()=>{
    fetch(`/api/calendar?day=${day}`).then(r=>r.json()).then(d=>{if(Array.isArray(d))setCalEvents(d);}).catch(()=>{});
  },[day]);

  useEffect(()=>{
    if(chatMessages.length>0)return;
    const t=setInterval(()=>setQuoteIdx(i=>(i+1)%QUOTES.length),8000);
    return()=>clearInterval(t);
  },[chatMessages.length]);

  const saveTasks=(t)=>{setTasks(t);fetch('/api/tasks',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(t)});};
  const saveVacation=(v)=>{setVacation(v);fetch('/api/vacation',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({vacation:v})});};

  const completeTask=(id)=>{
    const t=tasks.find(t=>t.id===id);
    if(!t||t.done)return;
    saveTasks(tasks.map(t=>t.id===id?{...t,done:true,doneTime:new Date().toLocaleTimeString("it-IT",{hour:"2-digit",minute:"2-digit"})}:t));
    setConfetti(true);setTimeout(()=>setConfetti(false),2000);
  };
  const removeTask=(id)=>saveTasks(tasks.filter(t=>t.id!==id));
  const toggleEssential=(id)=>saveTasks(tasks.map(t=>t.id===id?{...t,essential:!t.essential}:t));
  const addTask=()=>{
    if(!newTask.trim())return;
    saveTasks([...tasks,{id:Date.now(),icon:"🐱",name:newTask.trim(),done:false,essential:newEssential,period:newPeriod}]);
    setNewTask("");setNewEssential(false);
  };
  const sendChat=async()=>{
    if(!chatInput.trim()||chatLoading)return;
    const userMsg={role:"user",content:chatInput};
    const msgs=[...chatMessages,userMsg];
    setChatMessages(msgs);setChatInput("");setChatLoading(true);
    try{
      const res=await fetch('/api/chat',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({messages:msgs})});
      const data=await res.json();
      setChatMessages(p=>[...p,{role:"assistant",content:data.reply||"Riprova! 🐱"}]);
    }catch{setChatMessages(p=>[...p,{role:"assistant",content:"Ops, connessione persa! 🐱"}]);}
    setChatLoading(false);
  };
  const sendEmergency=async()=>{
    if(!emergencyMsg.trim())return;
    await fetch('/api/emergency',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({msg:emergencyMsg})});
    setEmergencyMsg("");setEmergencyOpen(false);
    alert("Messaggio inviato alla mamma! 💕");
  };

  const done=tasks.filter(t=>t.done).length;
  const total=tasks.length;
  const level=Math.round((done/total)*100);
  const essentialsDone=tasks.filter(t=>t.essential&&!t.done).length===0;
  const capyMood=level===100?"celebrating":"neutral";
  const mattinaTasks=tasks.filter(t=>t.period==="mattina");
  const seraTasks=tasks.filter(t=>t.period==="sera");

  const TaskRow=({task})=>(
    <button onClick={()=>completeTask(task.id)} style={{
      background:task.done?`linear-gradient(135deg,${C.mintLight},${C.pinkLight})`:C.white,
      border:`2px solid ${task.done?C.mintDark:C.mintLight}`,borderRadius:14,padding:"10px 13px",
      display:"flex",alignItems:"center",gap:10,cursor:task.done?"default":"pointer",
      boxShadow:task.done?"none":"0 2px 10px rgba(0,0,0,0.06)",transition:"all 0.3s",
      textAlign:"left",width:"100%"}}>
      <div style={{width:36,height:36,borderRadius:"50%",flexShrink:0,
        background:task.done?C.mintDark:C.mintLight,display:"flex",alignItems:"center",
        justifyContent:"center",fontSize:task.done?16:18,color:task.done?"white":"inherit"}}>
        {task.done?"✓":task.icon}
      </div>
      <div style={{flex:1}}>
        <div style={{fontWeight:800,fontSize:14,color:task.done?C.textMed:C.textDark,
          textDecoration:task.done?"line-through":"none"}}>{task.name}
          {task.essential&&!task.done&&<span style={{fontSize:9,color:C.pinkDeep,marginLeft:5,fontWeight:900}}>⚡</span>}
        </div>
        {task.done&&task.doneTime&&<div style={{fontSize:10,color:C.mintDeep,fontWeight:700}}>✓ {task.doneTime}</div>}
      </div>
      {!task.done&&<div style={{background:`linear-gradient(135deg,${C.mint},${C.mintDark})`,borderRadius:8,padding:"4px 10px",fontSize:11,fontWeight:900,color:"white"}}>Fatto!</div>}
    </button>
  );

  return(
    <div style={{fontFamily:"'Nunito',sans-serif",background:C.mintBg,minHeight:"100vh",maxWidth:430,margin:"0 auto"}}>
      <ConfettiBlast active={confetti}/>
      {loading&&<div style={{position:"fixed",inset:0,background:C.mintBg,display:"flex",alignItems:"center",justifyContent:"center",zIndex:999,fontSize:48}}>🧋</div>}

      {/* HEADER */}
      <div style={{background:`linear-gradient(135deg,${C.mint} 0%,${C.pink} 100%)`,padding:"16px 16px 0",borderRadius:"0 0 28px 28px",boxShadow:"0 4px 20px rgba(168,223,196,0.4)"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}>
          <button onClick={()=>setView("zoe")} style={{padding:"7px 16px",borderRadius:20,border:"none",
            background:view==="zoe"?C.white:"rgba(255,255,255,0.35)",color:C.mintDeep,
            fontWeight:900,fontSize:14,cursor:"pointer",fontFamily:"'Nunito',sans-serif"}}>🐴 Zoe</button>
          <div style={{display:"flex",alignItems:"center",gap:8}}>
            <button onClick={()=>setView(view==="mom"?"zoe":"mom")} style={{background:"transparent",border:"none",
              cursor:"pointer",fontSize:16,opacity:0.35,color:"white",padding:"4px"}}>♡</button>
            <span style={{fontSize:26}}>🧋</span>
          </div>
        </div>
        {view==="zoe"&&(
          <div style={{display:"flex"}}>
            {[["oggi","📅 Oggi"],["domani","🌙 Domani"]].map(([d,label])=>(
              <button key={d} onClick={()=>setDay(d)} style={{flex:1,padding:"11px 0",border:"none",cursor:"pointer",
                background:day===d?C.white:"transparent",borderRadius:day===d?"14px 14px 0 0":0,
                color:day===d?C.mintDeep:"rgba(255,255,255,0.85)",fontWeight:900,fontSize:14,
                fontFamily:"'Nunito',sans-serif"}}>{label}</button>
            ))}
          </div>
        )}
        {view==="mom"&&<div style={{height:12}}/>}
      </div>

      <div style={{padding:14}}>
        {view==="zoe"&&(<>

          {/* CALENDARIO subito sotto i tab */}
          {calEvents.length>0&&(
            <div style={{marginBottom:12}}>
              <div style={{fontSize:10,fontWeight:800,color:C.textLight,textTransform:"uppercase",letterSpacing:1.2,marginBottom:7}}>In calendario</div>
              <div style={{display:"flex",gap:7,flexWrap:"wrap"}}>
                {calEvents.map((e,i)=>(
                  <div key={i} style={{background:C.pinkLight,borderRadius:12,padding:"6px 12px",display:"flex",alignItems:"center",gap:6}}>
                    <span style={{fontSize:18}}>{e.icon}</span>
                    <div>
                      <div style={{fontWeight:800,fontSize:12,color:C.textDark}}>{e.name}</div>
                      <div style={{fontSize:10,color:C.pinkDeep,fontWeight:700}}>{e.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* COACH + BUBBLE TEA */}
          <div style={{display:"flex",gap:12,marginBottom:12}}>
            {/* Coach piccolo */}
            <div style={{background:C.white,borderRadius:20,padding:"12px",flex:1,
              boxShadow:"0 3px 16px rgba(91,188,138,0.12)",border:`1.5px solid ${C.mintLight}`}}>
              <div style={{display:"flex",alignItems:"flex-start",gap:10,marginBottom:8}}>
                <CoachAvatar mood={capyMood} small/>
                <div style={{flex:1}}>
                  <div style={{background:C.mintBg,borderRadius:"4px 14px 14px 14px",padding:"9px 11px",border:`1px solid ${C.mintLight}`,fontSize:12,color:C.textMed,lineHeight:1.5}}>
                    {chatMessages.length===0
                      ? <><span style={{fontWeight:900,color:C.mintDeep,display:"block",marginBottom:2}}>💬 Frase del giorno</span>{QUOTES[quoteIdx]}</>
                      : chatMessages[chatMessages.length-1].content
                    }
                  </div>
                </div>
              </div>
              {chatMessages.length>0&&(
                <div style={{maxHeight:100,overflowY:"auto",display:"flex",flexDirection:"column",gap:5,marginBottom:7}}>
                  {chatMessages.slice(0,-1).map((m,i)=>(
                    <div key={i} style={{alignSelf:m.role==="user"?"flex-end":"flex-start",
                      background:m.role==="user"?C.mintDark:C.white,color:m.role==="user"?"white":C.textDark,
                      padding:"5px 10px",borderRadius:12,fontSize:12,maxWidth:"85%",
                      border:m.role==="assistant"?`1px solid ${C.mintLight}`:"none"}}>{m.content}</div>
                  ))}
                  {chatLoading&&<div style={{fontSize:18}}>🐱💭</div>}
                </div>
              )}
              <div style={{display:"flex",gap:6}}>
                <input value={chatInput} onChange={e=>setChatInput(e.target.value)}
                  onKeyDown={e=>e.key==="Enter"&&sendChat()} placeholder="Scrivi al coach..."
                  style={{flex:1,padding:"7px 11px",borderRadius:10,border:`1.5px solid ${C.mintLight}`,
                    outline:"none",fontFamily:"'Nunito',sans-serif",fontSize:12}}/>
                <button onClick={sendChat} disabled={chatLoading} style={{padding:"7px 12px",borderRadius:10,
                  border:"none",background:C.mintDark,color:"white",fontWeight:900,cursor:"pointer",fontSize:14}}>→</button>
              </div>
            </div>

            {/* Bubble tea */}
            <div style={{background:C.white,borderRadius:20,padding:"12px",
              boxShadow:"0 3px 16px rgba(91,188,138,0.12)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minWidth:90}}>
              <KawaiiTea level={level}/>
              <div style={{fontWeight:900,fontSize:16,color:C.textDark,marginTop:4}}>{done}/{total}</div>
              <div style={{marginTop:5}}>
                {(!vacation&&!essentialsDone)
                  ?<span style={{fontSize:10,fontWeight:800,color:C.red,background:"#FFF0F0",padding:"2px 8px",borderRadius:8}}>🔒</span>
                  :<span style={{fontSize:10,fontWeight:800,color:C.mintDeep,background:C.mintLight,padding:"2px 8px",borderRadius:8}}>✅</span>}
              </div>
            </div>
          </div>

          {/* TASKS MATTINA */}
          {mattinaTasks.length>0&&(<>
            <div style={{fontSize:10,fontWeight:800,color:C.textLight,textTransform:"uppercase",letterSpacing:1.2,marginBottom:7}}>☀️ Mattina</div>
            <div style={{display:"flex",flexDirection:"column",gap:7,marginBottom:12}}>
              {mattinaTasks.map(t=><TaskRow key={t.id} task={t}/>)}
            </div>
          </>)}

          {/* TASKS SERA */}
          {seraTasks.length>0&&(<>
            <div style={{fontSize:10,fontWeight:800,color:C.textLight,textTransform:"uppercase",letterSpacing:1.2,marginBottom:7}}>🌙 Sera</div>
            <div style={{display:"flex",flexDirection:"column",gap:7,marginBottom:12}}>
              {seraTasks.map(t=><TaskRow key={t.id} task={t}/>)}
            </div>
          </>)}

          {/* MAMMA nascosta */}
          <div style={{textAlign:"center",paddingBottom:24,marginTop:16}}>
            <button onClick={()=>setEmergencyOpen(!emergencyOpen)} style={{background:"transparent",
              border:`1px solid ${C.pink}`,color:C.textLight,fontSize:11,fontWeight:700,
              padding:"5px 16px",borderRadius:20,cursor:"pointer",fontFamily:"'Nunito',sans-serif"}}>📞 parla con la mamma</button>
            {emergencyOpen&&(
              <div style={{marginTop:8,background:C.white,borderRadius:14,padding:12,border:`1.5px solid ${C.pink}`,textAlign:"left"}}>
                <div style={{display:"flex",gap:7}}>
                  <input value={emergencyMsg} onChange={e=>setEmergencyMsg(e.target.value)}
                    onKeyDown={e=>e.key==="Enter"&&sendEmergency()}
                    placeholder="Scrivi alla mamma..."
                    style={{flex:1,padding:"8px 11px",borderRadius:10,border:`1.5px solid ${C.pink}`,outline:"none",fontFamily:"'Nunito',sans-serif",fontSize:12}}/>
                  <button onClick={sendEmergency} style={{padding:"8px 12px",borderRadius:10,border:"none",background:C.pinkDark,color:"white",fontWeight:900,cursor:"pointer"}}>→</button>
                </div>
              </div>
            )}
          </div>
        </>)}

        {/* MOM VIEW */}
        {view==="mom"&&(<>
          <div style={{background:vacation?`linear-gradient(135deg,${C.yellow},#FFD93D)`:C.white,borderRadius:18,
            padding:"14px 18px",display:"flex",justifyContent:"space-between",alignItems:"center",
            marginBottom:14,boxShadow:"0 3px 16px rgba(0,0,0,0.07)",transition:"background 0.4s"}}>
            <div>
              <div style={{fontWeight:900,fontSize:15,color:C.textDark}}>{vacation?"🏖️ Vacation Mode ATTIVO":"🔒 Blocco attivo"}</div>
              <div style={{fontSize:11,color:C.textMed,marginTop:2}}>{vacation?"Tutti i blocchi disattivati":"Completa i fondamentali ⚡"}</div>
            </div>
            <Toggle value={vacation} onChange={saveVacation}/>
          </div>

          {/* Messaggi da Zoe */}

          <div style={{background:C.white,borderRadius:18,padding:"14px 18px",marginBottom:14,boxShadow:"0 3px 16px rgba(0,0,0,0.07)"}}>
            <div style={{fontWeight:900,fontSize:14,color:C.textDark,marginBottom:10}}>📊 Storico oggi</div>
            {tasks.map(task=>(
              <div key={task.id} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"7px 0",borderBottom:`1px solid ${C.mintLight}`}}>
                <span style={{fontSize:13,color:C.textMed,fontWeight:600}}>{task.icon} {task.name}{task.essential&&<span style={{fontSize:9,color:C.pinkDeep,marginLeft:3}}>⚡</span>}</span>
                <span style={{fontSize:12,fontWeight:800,color:task.done?C.mintDeep:C.textLight}}>{task.done?`✓ ${task.doneTime}`:"—"}</span>
              </div>
            ))}
            <div style={{marginTop:10,padding:"8px 12px",background:(!vacation&&!essentialsDone)?"#FFF0F0":C.mintLight,
              borderRadius:10,fontWeight:800,fontSize:12,color:(!vacation&&!essentialsDone)?C.red:C.mintDeep}}>
              {vacation?"🏖️ Telefono libero":essentialsDone?"✅ Fondamentali ok — libera":"🔒 Fondamentali mancanti"}
            </div>
          </div>

          <div style={{background:C.white,borderRadius:18,padding:"14px 18px",boxShadow:"0 3px 16px rgba(0,0,0,0.07)"}}>
            <div style={{fontWeight:900,fontSize:14,color:C.textDark,marginBottom:10}}>✏️ Gestisci compiti</div>
            {/* Aggiungi */}
            <div style={{display:"flex",gap:7,marginBottom:7,flexWrap:"wrap"}}>
              <input value={newTask} onChange={e=>setNewTask(e.target.value)} onKeyDown={e=>e.key==="Enter"&&addTask()}
                placeholder="Nuovo compito..." style={{flex:1,minWidth:120,padding:"9px 12px",borderRadius:10,
                  border:`1.5px solid ${C.mintLight}`,outline:"none",fontFamily:"'Nunito',sans-serif",fontSize:13}}/>
              <button onClick={addTask} style={{padding:"9px 14px",borderRadius:10,border:"none",background:C.mintDark,color:"white",fontWeight:900,fontSize:18,cursor:"pointer"}}>+</button>
            </div>
            <div style={{display:"flex",gap:8,marginBottom:12}}>
              <label style={{display:"flex",alignItems:"center",gap:5,fontSize:12,fontWeight:700,color:C.textMed,cursor:"pointer"}}>
                <input type="checkbox" checked={newEssential} onChange={e=>setNewEssential(e.target.checked)}/>
                ⚡ Fondamentale
              </label>
              <select value={newPeriod} onChange={e=>setNewPeriod(e.target.value)}
                style={{padding:"3px 8px",borderRadius:8,border:`1.5px solid ${C.mintLight}`,fontSize:12,fontFamily:"'Nunito',sans-serif"}}>
                <option value="mattina">☀️ Mattina</option>
                <option value="sera">🌙 Sera</option>
              </select>
            </div>
            {/* Lista */}
            {tasks.map(task=>(
              <div key={task.id} style={{display:"flex",alignItems:"center",gap:8,background:C.mintBg,borderRadius:10,padding:"8px 10px",marginBottom:6}}>
                <span style={{fontSize:16}}>{task.icon}</span>
                <span style={{flex:1,fontSize:13,fontWeight:700,color:C.textDark}}>{task.name}</span>
                <span style={{fontSize:9,color:C.textLight}}>{task.period==="mattina"?"☀️":"🌙"}</span>
                <button onClick={()=>toggleEssential(task.id)} title={task.essential?"Rimuovi fondamentale":"Segna fondamentale"}
                  style={{background:task.essential?C.pinkLight:"transparent",border:`1px solid ${task.essential?C.pinkDark:C.mintLight}`,
                    borderRadius:6,padding:"2px 7px",cursor:"pointer",fontSize:11,fontWeight:900,
                    color:task.essential?C.pinkDeep:C.textLight}}>⚡</button>
                <button onClick={()=>removeTask(task.id)} style={{background:C.pinkLight,border:"none",borderRadius:7,
                  padding:"3px 9px",cursor:"pointer",color:C.pinkDeep,fontWeight:900,fontSize:13}}>✕</button>
              </div>
            ))}
          </div>

          <div style={{marginTop:12,padding:"10px 14px",background:C.mintLight,borderRadius:12,fontSize:11,fontWeight:700,color:C.textMed,textAlign:"center"}}>
            🔗 <code>/api/status</code> → <strong>{(!vacation&&!essentialsDone)?"blocked: true":"blocked: false"}</strong>
          </div>
        </>)}
      </div>
    </div>
  );
}
