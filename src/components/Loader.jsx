import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);

  const statuses = [
    "Initializing AI systems...",
    "Loading ML models...",
    "Building portfolio...",
    "Almost ready...",
    "Welcome!",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        const next = p + 1;
        if (next <= 20) setStatusIndex(0);
        else if (next <= 45) setStatusIndex(1);
        else if (next <= 70) setStatusIndex(2);
        else if (next <= 90) setStatusIndex(3);
        else setStatusIndex(4);
        if (next >= 100) clearInterval(interval);
        return Math.min(next, 100);
      });
    }, 42);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 100,
      background: "#050505",
      overflow: "hidden", color: "white"
    }}>

      {/* ── SPLINE SCENE — fullscreen, blended ── */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        mixBlendMode: "lighten", pointerEvents: "none", overflow: "hidden"
      }}>
        <iframe
          src="https://my.spline.design/untitled-sOO5khDfu7ucQ9jLqjcx7BVz/"
          frameBorder="0"
          style={{ width: "110%", height: "110%", marginTop: "-5%", marginLeft: "-5%", border: "none" }}
          title="Spline Scene" loading="eager" allow="autoplay"
        />
        {/* Vignette — keeps right side clear for Spline, darkens left for text */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to right, rgba(5,5,5,0.92) 0%, rgba(5,5,5,0.7) 40%, rgba(5,5,5,0.15) 70%, transparent 100%)",
          pointerEvents: "none"
        }} />
        {/* Top/bottom fades */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "15%", background: "linear-gradient(to bottom, #050505, transparent)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "15%", background: "linear-gradient(to top, #050505, transparent)", pointerEvents: "none" }} />
        {/* Hide watermarks */}
        <div style={{ position: "absolute", bottom: 0, right: 0, width: 240, height: 62, background: "#050505", zIndex: 5, pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, width: 210, height: 62, background: "#050505", zIndex: 5, pointerEvents: "none" }} />
      </div>

      {/* ── BACKGROUND EFFECTS ── */}
      <div style={{ position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div style={{ position: "absolute", top: "-10%", left: "-5%", width: "45%", height: "70%", borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 65%)", filter: "blur(80px)" }} />
        <div style={{ position: "absolute", bottom: "-10%", left: "5%", width: "35%", height: "50%", borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 65%)", filter: "blur(70px)" }} />
        {[...Array(14)].map((_, i) => (
          <motion.div key={i}
            style={{
              position: "absolute",
              left: `${Math.random() * 50}%`,
              bottom: 0,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              borderRadius: "50%",
              background: i % 2 === 0 ? "rgba(99,102,241,0.6)" : "rgba(255,255,255,0.2)",
            }}
            animate={{ y: [0, -(Math.random() * 300 + 200)], opacity: [0, 0.8, 0] }}
            transition={{ duration: Math.random() * 8 + 8, repeat: Infinity, ease: "easeOut", delay: Math.random() * 8 }}
          />
        ))}
      </div>

      {/* ── CONTENT — left aligned like Hero ── */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 2,
        display: "flex", alignItems: "center",
        padding: "0 8% 0 8%",
      }}>
        <motion.div
          style={{ maxWidth: "52%", display: "flex", flexDirection: "column", gap: 14 }}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              padding: "5px 14px", borderRadius: 20, fontSize: 11, fontWeight: 500,
              background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.28)",
              color: "#c7d2fe", width: "fit-content"
            }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80", display: "inline-block", animation: "pulse 2s infinite" }} />
            Open to AI/ML Internships
          </motion.div>

          {/* ── NAME ── */}
          <motion.div
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.9 }}
            style={{ lineHeight: 1 }}>

            {/* Surname */}
            <p style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(13px, 1.8vw, 20px)",
              fontWeight: 600,
              color: "#818cf8",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              margin: "0 0 2px 3px"
            }}>
              Gudipatoju
            </p>

            {/* First name — big gradient */}
            <h1 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(52px, 8.5vw, 100px)",
              fontWeight: 700,
              lineHeight: 0.9,
              letterSpacing: "-0.04em",
              margin: 0,
              background: "linear-gradient(135deg, #ffffff 0%, #e0e7ff 25%, #c7d2fe 55%, #a5b4fc 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Nitesh
            </h1>

            {/* Role */}
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(11px, 1.3vw, 14px)",
              fontWeight: 500,
              color: "#6366f1",
              letterSpacing: "0.06em",
              margin: "8px 0 0 3px"
            }}>
              AI / ML Engineer &nbsp;·&nbsp; Final-Year B.Tech (AIML)
            </p>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {[
              { v: "~94%", l: "CNN Accuracy" },
              { v: "~90%", l: "ML Accuracy" },
              { v: "~40%", l: "RAG Boost" },
            ].map((s, i) => (
              <div key={i} style={{
                padding: "8px 14px", borderRadius: 10, textAlign: "center",
                background: "rgba(99,102,241,0.06)",
                border: "1px solid rgba(99,102,241,0.16)"
              }}>
                <div style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 16, fontWeight: 700,
                  background: "linear-gradient(135deg, #fff, #a5b4fc)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
                }}>{s.v}</div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, color: "#6366f1", marginTop: 2 }}>{s.l}</div>
              </div>
            ))}
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            style={{ width: "100%", maxWidth: 280 }}>
            <div style={{ width: "100%", height: 2, borderRadius: 2, background: "rgba(255,255,255,0.06)", overflow: "hidden", marginBottom: 8 }}>
              <div style={{
                height: "100%", borderRadius: 2,
                background: "linear-gradient(90deg, #4f46e5, #818cf8, #c7d2fe)",
                boxShadow: "0 0 12px rgba(99,102,241,0.8)",
                width: `${progress}%`,
                transition: "width 0.08s linear"
              }} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <motion.p
                key={statusIndex}
                initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: "#6366f1", margin: 0 }}>
                {statuses[statusIndex]}
              </motion.p>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, color: "#818cf8", margin: 0, fontWeight: 600 }}>
                {progress}%
              </p>
            </div>
          </motion.div>

        </motion.div>
      </div>

      <style>{`@keyframes pulse{0%,100%{opacity:0.4}50%{opacity:1}}`}</style>
    </div>
  );
}