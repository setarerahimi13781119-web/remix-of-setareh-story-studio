import { useEffect, useState } from "react";
import "./scroll-story.css";

const chapters = [
  { id: "top", number: "00", label: "Opening" },
  { id: "work", number: "01", label: "Selected work" },
  { id: "capabilities", number: "02", label: "Areas of focus" },
  { id: "experience", number: "03", label: "Experience" },
  { id: "about", number: "04", label: "About" },
  { id: "contact", number: "05", label: "Contact" },
];

export function ScrollStory() {
  const [active, setActive] = useState("top");

  useEffect(() => {
    const nodes = chapters
      .map((chapter) => document.getElementById(chapter.id))
      .filter((node): node is HTMLElement => Boolean(node));

    if (!("IntersectionObserver" in window) || nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const current = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (current) setActive(current.target.id);
      },
      { rootMargin: "-28% 0px -48% 0px", threshold: [0, 0.08, 0.2, 0.4, 0.65] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const activeIndex = Math.max(0, chapters.findIndex((chapter) => chapter.id === active));

  return (
    <nav className="scroll-story" aria-label="Page chapters">
      <div className="scroll-story__track" aria-hidden="true">
        <span style={{ transform: `scaleY(${(activeIndex + 1) / chapters.length})` }} />
      </div>
      <ol>
        {chapters.map((chapter) => {
          const isActive = chapter.id === active;
          return (
            <li key={chapter.id} data-active={isActive}>
              <a
                href={`#${chapter.id}`}
                aria-current={isActive ? "location" : undefined}
                aria-label={`${chapter.number} — ${chapter.label}`}
              >
                <span className="scroll-story__number">{chapter.number}</span>
                <span className="scroll-story__label">{chapter.label}</span>
                <i aria-hidden="true" />
              </a>
            </li>
          );
        })}
      </ol>
      <p className="scroll-story__current" aria-live="polite">
        <span>{chapters[activeIndex]?.number}</span>
        {chapters[activeIndex]?.label}
      </p>
    </nav>
  );
}
