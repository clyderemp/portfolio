export interface Award {
  period: string;
  title: string;
  org: string;
  description: string;
  href?: string;
}

export const awards: Award[] = [
  {
    period: "May 2023",
    title: "Published MDE Author",
    org: "Annual Modelling and Simulation Conference",
    description:
      "Model-Driven Engineering contribution paper accepted by the Society for Modeling & Simulation International.",
    href: "https://clyderemp.github.io/iot-statechart-template-webpage/index.html",
  },
  {
    period: "2021 — 2023",
    title: "Ryerson Graduate Scholarship",
    org: "Toronto Metropolitan University",
    description:
      "Full scholarship to attend the Yeates School of Graduate Studies.",
  },
  {
    period: "2016 — 2021",
    title: "UWindsor Undergraduate Scholarship",
    org: "University of Windsor",
    description:
      "Full scholarship through the entirety of the Bachelor's degree.",
  },
];
