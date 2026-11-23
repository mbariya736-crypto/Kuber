import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, ShieldCheck, Sparkles } from 'lucide-react';

export default function ImageModal({ isOpen, onClose, imageSrc, title, subtitle, tag, description }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/80 backdrop-blur-md"
      >
        <motion.div
          initial={{ scale: 0.92, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.92, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row border border-slate-100"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-900/50 hover:bg-slate-900/80 text-white backdrop-blur-md transition-all shadow-md focus:outline-none"
            aria-label="Close preview"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Image Container */}
          <div className="md:w-3/5 bg-slate-50/90 border-b md:border-b-0 md:border-r border-slate-100 flex items-center justify-center p-4 sm:p-6 min-h-[300px] max-h-[70vh] md:max-h-[85vh] overflow-hidden">
            <img
              src={imageSrc}
              alt={title || "Project Asset Preview"}
              className="max-h-full max-w-full object-contain rounded-xl shadow-md border border-slate-200/50 transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>

          {/* Details Sidebar */}
          <div className="md:w-2/5 p-6 md:p-8 flex flex-col justify-between overflow-y-auto bg-gradient-to-b from-white to-[#F4F8FD] text-left">
            <div>
              {tag && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-50 text-[#0866E8] border border-blue-100 mb-4">
                  <Sparkles className="w-3.5 h-3.5" />
                  {tag}
                </span>
              )}
              <h3 className="text-2xl font-bold text-[#082B59] mb-2 leading-tight">
                {title}
              </h3>
              {subtitle && (
                <p className="text-sm font-semibold text-[#0866E8] mb-4">
                  {subtitle}
                </p>
              )}
              {description && (
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                  {description}
                </p>
              )}

              <div className="p-4 rounded-2xl bg-white border border-slate-100 shadow-xs space-y-1.5 mb-6">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Verified Media Asset</span>
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed font-normal">
                  Original official asset by Kuber AIS Technologies for client campaigns.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <a
                href={imageSrc}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#0866E8] hover:text-[#082B59] transition-colors"
              >
                <span>Open Raw Asset</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
