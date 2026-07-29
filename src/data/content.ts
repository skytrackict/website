import type {
  Division,
  Course,
  CoursePackage,
  WorkspacePlan,
  BusinessService,
  FacilityBenefit,
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
  hours: 'Mon – Sat, 8:00am – 6:00pm',
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

function examPackages(min: number, max: number): import('../types').CoursePackage[] {
  const mid = Math.round((min + max) / 2 / 500) * 500;
  return [
    {
      id: 'group',
      name: 'Group Class',
      price: min,
      bestFor: 'Self-motivated learners who do well in a classroom setting',
      features: [
        'Weekday or weekend cohort (6–10 students)',
        'Full syllabus coverage',
        '2 timed mock exams with review',
        'Shared class materials & recordings',
      ],
    },
    {
      id: 'small-group',
      name: 'Small Group + Extra Mocks',
      price: mid,
      bestFor: 'Students who want more practice tests and closer feedback',
      features: [
        'Small group (max 4 students)',
        'Full syllabus coverage',
        '5 timed mock exams with score review',
        'Weekly progress check-ins with an instructor',
      ],
      recommended: true,
    },
    {
      id: 'one-on-one',
      name: 'One-on-One Intensive',
      price: max,
      bestFor: 'Students on a tight timeline who want focused, private coaching',
      features: [
        '1-on-1 sessions with a dedicated instructor',
        'Personalised study plan around your weak areas',
        'Unlimited mock exams during the course',
        'Flexible scheduling, including evenings',
      ],
    },
  ];
}

function ictPackages(min: number, max: number): import('../types').CoursePackage[] {
  const mid = Math.round((min + max) / 2 / 500) * 500;
  return [
    {
      id: 'weekday',
      name: 'Weekday Cohort',
      price: min,
      bestFor: 'Students and job seekers who can attend structured weekday classes',
      features: [
        'Weekday evening classes',
        'Hands-on lab sessions on real datasets/tools',
        'Class materials, templates & resources',
        'Certificate of completion',
      ],
    },
    {
      id: 'weekend',
      name: 'Weekend Cohort',
      price: mid,
      bestFor: 'Working professionals who can only attend on weekends',
      features: [
        'Saturday classes',
        'Hands-on lab sessions on real datasets/tools',
        'Class materials, templates & resources',
        'Certificate of completion',
      ],
      recommended: true,
    },
    {
      id: 'private',
      name: 'Private / Corporate Training',
      price: max,
      bestFor: 'Teams or individuals who want a schedule and pace built around them',
      features: [
        '1-on-1 or dedicated team sessions',
        'Curriculum tailored to your goals or industry',
        'Flexible scheduling',
        'Certificate of completion',
      ],
    },
  ];
}

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
    longDescription:
      'Our IELTS Preparation course builds your confidence and accuracy across all four test components — Listening, Reading, Writing and Speaking — with a focus on the specific band score you need for study, work or migration. You will practise with authentic-format questions, receive detailed feedback on Writing Task 1 & 2, and sit weekly timed mock exams that mirror real test-day conditions.',
    level: 'All levels',
    prerequisite: 'None — an initial assessment places you at the right starting point',
    tools: ['Official IELTS practice materials', 'Recorded listening exercises', 'Model answer bank'],
    schedule: 'Weekday evenings or Saturday mornings, 4–8 weeks depending on package',
    curriculum: [
      {
        title: 'Week 1: Test Format & Listening Strategy',
        topics: ['Overview of all four components and band descriptors', 'Note-taking & prediction techniques for Listening', 'Diagnostic mock test to identify weak areas'],
      },
      {
        title: 'Week 2: Reading Strategy',
        topics: ['Skimming, scanning & time management', 'True/False/Not Given and matching-headings techniques', 'Timed reading passages with review'],
      },
      {
        title: 'Week 3: Writing Task 1 & 2',
        topics: ['Structuring a Task 1 report (charts, graphs, processes)', 'Building a Task 2 argument essay', 'Common examiner feedback and how to fix it'],
      },
      {
        title: 'Week 4: Speaking & Full Mock Exams',
        topics: ['Part 1–3 speaking structure and fluency drills', 'Pronunciation & lexical resource coaching', 'Full-length timed mock exam with band-score feedback'],
      },
    ],
    whatYouLearn: [
      'Time-efficient strategies for each of the four components',
      'How examiners score Writing and Speaking, and how to hit higher bands',
      'Common traps in Reading and Listening question types',
      'How to structure a Task 2 essay under time pressure',
      'Confident, fluent speaking across all three speaking parts',
    ],
    included: [
      { icon: 'monitor', title: 'Mock Exam Access', body: 'Timed, full-length mock tests that mirror real IELTS conditions.' },
      { icon: 'users', title: 'Speaking Practice Partner', body: 'Structured one-on-one speaking sessions with feedback.' },
      { icon: 'award', title: 'Certificate of Completion', body: 'A certificate confirming you completed the programme.' },
      { icon: 'clock', title: 'Flexible Scheduling', body: 'Weekday and weekend cohorts to fit your routine.' },
    ],
    packages: examPackages(25000, 60000),
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
    longDescription:
      'PTE Academic is scored entirely by computer, which rewards a very specific, template-driven approach. This course walks you through each of the 20 question types, teaches scoring-aware templates for Speaking and Writing, and gives you access to full-length computer-delivered simulations so test day holds no surprises.',
    level: 'All levels',
    prerequisite: 'None — an initial assessment places you at the right starting point',
    tools: ['PTE-format practice software', 'Recorded speaking samples for review'],
    schedule: 'Weekday evenings or Saturday mornings, 3–6 weeks depending on package',
    curriculum: [
      { title: 'Week 1: Test Format & Speaking Templates', topics: ['Read Aloud, Repeat Sentence & Describe Image templates', 'Pronunciation and fluency scoring factors'] },
      { title: 'Week 2: Writing & Reading', topics: ['Summarise Written Text template', 'Essay structure for scoring criteria', 'Reading: Fill in the Blanks & Reorder Paragraphs'] },
      { title: 'Week 3: Listening & Full Simulations', topics: ['Summarise Spoken Text and dictation strategy', 'Full-length computer-delivered mock exams'] },
    ],
    whatYouLearn: [
      'Scoring-aware templates for every PTE question type',
      'How the AI scoring engine evaluates fluency and pronunciation',
      'Time management across a 2-hour computer-delivered test',
      'Common mistakes that cost points in each section',
    ],
    included: [
      { icon: 'monitor', title: 'Computer-Delivered Simulations', body: 'Practice on software that mirrors the real PTE interface.' },
      { icon: 'award', title: 'Certificate of Completion', body: 'A certificate confirming you completed the programme.' },
      { icon: 'clock', title: 'Flexible Scheduling', body: 'Weekday and weekend cohorts to fit your routine.' },
    ],
    packages: examPackages(25000, 50000),
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
    longDescription:
      'Built for candidates applying for Canadian immigration or professional licensing, this course maps every practice task to the Canadian Language Benchmark (CLB) scale so you know exactly what score you\u2019re working toward. You will practise Listening, Reading, Writing and Speaking in the CELPIP format, with dedicated speaking-booth simulations.',
    level: 'All levels',
    prerequisite: 'None — an initial assessment places you at the right starting point',
    tools: ['CELPIP-format practice materials', 'Speaking booth simulation recordings'],
    schedule: 'Weekday evenings or Saturday mornings, 3–6 weeks depending on package',
    curriculum: [
      { title: 'Week 1: CLB Scale & Listening Strategy', topics: ['Understanding CLB levels and what employers/IRCC expect', 'Listening task types and note-taking strategy'] },
      { title: 'Week 2: Reading & Writing', topics: ['Reading for information vs. viewpoints', 'Email and survey-response writing tasks'] },
      { title: 'Week 3: Speaking & Full Mocks', topics: ['Speaking-booth simulation and timing practice', 'Full-length mock exam with CLB-level feedback'] },
    ],
    whatYouLearn: [
      'How CELPIP scoring maps to the CLB scale',
      'Strategies specific to CELPIP\u2019s task types (distinct from IELTS/TOEFL)',
      'Confident, timed responses in a speaking-booth format',
      'Common writing-task structures that score well',
    ],
    included: [
      { icon: 'monitor', title: 'Speaking Booth Simulation', body: 'Practice recording responses under real exam timing.' },
      { icon: 'award', title: 'Certificate of Completion', body: 'A certificate confirming you completed the programme.' },
      { icon: 'clock', title: 'Flexible Scheduling', body: 'Weekday and weekend cohorts to fit your routine.' },
    ],
    packages: examPackages(25000, 50000),
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
    longDescription:
      'TOEFL iBT tests academic English through integrated tasks that combine reading, listening, speaking and writing. This course trains you to synthesise information quickly under time pressure, with practice drills for every section and full diagnostic score-report reviews so you know precisely where to improve.',
    level: 'All levels',
    prerequisite: 'None — an initial assessment places you at the right starting point',
    tools: ['TOEFL-format practice materials', 'Integrated-task templates'],
    schedule: 'Weekday evenings or Saturday mornings, 4–6 weeks depending on package',
    curriculum: [
      { title: 'Week 1: Reading & Listening', topics: ['Academic passage strategy', 'Lecture and conversation note-taking'] },
      { title: 'Week 2: Speaking (Integrated Tasks)', topics: ['Independent vs. integrated speaking tasks', 'Templates for summarising reading + listening content'] },
      { title: 'Week 3: Writing', topics: ['Integrated writing task structure', 'Academic discussion writing task'] },
      { title: 'Week 4: Full Mock Exams', topics: ['Full-length timed practice test', 'Score-report review and improvement plan'] },
    ],
    whatYouLearn: [
      'How to synthesise reading, listening and speaking under time pressure',
      'Templates for both independent and integrated writing tasks',
      'Common academic vocabulary and structures TOEFL rewards',
      'How to read and act on your official score report',
    ],
    included: [
      { icon: 'monitor', title: 'Integrated-Task Practice', body: 'Drills that combine reading, listening, speaking and writing.' },
      { icon: 'award', title: 'Certificate of Completion', body: 'A certificate confirming you completed the programme.' },
      { icon: 'clock', title: 'Flexible Scheduling', body: 'Weekday and weekend cohorts to fit your routine.' },
    ],
    packages: examPackages(30000, 50000),
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
    longDescription:
      'The GRE is section-adaptive, meaning your performance on the first section affects the difficulty (and scoring) of the second. This course teaches you the quant formulas and vocabulary you need, section-adaptive test strategy, and gives you full diagnostic tests so you walk in on test day with a clear target score in mind.',
    level: 'Intermediate',
    prerequisite: 'Comfortable with high-school level mathematics',
    tools: ['GRE-format practice software', 'Formula & vocabulary flashcard decks'],
    schedule: 'Weekday evenings or Saturday mornings, 6–10 weeks depending on package',
    curriculum: [
      { title: 'Weeks 1–2: Quant Foundations', topics: ['Arithmetic, algebra & geometry review', 'Data interpretation and quantitative comparison strategy'] },
      { title: 'Weeks 3–4: Verbal Reasoning', topics: ['Text completion & sentence equivalence strategy', 'High-yield vocabulary building', 'Reading comprehension strategy'] },
      { title: 'Weeks 5–6: Analytical Writing', topics: ['Issue task structure', 'Argument task structure and common flaws to identify'] },
      { title: 'Weeks 7+: Adaptive Strategy & Full Diagnostics', topics: ['How section-adaptive scoring works and how to use it', 'Full-length diagnostic exams with score review'] },
    ],
    whatYouLearn: [
      'Core quant formulas across arithmetic, algebra, geometry and data analysis',
      'High-yield GRE vocabulary and how to use it in context',
      'How the section-adaptive format affects your strategy',
      'How to structure both Analytical Writing tasks under time pressure',
    ],
    included: [
      { icon: 'monitor', title: 'Adaptive-Format Practice', body: 'Simulations that mirror the GRE\u2019s section-adaptive scoring.' },
      { icon: 'users', title: 'Small-Group Coaching', body: 'Focused attention in groups of 4 or fewer.' },
      { icon: 'award', title: 'Certificate of Completion', body: 'A certificate confirming you completed the programme.' },
    ],
    packages: examPackages(50000, 120000),
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
    longDescription:
      'Our SAT Preparation course covers Math and Evidence-Based Reading & Writing with a strong focus on pacing — the most common reason students underperform relative to their ability. You will sit full practice tests, review detailed analytics on where time and points were lost, and build a section-by-section pacing plan for test day.',
    level: 'All levels',
    prerequisite: 'None — an initial assessment places you at the right starting point',
    tools: ['Official-format SAT practice tests', 'Score analytics dashboard'],
    schedule: 'Weekday evenings or Saturday mornings, 6–10 weeks depending on package',
    curriculum: [
      { title: 'Weeks 1–3: Math', topics: ['Algebra, problem-solving & data analysis', 'Advanced math (functions, graphs)', 'Calculator vs. no-calculator strategy'] },
      { title: 'Weeks 4–6: Reading & Writing', topics: ['Evidence-based reading strategy', 'Grammar & rhetoric skills for the Writing section'] },
      { title: 'Weeks 7+: Full Practice Tests', topics: ['Full-length timed practice tests', 'Pacing plan built from your analytics'] },
    ],
    whatYouLearn: [
      'Core math concepts tested across all SAT question types',
      'Evidence-based reading strategy for time-pressured passages',
      'Grammar and rhetoric rules the Writing section rewards',
      'A personal, section-by-section pacing plan for test day',
    ],
    included: [
      { icon: 'monitor', title: 'Score Analytics', body: 'Detailed breakdowns of where time and points are lost.' },
      { icon: 'award', title: 'Certificate of Completion', body: 'A certificate confirming you completed the programme.' },
      { icon: 'clock', title: 'Flexible Scheduling', body: 'Weekday and weekend cohorts to fit your routine.' },
    ],
    packages: examPackages(50000, 100000),
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
    longDescription:
      'Designed for MBA and business-school applicants, this course covers Quantitative Reasoning (including the GMAT\u2019s distinctive Data Sufficiency questions), Verbal Reasoning, and Integrated Reasoning. You will sit full-length computer-adaptive tests (CATs) and receive a section-by-section breakdown to guide your final review.',
    level: 'Intermediate',
    prerequisite: 'Comfortable with high-school level mathematics',
    tools: ['GMAT-format CAT software', 'Data Sufficiency drill bank'],
    schedule: 'Weekday evenings or Saturday mornings, 6–10 weeks depending on package',
    curriculum: [
      { title: 'Weeks 1–2: Quantitative Reasoning', topics: ['Problem Solving strategy', 'Data Sufficiency logic and shortcuts'] },
      { title: 'Weeks 3–4: Verbal Reasoning', topics: ['Critical Reasoning argument structures', 'Sentence Correction grammar rules', 'Reading Comprehension strategy'] },
      { title: 'Weeks 5–6: Integrated Reasoning', topics: ['Multi-source reasoning and graphics interpretation', 'Two-part analysis and table analysis'] },
      { title: 'Weeks 7+: Full CATs', topics: ['Full-length computer-adaptive practice tests', 'Score breakdown and final review plan'] },
    ],
    whatYouLearn: [
      'Data Sufficiency logic — the GMAT\u2019s most distinctive question type',
      'How the computer-adaptive format affects section strategy',
      'Critical Reasoning and Sentence Correction rules for Verbal',
      'How to interpret Integrated Reasoning data quickly and accurately',
    ],
    included: [
      { icon: 'monitor', title: 'Computer-Adaptive Practice', body: 'Full-length CATs that mirror the real GMAT scoring engine.' },
      { icon: 'users', title: 'Small-Group Coaching', body: 'Focused attention in groups of 4 or fewer.' },
      { icon: 'award', title: 'Certificate of Completion', body: 'A certificate confirming you completed the programme.' },
    ],
    packages: examPackages(70000, 150000),
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
    longDescription:
      'A hands-on introduction to using a computer confidently for work, study or everyday life. You will learn to navigate Windows, use Microsoft Word, Excel and PowerPoint for everyday tasks, browse the internet safely, and manage email — all through practical lab exercises rather than theory alone.',
    level: 'Beginner',
    prerequisite: 'None — no prior computer experience required',
    tools: ['Microsoft Windows', 'Microsoft Word, Excel & PowerPoint', 'Email & web browsers'],
    schedule: 'Weekday or weekend classes, 2–4 weeks depending on package',
    curriculum: [
      { title: 'Week 1: Getting Comfortable with a Computer', topics: ['Navigating Windows, files & folders', 'Typing skills and keyboard shortcuts'] },
      { title: 'Week 2: Microsoft Office Essentials', topics: ['Word: documents, formatting & printing', 'Excel: basic spreadsheets and formulas', 'PowerPoint: building a simple presentation'] },
      { title: 'Week 3–4: Internet & Email', topics: ['Safe browsing and spotting scams', 'Setting up and managing email', 'Basic online safety and password hygiene'] },
    ],
    whatYouLearn: [
      'Confident navigation of Windows and common file operations',
      'Everyday use of Word, Excel and PowerPoint',
      'Safe, confident internet browsing and email use',
      'Basic digital safety habits',
    ],
    included: [
      { icon: 'monitor', title: 'Hands-On Lab Sessions', body: 'Practice on real computers, not just slides.' },
      { icon: 'award', title: 'Certificate of Completion', body: 'A certificate confirming you completed the programme.' },
    ],
    packages: ictPackages(20000, 30000),
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
    longDescription:
      'Learn to turn raw spreadsheets into decisions. This course takes you from everyday Excel formulas through pivot tables, data cleaning and advanced functions, then into Power BI for building interactive dashboards. You will finish with a capstone project analysing a realistic business dataset end to end.',
    level: 'Beginner',
    prerequisite: 'Basic computer literacy (typing, using a mouse, opening files)',
    tools: ['Microsoft Excel', 'Power BI', 'Sample business datasets'],
    schedule: 'Weekday evenings or Saturday mornings, 4–6 weeks depending on package',
    curriculum: [
      { title: 'Week 1: Excel Foundations', topics: ['Data cleaning & formatting', 'Core formulas (VLOOKUP/XLOOKUP, IF, SUMIFS)'] },
      { title: 'Week 2: Pivot Tables & Advanced Excel', topics: ['Building pivot tables & pivot charts', 'Advanced formulas and conditional logic'] },
      { title: 'Week 3: Introduction to Power BI', topics: ['Importing and shaping data in Power BI', 'Building your first visuals and reports'] },
      { title: 'Week 4+: Dashboards & Capstone Project', topics: ['Building an interactive dashboard', 'Capstone: end-to-end analysis of a business dataset'] },
    ],
    whatYouLearn: [
      'Cleaning and structuring messy, real-world data',
      'Advanced Excel formulas and pivot table analysis',
      'Building interactive dashboards in Power BI',
      'Presenting data findings clearly to a non-technical audience',
    ],
    included: [
      { icon: 'monitor', title: 'Real Business Datasets', body: 'Practice on realistic, messy data rather than toy examples.' },
      { icon: 'award', title: 'Capstone Project & Certificate', body: 'A portfolio-ready analysis project plus a certificate of completion.' },
      { icon: 'clock', title: 'Flexible Scheduling', body: 'Weekday and weekend cohorts to fit your routine.' },
    ],
    packages: ictPackages(50000, 80000),
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
    longDescription:
      'A practical digital marketing course covering the channels businesses actually use — social media, SEO basics, paid advertising on Meta and Google, and content planning. You will build a real content calendar and a sample ad campaign as part of the course, not just review theory.',
    level: 'Beginner',
    prerequisite: 'None — no prior marketing experience required',
    tools: ['Meta Ads Manager', 'Google Ads', 'Content calendar templates'],
    schedule: 'Weekday evenings or Saturday mornings, 4–6 weeks depending on package',
    curriculum: [
      { title: 'Week 1: Foundations & Strategy', topics: ['Understanding your audience and funnel', 'Setting goals and choosing the right channels'] },
      { title: 'Week 2: Social Media & Content', topics: ['Building a content calendar', 'Organic content strategy for Instagram & Facebook'] },
      { title: 'Week 3: Paid Advertising', topics: ['Meta Ads Manager basics', 'Google Ads basics and keyword targeting'] },
      { title: 'Week 4+: Analytics & Campaign Project', topics: ['Reading campaign analytics and adjusting strategy', 'Building and presenting a sample campaign'] },
    ],
    whatYouLearn: [
      'How to plan a content calendar around real business goals',
      'Setting up and reading Meta and Google ad campaigns',
      'Core SEO concepts that affect visibility',
      'How to read campaign analytics and improve performance',
    ],
    included: [
      { icon: 'monitor', title: 'Hands-On Ad Accounts', body: 'Practice inside real Meta and Google Ads interfaces.' },
      { icon: 'award', title: 'Certificate of Completion', body: 'A certificate confirming you completed the programme.' },
    ],
    packages: ictPackages(35000, 70000),
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
    longDescription:
      'An introductory UI/UX course for anyone who wants to start designing digital products. You will learn user research and design-thinking fundamentals, wireframing, and prototyping in Figma, then apply it all to a complete case study you can add to your design portfolio.',
    level: 'Beginner',
    prerequisite: 'None — no design experience required',
    tools: ['Figma', 'User research templates'],
    schedule: 'Weekday evenings or Saturday mornings, 5–8 weeks depending on package',
    curriculum: [
      { title: 'Weeks 1–2: Design Thinking & Research', topics: ['Understanding user needs and pain points', 'User interviews and simple usability testing'] },
      { title: 'Weeks 3–4: Wireframing', topics: ['Low-fidelity wireframes and user flows', 'Information architecture basics'] },
      { title: 'Weeks 5–6: Prototyping in Figma', topics: ['Figma fundamentals: frames, components, auto-layout', 'Building a clickable prototype'] },
      { title: 'Weeks 7+: Case Study Project', topics: ['Turning your prototype into a portfolio case study', 'Presenting and defending your design decisions'] },
    ],
    whatYouLearn: [
      'Design-thinking fundamentals and user research basics',
      'Wireframing and information architecture',
      'Prototyping a clickable interface in Figma',
      'How to write and present a design portfolio case study',
    ],
    included: [
      { icon: 'monitor', title: 'Figma Practice Files', body: 'Hands-on projects built directly inside Figma.' },
      { icon: 'award', title: 'Portfolio Case Study & Certificate', body: 'A finished case study for your portfolio, plus a certificate of completion.' },
      { icon: 'clock', title: 'Flexible Scheduling', body: 'Weekday and weekend cohorts to fit your routine.' },
    ],
    packages: ictPackages(40000, 100000),
  },
  {
    id: '3d-animation',
    category: 'ict-skills',
    name: '3D Animation (Introductory)',
    summary: 'Learn 3D modelling, rigging and animation fundamentals using industry-standard software.',
    duration: '6–10 weeks',
    priceMin: 60000,
    priceMax: 150000,
    format: 'In-person or online',
    outcomes: ['3D modelling & texturing basics', 'Character rigging fundamentals', 'A finished animated short'],
    featured: true,
    longDescription:
      'An introductory 3D Animation course for anyone who wants to start creating characters and motion for film, games or content. You will learn the full pipeline — modelling, texturing, rigging and animating — and finish with a short animated piece for your portfolio.',
    level: 'Beginner',
    prerequisite: 'None — no prior 3D or animation experience required',
    tools: ['Blender (or Autodesk Maya)', 'Rendering & compositing basics'],
    schedule: 'Weekday evenings or Saturday mornings, 6–10 weeks depending on package',
    curriculum: [
      { title: 'Weeks 1–2: 3D Modelling Basics', topics: ['Navigating the 3D viewport & interface', 'Modelling simple props and objects', 'Introduction to topology'] },
      { title: 'Weeks 3–4: Texturing & Lighting', topics: ['UV unwrapping and basic materials', 'Lighting a 3D scene for mood and clarity'] },
      { title: 'Weeks 5–6: Rigging Fundamentals', topics: ['Building a basic character skeleton', 'Weight painting and deformation basics'] },
      { title: 'Weeks 7+: Animation & Final Project', topics: ['Keyframe animation and timing principles', 'Rendering and compositing your final animated short'] },
    ],
    whatYouLearn: [
      'The full 3D pipeline — modelling, texturing, rigging and animation',
      'Core principles of timing and motion for believable animation',
      'How to light and render a 3D scene',
      'How to plan and finish a short animated project from start to end',
    ],
    included: [
      { icon: 'monitor', title: 'Hands-On Project Files', body: 'Practice on real 3D scenes and character rigs, not just tutorials.' },
      { icon: 'award', title: 'Portfolio Animation & Certificate', body: 'A finished animated short for your portfolio, plus a certificate of completion.' },
      { icon: 'clock', title: 'Flexible Scheduling', body: 'Weekday and weekend cohorts to fit your routine.' },
    ],
    packages: ictPackages(60000, 150000),
  },
];

