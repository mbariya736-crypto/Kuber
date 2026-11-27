import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Building2,
  MapPin,
  Calendar,
  Users,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  MessageSquare,
  FileSpreadsheet,
  Send,
  Home,
  Tag,
  Check,
  ChevronRight,
  Phone,
  FileText
} from 'lucide-react';

export default function RealEstateShowcase({ onOpenContact }) {
  // 1. Pure Inventory Data from D&J Real Estate Hub
  const propertyCategories = ['All', 'Flats', 'Duplex / Villas', 'Houses', 'Plots & Land'];
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProperty, setSelectedProperty] = useState(null);

  const properties = [
    {
      id: 'flat',
      name: '2BHK Flat, Sunrise Residency',
      category: 'Flats',
      price: '₹38 Lakh',
      area: '950 sq ft built-up',
      loc: 'Atladara',
      address: 'Plot 14, Sunrise Residency, Atladara Main Road, Vadodara',
      bhk: '2 BHK',
      floor: '3rd of 5 floors',
      facing: 'East',
      parking: '1 car',
      possession: 'Ready to move in',
      deal: 'For sale',
      rate: '₹4,000 per sq ft',
      loan: 'Bank loan possible',
      docs: 'Title clear, NA sanctioned',
      note: 'Owner open to negotiation of about 1 lakh.'
    },
    {
      id: 'flat2',
      name: '2BHK Flat, Green Avenue',
      category: 'Flats',
      price: '₹42 Lakh',
      area: '1010 sq ft built-up',
      loc: 'Atladara',
      address: 'B-204, Green Avenue, Atladara, Vadodara',
      bhk: '2 BHK',
      floor: '2nd of 4 floors',
      facing: 'North',
      parking: '1 car',
      possession: 'Ready to move in',
      deal: 'For sale',
      rate: '₹4,158 per sq ft',
      loan: 'Bank loan possible',
      docs: 'Title clear, society NOC available',
      note: 'Lift and generator backup available.'
    },
    {
      id: 'duplex',
      name: 'Duplex Villa, Shanti Park',
      category: 'Duplex / Villas',
      price: '₹65 Lakh',
      area: '1800 sq ft built-up',
      loc: 'Chhani',
      address: 'Shanti Park Society, Chhani Road, Chhani, Vadodara',
      bhk: '3 BHK duplex',
      floor: 'Ground + first floor',
      facing: 'West',
      parking: '2 cars',
      possession: '3 months',
      deal: 'For sale',
      rate: '₹3,611 per sq ft',
      loan: 'Bank loan possible, approved client available',
      docs: 'Title clear, registry ready',
      note: 'Terrace and garden space included.'
    },
    {
      id: 'house',
      name: 'Independent House, Ajwa Road',
      category: 'Houses',
      price: '₹46 Lakh',
      area: '1400 sq ft built-up on 1200 sq ft plot',
      loc: 'Ajwa',
      address: 'Survey 88, Ajwa Road, near Ajwa Crossing, Vadodara',
      bhk: '3 BHK independent house',
      floor: 'Ground floor, independent',
      facing: 'South',
      parking: '2 cars',
      possession: 'Ready to move in',
      deal: 'For sale',
      rate: '₹3,286 per sq ft',
      loan: 'Bank loan possible',
      docs: 'Title clear, gram panchayat tax paid',
      note: 'Good road access and water connection.'
    },
    {
      id: 'house2',
      name: '3BHK House, Kalaghoda Society',
      category: 'Houses',
      price: '₹52 Lakh',
      area: '1600 sq ft built-up',
      loc: 'Ajwa',
      address: 'Kalaghoda Society, Ajwa, Vadodara',
      bhk: '3 BHK',
      floor: 'Ground + first floor',
      facing: 'East',
      parking: '1 car',
      possession: '2 months',
      deal: 'For sale',
      rate: '₹3,250 per sq ft',
      loan: 'Bank loan possible',
      docs: 'Title clear, society NOC pending',
      note: 'Park facing, quiet area.'
    },
    {
      id: 'land',
      name: 'Farming Land, Waghodia Taluka',
      category: 'Plots & Land',
      price: '₹28 Lakh',
      area: '1 acre (43,560 sq ft)',
      loc: 'Waghodia',
      address: 'Survey 212, Waghodia Taluka, Vadodara',
      bhk: 'Farming land',
      floor: 'Not applicable',
      facing: 'Road facing',
      parking: 'Open space',
      possession: 'Immediate',
      deal: 'For sale',
      rate: 'About ₹64 per sq ft',
      loan: 'Agriculture land loan, check with bank',
      docs: '7/12 and 8A extract available',
      note: 'Irrigation water source nearby.'
    },
    {
      id: 'nal',
      name: 'N/A Plot, Atladara Main Road',
      category: 'Plots & Land',
      price: '₹18 Lakh',
      area: '1200 sq yd (about 1000 sq m)',
      loc: 'Atladara',
      address: 'Plot 7, Atladara Main Road, Vadodara',
      bhk: 'N/A plot',
      floor: 'Not applicable',
      facing: 'Main road facing',
      parking: 'Open space',
      possession: 'Immediate',
      deal: 'For sale',
      rate: '₹1,500 per sq yd',
      loan: 'Plot loan possible',
      docs: 'Title clear, N/A order available',
      note: 'Ready for construction.'
    }
  ];

  const filteredProperties = activeCategory === 'All'
    ? properties
    : properties.filter((p) => p.category === activeCategory);

  // 2. Pure Leads & Workflow Data from D&J Real Estate Hub Demo
  const realEstateLeads = [
    {
      id: 'lead-1',
      name: 'Ramesh Shah',
      phone: '+91 98XXX 00001',
      email: 'ramesh.s@example.com',
      source: 'Website enquiry form',
      want: '2BHK Flat',
      bhk: '2 BHK',
      location: 'Atladara',
      budget: '35 - 40 lakh',
      family: '4 members',
      timeline: 'Within 1 month',
      visit: 'Sunday 11 AM, site visit requested',
      serious: true,
      note: 'Wants site visit this Sunday',
      matchedPropertyIds: ['flat', 'flat2'],
      chat: [
        { sender: 'client', text: 'Hello, I want a 2BHK flat in Atladara' },
        { sender: 'bot', text: 'Sure! Budget and timeline please?' },
        { sender: 'client', text: '35 to 40 lakh, need within 1 month. Can I visit this Sunday?' },
        { sender: 'bot', text: 'Yes, I have noted a Sunday 11 AM visit request for you.' }
      ],
      whatsappAlert: `NEW SERIOUS LEAD - Real Estate Lead Alert

Client: Ramesh Shah
Phone: +91 98XXX 00001
Email: ramesh.s@example.com
Wants: 2BHK Flat (2 BHK), Atladara
Budget: 35 - 40 lakh
Family: 4 members
Timeline: Within 1 month
Visit: Sunday 11 AM, site visit requested

Matched Properties:
• 2BHK Flat, Sunrise Residency (₹38 lakh)
• 2BHK Flat, Green Avenue (₹42 lakh)

Action Required: Call to confirm Sunday 11 AM site visit.`
    },
    {
      id: 'lead-2',
      name: 'Kiran Patel',
      phone: '+91 96XXX 00003',
      email: 'kiran.p@example.com',
      source: 'Google Ads',
      want: 'Duplex',
      bhk: '3 BHK',
      location: 'Chhani',
      budget: '60 - 70 lakh',
      family: '5 members',
      timeline: 'Within 2 months',
      visit: 'Saturday 4 PM, confirmed',
      serious: true,
      note: 'Loan approved, visit confirmed',
      matchedPropertyIds: ['duplex'],
      chat: [
        { sender: 'client', text: 'I need a duplex near Chhani, 3 BHK' },
        { sender: 'bot', text: 'Got it. What is your budget range?' },
        { sender: 'client', text: '60 to 70 lakh. Loan approved already' },
        { sender: 'bot', text: 'Great. Visit booked for Saturday 4 PM. Broker will call you.' }
      ],
      whatsappAlert: `NEW SERIOUS LEAD - Real Estate Lead Alert

Client: Kiran Patel
Phone: +91 96XXX 00003
Email: kiran.p@example.com
Wants: Duplex (3 BHK), Chhani
Budget: 60 - 70 lakh
Family: 5 members
Timeline: Within 2 months
Visit: Saturday 4 PM, confirmed

Matched Properties:
• Duplex Villa, Shanti Park (₹65 lakh)

Action Required: Broker confirmed call for Saturday 4 PM site tour.`
    },
    {
      id: 'lead-3',
      name: 'Anita Joshi',
      phone: '+91 95XXX 00004',
      email: 'anita.j@example.com',
      source: 'Website enquiry form',
      want: 'House',
      bhk: '3 BHK',
      location: 'Ajwa',
      budget: '45 - 50 lakh',
      family: '4 members',
      timeline: 'Within 3 months',
      visit: 'Requested, date not fixed',
      serious: true,
      note: 'Needs loan help',
      matchedPropertyIds: ['house', 'house2'],
      chat: [
        { sender: 'client', text: 'Looking for independent house in Ajwa side' },
        { sender: 'bot', text: 'Noted. What is your budget?' },
        { sender: 'client', text: '45 to 50 lakh. Need loan help too' },
        { sender: 'bot', text: 'Our team will help with bank loan options.' }
      ],
      whatsappAlert: `NEW SERIOUS LEAD - Real Estate Lead Alert

Client: Anita Joshi
Phone: +91 95XXX 00004
Email: anita.j@example.com
Wants: House (3 BHK), Ajwa
Budget: 45 - 50 lakh
Family: 4 members
Timeline: Within 3 months
Visit: Requested, date not fixed

Matched Properties:
• Independent House, Ajwa Road (₹46 lakh)
• 3BHK House, Kalaghoda Society (₹52 lakh)

Action Required: Bank loan assistance & schedule house inspection.`
    },
    {
      id: 'lead-4',
      name: 'Priya Desai',
      phone: '+91 97XXX 00002',
      email: 'priya.d@example.com',
      source: 'WhatsApp',
      want: 'Farming Land',
      bhk: '-',
      location: 'Waghodia',
      budget: 'Not stated',
      family: '-',
      timeline: 'Just checking prices',
      visit: 'None',
      serious: false,
      note: 'Browsing only',
      matchedPropertyIds: [],
      chat: [
        { sender: 'client', text: 'Land rate in Waghodia?' },
        { sender: 'bot', text: 'Happy to help. What area size are you thinking of?' },
        { sender: 'client', text: 'Just checking for now' }
      ],
      whatsappAlert: `LEAD STATUS: Nurture Queue
Client: Priya Desai (+91 97XXX 00002)
Status: Price checking / browsing only. Added to nurture list without broker alert dispatch.`
    }
  ];

  const [activeLeadIndex, setActiveLeadIndex] = useState(0);
  const currentLead = realEstateLeads[activeLeadIndex];

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* SECTION 1: REAL ESTATE PROPERTIES INVENTORY */}
      <div className="rounded-[28px] sm:rounded-[36px] bg-white border border-slate-200/90 p-6 sm:p-10 shadow-lg shadow-blue-900/5">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-[#0866E8] border border-blue-200/80">
                Verified Inventory
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#082B59]">
              D&J Real Estate Available Properties
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Active verified residential and land listings mapped automatically to prospective buyer requirements.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {propertyCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#0866E8] text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200/80 text-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProperties.map((prop) => (
            <motion.div
              key={prop.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              onClick={() => setSelectedProperty(prop)}
              className="rounded-2xl bg-slate-50/60 border border-slate-200/90 hover:border-blue-400 p-5 flex flex-col justify-between transition-all duration-200 hover:shadow-md hover:bg-white group cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-blue-100/70 text-[#0866E8]">
                    {prop.category}
                  </span>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    {prop.deal}
                  </span>
                </div>

                <h4 className="text-base font-bold text-[#082B59] group-hover:text-[#0866E8] transition-colors mb-1.5">
                  {prop.name}
                </h4>

                <p className="text-xs text-slate-500 flex items-center gap-1 mb-2.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span className="truncate">{prop.loc} ({prop.address})</span>
                </p>

                <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 mb-4 bg-white p-2.5 rounded-xl border border-slate-200/70">
                  <div>
                    <span className="text-[10px] text-slate-400 block font-semibold">Area</span>
                    <span className="font-bold text-[#082B59]">{prop.area}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block font-semibold">Configuration</span>
                    <span className="font-bold text-[#082B59]">{prop.bhk}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block font-semibold">Facing / Floor</span>
                    <span className="font-medium text-slate-700">{prop.facing} | {prop.floor}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block font-semibold">Possession</span>
                    <span className="font-medium text-slate-700">{prop.possession}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-500 italic mb-2">
                  "{prop.note}"
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block leading-none">
                    Price
                  </span>
                  <span className="text-base font-extrabold text-emerald-700">
                    {prop.price}
                  </span>
                </div>
                <span className="text-xs font-semibold text-[#0866E8] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  View Specs <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* SECTION 2: LIVE BUYER QUALIFICATION & BROKER ALERT PIPELINE */}
      <div className="rounded-[28px] sm:rounded-[36px] bg-white border border-slate-200/90 p-6 sm:p-10 shadow-lg shadow-blue-900/5">
        <div className="max-w-2xl mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200/80">
              Pipeline Demonstration
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#082B59]">
            Real Estate Lead Qualification & Broker Dispatch
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            See how incoming property inquiries from web forms and WhatsApp are captured, checked for seriousness, matched with inventory, and sent directly to the broker.
          </p>
        </div>

        {/* Lead Selector Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {realEstateLeads.map((lead, idx) => (
            <button
              key={lead.id}
              type="button"
              onClick={() => setActiveLeadIndex(idx)}
              className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeLeadIndex === idx
                  ? 'bg-[#082B59] text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200/70 text-slate-700'
              }`}
            >
              <span>{lead.name}</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                activeLeadIndex === idx ? 'bg-white/20 text-white' : 'bg-white text-slate-600 border border-slate-200'
              }`}>
                {lead.location} ({lead.want})
              </span>
            </button>
          ))}
        </div>

        {/* 5 Stages Progress Indicator */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3 mb-8">
          {[
            { num: '01', label: 'Enquiry Received' },
            { num: '02', label: 'Details Captured' },
            { num: '03', label: 'Seriousness Check' },
            { num: '04', label: 'Properties Matched' },
            { num: '05', label: 'Broker Alerted' }
          ].map((stage, idx) => (
            <div
              key={idx}
              className="p-3 rounded-xl bg-blue-50/60 border border-blue-200/80 flex items-center gap-2.5"
            >
              <div className="w-6 h-6 rounded-full bg-[#0866E8] text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] uppercase font-bold text-[#0866E8] block leading-tight">
                  Step {stage.num}
                </span>
                <span className="text-xs font-bold text-[#082B59] truncate block">
                  {stage.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Main 2-Column Split: Buyer Profile & Chat / Broker WhatsApp Alert */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left Column: Buyer Profile Card & Chat Transcript */}
          <div className="lg:col-span-6 space-y-6">
            {/* Captured Profile Card */}
            <div className="rounded-2xl bg-slate-50/70 border border-slate-200 p-5">
              <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Buyer Qualification Profile
                  </span>
                </div>
                <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                  currentLead.serious ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                }`}>
                  {currentLead.serious ? 'Serious Buyer' : 'Nurture List'}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-slate-400 block font-semibold">Client Name</span>
                  <span className="font-bold text-[#082B59] text-sm">{currentLead.name}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-semibold">Contact / Source</span>
                  <span className="font-bold text-slate-700">{currentLead.phone} ({currentLead.source})</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-semibold">Requirement</span>
                  <span className="font-bold text-[#0866E8] text-sm">{currentLead.want} ({currentLead.bhk})</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-semibold">Preferred Location</span>
                  <span className="font-bold text-slate-700">{currentLead.location}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-semibold">Budget Range</span>
                  <span className="font-bold text-emerald-700">{currentLead.budget}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-semibold">Family & Timeline</span>
                  <span className="font-bold text-slate-700">{currentLead.family} | {currentLead.timeline}</span>
                </div>
                <div className="col-span-2 pt-2 border-t border-slate-200/80">
                  <span className="text-slate-400 block font-semibold">Site Visit Request / Note</span>
                  <span className="font-medium text-slate-800">{currentLead.visit}</span>
                </div>
              </div>
            </div>

            {/* Conversation Transcript */}
            <div className="rounded-2xl bg-slate-50/70 border border-slate-200 p-5">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-3">
                Live Intake Interaction
              </span>
              <div className="space-y-3">
                {currentLead.chat.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex flex-col ${msg.sender === 'client' ? 'items-start' : 'items-end'}`}
                  >
                    <span className="text-[10px] text-slate-400 mb-0.5 px-1 font-medium">
                      {msg.sender === 'client' ? currentLead.name : 'Real Estate Intake Agent'}
                    </span>
                    <div
                      className={`text-xs p-3 rounded-xl max-w-[85%] leading-relaxed ${
                        msg.sender === 'client'
                          ? 'bg-white border border-slate-200 text-slate-800'
                          : 'bg-[#0866E8] text-white font-medium'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Matched Properties & Broker WhatsApp Alert */}
          <div className="lg:col-span-6 space-y-6">
            {/* Matched Properties List */}
            <div className="rounded-2xl bg-blue-50/50 border border-blue-200/90 p-5">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-4 h-4 text-[#0866E8]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#082B59]">
                  Inventory Matches ({currentLead.matchedPropertyIds.length})
                </span>
              </div>

              {currentLead.matchedPropertyIds.length > 0 ? (
                <div className="space-y-2">
                  {currentLead.matchedPropertyIds.map((propId) => {
                    const matched = properties.find((p) => p.id === propId);
                    if (!matched) return null;
                    return (
                      <div
                        key={propId}
                        onClick={() => setSelectedProperty(matched)}
                        className="p-3 rounded-xl bg-white border border-slate-200 flex items-center justify-between hover:border-blue-400 cursor-pointer transition-all shadow-2xs"
                      >
                        <div>
                          <span className="text-xs font-bold text-[#082B59] block">
                            {matched.name}
                          </span>
                          <span className="text-[11px] text-slate-500">
                            {matched.area} • {matched.loc}
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-extrabold text-emerald-700 block">
                            {matched.price}
                          </span>
                          <span className="text-[10px] text-[#0866E8] font-semibold">
                            View details →
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p className="text-xs text-slate-500 italic">
                  No immediate match found. Client added to automated nurture sequence.
                </p>
              )}
            </div>

            {/* Live Broker WhatsApp Alert Card */}
            <div className="rounded-2xl bg-[#091E36] border border-blue-800/40 p-5 sm:p-6 text-white shadow-md">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-blue-800/40">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                    <MessageSquare className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    Broker WhatsApp Alert
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-blue-300/80">
                  Instant Dispatch
                </span>
              </div>

              <pre className="text-xs font-mono whitespace-pre-wrap text-blue-100 leading-relaxed bg-black/25 p-3.5 rounded-xl border border-blue-900/50">
                {currentLead.whatsappAlert}
              </pre>

              <div className="mt-4 pt-3 border-t border-blue-800/40 flex items-center justify-between">
                <span className="text-xs text-blue-300/90 font-medium">
                  Logged in D&J Real Estate Client Database & CRM
                </span>
                <span className="text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 px-3 py-1 rounded-lg transition-colors cursor-pointer">
                  Delivered ✓✓
                </span>
              </div>
            </div>

            {/* 8 PM Daily Executive Summary */}
            <div className="rounded-2xl bg-slate-50/70 border border-slate-200 p-5">
              <div className="flex items-center gap-2 mb-3">
                <FileSpreadsheet className="w-4 h-4 text-[#0866E8]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#082B59]">
                  Daily 8 PM Broker Report
                </span>
              </div>

              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="p-3 rounded-xl bg-white border border-slate-200/90">
                  <span className="text-xl sm:text-2xl font-black text-[#082B59] block">12</span>
                  <span className="text-[11px] font-semibold text-slate-500">Inquiries Received</span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-emerald-200/90">
                  <span className="text-xl sm:text-2xl font-black text-emerald-600 block">9</span>
                  <span className="text-[11px] font-semibold text-slate-500">Serious Buyers</span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-amber-200/90">
                  <span className="text-xl sm:text-2xl font-black text-amber-600 block">3</span>
                  <span className="text-[11px] font-semibold text-slate-500">Nurture List</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Property Full Specifications Modal */}
      <AnimatePresence>
        {selectedProperty && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
            onClick={() => setSelectedProperty(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-6 sm:p-8 max-w-xl w-full border border-slate-200 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-[#0866E8] border border-blue-200/80">
                  {selectedProperty.category}
                </span>
                <span className="text-base font-extrabold text-emerald-700">
                  {selectedProperty.price}
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#082B59] mb-1">
                {selectedProperty.name}
              </h3>
              <p className="text-xs text-slate-500 flex items-center gap-1 mb-4">
                <MapPin className="w-3.5 h-3.5 text-[#0866E8]" />
                <span>{selectedProperty.address}</span>
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6 bg-slate-50 p-4 rounded-2xl border border-slate-200/70 text-xs">
                <div>
                  <span className="text-slate-400 font-semibold block">Area:</span>
                  <span className="font-bold text-slate-800">{selectedProperty.area}</span>
                </div>
                <div>
                  <span className="text-slate-400 font-semibold block">Rate:</span>
                  <span className="font-bold text-slate-800">{selectedProperty.rate}</span>
                </div>
                <div>
                  <span className="text-slate-400 font-semibold block">Configuration:</span>
                  <span className="font-bold text-slate-800">{selectedProperty.bhk}</span>
                </div>
                <div>
                  <span className="text-slate-400 font-semibold block">Floor / Facing:</span>
                  <span className="font-bold text-slate-800">{selectedProperty.floor} | {selectedProperty.facing}</span>
                </div>
                <div>
                  <span className="text-slate-400 font-semibold block">Parking:</span>
                  <span className="font-bold text-slate-800">{selectedProperty.parking}</span>
                </div>
                <div>
                  <span className="text-slate-400 font-semibold block">Possession:</span>
                  <span className="font-bold text-slate-800">{selectedProperty.possession}</span>
                </div>
                <div>
                  <span className="text-slate-400 font-semibold block">Bank Loan:</span>
                  <span className="font-bold text-slate-800">{selectedProperty.loan}</span>
                </div>
                <div>
                  <span className="text-slate-400 font-semibold block">Legal Documentation:</span>
                  <span className="font-bold text-slate-800">{selectedProperty.docs}</span>
                </div>
                <div className="col-span-2 pt-2 border-t border-slate-200">
                  <span className="text-slate-400 font-semibold block">Broker Note:</span>
                  <span className="font-medium text-slate-700 italic">{selectedProperty.note}</span>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedProperty(null)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedProperty(null);
                    onOpenContact();
                  }}
                  className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-[#0866E8] hover:bg-[#0756C5] shadow-xs transition-colors cursor-pointer"
                >
                  Request Site Visit
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
