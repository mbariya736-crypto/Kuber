import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Mail,
  Phone,
  MessageSquare,
  Instagram,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Loader2
} from 'lucide-react';

export default function Contact() {
  const shouldReduceMotion = useReducedMotion();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    service: 'AI Services',
    description: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Full name is required';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (formData.phone.trim().length < 7) {
      errs.phone = 'Please enter a valid phone number';
    }
    if (!formData.service) {
      errs.service = 'Please select a service';
    }
    if (!formData.description.trim()) {
      errs.description = 'Please describe your project details';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  const contactCards = [
    {
      id: 'instagram',
      name: 'Instagram',
      value: '@kuberaistechnologies',
      href: 'https://www.instagram.com/kuberaistechnologies',
      isExternal: true,
      icon: Instagram,
      iconStyle: 'bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white',
      hoverBorder: 'hover:border-rose-300'
    },
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      value: 'Chat on WhatsApp',
      href: 'https://wa.me/?text=Hello%20Kuber%20AIS%20Technologies%2C%20I%20would%20like%20to%20discuss%20a%20project.',
      isExternal: true,
      icon: MessageSquare,
      iconStyle: 'bg-emerald-500 text-white',
      hoverBorder: 'hover:border-emerald-300'
    },
    {
      id: 'email',
      name: 'Email',
      value: 'contact@kuber-ais.com',
      href: 'mailto:contact@kuber-ais.com',
      isExternal: false,
      icon: Mail,
      iconStyle: 'bg-[#0866E8] text-white',
      hoverBorder: 'hover:border-blue-300'
    },
    {
      id: 'phone',
      name: 'Phone Support',
      value: 'Helpline: 1930',
      href: 'tel:1930',
      isExternal: false,
      icon: Phone,
      iconStyle: 'bg-[#00B9E8] text-white',
      hoverBorder: 'hover:border-cyan-300'
    }
  ];

  return (
    <section id="contact" className="pt-2 sm:pt-4 pb-10 sm:pb-14 relative bg-white overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/4 right-10 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start text-left">

          {/* Left Side: Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#082B59] mb-2 sm:mb-3">
                Get In Touch
              </h3>

              {/* Contact Cards List */}
              <div className="space-y-3">
                {contactCards.map((card, idx) => {
                  const Icon = card.icon;
                  return (
                    <motion.a
                      key={card.id}
                      href={card.href}
                      target={card.isExternal ? '_blank' : undefined}
                      rel={card.isExternal ? 'noopener noreferrer' : undefined}
                      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{
                        duration: 0.45,
                        delay: shouldReduceMotion ? 0 : idx * 0.08,
                        ease: [0.16, 1, 0.3, 1]
                      }}
                      whileHover={shouldReduceMotion ? {} : { y: -2, x: 2, transition: { duration: 0.2 } }}
                      className={`flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md ${card.hoverBorder} transition-all duration-200 group`}
                    >
                      <div className={`w-10 h-10 rounded-lg ${card.iconStyle} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block leading-tight">
                          {card.name}
                        </span>
                        <span className="text-sm sm:text-base font-bold text-[#082B59] group-hover:text-[#0866E8] transition-colors truncate block">
                          {card.value}
                        </span>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="rounded-2xl sm:rounded-[24px] bg-white border border-slate-200/90 shadow-[0_8px_30px_rgba(8,43,89,0.06)] p-6 sm:p-8">

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="py-8 text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3 shadow-2xs">
                    <CheckCircle className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#082B59] mb-1.5">
                    Message Sent Successfully
                  </h3>
                  <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed mb-5 font-normal">
                    Thank you, <strong className="text-slate-800">{formData.fullName}</strong>. We've received your inquiry and will reply shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        companyName: '',
                        service: 'AI Services',
                        description: ''
                      });
                    }}
                    className="px-5 py-2.5 rounded-full text-xs font-bold bg-slate-100 hover:bg-slate-200 text-[#082B59] transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">

                  {/* Row 1: Full Name & Email Address */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Full Name <span className="text-[#0866E8]">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Your name"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-800 focus:outline-none transition-all ${errors.fullName
                            ? 'border-rose-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-100 bg-rose-50/20'
                            : 'border-slate-200 focus:border-[#0866E8] focus:ring-2 focus:ring-blue-100 bg-white'
                          }`}
                      />
                      {errors.fullName && (
                        <p className="text-xs text-rose-500 mt-1 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Email Address <span className="text-[#0866E8]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@company.com"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-800 focus:outline-none transition-all ${errors.email
                            ? 'border-rose-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-100 bg-rose-50/20'
                            : 'border-slate-200 focus:border-[#0866E8] focus:ring-2 focus:ring-blue-100 bg-white'
                          }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-rose-500 mt-1 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Phone Number & Company Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Phone Number <span className="text-[#0866E8]">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-800 focus:outline-none transition-all ${errors.phone
                            ? 'border-rose-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-100 bg-rose-50/20'
                            : 'border-slate-200 focus:border-[#0866E8] focus:ring-2 focus:ring-blue-100 bg-white'
                          }`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-rose-500 mt-1 flex items-center gap-1 font-medium">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Company name (optional)"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#0866E8] focus:ring-2 focus:ring-blue-100 text-sm text-slate-800 focus:outline-none transition-all bg-white"
                      />
                    </div>
                  </div>

                  {/* Row 3: Service Selection */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Service <span className="text-[#0866E8]">*</span>
                    </label>
                    <div className="relative">
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-800 focus:outline-none transition-all appearance-none bg-white cursor-pointer ${errors.service
                            ? 'border-rose-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-100'
                            : 'border-slate-200 focus:border-[#0866E8] focus:ring-2 focus:ring-blue-100'
                          }`}
                      >
                        <option value="AI Services">AI Services</option>
                        <option value="Cyber Security">Cyber Security</option>
                        <option value="Film Production">Film Production</option>
                        <option value="General Inquiry">General Inquiry</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                        </svg>
                      </div>
                    </div>
                    {errors.service && (
                      <p className="text-xs text-rose-500 mt-1 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.service}</span>
                      </p>
                    )}
                  </div>

                  {/* Row 4: Project Details */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Project Details <span className="text-[#0866E8]">*</span>
                    </label>
                    <textarea
                      rows={4}
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Brief description of your requirements..."
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-800 focus:outline-none transition-all ${errors.description
                          ? 'border-rose-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-100 bg-rose-50/20'
                          : 'border-slate-200 focus:border-[#0866E8] focus:ring-2 focus:ring-blue-100 bg-white'
                        }`}
                    />
                    {errors.description && (
                      <p className="text-xs text-rose-500 mt-1 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.description}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-sm sm:text-base font-semibold text-white bg-[#0866E8] hover:bg-[#0756C5] shadow-xs hover:shadow-md disabled:opacity-70 transition-all duration-200 cursor-pointer"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