export const WORKSPACE_PLANS: WorkspacePlan[] = [
  { id: 'ws-daily', group: 'coworking', name: 'Daily Co-Working Desk', price: '₦2,000', period: 'per day' },
  { id: 'ws-weekly', group: 'coworking', name: 'Weekly Co-Working Desk', price: '₦7,500', period: 'per week' },
  { id: 'ws-monthly', group: 'coworking', name: 'Monthly Co-Working Desk', price: '₦25,000', period: 'per month' },
  { id: 'ws-weekend', group: 'coworking', name: 'Weekend Study Access', price: '₦1,500', period: 'per day (Saturdays)' },
  { id: 'cf-small', group: 'conference', name: 'Small Meeting Room', capacity: '6–8 people', price: '₦5,000/hr', period: '₦18,000 half-day • ₦30,000 full day' },
  { id: 'cf-medium', group: 'conference', name: 'Medium Conference Room', capacity: '10–20 people', price: '₦10,000/hr', period: '₦35,000 half-day • ₦60,000 full day' },
  { id: 'cf-hall', group: 'conference', name: 'Training Hall', capacity: '30–60 people', price: '₦25,000/hr', period: '₦70,000 half-day • ₦120,000 full day' },
];

/** Private offices, presented as selectable packages on their own detail page (see PrivateOfficeDetail). */
export const PRIVATE_OFFICE_RENTAL = {
  title: 'Private Offices',
  tagline: 'Dedicated, lockable office space for your team',
  description:
    'Fully furnished private offices for teams who want their own dedicated space without signing a long commercial lease — with coworking amenities included and the flexibility to move between sizes as your team grows.',
  benefits: [
    { icon: 'lock', title: 'Private & lockable', body: 'Your own dedicated, secure office — not a shared desk.' },
    { icon: 'wifi', title: 'High-speed internet', body: 'Reliable, business-grade internet included in every office.' },
    { icon: 'shield-check', title: 'Backup power', body: 'Uninterrupted power so your team can always work.' },
    { icon: 'coffee', title: 'Shared amenities', body: 'Access to coffee, refreshments and common areas.' },
  ] as FacilityBenefit[],
  packages: [
    {
      id: 'small',
      name: 'Small Private Office',
      price: 70000,
      priceLabel: '₦60,000–₦80,000',
      bestFor: 'Teams of 1–2 people',
      features: ['Lockable private office', 'Desk & seating for up to 2', 'High-speed internet', 'Monthly billing'],
    },
    {
      id: 'medium',
      name: 'Medium Private Office',
      price: 125000,
      priceLabel: '₦100,000–₦150,000',
      bestFor: 'Teams of 3–4 people',
      features: ['Lockable private office', 'Desk & seating for up to 4', 'High-speed internet', 'Monthly billing'],
      recommended: true,
    },
    {
      id: 'large',
      name: 'Large Private Office',
      price: 215000,
      priceLabel: '₦180,000–₦250,000',
      bestFor: 'Teams of 5–6 people',
      features: ['Lockable private office', 'Desk & seating for up to 6', 'High-speed internet', 'Monthly billing'],
    },
    {
      id: 'daily',
      name: 'Daily Private Office Use',
      price: 10000,
      priceLabel: '₦10,000/day',
      bestFor: 'Occasional or trial use, subject to availability',
      features: ['Full private office for the day', 'High-speed internet', 'No monthly commitment'],
    },
  ] as CoursePackage[],
};

