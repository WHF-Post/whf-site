import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <h1 className="text-5xl font-bold mb-8 text-center">About WHF</h1>

      <p className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed mb-8">
        Charles “Chuck” White began his editing journey at just 17 years old, cutting live news for national broadcast. Since then, he’s built a career turning tight deadlines and modest budgets into award-winning, culturally resonant stories. Whether it's a sizzle, short doc, or high-stakes commercial, Chuck brings deep post-production instincts and a sharp eye to every project.
      </p>

      <div className="flex justify-center mb-12">
        <Link href="/work">
          <button className="px-6 py-3 text-lg rounded-full bg-blue-600 hover:bg-blue-800 transition-all duration-200 glitch-glow">
            See the Work
          </button>
        </Link>
      </div>

      <div className="flex overflow-x-auto space-x-4 px-4">
        {[
          '/WHF_Crew1.jpg',
          '/WHF_Crew2.jpg',
          '/WHF_Keena.png',
          '/WHF_KdotSFCopen.png',
          '/WHF_Keyboard1.png',
          '/WHF_LOGO_ANIM.gif',
        ].map((src, i) => (
          <div key={i} className="h-[180px] w-auto flex-shrink-0 rounded-lg overflow-hidden">
            <Image
              src={src}
              alt={`carousel about image ${i}`}
              width={300}
              height={180}
              className="object-contain h-full w-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
