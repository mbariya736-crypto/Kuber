import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';
import {
  ArrowLeft,
  X,
  Bot,
  Brain,
  Cpu,
  Sparkles,
  Zap,
  Shield,
  ShieldCheck,
  ShieldAlert,
  Lock,
  Radar,
  Film,
  Clapperboard,
  Aperture,
  Play,
  ArrowRight,
  Activity,
  Maximize2,
  PhoneCall,
  Terminal,
  Clock,
  Inbox,
  CheckCircle2,
  Users,
  Plane,
  Building2
} from 'lucide-react';
import ServiceVideoHero from './ServiceVideoHero';
import ServiceSpecificBackground from './ServiceSpecificBackground';
import ToursAndTravelsShowcase from './ToursAndTravelsShowcase';
import RealEstateShowcase from './RealEstateShowcase';

/* ========================================================================= */
/* 1. SUBJECT-BASED BACKGROUND: Business Automation (Attached AI Poster Visual) */
/* ========================================================================= */
function AIServicesBackground({ activeOption = 'ai-services' }) {
  const isTravel = activeOption === 'tours-travels';
  const isRealEstate = activeOption === 'real-estate';

  const glowConfig = isTravel
    ? {
      orb1: 'from-teal-500/25 via-emerald-400/20 to-transparent',
      orb2: 'from-emerald-400/20 via-cyan-400/20 to-transparent',
      accent1: 'bg-teal-100/40',
      gridColor: 'rgba(20, 184, 166, 0.45)'
    }
    : isRealEstate
      ? {
        orb1: 'from-blue-600/25 via-indigo-500/20 to-transparent',
        orb2: 'from-indigo-500/20 via-sky-400/20 to-transparent',
        accent1: 'bg-blue-100/40',
        gridColor: 'rgba(59, 130, 246, 0.45)'
      }
      : {
        orb1: 'from-[#0866E8]/20 via-[#00B9E8]/25 to-transparent',
        orb2: 'from-[#00B9E8]/20 via-[#38BDF8]/20 to-transparent',
        accent1: 'bg-blue-100/40',
        gridColor: 'rgba(8, 102, 232, 0.4)'
      };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 select-none">
      {/* Dynamic Animated Ambient Orbs */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`orb1-${activeOption}`}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.25, 0.55, 0.25],
            scale: [1, 1.2, 1]
          }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className={`absolute top-1/4 left-1/4 w-[520px] h-[520px] bg-gradient-to-tr ${glowConfig.orb1} rounded-full blur-[140px]`}
        />
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={`orb2-${activeOption}`}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.2, 0.45, 0.2],
            scale: [1, 1.15, 1]
          }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5
          }}
          className={`absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl ${glowConfig.orb2} rounded-full blur-[150px]`}
        />
      </AnimatePresence>

      <div className={`absolute top-10 right-10 w-80 h-80 ${glowConfig.accent1} rounded-full blur-[120px]`} />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.035] transition-opacity duration-700"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${glowConfig.gridColor} 1px, transparent 1px),
            linear-gradient(to bottom, ${glowConfig.gridColor} 1px, transparent 1px)
          `,
          backgroundSize: isRealEstate ? '32px 32px' : '40px 40px'
        }}
      />

      {/* Specialty Background Visual Motifs */}
      {isTravel && (
        <motion.div
          initial={{ opacity: 0, rotate: -15, scale: 0.9 }}
          animate={{ opacity: 0.14, rotate: 8, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="absolute right-[-40px] top-[18%] w-[420px] h-[420px] pointer-events-none"
        >
          <svg viewBox="0 0 200 200" className="w-full h-full stroke-teal-600 fill-none" strokeWidth="1.2">
            <circle cx="100" cy="100" r="85" strokeDasharray="4 6" opacity="0.6" />
            <circle cx="100" cy="100" r="60" opacity="0.4" />
            <path d="M20 100 Q100 25 180 100" strokeDasharray="6 4" strokeWidth="2" stroke="currentColor" />
            <path d="M35 145 Q100 65 165 145" strokeDasharray="4 4" opacity="0.5" />
          </svg>
        </motion.div>
      )}

      {isRealEstate && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.12, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="absolute left-[-30px] top-[20%] w-[440px] h-[440px] pointer-events-none"
        >
          <svg viewBox="0 0 200 200" className="w-full h-full stroke-blue-600 fill-none" strokeWidth="1">
            <rect x="30" y="30" width="140" height="140" strokeDasharray="4 4" opacity="0.5" />
            <line x1="30" y1="90" x2="170" y2="90" strokeDasharray="2 4" />
            <line x1="100" y1="30" x2="100" y2="170" strokeDasharray="2 4" />
            <polygon points="30,30 100,5 170,30" opacity="0.6" />
          </svg>
        </motion.div>
      )}
    </div>
  );
}

/* ========================================================================= */
/* 2. SUBJECT-BASED BACKGROUND: Cyber Security (Attached Cyber Poster Visual) */
/* ========================================================================= */
function CyberSecurityBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 select-none">
      {/* Protective Emerald & Teal Ambient Glow Rings */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.25, 0.50, 0.25]
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute top-1/4 right-1/4 w-[520px] h-[520px] bg-gradient-to-tr from-emerald-500/20 via-teal-400/20 to-transparent rounded-full blur-[140px]"
      />
      <div className="absolute bottom-1/4 left-1/4 w-[480px] h-[480px] bg-emerald-100/35 rounded-full blur-[150px]" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-teal-100/30 rounded-full blur-[100px]" />

      {/* Subtle blueprint security grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(16, 185, 129, 0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(16, 185, 129, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
    </div>
  );
}

/* ========================================================================= */
/* 3. SUBJECT-BASED BACKGROUND: Film Production (Attached Studio Poster Visual)*/
/* ========================================================================= */
function AIFilmStudioBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 select-none">
      {/* Warm Ambient Studio Spotlight Accents */}
      <motion.div
        animate={{
          scale: [1, 1.18, 1],
          opacity: [0.25, 0.45, 0.25]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute top-1/4 left-1/4 w-[550px] h-[550px] bg-gradient-to-tr from-cyan-400/20 via-blue-500/15 to-transparent rounded-full blur-[140px]"
      />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-amber-100/30 rounded-full blur-[150px]" />
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-cyan-100/25 rounded-full blur-[130px]" />

      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(8, 102, 232, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 185, 232, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px'
        }}
      />
    </div>
  );
}

/* ========================================================================= */
/* 4. BUSINESS AUTOMATION SERVICE DETAILS (Light Theme)                      */
/* ========================================================================= */
export function AIServicesExperience({ onOpenContact }) {
  const contentWrapperRef = useRef(null);
  const posterCardRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  // Smooth mouse coordinates with physics-based springs
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Gentle, restrained springs for handcrafted human feel (no sudden jumps, no rubbery bounce)
  const springX = useSpring(mouseX, { stiffness: 120, damping: 20, mass: 0.2 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 20, mass: 0.2 });

  // Very subtle 3D tilt perspective (max ±4 deg)
  const rotateX = useTransform(springY, [-1, 1], [3.5, -3.5]);
  const rotateY = useTransform(springX, [-1, 1], [-4, 4]);

  // Gentle parallax offset for the inner poster image
  const parallaxImgX = useTransform(springX, [-1, 1], [-6, 6]);
  const parallaxImgY = useTransform(springY, [-1, 1], [-6, 6]);

  // Dynamic natural soft shadow responding to light angle
  const shadowX = useTransform(springX, [-1, 1], [8, -8]);
  const shadowY = useTransform(springY, [-1, 1], [16, 6]);

  // Subtle natural glare highlight
  const glareX = useTransform(springX, [-1, 1], [0, 100]);
  const glareY = useTransform(springY, [-1, 1], [0, 100]);

  // Scroll Progress Setup for Cinematic Scroll
  const scrollYMotion = useMotionValue(0);
  const smoothScroll = useSpring(scrollYMotion, { stiffness: 90, damping: 24, mass: 0.4 });
  const scrollScale = useTransform(smoothScroll, [0, 600], [1, 1.025]);
  const scrollTranslateY = useTransform(smoothScroll, [0, 600], [0, -12]);

  // Touch device detection to cleanly disable cursor effects on mobile/touch
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [selectedIndustryOption, setSelectedIndustryOption] = useState('ai-services');

  useEffect(() => {
    const checkTouch = () => {
      setIsTouchDevice(
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(pointer: coarse)').matches
      );
    };
    checkTouch();
  }, []);

  // Scroll listener for scroll-driven progression
  useEffect(() => {
    if (shouldReduceMotion) return;
    const el = contentWrapperRef.current;
    if (!el) return;

    let parent = el.parentElement;
    while (parent && parent !== document.body) {
      const overflowY = window.getComputedStyle(parent).overflowY;
      if (overflowY === 'auto' || overflowY === 'scroll') break;
      parent = parent.parentElement;
    }
    const scrollTarget = (parent && parent !== document.body) ? parent : window;

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = scrollTarget === window ? window.scrollY : scrollTarget.scrollTop;
          scrollYMotion.set(currentY);
          ticking = false;
        });
        ticking = true;
      }
    };

    scrollTarget.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => scrollTarget.removeEventListener('scroll', handleScroll);
  }, [scrollYMotion, shouldReduceMotion]);

  // Mouse handler for poster card
  const handleCardMouseMove = (e) => {
    if (isTouchDevice || shouldReduceMotion || !posterCardRef.current) return;
    const rect = posterCardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    mouseX.set(Math.max(-1, Math.min(1, x)));
    mouseY.set(Math.max(-1, Math.min(1, y)));
  };

  const handleCardMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };


  const posterConfigs = {
    'ai-services': {
      src: '/assets/ai-services-poster.jpg',
      alt: 'AI & Business Automation Services',
      laserColor: 'via-cyan-300/35',
      badge: 'AI Services'
    },
    'tours-travels': {
      src: '/assets/tours-travels-poster.jpg',
      alt: 'Tours & Travels Enquiry Management',
      laserColor: 'via-teal-300/40',
      badge: 'Tours & Travels'
    },
    'real-estate': {
      src: '/assets/real-estate-poster.jpg',
      alt: 'Real Estate Lead Management',
      laserColor: 'via-blue-300/40',
      badge: 'Real Estate Hub'
    }
  };
  const activePoster = posterConfigs[selectedIndustryOption] || posterConfigs['ai-services'];

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-12 sm:pb-16 text-[#082B59]">
      <AIServicesBackground activeOption={selectedIndustryOption} />

      {/* Top Hero Heading & 2 Industry Options Switcher */}
      <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 relative z-20">
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#082B59] tracking-tight leading-[1.15] mb-4 sm:mb-6">
          AI Services
        </h1>

        {/* 3 Industry Options Switcher directly in Hero Section */}
        <div className="inline-flex p-1.5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-2xs gap-2 max-w-full overflow-x-auto">
          <button
            type="button"
            onClick={() => setSelectedIndustryOption('ai-services')}
            className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${selectedIndustryOption === 'ai-services'
              ? 'bg-blue-50 text-[#0866E8] shadow-xs border border-blue-200/90 ring-2 ring-blue-500/20'
              : 'text-slate-600 hover:text-[#082B59] hover:bg-slate-50 border border-transparent'
              }`}
          >
            <Bot className="w-4 h-4 text-[#0866E8]" />
            <span>AI Services</span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedIndustryOption('tours-travels')}
            className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${selectedIndustryOption === 'tours-travels'
              ? 'bg-teal-50 text-teal-700 shadow-xs border border-teal-200/90 ring-2 ring-teal-500/20'
              : 'text-slate-600 hover:text-[#082B59] hover:bg-slate-50 border border-transparent'
              }`}
          >
            <Plane className="w-4 h-4 text-teal-600" />
            <span>Tours & Travels Enquiry Management</span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedIndustryOption('real-estate')}
            className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${selectedIndustryOption === 'real-estate'
              ? 'bg-blue-50 text-[#0866E8] shadow-xs border border-blue-200/90 ring-2 ring-blue-500/20'
              : 'text-slate-600 hover:text-[#082B59] hover:bg-slate-50 border border-transparent'
              }`}
          >
            <Building2 className="w-4 h-4 text-[#0866E8]" />
            <span>Real Estate Lead Management</span>
          </button>
        </div>
      </div>

      {/* Dedicated Content Wrapper */}
      <div
        ref={contentWrapperRef}
        className="relative overflow-hidden rounded-[32px] sm:rounded-[40px] p-2 sm:p-5 lg:p-6"
      >
        {/* Main Overview Card */}
        <motion.div
          style={{
            y: scrollTranslateY
          }}
          className="relative z-10 rounded-[28px] sm:rounded-[36px] bg-white border border-slate-200/90 p-6 sm:p-10 lg:p-12 shadow-xl shadow-blue-900/5 mb-12 sm:mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center text-left">
            {/* Left: Handcrafted Interactive Poster Container */}
            <div className="lg:col-span-6 flex justify-center w-full">
              <div
                className="w-full"
                style={{ perspective: 1200 }}
              >
                <motion.div
                  ref={posterCardRef}
                  onMouseMove={handleCardMouseMove}
                  onMouseLeave={handleCardMouseLeave}
                  style={(isTouchDevice || shouldReduceMotion) ? {} : {
                    rotateX,
                    rotateY,
                    scale: scrollScale,
                    transformStyle: 'preserve-3d'
                  }}
                  className="relative rounded-[22px] sm:rounded-[26px] aspect-[16/10] w-full bg-slate-100 border border-slate-200 shadow-lg shadow-blue-900/8 group overflow-hidden cursor-default transition-shadow duration-500 hover:shadow-2xl hover:shadow-blue-900/12"
                >
                  {/* Dynamic Poster Picture with Smooth Crossfade Animation */}
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activePoster.src}
                      src={activePoster.src}
                      alt={activePoster.alt}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1.05 }}
                      exit={{ opacity: 0, scale: 1.02 }}
                      transition={{ duration: 0.45, ease: 'easeOut' }}
                      style={(isTouchDevice || shouldReduceMotion) ? {} : {
                        x: parallaxImgX,
                        y: parallaxImgY
                      }}
                      className="w-full h-full object-cover object-center rounded-[20px] sm:rounded-[24px] relative z-10 pointer-events-none select-none transition-transform duration-700 ease-out"
                    />
                  </AnimatePresence>

                  {/* Gentle Natural Highlight Sheen */}
                  {!isTouchDevice && !shouldReduceMotion && (
                    <motion.div
                      style={{
                        background: `radial-gradient(circle 280px at 50% 50%, rgba(255, 255, 255, 0.16), transparent 70%)`,
                        x: parallaxImgX,
                        y: parallaxImgY
                      }}
                      className="absolute inset-0 pointer-events-none z-20 mix-blend-overlay opacity-60"
                    />
                  )}

                  {/* Clean natural bottom vignette to preserve contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none z-20" />
                </motion.div>
              </div>
            </div>

            {/* Right: Dynamic Overview Text based on selected Hero Option */}
            <div className="lg:col-span-6 flex flex-col justify-center relative z-20">
              <AnimatePresence mode="wait">
                {selectedIndustryOption === 'ai-services' ? (
                  <motion.div
                    key="hero-ai-services"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="flex flex-col"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-[#0866E8] border border-blue-200/80">
                        AI & Business Automation
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#082B59] mb-3 leading-snug">
                      Practical Workflow Solutions Built for Real Businesses
                    </h2>



                    <div className="space-y-2.5 pt-4 border-t border-slate-100 mb-6">
                      <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-snug">
                        <CheckCircle2 className="w-4 h-4 text-[#0866E8] shrink-0 mt-0.5" />
                        <span>Capture inquiries from your website, WhatsApp, and email so leads are never missed.</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-snug">
                        <CheckCircle2 className="w-4 h-4 text-[#0866E8] shrink-0 mt-0.5" />
                        <span>Send instant alerts straight to the right team member via WhatsApp and email.</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-snug">
                        <CheckCircle2 className="w-4 h-4 text-[#0866E8] shrink-0 mt-0.5" />
                        <span>Organize customer details automatically in your spreadsheets and CRM with zero copy-pasting.</span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={onOpenContact}
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#0866E8] hover:bg-[#0756C5] shadow-sm transition-all cursor-pointer w-fit"
                      >
                        <span>Speak With Our Team</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </motion.div>
                ) : selectedIndustryOption === 'tours-travels' ? (
                  <motion.div
                    key="hero-tours-travels"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="flex flex-col"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-teal-50 text-teal-700 border border-teal-200/80">
                        Travel & Tourism
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#082B59] mb-3 leading-snug">
                      Tours & Travels Enquiry Management
                    </h2>



                    <div className="space-y-2.5 pt-4 border-t border-slate-100 mb-6">
                      <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-snug">
                        <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                        <span>Collect travel inquiries from your website, WhatsApp, and phone calls into one place.</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-snug">
                        <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                        <span>Match traveler preferences with relevant destinations, group sizes, and itineraries.</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-snug">
                        <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                        <span>Alert your travel desk on WhatsApp with traveler details for fast follow-ups.</span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={onOpenContact}
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-teal-600 hover:bg-teal-700 shadow-sm transition-all cursor-pointer w-fit"
                      >
                        <span>Request Solution Demo</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="hero-real-estate"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="flex flex-col"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200/80">
                        Real Estate & Housing
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#082B59] mb-3 leading-snug">
                      Real Estate Lead Management
                    </h2>



                    <div className="space-y-2.5 pt-4 border-t border-slate-100 mb-6">
                      <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-snug">
                        <CheckCircle2 className="w-4 h-4 text-[#0866E8] shrink-0 mt-0.5" />
                        <span>Capture buyer budget, location preferences, and property requirements.</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-snug">
                        <CheckCircle2 className="w-4 h-4 text-[#0866E8] shrink-0 mt-0.5" />
                        <span>Share matching brochures and project floor plans with interested buyers.</span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-snug">
                        <CheckCircle2 className="w-4 h-4 text-[#0866E8] shrink-0 mt-0.5" />
                        <span>Notify sales agents immediately on WhatsApp for prompt site visit scheduling.</span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={onOpenContact}
                        className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#0866E8] hover:bg-[#0756C5] shadow-sm transition-all cursor-pointer w-fit"
                      >
                        <span>Request Solution Demo</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Dynamic Industry Solution Showcase: Tours & Travels */}
        {selectedIndustryOption === 'tours-travels' && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="mb-12 sm:mb-16 relative z-10"
          >
            <ToursAndTravelsShowcase onOpenContact={onOpenContact} />
          </motion.div>
        )}

        {/* Dynamic Industry Solution Showcase: Real Estate */}
        {selectedIndustryOption === 'real-estate' && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="mb-12 sm:mb-16 relative z-10"
          >
            <RealEstateShowcase onOpenContact={onOpenContact} />
          </motion.div>
        )}

        {/* AI Services Solutions Grid (Show only when AI Services option is selected) */}
        {selectedIndustryOption === 'ai-services' && (
          <div className="my-16 sm:my-20 relative z-10">
            <div className="max-w-3xl mb-8 sm:mb-12 text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#082B59] tracking-tight mb-2 sm:mb-3">
                AI Services
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-normal leading-relaxed">
                Smart assistants, autonomous agents and automation that save time and grow your business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-left items-stretch">
              {[
                {
                  title: 'AI Chatbot Development',
                  desc: 'Custom AI chatbots for your website, WhatsApp and customer support that answer questions and capture leads.'
                },
                {
                  title: 'AI Agent Development',
                  desc: 'AI agents that research, decide and complete multi-step tasks for your business.'
                },
                {
                  title: 'AI Workflow Automation',
                  desc: 'Automate repetitive work by connecting your tools and processes with AI-driven workflows.'
                },
                {
                  title: 'AI Sales & Lead Agent',
                  desc: 'An AI agent that finds, qualifies and follows up with sales leads around the clock.'
                }
              ].map((solution, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-slate-200/90 hover:border-slate-300 p-7 sm:p-8 transition-all duration-200 shadow-xs hover:shadow-md flex flex-col justify-between group"
                >
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#082B59] mb-3 leading-snug group-hover:text-[#0866E8] transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                      {solution.desc}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={onOpenContact}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0866E8] hover:text-[#0756C5] transition-colors cursor-pointer w-fit"
                  >
                    <span>Learn More →</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ========================================================================= */
/* 5. CYBER SECURITY EXPERIENCE (Human-Designed Enterprise Layout)           */
/* ========================================================================= */
export function CyberSecurityExperience({ onOpenContact }) {
  const cyberServices = [
    {
      title: 'Web Application Security',
      description: 'Security review and hardening of web applications against common threats.'
    },
    {
      title: 'Vulnerability Assessment & Penetration Testing (VAPT)',
      description: 'Scanning and manual penetration testing to find and prioritise weaknesses, with a clear remediation report.'
    },
    {
      title: 'API Security Testing',
      description: 'Testing of REST and other APIs for authentication, authorisation and injection flaws.'
    }
  ];

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-12 sm:pb-16 text-[#082B59]">
      <CyberSecurityBackground />

      {/* Hero Header matching user reference */}
      <div className="text-left max-w-4xl mb-10 sm:mb-14 relative z-10">
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#082B59] tracking-tight leading-[1.15] mb-3">
          Cyber Security Services
        </h1>
        <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-normal leading-relaxed">
          Testing and hardening of your applications and APIs so attackers find nothing easy to exploit.
        </p>
      </div>

      {/* 3 Core Security Solution Cards (Exact topics from reference image) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-left relative z-10">
        {cyberServices.map((service, idx) => (
          <div
            key={idx}
            className="rounded-2xl bg-white border border-slate-200/90 hover:border-slate-300 p-7 sm:p-8 transition-all duration-200 shadow-xs hover:shadow-md flex flex-col justify-between group"
          >
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[#082B59] mb-3 leading-snug group-hover:text-emerald-700 transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                {service.description}
              </p>
            </div>
            <button
              type="button"
              onClick={onOpenContact}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors cursor-pointer w-fit"
            >
              <span>Learn More →</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ========================================================================= */
/* 6. AI FILM SERVICES EXPERIENCE (Clean Human-Designed Layout)              */
/* ========================================================================= */
export function AIFilmStudioExperience({ onOpenContact }) {
  const filmServices = [
    {
      title: 'AI Short Film Production',
      desc: 'Complete short films made with AI, from concept to final cut.'
    },
    {
      title: 'AI Long Film Production',
      desc: 'Feature-length AI films with story, characters, scenes and sound.'
    },
    {
      title: 'AI Reels Production',
      desc: 'Short vertical videos for Instagram, YouTube Shorts and social media.'
    },
    {
      title: 'AI Advertisement Films',
      desc: 'Eye-catching ad films for products, services and campaigns.'
    },
    {
      title: 'AI Brand Videos & Logo Animations',
      desc: 'Brand story videos and animated logo reveals that build recognition.'
    },
    {
      title: 'AI Animation & Animated Films',
      desc: 'Animated characters, explainer animations and animated films.'
    },
    {
      title: 'AI Scriptwriting & Story Development',
      desc: 'Scripts, storylines and character development for films, ads and videos.'
    },
    {
      title: 'AI Video Editing & Post-Production',
      desc: 'Editing, colour, sound, subtitles and final polish for your videos.'
    },
    {
      title: 'AI Music Videos',
      desc: 'Music videos with AI visuals matched to your track and mood.'
    },
    {
      title: 'AI Documentary Films',
      desc: 'Documentary-style films that tell real stories with AI visuals and narration.'
    }
  ];

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-12 sm:pb-16 text-[#082B59]">
      <AIFilmStudioBackground />

      {/* Hero Header matching user reference */}
      <div className="text-left max-w-4xl mb-10 sm:mb-14 relative z-10">
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#082B59] tracking-tight leading-[1.15] mb-3">
          AI Film Services
        </h1>
        <p className="text-sm sm:text-base lg:text-lg text-slate-600 font-normal leading-relaxed">
          AI-powered films, reels, ads, brand videos and animation, from script to final edit.
        </p>
      </div>

      {/* 10 Core Film Solution Cards (Exact topics from reference image) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-left relative z-10">
        {filmServices.map((service, idx) => (
          <div
            key={idx}
            className="rounded-2xl bg-white border border-slate-200/90 hover:border-slate-300 p-7 sm:p-8 transition-all duration-200 shadow-xs hover:shadow-md flex flex-col justify-between group"
          >
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[#082B59] mb-3 leading-snug group-hover:text-cyan-700 transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                {service.desc}
              </p>
            </div>
            <button
              type="button"
              onClick={onOpenContact}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-700 hover:text-cyan-800 transition-colors cursor-pointer w-fit"
            >
              <span>Learn More →</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ========================================================================= */
/* 7. MAIN FULL-SCREEN CONTAINER (Light Theme Fallback)                       */
/* ========================================================================= */
export default function PracticeExperience({ practiceId, onClose, onOpenContact }) {
  const navigate = useNavigate();

  const handleBackToServices = () => {
    if (onClose) {
      onClose();
    }
    navigate('/services');
  };

  useEffect(() => {
    if (practiceId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [practiceId]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleBackToServices();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!practiceId) return null;
  const effectivePracticeId = practiceId === 'ai-film-studio' ? 'ai-films' : practiceId;

  const getHeaderMeta = () => {
    switch (effectivePracticeId) {
      case 'ai-services':
        return {
          title: 'Business Automation',
          themeColor: 'text-[#0866E8]'
        };
      case 'cyber-security':
        return {
          title: 'Cyber Security',
          themeColor: 'text-emerald-700'
        };
      case 'ai-films':
        return {
          title: 'AI Film Services',
          themeColor: 'text-cyan-800'
        };
      default:
        return {
          title: 'Our Services',
          themeColor: 'text-[#0866E8]'
        };
    }
  };

  const meta = getHeaderMeta();

  return (
    <motion.div
      initial={{ opacity: 1, scale: 1 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[100] backdrop-blur-2xl overflow-y-auto flex flex-col text-[#082B59] bg-[#F8FAFD]"
    >
      {/* Service-Specific Motion Background */}
      <ServiceSpecificBackground serviceId={effectivePracticeId} className="fixed inset-0 w-full h-full pointer-events-none z-0" />

      {/* Top Bar with Clear Back Button at Top-Left */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/95 border-b border-slate-200/90 py-2.5 sm:py-3 px-4 sm:px-8 flex items-center justify-between gap-4 shadow-2xs">
        <button
          onClick={handleBackToServices}
          className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-[#082B59] bg-white hover:bg-slate-50 border border-slate-200 shadow-2xs transition-all cursor-pointer shrink-0 min-h-[40px]"
          title="Back to Services"
        >
          <ArrowLeft className={`w-4 h-4 ${meta.themeColor} shrink-0`} />
          <span>Back to Services</span>
        </button>

        <span className="font-bold text-sm text-[#082B59]">{meta.title}</span>

        <button
          onClick={handleBackToServices}
          className="p-2 sm:p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all cursor-pointer min-h-[40px] min-w-[40px] flex items-center justify-center shrink-0"
          aria-label="Back to Services"
        >
          <X className="w-5 h-5" />
        </button>
      </header>

      {/* Experience Body */}
      <main className="flex-1 flex flex-col justify-between relative">
        {effectivePracticeId === 'ai-services' && <AIServicesExperience onOpenContact={() => { onClose(); if (onOpenContact) onOpenContact(); }} />}
        {effectivePracticeId === 'cyber-security' && <CyberSecurityExperience onOpenContact={() => { onClose(); if (onOpenContact) onOpenContact(); }} />}
        {effectivePracticeId === 'ai-films' && <AIFilmStudioExperience onOpenContact={() => { onClose(); if (onOpenContact) onOpenContact(); }} />}
      </main>

      {/* Footer Navigation */}
      <footer className="py-4 border-t border-slate-200 text-center text-xs text-slate-600 bg-white px-4">
        <button
          onClick={handleBackToServices}
          className={`${meta.themeColor} hover:opacity-80 font-semibold underline underline-offset-4 cursor-pointer py-1`}
        >
          ← Back to Services
        </button>
      </footer>
    </motion.div>
  );
}