export const BUSINESS_SERVICES: BusinessService[] = [
  {
    id: 'biz-name',
    name: 'Business Name Registration (CAC)',
    summary: 'Full registration of your business name with the Corporate Affairs Commission.',
    priceMin: 35000,
    priceMax: 45000,
    deliverables: ['Name availability check', 'CAC filing', 'Registration certificate'],
    longDescription:
      'Get your business name properly registered with the Corporate Affairs Commission (CAC), so you can open a business bank account, sign contracts and operate legitimately. We handle the name availability search, filing and documentation from start to finish.',
    packages: [
      {
        id: 'standard',
        name: 'Standard Filing',
        price: 35000,
        bestFor: 'Founders who aren\u2019t in a rush and want the standard process',
        features: ['Name availability check', 'CAC filing', 'Registration certificate', '5–10 business days'],
      },
      {
        id: 'express',
        name: 'Express Filing',
        price: 45000,
        bestFor: 'Founders who need their registration completed quickly',
        features: ['Name availability check', 'Priority CAC filing', 'Registration certificate', '2–3 business days'],
        recommended: true,
      },
    ],
  },
  {
    id: 'llc',
    name: 'Limited Liability Company Registration',
    summary: 'Incorporate a private limited company with full statutory documentation.',
    priceMin: 90000,
    priceMax: 150000,
    deliverables: ['Memorandum & Articles', 'CAC incorporation', 'TIN registration support'],
    longDescription:
      'Incorporate a private limited company (Ltd) with proper statutory documentation — the structure most investors, banks and larger clients expect. We prepare your Memorandum & Articles of Association, handle CAC incorporation, and support your TIN registration.',
    packages: [
      {
        id: 'standard',
        name: 'Standard Incorporation',
        price: 90000,
        bestFor: 'Straightforward incorporations with standard share structure',
        features: ['Memorandum & Articles of Association', 'CAC incorporation filing', 'Certificate of incorporation'],
      },
      {
        id: 'plus-tin',
        name: 'Incorporation + TIN & Compliance Pack',
        price: 120000,
        bestFor: 'Founders who also need tax registration sorted immediately',
        features: ['Everything in Standard', 'TIN registration support', 'Basic post-registration compliance checklist'],
        recommended: true,
      },
      {
        id: 'priority',
        name: 'Priority Incorporation + Support',
        price: 150000,
        bestFor: 'Founders who need it done fast, with ongoing guidance after',
        features: ['Everything in the TIN & Compliance Pack', 'Priority processing', '30 days of post-registration support'],
      },
    ],
  },
  {
    id: 'branding',
    name: 'Logo & Branding Package',
    summary: 'A cohesive visual identity — logo, colours, typography and brand guide.',
    priceMin: 20000,
    priceMax: 60000,
    deliverables: ['Logo design (3 concepts)', 'Brand colour & type system', 'Brand guideline document'],
    longDescription:
      'A cohesive visual identity that makes your business look as credible as the work you do — from a logo you\u2019re proud to put on an invoice, to a full brand system your team can use consistently everywhere.',
    packages: [
      {
        id: 'logo-only',
        name: 'Logo Only',
        price: 20000,
        bestFor: 'Founders who just need a professional logo to get started',
        features: ['3 initial logo concepts', '2 rounds of revisions', 'Final files (PNG, SVG, PDF)'],
      },
      {
        id: 'logo-kit',
        name: 'Logo + Brand Kit',
        price: 40000,
        bestFor: 'Businesses that want a consistent look across materials',
        features: ['Everything in Logo Only', 'Brand colour palette & typography', 'Business card & letterhead templates'],
        recommended: true,
      },
      {
        id: 'full-identity',
        name: 'Full Brand Identity',
        price: 60000,
        bestFor: 'Businesses ready to look established across every touchpoint',
        features: ['Everything in Logo + Brand Kit', 'Full brand guideline document', 'Social media templates'],
      },
    ],
  },
  {
    id: 'website',
    name: 'Website Design',
    summary: 'A responsive, professional website tailored to your business type.',
    priceMin: 80000,
    priceMax: 350000,
    period: 'depending on scope',
    deliverables: ['Custom design & build', 'Mobile-optimised layout', 'Basic SEO setup'],
    longDescription:
      'A responsive, professional website built around what your business actually needs — whether that\u2019s a simple one-page presence or a full custom site with e-commerce and content management.',
    packages: [
      {
        id: 'landing',
        name: 'Landing Page',
        price: 80000,
        bestFor: 'A single, focused page to establish your online presence',
        features: ['1-page custom design', 'Mobile-optimised layout', 'Basic SEO setup', 'Contact form'],
      },
      {
        id: 'business-site',
        name: 'Business Website (5–7 pages)',
        price: 180000,
        bestFor: 'Most small and medium businesses',
        features: ['Up to 7 custom-designed pages', 'Mobile-optimised layout', 'Basic SEO setup', 'Content management access'],
        recommended: true,
      },
      {
        id: 'custom-ecommerce',
        name: 'Custom / E-commerce Website',
        price: 350000,
        bestFor: 'Businesses selling products online or needing custom functionality',
        features: ['Fully custom design & build', 'Online store / payment integration', 'Product & inventory management', 'Priority support during launch'],
      },
    ],
  },
  {
    id: 'biz-plan',
    name: 'Business Plan / Proposal Writing',
    summary: 'Investor-ready business plans and funding proposals.',
    priceMin: 30000,
    priceMax: 150000,
    deliverables: ['Market & financial analysis', 'Executive summary', 'Pitch-ready formatting'],
    longDescription:
      'A clear, well-researched business plan that helps you think through your business and gives investors, banks or partners confidence in the numbers behind it.',
    packages: [
      {
        id: 'lean',
        name: 'Lean Business Plan',
        price: 30000,
        bestFor: 'Early-stage founders who need a clear, concise plan',
        features: ['Executive summary', 'Market overview', 'Basic financial projections'],
      },
      {
        id: 'standard',
        name: 'Standard Business Plan',
        price: 75000,
        bestFor: 'Businesses seeking a loan or partnership',
        features: ['Everything in Lean', 'Full market & competitor analysis', 'Detailed financial projections'],
        recommended: true,
      },
      {
        id: 'investor-ready',
        name: 'Investor-Ready Plan + Financial Model',
        price: 150000,
        bestFor: 'Founders raising investment who need a rigorous financial model',
        features: ['Everything in Standard', 'Investor-ready formatting & design', 'Detailed financial model (3–5 years)'],
      },
    ],
  },
  {
    id: 'dm-management',
    name: 'Digital Marketing Management',
    summary: 'Ongoing management of your social media and ad campaigns.',
    priceMin: 40000,
    priceMax: 120000,
    period: 'monthly',
    deliverables: ['Content calendar & posting', 'Ad campaign management', 'Monthly performance report'],
    longDescription:
      'Ongoing, hands-on management of your social media and paid ad campaigns, so your brand shows up consistently without you having to manage it yourself.',
    packages: [
      {
        id: 'starter',
        name: 'Starter (1 platform)',
        price: 40000,
        priceLabel: '₦40,000/month',
        bestFor: 'Businesses just starting to build a social presence',
        features: ['Content calendar for 1 platform', 'Regular posting & community replies', 'Monthly performance report'],
      },
      {
        id: 'growth',
        name: 'Growth (2–3 platforms + ads)',
        price: 80000,
        priceLabel: '₦80,000/month',
        bestFor: 'Businesses ready to run paid ad campaigns',
        features: ['Content calendar for 2–3 platforms', 'Meta/Google ad campaign management', 'Monthly performance report'],
        recommended: true,
      },
      {
        id: 'full-management',
        name: 'Full Management + Ads Oversight',
        price: 120000,
        priceLabel: '₦120,000/month',
        bestFor: 'Businesses that want marketing fully handled end to end',
        features: ['Content calendar across all platforms', 'Full ad campaign management & optimisation', 'Bi-weekly strategy check-ins'],
      },
    ],
  },
];

