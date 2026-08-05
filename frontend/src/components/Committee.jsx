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
      { avatar: "PS", name: "Shri P. Sriram", role: "Chief Patron", affil: "Chairman, Chennai Institute of Technology" },
      { avatar: "SS", name: "Mrs. S. Sridevi", role: "Chief Patron", affil: "Secretary, Chennai Institute of Technology" },
      { avatar: "SG", name: "Mr. S. Gokulakrishnan", role: "Chief Patron", affil: "Director, Chennai Institute of Technology" },
      { avatar: "AR", name: "Dr. A. Ramesh", role: "Patron", affil: "Principal, Chennai Institute of Technology" },
      { avatar: "SR", name: "Dr. Srinivasa Rao", role: "Patron", affil: "Dean, Curriculum Development and Enrichment, CIT" },
      { avatar: "AR", name: "Dr. A. Ramesh", role: "Chair", affil: "Principal, Chennai Institute of Technology" },
      { avatar: "AK", name: "Dr. A. R. Kavitha", role: "HOD", affil: "Professor, Dept. of Information Technology, CIT" },
      { avatar: "SP", name: "Dr. S. Pavithra", role: "Co-Chair", affil: "Head of the Dept., Dept. of CSE, CIT" },
      { avatar: "PP", name: "Dr. P. Partheeban", role: "Co-Chair", affil: "Dean, Planning & Development, Sr. Member IEEE, CIT" },
      { avatar: "RK", name: "Dr. R. KrishnaMoorthy", role: "Co-Chair", affil: "Prof & CNS, Emruby - Embedded Systems, Sr. Member IEEE, CIT" },
      { avatar: "ME", name: "Dr. M. Ettappan", role: "Co-Chair", affil: "Prof & Head, Dept. of Electrical & Electronics Engineering, CIT" },
      { avatar: "BS", name: "Dr. B. Sundarambal", role: "Co-Chair", affil: "Professor, Dept. of CSE, CIT" },
      { avatar: "SS", name: "Mrs. S. Shanmugasundari", role: "Co-Chair", affil: "Asst. Professor & Head, Dept. of AI & DS, CIT" },
      { avatar: "PK", name: "Dr. P. Karthikeyan", role: "Co-Chair", affil: "Associate Professor, Dept. of CSE (CS), CIT" },
      { avatar: "RM", name: "Dr. R. Meenakshi", role: "Co-Chair", affil: "Professor, Dept. of CSE, CIT" },
      { avatar: "AK", name: "Dr. A. R. Kavitha", role: "Organizing Secretary", affil: "Professor, Dept. of Information Technology, CIT" },
      { avatar: "JB", name: "Dr. J. Jai Jaganath Babu", role: "Organizing Secretary", affil: "Associate Professor, Dept. of ECE, CIT (IEEE Student Branch Coordinator)" },
      { avatar: "OS", name: "Prof. Onn Shehory", role: "Publication & Technical Program Chair", affil: "Intelligent Information Systems Vice Chairman, Bar Ilan University, Israel" },
      { avatar: "RP", name: "Dr. R. Ponnusamy", role: "Publication & Technical Program Chair", affil: "Professor & Dean, Dept. of CSE, CIT" },
      { avatar: "RR", name: "Prof. R. Ramesh", role: "Conference Treasurer & Financial Chair", affil: "Dean (Admin), Dept. of CSE, CIT" },
      { avatar: "MS", name: "Dr. S. K. Muthu Sundar", role: "Conference Treasurer & Financial Chair", affil: "Professor, Dept. of CSE, CIT" },
      { avatar: "PR", name: "Dr. Paul Rodrigues", role: "Tutorial Chair", affil: "Professor, King Khalid University, Saudi Arabia" },
      { avatar: "DR", name: "Dr. D. Rosy", role: "Tutorial Co-Chair", affil: "Prof & Dean-Campus Life, Dept. of CSE, CIT" },
      { avatar: "AP", name: "Dr. A. Prasina", role: "Tutorial Co-Chair", affil: "Professor & Dean, Dept. of ECE, CIT" },
      { avatar: "RG", name: "Dr. R. Gowri", role: "Tutorial Co-Chair", affil: "Professor & Head, Dept. of AI & DS, CIT" },
      { avatar: "LP", name: "Dr. D. Lita Pansy", role: "Workshop Chair", affil: "Dept. of Information Technology, IIIT Lucknow, India" },
      { avatar: "JV", name: "Dr. J. Venkatesh", role: "Workshop Co-Chair", affil: "Professor & Controller of Examination, Dept. of CSE, CIT" },
      { avatar: "RB", name: "Dr. R. Balamurali", role: "Workshop Co-Chair", affil: "Prof & Dean-Industry Relations, Dept. of ECE, CIT" },
      { avatar: "DA", name: "Dr. Arulnath", role: "Workshop Co-Chair", affil: "Prof. & Head, Dept. of ECE, CIT" },
      { avatar: "DC", name: "Dr. Chandravadhana", role: "Doctoral Consortium Chair", affil: "Professor, Dept. of CSA, IISc Bangalore, India" },
      { avatar: "GS", name: "Dr. G. Shanmuga Sundaram", role: "Doctoral Consortium Chair", affil: "Professor, Dept. of CSE, CIT" },
      { avatar: "DS", name: "Dr. Sofia", role: "Doctoral Consortium Co-Chair", affil: "Professor, Dept. of ECE, CIT" },
      { avatar: "EK", name: "Dr. E. Kothai", role: "Doctoral Consortium Co-Chair", affil: "Professor, Dept. of CSE, CIT" },
      { avatar: "MK", name: "Dr. M. Kayalvizhi", role: "Doctoral Consortium Co-Chair", affil: "Professor, Dept. of Biomedical Engineering, CIT" },
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
