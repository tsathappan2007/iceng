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
    <section id="contact" className="py-24 px-4 relative z-10 bg-[#060b19]/90 border-t border-cyan-500/15 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[400px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <span className="text-xs font-extrabold tracking-widest text-cyan-400 uppercase bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/30 shadow-[0_0_15px_rgba(0,245,212,0.15)]">
            CONFERENCE DESK
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mt-4 mb-4">
            Contact <span className="text-cyan-400 glow-subtle">Us</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Have questions about paper submission, sponsorship, or registration? Reach out to the organizing team.
          </p>
        </div>

        {/* Contact Info & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start reveal">
          
          {/* Contact Details Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card */}
            <div className="p-6 rounded-3xl bg-[#0a1128] border border-cyan-500/20 backdrop-blur-xl flex items-start gap-4 hover:border-cyan-400/50 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-1">Email Enquiries</h4>
                <a href="mailto:icaingcit2027@cit.edu.in" className="text-sm font-bold text-white hover:text-cyan-300 transition-colors font-mono">
                  icaingcit2027@cit.edu.in
                </a>
                <p className="text-[11px] text-slate-400 mt-1">Response within 24 hours</p>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-3xl bg-[#0a1128] border border-cyan-500/20 backdrop-blur-xl flex items-start gap-4 hover:border-cyan-400/50 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              </div>
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-1">Phone Contact</h4>
                <a href="tel:+914222572177" className="text-sm font-bold text-white hover:text-cyan-300 transition-colors font-mono block">
                  +91 422 257 2177
                </a>
                <p className="text-[11px] text-slate-400 mt-1">Department of IT, CIT (Mon–Fri 9am–5pm IST)</p>
              </div>
            </div>

            {/* Venue Address Card */}
            <div className="p-6 rounded-3xl bg-[#0a1128] border border-cyan-500/20 backdrop-blur-xl flex items-start gap-4 hover:border-cyan-400/50 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-1">Conference Venue</h4>
                <p className="text-sm font-bold text-white leading-relaxed">
                  Department of Information Technology,<br />
                  Chennai Institute of Technology,<br />
                  Sarathy Nagar, Kundrathur, Chennai – 600069, Tamil Nadu, India.
                </p>
              </div>
            </div>

          </div>

          {/* Quick Message Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-[#0a1128] border border-cyan-500/20 backdrop-blur-2xl shadow-2xl">
              <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-2">
                Send a Message
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill in the form below and our team will get back to you.
              </p>

              <form noValidate onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="c-name" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="c-name"
                      name="name"
                      placeholder="Full Name"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[#0e1738] border border-cyan-500/20 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="c-email" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Your Email <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="c-email"
                      name="email"
                      placeholder="email@example.com"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[#0e1738] border border-cyan-500/20 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="c-subject" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="c-subject"
                    name="subject"
                    placeholder="e.g., Paper Submission Query / Sponsorship"
                    className="w-full px-4 py-3 rounded-xl bg-[#0e1738] border border-cyan-500/20 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="c-message" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="c-message"
                    name="message"
                    rows="4"
                    placeholder="Type your message here..."
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#0e1738] border border-cyan-500/20 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-black text-xs uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(0,245,212,0.4)] hover:shadow-[0_0_30px_rgba(0,245,212,0.7)] disabled:opacity-50"
                >
                  {loading ? 'SENDING MESSAGE...' : 'SEND MESSAGE'}
                </button>
              </form>

              {feedback.message && (
                <div
                  className={`mt-4 p-4 rounded-xl text-xs font-bold ${
                    feedback.type === 'success'
                      ? 'bg-cyan-400/20 border border-cyan-400 text-cyan-300'
                      : 'bg-red-500/20 border border-red-400 text-red-300'
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
