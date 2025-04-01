'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function LogoParticles() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-black text-white">
      <Image
        src="/logo.svg"
        alt="WHF Logo"
        width={300}
        height={300}
        priority
      />
      <h1 className="text-white text-2xl md:text-3xl font-light mt-8">
        Authentic Stories. Polished Cuts.
      </h1>
      <p className="text-gray-400 mt-2 max-w-md text-center">
        Whitehouse Films is a post studio trusted by brands, networks & creators to turn raw footage into cinematic stories.
      </p>
      <Link href="/about">
        <span className="mt-6 inline-block px-6 py-3 text-lg rounded-full bg-blue-600 hover:bg-blue-800 transition-all duration-200 glitch-glow text-center">
          About WHF
        </span>
      </Link>
    </div>
  );
}
