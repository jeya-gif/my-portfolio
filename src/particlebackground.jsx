import React from "react";
import Particles from "react-tsparticles";

const ParticleBackground = () => {
  return (
    <Particles
      options={{
        background: {
          color: "#000000", // solid black background so particles don't create weird transparency
        },
        fpsLimit: 60,
        particles: {
          color: { value: "#ffffff" },
          links: {
            color: "#ffffff",
            distance: 120,
            enable: true,
            opacity: 0.15,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.7,
          },
          number: {
            value: 40,
            density: {
              enable: true,
              area: 800,
            },
          },
          opacity: {
            value: 0.2,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: 2,
          },
        },
        detectRetina: true,
      }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -9999,  // very low z-index to avoid conflicts
        pointerEvents: "none",
        opacity: 0.12,  // low opacity for subtle effect
        backgroundColor: "#000000", // explicit black background
      }}
    />
  );
};

export default ParticleBackground;
