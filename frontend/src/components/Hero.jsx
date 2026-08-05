import React from 'react';
import CountdownTimer from './CountdownTimer';
import heroLogo from '../assets/logo-Photoroom.png';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen pt-32 sm:pt-36 md:pt-40 pb-12 flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-[#f8fafc] bg-grid-cyber">
      
      {/* Light Mode Soft Radial Ambient Glow */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle at 50% 45%, rgba(37, 99, 235, 0.08) 0%, rgba(245, 158, 11, 0.05) 45%, transparent 70%)'
        }}
      />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Top Eyebrow Tag — Crisp Visibility & Generous Top Spacing */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-blue-100/90 border border-blue-300 mb-4 shadow-sm animate-symphony-badge delay-100">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-ping" />
          <span className="text-[11px] sm:text-xs font-black tracking-widest text-blue-950 uppercase font-mono">
            15–17 MARCH 2027 &nbsp;·&nbsp; CHENNAI, INDIA
          </span>
        </div>

        {/* Main Conference Logo */}
        <div className="mb-6 w-full max-w-lg sm:max-w-3xl md:max-w-4xl lg:max-w-5xl px-4 flex items-center justify-center animate-symphony-title delay-200">
          <img 
            src={heroLogo} 
            alt="ICAINGCIT 2027 Logo" 
            className="w-full h-auto max-h-64 sm:max-h-96 md:max-h-[450px] lg:max-h-[520px] object-contain filter drop-shadow-md transition-all duration-300"
          />
        </div>

        

        <p className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] text-slate-600 uppercase mb-5 max-w-3xl animate-symphony-text delay-300">
          International Conference on Artificial Intelligence and Next-Generation Computing &amp; Information Technologies · Chennai Institute of Technology
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-3 max-w-4xl animate-symphony-cta delay-400">
          <a
            href="#submission"
            className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            SUBMIT PAPER
          </a>

          <a
            href="#registration"
            className="px-5 py-2.5 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-black tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            JOIN CONFERENCE
          </a>

          <a
            href="#about-conf"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-md hover:-translate-y-0.5"
          >
            <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
            </svg>
            DOWNLOAD BROCHURE
          </a>
        </div>

        {/* Secondary White Pill Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-4 animate-symphony-cta delay-400">
          <a
            href="#speakers"
            className="inline-flex items-center gap-1.5 px-6 py-2 rounded-full bg-white border border-slate-300 hover:bg-slate-50 text-slate-900 text-xs font-extrabold tracking-wider uppercase transition-all duration-300 shadow-sm hover:-translate-y-0.5"
          >
            <svg className="w-3.5 h-3.5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            KEYNOTE SPEAKERS
          </a>

          <a
            href="#dates"
            className="inline-flex items-center gap-1.5 px-6 py-2 rounded-full bg-white border border-slate-300 hover:bg-slate-50 text-slate-900 text-xs font-extrabold tracking-wider uppercase transition-all duration-300 shadow-sm hover:-translate-y-0.5"
          >
            <svg className="w-3.5 h-3.5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
            IMPORTANT DATES
          </a>
        </div>

        {/* Live Countdown Timer */}
        <div className="w-full flex justify-center animate-symphony-timer delay-500">
          <CountdownTimer targetDate="2027-03-15T09:00:00" />
        </div>

        {/* Highlights Meta Chips */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 w-full max-w-4xl mt-3 animate-symphony-badge delay-500">
          <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm text-left flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-blue-50 text-blue-600">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            </div>
            <div>
              <div className="text-[9px] uppercase font-bold text-slate-500">Location</div>
              <div className="text-[11px] font-extrabold text-slate-900">CIT, Chennai</div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm text-left flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-amber-50 text-amber-600">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
            </div>
            <div>
              <div className="text-[9px] uppercase font-bold text-slate-500">Indexing</div>
              <div className="text-[11px] font-extrabold text-slate-900">Scopus / Web of Sci</div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm text-left flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-blue-50 text-blue-600">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"/></svg>
            </div>
            <div>
              <div className="text-[9px] uppercase font-bold text-slate-500">Format</div>
              <div className="text-[11px] font-extrabold text-slate-900">Hybrid (In-Person &amp; Online)</div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm text-left flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-amber-50 text-amber-600">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
            </div>
            <div>
              <div className="text-[9px] uppercase font-bold text-slate-500">Community</div>
              <div className="text-[11px] font-extrabold text-slate-900">500+ Researchers</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
