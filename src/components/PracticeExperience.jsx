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
  Pause,
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

  const dynamicDepthNodes = isTravel
    ? [
        { top: '12%', left: '4%', size: 48, label: 'FLIGHT INTAKE', border: 'border-teal-200/90 text-teal-800 bg-teal-50/80' },
        { top: '35%', right: '5%', size: 54, label: 'HOTEL MATCH', border: 'border-emerald-200/90 text-emerald-800 bg-emerald-50/80' },
        { top: '65%', left: '5%', size: 50, label: 'WHATSAPP ALERT', border: 'border-teal-200/90 text-teal-800 bg-teal-50/80' },
        { top: '83%', right: '7%', size: 44, label: 'ITINERARY SYNC', border: 'border-cyan-200/90 text-cyan-800 bg-cyan-50/80' }
      ]
    : isRealEstate
    ? [
        { top: '12%', left: '4%', size: 48, label: 'PROPERTY INTAKE', border: 'border-blue-200/90 text-blue-800 bg-blue-50/80' },
        { top: '35%', right: '5%', size: 54, label: 'CRITERIA FILTER', border: 'border-indigo-200/90 text-indigo-800 bg-indigo-50/80' },
        { top: '65%', left: '5%', size: 50, label: 'BROKER ALERT', border: 'border-emerald-200/90 text-emerald-800 bg-emerald-50/80' },
        { top: '83%', right: '7%', size: 44, label: 'INVENTORY SYNC', border: 'border-blue-200/90 text-blue-800 bg-blue-50/80' }
      ]
    : [
        { top: '12%', left: '4%', size: 48, label: 'WEB INTAKE', border: 'border-blue-200/90 text-[#082B59] bg-white/80' },
        { top: '35%', right: '5%', size: 54, label: 'RECORDS SYNC', border: 'border-blue-200/90 text-[#082B59] bg-white/80' },
        { top: '65%', left: '5%', size: 50, label: 'NOTIFICATION', border: 'border-blue-200/90 text-[#082B59] bg-white/80' },
        { top: '83%', right: '7%', size: 44, label: 'DATABASE', border: 'border-blue-200/90 text-[#082B59] bg-white/80' }
      ];

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

      {/* Floating Animated Depth Pills in Background */}
      {dynamicDepthNodes.map((node, i) => (
        <motion.div
          key={`${activeOption}-${node.label}`}
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{
            opacity: [0.5, 0.9, 0.5],
            y: [0, -8, 0],
            scale: [1, 1.04, 1]
          }}
          transition={{
            duration: 3.2 + i * 0.4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.2
          }}
          style={{ top: node.top, left: node.left, right: node.right }}
          className={`hidden md:flex absolute items-center gap-1.5 px-3 py-1.5 rounded-full border shadow-2xs backdrop-blur-md text-[10px] font-extrabold tracking-wider ${node.border}`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-current animate-ping" />
          <span>{node.label}</span>
        </motion.div>
      ))}

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
  const [selectedIndustryOption, setSelectedIndustryOption] = useState('tours-travels');

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

  const benefits = [
    {
      icon: Clock,
      title: 'Faster Customer Response Management',
      description: 'Ensure new inquiries from your website, WhatsApp, and email are acknowledged immediately so potential clients never feel ignored.'
    },
    {
      icon: Inbox,
      title: 'Better Inquiry Tracking',
      description: 'Keep all customer contact details, messages, and follow-up notes organized in one clear location instead of lost across separate inboxes.'
    },
    {
      icon: CheckCircle2,
      title: 'Reduced Manual Work',
      description: 'Eliminate repetitive copy-pasting between spreadsheets, forms, and email so your team can focus on client service and real business.'
    },
    {
      icon: Users,
      title: 'Improved Team Coordination',
      description: 'Automatically notify the right staff member when action is needed, keeping everyone aligned on next steps and pending tasks.'
    }
  ];

  const depthNodes = [
    { top: '10%', left: '4%', depth: 0.8, size: 48, label: 'WEB INTAKE' },
    { top: '34%', right: '5%', depth: 1.2, size: 54, label: 'RECORDS SYNC' },
    { top: '64%', left: '5%', depth: 1.0, size: 50, label: 'NOTIFICATION' },
    { top: '82%', right: '7%', depth: 0.7, size: 44, label: 'DATABASE' }
  ];

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

        {/* 2 Options Switcher directly in Hero Section matching reference */}
        <div className="inline-flex p-1.5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-2xs gap-2 max-w-full overflow-x-auto">
          <button
            type="button"
            onClick={() => setSelectedIndustryOption('tours-travels')}
            className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
              selectedIndustryOption === 'tours-travels'
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
            className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
              selectedIndustryOption === 'real-estate'
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

                  {/* Dynamic Category Badge on Poster Top Left */}
                  <div className="absolute top-3.5 left-3.5 z-25 pointer-events-none">
                    <span className="px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-black/60 text-white backdrop-blur-md border border-white/20 shadow-md">
                      {activePoster.badge}
                    </span>
                  </div>

                  {/* Laser Scanning Sheen Animation Across Poster Picture */}
                  <motion.div
                    animate={{
                      x: ['-140%', '240%']
                    }}
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      repeatDelay: 0.8
                    }}
                    className={`absolute inset-y-0 w-32 bg-gradient-to-r from-transparent ${activePoster.laserColor} to-transparent skew-x-[-20deg] pointer-events-none z-20`}
                  />

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

                    <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed font-normal mb-5">
                      Everyday operations often get slowed down by missed customer messages, disorganized contact sheets, and repetitive manual tasks that take hours away from serving clients. We help businesses connect their existing tools—including website forms, WhatsApp, email, spreadsheets, and CRM—into one reliable, straightforward workflow.
                    </p>

                    <div className="space-y-2.5 pt-4 border-t border-slate-100 mb-6">
                      <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-snug">
                        <CheckCircle2 className="w-4 h-4 text-[#0866E8] shrink-0 mt-0.5" />
                        <span>
                          <strong className="text-[#082B59] font-bold">Instant Response Protocols:</strong> Automatically capture website submissions and route alerts to WhatsApp and email within 3 seconds.
                        </span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-snug">
                        <CheckCircle2 className="w-4 h-4 text-[#0866E8] shrink-0 mt-0.5" />
                        <span>
                          <strong className="text-[#082B59] font-bold">Event-Driven Data Sync:</strong> Clean lead records synced immediately across spreadsheets, databases, and client dashboards without duplicate entries.
                        </span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-snug">
                        <CheckCircle2 className="w-4 h-4 text-[#0866E8] shrink-0 mt-0.5" />
                        <span>
                          <strong className="text-[#082B59] font-bold">Contextual Alerts:</strong> Priority routing that tags high-value inquiries directly to designated team members for faster response.
                        </span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-snug">
                        <CheckCircle2 className="w-4 h-4 text-[#0866E8] shrink-0 mt-0.5" />
                        <span>
                          <strong className="text-[#082B59] font-bold">Verified Operational Output:</strong> Reliable, structured inquiry pipelines with zero manual copy-pasting or lost customer details.
                        </span>
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

                    <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed font-normal mb-5">
                      Complete client intake, itinerary matching, and qualification pipeline designed for travel agencies, tour operators, and destination planners.
                    </p>

                    <div className="space-y-2.5 pt-4 border-t border-slate-100 mb-6">
                      <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-snug">
                        <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                        <span>
                          <strong className="text-[#082B59] font-bold">Multi-Category Trip Intake:</strong> Captures domestic, international, honeymoon, and group travel inquiries across forms and WhatsApp.
                        </span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-snug">
                        <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                        <span>
                          <strong className="text-[#082B59] font-bold">Smart Package Matching:</strong> Instant matching of itineraries, hotel categories, group sizes, and budget ranges from your catalog.
                        </span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-snug">
                        <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                        <span>
                          <strong className="text-[#082B59] font-bold">Instant Team WhatsApp Dispatch:</strong> Automatically alerts your sales desk with client budget, travel dates, and matched packages.
                        </span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-snug">
                        <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                        <span>
                          <strong className="text-[#082B59] font-bold">Spreadsheet & Lead Sync:</strong> Organizes daily inquiries into high-intent travelers and nurture lists with automated end-of-day reports.
                        </span>
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

                    <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed font-normal mb-5">
                      High-conversion property buyer qualification and site-visit coordination pipeline for real estate agencies and brokers.
                    </p>

                    <div className="space-y-2.5 pt-4 border-t border-slate-100 mb-6">
                      <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-snug">
                        <CheckCircle2 className="w-4 h-4 text-[#0866E8] shrink-0 mt-0.5" />
                        <span>
                          <strong className="text-[#082B59] font-bold">Buyer Criteria Profiling:</strong> Captures property type (Flats, Villas, Plots), BHK, preferred localities, and loan readiness.
                        </span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-snug">
                        <CheckCircle2 className="w-4 h-4 text-[#0866E8] shrink-0 mt-0.5" />
                        <span>
                          <strong className="text-[#082B59] font-bold">Automated Inventory Matching:</strong> Instantly matches buyer budget and space needs against available ready-to-move and project units.
                        </span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-snug">
                        <CheckCircle2 className="w-4 h-4 text-[#0866E8] shrink-0 mt-0.5" />
                        <span>
                          <strong className="text-[#082B59] font-bold">Broker WhatsApp Alerts:</strong> Delivers instant alerts with buyer details, matched listings, and requested site-visit timing.
                        </span>
                      </div>
                      <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-snug">
                        <CheckCircle2 className="w-4 h-4 text-[#0866E8] shrink-0 mt-0.5" />
                        <span>
                          <strong className="text-[#082B59] font-bold">Daily Pipeline Organization:</strong> Categorizes leads into serious site visitors vs. nurture prospects with automated daily reports.
                        </span>
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

        {/* Core AI Services Solutions Grid */}
        {selectedIndustryOption === 'ai-services' && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="mb-12 sm:mb-16 relative z-10"
          >
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
              <h2 className="text-xl sm:text-3xl font-bold text-[#082B59] tracking-tight">
                Core AI Solutions & Capabilities
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 font-normal">
                End-to-end intelligent automation modules designed to streamline operations and accelerate customer response.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 text-left">
              {[
                {
                  title: 'AI Chatbots',
                  desc: '24/7 intelligent conversational assistants deployed across your website and WhatsApp to qualify visitors and resolve frequent inquiries instantly.',
                  tag: 'Customer Engagement',
                  color: 'text-[#0866E8]',
                  bg: 'bg-blue-50 border-blue-200/80'
                },
                {
                  title: 'AI Agents',
                  desc: 'Autonomous task-driven agents executing customer intake, complex query resolution, background research, and cross-team operational actions.',
                  tag: 'Autonomous Execution',
                  color: 'text-indigo-600',
                  bg: 'bg-indigo-50 border-indigo-200/80'
                },
                {
                  title: 'AI Workflow Automation',
                  desc: 'Zero-touch integrations connecting web forms, WhatsApp, email, spreadsheets, CRM, and databases into one seamless pipeline.',
                  tag: 'System Integration',
                  color: 'text-teal-600',
                  bg: 'bg-teal-50 border-teal-200/80'
                },
                {
                  title: 'AI Sales & Lead Generation Agents',
                  desc: 'High-intent lead capture, multi-parameter qualification, dynamic scoring, and instant routing directly to your sales representatives.',
                  tag: 'Revenue Acceleration',
                  color: 'text-amber-600',
                  bg: 'bg-amber-50 border-amber-200/80'
                },
                {
                  title: 'AI Calling Solutions',
                  desc: 'Automated conversational voice assistants for proactive client follow-ups, appointment confirmation, reminders, and verification.',
                  tag: 'Voice Operations',
                  color: 'text-cyan-600',
                  bg: 'bg-cyan-50 border-cyan-200/80'
                }
              ].map((solution, idx) => (
                <div
                  key={idx}
                  className="rounded-[24px] bg-white border border-slate-200/90 hover:border-blue-300 p-6 sm:p-7 transition-all duration-300 shadow-md hover:shadow-xl flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-[11px] font-bold border ${solution.bg} ${solution.color}`}>
                        {solution.tag}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#082B59] mb-2 leading-snug group-hover:text-[#0866E8] transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5">
                      {solution.desc}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={onOpenContact}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0866E8] hover:text-[#0756C5] transition-colors cursor-pointer w-fit"
                  >
                    <span>Inquire About This Solution</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Key Business Benefits Cards Grid */}
        <div className="mb-12 sm:mb-16 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <h2 className="text-xl sm:text-3xl font-bold text-[#082B59] tracking-tight">
              Key Business Benefits
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 text-left items-stretch">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-[24px] bg-white border border-slate-200/90 hover:border-blue-300 p-6 sm:p-7 transition-all duration-300 shadow-md hover:shadow-xl flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0866E8] border border-blue-200/80 flex items-center justify-center mb-5 group-hover:scale-105 transition-all duration-300">
                      <Icon className="w-6 h-6 text-[#0866E8]" />
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-[#082B59] mb-2 leading-snug group-hover:text-[#0866E8] transition-colors">
                      {benefit.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Call to Action Bar */}
        <div className="text-center p-8 sm:p-12 rounded-[28px] sm:rounded-[32px] bg-[#082B59] text-white shadow-xl relative z-10 overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              Ready to Discuss Your Business Workflow?
            </h3>



            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#0866E8] hover:bg-[#0756C5] shadow-xs hover:shadow-md transition-all cursor-pointer min-h-[44px]"
            >
              <span>Speak With Our Team</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ========================================================================= */
/* 5. CYBER SECURITY EXPERIENCE (Light Theme)                                 */
/* ========================================================================= */
export function CyberSecurityExperience({ onOpenContact }) {
  const protectionAreas = [
    {
      category: 'Phishing & Email Fraud',
      guidance: 'Identification of deceptive sender addresses, fraudulent vendor invoices, and malicious payment links.',
      status: 'Protected',
      badgeClass: 'bg-emerald-50 text-emerald-800 border border-emerald-200'
    },
    {
      category: 'Payment & Wire Verification',
      guidance: 'Verification protocols for banking details, invoice QR codes, and digital payment gateways.',
      status: 'Verified',
      badgeClass: 'bg-teal-50 text-teal-800 border border-teal-200'
    },
    {
      category: 'Account Access & Authentication',
      guidance: 'Enforcing multi-factor authentication, secure password policies, and role-based staff access.',
      status: 'Secured',
      badgeClass: 'bg-emerald-50 text-emerald-800 border border-emerald-200'
    },
    {
      category: 'Incident Response & Recovery',
      guidance: 'Clear procedures to isolate compromised accounts, secure business assets, and report to Helpline 1930.',
      status: 'Active Protocol',
      badgeClass: 'bg-blue-50 text-blue-800 border border-blue-200'
    }
  ];

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-12 sm:pb-16 text-[#082B59]">
      <CyberSecurityBackground />

      {/* Hero Header */}
      <motion.div
        initial={{ opacity: 1, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-4xl mx-auto mb-8 sm:mb-10 relative"
      >
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#082B59] tracking-tight leading-[1.15] mb-3.5 sm:mb-5">
          Proactive Security &amp; Protection for{' '}
          <span className="text-emerald-600">
            Business Operations
          </span>
        </h1>


      </motion.div>

      {/* Centerpiece Editorial Swapped Showcase (Image Right, Content Left) */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-[28px] sm:rounded-[36px] bg-white border border-slate-200/90 p-6 sm:p-10 lg:p-12 shadow-xl shadow-blue-900/5 mb-12 sm:mb-16 text-left"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Content Left */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#082B59] mb-4 leading-snug">
              Account Security, Threat Audits &amp; Risk Prevention
            </h2>

            <div className="space-y-3.5 text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed font-normal mb-6">
              <p>
                Many small and growing businesses operate under the misconception that cyber threats only target large corporations. In reality, shared email accounts and unverified payment requests make everyday operations prime targets for wire fraud and account takeover.
              </p>
              <p>
                We conduct practical security reviews of business email suites, cloud storage, and banking portals. We implement multi-factor authentication, establish dual-verification protocols, and train your staff to recognize deceptive scams before financial losses occur.
              </p>
            </div>

            {/* 3 Editorial Checkmarked Deliverables */}
            <div className="space-y-2.5 pt-4 border-t border-slate-100">
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-snug">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#082B59] font-bold">Proactive Account Audits:</strong> Comprehensive security reviews of administrative accounts, email suites, and access permissions.
                </span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-snug">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#082B59] font-bold">Staff Scam &amp; Phishing Defense:</strong> Hands-on scenario training helping employees recognize fraudulent vendor invoices and fake payment links.
                </span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-snug">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#082B59] font-bold">Rapid Incident Recovery:</strong> Clear, step-by-step guidance to freeze unauthorized transactions and report swiftly via Helpline 1930.
                </span>
              </div>
            </div>
          </div>

          {/* Photographic Image Right (SWAPPED) */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="relative rounded-[22px] sm:rounded-[26px] aspect-[16/11] sm:aspect-[4/3] w-full bg-slate-100 border border-slate-200 shadow-lg shadow-blue-900/8 overflow-hidden group">
              <img
                src="/assets/cybersecurity-2023-social_uvx3rt.png"
                alt="Cyber Security & Active Risk Protection"
                className="w-full h-full object-cover object-center rounded-[20px] sm:rounded-[24px] group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
              {/* Laser Scanning Sheen Animation Across Cyber Poster */}
              <motion.div
                animate={{
                  x: ['-140%', '240%']
                }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  repeatDelay: 0.9
                }}
                className="absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-emerald-300/30 to-transparent skew-x-[-20deg] pointer-events-none z-20"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </motion.div>

      {/* National Cyber Helpline Notice */}
      <div className="mb-12 sm:mb-16 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50/50 border border-emerald-200/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold shadow-xs shrink-0">
            <PhoneCall className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[11px] text-slate-600 font-medium">National Cyber Crime Helpline</p>
            <p className="text-base sm:text-lg font-black text-[#082B59] flex items-center gap-2">
              <span>Dial 1930</span>
              <span className="px-1.5 py-0.5 rounded text-[9px] bg-emerald-100 text-emerald-800 border border-emerald-300 font-semibold">TOLL FREE</span>
            </p>
          </div>
        </div>
        <div className="sm:text-right">
          <p className="text-[11px] text-slate-600 font-medium">Official Reporting Portal</p>
          <a
            href="https://cybercrime.gov.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm font-bold text-emerald-700 hover:text-emerald-800 underline"
          >
            cybercrime.gov.in
          </a>
        </div>
      </div>

      {/* Core Practice Capabilities Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-12 sm:mb-14 text-left">
        {[
          {
            title: 'Account & Access Audits',
            desc: 'Review user permissions, administrative privileges, and authentication policies across all business email and software accounts.',
            icon: ShieldCheck
          },
          {
            title: 'Employee Phishing Training',
            desc: 'Practical, scenario-based guidance teaching your team how to detect email spoofing, urgent payment requests, and suspicious links.',
            icon: Shield
          },
          {
            title: 'Payment & Wire Protection',
            desc: 'Verifiable safeguards on invoicing procedures, digital payment gateways, and banking updates to prevent fraudulent fund diversion.',
            icon: Lock
          },
          {
            title: 'Incident Guidance & 1930',
            desc: 'Step-by-step operating plans to isolate compromised accounts, secure digital assets, and log formal incident reports via 1930.',
            icon: ShieldAlert
          }
        ].map((feat, idx) => {
          const Icon = feat.icon;
          return (
            <div
              key={feat.title}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-emerald-300 transition-all shadow-md hover:shadow-xl group"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform border border-emerald-200">
                <Icon className="w-5 h-5 text-emerald-600" />
              </div>
              <h4 className="text-base font-bold text-[#082B59] mb-2 leading-snug">
                {feat.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {feat.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA Bar */}
      <div className="text-center p-8 sm:p-12 rounded-3xl bg-[#082B59] text-white shadow-xl">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
          Protect Your Business Operations &amp; Client Trust
        </h3>


        <button
          onClick={onOpenContact}
          className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#0866E8] hover:bg-[#0756C5] shadow-xs hover:shadow-md transition-all cursor-pointer"
        >
          <span>Book a Security Consultation</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

/* ========================================================================= */
/* 6. FILM PRODUCTION EXPERIENCE (Light Theme with Scroll Motion)             */
/* ========================================================================= */
export function AIFilmStudioExperience({ onOpenContact }) {
  const containerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeFrame, setActiveFrame] = useState(0);

  // Smooth scroll-driven spring physics for natural, reversible movement
  const scrollYMotion = useMotionValue(0);
  const smoothScroll = useSpring(scrollYMotion, {
    stiffness: 90,
    damping: 24,
    mass: 0.4
  });

  useEffect(() => {
    const el = containerRef.current;
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
  }, [scrollYMotion]);

  // Subtle Parallax & Depth Transforms linked to scroll
  const imageParallaxY = useTransform(smoothScroll, [0, 800], [0, -24]);
  const imageScale = useTransform(smoothScroll, [0, 800], [1, 1.04]);
  const leftCardY = useTransform(smoothScroll, [0, 800], [0, -18]);
  const rightCardY = useTransform(smoothScroll, [0, 800], [0, -12]);
  const cardY0 = useTransform(smoothScroll, [0, 900], [0, -20]);
  const cardY1 = useTransform(smoothScroll, [0, 900], [0, -12]);
  const cardY2 = useTransform(smoothScroll, [0, 900], [0, -22]);
  const cardY3 = useTransform(smoothScroll, [0, 900], [0, -14]);

  const cinematicFrames = [
    {
      title: 'Commercial Films',
      type: 'Brand & Product Campaigns',
      src: '/assets/ai-film-studio-hero.webp',
      aspect: '16:9 Widescreen',
      resolution: 'Cinema 4K Master',
      desc: 'Engaging product introductions, commercial spots, and brand stories crafted for digital audiences.'
    },
    {
      title: 'Corporate Profiles',
      type: 'Mission & Culture Documentaries',
      src: '/assets/corporate-doc-frame.webp',
      aspect: '2.39:1 Anamorphic Scope',
      resolution: '4K Ultra HD',
      desc: 'Cinematic corporate documentaries highlighting executive vision, operational milestones, and client partnerships.'
    },
    {
      title: 'Public Awareness',
      type: 'Educational Safety Campaigns',
      src: '/assets/awareness-film-frame.webp',
      aspect: '16:9 Broadcast Format',
      resolution: 'Color Graded Master',
      desc: 'Compelling public service media like our Digital Jaal project, explaining important civic and cyber awareness topics.'
    }
  ];

  const currentFrame = cinematicFrames[activeFrame] || cinematicFrames[0];

  return (
    <div ref={containerRef} className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-12 sm:pb-16 text-[#082B59]">
      <AIFilmStudioBackground />

      {/* Header */}
      <motion.div
        initial={{ opacity: 1, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-4xl mx-auto mb-8 sm:mb-10 relative"
      >
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#082B59] tracking-tight leading-[1.15] mb-3.5 sm:mb-5">
          Corporate Films, Commercials &amp;{' '}
          <span className="text-[#0866E8]">
            Visual Storytelling
          </span>
        </h1>



      </motion.div>

      {/* Main Editorial Showcase (Image Left, Content Right) */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-[28px] sm:rounded-[36px] bg-white border border-slate-200/90 p-6 sm:p-10 lg:p-12 shadow-xl shadow-blue-900/5 mb-12 sm:mb-16 text-left"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Photographic Image Left */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="relative rounded-[22px] sm:rounded-[26px] aspect-[16/11] sm:aspect-[4/3] w-full bg-slate-100 border border-slate-200 shadow-lg shadow-blue-900/8 overflow-hidden group">
              <img
                src="/assets/ai-film-studio-hero.webp"
                alt="Commercial Film & Video Production"
                className="w-full h-full object-cover object-center rounded-[20px] sm:rounded-[24px] group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
              {/* Laser Scanning Sheen Animation Across Film Studio Poster */}
              <motion.div
                animate={{
                  x: ['-140%', '240%']
                }}
                transition={{
                  duration: 2.3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  repeatDelay: 0.8
                }}
                className="absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-amber-300/30 to-transparent skew-x-[-20deg] pointer-events-none z-20"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Editorial Content Right */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#082B59] mb-4 leading-snug">
              Brand Commercials &amp; Corporate Media Production
            </h2>

            <div className="space-y-3.5 text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed font-normal mb-6">
              <p>
                Commercial brand media and corporate videos often suffer from generic templates that fail to communicate genuine values or build lasting customer connection.
              </p>
              <p>
                We partner closely with your team to produce authentic human stories. From initial script consultation and storyboard development to on-location cinematography and post-production color grading, every frame is crafted to build credibility.
              </p>
            </div>

            {/* 3 Editorial Checkmarked Deliverables */}
            <div className="space-y-2.5 pt-4 border-t border-slate-100">
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-snug">
                <CheckCircle2 className="w-4 h-4 text-cyan-700 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#082B59] font-bold">End-to-End Creative Direction:</strong> Complete script consultation, storyboard pacing, studio cinematography, and lighting.
                </span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-snug">
                <CheckCircle2 className="w-4 h-4 text-cyan-700 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#082B59] font-bold">Authentic Narrative Pacing:</strong> Human-crafted storytelling that builds trust and connects with clients, partners, and investors.
                </span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-snug">
                <CheckCircle2 className="w-4 h-4 text-cyan-700 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#082B59] font-bold">Cinema-Grade Master Cuts:</strong> Editorial color grading, custom soundscapes, and multi-format exports for web and social broadcasts.
                </span>
              </div>
            </div>
          </div>

        </div>
      </motion.div>

      {/* Interactive Production Timeline Visual */}
      <div className="mb-12 sm:mb-16">
        <motion.div
          style={{ y: rightCardY }}
          initial={{ opacity: 1, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-[24px] sm:rounded-[28px] bg-white border border-slate-200/90 p-5 sm:p-8 flex flex-col justify-between shadow-xl shadow-blue-900/5 relative overflow-hidden"
        >
          <div>
            <div className="flex items-center justify-between mb-4 sm:mb-5">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center border border-cyan-200">
                  <Film className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-base font-bold text-[#082B59] tracking-wide">
                    Full-Cycle Video Production
                  </h3>
                  <span className="text-[10px] sm:text-[11px] font-medium text-slate-500">
                    Scriptwriting, Cinematography, Sound &amp; Color
                  </span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className="px-2.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all cursor-pointer flex items-center gap-1.5 text-xs font-semibold min-h-[36px]"
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5 text-slate-700" /> : <Play className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600" />}
                <span>{isPlaying ? 'PAUSE' : 'PLAY'}</span>
              </button>
            </div>

            {/* Frame Selector Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-4">
              {cinematicFrames.map((frame, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveFrame(idx)}
                  className={`px-3 py-2.5 rounded-xl text-xs font-semibold transition-all border text-left cursor-pointer truncate min-h-[42px] ${activeFrame === idx
                    ? 'bg-[#0866E8] text-white border-blue-500 shadow-sm'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                    }`}
                >
                  <span className="block truncate">{frame.title}</span>
                </button>
              ))}
            </div>

            {/* Multi-Track Timeline Visual */}
            <div className="rounded-2xl bg-slate-50 border border-slate-200 p-3 sm:p-4 text-xs space-y-2.5 sm:space-y-3 relative overflow-hidden">
              {/* Playhead */}
              <motion.div
                className="absolute top-0 bottom-0 w-0.5 bg-[#0866E8] z-20 pointer-events-none"
                animate={isPlaying ? { left: ['10%', '90%', '10%'] } : {}}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-2 h-2 bg-[#0866E8] rotate-45 -ml-0.75 -mt-0.5" />
              </motion.div>

              {/* Track V1 */}
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="w-6 sm:w-8 text-[10px] text-[#0866E8] font-bold shrink-0">V1</span>
                <div className="flex-1 h-8 sm:h-9 rounded-lg bg-blue-100/70 border border-blue-200 flex items-center px-2.5 sm:px-3 text-[11px] text-[#082B59] font-medium overflow-hidden justify-between">
                  <span className="truncate">Primary Cinematography &amp; Product Footage</span>
                  <span className="text-[10px] text-blue-700 hidden sm:inline shrink-0 ml-1">Video</span>
                </div>
              </div>

              {/* Track V2 */}
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="w-6 sm:w-8 text-[10px] text-cyan-700 font-bold shrink-0">V2</span>
                <div className="flex-1 h-8 sm:h-9 rounded-lg bg-cyan-100/70 border border-cyan-200 flex items-center px-2.5 sm:px-3 text-[11px] text-[#082B59] font-medium overflow-hidden justify-between">
                  <span className="truncate">B-Roll Sequences &amp; Lighting Design</span>
                  <span className="text-[10px] text-cyan-700 hidden sm:inline shrink-0 ml-1">Studio</span>
                </div>
              </div>

              {/* Track A1 */}
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="w-6 sm:w-8 text-[10px] text-slate-600 font-bold shrink-0">A1</span>
                <div className="flex-1 h-7 sm:h-8 rounded-lg bg-slate-100 border border-slate-200 flex items-center px-2.5 sm:px-3 text-[11px] text-slate-700 font-medium overflow-hidden justify-between">
                  <span className="truncate">Voiceover Narration &amp; Dialogue</span>
                  <span className="text-[10px] text-slate-500 hidden sm:inline shrink-0 ml-1">Voice</span>
                </div>
              </div>

              {/* Track A2 */}
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="w-6 sm:w-8 text-[10px] text-slate-600 font-bold shrink-0">A2</span>
                <div className="flex-1 h-7 sm:h-8 rounded-lg bg-slate-100 border border-slate-200 flex items-center px-2.5 sm:px-3 text-[11px] text-slate-700 font-medium overflow-hidden justify-between">
                  <span className="truncate">Soundtrack &amp; Audio Mastering</span>
                  <span className="text-[10px] text-slate-500 hidden sm:inline shrink-0 ml-1">Sound</span>
                </div>
              </div>
            </div>
          </div>

          {/* Process Badges */}
          <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-slate-100">
            <span className="text-[10px] sm:text-[11px] uppercase font-semibold text-slate-500 block mb-2">
              Production Process
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-[11px] font-semibold">
              <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-700">
                Scriptwriting
              </div>
              <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-700">
                Cinematography
              </div>
              <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-700">
                Editorial &amp; Color
              </div>
              <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-700">
                Audio Finishing
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Core Practice Capabilities Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-12 sm:mb-14 text-left">
        {[
          {
            title: 'Commercial Video Production',
            desc: 'Compelling product commercials and brand campaign videos designed to capture audience attention and communicate clear business value.',
            icon: Film,
            yMotion: cardY0
          },
          {
            title: 'Corporate Documentaries',
            desc: 'Authentic cinematic stories highlighting your company’s founding mission, leadership vision, operational depth, and client partnerships.',
            icon: Clapperboard,
            yMotion: cardY1
          },
          {
            title: 'Awareness & Educational Films',
            desc: 'Purpose-driven educational films—like our official Digital Jaal project—designed to explain complex topics like cyber fraud clearly.',
            icon: Aperture,
            yMotion: cardY2
          },
          {
            title: 'Complete Post-Production',
            desc: 'Expert editorial pacing, color grading, clean voiceover capture, original scoring, and audio mastering delivered in ready-to-broadcast formats.',
            icon: Sparkles,
            yMotion: cardY3
          }
        ].map((feat, idx) => {
          const Icon = feat.icon;
          return (
            <motion.div
              key={feat.title}
              style={{ y: feat.yMotion }}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-300 transition-all shadow-md hover:shadow-xl group"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform border border-cyan-200">
                <Icon className="w-5 h-5 text-cyan-700" />
              </div>
              <h4 className="text-base font-bold text-[#082B59] mb-2 leading-snug">
                {feat.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {feat.desc}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom CTA Bar */}
      <div className="text-center p-8 sm:p-12 rounded-3xl bg-[#082B59] text-white shadow-xl">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
          Bring Your Story to the Screen
        </h3>



        <button
          onClick={onOpenContact}
          className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#0866E8] hover:bg-[#0756C5] shadow-xs hover:shadow-md transition-all cursor-pointer"
        >
          <span>Discuss Your Video Project</span>
          <ArrowRight className="w-4 h-4" />
        </button>
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
          title: 'Film Production',
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
