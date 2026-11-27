import React from 'react';
import { motion } from 'framer-motion';
import { 
  Play, 
  Eye, 
  PhoneCall, 
  Globe, 
  Maximize2,
  Film,
  Mail
} from 'lucide-react';

/**
 * Digital Jaal Case Study Showcase
 * 
 * Clean, editorial-style presentation of the Digital Jaal awareness campaign.
 * Handcrafted with generous whitespace, side-by-side balanced layout,
 * human typography hierarchy, and grounded public safety focus.
 */
export default function CinematicScrollFilmShowcase({ 
  film, 
  onWatchFilm, 
  onInspectArtwork 
}) {
  return (
    <div className="w-full max-w-7xl mx-auto mb-14 sm:mb-18 text-left">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-md hover:shadow-lg transition-all duration-300 p-6 sm:p-8 lg:p-10 relative overflow-hidden"
      >
        {/* Subtle Ambient Lighting */}
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-blue-50/60 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-cyan-50/50 rounded-full blur-3xl pointer-events-none -z-10" />

        {/* 2-Column Editorial Layout: Project Details on Left, Framed Poster on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

          {/* Left Column: Information, Narrative, Safety Pillars & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            {/* Category Badge & Metadata */}
            <div className="mb-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200/80 text-xs font-semibold text-cyan-800">
                <Film className="w-3.5 h-3.5 text-cyan-600" />
                <span>Public Awareness Initiative</span>
              </div>
            </div>

            {/* Project Title & Subtitle */}
            <div className="mb-4">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#082B59] tracking-tight leading-[1.14] mb-1.5">
                {film.title}
              </h3>
              <p className="text-sm sm:text-base font-semibold text-[#0866E8]">
                {film.story || 'Ek Cyber Fraud Ki Sachchi Kahani'}
              </p>
            </div>

            {/* Narrative Storytelling - Concise & Human-Crafted */}
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
              <p>
                <strong className="text-[#082B59] font-medium">Campaign Purpose:</strong> An educational film dramatizing real-world digital financial scams, showing how victims are targeted through deceptive UPI payment links, fraudulent QR codes, and impersonation calls.
              </p>
              <p>
                <strong className="text-[#082B59] font-medium">Practical Public Education:</strong> Essential safeguards for everyday users—never enter a UPI PIN to receive money, avoid third-party remote-access apps, and act within the critical first hour to freeze unauthorized transfers.
              </p>
            </div>

            {/* Key Cyber Safety Education Focus Areas - Simplified Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3.5 border-t border-slate-100 mb-5">
              <div className="p-3 rounded-lg bg-slate-50">
                <span className="text-xs font-semibold text-[#082B59] block mb-1">
                  UPI &amp; QR Scams
                </span>
                <p className="text-[12px] text-slate-600 leading-snug">
                  PIN entry always debits funds; never required to receive money.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-slate-50">
                <span className="text-xs font-semibold text-[#082B59] block mb-1">
                  Deceptive Links
                </span>
                <p className="text-[12px] text-slate-600 leading-snug">
                  Identifying malicious APKs, fake banking SMS alerts, and cloned portals.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-slate-50">
                <span className="text-xs font-semibold text-[#082B59] block mb-1">
                  Golden Hour Protocol
                </span>
                <p className="text-[12px] text-slate-600 leading-snug">
                  Prompt reporting within 60 minutes to alert banks and freeze transfers.
                </p>
              </div>
            </div>

            {/* Verified Direct Contact & Inquiries */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-100 mb-6">
              {/* Call Support */}
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center shrink-0">
                  <PhoneCall className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">
                    Call Support
                  </span>
                  <a 
                    href="tel:+917490923790" 
                    className="text-xs sm:text-sm font-bold text-[#082B59] hover:text-emerald-600 transition-colors"
                  >
                    +91 7490923790
                  </a>
                </div>
              </div>

              <div className="hidden sm:block h-6 w-px bg-slate-200" />

              {/* Email Address */}
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0866E8] border border-blue-200 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-[#0866E8]" />
                </div>
                <div>
                  <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">
                    Email Address
                  </span>
                  <a
                    href="mailto:kuberaistechnologies@gmail.com"
                    className="text-xs sm:text-sm font-bold text-[#0866E8] hover:underline transition-colors"
                  >
                    kuberaistechnologies@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Action Buttons: View Visuals */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => onInspectArtwork(film)}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#0866E8] hover:bg-[#0756C5] shadow-xs hover:shadow-md transition-all cursor-pointer min-h-[40px]"
              >
                <Eye className="w-3.5 h-3.5 text-white" />
                <span>View Campaign Visuals</span>
              </button>
            </div>
          </div>

          {/* Right Column: Original Poster Presentation (16:9 Aspect Ratio Maintained) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div
              onClick={() => onInspectArtwork(film)}
              className="group relative w-full aspect-[16/9] sm:aspect-[16/10] lg:aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/90 shadow-md hover:shadow-xl cursor-pointer flex items-center justify-center transition-all duration-300"
            >
              <img
                src={film.imageSrc}
                alt="Digital Jaal - Public Awareness Film Poster"
                className="w-full h-full object-contain p-2 sm:p-3 transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />

              {/* Clean hover cue */}
              <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white">
                <div className="px-4 py-2 rounded-full bg-white/95 backdrop-blur-md text-[#082B59] text-xs font-semibold flex items-center gap-2 shadow-lg">
                  <Maximize2 className="w-3.5 h-3.5 text-[#0866E8]" />
                  <span>Click to View Full Poster</span>
                </div>
              </div>
            </div>

            <p className="text-center text-[11px] text-slate-400 mt-2">
              Official Campaign Key Visual
            </p>
          </div>

        </div>

      </motion.div>
    </div>
  );
}
