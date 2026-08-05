import React from 'react';

const AboutCIT = () => {
  return (
    <section id="about-cit" className="py-24 px-4 relative z-10 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-extrabold tracking-widest text-blue-600 uppercase bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200 shadow-sm">
              HOST INSTITUTION
            </span>

            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tight">
              Chennai Institute <span className="text-blue-600 glow-title">of Technology</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-900 leading-relaxed font-extrabold">
              Chennai Institute of Technology (CIT), an Autonomous Institution affiliated with Anna University, Tamil Nadu, was established with the objective of providing quality technical education with rich industrial exposure to cater to the evolving needs of the youth through innovative teaching methodologies.
            </p>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Beyond interactive classroom scenarios, periodic guest lectures and symposia led by industry stalwarts and academic pioneers inspire students to learn and prepare for ready-to-serve industrial and research requirements with uncompromised professional ethics.
            </p>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Accredited with an <strong className="text-slate-900 font-extrabold">NAAC A+ Grade</strong> and ranked prominently in NIRF Engineering rankings, CIT fosters a premier ecosystem of innovation, state-of-the-art research Centers of Excellence, and global academic partnerships.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm text-center">
                <div className="text-2xl font-black text-blue-600 font-mono">NAAC A+</div>
                <div className="text-xs font-bold text-slate-600 uppercase mt-1">Accredited Grade</div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm text-center">
                <div className="text-2xl font-black text-amber-500 font-mono">NIRF Top</div>
                <div className="text-xs font-bold text-slate-600 uppercase mt-1">Engineering Rank</div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm text-center col-span-2 sm:col-span-1">
                <div className="text-2xl font-black text-blue-600 font-mono">25+</div>
                <div className="text-xs font-bold text-slate-600 uppercase mt-1">Centers of Excellence</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800"
                alt="Chennai Institute of Technology Campus"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <div className="text-xs font-mono font-bold text-amber-400">SARATHY NAGAR, CHENNAI</div>
                  <div className="text-lg sm:text-xl font-extrabold">State-of-the-Art Academic Campus</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutCIT;
