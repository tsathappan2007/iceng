import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate = "2027-07-15T09:00:00" }) => {
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
    <div className="relative z-10 max-w-3xl mx-auto my-6 p-6 sm:p-8 rounded-[36px] neu-flat border border-white/80">
      
      {/* Neumorphic Header Bar */}
      <div className="flex justify-center mb-6">
        <div className="neu-pressed px-5 py-2 rounded-full inline-flex items-center gap-2.5 border border-slate-200/50">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
          </span>
          <span className="text-[11px] sm:text-xs font-black tracking-widest text-blue-700 uppercase font-mono">
            COUNTDOWN TO IEEE ICAINGCIT 2027
          </span>
        </div>
      </div>

      {/* Neumorphic Circular Dials Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center mb-6">
        {timerUnits.map((unit, idx) => {
          const radius = 34;
          const circumference = 2 * Math.PI * radius;
          const strokeDashoffset = circumference - (unit.progress / 100) * circumference;

          return (
            <div key={idx} className="flex flex-col items-center group relative">
              
              {/* Inset Neumorphic Circular Well */}
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full neu-pressed p-2.5 flex items-center justify-center transition-all duration-300">
                
                {/* Inner Convex Neumorphic Dial Button */}
                <div className="w-full h-full rounded-full neu-dial flex flex-col items-center justify-center relative transition-transform duration-300 group-hover:scale-105">
                  
                  {/* Outer Circular SVG Progress Meter */}
                  <svg className="absolute inset-0 w-full h-full -rotate-90 p-1.5" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r={radius}
                      className="stroke-slate-200/60"
                      strokeWidth="4"
                      fill="transparent"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r={radius}
                      className="stroke-blue-600 transition-all duration-1000 ease-linear"
                      strokeWidth="4"
                      strokeDasharray={circumference}
                      strokeDashoffset={strokeDashoffset}
                      strokeLinecap="round"
                      fill="transparent"
                    />
                  </svg>

                  {/* Number Display */}
                  <div className="relative z-10 text-center flex flex-col items-center">
                    <span className="text-2xl sm:text-3xl font-black font-mono tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                      {unit.value}
                    </span>
                  </div>

                </div>

              </div>

              {/* Unit Label Pill - Neumorphic Capsule */}
              <div className="mt-3 px-4 py-1 rounded-full neu-convex text-[10px] font-black tracking-widest text-blue-700 uppercase font-mono group-hover:text-amber-600 transition-colors">
                {unit.label}
              </div>
            </div>
          );
        })}
      </div>

      {/* Neumorphic Footer Event Date Pill */}
      <div className="flex justify-center">
        <div className="neu-pressed px-6 py-2.5 rounded-full inline-flex items-center gap-2 text-xs font-mono font-bold text-slate-700 border border-slate-200/50">
          <span>📅</span>
          <span>Target Date: <strong className="text-blue-600 font-extrabold">15–17 July 2027</strong></span>
        </div>
      </div>

    </div>
  );
};

export default CountdownTimer;
