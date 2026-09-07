export interface RoleLogo {
  name: string;
  image: string;
  width: number;
  height: number;
  darkSurface?: boolean;
}

export interface Role {
  period: string;
  title: string;
  focus?: string;
  org: string;
  location: string;
  summary: string[];
  tags: string[];
  logos: RoleLogo[];
  link?: { label: string; href: string };
}

export const experience: Role[] = [
  {
    period: "Aug 2025 — Present",
    title: "Head of AI Software Solutions",
    focus: "Enterprise AI & Automation",
    org: "Yo Technology Co.",
    location: "Dubai, UAE",
    logos: [
      {
        name: "Yo Technology",
        image: "/images/organizations/yo-technology.svg",
        width: 240,
        height: 72,
      },
    ],
    summary: [
      "Set technical direction for internal platforms, commercial products, and client-facing AI solutions, leading discovery, architecture, implementation, QA, deployment, and operational handover.",
      "Implemented Odoo ERP and reusable Odoo/Zoho integrations across CRM, HR, recruitment, accounting, invoicing, approvals, and reporting. Architected agentic workflows connecting LLMs, APIs, documents, and human approval checkpoints.",
      "Led development of a real-time voice sales agent using LiveKit, React, OpenAI, AssemblyAI, and ElevenLabs, while aligning delivery roadmaps with executive and operational stakeholders.",
    ],
    tags: ["AI Agents", "Odoo", "Zoho", "LiveKit", "Technical Leadership"],
  },
  {
    period: "Jan 2024 — Aug 2025",
    title: "Senior Software & AI/ML Architect",
    focus: "Enterprise Digital Twins",
    org: "Hiverlab Co. / Nasser Al Jaghoub Trading LLC",
    location: "Dubai, UAE",
    logos: [
      {
        name: "Hiverlab",
        image: "/images/organizations/hiverlab.png",
        width: 2608,
        height: 935,
        darkSurface: true,
      },
    ],
    summary: [
      "Led architecture and technical delivery for AI, IoT, cyber-physical systems, simulation, and digital-twin programs across smart-city, logistics, built-environment, and industrial domains.",
      "Architected the NEOM Smart Lift System, connecting equipment and IoT data with digital-twin models and predictive workflows. Developed architecture and automation pipelines for the DB Schenker Warehouse Digital Twin.",
      "Directed Middle East and Singapore-based teams, translating stakeholder requirements into system designs and delivery plans while guiding security, scalability, integration, testing, and production readiness.",
    ],
    tags: ["Digital Twins", "AI/ML", "IoT", "System Architecture"],
  },
  {
    period: "Dec 2022 — Jan 2024",
    title: "Software Engineer",
    focus: "Internal Platforms & Automation",
    org: "Toronto Metropolitan University — Lincoln Alexander School of Law",
    location: "Toronto, ON, Canada",
    logos: [
      {
        name: "Toronto Metropolitan University",
        image: "/images/organizations/tmu.svg",
        width: 373,
        height: 203,
      },
    ],
    summary: [
      "Designed internal applications and staff systems for HR, faculty administration, operational workflows, reporting, and knowledge access using Node.js, Bootstrap, JavaScript, and Firestore/Firebase.",
      "Owned requirements, implementation, testing, documentation, deployment support, and iterative improvements with IT, faculty, and administrative stakeholders, applying role-based access and secure data handling.",
    ],
    tags: ["Node.js", "Bootstrap", "Firebase", "Workflow Automation"],
  },
  {
    period: "Oct 2021 — Dec 2022",
    title: "Full-Stack Software Engineer",
    focus: "Enterprise HR, Payroll & CRM",
    org: "ADP Technology Inc.",
    location: "Etobicoke, ON, Canada",
    logos: [
      {
        name: "ADP",
        image: "/images/organizations/adp.svg",
        width: 220,
        height: 100,
      },
    ],
    summary: [
      "Built enterprise web applications and internal tools for HR, payroll, CRM, and customer operations using React, Node.js, JavaScript, REST APIs, Firestore, and SQL integrations.",
      "Connected workflows to ERP/CRM data and Microsoft Azure-hosted services, supporting secure data exchange, automation, deployment, and troubleshooting. Contributed across Agile planning, code review, testing, and release support.",
    ],
    tags: ["React", "Node.js", "Microsoft Azure", "REST APIs", "SQL"],
  },
  {
    period: "Sep 2020 — Oct 2021",
    title: "Junior AI/ML Engineer",
    focus: "Machine Learning",
    org: "Google Inc. — Machine Learning Department",
    location: "Toronto, ON, Canada",
    logos: [
      {
        name: "Google",
        image: "/images/organizations/google.svg",
        width: 74,
        height: 24,
      },
    ],
    summary: [
      "Developed machine-learning workflows using Python, TensorFlow, GCP, Firebase, and cloud data services, including reproducible preprocessing, feature engineering, training, evaluation, and validation pipelines.",
      "Integrated model outputs into cloud-connected applications and automated workflows, documented experimental results, and improved model quality, reliability, and maintainability with software and product stakeholders.",
    ],
    tags: ["Python", "TensorFlow", "GCP", "ML Pipelines"],
  },
  {
    period: "2017 — Aug 2020",
    title: "Software Developer Intern → Junior Software Developer",
    org: "Splice — Outsourced Software Development",
    location: "Windsor, ON, Canada",
    logos: [
      {
        name: "Splice Digital",
        image: "/images/organizations/splice-digital.svg",
        width: 100,
        height: 46,
        darkSurface: true,
      },
    ],
    summary: [
      "Progressed from a software development internship into a full-time junior developer role, delivering outsourced software solutions for client organizations.",
      "Contributed to full-stack applications, internal tools, integrations, and database-backed features using JavaScript, React, Node.js, PHP, SQL, and REST APIs, from requirements and implementation through testing, release support, and maintenance.",
    ],
    tags: ["React", "Node.js", "PHP", "SQL", "Client Delivery"],
  },
  {
    period: "2014 — 2017",
    title: "Independent Software Developer & IT Consultant",
    org: "Independent / Client Projects",
    location: "Canada / Remote",
    logos: [
      {
        name: "Splice Digital",
        image: "/images/organizations/splice-digital.svg",
        width: 100,
        height: 46,
        darkSurface: true,
      },
      {
        name: "Fiverr",
        image: "/images/organizations/fiverr.png",
        width: 2004,
        height: 600,
      },
    ],
    summary: [
      "Delivered websites, IT support, and workflow automation, progressing into full-stack applications, database-backed systems, cloud deployments, and early AI/ML prototypes for small-business and independent clients.",
      "Owned requirements, implementation, testing, hosting, documentation, and post-deployment support using JavaScript, React, Node.js, Python, PHP, SQL, Firebase, WordPress, AWS, and Azure.",
    ],
    tags: ["Full-Stack Development", "Cloud", "Automation", "IT Consulting"],
  },
];
