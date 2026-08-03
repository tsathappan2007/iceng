import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''} aria-label="Main Navigation">
      <div className="nav-inner">
        <a href="#hero" className="nav-logo" aria-label="ICENGCIT 2027 Home" onClick={closeMenu}>
          <div className="nav-logo-badge">ICE</div>
          <div className="nav-logo-text"><span>ICENGCIT</span> 2027</div>
        </a>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`} id="navLinks" role="list">
          <li><a href="#aim" onClick={closeMenu}>Aim & Scope</a></li>
          <li><a href="#about-conf" onClick={closeMenu}>Conference</a></li>
          <li><a href="#committee" onClick={closeMenu}>Committee</a></li>
          <li><a href="#dates" onClick={closeMenu}>Dates</a></li>
          <li><a href="#speakers" onClick={closeMenu}>Speakers</a></li>
          <li><a href="#submission" onClick={closeMenu}>Submit</a></li>
          <li><a href="#registration" onClick={closeMenu}>Register</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          <li><a href="#registration" className="nav-cta" onClick={closeMenu}>Register Now</a></li>
        </ul>

        <button 
          className="nav-hamburger" 
          id="hamburger" 
          aria-label="Toggle Navigation" 
          aria-expanded={menuOpen}
          onClick={toggleMenu}
        >
          <span style={{ transform: menuOpen ? "rotate(45deg) translateY(7px)" : "" }}></span>
          <span style={{ opacity: menuOpen ? "0" : "1" }}></span>
          <span style={{ transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "" }}></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
