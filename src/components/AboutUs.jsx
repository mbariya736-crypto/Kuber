import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Bot,
  ShieldCheck,
  Film,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

/* ========================================================================= */
/* OUR CORE SERVICES SECTION (Handcrafted, Premium Agency Design)            */
/* ========================================================================= */
export default function AboutUs() {
  const shouldReduceMotion = useReducedMotion();

  // The 3 Core Services with Distinct Accents & Categories
  const serviceCards = [
    {
      id: 'ai-services',
      category: 'AUTOMATION',
      title: 'Business Automation',
      description: 'Connected systems to streamline customer inquiries, communication, and routine business workflows.',
      path: '/services/ai-services',
      icon: Bot,
      categoryColor: 'text-[#0866E8]',
      iconBg: 'bg-blue-50 text-[#0866E8] border border-blue-100',
      hoverBorder: 'hover:border-[#0866E8]',
      accentBar: 'bg-[#0866E8]'
    },
    {
      id: 'cyber-security',
      category: 'SECURITY',
      title: 'Cyber Security',
      description: 'Practical security audits, multi-factor protection, and staff fraud prevention training.',
      path: '/services/cyber-security',
      icon: ShieldCheck,
      categoryColor: 'text-emerald-600',
      iconBg: 'bg-emerald-50 text-emerald-600 border border-emerald-100',
      hoverBorder: 'hover:border-emerald-500',
      accentBar: 'bg-emerald-500'
    },
    {
      id: 'ai-films',
      category: 'MEDIA',
      title: 'Film Production',
      description: 'High-quality commercials, corporate stories, and public awareness films from script to screen.',
      path: '/services/ai-films',
      icon: Film,
      categoryColor: 'text-cyan-600',
      iconBg: 'bg-cyan-50 text-cyan-600 border border-cyan-100',
      hoverBorder: 'hover:border-cyan-500',
      accentBar: 'bg-cyan-500'
    }
  ];

  return (
    <section
      id="about"
      className="py-8 sm:py-10 lg:py-12 relative overflow-hidden bg-white text-[#082B59]"
    >
      {/* Subtle Background Decoration: Soft Gradient Blobs & Delicate Dot Pattern */}
      <div className="absolute top-1/4 left-8 w-[320px] h-[320px] bg-blue-50/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-6 right-8 w-[340px] h-[340px] bg-sky-50/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div
        className="absolute inset-0 opacity-[0.16] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(8, 102, 232, 0.45) 1px, transparent 1px)`,
          backgroundSize: '28px 28px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Compact Two-Column Agency Layout (35% Reduced Whitespace) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-center">

          {/* LEFT: BUSINESS WORKFLOW & COLLABORATION STAGE */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[420px] rounded-2xl sm:rounded-3xl p-5 sm:p-6 bg-gradient-to-br from-[#F8FAFD] via-white to-blue-50/30 border border-slate-200/90 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden text-left"
            >
              {/* Abstract Ambient Glow Accents */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-blue-100/40 rounded-full blur-2xl pointer-events-none -z-10" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-100/35 rounded-full blur-2xl pointer-events-none -z-10" />

              {/* Header: Clean Solutions Overview */}
              <div className="pb-3 mb-3.5 border-b border-slate-100 relative z-10">
                <span className="text-xs font-bold text-[#082B59] uppercase tracking-wider">
                  Everyday Business Solutions
                </span>
              </div>

              {/* Realistic Collaboration Workflow Elements */}
              <div className="space-y-2.5 relative z-10">
                {/* 1. Workflow: Automation */}
                <div className="p-3 rounded-xl bg-white/95 border border-slate-100 shadow-xs flex items-center gap-3 group hover:border-[#0866E8] transition-all">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0866E8] flex items-center justify-center shrink-0 border border-blue-100">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-xs font-bold text-[#082B59] truncate">
                      Inquiry Routing &amp; Response Flow
                    </h4>
                    <p className="text-[11px] text-slate-500 truncate">
                      Form submissions &rarr; Instant alerts
                    </p>
                  </div>
                </div>

                {/* 2. Workflow: Security */}
                <div className="p-3 rounded-xl bg-white/95 border border-slate-100 shadow-xs flex items-center gap-3 group hover:border-emerald-500 transition-all">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-xs font-bold text-[#082B59] truncate">
                      Access Audits &amp; Fraud Defense
                    </h4>
                    <p className="text-[11px] text-slate-500 truncate">
                      Multi-factor &amp; scam verification
                    </p>
                  </div>
                </div>

                {/* 3. Workflow: Media */}
                <div className="p-3 rounded-xl bg-white/95 border border-slate-100 shadow-xs flex items-center gap-3 group hover:border-cyan-500 transition-all">
                  <div className="w-8 h-8 rounded-lg bg-cyan-50 text-cyan-600 flex items-center justify-center shrink-0 border border-cyan-100">
                    <Film className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-xs font-bold text-[#082B59] truncate">
                      Campaign Storyboards &amp; Media
                    </h4>
                    <p className="text-[11px] text-slate-500 truncate">
                      Commercial films &amp; awareness
                    </p>
                  </div>
                </div>
              </div>

            </motion.div>
          </div>

          {/* RIGHT: HEADING & STAGGERED PREMIUM SERVICE CARDS */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">

            {/* Section Heading */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mb-4 sm:mb-5 text-left"
            >
              {/* Heading */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#082B59] tracking-tight leading-[1.18] mb-2">
                Our <span className="text-[#0866E8]">Core Services</span>
              </h2>

              {/* Subheading */}

            </motion.div>

            {/* Staggered Service Cards with Hover Lift (-6px) & Subtle Glassmorphism */}
            <div className="flex flex-col gap-3.5 sm:gap-4 w-full">
              {serviceCards.map((card, index) => {
                const Icon = card.icon;

                return (
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.45,
                      delay: shouldReduceMotion ? 0 : index * 0.08,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    whileHover={shouldReduceMotion ? {} : {
                      y: -6,
                      transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] }
                    }}
                    className={`group relative rounded-2xl p-4 sm:p-5 bg-white/90 backdrop-blur-md border border-slate-200/90 ${card.hoverBorder} shadow-xs hover:shadow-md transition-all duration-200 overflow-hidden text-left cursor-pointer`}
                  >
                    <Link to={card.path} className="flex items-start gap-4">
                      {/* Icon Container with subtle scale on hover */}
                      <div className={`w-11 h-11 rounded-xl ${card.iconBg} flex items-center justify-center shadow-xs shrink-0 group-hover:scale-105 transition-transform duration-250`}>
                        <Icon className="w-5 h-5" />
                      </div>

                      {/* Content Area */}
                      <div className="flex-1 min-w-0">
                        {/* Small Category Label above Title */}
                        <span className={`text-[11px] font-bold tracking-wider uppercase block mb-1 ${card.categoryColor}`}>
                          {card.category}
                        </span>

                        {/* Title */}
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <h3 className="text-base sm:text-lg font-bold text-[#082B59] group-hover:text-[#0866E8] transition-colors leading-snug">
                            {card.title}
                          </h3>
                          <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#0866E8] group-hover:translate-x-1 transition-all shrink-0" />
                        </div>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                          {card.description}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
