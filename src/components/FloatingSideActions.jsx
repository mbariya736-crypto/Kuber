import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function FloatingSideActions() {
  const location = useLocation();

  const handleContactClick = (e) => {
    if (location.pathname === '/') {
      const el = document.getElementById('contact');
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <aside
      aria-label="Quick Connect Options"
      className="fixed right-3 sm:right-6 bottom-6 z-40 flex flex-col items-end gap-3 pointer-events-auto select-none"
    >
      {/* 1. WHATSAPP ACTION BUTTON */}
      <motion.a
        href="https://wa.me/917490923790?text=Hello%20Kuber%20AIS%20Technologies%2C%20I%20would%20like%20to%20discuss%20a%20project."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Chat"
        whileHover={{ scale: 1.08, y: -2 }}
        whileTap={{ scale: 0.94 }}
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-teal-400 text-white flex items-center justify-center shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/40 border-2 border-white/90 transition-shadow duration-300 group cursor-pointer"
      >
        {/* SVG WhatsApp Style Icon */}
        <svg
          className="w-6 h-6 sm:w-7 sm:h-7 fill-current relative z-10 transition-transform duration-300 group-hover:rotate-6"
          viewBox="0 0 24 24"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.152.569 4.17 1.564 5.917l-1.564 5.711 5.86-1.537c1.704.931 3.659 1.465 5.74 1.465 6.627 0 12-5.373 12-12s-5.373-12-12-12z" />
        </svg>
      </motion.a>

      {/* 2. DIRECT CONTACT / CALL ACTION BUTTON */}
      <Link
        to="/contact"
        onClick={handleContactClick}
        aria-label="Direct Contact and Inquiry"
      >
        <motion.div
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.94 }}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#082B59] via-[#0866E8] to-[#00B9E8] text-white flex items-center justify-center shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 border-2 border-white/90 transition-shadow duration-300 group cursor-pointer"
        >
          <PhoneCall className="w-5 h-5 sm:w-6 sm:h-6 relative z-10 transition-transform duration-300 group-hover:-rotate-12" />
        </motion.div>
      </Link>
    </aside>
  );
}