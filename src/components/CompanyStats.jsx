import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { Bot, ShieldCheck, Film, Cog } from 'lucide-react';

export default function CompanyStats({ className = "relative -mt-2 sm:-mt-4 lg:-mt-4 z-20 px-3 xs:px-4 sm:px-6 lg:px-8" }) {
  const shouldReduceMotion = useReducedMotion();

  const pillars = [
    {
      icon: Bot,
      title: 'Business Automation',
      description: 'Business process support and automation services.',
      link: '/services/ai-services'
    },
    {
      icon: ShieldCheck,
      title: 'Cyber Security',
      description: 'Cybersecurity and awareness services.',
      link: '/services/cyber-security'
    },
    {
      icon: Film,
      title: 'Film Production',
      description: 'Commercial and awareness film production.',
      link: '/services/ai-films'
    },
    {
      icon: Cog,
      title: 'Business Operations',
      description: 'Business workflow and process management.',
      link: '/services'
    }
  ];

  return (
    <section className={className}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl sm:rounded-3xl bg-white shadow-xs border border-slate-200/80 p-5 sm:p-7 lg:p-8"
        >
          {/* Main Heading: Clean, authoritative, human-written */}
          <div className="text-center max-w-3xl mx-auto mb-5 sm:mb-6">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#082B59] tracking-tight leading-snug">
              Technology That Works for Business
            </h2>
          </div>

          {/* Service Cards Grid with Scroll-Triggered Stagger */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 text-left items-stretch">
            {pillars.map((item, index) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.title}
                  to={item.link}
                  className="block h-full group outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-xl"
                >
                  <motion.div
                    initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.45,
                      delay: shouldReduceMotion ? 0 : index * 0.08,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    whileHover={shouldReduceMotion ? {} : { y: -3, transition: { duration: 0.2 } }}
                    className="p-4 sm:p-5 rounded-xl bg-[#F8FAFD] border border-slate-200/60 hover:border-slate-300 hover:bg-white hover:shadow-xs transition-all duration-200 group flex flex-col h-full"
                  >
                    {/* Service Icon */}
                    <div className="w-10 h-10 rounded-xl bg-white shadow-xs border border-slate-200/60 text-[#0866E8] flex items-center justify-center mb-3 transition-transform duration-200 group-hover:scale-105 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Service Title */}
                    <h3 className="text-base sm:text-lg font-bold text-[#082B59] mb-1.5 group-hover:text-[#0866E8] transition-colors leading-snug">
                      {item.title}
                    </h3>

                    {/* Small Clean Description */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
