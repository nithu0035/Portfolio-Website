import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

// Contact section — teal/cyan theme = connection, communication, network

const AI_RESPONSES = {
  who: "I'm Gudipatoju Nitesh — a final-year AI/ML engineer from Hyderabad with 94% CNN accuracy, 90% ML accuracy, and 40% chatbot improvement via ChromaDB RAG pipelines.",
  skills: "My stack: Python, TensorFlow, PyTorch, Scikit-learn, XGBoost, LangChain, Hugging Face, ChromaDB, RAG, FastAPI, Docker, Streamlit, OpenCV, JWT, SQL.",
  projects: "4 AI/ML systems: AI Chatbot with RAG (40% better relevance), Smart Irrigation with XGBoost (90% acc), Hair Disease CNN (94% acc), Placement Intelligence Platform (82% acc).",
  certificates: "Certified by Google Cloud (GenAI Studio), Microsoft & LinkedIn (Data Analysis), Deloitte (Forensic Analytics), Tata Group (GenAI-Powered Analytics).",
  education: "B.Tech in AI & ML at Nalla Malla Reddy Engineering College, Hyderabad — graduating 2026.",
  hire: "Nitesh is open to AI/ML Internships, Junior ML Engineer, Entry-Level Data Scientist, AI Developer roles. Contact: nithu00035@gmail.com",
  contact: "Email: nithu00035@gmail.com · Phone: +91 8688857245 · LinkedIn: linkedin.com/in/nitesh-gudipatoju-7aba13382",
};

