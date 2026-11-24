import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  ArrowRight
} from 'lucide-react';
import AllerHumanSilhouette from './AllerHumanSilhouette';

export default function Hero({ onOpenModal }) {
  const shouldReduceMotion = useReducedMotion();

  // Creative Agency Staggered Reveal Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: shouldReduceMotion ? 0 : 0.08
      }
    }
  };

  const textItemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="home" className="relative pt-24 pb-14 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#F4F8FD] via-white to-[#F4F8FD] flex items-center justify-center min-h-[68vh] sm:min-h-[74vh]">
      
      {/* Subtle Abstract Background Accents */}
      <div className="absolute inset-0 bg-grid-mesh pointer-events-none -z-10 opacity-40" />
      
      <div className="absolute top-8 left-1/2 -translate-x-1/2 w-[600px] sm:w-[750px] h-[300px] bg-gradient-to-b from-blue-100/25 via-slate-100/20 to-transparent rounded-[100%] blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/4 left-10 w-[360px] h-[360px] bg-blue-50/60 rounded-full blur-2xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[360px] h-[360px] bg-sky-50/60 rounded-full blur-2xl pointer-events-none -z-10" />

      {/* Aller Studio 3D Human Particle Silhouette Animation (Compact, clean proportion, fully inside hero) */}
      <div className="absolute top-1/2 -translate-y-[45%] right-0 sm:right-[15px] md:right-[30px] lg:right-[50px] xl:right-[80px] w-[200px] sm:w-[260px] md:w-[320px] lg:w-[380px] xl:w-[420px] h-[280px] sm:h-[360px] md:h-[440px] lg:h-[500px] xl:h-[540px] pointer-events-none z-0 opacity-80 sm:opacity-95 overflow-visible">
        <AllerHumanSilhouette className="w-full h-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        
        {/* CENTERED HERO CONTENT */}
        <div className="max-w-3xl lg:max-w-4xl mx-auto text-center flex flex-col items-center justify-center">
          
          {/* Staggered Natural Headline Reveal */}
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-3xl sm:text-5xl md:text-5xl lg:text-[3.5rem] xl:text-[3.85rem] font-bold text-[#082B59] leading-[1.14] tracking-tight mb-5 sm:mb-7 text-center"
            style={{ textWrap: 'balance' }}
          >
            <motion.span variants={textItemVariants} className="inline-block mr-2 sm:mr-3.5 drop-shadow-xs">
              Practical Technology for
            </motion.span>
            <motion.span variants={textItemVariants} className="inline-block text-[#0866E8] drop-shadow-xs">
              Modern Businesses.
            </motion.span>
          </motion.h1>

          {/* CTA Buttons with Tactile Hover Interaction */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto"
          >
            <motion.div
              whileHover={shouldReduceMotion ? {} : { y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto"
            >
              <Link
                to="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-white bg-[#0866E8] hover:bg-[#0756C5] shadow-xs hover:shadow-md transition-all duration-200"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              whileHover={shouldReduceMotion ? {} : { y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto"
            >
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-[#082B59] bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 shadow-xs hover:shadow-sm transition-all duration-200"
              >
                <span>Get Free Consultation</span>
              </Link>
            </motion.div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
