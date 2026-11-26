import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';

/**
 * CinematicFilmStudio
 * 
 * Frameless, Open 3D Cinematic Virtual Production Stage matching Topics 1 & 2:
 * - NO heavy outer card shell, NO white bulky pills (100% Frameless Floating Visual)
 * - Ultra-high-production Futuristic Virtual Production Studio visual
 * - Interactive cursor-following Anamorphic Lens Flare streak & optical glass sheen
 * - Dynamic Viewfinder Crosshair & live audio frequency waveform analyzer
 * - Subtle 3D perspective tilt (clamped to max 5 deg) tracking cursor
 * - Gentle floating oscillation & 1.025x hover zoom
 * - Strictly contained inside (Zero overflow / zero spill)
 */
export default function CinematicFilmStudio({ className = '' }) {
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);

  // Normalized pointer coordinates [-0.5, 0.5]
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth, premium spring physics (identical to CyberSecurityChip)
  const springConfig = { damping: 28, stiffness: 180, mass: 0.6 };

  // 1. Tilt strictly clamped to maximum 5 degrees (realistic, non-gaming)
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), springConfig);

  // 2. Subtle parallax depth layers
  const stageX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4, 4]), springConfig);
  const stageY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-4, 4]), springConfig);

  // 3. Specular flare & light reflection coordinates
  const lightX = useSpring(useTransform(mouseX, [-0.5, 0.5], ['10%', '90%']), springConfig);
  const lightY = useSpring(useTransform(mouseY, [-0.5, 0.5], ['10%', '90%']), springConfig);

  const handlePointerMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(-0.5, Math.min(0.5, (e.clientX - rect.left) / rect.width - 0.5));
    const y = Math.max(-0.5, Math.min(0.5, (e.clientY - rect.top) / rect.height - 0.5));
    mouseX.set(x);
    mouseY.set(y);
    setIsHovered(true);
  };

  const handlePointerLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  // Soundwave EQ base heights
  const eqFrequencies = [6, 14, 22, 12, 28, 18, 26, 15, 30, 20, 16, 24, 10, 18];

  return (
    <div
      style={{ perspective: 1200 }}
      className={`relative w-full max-w-[440px] flex items-center justify-center select-none ${className}`}
    >
      {/* Soft spatial atmosphere aura behind the cinema screen */}
      <div className="absolute w-[320px] sm:w-[380px] h-[320px] sm:h-[380px] bg-gradient-to-tr from-cyan-500/15 via-blue-600/12 to-indigo-600/15 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Gentle floating animation wrapper */}
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
        {/* Pure Frameless 3D Tilt Stage */}
        <motion.div
          ref={containerRef}
          onPointerMove={handlePointerMove}
          onPointerEnter={() => setIsHovered(true)}
          onPointerLeave={handlePointerLeave}
          style={{
            rotateX: shouldReduceMotion ? 0 : rotateX,
            rotateY: shouldReduceMotion ? 0 : rotateY,
            transformStyle: 'preserve-3d'
          }}
          className="relative w-full max-w-[430px] h-[300px] sm:h-[340px] flex items-center justify-center cursor-default"
        >
          {/* Frameless Cinema Canvas - STRICTLY CONTAINED (overflow-hidden, zero spill) */}
          <motion.div
            style={{
              x: shouldReduceMotion ? 0 : stageX,
              y: shouldReduceMotion ? 0 : stageY,
              transformStyle: 'preserve-3d'
            }}
            className="relative w-full h-full rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.55),0_0_20px_rgba(6,182,212,0.14)] border border-slate-700/50 bg-[#040612]"
          >
            {/* Virtual Production Studio Image with 1.025x Hover Zoom */}
            <motion.img
              src="/images/Futuristic-studio-for-AI-driven-creations.webp"
              alt="4K Virtual Production Cinema Studio"
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

            {/* Cinematic Anamorphic Top & Bottom Letterbox Vignette */}
            <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-[#040612]/90 via-[#040612]/40 to-transparent pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#040612]/95 via-[#040612]/50 to-transparent pointer-events-none" />

            {/* 1. Anamorphic Horizontal Blue Laser Flare Streak (Follows Cursor) */}
            <motion.div
              style={{
                top: lightY,
                translateY: '-50%'
              }}
              className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent pointer-events-none mix-blend-screen opacity-70"
            />

            {/* 2. Interactive Optical Lens Flare Core (Follows Cursor Smoothly) */}
            <motion.div
              animate={{
                opacity: isHovered ? 0.9 : 0.4
              }}
              transition={{ duration: 0.35 }}
              style={{
                left: lightX,
                top: lightY,
                transform: 'translate(-50%, -50%)',
                translateZ: 20
              }}
              className="absolute w-48 h-48 rounded-full bg-[radial-gradient(circle,rgba(0,255,255,0.22)_0%,rgba(56,189,248,0.12)_35%,rgba(168,85,247,0.06)_65%,transparent_75%)] pointer-events-none mix-blend-screen"
            />

            {/* 3. Optical Viewfinder Crosshair Target Reticle (Follows Cursor) */}
            <motion.div
              animate={{
                opacity: isHovered ? 0.95 : 0
              }}
              transition={{ duration: 0.25 }}
              style={{
                left: lightX,
                top: lightY,
                transform: 'translate(-50%, -50%)',
                translateZ: 25
              }}
              className="absolute w-9 h-9 pointer-events-none flex items-center justify-center mix-blend-screen"
            >
              {/* Corner brackets */}
              <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-cyan-300" />
              <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-cyan-300" />
              <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-cyan-300" />
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-cyan-300" />
              <span className="w-1 h-1 rounded-full bg-red-500 shadow-[0_0_6px_#ff0000]" />
            </motion.div>

            {/* 4. Top Telemetry: Micro REC Status & Cine Specs */}
            <div className="absolute top-3 inset-x-4 flex items-center justify-between text-[10px] font-mono pointer-events-none z-20">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white shadow-sm">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                <span className="font-bold tracking-wider text-red-400">REC</span>
                <span className="text-slate-400 font-normal">4K RAW &bull; 60 FPS</span>
              </div>
              <div className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-cyan-300 font-semibold shadow-sm">
                50mm T1.3 CINE
              </div>
            </div>

            {/* 5. Bottom Telemetry: Live Audio Waveform Spectrogram & Master Timeline */}
            <div className="absolute bottom-3 inset-x-4 flex items-end justify-between pointer-events-none z-20">
              {/* Live Audio Equalizer Bars */}
              <div className="flex items-end gap-1 px-3 py-1.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 shadow-sm">
                <span className="text-[9.5px] font-mono text-slate-400 mr-1.5">AUDIO MASTER</span>
                <div className="flex items-end gap-0.5 h-5">
                  {eqFrequencies.map((h, i) => (
                    <motion.span
                      key={i}
                      animate={
                        shouldReduceMotion
                          ? {}
                          : {
                              height: [
                                `${h * 0.4}px`,
                                `${h}px`,
                                `${h * 0.6}px`,
                                `${h * 0.9}px`
                              ]
                            }
                      }
                      transition={{
                        duration: 1.1 + (i % 4) * 0.25,
                        repeat: Infinity,
                        repeatType: 'mirror',
                        ease: 'easeInOut'
                      }}
                      className="w-1 rounded-full bg-gradient-to-t from-cyan-500 to-sky-300"
                    />
                  ))}
                </div>
              </div>

              {/* Master Timecode */}
              <div className="px-2.5 py-1.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-[9.5px] font-mono text-emerald-400 shadow-sm font-semibold">
                HDR &bull; MASTER OUTPUT
              </div>
            </div>

            {/* 6. Subtle Floating Cinematic Dust Particles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {[
                { top: '25%', left: '20%', size: '2px', color: '#00f0ff' },
                { top: '65%', left: '75%', size: '3px', color: '#38bdf8' },
                { top: '35%', left: '80%', size: '2px', color: '#fbbf24' },
                { top: '70%', left: '30%', size: '2.5px', color: '#00f0ff' },
                { top: '45%', left: '50%', size: '2px', color: '#a855f7' }
              ].map((p, idx) => (
                <motion.span
                  key={idx}
                  animate={
                    shouldReduceMotion
                      ? {}
                      : {
                          y: [-8, 8, -8],
                          opacity: [0.3, 0.9, 0.3]
                        }
                  }
                  transition={{
                    duration: 4 + idx,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                  style={{
                    position: 'absolute',
                    top: p.top,
                    left: p.left,
                    width: p.size,
                    height: p.size,
                    backgroundColor: p.color,
                    borderRadius: '50%',
                    boxShadow: `0 0 6px ${p.color}`
                  }}
                />
              ))}
            </div>

            {/* Delicate Beveled Edge Rim (Strictly Contained) */}
            <div className="absolute inset-0 rounded-3xl border border-white/10 pointer-events-none" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
