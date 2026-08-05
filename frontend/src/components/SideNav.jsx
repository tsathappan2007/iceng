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
    </>
  );
};

export default SideNav;
