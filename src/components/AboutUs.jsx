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
import AiWireframeFace from './AiWireframeFace';

/* ========================================================================= */
/* 1. INTERACTIVE SERVICE ANIMATIONS (OPEN 3D HOLOGRAPHIC STAGE)             */
/* ========================================================================= */

// --- A. AUTOMATION WORKFLOW ANIMATION: 3D CYBER POLYGONAL AI FACE (MATCHING ATTACHED IMAGE) ---
function AutomationStageVisual() {
  return (
    <div className="w-full flex items-center justify-center">
      <AiWireframeFace />
    </div>
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
