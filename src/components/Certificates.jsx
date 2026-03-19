import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const certificates = [
  {
    title: "Generative AI Studio",
    issuer: "Google Cloud",
    year: "2025",
    desc: "LLM workflows, prompt design, and cloud-based AI deployment.",
    skills: ["Prompt Engineering", "LLM Workflows", "Cloud AI"],
    emoji: "🧠",
    accent: "#60a5fa",
    glow: "rgba(96,165,250,0.14)",
    border: "rgba(96,165,250,0.22)",
    borderHover: "rgba(96,165,250,0.5)",
    bg: "rgba(96,165,250,0.05)",
    pillBg: "rgba(96,165,250,0.08)",
    pillBorder: "rgba(96,165,250,0.2)",
    pillColor: "#bfdbfe",
    file: "generative_ai_studio.pdf",
  },
  {
    title: "Data Analysis Essentials",
    issuer: "Microsoft & LinkedIn",
    year: "2025",
    desc: "Data analysis, visualisation, and analytics best practices.",
    skills: ["Data Analysis", "Visualisation", "Analytics"],
    emoji: "📊",
    accent: "#818cf8",
    glow: "rgba(129,140,248,0.14)",
    border: "rgba(129,140,248,0.22)",
    borderHover: "rgba(129,140,248,0.5)",
    bg: "rgba(129,140,248,0.05)",
    pillBg: "rgba(129,140,248,0.08)",
    pillBorder: "rgba(129,140,248,0.2)",
    pillColor: "#c7d2fe",
    file: "microsoft_linkedin.pdf",
  },
  {
    title: "Data Analytics Simulation",
    issuer: "Deloitte",
    year: "Sep–Oct 2025",
    desc: "Forensic data analysis and insight reporting on real-world client-style datasets.",
    skills: ["Forensic Analytics", "Insight Reporting", "Data Strategy"],
    emoji: "🔍",
    accent: "#4ade80",
    glow: "rgba(74,222,128,0.12)",
    border: "rgba(74,222,128,0.2)",
    borderHover: "rgba(74,222,128,0.45)",
    bg: "rgba(74,222,128,0.04)",
    pillBg: "rgba(74,222,128,0.07)",
    pillBorder: "rgba(74,222,128,0.18)",
    pillColor: "#bbf7d0",
    file: "deloitte.pdf",
  },
  {
    title: "GenAI-Powered Analytics",
    issuer: "Tata Group",
    year: "Sep 2025",
    desc: "Applied EDA, AI-based prediction, and business data storytelling.",
    skills: ["EDA", "AI Prediction", "Risk Profiling"],
    emoji: "⚡",
    accent: "#fb923c",
    glow: "rgba(251,146,60,0.12)",
    border: "rgba(251,146,60,0.2)",
    borderHover: "rgba(251,146,60,0.45)",
    bg: "rgba(251,146,60,0.04)",
    pillBg: "rgba(251,146,60,0.07)",
    pillBorder: "rgba(251,146,60,0.18)",
    pillColor: "#fed7aa",
    file: "tata_and_forage.pdf",
  },
];

