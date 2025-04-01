'use client';

import { useCallback } from 'react';
import { loadFull } from 'tsparticles';
import { Engine } from 'tsparticles-engine';
import Particles from 'react-tsparticles';

export default function LogoParticles() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: '#000',
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 100,
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
            value: 3,
          },
          move: {
            enable: true,
            speed: 1,
          },
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
  );
}
