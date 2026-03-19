import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// 🌀 Styles
import "./index.css";      // Tailwind base styles
import "./global.css";     // ✅ Global animations, particles, 3D effects
import "aos/dist/aos.css"; // AOS animation styles

// 🎞️ Initialize AOS (Animate on Scroll)
import AOS from "aos";
AOS.init({
  duration: 1000,   // Animation duration
  once: true,       // Run animation only once per element
  easing: "ease-in-out",
  offset: 100,      // Start the animation a bit before element enters view
});

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
