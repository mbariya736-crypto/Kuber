import React, { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

/**
 * ServicesMotionBackground
 * 
 * Subtle, professionally handcrafted background animation for the Services section
 * and all internal service pages.
 * 
 * Design Standards:
 * - Perfectly balanced for the light-blue and white theme (#FFFFFF, #F8FAFD, #082B59)
 * - Subtle, calm blue particles (#0866E8, #00B9E8, #38BDF8) with gentle opacity
 * - Soft, non-distracting glowing dots with natural radial diffusion
 * - Gentle flowing light-blue streamline ribbons drifting calmly
 * - Fixed full-screen canvas (fixed inset-0) covering 100% of page height on all devices
 * - Natural scroll inertia and gentle parallax without visual clutter
 * - Strictly pointer-events-none at z-0, ensuring all cards, buttons, and text remain crisp
 */
export default function ServicesMotionBackground({ className = '' }) {
  const canvasRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animId;
    let width = 0;
    let height = 0;
    let dpr = 1;

    let scrollY = typeof window !== 'undefined' ? window.scrollY : 0;
    let targetScrollY = scrollY;
    let scrollVelocity = 0;
    let mouse = { x: -2000, y: -2000, targetX: -2000, targetY: -2000 };

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const particleCount = isMobile ? 42 : 72;

    // Calm, elegantly distributed particle system
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      const isHub = i % 7 === 0;
      particles.push({
        x: Math.random(),
        y: Math.random(),
        baseRadius: isHub ? 3.2 : 1.8 + Math.random() * 1.2,
        isHub,
        vx: (Math.random() - 0.5) * 0.18,
        vy: 0.12 + Math.random() * 0.22,
        pulseOffset: Math.random() * Math.PI * 2,
        pulseSpeed: 1.0 + Math.random() * 1.2,
        alpha: isHub ? 0.48 : 0.28 + Math.random() * 0.22,
        color: i % 3 === 0 ? '#0866E8' : (i % 3 === 1 ? '#00B9E8' : '#38BDF8')
      });
    }

    // 4 subtle streamline wave currents
    const streamCount = isMobile ? 2 : 4;
    const streams = [];
    for (let s = 0; s < streamCount; s++) {
      streams.push({
        yRatio: 0.16 + (s * 0.24),
        amplitude: 24 + s * 10,
        frequency: 0.0014 + s * 0.0004,
        speed: 0.006 + s * 0.002,
        phase: (s * Math.PI) / 2,
        lineWidth: 1.4 + (s % 2) * 0.4,
        color: s % 2 === 0 ? 'rgba(8, 102, 232, 0.09)' : 'rgba(0, 185, 232, 0.11)'
      });
    }

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width || window.innerWidth;
      height = rect.height || window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize, { passive: true });

    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;
      lastScrollY = currentScrollY;
      targetScrollY = currentScrollY;
      if (!shouldReduceMotion) {
        scrollVelocity += delta * 0.0018;
        scrollVelocity = Math.max(-1.8, Math.min(1.8, scrollVelocity));
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const handleMouseMove = (e) => {
      if (shouldReduceMotion) return;
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    let time = 0;

    const render = () => {
      time += 0.016;

      if (!shouldReduceMotion) {
        scrollY += (targetScrollY - scrollY) * 0.07;
        scrollVelocity *= 0.94;
        mouse.x += (mouse.targetX - mouse.x) * 0.05;
        mouse.y += (mouse.targetY - mouse.y) * 0.05;
      }

      ctx.clearRect(0, 0, width, height);

      // 1. Subtle streamline ribbons
      streams.forEach((stream) => {
        ctx.beginPath();
        const baseStreamY = ((stream.yRatio * height + scrollY * 0.12) % (height * 1.2)) - height * 0.1;
        const wavePhase = time * stream.speed + stream.phase;

        ctx.moveTo(0, baseStreamY + Math.sin(wavePhase) * stream.amplitude);
        const step = 25;
        for (let x = 0; x <= width + step; x += step) {
          const waveY = Math.sin(x * stream.frequency + wavePhase) * stream.amplitude;
          ctx.lineTo(x, baseStreamY + waveY);
        }

        ctx.strokeStyle = stream.color;
        ctx.lineWidth = stream.lineWidth;
        ctx.stroke();
      });

      // 2. Position particles
      const currentCoords = [];
      const scrollOffset = scrollY * 0.28;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!shouldReduceMotion) {
          p.x += (p.vx / width) * 10;
          p.y += (p.vy / height) * 10 + scrollVelocity * 0.0006;

          if (p.x < 0) p.x += 1;
          if (p.x > 1) p.x -= 1;
          if (p.y < 0) p.y += 1;
          if (p.y > 1) p.y -= 1;
        }

        const px = p.x * width;
        const py = ((p.y * height - scrollOffset) % height + height) % height;

        let finalX = px;
        let finalY = py;
        if (!shouldReduceMotion && mouse.x > 0 && mouse.y > 0) {
          const dx = px - mouse.x;
          const dy = py - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            const push = (1 - dist / 130) * 14;
            finalX += (dx / dist) * push;
            finalY += (dy / dist) * push;
          }
        }

        currentCoords.push({
          x: finalX,
          y: finalY,
          particle: p
        });
      }

      // 3. Delicate connection threads
      const maxConnectDist = isMobile ? 85 : 120;
      ctx.lineWidth = 0.65;
      for (let i = 0; i < currentCoords.length; i++) {
        const p1 = currentCoords[i];
        let connections = 0;
        for (let j = i + 1; j < currentCoords.length && connections < 2; j++) {
          const p2 = currentCoords[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectDist) {
            connections++;
            const lineAlpha = (1 - dist / maxConnectDist) * 0.16;
            ctx.strokeStyle = `rgba(8, 102, 232, ${lineAlpha})`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // 4. Subtle particles and soft glowing dots
      for (let i = 0; i < currentCoords.length; i++) {
        const { x, y, particle: p } = currentCoords[i];

        if (p.isHub) {
          // Soft, subtle diffuse glow (never excessive or distracting)
          const pulse = (Math.sin(time * p.pulseSpeed + p.pulseOffset) + 1) * 0.5;
          const glowRadius = p.baseRadius * (2.2 + pulse * 1.2);

          const glowGrad = ctx.createRadialGradient(x, y, 0, x, y, glowRadius);
          glowGrad.addColorStop(0, 'rgba(0, 185, 232, 0.22)');
          glowGrad.addColorStop(0.6, 'rgba(8, 102, 232, 0.06)');
          glowGrad.addColorStop(1, 'transparent');

          ctx.fillStyle = glowGrad;
          ctx.beginPath();
          ctx.arc(x, y, glowRadius, 0, Math.PI * 2);
          ctx.fill();

          // Hub center dot
          ctx.fillStyle = `rgba(8, 102, 232, ${p.alpha})`;
          ctx.beginPath();
          ctx.arc(x, y, p.baseRadius, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Standard clean particle
          ctx.fillStyle = p.color === '#0866E8'
            ? `rgba(8, 102, 232, ${p.alpha})`
            : p.color === '#00B9E8'
            ? `rgba(0, 185, 232, ${p.alpha * 1.1})`
            : `rgba(56, 189, 248, ${p.alpha * 1.15})`;

          ctx.beginPath();
          ctx.arc(x, y, p.baseRadius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
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
