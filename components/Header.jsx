import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

export default function Header() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center transition-opacity duration-700 ${visible ? 'opacity-100 bg-black/90' : 'opacity-0'}`}
    >
      <Link href="/">
        <Image src="/logo.png" alt="WHF Logo" width={40} height={40} className="rounded-full" />
      </Link>

      <div className="flex space-x-4">
        <a href="https://www.instagram.com/whitehouse_films/" target="_blank" rel="noopener noreferrer" className="text-white hover:scale-110 transition">
          <FaInstagram size={20} />
        </a>
        <a href="https://www.youtube.com/@yourchannel" target="_blank" rel="noopener noreferrer" className="text-white hover:scale-110 transition">
          <FaYoutube size={20} />
        </a>
        <a href="https://www.linkedin.com/in/chuckwhiteedits/" target="_blank" rel="noopener noreferrer" className="text-white hover:scale-110 transition">
          <FaLinkedinIn size={20} />
        </a>
      </div>
    </header>
  );
}