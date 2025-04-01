import React from 'react';
import Head from 'next/head';

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>Thanks – WHF</title>
      </Head>

      <div className="min-h-screen bg-black text-white px-6 py-20 text-center">
        <h1 className="text-4xl font-bold mb-6">Thank You!</h1>
        <p className="text-lg text-gray-400 mb-12">
          We’ll be in touch soon. In the meantime, enjoy this...
        </p>

        <div className="max-w-3xl mx-auto aspect-video mb-3">
          <iframe
            src="https://f.io/P8270C-6"
            className="w-full h-full rounded-lg"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

        <p className="text-sm text-gray-500 mb-12 italic">
          Thanks for stopping by. Don&apos;t do me like Ne-Yo did Africa!
        </p>

        <p className="text-base text-gray-400 max-w-xl mx-auto italic">
          Production is hard, but we’re used to being the last one with the ball —
          always getting across the finish line. Talk soon!
        </p>
      </div>
    </>
  );
}
