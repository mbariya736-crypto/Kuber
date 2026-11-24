import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Shield, Film, Bot } from 'lucide-react';

const serviceSplashConfigs = {
  'ai-services': {
    title: 'AI & Business Automation',
    subtitle: 'Intelligent Workflows & Automated Systems',
    image: '/assets/services-splash.png',
    badge: 'AI & AUTOMATION SERVICES',
    icon: Bot,
    glowBg: 'from-[#0866E8]/35 via-[#00B9E8]/30 to-transparent',
    borderCol: 'border-cyan-400/40 shadow-[0_0_55px_rgba(8,102,232,0.45)]',
    barGradient: 'from-[#0866E8] via-[#00B9E8] to-cyan-300 shadow-[0_0_12px_rgba(0,185,232,0.8)]',
    tagStyle: 'text-cyan-300 bg-white/10 border-cyan-400/30'
  },
  'cyber-security': {
    title: 'Cyber Security Services',
    subtitle: 'Defense Audits, Phishing Training & Account Protection',
    image: '/assets/cybersecurity-2023-social_uvx3rt.png',
    badge: 'CYBER SECURITY SERVICES',
    icon: Shield,
    glowBg: 'from-[#059669]/35 via-[#10B981]/30 to-transparent',
    borderCol: 'border-emerald-400/40 shadow-[0_0_55px_rgba(16,185,129,0.4)]',
    barGradient: 'from-[#059669] via-[#10B981] to-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.8)]',
    tagStyle: 'text-emerald-300 bg-white/10 border-emerald-400/30'
  },
  'ai-films': {
    title: 'AI Film & Video Production',
    subtitle: 'Commercial Brand Media & Corporate Documentaries',
    image: '/assets/ai-film-studio-hero.webp',
    badge: 'AI FILM & MEDIA SERVICES',
    icon: Film,
    glowBg: 'from-[#D97706]/35 via-[#F59E0B]/30 to-transparent',
    borderCol: 'border-amber-400/40 shadow-[0_0_55px_rgba(245,158,11,0.4)]',
    barGradient: 'from-[#D97706] via-[#F59E0B] to-amber-300 shadow-[0_0_12px_rgba(245,158,11,0.8)]',
    tagStyle: 'text-amber-300 bg-white/10 border-amber-400/30'
  },
  'services': {
    title: 'KUBER AIS Enterprise Services',
    subtitle: 'AI & Automation • Cyber Security • AI Films',
    image: '/assets/services-splash.png',
    badge: 'OUR SERVICES',
    icon: Sparkles,
    glowBg: 'from-[#0866E8]/35 via-[#00B9E8]/30 to-transparent',
    borderCol: 'border-cyan-400/40 shadow-[0_0_55px_rgba(8,102,232,0.45)]',
    barGradient: 'from-[#0866E8] via-[#00B9E8] to-cyan-300 shadow-[0_0_12px_rgba(0,185,232,0.8)]',
    tagStyle: 'text-cyan-300 bg-white/10 border-cyan-400/30'
  }
};

export default function ServicesSplashScreen({ serviceId = 'services', onFinish, duration = 1500 }) {
  const config = serviceSplashConfigs[serviceId] || serviceSplashConfigs['services'];
  const Icon = config.icon;

  useEffect(() => {
    // Lock scroll safely during splash screen
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    let isFinished = false;
    const finish = () => {
      if (isFinished) return;
      isFinished = true;
      document.body.style.overflow = originalOverflow || '';
      if (onFinish) onFinish();
    };

    const timer = setTimeout(finish, duration);
    const fallbackTimer = setTimeout(finish, duration + 800);

    return () => {
      clearTimeout(timer);
      clearTimeout(fallbackTimer);
      document.body.style.overflow = originalOverflow || '';
    };
  }, [duration, onFinish]);

  const handleDismiss = () => {
    document.body.style.overflow = '';
    if (onFinish) onFinish();
  };

  return (
    <motion.div
      onClick={handleDismiss}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.04,
        filter: 'blur(8px)',
        transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] }
      }}
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#07172E]/95 backdrop-blur-xl select-none overflow-hidden cursor-pointer"
      title="Click anywhere to continue"
    >
      {/* 1. Theme-Specific Ambient Glowing Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Central glowing pulse aura */}
        <motion.div
          animate={{
            scale: [1, 1.22, 1],
            opacity: [0.35, 0.65, 0.35]
          }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr ${config.glowBg} rounded-full blur-[130px]`}
        />

        {/* Ambient Top Light Beam */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#00B9E8]/20 rounded-full blur-[120px]" />

        {/* Cyber Grid Matrix */}
        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 185, 232, 0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(8, 102, 232, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* 2. Main Animated Showcase Card */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-xl w-full">
        {/* Brand Tag Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full border text-xs font-semibold tracking-wider uppercase mb-4 backdrop-blur-md shadow-xs ${config.tagStyle}`}
        >
          <Icon className="w-3.5 h-3.5 animate-pulse" />
          <span>{config.badge}</span>
        </motion.div>

        {/* Animated Poster Card with Neon Glow, Holographic Scan, and Floating Hover */}
        <motion.div
          initial={{ scale: 0.88, opacity: 0, y: 16 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.19, 1, 0.22, 1] }}
          className={`relative w-full aspect-[16/10] max-w-[480px] rounded-2xl sm:rounded-3xl overflow-hidden border bg-slate-900 group ${config.borderCol}`}
        >
          {/* Continuous floating micro-hover effect */}
          <motion.div
            animate={{ y: [-3, 3, -3] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-full h-full relative"
          >
            {/* The Dedicated Service Poster Artwork */}
            <img
              src={config.image}
              alt={config.title}
              className="w-full h-full object-cover object-center"
            />

            {/* Subtle Vignette Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#07172E]/40 via-transparent to-transparent pointer-events-none" />

            {/* Holographic Laser Scanning Sweep Animation (1.5s rhythm) */}
            <motion.div
              animate={{
                x: ['-120%', '220%']
              }}
              transition={{
                duration: 1.3,
                repeat: Infinity,
                ease: 'easeInOut',
                repeatDelay: 0.2
              }}
              className="absolute inset-y-0 w-28 bg-gradient-to-r from-transparent via-white/35 to-transparent skew-x-[-20deg] pointer-events-none"
            />

            {/* Pulsing Highlight Overlay */}
            <motion.div
              animate={{
                opacity: [0.35, 0.75, 0.35],
                scale: [0.98, 1.02, 0.98]
              }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0 bg-radial from-white/10 via-transparent to-transparent pointer-events-none"
            />
          </motion.div>

          {/* Border Glow Shimmer */}
          <div className="absolute inset-0 rounded-2xl sm:rounded-3xl ring-1 ring-inset ring-white/20 pointer-events-none" />
        </motion.div>

        {/* Service Title & Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-5 mb-3"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            {config.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 font-normal mt-1 tracking-wide">
            {config.subtitle}
          </p>
        </motion.div>

        {/* 3. 1.5-Second Snappy Progress Bar */}
        <div className="w-52 sm:w-60 mt-1">
          <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/15 backdrop-blur-sm">
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: duration / 1000, ease: [0.22, 1, 0.36, 1] }}
              className={`h-full rounded-full bg-gradient-to-r ${config.barGradient}`}
            />
          </div>
          <p className="text-[10px] text-slate-400 mt-2 font-medium tracking-wider uppercase">
            Loading • Click to skip
          </p>
        </div>
      </div>
    </motion.div>
  );
}
