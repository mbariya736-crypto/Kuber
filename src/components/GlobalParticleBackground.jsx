import React, { useEffect, useRef } from 'react';

/**
 * GlobalParticleBackground
 * 
 * High-End, Handcrafted Organic Neural Flow Field & Interactive Constellation Mesh:
 * - Fluid, multi-layer depth with organic harmonic drift across the entire screen
 * - Dynamic constellation threads connecting nearby nodes into living neural networks
 * - Responsive fluid cursor interaction: magnetic deflection & gentle ripple on touch
 * - Elegant corporate color palette: Electric Cyan (#00B9E8), Royal Blue (#0866E8), Deep Navy (#082B59)
 * - Anti-aliased, 60fps performance-optimized rendering on 2D canvas
 */
export default function GlobalParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animFrameId = null;
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Smoothed mouse state with spring-damping
    const mouse = {
      x: -2000,
      y: -2000,
      targetX: -2000,
      targetY: -2000,
      radius: 170,
      isHovered: false
    };

    let scrollY = window.scrollY || 0;
    let targetScrollY = scrollY;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Particle pool
    let particles = [];

    const initParticles = () => {
      const isMobile = width < 768;
      // Rich density across the entire screen
      const particleCount = isMobile ? 52 : 105;
      particles = [];

      for (let i = 0; i < particleCount; i++) {
        const seed = Math.random();
        let color, glow;

        if (seed < 0.42) {
          color = { r: 0, g: 185, b: 232 }; // Electric Cyan (#00B9E8)
          glow = true;
        } else if (seed < 0.78) {
          color = { r: 8, g: 102, b: 232 }; // Royal Blue (#0866E8)
          glow = false;
        } else if (seed < 0.92) {
          color = { r: 8, g: 43, b: 89 };   // Deep Navy (#082B59)
          glow = false;
        } else {
          color = { r: 14, g: 165, b: 233 }; // Bright Sky Blue
          glow = true;
        }

        const depth = 0.5 + Math.random() * 0.5; // 0.5 to 1.0 depth scale

        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.55 * depth,
          vy: (Math.random() - 0.5) * 0.45 * depth,
          radius: (1.1 + Math.random() * 1.5) * depth,
          baseAlpha: (0.28 + Math.random() * 0.38) * depth,
          color,
          glow,
          depth,
          phase: Math.random() * Math.PI * 2,
          pulseSpeed: 0.015 + Math.random() * 0.02
        });
      }
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
      initParticles();
    };

    resize();
    window.addEventListener('resize', resize);

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.isHovered = true;
    };

    const handleMouseLeave = () => {
      mouse.isHovered = false;
      mouse.targetX = -2000;
      mouse.targetY = -2000;
    };

    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        mouse.targetX = e.touches[0].clientX;
        mouse.targetY = e.touches[0].clientY;
        mouse.isHovered = true;
      }
    };

    const handleTouchEnd = () => {
      mouse.isHovered = false;
      mouse.targetX = -2000;
      mouse.targetY = -2000;
    };

    const handleScroll = () => {
      targetScrollY = window.scrollY || 0;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('touchstart', handleTouchMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('scroll', handleScroll, { passive: true });

    let time = 0;

    const render = () => {
      animFrameId = requestAnimationFrame(render);

      // Smooth mouse easing
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      // Smooth scroll parallax
      const scrollDiff = (targetScrollY - scrollY) * 0.05;
      scrollY += scrollDiff;

      ctx.clearRect(0, 0, width, height);

      time += prefersReducedMotion ? 0.003 : 0.008;

      const linkDistance = width < 768 ? 85 : 125;
      const linkDistSq = linkDistance * linkDistance;

      // 1. Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!prefersReducedMotion) {
          // Organic fluid wave drift
          const waveX = Math.sin(time + p.phase) * 0.18;
          const waveY = Math.cos(time * 0.8 + p.phase) * 0.15;

          p.x += p.vx + waveX;
          p.y += p.vy + waveY - scrollDiff * 0.15 * p.depth;
        }

        // Mouse magnetic push & fluid deflection
        if (mouse.isHovered) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < mouse.radius * mouse.radius && distSq > 0) {
            const dist = Math.sqrt(distSq);
            const force = (1 - dist / mouse.radius) * 2.8;
            p.x += (dx / dist) * force;
            p.y += (dy / dist) * force;
          }
        }

        // Screen wrap-around with smooth margin
        const margin = 20;
        if (p.x < -margin) p.x = width + margin;
        if (p.x > width + margin) p.x = -margin;
        if (p.y < -margin) p.y = height + margin;
        if (p.y > height + margin) p.y = -margin;

        // Subtle alpha breathing pulse
        const pulse = Math.sin(time * 2 + p.phase);
        const currentAlpha = Math.max(0.12, Math.min(0.85, p.baseAlpha + pulse * 0.12));

        // Draw particle node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${currentAlpha.toFixed(3)})`;
        ctx.fill();

        // Delicate luminous halo on accent nodes
        if (p.glow && p.depth > 0.7) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 2.4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${(currentAlpha * 0.22).toFixed(3)})`;
          ctx.fill();
        }
      }

      // 2. Draw organic neural constellation links between nearby particles
      ctx.lineWidth = 0.75;
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < linkDistSq) {
            const dist = Math.sqrt(distSq);
            const lineAlpha = (1 - dist / linkDistance) * 0.28 * Math.min(p1.depth, p2.depth);

            if (lineAlpha > 0.015) {
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              // Luminous blue/cyan gossamer thread
              ctx.strokeStyle = `rgba(8, 102, 232, ${lineAlpha.toFixed(3)})`;
              ctx.stroke();
            }
          }
        }
      }

      // 3. Connect particles to cursor when hovering
      if (mouse.isHovered) {
        ctx.lineWidth = 0.85;
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const cursorLineAlpha = (1 - dist / 130) * 0.35;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(0, 185, 232, ${cursorLineAlpha.toFixed(3)})`;
            ctx.stroke();
          }
        }
      }
    };

    render();

    return () => {
      if (animFrameId) cancelAnimationFrame(animFrameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('touchstart', handleTouchMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      aria-hidden="true" 
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
    >
      <canvas 
        ref={canvasRef} 
        className="w-full h-full block opacity-95 transition-opacity duration-700"
      />
    </div>
  );
}
