import React, { useState } from 'react';

const API_BASE = import.meta.env.VITE_API_URL || '';

const PaperSubmission = () => {
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState({ type: '', message: '' });
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type !== 'application/pdf') {
        setFeedback({ type: 'error', message: 'Only PDF files are permitted for manuscript submission.' });
        setSelectedFile(null);
        return;
      }
      if (file.size > 15 * 1024 * 1024) {
        setFeedback({ type: 'error', message: 'File size exceeds 15 MB limit.' });
        setSelectedFile(null);
        return;
      }
      setSelectedFile(file);
      setFeedback({ type: '', message: '' });
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    if (!selectedFile) {
      setFeedback({ type: 'error', message: 'Please attach your manuscript PDF file before submitting.' });
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`${API_BASE}/api/submit-paper`, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Submission failed");
      const data = await res.json();

      setFeedback({
        type: 'success',
        message: `✓ Paper submitted successfully! Tracking ID: ${data.paperId || 'ICAING-2027-XXX'}. Confirmation email sent.`
      });
      form.reset();
      setSelectedFile(null);
    } catch (err) {
      if (API_BASE === "") {
        setFeedback({
          type: 'success',
          message: `✓ Manuscript "${selectedFile.name}" received! (Demo mode) — Connect backend API for live tracking.`
        });
        form.reset();
        setSelectedFile(null);
      } else {
        setFeedback({ type: 'error', message: "Submission failed. Please verify your connection and try again." });
      }
    } finally {
      setLoading(false);
      setTimeout(() => setFeedback({ type: '', message: '' }), 6000);
    }
  };

  return (
    <section id="submission" className="py-24 px-4 relative z-10 bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <span className="text-xs font-extrabold tracking-widest text-blue-600 uppercase bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
            CALL FOR PAPERS
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tight mt-4 mb-4">
            Manuscript <span className="text-blue-600 glow-title">Submission</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Submit your original, unpublished research manuscripts formatted according to IEEE conference standards.
          </p>
        </div>

        {/* Guidelines & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start reveal">
          
          {/* Submission Guidelines Box */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-4 uppercase tracking-wide">
                Author Guidelines
              </h3>
              
              <ul className="space-y-3 text-xs text-slate-700">
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 font-bold flex items-center justify-center shrink-0 mt-0.5">1</span>
                  <span>Manuscripts must be written in English and adhere to the <strong>IEEE 2-column format</strong>.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 font-bold flex items-center justify-center shrink-0 mt-0.5">2</span>
                  <span>Maximum paper length is <strong>6 pages</strong> including figures, tables, and references.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 font-bold flex items-center justify-center shrink-0 mt-0.5">3</span>
                  <span>All submissions undergo double-blind peer review by international domain experts.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 font-bold flex items-center justify-center shrink-0 mt-0.5">4</span>
                  <span>Plagiarism limit is strictly <strong>&lt; 15%</strong> (Turnitin verified).</span>
                </li>
              </ul>

              <div className="mt-6 pt-6 border-t border-slate-200 flex flex-wrap items-center gap-3">
                <a
                  href="https://www.ieee.org/conferences/publishing/templates.html"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-white border border-slate-300 text-slate-900 hover:bg-slate-100 text-xs font-bold transition-all shadow-sm"
                >
                  IEEE MS WORD TEMPLATE
                </a>
                <a
                  href="https://www.overleaf.com/gallery/tagged/ieee-official"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-white border border-slate-300 text-slate-900 hover:bg-slate-100 text-xs font-bold transition-all shadow-sm"
                >
                  OVERLEAF LATEX
                </a>
              </div>
            </div>

            {/* Publication Indexing Card */}
            <div className="p-6 rounded-3xl bg-blue-50 border border-blue-200">
              <h4 className="text-xs font-black uppercase tracking-wider text-blue-900 mb-2">
                Publication Indexing
              </h4>
              <p className="text-xs text-blue-800 leading-relaxed">
                Accepted and presented papers will be submitted for inclusion into <strong>IEEE Xplore</strong> and indexed in <strong>Scopus</strong> and <strong>Web of Science (WoS)</strong>.
              </p>
            </div>
          </div>

          {/* Paper Submission Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-md">
              <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wider mb-2">
                Submit Manuscript
              </h3>
              <p className="text-xs text-slate-600 mb-6">
                Fill in author details and attach your paper PDF file.
              </p>

              <form noValidate onSubmit={handleFormSubmit} className="space-y-4">
                
                <div>
                  <label htmlFor="p-title" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Paper Title <span className="text-blue-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="p-title"
                    name="title"
                    placeholder="Enter complete manuscript title"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all shadow-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="p-author" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Corresponding Author <span className="text-blue-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="p-author"
                      name="author"
                      placeholder="Dr. / Prof. / Full Name"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all shadow-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="p-email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Author Email <span className="text-blue-600">*</span>
                    </label>
                    <input
                      type="email"
                      id="p-email"
                      name="email"
                      placeholder="author@institution.edu"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all shadow-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="p-org" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Institution / University <span className="text-blue-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="p-org"
                      name="org"
                      placeholder="University or Company Name"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all shadow-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="p-track" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Research Track <span className="text-blue-600">*</span>
                    </label>
                    <select
                      id="p-track"
                      name="track"
                      required
                      defaultValue="AI & ML"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all shadow-sm"
                    >
                      <option value="AI & ML">Track 1: Artificial Intelligence & ML</option>
                      <option value="Networks">Track 2: Next-Gen Networks & 6G</option>
                      <option value="Cybersecurity">Track 3: Cybersecurity & Cryptography</option>
                      <option value="Cloud">Track 4: Cloud & Distributed Systems</option>
                      <option value="IoT">Track 5: Internet of Things & Smart Cities</option>
                      <option value="Data Science">Track 6: Data Science & Analytics</option>
                    </select>
                  </div>
                </div>

                {/* Abstract Text Area */}
                <div>
                  <label htmlFor="p-abstract" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Abstract Summary <span className="text-blue-600">*</span>
                  </label>
                  <textarea
                    id="p-abstract"
                    name="abstract"
                    rows="3"
                    placeholder="Provide a concise 150-250 word abstract of your manuscript..."
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all shadow-sm"
                  />
                </div>

                {/* PDF Upload Box */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Upload PDF Manuscript (Max 15MB) <span className="text-blue-600">*</span>
                  </label>
                  <label className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-slate-300 hover:border-blue-600 rounded-2xl cursor-pointer bg-white transition-colors group">
                    <svg className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
                    </svg>
                    <span className="text-xs font-bold text-slate-700 group-hover:text-blue-600">
                      {selectedFile ? selectedFile.name : 'Click to upload PDF file'}
                    </span>
                    <span className="text-[10px] text-slate-400 mt-1">PDF format only</span>
                    <input
                      type="file"
                      name="paperFile"
                      accept=".pdf"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-widest transition-all shadow-md hover:shadow-lg disabled:opacity-50 mt-2"
                >
                  {loading ? 'UPLOADING MANUSCRIPT...' : 'SUBMIT MANUSCRIPT'}
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
      </div>
    </section>
  );
};

export default PaperSubmission;
