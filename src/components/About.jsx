import React from "react";
import { motion } from "framer-motion";
import avatar from "../assets/robot.gif";

export default function About() {
  const base = import.meta.env.BASE_URL || "/";

  const stats = [
    { val:"~94%", label:"CNN Accuracy" },
    { val:"~90%", label:"ML Accuracy" },
    { val:"~40%", label:"RAG Boost" },
    { val:"4",    label:"AI Projects" },
  ];

  const cards = [
    { icon:"🎓", title:"Final-Year", sub:"B.Tech AIML · 2026" },
    { icon:"💡", title:"4 Projects",  sub:"End-to-End AI/ML" },
    { icon:"🧠", title:"RAG · LLM",   sub:"FastAPI · Docker" },
    { icon:"🏆", title:"Certified",   sub:"Google · Microsoft" },
  ];

  return (
    <section id="about"
      className="relative overflow-hidden"
      style={{ background:"#050505", padding:"96px 0" }}>

      {/* ── BACKGROUND — cyan-teal accent (different from Hero indigo) ── */}
      <div style={{ position:"absolute", inset:0, zIndex:0, pointerEvents:"none" }}>
        {/* Dot grid — cyan tinted */}
        <div style={{
          position:"absolute", inset:0,
          backgroundImage:"radial-gradient(rgba(6,182,212,0.04) 1px, transparent 1px)",
          backgroundSize:"28px 28px"
        }} />
        {/* Top accent line */}
        <div style={{
          position:"absolute", top:0, left:0, right:0, height:1,
          background:"linear-gradient(90deg, transparent, rgba(6,182,212,0.2), transparent)"
        }} />
        {/* Right glow */}
        <div style={{
          position:"absolute", top:"-5%", right:"-5%",
          width:"50%", height:"60%", borderRadius:"50%",
          background:"radial-gradient(circle, rgba(6,182,212,0.07) 0%, transparent 65%)",
          filter:"blur(60px)"
        }} />
        {/* Bottom left glow */}
        <div style={{
          position:"absolute", bottom:"5%", left:"0%",
          width:"35%", height:"45%", borderRadius:"50%",
          background:"radial-gradient(circle, rgba(20,184,166,0.05) 0%, transparent 65%)",
          filter:"blur(50px)"
        }} />
        {/* Bottom accent line */}
        <div style={{
          position:"absolute", bottom:0, left:0, right:0, height:1,
          background:"linear-gradient(90deg, transparent, rgba(6,182,212,0.1), transparent)"
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-8 md:px-20" style={{position:"relative", zIndex:1}}>

        {/* Section label */}
        <motion.div
          initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}}
          transition={{duration:0.6}} viewport={{once:true}}
          style={{ marginBottom:48 }}>
          <div style={{
            display:"inline-flex", alignItems:"center", gap:6,
            padding:"4px 14px", borderRadius:20, fontSize:11, fontWeight:500,
            background:"rgba(6,182,212,0.1)", border:"1px solid rgba(6,182,212,0.25)",
            color:"#67e8f9", marginBottom:12
          }}>
            About Me
          </div>
          <h2 style={{
            fontFamily:"'Space Grotesk', sans-serif",
            fontSize:"clamp(28px,4vw,42px)", fontWeight:700,
            color:"#ffffff", lineHeight:1.1,
            margin:0
          }}>
            The Engineer{" "}
            <span style={{
              background:"linear-gradient(90deg, #06b6d4, #14b8a6)",
              WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent"
            }}>
              Behind the Code
            </span>
          </h2>
        </motion.div>

        {/* Main 2-col layout */}
        <div className="flex flex-col md:flex-row gap-14 items-center">

          {/* LEFT — Avatar with rings */}
          <motion.div
            initial={{opacity:0,x:-40}} whileInView={{opacity:1,x:0}}
            transition={{duration:0.9}} viewport={{once:true}}
            className="flex-shrink-0 flex justify-center">

            <div style={{ position:"relative", width:280, height:280, display:"flex", alignItems:"center", justifyContent:"center" }}>
              {/* Outer spinning ring */}
              <div style={{
                position:"absolute", inset:-28, borderRadius:"50%",
                border:"1px solid rgba(6,182,212,0.18)",
                animation:"spinSlow 22s linear infinite"
              }} />
              {/* Inner dashed ring */}
              <div style={{
                position:"absolute", inset:-14, borderRadius:"50%",
                border:"1px dashed rgba(20,184,166,0.12)",
                animation:"spinRevSlow 30s linear infinite"
              }} />
              {/* Glow behind avatar */}
              <div style={{
                position:"absolute", inset:0, borderRadius:"50%",
                background:"radial-gradient(circle, rgba(6,182,212,0.1), transparent 70%)",
                filter:"blur(20px)"
              }} />
              {/* Orbiting dot */}
              <div style={{
                position:"absolute", inset:-28,
                borderRadius:"50%",
                animation:"spinSlow 22s linear infinite"
              }}>
                <div style={{
                  position:"absolute", top:"-4px", left:"50%",
                  width:"8px", height:"8px", borderRadius:"50%",
                  background:"rgba(6,182,212,0.9)",
                  boxShadow:"0 0 12px rgba(6,182,212,1)",
                  transform:"translateX(-50%)"
                }} />
              </div>
              {/* Avatar image */}
              <img src={avatar} alt="Nitesh Gudipatoju"
                style={{
                  width:230, height:230, borderRadius:"50%",
                  objectFit:"cover", position:"relative", zIndex:2,
                  border:"1px solid rgba(6,182,212,0.25)",
                  boxShadow:"0 0 40px rgba(6,182,212,0.12), 0 0 80px rgba(6,182,212,0.06)"
                }} />
            </div>
          </motion.div>

          {/* RIGHT — Content */}
          <motion.div
            initial={{opacity:0,x:40}} whileInView={{opacity:1,x:0}}
            transition={{duration:0.9}} viewport={{once:true}}
            className="flex flex-col" style={{ gap:20, flex:1 }}>

            {/* Bio */}
            <div style={{
              padding:"22px 24px", borderRadius:16,
              background:"rgba(255,255,255,0.03)",
              border:"1px solid rgba(6,182,212,0.12)",
              backdropFilter:"blur(20px)"
            }}>
              <p style={{
                fontFamily:"'Inter', sans-serif",
                fontSize:14, color:"#cbd5e1",  /* bright — clearly visible */
                lineHeight:1.85, margin:0
              }}>
                I'm{" "}
                <strong style={{color:"#ffffff", fontWeight:600}}>Gudipatoju Nitesh</strong>
                , a final-year{" "}
                <span style={{color:"#22d3ee", fontWeight:500}}>AI & ML engineer</span>{" "}
                with proven results — ~94% CNN accuracy on image classification, ~90% accuracy on
                agro-meteorological prediction, and ~40% improvement in chatbot relevance via
                ChromaDB RAG pipelines.
              </p>
              <p style={{
                fontFamily:"'Inter', sans-serif",
                fontSize:14, color:"#94a3b8",  /* visible */
                lineHeight:1.85, margin:"14px 0 0"
              }}>
                Skilled in end-to-end delivery — model training, feature engineering,{" "}
                <span style={{color:"#67e8f9"}}>FastAPI</span> backend design, and{" "}
                <span style={{color:"#67e8f9"}}>Docker</span> deployment. Completed industry
                simulations with <span style={{color:"#a5f3fc"}}>Deloitte</span> &{" "}
                <span style={{color:"#a5f3fc"}}>Tata Group</span>. Certified by{" "}
                <span style={{color:"#a5f3fc"}}>Google Cloud</span> &{" "}
                <span style={{color:"#a5f3fc"}}>Microsoft</span>.
              </p>
            </div>

            {/* Stats row */}
            <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
              {stats.map((s,i) => (
                <motion.div key={i} whileHover={{scale:1.05,y:-2}} transition={{duration:0.2}}
                  style={{
                    padding:"10px 16px", borderRadius:12, textAlign:"center",
                    background:"rgba(6,182,212,0.07)",
                    border:"1px solid rgba(6,182,212,0.2)",
                    flex:1, minWidth:70
                  }}>
                  <div style={{
                    fontFamily:"'Space Grotesk', sans-serif",
                    fontSize:20, fontWeight:700,
                    background:"linear-gradient(135deg, #fff, #67e8f9)",
                    WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent"
                  }}>{s.val}</div>
                  <div style={{
                    fontFamily:"'Inter', sans-serif",
                    fontSize:10, color:"#67e8f9",  /* bright cyan — visible */
                    marginTop:3
                  }}>{s.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Info cards */}
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
              {cards.map((c,i) => (
                <motion.div key={i}
                  initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}}
                  transition={{duration:0.4, delay:i*0.08}} viewport={{once:true}}
                  whileHover={{scale:1.03, borderColor:"rgba(6,182,212,0.3)"}}
                  style={{
                    padding:"14px 16px", borderRadius:12,
                    background:"rgba(255,255,255,0.03)",
                    border:"1px solid rgba(6,182,212,0.14)",
                    backdropFilter:"blur(12px)",
                    display:"flex", alignItems:"center", gap:12,
                    transition:"all 0.25s"
                  }}>
                  <span style={{fontSize:22}}>{c.icon}</span>
                  <div>
                    <div style={{
                      fontFamily:"'Space Grotesk', sans-serif",
                      fontSize:13, fontWeight:600,
                      color:"#e2e8f0"  /* bright — visible */
                    }}>{c.title}</div>
                    <div style={{
                      fontFamily:"'Inter', sans-serif",
                      fontSize:11, color:"#67e8f9",  /* bright cyan */
                      marginTop:2
                    }}>{c.sub}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Buttons */}
            <div style={{ display:"flex", gap:10, flexWrap:"wrap" }}>
              <a href={`${base}my_resume.pdf`} target="_blank" rel="noopener noreferrer"
                style={{
                  fontFamily:"'Space Grotesk', sans-serif", fontSize:13, fontWeight:700,
                  padding:"11px 24px", borderRadius:10,
                  background:"#ffffff", color:"#000000",
                  textDecoration:"none", display:"inline-flex", alignItems:"center", gap:6,
                  transition:"all 0.2s",
                  boxShadow:"0 0 20px rgba(255,255,255,0.08)"
                }}
                onMouseEnter={e=>{e.currentTarget.style.background="#cffafe";e.currentTarget.style.transform="translateY(-2px)"}}
                onMouseLeave={e=>{e.currentTarget.style.background="#ffffff";e.currentTarget.style.transform="translateY(0)"}}>
                📄 View Resume
              </a>
              <a href={`${base}my_resume.pdf`} download="Nitesh_Gudipatoju_Resume.pdf"
                style={{
                  fontFamily:"'Space Grotesk', sans-serif", fontSize:13, fontWeight:600,
                  padding:"11px 22px", borderRadius:10,
                  background:"rgba(6,182,212,0.12)",
                  border:"1px solid rgba(6,182,212,0.35)",
                  color:"#cffafe",  /* bright cyan text */
                  textDecoration:"none", display:"inline-flex", alignItems:"center", gap:6,
                  transition:"all 0.2s", backdropFilter:"blur(12px)",
                  boxShadow:"0 0 16px rgba(6,182,212,0.12)"
                }}
                onMouseEnter={e=>{e.currentTarget.style.background="rgba(6,182,212,0.22)";e.currentTarget.style.transform="translateY(-2px)"}}
                onMouseLeave={e=>{e.currentTarget.style.background="rgba(6,182,212,0.12)";e.currentTarget.style.transform="translateY(0)"}}>
                ⬇️ Download CV
              </a>
              <a href="#contact"
                style={{
                  fontFamily:"'Space Grotesk', sans-serif", fontSize:13, fontWeight:600,
                  padding:"11px 22px", borderRadius:10,
                  background:"rgba(255,255,255,0.06)",
                  border:"1px solid rgba(255,255,255,0.18)",
                  color:"#f1f5f9",  /* bright white */
                  textDecoration:"none", display:"inline-flex", alignItems:"center", gap:6,
                  transition:"all 0.2s", backdropFilter:"blur(12px)"
                }}
                onMouseEnter={e=>{e.currentTarget.style.background="rgba(255,255,255,0.12)";e.currentTarget.style.transform="translateY(-2px)"}}
                onMouseLeave={e=>{e.currentTarget.style.background="rgba(255,255,255,0.06)";e.currentTarget.style.transform="translateY(0)"}}>
                📬 Hire Me
              </a>
            </div>

          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes spinSlow { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes spinRevSlow { from{transform:rotate(360deg)} to{transform:rotate(0deg)} }
      `}</style>
    </section>
  );
}
