import landingPage from "./images/project_landing_page.png";
import githubUsers from "./images/project_github.WebP";
import reduxCart from "./images/project_redux.WebP";
import custom from "./images/project_custom.WebP";
import ollivanders from "./images/project_ollivanders.png";
import { EducationData, ExperienceData, ProjectData } from "./interfaces";

import portfolioData from "./portfolioData.json";

// Image mapping object to connect image names to actual imports
const projectImages: { [key: string]: string } = {
  ollivanders: ollivanders,
  githubUsers: githubUsers,
  reduxCart: reduxCart,
  custom: custom,
  landingPage: landingPage,
};

// Name
export const NAME = portfolioData.name;

// Roles
export const ROLES = portfolioData.roles;

// About
export const ABOUT = portfolioData.about;

// Education
export const EDUCATION: EducationData[] = portfolioData.education;

// Experience
export const EXPERIENCE: ExperienceData[] = portfolioData.experience;

// Projects - Map the img field to actual imported images
export const PROJECTS: ProjectData[] = portfolioData.projects.map(
  (project) => ({
    ...project,
    img: project.img ? projectImages[project.img] || null : null,
  })
);

// Skills
export const SKILLS = portfolioData.skills;

// Position of Responsibility
export const POSITION_OF_RESPONSIBILITY =
  portfolioData.positionOfResponsibility;
