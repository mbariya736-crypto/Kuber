import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';
import { ShieldCheck, Lock, Cpu } from 'lucide-react';

/**
 * CyberSecurityChip
 * 
 * Apple / Stripe / Modern SaaS level Cyber Security Interactive Card:
 * - Subtle 3D perspective tilt (strictly clamped to max 5 deg)
 * - Soft cursor-following light reflection / specular sheen
 * - Delicate multi-layer parallax depth
 * - Gentle image zoom on interaction (1.02x)
 * - Calm, realistic floating animation
 * - Smooth spring physics with graceful return on mouse leave
 * - Human-made, refined typography and quiet, executive aesthetic (no gaming neon/flashy effects)
 */
export default function CyberSecurityChip({ className = '' }) {
  const cardRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);

  // Normalized pointer coordinates [-0.5, 0.5]
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Premium, silky smooth Apple-style spring physics
  const springConfig = { damping: 28, stiffness: 180, mass: 0.6 };

  // 1. Tilt strictly clamped to maximum 5 degrees (realistic, non-gaming)
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), springConfig);

  // 2. Subtle parallax displacement (delicate 4px - 8px depth)
  const layerImageX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4, 4]), springConfig);
  const layerImageY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-4, 4]), springConfig);

  const layerBadgeX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);
  const layerBadgeY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-8, 8]), springConfig);

  // 3. Soft specular light reflection tracking cursor in percentages
  const lightX = useSpring(useTransform(mouseX, [-0.5, 0.5], ['20%', '80%']), springConfig);
  const lightY = useSpring(useTransform(mouseY, [-0.5, 0.5], ['20%', '80%']), springConfig);

  // Mouse & Touch interaction handlers
  const handlePointerMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = Math.max(-0.5, Math.min(0.5, (e.clientX - rect.left) / rect.width - 0.5));
    const y = Math.max(-0.5, Math.min(0.5, (e.clientY - rect.top) / rect.height - 0.5));
    mouseX.set(x);
    mouseY.set(y);
    setIsHovered(true);
  };

  const handlePointerLeave = () => {
    setIsHovered(false);
    // Smoothly return to baseline original position
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      style={{ perspective: 1200 }}
      className={`relative w-full max-w-[440px] flex items-center justify-center select-none ${className}`}
    >
      {/* Gentle, calm floating animation wrapper */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                y: [-3.5, 3.5, -3.5]
              }
        }
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="w-full flex justify-center"
      >
        {/* Main 3D Card Shell */}
        <motion.div
          ref={cardRef}
          onPointerMove={handlePointerMove}
          onPointerEnter={() => setIsHovered(true)}
          onPointerLeave={handlePointerLeave}
          style={{
            rotateX: shouldReduceMotion ? 0 : rotateX,
            rotateY: shouldReduceMotion ? 0 : rotateY,
            transformStyle: 'preserve-3d'
          }}
          className="relative w-full h-[400px] sm:h-[450px] rounded-3xl overflow-hidden bg-[#0c101a] border border-slate-800/80 shadow-[0_20px_50px_rgba(0,0,0,0.45)] flex flex-col justify-between p-5 cursor-default transition-colors duration-500 hover:border-slate-700/80"
        >
          {/* Subtle Ambient Background Gradient (Deep, quiet graphite & navy) */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#111726]/80 via-[#0c101a] to-[#070a12] pointer-events-none -z-10" />

          {/* 1. Header: Quiet, Executive Apple-like Security Pill */}
          <div className="relative z-20 flex items-center justify-between w-full px-3.5 py-2 rounded-full bg-white/[0.04] backdrop-blur-md border border-white/[0.08]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400/90 shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
              <span className="text-[11px] font-semibold tracking-wide text-slate-200 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Hardware Security Architecture
              </span>
            </div>
            <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-white/[0.06] text-slate-300 border border-white/[0.08]">
              AES-256 GCM
            </span>
          </div>

          {/* 2. Microchip Center Showcase */}
          <div className="relative flex-1 flex items-center justify-center my-auto w-full py-2">
            <motion.div
              style={{
                x: shouldReduceMotion ? 0 : layerImageX,
                y: shouldReduceMotion ? 0 : layerImageY,
                transformStyle: 'preserve-3d'
              }}
              className="relative w-full max-w-[360px] h-[240px] sm:h-[260px] rounded-2xl overflow-hidden border border-white/[0.08] shadow-[0_12px_36px_rgba(0,0,0,0.6)] bg-black"
            >
              {/* Microchip Processor Image with 1.02x Zoom on Interaction */}
              <motion.img
                src="/images/cyber-chip.jpg"
                alt="Cybersecurity Microchip Processor"
                animate={{
                  scale: isHovered ? 1.025 : 1.0
                }}
                transition={{
                  duration: 0.55,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="w-full h-full object-cover object-center pointer-events-none select-none"
                draggable={false}
              />

              {/* Bottom Dark Gradient to seamlessly blend edge & cover watermark */}
              <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#070a12] via-[#070a12]/80 to-transparent pointer-events-none" />

              {/* Soft Specular Light Reflection Sheen (Follows Cursor Smoothly) */}
              <motion.div
                animate={{
                  opacity: isHovered ? 0.85 : 0
                }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                style={{
                  left: lightX,
                  top: lightY,
                  transform: 'translate(-50%, -50%)',
                  translateZ: 15
                }}
                className="absolute w-56 h-56 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.14)_0%,rgba(147,197,253,0.06)_40%,transparent_70%)] pointer-events-none mix-blend-screen"
              />

              {/* Subtle Polished Glass Edge Glare */}
              <div className="absolute inset-0 rounded-2xl border border-white/[0.08] pointer-events-none" />
            </motion.div>

            {/* 3. Refined Hardware Enclave Badge (Minimalist Parallax Floating Plaque) */}
            <motion.div
              style={{
                x: shouldReduceMotion ? 0 : layerBadgeX,
                y: shouldReduceMotion ? 0 : layerBadgeY,
                translateZ: 25
              }}
              className="absolute top-[48%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[140px] sm:w-[152px] py-2 px-3 rounded-xl bg-[#090d16]/90 backdrop-blur-md border border-white/[0.12] shadow-[0_8px_24px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center text-center pointer-events-none z-20"
            >
              <div className="flex items-center gap-1.5 mb-0.5">
                <Cpu className="w-3.5 h-3.5 text-sky-400" />
                <span className="text-[10px] font-bold tracking-wider text-slate-200 uppercase">
                  Secure Enclave
                </span>
              </div>
              <div className="w-full h-[1px] bg-white/[0.08] my-1" />
              <div className="flex items-center gap-1 text-[8.5px] font-mono text-emerald-400/90 font-medium tracking-wide">
                <Lock className="w-2.5 h-2.5 inline" />
                <span>ROOT OF TRUST</span>
              </div>
            </motion.div>
          </div>

          {/* 4. Footer: Minimal, Human-Made Executive Telemetry */}
          <div className="relative z-20 flex items-center justify-between w-full px-3.5 py-2 rounded-full bg-white/[0.02] border border-white/[0.06] text-[10.5px] text-slate-400 font-medium">
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Zero-Trust Isolation
            </span>
            <span className="text-slate-400 text-[10px] font-mono">
              Enterprise Verified
            </span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
