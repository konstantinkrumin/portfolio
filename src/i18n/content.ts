import type { Locale, LocaleContent } from "./types";

export const CONTENT: Record<Locale, LocaleContent> = {
  en: {
    meta: {
      title: "Konstantin Krumin",
      description:
        "Senior software engineer focused on mobile and frontend development. TypeScript, React Native, React, Node.js.",
    },
    header: {
      tagline: "Senior Developer @ Intellitix",
      emailMe: "Email me",
      socialAria: "Social media",
      navAria: "In-page navigation",
      socialLinkAria: (name) => `${name} (opens in a new tab)`,
    },
    nav: [
      { label: "About", href: "#about" },
      { label: "Experience", href: "#experience" },
      { label: "Resume", href: "#resume" },
    ],
    sections: {
      about: { title: "About", aria: "About me" },
      experience: { title: "Experience", aria: "Work experience" },
      resume: {
        title: "Resume",
        aria: "Resume",
        link: "View Full Resume",
        linkAria: "View Full Résumé",
      },
    },
    about: {
      p1: "I'm a senior software engineer focused on mobile and frontend development, building production apps with TypeScript, React Native, and React. I work across the full stack when needed — from intuitive UIs to the APIs and integrations behind them — with experience shipping reliable software in fast-moving, real-time environments.",
      p2: "Currently at Intellitix, building event technology used on-site at scale. Open to interesting projects and conversations around mobile, frontend, and product engineering.",
    },
  },
  ru: {
    meta: {
      title: "Константин Крумин",
      description:
        "Старший инженер-программист: мобильная и фронтенд-разработка. TypeScript, React Native, React, Node.js.",
    },
    header: {
      tagline: "Старший разработчик · Intellitix",
      emailMe: "Написать мне",
      socialAria: "Социальные сети",
      navAria: "Навигация по странице",
      socialLinkAria: (name) => `${name} (откроется в новой вкладке)`,
    },
    nav: [
      { label: "Обо мне", href: "#about" },
      { label: "Опыт", href: "#experience" },
      { label: "Резюме", href: "#resume" },
    ],
    sections: {
      about: { title: "Обо мне", aria: "Обо мне" },
      experience: { title: "Опыт", aria: "Опыт работы" },
      resume: {
        title: "Резюме",
        aria: "Резюме",
        link: "Смотреть резюме",
        linkAria: "Открыть полное резюме",
      },
    },
    about: {
      p1: "Я старший инженер-программист с упором на мобильную и фронтенд-разработку. Создаю продуктовые приложения на TypeScript, React Native и React. При необходимости закрываю задачи полного цикла — от интерфейсов до API и интеграций — и имею опыт запуска стабильных решений в средах с высокой нагрузкой и жёсткими требованиями к отзывчивости.",
      p2: "Сейчас работаю в Intellitix над технологиями для массовых очных мероприятий. Открыт к интересным проектам и профессиональному общению о мобильной разработке, фронтенде и продуктовой инженерии.",
    },
  },
};

export const DEFAULT_LOCALE: Locale = "en";
