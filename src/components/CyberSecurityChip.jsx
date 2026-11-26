import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';

/**
 * CyberSecurityChip
 * 
 * Frameless, Open 3D Circuit Processor with Live Interactive Energy:
 * - NO outer card shell, NO heavy header/footer pills (Pure Frameless Floating Visual)
 * - Live animated electrical signal pulses travelling along radiating circuit buses
 * - Central processor clock energy heartbeat
 * - Subtle 3D perspective tilt (max 5 deg) tracking mouse cursor
 * - Delicate specular light reflection following cursor smoothly
 * - Gentle 1.02x hover zoom with smooth spring return on mouse leave
 * - Organic soft perimeter fade floating directly on the stage
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

  // 3. Specular light reflection tracking cursor in percentages
  const lightX = useSpring(useTransform(mouseX, [-0.5, 0.5], ['20%', '80%']), springConfig);
  const lightY = useSpring(useTransform(mouseY, [-0.5, 0.5], ['20%', '80%']), springConfig);

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
      <div className="absolute w-[320px] sm:w-[360px] h-[320px] sm:h-[360px] bg-gradient-to-tr from-cyan-500/15 via-rose-500/10 to-blue-600/15 rounded-full blur-3xl pointer-events-none -z-10" />

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
        {/* Main Frameless 3D Tilt Stage */}
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
          className="relative w-full max-w-[420px] h-[320px] sm:h-[360px] flex items-center justify-center cursor-default"
        >
          {/* Frameless Circuit Board Canvas with Subtle Vignette Mask */}
          <motion.div
            style={{
              x: shouldReduceMotion ? 0 : chipX,
              y: shouldReduceMotion ? 0 : chipY,
              transformStyle: 'preserve-3d'
            }}
            className="relative w-full h-full rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.5)] border border-slate-700/40 bg-[#060812]"
          >
            {/* The High-Resolution Microchip Hardware Image with 1.02x Zoom on Hover */}
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

            {/* Seamless Dark Bottom Gradient to conceal watermark cleanly */}
            <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#060812] via-[#060812]/85 to-transparent pointer-events-none" />

            {/* SVG Live Circuit Electricity Pulse Overlay */}
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="absolute inset-0 w-full h-full pointer-events-none mix-blend-screen overflow-visible"
            >
              <defs>
                {/* Cyan Glow Filter */}
                <filter id="cyanGlow" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="0.6" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                {/* Crimson Glow Filter */}
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
                  {/* Subtle static trace guide */}
                  <path
                    d={track.d}
                    fill="none"
                    stroke="#00f0ff"
                    strokeWidth="0.35"
                    strokeOpacity="0.18"
                  />
                  {/* Traveling Electrical Signal Pulse */}
                  <motion.path
                    d={track.d}
                    fill="none"
                    stroke="#00ffff"
                    strokeWidth="0.8"
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
                  {/* Subtle static trace guide */}
                  <path
                    d={track.d}
                    fill="none"
                    stroke="#ff3366"
                    strokeWidth="0.35"
                    strokeOpacity="0.18"
                  />
                  {/* Traveling Electrical Signal Pulse */}
                  <motion.path
                    d={track.d}
                    fill="none"
                    stroke="#ff2d55"
                    strokeWidth="0.8"
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
                        strokeOpacity: [0.2, 0.9, 0.2],
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
                  r="0.7"
                  fill={pin.fill}
                  animate={
                    shouldReduceMotion
                      ? {}
                      : {
                          r: [0.6, 1.1, 0.6],
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

            {/* Soft Specular Light Reflection Sheen (Follows Cursor Smoothly) */}
            <motion.div
              animate={{
                opacity: isHovered ? 0.75 : 0
              }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              style={{
                left: lightX,
                top: lightY,
                transform: 'translate(-50%, -50%)',
                translateZ: 15
              }}
              className="absolute w-56 h-56 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.16)_0%,rgba(147,197,253,0.08)_40%,transparent_70%)] pointer-events-none mix-blend-screen"
            />

            {/* Subtle refined perimeter bevel border */}
            <div className="absolute inset-0 rounded-3xl border border-white/10 pointer-events-none" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
