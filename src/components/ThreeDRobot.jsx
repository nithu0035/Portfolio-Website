import React from "react";
import { motion } from "framer-motion";
import robot from "../assets/robot.gif"; // ✅ Using your robot.gif

export default function ThreeDRobot() {
  return (
    <motion.div
      className="relative w-full flex justify-center items-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.4, ease: "easeOut" }}
    >
      {/* Background Glow */}
      <div className="absolute w-[600px] h-[600px] bg-gradient-to-br from-blue-500/20 via-cyan-400/25 to-purple-600/25 rounded-full blur-3xl animate-pulse-slow"></div>

      {/* Outer Energy Halo */}
      <motion.div
        className="absolute border border-cyan-300/30 rounded-full w-[520px] h-[520px]"
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        style={{
          boxShadow:
            "0 0 50px rgba(0,255,255,0.15), inset 0 0 40px rgba(155,93,229,0.2)",
        }}
      />

      {/* Inner Rotating Glow Ring */}
      <motion.div
        className="absolute border border-purple-400/25 rounded-full w-[420px] h-[420px]"
        animate={{ rotate: -360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        style={{
          boxShadow:
            "0 0 35px rgba(241,91,181,0.25), inset 0 0 35px rgba(0,255,255,0.15)",
        }}
      />

      {/* Floating Robot */}
      <motion.img
        src={robot}
        alt="AI Robot"
        className="w-[380px] md:w-[480px] z-10 select-none drop-shadow-[0_0_60px_rgba(120,150,255,0.9)]"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 1.5, -1.5, 0],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Reflection / Holographic Floor */}
      <div className="absolute bottom-0 w-72 h-4 bg-gradient-to-r from-blue-400/30 to-purple-400/30 blur-2xl rounded-full opacity-75"></div>

      {/* Tiny Orbiting Particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-cyan-300/70 rounded-full shadow-[0_0_10px_rgba(0,255,255,0.8)]"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 12 + i * 2,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            transformOrigin: `${200 + i * 10}px 0px`,
          }}
        />
      ))}

      {/* Custom Animations */}
      <style>{`
        @keyframes pulseSlow {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulseSlow 6s ease-in-out infinite;
        }
      `}</style>
    </motion.div>
  );
}
