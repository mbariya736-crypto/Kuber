import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Users, Wrench, Globe2 } from 'lucide-react';

export default function WhyChooseUs({ className = '' }) {
  const cards = [
    {
      icon: Cpu,
      title: 'Practical Solutions',
      description: 'Built around real business needs.'
    },
    {
      icon: Globe2,
      title: 'Quick Communication',
      description: 'Clear updates and timely responses.'
    },
    {
      icon: Users,
      title: 'Experienced Team',
      description: 'Focused on quality and reliability.'
    },
    {
      icon: Wrench,
      title: 'Ongoing Support',
      description: 'Help when you need it.'
    }
  ];

  return (
    <section className={`py-8 sm:py-12 relative overflow-hidden ${className || 'bg-[#F4F8FD]'}`}>
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-100/30 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#082B59] tracking-tight leading-[1.15]">
            Why Clients Work With Us
          </h2>
        </div>

        {/* 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-[24px] bg-white border border-slate-100 p-6 sm:p-7 shadow-lg shadow-blue-900/5 hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group text-left"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#0866E8] to-[#00B9E8] text-white flex items-center justify-center mb-5 shadow-xs group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#082B59] mb-2">
                    {card.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
