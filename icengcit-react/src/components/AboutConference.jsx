import React from 'react';

const AboutConference = () => {
  return (
    <section id="about-conf" aria-labelledby="about-conf-title">
      <div className="container">
        <div className="about-grid reveal">
          <div className="about-img-block">
            <div className="about-img-placeholder">
              <div className="about-img-label">
                <svg fill="none" strokeWidth="1" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                Conference Hall Photo
              </div>
            </div>
            <div className="about-badge">Since 2019</div>
          </div>
          <div className="about-text">
            <span className="section-tag">About the Event</span>
            <div className="gold-line"></div>
            <h2 className="section-title" id="about-conf-title">About the <span>Conference</span></h2>
            <p>The International Conference on Engineering, Computing &amp; Information Technology (ICENGCIT) is a prestigious biennial gathering that has established itself as a leading platform for knowledge exchange and innovation in technical disciplines.</p>
            <p>Since its inception, ICENGCIT has attracted thousands of participants from over 30 countries, facilitating groundbreaking research collaborations and fostering a global community of engineers and technologists.</p>
            <p>ICENGCIT 2027 marks a new milestone, with expanded tracks, world-class keynote speakers, and immersive workshops designed to address the most pressing challenges in modern technology.</p>
            <ul className="about-list">
              <li>Peer-reviewed proceedings indexed in Scopus &amp; Web of Science</li>
              <li>Best Paper Awards across all tracks with cash prizes</li>
              <li>Industry keynotes from top technology companies</li>
              <li>Pre-conference workshops and hands-on tutorials</li>
              <li>Networking sessions and exhibition floor</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutConference;
