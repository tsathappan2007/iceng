import React from 'react';

const AimScope = () => {
  const domains = [
    {
      title: "Artificial Intelligence & ML",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      desc: "Deep learning architectures, generative AI models, explainable AI (XAI), computer vision, NLP, and reinforcement learning applications.",
      tracks: ["Generative AI & LLMs", "Computer Vision & Pattern Rec", "AI in Healthcare & Bio-tech", "Autonomous Systems"]
    },
    {
      title: "Next-Gen Networks & 6G",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
        </svg>
      ),
      desc: "Software-defined networking (SDN), 5G/6G wireless communications, edge computing, optical networks, and satellite communication protocols.",
      tracks: ["6G Wireless Architectures", "Edge & Fog Computing", "Software-Defined Networking", "Optical Communication"]
    },
    {
      title: "Cybersecurity & Cryptography",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      desc: "Zero-trust network security, post-quantum cryptography, threat intelligence, privacy-preserving machine learning, and cloud security frameworks.",
      tracks: ["Post-Quantum Cryptography", "Zero Trust Architecture", "Threat Detection & AI", "Blockchain & Decentralized Tech"]
    },
    {
      title: "Cloud & Distributed Systems",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      desc: "Cloud-native computing, microservices architecture, serverless paradigms, distributed data engines, and fault-tolerant computing grids.",
      tracks: ["Serverless & Cloud-Native", "Distributed Consensus", "High-Performance Computing", "Quantum Cloud Services"]
    },
    {
      title: "Internet of Things & Smart Cities",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      desc: "Smart sensor networks, industrial IoT (IIoT), smart grid management, intelligent transportation systems, and urban digital twins.",
      tracks: ["Industrial IoT (IIoT)", "Smart Grids & Sustainability", "Urban Digital Twins", "Wearable Sensor Networks"]
    },
    {
      title: "Data Science & Analytics",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      desc: "Big Data processing pipelines, predictive analytics, graph databases, streaming data engines, and data-driven decision frameworks.",
      tracks: ["Big Data Processing", "Graph Analytics & Knowledge Graphs", "Predictive Analytics", "Real-Time Data Streaming"]
    }
  ];

  return (
    <section id="domains" className="py-24 px-4 relative z-10 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <span className="text-xs font-extrabold tracking-widest text-blue-600 uppercase bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
            RESEARCH SCOPE
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tight mt-4 mb-4">
            Conference <span className="text-blue-600 glow-title">Domains</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            ICAINGCIT 2027 invites original research papers across six core tracks shaping the future of computing and information technology.
          </p>
        </div>

        {/* Domain Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
          {domains.map((domain, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white border border-slate-200/80 hover:border-blue-400 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {domain.icon}
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {domain.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {domain.desc}
                </p>
              </div>

              <div>
                <div className="text-[10px] font-extrabold tracking-widest text-slate-400 uppercase mb-2">
                  KEY TRACKS
                </div>
                <ul className="space-y-1.5">
                  {domain.tracks.map((track, tIdx) => (
                    <li key={tIdx} className="text-[11px] text-slate-700 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                      <span>{track}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AimScope;
