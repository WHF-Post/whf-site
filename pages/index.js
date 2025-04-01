export default function HomePage() {
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          objectFit: 'cover',
          zIndex: -1,
        }}
      >
        <source src="/WHF_Homepage_Video_converted.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <main
        style={{
          height: '100vh',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* If needed, put any fallback message here */}
        <h1 style={{ fontSize: '2rem' }}>Welcome to WHF</h1>
      </main>
    </div>
  );
}
