import React, { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

/**
 * ParticleGlobe
 * 
 * High-performance 3D particle globe animation for the Services page:
 * - Fibonacci sphere lattice of points
 * - Continuous smooth 3D rotation
 * - Natural scroll-linked speed acceleration & tilt
 * - Interactive mouse parallax depth
 * - Dynamic neural connection lines between front nodes
 * - Pulsing hub nodes with concentric halos
 * - Depth-dependent scaling and alpha for authentic spatial 3D
 * - High-DPI canvas rendering with automatic resize handling
 * - Respects prefers-reduced-motion accessibility
 */
export default function ParticleGlobe({ className = '' }) {
  const canvasRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = 0;
    let height = 0;

    // Rotation parameters
    let rotX = 0.18; // Base downward tilt angle
    let rotY = 0;
    let scrollSpinVelocity = 0;
    let scrollTilt = 0;
    let targetScrollTilt = 0;

    let mouseParallaxX = 0;
    let mouseParallaxY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    // Point generation: Fibonacci sphere distribution
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const numPoints = isMobile ? 160 : 260;

    const points = [];
    for (let i = 0; i < numPoints; i++) {
      // Golden ratio sphere distribution
      const phi = Math.acos(1 - (2 * (i + 0.5)) / numPoints);
      const theta = Math.PI * (1 + Math.sqrt(5)) * (i + 0.5);

      const x = Math.sin(phi) * Math.cos(theta);
      const y = Math.cos(phi);
      const z = Math.sin(phi) * Math.sin(theta);

      const isHub = i % 12 === 0;
      points.push({
        origX: x,
        origY: y,
        origZ: z,
        baseSize: isHub ? 2.6 : 1.3 + (i % 3) * 0.35,
        isHub,
        pulseOffset: (i * 0.4) % (Math.PI * 2),
        color: isHub ? '#00B9E8' : (i % 2 === 0 ? '#38BDF8' : '#0866E8')
      });
    }

    // Latitude & equatorial ring markers
    const ringPoints = [];
    const numRingPoints = isMobile ? 40 : 64;
    const latitudes = [0, 0.42, -0.42]; // Equator and two subtle parallels
    latitudes.forEach((lat) => {
      const ringRadius = Math.cos(lat);
      const ringY = Math.sin(lat);
      for (let j = 0; j < numRingPoints; j++) {
        const angle = (j / numRingPoints) * Math.PI * 2;
        ringPoints.push({
          origX: Math.cos(angle) * ringRadius,
          origY: ringY,
          origZ: Math.sin(angle) * ringRadius,
          baseSize: 0.75,
          isRing: true,
          color: '#0866E8'
        });
      }
    });

    // High-DPI Canvas Resizing
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width || window.innerWidth;
      height = rect.height || 600;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0); // reset transform before re-applying dpr
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize, { passive: true });

    // Scroll tracking: Adds subtle spin momentum and tilt
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const delta = scrollY - lastScrollY;
      lastScrollY = scrollY;

      if (!shouldReduceMotion) {
        scrollSpinVelocity += delta * 0.00045;
        // Clamp maximum scroll velocity to prevent erratic spinning
        scrollSpinVelocity = Math.max(-0.06, Math.min(0.06, scrollSpinVelocity));
        targetScrollTilt = Math.max(-0.18, Math.min(0.18, (scrollY - 300) * 0.0002));
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Subtle mouse parallax
    const handleMouseMove = (e) => {
      if (shouldReduceMotion) return;
      const rect = canvas.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > window.innerHeight) return; // ignore when out of view
      const nx = ((e.clientX - rect.left) / width - 0.5) * 2;
      const ny = ((e.clientY - rect.top) / height - 0.5) * 2;
      targetMouseX = nx * 0.16;
      targetMouseY = ny * 0.12;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Camera parameters (gentle perspective)
    const cameraZ = 850;
    const fov = 850;
    let time = 0;

    // Main 60fps render loop
    const render = () => {
      time += 0.016;

      if (!shouldReduceMotion) {
        // Base continuous rotation + scroll inertia
        rotY += 0.0022 + scrollSpinVelocity;
        scrollSpinVelocity *= 0.94; // Smooth deceleration

        // Parallax and tilt interpolation
        mouseParallaxX += (targetMouseX - mouseParallaxX) * 0.05;
        mouseParallaxY += (targetMouseY - mouseParallaxY) * 0.05;
        scrollTilt += (targetScrollTilt - scrollTilt) * 0.05;
      }

      const effectiveRotX = rotX + mouseParallaxY + scrollTilt;
      const effectiveRotY = rotY + mouseParallaxX;

      const cosX = Math.cos(effectiveRotX);
      const sinX = Math.sin(effectiveRotX);
      const cosY = Math.cos(effectiveRotY);
      const sinY = Math.sin(effectiveRotY);

      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      // Position globe comfortably in the section
      const centerY = isMobile ? Math.min(height * 0.45, 420) : height * 0.5;
      const currentRadius = isMobile 
        ? Math.min(width * 0.42, 180) 
        : Math.min(width * 0.32, height * 0.44, 300);

      // Project all points
      const allPoints = [...points, ...ringPoints];
      const projected = [];

      for (let i = 0; i < allPoints.length; i++) {
        const p = allPoints[i];

        // 1. Scale point to sphere radius
        const px = p.origX * currentRadius;
        const py = p.origY * currentRadius;
        const pz = p.origZ * currentRadius;

        // 2. Rotate around Y axis
        const x1 = px * cosY + pz * sinY;
        const y1 = py;
        const z1 = -px * sinY + pz * cosY;

        // 3. Rotate around X axis
        const x2 = x1;
        const y2 = y1 * cosX - z1 * sinX;
        const z2 = y1 * sinX + z1 * cosX;

        // 4. Perspective projection
        const scale = fov / (cameraZ - z2);
        const projX = centerX + x2 * scale;
        const projY = centerY + y2 * scale;

        // Depth alpha: Front points are bright and crisp, back points are subtle and atmospheric
        const depthRatio = (z2 + currentRadius) / (2 * currentRadius); // 0 to 1
        const alpha = Math.max(0.1, Math.min(0.95, depthRatio * 0.85 + 0.1));

        projected.push({
          projX,
          projY,
          z: z2,
          scale,
          alpha,
          baseSize: p.baseSize,
          isHub: p.isHub,
          isRing: p.isRing,
          color: p.color,
          pulseOffset: p.pulseOffset || 0
        });
      }

      // Sort by Z (back to front) for accurate spatial blending
      projected.sort((a, b) => a.z - b.z);

      // 1. Draw neural connection network lines between nearby front-facing nodes
      ctx.lineWidth = 0.65;
      const maxConnectDist = currentRadius * 0.36;
      const frontPoints = projected.filter(p => !p.isRing && p.z > -currentRadius * 0.25);

      for (let i = 0; i < frontPoints.length; i++) {
        const p1 = frontPoints[i];
        let connections = 0;
        for (let j = i + 1; j < frontPoints.length && connections < 3; j++) {
          const p2 = frontPoints[j];
          const dx = p1.projX - p2.projX;
          const dy = p1.projY - p2.projY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectDist) {
            connections++;
            const lineAlpha = (1 - dist / maxConnectDist) * Math.min(p1.alpha, p2.alpha) * 0.32;
            ctx.strokeStyle = `rgba(0, 185, 232, ${lineAlpha})`;
            ctx.beginPath();
            ctx.moveTo(p1.projX, p1.projY);
            ctx.lineTo(p2.projX, p2.projY);
            ctx.stroke();
          }
        }
      }

      // 2. Draw nodes & orbital rings
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];

        if (p.isRing) {
          // Subtle orbital guide ring dots
          ctx.fillStyle = `rgba(8, 102, 232, ${p.alpha * 0.3})`;
          ctx.beginPath();
          ctx.arc(p.projX, p.projY, p.baseSize * p.scale, 0, Math.PI * 2);
          ctx.fill();
          continue;
        }

        const size = p.baseSize * p.scale;

        // Hub nodes with pulsing halo
        if (p.isHub && p.z > 0) {
          const pulse = (Math.sin(time * 3 + p.pulseOffset) + 1) * 0.5;
          const haloRadius = size * (1.6 + pulse * 0.7);

          // Outer halo pulse ring
          ctx.strokeStyle = `rgba(0, 185, 232, ${p.alpha * 0.45 * (1 - pulse * 0.4)})`;
          ctx.lineWidth = 0.75;
          ctx.beginPath();
          ctx.arc(p.projX, p.projY, haloRadius, 0, Math.PI * 2);
          ctx.stroke();

          // Bright center core
          ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
          ctx.beginPath();
          ctx.arc(p.projX, p.projY, size * 0.85, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Standard network particle
          if (p.z > 0) {
            ctx.fillStyle = p.color === '#00B9E8' 
              ? `rgba(0, 185, 232, ${p.alpha * 0.9})`
              : `rgba(56, 189, 248, ${p.alpha * 0.85})`;
          } else {
            ctx.fillStyle = `rgba(8, 102, 232, ${p.alpha * 0.45})`;
          }

          ctx.beginPath();
          ctx.arc(p.projX, p.projY, Math.max(0.6, size), 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Subtle atmospheric radial core glow
      const coreGradient = ctx.createRadialGradient(
        centerX, centerY, 0,
        centerX, centerY, currentRadius * 0.95
      );
      coreGradient.addColorStop(0, 'rgba(8, 102, 232, 0.06)');
      coreGradient.addColorStop(0.6, 'rgba(0, 185, 232, 0.025)');
      coreGradient.addColorStop(1, 'transparent');
      ctx.fillStyle = coreGradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, currentRadius, 0, Math.PI * 2);
      ctx.fill();

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [shouldReduceMotion]);

  return (
    <div className={`pointer-events-none select-none overflow-hidden ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}
