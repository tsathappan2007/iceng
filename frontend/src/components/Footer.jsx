import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo-Photoroom.png';

const Footer = () => {
  return (
    <footer className="relative z-10 bg-white text-slate-900 shadow-[0_-15px_30px_-10px_rgba(15,23,42,0.06)] pt-10 pb-6 px-4 sm:px-6 overflow-hidden">
      
      {/* Soft Ambient Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-24 bg-gradient-to-b from-blue-500/8 via-slate-500/5 to-transparent blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-8 border-b border-slate-200/80 items-start">
          
          {/* 1. Brand Column (4 cols) */}
          <div className="lg:col-span-4 space-y-3.5">
            <Link to="/" className="inline-block group">
              <img 
                src={logoImg} 
                alt="ICAINGCIT 2027 Logo" 
                className="h-12 sm:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              International Conference on Artificial Intelligence and Next-Generation Computing &amp; Information Technologies.<br />
              Organised by Department of IT, CIT Chennai (NAAC A+).
            </p>

            <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-blue-50 text-blue-800 border border-blue-200">
                HYBRID EVENT
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-amber-50 text-amber-900 border border-amber-200">
                IEEE TEMPLATE
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-blue-50 text-blue-800 border border-blue-200">
                SCOPUS INDEXED
              </span>
            </div>
          </div>

          {/* 2. Navigation Links (4 cols) */}
          <div className="lg:col-span-4 space-y-2">
            <div>
              <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider mb-1.5">
                NAVIGATION
              </h4>
              <div className="w-8 h-[2.5px] bg-blue-600 rounded-full mb-3" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-0.5 text-xs">
              <Link to="/" className="py-1.5 flex items-center justify-between font-semibold text-slate-700 hover:text-blue-600 group transition-all border-b border-slate-100">
                <span>Home Landing</span>
                <span className="text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all font-mono font-bold">&gt;</span>
              </Link>
              <Link to="/about" className="py-1.5 flex items-center justify-between font-semibold text-slate-700 hover:text-blue-600 group transition-all border-b border-slate-100">
                <span>About Event &amp; CIT</span>
                <span className="text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all font-mono font-bold">&gt;</span>
              </Link>
              <Link to="/domains" className="py-1.5 flex items-center justify-between font-semibold text-slate-700 hover:text-blue-600 group transition-all border-b border-slate-100">
                <span>Research Scope</span>
                <span className="text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all font-mono font-bold">&gt;</span>
              </Link>
              <Link to="/timeline" className="py-1.5 flex items-center justify-between font-semibold text-slate-700 hover:text-blue-600 group transition-all border-b border-slate-100">
                <span>Timeline &amp; Dates</span>
                <span className="text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all font-mono font-bold">&gt;</span>
              </Link>
              <Link to="/council" className="py-1.5 flex items-center justify-between font-semibold text-slate-700 hover:text-blue-600 group transition-all border-b border-slate-100 sm:col-span-2">
                <span>Council &amp; Keynote Speakers</span>
                <span className="text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all font-mono font-bold">&gt;</span>
              </Link>
            </div>
          </div>

          {/* 3. Author Portal & Desk (4 cols) */}
          <div className="lg:col-span-4 space-y-2">
            <div>
              <h4 className="text-xs font-black text-slate-900 uppercase tracking-wider mb-1.5">
                AUTHOR PORTAL &amp; DESK
              </h4>
              <div className="w-8 h-[2.5px] bg-blue-600 rounded-full mb-3" />
            </div>

            <div className="space-y-0.5 text-xs">
              <Link to="/submit" className="py-1.5 flex items-center justify-between font-semibold text-slate-700 hover:text-blue-600 group transition-all border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 text-blue-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                  <span>Paper Submission Portal</span>
                </div>
                <span className="text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all font-mono font-bold">&gt;</span>
              </Link>

              <Link to="/registration" className="py-1.5 flex items-center justify-between font-semibold text-slate-700 hover:text-blue-600 group transition-all border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 text-blue-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>Registration Rates &amp; Form</span>
                </div>
                <span className="text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all font-mono font-bold">&gt;</span>
              </Link>

              <Link to="/contact" className="py-1.5 flex items-center justify-between font-semibold text-slate-700 hover:text-blue-600 group transition-all border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 text-blue-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Contact Organizing Desk</span>
                </div>
                <span className="text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all font-mono font-bold">&gt;</span>
              </Link>
            </div>

            {/* Compact Contact Links */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-mono font-bold">
              <a href="mailto:icaingcit2027@cit.edu.in" className="flex items-center gap-1.5 text-blue-600 hover:text-blue-700 transition-colors">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>icaingcit2027@cit.edu.in</span>
              </a>
              <span className="text-slate-300">·</span>
              <a href="tel:+914222572177" className="flex items-center gap-1.5 text-slate-700 hover:text-blue-600 transition-colors">
                <svg className="w-3.5 h-3.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+91 422 257 2177</span>
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom Copyright & Social Bar */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500 font-mono">
          <p>© 2027 <span className="text-slate-900 font-bold">ICAINGCIT</span> — Department of IT, CIT, Chennai. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs font-bold">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-blue-600 transition-colors">LINKEDIN</a>
            <span>·</span>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-blue-600 transition-colors">TWITTER</a>
            <span>·</span>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-slate-600 hover:text-blue-600 transition-colors">INSTAGRAM</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
