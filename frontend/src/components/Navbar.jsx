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
  const [isSigningOut, setIsSigningOut] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState({ about: false, council: false });
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMobileSub = (key) => {
    setMobileExpanded(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSignOut = async () => {
    if (isSigningOut) return;
    try {
      setIsSigningOut(true);
      await signOut();
      closeMenu();
      navigate('/login');
    } catch (err) {
      console.error('Sign out error:', err);
    } finally {
      setIsSigningOut(false);
    }
  };

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
      sub: 'Conference Hub & Highlights',
      path: '/',
      hasDropdown: false,
      iconColor: 'bg-blue-50 text-blue-600 border border-blue-100',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      id: 'about',
      label: 'ABOUT',
      sub: 'Overview, Dept & Campus',
      path: '/about',
      hasDropdown: true,
      iconColor: 'bg-purple-50 text-purple-600 border border-purple-100',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      dropdown: [
        { 
          title: 'Conference Overview', 
          desc: 'Prestige gathering for Next-Gen Computing', 
          path: '/about#about-conf', 
          targetId: 'about-conf',
          tag: 'INFO',
          tagColor: 'bg-blue-50/90 text-blue-600 border-blue-200/90',
          iconBoxColor: 'bg-blue-50/80 border-blue-100',
          badgeIcon: (
            <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          ),
          icon: (
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-black text-sm shadow-md font-serif">
              i
            </div>
          )
        },
        { 
          title: 'Department of IT', 
          desc: '30+ years of computing excellence at CIT', 
          path: '/about#about-dept', 
          targetId: 'about-dept',
          tag: 'DEPT',
          tagColor: 'bg-purple-50/90 text-purple-600 border-purple-200/90',
          iconBoxColor: 'bg-indigo-50/80 border-indigo-100',
          badgeIcon: (
            <svg className="w-3 h-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          ),
          icon: (
            <svg className="w-7 h-7 text-indigo-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8 14H7v-2h4v2zm0-4H7v-2h4v2zm0-4H7V7h4v2zm6 8h-4v-2h4v2zm0-4h-4v-2h4v2zm0-4h-4V7h4v2z" />
            </svg>
          )
        },
        { 
          title: 'Host Institution', 
          desc: 'Chennai Institute of Technology (NAAC A+)', 
          path: '/about#about-cit', 
          targetId: 'about-cit',
          tag: 'CAMPUS',
          tagColor: 'bg-emerald-50/90 text-emerald-600 border-emerald-200/90',
          iconBoxColor: 'bg-emerald-50/80 border-emerald-100',
          badgeIcon: (
            <svg className="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          ),
          icon: (
            <svg className="w-7 h-7 text-emerald-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
            </svg>
          )
        },
      ],
    },
    {
      id: 'domains',
      label: 'DOMAINS',
      sub: '6 AI & Computing Tracks',
      path: '/domains',
      hasDropdown: false,
      iconColor: 'bg-indigo-50 text-indigo-600 border border-indigo-100',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 'timeline',
      label: 'TIMELINE',
      sub: 'Important Dates & Milestones',
      path: '/timeline',
      hasDropdown: false,
      iconColor: 'bg-amber-50 text-amber-700 border border-amber-100',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 'pricing',
      label: 'PRICING',
      sub: 'Registration Rates & Passes',
      path: '/pricing',
      hasDropdown: false,
      iconColor: 'bg-emerald-50 text-emerald-700 border border-emerald-100',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 'council',
      label: 'COUNCIL',
      sub: 'Keynotes & Committee Panels',
      path: '/council',
      hasDropdown: true,
      iconColor: 'bg-violet-50 text-violet-600 border border-violet-100',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      dropdown: [
        { 
          title: 'Keynote Speakers', 
          desc: 'Distinguished global luminaries & keynote sessions', 
          path: '/council#speakers', 
          targetId: 'speakers',
          tag: 'SPEAKERS',
          tagColor: 'bg-amber-50/90 text-amber-600 border-amber-200/90',
          iconBoxColor: 'bg-amber-50/80 border-amber-100',
          badgeIcon: (
            <svg className="w-3 h-3 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z" />
            </svg>
          ),
          icon: (
            <svg className="w-7 h-7 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z" />
            </svg>
          )
        },
        { 
          title: 'Committee Members', 
          desc: 'Organizing committee & track leadership', 
          path: '/council#committee', 
          targetId: 'committee',
          tag: 'COMMITTEE',
          tagColor: 'bg-blue-50/90 text-blue-600 border-blue-200/90',
          iconBoxColor: 'bg-blue-50/80 border-blue-100',
          badgeIcon: (
            <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          ),
          icon: (
            <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          )
        },
      ],
    },
    {
      id: 'submit',
      label: 'SUBMIT',
      sub: 'Paper Submission & Fee Portal',
      path: '/submit',
      hasDropdown: false,
      authRequired: true,
      iconColor: 'bg-blue-50 text-blue-700 border border-blue-100',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
        </svg>
      )
    },
    {
      id: 'contact',
      label: 'CONTACT',
      sub: 'Organizing Desk & Inquiries',
      path: '/contact',
      hasDropdown: false,
      iconColor: 'bg-rose-50 text-rose-600 border border-rose-100',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
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
            
            {/* Brand Logo with Dropdown Popover Box on Hover */}
            <div className="relative group/logo">
              <Link to="/" className="flex items-center shrink-0 mr-3 xl:mr-6 py-1" onClick={closeMenu}>
                <img 
                  src={logoImg} 
                  alt="ICAINGCIT 2027 Logo" 
                  className="h-7 sm:h-8 md:h-9.5 w-auto object-contain transition-transform duration-300 group-hover/logo:scale-105"
                />
              </Link>

              {/* Dropdown Expansion Box (Appears smoothly below logo on hover) */}
              <div className="absolute top-full left-0 pt-3 w-80 sm:w-96 transition-all duration-300 opacity-0 translate-y-3 scale-95 pointer-events-none group-hover/logo:opacity-100 group-hover/logo:translate-y-0 group-hover/logo:scale-100 group-hover/logo:pointer-events-auto z-50">
                <div className="relative">
                  {/* Top Arrow Pointer Beak */}
                  <div className="absolute -top-2 left-8 w-4 h-4 bg-white border-t border-l border-slate-200 rotate-45 z-30 shadow-sm" />

                  {/* Elegant Professional Container */}
                  <div className="p-5 rounded-3xl bg-white border border-slate-200 shadow-2xl relative overflow-hidden backdrop-blur-3xl">
                    <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-[#491f78]" />
                    <p className="text-xs sm:text-sm font-bold text-slate-500 leading-relaxed tracking-tight">
                      <span className="text-[#491f78] font-black text-sm sm:text-base">I</span>nternational{' '}
                      <span className="text-[#491f78] font-black text-sm sm:text-base">C</span>onference on{' '}
                      <span className="text-[#491f78] font-black text-sm sm:text-base">A</span>rtificial{' '}
                      <span className="text-[#491f78] font-black text-sm sm:text-base">I</span>ntelligence and{' '}
                      <span className="text-[#491f78] font-black text-sm sm:text-base">N</span>ext-
                      <span className="text-[#491f78] font-black text-sm sm:text-base">G</span>eneration{' '}
                      <span className="text-[#491f78] font-black text-sm sm:text-base">C</span>omputing &amp;{' '}
                      <span className="text-[#491f78] font-black text-sm sm:text-base">I</span>nformation{' '}
                      <span className="text-[#491f78] font-black text-sm sm:text-base">T</span>echnologies
                    </p>
                  </div>
                </div>
              </div>
            </div>

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
                      className={`relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 active:scale-95 ${
                        isActive
                          ? 'bg-blue-50/90 text-blue-700 border border-blue-600/30 shadow-xs'
                          : 'text-slate-700 hover:text-blue-600 hover:bg-slate-100/70 border border-transparent'
                      }`}
                    >
                      <span>{item.label}</span>
                      
                      {item.hasDropdown && (
                        <svg
                          className={`w-3.5 h-3.5 transition-transform duration-300 ${
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

                      {/* Dynamic centered horizontal gold indicator bar */}
                      <span
                        className={`absolute -bottom-2.5 left-1/2 -translate-x-1/2 h-[3.5px] rounded-full bg-amber-400 shadow-[0_2px_10px_rgba(251,191,36,0.65)] transition-all duration-300 ease-out origin-center pointer-events-none ${
                          showUnderline
                            ? 'w-10 opacity-100 scale-x-100'
                            : 'w-0 opacity-0 scale-x-0'
                        }`}
                      />
                    </Link>

                    {/* High-Fidelity Popover Dropdown Box Matching Mockup */}
                    {item.hasDropdown && (
                      <div
                        className={`absolute top-full left-1/2 -translate-x-1/2 w-[420px] sm:w-[460px] pt-4 transition-all duration-300 pointer-events-none group-hover/navitem:pointer-events-auto z-50 ${
                          activeDropdown === idx
                            ? 'opacity-100 translate-y-0 scale-100'
                            : 'opacity-0 translate-y-3 scale-95 pointer-events-none'
                        }`}
                      >
                        <div className="relative">
                          {/* Top Arrow Pointer Beak */}
                          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-t border-l border-blue-200/80 rotate-45 z-30 shadow-2xs" />

                          {/* Dropdown Container */}
                          <div className="p-3.5 sm:p-4 rounded-[32px] bg-white border border-blue-100/90 shadow-[0_20px_50px_rgba(37,99,235,0.12),0_4px_20px_rgba(15,23,42,0.06)] space-y-2.5 relative overflow-hidden backdrop-blur-3xl">
                            
                            {/* Top Subtle Gold Accent Bar */}
                            <div className="absolute top-0 left-6 right-6 h-[2.5px] bg-amber-400 rounded-full shadow-xs" />

                            {item.dropdown.map((sub, sIdx) => (
                              <Link
                                key={sIdx}
                                to={sub.path}
                                onClick={(e) => handleDropdownClick(e, sub.path, sub.targetId)}
                                className="flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-slate-50/70 hover:bg-white border border-slate-100/90 hover:border-blue-200/90 shadow-2xs hover:shadow-md transition-all duration-250 group/sub relative z-10 hover:-translate-y-0.5 active:scale-[0.99]"
                              >
                                {/* Left Icon Box + Text */}
                                <div className="flex items-center gap-3.5 min-w-0 pr-2">
                                  <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center shrink-0 shadow-2xs group-hover/sub:scale-105 transition-transform duration-300 ${sub.iconBoxColor}`}>
                                    {sub.icon}
                                  </div>

                                  <div className="space-y-0.5 text-left min-w-0">
                                    <div className="text-sm font-bold text-slate-900 group-hover/sub:text-blue-600 transition-colors tracking-tight truncate">
                                      {sub.title}
                                    </div>
                                    <div className="text-xs text-slate-500 font-medium leading-snug line-clamp-1">
                                      {sub.desc}
                                    </div>
                                  </div>
                                </div>

                                {/* Right Badge & Chevron */}
                                <div className="flex items-center gap-2 shrink-0">
                                  <span className={`text-[10px] font-mono font-bold px-3 py-1.5 rounded-full border shadow-2xs flex items-center gap-1.5 transition-all duration-200 ${sub.tagColor}`}>
                                    {sub.badgeIcon}
                                    <span>{sub.tag}</span>
                                  </span>
                                  <svg className="w-3.5 h-3.5 text-slate-400 group-hover/sub:text-blue-600 group-hover/sub:translate-x-0.5 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                                  </svg>
                                </div>
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
                    to={isSigningOut ? '#' : '/dashboard'}
                    onClick={(e) => {
                      if (isSigningOut) {
                        e.preventDefault();
                        return;
                      }
                      closeMenu();
                    }}
                    className={`btn-interactive px-5 py-2 rounded-full font-black text-[11px] xl:text-xs tracking-wider uppercase shadow-md shrink-0 whitespace-nowrap transition-all duration-300 flex items-center justify-center gap-2 ${
                      isSigningOut
                        ? 'bg-amber-300/90 text-slate-800 opacity-90 cursor-none pointer-events-none'
                        : 'btn-shimmer bg-amber-400 hover:bg-amber-300 text-slate-950'
                    }`}
                  >
                    {isSigningOut ? (
                      <>
                        <svg className="w-3.5 h-3.5 animate-spin text-slate-950 shrink-0" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>SIGNING OUT...</span>
                      </>
                    ) : (
                      <span>DASHBOARD</span>
                    )}
                  </Link>
                  <button
                    type="button"
                    disabled={isSigningOut}
                    onClick={handleSignOut}
                    title="Sign Out"
                    aria-label="Sign Out"
                    className={`p-2 rounded-full border transition-all shadow-sm flex items-center justify-center shrink-0 ${
                      isSigningOut
                        ? 'bg-slate-100 border-slate-200 text-slate-400 opacity-50 cursor-none pointer-events-none'
                        : 'bg-slate-100 border-slate-200 text-slate-600 hover:text-red-600 hover:bg-red-50 hover:border-red-300 active:scale-90'
                    }`}
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
                  className="btn-interactive btn-shimmer ml-2 xl:ml-3 px-5 py-2 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-[11px] xl:text-xs tracking-wider uppercase shadow-md shrink-0 whitespace-nowrap"
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
        <div className="lg:hidden max-w-7xl mx-auto px-2 sm:px-4 mt-2 animate-page-enter">
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#491f78]/30 via-[#491f78]/10 to-[#491f78]/30 rounded-3xl blur-lg opacity-85" />
            
            <div className="relative bg-white/98 backdrop-blur-2xl rounded-3xl p-4 sm:p-5 space-y-3 shadow-[0_16px_40px_-6px_rgba(73,31,120,0.35)] max-h-[82vh] overflow-y-auto border border-slate-200/90">
              
              {/* Header Info */}
              <div className="flex items-center justify-between px-2 pb-2.5 border-b border-slate-100">
                <span className="text-[10px] font-mono font-black text-slate-400 uppercase tracking-widest">
                  NAVIGATION MENU
                </span>
                <span className="text-[9px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                  ICAINGCIT 2027
                </span>
              </div>

              {/* Navigation Button Cards */}
              <div className="space-y-1.5">
                {navItems.map((item, idx) => {
                  const isActive = location.pathname === item.path || (item.id === 'council' && location.pathname.startsWith('/council')) || (item.id === 'about' && location.pathname.startsWith('/about'));
                  const isExpanded = mobileExpanded[item.id];

                  return (
                    <div key={idx} className="rounded-2xl transition-all duration-200">
                      {item.hasDropdown ? (
                        <div>
                          <div
                            className={`w-full flex items-center justify-between p-3 rounded-2xl border transition-all duration-200 cursor-pointer ${
                              isActive
                                ? 'bg-gradient-to-r from-blue-50/90 via-indigo-50/60 to-purple-50/80 border-blue-300 text-blue-950 shadow-xs'
                                : 'bg-slate-50/80 hover:bg-slate-100/90 border-slate-200/70 text-slate-800'
                            }`}
                          >
                            <Link
                              to={item.path}
                              onClick={closeMenu}
                              className="flex items-center gap-3 flex-1 min-w-0"
                            >
                              <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 shadow-xs ${item.iconColor}`}>
                                {item.icon}
                              </div>
                              <div className="text-left min-w-0">
                                <div className="text-xs font-black uppercase tracking-wider flex items-center gap-2">
                                  <span>{item.label}</span>
                                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />}
                                </div>
                                <div className="text-[10px] text-slate-500 font-medium truncate">
                                  {item.sub}
                                </div>
                              </div>
                            </Link>

                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleMobileSub(item.id);
                              }}
                              className="p-1.5 rounded-lg text-slate-400 hover:text-blue-600 hover:bg-white/80 transition-all ml-2 shrink-0"
                              aria-label={`Toggle ${item.label} sub-menu`}
                            >
                              <svg
                                className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180 text-blue-600' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                              </svg>
                            </button>
                          </div>

                          {/* Accordion Sub-cards */}
                          {isExpanded && (
                            <div className="mt-1.5 ml-3 pl-3 border-l-2 border-blue-200/80 space-y-1.5 animate-auth-fade">
                              {item.dropdown.map((sub, sIdx) => (
                                <Link
                                  key={sIdx}
                                  to={sub.path}
                                  onClick={(e) => handleDropdownClick(e, sub.path, sub.targetId)}
                                  className="flex items-center justify-between p-2.5 rounded-xl bg-white hover:bg-blue-50/60 border border-slate-200/80 shadow-2xs active:scale-[0.98] transition-all"
                                >
                                  <div className="flex items-center gap-2.5 min-w-0 pr-2">
                                    <div className={`w-7 h-7 rounded-lg border flex items-center justify-center shrink-0 ${sub.iconBoxColor}`}>
                                      {sub.icon}
                                    </div>
                                    <div className="text-left min-w-0">
                                      <div className="text-xs font-bold text-slate-800 truncate">
                                        {sub.title}
                                      </div>
                                      <div className="text-[9px] text-slate-500 font-medium truncate">
                                        {sub.desc}
                                      </div>
                                    </div>
                                  </div>
                                  <span className={`text-[8px] font-mono font-bold px-2 py-0.5 rounded-full border shrink-0 ${sub.tagColor}`}>
                                    {sub.tag}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          to={item.path}
                          onClick={closeMenu}
                          className={`w-full flex items-center justify-between p-3 rounded-2xl border transition-all duration-200 active:scale-[0.99] ${
                            isActive
                              ? 'bg-gradient-to-r from-blue-50/90 via-indigo-50/60 to-purple-50/80 border-blue-300 text-blue-950 shadow-xs'
                              : 'bg-slate-50/80 hover:bg-slate-100/90 border-slate-200/70 text-slate-800'
                          }`}
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 shadow-xs ${item.iconColor}`}>
                              {item.icon}
                            </div>
                            <div className="text-left min-w-0">
                              <div className="text-xs font-black uppercase tracking-wider flex items-center gap-2">
                                <span>{item.label}</span>
                                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />}
                              </div>
                              <div className="text-[10px] text-slate-500 font-medium truncate">
                                {item.sub}
                              </div>
                            </div>
                          </div>

                          <div className="w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 shrink-0">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Bottom Action Section */}
              <div className="pt-2 border-t border-slate-100">
                {isSignedIn ? (
                  <div className="flex items-center gap-2">
                    <Link
                      to={isSigningOut ? '#' : '/dashboard'}
                      onClick={(e) => {
                        if (isSigningOut) {
                          e.preventDefault();
                          return;
                        }
                        closeMenu();
                      }}
                      className={`btn-interactive flex-1 text-center px-5 py-3.5 rounded-2xl font-black text-xs tracking-wider uppercase shadow-md flex items-center justify-center gap-2 transition-all duration-300 ${
                        isSigningOut
                          ? 'bg-amber-300/90 text-slate-800 opacity-90 cursor-none pointer-events-none'
                          : 'btn-shimmer bg-amber-400 hover:bg-amber-300 text-slate-950'
                      }`}
                    >
                      {isSigningOut ? (
                        <>
                          <svg className="w-4 h-4 animate-spin text-slate-950 shrink-0" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span>SIGNING OUT...</span>
                        </>
                      ) : (
                        <span>DASHBOARD PORTAL →</span>
                      )}
                    </Link>

                    <button
                      type="button"
                      disabled={isSigningOut}
                      onClick={handleSignOut}
                      className={`p-3.5 rounded-2xl border flex items-center justify-center shrink-0 transition-all ${
                        isSigningOut
                          ? 'bg-slate-100 border-slate-200 text-slate-400 opacity-50 cursor-none pointer-events-none'
                          : 'bg-slate-100 border-slate-200 text-slate-700 hover:text-red-600 hover:bg-red-50 hover:border-red-300 active:scale-90'
                      }`}
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
                    className="btn-interactive btn-shimmer w-full block text-center px-5 py-3.5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs tracking-wider uppercase shadow-md active:scale-95"
                  >
                    SIGN IN / REGISTER →
                  </Link>
                )}
              </div>

            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
