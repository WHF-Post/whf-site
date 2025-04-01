'use client';

import React from 'react';
import Particles from '@tsparticles/react';

export default function LogoParticles() {
  return (
    <div className="relative w-full h-screen bg-black text-white">
      <Particles
        id="tsparticles"
        options={{
          fullScreen: { enable: false },
          background: { color: '#000000' },
          fpsLimit: 60,
          particles: {
            number: { value: 0 }, // Let the SVG control the particle count
            shape: {
              type: 'image',
              image: {
                src: '/logo.svg',
                width: 300,
                height: 300,
              },
            },
            size: {
              value: 3,
            },
            move: {
              enable: true,
              speed: 1,
            },
            opacity: {
              value: 0.5,
            },
          },
        }}
      />
    </div>
  );
}
