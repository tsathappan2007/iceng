import React from 'react';

const AimScope = () => {
  return (
    <section id="aim" aria-labelledby="aim-title">
      <div className="container">
        <header className="section-header reveal">
          <span className="section-tag">Purpose</span>
          <div className="gold-line"></div>
          <h2 className="section-title" id="aim-title">Aim &amp; <span>Scope</span></h2>
          <p className="section-desc">ICENGCIT 2027 brings together researchers, educators, engineers, and industry professionals to share knowledge and advance innovation across core engineering and computing disciplines.</p>
        </header>

        <div className="aim-grid">
          <div className="aim-card reveal">
            <div className="aim-icon">
              <svg fill="none" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>
            </div>
            <h3>Conference Aim</h3>
            <p>To provide an international forum for academics, researchers, and industry practitioners to exchange ideas, present original findings, and foster collaborations that drive technological progress across engineering, computing, and information technology domains.</p>
            <p style={{marginTop: '12px', color: 'var(--text-muted)', fontSize: '0.9rem'}}>The conference aims to bridge the gap between theoretical research and practical applications, nurturing the next generation of innovators and thought leaders.</p>
          </div>

          <div className="aim-card reveal">
            <div className="aim-icon">
              <svg fill="none" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"/></svg>
            </div>
            <h3>Scope of Topics</h3>
            <p>ICENGCIT 2027 welcomes original research across, but not limited to, the following areas:</p>
            <div className="scope-tags">
              <span className="scope-tag">Artificial Intelligence & ML</span>
              <span className="scope-tag">Cloud & Edge Computing</span>
              <span className="scope-tag">Cybersecurity</span>
              <span className="scope-tag">IoT & Embedded Systems</span>
              <span className="scope-tag">Data Science & Analytics</span>
              <span className="scope-tag">Wireless & 5G Networks</span>
              <span className="scope-tag">VLSI Design</span>
              <span className="scope-tag">Renewable Energy Systems</span>
              <span className="scope-tag">Robotics & Automation</span>
              <span className="scope-tag">Blockchain Technology</span>
              <span className="scope-tag">Smart Healthcare</span>
              <span className="scope-tag">Natural Language Processing</span>
              <span className="scope-tag">Computer Vision</span>
              <span className="scope-tag">Software Engineering</span>
              <span className="scope-tag">Green Computing</span>
              <span className="scope-tag">Digital Signal Processing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AimScope;
