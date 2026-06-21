"use client";
import { useState, useRef, useEffect } from "react";

const C = {
  bg:"#FAF7FF", white:"#FFFFFF",
  lav:"#E8D0FF", lavDark:"#9B6FD4", lavDeep:"#6A3FA8",
  peach:"#FFE0C8", peachDark:"#FF9B6A",
  sky:"#C8EEFF", skyDark:"#5BB8E8",
  mint:"#C8F5E0", mintDark:"#4DBF8A",
  yell:"#FFF8C0", yellDark:"#E8C840",
  pink:"#FFD0E8", pinkDark:"#FF7AB8", pinkDeep:"#E0507A",
  textDark:"#3A2A4A", textMed:"#6A5A7A", textLight:"#A090B0", red:"#FF5252",
};

const CONFETTI_COLORS=["#E8D0FF","#FFD0E8","#C8EEFF","#C8F5E0","#FFF8C0","#FFE0C8","#FF7AB8","#9B6FD4"];
const SHAPES=["50%","50%","2px","2px","50% 0"];
const QUOTES=[
  "\"Il segreto del successo? Iniziare.\" Anche solo con i denti! 🦷",
  "Ogni grande musicista ha fatto schifo all'inizio. Continua! 🎵",
  "I cavalli non si preoccupano di ieri. E tu? 🐎",
  "Le stelle non si scusano per aver brillato ✨",
  "Un compito alla volta. Anche i capibara fanno così 🦦",
  "Il coraggio non è non avere paura. È farlo lo stesso 💪",
  "Fatto batte perfetto, sempre ✅",
  "Anche oggi puoi sorprendere te stessa 🌸",
];

function Bunny({mood}){
  const cel=mood==="celebrating";
  return(
    <svg width={68} height={78} viewBox="0 0 90 105">
      {/* Orecchie */}
      <ellipse cx={28} cy={24} rx={13} ry={30} fill={C.white}/>
      <ellipse cx={28} cy={24} rx={7.5} ry={23} fill={C.pink}/>
      <ellipse cx={62} cy={24} rx={13} ry={30} fill={C.white}/>
      <ellipse cx={62} cy={24} rx={7.5} ry={23} fill={C.pink}/>
      {/* Testa */}
      <circle cx={45} cy={68} r={35} fill={C.white}/>
      <ellipse cx={38} cy={58} rx={18} ry={13} fill={C.lav} opacity={0.15}/>
      {/* Occhi */}
      {cel?(<>
        <path d="M24,63 Q33,55 42,63" fill="none" stroke={C.lavDeep} strokeWidth={3} strokeLinecap="round"/>
        <path d="M48,63 Q57,55 66,63" fill="none" stroke={C.lavDeep} strokeWidth={3} strokeLinecap="round"/>
      </>):(<>
        <circle cx={33} cy={64} r={9} fill={C.white}/>
        <circle cx={57} cy={64} r={9} fill={C.white}/>
        <circle cx={33} cy={64} r={6.5} fill={C.lavDeep}/>
        <circle cx={57} cy={64} r={6.5} fill={C.lavDeep}/>
        <circle cx={36} cy={60} r={2.8} fill={C.white}/>
        <circle cx={60} cy={60} r={2.8} fill={C.white}/>
        <circle cx={31} cy={67} r={1.2} fill={C.white} opacity={0.5}/>
        <circle cx={55} cy={67} r={1.2} fill={C.white} opacity={0.5}/>
      </>)}
      {/* Naso */}
      <path d="M42,76 L45,72 L48,76 Q45,81 42,76 Z" fill={C.pinkDark}/>
      {/* Bocca */}
      {cel
        ?<path d="M33,82 Q45,93 57,82" fill="none" stroke={C.lavDark} strokeWidth={2.5} strokeLinecap="round"/>
        :<path d="M37,81 Q45,88 53,81" fill="none" stroke={C.lavDark} strokeWidth={2} strokeLinecap="round"/>}
      {/* Guance */}
      <circle cx={20} cy={74} r={10} fill={C.pink} opacity={0.35}/>
      <circle cx={70} cy={74} r={10} fill={C.pink} opacity={0.35}/>
    </svg>
  );
}

