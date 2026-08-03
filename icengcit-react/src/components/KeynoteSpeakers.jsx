import React from 'react';

const KeynoteSpeakers = () => {
  return (
    <section id="speakers" aria-labelledby="speakers-title">
      <div className="container">
        <header className="section-header centered reveal">
          <span className="section-tag">Distinguished Speakers</span>
          <div className="gold-line"></div>
          <h2 className="section-title" id="speakers-title">Keynote <span>Speakers</span></h2>
          <p className="section-desc">World-renowned experts sharing their vision on the future of technology, research, and innovation.</p>
        </header>

        <div className="speakers-grid">
          <div className="speaker-card reveal">
            <div className="speaker-img">RS</div>
            <div className="speaker-body">
              <div className="speaker-name">Prof. Ravi Shankar</div>
              <div className="speaker-title">Distinguished Fellow</div>
              <div className="speaker-org">IIT Delhi, India</div>
              <div className="speaker-topic">🎙 "The Future of Artificial General Intelligence: Pathways and Perils"</div>
            </div>
          </div>
          <div className="speaker-card reveal">
            <div className="speaker-img">EV</div>
            <div className="speaker-body">
              <div className="speaker-name">Dr. Elena Vasquez</div>
              <div className="speaker-title">Chief AI Scientist</div>
              <div className="speaker-org">Microsoft Research, USA</div>
              <div className="speaker-topic">🎙 "Large Language Models in Engineering: Transforming Design Workflows"</div>
            </div>
          </div>
          <div className="speaker-card reveal">
            <div className="speaker-img">KN</div>
            <div className="speaker-body">
              <div className="speaker-name">Prof. Kenji Nakamura</div>
              <div className="speaker-title">Professor of Computing</div>
              <div className="speaker-org">University of Tokyo, Japan</div>
              <div className="speaker-topic">🎙 "Quantum Computing: From Theory to Industrial Application"</div>
            </div>
          </div>
          <div className="speaker-card reveal">
            <div className="speaker-img">AM</div>
            <div className="speaker-body">
              <div className="speaker-name">Dr. Ayesha Mirza</div>
              <div className="speaker-title">VP of Engineering</div>
              <div className="speaker-org">Amazon Web Services, India</div>
              <div className="speaker-topic">🎙 "Sustainable Cloud Infrastructure for a Carbon-Neutral Future"</div>
            </div>
          </div>
          <div className="speaker-card reveal">
            <div className="speaker-img">CB</div>
            <div className="speaker-body">
              <div className="speaker-name">Prof. Carlos Braga</div>
              <div className="speaker-title">Head of Cybersecurity Lab</div>
              <div className="speaker-org">Universidade de São Paulo, Brazil</div>
              <div className="speaker-topic">🎙 "Next-Generation Threats: Securing AI Systems and Critical Infrastructure"</div>
            </div>
          </div>
          <div className="speaker-card reveal">
            <div className="speaker-img">PG</div>
            <div className="speaker-body">
              <div className="speaker-name">Dr. Priya Gopal</div>
              <div className="speaker-title">Research Scientist</div>
              <div className="speaker-org">Google DeepMind, UK</div>
              <div className="speaker-topic">🎙 "AI for Healthcare: Diagnostics, Drug Discovery and Personalised Medicine"</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeynoteSpeakers;
