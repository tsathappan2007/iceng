import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import Hero from '../components/Hero';

// Animated Count Up Component (starts from 0 and smoothly counts up to target)
const CountUpStat = ({ target, suffix = '', prefix = '', isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    let animationFrameId;
    const duration = 1800; // 1.8s smooth easing curve

    if (isVisible) {
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        // Exponential ease-out curve for gentle, realistic deceleration
        const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        setCount(Math.floor(easeOut * target));

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(animate);
        } else {
          setCount(target);
        }
      };
      animationFrameId = requestAnimationFrame(animate);
    } else {
      setCount(0); // Reset to 0 when scrolled away!
    }

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible, target]);

  return <span>{prefix}{count.toLocaleString()}{suffix}</span>;
};

const HomePage = () => {
  const { isSignedIn } = useUser();
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { label: 'GLOBAL COUNTRIES', target: 30, suffix: '+', color: 'text-blue-600' },
    { label: 'PEER REVIEWED', target: 100, suffix: '%', color: 'text-amber-500' },
    { label: 'ACCEPTED PAPERS', target: 150, suffix: '+', color: 'text-blue-600' },
    { label: 'DELEGATES & ALUMNI', target: 2500, suffix: '+', color: 'text-amber-500' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Repeatedly re-trigger when scrolling into view, reset when scrolling away
        setIsSectionVisible(entry.isIntersecting);
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    const currentEl = sectionRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) observer.unobserve(currentEl);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="space-y-16 bg-[#f8fafc]">
      {/* Landing Hero Section */}
      <Hero />

      {/* Quick Overview & Key Stats Teaser */}
      <section ref={sectionRef} className="py-16 px-4 max-w-6xl mx-auto text-center relative z-10">
        <div className={`overview-box p-8 sm:p-12 rounded-[36px] bg-white border border-slate-200/90 shadow-xl transition-all duration-700 relative overflow-hidden transform ${
          isSectionVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-[0.98]'
        }`}>
          
          {/* Top Royal Blue Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-[3.5px] bg-blue-600" />
          
          <span className="text-xs font-extrabold tracking-widest text-blue-800 uppercase bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200 shadow-sm inline-block">
            BIENNIAL INTERNATIONAL FLAGSHIP
          </span>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tight mt-6 mb-4">
            Welcome to <span className="text-blue-600 glow-title">ICAINGCIT 2027</span>
          </h2>

          <p className="text-slate-700 text-sm sm:text-base font-medium max-w-3xl mx-auto leading-relaxed mb-8">
            The International Conference on Next-Gen Computing &amp; Information Technology brings together top academic pioneers, researchers, and industry visionaries from across 30+ countries to shape the future of AI, Cloud, Cybersecurity, and IoT.
          </p>

          {/* Key Stats Grid with Re-triggering Count-Up Animation */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-10">
            {stats.map((stat, idx) => {
              return (
                <div
                  key={idx}
                  style={{
                    transitionDelay: isSectionVisible ? `${idx * 120 + 100}ms` : '0ms'
                  }}
                  className={`card-interactive p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-50/80 via-slate-50 to-indigo-50/80 border border-slate-200/90 text-center shadow-md hover:border-blue-400 transition-all duration-700 transform ${
                    isSectionVisible
                      ? 'opacity-100 translate-y-0 scale-100'
                      : 'opacity-0 translate-y-6 scale-95'
                  }`}
                >
                  <div className={`text-3xl sm:text-4xl font-black font-mono tracking-tight ${stat.color}`}>
                    <CountUpStat
                      target={stat.target}
                      suffix={stat.suffix}
                      isVisible={isSectionVisible}
                    />
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-extrabold text-slate-600 uppercase mt-1 tracking-wider">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/about"
              className="btn-interactive px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-900 font-extrabold text-xs uppercase tracking-wider shadow-sm"
            >
              LEARN MORE ABOUT EVENT
            </Link>
            <Link
              to={isSignedIn ? "/submit" : "/login"}
              className="btn-interactive btn-shimmer px-6 py-3 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs uppercase tracking-wider shadow-md"
            >
              SUBMIT MANUSCRIPT
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
