import React, { useState } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ImageModal from './components/ImageModal';
import ScrollToTop from './components/ScrollToTop';
import SplashScreen from './components/SplashScreen';
import GlobalParticleBackground from './components/GlobalParticleBackground';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const location = useLocation();
  // Splash screen shown on every fresh load / reload of the website (no sessionStorage or localStorage)
  const [showSplash, setShowSplash] = useState(true);

  // Identify service detail pages to hide the main navbar and provide a focused full-screen experience
  const normalizedPath = location.pathname.replace(/\/+$/, '');
  const isServiceDetailPage = normalizedPath.startsWith('/services/') && normalizedPath !== '/services';
  const [modalState, setModalState] = useState({
    isOpen: false,
    imageSrc: '',
    title: '',
    subtitle: '',
    tag: '',
    description: ''
  });

  const handleOpenModal = (data) => {
    setModalState({
      isOpen: true,
      imageSrc: data.imageSrc,
      title: data.title || 'Project Asset',
      subtitle: data.subtitle || '',
      tag: data.tag || 'Asset Preview',
      description: data.description || ''
    });
  };

  const handleCloseModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-[#F4F8FD] text-[#082B59] flex flex-col font-sans selection:bg-[#0866E8] selection:text-white relative overflow-x-hidden">
      {/* Global Theme-Matched Futuristic Digital Particle Wave */}
      <GlobalParticleBackground />

      {/* Brand-Themed Animated Splash Screen on Initial Load */}
      <AnimatePresence>
        {showSplash && (
          <SplashScreen 
            onFinish={() => setShowSplash(false)} 
            duration={2000} 
          />
        )}
      </AnimatePresence>

      {/* Scroll restoration & Anchor handler */}
      <ScrollToTop />

      {/* Floating Rounded Navbar (Hidden on service detail pages) */}
      {!isServiceDetailPage && <Navbar />}

      {/* Main Routed Content with Smooth Page Transitions */}
      <main className="flex-grow flex flex-col relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="flex-grow flex flex-col"
          >
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<HomePage onOpenModal={handleOpenModal} />} />
              <Route path="/about" element={<AboutPage onOpenModal={handleOpenModal} />} />
              <Route path="/services" element={<ServicesPage onOpenModal={handleOpenModal} />} />
              <Route path="/services/ai-services" element={<ServiceDetailPage practiceId="ai-services" />} />
              <Route path="/services/cyber-security" element={<ServiceDetailPage practiceId="cyber-security" />} />
              <Route path="/services/ai-films" element={<ServiceDetailPage practiceId="ai-films" />} />
              <Route path="/services/:practiceId" element={<ServiceDetailPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Corporate Navy Footer (Hidden on service detail pages) */}
      {!isServiceDetailPage && <Footer />}

      {/* Lightbox Modal */}
      <ImageModal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        imageSrc={modalState.imageSrc}
        title={modalState.title}
        subtitle={modalState.subtitle}
        tag={modalState.tag}
        description={modalState.description}
      />
    </div>
  );
}
