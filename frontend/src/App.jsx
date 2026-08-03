import React, { useEffect } from 'react';
import SideNav from './components/SideNav';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AimScope from './components/AimScope';
import AboutConference from './components/AboutConference';
import AboutDepartment from './components/AboutDepartment';
import AboutCIT from './components/AboutCIT';
import Committee from './components/Committee';
import ImportantDates from './components/ImportantDates';
import KeynoteSpeakers from './components/KeynoteSpeakers';
import PaperSubmission from './components/PaperSubmission';
import Registration from './components/Registration';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    if (!els.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add("visible"), i * 50);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    els.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative bg-obsidian-950 text-slate-100 min-h-screen selection:bg-purple-500 selection:text-white">
      {/* Right Side Social & Official Season Badge */}
      <SideNav />

      {/* Top Header Navigation */}
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <AimScope />
        <AboutConference />
        <AboutDepartment />
        <AboutCIT />
        <Committee />
        <ImportantDates />
        <KeynoteSpeakers />
        <Registration />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
