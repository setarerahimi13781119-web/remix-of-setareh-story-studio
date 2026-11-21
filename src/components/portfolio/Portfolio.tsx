import { useEffect, useRef, useState, type CSSProperties, type PointerEvent, type ReactNode } from "react";
import { about, capabilities, experience, profile } from "@/data/portfolio";
import { SelectedWork } from "./SelectedWork";

const nav = [
  { href: "#work", label: "Work" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Keep content visible in browsers that do not support IntersectionObserver.
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => e?.isIntersecting && (setVisible(true), io.disconnect()),
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} data-visible={visible} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

function SectionHead({ index, title, id }: { index: string; title: string; id: string }) {
  return (
    <div className="grid grid-cols-12 gap-6 border-t border-rule pt-5 pb-12 md:pb-16">
      <p className="eyebrow col-span-4 md:col-span-3">§ {index}</p>
      <h2
        id={id}
        className="col-span-8 md:col-span-9 font-display text-4xl md:text-6xl leading-none tracking-tight"
      >
        {title}
      </h2>
    </div>
  );
}

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
  return (
    <header className="pm-header sticky top-0 z-50 border-b backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
        <BrandMark />
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="pm-nav-link">{n.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <button
          className="md:hidden eyebrow text-foreground"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="md:hidden border-t border-border animate-in fade-in slide-in-from-top-2 duration-200">
          <ul className="px-5 py-4">
            {nav.map((n) => (
              <li key={n.href} className="border-b border-border last:border-0">
                <a href={n.href} onClick={() => setOpen(false)} className="block py-3 font-display text-2xl">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

type Bubble = { id: number; x: number; y: number; size: number; drift: number };

export function Hero() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const bubbleId = useRef(0);
  const bubbleTimers = useRef<number[]>([]);
  const artRef = useRef<HTMLDivElement>(null);

  useEffect(() => () => bubbleTimers.current.forEach(window.clearTimeout), []);

  const moveArt = (event: PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    event.currentTarget.style.setProperty("--move-x", `${-x * 22}px`);
    event.currentTarget.style.setProperty("--move-y", `${-y * 22}px`);
  };

  const releaseBubbles = (event: PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    const burst = Array.from({ length: 7 }, (_, index) => ({
      id: ++bubbleId.current,
      x: x + (Math.random() - 0.5) * 10,
      y: y + (Math.random() - 0.5) * 8,
      size: 4 + Math.random() * 7,
      drift: (Math.random() - 0.5) * 34,
    }));
    setBubbles((current) => [...current.slice(-20), ...burst]);
    const timer = window.setTimeout(() => {
      const ids = new Set(burst.map((bubble) => bubble.id));
      setBubbles((current) => current.filter((bubble) => !ids.has(bubble.id)));
    }, 1500);
    bubbleTimers.current.push(timer);
  };

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="pm-hero mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 overflow-hidden px-5 py-16 md:grid-cols-12 md:gap-6 md:px-10 md:py-24 lg:py-28"
    >
      <Reveal className="col-span-1 md:col-span-7">
        <div className="pm-hero-eyebrow eyebrow mb-8 flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
          <span>§ 00 / PORTFOLIO — {new Date().getFullYear()}</span>
        </div>
        <h1 id="hero-title" className="pm-hero-title text-[clamp(3.5rem,10vw,8.8rem)]">
          PLAYFUL<br />
          <span className="pm-hero-title-accent">MATTER</span>
        </h1>
        <p className="mt-8 font-display text-2xl font-semibold tracking-tight md:text-3xl">
          Ideas in motion.
        </p>
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground md:text-base">
          Creative Direction · Video Editing · Visual Storytelling
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#work" className="pm-cta-primary inline-flex items-center gap-3 px-6 py-3 text-sm font-semibold">
            Explore Selected Work <span aria-hidden="true">↓</span>
          </a>
          <a href="#contact" className="pm-cta-secondary inline-flex items-center gap-3 px-6 py-3 text-sm font-semibold">
            Let’s Connect <span aria-hidden="true">↗</span>
          </a>
        </div>
        <p className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
          {profile.availability}
        </p>
      </Reveal>

      <Reveal className="col-span-1 md:col-span-5">
        <div
          ref={artRef}
          className="pm-hero-art"
          onPointerMove={moveArt}
          onPointerLeave={(event) => {
            event.currentTarget.style.setProperty("--move-x", "0px");
            event.currentTarget.style.setProperty("--move-y", "0px");
          }}
          onPointerDown={(event) => {
            moveArt(event);
            releaseBubbles(event);
          }}
          onTouchStart={(event) => {
            const touch = event.touches[0];
            if (!touch) return;
            const rect = event.currentTarget.getBoundingClientRect();
            const x = (touch.clientX - rect.left) / rect.width - 0.5;
            const y = (touch.clientY - rect.top) / rect.height - 0.5;
            event.currentTarget.style.setProperty("--move-x", `${-x * 22}px`);
            event.currentTarget.style.setProperty("--move-y", `${-y * 22}px`);
          }}
          aria-label="Interactive abstract Playful Matter sculpture. Touch or click to release small bubbles."
        >
          <div className="pm-sculpture-motion">
          <img
            className="pm-sculpture"
            src="https://www.dropbox.com/scl/fi/qvqr9usadtyvlz88bhtzb/file_0000000031dc8210ab260c3660f34e9e.png?rlkey=yfkgjtljb3i3c1v3lykyaenl3&raw=1"
            alt="Abstract sculptural composition in the Playful Matter color palette"
            fetchPriority="high"
            onError={(event) => { event.currentTarget.style.visibility = "hidden"; }}
          />
          </div>
          {bubbles.map((bubble) => (
            <span
              key={bubble.id}
              className="pm-bubble"
              aria-hidden="true"
              style={{
                left: `${bubble.x}%`,
                top: `${bubble.y}%`,
                width: bubble.size,
                height: bubble.size,
                "--bubble-drift": `${bubble.drift}px`,
              } as CSSProperties}
            />
          ))}
          <span className="pm-art-index">PM — 001 / FORM STUDY</span>
        </div>
      </Reveal>
    </section>
  );
}

export function Work() {
  return (
    <section aria-labelledby="work" className="mx-auto max-w-7xl px-5 pb-28 md:px-10">
      <SectionHead index="01" title="Selected Work" id="work" />
      <SelectedWork />
    </section>
  );
}

export function Capabilities() {
  return (
    <section aria-labelledby="capabilities" className="mx-auto max-w-7xl px-5 pb-28 md:px-10">
      <SectionHead index="02" title="Areas of focus" id="capabilities" />
      <ol className="grid grid-cols-12 gap-x-6">
        {capabilities.map((c, i) => (
          <li key={c.name} className="col-span-12 md:col-start-4 md:col-span-9">
            <Reveal>
              <div className="group grid grid-cols-12 gap-4 border-b border-border py-6">
                <span className="eyebrow col-span-2 pt-2">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="col-span-10 md:col-span-5 font-display text-2xl md:text-3xl transition-colors group-hover:text-accent">
                  {c.name}
                </h3>
                <p className="col-span-10 col-start-3 md:col-span-5 text-sm text-muted-foreground leading-relaxed md:pt-2">
                  {c.note}
                </p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function Experience() {
  return (
    <section aria-labelledby="experience" className="mx-auto max-w-7xl px-5 pb-28 md:px-10">
      <SectionHead index="03" title="Experience" id="experience" />
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-start-4 md:col-span-9 space-y-12">
          {experience.map((e) => (
            <Reveal key={e.org}>
              <article className="grid gap-4 md:grid-cols-3">
                <p className="eyebrow md:pt-2">{e.period}</p>
                <div className="md:col-span-2">
                  <h3 className="font-display text-3xl">{e.role}</h3>
                  <p className="mt-1 text-accent">{e.org}</p>
                  <p className="mt-4 max-w-prose text-muted-foreground leading-relaxed">
                    {e.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section aria-labelledby="about" className="mx-auto max-w-7xl px-5 pb-28 md:px-10">
      <SectionHead index="04" title="About" id="about" />
      <Reveal>
        <div className="grid grid-cols-12 gap-6">
          <p className="col-span-12 md:col-start-4 md:col-span-6 font-display text-2xl md:text-3xl leading-snug">
            {about.bio}
          </p>
          <dl className="col-span-12 md:col-start-4 md:col-span-9 mt-8 grid gap-8 border-t border-border pt-8 sm:grid-cols-2">
            <div>
              <dt className="eyebrow">Education</dt>
              <dd className="mt-2">
                {about.education.degree}
                <br />
                <span className="text-muted-foreground">{about.education.school}</span>
                <br />
                <span className="text-muted-foreground">
                  {about.education.period} · {about.education.gpa}
                </span>
              </dd>
            </div>
            <div>
              <dt className="eyebrow">Languages</dt>
              {about.languages.map((l) => (
                <dd key={l.name} className="mt-2">
                  {l.name} <span className="text-muted-foreground">— {l.level}</span>
                </dd>
              ))}
            </div>
          </dl>
        </div>
      </Reveal>
    </section>
  );
}

export function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — mailto link remains */
    }
  };
  return (
    <footer
      id="contact"
      aria-labelledby="contact-title"
      className="bg-primary text-primary-foreground"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
        <p className="eyebrow text-primary-foreground/60">§ 05 — Contact</p>
        <h2
          id="contact-title"
          className="mt-6 font-display text-[clamp(3rem,9vw,7.5rem)] leading-[0.9] tracking-tight"
        >
          Let’s talk about <em>your story</em>.
        </h2>
        <div className="mt-12 flex flex-col gap-4 border-t border-primary-foreground/20 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <a
            href={`mailto:${profile.email}`}
            className="link-underline break-all font-display text-2xl md:text-4xl"
          >
            {profile.email}
          </a>
          <button
            onClick={copy}
            className="self-start border border-primary-foreground/40 px-4 py-2 text-sm transition-colors hover:bg-primary-foreground hover:text-primary"
          >
            {copied ? "Copied ✓" : "Copy email"}
          </button>
          <span className="sr-only" aria-live="polite">
            {copied ? "Email copied to clipboard" : ""}
          </span>
        </div>
        <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline"
          >
            LinkedIn ↗
          </a>
          <a href={profile.cv} target="_blank" rel="noopener noreferrer" className="link-underline">
            CV on JobVision ↗
          </a>
        </div>
        <div className="mt-20 flex flex-wrap justify-between gap-4 eyebrow text-primary-foreground/60">
          <span>© {new Date().getFullYear()} Setareh Rahimi</span>
          <a href="#top" className="link-underline">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
