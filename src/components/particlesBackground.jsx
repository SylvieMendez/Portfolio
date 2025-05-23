import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useCallback } from "react";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, index: -1 },
        background: {
          color: {
            value: "transparent"
          }
        },
        particles: {
          number: {
            value: 60,
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.3,
          },
          size: {
            value: 3,
            random: true,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            outModes: {
              default: "bounce",
            },
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;