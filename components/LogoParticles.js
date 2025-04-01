'use client';

import React from 'react';
import Particles from '@tsparticles/react';

export default function LogoParticles() {
  return (
    <div className="w-full h-screen bg-black text-white">
      <Particles
        id="tsparticles"
        options={{
          fullScreen: { enable: false },
          background: { color: '#000000' },
          fpsLimit: 60,
          particles: {
            number: { value: 80 },
            color: { value: '#00BFFF' },
            links: {
              enable: true,
              color: '#00BFFF',
              distance: 150,
              opacity: 0.4,
              width: 1,
            },
            move: { enable: true, speed: 1 },
            size: { value: 2 },
            opacity: { value: 0.5 },
          },
        }}
      />
    </div>
  );
}
