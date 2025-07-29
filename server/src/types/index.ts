export interface ContactForm {
  name: string;
  email: string;
  company?: string;
  budget?: string;
  message: string;
  service?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  category: 'development' | 'consulting' | 'design' | 'ai';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  client: string;
  duration: string;
  url?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  image: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
} 