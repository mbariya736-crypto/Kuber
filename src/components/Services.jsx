import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  Bot,
  ShieldCheck,
  Film,
  Check
} from 'lucide-react';
import PracticeExperience from './PracticeExperience';
import ServicesMotionBackground from './ServicesMotionBackground';

/* ========================================================================= */
/* SERVICE CARD COMPONENT (Clean Light Theme, Human-Designed)                 */
/* ========================================================================= */
function ServiceCard({ service, index, onOpenPractice }) {
  const shouldReduceMotion = useReducedMotion();
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.5,
        delay: shouldReduceMotion ? 0 : index * 0.1,
        ease: [0.16, 1, 0.3, 1]
      }}
      whileHover={shouldReduceMotion ? {} : {
        y: -5,
        transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] }
      }}
      className="group relative rounded-2xl bg-white border border-slate-200/90 hover:border-blue-300 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden text-left h-full"
    >
      <div className="relative z-10 flex-1 flex flex-col">
        {/* Service Image */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:h-[200px] overflow-hidden bg-slate-100 rounded-t-2xl">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* Subtle Bottom Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Card Body: Category Badge, Title, Description, and Deliverables */}
        <div className="p-5 sm:p-6 pb-2 flex-1 flex flex-col">
          {/* Category Badge */}
          <div className="mb-2.5">
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider ${service.badgeColor}`}>
              <Icon className="w-3.5 h-3.5" />
              <span>{service.category}</span>
            </span>
          </div>

          {/* Service Title */}
          <h3 className="text-xl sm:text-2xl font-bold text-[#082B59] leading-snug group-hover:text-[#0866E8] transition-colors mb-2.5">
            {service.title}
          </h3>

          {/* Human-written Description */}
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-4">
            {service.description}
          </p>

          {/* Key Deliverables / Capabilities */}
          <div className="mt-auto pt-3 border-t border-slate-100">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 block mb-2">
              Key Capabilities:
            </span>
            <ul className="space-y-2">
              {service.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                  <Check className={`w-3.5 h-3.5 ${service.iconColor} shrink-0 mt-0.5`} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Action: Explore Service Button */}
      <div className="p-5 sm:p-6 pt-4 mt-auto relative z-10 border-t border-slate-100">
        <Link
          to={`/services/${service.id}`}
          className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#0866E8] hover:bg-[#0756C5] shadow-xs hover:shadow-md transition-all duration-200 group/btn cursor-pointer min-h-[42px]"
        >
          <span>{service.ctaText}</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}

/* ========================================================================= */
/* MAIN SERVICES COMPONENT (Light Theme, Consistent with Website)             */
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

  const services = [
    {
      id: 'ai-services',
      category: 'Business Automation',
      title: 'Business Automation',
      icon: Bot,
      badgeColor: 'text-[#0866E8] bg-blue-50 border border-blue-200/80',
      iconColor: 'text-[#0866E8]',
      description: 'Reliable systems and automated workflows to manage incoming customer inquiries, route communications, and keep your business records organized.',
      image: '/assets/ai-services.webp',
      imageTitle: 'Business Automation',
      items: [
        'Automatic inquiry capture and instant team notifications',
        'Connected workflows between email, website forms, and WhatsApp',
        'Real-time synchronization with spreadsheets and business tools'
      ],
      ctaText: 'Explore Business Automation'
    },
    {
      id: 'cyber-security',
      category: 'Cyber Security Services',
      title: 'Cyber Security & Protection',
      icon: ShieldCheck,
      badgeColor: 'text-emerald-700 bg-emerald-50 border border-emerald-200/80',
      iconColor: 'text-emerald-600',
      description: 'Practical security checks, staff training, and safety measures to protect company accounts, prevent scams, and secure transactions.',
      image: '/assets/cybersecurity-2023-social_uvx3rt.png',
      imageTitle: 'Cyber Security',
      items: [
        'Staff awareness training for phishing and scam prevention',
        'Account safety reviews and access verification',
        'Incident guidance and reporting support through Helpline 1930'
      ],
      ctaText: 'Explore Cyber Security'
    },
    {
      id: 'ai-films',
      category: 'Film Production & Media',
      title: 'Film Production & Media',
      icon: Film,
      badgeColor: 'text-cyan-800 bg-cyan-50 border border-cyan-200/80',
      iconColor: 'text-cyan-600',
      description: 'Professional video production for commercials, corporate profiles, and public awareness campaigns from script to finished screen.',
      image: '/assets/ai-film-studio-hero.webp',
      imageTitle: 'Film Production',
      items: [
        'Commercial brand and product video production',
        'Corporate overview and milestone documentaries',
        'Public awareness and educational films'
      ],
      ctaText: 'Explore Film Production'
    }
  ];

  return (
    <section 
      id="services" 
      className={`relative text-[#082B59] overflow-hidden scroll-mt-20 sm:scroll-mt-24 ${
        isStandalonePage 
          ? 'pt-6 sm:pt-8 pb-12 sm:pb-16 bg-transparent' 
          : 'py-10 sm:py-14 lg:py-16 bg-gradient-to-b from-[#F8FAFD] via-white to-[#F1F6FC]'
      }`}
    >
      {/* Theme-Matching Smooth Blue Motion Animation (only if not standalone page) */}
      {!isStandalonePage && (
        <ServicesMotionBackground className="absolute inset-0 w-full h-full pointer-events-none z-0" />
      )}

      {/* Subtle blueprint grid overlay matching website */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(8, 102, 232, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(8, 102, 232, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px'
        }}
      />

      {/* Ambient soft blue lighting highlights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[720px] h-[340px] bg-gradient-to-b from-blue-100/50 via-cyan-100/30 to-transparent rounded-full blur-[110px] -z-10 pointer-events-none" />
      <div className="absolute top-1/3 -right-24 w-[420px] h-[420px] bg-cyan-100/30 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-10 -left-24 w-[450px] h-[450px] bg-blue-100/40 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header (when rendered on landing page or parent container) */}
        {!isStandalonePage && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mx-auto text-center mb-6 sm:mb-8"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#082B59] tracking-tight leading-[1.18]">
              Our <span className="text-[#0866E8]">Services</span>
            </h2>
          </motion.div>
        )}

        {/* 3 Human-Crafted Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              onOpenPractice={handleOpenPractice}
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
