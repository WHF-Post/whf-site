import dynamic from 'next/dynamic';

const LogoParticles = dynamic(() => import('../components/LogoParticles'), {
  ssr: false,
});

export default function HomePage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'black', color: 'white' }}>
      <LogoParticles />
      <noscript>
        <h1>💥 WHF fallback is live</h1>
      </noscript>
    </div>
  );
}
