import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ArrowRight, 
  ChevronDown, 
  Bot, 
  ShieldCheck, 
  Film,
  TrendingUp
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

  // Dropdown practice items
  const serviceItems = [
    {
      name: 'Business Automation',
      path: '/services/ai-services',
      description: 'Automation, business systems & digital operations',
      icon: Bot,
      color: 'text-[#0866E8]',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-100',
    },
    {
      name: 'Cyber Security',
      path: '/services/cyber-security',
      description: 'Security audits, awareness training & protection',
      icon: ShieldCheck,
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-100',
    },
    {
      name: 'Digital Marketing',
      path: '/portfolio/lead-generation-campaign',
      description: 'Customer acquisition & targeted lead generation',
      icon: TrendingUp,
      color: 'text-amber-600',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-100',
    },
    {
      name: 'Film Production',
      path: '/services/ai-films',
      description: 'Films, commercials & creative media production',
      icon: Film,
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50',
      borderColor: 'border-cyan-100',
    }
  ];

  const navLinks = [
    { name: 'Home', path: '/', isPage: true, id: 'home' },
    { name: 'About', path: '/about', isPage: true, id: 'about' },
    { 
      name: 'Services', 
      path: '/services', 
      isPage: true, 
      id: 'services',
      hasDropdown: true 
    },
    { name: 'Portfolio', path: '/#portfolio', isPage: false, targetId: 'portfolio', id: 'portfolio' },
    { name: 'FAQ', path: '/#faq', isPage: false, targetId: 'faq', id: 'faq' },
    { name: 'Contact', path: '/contact', isPage: true, id: 'contact' },
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
            className="fixed inset-0 z-[80] bg-slate-900/40 backdrop-blur-xs lg:hidden"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <header 
        className={`fixed top-0 left-0 right-0 z-[90] transition-all duration-300 ease-in-out pointer-events-none ${
          isScrolled ? 'pt-2.5 sm:pt-3.5 px-3 sm:px-6' : 'pt-0 px-0'
        }`}
        style={{
          paddingTop: isScrolled ? undefined : 'max(0px, env(safe-area-inset-top, 0px))'
        }}
      >
        <div 
          className={`pointer-events-auto transition-all duration-300 ease-in-out ${
            isScrolled 
              ? 'max-w-5xl mx-auto rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-[0_8px_30px_rgba(8,43,89,0.08)] px-4 sm:px-6'
              : 'w-full bg-white/95 backdrop-blur-sm border-b border-slate-200/80 shadow-[0_2px_12px_rgba(8,43,89,0.03)] px-4 sm:px-6 lg:px-8'
          }`}
        >
          <div className={isScrolled ? 'w-full' : 'max-w-7xl mx-auto'}>
            <nav 
              className={`flex items-center justify-between transition-all duration-300 ${
                isScrolled ? 'h-[54px] sm:h-[58px]' : 'h-[68px] sm:h-[72px]'
              }`}
            >
              {/* Logo */}
              <div className="shrink-0">
                <Link 
                  to="/" 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="flex items-center"
                >
                  <img
                    src="/images/kuber_logo_transparent.png"
                    alt="KUBER AIS TECHNOLOGIES Logo"
                    className={`w-auto object-contain transition-all duration-300 ${
                      isScrolled ? 'h-7 sm:h-7.5' : 'h-8 sm:h-9'
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
                          className={`inline-flex items-center gap-1.5 rounded-full font-medium transition-colors duration-150 cursor-pointer ${
                            isScrolled ? 'px-2.5 py-1 text-xs' : 'px-3 py-1.5 text-sm'
                          } ${
                            active || servicesDropdownOpen
                              ? 'text-[#0866E8] bg-blue-50 font-semibold'
                              : 'text-[#082B59] hover:text-[#0866E8] hover:bg-slate-50'
                          }`}
                        >
                          <span>{link.name}</span>
                          <ChevronDown 
                            className={`w-3.5 h-3.5 transition-transform duration-200 ${
                              servicesDropdownOpen ? 'rotate-180 text-[#0866E8]' : 'text-slate-400'
                            }`} 
                          />
                        </button>

                        {/* Smooth, Clean Dropdown Menu */}
                        <AnimatePresence>
                          {servicesDropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: 6 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 4 }}
                              transition={{ duration: 0.16, ease: "easeOut" }}
                              className="absolute top-full left-0 pt-2 w-[320px] z-50 pointer-events-auto"
                            >
                              <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-2.5 space-y-1">
                                <div className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 mb-1">
                                  Our Services
                                </div>

                                {serviceItems.map((item) => {
                                  const isItemActive = location.pathname === item.path;
                                  const IconComponent = item.icon;

                                  return (
                                    <button
                                      key={item.name}
                                      type="button"
                                      onClick={() => handlePracticeClick(item.path)}
                                      className={`w-full text-left p-2.5 rounded-xl transition-all duration-150 flex items-start gap-3 cursor-pointer ${
                                        isItemActive
                                          ? 'bg-blue-50/80 text-[#0866E8]'
                                          : 'hover:bg-slate-50 text-slate-700'
                                      }`}
                                    >
                                      <div className={`p-1.5 rounded-md border ${item.borderColor} ${item.bgColor} ${item.color} shrink-0 mt-0.5`}>
                                        <IconComponent className="w-4 h-4" />
                                      </div>
                                      <div className="min-w-0 flex-1">
                                        <div className={`text-xs font-bold leading-tight ${isItemActive ? 'text-[#0866E8]' : 'text-[#082B59]'}`}>
                                          {item.name}
                                        </div>
                                        <div className="text-[11px] text-slate-500 leading-snug mt-0.5">
                                          {item.description}
                                        </div>
                                      </div>
                                    </button>
                                  );
                                })}
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
                      className={`rounded-full font-medium transition-colors duration-150 cursor-pointer ${
                        isScrolled ? 'px-2.5 py-1 text-xs' : 'px-3 py-1.5 text-sm'
                      } ${
                        active
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
                  className={`inline-flex items-center gap-1.5 rounded-full font-semibold text-white bg-gradient-to-r from-[#0866E8] via-[#0878F0] to-[#00B9E8] shadow-xs hover:shadow-md hover:opacity-95 transition-all duration-200 cursor-pointer ${
                    isScrolled ? 'px-3.5 py-1.5 text-xs' : 'px-4.5 py-2 text-xs sm:text-sm'
                  }`}
                >
                  <span>Get Started</span>
                  <ArrowRight className={isScrolled ? 'w-3 h-3' : 'w-3.5 h-3.5'} />
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`lg:hidden rounded-full text-[#082B59] hover:text-[#0866E8] hover:bg-slate-100 transition-colors focus:outline-none cursor-pointer flex items-center justify-center shrink-0 ${
                  isScrolled ? 'w-9 h-9' : 'w-10 h-10'
                }`}
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-[#082B59]" />
                ) : (
                  <Menu className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-[#082B59]" />
                )}
              </button>
            </nav>
          </div>

          {/* Mobile Drawer (Centrally Positioned Floating Panel with Safe Margins & Viewport Bounds) */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -6, scale: 0.98 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="lg:hidden mt-2.5 mb-3 w-full rounded-2xl bg-white border border-slate-200/90 shadow-2xl overflow-hidden flex flex-col z-[100]"
                style={{
                  maxHeight: 'calc(100vh - 95px - env(safe-area-inset-bottom, 0px))'
                }}
              >
                {/* Scrollable Nav Content inside the isolated Drawer */}
                <div className="overflow-y-auto overscroll-contain px-4 py-4 sm:px-5 space-y-1.5 flex-1">
                  {navLinks.map((link) => {
                    const active = isLinkActive(link);

                    // Mobile Services Accordion
                    if (link.hasDropdown) {
                      return (
                        <div key={link.name} className="flex flex-col">
                          <div
                            className={`px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between cursor-pointer ${
                              active
                                ? 'text-[#0866E8] bg-blue-50'
                                : 'text-[#082B59] hover:text-[#0866E8] hover:bg-slate-50'
                            }`}
                          >
                            <span 
                              onClick={(e) => handleLinkClick(e, link)}
                              className="flex-1"
                            >
                              {link.name}
                            </span>

                            <button
                              type="button"
                              onClick={() => setMobileServicesExpanded(!mobileServicesExpanded)}
                              className="p-1.5 rounded-lg text-slate-500 hover:text-[#0866E8] hover:bg-blue-100/50 focus:outline-none transition-colors"
                              aria-label="Toggle Services submenu"
                            >
                              <ChevronDown 
                                className={`w-4 h-4 transition-transform duration-200 ${
                                  mobileServicesExpanded ? 'rotate-180 text-[#0866E8]' : ''
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
                                transition={{ duration: 0.18, ease: "easeOut" }}
                                className="overflow-hidden pl-2 pr-1 py-1.5 space-y-1.5"
                              >
                                {serviceItems.map((item) => {
                                  const isItemActive = location.pathname === item.path;
                                  const IconComponent = item.icon;

                                  return (
                                    <button
                                      key={item.name}
                                      type="button"
                                      onClick={() => handlePracticeClick(item.path)}
                                      className={`w-full text-left p-2.5 rounded-xl transition-all duration-150 flex items-start gap-3 cursor-pointer ${
                                        isItemActive
                                          ? 'bg-blue-50 text-[#0866E8] font-semibold'
                                          : 'bg-slate-50/80 hover:bg-blue-50/70 text-slate-700'
                                      }`}
                                    >
                                      <div className={`p-1.5 rounded-lg border ${item.borderColor} ${item.bgColor} ${item.color} shrink-0 mt-0.5`}>
                                        <IconComponent className="w-3.5 h-3.5" />
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <span className="text-xs font-semibold text-slate-900 block truncate">
                                          {item.name}
                                        </span>
                                        <p className="text-[11px] text-slate-500 leading-snug line-clamp-2">
                                          {item.description}
                                        </p>
                                      </div>
                                    </button>
                                  );
                                })}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    }

                    // Normal Links
                    return (
                      <a
                        key={link.name}
                        href={link.path}
                        onClick={(e) => handleLinkClick(e, link)}
                        className={`px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center justify-between cursor-pointer ${
                          active
                            ? 'text-[#0866E8] bg-blue-50 font-semibold'
                            : 'text-[#082B59] hover:text-[#0866E8] hover:bg-slate-50'
                        }`}
                      >
                        <span>{link.name}</span>
                        <ArrowRight className={`w-3.5 h-3.5 ${active ? 'text-[#0866E8]' : 'text-slate-400'}`} />
                      </a>
                    );
                  })}
                </div>

                {/* Footer Action: Get Started Button (Proper padding, never touches edges) */}
                <div 
                  className="p-3.5 sm:p-4 border-t border-slate-100 bg-slate-50/60 shrink-0"
                  style={{
                    paddingBottom: 'max(14px, env(safe-area-inset-bottom, 14px))'
                  }}
                >
                  <Link
                    to="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#0866E8] via-[#0878F0] to-[#00B9E8] shadow-md hover:shadow-lg transition-all cursor-pointer min-h-[44px]"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4" />
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
