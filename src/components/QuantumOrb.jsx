import React from "react";
import { motion } from "framer-motion";

export default function QuantumOrb() {
  return (
    <div className="relative w-[260px] h-[260px] flex items-center justify-center">
      {/* 🌌 Core energy orb */}
      <motion.div
        className="absolute w-[170px] h-[170px] rounded-full bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-500 blur-2xl opacity-80 shadow-[0_0_40px_#00eaff50]"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 360],
          filter: [
            "hue-rotate(0deg)",
            "hue-rotate(90deg)",
            "hue-rotate(180deg)",
            "hue-rotate(360deg)",
          ],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* 💫 Inner plasma pulse */}
      <motion.div
        className="absolute w-[100px] h-[100px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(0,255,255,0.7),_rgba(0,0,255,0.2),_transparent_70%)] blur-2xl mix-blend-screen"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.6, 0.9, 0.6],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ⚡ Outer energy ring */}
      <motion.div
        className="absolute w-[230px] h-[230px] rounded-full border border-cyan-400/40 shadow-[0_0_25px_#00ffff40]"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.8, 0.5, 0.8],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* 🌈 Rotating holographic sheen */}
      <motion.div
        className="absolute w-[180px] h-[180px] rounded-full bg-[conic-gradient(from_180deg,_rgba(0,255,255,0.3),_rgba(255,0,255,0.2),_rgba(0,0,255,0.3),_rgba(0,255,255,0.3))] mix-blend-lighten blur-xl"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* ✨ Particle aura (tiny flickering dots) */}
      {[...Array(12)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-[6px] h-[6px] rounded-full bg-cyan-300 opacity-70 shadow-[0_0_8px_#00ffff]"
          style={{
            top: `${40 + 70 * Math.sin((i * 30 * Math.PI) / 180)}px`,
            left: `${40 + 70 * Math.cos((i * 30 * Math.PI) / 180)}px`,
          }}
          animate={{
            opacity: [0.3, 0.9, 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random(),
          }}
        />
      ))}

      {/* 🌠 Floating motion */}
      <motion.div
        className="absolute inset-0"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
