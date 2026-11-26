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
    <section id="home" className="relative pt-20 pb-3 xs:pt-22 xs:pb-4 sm:pt-28 sm:pb-6 md:pt-28 md:pb-8 lg:pt-24 lg:pb-8 overflow-hidden bg-gradient-to-b from-[#F4F8FD] via-white to-[#F4F8FD] flex items-center justify-center min-h-0 sm:min-h-[55vh] lg:min-h-[60vh]">

      {/* Subtle Abstract Background Accents */}
      <div className="absolute inset-0 bg-grid-mesh pointer-events-none -z-10 opacity-40" />

      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[600px] sm:w-[750px] h-[260px] bg-gradient-to-b from-blue-100/25 via-slate-100/20 to-transparent rounded-[100%] blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/4 left-10 w-[300px] h-[300px] bg-blue-50/60 rounded-full blur-2xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-sky-50/60 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">

        {/* BALANCED EDITORIAL HERO GRID: Content on Left, Sized 3D Silhouette on Right (Side-by-side on all screens including mobile) */}
        <div className="grid grid-cols-12 items-center gap-2 xs:gap-3 sm:gap-6 lg:gap-8">

          {/* LEFT COLUMN: Main Value Proposition & CTAs */}
          <div className="col-span-7 xs:col-span-7 sm:col-span-7 md:col-span-7 flex flex-col items-start text-left">

            {/* Staggered Natural Headline Reveal */}
            <motion.h1
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-[1.3rem] xs:text-2xl sm:text-3xl md:text-4xl lg:text-[2.85rem] xl:text-[3.25rem] font-bold text-[#082B59] leading-[1.14] sm:leading-[1.16] tracking-tight mb-2.5 xs:mb-3 sm:mb-5 text-left"
              style={{ textWrap: 'balance' }}
            >
              <motion.span variants={textItemVariants} className="block xs:inline-block mr-1 sm:mr-3 drop-shadow-xs">
                Practical Technology for
              </motion.span>
              <motion.span variants={textItemVariants} className="inline-block text-[#0866E8] drop-shadow-xs">
                Modern Businesses.
              </motion.span>
            </motion.h1>

            {/* CTA Buttons: Compact desktop-style buttons side-by-side or stacked cleanly on ultra-narrow screens */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col xs:flex-row flex-wrap sm:flex-nowrap items-start gap-1.5 xs:gap-2 sm:gap-3.5 w-auto"
            >
              <motion.div
                whileHover={shouldReduceMotion ? {} : { y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="shrink-0"
              >
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-1 xs:gap-1.5 sm:gap-2 px-3 py-1.5 xs:px-3.5 xs:py-2 sm:px-7 sm:py-3.5 rounded-lg xs:rounded-xl text-[11px] xs:text-xs sm:text-base font-semibold text-white bg-[#0866E8] hover:bg-[#0756C5] shadow-xs hover:shadow-md transition-all duration-200 whitespace-nowrap"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4" />
                </Link>
              </motion.div>

              <motion.div
                whileHover={shouldReduceMotion ? {} : { y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="shrink-0"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-1 xs:gap-1.5 sm:gap-2 px-3 py-1.5 xs:px-3.5 xs:py-2 sm:px-7 sm:py-3.5 rounded-lg xs:rounded-xl text-[11px] xs:text-xs sm:text-base font-semibold text-[#082B59] bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 shadow-xs hover:shadow-sm transition-all duration-200 whitespace-nowrap"
                >
                  <span>Get Free Consultation</span>
                </Link>
              </motion.div>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: 3D Human Particle Silhouette */}
          <div className="col-span-5 xs:col-span-5 sm:col-span-5 md:col-span-5 flex items-center justify-end w-full relative mt-0">
            {/* Ambient Luminous Halo behind the 3D Bust */}
            <div className="absolute w-[160px] xs:w-[200px] sm:w-[280px] md:w-[360px] lg:w-[420px] h-[160px] xs:h-[200px] sm:h-[280px] md:h-[360px] lg:h-[420px] bg-gradient-to-tr from-blue-100/40 via-sky-100/30 to-transparent rounded-full blur-2xl sm:blur-3xl pointer-events-none -z-10" />

            <div className="relative w-[150px] xs:w-[180px] sm:w-[240px] md:w-[350px] lg:w-[390px] xl:w-[430px] h-[220px] xs:h-[250px] sm:h-[300px] md:h-[420px] lg:h-[480px] xl:h-[510px] pointer-events-auto z-10">
              <AllerHumanSilhouette className="w-full h-full" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
