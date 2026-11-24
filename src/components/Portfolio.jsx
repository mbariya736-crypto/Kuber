import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import {
  X,
  Check,
  PhoneCall,
  ArrowRight,
  FolderKanban,
  Bot,
  ShieldCheck,
  Film
} from 'lucide-react';

/* ========================================================================= */
/* MAIN PORTFOLIO COMPONENT (Clean Light Theme, Matches Services Exactly)    */
/* ========================================================================= */
export default function Portfolio({ onOpenModal }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedModalProject, setSelectedModalProject] = useState(null);
  const shouldReduceMotion = useReducedMotion();

  // Esc key listener to close interactive modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedModalProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Genuine Kuber AIS Projects (Human-Written, Accurate, Grounded)
  const projects = [
    {
      id: 'digital-jaal-film',
      category: 'ai-films',
      categoryLabel: 'Public Awareness Film',
      title: 'DIGITAL JAAL',
      subtitle: 'Official Cyber Fraud Awareness Initiative',
      icon: Film,
      badgeColor: 'text-cyan-800 bg-cyan-50 border border-cyan-200/80',
      iconColor: 'text-cyan-600',
      image: '/images/digital-jaal.png',
      description: 'A public awareness film highlighting real-world digital financial fraud, deceptive payment requests, and practical prevention steps via National Cyber Helpline 1930.',
      features: [
        'Realistic scenarios covering UPI payment deception and fraudulent QR codes',
        'Direct guidance on immediate response steps within the first hour of financial fraud',
        'Official citizen reporting process for cybercrime.gov.in and Helpline 1930'
      ]
    },
    {
      id: 'lead-generation-campaign',
      category: 'ai-services',
      categoryLabel: 'Business Automation',
      title: 'Customer Inquiry Routing',
      subtitle: 'Inquiry Management & Notification Flow',
      icon: Bot,
      badgeColor: 'text-[#0866E8] bg-blue-50 border border-blue-200/80',
      iconColor: 'text-[#0866E8]',
      image: '/images/ai-lead-engine.png',
      description: 'An automated inquiry handling setup that collects website form submissions, checks basic details, and delivers immediate alerts to team members.',
      features: [
        'Consolidated lead tracking organized into a clean spreadsheet view',
        'Instant WhatsApp and email notifications for fast customer follow-ups',
        'Basic submission filtering to minimize repetitive spam'
      ]
    },
    {
      id: 'cyber-security-operations',
      category: 'cyber-security',
      categoryLabel: 'Cyber Security',
      title: 'Digital Account Protection',
      subtitle: 'Access Audits & Practical Defenses',
      icon: ShieldCheck,
      badgeColor: 'text-emerald-700 bg-emerald-50 border border-emerald-200/80',
      iconColor: 'text-emerald-600',
      image: '/images/cyber-security.png',
      description: 'Practical security reviews and account audits helping small teams implement multi-factor authentication, strong password hygiene, and employee phishing awareness.',
      features: [
        'Team training sessions on recognizing suspicious emails and malicious attachments',
        'Step-by-step rollout of multi-factor authentication across essential accounts',
        'Standard verification guidelines for vendor payment requests'
      ]
    },
    {
      id: 'ai-services-platform',
      category: 'ai-services',
      categoryLabel: 'Business Automation',
      title: 'Routine Workflow Automation',
      subtitle: 'Tool Integration & Automated Reporting',
      icon: Bot,
      badgeColor: 'text-[#0866E8] bg-blue-50 border border-blue-200/80',
      iconColor: 'text-[#0866E8]',
      image: '/images/ai-services.png',
      description: 'Automated data connections linking everyday tools like email, customer spreadsheets, and messaging to reduce repetitive manual data entry.',
      features: [
        'Automated transfer of customer details directly into tracking sheets',
        'Pre-configured notification templates for standard order and appointment confirmations',
        'Scheduled weekly summary overviews to keep management informed'
      ]
    },
    {
      id: 'ai-creative-studio',
      category: 'ai-films',
      categoryLabel: 'Film Production',
      title: 'Commercial Brand Media',
      subtitle: 'Short-Form Product & Story Videos',
      icon: Film,
      badgeColor: 'text-cyan-800 bg-cyan-50 border border-cyan-200/80',
      iconColor: 'text-cyan-600',
      image: '/assets/Futuristic-studio-for-AI-driven-creations.webp',
      description: 'Short promotional films and structured business profiles produced from narrative scriptwriting through professional color correction and sound delivery.',
      features: [
        'Storyboarding, script consultation, and narrative pacing tailored for business audiences',
        'Clean audio recording, licensed backing soundscapes, and color grading',
        'Export formats optimized for web platforms, presentations, and social channels'
      ]
    }
  ];

  // Category Filter Tabs
  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'ai-services', label: 'Business Automation' },
    { id: 'cyber-security', label: 'Cyber Security' },
    { id: 'ai-films', label: 'Film Production' },
  ];

  // Filtered Projects
  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(item => item.category === activeFilter);

  const handleOpenDetails = (project) => {
    setSelectedModalProject(project);
    if (onOpenModal) {
      onOpenModal({
        imageSrc: project.image,
        title: project.title,
        subtitle: project.subtitle,
        tag: project.categoryLabel,
        description: project.description
      });
    }
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

      {/* ======================================================== */}
      {/* 4. CLEAN LIGHT THEME CASE STUDY MODAL                    */}
      {/* ======================================================== */}
      <AnimatePresence>
        {selectedModalProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedModalProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-xl w-full max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-slate-200 text-left"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedModalProject(null)}
                className="absolute top-3.5 right-3.5 z-20 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
                aria-label="Close project modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Body */}
              <div className="overflow-y-auto p-6 sm:p-7">
                {/* Project Image */}
                <div className="aspect-[16/10] w-full rounded-xl overflow-hidden bg-slate-100 mb-5 border border-slate-200 relative">
                  <img
                    src={selectedModalProject.image}
                    alt={selectedModalProject.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Category & Title */}
                <div className="mb-2">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider ${selectedModalProject.badgeColor}`}>
                    {selectedModalProject.icon && (
                      <selectedModalProject.icon className="w-3.5 h-3.5" />
                    )}
                    <span>{selectedModalProject.categoryLabel}</span>
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#082B59] mb-1">
                  {selectedModalProject.title}
                </h3>
                {selectedModalProject.subtitle && (
                  <p className="text-xs sm:text-sm font-medium text-slate-500 mb-3.5">
                    {selectedModalProject.subtitle}
                  </p>
                )}

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                  {selectedModalProject.description}
                </p>

                {/* Features & Deliverables */}
                <div className="mb-6 p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                    Key Deliverables &amp; Outcomes
                  </h4>
                  <ul className="space-y-2">
                    {selectedModalProject.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <Check className="w-4 h-4 text-[#0866E8] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <Link
                    to="/contact"
                    onClick={() => setSelectedModalProject(null)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#0866E8] hover:bg-[#0756C5] shadow-xs hover:shadow-md transition-all duration-200"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Inquire About Similar Work</span>
                  </Link>

                  <button
                    onClick={() => setSelectedModalProject(null)}
                    className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-medium transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
