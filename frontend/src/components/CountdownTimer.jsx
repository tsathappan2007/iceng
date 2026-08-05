import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate = "2027-03-15T09:00:00" }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTime = () => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const padZero = (num) => String(num).padStart(2, '0');

  // Percentage calculations for SVG progress rings
  const daysProgress = Math.max(0, Math.min(100, (timeLeft.days / 365) * 100));
  const hoursProgress = (timeLeft.hours / 24) * 100;
  const minutesProgress = (timeLeft.minutes / 60) * 100;
  const secondsProgress = (timeLeft.seconds / 60) * 100;

  const timerUnits = [
    { label: 'DAYS', value: padZero(timeLeft.days), progress: daysProgress },
    { label: 'HOURS', value: padZero(timeLeft.hours), progress: hoursProgress },
    { label: 'MINUTES', value: padZero(timeLeft.minutes), progress: minutesProgress },
    { label: 'SECONDS', value: padZero(timeLeft.seconds), progress: secondsProgress },
  ];

  return (
    <div className="relative z-10 max-w-2xl mx-auto my-3 p-4 sm:p-5 rounded-3xl bg-[#0a1128] border border-cyan-500/30">
      
      {/* Minimal Header */}
      <div className="flex items-center justify-center gap-2 pb-3 mb-4 border-b border-cyan-500/15">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
        <span className="text-[11px] sm:text-xs font-extrabold tracking-widest text-cyan-300 uppercase font-mono">
          COUNTING TO MARCH 2027
        </span>
      </div>

      {/* Circular Telemetry Units Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center justify-center">
        {timerUnits.map((unit, idx) => {
          const radius = 34;
          const circumference = 2 * Math.PI * radius;
          const strokeDashoffset = circumference - (unit.progress / 100) * circumference;

          return (
            <div key={idx} className="flex flex-col items-center group relative">
              
              {/* Telemetry Capsule Base */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center rounded-full bg-[#060b19] border border-cyan-500/30 group-hover:border-cyan-400/80 transition-all duration-300">
                
                {/* Outer Circular SVG Progress Meter */}
                <svg className="absolute inset-0 w-full h-full -rotate-90 p-1" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r={radius}
                    className="stroke-slate-800/60"
                    strokeWidth="3.5"
                    fill="transparent"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r={radius}
                    className="stroke-cyan-400 transition-all duration-1000 ease-linear"
                    strokeWidth="3.5"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    fill="transparent"
                  />
                </svg>

                {/* Number Display */}
                <div className="relative z-10 text-center flex flex-col items-center">
                  <span className="text-2xl sm:text-3xl font-black font-mono tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                    {unit.value}
                  </span>
                </div>

                {/* Inner Glow Center */}
                <div className="absolute inset-2 rounded-full bg-cyan-500/5 group-hover:bg-cyan-500/10 transition-colors pointer-events-none" />
              </div>

              {/* Unit Label Pill */}
              <div className="mt-2.5 px-3 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-500/20 text-[9px] font-extrabold tracking-widest text-cyan-300 uppercase font-mono group-hover:border-cyan-400/50 transition-colors">
                {unit.label}
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default CountdownTimer;
