import React from 'react';

const SideNav = () => {
  return (
    <>
      {/* Official Season Badge - Top Right */}
      <div className="fixed top-0 right-4 md:right-10 z-40 hidden sm:flex flex-col items-center">
        <div className="bg-white border-x border-b border-blue-200 rounded-b-xl p-2 md:p-3 shadow-md text-center backdrop-blur-md">
          <div className="text-[10px] font-black tracking-widest text-blue-600 uppercase">OFFICIAL</div>
          <div className="text-xs font-black tracking-tighter text-slate-900">2027</div>
          <div className="text-[9px] font-bold text-amber-600 tracking-wider">EDITION</div>
        </div>
      </div>

      {/* Vertical Social & Quick Nav Sidebar - Right Edge */}
      <div className="fixed right-3 md:right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-8">
        <div className="w-[1px] h-16 bg-blue-200" />
        
        {/* Glow indicator dot */}
        <div className="relative">
          <div className="w-3 h-3 rounded-full bg-blue-600 animate-ping absolute inset-0" />
          <div className="w-3 h-3 rounded-full bg-blue-600 shadow-sm relative z-10" />
        </div>

        <div className="flex flex-col items-center gap-12 font-mono text-[10px] font-bold tracking-[0.25em] text-slate-500 uppercase">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600 transition-colors duration-300 transform -rotate-90 whitespace-nowrap origin-center hover:scale-110"
          >
            LINKEDIN
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600 transition-colors duration-300 transform -rotate-90 whitespace-nowrap origin-center hover:scale-110"
          >
            TWITTER
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600 transition-colors duration-300 transform -rotate-90 whitespace-nowrap origin-center hover:scale-110"
          >
            INSTAGRAM
          </a>
        </div>

        <div className="w-[1px] h-16 bg-blue-200" />
      </div>
    </>
  );
};

export default SideNav;
