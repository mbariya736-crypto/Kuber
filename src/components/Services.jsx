import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  Bot,
  ShieldCheck,
  Film
} from 'lucide-react';
import PracticeExperience from './PracticeExperience';

/* ========================================================================= */
/* SERVICE CARD COMPONENT (Clean, Focused, Human-Designed)                    */
/* ========================================================================= */
function ServiceCard({ service, index }) {
  const shouldReduceMotion = useReducedMotion();
  const Icon = service.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.45,
        delay: shouldReduceMotion ? 0 : index * 0.08,
        ease: [0.19, 1, 0.22, 1]
      }}
      whileHover={shouldReduceMotion ? {} : {
        y: -4,
        transition: { duration: 0.3, ease: [0.25, 1, 0.5, 1] }
      }}
      className="group relative rounded-2xl bg-white border border-stone-200/90 hover:border-[#0866E8]/70 transition-all duration-300 p-5 sm:p-6 shadow-xs hover:shadow-md flex flex-col justify-between text-left h-full"
    >
      <div>
        {/* Service Visual */}
        <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-stone-100 border border-stone-200 mb-5">
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.03]"
          />
        </div>

        {/* Service Icon & Exact Service Name */}
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-xl ${service.bgColor} ${service.iconColor} flex items-center justify-center border ${service.borderColor} shrink-0`}>
            <Icon className="w-5 h-5" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-[#0B2546] tracking-tight leading-snug group-hover:text-[#0866E8] transition-colors">
            {service.name}
          </h3>
        </div>
      </div>

      {/* Action Link */}
      <div className="pt-5 mt-5 border-t border-stone-100">
        <Link
          to={service.path}
          className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-[#082B59] bg-stone-50 hover:bg-[#0866E8] hover:text-white border border-stone-200 hover:border-[#0866E8] transition-all group/btn"
        >
          <span>Explore Service</span>
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.article>
  );
}

/* ========================================================================= */
/* MAIN SERVICES COMPONENT                                                   */
/* ========================================================================= */
export default function Services({ onOpenModal, routePracticeId, onPracticeChange, isStandalonePage = false }) {
  const navigate = useNavigate();
  const [localPracticeExperience, setLocalPracticeExperience] = useState(null);

  const activePracticeExperience = routePracticeId || localPracticeExperience;

  const handleOpenPractice = (practiceId) => {
    if (onPracticeChange) {
      onPracticeChange(practiceId);
    } else {
      navigate(`/services/${practiceId}`);
    }
  };

  const handleClosePractice = () => {
    if (onPracticeChange) {
      onPracticeChange(null);
    } else {
      setLocalPracticeExperience(null);
      navigate('/services');
    }
  };

  // Exactly the 3 requested services with zero subtitles, descriptions, subtopics, or badges
  const services = [
    {
      id: 'ai-services',
      name: 'AI Services',
      icon: Bot,
      path: '/services/ai-services',
      image: '/assets/ai-services.webp',
      iconColor: 'text-[#0866E8]',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200/80',
    },
    {
      id: 'cyber-security',
      name: 'Cyber Security Services',
      icon: ShieldCheck,
      path: '/services/cyber-security',
      image: '/assets/cybersecurity-2023-social_uvx3rt.png',
      iconColor: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200/80',
    },
    {
      id: 'ai-films',
      name: 'AI Film & Video Production',
      icon: Film,
      path: '/services/ai-films',
      image: '/assets/ai-film-studio-hero.webp',
      iconColor: 'text-cyan-600',
      bgColor: 'bg-cyan-50',
      borderColor: 'border-cyan-200/80',
    }
  ];

  return (
    <section 
      id="services" 
      className={`relative text-[#082B59] overflow-hidden scroll-mt-20 sm:scroll-mt-24 ${
        isStandalonePage 
          ? 'pt-4 sm:pt-6 pb-12 sm:pb-16 bg-transparent' 
          : 'py-10 sm:py-14 lg:py-16 bg-gradient-to-b from-[#F9FBFD] via-[#F8F9FA] to-[#F3F6F9]'
      }`}
    >
      {/* Subtle handcrafted paper texture / tactile noise */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.035] mix-blend-multiply z-1"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}
      />

      {/* Warm gentle ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[720px] h-[340px] bg-gradient-to-b from-blue-100/35 via-amber-50/20 to-transparent rounded-full blur-[110px] -z-10 pointer-events-none" />
      <div className="absolute top-1/3 -right-24 w-[420px] h-[420px] bg-sky-100/25 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-10 -left-24 w-[450px] h-[450px] bg-stone-100/50 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        {!isStandalonePage && (
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: [0.19, 1, 0.22, 1] }}
            className="max-w-2xl mx-auto text-center mb-6 sm:mb-8"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-bold text-[#0B2546] tracking-tight leading-[1.18]">
              Our <span className="text-[#0866E8] font-bold">Services</span>
            </h2>
          </motion.div>
        )}

        {/* Exactly 3 Service Cards in Clean 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch pt-2 pb-2">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
            />
          ))}
        </div>

      </div>

      {/* Dedicated Interactive Practice Experience Modal fallback if triggered */}
      <AnimatePresence>
        {activePracticeExperience && (
          <PracticeExperience
            practiceId={activePracticeExperience}
            onClose={handleClosePractice}
            onOpenContact={() => {
              handleClosePractice();
              const contactEl = document.getElementById('contact');
              if (contactEl) {
                contactEl.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
