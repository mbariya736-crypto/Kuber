import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, MessageSquare, Bot, ShieldCheck, Film } from 'lucide-react';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import LeadGeneration from '../components/LeadGeneration';

export default function ServicesPage({ onOpenModal }) {
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();

  const handlePracticeChange = (id) => {
    if (id) {
      navigate(`/services/${id}`);
    }
  };

  return (
    <div className="pt-16 sm:pt-20 min-h-screen relative bg-gradient-to-b from-[#F8FAFD] via-white to-[#F0F6FC] text-[#082B59]">
      {/* Dedicated Services Page Hero Header */}
      <section className="relative pt-4 sm:pt-8 pb-4 sm:pb-6 overflow-hidden text-center bg-transparent z-10">
        {/* Subtle diffuse gradient highlights preserving white-blue theme */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[320px] bg-gradient-to-b from-blue-100/40 via-cyan-50/30 to-transparent rounded-[100%] blur-[90px] pointer-events-none -z-10" />
        <div className="absolute top-12 right-10 w-[350px] h-[350px] bg-[#00B9E8]/8 rounded-full blur-[80px] pointer-events-none -z-10" />
        <div className="absolute top-20 left-8 w-[320px] h-[320px] bg-[#0866E8]/8 rounded-full blur-[85px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-[#0866E8] bg-blue-50 border border-blue-100 mb-3 uppercase tracking-wider">
              Specialized Solutions
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#082B59] tracking-tight leading-[1.14] max-w-4xl mx-auto mb-3 sm:mb-4">
              Our <span className="text-[#0866E8]">Services</span>
            </h1>

          </motion.div>
        </div>
      </section>

      {/* The 3 Interactive Showcase Cards linking to their individual detail pages */}
      <div className="relative z-10">
        <Services
          onOpenModal={onOpenModal}
          onPracticeChange={handlePracticeChange}
          isStandalonePage={true}
        />
      </div>

      {/* Why Choose Us & Business Capabilities with transparent backgrounds */}
      <div className="relative z-10">
        <WhyChooseUs className="bg-transparent" />
        <LeadGeneration onOpenModal={onOpenModal} className="bg-transparent" />
      </div>

      {/* Professional Let's Work Together CTA Section */}
      <section className="py-8 sm:py-12 bg-transparent relative overflow-hidden text-center z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 sm:p-12 lg:p-14 rounded-2xl sm:rounded-3xl bg-[#082B59] text-white shadow-xl relative overflow-hidden"
          >
            {/* Diffuse ambient blue & cyan glow accents */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/15 rounded-full blur-[90px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/15 rounded-full blur-[90px] pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-4xl lg:text-[2.65rem] font-bold mb-3 sm:mb-4 leading-tight">
                Let's Work Together on Your Next Project
              </h2>


              <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#0866E8] hover:bg-[#0756C5] shadow-xs hover:shadow-md transition-all cursor-pointer"
                >
                  <span>Get in Touch</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="https://wa.me/?text=Hello%20Kuber%20AIS%20Technologies%2C%20I%20would%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
