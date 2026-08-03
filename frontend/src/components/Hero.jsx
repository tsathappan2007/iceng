import React from 'react';

const Hero = () => {
  return (
    <section id="hero" aria-labelledby="hero-title">
      <div className="hero-eyebrow">
        <span>15–17 March 2027 &nbsp;·&nbsp; Chennai, India</span>
      </div>

      <h1 className="hero-title" id="hero-title">
        <span className="line1">International Conference on</span>
        <span className="line2">Next-Gen Computing<br/>&amp; Information Technology</span>
      </h1>

      <p className="hero-acronym">ICENGCIT — 2027</p>

      <div className="hero-meta">
        <div className="hero-meta-chip">
          <svg fill="none" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
          March 15 – 17, 2027
        </div>
        <div className="hero-meta-chip">
          <svg fill="none" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
          Chennai Institute of Technology
        </div>
        <div className="hero-meta-chip">
          <svg fill="none" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
          Indexed Proceedings (Scopus / Web of Science)
        </div>
        <div className="hero-meta-chip">
          <svg fill="none" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"/></svg>
          Hybrid Mode (In-Person &amp; Virtual)
        </div>
      </div>

      <div className="hero-actions">
        <a href="#submission" className="btn btn-primary">
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
          Submit Your Paper
        </a>
        <a href="#registration" className="btn btn-outline">
          Register for Conference
        </a>
        <a href="#about-conf" className="btn btn-ghost">
          Learn More
        </a>
      </div>

      <div className="hero-stats">
        <div className="hero-stat">
          <span className="hero-stat-num">500+</span>
          <span className="hero-stat-label">Expected Participants</span>
        </div>
        <div className="hero-stat">
          <span className="hero-stat-num">20+</span>
          <span className="hero-stat-label">Technical Tracks</span>
        </div>
        <div className="hero-stat">
          <span className="hero-stat-num">50+</span>
          <span className="hero-stat-label">Keynote & Invited Talks</span>
        </div>
        <div className="hero-stat">
          <span className="hero-stat-num">30+</span>
          <span className="hero-stat-label">Countries Represented</span>
        </div>
      </div>

      <div className="hero-scroll" aria-hidden="true">
        <div className="scroll-mouse"><div className="scroll-dot"></div></div>
        <span>Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
