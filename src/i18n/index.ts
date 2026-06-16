import { CONTENT, DEFAULT_LOCALE } from "./content";
import { EXPERIENCE_ENTRIES } from "./experience";
import type { Locale } from "./types";
import type { Props as ExperienceProp } from "../components/experience/props";

export { CONTENT, DEFAULT_LOCALE } from "./content";
export { EXPERIENCE_ENTRIES } from "./experience";
export type { Locale } from "./types";

export function getExperience(locale: Locale = DEFAULT_LOCALE): ExperienceProp[] {
  return EXPERIENCE_ENTRIES.map((entry, index) => {
    const t = entry[locale];
    return {
      index,
      dates: t.dates,
      title: t.title,
      company: entry.company,
      companyUrl: entry.companyUrl,
      description: t.description,
      highlights: t.highlights,
      technologies: entry.technologies,
      logo: entry.logo,
    };
  });
}

export function getInitialLocale(): Locale {
  return DEFAULT_LOCALE;
}

export function getContent(locale: Locale = DEFAULT_LOCALE) {
  return CONTENT[locale];
}
