import Link from 'next/link';

export default function ThankYou() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-black text-white px-6">
      <h1 className="text-5xl font-handdrawn mb-4">Thank You</h1>
      <p className="text-lg max-w-xl mb-8">
        Your message has been sent. I’ll be in touch soon — if it’s urgent, you already know how to reach me.
      </p>

      <video
        className="rounded-lg shadow-lg mb-8 w-full max-w-xl"
        controls
        autoPlay
        muted
        playsInline
        src="/Neyo Curves Fritz.mp4"
      />

      <Link href="/">
        <button className="bg-white text-black px-5 py-2 rounded-full shadow hover:scale-105 transition">
          Return Home
        </button>
      </Link>
    </div>
  );
}