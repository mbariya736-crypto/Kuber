import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import {
  Bot,
  ShieldCheck,
  Film,
  ArrowRight,
  Lock,
  Activity,
  CheckCircle2,
  Video,
  Sparkles,
  Cpu,
  Zap,
  Radio,
  Workflow,
  Eye
} from 'lucide-react';
import { Link } from 'react-router-dom';

/* ========================================================================= */
/* 1. INTERACTIVE SERVICE ANIMATIONS (FOR THE LEFT STAGE)                    */
/* ========================================================================= */

// --- A. AUTOMATION WORKFLOW ANIMATION ---
function AutomationStageVisual({ shouldReduceMotion }) {
  return (
    <div className="relative w-full h-full flex flex-col justify-between select-none">
      {/* Ambient Blue Backlight */}
      <div className="absolute -top-10 -right-10 w-44 h-44 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-sky-300/20 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header Badge */}
      <div className="flex items-center justify-between pb-3 border-b border-blue-100/80">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-[#0866E8] animate-pulse" />
          <span className="text-[11px] font-bold tracking-wider uppercase text-[#0866E8]">
            AI Automation Engine
          </span>
        </div>
        <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-blue-50 text-[#0866E8] border border-blue-200/60">
          Latency: 14ms
        </span>
      </div>

      {/* Center Interactive Node Graph */}
      <div className="relative my-4 flex flex-col items-center justify-center py-4">
        {/* Animated Connecting SVG Circuit Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-blue-200" viewBox="0 0 320 180" fill="none">
          <path d="M 50 40 L 160 90 L 270 40" strokeWidth="2" strokeDasharray="4 4" />
          <path d="M 50 140 L 160 90 L 270 140" strokeWidth="2" strokeDasharray="4 4" />
        </svg>

        {/* Central Glowing AI Core */}
        <div className="relative z-10 flex flex-col items-center mb-6">
          <motion.div
            animate={shouldReduceMotion ? {} : { rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            className="absolute -inset-3 rounded-full border border-dashed border-[#0866E8]/40"
          />
          <motion.div
            animate={shouldReduceMotion ? {} : { scale: [1, 1.08, 1] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#0866E8] to-blue-400 text-white flex items-center justify-center shadow-lg shadow-blue-500/25 relative z-10"
          >
            <Bot className="w-8 h-8" />
          </motion.div>
          <span className="mt-2 text-xs font-bold text-[#082B59]">Smart Workflow Hub</span>
        </div>

        {/* Floating Active Pipeline Nodes */}
        <div className="grid grid-cols-2 gap-3 w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="p-2.5 rounded-xl bg-white/95 border border-blue-100 shadow-xs flex items-center gap-2.5"
          >
            <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#0866E8] flex items-center justify-center shrink-0">
              <Workflow className="w-3.5 h-3.5" />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] font-bold text-[#082B59] truncate">Inquiry Ingestion</p>
              <p className="text-[9.5px] text-emerald-600 font-medium">Auto-Triggered &bull; Instant</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="p-2.5 rounded-xl bg-white/95 border border-blue-100 shadow-xs flex items-center gap-2.5"
          >
            <div className="w-7 h-7 rounded-lg bg-blue-50 text-[#0866E8] flex items-center justify-center shrink-0">
              <Zap className="w-3.5 h-3.5" />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] font-bold text-[#082B59] truncate">CRM &amp; Team Alerts</p>
              <p className="text-[9.5px] text-blue-600 font-medium">Synced Across 5 Tools</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Live Metrics Bar */}
      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500 font-mono">
        <span className="flex items-center gap-1.5 text-[#0866E8] font-semibold">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
          99.8% Process Automation
        </span>
        <span className="text-slate-400">Zero Manual Friction</span>
      </div>
    </div>
  );
}

// --- B. CYBER SECURITY DEFENSE ANIMATION ---
function CyberSecurityStageVisual({ shouldReduceMotion }) {
  return (
    <div className="relative w-full h-full flex flex-col justify-between select-none">
      {/* Ambient Emerald Glow Backlight */}
      <div className="absolute -top-10 -right-10 w-44 h-44 bg-emerald-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-teal-300/20 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header Badge */}
      <div className="flex items-center justify-between pb-3 border-b border-emerald-100/80">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[11px] font-bold tracking-wider uppercase text-emerald-600">
            Threat Defense Shield
          </span>
        </div>
        <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/60">
          AES-256 Armed
        </span>
      </div>

      {/* Center Radar Scanner & Shield Matrix */}
      <div className="relative my-4 flex flex-col items-center justify-center py-4">
        {/* Concentric Radar Wave Rings */}
        <motion.div
          animate={shouldReduceMotion ? {} : { scale: [1, 1.8], opacity: [0.6, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut' }}
          className="absolute w-28 h-28 rounded-full border border-emerald-400/40 pointer-events-none"
        />
        <motion.div
          animate={shouldReduceMotion ? {} : { scale: [1, 2.3], opacity: [0.4, 0] }}
          transition={{ duration: 2.4, delay: 0.8, repeat: Infinity, ease: 'easeOut' }}
          className="absolute w-28 h-28 rounded-full border border-teal-400/30 pointer-events-none"
        />

        {/* Central Armored Shield Icon */}
        <div className="relative z-10 flex flex-col items-center mb-6">
          <motion.div
            animate={shouldReduceMotion ? {} : { scale: [1, 1.05, 1] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-400 text-white flex items-center justify-center shadow-lg shadow-emerald-500/25 relative z-10"
          >
            <ShieldCheck className="w-8 h-8" />
          </motion.div>
          <span className="mt-2 text-xs font-bold text-[#082B59]">Zero-Trust Perimeter</span>
        </div>

        {/* Live Defense Metric Badges */}
        <div className="grid grid-cols-2 gap-3 w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="p-2.5 rounded-xl bg-white/95 border border-emerald-100 shadow-xs flex items-center gap-2.5"
          >
            <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Lock className="w-3.5 h-3.5" />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] font-bold text-[#082B59] truncate">2FA / Access Guard</p>
              <p className="text-[9.5px] text-emerald-600 font-medium">100% Enforced</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="p-2.5 rounded-xl bg-white/95 border border-emerald-100 shadow-xs flex items-center gap-2.5"
          >
            <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Activity className="w-3.5 h-3.5" />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] font-bold text-[#082B59] truncate">Anti-Phishing Shield</p>
              <p className="text-[9.5px] text-teal-600 font-medium">Active Threat Filter</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Live Metrics Bar */}
      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500 font-mono">
        <span className="flex items-center gap-1.5 text-emerald-600 font-semibold">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
          Threat Level: 0 (Protected)
        </span>
        <span className="text-slate-400">Zero Compromise</span>
      </div>
    </div>
  );
}

// --- C. FILM PRODUCTION ANIMATION ---
function FilmProductionStageVisual({ shouldReduceMotion }) {
  return (
    <div className="relative w-full h-full flex flex-col justify-between select-none">
      {/* Ambient Cyan Backlight */}
      <div className="absolute -top-10 -right-10 w-44 h-44 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-indigo-300/20 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header Badge */}
      <div className="flex items-center justify-between pb-3 border-b border-cyan-100/80">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-[11px] font-bold tracking-wider uppercase text-cyan-700">
            4K Cinematic Studio
          </span>
        </div>
        <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-cyan-50 text-cyan-700 border border-cyan-200/60">
          REC &bull; 60 FPS HDR
        </span>
      </div>

      {/* Center Viewfinder & Audio Equalizer Bars */}
      <div className="relative my-4 flex flex-col items-center justify-center py-4">
        {/* Viewfinder Corner Framing Brackets */}
        <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-1 opacity-70">
          <div className="flex justify-between">
            <span className="w-4 h-4 border-t-2 border-l-2 border-cyan-400" />
            <span className="w-4 h-4 border-t-2 border-r-2 border-cyan-400" />
          </div>
          <div className="flex justify-between">
            <span className="w-4 h-4 border-b-2 border-l-2 border-cyan-400" />
            <span className="w-4 h-4 border-b-2 border-r-2 border-cyan-400" />
          </div>
        </div>

        {/* Central Camera / Film Reel Hub */}
        <div className="relative z-10 flex flex-col items-center mb-6">
          <motion.div
            animate={shouldReduceMotion ? {} : { rotate: 360 }}
            transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
            className="absolute -inset-3 rounded-full border border-dashed border-cyan-400/40"
          />
          <motion.div
            animate={shouldReduceMotion ? {} : { scale: [1, 1.06, 1] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
            className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-600 to-sky-400 text-white flex items-center justify-center shadow-lg shadow-cyan-500/25 relative z-10"
          >
            <Film className="w-8 h-8" />
          </motion.div>
          <span className="mt-2 text-xs font-bold text-[#082B59]">Commercial Storytelling</span>
        </div>

        {/* Live Audio & Motion Equalizer Waves */}
        <div className="flex items-center justify-center gap-1.5 w-full h-10 px-4 relative z-10">
          {[16, 28, 40, 22, 34, 46, 30, 20, 38, 24].map((h, i) => (
            <motion.span
              key={i}
              animate={shouldReduceMotion ? {} : { height: [h * 0.4, h, h * 0.3, h * 0.8] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                repeatType: 'mirror',
                delay: i * 0.1,
                ease: 'easeInOut'
              }}
              className="w-1.5 rounded-full bg-gradient-to-t from-cyan-600 to-sky-300"
              style={{ height: `${h}px` }}
            />
          ))}
        </div>
      </div>

      {/* Bottom Live Metrics Bar */}
      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500 font-mono">
        <span className="flex items-center gap-1.5 text-cyan-700 font-semibold">
          <Video className="w-3.5 h-3.5 text-cyan-500" />
          Master: 2.39:1 Anamorphic
        </span>
        <span className="text-slate-400">Color Graded</span>
      </div>
    </div>
  );
}

/* ========================================================================= */
/* 2. MAIN ABOUT US / OUR CORE SERVICES COMPONENT                             */
/* ========================================================================= */
export default function AboutUs() {
  const shouldReduceMotion = useReducedMotion();
  const [activeServiceId, setActiveServiceId] = useState('ai-services');

  // The 3 Core Services
  const serviceCards = [
    {
      id: 'ai-services',
      category: 'AUTOMATION',
      title: 'Business Automation',
      description: 'Connected systems to streamline customer inquiries, communication, and routine business workflows.',
      path: '/services/ai-services',
      icon: Bot,
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
      className="py-8 sm:py-10 lg:py-12 relative overflow-hidden bg-white text-[#082B59]"
    >
      {/* Subtle Background Decoration: Soft Gradient Blobs & Delicate Dot Pattern */}
      <div className="absolute top-1/4 left-8 w-[320px] h-[320px] bg-blue-50/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-6 right-8 w-[340px] h-[340px] bg-sky-50/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div
        className="absolute inset-0 opacity-[0.16] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(8, 102, 232, 0.45) 1px, transparent 1px)`,
          backgroundSize: '28px 28px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Two-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-center">

          {/* LEFT: DYNAMIC SERVICE ANIMATION STAGE (RED SQUARE ZONE) */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[440px] min-h-[380px] sm:min-h-[420px] rounded-2xl sm:rounded-3xl p-5 sm:p-6 bg-gradient-to-br from-[#F8FAFD] via-white to-blue-50/30 border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden text-left flex flex-col justify-between"
            >
              {/* Service Tab Switchers for Direct Tap Access */}
              <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100/80 mb-3 border border-slate-200/60 z-20">
                {serviceCards.map(s => {
                  const Icon = s.icon;
                  const isActive = s.id === activeServiceId;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setActiveServiceId(s.id)}
                      className={`flex-1 py-1.5 px-2 rounded-lg text-[10.5px] font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${isActive
                          ? 'bg-white text-[#082B59] shadow-xs'
                          : 'text-slate-500 hover:text-[#082B59]'
                        }`}
                    >
                      <Icon className={`w-3.5 h-3.5 ${isActive ? s.categoryColor : 'text-slate-400'}`} />
                      <span className="truncate">{s.category}</span>
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Animated Scene based on Clicked Service */}
              <div className="flex-1 relative min-h-[260px] flex items-center justify-center">
                <AnimatePresence mode="wait">
                  {activeServiceId === 'ai-services' && (
                    <motion.div
                      key="ai-services"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="w-full h-full"
                    >
                      <AutomationStageVisual shouldReduceMotion={shouldReduceMotion} />
                    </motion.div>
                  )}

                  {activeServiceId === 'cyber-security' && (
                    <motion.div
                      key="cyber-security"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="w-full h-full"
                    >
                      <CyberSecurityStageVisual shouldReduceMotion={shouldReduceMotion} />
                    </motion.div>
                  )}

                  {activeServiceId === 'ai-films' && (
                    <motion.div
                      key="ai-films"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="w-full h-full"
                    >
                      <FilmProductionStageVisual shouldReduceMotion={shouldReduceMotion} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
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
