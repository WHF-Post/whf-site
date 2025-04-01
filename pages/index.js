import dynamic from 'next/dynamic';

const LogoParticles = dynamic(() => import('../components/LogoParticles'), {
  ssr: false,
});

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <LogoParticles />
    </div>
  );
}
