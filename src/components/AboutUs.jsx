import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  Bot,
  Brain,
  ShieldCheck,
  Film,
  ArrowRight,
  Lock,
  Activity,
  CheckCircle2,
  Video,
  Sparkles,
  Zap,
  Workflow,
  Crosshair,
  Sliders
} from 'lucide-react';
import { Link } from 'react-router-dom';

/* ========================================================================= */
/* 1. INTERACTIVE SERVICE ANIMATIONS (OPEN 3D HOLOGRAPHIC STAGE)             */
/* ========================================================================= */

// --- A. AUTOMATION WORKFLOW ANIMATION: ONLY STANDALONE 3D TOUCH-INTERACTIVE AI FACE ---
function AutomationStageVisual({ shouldReduceMotion, cursor }) {
  const { rotateX, rotateY, eyeX, eyeY, glowX, glowY } = cursor;

  return (
    <motion.div
      style={{
        rotateX: shouldReduceMotion ? 0 : rotateX,
        rotateY: shouldReduceMotion ? 0 : rotateY,
        transformStyle: 'preserve-3d'
      }}
      className="relative w-full h-[380px] sm:h-[440px] flex flex-col items-center justify-center select-none"
    >
      {/* Interactive Cursor Spotlight Aura */}
      <motion.div
        style={{
          left: glowX,
          top: glowY,
          transform: 'translate(-50%, -50%)'
        }}
        className="absolute w-72 h-72 sm:w-84 sm:h-84 bg-gradient-to-r from-blue-400/25 via-cyan-300/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
      />

      {/* Dual Outer Gyroscopic Orbit Rings */}
      <motion.div
        animate={shouldReduceMotion ? {} : { rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[290px] h-[290px] sm:w-[350px] sm:h-[350px] rounded-full border border-dashed border-[#0866E8]/35 pointer-events-none"
      />
      <motion.div
        animate={shouldReduceMotion ? {} : { rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute w-[330px] h-[330px] sm:w-[390px] sm:h-[390px] rounded-full border border-cyan-400/20 pointer-events-none"
      />

      {/* 3D AI Face Container */}
      <div className="relative z-20 flex flex-col items-center justify-center">
        <div className="relative w-[250px] h-[280px] sm:w-[290px] sm:h-[330px] flex items-center justify-center">
          {/* Vertical Laser Scan Beam */}
          <motion.div
            animate={shouldReduceMotion ? {} : { top: ['6%', '92%', '6%'], opacity: [0.2, 0.85, 0.2] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute left-4 right-4 h-[2px] bg-gradient-to-r from-transparent via-cyan-300 to-transparent shadow-[0_0_12px_rgba(0,229,255,0.95)] z-30 pointer-events-none"
          />

          {/* High-Definition 3D Cyber AI Face Vector SVG */}
          <svg
            viewBox="0 0 200 240"
            className="w-full h-full relative z-10 drop-shadow-[0_12px_30px_rgba(8,102,232,0.35)]"
            fill="none"
          >
            <defs>
              <linearGradient id="aiShellGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0B2B64" />
                <stop offset="50%" stopColor="#084EAA" />
                <stop offset="100%" stopColor="#0866E8" />
              </linearGradient>
              <linearGradient id="aiTrimGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E0F2FE" />
                <stop offset="50%" stopColor="#7DD3FC" />
                <stop offset="100%" stopColor="#00E5FF" />
              </linearGradient>
              <radialGradient id="pupilGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="35%" stopColor="#38BDF8" />
                <stop offset="80%" stopColor="#00E5FF" />
                <stop offset="100%" stopColor="#0866E8" />
              </radialGradient>
              <radialGradient id="coreAura" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#0866E8" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Cranium Halo Wireframe */}
            <motion.path
              d="M 46 86 C 46 36, 154 36, 154 86 C 154 125, 142 168, 100 206 C 58 168, 46 125, 46 86 Z"
              stroke="url(#aiTrimGrad)"
              strokeWidth="1.5"
              strokeDasharray="6 4"
              opacity="0.75"
              animate={shouldReduceMotion ? {} : { strokeDashoffset: [0, -40] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            />

            {/* Sculpted AI Head Shell */}
            <path
              d="M 52 82 C 52 38, 148 38, 148 82 C 148 118, 136 158, 100 196 C 64 158, 52 118, 52 82 Z"
              fill="url(#aiShellGrad)"
              stroke="url(#aiTrimGrad)"
              strokeWidth="2.2"
            />

            {/* Forehead Armor Plate Seams */}
            <path
              d="M 68 62 Q 100 70 132 62"
              stroke="#7DD3FC"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
            <path
              d="M 78 50 Q 100 56 122 50"
              stroke="#38BDF8"
              strokeWidth="1.2"
              strokeLinecap="round"
              opacity="0.8"
            />

            {/* Forehead Central AI Core Node */}
            <circle cx="100" cy="52" r="6" fill="url(#coreAura)" />
            <circle cx="100" cy="52" r="3.2" fill="#00E5FF" />
            <motion.circle
              cx="100"
              cy="52"
              r="9"
              stroke="#00E5FF"
              strokeWidth="1.2"
              animate={shouldReduceMotion ? {} : { scale: [1, 1.8, 1], opacity: [0.9, 0, 0.9] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Temple Neural Synaptic Circuit Lines */}
            <path d="M 100 52 L 100 68" stroke="#38BDF8" strokeWidth="1.4" strokeLinecap="round" />
            <path d="M 74 63 L 64 74 L 64 96" stroke="#00E5FF" strokeWidth="1.2" strokeLinecap="round" opacity="0.85" />
            <path d="M 126 63 L 136 74 L 136 96" stroke="#00E5FF" strokeWidth="1.2" strokeLinecap="round" opacity="0.85" />

            {/* Cyber Ear/Sensor Ports */}
            <rect x="44" y="90" width="6" height="18" rx="3" fill="#38BDF8" />
            <rect x="150" y="90" width="6" height="18" rx="3" fill="#38BDF8" />

            {/* Digital Brow Ridges */}
            <path d="M 65 88 L 90 92" stroke="#BAE6FD" strokeWidth="2.4" strokeLinecap="round" />
            <path d="M 135 88 L 110 92" stroke="#BAE6FD" strokeWidth="2.4" strokeLinecap="round" />

            {/* Eye Sockets Contour */}
            <path
              d="M 68 104 Q 80 96 92 104 Q 80 112 68 104 Z"
              fill="#03112E"
              stroke="#38BDF8"
              strokeWidth="1.6"
            />
            <path
              d="M 108 104 Q 120 96 132 104 Q 120 112 108 104 Z"
              fill="#03112E"
              stroke="#38BDF8"
              strokeWidth="1.6"
            />

            {/* Touch/Cursor-Tracking Glowing Pupils with Natural Blink */}
            <motion.g
              animate={shouldReduceMotion ? {} : { scaleY: [1, 1, 0.08, 1] }}
              transition={{ duration: 3.8, repeat: Infinity, times: [0, 0.9, 0.93, 1] }}
              style={{ transformOrigin: '100px 104px' }}
            >
              {/* Left Eye Pupil */}
              <motion.circle
                cx="80"
                cy="104"
                r="4.2"
                fill="url(#pupilGlow)"
                style={{
                  x: shouldReduceMotion ? 0 : eyeX,
                  y: shouldReduceMotion ? 0 : eyeY
                }}
              />
              <motion.circle
                cx="80"
                cy="104"
                r="6.5"
                stroke="#00E5FF"
                strokeWidth="0.8"
                opacity="0.75"
                style={{
                  x: shouldReduceMotion ? 0 : eyeX,
                  y: shouldReduceMotion ? 0 : eyeY
                }}
              />

              {/* Right Eye Pupil */}
              <motion.circle
                cx="120"
                cy="104"
                r="4.2"
                fill="url(#pupilGlow)"
                style={{
                  x: shouldReduceMotion ? 0 : eyeX,
                  y: shouldReduceMotion ? 0 : eyeY
                }}
              />
              <motion.circle
                cx="120"
                cy="104"
                r="6.5"
                stroke="#00E5FF"
                strokeWidth="0.8"
                opacity="0.75"
                style={{
                  x: shouldReduceMotion ? 0 : eyeX,
                  y: shouldReduceMotion ? 0 : eyeY
                }}
              />
            </motion.g>

            {/* Sculpted Nose Bridge */}
            <path d="M 100 100 L 100 128 L 94 134 L 106 134" stroke="#7DD3FC" strokeWidth="1.6" strokeLinecap="round" />

            {/* Cheekbone Facial Contour Lines */}
            <path d="M 62 118 Q 74 142 88 156" stroke="#00E5FF" strokeWidth="1.2" strokeDasharray="4 3" opacity="0.7" />
            <path d="M 138 118 Q 126 142 112 156" stroke="#00E5FF" strokeWidth="1.2" strokeDasharray="4 3" opacity="0.7" />

            {/* Chiseled Cyber Mouth & Lips */}
            <path d="M 86 150 Q 100 154 114 150" stroke="#BAE6FD" strokeWidth="2" strokeLinecap="round" />
            <line x1="92" y1="160" x2="108" y2="160" stroke="#00E5FF" strokeWidth="1.4" strokeLinecap="round" />

            {/* Chin Sensor Node */}
            <circle cx="100" cy="172" r="3.2" fill="#38BDF8" />
            <circle cx="100" cy="172" r="6" stroke="#00E5FF" strokeWidth="1" strokeDasharray="2 2" opacity="0.8" />
          </svg>

          {/* Ambient Glowing Hologram Sparkles */}
          <Sparkles className="w-5 h-5 text-cyan-300 absolute top-2 right-4 animate-pulse pointer-events-none" />
          <Sparkles className="w-4 h-4 text-blue-300 absolute bottom-6 left-4 animate-pulse pointer-events-none" />
        </div>

        {/* Touch & Interaction Live Pill */}
        <div className="mt-4 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-blue-200/80 shadow-sm text-xs font-semibold text-[#082B59]">
          <span className="w-2 h-2 rounded-full bg-cyan-500 animate-ping" />
          <span>Interactive AI Face &bull; Touch &amp; Drag</span>
        </div>
      </div>
    </motion.div>
  );
}

// --- B. CYBER SECURITY DEFENSE ANIMATION ---
function CyberSecurityStageVisual({ shouldReduceMotion, cursor }) {
  const { rotateX, rotateY, layer1X, layer1Y, layer2X, layer2Y, layer3X, layer3Y, glowX, glowY } = cursor;

  return (
    <motion.div
      style={{
        rotateX: shouldReduceMotion ? 0 : rotateX,
        rotateY: shouldReduceMotion ? 0 : rotateY,
        transformStyle: 'preserve-3d'
      }}
      className="relative w-full h-[380px] sm:h-[430px] flex flex-col justify-between items-center select-none"
    >
      {/* Interactive Cursor Spotlight Aura */}
      <motion.div
        style={{
          left: glowX,
          top: glowY,
          transform: 'translate(-50%, -50%)'
        }}
        className="absolute w-64 h-64 bg-gradient-to-r from-emerald-400/25 via-teal-300/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
      />

      {/* Floating Top Header Pill */}
      <motion.div
        style={{
          x: shouldReduceMotion ? 0 : layer1X,
          y: shouldReduceMotion ? 0 : layer1Y
        }}
        className="flex items-center justify-between w-full max-w-[340px] px-3.5 py-2 rounded-full bg-white/80 backdrop-blur-md border border-emerald-100 shadow-sm"
      >
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[11px] font-bold tracking-wider uppercase text-emerald-600">
            Threat Defense Shield
          </span>
        </div>
        <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/60">
          AES-256 Armed
        </span>
      </motion.div>

      {/* Center 3D Sonar Radar & Shield Matrix */}
      <div className="relative my-auto flex flex-col items-center justify-center w-full py-2">
        {/* Concentric Sonar Wave Rings */}
        <motion.div
          animate={shouldReduceMotion ? {} : { scale: [1, 2], opacity: [0.65, 0] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: 'easeOut' }}
          className="absolute w-32 h-32 rounded-full border-2 border-emerald-400/40 pointer-events-none"
        />
        <motion.div
          animate={shouldReduceMotion ? {} : { scale: [1, 2.7], opacity: [0.45, 0] }}
          transition={{ duration: 2.6, delay: 0.9, repeat: Infinity, ease: 'easeOut' }}
          className="absolute w-32 h-32 rounded-full border border-teal-400/30 pointer-events-none"
        />

        {/* Rotating Radar Scanner Sweep */}
        <motion.div
          animate={shouldReduceMotion ? {} : { rotate: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
          className="absolute w-44 h-44 rounded-full border border-emerald-200/60 pointer-events-none opacity-40"
          style={{
            background: 'conic-gradient(from 0deg, rgba(16, 185, 129, 0.25) 0deg, transparent 90deg)'
          }}
        />

        {/* Central Armored Shield Icon */}
        <motion.div
          style={{
            x: shouldReduceMotion ? 0 : layer1X,
            y: shouldReduceMotion ? 0 : layer1Y,
            translateZ: 50
          }}
          className="relative z-20 flex flex-col items-center mb-5 group cursor-pointer"
        >
          <motion.div
            animate={shouldReduceMotion ? {} : { scale: [1, 1.05, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            whileHover={{ scale: 1.15 }}
            className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-emerald-600 via-emerald-500 to-teal-400 text-white flex items-center justify-center shadow-xl shadow-emerald-500/30 relative z-10 transition-shadow duration-300 group-hover:shadow-emerald-500/50"
          >
            <ShieldCheck className="w-9 h-9 sm:w-10 sm:h-10 text-white drop-shadow-md" />
            <Lock className="w-3.5 h-3.5 text-white/90 absolute bottom-2 right-2" />
          </motion.div>

          <span className="mt-2.5 text-xs font-bold text-[#082B59] bg-white/90 px-2.5 py-0.5 rounded-full shadow-xs border border-emerald-100">
            Zero-Trust Perimeter
          </span>
        </motion.div>

        {/* Live Defense Metric Badges with Opposing Parallax */}
        <div className="grid grid-cols-2 gap-4 w-full max-w-[370px] relative z-20">
          <motion.div
            style={{
              x: shouldReduceMotion ? 0 : layer2X,
              y: shouldReduceMotion ? 0 : layer2Y,
              translateZ: 30
            }}
            whileHover={{ scale: 1.06 }}
            className="p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-emerald-100 shadow-md flex items-center gap-2.5"
          >
            <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 shadow-xs">
              <Lock className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] font-bold text-[#082B59] truncate">2FA / Access Guard</p>
              <p className="text-[9.5px] text-emerald-600 font-semibold">100% Enforced</p>
            </div>
          </motion.div>

          <motion.div
            style={{
              x: shouldReduceMotion ? 0 : layer3X,
              y: shouldReduceMotion ? 0 : layer3Y,
              translateZ: 30
            }}
            whileHover={{ scale: 1.06 }}
            className="p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-emerald-100 shadow-md flex items-center gap-2.5"
          >
            <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 shadow-xs">
              <Activity className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] font-bold text-[#082B59] truncate">Anti-Phishing Filter</p>
              <p className="text-[9.5px] text-teal-600 font-semibold">Active Threat Shield</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Bottom Metrics Pill */}
      <motion.div
        style={{
          x: shouldReduceMotion ? 0 : layer2X,
          y: shouldReduceMotion ? 0 : layer2Y
        }}
        className="flex items-center justify-between w-full max-w-[340px] px-3.5 py-2 rounded-full bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-xs text-[10.5px] font-mono text-slate-600"
      >
        <span className="flex items-center gap-1.5 text-emerald-600 font-bold">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
          Threat Level: 0 (Secured)
        </span>
        <span className="text-slate-400">Zero Compromise</span>
      </motion.div>
    </motion.div>
  );
}

// --- C. FILM PRODUCTION ANIMATION ---
function FilmProductionStageVisual({ shouldReduceMotion, cursor }) {
  const { rotateX, rotateY, layer1X, layer1Y, layer2X, layer2Y, layer3X, layer3Y, glowX, glowY } = cursor;

  return (
    <motion.div
      style={{
        rotateX: shouldReduceMotion ? 0 : rotateX,
        rotateY: shouldReduceMotion ? 0 : rotateY,
        transformStyle: 'preserve-3d'
      }}
      className="relative w-full h-[380px] sm:h-[430px] flex flex-col justify-between items-center select-none"
    >
      {/* Interactive Cursor Spotlight Aura */}
      <motion.div
        style={{
          left: glowX,
          top: glowY,
          transform: 'translate(-50%, -50%)'
        }}
        className="absolute w-64 h-64 bg-gradient-to-r from-cyan-400/25 via-sky-300/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
      />

      {/* Floating Top Header Pill */}
      <motion.div
        style={{
          x: shouldReduceMotion ? 0 : layer1X,
          y: shouldReduceMotion ? 0 : layer1Y
        }}
        className="flex items-center justify-between w-full max-w-[340px] px-3.5 py-2 rounded-full bg-white/80 backdrop-blur-md border border-cyan-100 shadow-sm"
      >
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-red-500 animate-ping" />
          <span className="text-[11px] font-bold tracking-wider uppercase text-cyan-800">
            4K Cinematic Studio
          </span>
        </div>
        <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-cyan-50 text-cyan-700 border border-cyan-200/60">
          REC &bull; 60 FPS HDR
        </span>
      </motion.div>

      {/* Center 3D Viewfinder & Audio Equalizer Bars */}
      <div className="relative my-auto flex flex-col items-center justify-center w-full py-2">
        {/* Viewfinder Corner Framing Brackets with Parallax */}
        <motion.div
          style={{
            x: shouldReduceMotion ? 0 : layer3X,
            y: shouldReduceMotion ? 0 : layer3Y
          }}
          className="absolute inset-0 pointer-events-none flex flex-col justify-between p-2 max-w-[370px] mx-auto opacity-75"
        >
          <div className="flex justify-between">
            <span className="w-5 h-5 border-t-2 border-l-2 border-cyan-500 rounded-tl-sm" />
            <span className="w-5 h-5 border-t-2 border-r-2 border-cyan-500 rounded-tr-sm" />
          </div>
          <div className="flex justify-between">
            <span className="w-5 h-5 border-b-2 border-l-2 border-cyan-500 rounded-bl-sm" />
            <span className="w-5 h-5 border-b-2 border-r-2 border-cyan-500 rounded-br-sm" />
          </div>
        </motion.div>

        {/* Central Camera / Film Reel Hub */}
        <motion.div
          style={{
            x: shouldReduceMotion ? 0 : layer1X,
            y: shouldReduceMotion ? 0 : layer1Y,
            translateZ: 50
          }}
          className="relative z-20 flex flex-col items-center mb-5 group cursor-pointer"
        >
          {/* Outer Dashed Orbit Ring */}
          <motion.div
            animate={shouldReduceMotion ? {} : { rotate: 360 }}
            transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
            className="absolute -inset-4 rounded-full border border-dashed border-cyan-400/50 pointer-events-none"
          />

          <motion.div
            animate={shouldReduceMotion ? {} : { scale: [1, 1.05, 1] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
            whileHover={{ scale: 1.15 }}
            className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-cyan-600 via-sky-500 to-blue-400 text-white flex items-center justify-center shadow-xl shadow-cyan-500/30 relative z-10 transition-shadow duration-300 group-hover:shadow-cyan-500/50"
          >
            <Film className="w-9 h-9 sm:w-10 sm:h-10 text-white drop-shadow-md" />
            <Video className="w-3.5 h-3.5 text-cyan-100 absolute top-2 right-2" />
          </motion.div>

          <span className="mt-2.5 text-xs font-bold text-[#082B59] bg-white/90 px-2.5 py-0.5 rounded-full shadow-xs border border-cyan-100">
            Commercial Storytelling
          </span>
        </motion.div>

        {/* Live Audio Equalizer Frequency Bars that dynamically bounce */}
        <motion.div
          style={{
            x: shouldReduceMotion ? 0 : layer2X,
            y: shouldReduceMotion ? 0 : layer2Y,
            translateZ: 25
          }}
          className="flex items-end justify-center gap-2 w-full max-w-[340px] h-12 px-4 py-1.5 rounded-2xl bg-white/90 backdrop-blur-md border border-cyan-100 shadow-md relative z-20"
        >
          {[18, 30, 42, 24, 38, 48, 32, 22, 40, 26, 44, 32].map((baseHeight, i) => (
            <motion.span
              key={i}
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                    height: [
                      `${baseHeight * 0.35}px`,
                      `${baseHeight}px`,
                      `${baseHeight * 0.55}px`,
                      `${baseHeight * 0.9}px`
                    ]
                  }
              }
              transition={{
                duration: 1.1,
                repeat: Infinity,
                repeatType: 'mirror',
                delay: i * 0.08,
                ease: 'easeInOut'
              }}
              className="w-2 rounded-full bg-gradient-to-t from-cyan-600 to-sky-300"
              style={{ height: `${baseHeight}px` }}
            />
          ))}
        </motion.div>
      </div>

      {/* Floating Bottom Metrics Pill */}
      <motion.div
        style={{
          x: shouldReduceMotion ? 0 : layer2X,
          y: shouldReduceMotion ? 0 : layer2Y
        }}
        className="flex items-center justify-between w-full max-w-[340px] px-3.5 py-2 rounded-full bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-xs text-[10.5px] font-mono text-slate-600"
      >
        <span className="flex items-center gap-1.5 text-cyan-700 font-bold">
          <Crosshair className="w-3.5 h-3.5 text-cyan-500" />
          Master: 2.39:1 Anamorphic
        </span>
        <span className="text-slate-400">Color Graded</span>
      </motion.div>
    </motion.div>
  );
}

/* ========================================================================= */
/* 2. MAIN ABOUT US / OUR CORE SERVICES COMPONENT                             */
/* ========================================================================= */
export default function AboutUs() {
  const shouldReduceMotion = useReducedMotion();
  const [activeServiceId, setActiveServiceId] = useState('ai-services');
  const stageRef = useRef(null);

  // Mouse & Pointer Cursor Motion Values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring Physics for smooth fluid cursor & touch responsiveness
  const springConfig = { damping: 20, stiffness: 140, mass: 0.5 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [24, -24]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-26, 26]), springConfig);
  const eyeX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-9, 9]), springConfig);
  const eyeY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-7, 7]), springConfig);

  // Multi-depth Parallax Layers
  const layer1X = useSpring(useTransform(mouseX, [-0.5, 0.5], [-18, 18]), springConfig);
  const layer1Y = useSpring(useTransform(mouseY, [-0.5, 0.5], [-18, 18]), springConfig);

  const layer2X = useSpring(useTransform(mouseX, [-0.5, 0.5], [16, -16]), springConfig);
  const layer2Y = useSpring(useTransform(mouseY, [-0.5, 0.5], [16, -16]), springConfig);

  const layer3X = useSpring(useTransform(mouseX, [-0.5, 0.5], [-28, 28]), springConfig);
  const layer3Y = useSpring(useTransform(mouseY, [-0.5, 0.5], [-28, 28]), springConfig);

  // Smooth Cursor Spotlight Tracking
  const glowX = useSpring(useTransform(mouseX, [-0.5, 0.5], ['20%', '80%']), springConfig);
  const glowY = useSpring(useTransform(mouseY, [-0.5, 0.5], ['20%', '80%']), springConfig);

  const cursorPhysics = {
    rotateX,
    rotateY,
    eyeX,
    eyeY,
    layer1X,
    layer1Y,
    layer2X,
    layer2Y,
    layer3X,
    layer3Y,
    glowX,
    glowY
  };

  // Coordinate tracking for both mouse pointer and mobile touch
  const updateCoordinates = (clientX, clientY, currentTarget) => {
    const rect = currentTarget.getBoundingClientRect();
    const x = Math.max(-0.5, Math.min(0.5, (clientX - rect.left) / rect.width - 0.5));
    const y = Math.max(-0.5, Math.min(0.5, (clientY - rect.top) / rect.height - 0.5));
    mouseX.set(x);
    mouseY.set(y);
  };

  const handlePointerMove = (e) => {
    if (!stageRef.current) return;
    updateCoordinates(e.clientX, e.clientY, e.currentTarget);
  };

  const handleTouchMove = (e) => {
    if (e.touches && e.touches[0] && stageRef.current) {
      updateCoordinates(e.touches[0].clientX, e.touches[0].clientY, e.currentTarget);
    }
  };

  const handleReset = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // The 3 Core Services
  const serviceCards = [
    {
      id: 'ai-services',
      category: 'AUTOMATION',
      title: 'Business Automation',
      description: 'Connected systems to streamline customer inquiries, communication, and routine business workflows.',
      path: '/services/ai-services',
      icon: Brain,
      categoryColor: 'text-[#0866E8]',
      iconBg: 'bg-blue-50 text-[#0866E8] border border-blue-100',
      activeBorder: 'border-[#0866E8] ring-2 ring-[#0866E8]/20 shadow-md',
      activeBadge: 'bg-blue-50 text-[#0866E8] border-blue-200',
      accentColor: '#0866E8'
    },
    {
      id: 'cyber-security',
      category: 'SECURITY',
      title: 'Cyber Security',
      description: 'Practical security audits, multi-factor protection, and staff fraud prevention training.',
      path: '/services/cyber-security',
      icon: ShieldCheck,
      categoryColor: 'text-emerald-600',
      iconBg: 'bg-emerald-50 text-emerald-600 border border-emerald-100',
      activeBorder: 'border-emerald-500 ring-2 ring-emerald-500/20 shadow-md',
      activeBadge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      accentColor: '#10B981'
    },
    {
      id: 'ai-films',
      category: 'MEDIA',
      title: 'Film Production',
      description: 'High-quality commercials, corporate stories, and public awareness films from script to screen.',
      path: '/services/ai-films',
      icon: Film,
      categoryColor: 'text-cyan-600',
      iconBg: 'bg-cyan-50 text-cyan-600 border border-cyan-100',
      activeBorder: 'border-cyan-500 ring-2 ring-cyan-500/20 shadow-md',
      activeBadge: 'bg-cyan-50 text-cyan-700 border-cyan-200',
      accentColor: '#06B6D4'
    }
  ];

  return (
    <section
      id="about"
      className="py-10 sm:py-14 lg:py-16 relative overflow-hidden bg-white text-[#082B59]"
    >
      {/* Subtle Background Decoration: Soft Gradient Blobs & Delicate Dot Pattern */}
      <div className="absolute top-1/4 left-8 w-[340px] h-[340px] bg-blue-50/60 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-6 right-8 w-[360px] h-[360px] bg-sky-50/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div
        className="absolute inset-0 opacity-[0.14] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(8, 102, 232, 0.45) 1px, transparent 1px)`,
          backgroundSize: '28px 28px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Two-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">

          {/* LEFT: OPEN 3D HOLOGRAPHIC ANIMATION STAGE (SQUARE BOX REMOVED, CURSOR INTERACTIVE) */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div
              ref={stageRef}
              onPointerDown={handlePointerMove}
              onPointerMove={handlePointerMove}
              onPointerUp={handleReset}
              onPointerLeave={handleReset}
              onTouchStart={handleTouchMove}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleReset}
              style={{ perspective: 1200, touchAction: 'none' }}
              className="relative w-full max-w-[460px] flex items-center justify-center p-2 cursor-grab active:cursor-grabbing select-none"
            >
              <AnimatePresence mode="wait">
                {activeServiceId === 'ai-services' && (
                  <motion.div
                    key="ai-services"
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.94 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full"
                  >
                    <AutomationStageVisual
                      shouldReduceMotion={shouldReduceMotion}
                      cursor={cursorPhysics}
                    />
                  </motion.div>
                )}

                {activeServiceId === 'cyber-security' && (
                  <motion.div
                    key="cyber-security"
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.94 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full"
                  >
                    <CyberSecurityStageVisual
                      shouldReduceMotion={shouldReduceMotion}
                      cursor={cursorPhysics}
                    />
                  </motion.div>
                )}

                {activeServiceId === 'ai-films' && (
                  <motion.div
                    key="ai-films"
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.94 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full"
                  >
                    <FilmProductionStageVisual
                      shouldReduceMotion={shouldReduceMotion}
                      cursor={cursorPhysics}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* RIGHT: HEADING & INTERACTIVE SERVICE SELECTOR CARDS */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">

            {/* Section Heading */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mb-4 sm:mb-5 text-left"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#082B59] tracking-tight leading-[1.18] mb-1.5">
                Our <span className="text-[#0866E8]">Core Services</span>
              </h2>

            </motion.div>

            {/* Clickable Service Cards */}
            <div className="flex flex-col gap-3.5 sm:gap-4 w-full">
              {serviceCards.map((card, index) => {
                const Icon = card.icon;
                const isSelected = card.id === activeServiceId;

                return (
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.45,
                      delay: shouldReduceMotion ? 0 : index * 0.08,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    whileHover={shouldReduceMotion ? {} : {
                      y: -4,
                      transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] }
                    }}
                    onClick={() => setActiveServiceId(card.id)}
                    className={`group relative rounded-2xl p-4 sm:p-5 bg-white/95 backdrop-blur-md border transition-all duration-300 overflow-hidden text-left cursor-pointer ${isSelected
                        ? card.activeBorder
                        : 'border-slate-200/90 hover:border-slate-300 shadow-xs hover:shadow-md'
                      }`}
                  >
                    {/* Active Accent Indicator Bar */}
                    {isSelected && (
                      <motion.div
                        layoutId="activeAccentBar"
                        className="absolute left-0 top-0 bottom-0 w-1.5"
                        style={{ backgroundColor: card.accentColor }}
                      />
                    )}

                    <div className="flex items-start gap-4">
                      {/* Icon Container with subtle scale on hover */}
                      <div className={`w-11 h-11 rounded-xl ${card.iconBg} flex items-center justify-center shadow-xs shrink-0 group-hover:scale-105 transition-transform duration-250`}>
                        <Icon className="w-5 h-5" />
                      </div>

                      {/* Content Area */}
                      <div className="flex-1 min-w-0">
                        {/* Category Label + Active Badge */}
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className={`text-[11px] font-bold tracking-wider uppercase block ${card.categoryColor}`}>
                            {card.category}
                          </span>
                          {isSelected && (
                            <span className={`text-[9.5px] font-bold tracking-wide uppercase px-2 py-0.5 rounded-full border ${card.activeBadge}`}>
                              Active View
                            </span>
                          )}
                        </div>

                        {/* Title & Arrow */}
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <h3 className="text-base sm:text-lg font-bold text-[#082B59] group-hover:text-[#0866E8] transition-colors leading-snug">
                            {card.title}
                          </h3>
                          <Link
                            to={card.path}
                            onClick={(e) => e.stopPropagation()}
                            title="Explore dedicated page"
                            className="inline-flex items-center gap-1 text-xs font-semibold text-[#0866E8] hover:text-[#0756C5] hover:underline p-1 shrink-0"
                          >
                            <span>Explore</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-all" />
                          </Link>
                        </div>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
