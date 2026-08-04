import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSection, setActiveSection] = useState('hero');

  // Track active section on scroll for dynamic active tab highlighting
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sectionIds = ['hero', 'aim', 'about-conf', 'about-dept', 'about-cit', 'committee', 'dates', 'speakers', 'submission', 'registration', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => {
    setMenuOpen(false);
    setActiveDropdown(null);
  };

  const navItems = [
    {
      id: 'about',
      label: 'ABOUT',
      href: '#about-conf',
      sectionIds: ['about-conf', 'about-dept', 'about-cit'],
      dropdown: [
        { 
          title: 'Conference Overview', 
          desc: 'Prestige gathering for Next-Gen Computing', 
          href: '#about-conf', 
          tag: 'INFO', 
          svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        },
        { 
          title: 'Department of IT', 
          desc: '30+ years of computing excellence at CIT', 
          href: '#about-dept', 
          tag: 'DEPT', 
          svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        },
        { 
          title: 'Host Institution', 
          desc: 'Chennai Institute of Technology (NAAC A+)', 
          href: '#about-cit', 
          tag: 'CAMPUS', 
          svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        },
      ],
    },
    {
      id: 'domains',
      label: 'DOMAINS',
      href: '#aim',
      sectionIds: ['aim'],
      dropdown: [
        { 
          title: 'Artificial Intelligence & ML', 
          desc: 'Deep learning, AGI, & NLP innovations', 
          href: '#aim', 
          tag: 'TRACK 1', 
          svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        },
        { 
          title: 'Cloud & Edge Computing', 
          desc: 'Distributed networks & microservices', 
          href: '#aim', 
          tag: 'TRACK 2', 
          svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />
        },
        { 
          title: 'Cybersecurity & Privacy', 
          desc: 'Threat mitigation & zero-trust tech', 
          href: '#aim', 
          tag: 'TRACK 3', 
          svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        },
        { 
          title: 'IoT & Smart Systems', 
          desc: 'Embedded systems & robotics automation', 
          href: '#aim', 
          tag: 'TRACK 4', 
          svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071a10 10 0 0114.142 0M2.828 7.05a15 15 0 0121.214 0" />
        },
      ],
    },
    {
      id: 'timeline',
      label: 'TIMELINE',
      href: '#dates',
      sectionIds: ['dates'],
      dropdown: [
        { 
          title: 'Abstract Submission', 
          desc: 'Opens July 15 · Deadline Sep 30, 2026', 
          href: '#dates', 
          tag: 'CLOSED', 
          svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        },
        { 
          title: 'Full Paper Submission', 
          desc: '6-8 pages IEEE format · Oct 31, 2026', 
          href: '#dates', 
          tag: 'DUE', 
          svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        },
        { 
          title: 'Camera-Ready Paper', 
          desc: 'Final revised paper due Jan 15, 2027', 
          href: '#dates', 
          tag: 'FINAL', 
          svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        },
        { 
          title: 'Conference Event Days', 
          desc: 'March 15–17, 2027 in Chennai, India', 
          href: '#dates', 
          tag: 'EVENT', 
          svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        },
      ],
    },
    {
      id: 'speakers',
      label: 'SPEAKERS',
      href: '#speakers',
      sectionIds: ['speakers'],
      dropdown: [
        { 
          title: 'Keynote Speakers', 
          desc: 'World-renowned AI & computing pioneers', 
          href: '#speakers', 
          tag: 'KEYNOTE', 
          svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z" />
        },
        { 
          title: 'Invited Industry Talks', 
          desc: 'Experts from DeepMind, AWS & Microsoft', 
          href: '#speakers', 
          tag: 'INDUSTRY', 
          svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        },
        { 
          title: 'Plenary Sessions', 
          desc: 'Quantum computing & healthcare AI', 
          href: '#speakers', 
          tag: 'SESSION', 
          svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        },
      ],
    },
    {
      id: 'committee',
      label: 'COMMITTEE',
      href: '#committee',
      sectionIds: ['committee'],
      dropdown: [
        { 
          title: 'Organizing Committee', 
          desc: 'Chief Patrons & Conference Chairs', 
          href: '#committee', 
          tag: 'LEAD', 
          svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        },
        { 
          title: 'Technical Programme', 
          desc: 'TPC Chairs & Domain Track Leads', 
          href: '#committee', 
          tag: 'TPC', 
          svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        },
        { 
          title: 'Advisory Board', 
          desc: 'Distinguished international academic leaders', 
          href: '#committee', 
          tag: 'BOARD', 
          svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        },
        { 
          title: 'Reviewers Panel', 
          desc: 'Senior reviewers from top universities', 
          href: '#committee', 
          tag: 'PEER', 
          svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        },
      ],
    },
    {
      id: 'submit',
      label: 'SUBMIT',
      href: '#submission',
      sectionIds: ['submission'],
      dropdown: [
        { 
          title: 'Call for Papers', 
          desc: 'Submit original unpublished research', 
          href: '#submission', 
          tag: 'PORTAL', 
          svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
        },
        { 
          title: 'IEEE Template', 
          desc: 'Standard 6–8 pages double-blind format', 
          href: '#submission', 
          tag: 'GUIDE', 
          svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        },
        { 
          title: 'Paper Submission Form', 
          desc: 'Direct PDF upload & tracking ID', 
          href: '#submission', 
          tag: 'UPLOAD', 
          svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        },
      ],
    },
    {
      id: 'faqs',
      label: 'FAQS',
      href: '#contact',
      sectionIds: ['contact', 'registration'],
      dropdown: [
        { 
          title: 'General Enquiries', 
          desc: 'Email: icaingcit2027@cit.edu.in', 
          href: '#contact', 
          tag: 'EMAIL', 
          svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        },
        { 
          title: 'Registration Query', 
          desc: 'Registration categories & early bird rates', 
          href: '#registration', 
          tag: 'RATES', 
          svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        },
        { 
          title: 'Contact Organizing Desk', 
          desc: '+91 422 257 2177 · Dept of IT', 
          href: '#contact', 
          tag: 'PHONE', 
          svg: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        },
      ],
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* High-Contrast Textured Gradient Glowing Border Outer Frame */}
        <div className="p-[1px] rounded-t-none rounded-b-[38px] bg-gradient-to-r from-purple-500/60 via-yellow-400/80 to-cyan-400/60 shadow-[0_10px_35px_rgba(0,245,212,0.25),_0_0_20px_rgba(157,78,221,0.2)]">
          
          {/* Inner Top-Flush Curved Header Bar */}
          <div className="relative flex items-center justify-between px-6 py-3 bg-obsidian-950/98 backdrop-blur-3xl rounded-t-none rounded-b-[36px]">
            
            {/* Brand Logo - Left Aligned: Perfectly Centered & Balanced 2027 Subtext */}
            <a href="#hero" className="flex flex-col items-center justify-center text-center group" onClick={closeMenu}>
              <div className="font-logo-wide font-black text-xl select-none flex items-center gap-0.5 leading-none">
                <span className="text-white group-hover:text-cyan-300 transition-colors">ICAING</span>
                <span className="text-yellow-400 font-black drop-shadow-[0_0_12px_rgba(250,204,21,0.5)]">CIT</span>
              </div>

              {/* Perfectly centered 2027 subtext with balanced tracking */}
              <span className="text-[10px] font-mono font-extrabold text-purple-400 uppercase leading-none mt-1 tracking-[0.38em] text-center w-full pl-[0.38em]">
                2027
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navItems.map((item, idx) => {
                const isActive = item.sectionIds.includes(activeSection);

                return (
                  <div
                    key={idx}
                    className="relative group py-1"
                    onMouseEnter={() => setActiveDropdown(idx)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <a
                      href={item.href}
                      className={`relative inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-extrabold tracking-wider uppercase transition-all duration-300 ${
                        isActive
                          ? 'bg-gradient-to-r from-purple-600/90 via-purple-500/80 to-cyan-500/90 text-white shadow-[0_0_20px_rgba(157,78,221,0.5)] scale-105 border border-cyan-400/40'
                          : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {/* Floating active indicator bubble */}
                      {isActive && (
                        <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.9)] animate-pulse" />
                      )}

                      <span>{item.label}</span>
                      
                      <svg
                        className={`w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180 ${
                          isActive ? 'text-cyan-200' : 'text-gray-400 group-hover:text-cyan-400'
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                      </svg>
                    </a>

                    {/* Dark Neumorphism Popover Dropdown Box */}
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 w-84 pt-3.5 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto ${
                        activeDropdown === idx
                          ? 'opacity-100 translate-y-0 scale-100'
                          : 'opacity-0 translate-y-3 scale-95 pointer-events-none'
                      }`}
                    >
                      <div className="relative">
                        {/* Top Arrow Pointer Beak */}
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#080812] border-t border-l border-white/20 rotate-45 z-30 shadow-md" />

                        {/* Dark Neumorphic Soft Container */}
                        <div className="p-4 rounded-3xl bg-[#080812] border border-white/10 shadow-[18px_18px_45px_rgba(0,0,0,0.95),_-6px_-6px_25px_rgba(255,255,255,0.02)] space-y-2 relative overflow-hidden backdrop-blur-3xl">
                          
                          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                          {item.dropdown.map((sub, sIdx) => (
                            <a
                              key={sIdx}
                              href={sub.href}
                              onClick={closeMenu}
                              className="flex items-center justify-between p-3 rounded-2xl bg-[#0b0b18]/60 hover:bg-white/[0.06] border border-white/5 hover:border-cyan-400/40 shadow-[inset_1px_1px_2px_rgba(255,255,255,0.04),_0_4px_12px_rgba(0,0,0,0.6)] transition-all duration-200 group/sub relative z-10 hover:translate-x-1"
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 text-cyan-400 flex items-center justify-center group-hover/sub:bg-cyan-500/20 group-hover/sub:border-cyan-400/40 group-hover/sub:scale-110 transition-all shrink-0">
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    {sub.svg}
                                  </svg>
                                </div>

                                <div className="space-y-0.5 text-left">
                                  <div className="text-xs font-extrabold text-white group-hover/sub:text-yellow-300 transition-colors tracking-wide">
                                    {sub.title}
                                  </div>
                                  <div className="text-[10px] text-gray-400 leading-tight">
                                    {sub.desc}
                                  </div>
                                </div>
                              </div>

                              <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40 group-hover/sub:bg-yellow-400 group-hover/sub:text-obsidian-950 group-hover/sub:border-yellow-400 shrink-0 ml-2 shadow-sm transition-colors">
                                {sub.tag}
                              </span>
                            </a>
                          ))}
                        </div>

                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Action Register Pill Button */}
              <a
                href="#registration"
                className="ml-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-600 via-yellow-400 to-cyan-400 text-obsidian-950 font-black text-xs tracking-wider uppercase shadow-[0_0_20px_rgba(250,204,21,0.4)] hover:shadow-[0_0_30px_rgba(250,204,21,0.7)] transition-all transform hover:scale-105"
              >
                REGISTER NOW
              </a>
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
          <div className="bg-obsidian-950/98 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 space-y-4 shadow-2xl max-h-[80vh] overflow-y-auto">
            {navItems.map((item, idx) => (
              <div key={idx} className="border-b border-white/5 pb-3">
                <div className="flex items-center justify-between py-1 text-xs font-extrabold tracking-widest text-yellow-400 uppercase">
                  <span>{item.label}</span>
                </div>
                <div className="pl-3 mt-2 space-y-2 border-l border-white/10">
                  {item.dropdown.map((sub, sIdx) => (
                    <a
                      key={sIdx}
                      href={sub.href}
                      onClick={closeMenu}
                      className="block text-xs font-semibold text-gray-300 hover:text-white py-1"
                    >
                      {sub.title}
                    </a>
                  ))}
                </div>
              </div>
            ))}

            <a
              href="#registration"
              onClick={closeMenu}
              className="block text-center mt-4 px-5 py-3 rounded-full bg-gradient-to-r from-purple-600 via-yellow-400 to-cyan-400 text-obsidian-950 font-black text-xs tracking-wider uppercase shadow-xl"
            >
              REGISTER NOW
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