function KawaiiTea({level}){
  const h=68,fillH=(h*level)/100,fillY=34+(h-fillH);
  const happy=level>=100,med=level>=50;
  return(
    <div style={{position:"relative",width:68}}>
      <svg width={68} height={122} viewBox="0 0 68 122">
        <rect x={27} y={0} width={10} height={34} rx={5} fill={C.pinkDark}/>
        <path d="M5,32 Q3,37 2,103 Q2,112 34,112 Q66,112 66,103 Q65,37 63,32 Z" fill={C.lav}/>
        <clipPath id="tc"><path d="M5,32 Q3,37 2,103 Q2,112 34,112 Q66,112 66,103 Q65,37 63,32 Z"/></clipPath>
        <rect x={0} y={fillY} width={68} height={fillH+35}
          fill={`url(#tgrad)`} clipPath="url(#tc)"/>
        <defs>
          <linearGradient id="tgrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor={C.skyDark}/>
            <stop offset="50%" stopColor={C.mintDark}/>
            <stop offset="100%" stopColor={C.pinkDark}/>
          </linearGradient>
        </defs>
        {level>15&&<circle cx={16} cy={100} r={6} fill={C.pinkDark} opacity={0.8} clipPath="url(#tc)"/>}
        {level>35&&<circle cx={34} cy={106} r={5} fill={C.lavDark} opacity={0.8} clipPath="url(#tc)"/>}
        {level>55&&<circle cx={52} cy={99} r={7} fill={C.skyDark} opacity={0.7} clipPath="url(#tc)"/>}
        <rect x={1} y={27} width={66} height={11} rx={5.5} fill={C.pinkDark}/>
        {happy?(<>
          <path d="M19,61 Q25,54 31,61" fill="none" stroke={C.textDark} strokeWidth={2} strokeLinecap="round"/>
          <path d="M37,61 Q43,54 49,61" fill="none" stroke={C.textDark} strokeWidth={2} strokeLinecap="round"/>
        </>):(<>
          <ellipse cx={25} cy={63} rx={6} ry={7} fill={C.white}/>
          <ellipse cx={43} cy={63} rx={6} ry={7} fill={C.white}/>
          <circle cx={25} cy={64} r={4} fill={C.textDark}/>
          <circle cx={43} cy={64} r={4} fill={C.textDark}/>
          <circle cx={27} cy={61} r={1.8} fill={C.white}/>
          <circle cx={45} cy={61} r={1.8} fill={C.white}/>
        </>)}
        <ellipse cx={14} cy={72} rx={7} ry={4} fill={C.pink} opacity={0.4}/>
        <ellipse cx={54} cy={72} rx={7} ry={4} fill={C.pink} opacity={0.4}/>
        {happy?<path d="M24,78 Q34,87 44,78" fill="none" stroke={C.textDark} strokeWidth={2} strokeLinecap="round"/>
          :med?<path d="M27,79 Q34,84 41,79" fill="none" stroke={C.textDark} strokeWidth={2} strokeLinecap="round"/>
          :<path d="M29,80 Q34,78 39,80" fill="none" stroke={C.textDark} strokeWidth={2} strokeLinecap="round"/>}
        <text x={34} y={97} textAnchor="middle" fontSize={10} fontWeight={900}
          fill={level>50?"white":C.lavDeep} fontFamily="Nunito,sans-serif">{level}%</text>
      </svg>
    </div>
  );
}

function ConfettiBlast({active}){
  const pieces=useRef(Array.from({length:40},(_,i)=>({
    x:10+Math.random()*80,color:CONFETTI_COLORS[i%CONFETTI_COLORS.length],
    shape:SHAPES[Math.floor(Math.random()*SHAPES.length)],size:6+Math.random()*8,
    vx:(Math.random()-0.5)*220,vy:-130-Math.random()*150,
    delay:(Math.random()*0.3).toFixed(2),rot:Math.random()*360,
  }))).current;
  if(!active)return null;
  return(
    <div style={{position:"fixed",inset:0,pointerEvents:"none",zIndex:300}}>
      <style>{`
        @keyframes burst{0%{transform:translate(0,0) rotate(0deg) scale(1);opacity:1}100%{transform:translate(var(--vx),var(--vy)) rotate(720deg) scale(0.3);opacity:0}}
        @keyframes celebText{0%{transform:scale(0);opacity:0}25%{transform:scale(1.2);opacity:1}75%{opacity:1}100%{transform:translateY(-40px);opacity:0}}
      `}</style>
      {pieces.map((p,i)=>(
        <div key={i} style={{position:"absolute",left:`${p.x}%`,top:"55%",width:p.size,height:p.size,
          background:p.color,borderRadius:p.shape,"--vx":`${p.vx}px`,"--vy":`${p.vy}px`,
          animation:`burst 1.8s ease-out ${p.delay}s forwards`,transform:`rotate(${p.rot}deg)`}}/>
      ))}
      <div style={{position:"fixed",top:"26%",left:0,right:0,textAlign:"center",fontSize:30,fontWeight:900,
        color:C.lavDeep,fontFamily:"'Nunito',sans-serif",
        animation:"celebText 2s ease-out forwards",zIndex:301}}>BRAVISSIMA! 🌈⭐</div>
    </div>
  );
}

