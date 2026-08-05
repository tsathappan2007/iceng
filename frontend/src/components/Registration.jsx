import React, { useState } from 'react';

const API_BASE = import.meta.env.VITE_API_URL || '';

const Registration = () => {
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState({ type: '', message: '' });

  const tiers = [
    {
      category: "Indian Authors",
      sub: "Academic / Research Scholars",
      early: "₹ 7,500",
      regular: "₹ 9,000",
      badge: "POPULAR",
      features: [
        "Presentation & Proceeding Publication",
        "Conference Kit & Certificate",
        "Lunch & Refreshments (3 Days)",
        "Scopus / Web of Sci Indexing",
      ]
    },
    {
      category: "Indian Industry",
      sub: "Corporate & Industry Delegates",
      early: "₹ 10,000",
      regular: "₹ 12,000",
      badge: "INDUSTRY",
      features: [
        "All Author Benefits Included",
        "Networking Dinner Access",
        "Industry Showcase Slot",
        "Exhibitor Pass",
      ]
    },
    {
      category: "Foreign Authors",
      sub: "International Delegates",
      early: "$ 250",
      regular: "$ 300",
      badge: "INTERNATIONAL",
      features: [
        "Presentation (In-Person / Online)",
        "IEEE Xplore / Scopus Publication",
        "Guided Campus Tour",
        "Certificate of Presentation",
      ]
    },
    {
      category: "Attendees Only",
      sub: "Non-presenting Participants",
      early: "₹ 3,000",
      regular: "₹ 4,000",
      badge: "LISTENER",
      features: [
        "Access to All Keynote Sessions",
        "Conference Kit & Certificate",
        "Lunch & Refreshments",
        "Networking Opportunities",
      ]
    }
  ];

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    if (!payload.email || !payload.name) {
      setFeedback({ type: 'error', message: 'Please fill in all required fields.' });
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`${API_BASE}/api/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Server error");
      const data = await res.json();

      setFeedback({
        type: 'success',
        message: `✓ Registration submitted! Registration ID: ${data.regId || "REG-XXXX"}. Payment instructions sent to ${payload.email}.`
      });
      form.reset();
    } catch (err) {
      if (API_BASE === "") {
        setFeedback({
          type: 'success',
          message: "✓ Registration details recorded! (Demo mode) — Connect backend API for real payment gateway."
        });
        form.reset();
      } else {
        setFeedback({ type: 'error', message: "Registration failed. Please check your connection and try again." });
      }
    } finally {
      setLoading(false);
      setTimeout(() => setFeedback({ type: '', message: '' }), 6000);
    }
  };

  return (
    <section id="registration" className="py-24 px-4 relative z-10 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <span className="text-xs font-extrabold tracking-widest text-blue-600 uppercase bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
            PARTICIPATION & FEES
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tight mt-4 mb-4">
            Registration <span className="text-blue-600 glow-title">Rates</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Early Bird discount closes on <strong className="text-blue-600">January 31, 2027</strong>. At least one author must register per accepted paper.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 reveal">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-3xl flex flex-col justify-between transition-all duration-300 relative group overflow-hidden ${
                idx === 0
                  ? 'bg-gradient-to-r from-blue-50/90 via-slate-50 to-indigo-50/90 border-2 border-blue-600 shadow-md scale-105'
                  : 'bg-gradient-to-r from-blue-50/90 via-slate-50 to-indigo-50/90 border border-blue-200/80 hover:border-blue-400 hover:-translate-y-1 shadow-sm'
              }`}
            >
              {/* Top Accent Bar */}
              <div className={`absolute top-0 left-0 right-0 h-[3px] ${
                idx === 0 ? 'bg-blue-600' : 'bg-amber-400 group-hover:bg-blue-600'
              }`} />

              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-extrabold tracking-wider px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-800 border border-blue-200 uppercase">
                    {tier.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                  {tier.category}
                </h3>
                <p className="text-[11px] text-slate-500 mb-6">
                  {tier.sub}
                </p>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 mb-6">
                  <div className="text-[10px] uppercase font-bold text-slate-500 mb-1">EARLY BIRD (BY JAN 31)</div>
                  <div className="text-2xl font-black text-blue-600 font-mono">{tier.early}</div>
                  <div className="text-[10px] text-slate-500 mt-2">Regular: {tier.regular}</div>
                </div>

                <ul className="space-y-2.5 text-xs text-slate-700 mb-6">
                  {tier.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-blue-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"/>
                      </svg>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#regForm"
                className={`w-full py-3 rounded-xl font-extrabold text-xs uppercase tracking-wider text-center transition-all ${
                  idx === 0
                    ? 'bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-md'
                    : 'bg-blue-600 hover:bg-blue-700 text-white shadow-md'
                }`}
              >
                SELECT TIER
              </a>
            </div>
          ))}
        </div>

        {/* Registration Form */}
        <div id="regForm" className="max-w-3xl mx-auto reveal">
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-md">
            <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wider mb-2 text-center">
              Delegate Registration Form
            </h3>
            <p className="text-xs text-slate-600 mb-6 text-center">
              Complete your details to generate your official registration invoice.
            </p>

            <form noValidate onSubmit={handleRegister} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="r-name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Full Name <span className="text-blue-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="r-name"
                    name="name"
                    placeholder="Prof. / Dr. / Mr. / Ms."
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all shadow-sm"
                  />
                </div>

                <div>
                  <label htmlFor="r-email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Email Address <span className="text-blue-600">*</span>
                  </label>
                  <input
                    type="email"
                    id="r-email"
                    name="email"
                    placeholder="delegate@institution.edu"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all shadow-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="r-org" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Institution / Company
                  </label>
                  <input
                    type="text"
                    id="r-org"
                    name="org"
                    placeholder="University or Company name"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all shadow-sm"
                  />
                </div>

                <div>
                  <label htmlFor="r-category" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Registration Category <span className="text-blue-600">*</span>
                  </label>
                  <select
                    id="r-category"
                    name="category"
                    required
                    defaultValue="Indian Authors"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all shadow-sm"
                  >
                    <option value="Indian Authors">Indian Authors (Academic)</option>
                    <option value="Indian Industry">Indian Industry Delegates</option>
                    <option value="Foreign Authors">Foreign Authors ($ USD)</option>
                    <option value="Attendees Only">Attendees Only</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="r-paperid" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Paper ID (If presenting author)
                </label>
                <input
                  type="text"
                  id="r-paperid"
                  name="paperId"
                  placeholder="e.g. ICAING-2027-104"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all shadow-sm"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs uppercase tracking-widest transition-all shadow-md disabled:opacity-50 mt-2"
              >
                {loading ? 'PROCESSING REGISTRATION...' : 'PROCEED TO REGISTRATION'}
              </button>
            </form>

            {feedback.message && (
              <div
                className={`mt-4 p-4 rounded-xl text-xs font-bold ${
                  feedback.type === 'success'
                    ? 'bg-blue-50 border border-blue-200 text-blue-900'
                    : 'bg-red-50 border border-red-200 text-red-800'
                }`}
              >
                {feedback.message}
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Registration;
