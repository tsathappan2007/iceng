import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const RouteProgressBar = () => {
  const location = useLocation();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Start progress on route change
    setVisible(true);
    setProgress(25);

    const t1 = setTimeout(() => setProgress(65), 60);
    const t2 = setTimeout(() => setProgress(90), 140);
    const t3 = setTimeout(() => setProgress(100), 220);
    const t4 = setTimeout(() => {
      setVisible(false);
      setProgress(0);
    }, 400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [location.pathname]);

  if (!visible && progress === 0) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] h-[3px] pointer-events-none overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-blue-600 via-indigo-500 to-amber-400 transition-all duration-200 ease-out relative shadow-[0_0_12px_rgba(37,99,235,0.75)]"
        style={{
          width: `${progress}%`,
          opacity: visible ? 1 : 0,
          transition: progress === 100 ? 'width 100ms ease-out, opacity 200ms ease-out' : 'width 180ms ease-out'
        }}
      >
        {/* Leading edge bright glowing head */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-r from-transparent to-white/90 blur-[1px] shadow-[0_0_10px_#ffffff]" />
      </div>
    </div>
  );
};

export default RouteProgressBar;
