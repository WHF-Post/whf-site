import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';

// ✅ Import LogoParticles using dynamic() with SSR turned off
const LogoParticles = dynamic(() => import('../components/LogoParticles'), {
  ssr: false,
});

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
        <Image src="/WHF_LOGO_ANIM.gif" alt="WHF Logo" width={100} height={40} />
        <nav className="space-x-6 text-sm md:text-base">
          <Link href="/work" className="hover:underline">Work</Link>
          <Link href="/services" className="hover:underline">Services</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-[90vh] w-full bg-black text-white overflow-hidden flex items-center justify-center">
        <LogoParticles /> {/* ✅ Rendered only on client now */}
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-6 bg-gray-900">
        <h2 className="text-3xl font-semibold text-center mb-10">What We Do</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-black p-6 rounded-xl border border-gray-700 shadow-md">
            <h3 className="text-xl font-bold mb-2">🎬 Editing Services</h3>
            <p className="text-gray-400">Professional editing for documentaries, branded content, and episodic series.</p>
          </div>
          <div className="bg-black p-6 rounded-xl border border-gray-700 shadow-md">
            <h3 className="text-xl font-bold mb-2">🚀 Influencer Packages</h3>
            <p className="text-gray-400">Launch or upgrade your content with branded openers, graphics, and reels.</p>
          </div>
          <div className="bg-black p-6 rounded-xl border border-gray-700 shadow-md">
            <h3 className="text-xl font-bold mb-2">📅 Recurring Content Plans</h3>
            <p className="text-gray-400">Monthly plans for social content, campaigns, and marketing support.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
