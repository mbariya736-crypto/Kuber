import React from 'react';
import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#082B59] text-white py-10 relative overflow-hidden border-t border-blue-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 text-sm text-slate-300">
          
          {/* Essential Contact Information */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-5 sm:gap-8">
            <a
              href="mailto:kuberaistechnologies@gmail.com"
              className="inline-flex items-center gap-2 hover:text-cyan-300 transition-colors"
            >
              <Mail className="w-4 h-4 text-[#00B9E8]" />
              <span>kuberaistechnologies@gmail.com</span>
            </a>

            <a
              href="tel:+917490923790"
              className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>+91 7490923790</span>
            </a>
          </div>

          {/* Copyright Text */}
          <div className="text-xs text-slate-400">
            &copy; Kuber AIS Technologies
          </div>

        </div>
      </div>
    </footer>
  );
}
