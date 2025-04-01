export default function HomePage() {
  return (
    <div style={{ margin: 0, padding: 0, overflowX: 'hidden' }}>
      {/* Fullscreen looping video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          objectFit: 'cover',
          zIndex: -1,
        }}
      >
        <source src="/WHF_Homepage_Video_converted.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Smooth scroll layout */}
      <div style={{ scrollBehavior: 'smooth' }}>
        <section id="home" style={{ height: '100vh' }}></section>
        <section id="about" style={{ height: '100vh', backgroundColor: '#111' }}></section>
        <section id="services" style={{ height: '100vh', backgroundColor: '#222' }}></section>
        <section id="contact" style={{ height: '100vh', backgroundColor: '#333' }}></section>
      </div>
    </div>
  );
}
