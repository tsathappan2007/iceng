import React from 'react';

const KeynoteSpeakers = () => {
  const speakers = [
    {
      name: "Dr. Aris Thorne",
      role: "Director of Quantum AI Research",
      org: "Massachusetts Institute of Technology (MIT)",
      topic: "Quantum Machine Learning & Neural Supremacy",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Prof. Elena Rostova",
      role: "Chair of Autonomous Systems",
      org: "ETH Zürich, Switzerland",
      topic: "Ethical AI Frameworks in Autonomous Robotics",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Dr. Kenji Takahashi",
      role: "Chief Scientist & Fellow",
      org: "NTT Communication Science Labs, Japan",
      topic: "Next-Gen 6G Wireless Telemetry & Optical Mesh",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
    }
  ];

  return (
    <section id="speakers" className="py-24 px-4 relative z-10 bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <span className="text-xs font-extrabold tracking-widest text-blue-600 uppercase bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
            DISTINGUISHED LUMINARIES
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tight mt-4 mb-4">
            Keynote <span className="text-blue-600 glow-title">Speakers</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            World-class researchers and industry pioneers delivering visionary keynote addresses at ICAINGCIT 2027.
          </p>
        </div>

        {/* Speaker Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal">
          {speakers.map((speaker, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-slate-50 border border-slate-200 hover:border-blue-400 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between group"
            >
              <div>
                {/* Avatar with Blue Accent Ring */}
                <div className="relative w-28 h-28 mx-auto mb-6 rounded-full overflow-hidden border-2 border-blue-600 p-1 bg-white shadow-sm">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <h3 className="text-lg font-extrabold text-slate-900 text-center mb-1 group-hover:text-blue-600 transition-colors">
                  {speaker.name}
                </h3>
                <p className="text-xs font-bold text-blue-600 text-center mb-1 font-mono">
                  {speaker.role}
                </p>
                <p className="text-[11px] text-slate-500 text-center mb-6">
                  {speaker.org}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200">
                <div className="text-[9px] font-extrabold tracking-widest text-slate-400 uppercase mb-1">
                  KEYNOTE TOPIC
                </div>
                <div className="text-xs font-bold text-slate-800 leading-snug">
                  "{speaker.topic}"
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default KeynoteSpeakers;
