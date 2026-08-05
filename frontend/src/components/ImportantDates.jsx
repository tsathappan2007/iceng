import React, { useState } from 'react';

const ImportantDates = () => {
  const [activeTab, setActiveTab] = useState('roadmap'); // 'roadmap' | 'milestones'

  const milestones = [
    { title: "Institutional Approval", date: "August 2026", phase: "Planning", icon: "🏛️", status: "COMPLETED" },
    { title: "IEEE Technical Co-Sponsorship", date: "September / October 2026", phase: "Approval", icon: "IEEE", status: "COMPLETED" },
    { title: "Website & CFP Release", date: "October 2026", phase: "Launch", icon: "🌐", status: "COMPLETED" },
    { title: "Paper Submission Deadline", date: "February 2027", phase: "Submissions", icon: "📄", status: "IMPORTANT", highlight: true },
    { title: "Acceptance Notification", date: "April 2027", phase: "Peer Review", icon: "✉️", status: "UPCOMING" },
    { title: "Camera-Ready Paper Upload", date: "May 2027", phase: "Final Papers", icon: "✅", status: "UPCOMING" },
    { title: "IEEE ICAINGCIT 2027 Conference", date: "15–17 July 2027", phase: "Main Event", icon: "🎯", status: "EVENT DATES", active: true },
    { title: "Post-Conference Report & IEEE Submission", date: "August 2027", phase: "Proceedings", icon: "📊", status: "FINAL PHASE" }
  ];

  const fullTimeline = [
    {
      step: "01",
      month: "August 2026",
      phase: "Phase 1 • Initiation & Setup",
      title: "Institutional Approval & Committee Setup",
      desc: "Obtain institutional approval, constitute Organizing Committee, finalize conference title, dates, and venue.",
      tag: "COMPLETED",
      tagColor: "bg-emerald-50 text-emerald-700 border-emerald-200"
    },
    {
      step: "02",
      month: "September 2026",
      phase: "Phase 1 • Sponsorship & CFP Prep",
      title: "IEEE Sponsorship & Keynote Planning",
      desc: "Apply for IEEE Technical Co-sponsorship, identify keynote speakers, prepare conference website and Call for Papers (CFP).",
      tag: "COMPLETED",
      tagColor: "bg-emerald-50 text-emerald-700 border-emerald-200"
    },
    {
      step: "03",
      month: "October 2026",
      phase: "Phase 2 • Official Launch",
      title: "Website Launch & CFP Release",
      desc: "Launch conference website, release CFP, invite advisory board members and technical program committee.",
      tag: "COMPLETED",
      tagColor: "bg-emerald-50 text-emerald-700 border-emerald-200"
    },
    {
      step: "04",
      month: "November – December 2026",
      phase: "Phase 2 • Outreach & Sponsorship",
      title: "Global IEEE Outreach & Sponsorship",
      desc: "Publicity through IEEE, professional societies, universities, and social media; initiate sponsorship activities.",
      tag: "IN PROGRESS",
      tagColor: "bg-blue-50 text-blue-700 border-blue-200 shadow-sm animate-pulse"
    },
    {
      step: "05",
      month: "January – February 2027",
      phase: "Phase 3 • Author Submissions",
      title: "Paper Submissions & Registration Intake",
      desc: "Receive paper submissions and monitor registrations.",
      tag: "CRITICAL DEADLINE",
      tagColor: "bg-amber-50 text-amber-800 border-amber-300 font-bold"
    },
    {
      step: "06",
      month: "March – April 2027",
      phase: "Phase 3 • Peer Review",
      title: "Peer Review & Author Notifications",
      desc: "Complete peer-review process and notify authors of acceptance.",
      tag: "REVIEW PHASE",
      tagColor: "bg-purple-50 text-purple-700 border-purple-200"
    },
    {
      step: "07",
      month: "May 2027",
      phase: "Phase 4 • Final Papers & Programme",
      title: "Camera-Ready Papers & Author Registration",
      desc: "Receive camera-ready papers, complete author registration, finalize keynote speakers and conference programme.",
      tag: "REGISTRATION",
      tagColor: "bg-blue-50 text-blue-700 border-blue-200"
    },
    {
      step: "08",
      month: "June 2027",
      phase: "Phase 4 • Logistics & Prep",
      title: "Proceedings & Venue Preparation",
      desc: "Finalize conference proceedings, logistics, hospitality, volunteers, exhibitors, and publicity.",
      tag: "LOGISTICS",
      tagColor: "bg-slate-100 text-slate-700 border-slate-200"
    },
    {
      step: "09",
      month: "15–17 July 2027",
      phase: "Phase 5 • Main Event",
      title: "IEEE ICAINGCIT 2027 Conference",
      desc: "Conduct the IEEE ICAINGCIT 2027 Conference (Thursday – Saturday). Keynotes, parallel technical tracks, and workshops.",
      tag: "MAIN EVENT DATES",
      tagColor: "bg-amber-400 text-slate-950 border-amber-500 font-black shadow-md",
      isHero: true
    },
    {
      step: "10",
      month: "August 2027",
      phase: "Phase 6 • IEEE Reporting",
      title: "IEEE Xplore Submission & Post-Event Report",
      desc: "Submit final proceedings to IEEE (subject to IEEE requirements), prepare conference report, financial statement, and appreciation certificates.",
      tag: "POST-CONFERENCE",
      tagColor: "bg-slate-100 text-slate-700 border-slate-200"
    }
  ];

  return (
    <section id="dates" className="py-20 px-4 sm:px-6 relative z-10 bg-slate-50/60 border-t border-slate-200/80">
      
      {/* Dynamic Background Ambient Blur */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-br from-blue-500/10 via-amber-500/10 to-purple-500/10 blur-3xl pointer-events-none -z-10 animate-pulse" />

      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Main Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-black tracking-widest uppercase shadow-sm animate-symphony-badge">
            <svg className="w-4 h-4 text-blue-600 animate-spin" style={{ animationDuration: '8s' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            OFFICIAL CONFERENCE ROADMAP
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight uppercase animate-symphony-title">
            Conference <span className="text-blue-600 glow-title">Timeline</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium animate-symphony-text">
            IEEE International Conference on Artificial Intelligence and Next-Generation Computing &amp; Information Technologies (IEEE ICAINGCIT 2027)
          </p>

          {/* Animated Hero Date Banner */}
          <div className="pt-2 animate-symphony-cta">
            <span className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white font-mono font-bold text-xs sm:text-sm shadow-xl border border-slate-800 transition-all duration-300 hover:scale-105">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
              </span>
              <span>Conference Dates: <strong className="text-amber-300 font-extrabold">15–17 July 2027</strong> (Thursday–Saturday)</span>
            </span>
          </div>
        </div>

        {/* View Toggle Tabs */}
        <div className="flex justify-center">
          <div className="flex flex-wrap items-center justify-center gap-2 bg-white p-2 rounded-full border border-slate-200 shadow-sm">
            <button
              onClick={() => setActiveTab('roadmap')}
              className={`px-5 py-2.5 rounded-full text-xs font-black tracking-wider uppercase transition-all duration-300 ${
                activeTab === 'roadmap'
                  ? 'bg-blue-600 text-white shadow-md scale-105'
                  : 'bg-transparent text-slate-700 hover:text-blue-600'
              }`}
            >
              Full Roadmap (10 Phases)
            </button>
            <button
              onClick={() => setActiveTab('milestones')}
              className={`px-5 py-2.5 rounded-full text-xs font-black tracking-wider uppercase transition-all duration-300 ${
                activeTab === 'milestones'
                  ? 'bg-blue-600 text-white shadow-md scale-105'
                  : 'bg-transparent text-slate-700 hover:text-blue-600'
              }`}
            >
              Major Milestones Summary
            </button>
          </div>
        </div>

        {/* Major Milestones Summary Grid View */}
        {activeTab === 'milestones' && (
          <div className="space-y-6 transition-all duration-500">
            <div className="text-center">
              <h3 className="text-lg font-black text-slate-900 uppercase tracking-wide">
                Key Conference Milestones
              </h3>
              <p className="text-xs text-slate-500 font-medium mt-1">
                Summary of key deadlines and operational milestones for IEEE ICAINGCIT 2027.
              </p>
            </div>

            <div className="flex flex-wrap justify-center items-stretch gap-6">
              {milestones.map((m, idx) => (
                <div
                  key={idx}
                  className={`w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)] max-w-sm p-6 rounded-[28px] bg-white border transition-all duration-500 shadow-md hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between group ${
                    m.active
                      ? 'border-amber-400 ring-2 ring-amber-400/30 animate-timeline-glow'
                      : m.highlight
                      ? 'border-blue-400 ring-2 ring-blue-400/20'
                      : 'border-slate-200/90 hover:border-blue-400'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-200 text-blue-700 font-mono font-black text-sm flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                        {m.icon}
                      </span>
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider border ${
                        m.active ? 'bg-amber-400 text-slate-950 border-amber-500 font-black shadow-sm' : 'bg-slate-100 text-slate-700 border-slate-200'
                      }`}>
                        {m.status}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-base font-black text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                        {m.title}
                      </h4>
                      <p className="text-xs font-mono font-bold text-amber-600 mt-1">
                        {m.date}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 mt-4 border-t border-slate-100 text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest flex items-center justify-between">
                    <span>{m.phase}</span>
                    <span className="text-blue-500 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Full Roadmap Vertical Curved Dotted Timeline View */}
        {activeTab === 'roadmap' && (
          <div className="relative max-w-4xl mx-auto space-y-6 transition-all duration-500">
            
            {/* Animated Winding Curved Dotted Line SVG (Desktop & Tablet) */}
            <svg className="absolute left-0 top-6 bottom-6 w-full h-[calc(100%-3rem)] pointer-events-none hidden sm:block z-10 overflow-visible" preserveAspectRatio="none" viewBox="0 0 1000 1000">
              <defs>
                <linearGradient id="curved-dotted-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#2563eb" />
                  <stop offset="35%" stopColor="#3b82f6" />
                  <stop offset="70%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#9333ea" />
                </linearGradient>
              </defs>
              <path
                d="M 500,10 C 570,110 430,190 500,290 C 570,390 430,490 500,590 C 570,690 430,790 500,890 C 540,940 460,980 500,990"
                fill="none"
                stroke="url(#curved-dotted-gradient)"
                strokeWidth="4"
                strokeDasharray="9 9"
                className="animate-dash-flow opacity-80"
              />
            </svg>

            {/* Mobile Vertical Dotted Line */}
            <div className="absolute left-4 top-4 bottom-4 w-0.5 border-l-2 border-dashed border-blue-400/80 sm:hidden z-10" />

            <div className="space-y-8 relative z-20">
              {fullTimeline.map((item, idx) => (
                <div
                  key={idx}
                  className={`relative flex flex-col sm:flex-row items-center gap-6 group ${
                    idx % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  }`}
                >
                  
                  {/* Center Node Bullet with Animated Spinning Dotted Ring */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-4 border-blue-600 shadow-xl hidden sm:flex items-center justify-center z-30 group-hover:scale-125 group-hover:border-amber-400 transition-all duration-300">
                    <div className="w-3.5 h-3.5 rounded-full bg-blue-600 group-hover:bg-amber-400 transition-colors animate-pulse" />
                    <span className="absolute -inset-1.5 rounded-full border-2 border-dashed border-blue-400/60 animate-spin pointer-events-none opacity-60 group-hover:opacity-100" style={{ animationDuration: '6s' }} />
                  </div>

                  {/* Date Badge Side Column */}
                  <div className={`w-full sm:w-1/2 text-left ${idx % 2 === 0 ? 'sm:text-right sm:pr-10' : 'sm:text-left sm:pl-10'}`}>
                    <div className="inline-block px-4 py-1.5 rounded-full bg-white border border-slate-200 text-blue-700 font-mono font-black text-xs sm:text-sm shadow-sm uppercase tracking-wider group-hover:border-blue-400 group-hover:shadow-md transition-all duration-300">
                      📅 {item.month}
                    </div>
                  </div>

                  {/* Main Card Side Column with Hover Lift */}
                  <div className={`w-full sm:w-1/2 ${idx % 2 === 0 ? 'sm:pl-10' : 'sm:pr-10'}`}>
                    <div className={`p-6 rounded-[28px] bg-white border transition-all duration-500 shadow-md hover:-translate-y-2 hover:shadow-2xl hover:border-blue-400 relative overflow-hidden space-y-3 ${
                      item.isHero
                        ? 'border-amber-400 ring-2 ring-amber-400/30 bg-gradient-to-br from-white via-amber-50/20 to-white animate-timeline-glow'
                        : 'border-slate-200/90'
                    }`}>
                      {/* Top Row: Phase + Tag */}
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                          {item.phase}
                        </span>
                        <span className={`px-3 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider border ${item.tagColor}`}>
                          {item.tag}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-black text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs text-slate-600 leading-relaxed font-medium">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                </div>
              ))}
            </div>

          </div>
        )}

      </div>
    </section>
  );
};

export default ImportantDates;
