import React, { useState, useEffect } from 'react';

const ImportantDates = () => {
  const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0, isLive: false });

  useEffect(() => {
    const targetDate = new Date("2027-03-15T09:00:00").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff <= 0) {
        setTimeLeft({ d: 0, h: 0, m: 0, s: 0, isLive: true });
        return;
      }

      setTimeLeft({
        d: Math.floor(diff / 864e5),
        h: Math.floor((diff % 864e5) / 36e5),
        m: Math.floor((diff % 36e5) / 6e4),
        s: Math.floor((diff % 6e4) / 1e3),
        isLive: false
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = n => String(n).padStart(2, "0");

  return (
    <section id="dates" aria-labelledby="dates-title">
      <div className="container">
        <header className="section-header centered reveal">
          <span className="section-tag">Timeline</span>
          <div className="gold-line"></div>
          <h2 className="section-title" id="dates-title">Important <span>Dates</span></h2>
          <p className="section-desc">Mark these key dates on your calendar. All deadlines are at 23:59 IST (UTC+5:30).</p>
        </header>

        <div style={{ textAlign: "center" }} className="reveal">
          <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "4px" }}>
            Conference begins in
          </p>
          <div id="countdown" aria-live="polite" aria-label="Countdown to conference">
            {timeLeft.isLive ? (
              <span style={{ color: "var(--accent)", fontSize: "1.2rem", fontWeight: 700 }}>Conference is LIVE 🎉</span>
            ) : (
              <>
                <div className="cd-unit"><span className="cd-num">{timeLeft.d}</span><span className="cd-label">Days</span></div>
                <div className="cd-sep">:</div>
                <div className="cd-unit"><span className="cd-num">{pad(timeLeft.h)}</span><span className="cd-label">Hours</span></div>
                <div className="cd-sep">:</div>
                <div className="cd-unit"><span className="cd-num">{pad(timeLeft.m)}</span><span className="cd-label">Mins</span></div>
                <div className="cd-sep">:</div>
                <div className="cd-unit"><span className="cd-num">{pad(timeLeft.s)}</span><span className="cd-label">Secs</span></div>
              </>
            )}
          </div>
        </div>

        <div className="dates-grid">
          <div className="date-card passed reveal">
            <div className="date-icon-wrap">
              <span className="date-month">JUL</span>
              <span className="date-day">15</span>
            </div>
            <div className="date-info">
              <h4>Abstract Submission Opens</h4>
              <p>Portal opens for abstract submissions — July 15, 2026</p>
            </div>
          </div>
          <div className="date-card passed reveal">
            <div className="date-icon-wrap">
              <span className="date-month">SEP</span>
              <span className="date-day">30</span>
            </div>
            <div className="date-info">
              <h4>Abstract Submission Deadline</h4>
              <p>Final date for abstract submissions — September 30, 2026</p>
            </div>
          </div>
          <div className="date-card upcoming reveal">
            <div className="date-icon-wrap">
              <span className="date-month">OCT</span>
              <span className="date-day">31</span>
            </div>
            <div className="date-info">
              <h4>Full Paper Submission</h4>
              <p>Deadline for full manuscript (6–8 pages IEEE format) — October 31, 2026</p>
            </div>
          </div>
          <div className="date-card upcoming reveal">
            <div className="date-icon-wrap">
              <span className="date-month">DEC</span>
              <span className="date-day">15</span>
            </div>
            <div className="date-info">
              <h4>Acceptance Notification</h4>
              <p>Authors notified of acceptance/rejection — December 15, 2026</p>
            </div>
          </div>
          <div className="date-card upcoming reveal">
            <div className="date-icon-wrap">
              <span className="date-month">JAN</span>
              <span className="date-day">15</span>
            </div>
            <div className="date-info">
              <h4>Camera-Ready Submission</h4>
              <p>Final revised paper due — January 15, 2027</p>
            </div>
          </div>
          <div className="date-card upcoming reveal">
            <div className="date-icon-wrap">
              <span className="date-month">JAN</span>
              <span className="date-day">31</span>
            </div>
            <div className="date-info">
              <h4>Early Bird Registration</h4>
              <p>Discounted registration closes — January 31, 2027</p>
            </div>
          </div>
          <div className="date-card upcoming reveal">
            <div className="date-icon-wrap">
              <span className="date-month">FEB</span>
              <span className="date-day">28</span>
            </div>
            <div className="date-info">
              <h4>Regular Registration</h4>
              <p>Standard registration deadline — February 28, 2027</p>
            </div>
          </div>
          <div className="date-card upcoming reveal">
            <div className="date-icon-wrap">
              <span className="date-month">MAR</span>
              <span className="date-day">15</span>
            </div>
            <div className="date-info">
              <h4>Conference Begins 🎉</h4>
              <p>Three days of sessions, workshops &amp; keynotes — March 15–17, 2027</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImportantDates;
