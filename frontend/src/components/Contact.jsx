import React, { useState } from 'react';

const API_BASE = import.meta.env.VITE_API_URL;

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
    <section id="contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact-layout">
          <div className="reveal">
            <span className="section-tag">Get in Touch</span>
            <div className="gold-line"></div>
            <h2 className="section-title" id="contact-title">Contact <span>Us</span></h2>
            <p className="section-desc">Have questions about submissions, registration, or the venue? We're here to help.</p>

            <div className="contact-info-list">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <svg fill="none" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div className="contact-info-body">
                  <h4>Email</h4>
                  <a href="mailto:icengcit2027@cit.edu.in">icengcit2027@cit.edu.in</a>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <svg fill="none" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div className="contact-info-body">
                  <h4>Phone</h4>
                  <a href="tel:+914222572177">+91 422 257 2177</a>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <svg fill="none" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div className="contact-info-body">
                  <h4>Address</h4>
                  <p>Department of IT, Chennai Institute of Technology,<br />Civil Aerodrome Post, Chennai – 641 014, Tamil Nadu, India.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="form-card reveal">
            <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px' }}>Send a Message</h3>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '28px' }}>We typically respond within 1–2 business days.</p>

            <form id="contactForm" noValidate onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="c-name">Your Name <span>*</span></label>
                  <input type="text" id="c-name" name="name" placeholder="Full name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="c-email">Email Address <span>*</span></label>
                  <input type="email" id="c-email" name="email" placeholder="your@email.com" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="c-subject">Subject <span>*</span></label>
                <select id="c-subject" name="subject" required defaultValue="">
                  <option value="" disabled>Select topic</option>
                  <option>Paper Submission Enquiry</option>
                  <option>Registration Query</option>
                  <option>Sponsorship / Exhibition</option>
                  <option>Keynote / Speaking Invitation</option>
                  <option>Technical Support</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="c-message">Message <span>*</span></label>
                <textarea id="c-message" name="message" placeholder="How can we help you?" rows="5" required></textarea>
              </div>
              <button type="submit" className={`btn btn-primary btn-submit ${loading ? 'loading' : ''}`} disabled={loading}>
                <span className="btn-text">Send Message</span>
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

export default Contact;
