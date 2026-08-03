import React, { useState } from 'react';
import ContactCanvas from './ContactCanvas';

const API_BASE = import.meta.env.VITE_API_URL || '';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState({ type: '', message: '' });

  const handleSubmit = async (e) => {
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
      const data = await res.json();

      setFeedback({ type: 'success', message: data.message || "Message sent! We'll get back to you shortly." });
      form.reset();
    } catch (err) {
      if (API_BASE === "") {
        setFeedback({ type: 'success', message: "✓ Message received! (Demo mode — connect backend to enable real submission)" });
        form.reset();
      } else {
        setFeedback({ type: 'error', message: "Failed to send. Please try again or email us directly." });
      }
    } finally {
      setLoading(false);
      setTimeout(() => setFeedback({ type: '', message: '' }), 6000);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative z-10 bg-obsidian-950/70 border-t border-white/5 overflow-hidden">
      {/* Interactive Constellation Node Canvas */}
      <ContactCanvas />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-8 reveal">
            <div>
              <span className="text-xs font-extrabold tracking-widest text-cyan-400 uppercase bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/20 shadow-[0_0_15px_rgba(0,245,212,0.15)]">
                GET IN TOUCH
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mt-4 mb-4">
                Contact <span className="text-purple-400 glow-subtle">Us</span>
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Have questions about submissions, registration, or the venue? We're here to help.
              </p>
            </div>

            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 flex items-center gap-4 hover:border-cyan-400/50 hover:bg-cyan-500/5 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 border border-purple-500/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-gray-400 uppercase tracking-wider">Email</h4>
                  <a href="mailto:icengcit2027@cit.edu.in" className="text-sm font-bold text-white hover:text-cyan-300 transition-colors">
                    icengcit2027@cit.edu.in
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 flex items-center gap-4 hover:border-cyan-400/50 hover:bg-cyan-500/5 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-gray-400 uppercase tracking-wider">Phone</h4>
                  <a href="tel:+914222572177" className="text-sm font-bold text-white hover:text-cyan-300 transition-colors">
                    +91 422 257 2177
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 flex items-center gap-4 hover:border-cyan-400/50 hover:bg-cyan-500/5 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 border border-purple-500/30 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-gray-400 uppercase tracking-wider">Address</h4>
                  <p className="text-xs text-gray-300 leading-relaxed font-mono">
                    Department of IT, Chennai Institute of Technology, Chennai – 641 014, Tamil Nadu, India.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 reveal">
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-2xl shadow-2xl hover:border-cyan-400/30 transition-colors">
              <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-2">
                Send a Message
              </h3>
              <p className="text-xs text-gray-400 mb-6">
                We typically respond within 1–2 business days.
              </p>

              <form id="contactForm" noValidate onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="c-name" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                      Your Name <span className="text-purple-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="c-name"
                      name="name"
                      placeholder="Full name"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="c-email" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                      Email Address <span className="text-purple-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="c-email"
                      name="email"
                      placeholder="your@email.com"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="c-subject" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                    Subject <span className="text-purple-400">*</span>
                  </label>
                  <select
                    id="c-subject"
                    name="subject"
                    required
                    defaultValue=""
                    className="w-full px-4 py-3 rounded-xl bg-obsidian-900 border border-white/10 text-white text-xs focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  >
                    <option value="" disabled>Select topic</option>
                    <option>Paper Submission Enquiry</option>
                    <option>Registration Query</option>
                    <option>Sponsorship / Exhibition</option>
                    <option>Keynote / Speaking Invitation</option>
                    <option>Technical Support</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="c-message" className="block text-xs font-bold uppercase tracking-wider text-gray-300 mb-2">
                    Message <span className="text-purple-400">*</span>
                  </label>
                  <textarea
                    id="c-message"
                    name="message"
                    rows="4"
                    placeholder="How can we help you?"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-extrabold text-xs uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(157,78,221,0.4)] hover:shadow-[0_0_30px_rgba(0,245,212,0.5)] disabled:opacity-50"
                >
                  {loading ? 'SENDING MESSAGE...' : 'SEND MESSAGE'}
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

        </div>
      </div>
    </section>
  );
};

export default Contact;
