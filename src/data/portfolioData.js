import { Film, Bot, ShieldCheck } from 'lucide-react';

export const portfolioProjects = [
  {
    id: 'digital-jaal-film',
    slug: 'digital-jaal-film',
    category: 'ai-films',
    categoryLabel: 'Public Awareness Film',
    title: 'DIGITAL JAAL',
    subtitle: 'Official Cyber Fraud Awareness Initiative',
    icon: Film,
    badgeColor: 'text-cyan-800 bg-cyan-50 border border-cyan-200/80',
    iconColor: 'text-cyan-600',
    image: '/images/digital-jaal.png',
    heroImage: '/images/digital-jaal.png',
    description: 'Official cyber crime and financial fraud awareness film addressing digital scams, UPI deception, and immediate protective protocols.',
    overview: 'A public awareness film produced to educate citizens and business owners on emerging digital financial scams, deceptive QR payment schemes, and practical immediate response protocols.',
    challenge: 'As digital transactions expanded rapidly across micro-enterprises and everyday consumers, cyber criminals increasingly deployed social engineering, unauthorized remote-access apps, and deceptive payment links. Victims frequently lost crucial time during the first critical hour because they did not know where to turn or how to report unauthorized transactions immediately.',
    solution: 'We conceptualized, wrote, and produced the "DIGITAL JAAL" awareness film. Using relatable everyday scenarios—from urgent vendor payment requests to fake bank KYC alerts—the film clearly demonstrates the exact psychological traps used by scammers and delivers clear, actionable guidance on freezing transactions through the National Cyber Helpline 1930 and the cybercrime.gov.in portal.',
    highlights: [
      'Authentic storytelling based on real-world Indian cyber crime reporting patterns',
      'Step-by-step guidance on reporting within the golden hour to freeze fraudulent transfers',
      'Clear demystification of deceptive UPI payment links and unsolicited APK installations',
      'Optimized multi-format delivery for community screenings, social awareness, and regional outreach'
    ],
    gallery: [
      {
        src: '/images/digital-jaal.png',
        caption: 'Title screen and awareness initiative poster'
      },
      {
        src: '/assets/ai-film-studio-hero.webp',
        caption: 'Production camera framing and cinematic lighting setup'
      },
      {
        src: '/assets/Futuristic-studio-for-AI-driven-creations.webp',
        caption: 'Post-production editing and sound mixing suite'
      }
    ],
    impact: 'The film serves as an accessible educational resource for workshops, local community groups, and business teams. It simplifies legal and technical jargon into straightforward steps that anyone can follow to protect their bank accounts and hard-earned savings.'
  },
  {
    id: 'lead-generation-campaign',
    slug: 'lead-generation-campaign',
    category: 'ai-services',
    categoryLabel: 'Business Automation',
    title: 'Customer Inquiry Routing',
    subtitle: 'Inquiry Management & Instant Notification System',
    icon: Bot,
    badgeColor: 'text-[#0866E8] bg-blue-50 border border-blue-200/80',
    iconColor: 'text-[#0866E8]',
    image: '/images/ai-lead-engine.png',
    heroImage: '/images/ai-lead-engine.png',
    description: 'Automated inquiry capture and routing system delivering instant WhatsApp notifications and synchronized lead tracking for service businesses.',
    overview: 'An automated customer intake setup that captures website inquiries, validates essential contact information, and routes real-time alerts to the right team members instantly.',
    challenge: 'Growing service businesses frequently lose prospective clients due to delayed responses. Form submissions were landing in crowded email inboxes where they remained unassigned for hours or lost across separate spreadsheets, causing response times to lag past 24 hours.',
    solution: 'We architected a streamlined inquiry capture pipeline connecting website contact forms, WhatsApp notifications, and centralized management sheets. Each submission undergoes automated format validation, deduplication, and immediate routing to the on-duty staff member with direct one-click WhatsApp reply links.',
    highlights: [
      'Instant WhatsApp & email notifications sent to designated team members within 3 seconds',
      'Automated synchronization into secure Google Sheets / database tables for transparent tracking',
      'Spam filtering and basic input validation to keep inquiries organized and actionable',
      'Zero manual copy-pasting required between marketing landing pages and administrative records'
    ],
    gallery: [
      {
        src: '/images/ai-lead-engine.png',
        caption: 'Automated inquiry capture pipeline architecture'
      },
      {
        src: '/assets/ai-services.webp',
        caption: 'Centralized workflow management and sync overview'
      }
    ],
    impact: 'Average customer first-response time dropped from over 18 hours to under 15 minutes. Teams reported zero missed leads and eliminated 6+ hours of weekly manual data entry across inboxes and spreadsheets.'
  },
  {
    id: 'cyber-security-operations',
    slug: 'cyber-security-operations',
    category: 'cyber-security',
    categoryLabel: 'Cyber Security',
    title: 'Digital Account Protection',
    subtitle: 'Access Audits, MFA Enforcement & Staff Safety Defenses',
    icon: ShieldCheck,
    badgeColor: 'text-emerald-700 bg-emerald-50 border border-emerald-200/80',
    iconColor: 'text-emerald-600',
    image: '/images/cyber-security.png',
    heroImage: '/images/cyber-security.png',
    description: 'Practical cybersecurity audit, multi-factor authentication enforcement, and staff awareness training protecting business accounts and client data.',
    overview: 'A practical security hardening and account review program designed to protect small and mid-sized businesses from credential theft, ransomware, and vendor impersonation.',
    challenge: 'Many small businesses operate under the misconception that cyber criminals only target large corporations. In reality, shared email accounts, lack of multi-factor authentication, and untrained employees make small businesses prime targets for invoice fraud and email account compromise.',
    solution: 'We conducted thorough access audits of company email accounts, banking portals, and cloud storage. We introduced standardized multi-factor authentication, established role-based permissions, and held interactive employee workshops training staff on identifying malicious attachments and deceptive wire requests.',
    highlights: [
      'Comprehensive security review of business email suites, domain settings, and administrative accounts',
      'Implementation of hardware/app-based multi-factor authentication across all critical tools',
      'Standardized dual-authorization protocol established for external vendor payment modifications',
      'Practical phishing drills and employee training modules tailored to daily company routines'
    ],
    gallery: [
      {
        src: '/images/cyber-security.png',
        caption: 'Security architecture audit and access control map'
      },
      {
        src: '/assets/cybersecurity-2023-social_uvx3rt.png',
        caption: 'Staff phishing identification and threat guidance manual'
      }
    ],
    impact: 'Eliminated unauthorized account access attempts, safeguarded company banking credentials, and built lasting employee confidence when handling unfamiliar emails and wire instructions.'
  },
  {
    id: 'ai-services-platform',
    slug: 'ai-services-platform',
    category: 'ai-services',
    categoryLabel: 'Business Automation',
    title: 'Routine Workflow Automation',
    subtitle: 'Cross-Tool Integration & Automated Reporting Pipelines',
    icon: Bot,
    badgeColor: 'text-[#0866E8] bg-blue-50 border border-blue-200/80',
    iconColor: 'text-[#0866E8]',
    image: '/images/ai-services.png',
    heroImage: '/images/ai-services.png',
    description: 'End-to-end operational pipeline connecting order tracking, database records, and automated weekly summary digests for leadership.',
    overview: 'End-to-end integration linking client records, order tracking, and scheduled operational summaries into a self-managing digital pipeline.',
    challenge: 'Operations teams spent significant portions of each day manually transferring order numbers, delivery dates, and client requests between separate accounting software, customer sheets, and internal communication channels.',
    solution: 'We mapped the entire operational lifecycle and established webhook-driven automated pipelines. New orders, status changes, and client notes now synchronize automatically across all departments, complete with scheduled weekly summary digests delivered directly to leadership.',
    highlights: [
      'Direct webhooks and API connectors linking web forms, databases, and reporting sheets',
      'Automated customer order confirmation dispatch via email and messaging channels',
      'Scheduled weekly operations summaries automatically generated for management review',
      'Error handling and fallback logging to ensure zero data records are lost during network glitches'
    ],
    gallery: [
      {
        src: '/images/ai-services.png',
        caption: 'Workflow logic mapping and automation triggers'
      },
      {
        src: '/assets/ai-services.webp',
        caption: 'System integration interface and reporting logs'
      }
    ],
    impact: 'Saved over 25 staff hours per week previously wasted on manual data re-entry, while ensuring company leadership receives transparent, real-time summaries of daily business operations.'
  },
  {
    id: 'ai-creative-studio',
    slug: 'ai-creative-studio',
    category: 'ai-films',
    categoryLabel: 'Film Production',
    title: 'Commercial Brand Media',
    subtitle: 'Narrative Corporate Profiles & Product Storytelling',
    icon: Film,
    badgeColor: 'text-cyan-800 bg-cyan-50 border border-cyan-200/80',
    iconColor: 'text-cyan-600',
    image: '/assets/Futuristic-studio-for-AI-driven-creations.webp',
    heroImage: '/assets/Futuristic-studio-for-AI-driven-creations.webp',
    description: 'Cinematic corporate profile and commercial narrative production engineered to build viewer trust and highlight unique brand values.',
    overview: 'Professional commercial video production combining narrative scriptwriting, cinematic filming, and high-fidelity sound design for brand campaigns and corporate profiles.',
    challenge: 'Corporate videos often suffer from dry, template-driven presentations that fail to engage viewers or clearly communicate the company’s genuine values and service differentiators in crowded digital markets.',
    solution: 'We partnered closely with the client team to craft an authentic human narrative. From detailed storyboard development and on-location filming to professional color correction and custom audio scoring, every scene was engineered to build emotional connection and viewer trust.',
    highlights: [
      'In-depth script consultation, storyboarding, and pacing designed for business audiences',
      'High-resolution multi-camera cinematography with professional studio lighting and clean audio',
      'Editorial color grading, licensed audio soundscapes, and clear typographic motion graphics',
      'Optimized multi-ratio exports formatted for websites, investor presentations, and social channels'
    ],
    gallery: [
      {
        src: '/assets/Futuristic-studio-for-AI-driven-creations.webp',
        caption: 'Studio grading suite and post-production workspace'
      },
      {
        src: '/assets/ai-film-studio-hero.webp',
        caption: 'Cinematography camera rig and production monitor'
      }
    ],
    impact: 'Delivered an engaging brand media asset that increased visitor engagement on client web platforms and gave leadership a compelling, professional presentation piece for client meetings.'
  }
];
