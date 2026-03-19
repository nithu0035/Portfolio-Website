import React, { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "AI Chatbot with Personality",
    emoji: "🤖",
    period: "Nov 2025 – Feb 2026",
    accuracy: "~40% better relevance",
    // Blue — communication, tech, intelligence
    accent: "#60a5fa",
    glow: "rgba(96,165,250,0.12)",
    border: "rgba(96,165,250,0.22)",
    borderHover: "rgba(96,165,250,0.45)",
    pillBg: "rgba(96,165,250,0.08)",
    pillBorder: "rgba(96,165,250,0.2)",
    pillColor: "#bfdbfe",
    tagBg: "rgba(96,165,250,0.1)",
    tagBorder: "rgba(96,165,250,0.25)",
    tagColor: "#93c5fd",
    description:
      "Context-aware AI chatbot powered by ChromaDB RAG pipeline for persistent memory. Improved response relevance by ~40%. Built Whisper speech-to-text, 5 JWT-secured FastAPI endpoints, containerised with Docker.",
    tech: ["Python", "FastAPI", "ChromaDB", "Whisper", "LangChain", "Docker", "JWT"],
    link: "https://github.com/nithu0035/AI-chatbot",
  },
  {
    title: "AI Smart Irrigation System",
    emoji: "🌾",
    period: "Jan 2026 – Present",
    accuracy: "~90% accuracy",
    // Green — nature, agriculture, environment
    accent: "#4ade80",
    glow: "rgba(74,222,128,0.1)",
    border: "rgba(74,222,128,0.2)",
    borderHover: "rgba(74,222,128,0.42)",
    pillBg: "rgba(74,222,128,0.07)",
    pillBorder: "rgba(74,222,128,0.18)",
    pillColor: "#bbf7d0",
    tagBg: "rgba(74,222,128,0.08)",
    tagBorder: "rgba(74,222,128,0.22)",
    tagColor: "#86efac",
    description:
      "Weather-aware crop guidance using XGBoost, Random Forest & Gradient Boosting. XGBoost outperformed baseline by ~15%. AI crop advisory module estimated to reduce water usage by ~20%.",
    tech: ["Python", "XGBoost", "Random Forest", "FastAPI", "Streamlit", "Weather API", "Docker"],
    link: "https://github.com/nithu0035/smart-irrigation-system-with-weather-aware-crop-guidance",
  },
  {
    title: "Hair Disease Detection",
    emoji: "🧬",
    period: "2025",
    accuracy: "~94% accuracy",
    // Pink/Rose — health, medical, biology
    accent: "#f472b6",
    glow: "rgba(244,114,182,0.1)",
    border: "rgba(244,114,182,0.2)",
    borderHover: "rgba(244,114,182,0.42)",
    pillBg: "rgba(244,114,182,0.07)",
    pillBorder: "rgba(244,114,182,0.18)",
    pillColor: "#fbcfe8",
    tagBg: "rgba(244,114,182,0.08)",
    tagBorder: "rgba(244,114,182,0.22)",
    tagColor: "#f9a8d4",
    description:
      "Custom CNN for scalp disease classification — alopecia, dandruff, psoriasis. OpenCV augmentation reduced misclassification by ~18% vs baseline. Inference runs under 200ms per image, designed for web/mobile health deployment.",
    tech: ["Python", "TensorFlow", "CNN", "OpenCV", "Keras", "Deep Learning"],
    link: "",
  },
  {
    title: "Placement Intelligence Platform",
    emoji: "🎯",
    period: "Aug 2025 – Jan 2026",
    accuracy: "~82% accuracy",
    // Amber/Orange — career, opportunity, achievement
    accent: "#fb923c",
    glow: "rgba(251,146,60,0.1)",
    border: "rgba(251,146,60,0.2)",
    borderHover: "rgba(251,146,60,0.42)",
    pillBg: "rgba(251,146,60,0.07)",
    pillBorder: "rgba(251,146,60,0.18)",
    pillColor: "#fed7aa",
    tagBg: "rgba(251,146,60,0.08)",
    tagBorder: "rgba(251,146,60,0.22)",
    tagColor: "#fdba74",
    description:
      "ML-powered student placement prediction with career fit analysis, skill gap detection & ATS readiness scoring. 5-fold cross-validated Random Forest at ~82% accuracy with live Streamlit dashboard.",
    tech: ["Python", "Random Forest", "Scikit-learn", "Streamlit", "Pandas", "Pickle"],
    link: "https://github.com/nithu0035/placement-intelligence-platform",
  },
];

