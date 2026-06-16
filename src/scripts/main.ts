import contextCursor from "../libs/context-cursor/index";

contextCursor({
  radius: 25,
});

function initScrollSpy() {
  const sections = Array.from(
    document.querySelectorAll<HTMLElement>("main section[id]"),
  );
  const navLinks = document.querySelectorAll<HTMLAnchorElement>("[data-nav-link]");

  if (!sections.length || !navLinks.length) return;

  function setActive(id: string) {
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
    });
  }

  function getSectionTop(section: HTMLElement) {
    return section.getBoundingClientRect().top + window.scrollY;
  }

  function getActiveSectionId() {
    const scrollBottom = window.scrollY + window.innerHeight;
    const pageBottom = document.documentElement.scrollHeight;

    // When scrolled to the bottom, highlight the last section (Resume)
    if (scrollBottom >= pageBottom - 2) {
      return sections[sections.length - 1].id;
    }

    const scrollMarker = window.scrollY + window.innerHeight * 0.35;
    let activeId = sections[0].id;

    for (const section of sections) {
      if (getSectionTop(section) <= scrollMarker) {
        activeId = section.id;
      }
    }

    return activeId;
  }

  function updateFromScroll() {
    setActive(getActiveSectionId());
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const href = link.getAttribute("href");
      if (href?.startsWith("#")) {
        setActive(href.slice(1));
      }
    });
  });

  window.addEventListener("scroll", updateFromScroll, { passive: true });
  window.addEventListener("hashchange", () => {
    const id = location.hash.slice(1);
    if (sections.some((section) => section.id === id)) {
      setActive(id);
    }
  });

  const hashId = location.hash.slice(1);
  if (hashId && sections.some((section) => section.id === hashId)) {
    setActive(hashId);
  } else {
    updateFromScroll();
  }
}

initScrollSpy();
