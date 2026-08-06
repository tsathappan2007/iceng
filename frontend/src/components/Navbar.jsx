import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useUser, useClerk } from '@clerk/clerk-react';
import logoImg from '../assets/logo-Photoroom.png';

const Navbar = () => {
  const { isSignedIn } = useUser();
  const { signOut } = useClerk();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hoveredNav, setHoveredNav] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle route change and hash auto-scrolling
  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      setTimeout(() => {
        const elem = document.getElementById(targetId);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => {
    setMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleDropdownClick = (e, path, targetId) => {
    closeMenu();
    if (targetId) {
      const targetPath = path.split('#')[0];
      if (location.pathname === targetPath) {
        e.preventDefault();
        const elem = document.getElementById(targetId);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
          window.history.pushState(null, '', `#${targetId}`);
        }
      }
    }
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
          path: '/about#about-conf', 
          targetId: 'about-conf',
          tag: 'INFO', 
          svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        },
        { 
          title: 'Department of IT', 
          desc: '30+ years of computing excellence at CIT', 
          path: '/about#about-dept', 
          targetId: 'about-dept',
          tag: 'DEPT', 
          svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        },
        { 
          title: 'Host Institution', 
          desc: 'Chennai Institute of Technology (NAAC A+)', 
          path: '/about#about-cit', 
          targetId: 'about-cit',
          tag: 'CAMPUS', 
          svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
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
          desc: 'Distinguished global luminaries & keynote sessions', 
          path: '/council#speakers', 
          targetId: 'speakers',
          tag: 'SPEAKERS', 
          svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z" />
        },
        { 
          title: 'Committee Members', 
          desc: 'Organizing committee & track leadership', 
          path: '/council#committee', 
          targetId: 'committee',
          tag: 'COMMITTEE', 
          svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        },
      ],
    },
    {
      id: 'submit',
      label: 'SUBMIT',
      path: '/submit',
      hasDropdown: false,
      authRequired: true,
    },
    {
      id: 'contact',
      label: 'CONTACT',
      path: '/contact',
      hasDropdown: false,
    },
  ].filter(item => !item.authRequired || isSignedIn);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        
        {/* Gradient Glow Shadow Wrapper using color #491f78 */}
        <div className="relative group">
          {/* Ambient Gradient Glow Layer */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#491f78]/35 via-[#491f78]/15 to-[#491f78]/35 rounded-b-[36px] blur-lg opacity-85 transition-opacity duration-500 group-hover:opacity-100" />
          
          {/* Main Navbar Bar */}
          <div className="relative rounded-t-none rounded-b-[34px] shadow-[0_12px_36px_-6px_rgba(73,31,120,0.35),0_4px_16px_-2px_rgba(73,31,120,0.2)] bg-white/95 backdrop-blur-2xl">
          
          {/* Inner Top-Flush Curved Header Bar */}
          <div className="relative flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-t-none rounded-b-[32px]">
            
            {/* Brand Logo */}
            <Link to="/" className="flex items-center shrink-0 mr-3 xl:mr-6 group py-1" onClick={closeMenu}>
              <img 
                src={logoImg} 
                alt="ICAINGCIT 2027 Logo" 
                className="h-7 sm:h-8 md:h-9.5 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <div 
              className="hidden lg:flex items-center gap-2 xl:gap-3"
              onMouseLeave={() => setHoveredNav(null)}
            >
              {navItems.map((item, idx) => {
                const isActive = location.pathname === item.path || (item.id === 'council' && location.pathname.startsWith('/council')) || (item.id === 'about' && location.pathname.startsWith('/about'));
                const isHovered = hoveredNav === idx;
                const isAnyHovered = hoveredNav !== null;
                const showUnderline = isHovered || (!isAnyHovered && isActive);

                return (
                  <div
                    key={idx}
                    className="relative group/navitem py-1.5"
                    onMouseEnter={() => {
                      setHoveredNav(idx);
                      if (item.hasDropdown) setActiveDropdown(idx);
                    }}
                    onMouseLeave={() => {
                      if (item.hasDropdown) setActiveDropdown(null);
                    }}
                  >
                    <Link
                      to={item.path}
                      onClick={closeMenu}
                      className={`relative inline-flex items-center gap-1.5 px-3.5 xl:px-4 py-2 rounded-full text-[11px] xl:text-xs font-extrabold tracking-wider uppercase transition-all duration-300 ${
                        isActive
                          ? 'bg-blue-50 text-blue-700 border border-blue-600/40 shadow-sm scale-105'
                          : 'text-slate-700 hover:text-blue-600 hover:bg-slate-100/80 border border-transparent'
                      }`}
                    >
                      <span>{item.label}</span>
                      
                      {item.hasDropdown && (
                        <svg
                          className={`w-3.5 h-3.5 transition-transform duration-300 group-hover/navitem:rotate-180 ${
                            isActive || isHovered || activeDropdown === idx ? 'text-blue-600' : 'text-slate-400 group-hover/navitem:text-blue-600'
                          } ${
                            isHovered || activeDropdown === idx ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                        </svg>
                      )}

                      {/* Dynamic centered horizontal yellow indicator bar underneath section button */}
                      <span
                        className={`absolute -bottom-2.5 left-1/2 -translate-x-1/2 h-[3.5px] rounded-full bg-amber-400 shadow-[0_2px_10px_rgba(251,191,36,0.65)] transition-all duration-300 ease-out origin-center pointer-events-none ${
                          showUnderline
                            ? 'w-8 opacity-100 scale-x-100'
                            : 'w-0 opacity-0 scale-x-0'
                        }`}
                      />
                    </Link>

                    {/* Light Neumorphism Popover Dropdown Box */}
                    {item.hasDropdown && (
                      <div
                        className={`absolute top-full left-1/2 -translate-x-1/2 w-80 pt-4 transition-all duration-300 pointer-events-none group-hover/navitem:pointer-events-auto ${
                          activeDropdown === idx
                            ? 'opacity-100 translate-y-0 scale-100'
                            : 'opacity-0 translate-y-3 scale-95 pointer-events-none'
                        }`}
                      >
                        <div className="relative">
                          {/* Top Arrow Pointer Beak */}
                          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-t border-l border-slate-200 rotate-45 z-30 shadow-sm" />

                          {/* Light Soft Container */}
                          <div className="p-4 rounded-3xl bg-white border border-slate-200 shadow-2xl space-y-2 relative overflow-hidden backdrop-blur-3xl">
                            
                            <div className="absolute top-0 left-0 right-0 h-[2px] bg-blue-600" />

                            {item.dropdown.map((sub, sIdx) => (
                              <Link
                                key={sIdx}
                                to={sub.path}
                                onClick={(e) => handleDropdownClick(e, sub.path, sub.targetId)}
                                className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 hover:bg-blue-50 border border-slate-200/70 hover:border-blue-300 shadow-sm transition-all duration-200 group/sub relative z-10 hover:translate-x-1"
                              >
                                <div className="flex items-center gap-3">
                                  <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center group-hover/sub:bg-blue-600 group-hover/sub:text-white transition-all shrink-0">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      {sub.svg}
                                    </svg>
                                  </div>

                                  <div className="space-y-0.5 text-left">
                                    <div className="text-xs font-extrabold text-slate-900 group-hover/sub:text-blue-600 transition-colors tracking-wide">
                                      {sub.title}
                                    </div>
                                    <div className="text-[10px] text-slate-500 leading-tight">
                                      {sub.desc}
                                    </div>
                                  </div>
                                </div>

                                <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 border border-blue-200 group-hover/sub:bg-blue-600 group-hover/sub:text-white shrink-0 ml-2 shadow-sm transition-colors">
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

              {/* Action Pill Button: DASHBOARD or LOGIN (Amber pill styling) + Sign Out Icon */}
              {isSignedIn ? (
                <div className="flex items-center gap-2 ml-2 xl:ml-3">
                  <Link
                    to="/dashboard"
                    onClick={closeMenu}
                    className="px-5 py-2 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-[11px] xl:text-xs tracking-wider uppercase shadow-md transition-all transform hover:scale-105 shrink-0 whitespace-nowrap"
                  >
                    DASHBOARD
                  </Link>
                  <button
                    type="button"
                    onClick={async () => {
                      closeMenu();
                      await signOut();
                      navigate('/login');
                    }}
                    title="Sign Out"
                    aria-label="Sign Out"
                    className="p-2 rounded-full bg-slate-100 border border-slate-200 text-slate-600 hover:text-red-600 hover:bg-red-50 hover:border-red-300 transition-all shadow-sm flex items-center justify-center shrink-0"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  onClick={closeMenu}
                  className="ml-2 xl:ml-3 px-5 py-2 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-[11px] xl:text-xs tracking-wider uppercase shadow-md transition-all transform hover:scale-105 shrink-0 whitespace-nowrap"
                >
                  LOGIN
                </Link>
              )}
            </div>

            {/* Mobile Hamburger Button */}
            <button
              className="lg:hidden p-2 rounded-full bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-950 focus:outline-none"
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

      </div>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="lg:hidden max-w-7xl mx-auto px-4 mt-2">
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#491f78]/30 via-[#491f78]/10 to-[#491f78]/30 rounded-3xl blur-lg opacity-85" />
            <div className="relative bg-white/98 backdrop-blur-2xl rounded-3xl p-6 space-y-4 shadow-[0_12px_36px_-6px_rgba(73,31,120,0.35)] max-h-[80vh] overflow-y-auto">
            {navItems.map((item, idx) => (
              <div key={idx} className="border-b border-slate-100 pb-3">
                <div className="flex items-center justify-between py-1 text-xs font-extrabold tracking-widest text-blue-600 uppercase">
                  <Link to={item.path} onClick={closeMenu}>{item.label}</Link>
                </div>
                {item.hasDropdown && (
                  <div className="pl-3 mt-2 space-y-2 border-l border-slate-200">
                    {item.dropdown.map((sub, sIdx) => (
                      <Link
                        key={sIdx}
                        to={sub.path}
                        onClick={(e) => handleDropdownClick(e, sub.path, sub.targetId)}
                        className="block text-xs font-semibold text-slate-600 hover:text-blue-600 py-1"
                      >
                        {sub.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {isSignedIn ? (
              <div className="flex items-center gap-2 mt-4">
                <Link
                  to="/dashboard"
                  onClick={closeMenu}
                  className="flex-1 text-center px-5 py-3 rounded-full bg-amber-400 text-slate-950 font-black text-xs tracking-wider uppercase shadow-md"
                >
                  DASHBOARD
                </Link>
                <button
                  type="button"
                  onClick={async () => {
                    closeMenu();
                    await signOut();
                    navigate('/login');
                  }}
                  className="p-3 rounded-full bg-slate-100 border border-slate-200 text-slate-700 hover:text-red-600 hover:bg-red-50 flex items-center justify-center shrink-0"
                  aria-label="Sign Out"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                onClick={closeMenu}
                className="block text-center mt-4 px-5 py-3 rounded-full bg-amber-400 text-slate-950 font-black text-xs tracking-wider uppercase shadow-md"
              >
                LOGIN
              </Link>
            )}
          </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