export default function Projects() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section id="projects"
      className="relative overflow-hidden"
      style={{ background: "#050505", padding: "96px 0" }}>

      {/* ── BACKGROUND ── */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}>
        {/* Dot grid */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "28px 28px"
        }} />
        {/* Top accent */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 1,
          background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.25), transparent)"
        }} />
        {/* Blue glow top-left */}
        <div style={{
          position: "absolute", top: "-10%", left: "-5%",
          width: "45%", height: "55%", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(96,165,250,0.07) 0%, transparent 65%)",
          filter: "blur(70px)"
        }} />
        {/* Purple glow bottom-right */}
        <div style={{
          position: "absolute", bottom: "-10%", right: "-5%",
          width: "45%", height: "55%", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 65%)",
          filter: "blur(70px)"
        }} />
        {/* Bottom accent */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: 1,
          background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.2), transparent)"
        }} />
      </div>

      <div className="max-w-6xl mx-auto px-8 md:px-20" style={{ position: "relative", zIndex: 1 }}>

        {/* ── HEADER ── */}
        <motion.div className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }} viewport={{ once: true }}>

          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(28px,4vw,42px)", fontWeight: 700,
            color: "#ffffff", lineHeight: 1.1, margin: "0 0 10px"
          }}>
            Featured{" "}
            <span style={{
              background: "linear-gradient(90deg, #60a5fa, #818cf8, #a78bfa)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
            }}>
              Projects
            </span>
          </h2>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 13, color: "#94a3b8",
            letterSpacing: "0.03em", margin: 0
          }}>
            4 end-to-end AI/ML systems — from RAG pipelines to CNNs and live dashboards
          </p>
        </motion.div>

        {/* ── PROJECT CARDS ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 16
        }}>
          {projects.map((p, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              whileHover={{ y: -6 }}
              style={{
                padding: "24px", borderRadius: 18,
                background: hoveredIdx === i
                  ? `rgba(255,255,255,0.05)`
                  : "rgba(255,255,255,0.02)",
                border: `1px solid ${hoveredIdx === i ? p.borderHover : p.border}`,
                backdropFilter: "blur(20px)",
                transition: "all 0.3s ease",
                position: "relative", overflow: "hidden",
                display: "flex", flexDirection: "column", gap: 14,
                boxShadow: hoveredIdx === i ? `0 8px 32px ${p.glow}` : "none"
              }}>

              {/* Top accent line — project color */}
              <div style={{
                position: "absolute", top: 0, left: "10%", right: "10%", height: 1,
                background: `linear-gradient(90deg, transparent, ${p.accent}70, transparent)`
              }} />

              {/* Subtle glow inside card */}
              {hoveredIdx === i && (
                <div style={{
                  position: "absolute", top: "-30%", right: "-20%",
                  width: "60%", height: "60%", borderRadius: "50%",
                  background: `radial-gradient(circle, ${p.glow}, transparent 70%)`,
                  filter: "blur(30px)", pointerEvents: "none"
                }} />
              )}

              {/* ── CARD HEADER ── */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  {/* Emoji in colored circle */}
                  <div style={{
                    width: 42, height: 42, borderRadius: 12,
                    background: p.pillBg,
                    border: `1px solid ${p.pillBorder}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 20, flexShrink: 0
                  }}>
                    {p.emoji}
                  </div>
                  <div>
                    <h3 style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: 15, fontWeight: 600,
                      color: "#f1f5f9",  /* bright — clearly visible */
                      margin: 0, lineHeight: 1.3
                    }}>
                      {p.title}
                    </h3>
                    <p style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 11, color: "#64748b",
                      margin: "3px 0 0"
                    }}>
                      {p.period}
                    </p>
                  </div>
                </div>

                {/* Accuracy badge */}
                <div style={{
                  padding: "4px 10px", borderRadius: 20, flexShrink: 0,
                  background: p.tagBg,
                  border: `1px solid ${p.tagBorder}`,
                  fontSize: 11, fontWeight: 600,
                  color: p.tagColor,  /* bright — clearly visible */
                  fontFamily: "'Space Grotesk', sans-serif",
                  whiteSpace: "nowrap"
                }}>
                  {p.accuracy}
                </div>
              </div>

              {/* ── DESCRIPTION ── */}
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 13, color: "#94a3b8",  /* bright enough — visible */
                lineHeight: 1.75, margin: 0,
                flex: 1
              }}>
                {p.description}
              </p>

              {/* ── TECH PILLS ── */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {p.tech.map((t, j) => (
                  <span key={j} style={{
                    padding: "4px 10px", borderRadius: 6,
                    fontSize: 11, fontWeight: 500,
                    fontFamily: "'Inter', sans-serif",
                    background: p.pillBg,
                    border: `1px solid ${p.pillBorder}`,
                    color: p.pillColor,  /* bright — clearly visible */
                  }}>
                    {t}
                  </span>
                ))}
              </div>

              {/* ── LINK ── */}
              {p.link ? (
                <a href={p.link} target="_blank" rel="noopener noreferrer"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 13, fontWeight: 600,
                    color: p.accent,  /* bright project color */
                    textDecoration: "none",
                    display: "inline-flex", alignItems: "center", gap: 5,
                    transition: "gap 0.2s, opacity 0.2s",
                    marginTop: 2
                  }}
                  onMouseEnter={e => { e.currentTarget.style.opacity = "0.8"; e.currentTarget.style.gap = "8px"; }}
                  onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.gap = "5px"; }}>
                  View on GitHub
                  <span style={{ fontSize: 16 }}>→</span>
                </a>
              ) : (
                <span style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 12, color: "#374151"
                }}>
                  Private project
                </span>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom divider */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: 56 }}>
          <div style={{
            width: 160, height: 1,
            background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.3), rgba(139,92,246,0.3), transparent)"
          }} />
        </div>

      </div>
    </section>
  );
}
