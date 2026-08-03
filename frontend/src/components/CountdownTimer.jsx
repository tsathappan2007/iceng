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

  const timerItems = [
    { label: 'DAYS', value: padZero(timeLeft.days) },
    { label: 'HOURS', value: padZero(timeLeft.hours) },
    { label: 'MINUTES', value: padZero(timeLeft.minutes) },
    { label: 'SECONDS', value: padZero(timeLeft.seconds) },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-2xl mx-auto my-8">
      {timerItems.map((item, idx) => (
        <div
          key={idx}
          className="group relative flex flex-col items-center justify-center p-4 md:p-6 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-purple-500/50 transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.6)] hover:shadow-[0_0_25px_rgba(157,78,221,0.25)]"
        >
          <div className="text-3xl md:text-5xl font-extrabold tracking-tight text-white font-mono group-hover:text-purple-300 transition-colors">
            {item.value}
          </div>
          <div className="text-[10px] md:text-xs font-semibold tracking-widest text-gray-400 mt-2 uppercase">
            {item.label}
          </div>
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
