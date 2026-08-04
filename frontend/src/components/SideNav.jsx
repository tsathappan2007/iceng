import React from 'react';

const SideNav = () => {
  return (
    <>
      {/* Official Season Badge - Top Right */}
      <div className="fixed top-0 right-4 md:right-10 z-40 hidden sm:flex flex-col items-center">
        <div className="bg-[#0a1128] border-x border-b border-cyan-400/60 rounded-b-xl p-2 md:p-3 shadow-2xl text-center backdrop-blur-md">
          <div className="text-[10px] font-black tracking-widest text-cyan-400 uppercase">OFFICIAL</div>
          <div className="text-xs font-black tracking-tighter text-white">2027</div>
          <div className="text-[9px] font-bold text-blue-300 tracking-wider">EDITION</div>
        </div>
      </div>
    </>
  );
};

export default SideNav;
