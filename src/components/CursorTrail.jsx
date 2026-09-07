// src/components/CursorTrail.jsx
import React, { useEffect } from "react";

export default function CursorTrail({ enabled = true }) {
  useEffect(() => {
    if (!enabled) return;
    const dots = [];
    for (let i = 0; i < 10; i++) {
      const d = document.createElement("div");
      d.style.position = "fixed";
      d.style.pointerEvents = "none";
      d.style.width = "10px";
      d.style.height = "10px";
      d.style.borderRadius = "50%";
      d.style.background = "rgba(34,211,238,0.9)";
      d.style.transform = "translate(-50%, -50%)";
      d.style.mixBlendMode = "screen";
      d.style.transition = "transform 0.12s linear";
      document.body.appendChild(d);
      dots.push(d);
    }

    let mouseX = 0, mouseY = 0;
    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    let t = 0;
    const loop = () => {
      t += 1;
      let x = mouseX, y = mouseY;
      dots.forEach((el, idx) => {
        const s = 1 - idx * 0.08;
        el.style.width = `${10 * s}px`;
        el.style.height = `${10 * s}px`;
        el.style.transform = `translate(${x}px, ${y}px)`;
        x += (mouseX - x) * (0.2 + idx * 0.04);
        y += (mouseY - y) * (0.2 + idx * 0.04);
      });
      requestAnimationFrame(loop);
    };
    loop();

    return () => {
      dots.forEach(d => d.remove());
    };
  }, [enabled]);

  return null;
}
