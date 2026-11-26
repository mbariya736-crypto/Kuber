import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';
import { ShieldCheck, Lock, Cpu, Zap, Activity, CheckCircle2 } from 'lucide-react';

/**
 * CyberSecurityChip
 * 
 * Interactive 3D Cybersecurity Hardware Processor Visual:
 * - Uses exact user attached image: /images/cyber-chip.jpg
 * - Full 3D perspective rotation (pitch, yaw, roll) tracking mouse cursor & mobile touch gestures
 * - Dynamic specular laser & photon glare following pointer across circuit buses
 * - Holographic KUBER AIS Security badge overlaid over the chip center
 * - Bottom telemetry bar covering watermark cleanly
 * - Traveling electrical energy pulses along circuit tracks
 */
export default function CyberSecurityChip({ className = '' }) {
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);

  // Normalized pointer coordinates [-0.5, 0.5]
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth fluid spring physics
  const springConfig = { damping: 22, stiffness: 160, mass: 0.55 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [24, -24]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-28, 28]), springConfig);
  const rotateZ = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), springConfig);

  // Parallax layers
  const chipX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), springConfig);
  const chipY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-12, 12]), springConfig);

  const badgeX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-18, 18]), springConfig);
  const badgeY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-18, 18]), springConfig);

  // Specular light sheen coordinates
  const glareX = useSpring(useTransform(mouseX, [-0.5, 0.5], ['15%', '85%']), springConfig);
  const glareY = useSpring(useTransform(mouseY, [-0.5, 0.5], ['15%', '85%']), springConfig);

  const updateCoords = (clientX, clientY, currentTarget) => {
    const rect = currentTarget.getBoundingClientRect();
    const x = Math.max(-0.5, Math.min(0.5, (clientX - rect.left) / rect.width - 0.5));
    const y = Math.max(-0.5, Math.min(0.5, (clientY - rect.top) / rect.height - 0.5));
    mouseX.set(x);
    mouseY.set(y);
  };

  const handlePointerMove = (e) => {
    setIsHovered(true);
    updateCoords(e.clientX, e.clientY, e.currentTarget);
  };

  const handleTouchMove = (e) => {
    if (e.touches && e.touches[0]) {
      setIsHovered(true);
      updateCoords(e.touches[0].clientX, e.touches[0].clientY, e.currentTarget);
    }
  };

  const handleReset = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onPointerDown={handlePointerMove}
      onPointerMove={handlePointerMove}
      onPointerUp={handleReset}
      onPointerLeave={handleReset}
      onTouchStart={handleTouchMove}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleReset}
      style={{ perspective: 1200, touchAction: 'none' }}
      className={`relative w-full max-w-[440px] h-[400px] sm:h-[460px] rounded-3xl overflow-hidden bg-gradient-to-b from-[#09020e] via-[#0b0c1e] to-[#040612] border border-red-500/30 shadow-[0_15px_50px_rgba(239,68,68,0.2)] select-none flex flex-col justify-between p-4 cursor-grab active:cursor-grabbing touch-none ${className}`}
    >
      {/* 1. Cyber Circuit Ambient Atmosphere Glows */}
      <div className="absolute top-0 -left-12 w-56 h-56 bg-red-600/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-4 -right-12 w-60 h-60 bg-cyan-600/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(239,68,68,0.1)_0%,_transparent_75%)] pointer-events-none" />

      {/* 2. Top Interactive Status Pill */}
      <div className="relative z-30 flex items-center justify-between w-full px-3.5 py-2 rounded-full bg-[#0d1226]/85 backdrop-blur-md border border-red-500/30 shadow-md">
        <div className="flex items-center gap-2">
          <span className="flex h-2.5 w-2.5 rounded-full bg-red-500 animate-ping" />
          <span className="text-[11px] font-bold tracking-wider uppercase text-red-400 flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-red-400" />
            Hardware Security Core
          </span>
        </div>
        <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-red-950/70 text-red-300 border border-red-500/40">
          AES-256 Armed
        </span>
      </div>

      {/* 3. Main 3D Interactive Cyber Chip Stage */}
      <div className="relative flex-1 flex items-center justify-center my-auto w-full">
        <motion.div
          style={{
            rotateX: shouldReduceMotion ? 0 : rotateX,
            rotateY: shouldReduceMotion ? 0 : rotateY,
            rotateZ: shouldReduceMotion ? 0 : rotateZ,
            x: shouldReduceMotion ? 0 : chipX,
            y: shouldReduceMotion ? 0 : chipY,
            transformStyle: 'preserve-3d'
          }}
          className="relative w-full max-w-[370px] h-[250px] sm:h-[280px] flex items-center justify-center"
        >
          {/* Microchip Image Container with Mask & Watermark Concealment */}
          <div
            className="relative w-full h-full rounded-2xl overflow-hidden border border-red-500/40 shadow-2xl shadow-red-950/60"
            style={{
              maskImage: 'radial-gradient(ellipse at 50% 50%, black 78%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(ellipse at 50% 50%, black 78%, transparent 100%)'
            }}
          >
            <img
              src="/images/cyber-chip.jpg"
              alt="Cybersecurity Microchip Processor"
              className="w-full h-full object-cover object-center pointer-events-none select-none scale-105"
              draggable={false}
            />

            {/* Dynamic Specular Sheen / Energy Laser Sweep following pointer */}
            <motion.div
              style={{
                left: glareX,
                top: glareY,
                transform: 'translate(-50%, -50%)',
                translateZ: 30
              }}
              className="absolute w-44 h-44 rounded-full bg-gradient-to-r from-red-500/30 via-cyan-400/25 to-transparent blur-xl pointer-events-none mix-blend-screen"
            />

            {/* Traveling Electrical Energy Laser Pulse */}
            <motion.div
              animate={{
                x: ['-100%', '200%'],
                opacity: [0, 0.75, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-red-500/40 to-transparent skew-x-12 pointer-events-none mix-blend-screen"
            />

            {/* Bottom Dark Gradient to completely conceal any watermark text */}
            <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#040612] via-[#040612]/90 to-transparent pointer-events-none" />
          </div>

          {/* 4. Sleek Holographic Security Shield Label overlaid over the chip center */}
          <motion.div
            style={{
              x: shouldReduceMotion ? 0 : badgeX,
              y: shouldReduceMotion ? 0 : badgeY,
              translateZ: 45
            }}
            className="absolute top-[46%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[128px] sm:w-[144px] h-[86px] sm:h-[96px] rounded-xl bg-gradient-to-b from-[#0a0f24]/95 via-[#0d132c]/95 to-[#060814]/98 border border-cyan-400/60 shadow-[0_0_20px_rgba(0,229,255,0.45)] flex flex-col items-center justify-center p-2 backdrop-blur-sm pointer-events-none z-20"
          >
            {/* Pulsing Corner Brackets */}
            <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-cyan-300" />
            <div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-cyan-300" />
            <div className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-cyan-300" />
            <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-cyan-300" />

            <div className="flex items-center gap-1.5 mb-1">
              <Cpu className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span className="text-[10px] font-black tracking-widest text-cyan-300 uppercase">
                KUBER SEC
              </span>
            </div>

            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent my-0.5" />

            <p className="text-[8px] font-mono tracking-widest text-emerald-400 font-bold uppercase mt-0.5 flex items-center gap-1">
              <Lock className="w-2.5 h-2.5 text-emerald-400 inline" />
              HARDWARE SHIELD
            </p>

            <span className="text-[7.5px] font-mono text-slate-300/80 mt-0.5">
              ZERO-TRUST ACTIVE
            </span>
          </motion.div>

          {/* Floating Parallax Defense Metrics Badges */}
          <motion.div
            style={{
              translateZ: 60,
              x: shouldReduceMotion ? 0 : badgeX
            }}
            className="absolute -bottom-3 left-2 sm:left-4 px-2.5 py-1 rounded-lg bg-[#0b1026]/90 border border-cyan-500/40 backdrop-blur-md shadow-lg flex items-center gap-1.5"
          >
            <Activity className="w-3 h-3 text-cyan-400" />
            <span className="text-[9px] font-mono font-semibold text-cyan-200">
              Bus: 100% Encrypted
            </span>
          </motion.div>

          <motion.div
            style={{
              translateZ: 60,
              y: shouldReduceMotion ? 0 : badgeY
            }}
            className="absolute -top-2 right-2 sm:right-4 px-2.5 py-1 rounded-lg bg-[#14081c]/90 border border-red-500/40 backdrop-blur-md shadow-lg flex items-center gap-1.5"
          >
            <Zap className="w-3 h-3 text-red-400" />
            <span className="text-[9px] font-mono font-semibold text-red-200">
              Active Intrusion Filter
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* 5. Bottom Interactive Telemetry Bar */}
      <div className="relative z-30 flex items-center justify-between w-full px-3.5 py-2 rounded-full bg-[#0d1226]/85 backdrop-blur-md border border-slate-700/60 shadow-md text-[10px] font-mono text-slate-300">
        <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          Threat Level: 0 (Secure)
        </span>
        <span className="text-cyan-300/80 font-medium animate-pulse">
          Move cursor / touch 3D
        </span>
      </div>
    </div>
  );
}
