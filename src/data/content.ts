import type {
  Division,
  Course,
  WorkspacePlan,
  BusinessService,
  TestingService,
  TeamMember,
  Testimonial,
  FaqItem,
} from '../types';

export const SITE = {
  name: 'SkyTrack ICT',
  legalName: 'Skytrack ICT Solutions',
  tagline: 'Testing, Training & Technology Solutions — Verified, Trackable, Trusted',
  phone: '+234 814 182 3724',
  whatsapp: '+2348141823724',
  email: 'info@skytrackict.com.ng',
  address: 'Skytrack ICT Hub, Abeokuta, Ogun State, Nigeria',
  hours: 'Mon - Sat, 8:00am - 6:00pm',
  social: {
    twitter: 'https://twitter.com/skytrackict',
    instagram: 'https://instagram.com/skytrackict',
    linkedin: 'https://linkedin.com/company/skytrackict',
    facebook: 'https://facebook.com/skytrackict',
  },
};

export const DIVISIONS: Division[] = [
  {
    slug: 'testing-centre',
    name: 'Testing & Certification Centre',
    tagline: 'Secure, AI-assisted computer-based testing',
    description:
      'Accredited CBT centre delivering international certification exams — IELTS, PTE, CELPIP, SAT, TOEFL, GRE and GMAT — plus school entrance exams, promotional exams and corporate skills assessments, all under monitored, tamper-proof conditions.',
    icon: 'radar',
    path: '/testing-centre',
    highlights: [
      'International exam delivery (IELTS, PTE, CELPIP, SAT, TOEFL, GRE, GMAT)',
      'School entrance & promotional exam hosting',
      'Corporate skills assessments',
      'Biometric check-in & live invigilation',
    ],
  },
  {
    slug: 'training',
    name: 'Training & ICT Academy',
    tagline: 'Exam prep and digital skills that convert into results',
    description:
      'Instructor-led classes covering international exam preparation and practical ICT skills — from computer appreciation to data analysis, digital marketing and UI/UX — designed around real test formats and real job requirements.',
    icon: 'graduation',
    path: '/training',
    highlights: [
      'IELTS, PTE, CELPIP, SAT, TOEFL, GRE, GMAT prep classes',
      'Computer appreciation & digital literacy',
      'Data Analysis with Excel & Power BI',
      'Digital Marketing and UI/UX foundations',
    ],
  },
  {
    slug: 'software',
    name: 'Software & Product Engineering',
    tagline: 'Custom-built systems for growing organisations',
    description:
      'We design, build and maintain web platforms, mobile apps and internal business systems — from student portals and CBT engines to booking and payment tools — engineered for reliability at scale.',
    icon: 'code',
    path: '/software',
    highlights: [
      'Custom web & mobile applications',
      'CBT and assessment platforms',
      'Systems integration & API work',
      'Ongoing maintenance & support',
    ],
  },
  {
    slug: 'workspace',
    name: 'Coworking, Offices & Conference Rooms',
    tagline: 'Flexible space for focused work and events',
    description:
      'Hot desks, private offices and fully equipped conference and training halls — booked by the day, week or month, with reliable power and internet included.',
    icon: 'building',
    path: '/workspace',
    highlights: [
      'Daily, weekly & monthly coworking desks',
      'Private offices for teams of 1–6',
      'Conference & training hall rentals',
      'Reliable power, internet & admin support',
    ],
  },
  {
    slug: 'business-solutions',
    name: 'Business Solutions',
    tagline: 'From registration to a launch-ready brand',
    description:
      'CAC business name and company registration, logo and branding, website design, business plans and ongoing digital marketing management — for founders who need to move fast.',
    icon: 'briefcase',
    path: '/business-solutions',
    highlights: [
      'CAC business name & LLC registration',
      'Logo & branding packages',
      'Website design',
      'Business plans & digital marketing management',
    ],
  },
];

