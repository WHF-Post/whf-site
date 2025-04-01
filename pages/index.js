export default function HomePage() {
  return (
    <div style={{ margin: 0, padding: 0, overflow: 'hidden' }}>
      <video
        src="/WHF_Homepage_Video_converted.mp4"
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          minWidth: '100%',
          minHeight: '100%',
          zIndex: -1,
          objectFit: 'cover',
        }}
      />
      <main style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontSize: '2rem',
        scrollSnapAlign: 'start',
      }}>
        {/* This is where your content for the HOME section would go */}
        {/* We can add ABOUT, SERVICES, and CONTACT sections with smooth scroll next */}
      </main>
    </div>
  );
}
