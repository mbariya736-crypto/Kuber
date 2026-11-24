import { Film, Bot, ShieldCheck } from 'lucide-react';

export const portfolioProjects = [
  {
    id: 'digital-jaal-film',
    slug: 'digital-jaal-film',
    category: 'ai-films',
    categoryLabel: 'Public Awareness Film',
    title: 'DIGITAL JAAL',
    subtitle: 'Cyber Fraud Public Awareness Initiative',
    icon: Film,
    badgeColor: 'text-cyan-800 bg-cyan-50 border border-cyan-200/80',
    iconColor: 'text-cyan-600',
    image: '/images/digital-jaal.png',
    heroImage: '/images/digital-jaal.png',
    description: 'Public awareness initiative educating citizens on UPI deception, fake payment links, and rapid response via National Helpline 1930.',
    overview: 'An educational film produced to inform citizens and business owners about digital financial deception, fraudulent QR payments, and immediate protection steps.',
    challenge: 'As digital transactions expanded across businesses and consumers, cyber criminals increasingly deployed social engineering, remote-access apps, and deceptive payment links. Victims often lost valuable time during the first critical hour unaware of proper reporting channels.',
    solution: 'We conceptualized, wrote, and produced the "DIGITAL JAAL" awareness film. Using relatable everyday scenarios—such as urgent vendor payment requests and fake KYC alerts—the film clearly demonstrates scam mechanisms and guides citizens to freeze transactions through National Cyber Helpline 1930 and cybercrime.gov.in.',
    highlights: [
      'Storytelling based on real-world Indian cyber crime reporting patterns',
      'Guidance on reporting within the golden hour to freeze unauthorized transfers',
      'Demystification of deceptive UPI payment links and unsolicited APK installations',
      'Multi-format delivery for community screenings, social awareness, and regional outreach'
    ],
    gallery: [
      {
        src: '/images/digital-jaal.png',
        caption: 'Campaign title visual and awareness poster'
      },
      {
        src: '/assets/ai-film-studio-hero.webp',
        caption: 'Production camera framing and studio lighting setup'
      },
      {
        src: '/assets/Futuristic-studio-for-AI-driven-creations.webp',
        caption: 'Post-production editing and sound mixing suite'
      }
    ],
    impact: 'Serves as an accessible educational resource for workshops, local community groups, and business teams, translating legal and cyber concepts into practical protective steps.'
  },
  {
    id: 'lead-generation-campaign',
    slug: 'lead-generation-campaign',
    category: 'ai-services',
    categoryLabel: 'Business Automation',
    title: 'Customer Inquiry Routing',
    subtitle: 'Automated Lead Capture & Alerts',
    icon: Bot,
    badgeColor: 'text-[#0866E8] bg-blue-50 border border-blue-200/80',
    iconColor: 'text-[#0866E8]',
    image: '/assets/ai-services.webp',
    heroImage: '/assets/ai-services.webp',
    description: 'Automated pipeline capturing web inquiries, sending instant WhatsApp notifications, and syncing leads to tracking sheets.',
    overview: 'An automated customer intake setup that captures website inquiries, validates essential contact information, and routes real-time alerts to team members instantly.',
    challenge: 'Growing service businesses frequently miss prospective clients due to delayed responses. Form submissions landed in crowded email inboxes where they remained unassigned or scattered across separate spreadsheets.',
    solution: 'We structured a streamlined inquiry capture pipeline connecting website contact forms, WhatsApp notifications, and centralized management sheets. Each submission undergoes automated format validation and immediate dispatch to on-duty staff with direct one-click reply links.',
    highlights: [
      'Instant WhatsApp and email notifications sent to designated team members',
      'Automated synchronization into secure Google Sheets and database tables',
      'Spam filtering and basic input validation to keep inquiries organized',
      'Eliminated manual copy-pasting between marketing landing pages and records'
    ],
    gallery: [
      {
        src: '/assets/ai-services.webp',
        caption: 'Inquiry routing workflow & automated notification setup'
      }
    ],
    impact: 'Delivered immediate inquiry alerts directly to team devices and maintained organized, centralized records with zero missed customer inquiries.'
  },
  {
    id: 'cyber-security-operations',
    slug: 'cyber-security-operations',
    category: 'cyber-security',
    categoryLabel: 'Cyber Security',
    title: 'Digital Account Protection',
    subtitle: 'Access Audits & Security Hardening',
    icon: ShieldCheck,
    badgeColor: 'text-emerald-700 bg-emerald-50 border border-emerald-200/80',
    iconColor: 'text-emerald-600',
    image: '/assets/cybersecurity-2023-social_uvx3rt.png',
    heroImage: '/assets/cybersecurity-2023-social_uvx3rt.png',
    description: 'Practical security review, multi-factor authentication setup, and staff phishing awareness protecting business accounts.',
    overview: 'A practical security hardening and account review program designed to protect small and mid-sized businesses from credential theft and vendor impersonation.',
    challenge: 'Shared email accounts, lack of multi-factor authentication, and untrained employees make small businesses prime targets for invoice fraud and email account compromise.',
    solution: 'We conducted thorough access audits of company email accounts, banking portals, and cloud storage. We introduced standardized multi-factor authentication, established role-based permissions, and held interactive employee workshops training staff on identifying malicious attachments and deceptive wire requests.',
    highlights: [
      'Security review of business email suites, domain settings, and administrative accounts',
      'Implementation of app-based multi-factor authentication across critical tools',
      'Standardized dual-authorization protocol established for vendor payment modifications',
      'Practical phishing drills and employee training modules tailored to company routines'
    ],
    gallery: [
      {
        src: '/assets/cybersecurity-2023-social_uvx3rt.png',
        caption: 'Security architecture audit and threat guidance manual'
      }
    ],
    impact: 'Safeguarded company email accounts and banking portals, established verified wire payment procedures, and built employee vigilance against deceptive messages.'
  },
  {
    id: 'ai-creative-studio',
    slug: 'ai-creative-studio',
    category: 'ai-films',
    categoryLabel: 'Film Production',
    title: 'Commercial Brand Media',
    subtitle: 'Corporate Profiles & Narrative Video',
    icon: Film,
    badgeColor: 'text-cyan-800 bg-cyan-50 border border-cyan-200/80',
    iconColor: 'text-cyan-600',
    image: '/assets/ai-film-studio-hero.webp',
    heroImage: '/assets/ai-film-studio-hero.webp',
    description: 'Narrative video production and corporate brand profiles combining scriptwriting, multi-camera filming, and color mastering.',
    overview: 'Professional commercial video production combining narrative scriptwriting, cinematic filming, and high-fidelity sound design for brand campaigns and corporate profiles.',
    challenge: 'Corporate videos often suffer from dry, template-driven presentations that fail to engage viewers or clearly communicate genuine values in crowded digital markets.',
    solution: 'We partnered closely with the client team to craft an authentic human narrative. From detailed storyboard development and on-location filming to professional color correction and custom audio scoring, every scene was engineered to build credibility and viewer trust.',
    highlights: [
      'Script consultation, storyboarding, and pacing designed for business audiences',
      'High-resolution multi-camera cinematography with professional studio lighting and clean audio',
      'Editorial color grading, licensed audio soundscapes, and clear typographic motion graphics',
      'Multi-ratio exports formatted for websites, presentations, and social channels'
    ],
    gallery: [
      {
        src: '/assets/ai-film-studio-hero.webp',
        caption: 'Cinematography camera rig and production monitor'
      },
      {
        src: '/assets/Futuristic-studio-for-AI-driven-creations.webp',
        caption: 'Studio grading suite and post-production workspace'
      }
    ],
    impact: 'Delivered engaging brand media assets for client web platforms, executive presentations, and investor meetings, presenting company services with cinematic clarity.'
  }
];
