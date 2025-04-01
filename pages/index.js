export default function HomePage() {
  return (
    <div className="relative overflow-x-hidden scroll-smooth">
      {/* 🔥 Fullscreen looping video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/WHF_Homepage_Video_converted.mp4" type="video/mp4" />
      </video>

      {/* 🔺 Test block just to prove layout */}
      <div className="bg-red-600 text-white text-center p-4 z-10 relative">
        ✅ Tailwind is working. Scroll to see content!
      </div>

      {/* 🔻 Page Sections */}
      <section id="about" className="min-h-screen bg-black text-white px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6">Who We Are</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Whitehouse Films is the creative lab of Charles White — an award-winning editor,
            filmmaker, and storyteller with 20+ years in the game. From major networks like
            BET, Fox News, and NFL Films to viral podcast moments and branded campaigns,
            WHF transforms raw footage into cinematic stories that connect.
          </p>
          <p className="text-gray-500 mt-6 text-base leading-relaxed">
            Based in North Carolina, rooted in Newark, and shaped by years in New York’s
            post-production trenches, WHF brings grit, polish, and purpose to every frame.
            Whether you're launching a docuseries, building a brand, or just tired of basic
            edits, you're in the right place.
          </p>
          <div className="mt-6 text-xl font-mono text-white animate-typewriter border-r-2 border-blue-500 inline-block pr-2">
            — Charles White
          </div>
        </div>
      </section>

      <section id="services" className="min-h-screen bg-[#111] text-white px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-8">What We Do</h2>

          <div className="space-y-10 text-left">
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

      <section id="contact" className="min-h-screen bg-[#222] text-white px-6 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6">Let’s Connect</h2>
          <p className="text-gray-400 mb-10">
            Whether it’s your next doc, brand campaign, or something wild — WHF is ready to help you finish strong.
          </p>

          <form
            action="https://formspree.io/f/your_form_id" // Replace with your real Formspree endpoint
            method="POST"
            className="space-y-6 text-left"
          >
            <input
              type="text"
              name="name"
              required
              placeholder="Name"
              className="w-full p-3 rounded bg-gray-800 border border-gray-700 placeholder-gray-400"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              className="w-full p-3 rounded bg-gray-800 border border-gray-700 placeholder-gray-400"
            />
            <textarea
              name="message"
              required
              placeholder="Tell us about your project..."
              className="w-full p-3 h-40 rounded bg-gray-800 border border-gray-700 placeholder-gray-400"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 transition-colors px-6 py-3 rounded text-lg font-semibold"
            >
              Send Message
            </button>
          </form>

          <div className="mt-10 space-x-6 text-gray-400">
            <a href="https://instagram.com/whitehousefilms" target="_blank" rel="noopener noreferrer">
              IG
            </a>
            <a href="https://youtube.com/@whitehousefilms" target="_blank" rel="noopener noreferrer">
              YouTube
            </a>
            <a href="https://vimeo.com/whitehousefilms" target="_blank" rel="noopener noreferrer">
              Vimeo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