export const SPECIALIST_SERVICES: Division[] = [
  {
    slug: 'background-checks',
    name: 'Background Checks',
    tagline: 'Verify with confidence',
    description:
      'Comprehensive background checks for employers and institutions — academic verification (including international credentials), NYSC validation, employment history, address verification and guarantor checks.',
    icon: 'shield-check',
    path: '/background-checks',
    highlights: [
      'Academic & international credential checks',
      'NYSC certificate validation',
      'Employment history verification',
      'Address & guarantor verification',
    ],
  },
  {
    slug: 'recruitment',
    name: 'Recruitment Services',
    tagline: 'Right talent, right role',
    description:
      'End-to-end recruitment support for businesses — role scoping, candidate sourcing, screening, testing and shortlisting, backed by our own testing centre and background-check pipeline.',
    icon: 'users',
    path: '/recruitment',
    highlights: [
      'Candidate sourcing & screening',
      'Skills-based assessment via our CBT centre',
      'Reference & background verification',
      'Shortlisting & onboarding support',
    ],
  },
  {
    slug: 'scholarships',
    name: 'Scholarships',
    tagline: 'Opening doors for deserving students',
    description:
      'We identify, prepare and support promising students for local and international scholarship opportunities, from application guidance to exam preparation for qualifying tests.',
    icon: 'award',
    path: '/scholarships',
    highlights: [
      'Scholarship discovery & matching',
      'Application & essay guidance',
      'Qualifying exam preparation',
      'Mentorship through the process',
    ],
  },
];

export const COURSES: Course[] = [
  {
    id: 'ielts',
    category: 'exam-prep',
    name: 'IELTS Preparation',
    summary: 'Full coverage of Listening, Reading, Writing and Speaking with timed mock tests.',
    duration: '4–8 weeks',
    priceMin: 25000,
    priceMax: 60000,
    format: 'In-person or online, weekday & weekend cohorts',
    outcomes: ['Band-score focused strategy', 'Weekly mock exams', 'One-on-one speaking practice'],
    featured: true,
  },
  {
    id: 'pte',
    category: 'exam-prep',
    name: 'PTE Academic',
    summary: 'Computer-delivered test strategy with AI-scored practice sessions.',
    duration: '3–6 weeks',
    priceMin: 25000,
    priceMax: 50000,
    format: 'In-person or online',
    outcomes: ['Item-by-item scoring breakdown', 'Template-based writing drills', 'Full-length simulations'],
  },
  {
    id: 'celpip',
    category: 'exam-prep',
    name: 'CELPIP Preparation',
    summary: 'Canada-focused English proficiency training for immigration and work.',
    duration: '3–6 weeks',
    priceMin: 25000,
    priceMax: 50000,
    format: 'In-person or online',
    outcomes: ['CLB-aligned scoring guidance', 'Listening & reading strategy', 'Speaking booth practice'],
  },
  {
    id: 'toefl',
    category: 'exam-prep',
    name: 'TOEFL iBT',
    summary: 'Academic English preparation for university admission requirements.',
    duration: '4–6 weeks',
    priceMin: 30000,
    priceMax: 50000,
    format: 'In-person or online',
    outcomes: ['Integrated skills practice', 'Timed section drills', 'Score-report review'],
  },
  {
    id: 'gre',
    category: 'exam-prep',
    name: 'GRE Preparation',
    summary: 'Quantitative reasoning, verbal reasoning and analytical writing for grad school.',
    duration: '6–10 weeks',
    priceMin: 50000,
    priceMax: 120000,
    format: 'In-person or online, small group',
    outcomes: ['Adaptive-test strategy', 'Formula & vocabulary drills', 'Full diagnostic tests'],
  },
  {
    id: 'sat',
    category: 'exam-prep',
    name: 'SAT Preparation',
    summary: 'College admissions test prep for Math and Evidence-Based Reading & Writing.',
    duration: '6–10 weeks',
    priceMin: 50000,
    priceMax: 100000,
    format: 'In-person or online',
    outcomes: ['Section-by-section pacing plans', 'Practice test analytics', 'College application timing guidance'],
  },
  {
    id: 'gmat',
    category: 'exam-prep',
    name: 'GMAT Preparation',
    summary: 'Business school admissions test covering quant, verbal and data insights.',
    duration: '6–10 weeks',
    priceMin: 70000,
    priceMax: 150000,
    format: 'In-person or online, small group',
    outcomes: ['Data sufficiency mastery', 'Integrated reasoning practice', 'Full-length CATs'],
  },
  {
    id: 'computer-appreciation',
    category: 'ict-skills',
    name: 'Computer Appreciation',
    summary: 'Foundational digital literacy — OS, Office suite, internet and email essentials.',
    duration: '2–4 weeks',
    priceMin: 20000,
    priceMax: 30000,
    format: 'In-person, hands-on lab sessions',
    outcomes: ['Confident use of Windows & Office', 'Safe internet & email practice', 'Certificate of completion'],
  },
  {
    id: 'data-analysis',
    category: 'ict-skills',
    name: 'Data Analysis (Excel & Power BI)',
    summary: 'Practical data cleaning, analysis and dashboarding for real business problems.',
    duration: '4–6 weeks',
    priceMin: 50000,
    priceMax: 80000,
    format: 'In-person or online',
    outcomes: ['Advanced Excel formulas & pivot tables', 'Power BI dashboard building', 'Capstone analysis project'],
    featured: true,
  },
  {
    id: 'digital-marketing',
    category: 'ict-skills',
    name: 'Digital Marketing',
    summary: 'Social media, SEO, paid ads and content strategy for brands and businesses.',
    duration: '4–6 weeks',
    priceMin: 35000,
    priceMax: 70000,
    format: 'In-person or online',
    outcomes: ['Campaign planning & analytics', 'Meta & Google Ads basics', 'Content calendar workflow'],
  },
  {
    id: 'ui-ux',
    category: 'ict-skills',
    name: 'UI/UX Design (Introductory)',
    summary: 'Design thinking, wireframing and prototyping fundamentals using modern tools.',
    duration: '5–8 weeks',
    priceMin: 40000,
    priceMax: 100000,
    format: 'In-person or online',
    outcomes: ['User research & wireframes', 'Prototyping in Figma', 'Portfolio-ready case study'],
    featured: true,
  },
];

