import React, { useState, useMemo } from 'react';
import butterflyLogo from '../assets/butterfly-cit.png';

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
            { avatar: "PS", name: "Shri P. Sriram", affil: "Chairman", org: "Chennai Institute of Technology", location: "Chennai, India", tag: "CHIEF PATRON" },
            { avatar: "SS", name: "Mrs. S. Sridevi", affil: "Secretary", org: "Chennai Institute of Technology", location: "Chennai, India", tag: "CHIEF PATRON" },
            { avatar: "SG", name: "Mr. S. Gokulakrishnan", affil: "Director", org: "Chennai Institute of Technology", location: "Chennai, India", tag: "CHIEF PATRON" },
          ]
        },
        {
          roleName: 'Patrons',
          members: [
            { avatar: "AR", name: "Dr. A. Ramesh", affil: "Principal", org: "Chennai Institute of Technology", location: "Chennai, India", tag: "PATRON" },
            { avatar: "SR", name: "Dr. Srinivasa Rao", affil: "Dean, Curriculum Development & Enrichment", org: "Chennai Institute of Technology", location: "Chennai, India", tag: "PATRON" },
          ]
        },
        {
          roleName: 'Conference Leadership',
          members: [
            { avatar: "AR", name: "Dr. A. Ramesh", affil: "Principal", org: "Chennai Institute of Technology", location: "Chennai, India", tag: "CONFERENCE CHAIR" },
            { avatar: "AK", name: "Dr. A. R. Kavitha", affil: "Professor, Department of Information Technology", org: "Chennai Institute of Technology", location: "Chennai, India", tag: "CONFERENCE HOD" },
          ]
        },
        {
          roleName: 'Co-Chairs',
          members: [
            { avatar: "SP", name: "Dr. S. Pavithra", affil: "Head of Department, Dept. of CSE", org: "Chennai Institute of Technology", location: "Chennai, India", tag: "CO-CHAIR" },
            { avatar: "PP", name: "Dr. P. Partheeban", affil: "Dean (Planning & Dev), Sr. Member IEEE", org: "Chennai Institute of Technology", location: "Chennai, India", tag: "CO-CHAIR" },
            { avatar: "RK", name: "Dr. R. Krishnamoorthy", affil: "Prof & CNS (Embedded Systems), Sr. Member IEEE", org: "Chennai Institute of Technology", location: "Chennai, India", tag: "CO-CHAIR" },
            { avatar: "ME", name: "Dr. M. Ettappan", affil: "Prof & Head, Dept. of EEE", org: "Chennai Institute of Technology", location: "Chennai, India", tag: "CO-CHAIR" },
            { avatar: "BS", name: "Dr. B. Sundarambal", affil: "Professor, Dept. of Computer Science & Engg", org: "Chennai Institute of Technology", location: "Chennai, India", tag: "CO-CHAIR" },
            { avatar: "SS", name: "Mrs. S. Shanmugasundari", affil: "Asst. Professor & Head, Dept. of AI & DS", org: "Chennai Institute of Technology", location: "Chennai, India", tag: "CO-CHAIR" },
            { avatar: "PK", name: "Dr. P. Karthikeyan", affil: "Associate Professor, Dept. of CSE (CS)", org: "Chennai Institute of Technology", location: "Chennai, India", tag: "CO-CHAIR" },
            { avatar: "RM", name: "Dr. R. Meenakshi", affil: "Professor, Dept. of Computer Science & Engg", org: "Chennai Institute of Technology", location: "Chennai, India", tag: "CO-CHAIR" },
          ]
        },
        {
          roleName: 'Organizing Secretaries',
          members: [
            { avatar: "AK", name: "Dr. A. R. Kavitha", affil: "Professor, Department of Information Technology", org: "Chennai Institute of Technology", location: "Chennai, India", tag: "ORGANIZING SECRETARY" },
            { avatar: "JB", name: "Dr. J. Jai Jaganath Babu", affil: "Associate Professor, Dept. of ECE (IEEE SB Coordinator)", org: "Chennai Institute of Technology", location: "Chennai, India", tag: "ORGANIZING SECRETARY" },
          ]
        }
      ]
    },
    {
      id: 'technical',
      title: 'TECHNICAL PROGRAMME COMMITTEE',
      subtitle: 'Global technical leadership, peer-review oversight, and publication management.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        </svg>
      ),
      roles: [
        {
          roleName: 'Publication & Technical Program Chairs',
          members: [
            { avatar: "OS", name: "Prof. Onn Shehory", affil: "Intelligent Info Systems Vice Chair", org: "Bar-Ilan University", location: "Ramat Gan, Israel", tag: "PUBLICATION & TPC CHAIR" },
            { avatar: "RP", name: "Dr. R. Ponnusamy", affil: "Professor & Dean, Dept. of Computer Science & Engg", org: "Chennai Institute of Technology", location: "Chennai, India", tag: "PUBLICATION & TPC CHAIR" },
          ]
        }
      ]
    },
    {
      id: 'finance',
      title: 'FINANCE COMMITTEE',
      subtitle: 'Financial strategy, resource allocation, and sponsorship oversight.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      roles: [
        {
          roleName: 'Conference Treasurer & Financial Chairs',
          members: [
            { avatar: "RR", name: "Prof. R. Ramesh", affil: "Dean (Admin), Dept. of Computer Science & Engg", org: "Chennai Institute of Technology", location: "Chennai, India", tag: "FINANCIAL CHAIR" },
            { avatar: "MS", name: "Dr. S. K. Muthu Sundar", affil: "Professor, Dept. of Computer Science & Engg", org: "Chennai Institute of Technology", location: "Chennai, India", tag: "FINANCIAL CHAIR" },
          ]
        }
      ]
    },
    {
      id: 'tutorial',
      title: 'TUTORIAL COMMITTEE',
      subtitle: 'Curation of masterclasses, hands-on technical workshops, and tutorials.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      roles: [
        {
          roleName: 'Tutorial Chair',
          members: [
            { avatar: "PR", name: "Dr. Paul Rodrigues", affil: "Professor", org: "King Khalid University", location: "Saudi Arabia", tag: "TUTORIAL CHAIR" },
          ]
        },
        {
          roleName: 'Tutorial Co-Chairs',
          members: [
            { avatar: "DR", name: "Dr. D. Rosy", affil: "Prof & Dean-Campus Life, Dept. of CSE", org: "Chennai Institute of Technology", location: "Chennai, India", tag: "TUTORIAL CO-CHAIR" },
            { avatar: "AP", name: "Dr. A. Prasina", affil: "Professor & Dean, Dept. of ECE", org: "Chennai Institute of Technology", location: "Chennai, India", tag: "TUTORIAL CO-CHAIR" },
            { avatar: "RG", name: "Dr. R. Gowri", affil: "Professor & Head, Dept. of AI & DS", org: "Chennai Institute of Technology", location: "Chennai, India", tag: "TUTORIAL CO-CHAIR" },
          ]
        }
      ]
    },
    {
      id: 'workshop',
      title: 'WORKSHOP COMMITTEE',
      subtitle: 'Organization of specialized domain tracks and industry focus sessions.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      roles: [
        {
          roleName: 'Workshop Chair',
          members: [
            { avatar: "LP", name: "Dr. D. Lita Pansy", affil: "Dept. of Information Technology", org: "IIIT Lucknow", location: "Lucknow, India", tag: "WORKSHOP CHAIR" },
          ]
        },
        {
          roleName: 'Workshop Co-Chairs',
          members: [
            { avatar: "JV", name: "Dr. J. Venkatesh", affil: "Professor & Controller of Examination, Dept. of CSE", org: "Chennai Institute of Technology", location: "Chennai, India", tag: "WORKSHOP CO-CHAIR" },
            { avatar: "RB", name: "Dr. R. Balamurali", affil: "Prof & Dean-Industry Relations, Dept. of ECE", org: "Chennai Institute of Technology", location: "Chennai, India", tag: "WORKSHOP CO-CHAIR" },
            { avatar: "DA", name: "Dr. Arulnath", affil: "Prof & Head, Dept. of ECE", org: "Chennai Institute of Technology", location: "Chennai, India", tag: "WORKSHOP CO-CHAIR" },
          ]
        }
      ]
    },
    {
      id: 'doctoral',
      title: 'DOCTORAL CONSORTIUM',
      subtitle: 'Research mentoring and academic guidance for doctoral scholars.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      ),
      roles: [
        {
          roleName: 'Doctoral Consortium Chairs',
          members: [
            { avatar: "DC", name: "Dr. Chandravadhana", affil: "Professor, Dept. of CSA", org: "IISc Bangalore", location: "Bangalore, India", tag: "DOCTORAL CONSORTIUM CHAIR" },
            { avatar: "GS", name: "Dr. G. Shanmuga Sundaram", affil: "Professor, Dept. of CSE", org: "Chennai Institute of Technology", location: "Chennai, India", tag: "DOCTORAL CONSORTIUM CHAIR" },
          ]
        },
        {
          roleName: 'Doctoral Consortium Co-Chairs',
          members: [
            { avatar: "DS", name: "Dr. Sofia", affil: "Professor, Dept. of ECE", org: "Chennai Institute of Technology", location: "Chennai, India", tag: "DOCTORAL CO-CHAIR" },
            { avatar: "EK", name: "Dr. E. Kothai", affil: "Professor, Dept. of CSE", org: "Chennai Institute of Technology", location: "Chennai, India", tag: "DOCTORAL CO-CHAIR" },
            { avatar: "MK", name: "Dr. M. Kayalvizhi", affil: "Professor, Dept. of Biomedical Engineering", org: "Chennai Institute of Technology", location: "Chennai, India", tag: "DOCTORAL CO-CHAIR" },
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
    { id: 'organizing', label: 'ORGANIZING' },
    { id: 'technical', label: 'TECHNICAL (TPC)' },
    { id: 'finance', label: 'FINANCE' },
    { id: 'tutorial', label: 'TUTORIAL' },
    { id: 'workshop', label: 'WORKSHOP' },
    { id: 'doctoral', label: 'DOCTORAL' },
  ];

  const visibleSections = activeTab === 'all' 
    ? sections 
    : sections.filter(sec => sec.id === activeTab);

  return (
    <section id="committee" className="py-20 px-4 sm:px-6 relative z-10 bg-slate-50/60 border-t border-slate-200/80">
      
      {/* Background Decorative Ambient Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-amber-500/5 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Main Header Banner */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-black tracking-widest uppercase shadow-sm">
            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            ICAINGCIT 2027 LEADERSHIP &amp; COUNCILS
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight uppercase">
            Conference <span className="text-blue-600 glow-title">Committee</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Distinguished academicians, industry visionaries, and researchers guiding the International Conference on AI, Next-Gen Computing, and Information Technology.
          </p>
        </div>

        {/* Centered Category Filter Pills */}
        <div className="flex justify-center">
          <div className="flex flex-wrap items-center justify-center gap-2 bg-white p-2.5 rounded-full border border-slate-200 shadow-sm">
            {tabs.map((tab) => {
              const count = tabCounts[tab.id] || 0;
              const isSelected = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black tracking-wider uppercase transition-all duration-300 ${
                    isSelected
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20 scale-105'
                      : 'bg-transparent text-slate-700 hover:text-blue-600 hover:bg-blue-50/50'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className={`px-1.5 py-0.5 rounded-full text-[10px] font-mono font-bold ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Committee Render Sections */}
        <div className="space-y-16">
          {visibleSections.map((sec) => (
            <div key={sec.id} className="space-y-8 scroll-mt-28">
              
              {/* Light Theme Section Header Banner */}
              <div className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-50/90 via-slate-50 to-indigo-50/90 border border-blue-200/80 text-slate-900 shadow-sm overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-blue-400/10 to-transparent pointer-events-none" />
                
                <div className="space-y-1.5 relative z-10">
                  <div className="flex items-center gap-2 text-blue-600 text-xs font-mono font-bold uppercase tracking-widest">
                    {sec.icon}
                    <span>ICAINGCIT 2027 TRACK</span>
                  </div>
                  <h3 className="text-xl sm:text-3xl font-black uppercase tracking-tight text-slate-900">
                    {sec.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm max-w-2xl font-medium">
                    {sec.subtitle}
                  </p>
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
                            
                            {/* Top Section: Larger Picture Left + Role Tag, Name, Org Right */}
                            <div className="flex items-start gap-4">
                              {/* Larger Picture Avatar Box */}
                              <div className="relative shrink-0">
                                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl border-2 border-blue-600 p-1 bg-white shadow-md flex items-center justify-center text-blue-700 font-mono font-black text-2xl sm:text-3xl group-hover:scale-105 transition-transform duration-300">
                                  {member.avatar}
                                </div>
                              </div>

                              {/* Role Tag (appears ONLY ONCE here), Name & Institution */}
                              <div className="space-y-1 pt-0.5 min-w-0 flex-1 pr-10 sm:pr-12">
                                <span className="inline-block px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-600 font-mono font-bold text-[10px] uppercase tracking-wider truncate max-w-full">
                                  {member.tag || roleGroup.roleName.toUpperCase()}
                                </span>

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
