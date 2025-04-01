import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export default function TestPage() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: 'black',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
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
