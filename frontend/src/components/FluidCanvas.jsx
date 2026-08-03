import React, { useEffect, useRef } from 'react';
import WebGLFluid from 'webgl-fluid';

const FluidCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    try {
      WebGLFluid(canvas, {
        IMMEDIATE: true,
        TRIGGER: 'hover',
        AUTO: false,
        SIM_RESOLUTION: 128,
        DYE_RESOLUTION: 512,
        CAPTURE_RESOLUTION: 512,
        DENSITY_DISSIPATION: 1.5,
        VELOCITY_DISSIPATION: 0.8,
        PRESSURE: 0.8,
        PRESSURE_ITERATIONS: 20,
        CURL: 30,
        SPLAT_RADIUS: 0.35,
        SPLAT_FORCE: 6000,
        SHADING: true,
        COLORFUL: true,
        COLOR_UPDATE_SPEED: 12,
        PAUSED: false,
        BACK_COLOR: { r: 3, g: 3, b: 8 },
        TRANSPARENT: true,
        BLOOM: true,
        BLOOM_ITERATIONS: 5,
        BLOOM_RESOLUTION: 256,
        BLOOM_INTENSITY: 0.6,
        BLOOM_THRESHOLD: 0.5,
        BLOOM_SOFT_KNEE: 0.7,
        SUNRAYS: false,
      });
    } catch (err) {
      console.warn("WebGL Fluid error:", err);
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0 pointer-events-auto opacity-70"
      style={{ touchAction: 'none' }}
    />
  );
};

export default FluidCanvas;
