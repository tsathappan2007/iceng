import React from 'react';
import Counter from './Counter';

const AboutCIT = () => {
  const citHighlights = [
    "Autonomous institution affiliated to Anna University",
    "NAAC A+ Grade & NBA-accredited programmes",
    "Vibrant green campus with world-class infrastructure",
    "Centre for Entrepreneurship & Innovation",
    "Strong alumni network across 50+ countries"
  ];

  return (
    <section id="about-cit" className="py-24 px-4 relative z-10 bg-obsidian-950/80 border-t border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center reveal">
          
          {/* Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl p-1 bg-gradient-to-br from-purple-500/30 via-cyan-500/20 to-purple-800/30 shadow-[0_0_50px_rgba(157,78,221,0.2)] hover:shadow-[0_0_60px_rgba(157,78,221,0.35)] transition-all duration-300">
              <div className="rounded-[22px] bg-obsidian-900 overflow-hidden p-8 border border-white/10 relative min-h-[340px] flex flex-col justify-between">
                <div className="absolute inset-0 bg-grid-cyber opacity-30 pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs font-mono mb-4 shadow-[0_0_12px_rgba(157,78,221,0.3)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-ping" />
                    <span>NAAC A+ GRADE</span>
                  </div>
                  <h3 className="text-3xl font-black text-white uppercase tracking-tight mb-2">
                    CHENNAI INSTITUTE <span className="text-cyan-400 font-mono">OF TECH</span>
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    Recognised globally for technical education, research, and holistic student leadership.
                  </p>
                </div>

                <div className="relative z-10 mt-12 grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="text-3xl font-black text-white font-mono">
                      <Counter end={6000} suffix="+" duration={2000} />
                    </div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase mt-1">Active Students</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="text-3xl font-black text-cyan-400 font-mono">
                      <Counter end={50} suffix="+" duration={2000} />
                    </div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase mt-1">Global Partners</div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Text Information */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-extrabold tracking-widest text-purple-400 uppercase bg-purple-500/10 px-3.5 py-1.5 rounded-full border border-purple-500/20 shadow-[0_0_15px_rgba(157,78,221,0.15)]">
                HOST INSTITUTION
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mt-4">
                Chennai Institute of <span className="text-cyan-400 glow-subtle">Technology</span>
              </h2>
            </div>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Chennai Institute of Technology (CIT), established in 1956, is one of Tamil Nadu's oldest and most respected technical institutions. Affiliated to Anna University, CIT is an Autonomous institution recognised for academic excellence, innovation, and holistic development.
            </p>

            <p className="text-gray-400 text-sm leading-relaxed">
              Nestled in Chennai — the "Manchester of South India" — CIT's vibrant campus is home to over 6,000 students across undergraduate and postgraduate engineering programmes.
            </p>

            <div className="space-y-3 pt-2">
              {citHighlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 group">
                  <div className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-gray-200 group-hover:text-cyan-300 transition-colors">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutCIT;