function getResponse(text) {
  const t = text.toLowerCase();
  if (t.includes("who") || t.includes("nitesh") || t.includes("about")) return AI_RESPONSES.who;
  if (t.includes("skill") || t.includes("tech") || t.includes("stack")) return AI_RESPONSES.skills;
  if (t.includes("project") || t.includes("work") || t.includes("built")) return AI_RESPONSES.projects;
  if (t.includes("cert") || t.includes("award")) return AI_RESPONSES.certificates;
  if (t.includes("edu") || t.includes("college") || t.includes("degree")) return AI_RESPONSES.education;
  if (t.includes("hire") || t.includes("job") || t.includes("intern")) return AI_RESPONSES.hire;
  if (t.includes("contact") || t.includes("email") || t.includes("reach")) return AI_RESPONSES.contact;
  return "Try asking about: skills, projects, certificates, education, hire, or contact!";
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "👋 Hi! I'm Nitesh's AI assistant. Ask me anything about him!" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSending(true);
    await new Promise(r => setTimeout(r, 1200));
    setSending(false);
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  const sendChat = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setInput("");
    setMessages(p => [...p, { from: "user", text: userMsg }]);
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages(p => [...p, { from: "bot", text: getResponse(userMsg) }]);
    }, 900);
  };

  const handleMic = () => {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) return;
    const r = new SR(); r.lang = "en-IN"; r.start();
    r.onresult = e => setInput(e.results[0][0].transcript);
  };

  const inputStyle = {
    width: "100%", padding: "12px 16px", borderRadius: 10,
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(20,184,166,0.2)",
    color: "#f1f5f9", fontSize: 13,
    fontFamily: "'Inter', sans-serif",
    outline: "none", transition: "border-color 0.2s",
    boxSizing: "border-box"
  };

  return (
    <section id="contact"
      className="relative overflow-hidden"
      style={{ background: "#050505", padding: "96px 0" }}>

      {/* ── BACKGROUND — teal/cyan = communication & connection ── */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(20,184,166,0.04) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(20,184,166,0.25), transparent)" }} />
        <div style={{ position: "absolute", top: "-10%", right: "-5%", width: "50%", height: "60%", borderRadius: "50%", background: "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 65%)", filter: "blur(70px)" }} />
        <div style={{ position: "absolute", bottom: "-10%", left: "-5%", width: "45%", height: "55%", borderRadius: "50%", background: "radial-gradient(circle, rgba(20,184,166,0.07) 0%, transparent 65%)", filter: "blur(65px)" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(6,182,212,0.2), transparent)" }} />
        {[...Array(10)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`, bottom: 0,
            width: `${Math.random() * 2 + 1}px`, height: `${Math.random() * 2 + 1}px`,
            background: i % 2 === 0 ? "rgba(6,182,212,0.5)" : "rgba(20,184,166,0.4)",
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
            background: "rgba(20,184,166,0.1)", border: "1px solid rgba(20,184,166,0.28)",
            color: "#5eead4", marginBottom: 14
          }}>
            📬 Let's Connect
          </div>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(28px,4vw,42px)", fontWeight: 700, color: "#ffffff", lineHeight: 1.1, margin: "0 0 10px" }}>
            Get In{" "}
            <span style={{ background: "linear-gradient(135deg, #2dd4bf, #06b6d4, #0ea5e9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Touch
            </span>
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#5eead4", letterSpacing: "0.03em", margin: 0 }}>
            Open to collaborations, internships, and entry-level roles · Hyderabad, India
          </p>
        </motion.div>

        {/* ── GRID ── */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>

          {/* ── LEFT — Contact Form ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }} viewport={{ once: true }}
            style={{
              padding: "28px", borderRadius: 18,
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(20,184,166,0.18)",
              backdropFilter: "blur(20px)",
              position: "relative", overflow: "hidden"
            }}>
            <div style={{ position: "absolute", top: 0, left: "10%", right: "10%", height: 1, background: "linear-gradient(90deg, transparent, rgba(20,184,166,0.5), transparent)" }} />

            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 16, fontWeight: 600, color: "#f1f5f9", margin: "0 0 20px" }}>
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <input name="name" type="text" placeholder="Your name" value={form.name} onChange={handleChange} required
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = "rgba(20,184,166,0.5)"}
                onBlur={e => e.target.style.borderColor = "rgba(20,184,166,0.2)"} />
              <input name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = "rgba(20,184,166,0.5)"}
                onBlur={e => e.target.style.borderColor = "rgba(20,184,166,0.2)"} />
              <textarea name="message" placeholder="Tell me about your project or opportunity..." value={form.message} onChange={handleChange} required rows={5}
                style={{ ...inputStyle, resize: "none" }}
                onFocus={e => e.target.style.borderColor = "rgba(20,184,166,0.5)"}
                onBlur={e => e.target.style.borderColor = "rgba(20,184,166,0.2)"} />

              <button type="submit" disabled={sending}
                style={{
                  padding: "12px", borderRadius: 10, border: "none", cursor: sending ? "not-allowed" : "pointer",
                  background: sent ? "rgba(74,222,128,0.15)" : "linear-gradient(135deg, #0d9488, #0891b2)",
                  color: sent ? "#86efac" : "#ffffff",
                  fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, fontWeight: 600,
                  transition: "all 0.3s", opacity: sending ? 0.7 : 1,
                  boxShadow: "0 0 20px rgba(20,184,166,0.2)"
                }}
                onMouseEnter={e => { if (!sending && !sent) e.currentTarget.style.boxShadow = "0 0 30px rgba(20,184,166,0.4)"; }}
                onMouseLeave={e => e.currentTarget.style.boxShadow = "0 0 20px rgba(20,184,166,0.2)"}>
                {sending ? "Sending..." : sent ? "✅ Message Sent!" : "🚀 Send Message"}
              </button>
            </form>
          </motion.div>

          {/* ── RIGHT — Info + Social ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }} viewport={{ once: true }}
            style={{ display: "flex", flexDirection: "column", gap: 14 }}>

            {/* Info card */}
            <div style={{
              padding: "24px", borderRadius: 18,
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(20,184,166,0.15)",
              backdropFilter: "blur(20px)", position: "relative", overflow: "hidden"
            }}>
              <div style={{ position: "absolute", top: 0, left: "10%", right: "10%", height: 1, background: "linear-gradient(90deg, transparent, rgba(6,182,212,0.4), transparent)" }} />
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#94a3b8", lineHeight: 1.8, margin: "0 0 20px" }}>
                I'm always excited to collaborate on AI/ML projects, internships, or entry-level opportunities. Feel free to reach out!
              </p>

              {[
                { icon: "✉", label: "Email", value: "nithu00035@gmail.com", href: "mailto:nithu00035@gmail.com" },
                { icon: "📍", label: "Location", value: "Hyderabad, India", href: null },
              ].map((item, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "center", gap: 14,
                  padding: "12px 16px", borderRadius: 10, marginBottom: 8,
                  background: "rgba(20,184,166,0.05)",
                  border: "1px solid rgba(20,184,166,0.12)",
                  transition: "all 0.2s"
                }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(20,184,166,0.3)"}
                  onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(20,184,166,0.12)"}>
                  <span style={{ fontSize: 18, width: 24, textAlign: "center" }}>{item.icon}</span>
                  <div>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, color: "#5eead4", margin: 0, letterSpacing: "0.06em", textTransform: "uppercase" }}>{item.label}</p>
                    {item.href ? (
                      <a href={item.href} style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#cbd5e1", textDecoration: "none", transition: "color 0.2s" }}
                        onMouseEnter={e => e.currentTarget.style.color = "#5eead4"}
                        onMouseLeave={e => e.currentTarget.style.color = "#cbd5e1"}>
                        {item.value}
                      </a>
                    ) : (
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#cbd5e1", margin: 0 }}>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div style={{
              padding: "20px 24px", borderRadius: 18,
              background: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(20,184,166,0.15)",
              backdropFilter: "blur(20px)"
            }}>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 600, color: "#5eead4", letterSpacing: "0.08em", textTransform: "uppercase", margin: "0 0 14px" }}>Connect</p>
              <div style={{ display: "flex", gap: 10 }}>
                {[
                  { label: "LinkedIn", href: "https://linkedin.com/in/nitesh-gudipatoju-7aba13382", color: "#0ea5e9" },
                  { label: "GitHub", href: "https://github.com/nithu0035", color: "#6366f1" },
                  { label: "Email", href: "mailto:nithu00035@gmail.com", color: "#14b8a6" },
                ].map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                    style={{
                      flex: 1, padding: "10px 8px", borderRadius: 10, textAlign: "center",
                      background: `${s.color}12`,
                      border: `1px solid ${s.color}30`,
                      color: s.color, textDecoration: "none",
                      fontFamily: "'Space Grotesk', sans-serif", fontSize: 12, fontWeight: 600,
                      transition: "all 0.2s"
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = `${s.color}22`; e.currentTarget.style.transform = "translateY(-2px)"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = `${s.color}12`; e.currentTarget.style.transform = "translateY(0)"; }}>
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom divider */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: 56 }}>
          <div style={{ width: 160, height: 1, background: "linear-gradient(90deg, transparent, rgba(20,184,166,0.3), rgba(6,182,212,0.3), transparent)" }} />
        </div>
      </div>

      {/* ── FLOATING AI CHAT BOT ── */}
      <div style={{ position: "fixed", bottom: 24, right: 24, zIndex: 50 }}>
        {!chatOpen ? (
          <motion.button
            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
            onClick={() => setChatOpen(true)}
            style={{
              width: 52, height: 52, borderRadius: "50%",
              background: "linear-gradient(135deg, #0d9488, #0891b2)",
              border: "none", cursor: "pointer", color: "#fff", fontSize: 22,
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 0 24px rgba(20,184,166,0.4)"
            }}>
            🤖
          </motion.button>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            style={{
              width: 320, borderRadius: 18,
              background: "#0a0a0a",
              border: "1px solid rgba(20,184,166,0.25)",
              overflow: "hidden",
              boxShadow: "0 0 40px rgba(20,184,166,0.15)"
            }}>
            {/* Chat header */}
            <div style={{
              padding: "14px 18px",
              background: "linear-gradient(135deg, rgba(13,148,136,0.3), rgba(8,145,178,0.3))",
              borderBottom: "1px solid rgba(20,184,166,0.2)",
              display: "flex", alignItems: "center", justifyContent: "space-between"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 18 }}>🤖</span>
                <div>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 600, color: "#f1f5f9", margin: 0 }}>AI Assistant</p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 10, color: "#5eead4", margin: 0 }}>Ask about Nitesh</p>
                </div>
              </div>
              <button onClick={() => setChatOpen(false)}
                style={{ background: "none", border: "none", color: "#94a3b8", fontSize: 16, cursor: "pointer", padding: 4 }}>✕</button>
            </div>

            {/* Messages */}
            <div style={{ height: 220, overflowY: "auto", padding: "14px", display: "flex", flexDirection: "column", gap: 10 }}>
              {messages.map((m, i) => (
                <div key={i} style={{
                  maxWidth: "82%", padding: "9px 13px", borderRadius: 12,
                  alignSelf: m.from === "user" ? "flex-end" : "flex-start",
                  background: m.from === "user" ? "rgba(20,184,166,0.15)" : "rgba(255,255,255,0.04)",
                  border: m.from === "user" ? "1px solid rgba(20,184,166,0.3)" : "1px solid rgba(255,255,255,0.07)",
                  fontFamily: "'Inter', sans-serif", fontSize: 12,
                  color: m.from === "user" ? "#5eead4" : "#94a3b8",
                  lineHeight: 1.5
                }}>
                  {m.text}
                </div>
              ))}
              {isTyping && (
                <div style={{
                  alignSelf: "flex-start", padding: "9px 14px", borderRadius: 12,
                  background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)"
                }}>
                  <span className="typing-dots"><span /><span /><span /></span>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Input */}
            <div style={{
              padding: "12px 14px",
              borderTop: "1px solid rgba(255,255,255,0.07)",
              display: "flex", gap: 8, alignItems: "center"
            }}>
              <input value={input} onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === "Enter" && sendChat()}
                placeholder="Ask me anything..."
                style={{
                  flex: 1, padding: "8px 12px", borderRadius: 8,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#f1f5f9", fontSize: 12,
                  fontFamily: "'Inter', sans-serif", outline: "none"
                }} />
              <button onClick={handleMic}
                style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(20,184,166,0.1)", border: "1px solid rgba(20,184,166,0.2)", color: "#5eead4", cursor: "pointer", fontSize: 13 }}>
                🎙
              </button>
              <button onClick={sendChat}
                style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(20,184,166,0.15)", border: "1px solid rgba(20,184,166,0.3)", color: "#5eead4", cursor: "pointer", fontSize: 13 }}>
                ➤
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}