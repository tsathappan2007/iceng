import React, { useState } from 'react';

const Committee = () => {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'ALL COMMITTEES' },
    { id: 'organizing', label: 'ORGANIZING COMMITTEE' },
    { id: 'technical', label: 'TECHNICAL PROGRAMME' },
    { id: 'finance', label: 'FINANCE COMMITTEE' },
    { id: 'tutorial', label: 'TUTORIAL COMMITTEE' },
    { id: 'workshop', label: 'WORKSHOP COMMITTEE' },
    { id: 'doctoral', label: 'DOCTORAL CONSORTIUM' },
  ];

  const sections = [
    {
      id: 'organizing',
      title: 'ORGANIZING COMMITTEE',
      subtitle: 'Core committee responsible for overall conference organization and management.',
      roles: [
        {
          roleName: 'Chief Patrons',
          members: [
            { avatar: "PS", name: "Shri P. Sriram", role: "Chief Patron", affil: "Chairman, Chennai Institute of Technology" },
            { avatar: "SS", name: "Mrs. S. Sridevi", role: "Chief Patron", affil: "Secretary, Chennai Institute of Technology" },
            { avatar: "SG", name: "Mr. S. Gokulakrishnan", role: "Chief Patron", affil: "Director, Chennai Institute of Technology" },
          ]
        },
        {
          roleName: 'Patrons',
          members: [
            { avatar: "AR", name: "Dr. A. Ramesh", role: "Patron", affil: "Principal, Chennai Institute of Technology" },
            { avatar: "SR", name: "Dr. Srinivasa Rao", role: "Patron", affil: "Dean, Curriculum Development and Enrichment, CIT" },
          ]
        },
        {
          roleName: 'Conference Chair',
          members: [
            { avatar: "AR", name: "Dr. A. Ramesh", role: "Conference Chair", affil: "Principal, Chennai Institute of Technology" },
          ]
        },
        {
          roleName: 'Conference HOD',
          members: [
            { avatar: "AK", name: "Dr. A. R. Kavitha", role: "Conference HOD", affil: "Professor, Department of Information Technology, CIT" },
          ]
        },
        {
          roleName: 'Co-Chairs',
          members: [
            { avatar: "SP", name: "Dr. S. Pavithra", role: "Co-Chair", affil: "Head of the Department, Dept. of CSE, CIT" },
            { avatar: "PP", name: "Dr. P. Partheeban", role: "Co-Chair", affil: "Dean, Planning & Development, Sr. Member IEEE, CIT" },
            { avatar: "RK", name: "Dr. R. Krishnamoorthy", role: "Co-Chair", affil: "Prof & CNS, Emruby - Embedded Systems, Sr. Member IEEE, CIT" },
            { avatar: "ME", name: "Dr. M. Ettappan", role: "Co-Chair", affil: "Prof & Head, Dept. of Electrical & Electronics Engineering, CIT" },
            { avatar: "BS", name: "Dr. B. Sundarambal", role: "Co-Chair", affil: "Professor, Dept. of Computer Science & Engineering, CIT" },
            { avatar: "SS", name: "Mrs. S. Shanmugasundari", role: "Co-Chair", affil: "Asst. Professor & Head, Dept. of AI & DS, CIT" },
            { avatar: "PK", name: "Dr. P. Karthikeyan", role: "Co-Chair", affil: "Associate Professor, Dept. of CSE (CS), CIT" },
            { avatar: "RM", name: "Dr. R. Meenakshi", role: "Co-Chair", affil: "Professor, Dept. of Computer Science & Engineering, CIT" },
          ]
        },
        {
          roleName: 'Organizing Secretaries',
          members: [
            { avatar: "AK", name: "Dr. A. R. Kavitha", role: "Organizing Secretary", affil: "Professor, Department of Information Technology, CIT" },
            { avatar: "JB", name: "Dr. J. Jai Jaganath Babu", role: "Organizing Secretary", affil: "Associate Professor, Dept. of ECE, CIT (IEEE Student Branch Coordinator)" },
          ]
        }
      ]
    },
    {
      id: 'technical',
      title: 'TECHNICAL PROGRAMME',
      subtitle: 'Technical program leadership and publication chairs.',
      roles: [
        {
          roleName: 'Publication & Technical Program Chairs',
          members: [
            { avatar: "OS", name: "Prof. Onn Shehory", role: "Publication & TPC Chair", affil: "Intelligent Information Systems Vice Chairman, Bar Ilan University, Israel" },
            { avatar: "RP", name: "Dr. R. Ponnusamy", role: "Publication & TPC Chair", affil: "Professor & Dean, Dept. of Computer Science & Engineering, CIT" },
          ]
        }
      ]
    },
    {
      id: 'finance',
      title: 'FINANCE COMMITTEE',
      subtitle: 'Financial planning, budgeting, and sponsorship management.',
      roles: [
        {
          roleName: 'Conference Treasurer & Financial Chairs',
          members: [
            { avatar: "RR", name: "Prof. R. Ramesh", role: "Financial Chair", affil: "Dean (Admin), Dept. of Computer Science & Engineering, CIT" },
            { avatar: "MS", name: "Dr. S. K. Muthu Sundar", role: "Financial Chair", affil: "Professor, Dept. of Computer Science & Engineering, CIT" },
          ]
        }
      ]
    },
    {
      id: 'tutorial',
      title: 'TUTORIAL COMMITTEE',
      subtitle: 'Coordination of conference tutorials and hands-on sessions.',
      roles: [
        {
          roleName: 'Tutorial Chair',
          members: [
            { avatar: "PR", name: "Dr. Paul Rodrigues", role: "Tutorial Chair", affil: "Professor, King Khalid University, Saudi Arabia" },
          ]
        },
        {
          roleName: 'Tutorial Co-Chairs',
          members: [
            { avatar: "DR", name: "Dr. D. Rosy", role: "Tutorial Co-Chair", affil: "Prof & Dean-Campus Life, Dept. of CSE, CIT" },
            { avatar: "AP", name: "Dr. A. Prasina", role: "Tutorial Co-Chair", affil: "Professor & Dean, Dept. of ECE, CIT" },
            { avatar: "RG", name: "Dr. R. Gowri", role: "Tutorial Co-Chair", affil: "Professor & Head, Dept. of AI & DS, CIT" },
          ]
        }
      ]
    },
    {
      id: 'workshop',
      title: 'WORKSHOP COMMITTEE',
      subtitle: 'Organization of specialized workshops and domain tracks.',
      roles: [
        {
          roleName: 'Workshop Chair',
          members: [
            { avatar: "LP", name: "Dr. D. Lita Pansy", role: "Workshop Chair", affil: "Dept. of Information Technology, IIIT Lucknow, India" },
          ]
        },
        {
          roleName: 'Workshop Co-Chairs',
          members: [
            { avatar: "JV", name: "Dr. J. Venkatesh", role: "Workshop Co-Chair", affil: "Professor & Controller of Examination, Dept. of CSE, CIT" },
            { avatar: "RB", name: "Dr. R. Balamurali", role: "Workshop Co-Chair", affil: "Prof & Dean-Industry Relations, Dept. of ECE, CIT" },
            { avatar: "DA", name: "Dr. Arulnath", role: "Workshop Co-Chair", affil: "Prof. & Head, Dept. of ECE, CIT" },
          ]
        }
      ]
    },
    {
      id: 'doctoral',
      title: 'DOCTORAL CONSORTIUM',
      subtitle: 'Mentorship and research guidance for doctoral scholars.',
      roles: [
        {
          roleName: 'Doctoral Consortium Chair',
          members: [
            { avatar: "DC", name: "Dr. Chandravadhana", role: "Doctoral Consortium Chair", affil: "Professor, Dept. of CSA, IISc Bangalore, India" },
            { avatar: "GS", name: "Dr. G. Shanmuga Sundaram", role: "Doctoral Consortium Chair", affil: "Professor, Dept. of CSE, CIT" },
          ]
        },
        {
          roleName: 'Doctoral Consortium Co-Chairs',
          members: [
            { avatar: "DS", name: "Dr. Sofia", role: "Doctoral Consortium Co-Chair", affil: "Professor, Dept. of ECE, CIT" },
            { avatar: "EK", name: "Dr. E. Kothai", role: "Doctoral Consortium Co-Chair", affil: "Professor, Dept. of CSE, CIT" },
            { avatar: "MK", name: "Dr. M. Kayalvizhi", role: "Doctoral Consortium Co-Chair", affil: "Professor, Dept. of Biomedical Engineering, CIT" },
          ]
        }
      ]
    }
  ];

  const visibleSections = activeTab === 'all' 
    ? sections 
    : sections.filter(sec => sec.id === activeTab);

  return (
    <section id="committee" className="py-24 px-4 relative z-10 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-extrabold tracking-widest text-blue-600 uppercase bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200 shadow-sm inline-block mb-3">
            ORGANIZING COUNCIL &amp; LEADERSHIP
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tight mb-4">
            Conference <span className="text-blue-600 glow-title">Committee</span>
          </h2>
          <p className="text-slate-700 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            The visionary leadership, advisory board, and technical committee behind ICAINGCIT 2027.
          </p>
        </div>

        {/* Tab Navigation Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-xs font-extrabold tracking-wider uppercase transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-md scale-105'
                  : 'bg-white border border-slate-300 text-slate-700 hover:text-blue-600 hover:border-blue-300 shadow-sm'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Render Committee Sections */}
        <div className="space-y-16">
          {visibleSections.map((sec) => (
            <div key={sec.id} className="space-y-8">
              
              {/* Committee Title Banner */}
              <div className="border-b border-slate-200 pb-4">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 uppercase tracking-tight flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-blue-600"></span>
                  {sec.title}
                </h3>
                {sec.subtitle && (
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 pl-6">
                    {sec.subtitle}
                  </p>
                )}
              </div>

              {/* Roles under Committee Section */}
              <div className="space-y-10">
                {sec.roles.map((roleGroup, rIdx) => (
                  <div key={rIdx} className="space-y-4">
                    <div className="flex items-center gap-3">
                      <h4 className="text-xs font-extrabold tracking-widest text-blue-800 uppercase bg-blue-50 px-3.5 py-1 rounded-full border border-blue-200">
                        {roleGroup.roleName}
                      </h4>
                      <div className="h-px flex-1 bg-slate-200"></div>
                    </div>

                    {/* Members Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {roleGroup.members.map((member, mIdx) => (
                        <div
                          key={mIdx}
                          className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:border-blue-400 hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group"
                        >
                          <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-xl font-mono font-black text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all mb-4">
                            {member.avatar}
                          </div>
                          <h5 className="text-base font-extrabold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                            {member.name}
                          </h5>
                          <div className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-2 font-mono">
                            {member.role}
                          </div>
                          <div className="text-xs text-slate-600 leading-relaxed font-medium">
                            {member.affil}
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
