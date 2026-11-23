import React from 'react';
import { motion } from 'framer-motion';
import Contact from '../components/Contact';

export default function ContactPage() {
  return (
    <div className="pt-16 sm:pt-20">
      {/* Dedicated Page Hero Header */}
      <section className="relative pt-2 sm:pt-4 pb-1 sm:pb-2 overflow-hidden text-center">
        {/* Ambient background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[550px] h-[260px] bg-gradient-to-b from-blue-200/35 via-cyan-100/25 to-transparent rounded-[100%] blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#082B59] tracking-tight leading-tight max-w-3xl mx-auto">
              Let's Discuss{' '}
              <span className="bg-gradient-to-r from-[#0866E8] via-[#0878F0] to-[#00B9E8] bg-clip-text text-transparent">
                Your Project
              </span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <Contact />
    </div>
  );
}
