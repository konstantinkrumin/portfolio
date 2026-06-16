export type Theme = "light" | "dark";

export function getTheme(): Theme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function updateToggleUI() {
  const toggle = document.getElementById("theme-toggle");
  if (!toggle) return;

  const isDark = getTheme() === "dark";
  toggle.setAttribute("aria-pressed", String(isDark));
  toggle.dataset.theme = isDark ? "dark" : "light";
}

export function setTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.style.colorScheme = theme;
  localStorage.setItem("theme", theme);
  updateToggleUI();
  window.dispatchEvent(new CustomEvent("themechange", { detail: { theme } }));
}

export function initTheme() {
  document.getElementById("theme-toggle")?.addEventListener("click", () => {
    setTheme(getTheme() === "dark" ? "light" : "dark");
  });

  updateToggleUI();
}
