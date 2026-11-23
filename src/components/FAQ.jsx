import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const faqs = [
    {
      question: 'What automation services do you provide?',
      answer: 'We provide practical automation services including workflow automations, customer support chatbots, lead generation systems, marketing automation, and custom software tools designed to save your team time.'
    },
    {
      question: 'How does business automation work?',
      answer: 'Automation connects your everyday tools—such as WhatsApp, email, spreadsheets, and CRM—so repetitive tasks happen automatically. For example, customer inquiries get answered immediately, data syncs across tools, and follow-ups happen without manual effort.'
    },
    {
      question: 'What cybersecurity solutions do you offer?',
      answer: 'We offer practical cybersecurity services including team awareness training, security checkups, phishing defense drills, and protection against digital fraud (such as UPI scams and banking fraud as highlighted in our Digital Jaal initiative).'
    },
    {
      question: 'What are your film production services?',
      answer: 'Our film production services combine digital video tools with experienced storytelling to create commercials, brand films, product demos, and public awareness videos quickly and effectively.'
    },
    {
      question: 'How can I start a project?',
      answer: 'Send us a message through our contact form or chat with us directly on WhatsApp. We will review what you need and get back to you within 24 hours.'
    }
  ];

  return (
    <section id="faq" className="py-10 sm:py-14 relative bg-[#F4F8FD] overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-6 sm:mb-8"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#082B59] tracking-tight leading-[1.18]">
            Frequently Asked Questions
          </h2>
        </motion.div>

        {/* Accordion with Smooth Viewport Reveals */}
        <div className="space-y-3.5 sm:space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.45,
                  delay: shouldReduceMotion ? 0 : index * 0.06,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="rounded-2xl bg-white border border-slate-200/80 hover:border-blue-200 shadow-xs hover:shadow-sm overflow-hidden transition-all duration-200 text-left"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full px-5 py-4 sm:px-7 sm:py-5 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-[#082B59] leading-snug">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                    isOpen ? 'bg-[#0866E8] text-white font-bold rotate-90 shadow-xs' : 'bg-slate-100 text-slate-600 rotate-0'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-5 pb-5 sm:px-7 sm:pb-6 pt-0 border-t border-slate-100 text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
