import React from 'react';

const ImportantDates = () => {
  const dates = [
    { month: "JUL", day: "15", year: "2026", title: "Abstract Submission Opens", desc: "Portal opens for abstract submissions", status: "passed" },
    { month: "SEP", day: "30", year: "2026", title: "Abstract Submission Deadline", desc: "Final date for abstract submissions", status: "passed" },
    { month: "OCT", day: "31", year: "2026", title: "Full Paper Submission", desc: "Deadline for full manuscript (6–8 pages IEEE format)", status: "upcoming" },
    { month: "DEC", day: "15", year: "2026", title: "Acceptance Notification", desc: "Authors notified of acceptance/rejection", status: "upcoming" },
    { month: "JAN", day: "15", year: "2027", title: "Camera-Ready Submission", desc: "Final revised paper due", status: "upcoming" },
    { month: "JAN", day: "31", year: "2027", title: "Early Bird Registration", desc: "Discounted registration closes", status: "upcoming" },
    { month: "FEB", day: "28", year: "2027", title: "Regular Registration", desc: "Standard registration deadline", status: "upcoming" },
    { month: "MAR", day: "15", year: "2027", title: "Conference Begins 🎉", desc: "Three days of sessions, workshops & keynotes", status: "highlight" },
  ];

  return (
    <section id="dates" className="py-24 px-4 relative z-10 bg-obsidian-950/70 border-t border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <span className="text-xs font-extrabold tracking-widest text-cyan-400 uppercase bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/20 shadow-[0_0_15px_rgba(0,245,212,0.15)]">
            TIMELINE & DEADLINES
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mt-4 mb-4">
            Important <span className="text-purple-400 glow-subtle">Dates</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Mark these key dates on your calendar. All deadlines are at 23:59 IST (UTC+5:30).
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 reveal">
          {dates.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-3xl border backdrop-blur-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden ${
                item.status === 'highlight'
                  ? 'bg-gradient-to-b from-purple-900/40 to-cyan-900/30 border-cyan-400 shadow-[0_0_35px_rgba(0,245,212,0.3)] scale-105'
                  : 'bg-white/[0.02] border-white/10 hover:border-purple-500/50 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(157,78,221,0.2)]'
              }`}
            >
              {/* Subtle top laser glow bar */}
              <div className={`absolute top-0 left-0 right-0 h-[2px] ${
                item.status === 'highlight' ? 'bg-gradient-to-r from-purple-400 via-cyan-300 to-purple-400' : 'bg-gradient-to-r from-transparent via-purple-500/50 to-transparent group-hover:via-cyan-400'
              }`} />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-black text-white font-mono group-hover:text-cyan-300 transition-colors">{item.day}</span>
                    <span className="text-xs font-extrabold text-cyan-400 uppercase font-mono">{item.month}</span>
                    <span className="text-[10px] text-gray-500 font-mono">'{item.year.slice(2)}</span>
                  </div>
                  {item.status === 'passed' ? (
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-gray-800 text-gray-400">COMPLETED</span>
                  ) : item.status === 'highlight' ? (
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 animate-pulse">EVENT</span>
                  ) : (
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">UPCOMING</span>
                  )}
                </div>

                <h4 className="text-base font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {item.title}
                </h4>

                <p className="text-xs text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-gray-500">
                <span>23:59 IST</span>
                <span className="text-gray-400 group-hover:text-cyan-400 transition-colors">UTC+5:30</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ImportantDates;
