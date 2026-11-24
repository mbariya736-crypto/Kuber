import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * Portfolio Section
 * 
 * Clean, premium, human-crafted section:
 * - Preserves Portfolio section container & anchor (id="portfolio")
 * - Retains official section heading: "Our Portfolio & Case Studies"
 * - Maintains brand background gradients, ambient lighting & subtle tactile noise
 * - Cards/grid removed as requested while preserving layout, spacing, and nav links
 */
export default function Portfolio({ onOpenModal }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="portfolio"
      className="relative text-[#082B59] overflow-hidden scroll-mt-20 sm:scroll-mt-24 py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#F9FBFD] via-[#F8F9FA] to-[#F3F6F9] border-t border-stone-200/80"
    >
      {/* Subtle handcrafted paper texture / tactile noise matching Services */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.035] mix-blend-multiply z-1"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}
      />

      {/* Warm gentle ambient glow replacing harsh neon */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[720px] h-[340px] bg-gradient-to-b from-blue-100/35 via-amber-50/20 to-transparent rounded-full blur-[110px] -z-10 pointer-events-none" />
      <div className="absolute top-1/3 -right-24 w-[420px] h-[420px] bg-sky-100/25 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-10 -left-24 w-[450px] h-[450px] bg-stone-100/50 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ======================================================== */}
        {/* 1. SECTION HEADER                                        */}
        {/* ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#082B59] tracking-tight leading-[1.18]">
            Our <span className="text-[#0866E8]">Portfolio</span> &amp; Case Studies
          </h2>
        </motion.div>

      </div>
    </section>
  );
}
