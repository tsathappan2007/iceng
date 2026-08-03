import React, { useState } from 'react';

const API_BASE = import.meta.env.VITE_API_URL;

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

  return (
    <section id="registration" aria-labelledby="registration-title">
      <div className="container">
        <header className="section-header centered reveal">
          <span className="section-tag">Attend ICENGCIT 2027</span>
          <div className="gold-line"></div>
          <h2 className="section-title" id="registration-title">Conference <span>Registration</span></h2>
          <p className="section-desc">Secure your spot at one of the most anticipated engineering conferences of 2027. Early bird discounts available until January 31, 2027.</p>
        </header>

        <div className="reg-cards reveal">
          <div className="reg-card">
            <div className="reg-type">Student Author</div>
            <div className="reg-price"><sup>₹</sup>3,500</div>
            <div className="reg-price-note">Early Bird (before Jan 31) · Regular ₹4,500</div>
            <ul className="reg-features">
              <li>1 paper presentation</li>
              <li>Conference kit &amp; proceedings</li>
              <li>Lunch &amp; refreshments (3 days)</li>
              <li>Certificate of presentation</li>
            </ul>
            <a href="#registration-form" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }}>Register</a>
          </div>

          <div className="reg-card featured">
            <div className="reg-type">Faculty / Researcher</div>
            <div className="reg-price"><sup>₹</sup>6,000</div>
            <div className="reg-price-note">Early Bird (before Jan 31) · Regular ₹7,500</div>
            <ul className="reg-features">
              <li>1 paper presentation</li>
              <li>Conference kit &amp; proceedings</li>
              <li>Lunch &amp; refreshments (3 days)</li>
              <li>Workshop access (1 pre-conference)</li>
              <li>Certificate of presentation</li>
              <li>Best paper nomination</li>
            </ul>
            <a href="#registration-form" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Register Now</a>
          </div>

          <div className="reg-card">
            <div className="reg-type">Industry Professional</div>
            <div className="reg-price"><sup>₹</sup>8,000</div>
            <div className="reg-price-note">Early Bird (before Jan 31) · Regular ₹10,000</div>
            <ul className="reg-features">
              <li>1 paper presentation</li>
              <li>Conference kit &amp; proceedings</li>
              <li>All meals (3 days)</li>
              <li>All pre-conference workshops</li>
              <li>Networking dinner (Day 1)</li>
              <li>Exhibition floor access</li>
            </ul>
            <a href="#registration-form" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }}>Register</a>
          </div>

          <div className="reg-card">
            <div className="reg-type">International Author</div>
            <div className="reg-price"><sup>$</sup>120</div>
            <div className="reg-price-note">Early Bird (before Jan 31) · Regular $150</div>
            <ul className="reg-features">
              <li>1 paper presentation (virtual option)</li>
              <li>Digital proceedings</li>
              <li>Virtual networking session</li>
              <li>Recording of all sessions</li>
            </ul>
            <a href="#registration-form" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }}>Register</a>
          </div>
        </div>

        <div className="form-card reveal" id="registration-form">
          <h3 style={{ fontFamily: 'var(--font-head)', fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px' }}>Complete Your Registration</h3>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '28px' }}>You'll receive a confirmation email with payment instructions.</p>

          <form id="registrationForm" noValidate onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="r-name">Full Name <span>*</span></label>
                <input type="text" id="r-name" name="name" placeholder="Your full name" required />
              </div>
              <div className="form-group">
                <label htmlFor="r-email">Email Address <span>*</span></label>
                <input type="email" id="r-email" name="email" placeholder="your@email.com" required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="r-phone">Phone / WhatsApp <span>*</span></label>
                <input type="tel" id="r-phone" name="phone" placeholder="+91 XXXXX XXXXX" required />
              </div>
              <div className="form-group">
                <label htmlFor="r-institution">Institution / Organisation <span>*</span></label>
                <input type="text" id="r-institution" name="institution" placeholder="Institution name" required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="r-category">Registration Category <span>*</span></label>
                <select id="r-category" name="category" required defaultValue="">
                  <option value="" disabled>Select category</option>
                  <option>Student Author</option>
                  <option>Faculty / Researcher</option>
                  <option>Industry Professional</option>
                  <option>International Author</option>
                  <option>Attendee Only</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="r-paper">Paper ID (if applicable)</label>
                <input type="text" id="r-paper" name="paperId" placeholder="e.g. ICENG-2027-XXXX" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="r-dietary">Dietary Preferences / Accessibility Needs</label>
              <input type="text" id="r-dietary" name="dietary" placeholder="e.g. Vegetarian, wheelchair access, etc." />
              <p className="form-note">We strive to accommodate all requirements.</p>
            </div>
            <button type="submit" className={`btn btn-primary btn-submit ${loading ? 'loading' : ''}`} disabled={loading}>
              <span className="btn-text">Complete Registration</span>
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
    </section>
  );
};

export default Registration;
