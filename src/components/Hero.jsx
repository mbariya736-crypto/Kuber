import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  Bot, 
  ShieldCheck, 
  ArrowRight, 
  ChevronRight,
  Clapperboard
} from 'lucide-react';
import AllerHumanSilhouette from './AllerHumanSilhouette';

export default function Hero({ onOpenModal }) {
  const shouldReduceMotion = useReducedMotion();

  const featureCards = [
    {
      icon: Bot,
      title: 'Business Automation',
      description: 'Simplify daily work, manage customer inquiries, and keep operations organized.',
      href: '/services/ai-services',
      btnText: 'View Service',
      badgeColor: 'text-[#0866E8] bg-blue-50 border-blue-100',
      iconBg: 'bg-blue-50 text-[#0866E8]'
    },
    {
      icon: ShieldCheck,
      title: 'Cyber Security',
      description: 'Security reviews, awareness training, and protection for businesses.',
      href: '/services/cyber-security',
      btnText: 'View Service',
      badgeColor: 'text-emerald-700 bg-emerald-50 border-emerald-100',
      iconBg: 'bg-emerald-50 text-emerald-600'
    },
    {
      icon: Clapperboard,
      title: 'Film Production',
      description: 'Commercial videos, company stories, and awareness films.',
      href: '/services/ai-films',
      btnText: 'View Work',
      badgeColor: 'text-[#0096E8] bg-cyan-50 border-cyan-100',
      iconBg: 'bg-cyan-50 text-[#0096E8]'
    }
  ];

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

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        delay: shouldReduceMotion ? 0 : 0.28 + i * 0.1,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  return (
    <section id="home" className="relative pt-24 pb-10 sm:pt-28 sm:pb-12 md:pt-32 md:pb-14 lg:pt-36 lg:pb-16 overflow-hidden bg-gradient-to-b from-[#F4F8FD] via-white to-[#F4F8FD]">
      
      {/* Subtle Abstract Background Accents */}
      <div className="absolute inset-0 bg-grid-mesh pointer-events-none -z-10 opacity-40" />
      
      <div className="absolute top-8 left-1/2 -translate-x-1/2 w-[600px] sm:w-[750px] h-[300px] bg-gradient-to-b from-blue-100/25 via-slate-100/20 to-transparent rounded-[100%] blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/4 left-10 w-[360px] h-[360px] bg-blue-50/60 rounded-full blur-2xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[360px] h-[360px] bg-sky-50/60 rounded-full blur-2xl pointer-events-none -z-10" />

      {/* Aller Studio 3D Human Particle Silhouette Animation (Positioned naturally below Navbar) */}
      <div className="absolute top-24 sm:top-20 md:top-16 lg:top-14 right-[-4%] sm:right-[1%] md:right-[3%] lg:right-[6%] w-[260px] sm:w-[360px] md:w-[440px] lg:w-[540px] h-[340px] sm:h-[440px] md:h-[500px] lg:h-[580px] pointer-events-none z-0 opacity-85 sm:opacity-95 overflow-visible">
        <AllerHumanSilhouette className="w-full h-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* CENTERED HERO CONTENT */}
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          
          {/* Staggered Natural Headline Reveal */}
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-[#082B59] leading-[1.12] tracking-tight mb-4 sm:mb-5"
            style={{ textWrap: 'balance' }}
          >
            <motion.span variants={textItemVariants} className="inline-block mr-2 sm:mr-3">
              Practical Technology for
            </motion.span>
            <motion.span variants={textItemVariants} className="inline-block text-[#0866E8]">
              Modern Businesses.
            </motion.span>
          </motion.h1>

          {/* CTA Buttons with Tactile Hover Interaction */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto mb-6 sm:mb-8"
          >
            <motion.div
              whileHover={shouldReduceMotion ? {} : { y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto"
            >
              <Link
                to="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-xl text-sm sm:text-base font-semibold text-white bg-[#0866E8] hover:bg-[#0756C5] shadow-xs hover:shadow-md transition-all duration-200"
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
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-xl text-sm sm:text-base font-semibold text-[#082B59] bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 shadow-xs hover:shadow-sm transition-all duration-200"
              >
                <span>Get Free Consultation</span>
              </Link>
            </motion.div>
          </motion.div>

        </div>

        {/* THREE FEATURE CARDS WITH SMOOTH STAGGER & HOVER */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 max-w-5xl mx-auto">
          {featureCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                custom={idx}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover={shouldReduceMotion ? {} : { y: -4, transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] } }}
                className="relative rounded-2xl p-5 sm:p-6 bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-200 flex flex-col justify-between text-left group"
              >
                <div>
                  {/* Card Header: Icon */}
                  <div className="mb-4">
                    <div className={`w-11 h-11 rounded-xl ${card.iconBg} flex items-center justify-center shadow-xs transition-transform duration-200 group-hover:scale-105`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#082B59] mb-1.5 group-hover:text-[#0866E8] transition-colors leading-snug">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Link */}
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    to={card.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0866E8] hover:text-[#0756C5] transition-colors"
                  >
                    <span>{card.btnText}</span>
                    <ChevronRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
