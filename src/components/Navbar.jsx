import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin, Coffee, Phone, ChevronRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About ClusTea', href: '#about' },
    { name: 'Our Menu', href: '#menu' },
    { name: 'Snacks', href: '#snacks' },
    { name: 'Our Branches', href: '#branches' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-charcoal-900/95 backdrop-blur-md border-b border-charcoal-750/80 shadow-xl'
          : 'bg-charcoal-900/80 backdrop-blur-sm border-b border-charcoal-800/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand Identity */}
          <a href="#home" className="flex items-center gap-3.5 group focus:outline-none">
            {/* Circular White Emblem with Steaming Orange Glass */}
            <div className="relative w-12 h-12 rounded-full bg-white p-1 shadow-md shadow-black/40 border border-brand-cream/60 group-hover:scale-105 transition-transform duration-300 flex items-center justify-center shrink-0">
              <img
                src="/images/clustea-logo.svg"
                alt="ClusTea Official Emblem"
                className="w-full h-full object-contain"
              />
              {/* Subtle ambient orange halo */}
              <div className="absolute inset-0 rounded-full bg-brand-orange/20 filter blur-sm -z-10 group-hover:bg-brand-orange/40 transition-colors" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-display font-extrabold text-2xl tracking-tight text-white group-hover:text-brand-orange transition-colors">
                  Clus<span className="text-brand-orange">Tea</span>
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] uppercase tracking-wider font-semibold bg-charcoal-800 text-brand-cream/80 border border-charcoal-700 rounded-full">
                  Tiruppur
                </span>
              </div>
              <span className="text-[11px] text-brand-cream/70 font-medium tracking-wide">
                Tea clusters for all times
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium text-gray-300 hover:text-brand-orange hover:bg-charcoal-800/60 rounded-xl transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#branches"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-brand-cream bg-charcoal-800/80 hover:bg-charcoal-750 border border-charcoal-700 rounded-xl transition-all hover:border-brand-orange/40"
            >
              <MapPin className="w-3.5 h-3.5 text-brand-orange" />
              <span>3 Branches</span>
            </a>

            <a
              href="#menu"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-brand-orange hover:bg-brand-orange-hover rounded-xl shadow-glow-orange transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Coffee className="w-4 h-4" />
              <span>View Menu</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="#menu"
              className="sm:hidden px-3 py-1.5 text-xs font-bold text-white bg-brand-orange rounded-lg"
            >
              Menu
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-gray-300 hover:text-white hover:bg-charcoal-800 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-charcoal-900 border-b border-charcoal-750 px-5 pt-3 pb-6 space-y-3 animate-fadeIn shadow-2xl">
          <div className="pt-2 pb-1 border-b border-charcoal-800 flex items-center justify-between">
            <span className="text-xs uppercase tracking-wider text-brand-orange font-bold">
              Navigation
            </span>
            <span className="text-[11px] text-gray-400">
              Tea clusters for all times
            </span>
          </div>

          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3.5 py-2.5 text-sm font-medium text-gray-200 hover:text-white hover:bg-charcoal-800 rounded-xl transition-colors"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-charcoal-600" />
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-charcoal-800 grid grid-cols-2 gap-2.5">
            <a
              href="#branches"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 px-3 py-2.5 text-xs font-semibold text-brand-cream bg-charcoal-800 border border-charcoal-700 rounded-xl"
            >
              <MapPin className="w-4 h-4 text-brand-orange" />
              <span>3 Branches</span>
            </a>
            <a
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 px-3 py-2.5 text-xs font-bold text-white bg-brand-orange rounded-xl shadow-glow-orange"
            >
              <Coffee className="w-4 h-4" />
              <span>Explore Menu</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

