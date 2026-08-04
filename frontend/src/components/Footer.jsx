import React from 'react';

const Footer = () => {
  return (
    <footer className="relative z-10 bg-obsidian-950 border-t border-white/10 pt-16 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10">
          
          {/* Footer Brand */}
          <div className="md:col-span-6 space-y-4">
            <a href="#hero" className="flex items-center gap-2 group inline-flex">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-400 p-[1px]">
                <div className="w-full h-full bg-obsidian-950 rounded-[7px] flex items-center justify-center font-black text-xs text-white">
                  ICA
                </div>
              </div>
              <span className="font-extrabold text-base tracking-widest text-white pixel-text group-hover:text-cyan-400 transition-colors uppercase">
                ICAINGCIT <span className="text-purple-400 font-mono text-xs">2027</span>
              </span>
            </a>

            <p className="text-xs text-gray-400 leading-relaxed max-w-md">
              International Conference on Next-Gen Computing &amp; Information Technology.<br />
              Hosted by the Department of IT, Chennai Institute of Technology.<br />
              March 15–17, 2027 · Chennai, India.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="text-xs font-black uppercase tracking-wider text-cyan-400">Quick Links</h5>
            <ul className="space-y-2 text-xs font-semibold text-gray-400">
              <li><a href="#aim" className="hover:text-white transition-colors">Aim &amp; Scope</a></li>
              <li><a href="#about-conf" className="hover:text-white transition-colors">About Conference</a></li>
              <li><a href="#committee" className="hover:text-white transition-colors">Committee</a></li>
              <li><a href="#dates" className="hover:text-white transition-colors">Important Dates</a></li>
              <li><a href="#speakers" className="hover:text-white transition-colors">Keynote Speakers</a></li>
            </ul>
          </div>

          {/* Authors */}
          <div className="md:col-span-3 space-y-3">
            <h5 className="text-xs font-black uppercase tracking-wider text-purple-400">Authors &amp; Portal</h5>
            <ul className="space-y-2 text-xs font-semibold text-gray-400">
              <li><a href="#submission" className="hover:text-white transition-colors">Submit Paper</a></li>
              <li><a href="#registration" className="hover:text-white transition-colors">Register</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#submission" className="hover:text-white transition-colors">IEEE Template</a></li>
              <li><a href="#submission" className="hover:text-white transition-colors">Author Guidelines</a></li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-500 font-mono">
          <p>© 2027 <span className="text-gray-300 font-bold">ICAINGCIT</span> — Department of IT, CIT, Chennai. All rights reserved.</p>
          <p>Designed &amp; developed for <span className="text-cyan-400 font-bold">CIT Conference</span></p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
