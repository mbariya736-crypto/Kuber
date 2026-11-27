import React from 'react';
import { 
  Building2, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  FileSpreadsheet, 
  Users, 
  Filter
} from 'lucide-react';

/**
 * Real Estate Lead Management
 * 
 * Clean, enterprise-style showcase for developer and broker lead qualification.
 * Focused purely on real workflow capabilities with zero fake simulations or artificial filler.
 */
export default function RealEstateShowcase({ onOpenContact }) {
  const realEstateCapabilities = [
    {
      title: 'Buyer & Investor Qualification',
      desc: 'Filter serious property buyers by budget, preferred locality, property type, and purchase timeline before passing to brokers.'
    },
    {
      title: 'Instant Property & Brochure Matching',
      desc: 'Automatically share project brochures, floor plans, and pricing details with verified buyers based on their inquiry.'
    },
    {
      title: 'Real-Time Agent & Broker Alerts',
      desc: 'Dispatch high-intent lead alerts with client details directly to assigned sales agents via WhatsApp within seconds.'
    },
    {
      title: 'Pipeline Organization & Site Visits',
      desc: 'Centralize buyer leads in spreadsheets and CRM with automated follow-up reminders and scheduled site visit tracking.'
    }
  ];

  return (
    <div className="w-full text-left">
      {/* Header */}
      <div className="max-w-3xl mb-8 sm:mb-12 text-left">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#082B59] tracking-tight">
          Real Estate Lead Management
        </h2>
        <p className="text-sm sm:text-base text-slate-600 mt-2.5 font-normal leading-relaxed">
          High-intent inquiry qualification, automated property matching, and instant broker dispatch for developers and agencies.
        </p>
      </div>

      {/* 4 Clean Real Capabilities Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 text-left items-stretch mb-12 sm:mb-16">
        {realEstateCapabilities.map((item, idx) => (
          <div
            key={idx}
            className="rounded-2xl bg-white border border-slate-200/90 hover:border-slate-300 p-7 transition-all duration-200 shadow-xs hover:shadow-md flex flex-col justify-between group"
          >
            <div>
              <h3 className="text-lg font-bold text-[#082B59] mb-3 leading-snug group-hover:text-[#0866E8] transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                {item.desc}
              </p>
            </div>
            <button
              type="button"
              onClick={onOpenContact}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0866E8] hover:text-[#0756C5] transition-colors cursor-pointer w-fit"
            >
              <span>Learn More →</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
