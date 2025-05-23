// src/app/components/Header.tsx
import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-20">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">
          TOWING
        </Link>
        <div className="hidden md:flex space-x-8 text-white">
          <Link href="#services" className="hover:text-gray-200">Services</Link>
          <Link href="#about" className="hover:text-gray-200">About</Link>
          <Link href="#contact" className="hover:text-gray-200">Contact</Link>
        </div>
        <button className="md:hidden text-white">
          <Bars3Icon className="h-6 w-6" />
        </button>
      </nav>
    </header>
  );
}
