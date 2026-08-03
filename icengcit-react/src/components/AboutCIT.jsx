import React from 'react';

const AboutCIT = () => {
  return (
    <section id="about-cit" aria-labelledby="about-cit-title">
      <div className="container">
        <div className="about-grid reveal">
          <div className="about-img-block">
            <div className="about-img-placeholder">
              <div className="about-img-label">
                <svg fill="none" strokeWidth="1" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z"/><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>
                CIT Campus Photo
              </div>
            </div>
            <div className="about-badge">NAAC A+</div>
          </div>
          <div className="about-text">
            <span className="section-tag">Host Institution</span>
            <div className="gold-line"></div>
            <h2 className="section-title" id="about-cit-title">Chennai Institute of <span>Technology</span></h2>
            <p>Chennai Institute of Technology (CIT), established in 1956, is one of Tamil Nadu's oldest and most respected technical institutions. Affiliated to Anna University, CIT is an Autonomous institution recognised for academic excellence, innovation, and holistic development.</p>
            <p>Nestled in Chennai — the "Manchester of South India" — CIT's verdant vibrant campus is home to over 6,000 students across undergraduate, postgraduate programmes in engineering and technology.</p>
            <p>Accredited with NAAC A+ grade and NBA accreditation for multiple programmes, CIT continues to nurture transformative engineers who contribute meaningfully to society and industry.</p>
            <ul className="about-list">
              <li>Autonomous institution affiliated to Anna University</li>
              <li>NAAC A+ Grade &amp; NBA-accredited programmes</li>
              <li>Vibrant green campus with world-class infrastructure</li>
              <li>Centre for Entrepreneurship &amp; Innovation</li>
              <li>Strong alumni network across 50+ countries</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCIT;
