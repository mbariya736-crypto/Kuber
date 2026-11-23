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
/* SERVICE CARD COMPONENT (Human-Crafted, Editorial & Tactile Depth)          */
/* ========================================================================= */
function ServiceCard({ service, index, onOpenPractice }) {
  const shouldReduceMotion = useReducedMotion();
  const Icon = service.icon;

  // Subtle natural asymmetry per card:
  // Card 0 (Business Automation): grounded standard baseline
  // Card 1 (Cyber Security - featured middle): slight natural elevation (-translate-y-1.5 lg:-translate-y-2)
  // Card 2 (Film Production): subtle organic balance (+translate-y-1)
  const asymmetryOffset = 
    index === 1 
      ? 'lg:-translate-y-2 lg:mb-2' 
      : index === 2 
      ? 'lg:translate-y-1.5' 
      : '';

  // Editorial Roman index tag for human-crafted touch
  const indexNumeral = ['01', '02', '03'][index] || `0${index + 1}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.6,
        delay: shouldReduceMotion ? 0 : index * 0.12,
        ease: [0.19, 1, 0.22, 1]
      }}
      whileHover={shouldReduceMotion ? {} : {
        y: -4,
        transition: { duration: 0.35, ease: [0.25, 1, 0.5, 1] }
      }}
      className={`group relative rounded-2xl bg-[#FCFDFE] border border-stone-200/80 hover:border-blue-400/70 transition-all duration-300 flex flex-col justify-between overflow-hidden text-left h-full ${asymmetryOffset}`}
      style={{
        boxShadow: index === 1 
          ? '0 10px 30px -12px rgba(8, 43, 89, 0.09), 0 4px 12px -4px rgba(8, 43, 89, 0.05), 0 1px 2px 0 rgba(8, 43, 89, 0.04)'
          : '0 8px 24px -12px rgba(8, 43, 89, 0.07), 0 3px 8px -3px rgba(8, 43, 89, 0.04), 0 1px 2px 0 rgba(8, 43, 89, 0.03)'
      }}
    >
      {/* Subtle organic card highlight top bevel */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none z-20" />

      <div className="relative z-10 flex-1 flex flex-col">
        {/* Service Image with warm vintage lens feel */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:h-[205px] overflow-hidden bg-stone-100 rounded-t-2xl">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.03]"
          />

          {/* Warm organic vignette & soft inner rim */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 via-stone-900/5 to-transparent pointer-events-none" />
          
          {/* Handcrafted Editorial Index Stamp */}
          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-stone-900/50 backdrop-blur-md border border-white/20 text-white/90 text-[11px] font-mono tracking-widest pointer-events-none select-none">
            {indexNumeral}
          </div>
        </div>

        {/* Card Body: Category Badge, Title, Description, and Deliverables */}
        <div className="p-5 sm:p-6 pb-3 flex-1 flex flex-col">
          {/* Category Badge & Status Indicator */}
          <div className="mb-2.5 flex items-center justify-between">
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium tracking-wide ${service.badgeColor}`}>
              <Icon className="w-3.5 h-3.5 opacity-90" />
              <span>{service.category}</span>
            </span>
          </div>

          {/* Service Title - Editorial serif-tuned weight and typography */}
          <h3 className="text-xl sm:text-[1.38rem] font-bold text-[#0B2546] leading-snug group-hover:text-[#0866E8] transition-colors duration-200 mb-2 tracking-tight">
            {service.title}
          </h3>

          {/* Human-written Description with warm editorial tone */}
          <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed font-normal mb-4">
            {service.description}
          </p>

          {/* Key Deliverables / Capabilities */}
          <div className="mt-auto pt-3.5 border-t border-stone-200/70">
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-[10px] font-semibold tracking-wider text-stone-500 uppercase">
                Core Deliverables
              </span>
              <span className="w-8 h-px bg-stone-200" />
            </div>
            <ul className="space-y-2">
              {service.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-stone-700 leading-normal">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0866E8]/70 shrink-0 mt-1.5 group-hover:bg-[#0866E8] transition-colors" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Action: Explore Service Link with subtle tactile response */}
      <div className="p-5 sm:p-6 pt-3 mt-auto relative z-10 border-t border-stone-100 bg-stone-50/50">
        <Link
          to={`/services/${service.id}`}
          className="w-full inline-flex items-center justify-between py-2.5 px-4 rounded-xl text-xs sm:text-[13px] font-semibold text-[#082B59] hover:text-[#0866E8] bg-white hover:bg-white border border-stone-200/80 hover:border-blue-300 shadow-2xs hover:shadow-xs transition-all duration-200 group/btn cursor-pointer min-h-[42px]"
        >
          <span>{service.ctaText}</span>
          <span className="w-6 h-6 rounded-lg bg-stone-100 group-hover/btn:bg-blue-50 flex items-center justify-center transition-colors">
            <ArrowRight className="w-3.5 h-3.5 text-stone-600 group-hover/btn:text-[#0866E8] transition-transform duration-200 group-hover/btn:translate-x-0.5" />
          </span>
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
          ? 'pt-4 sm:pt-6 pb-12 sm:pb-16 bg-transparent' 
          : 'py-10 sm:py-14 lg:py-16 bg-gradient-to-b from-[#F9FBFD] via-[#F8F9FA] to-[#F3F6F9]'
      }`}
    >
      {/* Theme-Matching Smooth Blue Motion Animation (only if not standalone page) */}
      {!isStandalonePage && (
        <ServicesMotionBackground className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-70" />
      )}

      {/* Subtle handcrafted paper texture / tactile noise */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.035] mix-blend-multiply z-1"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}
      />

      {/* Warm gentle ambient glow replacing stark cold blue */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[720px] h-[340px] bg-gradient-to-b from-blue-100/35 via-amber-50/20 to-transparent rounded-full blur-[110px] -z-10 pointer-events-none" />
      <div className="absolute top-1/3 -right-24 w-[420px] h-[420px] bg-sky-100/25 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-10 -left-24 w-[450px] h-[450px] bg-stone-100/50 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header (when rendered on landing page or parent container) */}
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

        {/* 3 Human-Crafted Service Cards with organic rhythm */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7 items-stretch pt-2 pb-2">
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
