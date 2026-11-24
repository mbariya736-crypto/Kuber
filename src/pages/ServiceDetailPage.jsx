import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowRight, 
  Bot, 
  ShieldCheck, 
  Film
} from 'lucide-react';
import { 
  AIServicesExperience, 
  CyberSecurityExperience, 
  AIFilmStudioExperience 
} from '../components/PracticeExperience';
import ServiceSpecificBackground from '../components/ServiceSpecificBackground';
import ServicesSplashScreen from '../components/ServicesSplashScreen';

export default function ServiceDetailPage({ practiceId: propPracticeId }) {
  const { practiceId: paramPracticeId } = useParams();
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();
  const [showSplash, setShowSplash] = useState(true);

  const activeId = propPracticeId || paramPracticeId || 'ai-services';
  const normalizedId = activeId === 'ai-film-studio' ? 'ai-films' : activeId;

  // Scroll to top & trigger page-wise poster splash animation on service change
  useEffect(() => {
    window.scrollTo(0, 0);
    setShowSplash(true);
  }, [normalizedId]);

  const serviceMeta = {
    'ai-services': {
      title: 'AI & Business Automation',
      category: 'AI & Business Automation',
      tag: 'Workflow Automation & Organization',
      icon: Bot,
      accentColor: 'text-[#0866E8]',
      accentBg: 'bg-blue-50 border-blue-200/80',
      nextServices: [
        { id: 'cyber-security', title: 'Cyber Security Services', path: '/services/cyber-security' },
        { id: 'ai-films', title: 'AI Film & Video Production', path: '/services/ai-films' }
      ]
    },
    'cyber-security': {
      title: 'Cyber Security Services',
      category: 'Cyber Security Services',
      tag: 'Defense, Audits & Scam Prevention',
      icon: ShieldCheck,
      accentColor: 'text-emerald-600',
      accentBg: 'bg-emerald-50 border-emerald-200/80',
      nextServices: [
        { id: 'ai-services', title: 'AI & Business Automation', path: '/services/ai-services' },
        { id: 'ai-films', title: 'AI Film & Video Production', path: '/services/ai-films' }
      ]
    },
    'ai-films': {
      title: 'AI Film & Video Production',
      category: 'AI Film & Video Production',
      tag: 'Commercials & Public Awareness Media',
      icon: Film,
      accentColor: 'text-cyan-700',
      accentBg: 'bg-cyan-50 border-cyan-200/80',
      nextServices: [
        { id: 'ai-services', title: 'AI & Business Automation', path: '/services/ai-services' },
        { id: 'cyber-security', title: 'Cyber Security Services', path: '/services/cyber-security' }
      ]
    }
  };

  const meta = serviceMeta[normalizedId] || serviceMeta['ai-services'];
  const Icon = meta.icon;

  const handleOpenContact = () => {
    navigate('/contact');
  };

  return (
    <div className="min-h-screen flex flex-col text-[#082B59] bg-[#F8FAFD] relative">
      {/* 1.5-Second Poster-Related Splash Screen Animation */}
      <AnimatePresence mode="wait">
        {showSplash && (
          <ServicesSplashScreen
            key={normalizedId}
            serviceId={normalizedId}
            onFinish={() => setShowSplash(false)}
            duration={1500}
          />
        )}
      </AnimatePresence>

      {/* Service-Specific Handcrafted Background Animation (Runs after service page opens) */}
      <ServiceSpecificBackground serviceId={normalizedId} className="fixed inset-0 w-full h-full pointer-events-none z-0" />

      {/* 1. DEDICATED SERVICE DETAIL TOP HEADER */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/90 border-b border-slate-200/80 py-3 px-4 sm:px-8 flex items-center justify-between gap-3 shadow-2xs">
        {/* Prominent Back to Services Link */}
        <Link
          to="/services"
          className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-[#082B59] bg-white hover:bg-slate-50 border border-slate-200 shadow-2xs transition-all cursor-pointer shrink-0"
        >
          <ArrowLeft className={`w-4 h-4 ${meta.accentColor}`} />
          <span>Back to Services</span>
        </Link>

        {/* Center: Clean Service Identifier */}
        <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-slate-700 bg-slate-100/80 border border-slate-200">
          <Icon className={`w-3.5 h-3.5 ${meta.accentColor}`} />
          <span>{meta.title}</span>
        </div>

        {/* Right Action: Get in Touch */}
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#0866E8] hover:bg-[#0756C5] shadow-xs hover:shadow-sm transition-all shrink-0"
        >
          <span>Inquire Now</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </header>

      {/* 1.5 DEDICATED SWIPE / SWAP SERVICE SWITCHER TAB BAR */}
      <div className="sticky top-[57px] z-40 w-full backdrop-blur-md bg-white/95 border-b border-slate-200/90 py-2.5 px-4 shadow-2xs">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto py-0.5">
          {[
            { id: 'ai-services', title: 'AI & Business Automation', icon: Bot, path: '/services/ai-services' },
            { id: 'cyber-security', title: 'Cyber Security Services', icon: ShieldCheck, path: '/services/cyber-security' },
            { id: 'ai-films', title: 'AI Film & Video Production', icon: Film, path: '/services/ai-films' }
          ].map((tab) => {
            const isActive = normalizedId === tab.id;
            const TabIcon = tab.icon;
            return (
              <Link
                key={tab.id}
                to={tab.path}
                className={`relative px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'text-white bg-[#0866E8] shadow-xs'
                    : 'text-stone-600 hover:text-[#082B59] bg-stone-100 hover:bg-stone-200/80 border border-stone-200/90'
                }`}
              >
                <TabIcon className="w-3.5 h-3.5" />
                <span>{tab.title}</span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* 2. DEDICATED SERVICE DETAIL BODY */}
      <main className="flex-1 flex flex-col relative z-10">
        {normalizedId === 'ai-services' && (
          <AIServicesExperience onOpenContact={handleOpenContact} />
        )}
        {normalizedId === 'cyber-security' && (
          <CyberSecurityExperience onOpenContact={handleOpenContact} />
        )}
        {normalizedId === 'ai-films' && (
          <AIFilmStudioExperience onOpenContact={handleOpenContact} />
        )}
      </main>

      {/* 3. DEDICATED BOTTOM NAVIGATION & CROSS-SERVICE EXPLORATION */}
      <footer className="border-t border-slate-200 bg-white/95 backdrop-blur-sm py-6 sm:py-8 px-4 sm:px-8 relative z-20">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-[#0866E8] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[#0866E8]" />
            <span>Back to All Services</span>
          </Link>

          {/* Cross-Service Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm">
            <span className="text-slate-500 font-medium">Other Services:</span>
            {meta.nextServices.map((service) => (
              <Link
                key={service.id}
                to={service.path}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-[#082B59] hover:text-[#0866E8] border border-slate-200 transition-all font-semibold"
              >
                <span>{service.title}</span>
                <ArrowRight className="w-3 h-3 text-slate-400" />
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
