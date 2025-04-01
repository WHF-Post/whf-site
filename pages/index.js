// pages/index.js
'use client';

import React from 'react';

export default function HomePage() {
  return (
    <div className="text-white font-sans scroll-smooth">
      {/* Fullscreen video background */}
      <section id="home" className="relative h-screen w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/WHF_Homepage_Video_converted.mp4"
        />
        <div className="relative z-10 flex items-end justify-center h-full pb-10">
          <a href="#about" className="text-white text-xl underline hover:text-blue-400 transition">
            Scroll to About ↓
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen bg-black px-6 py-20">
        <h2 className="text-3xl font-semibold mb-4">About WHF</h2>
        <p className="text-gray-300 max-w-2xl">
          Whitehouse Films is a post studio trusted by brands, networks, and creators to turn raw footage into cinematic stories.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="min-h-screen bg-gray-900 px-6 py-20">
        <h2 className="text-3xl font-semibold mb-4">Services</h2>
        <p className="text-gray-300 max-w-2xl">
          From editing to influencer content packages, WHF delivers sharp storytelling with polished visuals.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen bg-black px-6 py-20">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <p className="text-gray-300 max-w-2xl">Let's connect and bring your vision to life.</p>
      </section>
    </div>
  );
}
