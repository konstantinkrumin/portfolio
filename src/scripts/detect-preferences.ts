export type Theme = "light" | "dark";
export type Locale = "en" | "ru";

export function detectTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function detectLocale(): Locale {
  const languages =
    navigator.languages?.length > 0
      ? navigator.languages
      : [navigator.language];

  const prefersRussian = languages.some(
    (language) => language.toLowerCase().split("-")[0] === "ru",
  );

  return prefersRussian ? "ru" : "en";
}

export function getPreferredTheme(): Theme {
  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  return detectTheme();
}

export function getPreferredLocale(): Locale {
  const stored = localStorage.getItem("locale");
  if (stored === "en" || stored === "ru") return stored;
  return detectLocale();
}

export function applyThemePreference(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.style.colorScheme = theme;
}

export function applyLocalePreference(locale: Locale) {
  document.documentElement.lang = locale;
  document.documentElement.dataset.locale = locale;
}
