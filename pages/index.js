import React from 'react';

export default function HomePage() {
  return (
    <div style={{ margin: 0, padding: 0, overflowX: 'hidden' }}>
      {/* Fullscreen video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          objectFit: 'cover',
          zIndex: -1,
        }}
      >
        <source src="/WHF_Homepage_Video_converted.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Scroll sections */}
      <div style={{ scrollBehavior: 'smooth' }}>
        {/* HOME */}
        <section id="home" style={{ height: '100vh' }}></section>

        {/* ABOUT */}
        <section id="about" className="py-20 px-6 bg-black text-white scroll-mt-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-semibold mb-6">Who We Are</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Whitehouse Films is the creative lab of Charles White — an award-winning editor,
              filmmaker, and storyteller with 20+ years in the game. From major networks like BET,
              Fox News, and NFL Films to viral podcast moments and branded campaigns, WHF
              transforms raw footage into cinematic stories that connect.
            </p>
            <p className="text-gray-500 mt-6 text-base leading-relaxed">
              Based in North Carolina, rooted in Newark, and shaped by years in New York’s
              post-production trenches, WHF brings grit, polish, and purpose to every frame.
              Whether you're launching a docuseries, building a brand, or just tired of basic edits,
              you're in the right place.
            </p>
            <p
              className="text-white text-xl font-mono mt-8 overflow-hidden whitespace-nowrap border-r-4 border-white animate-typewriter"
            >
              — Charles White
            </p>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="min-h-screen bg-black text-white px-6 py-20 scroll-mt-20">
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
        </section>

        {/* CONTACT */}
        <section id="contact" className="min-h-screen bg-black text-white px-6 py-20 scroll-mt-20">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Let’s Connect</h1>
          <div className="max-w-xl mx-auto">
            <form
              action="https://formspree.io/f/xgegpqvl"
              method="POST"
              className="space-y-6"
            >
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="w-full bg-gray-800 text-white border border-gray-600 rounded p-3"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                className="w-full bg-gray-800 text-white border border-gray-600 rounded p-3"
              />
              <textarea
                name="message"
                required
                placeholder="Tell us about your project"
                rows="5"
                className="w-full bg-gray-800 text-white border border-gray-600 rounded p-3"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-800 transition-all py-3 px-6 rounded-full text-lg font-medium"
              >
                Send Message
              </button>
            </form>

            <div className="mt-10 text-center space-y-2">
              <p className="text-sm text-gray-500">Socials:</p>
              <div className="flex justify-center gap-4 text-blue-400">
                <a href="https://www.instagram.com/whfpost" target="_blank" rel="noreferrer">Instagram</a>
                <a href="https://www.youtube.com/@whfpost" target="_blank" rel="noreferrer">YouTube</a>
                <a href="https://www.tiktok.com/@whfpost" target="_blank" rel="noreferrer">TikTok</a>
                <a href="https://www.linkedin.com/in/charleswhite-whf" target="_blank" rel="noreferrer">LinkedIn</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
