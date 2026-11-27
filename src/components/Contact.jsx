import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Loader2
} from 'lucide-react';

export default function Contact() {
  const shouldReduceMotion = useReducedMotion();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    country: '',
    email: '',
    service: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.firstName.trim()) {
      errs.firstName = 'First name is required';
    }
    if (!formData.lastName.trim()) {
      errs.lastName = 'Last name is required';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Contact number is required';
    } else if (formData.phone.trim().length < 7) {
      errs.phone = 'Please enter a valid contact number';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.service) {
      errs.service = 'Please select a service';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please enter your message or inquiry';
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

  return (
    <section id="contact" className="pt-2 sm:pt-4 pb-10 sm:pb-14 relative bg-white overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/4 right-10 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-2xl sm:max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header directly on top of form */}
        <div className="text-left mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#082B59]">
            Contact us
          </h2>
        </div>

        {/* Clean Centered Contact Form Card */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl sm:rounded-[24px] bg-white border border-slate-200/90 shadow-[0_8px_30px_rgba(8,43,89,0.06)] p-6 sm:p-8"
        >
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
                Inquiry Sent Successfully
              </h3>
              <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed mb-5 font-normal">
                Thank you, <strong className="text-slate-800">{formData.firstName} {formData.lastName}</strong>. We've received your inquiry and will reply shortly.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    firstName: '',
                    lastName: '',
                    phone: '',
                    country: '',
                    email: '',
                    service: '',
                    message: ''
                  });
                }}
                className="px-5 py-2.5 rounded-full text-xs font-bold bg-slate-100 hover:bg-slate-200 text-[#082B59] transition-colors cursor-pointer"
              >
                Send Another Inquiry
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">
              {/* Row 1: First Name & Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    First name <span className="text-[#0866E8]">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First name"
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-800 focus:outline-none transition-all ${
                      errors.firstName
                        ? 'border-rose-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-100 bg-rose-50/20'
                        : 'border-slate-200 focus:border-[#0866E8] focus:ring-2 focus:ring-blue-100 bg-white'
                    }`}
                  />
                  {errors.firstName && (
                    <p className="text-xs text-rose-500 mt-1 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.firstName}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Last name <span className="text-[#0866E8]">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last name"
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-800 focus:outline-none transition-all ${
                      errors.lastName
                        ? 'border-rose-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-100 bg-rose-50/20'
                        : 'border-slate-200 focus:border-[#0866E8] focus:ring-2 focus:ring-blue-100 bg-white'
                    }`}
                  />
                  {errors.lastName && (
                    <p className="text-xs text-rose-500 mt-1 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.lastName}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Row 2: Contact Number & Country */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Contact number <span className="text-[#0866E8]">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 7490923790"
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-800 focus:outline-none transition-all ${
                      errors.phone
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
                    Country
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="e.g. India"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-[#0866E8] focus:ring-2 focus:ring-blue-100 text-sm text-slate-800 focus:outline-none transition-all bg-white"
                  />
                </div>
              </div>

              {/* Row 3: Email ID */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Email ID <span className="text-[#0866E8]">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-800 focus:outline-none transition-all ${
                    errors.email
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

              {/* Row 4: Service Selection with Categorized Optgroups */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Service <span className="text-[#0866E8]">*</span>
                </label>
                <div className="relative">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-800 focus:outline-none transition-all appearance-none bg-white cursor-pointer ${
                      errors.service
                        ? 'border-rose-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-100'
                        : 'border-slate-200 focus:border-[#0866E8] focus:ring-2 focus:ring-blue-100'
                    }`}
                  >
                    <option value="">Select a service</option>

                    <optgroup label="AI Services">
                      <option value="AI Chatbot Development">AI Chatbot Development</option>
                      <option value="AI Agent Development">AI Agent Development</option>
                      <option value="AI Workflow Automation">AI Workflow Automation</option>
                      <option value="AI Sales & Lead Agent">AI Sales & Lead Agent</option>
                    </optgroup>

                    <optgroup label="Cyber Security Services">
                      <option value="Web Application Security">Web Application Security</option>
                      <option value="Vulnerability Assessment & Penetration Testing (VAPT)">Vulnerability Assessment & Penetration Testing (VAPT)</option>
                      <option value="API Security Testing">API Security Testing</option>
                    </optgroup>

                    <optgroup label="AI Film Services">
                      <option value="AI Short Film Production">AI Short Film Production</option>
                      <option value="AI Long Film Production">AI Long Film Production</option>
                      <option value="AI Reels Production">AI Reels Production</option>
                      <option value="AI Advertisement Films">AI Advertisement Films</option>
                      <option value="AI Brand Videos & Logo Animations">AI Brand Videos & Logo Animations</option>
                      <option value="AI Animation & Animated Films">AI Animation & Animated Films</option>
                      <option value="AI Scriptwriting & Story Development">AI Scriptwriting & Story Development</option>
                      <option value="AI Video Editing & Post-Production">AI Video Editing & Post-Production</option>
                      <option value="AI Music Videos">AI Music Videos</option>
                      <option value="AI Documentary Films">AI Documentary Films</option>
                    </optgroup>
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

              {/* Row 5: Message */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Message <span className="text-[#0866E8]">*</span>
                </label>
                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message or inquiry here..."
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-800 focus:outline-none transition-all ${
                    errors.message
                      ? 'border-rose-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-100 bg-rose-50/20'
                      : 'border-slate-200 focus:border-[#0866E8] focus:ring-2 focus:ring-blue-100 bg-white'
                  }`}
                />
                {errors.message && (
                  <p className="text-xs text-rose-500 mt-1 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.message}</span>
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
                    <span>Sending inquiry...</span>
                  </>
                ) : (
                  <>
                    <span>Send inquiry</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}