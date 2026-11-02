import { useEffect, useRef, useState, type ReactNode } from "react";
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
      <h2 id={id} className="col-span-8 md:col-span-9 font-display text-4xl md:text-6xl leading-none tracking-tight">
        {title}
      </h2>
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
        <a href="#top" className="font-display text-xl tracking-tight">
          Setareh Rahimi<span className="text-accent">.</span>
        </a>
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex gap-8 text-sm">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="link-underline pb-0.5">{n.label}</a>
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

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="mx-auto max-w-7xl px-5 pt-16 pb-24 md:px-10 md:pt-28 md:pb-36">
      <Reveal>
        <div className="grid grid-cols-12 gap-6">
          <p className="eyebrow col-span-12 md:col-span-3 md:pt-6">Portfolio — {new Date().getFullYear()}</p>
          <div className="col-span-12 md:col-span-9">
            <h1 id="hero-title" className="font-display text-[clamp(3.5rem,12vw,10rem)] leading-[0.88] tracking-[-0.02em]">
              Setareh<br />
              <em className="text-accent">Rahimi</em>
            </h1>
            <div className="mt-12 grid gap-8 border-t border-rule pt-6 md:grid-cols-2">
              <div>
                <p className="font-display text-2xl md:text-3xl">{profile.headline}</p>
                <p className="mt-3 max-w-md text-muted-foreground leading-relaxed">{profile.intro}</p>
              </div>
              <div className="flex flex-col justify-between gap-8">
                <div className="flex flex-wrap gap-3">
                  <a href="#work" className="group inline-flex items-center gap-2 bg-primary px-5 py-3 text-sm text-primary-foreground transition-colors hover:bg-accent">
                    Explore selected work <span aria-hidden className="transition-transform group-hover:translate-y-0.5">↓</span>
                  </a>
                  <a href="#contact" className="inline-flex items-center border border-foreground px-5 py-3 text-sm transition-colors hover:bg-foreground hover:text-background">
                    Contact
                  </a>
                </div>
                <p className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {profile.availability}
                </p>
              </div>
            </div>
          </div>
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
                <h3 className="col-span-10 md:col-span-5 font-display text-2xl md:text-3xl transition-colors group-hover:text-accent">{c.name}</h3>
                <p className="col-span-10 col-start-3 md:col-span-5 text-sm text-muted-foreground leading-relaxed md:pt-2">{c.note}</p>
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
                  <p className="mt-4 max-w-prose text-muted-foreground leading-relaxed">{e.description}</p>
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
                {about.education.degree}<br />
                <span className="text-muted-foreground">{about.education.school}</span><br />
                <span className="text-muted-foreground">{about.education.period} · {about.education.gpa}</span>
              </dd>
            </div>
            <div>
              <dt className="eyebrow">Languages</dt>
              {about.languages.map((l) => (
                <dd key={l.name} className="mt-2">{l.name} <span className="text-muted-foreground">— {l.level}</span></dd>
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
    <footer id="contact" aria-labelledby="contact-title" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
        <p className="eyebrow text-primary-foreground/60">§ 05 — Contact</p>
        <h2 id="contact-title" className="mt-6 font-display text-[clamp(3rem,9vw,7.5rem)] leading-[0.9] tracking-tight">
          Let’s talk about <em>your story</em>.
        </h2>
        <div className="mt-12 flex flex-col gap-4 border-t border-primary-foreground/20 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <a href={`mailto:${profile.email}`} className="link-underline break-all font-display text-2xl md:text-4xl">
            {profile.email}
          </a>
          <button
            onClick={copy}
            className="self-start border border-primary-foreground/40 px-4 py-2 text-sm transition-colors hover:bg-primary-foreground hover:text-primary"
          >
            {copied ? "Copied ✓" : "Copy email"}
          </button>
          <span className="sr-only" aria-live="polite">{copied ? "Email copied to clipboard" : ""}</span>
        </div>
        <div className="mt-20 flex flex-wrap justify-between gap-4 eyebrow text-primary-foreground/60">
          <span>© {new Date().getFullYear()} Setareh Rahimi</span>
          <a href="#top" className="link-underline">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
