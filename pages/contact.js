// pages/contact.js
import React from 'react';
import Link from 'next/link';

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <h1 className="text-4xl font-bold text-center mb-10">Contact Us</h1>

      <form className="max-w-2xl mx-auto space-y-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-3 rounded bg-gray-900 border border-gray-700 focus:outline-none"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-3 rounded bg-gray-900 border border-gray-700 focus:outline-none"
        />
        <textarea
          rows="5"
          placeholder="Tell us about your project"
          className="w-full px-4 py-3 rounded bg-gray-900 border border-gray-700 focus:outline-none"
        ></textarea>

        <Link href="/thankyou">
          <button
            type="button"
            className="px-6 py-3 text-lg rounded-full bg-blue-600 hover:bg-blue-800 transition-all duration-200 glitch-glow"
          >
            Send Message
          </button>
        </Link>
      </form>

      <div className="flex justify-center space-x-6 mt-12">
        <a href="https://www.instagram.com/whitehouse_films/" target="_blank" rel="noopener noreferrer">
          <img src="/instagram-icon.png" alt="Instagram" className="h-8 w-8 hover:drop-shadow-[0_0_5px_white]" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100046536647810" target="_blank" rel="noopener noreferrer">
          <img src="/facebook-icon.png" alt="Facebook" className="h-8 w-8 hover:drop-shadow-[0_0_5px_white]" />
        </a>
        <a href="https://www.linkedin.com/in/chuckwhiteedits/" target="_blank" rel="noopener noreferrer">
          <img src="/linkedin-icon.png" alt="LinkedIn" className="h-8 w-8 hover:drop-shadow-[0_0_5px_white]" />
        </a>
      </div>
    </div>
  );
}
