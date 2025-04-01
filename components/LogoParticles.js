'use client';

import React from 'react';
import Particles from '@tsparticles/react';

export default function LogoParticles() {
  return (
    <div className="relative w-full h-screen bg-black">
      <Particles
        id="tsparticles"
        options={{
          fullScreen: { enable: false },
          background: {
            color: '#000000',
          },
          fpsLimit: 60,
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                area: 800,
              },
            },
            color: {
              value: '#ffffff',
            },
            shape: {
              type: 'circle',
            },
            opacity: {
              value: 0.5,
            },
            size: {
              value: 2,
              random: true,
            },
            links: {
              enable: true,
              distance: 150,
              color: '#ffffff',
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              direction: 'none',
              outModes: {
                default: 'bounce',
              },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}
