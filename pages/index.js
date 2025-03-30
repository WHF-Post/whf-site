// pages/index.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  const images = [
  '/WHF_LOGO_BW.png',
  '/SFC_Credit.png',
  '/TOT_Cover Art.png',
  '/WOW 2019 RECAP card.png',
  '/WHF_SFC_2chainz.jpg',
  '/WHF_SFC_Mikeepps.jpg',
  '/WHF_SFC_Mikeepps2.jpg',
  '/Chuck with camera.JPG',
  '/WHF_Crew1.jpg',
  '/WHF_Crew2.jpg',
  '/WHF_Keyboard_1.png',
  '/WHF_Keyboard2.png',
  '/WHF_Keena.png',
  '/WHF_KdotSFCopen.png',
  '/WHF_SFC_2Juvenile1.jpg',
  '/WHF_SFC_DanceBattle.png',
  '/WHF_SFC_Truck_echo.png',
  '/WHF_SFC_tablet.png',
  '/WHF_SchoologEdit.png',
  '/WHF_Logo_ANIM.gif'
  ];

  return (
    <main className="min-h-screen bg-black text-white font-sans">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
        <Image src="/WHF_LOGO_BW.png" alt="WHF Logo" width={100} height={40} />
        <nav className="space-x-6 text-sm md:text-base">
          <Link href="#work" className="hover:underline">Work</Link>
          <Link href="#services" className="hover:underline">Services</Link>
          <Link href="#about" className="hover:underline">About</Link>
          <Link href="#contact" className="hover:underline">Contact</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 px-6 bg-gradient-to-b from-black via-gray-900 to-black">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">We Don’t Just Cut. We Create.</h1>
        <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto">
          Whitehouse Films is a post studio trusted by brands, networks & creators to turn raw footage into cinematic stories.
        </p>
        <Link href="#work">
          <button className="text-black bg-white px-6 py-3 text-lg rounded-full hover:bg-gray-200">View Work</button>
        </Link>
      </section>

      {/* Carousel Section */}
      <section className="py-10 px-6 bg-black">
        <div className="overflow-x-auto whitespace-nowrap space-x-4 flex px-4">
{images.map((src, i) => (
<img
  key={i}
  src={src}
  alt={`carousel image ${i}`}
  className="h-[160px] w-auto rounded-lg inline-block object-contain"
/>
))}
        </div>
      </section>

      {/* Services Tease */}
      <section id="services" className="py-16 px-6 bg-gray-900">
        <h2 className="text-3xl font-semibold text-center mb-10">What We Do</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-black p-6 rounded-xl border border-gray-700 shadow-md">
            <h3 className="text-xl font-bold mb-2">🎬 Editing Services</h3>
            <p className="text-gray-400">Professional editing for documentaries, branded content, and episodic series.</p>
          </div>
          <div className="bg-black p-6 rounded-xl border border-gray-700 shadow-md">
            <h3 className="text-xl font-bold mb-2">🚀 Influencer Packages</h3>
            <p className="text-gray-400">Launch or upgrade your content with branded openers, graphics, and reels.</p>
          </div>
          <div className="bg-black p-6 rounded-xl border border-gray-700 shadow-md">
            <h3 className="text-xl font-bold mb-2">📅 Recurring Content Plans</h3>
            <p className="text-gray-400">Monthly plans for social content, campaigns, and marketing support.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
