import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';

/**
 * CyberSecurityChip
 * 
 * Pure Frameless Circuit Board with Contained Cursor Energy Interaction:
 * - NO outer frame, NO header pills, NO footer bars (100% Frameless)
 * - All circuit animations and cursor energy are strictly contained inside (Zero overflow)
 * - Cursor acts as an electromagnetic catalyst: glowing energy beam & circuit sparks track the pointer
 * - Live animated electrical signal pulses travelling along motherboard circuit traces
 * - Central processor clock pulse ring & glowing pin contact nodes
 * - Subtle 3D perspective tilt (clamped to max 5 deg) tracking cursor
 * - Gentle floating oscillation & 1.025x hover zoom
 */
export default function CyberSecurityChip({ className = '' }) {
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);

  // Normalized pointer coordinates [-0.5, 0.5]
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth, premium spring physics
  const springConfig = { damping: 28, stiffness: 180, mass: 0.6 };

  // 1. Tilt strictly clamped to maximum 5 degrees (realistic, non-gaming)
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), springConfig);

  // 2. Subtle parallax depth layers
  const chipX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4, 4]), springConfig);
  const chipY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-4, 4]), springConfig);

  // 3. Cursor energy coordinates inside the circuit board (in percentage 0% - 100%)
  const rawLightX = useTransform(mouseX, [-0.5, 0.5], ['5%', '95%']);
  const rawLightY = useTransform(mouseY, [-0.5, 0.5], ['5%', '95%']);
  const lightX = useSpring(rawLightX, springConfig);
  const lightY = useSpring(rawLightY, springConfig);

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

  // SVG Circuit bus paths radiating from the central chip
  // ViewBox: 0 0 100 100, Chip Center: ~(51, 53)
  const cyanTracks = [
    { d: 'M 38 57 L 24 64 L 5 71', delay: 0 },
    { d: 'M 40 54 L 23 57 L 3 59', delay: 0.4 },
    { d: 'M 42 51 L 24 50 L 4 47', delay: 0.8 },
    { d: 'M 44 48 L 26 43 L 6 35', delay: 1.2 },
    { d: 'M 46 45 L 29 36 L 10 24', delay: 0.3 },
    { d: 'M 48 43 L 34 30 L 18 14', delay: 0.7 },
    { d: 'M 51 41 L 40 25 L 28 8', delay: 1.1 }
  ];

  const redTracks = [
    { d: 'M 64 49 L 78 40 L 96 34', delay: 0.2 },
    { d: 'M 62 52 L 77 47 L 97 44', delay: 0.6 },
    { d: 'M 60 55 L 75 56 L 98 56', delay: 1.0 },
    { d: 'M 58 58 L 73 64 L 95 70', delay: 0.5 },
    { d: 'M 56 61 L 70 72 L 91 83', delay: 0.9 },
    { d: 'M 54 64 L 64 78 L 83 93', delay: 1.3 },
    { d: 'M 52 65 L 56 82 L 69 97', delay: 0.4 }
  ];

  const topTracks = [
    { d: 'M 53 42 L 56 26 L 62 8', delay: 0.3 },
    { d: 'M 57 44 L 66 28 L 76 12', delay: 0.8 },
    { d: 'M 60 46 L 73 32 L 85 18', delay: 1.2 }
  ];

  return (
    <div
      style={{ perspective: 1200 }}
      className={`relative w-full max-w-[440px] flex items-center justify-center select-none ${className}`}
    >
      {/* Soft spatial atmosphere aura behind the circuit board */}
      <div className="absolute w-[320px] sm:w-[380px] h-[320px] sm:h-[380px] bg-gradient-to-tr from-cyan-500/15 via-rose-500/10 to-blue-600/15 rounded-full blur-3xl pointer-events-none -z-10" />

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
        {/* Pure Frameless 3D Tilt Stage - NO outer card bars/pills */}
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
          {/* Frameless Circuit Board Canvas - STRICTLY CONTAINED (overflow-hidden, zero spill) */}
          <motion.div
            style={{
              x: shouldReduceMotion ? 0 : chipX,
              y: shouldReduceMotion ? 0 : chipY,
              transformStyle: 'preserve-3d'
            }}
            className="relative w-full h-full rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.55),0_0_20px_rgba(6,182,212,0.12)] border border-slate-700/50 bg-[#060814]"
          >
            {/* The High-Resolution Microchip Hardware Image with 1.025x Zoom on Hover */}
            <motion.img
              src="/images/cyber-chip.jpg"
              alt="Cybersecurity Microchip Architecture"
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

            {/* Seamless Dark Bottom Gradient to conceal watermark cleanly (contained inside) */}
            <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#060814] via-[#060814]/85 to-transparent pointer-events-none" />

            {/* SVG Live Circuit Electricity Pulse Overlay (Strictly Contained) */}
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="absolute inset-0 w-full h-full pointer-events-none mix-blend-screen overflow-hidden"
            >
              <defs>
                <filter id="cyanGlow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="0.6" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                <filter id="redGlow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="0.6" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* 1. Left Cyan Circuit Traces - Inward / Outward Data Flow */}
              {cyanTracks.map((track, i) => (
                <g key={`cyan-${i}`}>
                  <path
                    d={track.d}
                    fill="none"
                    stroke="#00f0ff"
                    strokeWidth="0.35"
                    strokeOpacity="0.18"
                  />
                  <motion.path
                    d={track.d}
                    fill="none"
                    stroke="#00ffff"
                    strokeWidth="0.85"
                    strokeLinecap="round"
                    filter="url(#cyanGlow)"
                    pathLength="1"
                    strokeDasharray="0.12 0.88"
                    animate={
                      shouldReduceMotion
                        ? {}
                        : {
                            strokeDashoffset: [1, 0]
                          }
                    }
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: track.delay
                    }}
                  />
                </g>
              ))}

              {/* 2. Right Red Circuit Traces - Outward Power & Signal Surge */}
              {redTracks.map((track, i) => (
                <g key={`red-${i}`}>
                  <path
                    d={track.d}
                    fill="none"
                    stroke="#ff3366"
                    strokeWidth="0.35"
                    strokeOpacity="0.18"
                  />
                  <motion.path
                    d={track.d}
                    fill="none"
                    stroke="#ff2d55"
                    strokeWidth="0.85"
                    strokeLinecap="round"
                    filter="url(#redGlow)"
                    pathLength="1"
                    strokeDasharray="0.12 0.88"
                    animate={
                      shouldReduceMotion
                        ? {}
                        : {
                            strokeDashoffset: [0, -1]
                          }
                    }
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: track.delay
                    }}
                  />
                </g>
              ))}

              {/* 3. Top Circuit Traces */}
              {topTracks.map((track, i) => (
                <g key={`top-${i}`}>
                  <path
                    d={track.d}
                    fill="none"
                    stroke="#38bdf8"
                    strokeWidth="0.35"
                    strokeOpacity="0.18"
                  />
                  <motion.path
                    d={track.d}
                    fill="none"
                    stroke="#7dd3fc"
                    strokeWidth="0.75"
                    strokeLinecap="round"
                    filter="url(#cyanGlow)"
                    pathLength="1"
                    strokeDasharray="0.12 0.88"
                    animate={
                      shouldReduceMotion
                        ? {}
                        : {
                            strokeDashoffset: [1, 0]
                          }
                    }
                    transition={{
                      duration: 2.4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: track.delay
                    }}
                  />
                </g>
              ))}

              {/* 4. Central Processor Perimeter Clock Pulse Ring */}
              <motion.polygon
                points="51,41 64,49 51,65 38,57"
                fill="none"
                stroke="#00ffff"
                strokeWidth="0.65"
                filter="url(#cyanGlow)"
                animate={
                  shouldReduceMotion
                    ? {}
                    : {
                        strokeOpacity: [0.2, 0.95, 0.2],
                        strokeWidth: [0.5, 0.9, 0.5]
                      }
                }
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />

              {/* 5. Glowing Pin Contact Nodes (Energy Terminals) */}
              {[
                { cx: 38, cy: 57, fill: '#00ffff' },
                { cx: 40, cy: 54, fill: '#00ffff' },
                { cx: 44, cy: 48, fill: '#00ffff' },
                { cx: 48, cy: 43, fill: '#00ffff' },
                { cx: 51, cy: 41, fill: '#38bdf8' },
                { cx: 57, cy: 44, fill: '#ff2d55' },
                { cx: 64, cy: 49, fill: '#ff2d55' },
                { cx: 60, cy: 55, fill: '#ff2d55' },
                { cx: 56, cy: 61, fill: '#ff2d55' },
                { cx: 51, cy: 65, fill: '#ff2d55' }
              ].map((pin, idx) => (
                <motion.circle
                  key={`pin-${idx}`}
                  cx={pin.cx}
                  cy={pin.cy}
                  r="0.75"
                  fill={pin.fill}
                  animate={
                    shouldReduceMotion
                      ? {}
                      : {
                          r: [0.65, 1.2, 0.65],
                          opacity: [0.5, 1, 0.5]
                        }
                  }
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    delay: idx * 0.15,
                    ease: 'easeInOut'
                  }}
                />
              ))}
            </svg>

            {/* 6. Dynamic Electromagnetic Energy Light Following Cursor Inside Circuit (Zero Overflow) */}
            <motion.div
              animate={{
                opacity: isHovered ? 0.85 : 0,
                scale: isHovered ? [1, 1.08, 1] : 1
              }}
              transition={{
                opacity: { duration: 0.35, ease: 'easeOut' },
                scale: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
              }}
              style={{
                left: lightX,
                top: lightY,
                transform: 'translate(-50%, -50%)',
                translateZ: 20
              }}
              className="absolute w-48 h-48 rounded-full bg-[radial-gradient(circle,rgba(0,255,255,0.22)_0%,rgba(56,189,248,0.12)_35%,rgba(244,63,94,0.06)_60%,transparent_75%)] pointer-events-none mix-blend-screen"
            />

            {/* 7. Cursor Energy Focus Reticle / Optical Target Node (Follows pointer precisely inside) */}
            <motion.div
              animate={{
                opacity: isHovered ? 0.9 : 0
              }}
              transition={{ duration: 0.25 }}
              style={{
                left: lightX,
                top: lightY,
                transform: 'translate(-50%, -50%)',
                translateZ: 25
              }}
              className="absolute w-8 h-8 rounded-full border border-cyan-400/50 pointer-events-none flex items-center justify-center mix-blend-screen"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_#00ffff]" />
              <div className="absolute inset-0 rounded-full border border-dashed border-cyan-300/40 animate-spin" style={{ animationDuration: '6s' }} />
            </motion.div>

            {/* Delicate Beveled Edge Rim (Strictly Contained) */}
            <div className="absolute inset-0 rounded-3xl border border-white/10 pointer-events-none" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
