export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  name: string;
  description: string;
  /** Logo path under public/, routed through withBasePath at render time. */
  logo: string;
  /** Rendered logo height in px (logos have very different aspect ratios). */
  logoHeight: number;
  tags: string[];
  href?: string;
  links?: ProjectLink[];
}

export const projects: Project[] = [
  {
    name: "RempTek AI",
    description:
      "An agentic systems provider that connects business tools and deploys governed AI agents for intake, scheduling, sales, operations, and workflow automation.",
    logo: "/images/projects/remptek.png",
    logoHeight: 32,
    tags: ["AI Agents", "Automation", "Integrations", "SaaS"],
    href: "https://remptek.com/",
  },
  {
    name: "NautiBot for Greenfield Marine",
    description:
      "An AI voice-agent proof of concept created at Yo Technology for Greenfield Marine, providing conversational interfaces for its ShipArc.AI and VoyageIQ maritime platforms.",
    logo: "/images/projects/greenfield-marine.png",
    logoHeight: 44,
    tags: ["AI Voice Agent", "Maritime", "ShipArc.AI", "VoyageIQ"],
    links: [
      {
        label: "Client website",
        href: "https://www.greenfieldmarine.net/",
      },
      {
        label: "GitHub",
        href: "https://github.com/clyderemp/nautibot-poc",
      },
    ],
  },
  {
    name: "HVEN",
    description:
      "An all-in-one dating and self-growth app powered by AiA, combining conversational matchmaking, verified members, partner coaches and venues, and planned real-world dates.",
    logo: "/images/projects/hven.svg",
    logoHeight: 54,
    tags: ["Dating", "AI Matchmaking", "Mobile", "Community"],
    href: "https://hven.app/",
  },
  {
    name: "AVA",
    description:
      "An all-in-one social ecommerce marketplace combining verified storefronts, curated product discovery, community features, and AI-powered recommendations.",
    logo: "/images/projects/ava.png",
    logoHeight: 56,
    tags: ["E-Commerce", "Marketplace", "Social Commerce", "AI"],
    href: "https://www.avashopofficial.com/",
  },
  {
    name: "Bearlot's Furry Friends",
    description:
      "An all-in-one pet-care community for organizing pet records, discovering events and discounts, connecting with other owners, and supporting adoption and rescue.",
    logo: "/images/projects/bearlots-furry-friends.png",
    logoHeight: 56,
    tags: ["Mobile", "Pet Care", "Community", "Marketplace"],
    links: [
      {
        label: "Website",
        href: "https://www.bearlotsfurryfriends.com/",
      },
      {
        label: "iOS",
        href: "https://apps.apple.com/us/app/bearlots-furry-friends-bff/id6450854331",
      },
      {
        label: "Android",
        href: "https://play.google.com/store/apps/details?id=com.bearlots.furry.friends",
      },
    ],
  },
  {
    name: "NEOM Smart Lift System",
    description:
      "An enterprise digital-twin solution connecting lift equipment and IoT data with predictive workflows for operational monitoring, delivered as part of the Hiverlab team.",
    logo: "/images/organizations/neom.png",
    logoHeight: 48,
    tags: ["Digital Twin", "IoT", "Predictive Workflows", "Enterprise"],
    href: "https://hiverlab.com/case-studies/neom",
  },
  {
    name: "Sentra Middleware",
    description:
      "A personal middleware project for connecting services, normalizing requests, and coordinating data and events across application boundaries.",
    logo: "/images/projects/sentra-middleware.svg",
    logoHeight: 46,
    tags: ["Personal Project", "Middleware", "Integrations", "APIs"],
  },
  {
    name: "J.A.R.V.I.S",
    description:
      "A LiveKit-based personal AI assistant supporting voice and text interaction, web search, contextual tools, and PostgreSQL-backed lookups.",
    logo: "/images/projects/jarvis.svg",
    logoHeight: 48,
    tags: ["Personal Project", "AI Assistant", "LiveKit", "Python"],
  },
  {
    name: "WiFi Spatial Mapper",
    description:
      "A personal spatial-mapping tool for visualizing Wi-Fi signal measurements across physical environments to reveal coverage patterns and weak areas.",
    logo: "/images/projects/wifi-spatial-mapper.svg",
    logoHeight: 48,
    tags: ["Personal Project", "Wi-Fi", "Spatial Mapping", "Visualization"],
  },
  {
    name: "STL4IoT",
    description:
      "A statechart library of atomic components modelling the heterogeneous aspects of IoT systems — sensors, actuators, network, and controller. Led development as part of MDE research at TMU.",
    logo: "/images/stl4iot.png",
    logoHeight: 40,
    tags: ["MDE", "Statecharts", "IoT"],
    links: [
      {
        label: "Documentation",
        href: "https://mde-tmu.github.io/STL4IoT/",
      },
      {
        label: "Sage journal",
        href: "https://journals.sagepub.com/doi/full/10.1177/00375497241290369",
      },
      {
        label: "arXiv",
        href: "https://arxiv.org/abs/2311.18175",
      },
      {
        label: "ResearchGate",
        href: "https://www.researchgate.net/publication/385690387_STL4IoT_a_statechart_template_library_for_IoT_system_design",
      },
      {
        label: "ACM Digital Library",
        href: "https://dl.acm.org/doi/abs/10.1177/00375497241290369",
      },
      {
        label: "GitHub",
        href: "https://github.com/mde-tmu/STL4IoT",
      },
    ],
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
