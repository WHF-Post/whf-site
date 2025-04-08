import React, { useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Home() {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  const Bullet = () => (
    <Image
      src="/bullet.png"
      alt="bullet"
      width={50}
      height={50}
      className="inline-block mr-3 align-middle"
    />
  );
  return (
    <div className="bg-black text-white">
      <Head>
        <title>Whitehouse Films</title>
        <link href="https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap" rel="stylesheet" />
      </Head>

      {/* Hero Section */}
      <section className="h-screen w-full relative overflow-hidden">
        <video
          src="/WHF_Homepage_Video_converted.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-contain sm:object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} id="about" className="py-20 px-6 bg-black text-white scroll-mt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-handdrawn hover:animate-glitch">Who We Are</h2>
          <p className="text-gray-400 text-lg leading-relaxed mt-6">
            Whitehouse Films is the creative lab of Charles "Chuck" White — a veteran broadcast editor,
            filmmaker, and storyteller with two decades in the game. From major networks like BET, MTV2,
            and MSNBC to branded campaigns for iconic magazines and music labels, WHF transforms raw footage
            into cinematic stories that hit.
          </p>
          <p className="text-gray-500 mt-6 text-base leading-relaxed">
            Based in North Carolina, rooted in Newark, and sharpened in New York’s post trenches, WHF brings
            polish, purpose, and that underground energy to every project. Whether you’re launching a docuseries,
            building a brand, or tired of the same safe edits — you just found your secret weapon.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} id="services" className="py-20 px-6 bg-black text-white scroll-mt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-handdrawn hover:animate-glitch">What We Do</h2>
          <div className="space-y-10 text-center mt-10">
            <div>
              <h3 className="text-2xl font-semibold mb-2 flex items-center justify-center">
                <Bullet /> Editing Services
              </h3>
              <p className="text-gray-300">Professional editing for documentaries, branded content, and episodic series.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2 flex items-center justify-center">
                <Bullet /> Influencer Packages
              </h3>
              <p className="text-gray-300">Launch or upgrade your content with branded openers, graphics, and reels.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2 flex items-center justify-center">
                <Bullet /> Recurring Content Plans
              </h3>
              <p className="text-gray-300">Monthly plans for social content, campaigns, and marketing support.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-2 flex items-center justify-center">
                <Bullet /> Education
              </h3>
              <p className="text-gray-300">Beginner editing course launching soon in partnership with Artistic Heights Academy.</p>
            </div>
          </div>
        </div>
      </section>
      <div className="text-center mt-16">
  <Link
    href="/work"
    className="inline-block bg-white text-black font-semibold py-3 px-6 rounded-full hover:bg-gray-200 transition"
  >
    SEE THE WORK
  </Link>
</div>
      {/* Contact Section */}
      <section ref={contactRef} id="contact" className="py-20 px-6 bg-black text-white scroll-mt-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6">Get In Touch</h2>
          <p className="text-gray-400 mb-8">Have a project in mind or just want to connect? Drop me a message.</p>

          <form
  action="https://formspree.io/f/mldjwlvk"
  method="POST"
  onSubmit={() => setTimeout(() => (window.location.href = '/thankyou'), 100)}
>            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full p-3 rounded bg-white text-black border border-white"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="w-full p-3 rounded bg-white text-black border border-white"
            />
            <textarea
              name="message"
              required
              placeholder="Your Message"
              className="w-full p-3 rounded bg-white text-black border border-white"
              rows="5"
            ></textarea>
            <button
              type="submit"
              className="bg-white text-black font-bold py-2 px-6 rounded hover:bg-gray-200 transition"
            >
              Send
            </button>
          </form>

          <div className="mt-10 flex justify-center space-x-6">
            <a
              href="https://www.facebook.com/profile.php?id=100046536647810"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-full p-3 hover:scale-105 transition"
            >
              <FaFacebookF className="text-black w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/whitehouse_films/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-full p-3 hover:scale-105 transition"
            >
              <FaInstagram className="text-black w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/chuckwhiteedits/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-full p-3 hover:scale-105 transition"
            >
              <FaLinkedinIn className="text-black w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}