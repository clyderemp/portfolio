export interface Degree {
  period: string;
  degree: string;
  school: string;
  notes: string[];
}

export const education: Degree[] = [
  {
    period: "2021 — 2023",
    degree: "M.Sc. in Software Engineering",
    school: "Toronto Metropolitan University",
    notes: [
      "Full graduate scholarship · 3.92 GPA",
      "Thesis research in Model-Driven Engineering for the IoT domain",
      "Supervised by Professor Sadaf Mustafiz, M.Sc., Ph.D.",
    ],
  },
  {
    period: "2016 — 2021",
    degree: "B.Sc. in Computer Science",
    school: "University of Windsor",
    notes: [
      "Honour Roll · 3.25 GPA",
      "Software Engineering specialization",
      "Minor in Mathematics and Statistics",
    ],
  },
  {
    period: "2016",
    degree: "High School Diploma",
    school: "St. Joseph's Catholic High School",
    notes: [
      "Honour Roll · 89% average",
      "Robotics team — FIRST Robotics Competition",
    ],
  },
];
