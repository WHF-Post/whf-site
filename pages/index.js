import React, { useRef, useEffect } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <main className="min-h-screen bg-black text-white font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center bg-black bg-opacity-70 border-b border-gray-800 backdrop-blur-md">
        <video
          src="/WHF_Homepage_Video_converted.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-screen object-cover z-0"
        />

        <div className="z-10 text-lg font-semibold tracking-wide">WHF</div>
        <nav className="z-10 space-x-6 text-sm md:text-base">
          <button onClick={() => scrollToSection(aboutRef)} className="hover:underline">About</button>
          <button onClick={() => scrollToSection(servicesRef)} className="hover:underline">Services</button>
          <button onClick={() => scrollToSection(contactRef)} className="hover:underline">Contact</button>
        </nav>
      </header>

      {/* Overlay Hero (Video handles background) */}
      <section className="relative h-screen flex items-center justify-center text-center z-10">
        {/* Optional overlay content could go here if needed */}
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="min-h-screen px-8 py-20 bg-black flex flex-col justify-center items-center text-center transition-opacity duration-1000">
        <h2 className="text-4xl font-bold mb-4">About WHF</h2>
        <p className="max-w-3xl text-gray-400 text-lg">
          Whitehouse Films is a post studio trusted by brands, networks, and creators to turn raw footage into cinematic stories.
        </p>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="min-h-screen px-8 py-20 bg-gray-900 flex flex-col justify-center items-center text-center transition-opacity duration-1000">
        <h2 className="text-4xl font-bold mb-4">Our Services</h2>
        <p className="max-w-3xl text-gray-400 text-lg">
          Editing. Branding. Campaign support. Monthly content plans. Let us make you look like a million bucks.
        </p>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="min-h-screen px-8 py-20 bg-black flex flex-col justify-center items-center text-center transition-opacity duration-1000">
        <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
        <p className="max-w-3xl text-gray-400 text-lg">
          Ready to talk about your next project? Drop us a line. We’d love to help bring your story to life.
        </p>
      </section>
    </main>
  );
}
