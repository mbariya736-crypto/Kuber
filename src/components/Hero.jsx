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
    <section id="home" className="relative pt-20 pb-0 sm:pt-28 sm:pb-0 md:pt-32 md:pb-12 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#F4F8FD] via-white to-[#F4F8FD] flex items-center justify-center min-h-[68vh] sm:min-h-[74vh]">
      
      {/* Subtle Abstract Background Accents */}
      <div className="absolute inset-0 bg-grid-mesh pointer-events-none -z-10 opacity-40" />
      
      <div className="absolute top-8 left-1/2 -translate-x-1/2 w-[600px] sm:w-[750px] h-[300px] bg-gradient-to-b from-blue-100/25 via-slate-100/20 to-transparent rounded-[100%] blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/4 left-10 w-[360px] h-[360px] bg-blue-50/60 rounded-full blur-2xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[360px] h-[360px] bg-sky-50/60 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        
        {/* BALANCED EDITORIAL HERO GRID: Content on Left, Sized 3D Silhouette on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-8 xl:gap-12">
          
          {/* LEFT COLUMN: Main Value Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Staggered Natural Headline Reveal */}
            <motion.h1
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-3xl sm:text-5xl md:text-5xl lg:text-[3.25rem] xl:text-[3.65rem] font-bold text-[#082B59] leading-[1.14] tracking-tight mb-6 sm:mb-8"
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
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 w-full sm:w-auto"
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

          {/* RIGHT COLUMN: 3D Human Particle Silhouette (Filling the designated zone down to the hero base) */}
          <div className="lg:col-span-5 flex items-end justify-center lg:justify-end w-full relative mt-4 sm:mt-6 lg:mt-0">
            {/* Ambient Luminous Halo behind the 3D Bust */}
            <div className="absolute w-[320px] sm:w-[400px] lg:w-[480px] h-[320px] sm:h-[400px] lg:h-[480px] bg-gradient-to-tr from-blue-100/40 via-sky-100/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

            <div className="relative w-[290px] xs:w-[320px] sm:w-[380px] md:w-[400px] lg:w-[420px] xl:w-[460px] h-[380px] xs:h-[420px] sm:h-[470px] md:h-[500px] lg:h-[530px] xl:h-[570px] pointer-events-auto z-10 opacity-95 [mask-image:linear-gradient(to_bottom,black_86%,transparent_100%)]">
              <AllerHumanSilhouette className="w-full h-full" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
