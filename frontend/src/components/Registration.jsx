import React, { useState } from 'react';

const API_BASE = import.meta.env.VITE_API_URL || '';

const Registration = () => {
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState({ type: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

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
        message: `✓ Registration received! ID: ${data.regId || "REG-XXXX"}. Check your email for next steps.`
      });
      form.reset();
    } catch (err) {
      if (API_BASE === "") {
        setFeedback({
          type: 'success',
          message: "✓ Registration recorded! (Demo mode) — ID: REG-2027-DEMO. Connect backend to enable payments."
        });
        form.reset();
      } else {
        setFeedback({ type: 'error', message: "Registration failed. Please try again or contact us." });
      }
    } finally {
      setLoading(false);
      setTimeout(() => setFeedback({ type: '', message: '' }), 6000);
    }
  };

  const regCards = [
    {
      type: "Student Author",
      price: "₹3,500",
      note: "Early Bird (before Jan 31) · Regular ₹4,500",
      features: ["1 paper presentation", "Conference kit & proceedings", "Lunch & refreshments (3 days)", "Certificate of presentation"],
      featured: false,
    },
    {
      type: "Faculty / Researcher",
      price: "₹6,000",
      note: "Early Bird (before Jan 31) · Regular ₹7,500",
      features: ["1 paper presentation", "Conference kit & proceedings", "Lunch & refreshments (3 days)", "Workshop access (1 pre-conference)", "Certificate of presentation", "Best paper nomination"],
      featured: true,
    },
    {
      type: "Industry Professional",
      price: "₹8,000",
      note: "Early Bird (before Jan 31) · Regular ₹10,000",
      features: ["1 paper presentation", "Conference kit & proceedings", "All meals (3 days)", "All pre-conference workshops", "Networking dinner (Day 1)", "Exhibition floor access"],
      featured: false,
    },
    {
      type: "International Author",
      price: "$120",
      note: "Early Bird (before Jan 31) · Regular $150",
      features: ["1 paper presentation (virtual option)", "Digital proceedings", "Virtual networking session", "Recording of all sessions"],
      featured: false,
    },
  ];

  return (
    <section id="registration" className="py-24 px-4 relative z-10 bg-obsidian-950/80 border-t border-white/5 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <span className="text-xs font-extrabold tracking-widest text-purple-400 uppercase bg-purple-500/10 px-3.5 py-1.5 rounded-full border border-purple-500/20 shadow-[0_0_15px_rgba(157,78,221,0.15)]">
            ATTEND ICENGCIT 2027
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mt-4 mb-4">
            Conference <span className="text-cyan-400 glow-subtle">Registration</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Secure your spot at one of the most anticipated engineering conferences of 2027. Early bird discounts available until January 31, 2027.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 reveal">
          {regCards.map((card, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-3xl backdrop-blur-2xl transition-all duration-300 flex flex-col justify-between relative group overflow-hidden ${
                card.featured
                  ? 'bg-gradient-to-b from-purple-900/40 via-obsidian-900 to-obsidian-950 border-2 border-cyan-400 shadow-[0_0_40px_rgba(0,245,212,0.35)] lg:-translate-y-2'
                  : 'bg-white/[0.02] border border-white/10 hover:border-purple-500/50 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(157,78,221,0.2)]'
              }`}
            >
              {card.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-cyan-400 text-obsidian-950 font-black text-[10px] uppercase tracking-wider shadow-[0_0_15px_rgba(0,245,212,0.8)] z-10">
                  POPULAR CHOICE
                </div>
              )}

              {/* Glass shine hover sweep */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

              <div>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">{card.type}</h3>
                <div className="text-3xl font-black text-white font-mono mb-1">{card.price}</div>
                <div className="text-[10px] text-gray-400 mb-6 leading-tight">{card.note}</div>

                <ul className="space-y-2.5 mb-8">
                  {card.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2 text-xs text-gray-300">
                      <svg className="w-3.5 h-3.5 text-cyan-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/>
                      </svg>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#registration-form"
                className={`w-full py-3 rounded-xl text-center text-xs font-extrabold uppercase tracking-wider transition-all shadow-lg ${
                  card.featured
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white hover:shadow-[0_0_25px_rgba(0,245,212,0.6)]'
                    : 'bg-white/5 border border-white/10 hover:bg-white/10 text-white hover:border-purple-400/50'
                }`}
              >
                REGISTER NOW
              </a>
            </div>
          ))}
        </div>

        {/* Form Container */}
        <div id="registration-form" className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-2xl shadow-2xl max-w-3xl mx-auto reveal">
          <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-2">
            Complete Your Registration
          </h3>
          <p className="text-xs text-gray-400 mb-6">
            You'll receive a confirmation email with payment instructions.
          </p>

          <form id="registrationForm" noValidate onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="r-name" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                  Full Name <span className="text-purple-400">*</span>
                </label>
                <input
                  type="text"
                  id="r-name"
                  name="name"
                  placeholder="Your full name"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                />
              </div>

              <div>
                <label htmlFor="r-email" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                  Email Address <span className="text-purple-400">*</span>
                </label>
                <input
                  type="email"
                  id="r-email"
                  name="email"
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="r-phone" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                  Phone / WhatsApp <span className="text-purple-400">*</span>
                </label>
                <input
                  type="tel"
                  id="r-phone"
                  name="phone"
                  placeholder="+91 XXXXX XXXXX"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                />
              </div>

              <div>
                <label htmlFor="r-institution" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                  Institution / Organisation <span className="text-purple-400">*</span>
                </label>
                <input
                  type="text"
                  id="r-institution"
                  name="institution"
                  placeholder="Institution name"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="r-category" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                  Registration Category <span className="text-purple-400">*</span>
                </label>
                <select
                  id="r-category"
                  name="category"
                  required
                  defaultValue=""
                  className="w-full px-4 py-3 rounded-xl bg-obsidian-900 border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                >
                  <option value="" disabled>Select category</option>
                  <option>Student Author</option>
                  <option>Faculty / Researcher</option>
                  <option>Industry Professional</option>
                  <option>International Author</option>
                  <option>Attendee Only</option>
                </select>
              </div>

              <div>
                <label htmlFor="r-paper" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                  Paper ID (if applicable)
                </label>
                <input
                  type="text"
                  id="r-paper"
                  name="paperId"
                  placeholder="e.g. ICENG-2027-XXXX"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                />
              </div>
            </div>

            <div>
              <label htmlFor="r-dietary" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                Dietary Preferences / Accessibility Needs
              </label>
              <input
                type="text"
                id="r-dietary"
                name="dietary"
                placeholder="e.g. Vegetarian, wheelchair access, etc."
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-extrabold text-xs uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(157,78,221,0.4)] hover:shadow-[0_0_30px_rgba(0,245,212,0.5)] disabled:opacity-50"
            >
              {loading ? 'PROCESSING REGISTRATION...' : 'COMPLETE REGISTRATION'}
            </button>
          </form>

          {feedback.message && (
            <div
              className={`mt-4 p-4 rounded-xl text-xs font-bold ${
                feedback.type === 'success'
                  ? 'bg-cyan-500/20 border border-cyan-400 text-cyan-300'
                  : 'bg-red-500/20 border border-red-400 text-red-300'
              }`}
            >
              {feedback.message}
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default Registration;
