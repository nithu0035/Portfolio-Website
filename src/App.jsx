import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Loader from "./components/Loader";
import Hero from "./components/Hero";
import About from "./components/About";
import SkillsAnimated from "./components/SkillsAnimated";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import CursorTrail from "./components/CursorTrail";

export default function App() {
  const [loading, setLoading] = useState(true);

  // Instead of simple delay, we use Loader’s animation end to trigger
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4500); // Slightly longer for full “ACCESS GRANTED” effect
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
        >
          <Loader />
        </motion.div>
      ) : (
        <motion.div
          key="main"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="bg-[#010818] text-white overflow-x-hidden relative"
        >
          {/* Fancy cursor trail effect */}
          <CursorTrail />

          {/* === Main Website Sections === */}
          <Hero />

          <div className="relative z-10">
            <About />
            <SkillsAnimated />
            <Projects />
            <Certificates />
            <Contact />
            <Feedback />
            <Footer />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
