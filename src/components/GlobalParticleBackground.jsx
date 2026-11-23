import React, { useEffect, useRef } from 'react';

/**
 * GlobalParticleBackground
 * 
 * Art-directed, handcrafted digital wave and particle animation designed specifically 
 * for Kuber AIS Technologies.
 * 
 * Aesthetic Philosophy:
 * - Fluid, organic streamlines rather than a rigid Cartesian lattice
 * - Natural variance in particle sizing, timing, and luminosity (avoiding synthetic uniformity)
 * - Restrained, corporate white-blue color palette (#082B59, #0866E8, #00B9E8, soft white highlights)
 * - Soft, anti-aliased sub-pixel rendering without harsh neon glow or gaming-style effects
 * - Fluid inertia mouse interaction and parallax scroll depth
 * - Respects prefers-reduced-motion and optimizes memory/frame budget
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
      vx: 0,
      vy: 0,
      isHovered: false
    };

    let scrollY = window.scrollY || 0;
    let targetScrollY = scrollY;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Stream configurations: 3 art-directed harmonic currents
    // Stream 0: Upper-Atmospheric sweep (flows across top/upper-flanks)
    // Stream 1: Mid-Tone Corporate Current (graceful undulating spine through mid-lower page)
    // Stream 2: Deep Ambient Field (soft, slower micro-particles providing subtle spatial depth)
    let streams = [];

    const initStreams = () => {
      const isMobile = width < 768;
      
      // Particle density balanced for quiet elegance
      const countPrimary = isMobile ? 38 : 72;
      const countSecondary = isMobile ? 32 : 60;
      const countDeep = isMobile ? 24 : 45;

      const createParticle = (streamIndex, progress) => {
        // Individualized organic variance
        const seed = Math.random();
        const seed2 = Math.random();
        
        let colorType;
        if (seed < 0.45) {
          colorType = 'cyan';        // #00B9E8 (Vibrant brand cyan)
        } else if (seed < 0.80) {
          colorType = 'royalBlue';   // #0866E8 (Core corporate blue)
        } else if (seed < 0.92) {
          colorType = 'navy';        // #082B59 (Deep brand anchor)
        } else {
          colorType = 'softWhite';   // Soft daylight highlight
        }

        return {
          streamIndex,
          progress,                   // 0 to 1 position along the wave path
          baseSpeed: (0.00035 + seed2 * 0.00045) * (streamIndex === 2 ? 0.6 : 1),
          // Organic transverse jitter so points don't sit in a strict robotic single file line
          lateralOffset: (Math.random() - 0.5) * (streamIndex === 2 ? 140 : 80),
          lateralDriftSpeed: (Math.random() - 0.5) * 0.008,
          // Sizing: micro-scale, human-curated (0.75px to 2.1px)
          radius: streamIndex === 2 
            ? (0.65 + Math.random() * 0.6) 
            : (0.95 + Math.random() * 1.15),
          baseAlpha: streamIndex === 2
            ? (0.12 + Math.random() * 0.16)
            : (0.22 + Math.random() * 0.38),
          pulseRate: 0.012 + Math.random() * 0.018,
          pulsePhase: Math.random() * Math.PI * 2,
          colorType,
          // Local displacement from mouse interaction
          dispX: 0,
          dispY: 0
        };
      };

      streams = [
        // Stream 0: Upper flow
        Array.from({ length: countPrimary }, (_, i) => createParticle(0, i / countPrimary + Math.random() * 0.02)),
        // Stream 1: Mid-lower flow
        Array.from({ length: countSecondary }, (_, i) => createParticle(1, i / countSecondary + Math.random() * 0.02)),
        // Stream 2: Ambient depth field
        Array.from({ length: countDeep }, (_, i) => createParticle(2, i / countDeep + Math.random() * 0.02))
      ];
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
      initStreams();
    };

    resize();
    window.addEventListener('resize', resize);

    // Event tracking
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

    const handleScroll = () => {
      targetScrollY = window.scrollY || 0;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Mathematical wave guide functions: Non-repetitive harmonic curves
    // Designed to feel like flowing silk / gentle fluid currents
    const calculateStreamPath = (streamIdx, t, timeVal, sY) => {
      let x = 0;
      let y = 0;

      if (streamIdx === 0) {
        // Stream 0: Sweeps diagonally from upper-left down toward middle-right
        x = t * (width + 160) - 80;
        
        // Multi-frequency smooth harmonics
        const w1 = Math.sin(t * 3.4 + timeVal * 0.85);
        const w2 = Math.cos(t * 5.1 - timeVal * 0.65);
        const w3 = Math.sin(t * 1.8 + timeVal * 0.35);

        // Center curve elevation
        const baseY = height * 0.22 + t * height * 0.32;
        const amplitude = height * 0.12;

        y = baseY + (w1 * 0.55 + w2 * 0.3 + w3 * 0.25) * amplitude + Math.sin(sY * 0.0018 + t * 2) * 16;
      } else if (streamIdx === 1) {
        // Stream 1: Mid-to-lower current, gently arching across the page
        x = (1 - t) * (width + 180) - 90; // flows in counter-balance

        const w1 = Math.sin(t * 4.2 - timeVal * 0.95);
        const w2 = Math.cos(t * 2.8 + timeVal * 0.7);
        const w3 = Math.sin((t * 6.0) + timeVal * 0.4);

        const baseY = height * 0.62 - Math.sin(t * Math.PI) * (height * 0.18);
        const amplitude = height * 0.11;

        y = baseY + (w1 * 0.5 + w2 * 0.35 + w3 * 0.2) * amplitude - Math.sin(sY * 0.0022 + t * 2.5) * 20;
      } else {
        // Stream 2: Ambient wide dispersion
        x = t * (width + 200) - 100;

        const w1 = Math.cos(t * 2.6 + timeVal * 0.45);
        const w2 = Math.sin(t * 4.0 - timeVal * 0.3);

        const baseY = height * 0.42 + Math.sin(t * 2.2) * (height * 0.3);
        const amplitude = height * 0.16;

        y = baseY + (w1 * 0.6 + w2 * 0.4) * amplitude + Math.cos(sY * 0.0015) * 14;
      }

      return { x, y };
    };

    let time = 0;

    const render = () => {
      animFrameId = requestAnimationFrame(render);

      // Smooth mouse easing
      mouse.vx = (mouse.targetX - mouse.x) * 0.07;
      mouse.vy = (mouse.targetY - mouse.y) * 0.07;
      mouse.x += mouse.vx;
      mouse.y += mouse.vy;

      // Smooth scroll parallax easing
      scrollY += (targetScrollY - scrollY) * 0.055;

      ctx.clearRect(0, 0, width, height);

      const motionSpeed = prefersReducedMotion ? 0.0015 : 0.0075;
      time += motionSpeed;

      // Draw each stream with delicate organic nuance
      for (let sIdx = 0; sIdx < streams.length; sIdx++) {
        const streamParticles = streams[sIdx];
        const activePoints = [];

        for (let i = 0; i < streamParticles.length; i++) {
          const p = streamParticles[i];

          // Advance progress smoothly
          p.progress += p.baseSpeed * (prefersReducedMotion ? 0.3 : 1);
          if (p.progress > 1) {
            p.progress -= 1;
          }

          // Calculate guide path coordinates
          const pathPoint = calculateStreamPath(sIdx, p.progress, time, scrollY);

          // Lateral organic drift
          p.lateralOffset += Math.sin(time * 2 + i) * 0.12;

          let posX = pathPoint.x;
          let posY = pathPoint.y + p.lateralOffset;

          // Natural mouse interaction (gentle magnetic deflection with spring return)
          if (mouse.isHovered) {
            const dx = posX + p.dispX - mouse.x;
            const dy = posY + p.dispY - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const reach = sIdx === 2 ? 140 : 190;

            if (dist < reach && dist > 0) {
              const influence = (1 - dist / reach);
              // Smooth cubic ease-out
              const force = influence * influence * (sIdx === 2 ? 22 : 36);
              const angle = Math.atan2(dy, dx);
              
              // Target displacement
              const targetDispX = Math.cos(angle) * force;
              const targetDispY = Math.sin(angle) * force;

              p.dispX += (targetDispX - p.dispX) * 0.12;
              p.dispY += (targetDispY - p.dispY) * 0.12;
            } else {
              // Return to path smoothly
              p.dispX *= 0.93;
              p.dispY *= 0.93;
            }
          } else {
            p.dispX *= 0.93;
            p.dispY *= 0.93;
          }

          posX += p.dispX;
          posY += p.dispY;

          // Calculate breathing alpha pulse
          const pulse = Math.sin(time * 3 + p.pulsePhase);
          let currentAlpha = p.baseAlpha * (0.8 + pulse * 0.2);

          // Edge fade (soft transition near viewport horizontal boundaries)
          const edgeMargin = 80;
          if (posX < edgeMargin) {
            currentAlpha *= Math.max(0, posX / edgeMargin);
          } else if (posX > width - edgeMargin) {
            currentAlpha *= Math.max(0, (width - posX) / edgeMargin);
          }

          if (currentAlpha <= 0.01) continue;

          activePoints.push({ x: posX, y: posY, alpha: currentAlpha, colorType: p.colorType });

          // Render particle: Clean, crisp, sub-pixel accuracy without blurry gaming glow
          ctx.beginPath();
          ctx.arc(posX, posY, p.radius, 0, Math.PI * 2);

          switch (p.colorType) {
            case 'cyan':
              // Subtle electric brand cyan (#00B9E8)
              ctx.fillStyle = `rgba(0, 185, 232, ${currentAlpha.toFixed(3)})`;
              break;
            case 'royalBlue':
              // Deep corporate royal blue (#0866E8)
              ctx.fillStyle = `rgba(8, 102, 232, ${(currentAlpha * 0.95).toFixed(3)})`;
              break;
            case 'navy':
              // Classic navy brand foundation (#082B59)
              ctx.fillStyle = `rgba(8, 43, 89, ${(currentAlpha * 0.8).toFixed(3)})`;
              break;
            case 'softWhite':
            default:
              // Pure soft daylight highlight with clean edge
              ctx.fillStyle = `rgba(255, 255, 255, ${(currentAlpha * 0.9).toFixed(3)})`;
              break;
          }

          ctx.fill();
        }

        // Connect closely traveling neighbors with delicate, gossamer streamline threads
        // This creates an intentional, handcrafted generative feel rather than a rigid wireframe
        if (sIdx !== 2 && activePoints.length > 1) {
          ctx.lineWidth = 0.65;
          const maxLinkDist = sIdx === 0 ? 54 : 46;

          for (let a = 0; a < activePoints.length; a++) {
            const ptA = activePoints[a];
            for (let b = a + 1; b < Math.min(a + 4, activePoints.length); b++) {
              const ptB = activePoints[b];
              const dx = ptA.x - ptB.x;
              const dy = ptA.y - ptB.y;
              const dist = Math.sqrt(dx * dx + dy * dy);

              if (dist < maxLinkDist && dist > 8) {
                const threadAlpha = (1 - dist / maxLinkDist) * Math.min(ptA.alpha, ptB.alpha) * 0.35;
                if (threadAlpha > 0.015) {
                  ctx.beginPath();
                  ctx.moveTo(ptA.x, ptA.y);
                  ctx.lineTo(ptB.x, ptB.y);
                  ctx.strokeStyle = `rgba(8, 102, 232, ${threadAlpha.toFixed(3)})`;
                  ctx.stroke();
                }
              }
            }
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
        className="w-full h-full block opacity-90 transition-opacity duration-1000"
      />
    </div>
  );
}
