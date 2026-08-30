export interface Project {
  name: string;
  description: string;
  /** Logo path under public/, routed through withBasePath at render time. */
  logo: string;
  /** Rendered logo height in px (logos have very different aspect ratios). */
  logoHeight: number;
  tags: string[];
  href?: string;
}

export const projects: Project[] = [
  {
    name: "STL4IoT",
    description:
      "A statechart library of atomic components modelling the heterogeneous aspects of IoT systems — sensors, actuators, network, and controller. Led development as part of MDE research at TMU.",
    logo: "/images/stl4iot.png",
    logoHeight: 40,
    tags: ["MDE", "Statecharts", "IoT"],
    href: "https://mde-tmu.github.io/STL4IoT/",
  },
  {
    name: "MyAcAdvisor",
    description:
      "Machine-learning advisor that analyzes student data — academic records, performance metrics, behavioral patterns — to generate personalized insights and recommendations.",
    logo: "/images/myacadvisor.png",
    logoHeight: 44,
    tags: ["Machine Learning", "Web App", "Python"],
    href: "https://myacadvisor.web.app/",
  },
  {
    name: "MyLinc Portal",
    description:
      "Centralized platform for students and faculty of the Lincoln Alexander School of Law — the primary hub for communication, collaboration, and access to resources.",
    logo: "/images/tmu.jpg",
    logoHeight: 56,
    tags: ["Full-stack", "Firestore", "Bootstrap"],
    href: "https://tmu-lasl-portal.web.app/",
  },
  {
    name: "CompTIA TechTalent Accelerator",
    description:
      "Training program launching industry-ready talent for the Canadian technology sector, run by TMU and CompTIA. Contributed to front-end development of the program site.",
    logo: "/images/comptia.png",
    logoHeight: 28,
    tags: ["Frontend", "HTML/CSS", "JavaScript"],
    href: "https://www.talent-accelerator.com/technology-talent-accelerator/Home",
  },
  {
    name: "PeekSearch Engine",
    description:
      "Web search engine developed during the COVID-19 pandemic that surfaced live line-up traffic for customers deciding when to visit stores.",
    logo: "/images/peeksearch.png",
    logoHeight: 64,
    tags: ["Web", "Search", "COVID-19"],
  },
  {
    name: "StreamFlix",
    description:
      "First mobile application — a live streaming app in the spirit of Instagram Live, built before Instagram shipped it.",
    logo: "/images/streamflix.png",
    logoHeight: 48,
    tags: ["Mobile", "Android", "Streaming"],
  },
];
