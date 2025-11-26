
import { LucideIcon } from 'lucide-react';

export interface Project {
  slug: string;
  title: string;
  category: string;
  thumbnail: string;
  description: string;
  longDescription: string;
  images: string[];
  technologies: string[];
  liveLink?: string;
  repoLink?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  content: string; // Markdown content
  featuredImage: string;
  category: string;
}

export interface ResearchProject {
  slug:string;
  title: string;
  institution: string;
  duration: string;
  supervisor: string;
  description: string;
  longDescription: string;
  image: string;
  images?: string[];
  videoUrl?: string;
}

export interface Award {
  slug: string;
  title: string;
  organization: string;
  date: string;
  description: string;
  longDescription: string;
  image: string;
  images?: string[];
  videoUrl?: string;
}

export interface TimelineEvent {
  type: 'Career' | 'Teaching' | 'Leadership' | 'Research';
  icon: LucideIcon;
  title: string;
  subtitle: string;
  duration: string;
  description: string;
  image?: string;
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  details: string[];
  thesisTitle?: string;
  images: string[];
}

export interface Skill {
  name: string;
  level: number; // Percentage from 0 to 100
  icon?: LucideIcon;
}

export interface Publication {
  type: 'Journal' | 'Conference' | 'Poster Presentation';
  title: string;
  details: string;
  link?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
}

export interface InvestmentOpportunity {
  slug: string;
  title: string;
  category: string;
  status: 'Open' | 'Closed' | 'Coming Soon';
  roi: string; 
  minInvestment: string; 
  duration: string;
  riskLevel: 'Low' | 'Medium' | 'High';
  description: string;
  longDescription: string; // Can support Markdown or plain text
  image: string;
  model: string; // e.g. "Mudarabah"
  contractValue?: string;
  estimatedProfit?: string;
}
