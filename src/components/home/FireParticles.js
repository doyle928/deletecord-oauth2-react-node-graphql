import React from "react";
import Particles from "react-particles-js";

const FireParticles = () => {
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 10,
            density: {
              enable: false
            }
          },
          color: {
            value: "#9BA9CC"
          },
          size: {
            value: 2,
            random: true,
            anim: {
              speed: 1,
              size_min: 0.3
            }
          },
          line_linked: {
            enable: false
          },
          move: {
            random: true,
            speed: 0.4,
            direction: "top",
            out_mode: "out"
          }
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse"
            }
          },
          modes: {
            repulse: {
              distance: 30,
              duration: 1
            }
          }
        }
      }}
    />
  );
};
export default FireParticles;