export const WORKSPACE_PLANS: WorkspacePlan[] = [
  { id: 'ws-daily', group: 'coworking', name: 'Daily Co-Working Desk', price: '₦2,000', period: 'per day' },
  { id: 'ws-weekly', group: 'coworking', name: 'Weekly Co-Working Desk', price: '₦7,500', period: 'per week' },
  { id: 'ws-monthly', group: 'coworking', name: 'Monthly Co-Working Desk', price: '₦25,000', period: 'per month' },
  { id: 'ws-weekend', group: 'coworking', name: 'Weekend Study Access', price: '₦1,500', period: 'per day (Saturdays)' },
  { id: 'po-small', group: 'private-office', name: 'Small Private Office', capacity: '1–2 people', price: '₦60,000 – ₦80,000', period: 'monthly' },
  { id: 'po-medium', group: 'private-office', name: 'Medium Private Office', capacity: '3–4 people', price: '₦100,000 – ₦150,000', period: 'monthly' },
  { id: 'po-large', group: 'private-office', name: 'Large Private Office', capacity: '5–6 people', price: '₦180,000 – ₦250,000', period: 'monthly' },
  { id: 'po-daily', group: 'private-office', name: 'Daily Private Office Use', price: '₦10,000', period: 'per day', note: 'subject to availability' },
  { id: 'cf-small', group: 'conference', name: 'Small Meeting Room', capacity: '6–8 people', price: '₦5,000/hr', period: '₦18,000 half-day • ₦30,000 full day' },
  { id: 'cf-medium', group: 'conference', name: 'Medium Conference Room', capacity: '10–20 people', price: '₦10,000/hr', period: '₦35,000 half-day • ₦60,000 full day' },
  { id: 'cf-hall', group: 'conference', name: 'Training Hall', capacity: '30–60 people', price: '₦25,000/hr', period: '₦70,000 half-day • ₦120,000 full day' },
];

export const BUSINESS_SERVICES: BusinessService[] = [
  {
    id: 'biz-name',
    name: 'Business Name Registration (CAC)',
    summary: 'Full registration of your business name with the Corporate Affairs Commission.',
    priceMin: 35000,
    priceMax: 45000,
    deliverables: ['Name availability check', 'CAC filing', 'Registration certificate'],
  },
  {
    id: 'llc',
    name: 'Limited Liability Company Registration',
    summary: 'Incorporate a private limited company with full statutory documentation.',
    priceMin: 90000,
    priceMax: 150000,
    deliverables: ['Memorandum & Articles', 'CAC incorporation', 'TIN registration support'],
  },
  {
    id: 'branding',
    name: 'Logo & Branding Package',
    summary: 'A cohesive visual identity — logo, colours, typography and brand guide.',
    priceMin: 20000,
    priceMax: 60000,
    deliverables: ['Logo design (3 concepts)', 'Brand colour & type system', 'Brand guideline document'],
  },
  {
    id: 'website',
    name: 'Website Design',
    summary: 'A responsive, professional website tailored to your business type.',
    priceMin: 80000,
    priceMax: 350000,
    period: 'depending on scope',
    deliverables: ['Custom design & build', 'Mobile-optimised layout', 'Basic SEO setup'],
  },
  {
    id: 'biz-plan',
    name: 'Business Plan / Proposal Writing',
    summary: 'Investor-ready business plans and funding proposals.',
    priceMin: 30000,
    priceMax: 150000,
    deliverables: ['Market & financial analysis', 'Executive summary', 'Pitch-ready formatting'],
  },
  {
    id: 'dm-management',
    name: 'Digital Marketing Management',
    summary: 'Ongoing management of your social media and ad campaigns.',
    priceMin: 40000,
    priceMax: 120000,
    period: 'monthly',
    deliverables: ['Content calendar & posting', 'Ad campaign management', 'Monthly performance report'],
  },
];

