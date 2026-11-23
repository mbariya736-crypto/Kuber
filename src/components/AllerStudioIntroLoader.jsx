import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * AllerStudioIntroLoader
 * 
 * Exact Awwwards-winning Aller Studio (allerstudio.com) cinematic opening sequence:
 * - 3D Wireframe geometric sphere / particle orb rendering on HTML5 canvas
 * - Precision technical telemetry indicators (BUILD_ID, SYSTEM, PROTOCOL, STATUS)
 * - Dynamic percentage progression (000% -> 100%) with cubic easing curve F(t)
 * - Real-time metrics stream telemetry (Capture, Routing, Synchronization)
 * - Industrial crosshairs, dashed datum rules, and spinning celestial ring
 * - Smooth curtain reveal unmasking the Business Automation services page
 */

const F = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const formatPercent = (val) => `${String(Math.round(val)).padStart(3, '0')}%`;

export default function AllerStudioIntroLoader({ onComplete }) {
  const [stage, setStage] = useState('active'); // 'active' | 'fade' | 'done'
  const [progress, setProgress] = useState(0);
  const canvasRef = useRef(null);

  // 1. Precise 2.4s progression loop
  useEffect(() => {
    let animFrame = null;
    const startTime = performance.now();
    const duration = 2400;

    const tick = (now) => {
      const elapsed = now - startTime;
      const rawP = Math.min(1, elapsed / duration);
      setProgress(rawP);

      if (rawP < 1) {
        animFrame = requestAnimationFrame(tick);
      } else {
        // Hold for 300ms at 100% then start elegant fade
        setTimeout(() => setStage('fade'), 300);
        setTimeout(() => {
          setStage('done');
          if (onComplete) onComplete();
        }, 900);
      }
    };

    animFrame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animFrame);
  }, [onComplete]);

  // 2. 3D Aller Studio Wireframe Particle Orb on Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId = null;
    let t = 0;

    const render = () => {
      t += 0.025;
      const width = canvas.width;
      const height = canvas.height;
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const radius = width * 0.38;

      // Draw latitude rings
      const rings = 12;
      const pointsPerRing = 28;

      for (let i = 0; i <= rings; i++) {
        const phi = (i / rings) * Math.PI - Math.PI / 2;
        const rRing = Math.cos(phi) * radius;
        const yRing = Math.sin(phi) * radius;

        for (let j = 0; j < pointsPerRing; j++) {
          const theta = (j / pointsPerRing) * Math.PI * 2 + t * 0.6;
          
          // 3D coordinates
          const x3 = rRing * Math.cos(theta);
          const z3 = rRing * Math.sin(theta);
          const y3 = yRing;

          // 3D rotation around Y and X axis (Aller perspective tilt)
          const rotX = 0.38;
          const y4 = y3 * Math.cos(rotX) - z3 * Math.sin(rotX);
          const z4 = y3 * Math.sin(rotX) + z3 * Math.cos(rotX);

          // Projection
          const scale = (z4 + radius * 1.5) / (radius * 2.5);
          const px = cx + x3 * 0.95;
          const py = cy + y4 * 0.95;
          const dotRadius = Math.max(0.6, 1.2 * scale);
          const alpha = Math.max(0.08, Math.min(0.9, 0.2 + scale * 0.7));

          ctx.fillStyle = `rgba(8, 102, 232, ${alpha})`;
          ctx.beginPath();
          ctx.arc(px, py, dotRadius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Aller Studio pulsing center signal
      const corePulse = 1 + 0.15 * Math.sin(t * 3);
      ctx.fillStyle = 'rgba(0, 185, 232, 0.8)';
      ctx.beginPath();
      ctx.arc(cx, cy, 3 * corePulse, 0, Math.PI * 2);
      ctx.fill();

      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, []);

  if (stage === 'done') return null;

  const easedProgress = F(progress);
  const displayPercent = formatPercent(Math.max(1, 100 * easedProgress));

  return (
    <div
      id="intro-loader"
      role="status"
      aria-label="Loading KUBER Automation Environment"
      className={`fixed inset-0 z-[100] overflow-hidden bg-[#F8FAFD] transition-opacity duration-700 select-none ${
        stage === 'fade' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background Architectural Grid & Subtle Gradients */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[radial-gradient(#0866E8_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute inset-x-0 top-0 h-[480px] bg-gradient-to-b from-blue-50/80 via-white/40 to-transparent pointer-events-none" />

      {/* Horizontal Alignment Datum Lines */}
      <span className="absolute inset-x-0 top-[49px] border-t border-slate-200/80" />
      <span className="absolute inset-x-0 top-[81px] border-t border-dashed border-slate-200/90" />
      <span className="absolute inset-x-0 bottom-[88px] border-t border-slate-200/80" />

      {/* Main Framework Container */}
      <div className="absolute inset-y-0 left-1/2 w-full max-w-7xl -translate-x-1/2 px-4 sm:px-8 pointer-events-none">
        
        {/* Top Telemetry Labels */}
        <div className="absolute top-[58px] inset-x-4 sm:inset-x-8 flex items-center justify-between text-[11px] sm:text-xs font-mono font-semibold tracking-wider text-slate-500 uppercase">
          <p className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0866E8] animate-pulse" />
            <span>KUBER // WORKFLOW ARCHITECTURE</span>
          </p>
          <p className="text-right text-[#082B59] font-bold">
            <span>ENGINEERED FOR SCALE.</span>
          </p>
        </div>

        {/* Left Telemetry Pillar */}
        <div className="hidden lg:flex absolute top-[110px] left-8 flex-col gap-3 opacity-60">
          <span className="w-1.5 h-1.5 bg-[#082B59]" />
          {[
            ['API Gateway', 98],
            ['Webhooks', 84],
            ['Sync Stream', 76]
          ].map(([label, maxVal], idx) => (
            <div key={label} className="flex flex-col font-mono text-xs">
              <span className="text-slate-500 text-[10px] tracking-wider uppercase">{label}</span>
              <span className="text-[#082B59] font-bold tabular-nums">
                {formatPercent(maxVal * F(Math.min(1, progress / (0.6 + 0.12 * idx))))}
              </span>
            </div>
          ))}
          <span className="w-1.5 h-1.5 bg-[#082B59]" />
        </div>

        {/* Right Telemetry Pillar */}
        <div className="hidden lg:flex absolute top-[110px] right-8 flex-col gap-3 items-end text-right opacity-60">
          <span className="w-1.5 h-1.5 bg-[#082B59]" />
          {[
            ['Lead Intake', 100],
            ['Processing', 91],
            ['Cloud Master', 85]
          ].map(([label, maxVal], idx) => (
            <div key={label} className="flex flex-col font-mono text-xs items-end">
              <span className="text-slate-500 text-[10px] tracking-wider uppercase">{label}</span>
              <span className="text-[#0866E8] font-bold tabular-nums">
                {formatPercent(maxVal * F(Math.min(1, progress / (0.6 + 0.12 * idx))))}
              </span>
            </div>
          ))}
          <span className="w-1.5 h-1.5 bg-[#082B59]" />
        </div>

        {/* Centerpiece 3D Wireframe Orb & Reticle */}
        <div className="absolute top-1/2 left-1/2 w-[288px] h-[288px] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
          
          {/* Static Concentric Ring */}
          <span className="absolute inset-0 rounded-full border border-slate-200/90 shadow-sm" />

          {/* Rotating Celestial Dashed Ring */}
          <svg
            viewBox="0 0 314 314"
            className="absolute -top-[13px] -left-[13px] w-[314px] h-[314px] animate-[spin_32s_linear_infinite] opacity-60"
          >
            <circle
              cx="157"
              cy="157"
              r="156"
              fill="none"
              stroke="#0866E8"
              strokeWidth="1.2"
              strokeDasharray="4 6"
            />
          </svg>

          {/* 3D Wireframe Canvas */}
          <canvas
            ref={canvasRef}
            width={248}
            height={248}
            className="relative z-10 w-[248px] h-[248px]"
          />

          {/* Crosshairs & Metadata Flags */}
          <div className="hidden sm:block">
            <span className="absolute top-[23px] -left-[18px] w-1.5 h-1.5 bg-[#082B59]" />
            <span className="absolute top-[23px] left-[302px] w-1.5 h-1.5 bg-[#082B59]" />
            <span className="absolute top-[261px] -left-[18px] w-1.5 h-1.5 bg-[#082B59]" />
            <span className="absolute top-[261px] left-[302px] w-1.5 h-1.5 bg-[#082B59]" />

            <p className="absolute top-[18px] right-[calc(100%+22px)] font-mono text-[11px] font-bold text-slate-400 whitespace-nowrap">
              SYSTEM // KUBER-AIS
            </p>
            <p className="absolute top-[18px] left-[310px] font-mono text-[11px] font-bold text-slate-400 whitespace-nowrap">
              MODULE // AUTOMATION
            </p>
            <p className="absolute top-[256px] right-[calc(100%+22px)] font-mono text-[11px] font-bold text-slate-400 whitespace-nowrap">
              PROTOCOL // REALTIME
            </p>
            <p className="absolute top-[256px] left-[310px] font-mono text-[11px] font-bold text-[#0866E8] whitespace-nowrap">
              STATUS // {progress < 1 ? 'INITIALIZING' : 'DEPLOYED'}
            </p>
          </div>
        </div>

        {/* Massive Bottom-Left Kinetic Counter */}
        <p className="absolute bottom-[88px] left-4 sm:left-8 font-mono text-[72px] sm:text-[120px] lg:text-[180px] font-black leading-none whitespace-nowrap text-[#082B59]/10 select-none tabular-nums">
          {displayPercent}
        </p>

        {/* Bottom Status Progress Indicator */}
        <div className="absolute bottom-[44px] inset-x-4 sm:inset-x-8 flex items-center justify-between text-xs font-mono text-slate-500">
          <div className="flex items-center gap-3">
            <div className="w-24 sm:w-36 h-1 rounded-full bg-slate-200 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-[#0866E8] to-[#00B9E8] transition-all duration-75 ease-out"
                style={{ width: `${Math.round(easedProgress * 100)}%` }}
              />
            </div>
            <span className="font-bold text-[#082B59]">{displayPercent}</span>
          </div>

          <span className="text-[11px] tracking-wider uppercase text-slate-400">
            CONNECTING BUSINESS WORKFLOWS
          </span>
        </div>

      </div>

      {/* Aller Bottom Signature Accent Band */}
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#0866E8] via-[#00B9E8] to-[#082B59]" />
    </div>
  );
}
