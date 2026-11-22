import { useRef, useState, type CSSProperties, type PointerEvent } from "react";
import { profile } from "@/data/portfolio";
import { Reveal } from "./shared";

const artwork = "https://www.dropbox.com/scl/fi/qvqr9usadtyvlz88bhtzb/file_0000000031dc8210ab260c3660f34e9e.png?rlkey=yfkgjtljb3i3c1v3lykyaenl3&raw=1";

const floatingPieces = [
  { className: "pm-piece-left-flower", label: "Move the pink flower" },
  { className: "pm-piece-top-form", label: "Move the top green form" },
  { className: "pm-piece-right-flower", label: "Move the right pink flower" },
  { className: "pm-piece-right-loop", label: "Move the green loop" },
  { className: "pm-piece-left-loop", label: "Move the left green form" },
];

function FloatingImagePiece({ className, label }: { className: string; label: string }) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);
  const origin = useRef({ pointerX: 0, pointerY: 0 });

  const start = (event: PointerEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);
    origin.current = { pointerX: event.clientX, pointerY: event.clientY };
    setActive(true);
    setOffset({ x: 4, y: -6 });
  };

  const move = (event: PointerEvent<HTMLButtonElement>) => {
    if (!active) return;
    const dx = event.clientX - origin.current.pointerX;
    const dy = event.clientY - origin.current.pointerY;
    setOffset({
      x: Math.max(-58, Math.min(58, dx + 4)),
      y: Math.max(-58, Math.min(58, dy - 6)),
    });
  };

  const release = () => {
    if (!active) return;
    setActive(false);
    setOffset({ x: 0, y: 0 });
  };

  return (
    <button
      type="button"
      className={`pm-floating-piece ${className}${active ? " is-active" : ""}`}
      aria-label={label}
      onPointerDown={start}
      onPointerMove={move}
      onPointerUp={release}
      onPointerCancel={release}
      onLostPointerCapture={release}
      style={{ "--piece-x": `${offset.x}px`, "--piece-y": `${offset.y}px` } as CSSProperties}
    >
      <img src={artwork} alt="" draggable={false} />
    </button>
  );
}

export function Hero() {
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
          <div className="pm-sculpture-stage">
            <img
              className="pm-sculpture"
              src={artwork}
              alt="Playful Matter visual identity artwork"
              fetchPriority="high"
              draggable={false}
              onError={(event) => { event.currentTarget.style.visibility = "hidden"; }}
            />
            {floatingPieces.map((piece) => (
              <FloatingImagePiece key={piece.className} {...piece} />
            ))}
          </div>
          <div className="pm-portrait-wrap">
            <video
              className="pm-portrait-video"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Animated portrait"
            >
              <source
                src="https://www.dropbox.com/scl/fi/9mcod1ulkfy8jej9eyjdk/904378526_1795363121570568.mp4?rlkey=hww5vo4rfmhnjp1kto3w93mko&raw=1"
                type="video/mp4"
              />
            </video>
          </div>
          <span className="pm-art-index">PM — 001 / FORM STUDY</span>
        </div>
      </Reveal>
    </section>
  );
}