function Toggle({value,onChange}){
  return(
    <div onClick={()=>onChange(!value)} style={{width:48,height:26,borderRadius:13,
      background:value?C.mintDark:"#CCC",position:"relative",cursor:"pointer",transition:"background 0.3s",flexShrink:0}}>
      <div style={{position:"absolute",top:3,left:value?24:3,width:20,height:20,borderRadius:"50%",
        background:C.white,transition:"left 0.3s",boxShadow:"0 2px 4px rgba(0,0,0,0.2)"}}/>
    </div>
  );
}

const PERIOD_COLORS={
  mattina:{bg:C.yell,border:C.yellDark,label:"☀️ Mattina"},
  sera:{bg:C.lav,border:C.lavDark,label:"🌙 Sera"},
};

const TASK_ACCENT=[C.peach,C.sky,C.mint,C.yell,C.lav,C.pink];

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
      if(t?.length)setTasks(t.map(tk=>({...tk,period:tk.period||"mattina"})));
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
    setConfetti(true);setTimeout(()=>setConfetti(false),2200);
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
      setChatMessages(p=>[...p,{role:"assistant",content:data.reply||"Riprova! 🐰"}]);
    }catch{setChatMessages(p=>[...p,{role:"assistant",content:"Ops! Connessione persa 🐰"}]);}
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
  const mattinaTasks=tasks.filter(t=>(t.period||"mattina")==="mattina");
  const seraTasks=tasks.filter(t=>t.period==="sera");

  const TaskRow=({task,idx})=>{
    const accent=TASK_ACCENT[idx%TASK_ACCENT.length];
    return(
      <button onClick={()=>completeTask(task.id)} style={{
        background:task.done?`linear-gradient(135deg,${C.mint},${C.lav})`:C.white,
        border:`2px solid ${task.done?C.mintDark:accent}`,borderRadius:12,padding:"7px 9px",
        display:"flex",alignItems:"center",gap:7,cursor:task.done?"default":"pointer",
        boxShadow:task.done?"none":`0 2px 8px ${accent}60`,transition:"all 0.3s",
        textAlign:"left",width:"100%"}}>
        <div style={{width:28,height:28,borderRadius:"50%",flexShrink:0,
          background:task.done?C.mintDark:accent,display:"flex",alignItems:"center",
          justifyContent:"center",fontSize:task.done?13:15,color:task.done?C.white:"inherit"}}>
          {task.done?"✓":task.icon}
        </div>
        <div style={{flex:1,minWidth:0}}>
          <div style={{fontWeight:800,fontSize:12,color:task.done?C.textMed:C.textDark,
            textDecoration:task.done?"line-through":"none",
            whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{task.name}
            {task.essential&&!task.done&&<span style={{fontSize:8,color:C.pinkDeep,marginLeft:3}}>⚡</span>}
          </div>
          {task.done&&task.doneTime&&<div style={{fontSize:9,color:C.mintDark,fontWeight:700}}>✓ {task.doneTime}</div>}
          {!task.done&&<div style={{fontSize:9,fontWeight:900,color:accent,marginTop:1}}>Fatto!</div>}
        </div>
      </button>
    );
  };

  const SectionHeader=({label,color})=>(
    <div style={{fontSize:10,fontWeight:900,color:color,textTransform:"uppercase",letterSpacing:1.5,marginBottom:7,marginTop:4}}>{label}</div>
  );

  return(
    <div style={{fontFamily:"'Nunito',sans-serif",background:C.bg,minHeight:"100vh",maxWidth:430,margin:"0 auto"}}>
      <ConfettiBlast active={confetti}/>
      {loading&&<div style={{position:"fixed",inset:0,background:C.bg,display:"flex",alignItems:"center",justifyContent:"center",zIndex:999,fontSize:48}}>🌈</div>}

      {/* HEADER arcobaleno */}
      <div style={{background:"linear-gradient(135deg,#FFB8D5,#FFD5B0,#FFF5B0,#C8F5E0,#C8EEFF,#E8D0FF)",
        padding:"10px 14px 0",borderRadius:"0 0 22px 22px",boxShadow:"0 4px 20px rgba(180,150,220,0.25)"}}>
        <div style={{display:"flex",alignItems:"stretch",gap:10}}>
          {/* Sinistra: nav */}
          <div style={{flex:1,display:"flex",flexDirection:"column",gap:8,paddingBottom:0}}>
            <div style={{display:"flex",alignItems:"center",gap:8}}>
              <button onClick={()=>setView("zoe")} style={{padding:"5px 12px",borderRadius:16,border:"none",
                background:view==="zoe"?"rgba(255,255,255,0.9)":"rgba(255,255,255,0.45)",
                color:C.lavDeep,fontWeight:900,fontSize:13,cursor:"pointer",fontFamily:"'Nunito',sans-serif"}}>🐴 Zoe</button>
            </div>
            {view==="zoe"&&(
              <div style={{display:"flex",gap:6}}>
                {[["oggi","📅 Oggi"],["domani","🌙 Dom"]].map(([d,label])=>(
                  <button key={d} onClick={()=>setDay(d)} style={{flex:1,padding:"7px 0",border:"none",cursor:"pointer",
                    background:day===d?"rgba(255,255,255,0.9)":"rgba(255,255,255,0.3)",
                    borderRadius:"12px 12px 0 0",
                    color:day===d?C.lavDeep:"rgba(80,50,120,0.75)",fontWeight:900,fontSize:13,
                    fontFamily:"'Nunito',sans-serif"}}>{label}</button>
                ))}
              </div>
            )}
            {view==="mom"&&<div style={{height:8}}/>}
          </div>
          {/* Destra: bubble tea + cuore */}
          <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-end",paddingBottom:4}}>
            <button onClick={()=>setView(view==="mom"?"zoe":"mom")} style={{background:"transparent",border:"none",
              cursor:"pointer",fontSize:14,opacity:0.3,color:C.textDark,padding:"2px",alignSelf:"flex-end"}}>♡</button>
            <KawaiiTea level={level}/>
            <div style={{fontWeight:900,fontSize:13,color:C.lavDeep,marginTop:-4}}>{done}/{total}</div>
          </div>
        </div>
      </div>

      <div style={{padding:14}}>
        {view==="zoe"&&(<>

          {/* CALENDARIO - max 3 visibili, scroll per altri */}
          {calEvents.length>0&&(
            <div style={{marginBottom:10}}>
              <SectionHeader label="In calendario" color={C.skyDark}/>
              <div style={{display:"flex",gap:7,overflowX:"auto",paddingBottom:4}}>
                {calEvents.map((e,i)=>(
                  <div key={i} style={{background:C.sky,borderRadius:12,padding:"6px 10px",display:"flex",
                    alignItems:"center",gap:6,border:`1.5px solid ${C.skyDark}`,flexShrink:0}}>
                    <span style={{fontSize:16}}>{e.icon}</span>
                    <div>
                      <div style={{fontWeight:800,fontSize:11,color:C.textDark,whiteSpace:"nowrap"}}>{e.name}</div>
                      <div style={{fontSize:10,color:C.skyDark,fontWeight:700}}>{e.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CHAT COACH - area unica */}
          <div style={{background:C.white,borderRadius:20,padding:"14px",marginBottom:12,
            boxShadow:"0 3px 16px rgba(180,150,220,0.15)",border:`1.5px solid ${C.lav}`}}>
            <div style={{display:"flex",alignItems:"flex-start",gap:10,marginBottom:10}}>
              <Bunny mood={capyMood}/>
              <div style={{background:C.lav,borderRadius:"4px 16px 16px 16px",padding:"12px 14px",flex:1,
                fontSize:15,color:C.textDark,lineHeight:1.6,minHeight:60}}>
                {chatMessages.length===0
                  ?<><span style={{fontWeight:900,color:C.lavDeep,display:"block",marginBottom:4}}>💬 Frase del giorno</span>
                    <span style={{fontStyle:"italic"}}>{QUOTES[quoteIdx]}</span></>
                  :<span>{chatMessages[chatMessages.length-1].content}</span>
                }
              </div>
            </div>
            {chatMessages.length>1&&(
              <div style={{maxHeight:120,overflowY:"auto",display:"flex",flexDirection:"column",gap:6,marginBottom:10}}>
                {chatMessages.slice(0,-1).map((m,i)=>(
                  <div key={i} style={{alignSelf:m.role==="user"?"flex-end":"flex-start",
                    background:m.role==="user"?C.lavDark:C.lav,color:m.role==="user"?C.white:C.textDark,
                    padding:"7px 12px",borderRadius:12,fontSize:14,maxWidth:"85%"}}>{m.content}</div>
                ))}
                {chatLoading&&<div style={{fontSize:18}}>🐰💭</div>}
              </div>
            )}
            <div style={{display:"flex",gap:8}}>
              <input value={chatInput} onChange={e=>setChatInput(e.target.value)}
                onKeyDown={e=>e.key==="Enter"&&sendChat()} placeholder="Scrivi al coach..."
                style={{flex:1,padding:"10px 14px",borderRadius:12,border:`1.5px solid ${C.lav}`,
                  outline:"none",fontFamily:"'Nunito',sans-serif",fontSize:15,background:C.bg}}/>
              <button onClick={sendChat} disabled={chatLoading} style={{padding:"10px 16px",borderRadius:12,
                border:"none",background:C.lavDark,color:C.white,fontWeight:900,cursor:"pointer",fontSize:16}}>→</button>
            </div>
          </div>

          {/* TASK IN DOPPIA COLONNA */}
          <div style={{display:"flex",gap:8,marginBottom:14,alignItems:"flex-start"}}>
            {/* MATTINA */}
            <div style={{flex:1}}>
              <SectionHeader label="☀️ Mattina" color={C.yellDark}/>
              <div style={{display:"flex",flexDirection:"column",gap:6}}>
                {mattinaTasks.map((t,i)=><TaskRow key={t.id} task={t} idx={i}/>)}
              </div>
            </div>
            {/* SERA */}
            <div style={{flex:1}}>
              <SectionHeader label="🌙 Sera" color={C.lavDark}/>
              <div style={{display:"flex",flexDirection:"column",gap:6}}>
                {seraTasks.map((t,i)=><TaskRow key={t.id} task={t} idx={i+3}/>)}
              </div>
            </div>
          </div>

          {/* MAMMA */}
          <div style={{textAlign:"center",paddingBottom:24,marginTop:8}}>
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
                  <button onClick={sendEmergency} style={{padding:"8px 12px",borderRadius:10,border:"none",background:C.pinkDark,color:C.white,fontWeight:900,cursor:"pointer"}}>→</button>
                </div>
              </div>
            )}
          </div>
        </>)}

        {/* MOM VIEW */}
        {view==="mom"&&(<>
          <div style={{background:vacation?`linear-gradient(135deg,${C.yell},#FFD93D)`:C.white,borderRadius:18,
            padding:"14px 18px",display:"flex",justifyContent:"space-between",alignItems:"center",
            marginBottom:14,boxShadow:"0 3px 16px rgba(180,150,220,0.15)",transition:"background 0.4s"}}>
            <div>
              <div style={{fontWeight:900,fontSize:15,color:C.textDark}}>{vacation?"🏖️ Vacation Mode ATTIVO":"🔒 Blocco attivo"}</div>
              <div style={{fontSize:11,color:C.textMed,marginTop:2}}>{vacation?"Tutti i blocchi disattivati":"Completa i fondamentali ⚡"}</div>
            </div>
            <Toggle value={vacation} onChange={saveVacation}/>
          </div>

          <div style={{background:C.white,borderRadius:18,padding:"14px 18px",marginBottom:14,boxShadow:"0 3px 16px rgba(180,150,220,0.15)"}}>
            <div style={{fontWeight:900,fontSize:14,color:C.textDark,marginBottom:10}}>📊 Storico oggi</div>
            {tasks.map(task=>(
              <div key={task.id} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"7px 0",borderBottom:`1px solid ${C.lav}`}}>
                <span style={{fontSize:13,color:C.textMed,fontWeight:600}}>{task.icon} {task.name}{task.essential&&<span style={{fontSize:9,color:C.pinkDeep,marginLeft:3}}>⚡</span>}</span>
                <span style={{fontSize:12,fontWeight:800,color:task.done?C.mintDark:C.textLight}}>{task.done?`✓ ${task.doneTime}`:"—"}</span>
              </div>
            ))}
            <div style={{marginTop:10,padding:"8px 12px",background:(!vacation&&!essentialsDone)?"#FFF0F0":C.mint,
              borderRadius:10,fontWeight:800,fontSize:12,color:(!vacation&&!essentialsDone)?C.red:C.mintDark}}>
              {vacation?"🏖️ Telefono libero":essentialsDone?"✅ Fondamentali ok":"🔒 Fondamentali mancanti"}
            </div>
          </div>

          <div style={{background:C.white,borderRadius:18,padding:"14px 18px",boxShadow:"0 3px 16px rgba(180,150,220,0.15)"}}>
            <div style={{fontWeight:900,fontSize:14,color:C.textDark,marginBottom:10}}>✏️ Gestisci compiti</div>
            <div style={{display:"flex",gap:7,marginBottom:7}}>
              <input value={newTask} onChange={e=>setNewTask(e.target.value)} onKeyDown={e=>e.key==="Enter"&&addTask()}
                placeholder="Nuovo compito..." style={{flex:1,padding:"9px 12px",borderRadius:10,
                  border:`1.5px solid ${C.lav}`,outline:"none",fontFamily:"'Nunito',sans-serif",fontSize:13,background:C.bg}}/>
              <button onClick={addTask} style={{padding:"9px 14px",borderRadius:10,border:"none",background:C.lavDark,color:C.white,fontWeight:900,fontSize:18,cursor:"pointer"}}>+</button>
            </div>
            <div style={{display:"flex",gap:10,marginBottom:12,alignItems:"center"}}>
              <label style={{display:"flex",alignItems:"center",gap:5,fontSize:12,fontWeight:700,color:C.textMed,cursor:"pointer"}}>
                <input type="checkbox" checked={newEssential} onChange={e=>setNewEssential(e.target.checked)}/>⚡ Fondamentale
              </label>
              <select value={newPeriod} onChange={e=>setNewPeriod(e.target.value)}
                style={{padding:"4px 8px",borderRadius:8,border:`1.5px solid ${C.lav}`,fontSize:12,fontFamily:"'Nunito',sans-serif",background:C.bg}}>
                <option value="mattina">☀️ Mattina</option>
                <option value="sera">🌙 Sera</option>
              </select>
            </div>
            {tasks.map(task=>(
              <div key={task.id} style={{display:"flex",alignItems:"center",gap:7,background:C.bg,borderRadius:10,padding:"8px 10px",marginBottom:6,border:`1px solid ${C.lav}`}}>
                <span style={{fontSize:15}}>{task.icon}</span>
                <span style={{flex:1,fontSize:13,fontWeight:700,color:C.textDark}}>{task.name}</span>
                <span style={{fontSize:10,color:C.textLight}}>{(task.period||"mattina")==="mattina"?"☀️":"🌙"}</span>
                <button onClick={()=>toggleEssential(task.id)}
                  style={{background:task.essential?C.pink:"transparent",border:`1px solid ${task.essential?C.pinkDark:C.lav}`,
                    borderRadius:6,padding:"2px 7px",cursor:"pointer",fontSize:11,fontWeight:900,
                    color:task.essential?C.pinkDeep:C.textLight}}>⚡</button>
                <button onClick={()=>removeTask(task.id)} style={{background:C.pink,border:"none",borderRadius:7,
                  padding:"3px 9px",cursor:"pointer",color:C.pinkDeep,fontWeight:900,fontSize:13}}>✕</button>
              </div>
            ))}
          </div>
          <div style={{marginTop:12,padding:"10px",background:C.lav,borderRadius:12,fontSize:11,fontWeight:700,color:C.lavDeep,textAlign:"center"}}>
            🔗 <code>/api/status</code> → <strong>{(!vacation&&!essentialsDone)?"blocked: true":"blocked: false"}</strong>
          </div>
        </>)}
      </div>
    </div>
  );
}
