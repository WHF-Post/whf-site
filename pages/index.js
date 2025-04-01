// pages/index.js
import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>WHF | Whitehouse Films</title>
      </Head>
      <div style={{ margin: 0, padding: 0, overflowX: 'hidden' }}>
        {/* Fullscreen Video Background */}
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

        {/* Page Content Scroll Sections */}
        <div style={{ scrollBehavior: 'smooth' }}>
          <section id="home" style={{ height: '100vh' }} />

          <section
            id="about"
            className="py-20 px-6 bg-black text-white scroll-mt-20"
          >
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-semibold mb-6">Who We Are</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Whitehouse Films is the creative lab of Charles White — an
                award-winning editor, filmmaker, and storyteller with 20+ years
                in the game. From major networks like BET, Fox News, and NFL
                Films to viral podcast moments and branded campaigns, WHF
                transforms raw footage into cinematic stories that connect.
              </p>
              <p className="text-gray-500 mt-6 text-base leading-relaxed">
                Based in North Carolina, rooted in Newark, and shaped by years
                in New York’s post-production trenches, WHF brings grit,
                polish, and purpose to every frame. Whether you're launching a
                docuseries, building a brand, or just tired of basic edits,
                you're in the right place.
              </p>
              <div className="mt-6 font-mono text-xl overflow-hidden whitespace-nowrap border-r-4 border-white w-fit mx-auto animate-typewriter">
                Charles White
              </div>
            </div>
          </section>

          <section
            id="services"
            className="min-h-screen bg-[#111] text-white px-6 py-20 scroll-mt-20"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
              What We Do
            </h1>

            <div className="max-w-4xl mx-auto space-y-10">
              <div>
                <h2 className="text-2xl font-semibold mb-2">
                  🎬 Editing Services
                </h2>
                <p className="text-gray-300">
                  Professional editing for documentaries, branded content, and
                  episodic series.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-2">
                  🚀 Influencer Packages
                </h2>
                <p className="text-gray-300">
                  Launch or upgrade your content with branded openers, graphics,
                  and reels.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-2">
                  🔁 Recurring Content Plans
                </h2>
                <p className="text-gray-300">
                  Monthly plans for social content, campaigns, and marketing
                  support.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-2">🎓 Education</h2>
                <p className="text-gray-300">
                  Beginner editing course launching soon in partnership with
                  Artistic Heights Academy.
                </p>
              </div>
            </div>
          </section>

          <section
            id="contact"
            className="min-h-screen bg-[#222] text-white px-6 py-20 scroll-mt-20"
          >
            <h2 className="text-4xl font-bold text-center mb-10">
              Get In Touch
            </h2>
            <div className="max-w-2xl mx-auto">
              <form
                action="https://formspree.io/f/xoqgqgon"
                method="POST"
                className="space-y-6"
              >
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded bg-gray-800 text-white border border-gray-600"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded bg-gray-800 text-white border border-gray-600"
                />
                <textarea
                  name="message"
                  rows="5"
                  required
                  placeholder="Your Message"
                  className="w-full px-4 py-3 rounded bg-gray-800 text-white border border-gray-600"
                />
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 rounded hover:bg-blue-800 transition-all duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
