
export interface Project {
  id: string;
  title: string;
  tagline: string;
  type: 'Flagship' | 'Advanced' | 'Client';
  nature: 'Freelance' | 'Personal' | 'Hackathon' | 'Client Work' | 'R&D';
  date: string; // Added timeline
  links: {
    demo?: string;
    github?: string;
  }; // Added links
  tags: string[];
  techStack: string[];
  hook: string;
  imageUrl?: string;
  modalContent: {
    problem: string;
    solution?: string;
    flow?: string;
    features: string[];
    technicalDetails: string;
    impact?: string;
    story?: string;
    future?: string;
  };
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  bullets: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  grade: string;
}

export interface SkillCategory {
  title: string;
  summary: string;
  skills: string[];
}

export interface EventItem {
  name: string;
  location: string;
  year: string;
  description: string;
  takeaway: string;
}

export interface Story {
  id: string;
  title: string;
  role: string;
  company: string;
  date: string;
  imageUrl: string;
  description: string; // Changed to single string for spacious layout
  link: string; // URL to LinkedIn post
  tags: string[];
}
