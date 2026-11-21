import { useEffect, useRef, useState, type CSSProperties, type PointerEvent } from "react";
import { profile } from "@/data/portfolio";
import { Reveal } from "./shared";

type Bubble = { id: number; x: number; y: number; size: number; drift: number };

export function Hero() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const bubbleId = useRef(0);
  const bubbleTimers = useRef<number[]>([]);

  useEffect(() => () => bubbleTimers.current.forEach(window.clearTimeout), []);

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
          <a
            href="#work"
            className="pm-cta-primary inline-flex items-center gap-3 px-6 py-3 text-sm font-semibold"
          >
            Explore Selected Work <span aria-hidden="true">↓</span>
          </a>
          <a
            href="#contact"
            className="pm-cta-secondary inline-flex items-center gap-3 px-6 py-3 text-sm font-semibold"
          >
            Let’s Connect <span aria-hidden="true">↗</span>
          </a>
        </div>
        <p className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
          {profile.availability}
        </p>
      </Reveal>

      <Reveal className="col-span-1 md:col-span-5">
        <div className="pm-hero-art" onPointerDown={releaseBubbles}>
          <div className="pm-sculpture-motion">
            <img
              className="pm-sculpture"
              src="https://www.dropbox.com/scl/fi/qvqr9usadtyvlz88bhtzb/file_0000000031dc8210ab260c3660f34e9e.png?rlkey=yfkgjtljb3i3c1v3lykyaenl3&raw=1"
              alt="Portrait surrounded by playful green, pink and cream sculptural forms"
              fetchPriority="high"
              onError={(event) => {
                event.currentTarget.style.visibility = "hidden";
              }}
            />
          </div>
          {bubbles.map((bubble) => (
            <span
              key={bubble.id}
              className="pm-bubble"
              aria-hidden="true"
              style={
                {
                  left: `${bubble.x}%`,
                  top: `${bubble.y}%`,
                  width: bubble.size,
                  height: bubble.size,
                  "--bubble-drift": `${bubble.drift}px`,
                } as CSSProperties
              }
            />
          ))}
          <span className="pm-art-index">PM — 001 / FORM STUDY</span>
        </div>
      </Reveal>
    </section>
  );
}
