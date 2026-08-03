import React from 'react';

const Footer = () => {
  return (
    <footer role="contentinfo">
      <div className="footer-top">
        <div className="footer-brand">
          <a href="#hero" className="nav-logo" style={{marginBottom: '4px'}}>
            <div className="nav-logo-badge">ICE</div>
            <div className="nav-logo-text"><span>ICENGCIT</span> 2027</div>
          </a>
          <p>International Conference on Engineering, Computing &amp; Information Technology.<br/>Hosted by the Department of IT, Chennai Institute of Technology.<br/>March 15–17, 2027 · Chennai, India.</p>
        </div>
        <div className="footer-col">
          <h5>Quick Links</h5>
          <ul>
            <li><a href="#aim">Aim &amp; Scope</a></li>
            <li><a href="#about-conf">About Conference</a></li>
            <li><a href="#committee">Committee</a></li>
            <li><a href="#dates">Important Dates</a></li>
            <li><a href="#speakers">Keynote Speakers</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Authors</h5>
          <ul>
            <li><a href="#submission">Submit Paper</a></li>
            <li><a href="#registration">Register</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#">IEEE Template</a></li>
            <li><a href="#">Author Guidelines</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2027 <span>ICENGCIT</span> — Department of IT, CIT, Chennai. All rights reserved.</p>
        <p>Designed &amp; developed by <span>CIT Web Team</span></p>
      </div>
    </footer>
  );
};

export default Footer;
