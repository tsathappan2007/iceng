import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { label: 'ABOUT', href: '#about-conf' },
    { label: 'DOMAINS', href: '#aim' },
    { label: 'TIMELINE', href: '#dates' },
    { label: 'SPEAKERS', href: '#speakers' },
    { label: 'COMMITTEE', href: '#committee' },
    { label: 'SUBMIT', href: '#submission' },
    { label: 'FAQS', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-obsidian-950/80 backdrop-blur-xl border-b border-white/10 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo - PEC HACKS style */}
        <a href="#hero" className="flex items-center gap-2 group" onClick={closeMenu}>
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-400 p-[1px]">
            <div className="w-full h-full bg-obsidian-950 rounded-[7px] flex items-center justify-center font-black text-xs text-white group-hover:bg-transparent transition-colors">
              ICE
            </div>
          </div>
          <span className="font-extrabold text-base tracking-widest text-white pixel-text group-hover:text-cyan-400 transition-colors uppercase">
            ICENGCIT <span className="text-purple-400 font-mono text-xs">2027</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="text-xs font-bold tracking-widest text-gray-300 hover:text-white uppercase transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-purple-500 after:to-cyan-400 hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#registration"
            className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-extrabold text-xs tracking-wider uppercase hover:shadow-[0_0_20px_rgba(0,245,212,0.5)] transition-all transform hover:-translate-y-0.5"
          >
            REGISTER NOW
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-obsidian-950/95 backdrop-blur-2xl border-b border-white/10 px-4 pt-4 pb-6 space-y-3">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              onClick={closeMenu}
              className="block text-sm font-bold tracking-widest text-gray-200 hover:text-cyan-400 uppercase py-2 border-b border-white/5"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#registration"
            onClick={closeMenu}
            className="block text-center mt-4 px-5 py-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-extrabold text-xs tracking-wider uppercase shadow-lg"
          >
            REGISTER NOW
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
