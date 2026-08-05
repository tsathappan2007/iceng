import React, { useEffect, useState, useRef } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [ringPosition, setRingPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState(true);

  const posRef = useRef({ x: -100, y: -100 });
  const ringRef = useRef({ x: -100, y: -100 });
  const animFrameId = useRef(null);

  useEffect(() => {
    // Enable only for fine pointer (mouse devices)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsFinePointer(mediaQuery.matches);

    const handleMediaChange = (e) => setIsFinePointer(e.matches);
    mediaQuery.addEventListener?.('change', handleMediaChange);

    const onMouseMove = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // Smooth Lerp loop for ring positioning
    const render = () => {
      ringRef.current.x += (posRef.current.x - ringRef.current.x) * 0.18;
      ringRef.current.y += (posRef.current.y - ringRef.current.y) * 0.18;
      setRingPosition({ x: ringRef.current.x, y: ringRef.current.y });

      animFrameId.current = requestAnimationFrame(render);
    };
    animFrameId.current = requestAnimationFrame(render);

    // Hover detection listener
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.closest('a, button, input, select, textarea, [role="button"], .group, [data-cursor="hover"]')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
      mediaQuery.removeEventListener?.('change', handleMediaChange);
    };
  }, []);

  if (!isFinePointer || !isVisible) return null;

  return (
    <>
      {/* Primary Inner Precision Dot */}
      <div
        className={`fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-blue-600 pointer-events-none z-50 transition-transform duration-75 ease-out ${
          isClicked ? 'scale-75' : isHovered ? 'scale-125 bg-amber-500' : 'scale-100'
        }`}
        style={{
          transform: `translate3d(${position.x - 5}px, ${position.y - 5}px, 0)`,
        }}
      />

      {/* Smooth Lagging Neumorphic / Glowing Aura Ring */}
      <div
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-40 transition-all duration-300 ease-out border ${
          isHovered
            ? 'w-12 h-12 border-amber-400 bg-amber-400/10 shadow-[0_0_20px_rgba(245,158,11,0.35)]'
            : isClicked
            ? 'w-6 h-6 border-blue-600 bg-blue-600/20 scale-90'
            : 'w-9 h-9 border-blue-500/50 bg-blue-500/10 shadow-[0_0_15px_rgba(37,99,235,0.2)]'
        }`}
        style={{
          transform: `translate3d(${ringPosition.x - (isHovered ? 24 : 18)}px, ${ringPosition.y - (isHovered ? 24 : 18)}px, 0)`,
        }}
      />
    </>
  );
};

export default CustomCursor;
