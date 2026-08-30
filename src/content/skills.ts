export interface SkillGroup {
  title: string;
  /** Short mono label shown as the group's eyebrow. */
  code: string;
  items: string[];
}

export const skillStats = [
  { value: "10+", label: "years building software" },
  { value: "8+", label: "years back-end" },
  { value: "5+", label: "years front-end" },
  { value: "4+", label: "years model-driven engineering" },
] as const;

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    code: "lang",
    items: [
      "Java",
      "Python",
      "C",
      "C++",
      "C#",
      "JavaScript",
      "PHP",
      "Swift",
      "Kotlin",
      "SQL",
      "HTML5",
      "CSS3",
      "LaTeX",
      "XML",
    ],
  },
  {
    title: "Frameworks & Libraries",
    code: "fw",
    items: [
      "React",
      "Node.js",
      "jQuery",
      "Bootstrap",
      "Flask",
      "FastAPI",
      "JUnit",
      "WordPress",
    ],
  },
  {
    title: "Tools & Platforms",
    code: "tools",
    items: [
      "Git & GitHub",
      "Docker",
      "Google Cloud",
      "Firebase",
      "VS Code",
      "IntelliJ",
      "Eclipse",
      "Itemis CREATE",
    ],
  },
  {
    title: "Operating Systems",
    code: "os",
    items: ["Linux", "Unix", "macOS", "Windows", "iOS", "Android"],
  },
  {
    title: "Domain Specializations",
    code: "domain",
    items: [
      "Model-Driven Engineering",
      "Internet of Things",
      "Cyber-Physical Systems",
      "Machine Learning",
      "Digital Twins",
    ],
  },
];
