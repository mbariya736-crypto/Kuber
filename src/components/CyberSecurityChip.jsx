import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';

/**
 * CyberSecurityChip
 * 
 * Pure Frameless Circuit Board with Interactive Touch-Reactive Current Surge:
 * - NO outer frame, NO header pills, NO footer bars (100% Frameless)
 * - WHEREVER TOUCHED OR HOVERED: Localized electrical current surges, intense lightning arcs,
 *   expanding voltage shockwaves, and accelerated circuit pulses ignite right under the finger / cursor!
 * - Strictly contained inside the circuit board (Zero overflow / zero spill)
 * - Full touch gesture support for mobile + pointer tracking for desktop
 * - Central processor clock pulse ring & glowing pin contact nodes
 * - Subtle 3D perspective tilt (clamped to max 5 deg) & gentle floating oscillation
 */
export default function CyberSecurityChip({ className = '' }) {
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);
  const [isSurging, setIsSurging] = useState(false);
  const [touchPos, setTouchPos] = useState({ x: 50, y: 50 });

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

  // Unified coordinate update for pointer, click and touch
  const updateTouchLocation = (clientX, clientY, currentTarget, surge = false) => {
    const rect = currentTarget.getBoundingClientRect();
    const relX = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    const relY = Math.max(0, Math.min(1, (clientY - rect.top) / rect.height));

    const normX = relX - 0.5;
    const normY = relY - 0.5;

    mouseX.set(normX);
    mouseY.set(normY);

    setTouchPos({ x: relX * 100, y: relY * 100 });
    setIsHovered(true);
    if (surge) {
      setIsSurging(true);
    }
  };

  const handlePointerMove = (e) => {
    if (!containerRef.current) return;
    updateTouchLocation(e.clientX, e.clientY, e.currentTarget, false);
  };

  const handlePointerDown = (e) => {
    if (!containerRef.current) return;
    updateTouchLocation(e.clientX, e.clientY, e.currentTarget, true);
  };

  const handlePointerUp = () => {
    setIsSurging(false);
  };

  const handlePointerLeave = () => {
    setIsHovered(false);
    setIsSurging(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  const handleTouchStart = (e) => {
    if (e.touches && e.touches[0] && containerRef.current) {
      updateTouchLocation(e.touches[0].clientX, e.touches[0].clientY, e.currentTarget, true);
    }
  };

  const handleTouchMove = (e) => {
    if (e.touches && e.touches[0] && containerRef.current) {
      updateTouchLocation(e.touches[0].clientX, e.touches[0].clientY, e.currentTarget, true);
    }
  };

  const handleTouchEnd = () => {
    setIsSurging(false);
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  // SVG Circuit bus paths radiating from the central chip
  // ViewBox: 0 0 100 100, Chip Center: ~(51, 53)
  const cyanTracks = [
    { d: 'M 38 57 L 24 64 L 5 71', delay: 0 },
    { d: 'M 40 54 L 23 57 L 3 59', delay: 0.3 },
    { d: 'M 42 51 L 24 50 L 4 47', delay: 0.6 },
    { d: 'M 44 48 L 26 43 L 6 35', delay: 0.9 },
    { d: 'M 46 45 L 29 36 L 10 24', delay: 0.2 },
    { d: 'M 48 43 L 34 30 L 18 14', delay: 0.5 },
    { d: 'M 51 41 L 40 25 L 28 8', delay: 0.8 }
  ];

  const redTracks = [
    { d: 'M 64 49 L 78 40 L 96 34', delay: 0.15 },
    { d: 'M 62 52 L 77 47 L 97 44', delay: 0.45 },
    { d: 'M 60 55 L 75 56 L 98 56', delay: 0.75 },
    { d: 'M 58 58 L 73 64 L 95 70', delay: 0.35 },
    { d: 'M 56 61 L 70 72 L 91 83', delay: 0.65 },
    { d: 'M 54 64 L 64 78 L 83 93', delay: 0.95 },
    { d: 'M 52 65 L 56 82 L 69 97', delay: 0.3 }
  ];

  const topTracks = [
    { d: 'M 53 42 L 56 26 L 62 8', delay: 0.2 },
    { d: 'M 57 44 L 66 28 L 76 12', delay: 0.6 },
    { d: 'M 60 46 L 73 32 L 85 18', delay: 0.9 }
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
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerEnter={() => setIsHovered(true)}
          onPointerLeave={handlePointerLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{
            rotateX: shouldReduceMotion ? 0 : rotateX,
            rotateY: shouldReduceMotion ? 0 : rotateY,
            transformStyle: 'preserve-3d',
            touchAction: 'none'
          }}
          className="relative w-full max-w-[430px] h-[300px] sm:h-[340px] flex items-center justify-center cursor-crosshair touch-none"
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

                <filter id="surgeGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="1.2" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* 1. Left Cyan Circuit Traces - Current Flows Faster When Hovered/Surging */}
              {cyanTracks.map((track, i) => (
                <g key={`cyan-${i}`}>
                  <path
                    d={track.d}
                    fill="none"
                    stroke="#00f0ff"
                    strokeWidth={isHovered ? '0.45' : '0.35'}
                    strokeOpacity={isHovered ? '0.35' : '0.18'}
                  />
                  <motion.path
                    d={track.d}
                    fill="none"
                    stroke="#00ffff"
                    strokeWidth={isSurging ? '1.25' : isHovered ? '1.0' : '0.85'}
                    strokeLinecap="round"
                    filter="url(#cyanGlow)"
                    pathLength="1"
                    strokeDasharray="0.14 0.86"
                    animate={
                      shouldReduceMotion
                        ? {}
                        : {
                            strokeDashoffset: [1, 0]
                          }
                    }
                    transition={{
                      duration: isSurging ? 1.0 : isHovered ? 1.5 : 2.2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: track.delay
                    }}
                  />
                </g>
              ))}

              {/* 2. Right Red Circuit Traces - Current Flows Faster When Hovered/Surging */}
              {redTracks.map((track, i) => (
                <g key={`red-${i}`}>
                  <path
                    d={track.d}
                    fill="none"
                    stroke="#ff3366"
                    strokeWidth={isHovered ? '0.45' : '0.35'}
                    strokeOpacity={isHovered ? '0.35' : '0.18'}
                  />
                  <motion.path
                    d={track.d}
                    fill="none"
                    stroke="#ff2d55"
                    strokeWidth={isSurging ? '1.25' : isHovered ? '1.0' : '0.85'}
                    strokeLinecap="round"
                    filter="url(#redGlow)"
                    pathLength="1"
                    strokeDasharray="0.14 0.86"
                    animate={
                      shouldReduceMotion
                        ? {}
                        : {
                            strokeDashoffset: [0, -1]
                          }
                    }
                    transition={{
                      duration: isSurging ? 1.0 : isHovered ? 1.5 : 2.2,
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
                    strokeWidth={isSurging ? '1.1' : '0.75'}
                    strokeLinecap="round"
                    filter="url(#cyanGlow)"
                    pathLength="1"
                    strokeDasharray="0.14 0.86"
                    animate={
                      shouldReduceMotion
                        ? {}
                        : {
                            strokeDashoffset: [1, 0]
                          }
                    }
                    transition={{
                      duration: isSurging ? 1.1 : 2.2,
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
                strokeWidth={isSurging ? '1.2' : '0.65'}
                filter="url(#cyanGlow)"
                animate={
                  shouldReduceMotion
                    ? {}
                    : {
                        strokeOpacity: isSurging ? [0.6, 1, 0.6] : [0.2, 0.95, 0.2],
                        strokeWidth: isSurging ? [0.8, 1.4, 0.8] : [0.5, 0.9, 0.5]
                      }
                }
                transition={{
                  duration: isSurging ? 1.0 : 2.4,
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
                  r={isSurging ? '1.2' : '0.75'}
                  fill={pin.fill}
                  animate={
                    shouldReduceMotion
                      ? {}
                      : {
                          r: isSurging ? [1.0, 1.8, 1.0] : [0.65, 1.2, 0.65],
                          opacity: isSurging ? [0.8, 1, 0.8] : [0.5, 1, 0.5]
                        }
                  }
                  transition={{
                    duration: isSurging ? 0.8 : 1.8,
                    repeat: Infinity,
                    delay: idx * 0.1,
                    ease: 'easeInOut'
                  }}
                />
              ))}

              {/* 6. LOCALIZED TOUCH/CURSOR ELECTRICAL DISCHARGE ARC FILAMENTS */}
              {isHovered && (
                <g>
                  {/* Expanding High-Voltage Shockwave Wave 1 */}
                  <motion.circle
                    cx={touchPos.x}
                    cy={touchPos.y}
                    r="2"
                    fill="none"
                    stroke="#00ffff"
                    strokeWidth={isSurging ? '1.6' : '1.0'}
                    filter="url(#cyanGlow)"
                    animate={{
                      r: isSurging ? [2, 38] : [2, 24],
                      opacity: isSurging ? [0.95, 0] : [0.75, 0],
                      strokeWidth: isSurging ? [1.8, 0.2] : [1.0, 0.2]
                    }}
                    transition={{
                      duration: isSurging ? 0.7 : 1.4,
                      repeat: Infinity,
                      ease: 'easeOut'
                    }}
                  />

                  {/* Secondary Expanding Wave */}
                  <motion.circle
                    cx={touchPos.x}
                    cy={touchPos.y}
                    r="2"
                    fill="none"
                    stroke="#ff2d55"
                    strokeWidth="0.8"
                    filter="url(#redGlow)"
                    animate={{
                      r: isSurging ? [2, 30] : [2, 18],
                      opacity: isSurging ? [0.9, 0] : [0.65, 0],
                      strokeWidth: isSurging ? [1.4, 0.2] : [0.8, 0.2]
                    }}
                    transition={{
                      duration: isSurging ? 0.7 : 1.4,
                      repeat: Infinity,
                      ease: 'easeOut',
                      delay: isSurging ? 0.25 : 0.5
                    }}
                  />

                  {/* Crackling High-Voltage Electrical Arc 1 (Towards Chip/Buses) */}
                  <motion.path
                    d={`M ${touchPos.x} ${touchPos.y} Q ${touchPos.x + 9} ${touchPos.y - 7}, ${touchPos.x + 16} ${touchPos.y - 4}`}
                    stroke="#00ffff"
                    strokeWidth={isSurging ? '1.3' : '0.85'}
                    fill="none"
                    strokeLinecap="round"
                    filter="url(#surgeGlow)"
                    animate={{
                      opacity: [0.2, 1, 0.4, 0.9, 0.2],
                      strokeWidth: isSurging ? [1.1, 1.8, 1.1] : [0.6, 1.0, 0.6]
                    }}
                    transition={{ duration: 0.18, repeat: Infinity }}
                  />

                  {/* Crackling High-Voltage Electrical Arc 2 */}
                  <motion.path
                    d={`M ${touchPos.x} ${touchPos.y} Q ${touchPos.x - 8} ${touchPos.y + 8}, ${touchPos.x - 15} ${touchPos.y + 12}`}
                    stroke="#ff2d55"
                    strokeWidth={isSurging ? '1.3' : '0.85'}
                    fill="none"
                    strokeLinecap="round"
                    filter="url(#redGlow)"
                    animate={{
                      opacity: [0.4, 0.9, 0.2, 1, 0.3],
                      strokeWidth: isSurging ? [1.1, 1.8, 1.1] : [0.6, 1.0, 0.6]
                    }}
                    transition={{ duration: 0.22, repeat: Infinity }}
                  />

                  {/* Crackling High-Voltage Electrical Arc 3 */}
                  <motion.path
                    d={`M ${touchPos.x} ${touchPos.y} Q ${touchPos.x - 9} ${touchPos.y - 6}, ${touchPos.x - 17} ${touchPos.y - 10}`}
                    stroke="#38bdf8"
                    strokeWidth={isSurging ? '1.1' : '0.75'}
                    fill="none"
                    strokeLinecap="round"
                    filter="url(#cyanGlow)"
                    animate={{
                      opacity: [0.3, 0.85, 0.2, 1, 0.3]
                    }}
                    transition={{ duration: 0.25, repeat: Infinity }}
                  />

                  {/* Contact Plasma Spark Core */}
                  <circle
                    cx={touchPos.x}
                    cy={touchPos.y}
                    r={isSurging ? '2.8' : '1.8'}
                    fill="#ffffff"
                    filter="url(#surgeGlow)"
                  />
                  <circle
                    cx={touchPos.x}
                    cy={touchPos.y}
                    r={isSurging ? '4.5' : '3.0'}
                    fill="none"
                    stroke="#00ffff"
                    strokeWidth={isSurging ? '1.2' : '0.8'}
                  />
                </g>
              )}
            </svg>

            {/* 7. Dynamic Electromagnetic Energy Light Following Cursor Inside Circuit (Zero Overflow) */}
            <motion.div
              animate={{
                opacity: isSurging ? 1 : isHovered ? 0.88 : 0,
                scale: isSurging ? [1.1, 1.25, 1.1] : isHovered ? [1, 1.08, 1] : 1
              }}
              transition={{
                opacity: { duration: 0.25, ease: 'easeOut' },
                scale: { duration: isSurging ? 0.8 : 2, repeat: Infinity, ease: 'easeInOut' }
              }}
              style={{
                left: lightX,
                top: lightY,
                transform: 'translate(-50%, -50%)',
                translateZ: 20
              }}
              className="absolute w-52 h-52 rounded-full bg-[radial-gradient(circle,rgba(0,255,255,0.28)_0%,rgba(56,189,248,0.16)_35%,rgba(244,63,94,0.08)_60%,transparent_75%)] pointer-events-none mix-blend-screen"
            />

            {/* Delicate Beveled Edge Rim (Strictly Contained) */}
            <div className="absolute inset-0 rounded-3xl border border-white/10 pointer-events-none" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
