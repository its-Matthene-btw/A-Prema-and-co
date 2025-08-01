"use client"; // Designate this as a client component

import Link from 'next/link';
import { useState } from 'react'; // Import useState

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for the menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="fixed w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-[#0a192f] font-playfair">
              <span className="gold-underline">A. PREMA & CO</span>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="nav-link text-[#0a192f] hover:text-[#D4AF37]">Home</Link>
              <Link href="/about" className="nav-link text-[#0a192f] hover:text-[#D4AF37]">About Us</Link>
              <Link href="/practice-areas" className="nav-link text-[#0a192f] hover:text-[#D4AF37]">Practice Areas</Link>
              <Link href="/contact" className="nav-link text-[#0a192f] hover:text-[#D4AF37]">Contact Us</Link>
            </nav>
            <div className="hidden md:block">
              <Link href="/contact" className="bg-[#D4AF37] hover:bg-[#c19e30] text-white px-6 py-2 rounded-md transition duration-300">Get in Touch</Link>
            </div>
            {/* Add onClick event to the button */}
            <button
              id="mobile-menu-button"
              className="md:hidden text-[#0a192f] focus:outline-none"
              onClick={toggleMenu}
            >
              <i className="fas fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu: Conditionally apply classes based on state */}
      <div
        id="mobileMenu"
        className={`md:hidden fixed inset-0 bg-[#0a192f] bg-opacity-90 z-40 items-center justify-center ${isMenuOpen ? 'flex' : 'hidden'}`}
      >
        <div className="text-center">
          <Link onClick={toggleMenu} href="/" className="block text-white text-xl py-4 hover:text-[#D4AF37] transition">Home</Link>
          <Link onClick={toggleMenu} href="/about" className="block text-white text-xl py-4 hover:text-[#D4AF37] transition">About Us</Link>
          <Link onClick={toggleMenu} href="/practice-areas" className="block text-white text-xl py-4 hover:text-[#D4AF37] transition">Practice Areas</Link>
          <Link onClick={toggleMenu} href="/contact" className="block text-white text-xl py-4 hover:text-[#D4AF37] transition">Contact Us</Link>
          <Link onClick={toggleMenu} href="/contact" className="inline-block mt-6 bg-[#D4AF37] hover:bg-[#c19e30] text-white px-6 py-2 rounded-md transition duration-300">Get in Touch</Link>
        </div>
      </div>
    </>
  );
};

export default Header;