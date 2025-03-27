'use client'

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Logo from "../../public/safiri.svg"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/70">
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-16 w-16 flex items-center justify-center">
            <Image src={Logo} alt="Brand" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
              Safiri
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="font-medium text-gray-700 hover:text-gray-900 transition">About</a>
            <a href="#features" className="font-medium text-gray-700 hover:text-gray-900 transition">Features</a>
            <a href="#benefits" className="font-medium text-gray-700 hover:text-gray-900 transition">Benefits</a>
            <a href="#waitlist" className="font-medium text-gray-700 hover:text-gray-900 transition">Join Waitlist</a>
            <button className="px-6 py-2 rounded-full bg-[#c4fc74] text-gray-900 font-medium hover:brightness-105 transition shadow-lg">
              Launch App
            </button>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="mt-4 pb-4 md:hidden flex flex-col gap-4">
            <a href="#about" className="font-medium text-gray-700 hover:text-gray-900 transition py-2">About</a>
            <a href="#features" className="font-medium text-gray-700 hover:text-gray-900 transition py-2">Features</a>
            <a href="#benefits" className="font-medium text-gray-700 hover:text-gray-900 transition py-2">Benefits</a>
            <a href="#waitlist" className="font-medium text-gray-700 hover:text-gray-900 transition py-2">Join Waitlist</a>
            <button className="mt-2 px-6 py-3 rounded-full bg-[#c4fc74] text-gray-900 font-medium hover:brightness-105 transition shadow-lg">
              Launch App
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
