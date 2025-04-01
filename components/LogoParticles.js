'use client';

import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export default function LogoParticles() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh', backgroundColor: '#000' }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: '#000000',
          },
          fpsLimit: 60,
          particles: {
            number: {
              value: 60,
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
            },
            move: {
              enable: true,
              speed: 1,
            },
            links: {
              enable: true,
              distance: 150,
              color: '#ffffff',
              opacity: 0.4,
              width: 1,
            },
          },
        }}
      />
    </div>
  );
}
