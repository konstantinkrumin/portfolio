import type { ExperienceEntry } from "./types";

export const EXPERIENCE_ENTRIES: ExperienceEntry[] = [
  {
    company: "Intellitix",
    companyUrl: "https://www.intellitix.com/",
    logo: "/logos/intellitix.jpeg",
    technologies: ["Typescript", "React Native", "React", "Kotlin", "Swift"],
    en: {
      dates: "2025 - Now",
      title: "Senior Mobile Engineer",
      description:
        "Intellitix provides RFID access control, cashless POS, and event operations software for festivals, sports venues, and conventions — high-throughput environments where real-time reliability is critical.",
      highlights: [
        "Build React Native apps for POS and access control with RFID entry validation and cashless payments",
        "Develop React and TypeScript web apps for event configuration and operational dashboards",
        "Integrate RFID systems and native Kotlin/Swift for performance-critical functionality",
      ],
    },
    ru: {
      dates: "2025 — н.в.",
      title: "Старший мобильный инженер",
      description:
        "Intellitix разрабатывает системы RFID-контроля доступа, безналичных расчётов и операционного ПО для фестивалей, спортивных арен и конференций — сред, где критичны стабильность и скорость отклика в реальном времени.",
      highlights: [
        "Разрабатываю приложения на React Native для POS и контроля доступа: проверка входа по RFID и безналичная оплата",
        "Делаю веб-приложения на React и TypeScript для настройки мероприятий и операционных панелей",
        "Подключаю RFID-системы и нативные модули на Kotlin/Swift там, где важна производительность",
      ],
    },
  },
  {
    company: "BorderPass",
    companyUrl: "https://www.borderpass.ca/",
    logo: "/logos/borderpass.jpg",
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
    en: {
      dates: "2023 — 2025",
      title: "Software Developer / Team Lead",
      description:
        "BorderPass is a legal tech startup simplifying the visa journey for international students in Canada. I progressed from full-stack developer to team lead, owning immigration workflows end to end.",
      highlights: [
        "Led developers delivering immigration application flows from requirements through deployment",
        "Revamped application processing streams — UI and business logic for a faster, clearer experience",
        "Built Permanent Residency flow with Stripe payments and integrated GoodData analytics",
        "Established engineering practices through code reviews, mentoring, and sprint planning",
      ],
    },
    ru: {
      dates: "2023 — 2025",
      title: "Разработчик · руководитель команды",
      description:
        "BorderPass — стартап в сфере legal tech, который упрощает оформление виз для иностранных студентов в Канаде. Прошёл путь от fullstack-разработчика до руководителя команды и отвечал за иммиграционные процессы на всём цикле — от постановки задачи до релиза.",
      highlights: [
        "Руководил разработчиками при создании сценариев подачи иммиграционных заявок — от требований до вывода в прод",
        "Переработал процессы обработки заявок: интерфейс и бизнес-логика стали понятнее и быстрее",
        "Собрал сценарий получения постоянного резидентства (PR) с оплатой через Stripe и подключил аналитику GoodData",
        "Наладил инженерные практики: ревью кода, менторство, планирование спринтов",
      ],
    },
  },
  {
    company: "Hölmetrics",
    companyUrl: "https://holmetrics.com/",
    logo: "/logos/holmetrics.jpg",
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
    en: {
      dates: "2021 - 2023",
      title: "Fullstack Developer",
      description:
        "Hölmetrics delivers enterprise employee experience and organizational performance analytics, helping leaders make real-time, data-informed decisions.",
      highlights: [
        "Led action plans — HR data visualizations with full-stack UI and backend API development",
        "Built interactive Highcharts dashboards for organizational data analysis",
        "Owned UI, backend APIs, and AWS infrastructure across the development lifecycle",
      ],
    },
    ru: {
      dates: "2021 — 2023",
      title: "Fullstack-разработчик",
      description:
        "Hölmetrics — платформа аналитики вовлечённости сотрудников и эффективности организаций для корпоративных клиентов; помогает руководителям принимать решения на основе актуальных данных.",
      highlights: [
        "Возглавил разработку модуля action plans — визуализация HR-данных, интерфейс и серверная часть",
        "Сделал интерактивные отчёты на Highcharts для анализа показателей организации",
        "Отвечал за интерфейс, backend API и инфраструктуру в AWS на всех этапах разработки",
      ],
    },
  },
  {
    company: "ICL Services",
    companyUrl: "https://icl-services.com/eng/",
    logo: "/logos/icl_services.jpg",
    technologies: [
      "Typescript",
      "Javascript",
      "React",
      "Redux",
      "MobX",
      "Material UI",
    ],
    en: {
      dates: "2020 - 2021",
      title: "Frontend Developer",
      description:
        "ICL Services is a project-based IT outsourcing company. As sole frontend developer, I delivered admin and customer-facing flows from Figma prototypes through production.",
      highlights: [
        "Built admin dashboard from scratch — claims, complaints, and real-time chat",
        "Developed customer inquiry flows aligned with business analysts and backend engineers",
        "Shipped responsive UI from Figma using React, TypeScript, Redux, and Material UI",
      ],
    },
    ru: {
      dates: "2020 — 2021",
      title: "Фронтенд-разработчик",
      description:
        "ICL Services — проектная IT-аутсорсинговая компания. Будучи единственным фронтенд-разработчиком на проекте, реализовал админку и клиентские сценарии — от макетов в Figma до релиза.",
      highlights: [
        "С нуля разработал административную панель: претензии, обращения и чат в реальном времени",
        "Спроектировал клиентский сценарий обработки заявок совместно с аналитиками и backend-разработчиками",
        "Сверстал адаптивный интерфейс по Figma на React, TypeScript, Redux и Material UI",
      ],
    },
  },
];
