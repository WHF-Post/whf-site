// components/LogoParticles.js
import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Image from 'next/image';
import Link from 'next/link';

export default function LogoParticles() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center bg-black text-white">
      <Particles
        id="tsparticles"
        init={particlesInit}
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
        className="absolute top-0 left-0 w-full h-full"
      />

      {/* White Logo */}
      <Image
        src="/logo.png"
        alt="WHF Logo"
        width={300}
        height={300}
        className="z-10"
        priority
      />

      {/* Tagline & CTA */}
      <div className="text-center z-10 mt-8">
        <h1 className="text-white text-2xl md:text-3xl font-light">
          Authentic Stories. Polished Cuts.
        </h1>
        <p className="text-gray-400 mt-2 max-w-md mx-auto">
          Whitehouse Films is a post studio trusted by brands, networks & creators to turn raw footage into cinematic stories.
        </p>
        <Link href="/about">
          <button className="mt-6 px-6 py-3 text-lg rounded-full bg-blue-600 hover:bg-blue-800 transition-all duration-200 glitch-glow">
            About WHF
          </button>
        </Link>
      </div>
    </div>
  );
}
