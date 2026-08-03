import React, { useState } from 'react';

const Committee = () => {
  const [activeTab, setActiveTab] = useState('organizing');

  const tabs = [
    { id: 'organizing', label: 'ORGANIZING COMMITTEE' },
    { id: 'technical', label: 'TECHNICAL PROGRAMME' },
    { id: 'advisory', label: 'ADVISORY BOARD' },
    { id: 'reviewers', label: 'REVIEWERS' },
  ];

  const committeeData = {
    organizing: [
      { avatar: "PC", name: "Prof. Dr. P. Chandrasekaran", role: "Chief Patron", affil: "Principal, CIT, Chennai" },
      { avatar: "KS", name: "Dr. K. Sureshkumar", role: "Patron", affil: "Dean (Academic), CIT" },
      { avatar: "MR", name: "Dr. M. Rajalakshmi", role: "General Chair", affil: "HoD, Dept. of CSE, CIT" },
      { avatar: "VP", name: "Dr. V. Pradeep Kumar", role: "Organizing Chair", affil: "Associate Professor, CSE, CIT" },
      { avatar: "SA", name: "Dr. S. Anitha", role: "Co-Organizing Chair", affil: "Associate Professor, CSE, CIT" },
      { avatar: "RN", name: "Dr. R. Nagarajan", role: "Finance Chair", affil: "Assistant Professor, CSE, CIT" },
      { avatar: "LM", name: "Ms. L. Meenakshi", role: "Publicity Chair", affil: "Assistant Professor, CSE, CIT" },
      { avatar: "BK", name: "Mr. B. Karthikeyan", role: "Web & Technical Support", affil: "Assistant Professor, CSE, CIT" },
    ],
    technical: [
      { avatar: "TPC", name: "Prof. Dr. T. Rajendran", role: "TPC Chair", affil: "IIT Madras, India" },
      { avatar: "AK", name: "Dr. A. Kumar", role: "TPC Co-Chair", affil: "NIT Trichy, India" },
      { avatar: "SW", name: "Prof. Sarah Wilson", role: "Track Chair — AI/ML", affil: "University of Edinburgh, UK" },
      { avatar: "JL", name: "Prof. James Liu", role: "Track Chair — Cloud", affil: "NUS Singapore" },
      { avatar: "FH", name: "Dr. Fatima Hassan", role: "Track Chair — Security", affil: "Cairo University, Egypt" },
      { avatar: "KP", name: "Dr. K. Padmanabhan", role: "Track Chair — IoT", affil: "BITS Pilani, India" },
    ],
    advisory: [
      { avatar: "RV", name: "Prof. R. Venkatesan", role: "Advisory Board Chair", affil: "IISc Bangalore, India" },
      { avatar: "MP", name: "Prof. Maria Perez", role: "International Advisor", affil: "University of Toronto, Canada" },
      { avatar: "HT", name: "Prof. Hiroshi Tanaka", role: "International Advisor", affil: "Tokyo Institute of Technology" },
      { avatar: "GM", name: "Dr. George Mitchell", role: "Industry Advisor", affil: "Google DeepMind, USA" },
    ],
    reviewers: [
      { avatar: "SP", name: "Dr. S. Parthasarathy", role: "Senior Reviewer", affil: "Anna University, India" },
      { avatar: "NG", name: "Dr. N. Ganesan", role: "Senior Reviewer", affil: "PSG Tech, Chennai" },
      { avatar: "LS", name: "Dr. L. Subramanian", role: "Reviewer", affil: "Amrita University, India" },
      { avatar: "PV", name: "Dr. P. Vasudevan", role: "Reviewer", affil: "VIT University, India" },
      { avatar: "CR", name: "Ms. C. Revathi", role: "Reviewer", affil: "SASTRA University, India" },
      { avatar: "TM", name: "Mr. T. Murugesan", role: "Reviewer", affil: "Kongu Engineering College" },
    ],
  };

  return (
    <section id="committee" className="py-24 px-4 relative z-10 bg-obsidian-950/90 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12 reveal">
          <span className="text-xs font-extrabold tracking-widest text-purple-400 uppercase bg-purple-500/10 px-3.5 py-1.5 rounded-full border border-purple-500/20">
            ORGANIZING BODY
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mt-4 mb-4">
            Conference <span className="text-cyan-400">Committee</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Our distinguished organizing committee comprises leading academics and industry experts who ensure the highest standards of research and collaboration.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 reveal">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-extrabold tracking-wider uppercase transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-[0_0_20px_rgba(157,78,221,0.4)] scale-105'
                  : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/20'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Committee Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal">
          {committeeData[activeTab].map((member, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-cyan-400/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,245,212,0.15)] group flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-white/20 flex items-center justify-center text-xl font-mono font-black text-white group-hover:scale-110 group-hover:border-cyan-400 transition-all mb-4">
                {member.avatar}
              </div>
              <h3 className="text-base font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                {member.name}
              </h3>
              <div className="text-xs font-extrabold text-purple-400 uppercase tracking-wider mb-1">
                {member.role}
              </div>
              <div className="text-xs text-gray-400">
                {member.affil}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Committee;
