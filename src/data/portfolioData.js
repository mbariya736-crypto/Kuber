import { Film } from 'lucide-react';

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
    description: 'Public awareness film educating citizens and small business owners on UPI fraud, deceptive payment links, and rapid response through National Cyber Helpline 1930.',
    overview: 'An educational public awareness film produced to inform citizens and business owners about digital financial fraud, fraudulent QR payments, and practical immediate response protocols.',
    challenge: 'As digital transactions expanded across communities and businesses, deceptive payment links, fake KYC messages, and unsolicited APK downloads surged. Many citizens lost critical time during the golden hour simply because they did not know the immediate reporting process.',
    solution: 'We produced the "DIGITAL JAAL" awareness initiative using relatable everyday scenarios. The narrative clearly illustrates how social engineering attacks operate and guides viewers to take immediate preventive action and report incidents to the National Cyber Crime Helpline (1930) and cybercrime.gov.in.',
    highlights: [
      'Narrative based on real-world Indian cyber fraud reporting patterns',
      'Step-by-step guidance on reporting during the golden hour to freeze transactions',
      'Clear education on UPI collect requests, deceptive QR codes, and malicious apps',
      'Designed for community screenings, social media distribution, and civic workshops'
    ],
    gallery: [
      {
        src: '/images/digital-jaal.png',
        caption: 'Campaign title visual and official awareness poster'
      },
      {
        src: '/assets/Futuristic-studio-for-AI-driven-creations.webp',
        caption: 'Studio editing, sound design, and color grading suite'
      }
    ],
    impact: 'Serves as an accessible public education resource for civic groups, schools, and business teams, translating cybersecurity and legal reporting protocols into actionable steps.'
  }
];
