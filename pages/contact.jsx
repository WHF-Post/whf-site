import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaYoutube, FaTiktok, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Let’s Connect</h1>
      <p className="text-gray-400 text-center max-w-xl mx-auto mb-12">
        Ready to work together or just want to say hey? Drop a message below or find us on your favorite platform.
      </p>

      <form
        action="https://formspree.io/f/mnqewzgl" // Replace this ID with yours from Formspree
        method="POST"
        className="max-w-2xl mx-auto bg-gray-900 p-8 rounded-lg shadow-md"
      >
        <label className="block mb-4">
          <span className="text-gray-300">Your Name</span>
          <input
            type="text"
            name="name"
            required
            className="w-full mt-1 px-4 py-2 rounded bg-black border border-gray-700 text-white"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-300">Your Email</span>
          <input
            type="email"
            name="email"
            required
            className="w-full mt-1 px-4 py-2 rounded bg-black border border-gray-700 text-white"
          />
        </label>

        <label className="block mb-6">
          <span className="text-gray-300">Your Message</span>
          <textarea
            name="message"
            rows="5"
            required
            className="w-full mt-1 px-4 py-2 rounded bg-black border border-gray-700 text-white"
          ></textarea>
        </label>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-800 px-6 py-3 rounded-full transition-all duration-200 glitch-glow"
        >
          Send Message
        </button>
      </form>

      <div className="mt-16 text-center space-x-6 text-2xl">
        <Link href="https://instagram.com/whitehousefilms" target="_blank">
          <FaInstagram className="inline hover:text-pink-500 transition" />
        </Link>
        <Link href="https://youtube.com/@whitehousefilms" target="_blank">
          <FaYoutube className="inline hover:text-red-500 transition" />
        </Link>
        <Link href="https://tiktok.com/@whitehousefilms" target="_blank">
          <FaTiktok className="inline hover:text-white transition" />
        </Link>
        <Link href="https://linkedin.com/in/charleswhiteeditor" target="_blank">
          <FaLinkedin className="inline hover:text-blue-500 transition" />
        </Link>
      </div>
    </div>
  );
}
