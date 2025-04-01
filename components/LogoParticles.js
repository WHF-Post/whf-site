'use client';

import { useCallback } from 'react';
import Particles from '@tsparticles/react';
import { loadFull } from 'tsparticles';

export default function LogoParticles() {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  return (
    <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: '#000000' },
          fpsLimit: 60,
          particles: {
            number: { value: 50 },
            color: { value: '#ffffff' },
            shape: { type: 'circle' },
            opacity: { value: 0.5 },
            size: { value: 3 },
            move: { enable: true, speed: 2 },
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
