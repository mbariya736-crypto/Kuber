import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AboutUs from '../components/AboutUs';
import CompanyStats from '../components/CompanyStats';
import WhyChooseUs from '../components/WhyChooseUs';

export default function AboutPage({ onOpenModal }) {
  return (
    <div className="pt-16 sm:pt-20">
      {/* Dedicated Page Hero Header */}
      <section className="relative pt-2 sm:pt-3 pb-2 sm:pb-3 overflow-hidden text-center">
        {/* Subtle glowing ambient backlights */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-blue-200/35 via-cyan-100/25 to-transparent rounded-[100%] blur-3xl pointer-events-none -z-10" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#082B59] tracking-tight leading-[1.18] mb-1.5 max-w-3xl mx-auto">
              Practical Automation &amp; Dedicated{' '}
              <span className="bg-gradient-to-r from-[#0866E8] via-[#0878F0] to-[#00B9E8] bg-clip-text text-transparent">
                Cybersecurity
              </span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main About Component */}
      <AboutUs onOpenModal={onOpenModal} />

      {/* Company Service Highlights */}
      <CompanyStats className="py-4 sm:py-6 relative z-20 px-4 sm:px-6 lg:px-8" />

      {/* Enterprise Trust & Reliability */}
      <WhyChooseUs />

      {/* Bottom CTA Banner */}
      <section className="py-8 sm:py-12 bg-white relative overflow-hidden text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-[32px] bg-gradient-to-br from-[#082B59] via-[#051C3B] to-[#082B59] text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-4xl font-extrabold mb-3 leading-tight">
                Ready to Work Together?
              </h2>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/services"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#0866E8] to-[#00B9E8] shadow-md hover:scale-[1.02] transition-all"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all"
                >
                  <span>Contact Our Team</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
