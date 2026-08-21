import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AuthenticateWithRedirectCallback } from '@clerk/clerk-react';
import SideNav from './components/SideNav';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import RouteProgressBar from './components/RouteProgressBar';
import PageTransition from './components/PageTransition';

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

// Scroll reveal effect hook for routes and dynamic component views (natural top-to-down scroll reveals)
const ScrollRevealController = () => {
  const location = useLocation();

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Entering the viewport: reveal element with smooth cascade
          entry.target.classList.add('revealed');
          entry.target.classList.add('visible');
        } else {
          // Only reset element when it leaves BELOW the viewport (i.e. user scrolled back up past it)
          // entry.boundingClientRect.top > 0 means the element is now located below the visible screen.
          // This ensures animations only trigger top-to-down as you scroll downwards, preventing awkward reverse animations!
          if (entry.boundingClientRect.top > 0) {
            entry.target.classList.remove('revealed');
            entry.target.classList.remove('visible');
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.08,
      rootMargin: '0px 0px -20px 0px',
    });

    const observedSet = new WeakSet();

    const observeAll = () => {
      const targets = document.querySelectorAll(
        '.reveal-init, .reveal-left, .reveal-right, .reveal-scale, .reveal'
      );
      targets.forEach((target) => {
        if (!observedSet.has(target)) {
          observer.observe(target);
          observedSet.add(target);
        }
      });
    };

    // Staggered observation checks to guarantee elements are in DOM
    const t1 = setTimeout(observeAll, 60);
    const t2 = setTimeout(observeAll, 200);
    const t3 = setTimeout(observeAll, 450);

    // Watch for dynamically rendered cards / tab switches
    const mutationObserver = new MutationObserver(() => {
      observeAll();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [location.pathname]);

  return null;
};

function AppContent() {
  return (
    <div className="relative bg-obsidian-950 text-slate-100 min-h-screen selection:bg-purple-500 selection:text-white">
      {/* Top Route Progress Bar for Instant Interactive Feedback */}
      <RouteProgressBar />

      {/* Custom Interactive Pointer Cursor */}
      <CustomCursor />

      <ScrollRevealController />

      {/* Right Side Social & Official Season Badge */}
      <SideNav />

      {/* Top Header Navigation */}
      <Navbar />

      {/* Multi-Page Animated Route Viewport */}
      <main className="relative z-10 min-h-[70vh]">
        <PageTransition>
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
        </PageTransition>
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
