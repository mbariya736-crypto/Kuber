import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import {
  X,
  Target,
  Layers,
  CheckCircle2,
  TrendingUp,
  ArrowRight,
  ExternalLink,
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
  const [selectedModalProject, setSelectedModalProject] = useState(null);
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();

  // Prevent background scroll and allow ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedModalProject(null);
      }
    };

    if (selectedModalProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedModalProject]);

  // Category Filter Tabs (only categories with actual projects)
  const availableCategories = new Set(portfolioProjects.map(p => p.category));
  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    ...(availableCategories.has('ai-films') ? [{ id: 'ai-films', label: 'Film & Awareness' }] : []),
    ...(availableCategories.has('ai-services') ? [{ id: 'ai-services', label: 'Business Automation' }] : []),
    ...(availableCategories.has('cyber-security') ? [{ id: 'cyber-security', label: 'Cyber Security' }] : []),
  ];

  // Filtered Projects
  const filteredProjects = activeFilter === 'all'
    ? portfolioProjects
    : portfolioProjects.filter(item => item.category === activeFilter);

  const handleOpenDetails = (project) => {
    setSelectedModalProject(project);
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
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center mb-7 sm:mb-9"
        >
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
          className={`grid ${
            filteredProjects.length > 1
              ? 'grid-cols-1 md:grid-cols-2 max-w-5xl'
              : 'grid-cols-1 max-w-xl sm:max-w-2xl'
          } gap-6 sm:gap-8 items-stretch mx-auto`}
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
                  className="group relative rounded-2xl bg-white border border-stone-200/90 hover:border-blue-400/80 transition-all duration-300 flex flex-col justify-between overflow-hidden text-left h-full cursor-pointer shadow-xs hover:shadow-md"
                >
                  <div className="relative z-10 flex-1 flex flex-col">
                    {/* Project Image Container */}
                    <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:h-[215px] overflow-hidden bg-stone-100 rounded-t-2xl">
                      <img
                        src={project.image || project.heroImage}
                        alt={project.title}
                        loading="lazy"
                        onError={(e) => {
                          const currentSrc = e.currentTarget.getAttribute('src');
                          if (currentSrc && currentSrc.startsWith('/images/')) {
                            e.currentTarget.src = currentSrc.replace('/images/', '/assets/');
                          } else if (currentSrc && currentSrc.startsWith('/assets/')) {
                            e.currentTarget.src = currentSrc.replace('/assets/', '/images/');
                          }
                        }}
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
                          {project.description || project.overview}
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

      {/* ======================================================== */}
      {/* 4. INTERACTIVE CASE STUDY INFORMATION POPUP (MODAL)       */}
      {/* ======================================================== */}
      {typeof document !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {selectedModalProject && (
              <motion.div
                key="portfolio-modal-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.22 }}
                onClick={() => setSelectedModalProject(null)}
                className="fixed inset-0 z-[99999] flex items-start justify-center p-3 sm:p-5 pt-20 sm:pt-24 pb-8 sm:pb-12 bg-slate-950/80 backdrop-blur-md overflow-y-auto"
              >
                <motion.div
                  key="portfolio-modal-dialog"
                  initial={{ scale: 0.95, opacity: 0, y: 12 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.95, opacity: 0, y: 12 }}
                  transition={{ duration: 0.24, ease: [0.19, 1, 0.22, 1] }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative max-w-lg sm:max-w-xl w-full max-h-[78vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-stone-200 text-left my-auto"
                >
                  {/* Modal Sticky Header */}
                  <div className="flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 border-b border-stone-200/80 bg-stone-50/80 shrink-0">
                    <div className="flex items-center gap-2">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[11px] font-medium tracking-wide ${selectedModalProject.badgeColor}`}>
                        {selectedModalProject.icon && (
                          <selectedModalProject.icon className="w-3.5 h-3.5" />
                        )}
                        <span>{selectedModalProject.categoryLabel}</span>
                      </span>
                      <span className="text-[11px] font-semibold text-stone-500 hidden sm:inline">
                        • Case Study
                      </span>
                    </div>

                    <button
                      onClick={() => setSelectedModalProject(null)}
                      className="p-1 sm:p-1.5 rounded-full hover:bg-stone-200/70 text-stone-500 hover:text-stone-800 transition-colors cursor-pointer"
                      aria-label="Close modal"
                    >
                      <X className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </div>

                  {/* Modal Scrollable Body */}
                  <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
                    {/* Hero Image Container - Compact editorial height */}
                    <div className="relative h-[155px] sm:h-[190px] w-full rounded-xl overflow-hidden bg-stone-100 border border-stone-200/90 shadow-xs">
                      <img
                        src={selectedModalProject.heroImage || selectedModalProject.image}
                        alt={selectedModalProject.title}
                        onError={(e) => {
                          const currentSrc = e.currentTarget.getAttribute('src');
                          if (currentSrc && currentSrc.startsWith('/images/')) {
                            e.currentTarget.src = currentSrc.replace('/images/', '/assets/');
                          } else if (currentSrc && currentSrc.startsWith('/assets/')) {
                            e.currentTarget.src = currentSrc.replace('/assets/', '/images/');
                          }
                        }}
                        className="w-full h-full object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                    </div>

                    {/* Title & Overview */}
                    <div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-[#0B2546] tracking-tight mb-1">
                        {selectedModalProject.title}
                      </h3>
                      {selectedModalProject.subtitle && (
                        <p className="text-[11px] sm:text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">
                          {selectedModalProject.subtitle}
                        </p>
                      )}
                      <p className="text-xs sm:text-[13px] text-stone-700 leading-relaxed font-normal">
                        {selectedModalProject.overview || selectedModalProject.description}
                      </p>
                    </div>

                    {/* Challenge & Solution Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {/* Challenge Box */}
                      <div className="p-3.5 sm:p-4 rounded-xl bg-stone-50/80 border border-stone-200/80">
                        <div className="flex items-center gap-2 mb-1.5 text-[#0B2546]">
                          <div className="w-6 h-6 rounded-md bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-200/80 shrink-0">
                            <Target className="w-3.5 h-3.5" />
                          </div>
                          <h4 className="text-xs font-bold tracking-tight">The Challenge</h4>
                        </div>
                        <p className="text-[11px] sm:text-xs text-stone-600 leading-relaxed">
                          {selectedModalProject.challenge}
                        </p>
                      </div>

                      {/* Solution Box */}
                      <div className="p-3.5 sm:p-4 rounded-xl bg-stone-50/80 border border-stone-200/80">
                        <div className="flex items-center gap-2 mb-1.5 text-[#0B2546]">
                          <div className="w-6 h-6 rounded-md bg-blue-50 text-[#0866E8] flex items-center justify-center border border-blue-200/80 shrink-0">
                            <Layers className="w-3.5 h-3.5" />
                          </div>
                          <h4 className="text-xs font-bold tracking-tight">Solution Provided</h4>
                        </div>
                        <p className="text-[11px] sm:text-xs text-stone-600 leading-relaxed">
                          {selectedModalProject.solution}
                        </p>
                      </div>
                    </div>

                    {/* Key Highlights */}
                    {selectedModalProject.highlights && selectedModalProject.highlights.length > 0 && (
                      <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-stone-200/90 shadow-2xs">
                        <h4 className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-stone-500 mb-2">
                          Key Highlights &amp; Implementation
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {selectedModalProject.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                              <span className="text-[11px] sm:text-xs text-stone-700 leading-snug">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Visual Gallery */}
                    {selectedModalProject.gallery && selectedModalProject.gallery.length > 0 && (
                      <div>
                        <h4 className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-stone-500 mb-2">
                          Project Visual Gallery
                        </h4>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                          {selectedModalProject.gallery.map((item, idx) => (
                            <div key={idx} className="rounded-lg overflow-hidden border border-stone-200 bg-stone-50 shadow-2xs">
                              <div className="aspect-[16/10] overflow-hidden">
                                <img
                                  src={item.src}
                                  alt={item.caption || 'Project visual'}
                                  onError={(e) => {
                                    const currentSrc = e.currentTarget.getAttribute('src');
                                    if (currentSrc && currentSrc.startsWith('/images/')) {
                                      e.currentTarget.src = currentSrc.replace('/images/', '/assets/');
                                    } else if (currentSrc && currentSrc.startsWith('/assets/')) {
                                      e.currentTarget.src = currentSrc.replace('/assets/', '/images/');
                                    }
                                  }}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              {item.caption && (
                                <p className="p-1.5 text-[10px] text-stone-600 line-clamp-1 border-t border-stone-100 bg-white">
                                  {item.caption}
                                </p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Tangible Impact */}
                    {selectedModalProject.impact && (
                      <div className="p-3.5 sm:p-4 rounded-xl bg-gradient-to-r from-blue-50/70 via-stone-50 to-blue-50/40 border border-blue-200/80">
                        <div className="flex items-center gap-1.5 mb-1 text-[#0B2546]">
                          <TrendingUp className="w-3.5 h-3.5 text-[#0866E8]" />
                          <h4 className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#0866E8]">
                            Tangible Business Impact
                          </h4>
                        </div>
                        <p className="text-[11px] sm:text-xs text-stone-700 leading-relaxed">
                          {selectedModalProject.impact}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Modal Footer Actions */}
                  <div className="px-4 sm:px-6 py-3 border-t border-stone-200/80 bg-stone-50/80 flex flex-wrap items-center justify-between gap-2.5 shrink-0">
                    <Link
                      to={`/portfolio/${selectedModalProject.slug}`}
                      onClick={() => setSelectedModalProject(null)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-600 hover:text-[#0866E8] transition-colors"
                    >
                      <span>Open Dedicated Page</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </Link>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setSelectedModalProject(null)}
                        className="px-3.5 py-1.5 rounded-lg text-xs font-semibold text-stone-700 bg-white hover:bg-stone-100 border border-stone-200 shadow-2xs transition-colors cursor-pointer"
                      >
                        Close
                      </button>
                      <Link
                        to="/contact"
                        onClick={() => setSelectedModalProject(null)}
                        className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 rounded-lg text-xs font-semibold text-white bg-[#0866E8] hover:bg-[#0756C5] shadow-xs hover:shadow-sm transition-all"
                      >
                        <span>Inquire About Similar Work</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}

    </section>
  );
}
