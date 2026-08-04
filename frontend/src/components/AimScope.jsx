import React, { useState } from 'react';

const AimScope = () => {
  const scopeTopics = [
    "Artificial Intelligence & ML", "Cloud & Edge Computing", "Cybersecurity",
    "IoT & Embedded Systems", "Data Science & Analytics", "Wireless & 5G Networks",
    "VLSI Design", "Renewable Energy Systems", "Robotics & Automation",
    "Blockchain Technology", "Smart Healthcare", "Natural Language Processing",
    "Computer Vision", "Software Engineering", "Green Computing", "Digital Signal Processing"
  ];

  // 3D Card Tilt state
  const [tilt1, setTilt1] = useState({ x: 0, y: 0 });
  const [tilt2, setTilt2] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e, setTilt) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({ x: (y / (rect.height / 2)) * -8, y: (x / (rect.width / 2)) * 8 });
  };

  const handleMouseLeave = (setTilt) => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section id="aim" className="py-24 px-4 relative z-10 bg-obsidian-950/60 border-t border-white/5 overflow-hidden">
      {/* Background glowing ambient beam */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <span className="text-xs font-extrabold tracking-widest text-cyan-400 uppercase bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/20 shadow-[0_0_15px_rgba(0,245,212,0.15)]">
            PURPOSE & DOMAINS
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mt-4 mb-4">
            Aim &amp; <span className="text-purple-400 glow-subtle">Scope</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            ICAINGCIT 2027 brings together researchers, educators, engineers, and industry professionals to share knowledge and advance innovation across core engineering and computing disciplines.
          </p>
        </div>

        {/* Aim & Scope Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 perspective-1000">
          
          {/* Conference Aim Card */}
          <div
            onMouseMove={(e) => handleMouseMove(e, setTilt1)}
            onMouseLeave={() => handleMouseLeave(setTilt1)}
            style={{
              transform: `perspective(1000px) rotateX(${tilt1.x}deg) rotateY(${tilt1.y}deg)`,
              transition: 'transform 0.15s ease-out',
            }}
            className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-purple-500/50 backdrop-blur-xl transition-all duration-300 shadow-2xl hover:shadow-[0_0_35px_rgba(157,78,221,0.25)] group reveal flex flex-col justify-between"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-[0_0_20px_rgba(157,78,221,0.3)]">
                <svg className="w-7 h-7" fill="none" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-white uppercase tracking-wider mb-4 group-hover:text-purple-300 transition-colors">
                Conference Aim
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                To provide an international forum for academics, researchers, and industry practitioners to exchange ideas, present original findings, and foster collaborations that drive technological progress across engineering, computing, and information technology domains.
              </p>

              <p className="text-gray-400 text-xs leading-relaxed">
                The conference aims to bridge the gap between theoretical research and practical applications, nurturing the next generation of innovators and thought leaders.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider group-hover:text-cyan-300">
              <span>EXPLORE RESEARCH TRACKS</span>
              <svg className="w-4 h-4 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </div>
          </div>

          {/* Scope of Topics Card with Floating Badges */}
          <div
            onMouseMove={(e) => handleMouseMove(e, setTilt2)}
            onMouseLeave={() => handleMouseLeave(setTilt2)}
            style={{
              transform: `perspective(1000px) rotateX(${tilt2.x}deg) rotateY(${tilt2.y}deg)`,
              transition: 'transform 0.15s ease-out',
            }}
            className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/50 backdrop-blur-xl transition-all duration-300 shadow-2xl hover:shadow-[0_0_35px_rgba(0,245,212,0.25)] group reveal"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform shadow-[0_0_20px_rgba(0,245,212,0.3)]">
              <svg className="w-7 h-7" fill="none" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"/>
              </svg>
            </div>

            <h3 className="text-2xl font-bold text-white uppercase tracking-wider mb-3 group-hover:text-cyan-300 transition-colors">
              Scope of Topics
            </h3>

            <p className="text-gray-300 text-xs mb-6">
              ICAINGCIT 2027 welcomes original research across, but not limited to, the following core domains:
            </p>

            <div className="flex flex-wrap gap-2">
              {scopeTopics.map((topic, idx) => (
                <span
                  key={idx}
                  style={{ animationDelay: `${(idx % 4) * 0.4}s` }}
                  className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-cyan-400/60 hover:bg-cyan-500/15 text-gray-300 hover:text-cyan-200 text-xs font-semibold tracking-wide transition-all transform hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(0,245,212,0.3)] cursor-pointer"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AimScope;
