import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => {
    setMenuOpen(false);
    setActiveDropdown(null);
  };

  const navItems = [
    {
      id: 'home',
      label: 'HOME',
      path: '/',
      hasDropdown: false,
    },
    {
      id: 'about',
      label: 'ABOUT',
      path: '/about',
      hasDropdown: true,
      dropdown: [
        { 
          title: 'Conference Overview', 
          desc: 'Prestige gathering for Next-Gen Computing', 
          path: '/about', 
          tag: 'INFO', 
          svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        },
        { 
          title: 'Department of IT', 
          desc: '30+ years of computing excellence at CIT', 
          path: '/about', 
          tag: 'DEPT', 
          svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        },
        { 
          title: 'Host Institution', 
          desc: 'Chennai Institute of Technology (NAAC A+)', 
          path: '/about', 
          tag: 'CAMPUS', 
          svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        },
      ],
    },
    {
      id: 'domains',
      label: 'DOMAINS',
      path: '/domains',
      hasDropdown: false,
    },
    {
      id: 'timeline',
      label: 'TIMELINE',
      path: '/timeline',
      hasDropdown: false,
    },
    {
      id: 'council',
      label: 'COUNCIL',
      path: '/council',
      hasDropdown: true,
      dropdown: [
        { 
          title: 'Keynote Speakers', 
          desc: 'World-renowned AI & computing pioneers', 
          path: '/council', 
          tag: 'KEYNOTE', 
          svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z" />
        },
        { 
          title: 'Organizing Committee', 
          desc: 'Chief Patrons & Conference Chairs', 
          path: '/council', 
          tag: 'LEAD', 
          svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        },
        { 
          title: 'Technical Programme', 
          desc: 'TPC Chairs & Domain Track Leads', 
          path: '/council', 
          tag: 'TPC', 
          svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        },
        { 
          title: 'Advisory Board', 
          desc: 'Distinguished international academic leaders', 
          path: '/council', 
          tag: 'BOARD', 
          svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        },
      ],
    },
    {
      id: 'submit',
      label: 'SUBMIT',
      path: '/submit',
      hasDropdown: false,
    },
    {
      id: 'contact',
      label: 'CONTACT',
      path: '/contact',
      hasDropdown: false,
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        
        {/* Ultra-Thin Thinned Border Frame for Premium Minimalist Look */}
        <div className="border-b border-x border-cyan-500/25 rounded-t-none rounded-b-[34px] shadow-[0_10px_30px_rgba(0,245,212,0.12)]">
          
          {/* Inner Top-Flush Curved Header Bar */}
          <div className="relative flex items-center justify-between px-4 sm:px-6 py-2.5 bg-[#060b19]/98 backdrop-blur-3xl rounded-t-none rounded-b-[32px]">
            
            {/* Brand Logo */}
            <Link to="/" className="flex flex-col items-center justify-center text-center group shrink-0 mr-4 xl:mr-8" onClick={closeMenu}>
              <div className="font-logo-wide font-black text-lg sm:text-xl select-none flex items-center gap-0.5 leading-none">
                <span className="text-white group-hover:text-cyan-300 transition-colors">ICAING</span>
                <span className="text-cyan-400 font-black drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]">CIT</span>
              </div>

              {/* Perfectly centered 2027 subtext */}
              <span className="text-[9px] font-mono font-extrabold text-blue-400 uppercase leading-none mt-1 tracking-[0.38em] text-center w-full pl-[0.38em]">
                2027
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-4">
              {navItems.map((item, idx) => {
                const isActive = location.pathname === item.path;

                return (
                  <div
                    key={idx}
                    className="relative group py-1.5"
                    onMouseEnter={() => item.hasDropdown && setActiveDropdown(idx)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      to={item.path}
                      onClick={closeMenu}
                      className={`relative inline-flex items-center gap-1.5 px-4 xl:px-5 py-2 rounded-full text-[11px] xl:text-xs font-extrabold tracking-wider uppercase transition-all duration-300 ${
                        isActive
                          ? 'bg-cyan-950/40 text-cyan-300 border border-cyan-400/80 shadow-[0_0_15px_rgba(0,245,212,0.25)] scale-105'
                          : 'text-gray-300 hover:text-white hover:bg-blue-900/20 border border-transparent'
                      }`}
                    >
                      <span>{item.label}</span>
                      
                      {item.hasDropdown && (
                        <svg
                          className={`w-3 h-3 transition-transform duration-300 group-hover:rotate-180 ${
                            isActive ? 'text-cyan-300' : 'text-gray-400 group-hover:text-cyan-400'
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                        </svg>
                      )}

                      {/* Centered horizontal indicator bar underneath active button */}
                      {isActive && (
                        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-8 h-[3px] rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(0,245,212,1)]" />
                      )}
                    </Link>

                    {/* Dark Neumorphism Popover Dropdown Box */}
                    {item.hasDropdown && (
                      <div
                        className={`absolute top-full left-1/2 -translate-x-1/2 w-80 pt-4 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto ${
                          activeDropdown === idx
                            ? 'opacity-100 translate-y-0 scale-100'
                            : 'opacity-0 translate-y-3 scale-95 pointer-events-none'
                        }`}
                      >
                        <div className="relative">
                          {/* Top Arrow Pointer Beak */}
                          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#0a1128] border-t border-l border-cyan-500/30 rotate-45 z-30 shadow-md" />

                          {/* Dark Soft Container */}
                          <div className="p-4 rounded-3xl bg-[#0a1128] border border-cyan-500/20 shadow-[18px_18px_45px_rgba(0,0,0,0.95),_-6px_-6px_25px_rgba(255,255,255,0.02)] space-y-2 relative overflow-hidden backdrop-blur-3xl">
                            
                            <div className="absolute top-0 left-0 right-0 h-[2px] bg-cyan-400" />

                            {item.dropdown.map((sub, sIdx) => (
                              <Link
                                key={sIdx}
                                to={sub.path}
                                onClick={closeMenu}
                                className="flex items-center justify-between p-3 rounded-2xl bg-[#0e1738] hover:bg-blue-900/40 border border-blue-500/20 hover:border-cyan-400/50 shadow-[inset_1px_1px_2px_rgba(255,255,255,0.04),_0_4px_12px_rgba(0,0,0,0.6)] transition-all duration-200 group/sub relative z-10 hover:translate-x-1"
                              >
                                <div className="flex items-center gap-3">
                                  <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center group-hover/sub:bg-cyan-400 group-hover/sub:text-slate-950 transition-all shrink-0">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      {sub.svg}
                                    </svg>
                                  </div>

                                  <div className="space-y-0.5 text-left">
                                    <div className="text-xs font-extrabold text-white group-hover/sub:text-cyan-300 transition-colors tracking-wide">
                                      {sub.title}
                                    </div>
                                    <div className="text-[10px] text-gray-400 leading-tight">
                                      {sub.desc}
                                    </div>
                                  </div>
                                </div>

                                <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-blue-600/30 text-cyan-300 border border-cyan-500/30 group-hover/sub:bg-cyan-400 group-hover/sub:text-slate-950 group-hover/sub:border-cyan-400 shrink-0 ml-2 shadow-sm transition-colors">
                                  {sub.tag}
                                </span>
                              </Link>
                            ))}
                          </div>

                        </div>
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Action Register Pill Button */}
              <Link
                to="/registration"
                onClick={closeMenu}
                className="ml-2 xl:ml-3 px-4.5 py-2 rounded-full bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-black text-[11px] xl:text-xs tracking-wider uppercase shadow-[0_0_20px_rgba(0,245,212,0.4)] hover:shadow-[0_0_30px_rgba(0,245,212,0.7)] transition-all transform hover:scale-105 shrink-0 whitespace-nowrap"
              >
                REGISTER NOW
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              className="lg:hidden p-2 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white focus:outline-none"
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

        </div>

      </div>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="lg:hidden max-w-7xl mx-auto px-4 mt-2">
          <div className="bg-[#060b19]/98 backdrop-blur-2xl border border-cyan-500/20 rounded-3xl p-6 space-y-4 shadow-2xl max-h-[80vh] overflow-y-auto">
            {navItems.map((item, idx) => (
              <div key={idx} className="border-b border-white/5 pb-3">
                <div className="flex items-center justify-between py-1 text-xs font-extrabold tracking-widest text-cyan-400 uppercase">
                  <Link to={item.path} onClick={closeMenu}>{item.label}</Link>
                </div>
                {item.hasDropdown && (
                  <div className="pl-3 mt-2 space-y-2 border-l border-white/10">
                    {item.dropdown.map((sub, sIdx) => (
                      <Link
                        key={sIdx}
                        to={sub.path}
                        onClick={closeMenu}
                        className="block text-xs font-semibold text-gray-300 hover:text-white py-1"
                      >
                        {sub.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link
              to="/registration"
              onClick={closeMenu}
              className="block text-center mt-4 px-5 py-3 rounded-full bg-cyan-400 text-slate-950 font-black text-xs tracking-wider uppercase shadow-xl"
            >
              REGISTER NOW
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
