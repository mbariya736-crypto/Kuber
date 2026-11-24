import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Target, 
  TrendingUp, 
  Images, 
  MessageSquare,
  Sparkles,
  PhoneCall,
  Globe
} from 'lucide-react';
import { portfolioProjects, digitalJaalProject } from '../data/portfolioData';

/**
 * ProjectDetailPage
 * 
 * Clean, editorial, human-made project case study showcase:
 * - Dedicated Top Navigation with quick Back link & Inquire Now CTA
 * - Large Project Hero Visual with subtle natural vignette
 * - Concise 2-3 sentence overview
 * - Client Challenge & Solution story sections
 * - Implementation highlights with clean human typography
 * - Visual Project Gallery with contextual captions
 * - Business impact & tangible outcome section
 * - Grounded Contact Call-to-Action
 */
export default function ProjectDetailPage() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();

  // Scroll to top on mount / change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  const allProjects = [digitalJaalProject, ...portfolioProjects];
  const project = allProjects.find(
    (p) => p.slug === projectId || p.id === projectId
  ) || portfolioProjects[0];

  const Icon = project.icon;

  // Next / Previous projects for bottom navigation
  const currentIndex = portfolioProjects.findIndex((p) => p.id === project.id);
  const nextProject = currentIndex >= 0 
    ? portfolioProjects[(currentIndex + 1) % portfolioProjects.length]
    : portfolioProjects[0];

  return (
    <div className="min-h-screen flex flex-col text-[#082B59] bg-[#F9FBFD] relative">
      {/* Subtle handcrafted paper texture / tactile noise */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.035] mix-blend-multiply z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}
      />

      {/* 1. DEDICATED STICKY HEADER */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/90 border-b border-stone-200/80 py-3.5 px-4 sm:px-8 flex items-center justify-between gap-3 shadow-2xs">
        <Link
          to="/#portfolio"
          className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-[#082B59] bg-white hover:bg-stone-50 border border-stone-200 shadow-2xs transition-all cursor-pointer shrink-0"
        >
          <ArrowLeft className="w-4 h-4 text-[#0866E8]" />
          <span>Back to Portfolio</span>
        </Link>

        {/* Center Category Badge */}
        <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-stone-700 bg-stone-100/80 border border-stone-200">
          <Icon className="w-3.5 h-3.5 text-[#0866E8]" />
          <span>{project.categoryLabel}</span>
        </div>

        {/* Right CTA */}
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#0866E8] hover:bg-[#0756C5] shadow-xs hover:shadow-sm transition-all shrink-0"
        >
          <span>Start a Project</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </header>

      {/* 2. MAIN CASE STUDY CONTENT */}
      <main className="flex-1 flex flex-col relative z-10 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-16 sm:pb-24">
        
        {/* Title, Subtitle, and Tag */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
          className="mb-8 sm:mb-10 text-left"
        >
          <div className="mb-3">
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold tracking-wide ${project.badgeColor}`}>
              <Icon className="w-3.5 h-3.5" />
              <span>{project.categoryLabel}</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2546] tracking-tight leading-[1.14] mb-3">
            {project.title}
          </h1>

          <p className="text-sm sm:text-base font-medium text-stone-500 uppercase tracking-wider mb-4">
            {project.subtitle}
          </p>

          <p className="text-base sm:text-lg text-stone-700 leading-relaxed max-w-3xl font-normal">
            {project.overview}
          </p>
        </motion.div>

        {/* Large Project Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
          className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-stone-200/90 bg-stone-100 shadow-lg shadow-blue-900/5 mb-12 sm:mb-16 aspect-[16/10] sm:aspect-[16/9] lg:h-[480px]"
        >
          <img
            src={project.heroImage || project.image}
            alt={project.title}
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
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
        </motion.div>

        {/* Problem Statement & Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 mb-12 sm:mb-16">
          {/* Challenge Box */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#FCFDFE] border border-stone-200/85 shadow-xs flex flex-col justify-start">
            <div className="flex items-center gap-2.5 mb-4 text-[#0B2546]">
              <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-200/80">
                <Target className="w-5 h-5" />
              </div>
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">The Challenge</h2>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
              {project.challenge}
            </p>
          </div>

          {/* Solution Box */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#FCFDFE] border border-stone-200/85 shadow-xs flex flex-col justify-start">
            <div className="flex items-center gap-2.5 mb-4 text-[#0B2546]">
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0866E8] flex items-center justify-center border border-blue-200/80">
                <Layers className="w-5 h-5" />
              </div>
              <h2 className="text-lg sm:text-xl font-bold tracking-tight">The Solution Provided</h2>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
              {project.solution}
            </p>
          </div>
        </div>

        {/* National Cyber Helpline & Citizen Portal (Digital Jaal Public Awareness Resource) */}
        {project.id === 'digital-jaal-film' && (
          <div className="mb-12 sm:mb-16 p-5 sm:p-6 rounded-2xl bg-white border border-stone-200/90 shadow-xs flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 border border-rose-200 flex items-center justify-center shrink-0">
                <PhoneCall className="w-5 h-5 text-rose-600" />
              </div>
              <div>
                <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider block">
                  National Cyber Crime Helpline
                </span>
                <a 
                  href="tel:1930" 
                  className="text-base font-bold text-[#082B59] hover:text-rose-600 transition-colors"
                >
                  1930 (Toll Free)
                </a>
              </div>
            </div>

            <div className="hidden md:block h-8 w-px bg-stone-200" />

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0866E8] border border-blue-200 flex items-center justify-center shrink-0">
                <Globe className="w-5 h-5 text-[#0866E8]" />
              </div>
              <div>
                <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider block">
                  Official Citizen Reporting Portal
                </span>
                <a
                  href="https://cybercrime.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-bold text-[#0866E8] hover:underline transition-colors"
                >
                  cybercrime.gov.in
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Key Features & Implementation Highlights */}
        <div className="mb-12 sm:mb-16 p-6 sm:p-8 rounded-2xl bg-white border border-stone-200/85 shadow-xs">
          <div className="flex items-center gap-2.5 mb-6 text-[#0B2546]">
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0866E8] flex items-center justify-center border border-blue-200/80">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Key Implementation Highlights</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {project.highlights.map((highlight, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-xl bg-stone-50/70 border border-stone-200/70 flex items-start gap-3"
              >
                <span className="w-2 h-2 rounded-full bg-[#0866E8] shrink-0 mt-2" />
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-medium">
                  {highlight}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Project Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="mb-12 sm:mb-16">
            <div className="flex items-center gap-2.5 mb-6 text-[#0B2546]">
              <div className="w-9 h-9 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center border border-cyan-200/80">
                <Images className="w-5 h-5" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Project Visual Gallery</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
              {project.gallery.map((item, idx) => (
                <div 
                  key={idx}
                  className="rounded-2xl overflow-hidden border border-stone-200/85 bg-white shadow-xs group"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                    <img
                      src={item.src}
                      alt={item.caption}
                      onError={(e) => {
                        const currentSrc = e.currentTarget.getAttribute('src');
                        if (currentSrc && currentSrc.startsWith('/images/')) {
                          e.currentTarget.src = currentSrc.replace('/images/', '/assets/');
                        } else if (currentSrc && currentSrc.startsWith('/assets/')) {
                          e.currentTarget.src = currentSrc.replace('/assets/', '/images/');
                        }
                      }}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                  {item.caption && (
                    <div className="p-3.5 bg-stone-50/60 border-t border-stone-100 text-xs font-medium text-stone-600">
                      {item.caption}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tangible Business Impact */}
        <div className="mb-12 sm:mb-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-50/60 via-stone-50 to-blue-50/40 border border-blue-200/70 shadow-xs">
          <div className="flex items-center gap-2.5 mb-3 text-[#0B2546]">
            <div className="w-9 h-9 rounded-xl bg-[#0866E8] text-white flex items-center justify-center shadow-2xs">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Project Outcome &amp; Impact</h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-normal">
            {project.impact}
          </p>
        </div>

        {/* Clean Call-to-Action Section */}
        <div className="text-center p-8 sm:p-12 rounded-3xl bg-[#082B59] text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-3 leading-snug">
              Have a Similar Project in Mind?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mb-6 leading-relaxed">
              Let's discuss how customized automation, security hardening, or brand media can support your business goals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl text-sm font-semibold text-white bg-[#0866E8] hover:bg-[#0756C5] shadow-xs hover:shadow-md transition-all"
              >
                <span>Get in Touch With Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              {portfolioProjects.length > 1 && (
                <Link
                  to={`/portfolio/${nextProject.slug}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white/90 bg-white/10 hover:bg-white/15 border border-white/20 transition-all"
                >
                  <span>Next: {nextProject.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              )}
            </div>
          </div>
        </div>

      </main>

      {/* 3. FOOTER NAVIGATION */}
      <footer className="border-t border-stone-200 bg-white/95 backdrop-blur-sm py-6 sm:py-8 px-4 sm:px-8 relative z-20">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            to="/#portfolio"
            className="inline-flex items-center gap-2 text-sm font-semibold text-stone-700 hover:text-[#0866E8] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[#0866E8]" />
            <span>Return to Portfolio Grid</span>
          </Link>
          <div className="flex items-center gap-2 text-xs text-stone-500 font-medium">
            <span>Client Case Study • Kuber AIS Technologies</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
