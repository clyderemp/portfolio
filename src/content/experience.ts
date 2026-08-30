export interface Role {
  period: string;
  title: string;
  org: string;
  summary: string[];
  tags: string[];
  link?: { label: string; href: string };
}

export const experience: Role[] = [
  {
    period: "2021 — 2024",
    title: "IT Support Specialist & Full-Stack Web Developer",
    org: "Toronto Metropolitan University",
    summary: [
      "Led development of the myLinc web portal for the Lincoln Alexander School of Law, built with Bootstrap and Firestore.",
      "Provided comprehensive technical support to faculty, staff, and students, troubleshooting intricate hardware and software issues.",
    ],
    tags: ["Bootstrap", "Firestore", "IT Support"],
    link: { label: "TMU Law portal", href: "https://tmu-lasl-portal.web.app/" },
  },
  {
    period: "Jun 2022 — Aug 2022",
    title: "Jr. Software Engineer",
    org: "ADP Technology Inc.",
    summary: [
      "Collaborated with senior developers to design, develop, and deploy web applications and services.",
      "Built responsive, intuitive interfaces with HTML, CSS, and JavaScript frameworks such as React.",
    ],
    tags: ["React", "JavaScript", "Frontend"],
  },
  {
    period: "Sep 2021 — Apr 2022",
    title: "Jr. Web Developer",
    org: "CompTIA — TechTalent Accelerator",
    summary: [
      "Developed and maintained web projects in an industry training program run by Toronto Metropolitan University, CompTIA, and member companies.",
      "Contributed to the front-end development of the TechTalent Accelerator site.",
    ],
    tags: ["Frontend", "HTML/CSS", "JavaScript"],
    link: {
      label: "TechTalent Accelerator",
      href: "https://www.talent-accelerator.com/technology-talent-accelerator/Home",
    },
  },
  {
    period: "Sep 2021 — Apr 2022",
    title: "Front-End Web Developer",
    org: "Splice Digital Inc.",
    summary: [
      "Implemented responsive, visually consistent user interfaces with HTML, CSS, and JavaScript across devices and browsers.",
    ],
    tags: ["HTML/CSS", "JavaScript", "Responsive"],
  },
  {
    period: "May 2021 — Aug 2021",
    title: "Full-Stack Web Developer",
    org: "Google Inc. Canada",
    summary: [
      "Contributed to web applications and services within a dynamic team.",
      "Designed intuitive interfaces with Bootstrap and integrated Firebase for data persistence, optimizing queries for efficiency.",
    ],
    tags: ["Bootstrap", "Firebase", "Full-stack"],
  },
  {
    period: "May 2019 — Jun 2019",
    title: "Electrical Engineering Intern",
    org: "Blackburn Radio Inc.",
    summary: ["Internship program in Windsor, Ontario, Canada."],
    tags: ["Hardware"],
  },
];
