import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageTransition = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // If there is a hash, smooth scroll to the target element
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const timer = setTimeout(() => {
        const elem = document.getElementById(targetId);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150);
      return () => clearTimeout(timer);
    } else {
      // Smoothly scroll to the top of the new page
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [location.pathname, location.hash]);

  return (
    <div key={location.pathname} className="animate-page-enter min-h-[70vh] w-full">
      {children}
    </div>
  );
};

export default PageTransition;
