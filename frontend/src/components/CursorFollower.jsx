import React, { useEffect, useRef, useState } from 'react';

const CursorFollower = () => {
  const dotRef = useRef(null);
  const glowRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Hide default cursor on desktop for custom experience
    const targetPos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const currentDot = { x: targetPos.x, y: targetPos.y };
    const currentGlow = { x: targetPos.x, y: targetPos.y };

    let animationFrameId;

    const handleMouseMove = (e) => {
      targetPos.x = e.clientX;
      targetPos.y = e.clientY;

      if (!isVisible) setIsVisible(true);

      // Check if hovering over interactive elements
      const target = e.target;
      const isInteractive = target.closest('a, button, input, select, textarea, .interactive, [role="button"]');
      setIsHovered(!!isInteractive);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    const lerp = (start, end, factor) => start + (end - start) * factor;

    const render = () => {
      // Lerp calculations for ultra-smooth movement
      currentDot.x = lerp(currentDot.x, targetPos.x, 0.25);
      currentDot.y = lerp(currentDot.y, targetPos.y, 0.25);

      currentGlow.x = lerp(currentGlow.x, targetPos.x, 0.08);
      currentGlow.y = lerp(currentGlow.y, targetPos.y, 0.08);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${currentDot.x}px, ${currentDot.y}px, 0) translate(-50%, -50%) scale(${isHovered ? 1.8 : 1})`;
      }

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${currentGlow.x}px, ${currentGlow.y}px, 0) translate(-50%, -50%) scale(${isHovered ? 1.25 : 1})`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isHovered, isVisible]);

  if (typeof window === 'undefined') return null;

  return (
    <div className={`pointer-events-none fixed inset-0 z-50 overflow-hidden transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Large fluid ambient purple/violet glowing light orb following cursor */}
      <div
        ref={glowRef}
        className="absolute top-0 left-0 w-[550px] h-[550px] rounded-full pointer-events-none transition-transform duration-75 ease-out opacity-75 blur-[110px]"
        style={{
          background: 'radial-gradient(circle, rgba(157, 78, 221, 0.45) 0%, rgba(123, 44, 191, 0.25) 40%, rgba(0, 245, 212, 0.08) 70%, transparent 100%)',
          willChange: 'transform',
        }}
      />

      {/* Secondary glowing precision cursor dot */}
      <div
        ref={dotRef}
        className={`absolute top-0 left-0 rounded-full pointer-events-none transition-all duration-150 ease-out border border-white/60 shadow-[0_0_20px_rgba(157,78,221,0.9)] ${
          isHovered ? 'w-10 h-10 bg-purple-500/30 backdrop-blur-xs border-cyan-400' : 'w-4 h-4 bg-white/90'
        }`}
        style={{ willChange: 'transform' }}
      />
    </div>
  );
};

export default CursorFollower;
