import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Plane,
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
  Building2,
  Tag,
  Check,
  ChevronRight
} from 'lucide-react';

export default function ToursAndTravelsShowcase({ onOpenContact }) {
  // 1. Packages Catalog Data
  const categories = ['All', 'Domestic', 'International', 'Services', 'Group', 'Honeymoon & Family'];
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedPackage, setSelectedPackage] = useState(null);

  const packages = [
    {
      id: 'p1',
      name: 'Gujarat Heritage Tour',
      cat: 'Domestic',
      loc: 'Dwarka, Somnath, Gir, Dhordo',
      dur: '4D / 3N',
      price: '₹12,000 per person',
      size: 'Min 4 people',
      inc: ['Hotel stay', 'Breakfast', 'AC bus', 'Local guide'],
      desc: 'Temple and wildlife trip through Saurashtra and Kutch.'
    },
    {
      id: 'p2',
      name: 'Kashmir Valley Trip',
      cat: 'Domestic',
      loc: 'Srinagar, Gulmarg, Pahalgam',
      dur: '6D / 5N',
      price: '₹22,500 per person',
      size: 'Min 2 people',
      inc: ['Houseboat / hotel', 'Breakfast and dinner', 'Gulmarg gondola ticket', 'Taxi'],
      desc: 'Snow, lakes and meadows with comfortable stays.'
    },
    {
      id: 'p3',
      name: 'Rajasthan Royal Tour',
      cat: 'Domestic',
      loc: 'Jaipur, Udaipur, Jodhpur',
      dur: '5D / 4N',
      price: '₹16,000 per person',
      size: 'Min 2 people',
      inc: ['Hotel stay', 'Breakfast', 'Private car', 'Fort entry tickets'],
      desc: 'Palaces, forts and desert culture in one trip.'
    },
    {
      id: 'p4',
      name: 'Dubai City Tour',
      cat: 'International',
      loc: 'Dubai, UAE',
      dur: '5D / 4N',
      price: '₹48,000 per person',
      size: 'Min 2 people',
      inc: ['Hotel stay', 'Desert safari', 'City tour', 'Visa help'],
      desc: 'Burj Khalifa, Dubai Mall and desert safari. Flights extra.'
    },
    {
      id: 'p5',
      name: 'Thailand Phuket Package',
      cat: 'International',
      loc: 'Phuket, Pattaya',
      dur: '6D / 5N',
      price: '₹42,000 per person',
      size: 'Min 2 people',
      inc: ['Hotel stay', 'Island tour', 'Airport transfer'],
      desc: 'Beaches, island hopping and city shopping.'
    },
    {
      id: 'p6',
      name: 'Europe Grand Tour',
      cat: 'International',
      loc: 'Switzerland, Italy, France',
      dur: '10D / 9N',
      price: '₹1,35,000 per person',
      size: 'Min 2 people',
      inc: ['Hotels', 'Train passes', 'Guided tours', 'Schengen visa help'],
      desc: 'Alps, Rome, Paris and more in one journey.'
    },
    {
      id: 'p7',
      name: 'Flight Ticket Booking',
      cat: 'Services',
      loc: 'Any destination',
      dur: 'Direct & Connecting',
      price: 'As per fare + ₹300 service fee',
      size: 'Individuals & Groups',
      inc: ['Domestic and international tickets', 'Seat selection', 'Refund help'],
      desc: 'Best fare search, seat reservation, and instant ticket booking.'
    },
    {
      id: 'p8',
      name: 'Hotel Booking',
      cat: 'Services',
      loc: 'Any city (Domestic / Global)',
      dur: 'Flexible',
      price: 'As per hotel rate',
      size: 'Flexible',
      inc: ['Hotel search', 'Best corporate rate', 'Instant confirmation'],
      desc: 'Budget to luxury hotels across India and abroad.'
    },
    {
      id: 'p9',
      name: 'Visa Assistance',
      cat: 'Services',
      loc: 'Dubai, Thailand, Schengen & US',
      dur: '3 - 7 Working Days',
      price: '₹2,500 + govt fee',
      size: 'Individual / Family',
      inc: ['Document checklist', 'Form filling', 'Appointment assistance'],
      desc: 'Complete visa documentation check and seamless submission support.'
    },
    {
      id: 'p10',
      name: 'Char Dham Yatra',
      cat: 'Group',
      loc: 'Yamunotri, Gangotri, Kedarnath, Badrinath',
      dur: '10D / 9N',
      price: '₹28,000 per person',
      size: 'Min 15 people',
      inc: ['Hotel stay', 'Pure veg meals', 'AC bus', 'Priority Darshan help'],
      desc: 'Dedicated pilgrimage group yatra for families, groups, and senior citizens.'
    },
    {
      id: 'p11',
      name: 'Corporate Offsite Package',
      cat: 'Group',
      loc: 'Lonavala, Goa, Udaipur',
      dur: '3D / 2N',
      price: '₹9,500 per person',
      size: 'Min 20 people',
      inc: ['Resort stay', 'Meeting conference hall', 'Team building activities', 'All meals'],
      desc: 'Structured corporate retreats, strategic meetings, and team bonding trips.'
    },
    {
      id: 'p12',
      name: 'Maldives Honeymoon',
      cat: 'Honeymoon & Family',
      loc: 'Maldives',
      dur: '5D / 4N',
      price: '₹95,000 per couple',
      size: 'Couple',
      inc: ['Water villa stay', 'Daily breakfast', 'Candlelit dinner', 'Speedboat transfers'],
      desc: 'Romantic island getaway with private lagoon access and luxury hospitality.'
    },
    {
      id: 'p13',
      name: 'Goa Family Trip',
      cat: 'Honeymoon & Family',
      loc: 'North Goa & South Goa',
      dur: '4D / 3N',
      price: '₹18,000 per person',
      size: 'Family / Small Group',
      inc: ['Resort stay', 'Breakfast', 'Sightseeing taxi', 'Water park passes'],
      desc: 'Relaxing family coastal holiday with heritage forts and beach attractions.'
    }
  ];

  const filteredPackages = activeCategory === 'All'
    ? packages
    : packages.filter((p) => p.cat === activeCategory);

  // 2. Interactive Lead Processing Simulation
  const sampleLeads = [
    {
      id: 'lead-1',
      name: 'Ankit Mehta',
      phone: '+91 98XXX 10001',
      source: 'WhatsApp',
      trip: 'International',
      dest: 'Dubai',
      dates: '15 - 19 Dec',
      travellers: '4 adults',
      budget: '₹1.5 - ₹2 Lakh total',
      extra: 'Needs visa help and flights',
      serious: true,
      matchedPackage: 'Dubai City Tour + Visa Assistance',
      action: 'Call today with customized itinerary and visa breakdown',
      chat: [
        { sender: 'client', text: 'Hi, we are looking for a Dubai package for 4 people in December.' },
        { sender: 'bot', text: 'Hello Mr. Mehta! We have premier Dubai packages. What specific travel dates and approximate budget are you considering?' },
        { sender: 'client', text: '15 to 19 Dec, budget around 1.5 to 2 lakh total. We also need visa assistance.' },
        { sender: 'bot', text: 'Noted! We have matched you with our 5D/4N Dubai City Tour & Visa package. Our travel desk is sending the quote to your WhatsApp now.' }
      ],
      whatsappAlert: `🚨 NEW HIGH-INTENT TRAVEL ENQUIRY
• Client: Ankit Mehta (+91 98XXX 10001)
• Trip: Dubai (International)
• Dates: 15 - 19 Dec | 4 Adults
• Budget: ₹1.5 - ₹2 Lakh total
• Needs: Visa assistance + Flight tickets
• Matched Package: Dubai City Tour (₹48,000/person)
• Priority: High (Requested callback today)`
    },
    {
      id: 'lead-2',
      name: 'Sunita Desai',
      phone: '+91 97XXX 10002',
      source: 'Website Enquiry Form',
      trip: 'Honeymoon & Family',
      dest: 'Maldives',
      dates: 'Feb, 2nd week',
      travellers: '2 (Couple)',
      budget: '₹1 Lakh',
      extra: 'Honeymoon, water villa preferred',
      serious: true,
      matchedPackage: 'Maldives Honeymoon Package',
      action: 'Share water villa quote and romantic dinner inclusions',
      chat: [
        { sender: 'client', text: 'Looking for a Maldives honeymoon package with water villa stay.' },
        { sender: 'bot', text: 'Congratulations on your upcoming celebration! Which month and tentative dates are you planning?' },
        { sender: 'client', text: '2nd week of Feb, budget around 1 lakh.' },
        { sender: 'bot', text: 'Perfect! Matching with our 5D/4N Luxury Maldives Honeymoon package. Quotation is on the way.' }
      ],
      whatsappAlert: `🚨 NEW HIGH-INTENT TRAVEL ENQUIRY
• Client: Sunita Desai (+91 97XXX 10002)
• Trip: Maldives (Honeymoon & Family)
• Dates: Feb, 2nd week | 2 (Couple)
• Budget: ₹1 Lakh
• Needs: Water villa preference
• Matched Package: Maldives Honeymoon (₹95,000/couple)
• Priority: High (Wants quotation this week)`
    },
    {
      id: 'lead-3',
      name: 'Rakesh Vyas',
      phone: '+91 96XXX 10003',
      source: 'WhatsApp',
      trip: 'Group',
      dest: 'Char Dham',
      dates: 'January',
      travellers: '25 Pilgrims',
      budget: '₹28,000 per person',
      extra: 'Around 6 senior citizens in group',
      serious: true,
      matchedPackage: 'Char Dham Yatra Group Package',
      action: 'Arrange group coordinator call and senior-friendly transit plan',
      chat: [
        { sender: 'client', text: 'Char Dham yatra for a group of 25 people in January.' },
        { sender: 'bot', text: 'Namaste! We specialize in Char Dham group yatras. Are there any senior citizens or specific dietary requirements?' },
        { sender: 'client', text: 'Yes, around 6 senior citizens, pure veg meals required.' },
        { sender: 'bot', text: 'Understood. We are preparing a senior-accessible itinerary with priority Darshan support.' }
      ],
      whatsappAlert: `🚨 NEW GROUP TRAVEL ENQUIRY
• Client: Rakesh Vyas (+91 96XXX 10003)
• Trip: Char Dham (Group Pilgrimage)
• Dates: January | 25 Pilgrims (6 Seniors)
• Budget: ₹28,000 per person
• Needs: Senior-friendly hotels & pure veg meals
• Matched Package: Char Dham Yatra (₹28,000/person)
• Priority: High (Requires dedicated group manager)`
    },
    {
      id: 'lead-4',
      name: 'Hetal Shah',
      phone: '+91 95XXX 10004',
      source: 'Google Ads',
      trip: 'Domestic',
      dest: 'Kashmir',
      dates: 'June Summer Holidays',
      travellers: '2 Adults, 2 Kids',
      budget: '₹60,000 total',
      extra: 'Looking for hotel + taxi package',
      serious: true,
      matchedPackage: 'Kashmir Valley Trip',
      action: 'Send family cottage and gondola ride itinerary',
      chat: [
        { sender: 'client', text: 'Family trip to Kashmir during kids vacation in June.' },
        { sender: 'bot', text: 'Hello! How many adults and children will be traveling?' },
        { sender: 'client', text: '2 adults and 2 kids. Budget around 60k total with sightseeing taxi.' },
        { sender: 'bot', text: 'Great! We have matched our 6D/5N Kashmir Valley package with family houseboat & gondola ride.' }
      ],
      whatsappAlert: `🚨 NEW FAMILY TRAVEL ENQUIRY
• Client: Hetal Shah (+91 95XXX 10004)
• Trip: Kashmir (Domestic)
• Dates: June | 2 Adults + 2 Kids
• Budget: ₹60,000 total
• Needs: Family cottage, taxi & gondola pass
• Matched Package: Kashmir Valley Trip
• Priority: Medium (Vacation booking in progress)`
    }
  ];

  const [activeLeadIndex, setActiveLeadIndex] = useState(0);
  const currentLead = sampleLeads[activeLeadIndex];

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* SECTION 1: INTERACTIVE PACKAGES & SERVICES CATALOG */}
      <div className="rounded-[28px] sm:rounded-[36px] bg-white border border-slate-200/90 p-6 sm:p-10 shadow-lg shadow-teal-900/5">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-teal-50 text-teal-700 border border-teal-200/80">
                Live Catalog Intake
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#082B59]">
              Travel Packages & Services Catalog
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Organized inventory automatically mapped to incoming customer travel inquiries.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${activeCategory === cat
                    ? 'bg-teal-600 text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200/80 text-slate-700'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredPackages.map((pkg) => (
            <motion.div
              key={pkg.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              onClick={() => setSelectedPackage(pkg)}
              className="rounded-2xl bg-slate-50/60 border border-slate-200/90 hover:border-teal-300 p-5 flex flex-col justify-between transition-all duration-200 hover:shadow-md hover:bg-white group cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-teal-100/70 text-teal-800">
                    {pkg.cat}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-teal-600" />
                    {pkg.dur}
                  </span>
                </div>

                <h4 className="text-base font-bold text-[#082B59] group-hover:text-teal-700 transition-colors mb-1.5">
                  {pkg.name}
                </h4>

                <p className="text-xs text-slate-500 flex items-center gap-1 mb-2.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span className="truncate">{pkg.loc}</span>
                </p>

                <p className="text-xs text-slate-600 line-clamp-2 mb-3.5 leading-relaxed">
                  {pkg.desc}
                </p>

                {/* Inclusions tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {pkg.inc.slice(0, 3).map((item, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-600"
                    >
                      {item}
                    </span>
                  ))}
                  {pkg.inc.length > 3 && (
                    <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-md bg-slate-100 text-slate-500">
                      +{pkg.inc.length - 3}
                    </span>
                  )}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block leading-none">
                    Pricing
                  </span>
                  <span className="text-sm font-extrabold text-teal-700">
                    {pkg.price}
                  </span>
                </div>
                <span className="text-xs font-semibold text-teal-600 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  Details <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* SECTION 2: LIVE QUALIFICATION & INTAKE WORKFLOW DEMO */}
      <div className="rounded-[28px] sm:rounded-[36px] bg-white border border-slate-200/90 p-6 sm:p-10 shadow-lg shadow-blue-900/5">
        <div className="max-w-2xl mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200/80">
              Live Pipeline Simulation
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#082B59]">
            Automated Enquiry Qualification Pipeline
          </h3>

        </div>

        {/* Lead Selector Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {sampleLeads.map((lead, idx) => (
            <button
              key={lead.id}
              type="button"
              onClick={() => setActiveLeadIndex(idx)}
              className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${activeLeadIndex === idx
                  ? 'bg-[#082B59] text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200/70 text-slate-700'
                }`}
            >
              <span>{lead.name}</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded ${activeLeadIndex === idx ? 'bg-white/20 text-white' : 'bg-white text-slate-600 border border-slate-200'
                }`}>
                {lead.dest}
              </span>
            </button>
          ))}
        </div>

        {/* 5 Stages Progress Indicator */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3 mb-8">
          {[
            { num: '01', label: 'Enquiry Received', status: 'Completed' },
            { num: '02', label: 'Details Captured', status: 'Completed' },
            { num: '03', label: 'Seriousness Check', status: 'Completed' },
            { num: '04', label: 'Package Matched', status: 'Completed' },
            { num: '05', label: 'Team Alert Dispatched', status: 'Completed' }
          ].map((stage, idx) => (
            <div
              key={idx}
              className="p-3 rounded-xl bg-teal-50/60 border border-teal-200/80 flex items-center gap-2.5"
            >
              <div className="w-6 h-6 rounded-full bg-teal-600 text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5" />
              </div>
              <div className="min-w-0">
                <span className="text-[10px] uppercase font-bold text-teal-700 block leading-tight">
                  Step {stage.num}
                </span>
                <span className="text-xs font-bold text-[#082B59] truncate block">
                  {stage.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Main 2-Column Split: Client Profile & Chat / WhatsApp Alert */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left Column: Client Qualification Card & Chat Transcript */}
          <div className="lg:col-span-6 space-y-6">
            {/* Captured Profile Card */}
            <div className="rounded-2xl bg-slate-50/70 border border-slate-200 p-5">
              <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Lead Qualification Details
                  </span>
                </div>
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                  Qualified Traveler
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
                  <span className="text-slate-400 block font-semibold">Destination</span>
                  <span className="font-bold text-teal-700 text-sm">{currentLead.dest}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-semibold">Travel Dates</span>
                  <span className="font-bold text-slate-700">{currentLead.dates}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-semibold">Travellers</span>
                  <span className="font-bold text-slate-700">{currentLead.travellers}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-semibold">Target Budget</span>
                  <span className="font-bold text-emerald-700">{currentLead.budget}</span>
                </div>
                <div className="col-span-2 pt-2 border-t border-slate-200/80">
                  <span className="text-slate-400 block font-semibold">Specific Requirements</span>
                  <span className="font-medium text-slate-700">{currentLead.extra}</span>
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
                      {msg.sender === 'client' ? currentLead.name : 'Intake Assistant'}
                    </span>
                    <div
                      className={`text-xs p-3 rounded-xl max-w-[85%] leading-relaxed ${msg.sender === 'client'
                          ? 'bg-white border border-slate-200 text-slate-800'
                          : 'bg-teal-600 text-white font-medium'
                        }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Matched Package & Instant WhatsApp Alert Dispatched */}
          <div className="lg:col-span-6 space-y-6">
            {/* Matched Package Card */}
            <div className="rounded-2xl bg-teal-50/50 border border-teal-200/90 p-5">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600" />
                <span className="text-xs font-bold uppercase tracking-wider text-teal-800">
                  Automatically Matched Itinerary
                </span>
              </div>
              <h4 className="text-base sm:text-lg font-bold text-[#082B59] mb-1">
                {currentLead.matchedPackage}
              </h4>
              <p className="text-xs text-slate-600">
                Action: <strong className="text-teal-800">{currentLead.action}</strong>
              </p>
            </div>

            {/* Live WhatsApp Alert Card */}
            <div className="rounded-2xl bg-[#0F1E1A] border border-emerald-800/40 p-5 sm:p-6 text-white shadow-md">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-emerald-800/40">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                    <MessageSquare className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    Travel Desk WhatsApp Alert
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-emerald-300/80">
                  Dispatched in 2.8s
                </span>
              </div>

              <pre className="text-xs font-mono whitespace-pre-wrap text-emerald-100 leading-relaxed bg-black/20 p-3.5 rounded-xl border border-emerald-900/50">
                {currentLead.whatsappAlert}
              </pre>

              <div className="mt-4 pt-3 border-t border-emerald-800/40 flex items-center justify-between">
                <span className="text-xs text-emerald-300/90 font-medium">
                  Automated sync with Travel Agency Google Sheet & CRM
                </span>
                <span className="text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 px-3 py-1 rounded-lg transition-colors cursor-pointer">
                  Delivered ✓✓
                </span>
              </div>
            </div>

            {/* Daily 8 PM Automated Report Summary */}
            <div className="rounded-2xl bg-slate-50/70 border border-slate-200 p-5">
              <div className="flex items-center gap-2 mb-3">
                <FileSpreadsheet className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#082B59]">
                  Daily 8 PM Executive Summary (Sample)
                </span>
              </div>

              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="p-3 rounded-xl bg-white border border-slate-200/90">
                  <span className="text-xl sm:text-2xl font-black text-[#082B59] block">18</span>
                  <span className="text-[11px] font-semibold text-slate-500">Inquiries Received</span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-teal-200/90">
                  <span className="text-xl sm:text-2xl font-black text-teal-600 block">14</span>
                  <span className="text-[11px] font-semibold text-slate-500">Serious Leads</span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-blue-200/90">
                  <span className="text-xl sm:text-2xl font-black text-blue-600 block">4</span>
                  <span className="text-[11px] font-semibold text-slate-500">Nurture Queue</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Package Detail Modal */}
      <AnimatePresence>
        {selectedPackage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
            onClick={() => setSelectedPackage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-slate-200 shadow-2xl relative"
            >
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-teal-50 text-teal-700 border border-teal-200/80">
                  {selectedPackage.cat}
                </span>
                <span className="text-xs font-bold text-slate-500">
                  {selectedPackage.dur}
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#082B59] mb-1.5">
                {selectedPackage.name}
              </h3>
              <p className="text-xs text-slate-500 flex items-center gap-1 mb-4">
                <MapPin className="w-3.5 h-3.5 text-teal-600" />
                <span>{selectedPackage.loc}</span>
              </p>

              <p className="text-sm text-slate-600 leading-relaxed mb-5">
                {selectedPackage.desc}
              </p>

              <div className="space-y-3 mb-6 bg-slate-50 p-4 rounded-2xl border border-slate-100 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-400 font-semibold">Price:</span>
                  <span className="font-extrabold text-teal-700 text-sm">{selectedPackage.price}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 font-semibold">Group Size:</span>
                  <span className="font-bold text-slate-700">{selectedPackage.size}</span>
                </div>
                <div>
                  <span className="text-slate-400 font-semibold block mb-1.5">Package Inclusions:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedPackage.inc.map((item, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700"
                      >
                        ✓ {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedPackage(null)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedPackage(null);
                    onOpenContact();
                  }}
                  className="px-5 py-2 rounded-xl text-xs font-bold text-white bg-teal-600 hover:bg-teal-700 shadow-xs transition-colors cursor-pointer"
                >
                  Inquire For This Package
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
