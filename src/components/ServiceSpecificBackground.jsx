import React, { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

/**
 * ServiceSpecificBackground
 * 
 * Handcrafted, service-specific background animation for each internal Services page:
 * 
 * 1. AI Services:
 *    - Smooth neural network connections & synaptic pulses
 *    - Flowing data streams and interconnected particle nodes
 *    - Palette: Kuber blue (#0866E8), cyan (#00B9E8), and sky blue (#38BDF8)
 * 
 * 2. Cyber Security Services:
 *    - Subtle digital security network motion
 *    - Protective geometric nodes, interlocking barrier threads, and soft radar pulses
 *    - Palette: Security emerald (#059669, #10B981), teal (#0D9488), and protective blue
 * 
 * 3. AI Film Services:
 *    - Cinematic motion effects & camera-inspired visual transitions
 *    - Subtle anamorphic light drifts, soft bokeh particles, and viewfinder guides
 *    - Palette: Cinema amber (#D97706, #F59E0B), warm cyan, and studio blue
 * 
 * Full-page coverage (fixed inset-0), 60fps canvas, non-intrusive (pointer-events-none, z-0).
 */
export default function ServiceSpecificBackground({ serviceId = 'ai-services', className = '' }) {
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

    // =========================================================================
    // 1. AI SERVICES: Neural Network Synapses & Flowing Data Pulses
    // =========================================================================
    const neuralNodeCount = isMobile ? 38 : 68;
    const neuralNodes = [];
    for (let i = 0; i < neuralNodeCount; i++) {
      const isSynapseHub = i % 6 === 0;
      neuralNodes.push({
        x: Math.random(),
        y: Math.random(),
        baseRadius: isSynapseHub ? 3.4 : 1.8 + Math.random() * 1.2,
        isHub: isSynapseHub,
        vx: (Math.random() - 0.5) * 0.22,
        vy: 0.12 + Math.random() * 0.22,
        pulseOffset: Math.random() * Math.PI * 2,
        pulseSpeed: 1.2 + Math.random() * 1.4,
        alpha: isSynapseHub ? 0.55 : 0.32 + Math.random() * 0.22,
        color: i % 3 === 0 ? '#0866E8' : (i % 3 === 1 ? '#00B9E8' : '#38BDF8')
      });
    }

    // Neural flowing data stream ribbons
    const neuralStreamCount = isMobile ? 2 : 4;
    const neuralStreams = [];
    for (let s = 0; s < neuralStreamCount; s++) {
      neuralStreams.push({
        yRatio: 0.15 + s * 0.25,
        amplitude: 24 + s * 8,
        frequency: 0.0016 + s * 0.0004,
        speed: 0.008 + s * 0.003,
        phase: (s * Math.PI) / 2,
        color: s % 2 === 0 ? 'rgba(8, 102, 232, 0.10)' : 'rgba(0, 185, 232, 0.12)'
      });
    }

    // =========================================================================
    // 2. CYBER SECURITY: Protective Nodes, Radar Rings & Defense Lattice
    // =========================================================================
    const securityNodeCount = isMobile ? 32 : 54;
    const securityNodes = [];
    for (let i = 0; i < securityNodeCount; i++) {
      const isShieldHub = i % 5 === 0;
      securityNodes.push({
        x: Math.random(),
        y: Math.random(),
        baseRadius: isShieldHub ? 3.6 : 1.8 + Math.random() * 1.4,
        isHub: isShieldHub,
        vx: (Math.random() - 0.5) * 0.18,
        vy: 0.10 + Math.random() * 0.18,
        pulseOffset: Math.random() * Math.PI * 2,
        pulseSpeed: 0.9 + Math.random() * 1.0,
        alpha: isShieldHub ? 0.52 : 0.28 + Math.random() * 0.20,
        color: i % 3 === 0 ? '#059669' : (i % 3 === 1 ? '#0D9488' : '#0866E8')
      });
    }

    // Concentric protective radar pulse rings
    const radarPulses = [
      { xRatio: 0.20, yRatio: 0.35, maxRadius: 180, speed: 0.006, offset: 0 },
      { xRatio: 0.80, yRatio: 0.65, maxRadius: 220, speed: 0.005, offset: Math.PI }
    ];

    // =========================================================================
    // 3. AI FILMS: Camera Guides, Anamorphic Drift & Soft Bokeh
    // =========================================================================
    const filmBokehCount = isMobile ? 26 : 46;
    const filmBokeh = [];
    for (let i = 0; i < filmBokehCount; i++) {
      const isFocusLens = i % 5 === 0;
      filmBokeh.push({
        x: Math.random(),
        y: Math.random(),
        baseRadius: isFocusLens ? 4.5 + Math.random() * 2.5 : 2.0 + Math.random() * 1.8,
        isLens: isFocusLens,
        vx: (Math.random() - 0.5) * 0.16,
        vy: 0.08 + Math.random() * 0.16,
        pulseOffset: Math.random() * Math.PI * 2,
        pulseSpeed: 0.8 + Math.random() * 1.1,
        alpha: isFocusLens ? 0.38 : 0.22 + Math.random() * 0.18,
        color: i % 3 === 0 ? '#D97706' : (i % 3 === 1 ? '#0866E8' : '#00B9E8')
      });
    }

    // Anamorphic horizontal optical drift beams
    const anamorphicBeams = [
      { yRatio: 0.28, height: 1.5, speed: 0.004, phase: 0 },
      { yRatio: 0.72, height: 1.5, speed: 0.003, phase: Math.PI }
    ];

    // Resize handling
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
        scrollVelocity += delta * 0.0016;
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

      const scrollOffset = scrollY * 0.28;

      // =======================================================================
      // MODE 1: AI SERVICES (Neural Connections & Flowing Data)
      // =======================================================================
      if (serviceId === 'ai-services') {
        // A. Flowing neural streamline wave ribbons
        neuralStreams.forEach((stream) => {
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
          ctx.lineWidth = 1.4;
          ctx.stroke();
        });

        // B. Calculate neural node positions
        const coords = [];
        for (let i = 0; i < neuralNodes.length; i++) {
          const p = neuralNodes[i];
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

          coords.push({ x: finalX, y: finalY, p });
        }

        // C. Synaptic connection threads
        const maxDist = isMobile ? 85 : 125;
        ctx.lineWidth = 0.75;
        for (let i = 0; i < coords.length; i++) {
          const p1 = coords[i];
          let connections = 0;
          for (let j = i + 1; j < coords.length && connections < 2; j++) {
            const p2 = coords[j];
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < maxDist) {
              connections++;
              const lineAlpha = (1 - dist / maxDist) * 0.18;
              ctx.strokeStyle = `rgba(8, 102, 232, ${lineAlpha})`;
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();

              // Subtle traveling synaptic data pulse
              const pulseT = ((time * 0.8 + i * 0.2) % 1);
              const pulseX = p1.x + (p2.x - p1.x) * pulseT;
              const pulseY = p1.y + (p2.y - p1.y) * pulseT;
              ctx.fillStyle = `rgba(0, 185, 232, ${lineAlpha * 1.5})`;
              ctx.beginPath();
              ctx.arc(pulseX, pulseY, 1.2, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }

        // D. Draw neural nodes & hubs
        for (let i = 0; i < coords.length; i++) {
          const { x, y, p } = coords[i];
          if (p.isHub) {
            const pulse = (Math.sin(time * p.pulseSpeed + p.pulseOffset) + 1) * 0.5;
            const glowR = p.baseRadius * (2.2 + pulse * 1.2);
            const grad = ctx.createRadialGradient(x, y, 0, x, y, glowR);
            grad.addColorStop(0, 'rgba(0, 185, 232, 0.22)');
            grad.addColorStop(0.6, 'rgba(8, 102, 232, 0.06)');
            grad.addColorStop(1, 'transparent');
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.arc(x, y, glowR, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = `rgba(8, 102, 232, ${p.alpha})`;
            ctx.beginPath();
            ctx.arc(x, y, p.baseRadius, 0, Math.PI * 2);
            ctx.fill();
          } else {
            ctx.fillStyle = p.color === '#0866E8'
              ? `rgba(8, 102, 232, ${p.alpha})`
              : `rgba(0, 185, 232, ${p.alpha * 1.1})`;
            ctx.beginPath();
            ctx.arc(x, y, p.baseRadius, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      // =======================================================================
      // MODE 2: CYBER SECURITY (Protective Defense Lattice & Radar Pulses)
      // =======================================================================
      else if (serviceId === 'cyber-security') {
        // A. Subtle expanding protective sonar ripples
        radarPulses.forEach((pulse) => {
          const cx = pulse.xRatio * width;
          const cy = ((pulse.yRatio * height + scrollY * 0.15) % height);
          const currentProgress = (time * pulse.speed + pulse.offset) % 1;
          const currentR = currentProgress * pulse.maxRadius;
          const pulseAlpha = (1 - currentProgress) * 0.12;

          ctx.strokeStyle = `rgba(16, 185, 129, ${pulseAlpha})`;
          ctx.lineWidth = 1.0;
          ctx.beginPath();
          ctx.arc(cx, cy, currentR, 0, Math.PI * 2);
          ctx.stroke();

          // Subtle concentric inner ring
          if (currentR > 40) {
            ctx.strokeStyle = `rgba(13, 148, 136, ${pulseAlpha * 0.6})`;
            ctx.beginPath();
            ctx.arc(cx, cy, currentR * 0.5, 0, Math.PI * 2);
            ctx.stroke();
          }
        });

        // B. Calculate security node positions
        const coords = [];
        for (let i = 0; i < securityNodes.length; i++) {
          const p = securityNodes[i];
          if (!shouldReduceMotion) {
            p.x += (p.vx / width) * 8;
            p.y += (p.vy / height) * 8 + scrollVelocity * 0.0005;
            if (p.x < 0) p.x += 1;
            if (p.x > 1) p.x -= 1;
            if (p.y < 0) p.y += 1;
            if (p.y > 1) p.y -= 1;
          }

          const px = p.x * width;
          const py = ((p.y * height - scrollOffset) % height + height) % height;
          coords.push({ x: px, y: py, p });
        }

        // C. Interlocking security defense barrier links
        const maxDist = isMobile ? 90 : 130;
        ctx.lineWidth = 0.75;
        for (let i = 0; i < coords.length; i++) {
          const p1 = coords[i];
          let connections = 0;
          for (let j = i + 1; j < coords.length && connections < 2; j++) {
            const p2 = coords[j];
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < maxDist) {
              connections++;
              const lineAlpha = (1 - dist / maxDist) * 0.16;
              ctx.strokeStyle = `rgba(16, 185, 129, ${lineAlpha})`;
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        }

        // D. Draw security nodes & protective shields
        for (let i = 0; i < coords.length; i++) {
          const { x, y, p } = coords[i];
          if (p.isHub) {
            const pulse = (Math.sin(time * p.pulseSpeed + p.pulseOffset) + 1) * 0.5;
            const glowR = p.baseRadius * (2.2 + pulse * 1.1);
            const grad = ctx.createRadialGradient(x, y, 0, x, y, glowR);
            grad.addColorStop(0, 'rgba(16, 185, 129, 0.22)');
            grad.addColorStop(0.6, 'rgba(13, 148, 136, 0.06)');
            grad.addColorStop(1, 'transparent');
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.arc(x, y, glowR, 0, Math.PI * 2);
            ctx.fill();

            // Diamond / security shield node
            ctx.fillStyle = `rgba(5, 150, 105, ${p.alpha})`;
            ctx.beginPath();
            ctx.arc(x, y, p.baseRadius, 0, Math.PI * 2);
            ctx.fill();
          } else {
            ctx.fillStyle = p.color === '#059669'
              ? `rgba(16, 185, 129, ${p.alpha})`
              : `rgba(13, 148, 136, ${p.alpha * 1.1})`;
            ctx.beginPath();
            ctx.arc(x, y, p.baseRadius, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      // =======================================================================
      // MODE 3: AI FILMS (Cinematic Motion, Optical Drift & Soft Bokeh)
      // =======================================================================
      else {
        // A. Anamorphic horizontal optical drift beams
        anamorphicBeams.forEach((beam) => {
          const cy = ((beam.yRatio * height + scrollY * 0.10) % height);
          const beamPulse = (Math.sin(time * 0.8 + beam.phase) + 1) * 0.5;
          const beamAlpha = 0.08 + beamPulse * 0.08;

          const grad = ctx.createLinearGradient(0, cy, width, cy);
          grad.addColorStop(0, 'transparent');
          grad.addColorStop(0.2, 'rgba(8, 102, 232, 0.03)');
          grad.addColorStop(0.5, `rgba(217, 119, 6, ${beamAlpha})`);
          grad.addColorStop(0.8, 'rgba(0, 185, 232, 0.04)');
          grad.addColorStop(1, 'transparent');

          ctx.fillStyle = grad;
          ctx.fillRect(0, cy - beam.height, width, beam.height * 2);
        });

        // B. Cinematic lens framing crosshairs in corners
        const cornerMargin = isMobile ? 24 : 40;
        const crosshairLen = 10;
        ctx.strokeStyle = 'rgba(8, 102, 232, 0.12)';
        ctx.lineWidth = 1;

        // Top-left framing mark
        ctx.beginPath();
        ctx.moveTo(cornerMargin, cornerMargin + crosshairLen);
        ctx.lineTo(cornerMargin, cornerMargin);
        ctx.lineTo(cornerMargin + crosshairLen, cornerMargin);
        ctx.stroke();

        // Top-right framing mark
        ctx.beginPath();
        ctx.moveTo(width - cornerMargin - crosshairLen, cornerMargin);
        ctx.lineTo(width - cornerMargin, cornerMargin);
        ctx.lineTo(width - cornerMargin, cornerMargin + crosshairLen);
        ctx.stroke();

        // C. Calculate film bokeh positions
        for (let i = 0; i < filmBokeh.length; i++) {
          const p = filmBokeh[i];
          if (!shouldReduceMotion) {
            p.x += (p.vx / width) * 7;
            p.y += (p.vy / height) * 7 + scrollVelocity * 0.0005;
            if (p.x < 0) p.x += 1;
            if (p.x > 1) p.x -= 1;
            if (p.y < 0) p.y += 1;
            if (p.y > 1) p.y -= 1;
          }

          const px = p.x * width;
          const py = ((p.y * height - scrollOffset) % height + height) % height;

          if (p.isLens) {
            // Soft cinematic bokeh lens circle
            const pulse = (Math.sin(time * p.pulseSpeed + p.pulseOffset) + 1) * 0.5;
            const bokehRadius = p.baseRadius * (1.8 + pulse * 1.1);

            const grad = ctx.createRadialGradient(px, py, 0, px, py, bokehRadius);
            grad.addColorStop(0, 'rgba(217, 119, 6, 0.18)');
            grad.addColorStop(0.7, 'rgba(8, 102, 232, 0.05)');
            grad.addColorStop(1, 'transparent');

            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.arc(px, py, bokehRadius, 0, Math.PI * 2);
            ctx.fill();

            // Subtle lens center
            ctx.fillStyle = `rgba(217, 119, 6, ${p.alpha * 0.9})`;
            ctx.beginPath();
            ctx.arc(px, py, p.baseRadius * 0.8, 0, Math.PI * 2);
            ctx.fill();
          } else {
            // Calm cinematic dust/ember particle
            ctx.fillStyle = p.color === '#D97706'
              ? `rgba(217, 119, 6, ${p.alpha * 0.9})`
              : `rgba(8, 102, 232, ${p.alpha * 0.85})`;
            ctx.beginPath();
            ctx.arc(px, py, p.baseRadius, 0, Math.PI * 2);
            ctx.fill();
          }
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
  }, [serviceId, shouldReduceMotion]);

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
