// pages/services.js
import React from 'react';
import Link from 'next/link';

export default function Services() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">What We Do</h1>

      <div className="max-w-4xl mx-auto space-y-10">
        <div>
          <h2 className="text-2xl font-semibold mb-2">🎬 Editing Services</h2>
          <p className="text-gray-300">
            Professional editing for documentaries, branded content, and episodic series.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">🚀 Influencer Packages</h2>
          <p className="text-gray-300">
            Launch or upgrade your content with branded openers, graphics, and reels.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">🔁 Recurring Content Plans</h2>
          <p className="text-gray-300">
            Monthly plans for social content, campaigns, and marketing support.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">🎓 Education</h2>
          <p className="text-gray-300">
            Beginner editing course launching soon in partnership with Artistic Heights Academy.
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-12">
        <Link href="/contact">
          <button className="px-6 py-3 text-lg rounded-full bg-blue-600 hover:bg-blue-800 transition-all duration-200 glitch-glow">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
}
