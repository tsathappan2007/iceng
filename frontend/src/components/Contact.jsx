import React, { useState } from 'react';

const API_BASE = import.meta.env.VITE_API_URL || '';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState({ type: '', message: '' });

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    if (!payload.email || !payload.name || !payload.message) {
      setFeedback({ type: 'error', message: 'Please fill in all required fields.' });
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Server error");

      setFeedback({
        type: 'success',
        message: `✓ Message sent! Thank you ${payload.name}. The organizing committee will get back to you shortly.`
      });
      form.reset();
    } catch (err) {
      if (API_BASE === "") {
        setFeedback({
          type: 'success',
          message: "✓ Message received! (Demo mode) — Connect backend API to receive real email inquiries."
        });
        form.reset();
      } else {
        setFeedback({ type: 'error', message: "Failed to send message. Please try again later." });
      }
    } finally {
      setLoading(false);
      setTimeout(() => setFeedback({ type: '', message: '' }), 6000);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 relative z-10 bg-slate-50/60 border-t border-slate-200/80">
      
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Main Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3">
            <span className="w-12 h-px bg-blue-300/80" />
            <span className="text-xs font-mono font-black tracking-widest text-blue-700 uppercase px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 shadow-sm">
              CONFERENCE DESK
            </span>
            <span className="w-12 h-px bg-blue-300/80" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight uppercase">
            CONTACT <span className="text-blue-600 glow-title">US</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Have questions about paper submission, sponsorship, or registration? Reach out to the organizing team.
          </p>
        </div>

        {/* Contact Info & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 3 Stacked Info Cards (Matching Image Soft Gradient & Border Style) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Card 1: EMAIL ENQUIRIES */}
            <div className="p-6 sm:p-7 rounded-[28px] bg-gradient-to-r from-blue-50/90 via-slate-50 to-indigo-50/90 border border-blue-200/80 text-slate-900 flex items-start gap-4 transition-all duration-300 hover:shadow-md group relative overflow-hidden shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-white border border-blue-200 text-blue-600 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <div className="space-y-1 min-w-0">
                <h4 className="text-xs font-mono font-black uppercase tracking-wider text-blue-700">
                  EMAIL ENQUIRIES
                </h4>
                <a
                  href="mailto:icaingcit2027@cit.edu.in"
                  className="text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors font-mono block truncate"
                >
                  icaingcit2027@cit.edu.in
                </a>
                <p className="text-[11px] text-slate-500 font-medium pt-0.5">
                  Response within 24 hours
                </p>
              </div>
            </div>

            {/* Card 2: PHONE CONTACT */}
            <div className="p-6 sm:p-7 rounded-[28px] bg-gradient-to-r from-blue-50/90 via-slate-50 to-indigo-50/90 border border-blue-200/80 text-slate-900 flex items-start gap-4 transition-all duration-300 hover:shadow-md group relative overflow-hidden shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-white border border-blue-200 text-blue-600 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-mono font-black uppercase tracking-wider text-blue-700">
                  PHONE CONTACT
                </h4>
                <a
                  href="tel:+914222572177"
                  className="text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors font-mono block"
                >
                  +91 422 257 2177
                </a>
                <p className="text-[11px] text-slate-500 font-medium pt-0.5">
                  Department of IT, CIT (Mon–Fri 9am–5pm IST)
                </p>
              </div>
            </div>

            {/* Card 3: CONFERENCE VENUE */}
            <div className="p-6 sm:p-7 rounded-[28px] bg-gradient-to-r from-blue-50/90 via-slate-50 to-indigo-50/90 border border-blue-200/80 text-slate-900 flex items-start gap-4 transition-all duration-300 hover:shadow-md group relative overflow-hidden shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-white border border-blue-200 text-blue-600 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-mono font-black uppercase tracking-wider text-blue-700">
                  CONFERENCE VENUE
                </h4>
                <p className="text-xs sm:text-sm font-bold text-slate-900 leading-relaxed pt-0.5">
                  Department of Information Technology,<br />
                  Chennai Institute of Technology,<br />
                  Sarathy Nagar, Kundrathur,<br />
                  Chennai – 600069, Tamil Nadu, India.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: SEND A MESSAGE Form Card */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-[36px] bg-gradient-to-r from-blue-50/90 via-slate-50 to-indigo-50/90 border border-blue-200/80 text-slate-900 shadow-sm relative overflow-hidden">
              
              {/* Top Form Header with Paper Plane Icon */}
              <div className="flex items-start gap-4 mb-8">
                <div className="w-14 h-14 rounded-full bg-white border border-blue-200 text-blue-600 flex items-center justify-center shrink-0 shadow-sm">
                  <svg className="w-6 h-6 transform -rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 uppercase tracking-tight">
                    SEND A MESSAGE
                  </h3>
                  <p className="text-xs text-slate-600 font-medium mt-1">
                    Fill in the form below and our team will get back to you.
                  </p>
                </div>
              </div>

              <form noValidate onSubmit={handleContactSubmit} className="space-y-5">
                
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Your Name Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="c-name" className="block text-[11px] font-mono font-black uppercase tracking-wider text-slate-800">
                      YOUR NAME <span className="text-blue-600">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="c-name"
                        name="name"
                        placeholder="Full Name"
                        required
                        className="w-full px-4 py-3 pl-10 rounded-2xl bg-white border border-blue-200/80 text-slate-900 placeholder-slate-400 text-xs font-semibold focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all shadow-sm"
                      />
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </span>
                    </div>
                  </div>

                  {/* Your Email Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="c-email" className="block text-[11px] font-mono font-black uppercase tracking-wider text-slate-800">
                      YOUR EMAIL <span className="text-blue-600">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="c-email"
                        name="email"
                        placeholder="email@example.com"
                        required
                        className="w-full px-4 py-3 pl-10 rounded-2xl bg-white border border-blue-200/80 text-slate-900 placeholder-slate-400 text-xs font-semibold focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all shadow-sm"
                      />
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </span>
                    </div>
                  </div>

                </div>

                {/* Subject Input */}
                <div className="space-y-1.5">
                  <label htmlFor="c-subject" className="block text-[11px] font-mono font-black uppercase tracking-wider text-slate-800">
                    SUBJECT
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="c-subject"
                      name="subject"
                      placeholder="e.g., Paper Submission Query / Sponsorship"
                      className="w-full px-4 py-3 pl-10 rounded-2xl bg-white border border-blue-200/80 text-slate-900 placeholder-slate-400 text-xs font-semibold focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all shadow-sm"
                    />
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                      </svg>
                    </span>
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="space-y-1.5">
                  <label htmlFor="c-message" className="block text-[11px] font-mono font-black uppercase tracking-wider text-slate-800">
                    MESSAGE <span className="text-blue-600">*</span>
                  </label>
                  <div className="relative">
                    <textarea
                      id="c-message"
                      name="message"
                      rows="4"
                      placeholder="Type your message here..."
                      required
                      className="w-full px-4 py-3 pl-10 rounded-2xl bg-white border border-blue-200/80 text-slate-900 placeholder-slate-400 text-xs font-semibold focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all shadow-sm"
                    />
                    <span className="absolute left-3.5 top-4 text-slate-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </span>
                  </div>
                </div>

                {/* Submit Pill Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                >
                  <svg className="w-4 h-4 transform -rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  <span>{loading ? 'SENDING MESSAGE...' : 'SEND MESSAGE'}</span>
                </button>

              </form>

              {feedback.message && (
                <div
                  className={`mt-5 p-4 rounded-2xl text-xs font-bold ${
                    feedback.type === 'success'
                      ? 'bg-white border border-blue-200 text-blue-900 shadow-sm'
                      : 'bg-red-50 border border-red-200 text-red-800 shadow-sm'
                  }`}
                >
                  {feedback.message}
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
