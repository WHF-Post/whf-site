import React from 'react';
import Head from 'next/head';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact – WHF</title>
      </Head>

      <div className="min-h-screen bg-black text-white px-6 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Let’s Work</h1>
          <p className="text-gray-400 mb-10">
            Whether you need post-production help or a full creative strategy, WHF has your back.
          </p>

          <form
            action="https://formspree.io/f/mldjwlvk"
            method="POST"
            className="space-y-6 text-left"
          >
            <input type="hidden" name="_redirect" value="/thankyou" />
            <input type="hidden" name="_subject" value="New WHF Inquiry" />
            <input type="hidden" name="_language" value="en" />

            <div>
              <label className="block mb-2 text-sm text-gray-300">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 rounded bg-gray-800 border border-gray-600 text-white focus:outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded bg-gray-800 border border-gray-600 text-white focus:outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-300">Message</label>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full px-4 py-3 rounded bg-gray-800 border border-gray-600 text-white focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-6 px-6 py-3 text-lg rounded-full bg-blue-600 hover:bg-blue-800 transition-all duration-200 w-full glitch-glow"
            >
              Send Message
            </button>
          </form>

          {/* Socials */}
          <div className="mt-16 space-x-6">
            <a href="https://www.instagram.com/whfpost" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              Instagram
            </a>
            <a href="https://www.youtube.com/@whfpost" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              YouTube
            </a>
            <a href="https://www.tiktok.com/@whfpost" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              TikTok
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
