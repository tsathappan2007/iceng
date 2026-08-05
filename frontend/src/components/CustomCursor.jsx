import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mouse = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const isHovered = useRef(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine)');
    if (!mediaQuery.matches) return;

    const onMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.opacity = '1';
        dotRef.current.style.transform = `translate3d(${e.clientX - 5}px, ${e.clientY - 5}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.opacity = '1';
      }
    };

    const onMouseDown = () => {
      if (ringRef.current) ringRef.current.style.transform += ' scale(0.8)';
    };

    const onMouseUp = () => {
      if (ringRef.current) ringRef.current.style.transform = ringRef.current.style.transform.replace(' scale(0.8)', '');
    };

    const onMouseLeave = () => {
      if (dotRef.current) dotRef.current.style.opacity = '0';
      if (ringRef.current) ringRef.current.style.opacity = '0';
    };

    const onMouseEnter = () => {
      if (dotRef.current) dotRef.current.style.opacity = '1';
      if (ringRef.current) ringRef.current.style.opacity = '1';
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    let animId;
    const loop = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.2;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.2;

      if (ringRef.current) {
        const offset = isHovered.current ? 20 : 16;
        ringRef.current.style.transform = `translate3d(${ring.current.x - offset}px, ${ring.current.y - offset}px, 0)`;
      }

      animId = requestAnimationFrame(loop);
    };
    animId = requestAnimationFrame(loop);

    const onMouseOver = (e) => {
      const isInteractive = e.target.closest('a, button, input, select, textarea, [role="button"], .group');
      if (isInteractive) {
        isHovered.current = true;
        if (ringRef.current) {
          ringRef.current.className = "fixed top-0 left-0 w-10 h-10 rounded-full border-2 border-amber-400 bg-amber-400/10 pointer-events-none z-40 opacity-0 transition-colors duration-200 shadow-[0_0_20px_rgba(245,158,11,0.35)]";
        }
      } else {
        isHovered.current = false;
        if (ringRef.current) {
          ringRef.current.className = "fixed top-0 left-0 w-8 h-8 rounded-full border border-blue-500/50 bg-blue-500/10 pointer-events-none z-40 opacity-0 transition-colors duration-200 shadow-[0_0_15px_rgba(37,99,235,0.2)]";
        }
      }
    };

    window.addEventListener('mouseover', onMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      window.removeEventListener('mouseover', onMouseOver);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      {/* Primary Inner Precision Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-blue-600 pointer-events-none z-50 opacity-0 transition-opacity duration-300"
        style={{ willChange: 'transform' }}
      />

      {/* Outer Lagging Aura Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-blue-500/50 bg-blue-500/10 pointer-events-none z-40 opacity-0 transition-colors duration-200 shadow-[0_0_15px_rgba(37,99,235,0.2)]"
        style={{ willChange: 'transform' }}
      />
    </>
  );
};

export default CustomCursor;
