import { useEffect, useRef, useState } from "react";

const nav = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function BrandMark() {
  return (
    <a href="#top" className="pm-brand" aria-label="Setareh Rahimi — Back to top">
      <svg className="pm-brand-mark" viewBox="0 0 42 42" fill="none" aria-hidden="true">
        <path d="M18.7 8.2C15.4 5.8 8.2 6.4 7.1 11.2C5.9 16.4 13.1 17.4 18.2 20.1C23.4 22.9 23.3 30.1 17.5 33.2C12.7 35.8 6.9 33.8 5.2 30.9" stroke="#243E24" strokeWidth="5" strokeLinecap="round" />
        <path d="M23.5 34V8.5H29.3C35.5 8.5 37.1 17.1 31.4 19.8L23.5 23.5" stroke="#9EB67A" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M27.2 22.1L36.5 34" stroke="#9EB67A" strokeWidth="4" strokeLinecap="round" />
        <path d="M5 7.5C8.1 4.4 11.2 3.2 14.7 3.5" stroke="#C12864" strokeWidth="2" strokeLinecap="round" />
        <circle cx="36.5" cy="6.5" r="2.5" fill="#C12864" />
      </svg>
      <span>Setareh Rahimi</span>
    </a>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);
  return (
    <header className="pm-header sticky top-0 z-50 border-b backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
        <BrandMark />
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="pm-nav-link">{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <button
          ref={menuButtonRef}
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          className="md:hidden eyebrow text-foreground"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="md:hidden border-t border-border">
          <ul className="px-5 py-4">
            {nav.map((item) => (
              <li key={item.href} className="border-b border-border last:border-0">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-display text-2xl"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
