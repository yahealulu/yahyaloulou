export type SectionType = 'about' | 'projects' | 'resume' | 'contact';

export type FrameworkType = 'react' | 'nextjs';

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  features: string[];
  techTags: string[];
  links: ProjectLink[];
  images: string[];
  framework: FrameworkType;
}

export interface Experience {
  title: string;
  date: string;
  institution: string;
  description: string;
}

export interface Education {
  title: string;
  date: string;
  institution: string;
  url?: string;
}

export interface ContactLink {
  type: 'email' | 'github' | 'whatsapp';
  label: string;
  url: string;
  displayText: string;
}

export interface ImageModalState {
  isOpen: boolean;
  images: string[];
  currentIndex: number;
}
