'use client';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === '/';
  const bgClass = isHome
    ? 'bg-gray'
    : 'bg-black backdrop-blur-md';

  const linkClass = (path: string) =>
    `hover:text-gray-200 ${pathname === path ? 'text-blue-400 font-bold underline' : 'text-white'}`;

  return (
    <header className={`${isHome ? 'absolute' : 'sticky'} top-0 w-full z-20 ${bgClass} text-white`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          [City Name]
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          <Link href="/services" className={linkClass("/services")}>Services</Link>
          <Link href="/about" className={linkClass("/about")}>About</Link>
          <Link href="/#contact" className="hover:text-gray-200">Contact</Link>
          <Link href="/#testimonials" className="hover:text-gray-200">Reviews</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Dropdown (side by side layout) */}
      {menuOpen && (
        <div className="md:hidden bg-gray/90  text-white px-6 py-4 flex space-x-6 justify-center">
          <Link href="/services" onClick={() => setMenuOpen(false)} className={linkClass("/services")}>Services</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className={linkClass("/about")}>About</Link>
          <Link href="/#contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link href="/#testimonials" onClick={() => setMenuOpen(false)}>Reviews</Link>
        </div>
      )}
    </header>
  );
}
