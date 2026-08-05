import React from 'react';

const Committee = () => {
  const committeeSections = [
    {
      title: "Chief Patrons",
      badge: "EXECUTIVE LEADERSHIP",
      members: [
        { name: "Shri. P. Sriram", role: "Chairman", org: "CIT Group of Institutions" },
        { name: "Smt. S. Sridevi", role: "Secretary", org: "CIT Group of Institutions" }
      ]
    },
    {
      title: "Patrons & General Chairs",
      badge: "STEERING COMMITTEE",
      members: [
        { name: "Dr. A. Ramesh", role: "Principal", org: "Chennai Institute of Technology" },
        { name: "Dr. B. Sundarambal", role: "Head & Professor, Dept of IT", org: "Chennai Institute of Technology" }
      ]
    },
    {
      title: "Organizing Chairs & Convenors",
      badge: "ORGANIZING COMMITTEE",
      members: [
        { name: "Prof. R. Vijaykumar", role: "Professor, Dept of IT", org: "CIT Chennai" },
        { name: "Dr. M. Lakshmi", role: "Associate Professor, Dept of IT", org: "CIT Chennai" },
        { name: "Dr. S. Kanthavel", role: "Professor, Dept of IT", org: "CIT Chennai" }
      ]
    },
    {
      title: "International Advisory Board",
      badge: "GLOBAL ADVISORS",
      members: [
        { name: "Dr. Aris Thorne", role: "Director of Quantum AI Research", org: "MIT, USA" },
        { name: "Prof. Elena Rostova", role: "Chair of Autonomous Systems", org: "ETH Zürich, Switzerland" },
        { name: "Dr. Kenji Takahashi", role: "Chief Scientist & Fellow", org: "NTT Labs, Japan" },
        { name: "Prof. Michael Chang", role: "Head of Distributed Systems", org: "National University of Singapore" }
      ]
    },
    {
      title: "Technical Program Committee (TPC)",
      badge: "REVIEW & TRACK LEADS",
      members: [
        { name: "Dr. P. Rajasekar", role: "AI & Machine Learning Track Lead", org: "CIT Chennai" },
        { name: "Dr. N. Kavitha", role: "Next-Gen Networks & 6G Lead", org: "CIT Chennai" },
        { name: "Dr. R. Saravanan", role: "Cybersecurity & Cryptography Lead", org: "CIT Chennai" },
        { name: "Dr. S. Anand", role: "Cloud & Distributed Computing Lead", org: "CIT Chennai" }
      ]
    }
  ];

  return (
    <section id="committee" className="py-24 px-4 relative z-10 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
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

        {/* Committee Category Groups */}
        <div className="space-y-14">
          {committeeSections.map((sec, idx) => (
            <div key={idx} className="space-y-6">
              
              {/* Category Header with Badge */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200">
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 uppercase tracking-tight flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-blue-600" />
                  <span>{sec.title}</span>
                </h3>
                <span className="text-[10px] font-mono font-extrabold tracking-widest px-3 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-200 uppercase">
                  {sec.badge}
                </span>
              </div>

              {/* Members Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {sec.members.map((m, mIdx) => (
                  <div
                    key={mIdx}
                    className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:border-blue-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-200 text-blue-600 font-extrabold text-sm flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                          {m.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="text-base font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                            {m.name}
                          </h4>
                          <p className="text-xs font-bold text-blue-600 font-mono">
                            {m.role}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                      <span>{m.org}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
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
