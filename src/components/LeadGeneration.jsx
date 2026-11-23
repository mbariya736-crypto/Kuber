import React from 'react';
import {
  CheckCircle2,
  AlertCircle,
  XCircle
} from 'lucide-react';

export default function LeadGeneration({ onOpenModal, className = '' }) {
  // 1. Problem Card Items
  const problemPoints = [
    { title: 'Missed customer messages', desc: 'Inquiries sit unread in separate inboxes or chat apps during busy working hours.' },
    { title: 'Disorganized contact details', desc: 'Names, phone numbers, and notes get scattered across personal notes and spreadsheets.' },
    { title: 'Time wasted on spam', desc: 'Staff spend valuable hours manually sorting through repetitive junk messages.' },
    { title: 'Slow follow-up times', desc: 'Delayed replies can cause interested clients to reach out to other providers.' }
  ];

  // 2. Solution Card Items
  const solutionPoints = [
    { title: 'One organized inbox', desc: 'Website, WhatsApp, and email inquiries gathered automatically in one clear view.' },
    { title: 'Structured customer records', desc: 'Contact details, inquiry dates, and follow-up notes stored systematically.' },
    { title: 'Spam filtering', desc: 'Simple filters screen out junk submissions before they reach your team.' },
    { title: 'Fast team notifications', desc: 'Instant alerts ensure staff can respond promptly while client interest is high.' }
  ];

  return (
    <section id="lead-generation" className={`py-6 sm:py-10 relative overflow-hidden scroll-mt-24 ${className || 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ======================================================== */}
        {/* PROBLEM AND SOLUTION COMPARISON                         */}
        {/* ======================================================== */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#082B59]">
              Solving Everyday Inquiry Bottlenecks
            </h3>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            {/* PROBLEM CARD */}
            <div className="p-7 sm:p-9 rounded-[28px] bg-white border border-rose-200/80 shadow-sm flex flex-col justify-between text-left">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center border border-rose-200/80 shadow-2xs">
                    <AlertCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xl font-extrabold text-[#082B59]">
                      Common Inquiry Problems
                    </h4>
                  </div>
                </div>

                <div className="space-y-3">
                  {problemPoints.map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-rose-50/40 border border-rose-100/80">
                      <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                      <div>
                        <h5 className="text-sm font-bold text-[#082B59] leading-snug">
                          {pt.title}
                        </h5>
                        <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                          {pt.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-rose-100 flex items-center justify-between text-xs text-rose-700 font-semibold">
                <span>Result: Lost time and missed client opportunities</span>
              </div>
            </div>

            {/* SOLUTION CARD */}
            <div className="p-7 sm:p-9 rounded-[28px] bg-white border border-blue-200/80 shadow-sm flex flex-col justify-between text-left">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-2xl bg-blue-50 text-[#0866E8] flex items-center justify-center border border-blue-200/80 shadow-2xs">
                    <CheckCircle2 className="w-5 h-5 text-[#0866E8]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-extrabold text-[#082B59]">
                      How We Manage Inquiries
                    </h4>
                  </div>
                </div>

                <div className="space-y-3">
                  {solutionPoints.map((sol, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-blue-50/40 border border-blue-100/80">
                      <CheckCircle2 className="w-4 h-4 text-[#0866E8] shrink-0 mt-0.5" />
                      <div>
                        <h5 className="text-sm font-bold text-[#082B59] leading-snug">
                          {sol.title}
                        </h5>
                        <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                          {sol.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-blue-100 flex items-center justify-between text-xs text-[#0866E8] font-bold">
                <span>Result: Consistent, organized communication with customers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
