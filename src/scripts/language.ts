import { CONTENT } from "../i18n/content";
import { EXPERIENCE_ENTRIES } from "../i18n/experience";
import type { Locale } from "../i18n/types";
import { getPreferredLocale } from "./detect-preferences";

export function getLocale(): Locale {
  const dataset = document.documentElement.dataset.locale;
  if (dataset === "en" || dataset === "ru") return dataset;
  return getPreferredLocale();
}

function updateToggleUI(locale: Locale) {
  const toggle = document.getElementById("language-toggle");
  if (!toggle) return;

  toggle.dataset.locale = locale;
  toggle.setAttribute(
    "aria-label",
    locale === "en" ? "Switch to Russian" : "Switch to English",
  );
}

function applyHeader(content: (typeof CONTENT)["en"]) {
  document.querySelectorAll<HTMLElement>("[data-i18n='header.tagline']").forEach(
    (el) => {
      el.textContent = content.header.tagline;
    },
  );

  document.querySelectorAll<HTMLElement>("[data-i18n='header.emailMe']").forEach(
    (el) => {
      el.textContent = content.header.emailMe;
    },
  );

  document
    .getElementById("social-links")
    ?.setAttribute("aria-label", content.header.socialAria);

  document.querySelector(".site-nav")?.setAttribute(
    "aria-label",
    content.header.navAria,
  );

  document
    .querySelectorAll<HTMLElement>("[data-i18n-social]")
    .forEach((el) => {
      const name = el.getAttribute("data-i18n-social");
      if (name) {
        el.setAttribute("aria-label", content.header.socialLinkAria(name));
      }
    });
}

function applyNav(content: (typeof CONTENT)["en"]) {
  content.nav.forEach((item, index) => {
    document
      .querySelectorAll<HTMLElement>(`[data-i18n='nav.${index}.label']`)
      .forEach((el) => {
        el.textContent = item.label;
      });
  });
}

function applySections(content: (typeof CONTENT)["en"]) {
  const mappings: Array<[string, string]> = [
    ["sections.about.title", content.sections.about.title],
    ["sections.experience.title", content.sections.experience.title],
    ["sections.resume.title", content.sections.resume.title],
    ["sections.resume.link", content.sections.resume.link],
  ];

  mappings.forEach(([key, value]) => {
    document.querySelectorAll<HTMLElement>(`[data-i18n='${key}']`).forEach(
      (el) => {
        el.textContent = value;
      },
    );
  });

  const ariaMappings: Array<[string, string]> = [
    ["#about", content.sections.about.aria],
    ["#experience", content.sections.experience.aria],
    ["#resume", content.sections.resume.aria],
  ];

  ariaMappings.forEach(([selector, value]) => {
    document.querySelector<HTMLElement>(selector)?.setAttribute("aria-label", value);
  });

  document
    .querySelector<HTMLElement>("[data-i18n='sections.resume.link']")
    ?.setAttribute("aria-label", content.sections.resume.linkAria);
}

function applyAbout(content: (typeof CONTENT)["en"]) {
  document.querySelectorAll<HTMLElement>("[data-i18n='about.p1']").forEach(
    (el) => {
      el.textContent = content.about.p1;
    },
  );
  document.querySelectorAll<HTMLElement>("[data-i18n='about.p2']").forEach(
    (el) => {
      el.textContent = content.about.p2;
    },
  );
}

function applyExperience(locale: Locale) {
  EXPERIENCE_ENTRIES.forEach((entry, index) => {
    const t = entry[locale];

    document
      .querySelectorAll<HTMLElement>(`[data-i18n='experience.${index}.dates']`)
      .forEach((el) => {
        el.textContent = t.dates;
      });

    document
      .querySelectorAll<HTMLElement>(`[data-i18n='experience.${index}.title']`)
      .forEach((el) => {
        el.textContent = t.title;
        el.closest("a")?.setAttribute("aria-label", t.title);
      });

    document
      .querySelectorAll<HTMLElement>(
        `[data-i18n='experience.${index}.description']`,
      )
      .forEach((el) => {
        el.textContent = t.description;
      });

    t.highlights.forEach((highlight, highlightIndex) => {
      document
        .querySelectorAll<HTMLElement>(
          `[data-i18n='experience.${index}.highlights.${highlightIndex}']`,
        )
        .forEach((el) => {
          el.textContent = highlight;
        });
    });
  });
}

function applyMeta(content: (typeof CONTENT)["en"]) {
  document.title = content.meta.title;

  document.querySelectorAll<HTMLElement>("[data-i18n='meta.title']").forEach(
    (el) => {
      el.textContent = content.meta.title;
    },
  );

  document
    .querySelectorAll<HTMLImageElement>("[data-i18n-alt='meta.title']")
    .forEach((el) => {
      el.alt = content.meta.title;
    });

  const meta = document.querySelector<HTMLMetaElement>(
    'meta[name="description"]',
  );
  if (meta) meta.content = content.meta.description;
}

export function setLocale(locale: Locale) {
  const content = CONTENT[locale];

  document.documentElement.lang = locale;
  document.documentElement.dataset.locale = locale;
  localStorage.setItem("locale", locale);

  applyHeader(content);
  applyNav(content);
  applySections(content);
  applyAbout(content);
  applyExperience(locale);
  applyMeta(content);
  updateToggleUI(locale);

  window.dispatchEvent(new CustomEvent("localechange", { detail: { locale } }));
}

export function initLanguage() {
  const locale = getPreferredLocale();
  document.documentElement.lang = locale;
  document.documentElement.dataset.locale = locale;

  if (locale !== "en") {
    setLocale(locale);
  } else {
    updateToggleUI("en");
  }

  document.getElementById("language-toggle")?.addEventListener("click", () => {
    setLocale(getLocale() === "en" ? "ru" : "en");
  });
}
