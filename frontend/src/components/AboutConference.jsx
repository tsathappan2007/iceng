import React from 'react';
import Counter from './Counter';

const AboutConference = () => {
  const highlights = [
    "Peer-reviewed proceedings indexed in Scopus & Web of Science",
    "Best Paper Awards across all tracks with cash prizes",
    "Industry keynotes from top technology companies",
    "Pre-conference workshops and hands-on tutorials",
    "Networking sessions and exhibition floor"
  ];

  return (
    <section id="about-conf" className="py-24 px-4 relative z-10 bg-obsidian-950/80 border-t border-white/5 overflow-hidden">
      {/* Background glowing light ray */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center reveal">
          
          {/* Visual Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl p-1 bg-gradient-to-br from-purple-500/30 via-cyan-500/20 to-purple-800/30 shadow-[0_0_50px_rgba(157,78,221,0.2)] hover:shadow-[0_0_60px_rgba(157,78,221,0.35)] transition-all duration-300">
              <div className="rounded-[22px] bg-obsidian-900 overflow-hidden p-8 border border-white/10 relative min-h-[340px] flex flex-col justify-between">
                
                {/* Tech grid overlay */}
                <div className="absolute inset-0 bg-grid-cyber opacity-30 pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs font-mono mb-4 shadow-[0_0_12px_rgba(157,78,221,0.3)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-ping" />
                    <span>FLAGSHIP EVENT</span>
                  </div>
                  <h3 className="text-3xl font-black text-white uppercase tracking-tight mb-2">
                    ICENGCIT <span className="text-cyan-400 font-mono">2027</span>
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    Connecting global pioneers in Artificial Intelligence, Computing, and Information Technologies.
                  </p>
                </div>

                {/* Animated Count-up Statistics */}
                <div className="relative z-10 mt-12 grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="text-3xl font-black text-white font-mono">
                      <Counter end={30} suffix="+" duration={2000} />
                    </div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase mt-1">Countries Participating</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                    <div className="text-3xl font-black text-cyan-400 font-mono">
                      <Counter end={100} suffix="%" duration={2000} />
                    </div>
                    <div className="text-[10px] font-bold text-gray-400 uppercase mt-1">Peer Reviewed</div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Text Information */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-extrabold tracking-widest text-purple-400 uppercase bg-purple-500/10 px-3.5 py-1.5 rounded-full border border-purple-500/20 shadow-[0_0_15px_rgba(157,78,221,0.15)]">
                ABOUT THE EVENT
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mt-4">
                About the <span className="text-cyan-400 glow-subtle">Conference</span>
              </h2>
            </div>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              The International Conference on Next-Gen Computing &amp; Information Technology (ICENGCIT) is a prestigious biennial gathering that has established itself as a leading platform for knowledge exchange and innovation in technical disciplines.
            </p>

            <p className="text-gray-400 text-sm leading-relaxed">
              Since its inception, ICENGCIT has attracted thousands of participants from over 30 countries, facilitating groundbreaking research collaborations and fostering a global community of engineers and technologists.
            </p>

            <div className="space-y-3 pt-2">
              {highlights.map((item, idx) => (
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

export default AboutConference;
