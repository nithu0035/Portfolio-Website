import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
 
// Feedback section — amber/orange theme = warmth, appreciation, human connection
 
export default function Feedback() {
  const [form, setForm] = useState({ name: "", email: "", rating: 0, message: "" });
  const [hover, setHover] = useState(0);
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
 
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
 
  const handleSubmit = async e => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message || !form.rating) return;
    setSending(true);
    await new Promise(r => setTimeout(r, 1200));
    setSending(false);
    setSubmitted(true);
    setForm({ name: "", email: "", rating: 0, message: "" });
  };
 
  const inputStyle = {
    width: "100%", padding: "12px 16px", borderRadius: 10,
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(251,146,60,0.18)",
    color: "#f1f5f9", fontSize: 13,
    fontFamily: "'Inter', sans-serif",
    outline: "none", transition: "border-color 0.2s",
    boxSizing: "border-box"
  };
 
  return (
    <section id="feedback"
      className="relative overflow-hidden"
      style={{ background: "#050505", padding: "96px 0" }}>
 
      {/* ── BACKGROUND — amber/orange = warmth, appreciation ── */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(251,146,60,0.04) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(251,146,60,0.25), transparent)" }} />
        <div style={{ position: "absolute", top: "-10%", left: "10%", width: "50%", height: "60%", borderRadius: "50%", background: "radial-gradient(circle, rgba(251,146,60,0.07) 0%, transparent 65%)", filter: "blur(70px)" }} />
        <div style={{ position: "absolute", bottom: "-10%", right: "-5%", width: "45%", height: "55%", borderRadius: "50%", background: "radial-gradient(circle, rgba(234,179,8,0.06) 0%, transparent 65%)", filter: "blur(65px)" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg, transparent, rgba(234,179,8,0.2), transparent)" }} />
        {[...Array(10)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`, bottom: 0,
            width: `${Math.random() * 2 + 1}px`, height: `${Math.random() * 2 + 1}px`,
            background: i % 2 === 0 ? "rgba(251,146,60,0.5)" : "rgba(234,179,8,0.4)",
            animationDuration: `${Math.random() * 14 + 10}s`,
            animationDelay: `${Math.random() * 12}s`
          }} />
        ))}
      </div>
 
      <div className="max-w-2xl mx-auto px-8 md:px-20" style={{ position: "relative", zIndex: 1 }}>
 
        {/* ── HEADER ── */}
        <motion.div className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }} viewport={{ once: true }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            padding: "4px 14px", borderRadius: 20, fontSize: 11, fontWeight: 500,
            background: "rgba(251,146,60,0.1)", border: "1px solid rgba(251,146,60,0.28)",
            color: "#fdba74", marginBottom: 14
          }}>
            💬 Share Your Thoughts
          </div>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(28px,4vw,42px)", fontWeight: 700, color: "#ffffff", lineHeight: 1.1, margin: "0 0 10px" }}>
            Your{" "}
            <span style={{ background: "linear-gradient(135deg, #fb923c, #f59e0b, #eab308)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Feedback
            </span>
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "#fdba74", letterSpacing: "0.03em", margin: 0 }}>
            Your feedback helps me grow — I'd love to hear your thoughts!
          </p>
        </motion.div>
 
        {/* ── FORM ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }} viewport={{ once: true }}
          style={{
            padding: "32px", borderRadius: 20,
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(251,146,60,0.18)",
            backdropFilter: "blur(20px)",
            position: "relative", overflow: "hidden"
          }}>
 
          {/* Top accent */}
          <div style={{ position: "absolute", top: 0, left: "10%", right: "10%", height: 1, background: "linear-gradient(90deg, transparent, rgba(251,146,60,0.5), rgba(234,179,8,0.5), transparent)" }} />
 
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
 
            {/* Name & Email row */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <input name="name" type="text" placeholder="Your name" value={form.name} onChange={handleChange} required
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = "rgba(251,146,60,0.5)"}
                onBlur={e => e.target.style.borderColor = "rgba(251,146,60,0.18)"} />
              <input name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = "rgba(251,146,60,0.5)"}
                onBlur={e => e.target.style.borderColor = "rgba(251,146,60,0.18)"} />
            </div>
 
            {/* Star Rating */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#94a3b8", margin: 0 }}>Rate your experience</p>
              <div style={{ display: "flex", gap: 8 }}>
                {[1, 2, 3, 4, 5].map(star => (
                  <button key={star} type="button"
                    onClick={() => setForm({ ...form, rating: star })}
                    onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(0)}
                    style={{
                      fontSize: 28, background: "none", border: "none", cursor: "pointer",
                      color: star <= (hover || form.rating) ? "#fb923c" : "rgba(255,255,255,0.15)",
                      transition: "all 0.15s", transform: star <= (hover || form.rating) ? "scale(1.2)" : "scale(1)"
                    }}>
                    ★
                  </button>
                ))}
                {form.rating > 0 && (
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#fdba74", alignSelf: "center", marginLeft: 8 }}>
                    {["", "Poor", "Fair", "Good", "Very Good", "Excellent!"][form.rating]}
                  </span>
                )}
              </div>
            </div>
 
            {/* Message */}
            <textarea name="message" placeholder="Share your thoughts, suggestions, or just say hello..." value={form.message} onChange={handleChange} required rows={5}
              style={{ ...inputStyle, resize: "none" }}
              onFocus={e => e.target.style.borderColor = "rgba(251,146,60,0.5)"}
              onBlur={e => e.target.style.borderColor = "rgba(251,146,60,0.18)"} />
 
            {/* Submit */}
            <button type="submit" disabled={sending}
              style={{
                padding: "13px", borderRadius: 10, border: "none",
                cursor: sending ? "not-allowed" : "pointer",
                background: "linear-gradient(135deg, #c2410c, #b45309)",
                color: "#fff", fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 14, fontWeight: 700, transition: "all 0.3s",
                opacity: sending ? 0.7 : 1,
                boxShadow: "0 0 20px rgba(251,146,60,0.25)"
              }}
              onMouseEnter={e => { if (!sending) { e.currentTarget.style.boxShadow = "0 0 30px rgba(251,146,60,0.4)"; e.currentTarget.style.transform = "translateY(-2px)"; }}}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 0 20px rgba(251,146,60,0.25)"; e.currentTarget.style.transform = "translateY(0)"; }}>
              {sending ? "Sending..." : "💬 Send Feedback"}
            </button>
          </form>
        </motion.div>
 
        {/* Bottom divider */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: 48 }}>
          <div style={{ width: 160, height: 1, background: "linear-gradient(90deg, transparent, rgba(251,146,60,0.3), rgba(234,179,8,0.3), transparent)" }} />
        </div>
      </div>
 
      {/* ── SUCCESS MODAL ── */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSubmitted(false)}
            style={{
              position: "fixed", inset: 0, zIndex: 50,
              background: "rgba(0,0,0,0.85)", backdropFilter: "blur(14px)",
              display: "flex", alignItems: "center", justifyContent: "center", padding: 20
            }}>
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 16 }}
              onClick={e => e.stopPropagation()}
              style={{
                width: "90%", maxWidth: 420,
                background: "#0a0a0a",
                border: "1px solid rgba(251,146,60,0.4)",
                borderRadius: 22, padding: "36px 32px",
                textAlign: "center",
                boxShadow: "0 0 60px rgba(251,146,60,0.15)"
              }}>
              {/* Top accent */}
              <div style={{ position: "absolute", top: 0, left: "20%", right: "20%", height: 3, background: "linear-gradient(90deg, transparent, #fb923c, #eab308, transparent)", borderRadius: "0 0 4px 4px" }} />
 
              <div style={{ fontSize: 56, marginBottom: 16 }}>🎉</div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 22, fontWeight: 700, color: "#ffffff", margin: "0 0 10px" }}>
                Thank You!
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#94a3b8", lineHeight: 1.7, margin: "0 0 24px" }}>
                Your feedback has been received! Nitesh truly appreciates you taking the time to share your thoughts. 🙏
              </p>
              <button onClick={() => setSubmitted(false)}
                style={{
                  padding: "10px 28px", borderRadius: 10,
                  background: "rgba(251,146,60,0.12)",
                  border: "1px solid rgba(251,146,60,0.3)",
                  color: "#fdba74", fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 13, fontWeight: 600, cursor: "pointer",
                  transition: "all 0.2s"
                }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(251,146,60,0.22)"}
                onMouseLeave={e => e.currentTarget.style.background = "rgba(251,146,60,0.12)"}>
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
 