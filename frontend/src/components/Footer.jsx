import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative z-10 bg-white text-slate-900 border-t border-slate-200 pt-20 pb-12 px-4 overflow-hidden">
      
      {/* Top Royal Blue laser line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-blue-600 shadow-sm" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-slate-200">
          
          {/* Footer Brand Column */}
          <div className="md:col-span-5 space-y-5">
            <Link to="/" className="flex flex-col items-start group inline-flex">
              <div className="font-logo-wide font-black text-2xl select-none flex items-center gap-0.5 leading-none">
                <span className="text-slate-900 group-hover:text-blue-600 transition-colors">ICAING</span>
                <span className="text-blue-600 font-black">CIT</span>
              </div>
              <span className="text-[10px] font-mono font-extrabold text-amber-500 uppercase leading-none mt-1 tracking-[0.38em] pl-[0.38em]">
                2027
              </span>
            </Link>

            <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
              International Conference on Next-Gen Computing &amp; Information Technology.<br />
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

          {/* Navigation Links Column */}
          <div className="md:col-span-3 space-y-4">
            <h5 className="text-xs font-black uppercase tracking-widest text-blue-600">Navigation</h5>
            <ul className="space-y-2.5 text-xs font-bold text-slate-700">
              <li>
                <Link to="/" className="hover:text-blue-600 hover:translate-x-1 inline-block transition-all">
                  Home Landing
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-600 hover:translate-x-1 inline-block transition-all">
                  About Event &amp; Institution
                </Link>
              </li>
              <li>
                <Link to="/domains" className="hover:text-blue-600 hover:translate-x-1 inline-block transition-all">
                  Research Domains &amp; Scope
                </Link>
              </li>
              <li>
                <Link to="/timeline" className="hover:text-blue-600 hover:translate-x-1 inline-block transition-all">
                  Timeline &amp; Important Dates
                </Link>
              </li>
              <li>
                <Link to="/council" className="hover:text-blue-600 hover:translate-x-1 inline-block transition-all">
                  Council &amp; Keynote Speakers
                </Link>
              </li>
            </ul>
          </div>

          {/* Authors & Contact Desk Column */}
          <div className="md:col-span-4 space-y-4">
            <h5 className="text-xs font-black uppercase tracking-widest text-blue-600">Author Portal &amp; Desk</h5>
            <ul className="space-y-2.5 text-xs font-bold text-slate-700">
              <li>
                <Link to="/submit" className="hover:text-blue-600 hover:translate-x-1 inline-block transition-all">
                  Paper Submission Portal
                </Link>
              </li>
              <li>
                <Link to="/registration" className="hover:text-blue-600 hover:translate-x-1 inline-block transition-all">
                  Registration Rates &amp; Form
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-600 hover:translate-x-1 inline-block transition-all">
                  Contact Organizing Desk
                </Link>
              </li>
              <li>
                <a href="mailto:icaingcit2027@cit.edu.in" className="text-blue-600 hover:text-blue-700 font-mono text-xs">
                  icaingcit2027@cit.edu.in
                </a>
              </li>
              <li>
                <a href="tel:+914222572177" className="text-slate-700 hover:text-slate-950 font-mono text-xs">
                  +91 422 257 2177 (Dept of IT)
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Bar */}
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
