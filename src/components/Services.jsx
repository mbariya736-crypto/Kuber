import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  Bot,
  ShieldCheck,
  Film,
  CheckCircle2
} from 'lucide-react';
import PracticeExperience from './PracticeExperience';
import ServicesMotionBackground from './ServicesMotionBackground';

/* ========================================================================= */
/* SERVICE CARD COMPONENT (Human-Crafted Editorial & Swapped Layout)          */
/* ========================================================================= */
function ServiceCard({ service, index, onOpenPractice }) {
  const shouldReduceMotion = useReducedMotion();
  const Icon = service.icon;
  const isSwapped = index % 2 === 1; // Alternating swapped layout

  return (
    <motion.article
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.55,
        delay: shouldReduceMotion ? 0 : index * 0.1,
        ease: [0.19, 1, 0.22, 1]
      }}
      className="rounded-3xl bg-white border border-stone-200/90 shadow-md hover:shadow-xl transition-all duration-300 p-6 sm:p-8 lg:p-10 relative overflow-hidden text-left"
    >
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${isSwapped ? 'lg:flex-row-reverse' : ''}`}>
        
        {/* Photographic Visual (Swapped column order on alternate cards) */}
        <div className={`lg:col-span-5 w-full ${isSwapped ? 'lg:order-2' : 'lg:order-1'}`}>
          <div className="relative aspect-[16/11] sm:aspect-[4/3] w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-stone-100 border border-stone-200 shadow-sm group">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Editorial Content (Heading, Paragraphs, Checkmarks, and Action) */}
        <div className={`lg:col-span-7 flex flex-col justify-center ${isSwapped ? 'lg:order-1' : 'lg:order-2'}`}>
          {/* Category Pill Tag */}
          <div className="mb-3.5">
            <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${service.badgeColor}`}>
              <Icon className="w-3.5 h-3.5" />
              <span>{service.category}</span>
            </span>
          </div>

          {/* Large Bold Editorial Headline */}
          <h3 className="text-2xl sm:text-3xl lg:text-[2rem] font-extrabold text-[#0B2546] tracking-tight leading-[1.2] mb-3.5">
            {service.heading}
          </h3>

          {/* 2 Clear, Human-Crafted Descriptive Paragraphs */}
          <div className="space-y-3 text-stone-600 text-xs sm:text-sm leading-relaxed font-normal mb-5">
            <p>{service.paragraph1}</p>
            <p>{service.paragraph2}</p>
          </div>

          {/* 3 Checkmark Deliverables */}
          <div className="space-y-2.5 mb-6 pt-3 border-t border-stone-100">
            {service.points.map((pt, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-stone-700 leading-snug">
                <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${service.iconColor}`} />
                <span>
                  <strong className="text-[#0B2546] font-bold">{pt.title}:</strong> {pt.desc}
                </span>
              </div>
            ))}
          </div>

          {/* Clean Action CTA Link */}
          <div>
            <Link
              to={`/services/${service.id}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#0866E8] hover:bg-[#0756C5] shadow-xs hover:shadow-md transition-all group/btn"
            >
              <span>{service.ctaText}</span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>

      </div>
    </motion.article>
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
      heading: 'Practical Technology Grounded in Everyday Business Reality.',
      icon: Bot,
      badgeColor: 'text-[#0866E8] bg-blue-50 border border-blue-200/80',
      iconColor: 'text-[#0866E8]',
      paragraph1: 'Everyday operations often get slowed down by missed customer messages, disorganized contact sheets, and repetitive manual tasks that take hours away from serving clients.',
      paragraph2: 'We connect your existing tools—including website forms, WhatsApp, email, and spreadsheets—into one reliable, straightforward workflow. Your team stays informed with instant notifications, customer details are saved neatly, and follow-ups happen on time.',
      image: '/assets/ai-services.webp',
      imageTitle: 'Business Automation',
      points: [
        {
          title: 'Instant Response Protocols',
          desc: 'Automatically capture website submissions and route alerts to WhatsApp and email within 3 seconds.'
        },
        {
          title: 'Zero Manual Data Entry',
          desc: 'Seamlessly synchronize customer details, inquiries, and follow-ups directly into organized central spreadsheets.'
        },
        {
          title: 'Reliable Tool Integration',
          desc: 'Connect your existing web forms, WhatsApp, email, and CRM with zero disruption to daily company routines.'
        }
      ],
      ctaText: 'Explore Business Automation'
    },
    {
      id: 'cyber-security',
      category: 'Cyber Security Services',
      title: 'Cyber Security & Protection',
      heading: 'Strategic Protection Grounded in Active Defense.',
      icon: ShieldCheck,
      badgeColor: 'text-emerald-700 bg-emerald-50 border border-emerald-200/80',
      iconColor: 'text-emerald-600',
      paragraph1: 'Many small and growing businesses operate under the misconception that cyber threats only target large corporations. In reality, shared email accounts and unverified payment requests make everyday operations prime targets.',
      paragraph2: 'We conduct practical security reviews of business email suites, cloud storage, and banking portals. We implement multi-factor authentication, establish dual-verification protocols, and train your staff to recognize deceptive scams before losses occur.',
      image: '/assets/cybersecurity-2023-social_uvx3rt.png',
      imageTitle: 'Cyber Security',
      points: [
        {
          title: 'Proactive Account Audits',
          desc: 'Comprehensive security reviews of administrative accounts, email suites, and access permissions.'
        },
        {
          title: 'Staff Scam & Phishing Defense',
          desc: 'Practical scenario drills training employees to detect deceptive vendor invoices and fake payment links.'
        },
        {
          title: 'Rapid Incident Recovery',
          desc: 'Clear, step-by-step guidance to freeze unauthorized transactions and report swiftly via Helpline 1930.'
        }
      ],
      ctaText: 'Explore Cyber Security'
    },
    {
      id: 'ai-films',
      category: 'Film Production & Media',
      title: 'Film Production & Media',
      heading: 'Cinematic Storytelling Grounded in Human Truth.',
      icon: Film,
      badgeColor: 'text-cyan-800 bg-cyan-50 border border-cyan-200/80',
      iconColor: 'text-cyan-600',
      paragraph1: 'Commercial brand media and corporate videos often suffer from generic templates that fail to communicate genuine values or build lasting customer connection.',
      paragraph2: 'We partner closely with your team to produce authentic human stories. From initial script consultation and storyboard development to on-location cinematography and post-production color grading, every frame is crafted to build credibility.',
      image: '/assets/ai-film-studio-hero.webp',
      imageTitle: 'Film Production',
      points: [
        {
          title: 'End-to-End Creative Direction',
          desc: 'Complete script consultation, storyboard pacing, studio cinematography, and lighting.'
        },
        {
          title: 'Authentic Narrative Pacing',
          desc: 'Human-crafted storytelling that builds trust and connects with clients, partners, and investors.'
        },
        {
          title: 'Cinema-Grade Master Cuts',
          desc: 'Editorial color grading, custom soundscapes, and multi-format exports for web and social broadcasts.'
        }
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

        {/* Human-Crafted Editorial Service Cards with Alternating Swapped Rhythm */}
        <div className="flex flex-col gap-8 sm:gap-10 lg:gap-12 pt-2 pb-2">
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
