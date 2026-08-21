import React, { useState, useEffect, useRef } from 'react';
import citAboutImg from '../assets/cit-about.jpeg';

// Animated Count Up Component (repeats when scrolled back into view)
const CountUpBadge = ({ target, suffix = '', prefix = '', isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    let animationFrameId;
    const duration = 1600;

    if (isVisible) {
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
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
      setCount(0); // Reset when scrolled away
    }

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible, target]);

  return <span>{prefix}{count.toLocaleString()}{suffix}</span>;
};

const AboutCIT = () => {
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSectionVisible(entry.isIntersecting);
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -30px 0px'
      }
    );

    const currentEl = sectionRef.current;
    if (currentEl) observer.observe(currentEl);

    return () => {
      if (currentEl) observer.unobserve(currentEl);
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} id="about-cit" className="py-24 px-4 relative z-10 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          <div className="reveal-left lg:col-span-7 flex flex-col justify-between space-y-6">
            <div>
              {/* Perfectly Aligned Animated Badge */}
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="badge-glow text-xs font-mono font-black tracking-widest text-blue-700 uppercase bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200 shadow-sm inline-flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                  HOST INSTITUTION
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tight mb-6">
                Chennai Institute <span className="text-blue-600 glow-title">of Technology</span>
              </h2>

              <div className="space-y-4 max-w-2xl">
                <p className="text-base sm:text-lg text-slate-900 leading-relaxed font-extrabold">
                  Chennai Institute of Technology (CIT), an Autonomous Institution affiliated with Anna University, Tamil Nadu, was established with the objective of providing quality technical education with rich industrial exposure to cater to the evolving needs of the youth through innovative teaching methodologies.
                </p>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Beyond interactive classroom scenarios, periodic guest lectures and symposia led by industry stalwarts and academic pioneers inspire students to learn and prepare for ready-to-serve industrial and research requirements with uncompromised professional ethics.
                </p>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Accredited with an <strong className="text-slate-900 font-extrabold">NAAC A+ Grade</strong> and ranked prominently in NIRF Engineering rankings, CIT fosters a premier ecosystem of innovation, state-of-the-art research Centers of Excellence, and global academic partnerships.
                </p>
              </div>
            </div>

            {/* Bottom 3 Grade & COE Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="reveal-init delay-150 card-interactive p-4 rounded-2xl bg-gradient-to-r from-blue-50/90 via-slate-50 to-indigo-50/90 border border-blue-200/80 shadow-sm text-center hover:border-blue-400">
                <div className="text-2xl sm:text-3xl font-black text-blue-600 font-mono">NAAC A+</div>
                <div className="text-[11px] font-bold text-slate-600 uppercase mt-1">Accredited Grade</div>
              </div>
              <div className="reveal-init delay-250 card-interactive p-4 rounded-2xl bg-gradient-to-r from-blue-50/90 via-slate-50 to-indigo-50/90 border border-blue-200/80 shadow-sm text-center hover:border-amber-400">
                <div className="text-2xl sm:text-3xl font-black text-amber-500 font-mono">NIRF Top</div>
                <div className="text-[11px] font-bold text-slate-600 uppercase mt-1">Engineering Rank</div>
              </div>
              <div className="reveal-init delay-350 card-interactive p-4 rounded-2xl bg-gradient-to-r from-blue-50/90 via-slate-50 to-indigo-50/90 border border-blue-200/80 shadow-sm text-center col-span-2 sm:col-span-1 hover:border-blue-400">
                <div className="text-2xl sm:text-3xl font-black text-blue-600 font-mono">
                  <CountUpBadge target={25} suffix="+" isVisible={isSectionVisible} />
                </div>
                <div className="text-[11px] font-bold text-slate-600 uppercase mt-1">Centers of Excellence</div>
              </div>
            </div>
          </div>

          {/* Right Column: Campus Image Card */}
          <div className="reveal-right delay-200 lg:col-span-5 flex">
            <div className="card-interactive relative w-full rounded-3xl overflow-hidden border border-slate-200 shadow-xl min-h-[420px] lg:min-h-[500px] flex">
              <img
                src={citAboutImg}
                alt="Chennai Institute of Technology Campus"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <div className="text-xs font-mono font-bold text-amber-400">SARATHY NAGAR, CHENNAI</div>
                  <div className="text-lg sm:text-xl font-extrabold">State-of-the-Art Academic Campus</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutCIT;
