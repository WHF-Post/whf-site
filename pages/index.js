// pages/index.js
export default function HomePage() {
  return (
    <div className="relative overflow-x-hidden">
      {/* Fullscreen video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-screen h-screen object-cover z-[-1]"
      >
        <source src="/WHF_Homepage_Video_converted.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Scroll sections wrapper */}
      <div className="relative scroll-smooth">
        {/* HOME */}
        <section id="home" className="h-screen"></section>

        {/* ABOUT */}
        <section id="about" className="py-20 px-6 bg-black text-white scroll-mt-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-semibold mb-6">Who We Are</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Whitehouse Films is the creative lab of Charles White — an award-winning editor, filmmaker, and storyteller with 20+ years in the game. From major networks like BET, Fox News, and NFL Films to viral podcast moments and branded campaigns, WHF transforms raw footage into cinematic stories that connect.
            </p>
            <p className="text-gray-500 mt-6 text-base leading-relaxed">
              Based in North Carolina, rooted in Newark, and shaped by years in New York’s post-production trenches, WHF brings grit, polish, and purpose to every frame. Whether you're launching a docuseries, building a brand, or just tired of basic edits, you're in the right place.
            </p>
            <p className="text-blue-400 text-xl font-mono mt-10 inline-block border-r-2 border-blue-400 whitespace-nowrap overflow-hidden animate-typewriter">
              — Charles White
            </p>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="py-20 px-6 bg-[#111] text-white scroll-mt-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-semibold mb-10 text-center">What We Do</h2>
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

        {/* CONTACT */}
        <section id="contact" className="py-20 px-6 bg-black text-white scroll-mt-20">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-4xl font-semibold mb-8">Let’s Connect</h2>
            <form
              action="https://formspree.io/f/mjvnolzn"
              method="POST"
              className="space-y-6"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded bg-gray-800 text-white focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 rounded bg-gray-800 text-white focus:outline-none"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                required
                className="w-full px-4 py-3 rounded bg-gray-800 text-white focus:outline-none"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-800 transition-all duration-200 px-6 py-3 rounded text-lg"
              >
                Send
              </button>
            </form>

            <div className="flex justify-center gap-6 mt-10">
              <a href="https://instagram.com/yourhandle" className="text-blue-400 hover:underline" target="_blank">Instagram</a>
              <a href="https://twitter.com/yourhandle" className="text-blue-400 hover:underline" target="_blank">Twitter</a>
              <a href="https://linkedin.com/in/yourhandle" className="text-blue-400 hover:underline" target="_blank">LinkedIn</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
