import React, { useState } from 'react';
import { useUser } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const PaperSubmission = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState({ type: '', message: '' });
  const [driveLink, setDriveLink] = useState('');
  const [showProfileToast, setShowProfileToast] = useState(false);

  const isProfileIncomplete = isSignedIn && !user?.unsafeMetadata?.institution;

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Check 1: User Not Signed In
    if (isLoaded && !isSignedIn) {
      setFeedback({ type: 'error', message: 'Please sign in to your author account before submitting a manuscript.' });
      return;
    }

    // Check 2: Profile Incomplete (Missing Institution/Org)
    if (isProfileIncomplete) {
      setShowProfileToast(true);
      setFeedback({
        type: 'error',
        message: '⚠️ Action Required: Complete your profile preferences (Institution/Org) to submit your manuscript.'
      });
      return;
    }

    if (!driveLink || !driveLink.trim()) {
      setFeedback({ type: 'error', message: 'Please provide a valid Google Drive or Cloud link to your manuscript.' });
      return;
    }

    setLoading(true);
    const form = e.target;
    const formData = new FormData(form);

    try {
      const res = await fetch(`${API_BASE}/paper/submit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          author: formData.get("author"),
          email: formData.get("email"),
          title: formData.get("title"),
          track: formData.get("track"),
          driveLink: driveLink.trim()
        }),
      });

      if (!res.ok) throw new Error("Submission failed");
      const data = await res.json();

      setFeedback({
        type: 'success',
        message: `✓ Paper submitted successfully! Tracking ID: ${data.paperId || 'ICAING-2027-XXX'}. Confirmation email sent.`
      });
      form.reset();
      setDriveLink('');
    } catch (err) {
      if (API_BASE === "") {
        setFeedback({
          type: 'success',
          message: `✓ Manuscript link received! (Demo mode) — Connect backend API for live tracking.`
        });
        form.reset();
        setDriveLink('');
      } else {
        setFeedback({ type: 'error', message: "Submission failed. Please verify your connection and try again." });
      }
    } finally {
      setLoading(false);
      setTimeout(() => setFeedback({ type: '', message: '' }), 6000);
    }
  };

  return (
    <section id="submission" className="py-24 px-4 sm:px-6 relative z-10 bg-slate-50/60 border-t border-slate-200/80">
      
      {/* Top-Right Glassmorphic Toast for Profile Completion Requirement */}
      {showProfileToast && (
        <div className="fixed top-24 right-4 sm:right-6 z-50 max-w-sm sm:max-w-md w-full p-4.5 rounded-2xl bg-white/90 backdrop-blur-xl border border-amber-400/90 shadow-[0_16px_40px_-8px_rgba(245,158,11,0.3),0_4px_16px_rgba(37,99,235,0.08)] space-y-3 animate-symphony-badge">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100/90 border border-amber-300/80 text-amber-900 font-black text-base flex items-center justify-center shrink-0 shadow-sm">
              ⚠️
            </div>

            <div className="space-y-1 min-w-0 flex-1">
              <div className="flex items-center justify-between gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-amber-100/90 text-amber-900 font-mono text-[9px] font-extrabold uppercase tracking-wider border border-amber-300/60">
                  ACTION REQUIRED
                </span>
                <button
                  type="button"
                  onClick={() => setShowProfileToast(false)}
                  className="text-slate-400 hover:text-slate-700 font-bold text-xs"
                >
                  ✕
                </button>
              </div>
              <h4 className="text-xs sm:text-sm font-black text-slate-900 uppercase tracking-tight">
                Complete Profile to Submit
              </h4>
              <p className="text-[11px] text-slate-600 font-medium leading-relaxed">
                Please enter your <strong>Institution / Org</strong> details in your profile before submitting your paper.
              </p>
            </div>
          </div>

          <Link
            to="/profile"
            className="block w-full py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs uppercase tracking-wider text-center shadow-md transition-all transform hover:scale-[1.01]"
          >
            COMPLETE PROFILE NOW →
          </Link>
        </div>
      )}

      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-3">
            <span className="w-12 h-px bg-blue-300/80" />
            <span className="text-xs font-mono font-black tracking-widest text-blue-700 uppercase px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 shadow-sm">
              CALL FOR PAPERS
            </span>
            <span className="w-12 h-px bg-blue-300/80" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tight">
            MANUSCRIPT <span className="text-blue-600 glow-title">SUBMISSION</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Submit your original, unpublished research manuscripts formatted according to IEEE conference standards.
          </p>
        </div>

        {/* Guidelines & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Submission Guidelines Box */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 sm:p-7 rounded-[28px] bg-gradient-to-r from-blue-50/90 via-slate-50 to-indigo-50/90 border border-blue-200/80 text-slate-900 shadow-sm">
              <h3 className="text-xs font-mono font-black uppercase tracking-wider text-blue-700 mb-4">
                AUTHOR GUIDELINES
              </h3>
              
              <ul className="space-y-3 text-xs text-slate-700 font-medium">
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

              <div className="mt-6 pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-3">
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
            <div className="p-6 rounded-3xl bg-gradient-to-r from-blue-50/90 via-slate-50 to-indigo-50/90 border border-blue-200/80 shadow-sm">
              <h4 className="text-xs font-mono font-black uppercase tracking-wider text-blue-900 mb-2">
                PUBLICATION INDEXING
              </h4>
              <p className="text-xs text-blue-800 leading-relaxed font-medium">
                Accepted and presented papers will be submitted for inclusion into <strong>IEEE Xplore</strong> and indexed in <strong>Scopus</strong> and <strong>Web of Science (WoS)</strong>.
              </p>
            </div>
          </div>

          {/* Paper Submission Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-[36px] bg-gradient-to-br from-blue-50/90 via-slate-50 to-indigo-50/90 border border-blue-200/80 text-slate-900 shadow-sm relative overflow-hidden">
              
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 uppercase tracking-tight">
                    SUBMIT MANUSCRIPT LINK
                  </h3>
                  <p className="text-xs text-slate-600 font-medium mt-1">
                    Fill in author details and provide your manuscript cloud drive URL.
                  </p>
                </div>

                {isProfileIncomplete && (
                  <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 font-mono text-[10px] font-bold border border-amber-300">
                    PROFILE INCOMPLETE
                  </span>
                )}
              </div>

              <form noValidate onSubmit={handleFormSubmit} className="space-y-5">
                
                {/* Author Name */}
                <div className="space-y-1.5">
                  <label htmlFor="p-author" className="block text-[11px] font-mono font-black uppercase tracking-wider text-slate-800">
                    Corresponding Author Name <span className="text-blue-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="p-author"
                    name="author"
                    placeholder="e.g. Dr. Alexander Wright"
                    defaultValue={user?.fullName || ''}
                    required
                    className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-xs font-semibold focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all shadow-sm"
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-1.5">
                  <label htmlFor="p-email" className="block text-[11px] font-mono font-black uppercase tracking-wider text-slate-800">
                    Corresponding Email <span className="text-blue-600">*</span>
                  </label>
                  <input
                    type="email"
                    id="p-email"
                    name="email"
                    placeholder="author@university.edu"
                    defaultValue={user?.primaryEmailAddress?.emailAddress || ''}
                    required
                    className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-xs font-semibold focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all shadow-sm"
                  />
                </div>

                {/* Paper Title */}
                <div className="space-y-1.5">
                  <label htmlFor="p-title" className="block text-[11px] font-mono font-black uppercase tracking-wider text-slate-800">
                    Paper Title <span className="text-blue-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="p-title"
                    name="title"
                    placeholder="Enter complete manuscript title"
                    required
                    className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-xs font-semibold focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all shadow-sm"
                  />
                </div>

                {/* Track Selection */}
                <div className="space-y-1.5">
                  <label htmlFor="p-track" className="block text-[11px] font-mono font-black uppercase tracking-wider text-slate-800">
                    Primary Research Track <span className="text-blue-600">*</span>
                  </label>
                  <select
                    id="p-track"
                    name="track"
                    required
                    className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 text-slate-900 text-xs font-semibold focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all shadow-sm"
                  >
                    <option value="Track 1">Track 01: Artificial Intelligence &amp; Deep Learning</option>
                    <option value="Track 2">Track 02: Next-Gen Cloud &amp; Distributed Systems</option>
                    <option value="Track 3">Track 03: Cybersecurity, Privacy &amp; Blockchain</option>
                    <option value="Track 4">Track 04: IoT, Smart Sensors &amp; Robotics</option>
                    <option value="Track 5">Track 05: Big Data Analytics &amp; Knowledge Graphs</option>
                    <option value="Track 6">Track 06: 6G Telemetry &amp; Next-Gen Networking</option>
                  </select>
                </div>

                {/* Manuscript Drive / Cloud Link Input Field */}
                <div className="space-y-1.5">
                  <label htmlFor="p-drivelink" className="block text-[11px] font-mono font-black uppercase tracking-wider text-slate-800">
                    Manuscript Drive / Cloud Link (Google Drive, OneDrive, Dropbox) <span className="text-blue-600">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="url"
                      id="p-drivelink"
                      name="driveLink"
                      required
                      value={driveLink}
                      onChange={(e) => setDriveLink(e.target.value)}
                      placeholder="https://drive.google.com/file/d/1a2b3c... or shared cloud link"
                      className="w-full px-4 py-3 pl-11 rounded-2xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-xs font-semibold focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all shadow-sm"
                    />
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-blue-600">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-500 font-medium pt-0.5">
                    💡 <strong>Note:</strong> Ensure link access permissions are set to <em>"Anyone with the link can view"</em> for double-blind reviewers.
                  </p>
                </div>

                {/* Submit Action Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-black text-xs uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                >
                  <svg className="w-4 h-4 transform -rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  <span>{loading ? 'SUBMITTING LINK...' : 'SUBMIT MANUSCRIPT LINK'}</span>
                </button>

              </form>

              {/* Feedback Alert */}
              {feedback.message && (
                <div
                  className={`mt-5 p-4 rounded-2xl text-xs font-bold ${
                    feedback.type === 'success'
                      ? 'bg-emerald-50 border border-emerald-200 text-emerald-900 shadow-sm'
                      : 'bg-amber-50 border border-amber-300 text-amber-900 shadow-sm'
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
