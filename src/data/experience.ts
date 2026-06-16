import type { Props as ExperienceProp } from "../components/experience/props";

export const EXPERIENCE: ExperienceProp[] = [
  {
    dates: "2025 - Now",
    title: "Senior Mobile Engineer",
    company: "Intellitix",
    companyUrl: "https://www.intellitix.com/",
    description:
      "Intellitix provides RFID access control, cashless POS, and event operations software for festivals, sports venues, and conventions — high-throughput environments where real-time reliability is critical.",
    highlights: [
      "Build React Native apps for POS and access control with RFID entry validation and cashless payments",
      "Develop React and TypeScript web apps for event configuration and operational dashboards",
      "Integrate RFID systems and native Kotlin/Swift for performance-critical functionality",
    ],
    technologies: ["Typescript", "React Native", "React", "Kotlin", "Swift"],
    logo: "/logos/intellitix.jpeg",
  },
  {
    dates: "2023 — 2025",
    title: "Software Developer / Team Lead",
    company: "BorderPass",
    companyUrl: "https://www.borderpass.ca/",
    description:
      "BorderPass is a legal tech startup simplifying the visa journey for international students in Canada. I progressed from full-stack developer to team lead, owning immigration workflows end to end.",
    highlights: [
      "Led developers delivering immigration application flows from requirements through deployment",
      "Revamped application processing streams — UI and business logic for a faster, clearer experience",
      "Built Permanent Residency flow with Stripe payments and integrated GoodData analytics",
      "Established engineering practices through code reviews, mentoring, and sprint planning",
    ],
    technologies: [
      "Typescript",
      "React",
      "Node.js",
      "Next.js",
      "GraphQL",
      "Sequelize",
      "PostgreSQL",
      "Jest",
      "AWS",
    ],
    logo: "/logos/borderpass.jpg",
  },
  {
    dates: "2021 - 2023",
    title: "Fullstack Developer",
    company: "Hölmetrics",
    companyUrl: "https://holmetrics.com/",
    description:
      "Hölmetrics delivers enterprise employee experience and organizational performance analytics, helping leaders make real-time, data-informed decisions.",
    highlights: [
      "Led action plans — HR data visualizations with full-stack UI and backend API development",
      "Built interactive Highcharts dashboards for organizational data analysis",
      "Owned UI, backend APIs, and AWS infrastructure across the development lifecycle",
    ],
    technologies: [
      "Typescript",
      "Javascript",
      "React",
      "Redux",
      "Node.js",
      "Express.js",
      "TailwindCSS",
      "Highcharts",
      "MySQL",
      "AWS",
    ],
    logo: "/logos/holmetrics.jpg",
  },
  {
    dates: "2020 - 2021",
    title: "Frontend Developer",
    company: "ICL Services",
    companyUrl: "https://icl-services.com/eng/",
    description:
      "ICL Services is a project-based IT outsourcing company. As sole frontend developer, I delivered admin and customer-facing flows from Figma prototypes through production.",
    highlights: [
      "Built admin dashboard from scratch — claims, complaints, and real-time chat",
      "Developed customer inquiry flows aligned with business analysts and backend engineers",
      "Shipped responsive UI from Figma using React, TypeScript, Redux, and Material UI",
    ],
    technologies: [
      "Typescript",
      "Javascript",
      "React",
      "Redux",
      "MobX",
      "Material UI",
    ],
    logo: "/logos/icl_services.jpg",
  },
];
