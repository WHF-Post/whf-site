import dynamic from 'next/dynamic';

// ✅ This disables server-side rendering for this component
const LogoParticles = dynamic(() => import('../components/LogoParticles'), {
  ssr: false
});

export default function HomePage() {
  return <LogoParticles />;
}