export const FACILITY_RENTAL = {
  title: 'Rent Our Testing Centre',
  tagline: 'Host your own exam sessions in our secure, accredited facility',
  description:
    'For exam bodies, schools and corporate partners who need a secure, well-equipped venue to run their own computer-based or paper-based exam sessions — complete with technical support, invigilation-ready seating and candidate coordination, so you can focus on the exam itself.',
  benefits: [
    { icon: 'shield-check', title: 'Secure & monitored', body: 'Biometric candidate check-in, CCTV coverage and a distraction-free testing environment.' },
    { icon: 'monitor', title: 'CBT-ready workstations', body: 'Reliable computer-based testing setup, or space configured for paper-based sessions.' },
    { icon: 'shield-check', title: 'Backup power & internet', body: 'Dedicated generator backup and redundant internet so sessions are never interrupted.' },
    { icon: 'users', title: 'Candidate coordination', body: 'Our team handles check-in, seating and session flow, so your invigilators can focus on the exam.' },
  ] as FacilityBenefit[],
  packages: [
    {
      id: 'half-day',
      name: 'Half-Day Exam Session',
      price: 50000,
      bestFor: 'A single exam session with a small candidate group',
      features: [
        'Up to 4 hours of facility access',
        'CBT workstations & invigilation-ready seating',
        'Biometric candidate check-in',
        'Backup power & internet included',
      ],
    },
    {
      id: 'full-day',
      name: 'Full-Day Exam Session',
      price: 120000,
      bestFor: 'Multiple sessions or larger candidate groups in one day',
      features: [
        'Up to 8 hours of facility access',
        'CBT workstations & invigilation-ready seating',
        'Biometric candidate check-in',
        'Backup power, internet & on-site security',
      ],
      recommended: true,
    },
    {
      id: 'multi-day',
      name: 'Multi-Day / Custom Event',
      price: 250000,
      bestFor: 'Exam bodies running multi-day or high-volume testing events',
      features: [
        'Custom multi-day scheduling',
        'Dedicated candidate coordination team',
        'On-site technical support throughout',
        'Priority scheduling & a named account contact',
      ],
    },
  ] as CoursePackage[],
};

/** Maps each international exam to the SkyTrack ICT training course that prepares for it. */
export const EXAM_TO_COURSE_ID: Record<string, string> = {
  IELTS: 'ielts',
  'PTE Academic': 'pte',
  CELPIP: 'celpip',
  SAT: 'sat',
  'TOEFL iBT': 'toefl',
  GRE: 'gre',
  GMAT: 'gmat',
};

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
