import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import CinematicScrollFilmShowcase from './CinematicScrollFilmShowcase';
import {
  Film,
  Maximize2,
  PhoneCall,
  Globe,
  ArrowRight,
  Eye,
  Play,
  ShieldCheck,
  CheckCircle2,
  Layers,
  X,
  Volume2,
  Calendar
} from 'lucide-react';

export default function AIFilms({ onOpenModal }) {
  const navigate = useNavigate();
  // Modal states for Film Video & High-Res Poster
  const [activeVideoModal, setActiveVideoModal] = useState(null);
  const [activePosterModal, setActivePosterModal] = useState(null);

  // Esc key listener to close modals
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveVideoModal(null);
        setActivePosterModal(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Featured Case Study Data: DIGITAL JAAL
  const featuredFilm = {
    id: 'digital-jaal-film',
    imageSrc: '/images/digital-jaal-poster.png',
    rawImageSrc: '/images/digital-jaal-poster.png',
    title: 'DIGITAL JAAL',
    story: 'Ek Cyber Fraud Ki Sachchi Kahani',
    category: 'Public Awareness Film',
    helpline: '+91 7490923790',
    portal: 'kuberaistechnologies@gmail.com',
    tag: 'Public Awareness Film',
    creator: 'Kuber AIS Technologies',
    description: 'An educational public awareness film focused on widespread digital financial traps including fake UPI verification links, fraudulent QR codes, and online lottery schemes. Produced by Kuber AIS Technologies.',
    // If a valid video file/URL exists, set it here; otherwise leave null to prevent fake/broken links
    videoUrl: null
  };

  // Additional Verified Film Productions (Authentic assets only, zero duplicates)
  const additionalFilms = [
    {
      id: 'ai-creative-studio',
      title: 'Commercial Video Production',
      image: '/assets/Futuristic-studio-for-AI-driven-creations.webp',
      description: 'Promotional films and product spotlights produced with clear narrative scripting, professional lighting, and color mastering.',
      videoUrl: null
    },
    {
      id: 'digital-growth-narrative',
      title: 'Corporate Documentaries',
      image: '/assets/ai-film-studio-hero.webp',
      description: 'Documentary-style corporate profiles highlighting company milestones, executive vision, and team craftsmanship.',
      videoUrl: null
    }
  ];

  const handleWatchFilm = (film) => {
    setActiveVideoModal(film);
  };

  const handleInspectArtwork = (film) => {
    setActivePosterModal(film);
  };

  const scrollToContact = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setActiveVideoModal(null);
    setActivePosterModal(null);
    navigate('/contact');
  };

  return (
    <section id="ai-films" className="pt-2 sm:pt-4 pb-12 sm:pb-16 relative bg-white overflow-hidden scroll-mt-24 h-auto">

      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-[450px] h-[450px] bg-cyan-100/35 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-grid-mesh opacity-25 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ======================================================== */}
        {/* 2. FEATURED AI FILM: DIGITAL JAAL (CINEMATIC 3D SCROLL)  */}
        {/* ======================================================== */}
        <CinematicScrollFilmShowcase
          film={featuredFilm}
          onWatchFilm={handleWatchFilm}
          onInspectArtwork={handleInspectArtwork}
        />

        {/* ======================================================== */}
        {/* 3. MORE AI FILMS                                         */}
        {/* ======================================================== */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#082B59]">
              Film &amp; Video Productions
            </h3>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-6 sm:gap-8 text-left">
            {additionalFilms.map((film) => (
              <div
                key={film.id}
                className="rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-slate-300 transition-all duration-300 overflow-hidden flex flex-col justify-between group"
              >
                <div>
                  {/* Poster Image Container */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100 border-b border-slate-100">
                    <img
                      src={film.image}
                      alt={film.title}
                      className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                    />

                    {film.videoUrl && (
                      <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white gap-2 text-xs font-semibold cursor-pointer" onClick={() => handleWatchFilm(film)}>
                        <div className="w-9 h-9 rounded-full bg-white/95 text-[#082B59] flex items-center justify-center shadow-md">
                          <Play className="w-3.5 h-3.5 fill-[#0866E8] text-[#0866E8] ml-0.5" />
                        </div>
                        <span>Watch Preview</span>
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-5 sm:p-6 flex flex-col flex-grow">
                    <h4 className="text-lg sm:text-xl font-bold text-[#082B59] mb-2 leading-snug group-hover:text-[#0866E8] transition-colors">
                      {film.title}
                    </h4>

                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                      {film.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ======================================================== */}
      {/* 4. WATCH TRAILER VIDEO MODAL PLAYER                      */}
      {/* ======================================================== */}
      <AnimatePresence>
        {activeVideoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideoModal(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-[#082B59] text-white rounded-[28px] sm:rounded-[32px] shadow-2xl border border-slate-700/80 overflow-hidden"
            >
              {/* Header Bar */}
              <div className="flex items-center justify-between p-4 sm:p-5 border-b border-white/10 bg-[#051C3B]">
                <div className="flex items-center gap-2.5">
                  <span className="p-2 rounded-xl bg-blue-500/20 text-cyan-300">
                    <Film className="w-4 h-4" />
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-white">
                    {activeVideoModal.title}
                  </h4>
                </div>

                <button
                  onClick={() => setActiveVideoModal(null)}
                  className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all focus:outline-none cursor-pointer"
                  aria-label="Close video player"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Player Body */}
              <div className="p-4 sm:p-6">
                {activeVideoModal.videoUrl ? (
                  /* Standard Responsive Video Player with full controls: play, pause, volume, fullscreen */
                  <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-2xl border border-white/10">
                    <video
                      src={activeVideoModal.videoUrl}
                      controls
                      autoPlay
                      className="w-full h-full object-contain"
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ) : (
                  /* Verified Screening & Release Showcase (No fake broken player) */
                  <div className="space-y-4 text-left">
                    <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black border border-white/15 shadow-xl flex items-center justify-center group">
                      <img
                        src={activeVideoModal.imageSrc || activeVideoModal.image}
                        alt={activeVideoModal.title}
                        className="w-full h-full object-contain opacity-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-5 sm:p-6">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-0.5">
                          {activeVideoModal.title}
                        </h3>
                        {activeVideoModal.story && (
                          <p className="text-xs sm:text-sm text-cyan-200 max-w-xl">
                            {activeVideoModal.story}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Actions: View Gallery & Close */}
                    <div className="flex items-center justify-between gap-3 pt-1">
                      <button
                        onClick={() => {
                          setActiveVideoModal(null);
                          setActivePosterModal(activeVideoModal);
                        }}
                        className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#0866E8] via-[#0878F0] to-[#00B9E8] shadow-md hover:scale-[1.02] transition-all cursor-pointer"
                      >
                        <Eye className="w-4 h-4" />
                        <span>View Gallery</span>
                      </button>

                      <button
                        onClick={() => setActiveVideoModal(null)}
                        className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all cursor-pointer"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ======================================================== */}
      {/* 6. INSPECT HIGH-RES ARTWORK MODAL (UNCROPPED POSTER)     */}
      {/* ======================================================== */}
      <AnimatePresence>
        {activePosterModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePosterModal(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/90 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full bg-slate-900 text-white rounded-[28px] sm:rounded-[32px] shadow-2xl border border-white/15 overflow-hidden flex flex-col max-h-[94vh]"
            >
              {/* Modal Top Bar with Close button */}
              <div className="flex items-center justify-between p-4 sm:p-5 border-b border-white/10 bg-black/40">
                <div className="flex items-center gap-2.5 text-left">
                  <span className="p-1.5 rounded-lg bg-blue-500/20 text-cyan-300">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-white truncate max-w-xs sm:max-w-md">
                    {activePosterModal.title}
                  </h4>
                </div>

                <button
                  onClick={() => setActivePosterModal(null)}
                  className="p-2 sm:p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all focus:outline-none cursor-pointer"
                  aria-label="Close poster view"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Uncropped Poster Viewport */}
              <div className="flex-1 bg-black/80 flex items-center justify-center p-3 sm:p-6 overflow-hidden min-h-[300px]">
                <img
                  src={activePosterModal.rawImageSrc || activePosterModal.imageSrc || activePosterModal.image}
                  alt={activePosterModal.title}
                  className="max-h-[72vh] w-auto max-w-full object-contain rounded-xl shadow-2xl border border-white/10"
                />
              </div>

              {/* Modal Bottom Bar */}
              <div className="p-4 sm:p-5 border-t border-white/10 bg-black/60 flex items-center justify-end">
                <button
                  onClick={() => setActivePosterModal(null)}
                  className="px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-white/15 hover:bg-white/25 text-white transition-all cursor-pointer"
                >
                  Close
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}