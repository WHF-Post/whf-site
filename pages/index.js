// pages/index.js
import Head from 'next/head';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div style={{ margin: 0, padding: 0, overflowX: 'hidden' }}>
      <Head>
        <title>Whitehouse Films</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Fullscreen looping video background */}
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

      {/* Smooth scroll layout */}
      <div style={{ scrollBehavior: 'smooth' }}>
        <section id="home" className="h-screen"></section>

        {/* About Section */}
        <section id="about" className="py-20 px-6 bg-black text-white scroll-mt-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-semibold mb-6">Who We Are</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Whitehouse Films is the creative lab of Charles White — an award-winning editor, filmmaker,
              and storyteller with 20+ years in the game. From major networks like BET, Fox News, and NFL
              Films to viral podcast moments and branded campaigns, WHF transforms raw footage into
              cinematic stories that connect.
            </p>
            <p className="text-gray-500 mt-6 text-base leading-relaxed">
              Based in North Carolina, rooted in Newark, and shaped by years in New York’s post-production
              trenches, WHF brings grit, polish, and purpose to every frame. Whether you're launching a
              docuseries, building a brand, or just tired of basic edits, you're in the right place.
            </p>
            <p className="text-blue-400 text-lg font-mono mt-10 overflow-hidden whitespace-nowrap border-r-2 border-white inline-block animate-typewriter">
              Charles White
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-6 bg-black text-white scroll-mt-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">What We Do</h2>
            <div className="space-y-10">
              <div>
                <h3 className="text-2xl font-semibold mb-2">🎬 Editing Services</h3>
                <p className="text-gray-300">
                  Professional editing for documentaries, branded content, and episodic series.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">🚀 Influencer Packages</h3>
                <p className="text-gray-300">
                  Launch or upgrade your content with branded openers, graphics, and reels.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">🔁 Recurring Content Plans</h3>
                <p className="text-gray-300">
                  Monthly plans for social content, campaigns, and marketing support.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">🎓 Education</h3>
                <p className="text-gray-300">
                  Beginner editing course launching soon in partnership with Artistic Heights Academy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6 bg-black text-white scroll-mt-20">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Let’s Work</h2>
            <form
              action="https://formspree.io/f/mayzyzya"
              method="POST"
              className="space-y-6"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full bg-gray-800 px-4 py-3 rounded text-white placeholder-gray-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full bg-gray-800 px-4 py-3 rounded text-white placeholder-gray-400"
              />
              <textarea
                name="message"
                placeholder="Tell us about your project..."
                rows="5"
                required
                className="w-full bg-gray-800 px-4 py-3 rounded text-white placeholder-gray-400"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-800 px-6 py-3 rounded text-lg font-medium"
              >
                Send Message
              </button>
            </form>
            <div className="mt-8 space-x-6 text-lg">
              <a href="https://instagram.com/whitehousefilms" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://youtube.com/@whitehousefilms" target="_blank" rel="noopener noreferrer">YouTube</a>
              <a href="https://linkedin.com/in/charleswhiteediting" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
