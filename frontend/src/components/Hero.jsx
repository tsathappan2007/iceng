import React from 'react';
import CountdownTimer from './CountdownTimer';
import FluidCanvas from './FluidCanvas';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-obsidian-950 bg-grid-cyber">
      {/* Interactive WebGL Fluid Simulation Background */}
      <FluidCanvas />

      {/* Ambient static radial glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Text Wrapper with pointer-events-none so mouse passes to WebGL canvas below, buttons have pointer-events-auto */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center pointer-events-none select-none">
        
        {/* Top Eyebrow Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-6 shadow-[0_0_15px_rgba(157,78,221,0.15)] pointer-events-none">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-xs font-semibold tracking-wider text-gray-300 uppercase">
            15–17 MARCH 2027 &nbsp;·&nbsp; CHENNAI, INDIA
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-white glow-title pixel-text uppercase mb-4 leading-none pointer-events-none">
          ICENGCIT <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-purple-500">2027</span>
        </h1>

        <p className="text-lg sm:text-2xl font-bold tracking-widest text-gray-200 uppercase mb-2 pointer-events-none">
          MARCH 15–17, 2027
        </p>

        <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-gray-400 uppercase mb-8 max-w-2xl pointer-events-none">
          International Conference on Next-Gen Computing &amp; Information Technology · Chennai Institute of Technology
        </p>

        {/* Action Pill Buttons (pointer-events-auto so clicking works!) */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-6 max-w-4xl pointer-events-auto">
          <a
            href="#submission"
            className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/20 hover:border-purple-400/60 text-white text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 backdrop-blur-md shadow-lg hover:shadow-[0_0_20px_rgba(157,78,221,0.4)] hover:-translate-y-0.5"
          >
            SUBMIT PAPER
          </a>

          <a
            href="#registration"
            className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/20 hover:border-cyan-400/60 text-white text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 backdrop-blur-md shadow-lg hover:shadow-[0_0_20px_rgba(0,245,212,0.4)] hover:-translate-y-0.5"
          >
            JOIN CONFERENCE
          </a>

          <a
            href="#about-conf"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/20 hover:border-purple-400/60 text-white text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 backdrop-blur-md hover:-translate-y-0.5"
          >
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
            </svg>
            DOWNLOAD BROCHURE
          </a>
        </div>

        {/* Secondary White Pill Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8 pointer-events-auto">
          <a
            href="#speakers"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white hover:bg-gray-100 text-black text-xs sm:text-sm font-extrabold tracking-wider uppercase transition-all duration-300 shadow-xl hover:shadow-[0_0_25px_rgba(255,255,255,0.6)] hover:-translate-y-0.5"
          >
            <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            KEYNOTE SPEAKERS
          </a>

          <a
            href="#dates"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white hover:bg-gray-100 text-black text-xs sm:text-sm font-extrabold tracking-wider uppercase transition-all duration-300 shadow-xl hover:shadow-[0_0_25px_rgba(255,255,255,0.6)] hover:-translate-y-0.5"
          >
            <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
            IMPORTANT DATES
          </a>
        </div>

        {/* Live Countdown Timer */}
        <div className="pointer-events-auto">
          <CountdownTimer targetDate="2027-03-15T09:00:00" />
        </div>

        {/* Highlights Meta Chips */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full max-w-4xl mt-6 pointer-events-none">
          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 backdrop-blur-md text-left flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            </div>
            <div>
              <div className="text-[10px] uppercase font-bold text-gray-400">Location</div>
              <div className="text-xs font-bold text-white">CIT, Chennai</div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 backdrop-blur-md text-left flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
            </div>
            <div>
              <div className="text-[10px] uppercase font-bold text-gray-400">Indexing</div>
              <div className="text-xs font-bold text-white">Scopus / Web of Sci</div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 backdrop-blur-md text-left flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-500/20 text-purple-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"/></svg>
            </div>
            <div>
              <div className="text-[10px] uppercase font-bold text-gray-400">Format</div>
              <div className="text-xs font-bold text-white">Hybrid (In-Person &amp; Online)</div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 backdrop-blur-md text-left flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
            </div>
            <div>
              <div className="text-[10px] uppercase font-bold text-gray-400">Community</div>
              <div className="text-xs font-bold text-white">500+ Researchers</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
