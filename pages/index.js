import dynamic from 'next/dynamic';

const LogoParticles = dynamic(() => import('../components/LogoParticles'), {
  ssr: false,
});

export default function HomePage() {
  return <LogoParticles />;
}
