import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';

/**
 * AiWireframeFace
 * 
 * Interactive 3D Cyber Polygonal AI Face Mesh using the exact attached user picture:
 * - Exact source picture: /images/ai-face-wireframe.jpg
 * - Full 3D perspective rotation (yaw, pitch, roll) tracking mouse cursor & mobile touch drag
 * - Dynamic specular light sheen that follows the pointer across the face
 * - Living animated glowing cyber eyes aligned with the ocular optics
 * - Vertical biometric laser scanline sweep
 * - Deep space cosmic nebula & floating star particles
 */
export default function AiWireframeFace({ className = '' }) {
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const [isHovered, setIsHovered] = useState(false);

  // Motion Values for pointer/touch coordinates normalized to [-0.5, 0.5]
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring physics for smooth fluid responsiveness
  const springConfig = { damping: 22, stiffness: 150, mass: 0.5 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [26, -26]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-30, 30]), springConfig);
  const rotateZ = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);

  // Multi-layer Parallax Offsets
  const faceX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-16, 16]), springConfig);
  const faceY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-16, 16]), springConfig);

  const eyeOffsetX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), springConfig);
  const eyeOffsetY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-5, 5]), springConfig);

  // Dynamic Cursor Spotlight/Specular Glare position (percentage)
  const glareX = useSpring(useTransform(mouseX, [-0.5, 0.5], ['10%', '90%']), springConfig);
  const glareY = useSpring(useTransform(mouseY, [-0.5, 0.5], ['10%', '90%']), springConfig);

  // Coordinate tracking for both mouse and mobile touch
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
      className={`relative w-full max-w-[390px] h-[400px] sm:h-[460px] rounded-3xl overflow-hidden bg-gradient-to-b from-[#030718] via-[#05112B] to-[#120726] border border-cyan-500/35 shadow-[0_15px_50px_rgba(0,180,255,0.25)] select-none flex items-center justify-center cursor-grab active:cursor-grabbing touch-none ${className}`}
    >
      {/* 1. Deep Space Cosmic Nebula Ambient Glows */}
      <div className="absolute top-0 -left-12 w-52 h-52 bg-blue-600/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-4 -right-12 w-60 h-60 bg-purple-600/35 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,240,255,0.12)_0%,_transparent_75%)] pointer-events-none" />

      {/* 2. Floating Star Particles in Deep Space */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[
          { top: '12%', left: '18%', size: 3, delay: 0 },
          { top: '22%', left: '82%', size: 2.5, delay: 1.2 },
          { top: '45%', left: '10%', size: 2, delay: 0.6 },
          { top: '65%', left: '88%', size: 3, delay: 1.8 },
          { top: '80%', left: '22%', size: 2.5, delay: 2.4 },
          { top: '28%', left: '32%', size: 2, delay: 0.9 },
          { top: '72%', left: '76%', size: 2.5, delay: 1.5 },
          { top: '88%', left: '48%', size: 3, delay: 2.1 }
        ].map((pt, i) => (
          <motion.span
            key={i}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.4, 0.8]
            }}
            transition={{
              duration: 2.5 + (i % 3),
              repeat: Infinity,
              delay: pt.delay,
              ease: 'easeInOut'
            }}
            className="absolute rounded-full bg-cyan-300 shadow-[0_0_8px_#00F0FF]"
            style={{
              top: pt.top,
              left: pt.left,
              width: `${pt.size}px`,
              height: `${pt.size}px`
            }}
          />
        ))}
      </div>

      {/* 3. 3D Perspectived Wireframe AI Face Card */}
      <motion.div
        style={{
          rotateX: shouldReduceMotion ? 0 : rotateX,
          rotateY: shouldReduceMotion ? 0 : rotateY,
          rotateZ: shouldReduceMotion ? 0 : rotateZ,
          x: shouldReduceMotion ? 0 : faceX,
          y: shouldReduceMotion ? 0 : faceY,
          transformStyle: 'preserve-3d'
        }}
        className="relative w-[300px] sm:w-[340px] h-[350px] sm:h-[400px] flex items-center justify-center"
      >
        {/* The Exact Attached AI Face Image */}
        <div
          className="relative w-full h-full rounded-2xl overflow-hidden flex items-center justify-center"
          style={{
            maskImage: 'radial-gradient(ellipse at 50% 50%, black 72%, transparent 98%)',
            WebkitMaskImage: 'radial-gradient(ellipse at 50% 50%, black 72%, transparent 98%)'
          }}
        >
          <img
            src="/images/ai-face-wireframe.jpg"
            alt="AI Wireframe Mesh Face"
            className="w-full h-full object-cover object-center pointer-events-none select-none scale-105"
            draggable={false}
          />

          {/* Dynamic Interactive Light Sheen Glare following Cursor */}
          <motion.div
            style={{
              left: glareX,
              top: glareY,
              transform: 'translate(-50%, -50%)',
              translateZ: 30
            }}
            className="absolute w-48 h-48 rounded-full bg-gradient-to-r from-cyan-400/25 via-blue-400/15 to-transparent blur-xl pointer-events-none mix-blend-screen"
          />

          {/* Vertical Laser Biometric Scan Beam */}
          <motion.div
            animate={
              shouldReduceMotion
                ? {}
                : {
                    top: ['2%', '94%', '2%'],
                    opacity: [0.2, 0.85, 0.2]
                  }
            }
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
            style={{ translateZ: 40 }}
            className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-300 to-transparent shadow-[0_0_12px_rgba(0,229,255,0.95)] z-20 pointer-events-none"
          />
        </div>

        {/* 4. Living Animated Glowing Cyber Eyes (Aligned with picture's ocular coordinates) */}
        {/* Left Cyber Eye Glow */}
        <motion.div
          style={{
            x: shouldReduceMotion ? 0 : eyeOffsetX,
            y: shouldReduceMotion ? 0 : eyeOffsetY,
            translateZ: 50
          }}
          className="absolute left-[29.5%] top-[44.8%] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-30 flex items-center justify-center"
        >
          <motion.div
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.85, 1, 0.85]
            }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            className="w-8 h-8 rounded-full bg-cyan-400/30 blur-sm flex items-center justify-center"
          >
            <div className="w-4 h-4 rounded-full bg-cyan-300 shadow-[0_0_12px_#00F0FF] flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_6px_#ffffff]" />
            </div>
          </motion.div>
        </motion.div>

        {/* Right Cyber Eye Glow */}
        <motion.div
          style={{
            x: shouldReduceMotion ? 0 : eyeOffsetX,
            y: shouldReduceMotion ? 0 : eyeOffsetY,
            translateZ: 50
          }}
          className="absolute left-[66.8%] top-[44.8%] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-30 flex items-center justify-center"
        >
          <motion.div
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.85, 1, 0.85]
            }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay: 0.1 }}
            className="w-8 h-8 rounded-full bg-cyan-400/30 blur-sm flex items-center justify-center"
          >
            <div className="w-4 h-4 rounded-full bg-cyan-300 shadow-[0_0_12px_#00F0FF] flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_6px_#ffffff]" />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* 5. Futuristic Floating Interactive Pill */}
      <div className="absolute bottom-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-cyan-400/40 text-[11px] font-mono text-cyan-300 flex items-center gap-2 pointer-events-none z-40 shadow-lg">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        <span>3D AI Wireframe &bull; Move &amp; Touch</span>
      </div>
    </div>
  );
}
