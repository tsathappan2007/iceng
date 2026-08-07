import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AuthenticateWithRedirectCallback } from '@clerk/clerk-react';
import SideNav from './components/SideNav';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

// Page Imports
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DomainsPage from './pages/DomainsPage';
import TimelinePage from './pages/TimelinePage';
import SpeakersPage from './pages/SpeakersPage';
import CommitteePage from './pages/CommitteePage';
import CouncilPage from './pages/CouncilPage';
import SubmitPage from './pages/SubmitPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import PricingPage from './pages/PricingPage';

// Scroll reveal effect hook for routes
const ScrollRevealController = () => {
  const location = useLocation();

  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    if (!els.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add("visible"), i * 40);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    els.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [location.pathname]);

  return null;
};

function AppContent() {
  return (
    <div className="relative bg-obsidian-950 text-slate-100 min-h-screen selection:bg-purple-500 selection:text-white">
      {/* Custom Interactive Pointer Cursor */}
      <CustomCursor />

      <ScrollRevealController />

      {/* Right Side Social & Official Season Badge */}
      <SideNav />

      {/* Top Header Navigation */}
      <Navbar />

      {/* Multi-Page Route Viewports */}
      <main className="relative z-10 min-h-[70vh]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/domains" element={<DomainsPage />} />
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/speakers" element={<SpeakersPage />} />
          <Route path="/committee" element={<CommitteePage />} />
          <Route path="/council" element={<CouncilPage />} />
          <Route path="/submit" element={<SubmitPage />} />
          <Route path="/registration" element={<Navigate to="/submit" replace />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route
            path="/sso-callback"
            element={
              <AuthenticateWithRedirectCallback
                signUpForceRedirectUrl="/dashboard"
                signInForceRedirectUrl="/dashboard"
              />
            }
          />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>

      {/* Persistent Footer */}
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
