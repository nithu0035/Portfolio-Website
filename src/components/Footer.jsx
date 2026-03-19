import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer style={{ background: "#050505", position: "relative", overflow: "hidden" }}>

      {/* ── BACKGROUND — same as Hero ── */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(99,102,241,0.04) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.2), rgba(139,92,246,0.2), transparent)" }} />
        <div style={{ position: "absolute", top: "-30%", left: "10%", width: "60%", height: "90%", borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.05) 0%, transparent 65%)", filter: "blur(80px)" }} />
        <div style={{ position: "absolute", bottom: "-20%", right: "5%", width: "40%", height: "70%", borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.04) 0%, transparent 65%)", filter: "blur(70px)" }} />
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 80px 32px", position: "relative", zIndex: 1 }}>

        {/* ── TOP SECTION ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }} viewport={{ once: true }}
          style={{ display: "grid", gridTemplateColumns: "1.8fr 1fr 1fr 1.2fr", gap: 48, marginBottom: 52 }}>

          {/* COL 1 — Brand */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, color: "#6366f1", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", margin: "0 0 8px" }}>
                Portfolio · 2026
              </p>
              <h3 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 22, fontWeight: 700, margin: "0 0 4px",
                background: "linear-gradient(135deg, #ffffff, #c7d2fe, #a5b4fc)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
              }}>
                Gudipatoju Nitesh
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#6366f1", margin: 0, fontWeight: 500 }}>
                AI / ML Engineer · Hyderabad, India
              </p>
            </div>

            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#475569", lineHeight: 1.75, margin: 0 }}>
              Building intelligent end-to-end AI/ML systems — from RAG pipelines and CNNs to FastAPI backends and Docker deployments.
            </p>

            {/* Availability */}
            <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 7,
                padding: "4px 12px", borderRadius: 20, fontSize: 11, fontWeight: 500,
                background: "rgba(99,102,241,0.08)", border: "1px solid rgba(99,102,241,0.22)",
                color: "#a5b4fc", width: "fit-content"
              }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#4ade80", display: "inline-block", animation: "pulse 2s infinite" }} />
                Open to AI/ML Internships
              </div>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 7,
                padding: "4px 12px", borderRadius: 20, fontSize: 11, fontWeight: 500,
                background: "rgba(16,185,129,0.07)", border: "1px solid rgba(16,185,129,0.18)",
                color: "#6ee7b7", width: "fit-content"
              }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#4ade80", display: "inline-block", animation: "pulse 2s infinite 0.5s" }} />
                Open to Entry-Level Jobs
              </div>
            </div>

            {/* Social icons */}
            <div style={{ display: "flex", gap: 8 }}>
              {[
                { label: "GH", href: "https://github.com/nithu0035", title: "GitHub" },
                { label: "in", href: "https://linkedin.com/in/nitesh-gudipatoju-7aba13382", title: "LinkedIn" },
                { label: "✉", href: "mailto:nithu00035@gmail.com", title: "Email" },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" title={s.title}
                  style={{
                    width: 36, height: 36, borderRadius: 9,
                    background: "rgba(99,102,241,0.07)",
                    border: "1px solid rgba(99,102,241,0.18)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#818cf8", textDecoration: "none",
                    fontSize: 12, fontWeight: 700,
                    fontFamily: "'Space Grotesk', sans-serif",
                    transition: "all 0.2s"
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = "rgba(99,102,241,0.18)"; e.currentTarget.style.borderColor = "rgba(99,102,241,0.4)"; e.currentTarget.style.color = "#c7d2fe"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "rgba(99,102,241,0.07)"; e.currentTarget.style.borderColor = "rgba(99,102,241,0.18)"; e.currentTarget.style.color = "#818cf8"; e.currentTarget.style.transform = "translateY(0)"; }}>
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* COL 2 — Navigation */}
          <div>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 10, color: "#6366f1", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", margin: "0 0 18px" }}>
              Navigation
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { label: "Home", href: "#hero" },
                { label: "About", href: "#about" },
                { label: "Skills", href: "#skills" },
                { label: "Projects", href: "#projects" },
                { label: "Certificates", href: "#certificates" },
                { label: "Contact", href: "#contact" },
              ].map((l, i) => (
                <a key={i} href={l.href}
                  style={{
                    fontFamily: "'Inter', sans-serif", fontSize: 13,
                    color: "#475569", textDecoration: "none",
                    display: "flex", alignItems: "center", gap: 8, transition: "color 0.2s"
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = "#a5b4fc"}
                  onMouseLeave={e => e.currentTarget.style.color = "#475569"}>
                  <span style={{ width: 3, height: 3, borderRadius: "50%", background: "rgba(99,102,241,0.5)", display: "inline-block", flexShrink: 0 }} />
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* COL 3 — Projects */}
          <div>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 10, color: "#6366f1", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", margin: "0 0 18px" }}>
              Projects
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { label: "AI Chatbot", href: "https://github.com/nithu0035/AI-chatbot" },
                { label: "Smart Irrigation", href: "https://github.com/nithu0035/smart-irrigation-system-with-weather-aware-crop-guidance" },
                { label: "Hair Disease Detection", href: "" },
                { label: "Placement Intelligence", href: "https://github.com/nithu0035/placement-intelligence-platform" },
                { label: "Sentiment Analysis", href: "https://github.com/nithu0035/sentiment-analysis-LLM" },
              ].map((p, i) => (
                p.href ? (
                  <a key={i} href={p.href} target="_blank" rel="noopener noreferrer"
                    style={{
                      fontFamily: "'Inter', sans-serif", fontSize: 13,
                      color: "#475569", textDecoration: "none",
                      display: "flex", alignItems: "center", gap: 8, transition: "color 0.2s"
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = "#a5b4fc"}
                    onMouseLeave={e => e.currentTarget.style.color = "#475569"}>
                    <span style={{ width: 3, height: 3, borderRadius: "50%", background: "rgba(99,102,241,0.5)", display: "inline-block", flexShrink: 0 }} />
                    {p.label}
                  </a>
                ) : (
                  <span key={i}
                    style={{
                      fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#2d3748",
                      display: "flex", alignItems: "center", gap: 8
                    }}>
                    <span style={{ width: 3, height: 3, borderRadius: "50%", background: "rgba(255,255,255,0.08)", display: "inline-block", flexShrink: 0 }} />
                    {p.label}
                  </span>
                )
              ))}
            </div>
          </div>

          {/* COL 4 — Contact */}
          <div>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 10, color: "#6366f1", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", margin: "0 0 18px" }}>
              Get In Touch
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <a href="mailto:nithu00035@gmail.com"
                style={{
                  fontFamily: "'Inter', sans-serif", fontSize: 13,
                  color: "#475569", textDecoration: "none",
                  display: "flex", alignItems: "flex-start", gap: 10, transition: "color 0.2s",
                  lineHeight: 1.5
                }}
                onMouseEnter={e => e.currentTarget.style.color = "#a5b4fc"}
                onMouseLeave={e => e.currentTarget.style.color = "#475569"}>
                <span style={{ color: "#6366f1", flexShrink: 0, marginTop: 1 }}>✉</span>
                nithu00035@gmail.com
              </a>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#475569", display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ color: "#6366f1" }}>📍</span>
                Hyderabad, India
              </span>
              <a href="https://linkedin.com/in/nitesh-gudipatoju-7aba13382" target="_blank" rel="noopener noreferrer"
                style={{
                  fontFamily: "'Inter', sans-serif", fontSize: 13,
                  color: "#475569", textDecoration: "none",
                  display: "flex", alignItems: "center", gap: 10, transition: "color 0.2s"
                }}
                onMouseEnter={e => e.currentTarget.style.color = "#a5b4fc"}
                onMouseLeave={e => e.currentTarget.style.color = "#475569"}>
                <span style={{ color: "#6366f1" }}>in</span>
                LinkedIn Profile ↗
              </a>
              <a href="https://github.com/nithu0035" target="_blank" rel="noopener noreferrer"
                style={{
                  fontFamily: "'Inter', sans-serif", fontSize: 13,
                  color: "#475569", textDecoration: "none",
                  display: "flex", alignItems: "center", gap: 10, transition: "color 0.2s"
                }}
                onMouseEnter={e => e.currentTarget.style.color = "#a5b4fc"}
                onMouseLeave={e => e.currentTarget.style.color = "#475569"}>
                <span style={{ color: "#6366f1" }}>GH</span>
                GitHub Profile ↗
              </a>

              {/* Resume download */}
              <a href="/my_resume.pdf" download="Nitesh_Gudipatoju_Resume.pdf"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 600,
                  padding: "8px 16px", borderRadius: 8, marginTop: 4,
                  background: "rgba(99,102,241,0.08)",
                  border: "1px solid rgba(99,102,241,0.22)",
                  color: "#a5b4fc", textDecoration: "none",
                  display: "inline-flex", alignItems: "center", gap: 6,
                  transition: "all 0.2s", width: "fit-content"
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(99,102,241,0.18)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(99,102,241,0.08)"; e.currentTarget.style.transform = "translateY(0)"; }}>
                ⬇️ Download Resume
              </a>
            </div>
          </div>
        </motion.div>

        {/* ── DIVIDER ── */}
        <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.2), rgba(139,92,246,0.2), transparent)", marginBottom: 24 }} />

        {/* ── BOTTOM BAR ── */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#2d3748", margin: 0 }}>
            © 2026 <span style={{ color: "#818cf8", fontWeight: 500 }}>Gudipatoju Nitesh</span> · All rights reserved.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#2d3748", margin: 0 }}>
              Built with <span style={{ color: "#818cf8" }}>React</span> · <span style={{ color: "#818cf8" }}>Vite</span> · <span style={{ color: "#818cf8" }}>Framer Motion</span>
            </p>
            {/* Scroll to top */}
            <motion.button
              whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }}
              onClick={scrollTop}
              style={{
                width: 36, height: 36, borderRadius: "50%",
                background: "rgba(99,102,241,0.08)",
                border: "1px solid rgba(99,102,241,0.22)",
                color: "#818cf8", fontSize: 15, cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "all 0.2s"
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(99,102,241,0.2)"; e.currentTarget.style.boxShadow = "0 0 16px rgba(99,102,241,0.3)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(99,102,241,0.08)"; e.currentTarget.style.boxShadow = "none"; }}>
              ↑
            </motion.button>
          </div>
        </div>
      </div>

      <style>{`@keyframes pulse{0%,100%{opacity:0.4}50%{opacity:1}}`}</style>
    </footer>
  );
}