import React, { useState } from 'react';
import butterflyLogo from '../assets/butterfly-cit.png';

const KeynoteSpeakers = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const speakers = [
    {
      id: 1,
      name: "Dr. Aris Thorne",
      role: "Director of Quantum AI Research",
      org: "Massachusetts Institute of Technology (MIT)",
      location: "Cambridge, USA",
      category: "keynote",
      categoryLabel: "KEYNOTE ADDRESS",
      day: "DAY 1 • 09:30 AM",
      topic: "Quantum Machine Learning & Neural Supremacy in Next-Gen Architectures",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 2,
      name: "Prof. Elena Rostova",
      role: "Chair of Autonomous Systems & Ethics",
      org: "ETH Zürich",
      location: "Zürich, Switzerland",
      category: "keynote",
      categoryLabel: "KEYNOTE ADDRESS",
      day: "DAY 1 • 02:00 PM",
      topic: "Ethical AI Frameworks & Real-Time Safety Guarantees in Autonomous Robotics",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 3,
      name: "Dr. Kenji Takahashi",
      role: "Chief Scientist & Fellow",
      org: "NTT Communication Science Labs",
      location: "Tokyo, Japan",
      category: "plenary",
      categoryLabel: "PLENARY SESSION",
      day: "DAY 2 • 10:00 AM",
      topic: "Next-Gen 6G Wireless Telemetry, Sub-THz Networks & Optical Mesh Integration",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 4,
      name: "Prof. Onn Shehory",
      role: "Intelligent Info Systems Vice Chair",
      org: "Bar-Ilan University",
      location: "Ramat Gan, Israel",
      category: "plenary",
      categoryLabel: "PLENARY SESSION",
      day: "DAY 2 • 02:30 PM",
      topic: "Multi-Agent Coordinated Intelligence & Distributed Decision Optimization",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400"
    },
    {
      id: 5,
      name: "Dr. Priya Sundaram",
      role: "Professor & Principal Investigator",
      org: "Indian Institute of Science (IISc)",
      location: "Bangalore, India",
      category: "invited",
      categoryLabel: "INVITED TRACK",
      day: "DAY 3 • 11:15 AM",
      topic: "Neuromorphic Hardware Computing & Bio-Inspired Spike Neural Networks",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
    }
  ];

  const filterTabs = [
    { id: 'all', label: 'ALL SPEAKERS' },
    { id: 'keynote', label: 'KEYNOTE ADDRESSES' },
    { id: 'plenary', label: 'PLENARY SESSIONS' },
    { id: 'invited', label: 'INVITED TRACKS' },
  ];

  const filteredSpeakers = speakers.filter(sp => {
    return activeFilter === 'all' || sp.category === activeFilter;
  });

  return (
    <section id="speakers" className="py-20 px-4 sm:px-6 relative z-10 bg-slate-50/50 border-t border-slate-200/80">
      
      {/* Background Decorative Gradient */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-r from-blue-500/5 via-amber-500/5 to-purple-500/5 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Main Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-black tracking-widest uppercase shadow-sm">
            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
            KEYNOTE SPEAKERS (5 DISTINGUISHED LUMINARIES)
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tight">
            Keynote <span className="text-blue-600 glow-title">Speakers</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            World-class researchers and industry pioneers delivering visionary keynote addresses at ICAINGCIT 2027.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex justify-center">
          <div className="flex flex-wrap items-center justify-center gap-2 bg-white p-2 rounded-full border border-slate-200 shadow-sm">
            {filterTabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-black tracking-wider uppercase transition-all duration-300 ${
                  activeFilter === tab.id
                    ? 'bg-blue-600 text-white shadow-md scale-105'
                    : 'bg-transparent text-slate-700 hover:text-blue-600'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Flexbox Centered Speakers Grid */}
        <div className="flex flex-wrap justify-center items-stretch gap-6">
          {filteredSpeakers.map((speaker) => (
            <div
              key={speaker.id}
              className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] max-w-md p-5 sm:p-6 rounded-[28px] bg-white border border-slate-200/90 shadow-md hover:shadow-xl hover:border-blue-400 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group"
            >
              {/* Top Right Decorative Background & Watermark Butterfly Logo */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-blue-100/60 via-blue-50/40 to-transparent rounded-bl-[100px] pointer-events-none z-0 flex items-start justify-end p-3 sm:p-4">
                <img
                  src={butterflyLogo}
                  alt="Butterfly Watermark Logo"
                  className="w-14 h-14 sm:w-16 sm:h-16 object-contain opacity-25 group-hover:opacity-45 group-hover:scale-110 transition-all duration-500 filter drop-shadow-sm"
                />
              </div>

              <div className="relative z-10 space-y-3.5">
                
                {/* Top Section: Enlarged Picture Left + Category Tag, Name, Org Right */}
                <div className="flex items-start gap-4">
                  {/* Larger Picture Box */}
                  <div className="relative shrink-0">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-blue-600 p-0.5 bg-white shadow-md group-hover:scale-105 transition-transform duration-300">
                      <img
                        src={speaker.image}
                        alt={speaker.name}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                  </div>

                  {/* Category Tag, Name & Institution */}
                  <div className="space-y-1 pt-0.5 min-w-0 flex-1 pr-10 sm:pr-12">
                    <span className="inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-600 font-mono font-bold text-[10px] uppercase tracking-wider truncate max-w-full">
                      {speaker.categoryLabel}
                    </span>

                    <h3 className="text-base sm:text-lg font-black text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">
                      {speaker.name}
                    </h3>

                    <p className="text-xs sm:text-sm font-bold text-amber-600 leading-snug">
                      {speaker.org}
                    </p>

                    <div className="text-[11px] font-semibold text-slate-500 pt-0.5">
                      📍 {speaker.location}
                    </div>
                  </div>
                </div>

                {/* Minimal Keynote Topic Box */}
                <div className="p-3.5 rounded-2xl bg-slate-50/90 border border-slate-100/90 space-y-1">
                  <div className="flex items-center justify-between text-[9px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                    <span>KEYNOTE TOPIC</span>
                    <span className="text-slate-500">📅 {speaker.day}</span>
                  </div>

                  <div className="text-xs font-extrabold text-slate-900 leading-snug">
                    "{speaker.topic}"
                  </div>
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
