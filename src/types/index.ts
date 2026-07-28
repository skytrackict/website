export interface Division {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  path: string;
  highlights: string[];
}

export interface CoursePackage {
  id: string;
  name: string;
  price: number;
  bestFor: string;
  features: string[];
  recommended?: boolean;
}

export interface CurriculumWeek {
  title: string;
  topics: string[];
}

export interface IncludedItem {
  icon: string;
  title: string;
  body: string;
}

export interface Course {
  id: string;
  category: 'exam-prep' | 'ict-skills';
  name: string;
  summary: string;
  duration: string;
  priceMin: number;
  priceMax: number;
  format: string;
  outcomes: string[];
  featured?: boolean;

  // Detail-page fields
  longDescription: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All levels';
  prerequisite: string;
  tools: string[];
  schedule: string;
  curriculum: CurriculumWeek[];
  whatYouLearn: string[];
  included: IncludedItem[];
  packages: CoursePackage[];
}

export interface WorkspacePlan {
  id: string;
  group: 'coworking' | 'private-office' | 'conference';
  name: string;
  capacity?: string;
  price: string;
  period: string;
  note?: string;
}

export interface BusinessService {
  id: string;
  name: string;
  summary: string;
  priceMin: number;
  priceMax: number;
  period?: string;
  deliverables: string[];
}

export interface FacilityBenefit {
  icon: string;
  title: string;
  body: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  initials: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Sellable {
  id: string;
  kind: 'course' | 'workspace' | 'business-service' | 'testing-service';
  name: string;
  amount: number;
  description: string;
}

export interface EnrollmentRecord {
  fullName: string;
  email: string;
  phone: string;
  itemId: string;
  itemName: string;
  amount: number;
  reference: string;
  status: 'pending' | 'success' | 'failed';
  createdAt: string;
  notes?: string;
}

export interface ContactMessageRecord {
  fullName: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  createdAt: string;
}
