import React from 'react';

const ImportantDates = () => {
  const milestones = [
    {
      title: "Full Paper Submission Deadline",
      date: "December 31, 2026",
      status: "OPEN",
      desc: "Submit complete manuscript formatted as per IEEE double-column template.",
      active: true
    },
    {
      title: "Notification of Acceptance",
      date: "January 20, 2027",
      status: "UPCOMING",
      desc: "Peer review results and decision letters dispatched to corresponding authors.",
      active: false
    },
    {
      title: "Camera-Ready Submission & Early Bird",
      date: "January 31, 2027",
      status: "UPCOMING",
      desc: "Final revised paper upload and early registration discount deadline.",
      active: false
    },
    {
      title: "Conference Registration Deadline",
      date: "February 15, 2027",
      status: "UPCOMING",
      desc: "Mandatory author registration deadline for inclusion in IEEE Xplore proceedings.",
      active: false
    },
    {
      title: "ICAINGCIT 2027 Conference",
      date: "March 15–17, 2027",
      status: "EVENT DATES",
      desc: "3 days of keynote sessions, technical track presentations, and workshops.",
      active: false
    }
  ];

  return (
    <section id="dates" className="py-24 px-4 relative z-10 bg-slate-50 border-t border-slate-200">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <span className="text-xs font-extrabold tracking-widest text-blue-600 uppercase bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
            TIMELINE & MILESTONES
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tight mt-4 mb-4">
            Important <span className="text-blue-600 glow-title">Dates</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Mark your calendar with key submission, review, and registration deadlines.
          </p>
        </div>

        {/* Milestone Timeline List */}
        <div className="space-y-4 reveal">
          {milestones.map((m, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-3xl bg-white border transition-all duration-300 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
                m.active
                  ? 'border-blue-600 shadow-md ring-1 ring-blue-600'
                  : 'border-slate-200/80 hover:border-slate-300'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-2xl flex items-center justify-center font-mono font-black text-sm shrink-0 mt-1 sm:mt-0 ${
                  m.active
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 border border-slate-200'
                }`}>
                  0{idx + 1}
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-base font-extrabold text-slate-900">
                      {m.title}
                    </h3>
                    <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-full border ${
                      m.active
                        ? 'bg-amber-100 text-amber-900 border-amber-300'
                        : 'bg-slate-100 text-slate-600 border-slate-200'
                    }`}>
                      {m.status}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600">
                    {m.desc}
                  </p>
                </div>
              </div>

              <div className="text-left sm:text-right shrink-0">
                <div className="text-sm font-black text-blue-600 font-mono">
                  {m.date}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ImportantDates;
