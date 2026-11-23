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
  Users
} from 'lucide-react';
import ServiceVideoHero from './ServiceVideoHero';
import ServiceSpecificBackground from './ServiceSpecificBackground';

/* ========================================================================= */
/* 1. SUBJECT-BASED BACKGROUND: Business Automation (Light Theme)             */
/* ========================================================================= */
function AIServicesBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 select-none">
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#0866E8]/10 rounded-full blur-[140px]" />
      <div className="absolute bottom-1/3 right-1/4 w-[480px] h-[480px] bg-[#00B9E8]/10 rounded-full blur-[150px]" />
      <div className="absolute top-10 right-10 w-80 h-80 bg-blue-100/40 rounded-full blur-[120px]" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(8, 102, 232, 0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(8, 102, 232, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
    </div>
  );
}

/* ========================================================================= */
/* 2. SUBJECT-BASED BACKGROUND: Cyber Security (Light Theme)                 */
/* ========================================================================= */
function CyberSecurityBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 select-none">
      <div className="absolute top-1/4 right-1/4 w-[520px] h-[520px] bg-emerald-100/40 rounded-full blur-[140px]" />
      <div className="absolute bottom-1/4 left-1/4 w-[480px] h-[480px] bg-teal-100/30 rounded-full blur-[150px]" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-100/30 rounded-full blur-[100px]" />

      {/* Subtle blueprint security grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(16, 185, 129, 0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(16, 185, 129, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Watermark Shield Outline */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.04]">
        <Shield className="w-[450px] h-[450px] text-emerald-600" />
      </div>
    </div>
  );
}

