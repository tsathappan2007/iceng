import React from 'react';

const AimScope = () => {
  const tracks = [
    {
      id: "01",
      title: "Artificial Intelligence & Machine Learning",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      topics: [
        "Artificial Intelligence",
        "Machine Learning & Deep Learning",
        "Generative AI & Large Language Models",
        "Explainable AI",
        "Reinforcement Learning",
        "AI for Healthcare"
      ]
    },
    {
      id: "02",
      title: "Data Science & Intelligent Analytics",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s-8-1.79-8-4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      topics: [
        "Big Data Analytics",
        "Data Mining",
        "Business Intelligence",
        "Predictive Analytics",
        "Data Engineering",
        "Visual Analytics"
      ]
    },
    {
      id: "03",
      title: "Next-Generation Computing",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
        </svg>
      ),
      topics: [
        "High-Performance Computing (HPC)",
        "Supercomputing",
        "Cloud Computing",
        "Edge & Fog Computing",
        "Distributed Computing",
        "Quantum Computing"
      ]
    },
    {
      id: "04",
      title: "Cybersecurity & Blockchain",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      topics: [
        "Blockchain Technologies",
        "Cybersecurity",
        "Network Security",
        "Privacy-Preserving AI",
        "Digital Forensics",
        "Secure Computing"
      ]
    },
    {
      id: "05",
      title: "IoT & Intelligent Systems",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      topics: [
        "Internet of Things",
        "Smart Cities",
        "Industry 5.0",
        "Embedded & Cyber-Physical Systems",
        "Robotics & Automation",
        "Intelligent Sensors"
      ]
    },
    {
      id: "06",
      title: "Emerging Technologies",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      topics: [
        "Computer Vision",
        "Natural Language Processing",
        "Healthcare Analytics",
        "Green Computing",
        "Sustainable AI",
        "Digital Twins"
      ]
    }
  ];

  return (
    <section id="domains" className="py-24 px-4 relative z-10 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-extrabold tracking-widest text-blue-600 uppercase bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200 shadow-sm inline-block mb-3">
            CONFERENCE TRACKS &amp; THEMES
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tight mb-4">
            Conference <span className="text-blue-600 glow-title">Tracks</span>
          </h2>
          <p className="text-slate-700 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-medium">
            ICAINGCIT 2027 invites original, unpublished research papers across 6 specialized core tracks.
          </p>
        </div>

        {/* 6-Track Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracks.map((track) => (
            <div
              key={track.id}
              className="p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-blue-50/90 via-slate-50 to-indigo-50/90 border border-blue-200/80 hover:border-blue-400 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between group"
            >
              <div>
                {/* Header Row: Icon & Track Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                    {track.icon}
                  </div>
                  <span className="text-[10px] font-mono font-black text-blue-700 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 uppercase">
                    TRACK {track.id}
                  </span>
                </div>

                {/* Track Title */}
                <h3 className="text-lg font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors leading-snug">
                  {track.title}
                </h3>

                {/* Bullet Points List */}
                <div className="pt-3 border-t border-slate-100">
                  <ul className="space-y-2">
                    {track.topics.map((topic, tIdx) => (
                      <li key={tIdx} className="text-xs sm:text-sm font-semibold text-slate-700 flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AimScope;
