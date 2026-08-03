import React from 'react';

const AboutDepartment = () => {
  return (
    <section id="about-dept" aria-labelledby="about-dept-title">
      <div className="container">
        <div className="about-grid reverse reveal">
          <div className="about-text">
            <span className="section-tag">Host Department</span>
            <div className="gold-line"></div>
            <h2 className="section-title" id="about-dept-title">Department of <span>INFORMATION TECHNOLOGY</span></h2>
            <p>The Department of Information Technology at CIT has been at the forefront of computing education and research for over three decades. With state-of-the-art laboratories, a distinguished faculty, and a vibrant research culture, it stands among the premier IT departments in South India.</p>
            <p>The department offers B.Tech.., M.Tech.., and Ph.D. programmes, with specialisations spanning artificial intelligence, cloud computing, cybersecurity, and data science. Its graduates drive innovation at top technology firms worldwide.</p>
            <ul className="about-list">
              <li>NBA-accredited B.Tech. (IT) programme</li>
              <li>12 specialised research laboratories</li>
              <li>Active MoUs with leading industry partners</li>
              <li>150+ faculty publications in high-impact journals annually</li>
              <li>Dedicated Centre for AI &amp; Data Science Research</li>
            </ul>
          </div>
          <div className="about-img-block">
            <div className="about-img-placeholder">
              <div className="about-img-label">
                <svg fill="none" strokeWidth="1" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                Department Building Photo
              </div>
            </div>
            <div className="about-badge">Est. 1993</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDepartment;
