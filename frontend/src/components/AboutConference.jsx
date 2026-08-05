import React from 'react';

const AboutConference = () => {
  return (
    <section id="about-conf" className="py-24 px-4 relative z-10 bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm space-y-2">
                <div className="text-3xl font-black text-blue-600 font-mono">3 Days</div>
                <div className="text-xs font-bold text-slate-900 uppercase">Hybrid Gathering</div>
                <div className="text-[11px] text-slate-500">In-person & online keynotes & paper tracks.</div>
              </div>
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm space-y-2">
                <div className="text-3xl font-black text-amber-500 font-mono">IEEE</div>
                <div className="text-xs font-bold text-slate-900 uppercase">Standard Format</div>
                <div className="text-[11px] text-slate-500">Double-column paper templates & reviews.</div>
              </div>
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm space-y-2">
                <div className="text-3xl font-black text-blue-600 font-mono">Scopus</div>
                <div className="text-[11px] font-bold text-slate-900 uppercase">WoS Publication</div>
                <div className="text-[11px] text-slate-500">Accepted papers indexed post-conference.</div>
              </div>
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm space-y-2">
                <div className="text-3xl font-black text-amber-500 font-mono">500+</div>
                <div className="text-xs font-bold text-slate-900 uppercase">Global Delegates</div>
                <div className="text-[11px] text-slate-500">Researchers from over 25 countries.</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <span className="text-xs font-extrabold tracking-widest text-blue-600 uppercase bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
              CONFERENCE OVERVIEW
            </span>

            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tight">
              About <span className="text-blue-600 glow-title">ICAINGCIT 2027</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              The <strong>International Conference on Next-Gen Computing &amp; Information Technology (ICAINGCIT 2027)</strong> is a premier global forum for researchers, academicians, and industry practitioners to share groundbreaking advances in AI, 6G networks, cloud architectures, cybersecurity, and data science.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              Featuring keynote speeches by internationally recognized scholars, interactive technical sessions, and hands-on workshops, ICAINGCIT 2027 serves as a catalyst for cross-disciplinary collaboration and technological innovation.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutConference;
