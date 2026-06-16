import type { Props as ExperienceProp } from "../components/experience/props";

export type Locale = "en" | "ru";

export interface ExperienceTranslation {
  dates: string;
  title: string;
  description: string;
  highlights: string[];
}

export interface ExperienceEntry {
  company: string;
  companyUrl: string;
  logo: string;
  technologies: string[];
  en: ExperienceTranslation;
  ru: ExperienceTranslation;
}

export interface LocaleContent {
  meta: {
    title: string;
    description: string;
  };
  header: {
    tagline: string;
    emailMe: string;
    socialAria: string;
    navAria: string;
    socialLinkAria: (name: string) => string;
  };
  nav: Array<{ label: string; href: string }>;
  sections: {
    about: { title: string; aria: string };
    experience: { title: string; aria: string };
    resume: { title: string; aria: string; link: string; linkAria: string };
  };
  about: {
    p1: string;
    p2: string;
  };
}

export type ExperiencePropWithIndex = ExperienceProp & { index: number };
