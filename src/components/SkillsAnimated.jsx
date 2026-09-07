import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPython, FaDocker, FaGitAlt, FaJava } from "react-icons/fa";
import { SiTensorflow, SiPytorch, SiScikitlearn, SiFastapi, SiStreamlit } from "react-icons/si";

const groups = [
  {
    title: "Languages",
    skills: ["Python", "Java", "JavaScript", "SQL"],
  },
  {
    title: "AI / ML",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "XGBoost", "Gradient Boosting", "Random Forest", "NLP", "OpenCV", "Hugging Face", "LangChain"],
  },
  {
    title: "LLM & Vector DB",
    skills: ["RAG", "ChromaDB", "Prompt Engineering", "Whisper"],
  },
  {
    title: "Backend & DevOps",
    skills: ["FastAPI", "Docker", "REST APIs", "JWT", "Git", "Streamlit", "Jupyter"],
  },
  {
    title: "Data & Analytics",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
  },
];

const techIcons = [
  { icon: <FaPython />, name: "Python" },
  { icon: <SiTensorflow />, name: "TensorFlow" },
  { icon: <SiPytorch />, name: "PyTorch" },
  { icon: <SiScikitlearn />, name: "Scikit-learn" },
  { icon: <SiFastapi />, name: "FastAPI" },
  { icon: <FaDocker />, name: "Docker" },
  { icon: <SiStreamlit />, name: "Streamlit" },
  { icon: <FaGitAlt />, name: "Git" },
];

function SkillPill({ skill }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ scale: 1.08, y: -2 }}
      style={{
        padding: "5px 13px",
        borderRadius: 7,
        fontSize: 12,
        fontFamily: "'Inter', sans-serif",
        fontWeight: 500,
        background: hovered ? "rgba(99,102,241,0.18)" : "rgba(99,102,241,0.07)",
        border: hovered ? "1px solid rgba(139,92,246,0.5)" : "1px solid rgba(99,102,241,0.2)",
        color: hovered ? "#ffffff" : "#c7d2fe",
        cursor: "default",
        transition: "all 0.18s",
        whiteSpace: "nowrap",
      }}>
      {skill}
    </motion.span>
  );
}

export default function SkillsAnimated() {
  return (
    <section id="skills"
      className="relative overflow-hidden"
      style={{ background: "#050505", padding: "96px 0" }}>

      {/* ── BACKGROUND — blue & purple lights ── */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}>
        {/* Dot grid */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "radial-gradient(rgba(99,102,241,0.05) 1px, transparent 1px)",
          backgroundSize: "28px 28px"
        }} />
        {/* Top accent line */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 1,
          background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.3), transparent)"
        }} />
        {/* Big blue glow — top right */}
        <div style={{
          position: "absolute", top: "-15%", right: "-10%",
          width: "55%", height: "65%", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 65%)",
          filter: "blur(70px)"
        }} />
        {/* Purple glow — bottom left */}
        <div style={{
          position: "absolute", bottom: "-10%", left: "-5%",
          width: "50%", height: "55%", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 65%)",
          filter: "blur(65px)"
        }} />
        {/* Center subtle blue glow */}
        <div style={{
          position: "absolute", top: "30%", left: "30%",
          width: "40%", height: "40%", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.05) 0%, transparent 65%)",
          filter: "blur(50px)"
        }} />
        {/* Bottom accent line */}
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
            color: "#ffffff", lineHeight: 1.1,
            margin: "0 0 10px"
          }}>
            Skills &{" "}
            <span style={{
              background: "linear-gradient(90deg, #60a5fa, #818cf8, #a78bfa)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
            }}>
              Tech Stack
            </span>
          </h2>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 13, color: "#a5b4fc",
            letterSpacing: "0.04em", margin: 0
          }}>
            Languages · AI/ML · LLM & Vector DB · Backend & DevOps · Data Analytics
          </p>
        </motion.div>

        {/* ── SKILL CARDS GRID ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 14, marginBottom: 48
        }}>
          {groups.map((g, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ borderColor: "rgba(139,92,246,0.4)", background: "rgba(99,102,241,0.06)" }}
              style={{
                padding: "22px 24px", borderRadius: 16,
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(99,102,241,0.15)",
                backdropFilter: "blur(20px)",
                transition: "all 0.3s",
                position: "relative", overflow: "hidden"
              }}>

              {/* Top accent glow line on each card */}
              <div style={{
                position: "absolute", top: 0, left: "10%", right: "10%", height: 1,
                background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.5), rgba(139,92,246,0.5), transparent)"
              }} />

              {/* Card title */}
              <div style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 11, fontWeight: 700,
                letterSpacing: "0.1em", textTransform: "uppercase",
                color: "#a5b4fc",
                marginBottom: 14,
                display: "flex", alignItems: "center", gap: 8
              }}>
                <div style={{
                  width: 6, height: 6, borderRadius: "50%",
                  background: "linear-gradient(135deg, #60a5fa, #a78bfa)",
                  boxShadow: "0 0 6px rgba(99,102,241,0.8)"
                }} />
                {g.title}
              </div>

              {/* Pills */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {g.skills.map((s, j) => (
                  <SkillPill key={j} skill={s} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── TECH ICONS ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }} viewport={{ once: true }}>

          <div style={{
            display: "flex", flexWrap: "wrap",
            justifyContent: "center", gap: 20,
            padding: "28px 32px", borderRadius: 18,
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(99,102,241,0.15)",
            position: "relative", overflow: "hidden"
          }}>
            {/* Glass card top accent */}
            <div style={{
              position: "absolute", top: 0, left: "20%", right: "20%", height: 1,
              background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.4), rgba(139,92,246,0.4), transparent)"
            }} />

            {techIcons.map((t, i) => (
              <motion.div key={i}
                whileHover={{ scale: 1.2, y: -5 }}
                transition={{ duration: 0.2 }}
                style={{
                  display: "flex", flexDirection: "column",
                  alignItems: "center", gap: 8, cursor: "default"
                }}>
                {/* Icon inside glowing circle */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 3.5, delay: i * 0.35, ease: "easeInOut" }}
                  style={{
                    width: 48, height: 48, borderRadius: "50%",
                    background: "rgba(99,102,241,0.08)",
                    border: "1px solid rgba(99,102,241,0.22)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 22, color: "#a5b4fc",
                    boxShadow: "0 0 12px rgba(99,102,241,0.15)"
                  }}>
                  {t.icon}
                </motion.div>
                <span style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 10, color: "#818cf8",
                  fontWeight: 500, letterSpacing: "0.03em"
                }}>
                  {t.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom divider */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: 48 }}>
          <div style={{
            width: 160, height: 1,
            background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.4), rgba(139,92,246,0.4), transparent)"
          }} />
        </div>

      </div>
    </section>
  );
}
