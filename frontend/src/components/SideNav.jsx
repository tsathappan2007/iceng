import React from 'react';

const SideNav = () => {
  return (
    <>
      {/* Official Season Badge - Top Right */}
      <div className="fixed top-0 right-4 md:right-10 z-40 hidden sm:flex flex-col items-center">
        <div className="bg-gradient-to-b from-slate-900 to-black border border-white/20 border-t-0 rounded-b-xl p-2 md:p-3 shadow-2xl text-center backdrop-blur-md">
          <div className="text-[10px] font-black tracking-widest text-red-500 uppercase">OFFICIAL</div>
          <div className="text-xs font-black tracking-tighter text-white">2027</div>
          <div className="text-[9px] font-bold text-gray-400 tracking-wider">EDITION</div>
        </div>
      </div>

      {/* Vertical Social & Quick Nav Sidebar - Right Edge */}
      <div className="fixed right-3 md:right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-8">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-purple-500/50 to-purple-500" />
        
        {/* Glow indicator dot */}
        <div className="relative">
          <div className="w-3 h-3 rounded-full bg-purple-400 shadow-[0_0_12px_rgba(157,78,221,1)] animate-ping absolute inset-0" />
          <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(0,245,212,0.8)] relative z-10" />
        </div>

        <div className="flex flex-col items-center gap-12 font-mono text-[10px] font-bold tracking-[0.25em] text-gray-400 uppercase">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition-colors duration-300 transform -rotate-90 whitespace-nowrap origin-center hover:scale-110"
          >
            LINKEDIN
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition-colors duration-300 transform -rotate-90 whitespace-nowrap origin-center hover:scale-110"
          >
            TWITTER
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition-colors duration-300 transform -rotate-90 whitespace-nowrap origin-center hover:scale-110"
          >
            INSTAGRAM
          </a>
        </div>

        <div className="w-[1px] h-16 bg-gradient-to-b from-purple-500 via-cyan-500/50 to-transparent" />
      </div>
    </>
  );
};

export default SideNav;
