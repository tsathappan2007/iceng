import React from 'react';

const AboutConference = () => {
  return (
    <section id="about-conf" className="py-24 px-4 relative z-10 bg-[#f8fafc] border-t border-slate-200">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Main Title: ABOUT (Black) + IEEE ICAINGCIT 2027 (Royal Blue) */}
        <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-slate-950">
          ABOUT <span className="text-blue-600">IEEE ICAINGCIT 2027</span>
        </h2>

        {/* Center Blue Dot & Line Accent */}
        <div className="flex items-center justify-center gap-2 my-5">
          <span className="w-12 h-[1.5px] bg-blue-200" />
          <span className="w-2 h-2 rounded-full bg-blue-600 shadow-sm" />
          <span className="w-12 h-[1.5px] bg-blue-200" />
        </div>

        {/* Executive Quote Card Container — Clean White Card without Dotted Texture */}
        <div className="relative mt-8 rounded-3xl bg-white border border-blue-100/80 border-l-[6px] border-l-blue-600 shadow-[0_20px_50px_rgba(37,99,235,0.07)] p-8 sm:p-12 text-left overflow-hidden">
          
          <div className="relative z-10">
            {/* SVG Giant Quote Mark Icon */}
            <div className="text-blue-300 mb-3 leading-none select-none">
              <svg className="w-12 h-12 text-blue-300/80" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>

            {/* Paragraph 1: Bold Black Announcement */}
            <p className="text-slate-950 font-black text-base sm:text-xl leading-relaxed tracking-tight mb-6">
              The Department of Information Technology, Chennai Institute of Technology (CIT), Chennai, is pleased to announce the IEEE International Conference on Artificial Intelligence and Next-Generation Computing &amp; Information Technologies (IEEE ICAINGCIT 2027).
            </p>

            {/* Subtle Divider Line */}
            <div className="w-full h-[1px] bg-slate-200/80 my-6" />

            {/* Paragraph 2: Conference Objectives Subtext */}
            <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
              The conference aims to provide a premier international platform for researchers, academics, industry professionals, scientists, and students to present cutting-edge research, exchange innovative ideas, and foster collaborations in Artificial Intelligence and emerging computing technologies.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutConference;
