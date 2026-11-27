import React from 'react';
import { 
  Plane, 
  MapPin, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare, 
  FileSpreadsheet, 
  Clock, 
  ShieldCheck,
  Send
} from 'lucide-react';

/**
 * Tours & Travels Enquiry Management
 * 
 * Clean, enterprise-style showcase for travel agency inquiry management and automation.
 * Focused purely on real workflow capabilities with zero fake simulations or artificial filler.
 */
export default function ToursAndTravelsShowcase({ onOpenContact }) {
  const travelCapabilities = [
    {
      title: 'Multi-Channel Enquiry Intake',
      desc: 'Capture inbound customer travel inquiries automatically from website forms, WhatsApp, and phone calls without missing leads.'
    },
    {
      title: 'Automated Package Matching',
      desc: 'Instantly match traveler preferences—including destination, duration, group size, and budget—to relevant tour itineraries.'
    },
    {
      title: 'Instant Travel Desk WhatsApp Alerts',
      desc: 'Dispatch qualified inquiry details directly to your tour consultants via WhatsApp and email within seconds for rapid booking closure.'
    },
    {
      title: 'Daily Pipeline & Follow-up Tracking',
      desc: 'Keep all customer inquiries organized in structured spreadsheets and CRM dashboards with automated daily reports.'
    }
  ];

  return (
    <div className="w-full text-left">
      {/* Header */}
      <div className="max-w-3xl mb-8 sm:mb-12 text-left">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#082B59] tracking-tight">
          Tours &amp; Travels Enquiry Management
        </h2>
        <p className="text-sm sm:text-base text-slate-600 mt-2.5 font-normal leading-relaxed">
          Structured inquiry qualification and automated dispatch built specifically for tour operators and travel agencies.
        </p>
      </div>

      {/* 4 Clean Real Capabilities Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 text-left items-stretch mb-12 sm:mb-16">
        {travelCapabilities.map((item, idx) => (
          <div
            key={idx}
            className="rounded-2xl bg-white border border-slate-200/90 hover:border-slate-300 p-7 transition-all duration-200 shadow-xs hover:shadow-md flex flex-col justify-between group"
          >
            <div>
              <h3 className="text-lg font-bold text-[#082B59] mb-3 leading-snug group-hover:text-teal-700 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                {item.desc}
              </p>
            </div>
            <button
              type="button"
              onClick={onOpenContact}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-800 transition-colors cursor-pointer w-fit"
            >
              <span>Learn More →</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
