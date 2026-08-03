import React from 'react';
import Counter from './Counter';

const AboutDepartment = () => {
  const deptHighlights = [
    "NBA-accredited B.Tech. (IT) programme",
    "12 specialised research laboratories",
    "Active MoUs with leading industry partners",
    "150+ faculty publications in high-impact journals annually",
    "Dedicated Centre for AI & Data Science Research"
  ];

  return (
    <section id="about-dept" className="py-24 px-4 relative z-10 bg-obsidian-950/60 border-t border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center reveal">
          
          {/* Text Information */}
          <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
            <div>
              <span className="text-xs font-extrabold tracking-widest text-cyan-400 uppercase bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/20 shadow-[0_0_15px_rgba(0,245,212,0.15)]">
                HOST DEPARTMENT
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mt-4">
                Department of <span className="text-purple-400 glow-subtle">Information Technology</span>
              </h2>
            </div>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              The Department of Information Technology at CIT has been at the forefront of computing education and research for over three decades. With state-of-the-art laboratories, a distinguished faculty, and a vibrant research culture, it stands among the premier IT departments in South India.
            </p>

            <p className="text-gray-400 text-sm leading-relaxed">
              The department offers B.Tech, M.Tech, and Ph.D. programmes, with specialisations spanning artificial intelligence, cloud computing, cybersecurity, and data science.
            </p>

            <div className="space-y-3 pt-2">
              {deptHighlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 group">
                  <div className="w-5 h-5 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-gray-200 group-hover:text-purple-300 transition-colors">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Card */}
          <div className="lg:col-span-5 relative order-1 lg:order-2">
            <div className="relative rounded-3xl p-1 bg-gradient-to-br from-cyan-500/30 via-purple-500/20 to-blue-800/30 shadow-[0_0_50px_rgba(0,245,212,0.2)] hover:shadow-[0_0_60px_rgba(0,245,212,0.35)] transition-all duration-300">
              <div className="rounded-[22px] bg-obsidian-900 overflow-hidden p-8 border border-white/10 relative min-h-[340px] flex flex-col justify-between">
                <div className="absolute inset-0 bg-grid-cyber opacity-30 pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4 shadow-[0_0_12px_rgba(0,245,212,0.3)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                    <span>ESTABLISHED 1993</span>
                  </div>
                  <h3 className="text-3xl font-black text-white uppercase tracking-tight mb-2">
                    EXCELLENCE IN <span className="text-purple-400">IT</span>
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    Pioneering research in Autonomous Systems, Machine Learning, &amp; Distributed Networks.
                  </p>
                </div>

                <div className="relative z-10 mt-12 grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="text-3xl font-black text-white font-mono">
                      <Counter end={12} suffix="+" duration={2000} />
                    </div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase mt-1">Research Labs</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="text-3xl font-black text-purple-400 font-mono">
                      <Counter end={150} suffix="+" duration={2000} />
                    </div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase mt-1">Annual Papers</div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutDepartment;
