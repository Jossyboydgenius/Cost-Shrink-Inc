'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/#home' },
    { name: 'Services', href: '/#services' },
    { name: 'About', href: '/#about' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <div className="relative">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={180}
                  height={180}
                  className="h-40 w-40 object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-sm"
                  priority
                  quality={100}
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-800 hover:text-[#29587A] hover:bg-gray-50 px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#29587A] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/consultation"
              className="bg-gradient-to-r from-[#29587A] to-[#1e3f5a] text-white px-8 py-3 rounded-full text-sm font-bold hover:shadow-lg hover:scale-105 transition-all duration-300 transform"
            >
              Get Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800 hover:text-[#29587A] focus:outline-none focus:text-[#29587A] p-2 rounded-lg hover:bg-gray-50 transition-all duration-200"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-4 pb-6 space-y-2 sm:px-3 border-t border-gray-200/50 bg-white/95 backdrop-blur-md">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-800 hover:text-[#29587A] hover:bg-gray-50 block px-4 py-3 rounded-lg text-base font-bold transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/consultation"
                className="bg-gradient-to-r from-[#29587A] to-[#1e3f5a] text-white block px-4 py-3 rounded-lg text-base font-semibold hover:shadow-lg transition-all duration-300 mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Consultation
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;