import landingPage from "./images/project_landing_page.png";
import githubUsers from "./images/project_github.WebP";
import reduxCart from "./images/project_redux.WebP";
import custom from "./images/project_custom.WebP";
import ollivanders from "./images/project_ollivanders.png";
import { EducationData, ExperienceData, ProjectData } from "./interfaces";

// Name
export const NAME = "Vilay Bende";

// Roles
export const ROLES = [
  "Full-stack Developer",
  "Shopify Developer",
  "Software Engineer",
];

// About
export const ABOUT = [
  "I'm a full stack developer with a strong product mindset, blending code and creativity to build apps that actually solve problems. From developing Shopify apps used by merchants to scaling eCommerce platforms, my work spans frontend finesse and backend logic.",

  "Skilled in Next.js, Remix.js, ReactJS, Node.js, Shopify API, and AI integrations, I care about clean code, intuitive UX, and delivering features that users love and businesses notice.",

  "I'm always exploring new technologies and frameworks to stay sharp and keep growing as a developer. I'm also familiar with AI tools and enjoy using them to boost productivity and ship better features faster.",

  "Builder. Learner. Team player. Always up for turning an idea into something real (and fast).",
];

// Education
export const EDUCATION: EducationData[] = [
  {
    university: "Medi-Caps University",
    course: "B.Tech CS",
    cgpa: "9.1/10",
    percentage: null,
    year: "2019-2023",
    place: "Indore, India",
  },
  {
    university: "First Step Sr Secondary School",
    course: "HSC, Science",
    cgpa: null,
    percentage: "85%",
    year: "2018-2019",
    place: "Chhindwara, India",
  },
];

// Experience
export const EXPERIENCE: ExperienceData[] = [
  {
    role: "Software Developer Engineer",
    oranisation: "Profitonium Apps",
    duration: "Oct'23 - present",
    experience: [
      "Developed and maintained public Shopify apps used by 8000+ merchants to streamline store workflows",
      "Integrated AI to deliver features like content automation and SEO optimization",
      "Enhanced UI/UX with Shopify Polaris to meet design standards and earn the Built for Shopify tag.",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    oranisation: "Easyops",
    duration: "May'23 - Jul'23",
    experience: [
      "Developed online menu app interface for managing restaurant menus with the help of Chakra UI",
      "Custom item cart: manage and store customized menu items for smooth ordering",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    oranisation: "Descrii.tech",
    duration: "Nov'21 - Mar'22",
    experience: [
      "As a Shopify Developer, built custom Shopify apps to optimize client experience and streamline operations",
      "Created customizable tab and accordion components using Liquid and CSS, with 4 types of predefined options",
    ],
  },
  {
    role: "Software Developer Intern",
    oranisation: "MADIEE Games",
    duration: "July'21 - Sept'21",
    experience: [
      "Responsible for developing engaging User Interface(UI) for web-based games",
      "Utilized Socket IO to seamlessly integrate the front-end and back-end systems for real-time communication",
    ],
  },
];

// Projects
export const PROJECTS: ProjectData[] = [
  {
    name: "Ollivanders",
    techStack: ["React Js", "Node Js", "MongoDB", "Express Js", "JavaScript"],
    code: "https://ollivanders.vercel.app/",
    live: "https://ollivanders.vercel.app/",
    img: ollivanders,
  },
  {
    name: "Github Users",
    techStack: ["React", "Javascript", "HTML", "CSS", "API"],
    code: "https://github.com/vilay1702/github-users",
    live: "https://vilay1702.github.io/github-users/",
    img: githubUsers,
  },
  {
    name: "Redux Cart",
    techStack: ["React", "Redux", "Javascript", "Tailwind CSS", "HTML"],
    code: "https://github.com/vilay1702/redux-cart",
    live: "https://vilay1702.github.io/redux-cart/",
    img: reduxCart,
  },
  // {
  //   name: "Breaking Bad Characters",
  //   techStack: ["React", "Javascript", "HTML", "CSS", "API"],
  //   code: "https://github.com/vilay1702/breakingBadCharacters",
  //   live: "https://breakingbadbyvilay.netlify.app/",
  //   img: bad,
  // },
  {
    name: "Demo Portfolio",
    techStack: ["HTML", "SASS", "React Js"],
    code: "https://github.com/vilay1702/custom-resume-page",
    live: "https://vilay1702.github.io/custom-resume-page/",
    img: custom,
  },
  {
    name: "Landing Page",
    techStack: ["HTML", "CSS"],
    code: "https://github.com/vilay1702/developer-portfolio-challenge",
    live: "https://vilay1702.github.io/developer-portfolio-challenge/",
    img: landingPage,
  },
  {
    name: "Notes App",
    techStack: ["PHP", "HTML", "CSS", "MySQL"],
    code: "https://github.com/vilay1702/NotesApp",
    live: null,
    img: null,
  },
];

// Skills
export const SKILLS = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "C++", "C"],
  },
  {
    category: "Frontend Development",
    items: [
      "React.js",
      "Next.js",
      "Remix.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Sass/SCSS",
      "Responsive Design",
    ],
  },
  {
    category: "Backend & Database",
    items: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "MySQL",
      "RESTful APIs",
      "GraphQL",
      "Server-side Rendering (SSR)",
      "API Integration",
    ],
  },
  {
    category: "Tools & Technologies",
    items: [
      "Git & GitHub",
      "VS Code",
      "Postman",
      "Figma",
      "AWS (Basic)",
      "OpenAI",
      "ChatGPT",
    ],
  },
  {
    category: "Soft Skills",
    items: [
      "Problem Solving",
      "Team Collaboration",
      "Project Management",
      "Code Review",
      "Technical Documentation",
      "Client Communication",
    ],
  },
];

// Position of Responsibility
export const POSITION_OF_RESPONSIBILITY = [
  {
    role: "Web Developer, Graphic Designer",
    oranisation: "Incubation Cell, Medi-Caps University",
    duration: "Oct'20 - present",
    experience: [
      "Worked in Web Development and Graphic Designing team",
      "Working on MIIC website",
      "Led a team to produce UX/UI designs and posters for website and events",
    ],
  },
  {
    role: "Chapter Lead",
    oranisation: "CodeChef College Chapter",
    duration: "May'20 - June'21",
    experience: [
      "Established first-ever active competitive programming club on my campus",
      "Guided 250+ students to get started with Competitve Programming",
      "Took doubt session organised coding contests and workshops ",
    ],
  },
];
