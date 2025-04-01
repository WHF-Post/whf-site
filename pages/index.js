// pages/index.js
import React, { useRef } from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-black text-white font-sans">
      <Head>
        <title>Whitehouse Films</title>
        <meta name="description" content="Cinematic storytelling from Charles White." />
      </Head>

      {/* Navigation */}
      <header className="fixed top-0 left-0 w-full bg-black bg-opacity-80 z-50 px-6 py-4 flex justify-between items-center border-b border-gray-800">
        <div className="text-xl font-bold">WHF</div>
        <nav className="space-x-6 text-sm md:text-base">
          <button onClick={() => scrollToSection(aboutRef)} className="hover:underline">About</button>
          <button onClick={() => scrollToSection(servicesRef)} className="hover:underline">Services</button>
          <Link href="/work" className="hover:underline">Work</Link>
          <button onClick={() => scrollToSection(contactRef)} className="hover:underline">Contact</button>
        </nav>
      </header>

      {/* Hero Video Section */}
      <section className="h-screen w-full relative overflow-hidden">
        <video
          src="/WHF_Homepage_Video_converted.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        ></video>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} id="about" className="py-20 px-6 bg-black text-white scroll-mt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6">Who We Are</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Whitehouse Films is the creative lab of Charles White — an award-winning editor, filmmaker, and storyteller with 20+ years in the game. From major networks like BET, Fox News, and NFL Films to viral podcast moments and branded campaigns, WHF transforms raw footage into cinematic stories that connect.
          </p>
          <p className="text-gray-500 mt-6 text-base leading-relaxed">
            Based in North Carolina, rooted in Newark, and shaped by years in New York’s post-production trenches, WHF brings grit, polish, and purpose to every frame. Whether you're launching a docuseries, building a brand, or just tired of basic edits, you're in the right place.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} id="services" className="py-20 px-6 bg-gray-900 text-white scroll-mt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6">What We Do</h2>
          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-semibold mb-2">🎬 Editing Services</h3>
              <p className="text-gray-300">Professional editing for documentaries, branded content, and episodic series.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">🚀 Influencer Packages</h3>
              <p className="text-gray-300">Launch or upgrade your content with branded openers, graphics, and reels.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">🔁 Recurring Content Plans</h3>
              <p className="text-gray-300">Monthly plans for social content, campaigns, and marketing support.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">🎓 Education</h3>
              <p className="text-gray-300">Beginner editing course launching soon in partnership with Artistic Heights Academy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} id="contact" className="py-20 px-6 bg-black text-white scroll-mt-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6">Get In Touch</h2>
          <p className="text-gray-400 mb-8">Have a project in mind or just want to connect? Drop a line.</p>
          <form
            action="https://formspree.io/f/mjvnavko"
            method="POST"
            className="space-y-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded h-32"
            ></textarea>
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-800 rounded-full transition-all duration-200"
            >
              Send Message
            </button>
          </form>
          <div className="mt-10 flex justify-center space-x-6 text-blue-400">
            <a href="https://instagram.com/whitehousefilms" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://youtube.com/@whitehousefilms" target="_blank" rel="noopener noreferrer">YouTube</a>
            <a href="https://tiktok.com/@whitehousefilms" target="_blank" rel="noopener noreferrer">TikTok</a>
          </div>
        </div>
      </section>
    </div>
  );
}
