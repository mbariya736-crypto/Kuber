import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  Brain,
  ShieldCheck,
  Film,
  ArrowRight,
  Sparkles,
  Zap,
  Lock,
  Video,
  Activity,
  Layers,
  CheckCircle2,
  Cpu,
  Radio,
  ExternalLink
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
/* 2. DYNAMIC SERVICE THEMES & INTELLIGENCE DATA                             */
/* ========================================================================= */

const SERVICE_THEMES = {
  'ai-services': {
    id: 'ai-services',
    category: 'AUTOMATION',
    title: 'Business Automation',
    tagline: 'Autonomous AI workflow pipelines engineered to eliminate manual bottlenecks, synchronize systems, and scale operations 10x faster.',
    badgeIcon: Brain,
    badgeText: 'Next-Gen Cognitive Automation',
    accentColor: '#0866E8',
    secondaryColor: '#00d2ff',
    gradientText: 'from-[#0866E8] via-blue-600 to-cyan-500',
    bgAura: 'from-blue-600/12 via-indigo-500/8 to-cyan-400/10',
    blob1: 'bg-blue-100/60',
    blob2: 'bg-sky-100/50',
    gridColor: 'rgba(8, 102, 232, 0.45)',
    liveStageBadge: 'DAINA • RECURZIV NEURAL ENGINE',
    liveStageStatus: '99.98% Model Synchronized',
    path: '/services/ai-services',
    exploreLabel: 'Explore Automation Architecture',
    metrics: [
      { label: 'Workflow Acceleration', value: '10x', sub: 'vs manual operations' },
      { label: 'Process Precision', value: '99.8%', sub: 'error elimination' },
      { label: 'Autonomous Operation', value: '24/7', sub: 'self-healing pipelines' },
      { label: 'API Integrations', value: '500+', sub: 'ERP, CRM, cloud databases' }
    ],
    capabilities: [
      'Autonomous Agent Swarms',
      'Self-Healing Workflows',
      'Cognitive Data Extraction',
      'Intelligent CRM Sync'
    ]
  },
  'cyber-security': {
    id: 'cyber-security',
    category: 'SECURITY',
    title: 'Cyber Security',
    tagline: 'Military-grade hardware enclave defense, zero-trust cryptographic isolation, and 24/7 active threat hunting telemetry.',
    badgeIcon: ShieldCheck,
    badgeText: 'Hardware-Enforced Zero-Trust Security',
    accentColor: '#10B981',
    secondaryColor: '#14b8a6',
    gradientText: 'from-emerald-600 via-teal-600 to-cyan-600',
    bgAura: 'from-emerald-600/14 via-teal-500/10 to-slate-900/6',
    blob1: 'bg-emerald-100/60',
    blob2: 'bg-teal-100/50',
    gridColor: 'rgba(16, 185, 129, 0.45)',
    liveStageBadge: 'HARDWARE ENCLAVE • ZERO-TRUST SHIELD',
    liveStageStatus: 'Active Threat Neutralization (Touch to Surge)',
    path: '/services/cyber-security',
    exploreLabel: 'Inspect Cyber Security Protocols',
    metrics: [
      { label: 'Hardware Encryption', value: 'AES-256', sub: 'GCM quantum-resistant' },
      { label: 'Threat Response', value: '< 15ms', sub: 'instant automated isolation' },
      { label: 'Zero-Day Shield', value: '100%', sub: 'heuristics coverage' },
      { label: 'Compliance Level', value: 'SOC2 / ISO', sub: 'enterprise verified' }
    ],
    capabilities: [
      'Hardware Enclave Isolation',
      'Zero-Day Vulnerability Shield',
      'Automated Penetration Tests',
      'Multi-Factor Cryptographic IAM'
    ]
  },
  'ai-films': {
    id: 'ai-films',
    category: 'MEDIA',
    title: 'Film Production',
    tagline: 'Commercial-grade virtual cinema, Unreal Engine 5 virtual volumes, and cinematic narrative craft engineered for maximum brand resonance.',
    badgeIcon: Film,
    badgeText: 'Virtual Cinema & Cinematic Masterworks',
    accentColor: '#06B6D4',
    secondaryColor: '#38bdf8',
    gradientText: 'from-cyan-600 via-blue-600 to-indigo-600',
    bgAura: 'from-cyan-500/12 via-blue-500/8 to-indigo-500/12',
    blob1: 'bg-cyan-100/60',
    blob2: 'bg-blue-100/50',
    gridColor: 'rgba(6, 182, 212, 0.45)',
    liveStageBadge: 'VIRTUAL STUDIO • 4K HDR MASTER',
    liveStageStatus: 'Real-Time Unreal Engine 5 Volume',
    path: '/services/ai-films',
    exploreLabel: 'View Virtual Studio Showreel',
    metrics: [
      { label: 'Master Resolution', value: '4K / 6K', sub: 'HDR commercial master' },
      { label: 'In-Camera VFX', value: 'Real-Time', sub: 'zero green-screen artifacting' },
      { label: 'Spatial Soundscape', value: 'Dolby Atmos', sub: '3D immersive acoustic mix' },
      { label: 'Turnkey Delivery', value: '100%', sub: 'concept to final premiere' }
    ],
    capabilities: [
      'Unreal Engine 5 Virtual Sets',
      'Anamorphic Optical Simulation',
      'Generative Visual Effects',
      'Hollywood Color Science'
    ]
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
  const ActiveBadgeIcon = activeTheme.badgeIcon;

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

        {/* 2. DYNAMIC TOP HEADING & SECTION BADGE */}
        <div className="mb-8 lg:mb-10 text-left">
          <AnimatePresence mode="wait">
            <motion.div
              key={`badge-${activeServiceId}`}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 shadow-xs border transition-all"
              style={{
                backgroundColor: `${activeTheme.accentColor}12`,
                borderColor: `${activeTheme.accentColor}40`,
                color: activeTheme.accentColor
              }}
            >
              <ActiveBadgeIcon className="w-3.5 h-3.5" />
              <span>{activeTheme.badgeText}</span>
            </motion.div>
          </AnimatePresence>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#082B59] tracking-tight leading-[1.18] mb-2">
                Our{' '}
                <span className={`bg-gradient-to-r ${activeTheme.gradientText} bg-clip-text text-transparent transition-all duration-500`}>
                  Core Services
                </span>
              </h2>

              <AnimatePresence mode="wait">
                <motion.p
                  key={`tagline-${activeServiceId}`}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.32, ease: 'easeOut' }}
                  className="text-sm sm:text-base text-slate-600 max-w-2xl font-normal leading-relaxed"
                >
                  {activeTheme.tagline}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Desktop / Tablet Quick Switcher Indicators */}
            <div className="hidden sm:flex items-center gap-1.5 p-1 rounded-xl bg-slate-100/80 border border-slate-200/80 self-start md:self-auto">
              {serviceCards.map((card) => {
                const isCur = card.id === activeServiceId;
                const Icon = card.icon;
                return (
                  <button
                    key={card.id}
                    onClick={() => setActiveServiceId(card.id)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer ${
                      isCur
                        ? 'bg-white text-[#082B59] shadow-xs font-bold'
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" style={{ color: isCur ? card.accentColor : undefined }} />
                    <span>{card.category}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Dedicated Mobile Thumb-Friendly Segmented Switcher (Instant one-tap toggle on mobile) */}
          <div className="sm:hidden mt-3.5 w-full flex items-center justify-between p-1 rounded-2xl bg-slate-100/90 border border-slate-200/80 shadow-xs gap-1">
            {serviceCards.map((card) => {
              const isCur = card.id === activeServiceId;
              const Icon = card.icon;
              return (
                <button
                  key={card.id}
                  onClick={() => setActiveServiceId(card.id)}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 px-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer active:scale-95 ${
                    isCur
                      ? 'bg-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 bg-transparent'
                  }`}
                  style={{
                    color: isCur ? card.accentColor : undefined,
                    boxShadow: isCur ? `0 2px 8px -2px ${card.accentColor}30` : undefined
                  }}
                >
                  <Icon className="w-3.5 h-3.5 shrink-0" />
                  <span className="text-[11px] truncate">{card.category}</span>
                </button>
              );
            })}
          </div>
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

            {/* Stage Live Telemetry Pill */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`telemetry-${activeServiceId}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28 }}
                className="mt-2.5 inline-flex items-center justify-center flex-wrap gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-slate-900/95 text-white backdrop-blur-md border border-white/10 shadow-md text-[10px] sm:text-[11px] max-w-full text-center"
              >
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ backgroundColor: activeTheme.accentColor }}
                />
                <span className="font-mono font-semibold tracking-wider text-slate-300">
                  {activeTheme.liveStageBadge}
                </span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-400 font-mono text-[10px]">
                  {activeTheme.liveStageStatus}
                </span>
              </motion.div>
            </AnimatePresence>
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

        {/* 4. DYNAMIC SERVICE INTELLIGENCE PANEL: METRICS, CAPABILITIES & EXPLORE CTA */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`panel-${activeServiceId}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 lg:mt-12 rounded-2xl p-5 sm:p-6 lg:p-7 bg-gradient-to-br from-white/95 via-slate-50/90 to-white/95 border border-slate-200/80 shadow-md backdrop-blur-md relative overflow-hidden"
          >
            {/* Subtle Accent Glow Line at Top */}
            <div
              className="absolute top-0 left-0 right-0 h-1"
              style={{
                background: `linear-gradient(90deg, transparent, ${activeTheme.accentColor}, transparent)`
              }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">

              {/* 4.1 Key Performance Metrics (4 Columns on Desktop) */}
              <div className="lg:col-span-8">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                  {activeTheme.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="p-3 sm:p-3.5 rounded-xl bg-white border border-slate-200/70 shadow-2xs text-left"
                    >
                      <div
                        className="text-xl sm:text-2xl font-black tracking-tight"
                        style={{ color: activeTheme.accentColor }}
                      >
                        {metric.value}
                      </div>
                      <div className="text-xs font-bold text-[#082B59] mt-0.5">
                        {metric.label}
                      </div>
                      <div className="text-[10px] text-slate-500 font-medium">
                        {metric.sub}
                      </div>
                    </div>
                  ))}
                </div>

                {/* 4.2 Capabilities Tags */}
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1 mr-1">
                    <Layers className="w-3.5 h-3.5" /> Capabilities:
                  </span>
                  {activeTheme.capabilities.map((cap, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100/90 text-slate-700 border border-slate-200/60"
                    >
                      <CheckCircle2
                        className="w-3 h-3"
                        style={{ color: activeTheme.accentColor }}
                      />
                      <span>{cap}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* 4.3 Action CTA Button & Link */}
              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col justify-center items-start lg:items-end gap-3 border-t lg:border-t-0 lg:border-l border-slate-200/70 pt-4 lg:pt-0 lg:pl-6">
                <div className="text-left lg:text-right">
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Dedicated Solution
                  </div>
                  <div className="text-sm font-bold text-[#082B59]">
                    {activeTheme.title} Architecture
                  </div>
                </div>

                <Link
                  to={activeTheme.path}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all transform active:scale-95"
                  style={{
                    backgroundColor: activeTheme.accentColor,
                    boxShadow: `0 8px 20px -4px ${activeTheme.accentColor}40`
                  }}
                >
                  <span>{activeTheme.exploreLabel}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
