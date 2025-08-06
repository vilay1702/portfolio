// Education Types
export interface EducationData {
  university: string;
  course: string;
  cgpa: string | null;
  percentage: string | null;
  year: string;
  place: string;
}

// Experience Types
export interface ExperienceData {
  role: string;
  oranisation: string;
  duration: string;
  experience: string[];
}

// Position of Responsibility Types
export interface PoRData {
  role: string;
  oranisation: string;
  duration: string;
  experience: string[];
}

// Project Types
export interface ProjectData {
  name: string;
  techStack: string[];
  code: string;
  live: string | null;
  img: string | null;
}

// Skills Types
export interface SkillCategory {
  category: string;
  items: string[];
}

// Theme Context Types
export interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}
