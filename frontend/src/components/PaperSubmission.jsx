import React, { useState } from 'react';

const API_BASE = import.meta.env.VITE_API_URL || '';

const PaperSubmission = () => {
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState({ type: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    if (!payload.email || !payload.author || !payload.abstract) {
      setFeedback({ type: 'error', message: 'Please fill in all required fields.' });
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`${API_BASE}/api/submit-paper`, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Server error");
      const data = await res.json();

      setFeedback({
        type: 'success',
        message: `✓ Paper submitted! Your ID: ${data.paperId || "ICAING-XXXX"}. Confirmation sent to ${payload.email}.`
      });
      form.reset();
    } catch (err) {
      if (API_BASE === "") {
        setFeedback({
          type: 'success',
          message: "✓ Paper received! (Demo mode) — Your paper ID: ICAING-2027-DEMO. Connect backend to enable real tracking."
        });
        form.reset();
      } else {
        setFeedback({ type: 'error', message: "Submission failed. Please check your connection and try again." });
      }
    } finally {
      setLoading(false);
      setTimeout(() => setFeedback({ type: '', message: '' }), 6000);
    }
  };

  const steps = [
    { num: "01", title: "Prepare Manuscript", desc: "Use IEEE conference template (6–8 pages). Double-blind format — omit author names." },
    { num: "02", title: "Submit via Portal", desc: "Fill in author details, paper title, abstract, track, and upload your PDF." },
    { num: "03", title: "Peer Review", desc: "Reviewed by 3 domain experts. Results returned within 45 days." },
    { num: "04", title: "Camera-Ready & Register", desc: "Final revised PDF due by Jan 15, 2027. At least one author must register." }
  ];

  return (
    <section id="submission" className="py-24 px-4 relative z-10 bg-[#060b19]/90 border-t border-cyan-500/15 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Submission Guidelines & Connected Steps */}
          <div className="lg:col-span-5 space-y-8 reveal">
            <div>
              <span className="text-xs font-extrabold tracking-widest text-cyan-400 uppercase bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/30 shadow-[0_0_15px_rgba(0,245,212,0.15)]">
                CALL FOR PAPERS
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mt-4 mb-4">
                Paper <span className="text-cyan-400 glow-subtle">Submission</span>
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                We invite original, unpublished research contributions. All submissions undergo rigorous double-blind peer review.
              </p>
            </div>

            <div className="space-y-4 relative">
              {/* Connected vertical line */}
              <div className="absolute top-6 bottom-6 left-5 w-[2px] bg-cyan-500/40 pointer-events-none" />

              {steps.map((step, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-[#0a1128] border border-cyan-500/20 flex items-start gap-4 hover:border-cyan-400/60 transition-all group relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/50 flex items-center justify-center font-mono font-black text-cyan-400 text-sm shrink-0 shadow-[0_0_15px_rgba(0,245,212,0.3)] group-hover:scale-110 transition-transform">
                    {step.num}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">{step.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Submission Form */}
          <div className="lg:col-span-7 reveal">
            <div className="p-8 rounded-3xl bg-[#0a1128] border border-cyan-500/20 backdrop-blur-2xl shadow-2xl relative hover:border-cyan-400/40 transition-colors">
              <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-2">
                Submit Your Paper
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                All fields marked <span className="text-cyan-400 font-bold">*</span> are required.
              </p>

              <form id="paperForm" noValidate onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="p-name" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Corresponding Author <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="p-name"
                      name="author"
                      placeholder="Full name"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[#0e1738] border border-cyan-500/20 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="p-email" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Email Address <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="p-email"
                      name="email"
                      placeholder="author@institution.edu"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[#0e1738] border border-cyan-500/20 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="p-title" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Paper Title <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="p-title"
                    name="title"
                    placeholder="Full paper title"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#0e1738] border border-cyan-500/20 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="p-track" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Research Track <span className="text-cyan-400">*</span>
                    </label>
                    <select
                      id="p-track"
                      name="track"
                      required
                      defaultValue=""
                      className="w-full px-4 py-3 rounded-xl bg-[#0e1738] border border-cyan-500/20 text-white text-xs focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    >
                      <option value="" disabled>Select track</option>
                      <option>Artificial Intelligence &amp; ML</option>
                      <option>Cloud &amp; Edge Computing</option>
                      <option>Cybersecurity</option>
                      <option>IoT &amp; Embedded Systems</option>
                      <option>Data Science &amp; Analytics</option>
                      <option>Wireless &amp; 5G Networks</option>
                      <option>VLSI Design</option>
                      <option>Robotics &amp; Automation</option>
                      <option>Blockchain Technology</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="p-coauthors" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Co-Author(s)
                    </label>
                    <input
                      type="text"
                      id="p-coauthors"
                      name="coauthors"
                      placeholder="Name(s), separated by comma"
                      className="w-full px-4 py-3 rounded-xl bg-[#0e1738] border border-cyan-500/20 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="p-abstract" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Abstract <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="p-abstract"
                    name="abstract"
                    rows="4"
                    placeholder="Paste your 200–300 word abstract here..."
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#0e1738] border border-cyan-500/20 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="p-file" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Upload Paper (PDF) <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="file"
                    id="p-file"
                    name="file"
                    accept=".pdf"
                    required
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0e1738] border border-cyan-500/20 text-slate-300 text-xs file:mr-4 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-bold file:bg-blue-600 file:text-white hover:file:bg-blue-500 cursor-pointer"
                  />
                  <p className="text-[10px] text-slate-400 mt-1 font-mono">
                    Max 10 MB · IEEE format · Double-blind · 6–8 pages
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-black text-xs uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(0,245,212,0.4)] hover:shadow-[0_0_30px_rgba(0,245,212,0.7)] disabled:opacity-50"
                >
                  {loading ? 'SUBMITTING PAPER...' : 'SUBMIT PAPER'}
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

export default PaperSubmission;
