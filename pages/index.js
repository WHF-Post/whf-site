import dynamic from 'next/dynamic';
const LogoParticles = dynamic(() => import('../components/LogoParticles'), { ssr: false });

export default function HomePage() {
  return (
    <main className="bg-black min-h-screen text-white">
      <LogoParticles />
    </main>
  );
}
