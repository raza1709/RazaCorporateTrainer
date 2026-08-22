export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  bullets: string[];
}

export interface CaseStudy {
  id: string;
  industry: string;
  title: string;
  challenge: string;
  solution: string;
  tools: string[];
  timeline: string;
  result: string;
  resultIcon: string;
  metric: string;
}

export interface TrainingProgram {
  id: string;
  number: string;
  title: string;
  duration: string;
  audience: string;
  mode: string;
  description: string;
  curriculum: string[];
  outcomes: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  teamSize: string;
  service: string;
  message: string;
}
