import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative z-10 bg-[#060b19]/95 border-t border-cyan-500/15 pt-20 pb-12 px-4 overflow-hidden">
      
      {/* Top Electric Cyan laser line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-cyan-400 shadow-[0_0_12px_rgba(0,245,212,0.8)]" />

      {/* Ambient background glows */}
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-cyan-500/15">
          
          {/* Footer Brand Column */}
          <div className="md:col-span-5 space-y-5">
            <Link to="/" className="flex flex-col items-start group inline-flex">
              <div className="font-logo-wide font-black text-2xl select-none flex items-center gap-0.5 leading-none">
                <span className="text-white group-hover:text-cyan-300 transition-colors">ICAING</span>
                <span className="text-cyan-400 font-black drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]">CIT</span>
              </div>
              <span className="text-[10px] font-mono font-extrabold text-blue-400 uppercase leading-none mt-1 tracking-[0.38em] pl-[0.38em]">
                2027
              </span>
            </Link>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              International Conference on Next-Gen Computing &amp; Information Technology.<br />
              Organised by the Department of Information Technology, Chennai Institute of Technology (NAAC A+ Accredited).
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="px-3 py-1 rounded-full text-[10px] font-extrabold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                HYBRID EVENT
              </span>
              <span className="px-3 py-1 rounded-full text-[10px] font-extrabold bg-blue-600/20 text-cyan-300 border border-blue-500/30">
                IEEE TEMPLATE
              </span>
              <span className="px-3 py-1 rounded-full text-[10px] font-extrabold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                SCOPUS INDEXED
              </span>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-3 space-y-4">
            <h5 className="text-xs font-black uppercase tracking-widest text-cyan-400">Navigation</h5>
            <ul className="space-y-2.5 text-xs font-bold text-slate-300">
              <li>
                <Link to="/" className="hover:text-cyan-300 hover:translate-x-1 inline-block transition-all">
                  Home Landing
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-cyan-300 hover:translate-x-1 inline-block transition-all">
                  About Event &amp; Institution
                </Link>
              </li>
              <li>
                <Link to="/domains" className="hover:text-cyan-300 hover:translate-x-1 inline-block transition-all">
                  Research Domains &amp; Scope
                </Link>
              </li>
              <li>
                <Link to="/timeline" className="hover:text-cyan-300 hover:translate-x-1 inline-block transition-all">
                  Timeline &amp; Important Dates
                </Link>
              </li>
              <li>
                <Link to="/council" className="hover:text-cyan-300 hover:translate-x-1 inline-block transition-all">
                  Council &amp; Keynote Speakers
                </Link>
              </li>
            </ul>
          </div>

          {/* Authors & Contact Desk Column */}
          <div className="md:col-span-4 space-y-4">
            <h5 className="text-xs font-black uppercase tracking-widest text-cyan-400">Author Portal &amp; Desk</h5>
            <ul className="space-y-2.5 text-xs font-bold text-slate-300">
              <li>
                <Link to="/submit" className="hover:text-cyan-300 hover:translate-x-1 inline-block transition-all">
                  Paper Submission Portal
                </Link>
              </li>
              <li>
                <Link to="/registration" className="hover:text-cyan-300 hover:translate-x-1 inline-block transition-all">
                  Registration Rates &amp; Form
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-cyan-300 hover:translate-x-1 inline-block transition-all">
                  Contact Organizing Desk
                </Link>
              </li>
              <li>
                <a href="mailto:icaingcit2027@cit.edu.in" className="text-cyan-400 hover:text-cyan-300 font-mono text-xs">
                  icaingcit2027@cit.edu.in
                </a>
              </li>
              <li>
                <a href="tel:+914222572177" className="text-slate-300 hover:text-white font-mono text-xs">
                  +91 422 257 2177 (Dept of IT)
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400 font-mono">
          <p>© 2027 <span className="text-white font-bold">ICAINGCIT</span> — Department of IT, CIT, Chennai. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs font-bold">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-cyan-400 transition-colors">LINKEDIN</a>
            <span>·</span>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-cyan-400 transition-colors">TWITTER</a>
            <span>·</span>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-cyan-400 transition-colors">INSTAGRAM</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
