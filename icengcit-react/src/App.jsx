import React, { useEffect } from 'react';
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
  // Intersection Observer for scroll reveal animations
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    if (!els.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add("visible"), i * 60);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    els.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AimScope />
        <AboutConference />
        <AboutDepartment />
        <AboutCIT />
        <Committee />
        <ImportantDates />
        <KeynoteSpeakers />
        <PaperSubmission />
        <Registration />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
