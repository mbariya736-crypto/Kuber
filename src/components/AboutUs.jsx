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
import RecurzivCyberFace from './RecurzivCyberFace';
import CyberSecurityChip from './CyberSecurityChip';
import CinematicFilmStudio from './CinematicFilmStudio';

/* ========================================================================= */
/* 1. INTERACTIVE SERVICE ANIMATIONS (OPEN 3D HOLOGRAPHIC STAGE)             */
/* ========================================================================= */

// --- A. AUTOMATION WORKFLOW ANIMATION: EXACT RECURZIV 3D NEURAL CYBER FACE ---
function AutomationStageVisual() {
  return (
    <div className="w-full flex justify-center items-center">
      <RecurzivCyberFace />
    </div>
  );
}

// --- B. CYBER SECURITY DEFENSE ANIMATION: EXACT 3D ATTACHED MICROCHIP PROCESSOR ---
function CyberSecurityStageVisual() {
  return (
    <div className="w-full flex justify-center items-center">
      <CyberSecurityChip />
    </div>
  );
}

// --- C. FILM PRODUCTION ANIMATION: 4K VIRTUAL PRODUCTION CINEMA STAGE ---
function FilmProductionStageVisual() {
  return (
    <div className="w-full flex justify-center items-center">
      <CinematicFilmStudio />
    </div>
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
      activeBorder: 'border-[#0866E8] ring-2 ring-[#0866E8]/20 shadow-lg shadow-blue-500/10 bg-gradient-to-r from-blue-50/40 via-white to-white',
      activeBadge: 'bg-blue-50 text-[#0866E8] border-blue-200',
      accentColor: '#0866E8',
      tag: '⚡ 10x Workflow Acceleration'
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
      activeBorder: 'border-emerald-500 ring-2 ring-emerald-500/20 shadow-lg shadow-emerald-500/10 bg-gradient-to-r from-emerald-50/40 via-white to-white',
      activeBadge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      accentColor: '#10B981',
      tag: '🛡️ Zero-Trust Hardware Shield'
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
      activeBorder: 'border-cyan-500 ring-2 ring-cyan-500/20 shadow-lg shadow-cyan-500/10 bg-gradient-to-r from-cyan-50/40 via-white to-white',
      activeBadge: 'bg-cyan-50 text-cyan-700 border-cyan-200',
      accentColor: '#06B6D4',
      tag: '🎬 4K HDR Commercial Grade'
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
              className="relative w-full max-w-[460px] flex items-center justify-center p-2 select-none"
            >
              <AnimatePresence mode="wait">
                {activeServiceId === 'ai-services' && (
                  <motion.div
                    key="ai-services"
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.94 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full flex justify-center items-center"
                  >
                    <AutomationStageVisual />
                  </motion.div>
                )}

                {activeServiceId === 'cyber-security' && (
                  <motion.div
                    key="cyber-security"
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.94 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full flex justify-center items-center"
                  >
                    <CyberSecurityStageVisual />
                  </motion.div>
                )}

                {activeServiceId === 'ai-films' && (
                  <motion.div
                    key="ai-films"
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.94 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full flex justify-center items-center"
                  >
                    <FilmProductionStageVisual />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* RIGHT: HEADING & INTERACTIVE SERVICE SELECTOR CARDS */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">

            {/* Section Heading with Modern Badge */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mb-5 sm:mb-6 text-left"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/90 border border-blue-200/70 text-[#0866E8] text-xs font-semibold uppercase tracking-wider mb-2.5 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#0866E8]" />
                <span>Next-Gen Enterprise Solutions</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#082B59] tracking-tight leading-[1.18] mb-2">
                Our <span className="bg-gradient-to-r from-[#0866E8] via-blue-600 to-cyan-500 bg-clip-text text-transparent">Core Services</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xl font-normal leading-relaxed">
                Autonomous workflow intelligence, zero-trust hardware security, and commercial-grade cinematic storytelling engineered to drive measurable business transformation.
              </p>
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

                        {/* Feature Tag */}
                        {card.tag && (
                          <div className="mt-2.5 flex items-center">
                            <span className="inline-flex items-center text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100/90 text-slate-700 border border-slate-200/60 shadow-2xs">
                              {card.tag}
                            </span>
                          </div>
                        )}
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
