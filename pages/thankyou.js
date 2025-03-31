// pages/thankyou.js
import React from 'react';

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-20 text-center">
      <h1 className="text-4xl font-bold mb-6">Thank You!</h1>
      <p className="text-lg text-gray-400 mb-12">We’ll be in touch soon. In the meantime, enjoy this...</p>

      <div className="max-w-3xl mx-auto aspect-video mb-8">
        <iframe
          src="https://f.io/P8270C-6"
          className="w-full h-full rounded-lg"
          frameBorder="0"
          allowFullScreen
          title="Neyo Curves Fits"
        ></iframe>
      </div>

      <p className="text-base text-gray-400 max-w-xl mx-auto italic">
        Production is hard, but we’re used to being the last one with the ball —
        always getting across the finish line. Talk soon!
      </p>
    </div>
  );
}