export const TESTING_SERVICES: TestingService[] = [
  {
    id: 'facility-rental',
    name: 'Facility Rental (Exam Sessions)',
    summary: 'Rent our CBT centre for your own exam sessions, with full technical support.',
    priceMin: 50000,
    priceMax: 150000,
    period: 'per session, depending on exam type & duration',
  },
  {
    id: 'full-day-event',
    name: 'Full-Day Testing Event',
    summary: 'Complete facility hire including power, internet, security and candidate coordination.',
    priceMin: 120000,
    priceMax: 250000,
    period: 'per day',
  },
];

export const TEAM: TeamMember[] = [
  {
    id: 'md',
    name: 'Management Team',
    role: 'Founding & Executive Leadership',
    bio: 'SkyTrack ICT is led by a team with backgrounds in testing administration, software engineering and business development, focused on building verified, dependable systems for education and business in Nigeria.',
    initials: 'ST',
  },
  {
    id: 'testing-lead',
    name: 'Testing Centre Lead',
    role: 'Head of Testing & Certification',
    bio: 'Oversees exam delivery integrity, invigilation standards and partnerships with international certification bodies.',
    initials: 'TC',
  },
  {
    id: 'academy-lead',
    name: 'Academy Lead',
    role: 'Head of Training & ICT Academy',
    bio: 'Designs and coordinates our exam-prep and digital skills curricula, and manages our pool of instructors.',
    initials: 'AC',
  },
  {
    id: 'eng-lead',
    name: 'Engineering Lead',
    role: 'Head of Software & Product Engineering',
    bio: 'Leads the team building and maintaining SkyTrack ICT\u2019s internal platforms and client software projects.',
    initials: 'EN',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote:
      'The mock exams felt exactly like the real IELTS test. I walked in on test day already comfortable with the format and timing.',
    name: 'Adaeze O.',
    role: 'IELTS candidate',
  },
  {
    id: 't2',
    quote:
      'We hired SkyTrack to run background checks for twelve new staff. The turnaround was fast and every report was detailed and clear.',
    name: 'HR Manager',
    role: 'Logistics company, Lagos',
  },
  {
    id: 't3',
    quote:
      'I registered my business, got a logo and a working website within three weeks, all handled by one team. That saved me months.',
    name: 'Tunde A.',
    role: 'Founder, retail startup',
  },
  {
    id: 't4',
    quote:
      'The coworking space is quiet, the internet is reliable, and booking a desk for the day takes less than a minute online.',
    name: 'Bisi F.',
    role: 'Freelance consultant',
  },
];

export const FAQS: FaqItem[] = [
  {
    question: 'How do I enrol in a training programme or book an exam slot?',
    answer:
      'Choose a programme or service on the Training or Testing Centre page, click "Enrol / Book Now", fill in your details and complete payment securely with Paystack. You will receive a confirmation email with next steps.',
  },
  {
    question: 'Can I pay in instalments?',
    answer:
      'For select training programmes and workspace plans, instalment options may be available. Contact us before booking to discuss a payment plan.',
  },
  {
    question: 'Is my payment secure?',
    answer:
      'Yes. All payments are processed directly by Paystack, a PCI-DSS Level 1 certified payment processor. SkyTrack ICT never sees or stores your card details.',
  },
  {
    question: 'Do you offer refunds?',
    answer:
      'Refunds are considered on a case-by-case basis in line with our refund policy, generally within 48 hours of booking and before the service has been rendered. Contact support@skytrackict.com.ng to request one.',
  },
  {
    question: 'Can international candidates book the testing centre?',
    answer:
      'Yes. Our centre serves candidates from anywhere, provided a valid identification document is presented on the day of the exam or assessment.',
  },
];
