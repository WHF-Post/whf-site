'use client';

import React from 'react';
import Particles from '@tsparticles/react';

export default function LogoParticles() {
  return (
    <div className="w-full h-screen bg-black relative">
      <Particles
        id="tsparticles"
        options={{
          fullScreen: { enable: false },
          background: { color: '#000000' },
          fpsLimit: 60,
          particles: {
            number: { value: 60 },
            color: { value: '#ffffff' },
            shape: { type: 'circle' },
            opacity: { value: 0.5 },
            size: { value: 2 },
            move: { enable: true, speed: 1 },
            links: {
              enable: true,
              color: '#ffffff',
              distance: 150,
              opacity: 0.4,
              width: 1,
            },
          },
        }}
      />
    </div>
  );
}
