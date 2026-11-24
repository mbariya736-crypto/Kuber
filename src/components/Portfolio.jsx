import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import {
  FolderKanban,
  Bot,
  ShieldCheck,
  Film
} from 'lucide-react';
import { portfolioProjects } from '../data/portfolioData';

/* ========================================================================= */
/* MAIN PORTFOLIO COMPONENT (Human-Crafted Editorial Agency Showcase)         */
/* ========================================================================= */
export default function Portfolio({ onOpenModal }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();

  // Category Filter Tabs
  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai-services', label: 'Business Automation' },
    { id: 'cyber-security', label: 'Cyber Security' },
    { id: 'ai-films', label: 'Film Production' },
  ];

  // Filtered Projects
  const filteredProjects = activeFilter === 'all'
    ? portfolioProjects
    : portfolioProjects.filter(item => item.category === activeFilter);

  const handleOpenDetails = (project) => {
    navigate(`/portfolio/${project.slug}`);
  };

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
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center mb-8 sm:mb-10"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-xs font-semibold text-[#0866E8] mb-3">
            <FolderKanban className="w-3.5 h-3.5 text-[#0866E8]" />
            <span>Our Work &amp; Case Studies</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#082B59] tracking-tight leading-[1.18]">
            Our <span className="text-[#0866E8]">Portfolio</span> &amp; Case Studies
          </h2>


        </motion.div>

        {/* ======================================================== */}
        {/* 2. FILTER PILLS (Light Theme)                            */}
        {/* ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-2 mb-8 sm:mb-12"
        >
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`relative px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${isActive
                    ? 'text-white'
                    : 'text-slate-600 hover:text-[#082B59] hover:bg-slate-50'
                  }`}
              >
                {isActive ? (
                  <motion.span
                    layoutId="activePortfolioFilterPill"
                    className="absolute inset-0 rounded-full bg-[#0866E8] shadow-xs border border-blue-500/40 -z-10"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                ) : (
                  <span className="absolute inset-0 rounded-full bg-white border border-slate-200/90 shadow-xs -z-10 transition-colors" />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* ======================================================== */}
        {/* 3. PROJECT GRID (Human-Crafted Editorial Showcase)       */}
        {/* ======================================================== */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const Icon = project.icon;

              return (
                <motion.article
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.5,
                    delay: shouldReduceMotion ? 0 : index * 0.08,
                    ease: [0.19, 1, 0.22, 1]
                  }}
                  whileHover={shouldReduceMotion ? {} : {
                    y: -4,
                    transition: { duration: 0.3, ease: [0.25, 1, 0.5, 1] }
                  }}
                  onClick={() => handleOpenDetails(project)}
                  className="group relative rounded-2xl bg-[#FCFDFE] border border-stone-200/85 hover:border-blue-400/70 transition-all duration-300 flex flex-col justify-between overflow-hidden text-left h-full cursor-pointer"
                  style={{
                    boxShadow: '0 8px 24px -12px rgba(8, 43, 89, 0.07), 0 3px 8px -3px rgba(8, 43, 89, 0.04), 0 1px 2px 0 rgba(8, 43, 89, 0.03)'
                  }}
                >
                  {/* Subtle top bevel highlight */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none z-20" />

                  <div className="relative z-10 flex-1 flex flex-col">
                    {/* Project Image Container */}
                    <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:h-[215px] overflow-hidden bg-stone-100 rounded-t-2xl">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.03]"
                      />

                      {/* Warm natural vignette */}
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-900/35 via-stone-900/5 to-transparent pointer-events-none" />
                    </div>

                    {/* Card Body - Focused purely on Image, Category, Title, and Concise Description */}
                    <div className="p-5 sm:p-6 pb-6 flex-1 flex flex-col justify-between">
                      <div>
                        {/* Clean Category Label */}
                        <div className="mb-2.5">
                          <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[11px] font-medium tracking-wide ${project.badgeColor}`}>
                            <Icon className="w-3.5 h-3.5 opacity-90" />
                            <span>{project.categoryLabel}</span>
                          </span>
                        </div>

                        {/* Project Title */}
                        <h3 className="text-lg sm:text-[1.28rem] font-bold text-[#0B2546] leading-snug group-hover:text-[#0866E8] transition-colors duration-200 mb-2 tracking-tight">
                          {project.title}
                        </h3>

                        {/* Concise 2-3 line human-crafted description */}
                        <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed font-normal">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
