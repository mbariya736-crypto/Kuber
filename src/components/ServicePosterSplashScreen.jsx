import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, ShieldCheck, Film, ArrowRight, Sparkles } from 'lucide-react';

/**
 * ServicePosterSplashScreen
 * 
 * Poster-driven splash screen displayed when opening an individual service page.
 * Features the service's poster artwork with holographic scanning light,
 * dynamic glowing aura, brand typography, and smooth page entrance transition.
 */
export default function ServicePosterSplashScreen({ serviceId = 'ai-services', onComplete }) {
  const posterConfigs = {
    'ai-services': {
      title: 'AI & Business Automation',
      subtitle: 'Intelligent Workflows • Autonomous Operations • System Integration',
      posterImage: '/assets/ai-services-poster.jpg',
      icon: Bot,
      themeColor: '#0866E8',
      accentGlow: 'from-[#0866E8]/35 via-[#00B9E8]/30 to-transparent',
      borderColor: 'border-blue-400/40',
      badgeBg: 'bg-blue-500/15 text-blue-300 border-blue-400/30',
      scanBeamColor: 'from-transparent via-cyan-400/40 to-transparent',
    },
    'cyber-security': {
      title: 'Cyber Security Services',
      subtitle: 'Defense Protocols • Vulnerability Audits • Threat Prevention',
      posterImage: '/assets/cybersecurity-2023-social_uvx3rt.png',
      icon: ShieldCheck,
      themeColor: '#059669',
      accentGlow: 'from-[#059669]/35 via-emerald-400/25 to-transparent',
      borderColor: 'border-emerald-400/40',
      badgeBg: 'bg-emerald-500/15 text-emerald-300 border-emerald-400/30',
      scanBeamColor: 'from-transparent via-emerald-400/40 to-transparent',
    },
    'ai-films': {
      title: 'AI Film & Video Production',
      subtitle: 'Cinematic Storytelling • AI Visual Generation • Commercial Media',
      posterImage: '/assets/Futuristic-studio-for-AI-driven-creations.webp',
      icon: Film,
      themeColor: '#00B9E8',
      accentGlow: 'from-[#00B9E8]/35 via-amber-400/25 to-transparent',
      borderColor: 'border-cyan-400/40',
      badgeBg: 'bg-cyan-500/15 text-cyan-300 border-cyan-400/30',
      scanBeamColor: 'from-transparent via-amber-400/40 to-transparent',
    }
  };

  const config = posterConfigs[serviceId] || posterConfigs['ai-services'];
  const Icon = config.icon;

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete?.();
    }, 1800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#061528] text-white overflow-hidden select-none p-4 sm:p-6"
    >
      {/* Background Animated Gradient Aura */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.6, 0.35]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className={`absolute w-[680px] h-[680px] rounded-full blur-[140px] bg-gradient-to-tr ${config.accentGlow} pointer-events-none -z-10`}
      />

      {/* Cyber Grid Texture */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Main Glassmorphic Poster Stage */}
      <div className="relative max-w-lg w-full flex flex-col items-center text-center z-10">

        {/* Poster Showcase Container with Laser Scanning Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 14 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className={`relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden border shadow-2xl bg-black/60 mb-6 group ${config.borderColor}`}
        >
          {/* Service Poster Image with Gentle Zoom */}
          <motion.img
            src={config.posterImage}
            alt={config.title}
            animate={{ scale: [1, 1.05] }}
            transition={{ duration: 2.2, ease: 'easeOut' }}
            className="w-full h-full object-cover object-center filter brightness-105 contrast-110"
          />

          {/* Vignette Shadow Frame */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

          {/* Holographic Laser Sweep Bar */}
          <motion.div
            initial={{ x: '-150%' }}
            animate={{ x: '250%' }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
              repeatDelay: 0.4
            }}
            className={`absolute inset-y-0 w-32 bg-gradient-to-r ${config.scanBeamColor} skew-x-[-20deg] pointer-events-none`}
          />

          {/* Corner Tech Accents */}
          <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-white/60 pointer-events-none" />
          <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-white/60 pointer-events-none" />
          <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-white/60 pointer-events-none" />
          <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-white/60 pointer-events-none" />

          {/* Bottom Overlay Label */}
          <div className="absolute bottom-3.5 left-4 right-4 text-left pointer-events-none">
            <p className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-slate-300">
              Opening Service Environment
            </p>
            <h4 className="text-sm sm:text-base font-bold text-white tracking-wide truncate">
              {config.title}
            </h4>
          </div>
        </motion.div>

        {/* Service Title & Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2"
        >
          {config.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto mb-6 leading-relaxed"
        >
          {config.subtitle}
        </motion.p>

        {/* Optional Skip Button (Loading line completely removed) */}
        <button
          onClick={() => onComplete?.()}
          className="text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer px-3.5 py-1.5 rounded-lg hover:bg-white/10 flex items-center gap-1.5 border border-white/10"
        >
          <span>Skip</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

      </div>
    </motion.div>
  );
}
