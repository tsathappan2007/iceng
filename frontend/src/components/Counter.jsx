import React, { useState, useEffect, useRef } from 'react';

const Counter = ({ end, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const numericTarget = parseInt(String(end).replace(/\D/g, ''), 10) || 0;
    if (!counterRef.current) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;

        let startTime = null;
        const step = (timestamp) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / duration, 1);
          // Ease-out quad function for smooth deceleration
          const currentCount = Math.floor((1 - (1 - progress) * (1 - progress)) * numericTarget);
          setCount(currentCount);

          if (progress < 1) {
            requestAnimationFrame(step);
          } else {
            setCount(numericTarget);
          }
        };

        requestAnimationFrame(step);
      }
    }, { threshold: 0.2 });

    observer.observe(counterRef.current);

    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={counterRef}>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

export default Counter;
