import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Lightbulb, Code2, Rocket, ArrowRight } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      num: '01',
      title: 'Understand',
      subtitle: 'Discovery & Consultation',
      icon: Compass,
      desc: 'We start by listening to your team, reviewing current tools, and identifying real bottlenecks.'
    },
    {
      num: '02',
      title: 'Strategize',
      subtitle: 'Planning & Design',
      icon: Lightbulb,
      desc: 'We create a clear action plan outlining the right automation setup, security safeguards, or video scripts.'
    },
    {
      num: '03',
      title: 'Develop',
      subtitle: 'Building & Testing',
      icon: Code2,
      desc: 'We build the automations, configure security controls, and produce your media assets with care.'
    },
    {
      num: '04',
      title: 'Deliver',
      subtitle: 'Launch & Support',
      icon: Rocket,
      desc: 'We help launch the solution smoothly, train your team, and provide reliable ongoing support.'
    }
  ];

  return (
    <section className="py-24 sm:py-32 relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#0866E8] bg-blue-50 border border-blue-100 mb-4">
            How We Work
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#082B59] tracking-tight leading-[1.15] mb-6">
            Four Steps to{' '}
            <span className="gradient-text-blue">Getting Results.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            A clear, straightforward process designed to keep you informed from initial discovery to final delivery.
          </p>
        </div>

        {/* 4 Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="rounded-[28px] bg-[#F4F8FD] border border-slate-100 p-7 hover:border-blue-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1.5 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl font-extrabold text-blue-200 group-hover:text-[#0866E8] transition-colors font-mono">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white shadow-xs border border-slate-100 text-[#0866E8] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <p className="text-xs font-bold uppercase tracking-wider text-[#0866E8] mb-1">
                    {step.subtitle}
                  </p>
                  <h3 className="text-2xl font-bold text-[#082B59] mb-3">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-semibold text-slate-500 group-hover:text-[#0866E8] transition-colors">
                  <span>Phase 0{idx + 1}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
