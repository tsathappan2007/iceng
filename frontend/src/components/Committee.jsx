import React, { useState, useMemo } from 'react';
import butterflyLogo from '../assets/butterfly-cit.png';
import sriramPic from '../assets/sriram-picture.jpg';
import rameshPic from '../assets/ramesh-picture.jpg';
import srideviPic from '../assets/sridevi-picture.jpg';
import kavithaPic from '../assets/kavitha-picture.jpg';

const Committee = () => {
  const [activeTab, setActiveTab] = useState('all');

  const sections = [
    {
      id: 'organizing',
      title: 'ORGANIZING COMMITTEE',
      subtitle: 'Core leadership responsible for overall conference vision, governance, and execution.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      roles: [
        {
          roleName: 'Chief Patrons',
          members: [
            { image: sriramPic, avatar: "PS", name: "Shri P. Sriram", affil: "Chairman", org: "Chennai Institute of Technology", location: "Chennai, India", tag: "CHIEF PATRON" },
            { image: srideviPic, name: "Mrs. S. Sridevi", affil: "Secretary", org: "Chennai Institute of Technology", location: "Chennai, India", tag: "CHIEF PATRON" },
            { avatar: "SG", name: "Mr. S. Gokulakrishnan", affil: "Director", org: "Chennai Institute of Technology", location: "Chennai, India", tag: "CHIEF PATRON" },
          ]
        },
        {
          roleName: 'Patrons',
          members: [
            { image: rameshPic, name: "Dr. A. Ramesh", affil: "Principal", org: "Chennai Institute of Technology", location: "Chennai, India", tag: "PATRON" },
            { avatar: "SR", name: "Dr. Srinivasa Rao", affil: "Dean, School of Computing", org: "Chennai Institute of Technology", location: "Chennai, India", tag: "PATRON" },
            { avatar: "MM", name: "Dr. M. Manivannan", affil: "Director, Mechanical Department", org: "Chennai Institute of Technology", location: "Chennai, India", tag: "PATRON" },
          ]
        },
        {
          roleName: 'Chair',
          members: [
            { image: kavithaPic, name: "Dr. A. R. Kavitha", affil: "Professor & Head, Dept. of Information Technology", org: "Chennai Institute of Technology", location: "Chennai, India", tag: "CONFERENCE CHAIR" },
          ]
        },
        {
          roleName: 'Conference Treasurer',
          members: [
            { avatar: "RR", name: "Prof. R. Ramesh", affil: "Dean (Admin), Dept. of Computer Science & Engineering", org: "Chennai Institute of Technology", location: "Chennai, India", tag: "TREASURER" },
          ]
        },
        {
          roleName: 'Conference Treasurer & Financial Co-Chair',
          members: [
            { avatar: "LP", name: "Dr. D. Lita Pansy", affil: "Asst. Professor, Dept. of Information Technology", org: "Chennai Institute of Technology", location: "Chennai, India", tag: "FINANCIAL CO-CHAIR" },
          ]
        }
      ]
    },
    {
      id: 'advisory',
      title: 'INTERNATIONAL ADVISORY COMMITTEE',
      subtitle: 'Global academic leaders, IEEE Fellows, and international research advisors.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      roles: [
        {
          roleName: 'International Advisory Committee',
          members: [
            { avatar: "RB", name: "Prof. Rajkumar Buyya", affil: "Professor", org: "The University of Melbourne", location: "Australia", tag: "ADVISORY COMMITTEE" },
            { avatar: "VP", name: "Prof. Vincenzo Piuri", affil: "Professor (IEEE Fellow)", org: "University of Milan", location: "Italy", tag: "IEEE FELLOW" },
            { avatar: "LY", name: "Prof. Laurence T. Yang", affil: "Professor", org: "St. Francis Xavier University", location: "Canada", tag: "ADVISORY COMMITTEE" },
            { avatar: "SD", name: "Prof. Schahram Dustdar", affil: "Professor", org: "TU Wien", location: "Austria", tag: "ADVISORY COMMITTEE" },
            { avatar: "EB", name: "Prof. Elisa Bertino", affil: "Professor (IEEE Fellow)", org: "Purdue University", location: "USA", tag: "IEEE FELLOW" },
            { avatar: "NV", name: "Prof. Nitin H. Vaidya", affil: "Professor", org: "Georgetown University", location: "USA", tag: "ADVISORY COMMITTEE" },
            { avatar: "AZ", name: "Prof. Albert Zomaya", affil: "Professor (IEEE Fellow)", org: "The University of Sydney", location: "Australia", tag: "IEEE FELLOW" },
            { avatar: "HS", name: "Prof. Houbing Song", affil: "Professor", org: "University of Maryland", location: "USA", tag: "ADVISORY COMMITTEE" },
            { avatar: "MA", name: "Prof. Mohamed Abdel-Aty", affil: "Professor", org: "University of Central Florida", location: "USA", tag: "ADVISORY COMMITTEE" },
          ]
        }
      ]
    }
  ];

  // Helper to count members per category tab
  const tabCounts = useMemo(() => {
    const counts = { all: 0 };
    sections.forEach(sec => {
      let count = 0;
      sec.roles.forEach(r => { count += r.members.length; });
      counts[sec.id] = count;
      counts.all += count;
    });
    return counts;
  }, [sections]);

  const tabs = [
    { id: 'all', label: 'ALL COMMITTEES' },
    { id: 'organizing', label: 'ORGANIZING COMMITTEE' },
    { id: 'advisory', label: 'INTL ADVISORY' },
  ];

  const visibleSections = activeTab === 'all' 
    ? sections 
    : sections.filter(sec => sec.id === activeTab);

  return (
    <section id="committee" className="py-24 px-4 sm:px-6 relative z-10 bg-slate-50/70">
      
      {/* Background Ambient Blur Orbs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3">
            <span className="w-12 h-px bg-blue-300/80" />
            <span className="text-xs font-mono font-black tracking-widest text-blue-700 uppercase px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 shadow-sm">
              GOVERNANCE &amp; LEADERSHIP
            </span>
            <span className="w-12 h-px bg-blue-300/80" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tight">
            CONFERENCE <span className="text-blue-600 glow-title">COMMITTEES</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Distinguished leaders, patrons, steering committee members, and international advisory board guiding IEEE ICAINGCIT 2027.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex justify-center">
          <div className="inline-flex flex-wrap items-center justify-center p-1.5 rounded-full bg-white border border-slate-200/90 shadow-md gap-1">
            {tabs.map(tab => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-2.5 rounded-full text-xs font-mono font-black tracking-wider transition-all duration-300 flex items-center gap-2 uppercase ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md scale-[1.02]'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                    isActive ? 'bg-blue-700 text-white' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {tabCounts[tab.id]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Committee Sections */}
        <div className="space-y-16">
          {visibleSections.map((sec) => (
            <div key={sec.id} className="space-y-8">
              
              {/* Section Header Banner */}
              <div className="p-6 sm:p-8 rounded-[32px] bg-gradient-to-r from-blue-50/90 via-slate-50 to-indigo-50/90 border border-blue-200/80 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md shrink-0">
                    {sec.icon}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight uppercase">
                      {sec.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-medium">
                      {sec.subtitle}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 relative z-10">
                  <span className="px-4 py-2 rounded-full bg-white border border-blue-200 shadow-sm text-xs font-mono font-bold text-blue-700 uppercase">
                    {sec.roles.reduce((acc, r) => acc + r.members.length, 0)} Key Members
                  </span>
                </div>
              </div>

              {/* Roles under this Section */}
              <div className="space-y-10">
                {sec.roles.map((roleGroup, rIdx) => (
                  <div key={rIdx} className="space-y-6">
                    
                    {/* Role Title Bar */}
                    <div className="flex items-center gap-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                      <h4 className="text-xs font-black tracking-widest text-slate-800 uppercase bg-white px-4 py-1.5 rounded-full border border-slate-200 shadow-sm">
                        {roleGroup.roleName}
                      </h4>
                      <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent" />
                    </div>

                    {/* Centered Member Grid */}
                    <div className="flex flex-wrap justify-center items-stretch gap-6">
                      {roleGroup.members.map((member, mIdx) => (
                        <div
                          key={mIdx}
                          className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(50%-0.75rem)] xl:w-[calc(33.333%-1rem)] max-w-lg p-5 sm:p-6 rounded-[28px] bg-white border border-slate-200/90 shadow-md hover:shadow-xl hover:border-blue-400 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group min-h-[220px]"
                        >
                          {/* Top Right Decorative Background & Watermark Butterfly Logo */}
                          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-100/50 via-blue-50/30 to-transparent rounded-bl-[60px] pointer-events-none z-0 flex items-start justify-end p-2 sm:p-3">
                            <img
                              src={butterflyLogo}
                              alt="Butterfly Watermark Logo"
                              className="w-10 h-10 sm:w-12 sm:h-12 object-contain opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-500 filter drop-shadow-sm"
                            />
                          </div>

                          <div className="relative z-10 space-y-3.5">
                            
                            {/* Top Section: Avatar Left + Role Tag, Name, Org Right */}
                            <div className="flex items-start gap-4">
                              {/* Picture Avatar Box */}
                              <div className="relative shrink-0">
                                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl border-2 border-blue-600 p-1 bg-white shadow-md flex items-center justify-center text-blue-700 font-mono font-black text-xl sm:text-2xl group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                                  {member.image ? (
                                    <img
                                      src={member.image}
                                      alt={member.name}
                                      className="w-full h-full object-cover rounded-xl"
                                    />
                                  ) : (
                                    member.avatar
                                  )}
                                </div>
                              </div>

                              {/* Role Tag Capsule (Fully visible, no truncation), Name & Institution */}
                              <div className="space-y-1.5 pt-0.5 min-w-0 flex-1 pr-4">
                                <div className="flex flex-wrap items-center">
                                  <span className="inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-200/90 text-blue-700 font-mono font-black text-[10px] uppercase tracking-wider leading-normal shadow-2xs whitespace-normal max-w-full">
                                    {member.tag || roleGroup.roleName.toUpperCase()}
                                  </span>
                                </div>

                                <h3 className="text-base sm:text-lg font-black text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">
                                  {member.name}
                                </h3>

                                <p className="text-xs sm:text-sm font-bold text-amber-600 leading-snug">
                                  {member.org}
                                </p>

                                <div className="text-[11px] font-semibold text-slate-500 pt-0.5">
                                  📍 {member.location}
                                </div>
                              </div>
                            </div>

                            {/* Minimal Designation Box */}
                            <div className="p-3.5 rounded-2xl bg-slate-50/90 border border-slate-100/90">
                              <div className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-0.5">
                                DESIGNATION
                              </div>
                              <div className="text-xs font-bold text-slate-800 leading-snug">
                                "{member.affil}"
                              </div>
                            </div>

                          </div>

                        </div>
                      ))}
                    </div>

                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Committee;
