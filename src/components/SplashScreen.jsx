import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function SplashScreen({ onFinish, duration = 2000 }) {
  useEffect(() => {
    // Lock scroll during splash screen safely
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    let isFinished = false;
    const finish = () => {
      if (isFinished) return;
      isFinished = true;
      document.body.style.overflow = originalOverflow || '';
      if (onFinish) onFinish();
    };

    // Primary timer for auto-dismiss
    const timer = setTimeout(finish, duration);

    // Fallback safety timer to ensure it never gets stuck
    const safetyTimer = setTimeout(finish, duration + 1000);

    return () => {
      clearTimeout(timer);
      clearTimeout(safetyTimer);
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
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        scale: 1.04, 
        filter: 'blur(12px)',
        transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } 
      }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#F4F8FD] select-none overflow-hidden cursor-pointer"
      title="Click anywhere to continue"
    >
      {/* 1. Ambient Background Theme Glows (White & Blue Palette) */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Central Pulsing Blue Halo */}
        <motion.div
          animate={{
            scale: [1, 1.18, 1],
            opacity: [0.35, 0.6, 0.35]
          }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-gradient-to-tr from-[#0866E8]/20 via-[#00B9E8]/25 to-transparent rounded-full blur-[110px]"
        />

        {/* Floating Ambient Corner Lights */}
        <motion.div 
          animate={{ x: [-20, 20, -20], y: [-15, 15, -15] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-24 -left-24 w-96 h-96 bg-blue-200/40 rounded-full blur-[100px]" 
        />
        <motion.div 
          animate={{ x: [20, -20, 20], y: [15, -15, 15] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-24 -right-24 w-96 h-96 bg-cyan-200/35 rounded-full blur-[100px]" 
        />

        {/* Subtle Isometric Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.28]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(8, 102, 232, 0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(8, 102, 232, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px'
          }}
        />
      </div>

      {/* 2. Central Animated Brand Hero */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-lg">
        
        {/* Glowing Halo Ring Behind Logo */}
        <div className="relative mb-6 sm:mb-8 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-gradient-to-tr from-[#0866E8]/25 to-[#00B9E8]/35 blur-xl pointer-events-none"
          />

          {/* Animated Expanding Shockwave Ring */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0.8 }}
            animate={{ scale: 1.45, opacity: 0 }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
            className="absolute w-32 h-32 sm:w-40 sm:h-40 rounded-full border border-[#00B9E8]/40 pointer-events-none"
          />

          {/* Official Brand Logo with Smooth Scale & Flare */}
          <motion.div
            initial={{ opacity: 0, scale: 0.82, filter: 'blur(10px)', y: 15 }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 p-4 sm:p-5 rounded-[32px] bg-white/85 backdrop-blur-xl border border-white shadow-[0_20px_50px_rgba(8,43,89,0.12)] flex items-center justify-center overflow-hidden"
          >
            {/* Shimmer Light Sweep across the logo */}
            <motion.div
              initial={{ x: '-150%' }}
              animate={{ x: '150%' }}
              transition={{ duration: 1.6, delay: 0.35, ease: 'easeInOut', repeat: Infinity, repeatDelay: 2.2 }}
              className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/80 to-transparent skew-x-12 pointer-events-none z-20"
            />

            <img
              src="/images/kuber_logo_transparent.png"
              alt="KUBER AIS TECHNOLOGIES"
              className="h-16 sm:h-20 w-auto object-contain relative z-10 drop-shadow-xs"
            />
          </motion.div>
        </div>

        {/* Animated Brand Title */}
        <motion.div
          initial={{ opacity: 0, y: 12, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#082B59] tracking-tight leading-tight mb-3">
            KUBER AIS{' '}
            <span className="bg-gradient-to-r from-[#0866E8] via-[#00B9E8] to-[#082B59] bg-clip-text text-transparent">
              TECHNOLOGIES
            </span>
          </h1>
        </motion.div>

        {/* Animated Expanding Divider Line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="w-40 sm:w-48 h-0.5 bg-gradient-to-r from-transparent via-[#00B9E8] to-transparent rounded-full mb-4 shadow-[0_0_10px_#00B9E8]"
        />

        {/* Animated Services Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center flex-wrap gap-2 text-xs sm:text-sm font-semibold text-slate-600"
        >
          <span className="text-[#0866E8]">Business Automation</span>
          <span className="text-slate-300">•</span>
          <span className="text-emerald-700">Cyber Security</span>
          <span className="text-slate-300">•</span>
          <span className="text-cyan-700">Film Production</span>
        </motion.div>

      </div>
    </motion.div>
  );
}