/* ========================================================================= */
/* 3. SUBJECT-BASED BACKGROUND: Film Production (Light Theme)                */
/* ========================================================================= */
function AIFilmStudioBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 select-none">
      <div className="absolute top-1/4 left-1/4 w-[550px] h-[550px] bg-cyan-100/35 rounded-full blur-[140px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-100/35 rounded-full blur-[150px]" />
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-amber-100/25 rounded-full blur-[130px]" />

      <div
        className="absolute inset-0 opacity-[0.04]"
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
/* 4. BUSINESS AUTOMATION SERVICE DETAILS (Aller Studio High-End Motion)     */
/* ========================================================================= */
export function AIServicesExperience({ onOpenContact }) {
  const contentWrapperRef = useRef(null);
  const posterCardRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const [activeWorkflowTab, setActiveWorkflowTab] = useState(0);

  // Smooth mouse coordinates with spring-damping physics for tactile 3D tilting
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Aller Studio spring kinematics (responsive, smooth return without jarring bounce)
  const springX = useSpring(mouseX, { stiffness: 140, damping: 22, mass: 0.25 });
  const springY = useSpring(mouseY, { stiffness: 140, damping: 22, mass: 0.25 });

  // 3D perspective transforms
  const rotateX = useTransform(springY, [-1, 1], [4.5, -4.5]);
  const rotateY = useTransform(springX, [-1, 1], [-5.5, 5.5]);

  // Multilayer parallax offset
  const parallaxImgX = useTransform(springX, [-1, 1], [-8, 8]);
  const parallaxImgY = useTransform(springY, [-1, 1], [-8, 8]);
  const parallaxBadgeX = useTransform(springX, [-1, 1], [12, -12]);
  const parallaxBadgeY = useTransform(springY, [-1, 1], [10, -10]);

  // Spotlight reflection coordinate mapping
  const spotlightX = useTransform(springX, [-1, 1], ['15%', '85%']);
  const spotlightY = useTransform(springY, [-1, 1], ['15%', '85%']);

  // Scroll Progress Setup for Cinematic Depth
  const scrollYMotion = useMotionValue(0);
  const smoothScroll = useSpring(scrollYMotion, { stiffness: 90, damping: 24, mass: 0.4 });
  const scrollScale = useTransform(smoothScroll, [0, 600], [1, 1.02]);
  const scrollTranslateY = useTransform(smoothScroll, [0, 600], [0, -14]);

  // Touch device detection to cleanly disable cursor effects on mobile/touch
  const [isTouchDevice, setIsTouchDevice] = useState(false);

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

  const workflowStages = [
    {
      id: 'capture',
      tag: '01 / INTAKE',
      title: 'Multichannel Intake & Lead Capture',
      desc: 'Connect your website forms, WhatsApp Business API, and official email into a single unified queue so no client message goes unnoticed.',
      metric: '< 30s',
      metricLabel: 'Average Acknowledgment',
      badge: 'Real-time Sync'
    },
    {
      id: 'processing',
      tag: '02 / PIPELINE',
      title: 'Smart Routing & Staff Notifications',
      desc: 'Automatically categorize inquiries by department, alert designated managers via instant notifications, and assign follow-up tasks.',
      metric: '100%',
      metricLabel: 'Inquiries Assigned',
      badge: 'Zero Manual Entry'
    },
    {
      id: 'records',
      tag: '03 / DATABASE',
      title: 'Centralized Records & Cloud Sync',
      desc: 'Seamlessly synchronize customer interactions, lead timelines, and follow-up notes across spreadsheets and your CRM in real-time.',
      metric: 'Zero Loss',
      metricLabel: 'Data Retention',
      badge: 'Secure Cloud Master'
    }
  ];

  const benefits = [
    {
      icon: Clock,
      num: '01',
      title: 'Faster Customer Response',
      description: 'Ensure new inquiries from your website, WhatsApp, and email are acknowledged immediately so potential clients never feel ignored.'
    },
    {
      icon: Inbox,
      num: '02',
      title: 'Unified Inquiry Tracking',
      description: 'Keep all customer contact details, messages, and follow-up notes organized in one clear location instead of lost across separate inboxes.'
    },
    {
      icon: CheckCircle2,
      num: '03',
      title: 'Elimination of Manual Tasks',
      description: 'Eliminate repetitive copy-pasting between spreadsheets, forms, and email so your team can focus on client service and real business.'
    },
    {
      icon: Users,
      num: '04',
      title: 'Coordinated Team Execution',
      description: 'Automatically notify the right staff member when action is needed, keeping everyone aligned on next steps and pending tasks.'
    }
  ];

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-12 sm:pb-16 text-[#082B59]">
      <AIServicesBackground />

      {/* Hero Header with Aller Studio Kinetic Editorial Hierarchy */}
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-4xl mx-auto mb-10 sm:mb-14 relative z-20"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#0866E8] bg-blue-50/90 border border-blue-200/80 mb-4 tracking-wide shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-[#0866E8] animate-pulse" />
          <span className="tracking-widest uppercase text-[11px]">Workflow Architecture</span>
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#082B59] tracking-tight leading-[1.12] mb-4 sm:mb-5">
          Business Automation <span className="text-[#0866E8]">&amp; Operations</span>
        </h1>
        <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
          Connected systems and organized automated workflows to help your business respond faster, reduce repetitive data entry, and keep customer records organized.
        </p>
      </motion.div>

      {/* Dedicated Content Wrapper with Interactive 3D Card & Spotlight */}
      <div
        ref={contentWrapperRef}
        className="relative rounded-[32px] sm:rounded-[40px] p-1 sm:p-4 lg:p-6"
      >
        {/* Main Overview Showcase Card */}
        <motion.div
          style={{
            y: scrollTranslateY
          }}
          className="relative z-10 rounded-[28px] sm:rounded-[36px] bg-white border border-slate-200/90 p-6 sm:p-10 lg:p-12 shadow-xl shadow-blue-900/5 mb-12 sm:mb-16 overflow-hidden"
        >
          {/* Subtle Dynamic Ambient Lighting Grid */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.035]"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(8, 102, 232, 0.4) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(8, 102, 232, 0.4) 1px, transparent 1px)
              `,
              backgroundSize: '36px 36px'
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center text-left relative z-10">
            {/* Left: Aller Studio Style Spatial 3D Card with Floating HUD Badges */}
            <div className="lg:col-span-6 flex justify-center w-full">
              <div 
                className="w-full relative"
                style={{ perspective: 1200 }}
              >
                {/* Floating HUD Indicator (Floating in Front of Card) */}
                <motion.div
                  style={(isTouchDevice || shouldReduceMotion) ? {} : {
                    x: parallaxBadgeX,
                    y: parallaxBadgeY,
                    translateZ: 30
                  }}
                  className="hidden sm:flex absolute -top-4 -left-3 z-30 pointer-events-none items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 border border-blue-200/90 shadow-lg text-[11px] font-bold text-[#082B59] select-none"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="tracking-wider uppercase text-[10px]">LIVE WORKFLOW READY</span>
                </motion.div>

                {/* 3D Interactive Card */}
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
                  className="relative rounded-[22px] sm:rounded-[26px] aspect-[16/10] w-full bg-slate-900 border border-slate-200/90 shadow-xl shadow-blue-900/10 group overflow-hidden cursor-default transition-shadow duration-500 hover:shadow-2xl hover:shadow-blue-900/15"
                >
                  {/* The Original Poster Image with subtle parallax */}
                  <motion.img
                    src="/assets/ai-services.webp"
                    alt="Business Automation and Workflow Management"
                    style={(isTouchDevice || shouldReduceMotion) ? {} : {
                      x: parallaxImgX,
                      y: parallaxImgY,
                      scale: 1.06
                    }}
                    className="w-full h-full object-cover object-center rounded-[20px] sm:rounded-[24px] relative z-10 pointer-events-none select-none transition-transform duration-700 ease-out"
                  />

                  {/* Aller Studio Kinetic Spotlight Sheen (Follows Cursor Smoothly) */}
                  {!isTouchDevice && !shouldReduceMotion && (
                    <motion.div
                      style={{
                        background: `radial-gradient(circle 280px at ${spotlightX} ${spotlightY}, rgba(255, 255, 255, 0.22), transparent 75%)`,
                        x: parallaxImgX,
                        y: parallaxImgY
                      }}
                      className="absolute inset-0 pointer-events-none z-20 mix-blend-overlay opacity-75"
                    />
                  )}

                  {/* Clean natural bottom vignette to preserve contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none z-20" />
                </motion.div>
              </div>
            </div>

            {/* Right: Overview Text & Interactive Pillar Tabs */}
            <div className="lg:col-span-6 flex flex-col justify-center relative z-20">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#0866E8] mb-2 block">
                Enterprise Reliability • Handcrafted Automation
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#082B59] mb-4 leading-snug">
                Practical Workflow Solutions Built for Real Businesses
              </h2>
              <div className="space-y-3.5 text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed font-normal mb-6">
                <p>
                  Everyday operations often get slowed down by missed customer messages, disorganized contact sheets, and repetitive manual tasks that take hours away from serving clients.
                </p>
                <p>
                  We help businesses connect their existing tools—including website forms, WhatsApp, email, spreadsheets, and CRM—into one reliable, straightforward workflow. Your team stays informed with instant notifications, customer details are saved neatly, and follow-ups happen on time.
                </p>
              </div>

              {/* Quick Action Button */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={onOpenContact}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#0866E8] hover:bg-[#0756C5] shadow-xs hover:shadow-md transition-all cursor-pointer min-h-[44px]"
                >
                  <span>Book Automation Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Aller Studio Style Interactive Workflow Architecture Stage */}
        <div className="mb-12 sm:mb-16 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0866E8] mb-1.5 block">
              Execution Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#082B59] tracking-tight">
              Three-Stage Automation Flow
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2">
              Explore how incoming client inquiries are captured, processed, and preserved without friction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {workflowStages.map((stage, idx) => {
              const isActive = activeWorkflowTab === idx;
              return (
                <motion.div
                  key={stage.id}
                  onClick={() => setActiveWorkflowTab(idx)}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className={`p-6 sm:p-7 rounded-[24px] border transition-all duration-300 cursor-pointer flex flex-col justify-between text-left relative overflow-hidden group ${
                    isActive
                      ? 'bg-white border-[#0866E8] shadow-xl shadow-blue-900/8'
                      : 'bg-white/80 border-slate-200/90 hover:border-slate-300 hover:bg-white shadow-md'
                  }`}
                >
                  {/* Subtle top indicator bar */}
                  <div className={`h-1 w-12 rounded-full mb-4 transition-all duration-300 ${isActive ? 'bg-[#0866E8] w-20' : 'bg-slate-200'}`} />

                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        {stage.tag}
                      </span>
                      <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${
                        isActive
                          ? 'bg-blue-50 text-[#0866E8] border-blue-200'
                          : 'bg-slate-100 text-slate-500 border-slate-200'
                      }`}>
                        {stage.badge}
                      </span>
                    </div>

                    <h3 className={`text-base sm:text-lg font-bold mb-2.5 transition-colors leading-snug ${
                      isActive ? 'text-[#0866E8]' : 'text-[#082B59]'
                    }`}>
                      {stage.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
                      {stage.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-[#082B59] block">
                        {stage.metric}
                      </span>
                      <span className="text-[10px] text-slate-400 block uppercase">
                        {stage.metricLabel}
                      </span>
                    </div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                      isActive ? 'bg-[#0866E8] text-white shadow-sm' : 'bg-slate-100 text-slate-400'
                    }`}>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Key Business Benefits Cards Grid with Aller Studio Minimal Numbering & Hover Lift */}
        <div className="mb-12 sm:mb-16 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0866E8] mb-1.5 block">
              Tangible Value
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#082B59] tracking-tight">
              Key Business Benefits
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 text-left items-stretch">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-[24px] bg-white border border-slate-200/90 hover:border-blue-300 p-6 sm:p-7 transition-all duration-300 shadow-md hover:shadow-xl flex flex-col justify-between group relative overflow-hidden"
                >
                  {/* Subtle Corner Numbering */}
                  <span className="absolute top-4 right-5 text-xl font-black text-slate-100 group-hover:text-blue-50 transition-colors pointer-events-none select-none">
                    {benefit.num}
                  </span>

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
            <p className="text-slate-300 text-sm sm:text-base mb-6 leading-relaxed">
              Connect with our team to discuss customized workflow setups, data synchronization, or automated customer response systems.
            </p>
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
        <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200/80 mb-3.5 sm:mb-4">
          <ShieldAlert className="w-3.5 h-3.5 text-emerald-600" />
          <span>Cyber Security &amp; Risk Protection</span>
        </span>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#082B59] tracking-tight leading-[1.15] mb-3.5 sm:mb-5">
          Proactive Security &amp; Protection for{' '}
          <span className="text-emerald-600">
            Business Operations
          </span>
        </h1>

      </motion.div>

      {/* Centerpiece Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch mb-12 sm:mb-16">
        {/* Left Column: Protection Visual Asset */}
        <motion.div
          initial={{ opacity: 1, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 rounded-[24px] sm:rounded-[28px] bg-white border border-slate-200/90 p-5 sm:p-8 relative overflow-hidden shadow-xl shadow-blue-900/5 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-5 sm:mb-6">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-base font-bold text-[#082B59] tracking-wide">
                    Account &amp; Transaction Protection
                  </h3>
                  <span className="text-[10px] sm:text-[11px] font-medium text-emerald-600">
                    Proactive Safeguards for Day-to-Day Operations
                  </span>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1.5 shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Active Safeguards
              </span>
            </div>

            {/* Video / Poster Stage */}
            <div className="my-3 sm:my-4 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
              <ServiceVideoHero
                serviceKey="cyber-security"
                poster="/assets/cybersecurity-2023-social_uvx3rt.png"
                title="Cyber Security"
              />
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-3.5 sm:pt-4 border-t border-slate-100">
            <div className="p-2 sm:p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
              <span className="text-[9px] sm:text-[10px] uppercase font-semibold text-slate-500 block mb-0.5">Primary Focus</span>
              <span className="text-xs sm:text-base font-bold text-[#082B59]">Account Safety</span>
            </div>
            <div className="p-2 sm:p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
              <span className="text-[9px] sm:text-[10px] uppercase font-semibold text-slate-500 block mb-0.5">Staff Training</span>
              <span className="text-xs sm:text-base font-bold text-emerald-700">Phishing &amp; Scams</span>
            </div>
            <div className="p-2 sm:p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
              <span className="text-[9px] sm:text-[10px] uppercase font-semibold text-slate-500 block mb-0.5">Helpline Support</span>
              <span className="text-xs sm:text-base font-bold text-[#0866E8]">Dial 1930</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Threat Prevention Checklist & Helpline */}
        <motion.div
          initial={{ opacity: 1, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 rounded-[24px] sm:rounded-[28px] bg-white border border-slate-200/90 p-5 sm:p-8 flex flex-col justify-between shadow-xl shadow-blue-900/5 relative overflow-hidden"
        >
          <div>
            <div className="flex items-center justify-between mb-4 sm:mb-5">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-200">
                  <Radar className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-base font-bold text-[#082B59] tracking-wide">
                    Common Threats We Help Businesses Prevent
                  </h3>
                  <span className="text-[10px] sm:text-[11px] font-medium text-slate-500">
                    Proactive Defenses for Financial Safety &amp; Business Trust
                  </span>
                </div>
              </div>
            </div>

            {/* Practical Security Checklist */}
            <div className="space-y-2 text-xs mb-5 sm:mb-6">
              {protectionAreas.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2 text-slate-700 hover:bg-emerald-50/30 transition-colors"
                >
                  <div className="truncate">
                    <span className="font-bold text-[#082B59] truncate text-[11px] sm:text-xs block mb-0.5">{item.category}</span>
                    <span className="text-[11px] text-slate-500 block truncate">{item.guidance}</span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${item.badgeClass}`}>
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* National Cyber Helpline Notice */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50/50 border border-emerald-200/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
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
          </div>

          {/* Defense Best Practices Badges */}
          <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-slate-100">
            <span className="text-[10px] sm:text-[11px] uppercase font-semibold text-slate-500 block mb-2">
              Security Best Practices
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-[11px] font-semibold">
              <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-700">
                Multi-Factor Logins
              </div>
              <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-700">
                Email Authentication
              </div>
              <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-700">
                Encrypted Backups
              </div>
              <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-700">
                Employee Training
              </div>
            </div>
          </div>
        </motion.div>
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
        <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-cyan-800 bg-cyan-50 border border-cyan-200/80 mb-3.5 sm:mb-4">
          <Clapperboard className="w-3.5 h-3.5 text-cyan-700" />
          <span>Film &amp; Video Production</span>
        </span>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#082B59] tracking-tight leading-[1.15] mb-3.5 sm:mb-5">
          Corporate Films, Commercials &amp;{' '}
          <span className="text-[#0866E8]">
            Visual Storytelling
          </span>
        </h1>
        <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed max-w-2xl mx-auto font-normal">
          We produce brand commercials, corporate documentaries, and awareness films with deliberate creative direction, cinematic production, and polished post-production.
        </p>
      </motion.div>

      {/* Main Interactive Stage Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch mb-12 sm:mb-16">
        {/* Left Column: Camera Viewfinder */}
        <motion.div
          style={{ y: leftCardY }}
          initial={{ opacity: 1, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 rounded-[24px] sm:rounded-[28px] bg-white border border-slate-200/90 p-5 sm:p-8 relative overflow-hidden shadow-xl shadow-blue-900/5 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-5 sm:mb-6">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center border border-cyan-200">
                  <Aperture className="w-5 h-5 text-cyan-700" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-base font-bold text-[#082B59] tracking-wide">
                    Commercial &amp; Corporate Production
                  </h3>
                  <span className="text-[10px] sm:text-[11px] font-medium text-slate-500">
                    From Script Development to Final Color Grade
                  </span>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-cyan-50 text-cyan-800 border border-cyan-200 flex items-center gap-1.5 shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-600" />
                Studio Production
              </span>
            </div>

            {/* Video Hero */}
            <div className="my-3 sm:my-4 rounded-2xl overflow-hidden border border-slate-200 bg-slate-100">
              <ServiceVideoHero
                serviceKey="film-production"
                poster={currentFrame.src || "/assets/ai-film-studio-hero.webp"}
                title="Film Production"
                imageMotionStyle={{ y: imageParallaxY, scale: imageScale }}
              />
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-3.5 sm:pt-4 border-t border-slate-100">
            <div className="p-2 sm:p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
              <span className="text-[9px] sm:text-[10px] uppercase font-semibold text-slate-500 block mb-0.5">Production Quality</span>
              <span className="text-xs sm:text-base font-bold text-[#082B59]">Cinema 4K &amp; HD</span>
            </div>
            <div className="p-2 sm:p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
              <span className="text-[9px] sm:text-[10px] uppercase font-semibold text-slate-500 block mb-0.5">Creative Workflow</span>
              <span className="text-xs sm:text-base font-bold text-cyan-700">Script to Master</span>
            </div>
            <div className="p-2 sm:p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
              <span className="text-[9px] sm:text-[10px] uppercase font-semibold text-slate-500 block mb-0.5">Audio Mastering</span>
              <span className="text-xs sm:text-base font-bold text-[#0866E8]">Studio Voice &amp; Mix</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Timeline & Production Stages */}
        <motion.div
          style={{ y: rightCardY }}
          initial={{ opacity: 1, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 rounded-[24px] sm:rounded-[28px] bg-white border border-slate-200/90 p-5 sm:p-8 flex flex-col justify-between shadow-xl shadow-blue-900/5 relative overflow-hidden"
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
        <p className="text-sm text-slate-300 max-w-xl mx-auto mb-6 leading-relaxed">
          Tell us about your audience and project goals. We will help you plan, write, and produce video content that strengthens your brand presence.
        </p>
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
