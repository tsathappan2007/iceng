import React, { useState } from 'react';

const Committee = () => {
  const [activeTab, setActiveTab] = useState('organizing');

  return (
    <section id="committee" aria-labelledby="committee-title">
      <div className="container">
        <header className="section-header centered reveal">
          <span className="section-tag">Organizing Body</span>
          <div className="gold-line"></div>
          <h2 className="section-title" id="committee-title">Conference <span>Committee</span></h2>
          <p className="section-desc">Our distinguished organizing committee comprises leading academics and industry experts who ensure the highest standards of research and collaboration.</p>
        </header>

        <div className="committee-tabs reveal" role="tablist">
          <button className={`tab-btn ${activeTab === 'organizing' ? 'active' : ''}`} onClick={() => setActiveTab('organizing')} role="tab">Organizing Committee</button>
          <button className={`tab-btn ${activeTab === 'technical' ? 'active' : ''}`} onClick={() => setActiveTab('technical')} role="tab">Technical Programme</button>
          <button className={`tab-btn ${activeTab === 'advisory' ? 'active' : ''}`} onClick={() => setActiveTab('advisory')} role="tab">Advisory Board</button>
          <button className={`tab-btn ${activeTab === 'reviewers' ? 'active' : ''}`} onClick={() => setActiveTab('reviewers')} role="tab">Reviewers</button>
        </div>

        {activeTab === 'organizing' && (
          <div className="committee-panel active" id="panel-organizing" role="tabpanel">
            <div className="committee-grid">
              <div className="member-card reveal">
                <div className="member-avatar">PC</div>
                <div className="member-name">Prof. Dr. P. Chandrasekaran</div>
                <div className="member-role">Chief Patron</div>
                <div className="member-affil">Principal, CIT, Chennai</div>
              </div>
              <div className="member-card reveal">
                <div className="member-avatar">KS</div>
                <div className="member-name">Dr. K. Sureshkumar</div>
                <div className="member-role">Patron</div>
                <div className="member-affil">Dean (Academic), CIT</div>
              </div>
              <div className="member-card reveal">
                <div className="member-avatar">MR</div>
                <div className="member-name">Dr. M. Rajalakshmi</div>
                <div className="member-role">General Chair</div>
                <div className="member-affil">HoD, Dept. of CSE, CIT</div>
              </div>
              <div className="member-card reveal">
                <div className="member-avatar">VP</div>
                <div className="member-name">Dr. V. Pradeep Kumar</div>
                <div className="member-role">Organizing Chair</div>
                <div className="member-affil">Associate Professor, CSE, CIT</div>
              </div>
              <div className="member-card reveal">
                <div className="member-avatar">SA</div>
                <div className="member-name">Dr. S. Anitha</div>
                <div className="member-role">Co-Organizing Chair</div>
                <div className="member-affil">Associate Professor, CSE, CIT</div>
              </div>
              <div className="member-card reveal">
                <div className="member-avatar">RN</div>
                <div className="member-name">Dr. R. Nagarajan</div>
                <div className="member-role">Finance Chair</div>
                <div className="member-affil">Assistant Professor, CSE, CIT</div>
              </div>
              <div className="member-card reveal">
                <div className="member-avatar">LM</div>
                <div className="member-name">Ms. L. Meenakshi</div>
                <div className="member-role">Publicity Chair</div>
                <div className="member-affil">Assistant Professor, CSE, CIT</div>
              </div>
              <div className="member-card reveal">
                <div className="member-avatar">BK</div>
                <div className="member-name">Mr. B. Karthikeyan</div>
                <div className="member-role">Web &amp; Technical Support</div>
                <div className="member-affil">Assistant Professor, CSE, CIT</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'technical' && (
          <div className="committee-panel active" id="panel-technical" role="tabpanel">
            <div className="committee-grid">
              <div className="member-card reveal">
                <div className="member-avatar">TPC</div>
                <div className="member-name">Prof. Dr. T. Rajendran</div>
                <div className="member-role">TPC Chair</div>
                <div className="member-affil">IIT Madras, India</div>
              </div>
              <div className="member-card reveal">
                <div className="member-avatar">AK</div>
                <div className="member-name">Dr. A. Kumar</div>
                <div className="member-role">TPC Co-Chair</div>
                <div className="member-affil">NIT Trichy, India</div>
              </div>
              <div className="member-card reveal">
                <div className="member-avatar">SW</div>
                <div className="member-name">Prof. Sarah Wilson</div>
                <div className="member-role">Track Chair — AI/ML</div>
                <div className="member-affil">University of Edinburgh, UK</div>
              </div>
              <div className="member-card reveal">
                <div className="member-avatar">JL</div>
                <div className="member-name">Prof. James Liu</div>
                <div className="member-role">Track Chair — Cloud</div>
                <div className="member-affil">NUS Singapore</div>
              </div>
              <div className="member-card reveal">
                <div className="member-avatar">FH</div>
                <div className="member-name">Dr. Fatima Hassan</div>
                <div className="member-role">Track Chair — Security</div>
                <div className="member-affil">Cairo University, Egypt</div>
              </div>
              <div className="member-card reveal">
                <div className="member-avatar">KP</div>
                <div className="member-name">Dr. K. Padmanabhan</div>
                <div className="member-role">Track Chair — IoT</div>
                <div className="member-affil">BITS Pilani, India</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'advisory' && (
          <div className="committee-panel active" id="panel-advisory" role="tabpanel">
            <div className="committee-grid">
              <div className="member-card reveal">
                <div className="member-avatar">RV</div>
                <div className="member-name">Prof. R. Venkatesan</div>
                <div className="member-role">Advisory Board Chair</div>
                <div className="member-affil">IISc Bangalore, India</div>
              </div>
              <div className="member-card reveal">
                <div className="member-avatar">MP</div>
                <div className="member-name">Prof. Maria Perez</div>
                <div className="member-role">International Advisor</div>
                <div className="member-affil">University of Toronto, Canada</div>
              </div>
              <div className="member-card reveal">
                <div className="member-avatar">HT</div>
                <div className="member-name">Prof. Hiroshi Tanaka</div>
                <div className="member-role">International Advisor</div>
                <div className="member-affil">Tokyo Institute of Technology</div>
              </div>
              <div className="member-card reveal">
                <div className="member-avatar">GM</div>
                <div className="member-name">Dr. George Mitchell</div>
                <div className="member-role">Industry Advisor</div>
                <div className="member-affil">Google DeepMind, USA</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'reviewers' && (
          <div className="committee-panel active" id="panel-reviewers" role="tabpanel">
            <div className="committee-grid">
              <div className="member-card reveal">
                <div className="member-avatar">SP</div>
                <div className="member-name">Dr. S. Parthasarathy</div>
                <div className="member-role">Senior Reviewer</div>
                <div className="member-affil">Anna University, India</div>
              </div>
              <div className="member-card reveal">
                <div className="member-avatar">NG</div>
                <div className="member-name">Dr. N. Ganesan</div>
                <div className="member-role">Senior Reviewer</div>
                <div className="member-affil">PSG Tech, Chennai</div>
              </div>
              <div className="member-card reveal">
                <div className="member-avatar">LS</div>
                <div className="member-name">Dr. L. Subramanian</div>
                <div className="member-role">Reviewer</div>
                <div className="member-affil">Amrita University, India</div>
              </div>
              <div className="member-card reveal">
                <div className="member-avatar">PV</div>
                <div className="member-name">Dr. P. Vasudevan</div>
                <div className="member-role">Reviewer</div>
                <div className="member-affil">VIT University, India</div>
              </div>
              <div className="member-card reveal">
                <div className="member-avatar">CR</div>
                <div className="member-name">Ms. C. Revathi</div>
                <div className="member-role">Reviewer</div>
                <div className="member-affil">SASTRA University, India</div>
              </div>
              <div className="member-card reveal">
                <div className="member-avatar">TM</div>
                <div className="member-name">Mr. T. Murugesan</div>
                <div className="member-role">Reviewer</div>
                <div className="member-affil">Kongu Engineering College</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Committee;
