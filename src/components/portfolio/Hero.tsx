import { useEffect, useRef, useState, type CSSProperties, type PointerEvent, type ReactNode } from "react";
import { profile } from "@/data/portfolio";
import { Reveal } from "./shared";

type Bubble = { id: number; x: number; y: number; size: number; drift: number };

function InteractiveObject({
  className,
  children,
  onPop,
  label,
}: {
  className: string;
  children: ReactNode;
  onPop: (x: number, y: number) => void;
  label: string;
}) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const origin = useRef({ x: 0, y: 0, pointerX: 0, pointerY: 0 });

  const start = (event: PointerEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);
    origin.current = { x: offset.x, y: offset.y, pointerX: event.clientX, pointerY: event.clientY };
    setDragging(true);
  };

  const move = (event: PointerEvent<HTMLButtonElement>) => {
    if (!dragging) return;
    setOffset({
      x: Math.max(-72, Math.min(72, origin.current.x + event.clientX - origin.current.pointerX)),
      y: Math.max(-72, Math.min(72, origin.current.y + event.clientY - origin.current.pointerY)),
    });
  };

  const release = (event: PointerEvent<HTMLButtonElement>) => {
    if (!dragging) return;
    const bounds = event.currentTarget.parentElement?.getBoundingClientRect();
    if (bounds) {
      onPop(
        ((event.clientX - bounds.left) / bounds.width) * 100,
        ((event.clientY - bounds.top) / bounds.height) * 100,
      );
    }
    setDragging(false);
    setOffset({ x: 0, y: 0 });
  };

  return (
    <button
      type="button"
      className={`pm-play-object ${className}${dragging ? " is-dragging" : ""}`}
      aria-label={label}
      onPointerDown={start}
      onPointerMove={move}
      onPointerUp={release}
      onPointerCancel={release}
      onClick={(event) => {
        if (event.detail !== 0) return;
        const bounds = event.currentTarget.parentElement?.getBoundingClientRect();
        if (bounds) onPop(
          ((event.clientX - bounds.left) / bounds.width) * 100,
          ((event.clientY - bounds.top) / bounds.height) * 100,
        );
      }}
      style={{ "--object-x": `${offset.x}px`, "--object-y": `${offset.y}px` } as CSSProperties}
    >
      {children}
    </button>
  );
}

export function Hero() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const bubbleId = useRef(0);
  const bubbleTimers = useRef<number[]>([]);

  useEffect(() => () => bubbleTimers.current.forEach(window.clearTimeout), []);

  const releaseBubbles = (x: number, y: number) => {
    const burst = Array.from({ length: 7 }, () => ({
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
      bubbleTimers.current = bubbleTimers.current.filter((id) => id !== timer);
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
          PLAYFUL
          <br />
          <span className="pm-hero-title-accent">MATTER</span>
        </h1>
        <p className="mt-8 font-display text-2xl font-semibold tracking-tight md:text-3xl">
          Ideas in motion.
        </p>
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground md:text-base">
          Creative Direction · Video Editing · Visual Storytelling
        </p>
        <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap">
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
        <div className="pm-hero-art">
          <div className="pm-sculpture-motion">
            <img
              className="pm-sculpture"
              src="https://www.dropbox.com/scl/fi/qvqr9usadtyvlz88bhtzb/file_0000000031dc8210ab260c3660f34e9e.png?rlkey=yfkgjtljb3i3c1v3lykyaenl3&raw=1"
              alt="Portrait surrounded by playful green, pink and cream sculptural forms"
              fetchPriority="high"
              onError={(event) => { event.currentTarget.style.visibility = "hidden"; }}
            />
          </div>

          <InteractiveObject className="pm-object-loop" label="Move pink ribbon shape" onPop={releaseBubbles}>
            <svg viewBox="0 0 100 100" aria-hidden="true"><path d="M18 54C18 28 37 12 59 18C83 24 91 50 76 69C64 85 39 88 25 74C16 65 20 50 33 43C46 36 61 42 62 54C63 64 52 70 44 64" fill="none" stroke="#D92F78" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round"/><path d="M21 49C23 29 39 17 57 21" fill="none" stroke="#F7A7C6" strokeWidth="3" strokeLinecap="round"/></svg>
          </InteractiveObject>
          <InteractiveObject className="pm-object-orb" label="Move lime orb" onPop={releaseBubbles}>
            <svg viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="34" fill="#C8F34A"/><circle cx="38" cy="36" r="9" fill="#F4F1EA" opacity=".55"/><path d="M28 68C40 82 63 83 75 67" fill="none" stroke="#8DAF36" strokeWidth="4" strokeLinecap="round"/></svg>
          </InteractiveObject>
          <InteractiveObject className="pm-object-pill" label="Move green capsule" onPop={releaseBubbles}>
            <svg viewBox="0 0 120 72" aria-hidden="true"><rect x="8" y="8" width="104" height="56" rx="28" fill="#2E7D4B"/><path d="M30 22C42 12 69 12 84 22" fill="none" stroke="#A6D68A" strokeWidth="5" strokeLinecap="round"/></svg>
          </InteractiveObject>
          <InteractiveObject className="pm-object-disc" label="Move cream and pink disc" onPop={releaseBubbles}>
            <svg viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="39" fill="#F7E8D8"/><path d="M50 11A39 39 0 0 1 89 50H50Z" fill="#EF77A7"/><circle cx="50" cy="50" r="15" fill="#B6E34A"/></svg>
          </InteractiveObject>

          {bubbles.map((bubble) => (
            <span key={bubble.id} className="pm-bubble" aria-hidden="true" style={{
              left: `${bubble.x}%`, top: `${bubble.y}%`, width: bubble.size, height: bubble.size,
              "--bubble-drift": `${bubble.drift}px`,
            } as CSSProperties} />
          ))}
          <span className="pm-art-index">PM — 001 / FORM STUDY</span>
        </div>
      </Reveal>
    </section>
  );
}
