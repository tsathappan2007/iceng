import React from 'react';

const KeynoteSpeakers = () => {
  const speakers = [
    { avatar: "RS", name: "Prof. Ravi Shankar", title: "Distinguished Fellow", org: "IIT Delhi, India", topic: "The Future of Artificial General Intelligence: Pathways and Perils" },
    { avatar: "EV", name: "Dr. Elena Vasquez", title: "Chief AI Scientist", org: "Microsoft Research, USA", topic: "Large Language Models in Engineering: Transforming Design Workflows" },
    { avatar: "KN", name: "Prof. Kenji Nakamura", title: "Professor of Computing", org: "University of Tokyo, Japan", topic: "Quantum Computing: From Theory to Industrial Application" },
    { avatar: "AM", name: "Dr. Ayesha Mirza", title: "VP of Engineering", org: "Amazon Web Services, India", topic: "Sustainable Cloud Infrastructure for a Carbon-Neutral Future" },
    { avatar: "CB", name: "Prof. Carlos Braga", title: "Head of Cybersecurity Lab", org: "Universidade de São Paulo, Brazil", topic: "Next-Generation Threats: Securing AI Systems and Critical Infrastructure" },
    { avatar: "PG", name: "Dr. Priya Gopal", title: "Research Scientist", org: "Google DeepMind, UK", topic: "AI for Healthcare: Diagnostics, Drug Discovery and Personalised Medicine" },
  ];

  return (
    <section id="speakers" className="py-24 px-4 relative z-10 bg-obsidian-950/80 border-t border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <span className="text-xs font-extrabold tracking-widest text-purple-400 uppercase bg-purple-500/10 px-3.5 py-1.5 rounded-full border border-purple-500/20 shadow-[0_0_15px_rgba(157,78,221,0.15)]">
            DISTINGUISHED SPEAKERS
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mt-4 mb-4">
            Keynote <span className="text-cyan-400 glow-subtle">Speakers</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            World-renowned experts sharing their vision on the future of technology, research, and innovation.
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal">
          {speakers.map((speaker, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-purple-500/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(157,78,221,0.25)] group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-5">
                  
                  {/* Rotating Conic Gradient Rainbow Avatar Ring */}
                  <div className="relative p-[2px] rounded-2xl bg-gradient-to-tr from-purple-500 via-cyan-400 to-pink-500 group-hover:scale-110 transition-transform">
                    <div className="w-14 h-14 rounded-[14px] bg-obsidian-950 flex items-center justify-center text-lg font-mono font-black text-white group-hover:text-cyan-300 transition-colors">
                      {speaker.avatar}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {speaker.name}
                    </h3>
                    <div className="text-xs font-semibold text-purple-400">
                      {speaker.title}
                    </div>
                    <div className="text-xs text-gray-400">
                      {speaker.org}
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 group-hover:border-purple-500/30 text-xs text-gray-300 leading-relaxed italic transition-colors">
                  <span className="text-cyan-400 font-bold not-italic uppercase tracking-wider block mb-1">KEYNOTE TOPIC</span>
                  "{speaker.topic}"
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-gray-400">
                <span>PLENARY SESSION</span>
                <span className="text-cyan-400 font-bold uppercase tracking-wider">INVITED TALK</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default KeynoteSpeakers;
