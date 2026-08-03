import React, { useState } from 'react';

const API_BASE = import.meta.env.VITE_API_URL;

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
        body: formData, // Send FormData directly for multipart/form-data
      });

      if (!res.ok) throw new Error("Server error");
      const data = await res.json();

      setFeedback({
        type: 'success',
        message: `✓ Paper submitted! Your ID: ${data.paperId || "ICENG-XXXX"}. Confirmation sent to ${payload.email}.`
      });
      form.reset();
    } catch (err) {
      if (API_BASE === "") {
        setFeedback({
          type: 'success',
          message: "✓ Paper received! (Demo mode) — Your paper ID: ICENG-2027-DEMO. Connect backend to enable real tracking."
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

  return (
    <section id="submission" aria-labelledby="submission-title">
      <div className="container">
        <div className="submission-layout">
          <div className="reveal">
            <span className="section-tag">Call for Papers</span>
            <div className="gold-line"></div>
            <h2 className="section-title" id="submission-title">Paper <span>Submission</span></h2>
            <p className="section-desc">We invite original, unpublished research contributions. All submissions undergo rigorous double-blind peer review.</p>

            <div className="submission-steps">
              <div className="step">
                <div className="step-num">1</div>
                <div className="step-body">
                  <h4>Prepare Your Manuscript</h4>
                  <p>Use the IEEE conference template. Papers must be 6–8 pages including references. Use double-blind format — omit author names.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-num">2</div>
                <div className="step-body">
                  <h4>Submit via the Portal</h4>
                  <p>Fill in the form with your paper title, abstract, track, and author details. Upload your PDF.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-num">3</div>
                <div className="step-body">
                  <h4>Peer Review</h4>
                  <p>Your paper is reviewed by at least three domain experts. Reviews are returned with feedback within 45 days.</p>
                </div>
              </div>
              <div className="step">
                <div className="step-num">4</div>
                <div className="step-body">
                  <h4>Camera-Ready &amp; Registration</h4>
                  <p>Accepted papers require at least one author to register and present. Final PDFs are due by January 15, 2027.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="form-card reveal" id="paper-form-card">
            <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px' }}>Submit Your Paper</h3>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '28px' }}>All fields marked <span style={{ color: 'var(--accent)' }}>*</span> are required.</p>

            <form id="paperForm" noValidate onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="p-name">Corresponding Author <span>*</span></label>
                  <input type="text" id="p-name" name="author" placeholder="Full name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="p-email">Email Address <span>*</span></label>
                  <input type="email" id="p-email" name="email" placeholder="author@institution.edu" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="p-title">Paper Title <span>*</span></label>
                <input type="text" id="p-title" name="title" placeholder="Full paper title" required />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="p-track">Research Track <span>*</span></label>
                  <select id="p-track" name="track" required defaultValue="">
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
                <div className="form-group">
                  <label htmlFor="p-coauthors">Co-Author(s)</label>
                  <input type="text" id="p-coauthors" name="coauthors" placeholder="Name(s), separated by comma" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="p-abstract">Abstract <span>*</span></label>
                <textarea id="p-abstract" name="abstract" placeholder="Paste your 200–300 word abstract here..." rows="5" required></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="p-file">Upload Paper (PDF) <span>*</span></label>
                <input type="file" id="p-file" name="file" accept=".pdf" required style={{ cursor: 'pointer' }} />
                <p className="form-note">Max 10 MB · IEEE format · Double-blind · 6–8 pages</p>
              </div>
              <button type="submit" className={`btn btn-primary btn-submit ${loading ? 'loading' : ''}`} disabled={loading}>
                <span className="btn-text">Submit Paper</span>
                <div className="spinner"></div>
              </button>
            </form>
            {feedback.message && (
              <div className={`form-feedback ${feedback.type}`} style={{ display: 'block' }} role="alert">
                {feedback.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaperSubmission;
