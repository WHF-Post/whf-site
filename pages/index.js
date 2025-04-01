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
      <video
  autoPlay
  loop
  muted
  playsInline
  className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
>
  <source src="/WHF_Homepage_Video_converted.mp4" type="video/mp4" />
</video>

{/* ✅ Diagnostic Test Block */}
<div className="bg-red-500 text-white p-4 text-center z-10 relative">
  CHECK — If you see this, Tailwind and layout are working.
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
