import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion, useMotionValue } from 'framer-motion';
import {
  Brain,
  ShieldCheck,
  Film,
  ArrowRight,
  Sparkles
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
/* 2. DYNAMIC SERVICE THEMES                                                 */
/* ========================================================================= */

const SERVICE_THEMES = {
  'ai-services': {
    id: 'ai-services',
    category: 'AUTOMATION',
    title: 'Business Automation',
    accentColor: '#0866E8',
    secondaryColor: '#00d2ff',
    gradientText: 'from-[#0866E8] via-blue-600 to-cyan-500',
    blob1: 'bg-blue-100/60',
    blob2: 'bg-sky-100/50',
    gridColor: 'rgba(8, 102, 232, 0.45)',
    path: '/services/ai-services'
  },
  'cyber-security': {
    id: 'cyber-security',
    category: 'SECURITY',
    title: 'Cyber Security',
    accentColor: '#10B981',
    secondaryColor: '#14b8a6',
    gradientText: 'from-emerald-600 via-teal-600 to-cyan-600',
    blob1: 'bg-emerald-100/60',
    blob2: 'bg-teal-100/50',
    gridColor: 'rgba(16, 185, 129, 0.45)',
    path: '/services/cyber-security'
  },
  'ai-films': {
    id: 'ai-films',
    category: 'MEDIA',
    title: 'Film Production',
    accentColor: '#06B6D4',
    secondaryColor: '#38bdf8',
    gradientText: 'from-cyan-600 via-blue-600 to-indigo-600',
    blob1: 'bg-cyan-100/60',
    blob2: 'bg-blue-100/50',
    gridColor: 'rgba(6, 182, 212, 0.45)',
    path: '/services/ai-films'
  }
};

/* ========================================================================= */
/* 3. MAIN ABOUT US / DYNAMIC CORE SERVICES SECTION                          */
/* ========================================================================= */

export default function AboutUs() {
  const shouldReduceMotion = useReducedMotion();
  const [activeServiceId, setActiveServiceId] = useState('ai-services');
  const stageRef = useRef(null);

  const activeTheme = SERVICE_THEMES[activeServiceId] || SERVICE_THEMES['ai-services'];

  // Mouse & Pointer Cursor Motion Values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

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

  // The 3 Core Services list
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
      activeBorder: 'border-emerald-500 ring-2 ring-emerald-500/20 shadow-lg shadow-emerald-500/10 bg-gradient-to-r from-emerald-50/40 via-white to-white',
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
      activeBorder: 'border-cyan-500 ring-2 ring-cyan-500/20 shadow-lg shadow-cyan-500/10 bg-gradient-to-r from-cyan-50/40 via-white to-white',
      activeBadge: 'bg-cyan-50 text-cyan-700 border-cyan-200',
      accentColor: '#06B6D4'
    }
  ];

  return (
    <section
      id="about"
      className="py-10 sm:py-14 lg:py-16 relative overflow-hidden bg-white text-[#082B59] transition-colors duration-500"
    >
      {/* 1. DYNAMIC BACKGROUND AURA: Morphs smoothly with the selected service */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`bg-${activeServiceId}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="absolute inset-0 pointer-events-none -z-10"
        >
          {/* Top-Left Ambient Orb */}
          <div
            className={`absolute top-1/6 left-6 w-[380px] h-[380px] ${activeTheme.blob1} rounded-full blur-3xl pointer-events-none transition-all duration-700`}
          />
          {/* Bottom-Right Ambient Orb */}
          <div
            className={`absolute bottom-6 right-6 w-[420px] h-[420px] ${activeTheme.blob2} rounded-full blur-3xl pointer-events-none transition-all duration-700`}
          />
          {/* Dynamic Grid Pattern with matching theme tint */}
          <div
            className="absolute inset-0 opacity-[0.14] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(${activeTheme.gridColor} 1px, transparent 1px)`,
              backgroundSize: '28px 28px'
            }}
          />
        </motion.div>
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* 2. TOP HEADING */}
        <div className="mb-6 lg:mb-8 text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#082B59] tracking-tight leading-[1.18]">
            Our{' '}
            <span className={`bg-gradient-to-r ${activeTheme.gradientText} bg-clip-text text-transparent transition-all duration-500`}>
              Core Services
            </span>
          </h2>
        </div>

        {/* 3. TWO-COLUMN RESPONSIVE LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center">

          {/* LEFT: OPEN 3D HOLOGRAPHIC ANIMATION STAGE (FRAMELESS, TOUCH-INTERACTIVE) */}
          <div className="lg:col-span-5 flex flex-col justify-center items-center w-full">
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

          {/* RIGHT: CLICKABLE SERVICE SELECTOR CARDS */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
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
                      y: -3,
                      transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] }
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveServiceId(card.id)}
                    className={`group relative rounded-2xl p-4 sm:p-5 bg-white/95 backdrop-blur-md border transition-all duration-300 overflow-hidden text-left cursor-pointer ${
                      isSelected
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
                        {/* Category Label */}
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className={`text-[11px] font-bold tracking-wider uppercase block ${card.categoryColor}`}>
                            {card.category}
                          </span>
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
