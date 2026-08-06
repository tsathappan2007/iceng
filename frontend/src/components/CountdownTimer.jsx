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

  const timerUnits = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: padZero(timeLeft.hours) },
    { label: 'MINUTES', value: padZero(timeLeft.minutes) },
    { label: 'SECONDS', value: padZero(timeLeft.seconds) },
  ];

  // Alternating blink state based on current second
  const isEvenSecond = timeLeft.seconds % 2 === 0;

  return (
    <div className="w-full max-w-4xl mx-auto my-4 px-2 sm:px-4">
      
      {/* Top Header Badge with Lines & Dots */}
      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="flex items-center gap-1.5 flex-1 max-w-[100px] sm:max-w-[160px]">
          <div className="h-[1.5px] w-full bg-gradient-to-r from-transparent via-blue-300 to-blue-500 rounded-full" />
          <div className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
        </div>

        <span className="text-[11px] sm:text-xs font-black tracking-widest text-blue-600 uppercase whitespace-nowrap px-1">
          CONFERENCE STARTS IN
        </span>

        <div className="flex items-center gap-1.5 flex-1 max-w-[100px] sm:max-w-[160px]">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
          <div className="h-[1.5px] w-full bg-gradient-to-l from-transparent via-blue-300 to-blue-500 rounded-full" />
        </div>
      </div>

      {/* Seamless Merged Timer Content (No Background Box/Border/Shadow) */}
      <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-4 sm:gap-6 py-2">
        
        {/* Left Side Calendar Icon Pill */}
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-blue-100/60 border border-blue-200/60 flex items-center justify-center text-blue-600 shrink-0 shadow-xs backdrop-blur-xs">
          <svg className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>

        {/* Time Units Grid / Row */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-8 flex-1">
          {timerUnits.map((unit, idx) => {
            // Determine alternating blink visibility for separators
            const shouldBlinkOn = idx % 2 === 0 ? isEvenSecond : !isEvenSecond;

            return (
              <React.Fragment key={idx}>
                <div className="flex flex-col items-center justify-center text-center min-w-[55px] sm:min-w-[70px]">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#155dfc] font-sans">
                    {unit.value}
                  </span>
                  <span className="text-[9px] sm:text-[11px] font-black tracking-widest text-slate-500 uppercase mt-1">
                    {unit.label}
                  </span>
                </div>

                {/* Alternating Blinking Colon Separator */}
                {idx < timerUnits.length - 1 && (
                  <div className="flex items-center justify-center -mt-4 px-0.5 self-center select-none">
                    <span 
                      className={`text-xl sm:text-2xl font-black text-blue-500 font-mono transition-all duration-300 ${
                        shouldBlinkOn ? 'opacity-100 scale-110' : 'opacity-20 scale-90'
                      }`}
                    >
                      :
                    </span>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

      </div>

    </div>
  );
};

export default CountdownTimer;
