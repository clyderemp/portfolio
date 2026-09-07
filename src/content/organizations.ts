export interface OrganizationLogo {
  name: string;
  image: string;
  width: number;
  height: number;
  relationship: string;
  darkSurface?: boolean;
}

export const organizationLogos: OrganizationLogo[] = [
  {
    name: "NEOM",
    image: "/images/organizations/neom.png",
    width: 480,
    height: 201,
    relationship: "Project at Hiverlab",
    darkSurface: true,
  },
  {
    name: "Hiverlab",
    image: "/images/organizations/hiverlab.png",
    width: 2608,
    height: 935,
    relationship: "Architecture & digital twins",
    darkSurface: true,
  },
  {
    name: "Google",
    image: "/images/organizations/google.svg",
    width: 74,
    height: 24,
    relationship: "Machine learning",
  },
  {
    name: "CompTIA",
    image: "/images/organizations/comptia.svg",
    width: 198,
    height: 42,
    relationship: "Security+ · Network+",
  },
  {
    name: "Toronto Metropolitan University",
    image: "/images/organizations/tmu.svg",
    width: 373,
    height: 203,
    relationship: "Internal platforms",
  },
  {
    name: "Splice Digital",
    image: "/images/organizations/splice-digital.svg",
    width: 100,
    height: 46,
    relationship: "Software development",
    darkSurface: true,
  },
  {
    name: "Fiverr",
    image: "/images/organizations/fiverr.png",
    width: 2004,
    height: 600,
    relationship: "Freelance client work",
  },
  {
    name: "Web Dev Services",
    image: "/images/organizations/web-dev-services.svg",
    width: 300,
    height: 96,
    relationship: "Independent web development",
  },
];

export const organizationCarouselHeading = "Across teams, projects & credentials";
