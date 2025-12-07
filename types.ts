export interface ServiceArea {
  id: string;
  name: string;
  county: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  distance: string; // Distance from Macon
  accidentHotspots: { name: string; description: string }[];
  medicalFacilities: { name: string; description: string }[];
  courtInfo: { name: string; description: string };
  zipCodes: string[];
  // New SEO Fields
  localPolice: { name: string; phone: string; address: string; description: string }[];
  directionsFrom: string;
  localFAQs: FAQ[];
}

export interface PracticeAreaContent {
  intro: string;
  whyChooseUs: string;
  keyIssues: { title: string; text: string }[];
  statuteInfo: { title: string; code: string; description: string };
  faqs: FAQ[];
  // New Long-Form Content Fields
  commonInjuries: { title: string; description: string }[];
  compensationTypes: { title: string; description: string }[];
  localRelevance: string; // Specific paragraph about Macon/Bibb context
}

export interface PracticeArea {
  id: string;
  title: string;
  description: string;
  icon: string;
  fullDescription: string;
  exampleCase: string;
  content: PracticeAreaContent;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface Testimonial {
  id: number;
  text: string;
  author: string;
  location: string;
  rating: number;
}

export interface FAQ {
  question: string;
  answer: string;
  expandedAnswer?: string; // Optional longer answer for detailed pages
}

export interface CaseResult {
  amount: string;
  type: string;
  location: string;
  description: string;
}

export interface Attorney {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  email: string;
  phone: string;
  practiceFocus: string[];
  education: string;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}