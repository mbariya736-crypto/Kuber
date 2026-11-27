import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Bot,
  ShieldCheck,
  Film,
  TrendingUp,
  Home,
  Sparkles,
  Layers,
  Briefcase,
  HelpCircle,
  Mail,
  Zap,
  Phone,
  MessageSquare
} from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

/* ========================================================================= */
/* PREMIUM HANDCRAFTED CORPORATE NAVBAR                                      */
/* ========================================================================= */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);
  const [activeHoverCategory, setActiveHoverCategory] = useState('ai-services');
  const [expandedMobileCategory, setExpandedMobileCategory] = useState('ai-services');

  const dropdownTimeoutRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Hide the entire navbar on service detail pages for a focused full-screen view
  const isServiceDetailPage = location.pathname.startsWith('/services/') && location.pathname !== '/services';
  if (isServiceDetailPage) {
    return null;
  }

  // Scroll listener: update isScrolled state for smooth morphing (full navbar at top -> small rounded stick on header)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Home section spy (only active on home page '/')
  const [activeHomeSection, setActiveHomeSection] = useState('home');
  useEffect(() => {
    if (location.pathname !== '/') return;

    const handleHomeScroll = () => {
      // Bottom of page check (contact section)
      if ((window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 60)) {
        setActiveHomeSection('contact');
        return;
      }

      // Top of page check (home section)
      if (window.scrollY < 120) {
        setActiveHomeSection('home');
        return;
      }

      const sectionIds = ['home', 'about', 'services', 'portfolio', 'faq', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveHomeSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleHomeScroll, { passive: true });
    handleHomeScroll();
    return () => window.removeEventListener('scroll', handleHomeScroll);
  }, [location.pathname]);

  // Close mobile menu & dropdown on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Dropdown practice items with attached related sub-services (OUR BUSINESS SERVICES)
  const serviceItems = [
    {
      id: 'ai-services',
      name: 'AI Services',
      title: 'AI & Business Automation',
      path: '/services/ai-services',
      description: 'Connected systems, intelligent agents & routine business workflows',
      icon: Bot,
      color: 'text-[#0866E8]',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-100',
      activeColor: '#0866E8',
      subServices: [
        'AI Chatbots',
        'AI Agents',
        'AI Workflow Automation',
        'AI Sales & Lead Generation Agents',
        'AI Calling Solutions',
        'Tours & Travels Enquiry Management',
        'Real Estate Lead Management'
      ]
    },
    {
      id: 'cyber-security',
      name: 'Cyber Security Services',
      title: 'Cyber Security Services',
      path: '/services/cyber-security',
      description: 'Practical security audits, multi-factor protection & fraud prevention',
      icon: ShieldCheck,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-100',
      activeColor: '#10B981',
      subServices: [
        'Web Application Security',
        'Vulnerability Assessment & Penetration Testing (VAPT)',
        'API Security Testing'
      ]
    },
    {
      id: 'ai-films',
      name: 'AI Film Services',
      title: 'AI Film & Video Production',
      path: '/services/ai-films',
      description: 'High-quality commercials, corporate stories & public awareness films',
      icon: Film,
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50',
      borderColor: 'border-cyan-100',
      activeColor: '#06B6D4',
      subServices: [
        'AI Short Film Production',
        'AI Advertisement Videos',
        'AI Reels & Promotional Videos',
        'AI Animation & Brand Videos',
        'AI Video Editing'
      ]
    }
  ];

  const navLinks = [
    {
      name: 'Home',
      subtitle: 'Main overview',
      path: '/',
      isPage: true,
      id: 'home',
      icon: Home,
      iconColor: 'text-[#0866E8]',
      iconBg: 'bg-blue-50 border-blue-100'
    },
    {
      name: 'About',
      subtitle: 'Our story & tech mission',
      path: '/about',
      isPage: true,
      id: 'about',
      icon: Sparkles,
      iconColor: 'text-indigo-600',
      iconBg: 'bg-indigo-50 border-indigo-100'
    },
    {
      name: 'Services',
      subtitle: 'AI, Cyber & Media practices',
      path: '/services',
      isPage: true,
      id: 'services',
      hasDropdown: true,
      badge: '3 Solutions',
      icon: Layers,
      iconColor: 'text-cyan-600',
      iconBg: 'bg-cyan-50 border-cyan-100'
    },
    {
      name: 'Portfolio',
      subtitle: 'Client projects & impact',
      path: '/#portfolio',
      isPage: false,
      targetId: 'portfolio',
      id: 'portfolio',
      icon: Briefcase,
      iconColor: 'text-purple-600',
      iconBg: 'bg-purple-50 border-purple-100'
    },
    {
      name: 'FAQ',
      subtitle: 'Answers & common queries',
      path: '/#faq',
      isPage: false,
      targetId: 'faq',
      id: 'faq',
      icon: HelpCircle,
      iconColor: 'text-amber-600',
      iconBg: 'bg-amber-50 border-amber-100'
    },
    {
      name: 'Contact',
      subtitle: 'Free consultation & inquiry',
      path: '/contact',
      isPage: true,
      id: 'contact',
      icon: Mail,
      iconColor: 'text-emerald-600',
      iconBg: 'bg-emerald-50 border-emerald-100'
    },
  ];

  const isLinkActive = (link) => {
    if (location.pathname === '/') {
      return activeHomeSection === link.id;
    }
    if (link.id === 'services') {
      return location.pathname.startsWith('/services');
    }
    return location.pathname === link.path;
  };

  const handleLinkClick = (e, link) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);

    if (link.isPage) {
      if (link.path === '/') {
        setActiveHomeSection('home');
      }
      navigate(link.path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (location.pathname === '/') {
        setActiveHomeSection(link.targetId);
        const target = document.getElementById(link.targetId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState(null, '', `#${link.targetId}`);
        }
      } else {
        navigate(`/#${link.targetId}`);
      }
    }
  };

  const handlePracticeClick = (path) => {
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMouseEnterServices = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setServicesDropdownOpen(true);
  };

  const handleMouseLeaveServices = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 180);
  };

  return (
    <>
      {/* Dimmed Backdrop Overlay on Mobile When Drawer is Open (Covers all background decorative circles) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 z-[80] bg-slate-950/50 backdrop-blur-sm lg:hidden"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <header
        className={`fixed top-0 left-0 right-0 z-[90] transition-all duration-300 ease-in-out pointer-events-none ${
          mobileMenuOpen
            ? 'pt-2.5 sm:pt-3.5 px-3 sm:px-6'
            : isScrolled
            ? 'pt-2.5 sm:pt-3.5 px-3 sm:px-6'
            : 'pt-0 px-0'
        }`}
        style={{
          paddingTop: mobileMenuOpen || isScrolled ? 'max(10px, env(safe-area-inset-top, 10px))' : 'max(0px, env(safe-area-inset-top, 0px))'
        }}
      >
        <div
          className={`pointer-events-auto transition-all duration-300 ease-in-out ${
            mobileMenuOpen
              ? 'w-full max-w-lg mx-auto rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-2xl overflow-hidden'
              : isScrolled
              ? 'max-w-5xl mx-auto rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-[0_8px_30px_rgba(8,43,89,0.08)] px-4 sm:px-6'
              : 'w-full bg-white/95 backdrop-blur-sm border-b border-slate-200/80 shadow-[0_2px_12px_rgba(8,43,89,0.03)] px-4 sm:px-6 lg:px-8'
          }`}
        >
          <div className={mobileMenuOpen ? 'w-full' : isScrolled ? 'w-full' : 'max-w-7xl mx-auto'}>
            <nav
              className={`flex items-center justify-between transition-all duration-300 ${
                mobileMenuOpen
                  ? 'h-[58px] sm:h-[62px] px-4 sm:px-5 border-b border-slate-100 bg-white'
                  : isScrolled
                  ? 'h-[54px] sm:h-[58px]'
                  : 'h-[68px] sm:h-[72px]'
              }`}
            >
              {/* Logo */}
              <div className="shrink-0 flex items-center">
                <Link
                  to="/"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="flex items-center"
                >
                  <img
                    src="/images/kuber_logo_transparent.png"
                    alt="KUBER AIS TECHNOLOGIES Logo"
                    className={`w-auto object-contain transition-all duration-300 ${
                      mobileMenuOpen
                        ? 'h-7 sm:h-7.5'
                        : isScrolled
                        ? 'h-7 sm:h-7.5'
                        : 'h-8 sm:h-9'
                    }`}
                    style={{ aspectRatio: '720 / 241' }}
                  />
                </Link>
              </div>

              {/* Desktop Navigation Links with Natural Spacing */}
              <div className={`hidden lg:flex items-center transition-all duration-300 ${isScrolled ? 'gap-3.5 xl:gap-5' : 'gap-5 xl:gap-7'}`}>
                {navLinks.map((link) => {
                  const active = isLinkActive(link);

                  // Services with Dropdown
                  if (link.hasDropdown) {
                    return (
                      <div
                        key={link.name}
                        className="relative"
                        onMouseEnter={handleMouseEnterServices}
                        onMouseLeave={handleMouseLeaveServices}
                      >
                        <button
                          type="button"
                          onClick={(e) => handleLinkClick(e, link)}
                          className={`inline-flex items-center gap-1.5 rounded-full font-medium transition-colors duration-150 cursor-pointer ${isScrolled ? 'px-2.5 py-1 text-xs' : 'px-3 py-1.5 text-sm'
                            } ${active || servicesDropdownOpen
                              ? 'text-[#0866E8] bg-blue-50 font-semibold'
                              : 'text-[#082B59] hover:text-[#0866E8] hover:bg-slate-50'
                            }`}
                        >
                          <span>{link.name}</span>
                          <ChevronDown
                            className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-[#0866E8]' : 'text-slate-400'
                              }`}
                          />
                        </button>

                        {/* Smooth, Luxury Two-Level Dropdown Menu (Second Dropdown for Sub-Services) */}
                        <AnimatePresence>
                          {servicesDropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: 10, scale: 0.98 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: 6, scale: 0.98 }}
                              transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                              className="absolute top-full -left-16 lg:-left-24 pt-2.5 w-[650px] z-50 pointer-events-auto"
                            >
                              <div className="bg-white/98 backdrop-blur-2xl rounded-2xl border border-slate-200/90 shadow-[0_20px_60px_-15px_rgba(8,43,89,0.18)] overflow-hidden flex flex-col relative">
                                {/* Top Dynamic Gradient Accent Line */}
                                <div
                                  className="h-[2.5px] w-full transition-all duration-300"
                                  style={{
                                    background: activeHoverCategory === 'ai-services'
                                      ? 'linear-gradient(90deg, #0866E8, #00B9E8)'
                                      : activeHoverCategory === 'cyber-security'
                                      ? 'linear-gradient(90deg, #10B981, #14B8A6)'
                                      : 'linear-gradient(90deg, #06B6D4, #3B82F6)'
                                  }}
                                />

                                <div className="flex">
                                  {/* Level 1: Left Navigation Rail (The 3 Core Practices) */}
                                  <div className="w-[230px] bg-slate-50/70 border-r border-slate-100 p-2.5 flex flex-col justify-center gap-1.5 shrink-0">
                                    {serviceItems.map((item) => {
                                      const isHovered = activeHoverCategory === item.id;
                                      const isItemActive = location.pathname === item.path;
                                      const IconComponent = item.icon;

                                      return (
                                        <button
                                          key={item.id}
                                          type="button"
                                          onMouseEnter={() => setActiveHoverCategory(item.id)}
                                          onClick={() => handlePracticeClick(item.path)}
                                          className={`w-full text-left p-2.5 rounded-xl transition-all duration-200 flex items-center justify-between cursor-pointer border relative overflow-hidden ${
                                            isHovered
                                              ? 'bg-white shadow-xs border-slate-200/90 text-[#082B59]'
                                              : isItemActive
                                              ? 'bg-blue-50/60 border-blue-200/60 text-[#0866E8]'
                                              : 'hover:bg-white/70 border-transparent text-slate-700'
                                          }`}
                                        >
                                          {/* Left Active Indicator Bar */}
                                          {isHovered && (
                                            <span
                                              className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full"
                                              style={{ backgroundColor: item.activeColor }}
                                            />
                                          )}

                                          <div className="flex items-center gap-2.5 min-w-0 pl-1">
                                            <div className={`p-1.5 rounded-lg border transition-transform duration-200 ${item.borderColor} ${item.bgColor} ${item.color} ${isHovered ? 'scale-105 shadow-2xs' : ''} shrink-0`}>
                                              <IconComponent className="w-4 h-4" />
                                            </div>
                                            <div className="min-w-0 flex-1">
                                              <div className={`text-xs font-bold leading-tight truncate ${isHovered ? 'text-[#0866E8]' : 'text-slate-800'}`}>
                                                {item.name}
                                              </div>
                                            </div>
                                          </div>
                                          <ChevronRight className={`w-3.5 h-3.5 shrink-0 transition-transform ${isHovered ? 'text-[#0866E8] translate-x-0.5' : 'text-slate-300'}`} />
                                        </button>
                                      );
                                    })}
                                  </div>

                                  {/* Level 2: Right Interactive Sub-Services Grid */}
                                  <div className="flex-1 p-4 bg-white flex flex-col justify-center min-h-[260px] relative overflow-hidden">
                                    {/* Subtle Ambient Background Aura */}
                                    <div
                                      className="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl pointer-events-none opacity-40 transition-colors duration-500"
                                      style={{
                                        backgroundColor: activeHoverCategory === 'ai-services'
                                          ? '#dbeafe'
                                          : activeHoverCategory === 'cyber-security'
                                          ? '#d1fae5'
                                          : '#cffafe'
                                      }}
                                    />

                                    <AnimatePresence mode="wait">
                                      {(() => {
                                        const activeCategory = serviceItems.find(c => c.id === activeHoverCategory) || serviceItems[0];
                                        const CategoryIcon = activeCategory.icon;

                                        return (
                                          <motion.div
                                            key={activeCategory.id}
                                            initial={{ opacity: 0, y: 6 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -4 }}
                                            transition={{ duration: 0.16, ease: "easeOut" }}
                                            className="flex flex-col h-full relative z-10"
                                          >
                                            {/* Sub-services Category Header */}
                                            <div className="flex items-center gap-2 pb-2.5 mb-3 border-b border-slate-100">
                                              <div className={`p-1.5 rounded-lg border ${activeCategory.borderColor} ${activeCategory.bgColor} ${activeCategory.color} shadow-2xs`}>
                                                <CategoryIcon className="w-3.5 h-3.5" />
                                              </div>
                                              <span className="text-xs font-extrabold text-[#082B59] uppercase tracking-wider">
                                                {activeCategory.name}
                                              </span>
                                            </div>

                                            {/* Sleek Vertical List with Bullet Dots matching Reference Image */}
                                            <div className="flex flex-col space-y-1 py-1">
                                              {activeCategory.subServices.map((subName) => (
                                                <button
                                                  key={subName}
                                                  type="button"
                                                  onClick={() => handlePracticeClick(activeCategory.path)}
                                                  className="w-full text-left px-2.5 py-1.5 rounded-lg hover:bg-blue-50/70 transition-all duration-150 flex items-center justify-between group cursor-pointer"
                                                >
                                                  <div className="flex items-center gap-2.5 min-w-0">
                                                    <span
                                                      className="w-1.5 h-1.5 rounded-full shrink-0 transition-transform duration-200 group-hover:scale-125"
                                                      style={{ backgroundColor: activeCategory.activeColor }}
                                                    />
                                                    <span className="text-[13px] font-semibold text-slate-700 group-hover:text-[#0866E8] transition-colors leading-tight truncate">
                                                      {subName}
                                                    </span>
                                                  </div>
                                                  <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#0866E8] group-hover:translate-x-0.5 transition-all opacity-0 group-hover:opacity-100 shrink-0 ml-1" />
                                                </button>
                                              ))}
                                            </div>
                                          </motion.div>
                                        );
                                      })()}
                                    </AnimatePresence>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  // Standard Navigation Link
                  return (
                    <a
                      key={link.name}
                      href={link.path}
                      onClick={(e) => handleLinkClick(e, link)}
                      className={`rounded-full font-medium transition-colors duration-150 cursor-pointer ${isScrolled ? 'px-2.5 py-1 text-xs' : 'px-3 py-1.5 text-sm'
                        } ${active
                          ? 'text-[#0866E8] bg-blue-50 font-semibold'
                          : 'text-[#082B59] hover:text-[#0866E8] hover:bg-slate-50'
                        }`}
                    >
                      {link.name}
                    </a>
                  );
                })}
              </div>

              {/* Right Action: Clean Gradient Button */}
              <div className="hidden sm:flex items-center shrink-0">
                <Link
                  to="/contact"
                  className={`inline-flex items-center gap-1.5 rounded-full font-semibold text-white bg-gradient-to-r from-[#0866E8] via-[#0878F0] to-[#00B9E8] shadow-xs hover:shadow-md hover:opacity-95 transition-all duration-200 cursor-pointer ${isScrolled ? 'px-3.5 py-1.5 text-xs' : 'px-4.5 py-2 text-xs sm:text-sm'
                    }`}
                >
                  <span>Get Started</span>
                  <ArrowRight className={isScrolled ? 'w-3 h-3' : 'w-3.5 h-3.5'} />
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`lg:hidden rounded-full text-[#082B59] hover:text-[#0866E8] transition-colors focus:outline-none cursor-pointer flex items-center justify-center shrink-0 ${
                  mobileMenuOpen
                    ? 'w-9 h-9 bg-slate-100/90 hover:bg-slate-200 text-slate-700 shadow-2xs'
                    : isScrolled
                    ? 'w-9 h-9 hover:bg-slate-100'
                    : 'w-10 h-10 hover:bg-slate-100'
                }`}
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-[#082B59]" />
                ) : (
                  <Menu className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-[#082B59]" />
                )}
              </button>
            </nav>
          </div>

          {/* Mobile Drawer (Dynamic, Unique & Human-Crafted) */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="lg:hidden w-full flex flex-col overflow-hidden bg-white/98 backdrop-blur-2xl relative"
                style={{
                  maxHeight: 'calc(100vh - 84px - env(safe-area-inset-bottom, 0px))'
                }}
              >
                {/* Dynamic Ambient Background Aura */}
                <div className="absolute -top-12 -right-12 w-44 h-44 bg-blue-100/60 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-cyan-100/50 rounded-full blur-3xl pointer-events-none" />

                {/* Scrollable Nav Items with Consistent Human-Made Design */}
                <div className="overflow-y-auto overscroll-contain px-3.5 sm:px-4 py-3 space-y-2 flex-1 relative z-10">
                  {navLinks.map((link, idx) => {
                    const active = isLinkActive(link);
                    const IconComponent = link.icon;

                    // Mobile Services Accordion
                    if (link.hasDropdown) {
                      return (
                        <motion.div
                          key={link.name}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.03 + idx * 0.025, duration: 0.22 }}
                          className={`flex flex-col rounded-2xl border transition-all ${
                            active
                              ? 'bg-blue-50/80 border-blue-200 shadow-xs'
                              : mobileServicesExpanded
                              ? 'bg-slate-50/90 border-slate-200'
                              : 'bg-slate-50/60 hover:bg-slate-100/70 border-slate-200/70'
                          }`}
                        >
                          <div
                            className="p-2.5 sm:p-3 flex items-center justify-between cursor-pointer"
                          >
                            <div
                              onClick={(e) => handleLinkClick(e, link)}
                              className="flex items-center gap-3 flex-1 min-w-0"
                            >
                              <div className={`w-9 h-9 rounded-xl flex items-center justify-center border shrink-0 ${link.iconBg} ${link.iconColor} shadow-2xs`}>
                                <IconComponent className="w-4.5 h-4.5" />
                              </div>
                              <span className={`text-sm font-bold truncate block ${active ? 'text-[#0866E8]' : 'text-[#082B59]'}`}>
                                {link.name}
                              </span>
                            </div>

                            <button
                              type="button"
                              onClick={() => setMobileServicesExpanded(!mobileServicesExpanded)}
                              className="p-1.5 rounded-lg text-slate-400 hover:text-[#0866E8] hover:bg-white/80 focus:outline-none transition-colors ml-1"
                              aria-label="Toggle Services submenu"
                            >
                              <ChevronDown
                                className={`w-4 h-4 transition-transform duration-200 ${
                                  mobileServicesExpanded ? 'rotate-180 text-[#0866E8]' : 'text-slate-400'
                                }`}
                              />
                            </button>
                          </div>

                          {/* Expandable Accordion Submenu */}
                          <AnimatePresence>
                            {mobileServicesExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                                className="overflow-hidden px-2.5 pb-2.5 pt-1 space-y-2 border-t border-slate-200/60"
                              >
                                {serviceItems.map((item) => {
                                  const isCategoryExpanded = expandedMobileCategory === item.id;
                                  const SubIcon = item.icon;

                                  return (
                                    <div
                                      key={item.name}
                                      className="rounded-xl border border-slate-200/80 bg-white shadow-2xs overflow-hidden transition-all"
                                    >
                                      {/* Category Header (tap to toggle second dropdown) */}
                                      <div
                                        onClick={() => setExpandedMobileCategory(isCategoryExpanded ? null : item.id)}
                                        className={`p-2.5 flex items-center justify-between cursor-pointer transition-colors ${
                                          isCategoryExpanded ? 'bg-slate-50/80' : 'hover:bg-slate-50'
                                        }`}
                                      >
                                        <div className="flex items-center gap-2.5 min-w-0">
                                          <div className={`p-1.5 rounded-lg border ${item.borderColor} ${item.bgColor} ${item.color} shrink-0`}>
                                            <SubIcon className="w-4 h-4" />
                                          </div>
                                          <div>
                                            <span className={`text-xs font-bold block truncate ${isCategoryExpanded ? 'text-[#0866E8]' : 'text-slate-800'}`}>
                                              {item.name}
                                            </span>
                                          </div>
                                        </div>

                                        <div className="flex items-center gap-1.5 shrink-0">
                                          <ChevronDown
                                            className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                                              isCategoryExpanded ? 'rotate-180 text-[#0866E8]' : ''
                                            }`}
                                          />
                                        </div>
                                      </div>

                                      {/* Level 2: Second Dropdown displaying sub-services */}
                                      <AnimatePresence>
                                        {isCategoryExpanded && (
                                          <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.18, ease: "easeOut" }}
                                            className="overflow-hidden border-t border-slate-100 bg-slate-50/60 px-2.5 py-2 space-y-1"
                                          >
                                            {item.subServices.map((subName) => (
                                              <button
                                                key={subName}
                                                type="button"
                                                onClick={() => handlePracticeClick(item.path)}
                                                className="w-full text-left px-2 py-1.5 rounded-lg hover:bg-white text-slate-700 hover:text-[#0866E8] transition-all flex items-center justify-between text-xs cursor-pointer group"
                                              >
                                                <div className="flex items-center gap-2 min-w-0">
                                                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 group-hover:scale-125 transition-transform" />
                                                  <span className="truncate font-medium">{subName}</span>
                                                </div>
                                                <ArrowRight className="w-3 h-3 text-slate-300 group-hover:text-[#0866E8] group-hover:translate-x-0.5 transition-all shrink-0" />
                                              </button>
                                            ))}
                                          </motion.div>
                                        )}
                                      </AnimatePresence>
                                    </div>
                                  );
                                })}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      );
                    }

                    // Normal Links with Consistent Card Design
                    return (
                      <motion.a
                        key={link.name}
                        href={link.path}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.03 + idx * 0.025, duration: 0.22 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={(e) => handleLinkClick(e, link)}
                        className={`p-2.5 sm:p-3 rounded-2xl transition-all flex items-center justify-between cursor-pointer border ${
                          active
                            ? 'bg-blue-50/80 text-[#0866E8] border-blue-200 shadow-xs'
                            : 'bg-slate-50/60 hover:bg-slate-100/70 border-slate-200/70 text-[#082B59]'
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className={`w-9 h-9 rounded-xl flex items-center justify-center border shrink-0 ${link.iconBg} ${link.iconColor} shadow-2xs`}>
                            <IconComponent className="w-4.5 h-4.5" />
                          </div>
                          <span className={`text-sm font-bold block truncate ${active ? 'text-[#0866E8]' : 'text-[#082B59]'}`}>
                            {link.name}
                          </span>
                        </div>
                        <ArrowRight className={`w-4 h-4 shrink-0 transition-transform ${active ? 'text-[#0866E8] translate-x-0.5' : 'text-slate-400'}`} />
                      </motion.a>
                    );
                  })}
                </div>

                {/* Direct Connect Quick Action Bar */}
                <div className="px-3.5 sm:px-4 py-2.5 border-t border-slate-100 bg-slate-50/60 relative z-10">
                  <div className="grid grid-cols-3 gap-2">
                    <a
                      href="https://wa.me/917490923790?text=Hello%20Kuber%20AIS%20Technologies%2C%20I%20would%20like%20to%20discuss%20a%20project."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-50/70 border border-emerald-200/80 hover:bg-emerald-100/70 transition-colors shadow-2xs text-center group active:scale-95"
                    >
                      <MessageSquare className="w-4 h-4 text-emerald-600 mb-0.5 group-hover:scale-110 transition-transform" />
                      <span className="text-[11px] font-bold text-emerald-800">WhatsApp</span>
                    </a>

                    <a
                      href="tel:+917490923790"
                      className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-blue-50/70 border border-blue-200/80 hover:bg-blue-100/70 transition-colors shadow-2xs text-center group active:scale-95"
                    >
                      <Phone className="w-4 h-4 text-[#0866E8] mb-0.5 group-hover:scale-110 transition-transform" />
                      <span className="text-[11px] font-bold text-blue-800">Call Us</span>
                    </a>

                    <a
                      href="mailto:kuberaistechnologies@gmail.com"
                      className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-indigo-50/70 border border-indigo-200/80 hover:bg-indigo-100/70 transition-colors shadow-2xs text-center group active:scale-95"
                    >
                      <Mail className="w-4 h-4 text-indigo-600 mb-0.5 group-hover:scale-110 transition-transform" />
                      <span className="text-[11px] font-bold text-indigo-800">Email Us</span>
                    </a>
                  </div>
                </div>

                {/* Footer Action: Get Free Consultation Button */}
                <div
                  className="p-3.5 sm:p-4 border-t border-slate-100 bg-white shrink-0 relative z-10"
                  style={{
                    paddingBottom: 'max(14px, env(safe-area-inset-bottom, 14px))'
                  }}
                >
                  <Link
                    to="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="relative group overflow-hidden w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#0866E8] via-[#0878F0] to-[#00B9E8] shadow-md hover:shadow-lg transition-all cursor-pointer min-h-[46px]"
                  >
                    {/* Animated Light Shimmer Sweep */}
                    <motion.div
                      animate={{ x: ['-120%', '220%'] }}
                      transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.8 }}
                      className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 pointer-events-none"
                    />
                    <span className="relative z-10">Get Free Consultation</span>
                    <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
    </>
  );
}