export default function Certificates() {
  const [selected, setSelected] = useState(null);
  const base = import.meta.env.BASE_URL || "/";
  const getCertPath = (file) => `${base}my_certificates/${file}`;

  return (
    <section id="certificates"
      className="relative overflow-hidden"
      style={{ background: "#050505", padding: "96px 0" }}>

      {/* ── BACKGROUND ── */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(99,102,241,0.05) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.3), transparent)" }} />
        <div style={{ position: "absolute", top: "-10%", left: "-5%", width: "55%", height: "65%", borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.09) 0%, transparent 65%)", filter: "blur(70px)" }} />
        <div style={{ position: "absolute", bottom: "-10%", right: "-5%", width: "50%", height: "55%", borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 65%)", filter: "blur(65px)" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.2), transparent)" }} />
        {[...Array(12)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`, bottom: 0,
            width: `${Math.random() * 2 + 1}px`, height: `${Math.random() * 2 + 1}px`,
            background: i % 2 === 0 ? "rgba(99,102,241,0.5)" : "rgba(255,255,255,0.15)",
            animationDuration: `${Math.random() * 14 + 10}s`,
            animationDelay: `${Math.random() * 12}s`
          }} />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-8 md:px-20" style={{ position: "relative", zIndex: 1 }}>

        {/* ── HEADER ── */}
        <motion.div className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }} viewport={{ once: true }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            padding: "4px 14px", borderRadius: 20, fontSize: 11, fontWeight: 500,
            background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.28)",
            color: "#c7d2fe", marginBottom: 14
          }}>
            🏆 Verified Achievements
          </div>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(28px,4vw,42px)", fontWeight: 700,
            color: "#ffffff", lineHeight: 1.1, margin: "0 0 10px"
          }}>
            My{" "}
            <span style={{
              background: "linear-gradient(135deg, #a5b4fc, #818cf8, #6366f1)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
            }}>
              Certifications
            </span>
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#a5b4fc", letterSpacing: "0.03em", margin: 0 }}>
            Verified achievements from Google Cloud · Microsoft · Deloitte · Tata Group
          </p>
        </motion.div>

        {/* ── CARDS ── */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16, marginBottom: 48 }}>
          {certificates.map((c, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, borderColor: c.borderHover, boxShadow: `0 8px 32px ${c.glow}` }}
              onClick={() => setSelected(c)}
              style={{
                padding: "24px", borderRadius: 18,
                background: c.bg, border: `1px solid ${c.border}`,
                backdropFilter: "blur(20px)", transition: "all 0.3s ease",
                cursor: "pointer", position: "relative", overflow: "hidden",
                display: "flex", flexDirection: "column", gap: 14,
              }}>
              <div style={{ position: "absolute", top: 0, left: "10%", right: "10%", height: 1, background: `linear-gradient(90deg, transparent, ${c.accent}80, transparent)` }} />

              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 46, height: 46, borderRadius: 12, background: c.pillBg, border: `1px solid ${c.pillBorder}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>
                  {c.emoji}
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, fontWeight: 600, color: "#f1f5f9", margin: 0 }}>{c.title}</h3>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, margin: "3px 0 0", color: c.accent, fontWeight: 500 }}>{c.issuer} · {c.year}</p>
                </div>
              </div>

              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#94a3b8", lineHeight: 1.7, margin: 0, flex: 1 }}>{c.desc}</p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {c.skills.map((s, j) => (
                  <span key={j} style={{ padding: "3px 10px", borderRadius: 6, fontSize: 11, fontWeight: 500, fontFamily: "'Inter', sans-serif", background: c.pillBg, border: `1px solid ${c.pillBorder}`, color: c.pillColor }}>{s}</span>
                ))}
              </div>

              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 600, color: c.accent, display: "flex", alignItems: "center", gap: 5 }}>
                View Certificate →
              </span>
            </motion.div>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ width: 160, height: 1, background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.4), rgba(139,92,246,0.4), transparent)" }} />
        </div>
      </div>

      {/* ── MODAL — no iframe/embed, just cert details + buttons ── */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            style={{
              position: "fixed", inset: 0, zIndex: 50,
              background: "rgba(0,0,0,0.88)", backdropFilter: "blur(14px)",
              display: "flex", alignItems: "center", justifyContent: "center", padding: 20
            }}>

            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 120, damping: 16 }}
              onClick={e => e.stopPropagation()}
              style={{
                width: "90%", maxWidth: 520,
                background: "#0a0a0a",
                border: `1px solid ${selected.borderHover}`,
                borderRadius: 22, overflow: "hidden",
                boxShadow: `0 0 80px ${selected.glow}, 0 0 40px rgba(0,0,0,0.5)`,
              }}>

              {/* Modal top accent */}
              <div style={{ height: 3, background: `linear-gradient(90deg, transparent, ${selected.accent}, transparent)` }} />

              {/* Modal content */}
              <div style={{ padding: "32px" }}>

                {/* Close button */}
                <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 20 }}>
                  <button onClick={() => setSelected(null)}
                    style={{
                      width: 32, height: 32, borderRadius: "50%",
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      color: "#94a3b8", fontSize: 16, cursor: "pointer",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      transition: "all 0.2s"
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.14)"; e.currentTarget.style.color = "#fff"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.color = "#94a3b8"; }}>
                    ✕
                  </button>
                </div>

                {/* Big emoji */}
                <div style={{ textAlign: "center", marginBottom: 20 }}>
                  <div style={{
                    width: 80, height: 80, borderRadius: 20, margin: "0 auto 16px",
                    background: selected.pillBg, border: `1px solid ${selected.pillBorder}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 38, boxShadow: `0 0 30px ${selected.glow}`
                  }}>
                    {selected.emoji}
                  </div>

                  {/* Issuer badge */}
                  <div style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    padding: "4px 14px", borderRadius: 20, fontSize: 11, fontWeight: 600,
                    background: selected.pillBg, border: `1px solid ${selected.pillBorder}`,
                    color: selected.accent, marginBottom: 12
                  }}>
                    {selected.issuer} · {selected.year}
                  </div>

                  <h3 style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 22, fontWeight: 700, color: "#ffffff", margin: "0 0 8px"
                  }}>
                    {selected.title}
                  </h3>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#94a3b8", lineHeight: 1.7, margin: 0 }}>
                    {selected.desc}
                  </p>
                </div>

                {/* Skills */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center", marginBottom: 28 }}>
                  {selected.skills.map((s, j) => (
                    <span key={j} style={{
                      padding: "5px 14px", borderRadius: 8, fontSize: 12, fontWeight: 500,
                      fontFamily: "'Inter', sans-serif",
                      background: selected.pillBg, border: `1px solid ${selected.pillBorder}`,
                      color: selected.pillColor,
                    }}>
                      {s}
                    </span>
                  ))}
                </div>

                {/* Divider */}
                <div style={{ height: 1, background: "rgba(255,255,255,0.07)", margin: "0 0 24px" }} />

                {/* Action buttons */}
                <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
                  {/* Open PDF in new tab — most reliable */}
                  <a href={getCertPath(selected.file)} target="_blank" rel="noopener noreferrer"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, fontWeight: 700,
                      padding: "12px 28px", borderRadius: 12,
                      background: "#ffffff", color: "#000000",
                      textDecoration: "none",
                      display: "inline-flex", alignItems: "center", gap: 8,
                      transition: "all 0.2s",
                      boxShadow: `0 0 20px rgba(255,255,255,0.08)`
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = "#e0e7ff"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "#ffffff"; e.currentTarget.style.transform = "translateY(0)"; }}>
                    📄 View Certificate
                  </a>

                  {/* Download */}
                  <a href={getCertPath(selected.file)} download
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, fontWeight: 600,
                      padding: "12px 22px", borderRadius: 12,
                      background: selected.pillBg, border: `1px solid ${selected.pillBorder}`,
                      color: selected.accent, textDecoration: "none",
                      display: "inline-flex", alignItems: "center", gap: 8,
                      transition: "all 0.2s"
                    }}
                    onMouseEnter={e => { e.currentTarget.style.opacity = "0.8"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                    onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = "translateY(0)"; }}>
                    ⬇️ Download
                  </a>
                </div>

                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 11, color: "#374151",
                  textAlign: "center", marginTop: 16, margin: "16px 0 0"
                }}>
                  Click "View Certificate" to open the PDF in a new tab
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
