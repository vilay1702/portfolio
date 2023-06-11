import landingPage from "./images/project_landing_page.png";
import githubUsers from "./images/project_github.WebP";
import reduxCart from "./images/project_redux.WebP";
import custom from "./images/project_custom.WebP";
import ollivanders from "./images/project_ollivanders.png";

// Education
export const education = [
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
export const experience = [
  {
    role: "Web Developer Intern",
    oranisation: "Descrii.tech",
    duration: "Nov'21 - Mar'22",
    experience:
      "Worked as a Shopify Developer and developed Shopify Apps.Worked on MERN stack, Shopify API, Shopify Polaris",
  },
  {
    role: "Software Developer Intern",
    oranisation: "MADIEE Games",
    duration: "July'21 - Sept'21",
    experience:
      "Responsible for developing engaging User Interface(UI) for web-based games.Worked on React JS",
  },
];

// Projects
export const projectsList = [
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
    techStack: ["PHP", "Javascript", "HTML", "CSS", "MySQL"],
    code: "https://github.com/vilay1702/NotesApp",
    live: null,
    img: null,
  },
];

// Skills
export const skills = [
  {
    category: "Frontend",
    items: [
      "React JS",
      "Next Js",
      "HTML",
      "CSS",
      "Bootstrap",
      "Tailwind CSS",
      "API",
      "Sass",
    ],
  },
  { category: "Backend", items: ["Node JS", "PHP", "MySql", "MongoDB"] },
  {
    category: "Languages",
    items: ["C", "C++", "Python", "JavaScript", "TypeScript"],
  },
  {
    category: "Others",
    items: ["Git/GitHub", "Figma", "Illustrator", "Web Designing"],
  },
];

// Position of Responsibility
export const por = [
  {
    role: "Web Developer, Graphic Designer",
    oranisation: "Incubation Cell, Medi-Caps University",
    duration: "Oct'20 - present",
    experience:
      "Worked in Web Development and Graphic Designing team.Working on MIIC website.Led a team to produce UX/UI designs and posters for website and events",
  },
  {
    role: "Chapter Lead",
    oranisation: "CodeChef College Chapter",
    duration: "May'20 - June'21",
    experience:
      "Established first-ever active competitive programming club on my campus.Guided 250+ students to get started with Competitve Programming, took doubt session organised coding contests and workshops ",
  },
];
