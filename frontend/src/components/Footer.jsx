import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/logo-Photoroom.png';

const Footer = () => {
  return (
    <footer className="relative z-10 bg-white text-slate-900 border-t border-slate-200/90 pt-20 pb-12 px-4 sm:px-6 overflow-hidden">
      
      {/* Top Royal Blue laser line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-blue-600 shadow-sm" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 pb-16 border-b border-slate-200/80">
          
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-5">
            <Link to="/" className="inline-block group">
              <img 
                src={logoImg} 
                alt="ICAINGCIT 2027 Logo" 
                className="h-14 sm:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            <p className="text-xs text-slate-600 leading-relaxed max-w-sm font-medium">
              International Conference on Artificial Intelligence and Next-Generation Computing &amp; Information Technologies.<br />
              Organised by the Department of Information Technology, Chennai Institute of Technology (NAAC A+ Accredited).
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="px-3 py-1 rounded-full text-[10px] font-extrabold bg-blue-50 text-blue-800 border border-blue-200">
                HYBRID EVENT
              </span>
              <span className="px-3 py-1 rounded-full text-[10px] font-extrabold bg-amber-50 text-amber-900 border border-amber-200">
                IEEE TEMPLATE
              </span>
              <span className="px-3 py-1 rounded-full text-[10px] font-extrabold bg-blue-50 text-blue-800 border border-blue-200">
                SCOPUS INDEXED
              </span>
            </div>
          </div>

          {/* ================= NAVIGATION COLUMN (Exact Mockup Match) ================= */}
          <div className="md:col-span-4 space-y-2">
            
            {/* Header with Blue Line Underline */}
            <div>
              <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider mb-2">
                NAVIGATION
              </h4>
              <div className="w-10 h-[3px] bg-blue-600 rounded-full mb-4" />
            </div>

            {/* List with Bottom Border Dividers & Right Chevrons */}
            <div className="divide-y divide-slate-100">
              
              <Link
                to="/"
                className="py-3.5 flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-700 hover:text-blue-600 group transition-all"
              >
                <span>Home Landing</span>
                <span className="text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all text-xs font-mono font-bold">
                  &gt;
                </span>
              </Link>

              <Link
                to="/about"
                className="py-3.5 flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-700 hover:text-blue-600 group transition-all"
              >
                <span>About Event &amp; Institution</span>
                <span className="text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all text-xs font-mono font-bold">
                  &gt;
                </span>
              </Link>

              <Link
                to="/domains"
                className="py-3.5 flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-700 hover:text-blue-600 group transition-all"
              >
                <span>Research Domains &amp; Scope</span>
                <span className="text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all text-xs font-mono font-bold">
                  &gt;
                </span>
              </Link>

              <Link
                to="/timeline"
                className="py-3.5 flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-700 hover:text-blue-600 group transition-all"
              >
                <span>Timeline &amp; Important Dates</span>
                <span className="text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all text-xs font-mono font-bold">
                  &gt;
                </span>
              </Link>

              <Link
                to="/council"
                className="py-3.5 flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-700 hover:text-blue-600 group transition-all"
              >
                <span>Council &amp; Keynote Speakers</span>
                <span className="text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all text-xs font-mono font-bold">
                  &gt;
                </span>
              </Link>

            </div>

          </div>

          {/* ================= AUTHOR PORTAL & DESK COLUMN (Exact Mockup Match) ================= */}
          <div className="md:col-span-4 space-y-2">
            
            {/* Header with Blue Line Underline */}
            <div>
              <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider mb-2">
                AUTHOR PORTAL &amp; DESK
              </h4>
              <div className="w-10 h-[3px] bg-blue-600 rounded-full mb-4" />
            </div>

            {/* Portal Action Links with SVG Icons */}
            <div className="divide-y divide-slate-100">
              
              {/* Paper Submission Portal */}
              <Link
                to="/submit"
                className="py-3.5 flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-700 hover:text-blue-600 group transition-all"
              >
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-blue-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                  <span>Paper Submission Portal</span>
                </div>
                <span className="text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all text-xs font-mono font-bold">
                  &gt;
                </span>
              </Link>

              {/* Registration Rates & Form */}
              <Link
                to="/registration"
                className="py-3.5 flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-700 hover:text-blue-600 group transition-all"
              >
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-blue-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>Registration Rates &amp; Form</span>
                </div>
                <span className="text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all text-xs font-mono font-bold">
                  &gt;
                </span>
              </Link>

              {/* Contact Organizing Desk */}
              <Link
                to="/contact"
                className="py-3.5 flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-700 hover:text-blue-600 group transition-all"
              >
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-blue-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Contact Organizing Desk</span>
                </div>
                <span className="text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all text-xs font-mono font-bold">
                  &gt;
                </span>
              </Link>

            </div>

            {/* Quick Contact Pills at Bottom */}
            <div className="pt-4 space-y-3">
              
              {/* Email Pill Link */}
              <a
                href="mailto:icaingcit2027@cit.edu.in"
                className="flex items-center gap-3 text-xs font-bold text-blue-600 hover:text-blue-700 font-mono transition-colors"
              >
                <span className="w-8 h-8 rounded-full bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center shrink-0 shadow-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <span className="truncate">icaingcit2027@cit.edu.in</span>
              </a>

              {/* Phone Pill Link */}
              <a
                href="tel:+914222572177"
                className="flex items-center gap-3 text-xs font-bold text-slate-800 hover:text-blue-600 font-mono transition-colors"
              >
                <span className="w-8 h-8 rounded-full bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center shrink-0 shadow-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <span>+91 422 257 2177 (Dept of IT)</span>
              </a>

            </div>

          </div>

        </div>

        {/* Footer Bottom Copyright & Social Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-mono">
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
