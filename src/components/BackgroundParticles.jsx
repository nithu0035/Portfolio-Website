import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function BackgroundParticles() {
  const particlesInit = async (main) => await loadFull(main);

  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      <Particles
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          fpsLimit: 60,
          particles: {
            number: { value: 50 },
            color: { value: "#00eaff" },
            shape: { type: "circle" },
            opacity: { value: 0.4 },
            size: { value: { min: 1, max: 3 } },
            move: { enable: true, speed: 1, outModes: "bounce" },
            links: {
              enable: true,
              color: "#00eaff",
              opacity: 0.3,
              distance: 150
            }
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              resize: true
            },
            modes: { repulse: { distance: 120 } }
          }
        }}
      />
    </div>
  );
}
