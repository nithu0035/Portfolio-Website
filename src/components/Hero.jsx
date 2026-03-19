import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const base = import.meta.env.BASE_URL || "/";
  const [taglineIndex, setTaglineIndex] = useState(0);

  const taglines = [
    "AI / ML Engineer · Final-Year B.Tech (AIML)",
    "RAG · LLM · FastAPI · Docker · XGBoost",
    "Building Intelligent Systems at Scale ⚡",
    "94% CNN · 90% ML · 40% RAG Boost",
  ];

  useEffect(() => {
    const text = "Turning data into decisions. Models into products.";
    const target = document.getElementById("typing-text");
    if (!target) return;
    let i = 0; target.textContent = "";
    const iv = setInterval(() => {
      target.textContent = text.slice(0, i); i++;
      if (i > text.length) clearInterval(iv);
    }, 55);
    return () => clearInterval(iv);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setTaglineIndex(p => (p + 1) % taglines.length), 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="hero"
      className="relative flex items-center overflow-hidden"
      style={{ background:"#050505", minHeight:"100vh" }}>

      {/* ── BACKGROUND ── */}
      <div style={{ position:"absolute", inset:0, zIndex:0, pointerEvents:"none" }}>
        <div style={{
          position:"absolute", inset:0,
          backgroundImage:"radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize:"28px 28px"
        }} />
        <div style={{
          position:"absolute", top:"-10%", left:"-5%",
          width:"55%", height:"75%", borderRadius:"50%",
          background:"radial-gradient(circle, rgba(99,102,241,0.09) 0%, transparent 65%)",
          filter:"blur(70px)"
        }} />
        <div style={{
          position:"absolute", bottom:"0", left:"20%",
          width:"40%", height:"40%", borderRadius:"50%",
          background:"radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 65%)",
          filter:"blur(60px)"
        }} />
        {[...Array(16)].map((_,i) => (
          <div key={i} className="particle" style={{
            left:`${Math.random()*100}%`, bottom:0,
            width:`${Math.random()*2+1}px`, height:`${Math.random()*2+1}px`,
            background: i%2===0 ? "rgba(99,102,241,0.6)" : "rgba(255,255,255,0.15)",
            animationDuration:`${Math.random()*14+10}s`,
            animationDelay:`${Math.random()*12}s`
          }} />
        ))}
      </div>

      {/* ── SPLINE ROBOT ── */}
      <div style={{
        position:"absolute", top:0, right:0,
        width:"54%", height:"100%",
        zIndex:1, overflow:"hidden",
        mixBlendMode:"lighten",
      }}>
        <div style={{
          position:"absolute", top:"50%", left:"50%",
          transform:"translate(-50%, -50%)",
          width:"420px", height:"420px", borderRadius:"50%",
          background:"radial-gradient(circle, rgba(99,102,241,0.12) 0%, rgba(139,92,246,0.06) 40%, transparent 70%)",
          filter:"blur(30px)", zIndex:2, pointerEvents:"none",
          animation:"glowPulse 3s ease-in-out infinite"
        }} />
        <div style={{
          position:"absolute", top:"50%", left:"50%",
          transform:"translate(-50%, -50%)",
          width:"460px", height:"460px", borderRadius:"50%",
          border:"1px solid rgba(99,102,241,0.15)",
          zIndex:2, pointerEvents:"none",
          animation:"spinRing 18s linear infinite"
        }} />
        <div style={{
          position:"absolute", top:"50%", left:"50%",
          transform:"translate(-50%, -50%)",
          width:"380px", height:"380px", borderRadius:"50%",
          border:"1px dashed rgba(139,92,246,0.12)",
          zIndex:2, pointerEvents:"none",
          animation:"spinRingRev 24s linear infinite"
        }} />
        <div style={{
          position:"absolute", top:"50%", left:"50%",
          width:"460px", height:"460px",
          marginTop:"-230px", marginLeft:"-230px",
          borderRadius:"50%", zIndex:3, pointerEvents:"none",
          animation:"spinRing 18s linear infinite"
        }}>
          <div style={{
            position:"absolute", top:"-4px", left:"50%",
            width:"8px", height:"8px", borderRadius:"50%",
            background:"rgba(99,102,241,0.9)",
            boxShadow:"0 0 14px rgba(99,102,241,1)",
            transform:"translateX(-50%)"
          }} />
        </div>
        <div style={{
          position:"absolute", top:"50%", left:"50%",
          width:"380px", height:"380px",
          marginTop:"-190px", marginLeft:"-190px",
          borderRadius:"50%", zIndex:3, pointerEvents:"none",
          animation:"spinRingRev 24s linear infinite"
        }}>
          <div style={{
            position:"absolute", bottom:"-4px", right:"20%",
            width:"6px", height:"6px", borderRadius:"50%",
            background:"rgba(139,92,246,0.8)",
            boxShadow:"0 0 12px rgba(139,92,246,0.9)"
          }} />
        </div>
        <iframe
          src="https://my.spline.design/untitled-tg8dVNV0ZntqVjcfL63WZVnm/"
          frameBorder="0"
          style={{
            position:"relative", zIndex:4,
            width:"115%", height:"calc(100% + 100px)",
            marginTop:"-20px", marginLeft:"-8%",
            border:"none", pointerEvents:"all",
            cursor:"grab", willChange:"transform",
          }}
          title="AI Robot" loading="eager" allow="autoplay"
        />
        <div style={{ position:"absolute", top:0, left:0, width:"42%", height:"100%", background:"linear-gradient(to right, #050505 0%, rgba(5,5,5,0.7) 50%, transparent 100%)", zIndex:6, pointerEvents:"none" }} />
        <div style={{ position:"absolute", top:0, left:0, right:0, height:"18%", background:"linear-gradient(to bottom, #050505, transparent)", zIndex:6, pointerEvents:"none" }} />
        <div style={{ position:"absolute", bottom:0, left:0, right:0, height:"18%", background:"linear-gradient(to top, #050505, transparent)", zIndex:6, pointerEvents:"none" }} />
        <div style={{ position:"absolute", top:0, right:0, width:"8%", height:"100%", background:"linear-gradient(to left, #050505, transparent)", zIndex:6, pointerEvents:"none" }} />
        <div style={{ position:"absolute", bottom:0, right:0, width:"240px", height:"62px", background:"#050505", zIndex:10, pointerEvents:"none" }} />
        <div style={{ position:"absolute", bottom:0, left:0, width:"210px", height:"62px", background:"#050505", zIndex:10, pointerEvents:"none" }} />
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="w-full max-w-7xl px-8 md:px-20"
        style={{ position:"relative", zIndex:6 }}>

        <motion.div className="md:w-[52%] flex flex-col" style={{ gap:16 }}
          initial={{ opacity:0, x:-50 }} animate={{ opacity:1, x:0 }}
          transition={{ duration:0.9, ease:"easeOut" }}>

          {/* ── BADGES ── */}
          <motion.div initial={{opacity:0,y:-10}} animate={{opacity:1,y:0}} transition={{delay:0.2}}
            style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
            <div style={{
              display:"inline-flex", alignItems:"center", gap:5, padding:"5px 13px",
              borderRadius:20, fontSize:11, fontWeight:500,
              background:"rgba(99,102,241,0.15)", border:"1px solid rgba(99,102,241,0.4)",
              color:"#c7d2fe"  /* bright indigo text — clearly visible */
            }}>
              <span style={{width:5,height:5,borderRadius:"50%",background:"#4ade80",display:"inline-block",animation:"glowPulse 2s infinite"}} />
              Open to AI/ML Internships
            </div>
            <div style={{
              display:"inline-flex", alignItems:"center", gap:5, padding:"5px 13px",
              borderRadius:20, fontSize:11, fontWeight:500,
              background:"rgba(16,185,129,0.12)", border:"1px solid rgba(16,185,129,0.35)",
              color:"#86efac"  /* bright green text — clearly visible */
            }}>
              <span style={{width:5,height:5,borderRadius:"50%",background:"#4ade80",display:"inline-block",animation:"glowPulse 2s infinite 0.6s"}} />
              Open to Entry-Level Jobs
            </div>
          </motion.div>

          {/* ── NAME ── */}
          <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:0.35}}>
            <p style={{
              fontFamily:"'Space Grotesk', sans-serif",
              fontSize:"clamp(13px,1.8vw,18px)", fontWeight:600,
              color:"#818cf8",  /* bright indigo — clearly visible */
              letterSpacing:"0.2em", textTransform:"uppercase",
              margin:"0 0 2px 3px"
            }}>
              Gudipatoju
            </p>
            <h1 style={{
              fontFamily:"'Space Grotesk', sans-serif",
              fontSize:"clamp(48px,7.5vw,86px)", fontWeight:700,
              lineHeight:0.92, letterSpacing:"-0.03em", margin:0,
              background:"linear-gradient(135deg, #ffffff 0%, #e0e7ff 30%, #c7d2fe 60%, #a5b4fc 100%)",
              WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
            }}>
              Nitesh
            </h1>
            <p style={{
              fontFamily:"'Inter', sans-serif",
              fontSize:"clamp(11px,1.3vw,14px)", fontWeight:500,
              color:"#818cf8",  /* bright — visible */
              letterSpacing:"0.06em", margin:"5px 0 0 3px"
            }}>
              AI / ML Engineer &nbsp;·&nbsp; Hyderabad, India
            </p>
          </motion.div>

          {/* ── TAGLINE — now bright ── */}
          <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5}}>
            <motion.p key={taglineIndex}
              initial={{opacity:0,x:-8}} animate={{opacity:1,x:0}} transition={{duration:0.35}}
              style={{
                fontFamily:"'Inter', sans-serif",
                fontSize:"clamp(12px,1.3vw,14px)",
                color:"#c7d2fe",  /* bright — was too dark before */
                fontWeight:500, letterSpacing:"0.03em",
                margin:0, minHeight:22,
                borderLeft:"2px solid rgba(99,102,241,0.6)",
                paddingLeft:10
              }}>
              {taglines[taglineIndex]}
            </motion.p>
          </motion.div>

          {/* ── TYPING TEXT — brighter ── */}
          <p id="typing-text" style={{
            fontFamily:"'Inter', sans-serif",
            fontSize:"clamp(11px,1.2vw,13px)",
            color:"#9ca3af",  /* was #374151 (too dark) — now clearly visible */
            fontStyle:"italic", margin:0, minHeight:18, letterSpacing:"0.02em"
          }} />

          {/* ── STATS — brighter labels ── */}
          <motion.div initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{delay:0.7}}
            style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
            {[
              {v:"~94%",l:"CNN Accuracy"},
              {v:"~90%",l:"ML Accuracy"},
              {v:"~40%",l:"RAG Boost"},
              {v:"4",l:"AI Projects"},
            ].map((s,i) => (
              <motion.div key={i} whileHover={{scale:1.06,y:-2}} transition={{duration:0.2}}
                style={{
                  padding:"8px 14px", borderRadius:10, textAlign:"center",
                  background:"rgba(99,102,241,0.08)",
                  border:"1px solid rgba(99,102,241,0.25)",  /* brighter border */
                  minWidth:72
                }}>
                <div style={{
                  fontFamily:"'Space Grotesk', sans-serif",
                  fontSize:18, fontWeight:700,
                  background:"linear-gradient(135deg,#fff 0%,#c7d2fe 100%)",
                  WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent"
                }}>{s.v}</div>
                <div style={{
                  fontFamily:"'Inter',sans-serif",
                  fontSize:10, color:"#a5b4fc",  /* was #6b7280 (too dark) — now #a5b4fc bright */
                  marginTop:3, fontWeight:400
                }}>{s.l}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* ── BUTTONS ROW 1 — much brighter ── */}
          <motion.div initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} transition={{delay:0.85}}
            style={{ display:"flex", flexDirection:"column", gap:8 }}>

            <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
              {/* Hire Me — solid white */}
              <a href="#contact" style={{
                fontFamily:"'Space Grotesk', sans-serif", fontSize:13, fontWeight:700,
                padding:"11px 24px", borderRadius:10,
                background:"#ffffff", color:"#000000",
                textDecoration:"none", display:"inline-flex", alignItems:"center", gap:6,
                transition:"all 0.2s", whiteSpace:"nowrap",
                boxShadow:"0 0 20px rgba(255,255,255,0.1)"
              }}
                onMouseEnter={e=>{e.currentTarget.style.background="#e0e7ff";e.currentTarget.style.transform="translateY(-2px)";e.currentTarget.style.boxShadow="0 6px 24px rgba(255,255,255,0.2)"}}
                onMouseLeave={e=>{e.currentTarget.style.background="#ffffff";e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="0 0 20px rgba(255,255,255,0.1)"}}>
                🚀 Hire Me
              </a>

              {/* View Resume — bright indigo */}
              <a href={`${base}my_resume.pdf`} target="_blank" rel="noopener noreferrer" style={{
                fontFamily:"'Space Grotesk', sans-serif", fontSize:13, fontWeight:600,
                padding:"11px 22px", borderRadius:10,
                background:"rgba(99,102,241,0.2)",
                border:"1px solid rgba(99,102,241,0.5)",  /* bright border */
                color:"#e0e7ff",  /* very bright text */
                textDecoration:"none", display:"inline-flex", alignItems:"center", gap:6,
                transition:"all 0.2s", whiteSpace:"nowrap", backdropFilter:"blur(12px)",
                boxShadow:"0 0 16px rgba(99,102,241,0.2)"
              }}
                onMouseEnter={e=>{e.currentTarget.style.background="rgba(99,102,241,0.35)";e.currentTarget.style.transform="translateY(-2px)";e.currentTarget.style.boxShadow="0 6px 24px rgba(99,102,241,0.3)"}}
                onMouseLeave={e=>{e.currentTarget.style.background="rgba(99,102,241,0.2)";e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="0 0 16px rgba(99,102,241,0.2)"}}>
                📄 View Resume
              </a>

              {/* Download CV — bright glass */}
              <a href={`${base}my_resume.pdf`} download="Nitesh_Gudipatoju_Resume.pdf" style={{
                fontFamily:"'Space Grotesk', sans-serif", fontSize:13, fontWeight:600,
                padding:"11px 22px", borderRadius:10,
                background:"rgba(255,255,255,0.08)",
                border:"1px solid rgba(255,255,255,0.22)",  /* bright border */
                color:"#f1f5f9",  /* very bright text */
                textDecoration:"none", display:"inline-flex", alignItems:"center", gap:6,
                transition:"all 0.2s", whiteSpace:"nowrap", backdropFilter:"blur(12px)"
              }}
                onMouseEnter={e=>{e.currentTarget.style.background="rgba(255,255,255,0.15)";e.currentTarget.style.transform="translateY(-2px)";e.currentTarget.style.borderColor="rgba(255,255,255,0.35)"}}
                onMouseLeave={e=>{e.currentTarget.style.background="rgba(255,255,255,0.08)";e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.borderColor="rgba(255,255,255,0.22)"}}>
                ⬇️ Download CV
              </a>
            </div>

            {/* ── BUTTONS ROW 2 — nav, brighter ── */}
            <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
              {[
                {label:"⚙️ Skills", href:"#skills"},
                {label:"💡 Projects", href:"#projects"},
                {label:"🎓 Certificates", href:"#certificates"},
                {label:"📬 Contact", href:"#contact"},
              ].map((btn,i) => (
                <a key={i} href={btn.href} style={{
                  fontFamily:"'Inter', sans-serif", fontSize:12, fontWeight:500,
                  padding:"8px 16px", borderRadius:8,
                  background:"rgba(255,255,255,0.05)",
                  border:"1px solid rgba(255,255,255,0.15)",  /* bright border */
                  color:"#d1d5db",  /* was #9ca3af — now much brighter */
                  textDecoration:"none", display:"inline-flex", alignItems:"center", gap:4,
                  transition:"all 0.2s", whiteSpace:"nowrap"
                }}
                  onMouseEnter={e=>{e.currentTarget.style.background="rgba(255,255,255,0.12)";e.currentTarget.style.color="#ffffff";e.currentTarget.style.borderColor="rgba(255,255,255,0.3)"}}
                  onMouseLeave={e=>{e.currentTarget.style.background="rgba(255,255,255,0.05)";e.currentTarget.style.color="#d1d5db";e.currentTarget.style.borderColor="rgba(255,255,255,0.15)"}}>
                  {btn.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* ── SOCIAL LINKS — clearly visible ── */}
          <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1}}
            style={{
              display:"flex", gap:0, alignItems:"center", flexWrap:"wrap",
              padding:"10px 14px", borderRadius:10,
              background:"rgba(255,255,255,0.03)",
              border:"1px solid rgba(255,255,255,0.08)"
            }}>
            {[
              {icon:"✉", label:"nithu00035@gmail.com", href:"mailto:nithu00035@gmail.com"},
              {icon:"in", label:"LinkedIn", href:"https://linkedin.com/in/nitesh-gudipatoju-7aba13382"},
              {icon:"gh", label:"GitHub", href:"https://github.com/nithu0035"},
            ].map((s,i) => (
              <React.Fragment key={i}>
                {i > 0 && <span style={{color:"#374151", margin:"0 10px", fontSize:12}}>|</span>}
                <a href={s.href}
                  target={s.href.startsWith("mailto") ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  style={{
                    fontFamily:"'Inter', sans-serif",
                    fontSize:12, fontWeight:500,
                    color:"#94a3b8",  /* bright enough — visible */
                    textDecoration:"none", transition:"color 0.2s",
                    display:"inline-flex", alignItems:"center", gap:5
                  }}
                  onMouseEnter={e=>e.currentTarget.style.color="#c7d2fe"}
                  onMouseLeave={e=>e.currentTarget.style.color="#94a3b8"}>
                  <span style={{
                    fontSize:10, fontWeight:700, letterSpacing:"0.05em",
                    color:"#6366f1",
                    background:"rgba(99,102,241,0.12)", border:"1px solid rgba(99,102,241,0.25)",
                    padding:"1px 6px", borderRadius:4
                  }}>{s.icon}</span>
                  {s.label}
                </a>
              </React.Fragment>
            ))}
          </motion.div>

        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.4}}
        style={{
          position:"absolute", bottom:24, left:"50%", transform:"translateX(-50%)",
          zIndex:6, display:"flex", flexDirection:"column", alignItems:"center", gap:5
        }}>
        <p style={{fontFamily:"'Inter',sans-serif", fontSize:9, color:"#4b5563", letterSpacing:"0.14em", textTransform:"uppercase", margin:0}}>scroll</p>
        <motion.div
          animate={{y:[0,8,0]}} transition={{repeat:Infinity, duration:1.5, ease:"easeInOut"}}
          style={{width:1, height:22, background:"linear-gradient(to bottom, rgba(99,102,241,0.6), transparent)"}}
        />
      </motion.div>

      <style>{`
        @keyframes glowPulse { 0%,100%{opacity:0.4} 50%{opacity:1} }
        @keyframes spinRing {
          from{transform:translate(-50%,-50%) rotate(0deg)}
          to{transform:translate(-50%,-50%) rotate(360deg)}
        }
        @keyframes spinRingRev {
          from{transform:translate(-50%,-50%) rotate(360deg)}
          to{transform:translate(-50%,-50%) rotate(0deg)}
        }
      `}</style>
    </section>
  );
}
