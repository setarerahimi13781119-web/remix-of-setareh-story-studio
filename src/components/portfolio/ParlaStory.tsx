import { useEffect, useRef } from "react";

const imageSrc =
  "https://www.dropbox.com/scl/fi/8y91i4ep19hykupkpg3tj/lv_0_20261119214004.jpg?rlkey=yfk7l4lwc8pnxis336n27rpoz&raw=1";

const sparkles = Array.from({ length: 46 }, (_, i) => {
  const seed = (i * 37) % 100;
  return {
    id: i,
    x: (seed * 0.91 + 4) % 100,
    y: (i * 23 + 18) % 100,
    size: 2 + (i % 4),
    opacity: 0.25 + (i % 5) * 0.13,
    driftX: ((i % 7) - 3) * 9,
    driftY: -12 - (i % 6) * 7,
  };
});

export function ParlaStory() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const image = section.querySelector<HTMLElement>(".parla-story__image");
    const lightPath = section.querySelector<SVGPathElement>(".parla-story__light path");
    const intro = section.querySelector<HTMLElement>(".parla-story__intro");
    const caption = section.querySelector<HTMLElement>(".parla-story__caption");
    const scrollNote = section.querySelector<HTMLElement>(".parla-story__scroll-note");
    const particles = Array.from(section.querySelectorAll<HTMLElement>(".parla-story__sparkle"));
    let frame = 0;

    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (reducedMotion.matches) return;
        const range = section.offsetHeight - window.innerHeight;
        const progress = range > 0
          ? Math.min(1, Math.max(0, -section.getBoundingClientRect().top / range))
          : 0;

        if (image) {
          image.style.transform = `scale(${1.02 + progress * 0.13}) translateY(${progress * -1.5}%)`;
        }
        if (lightPath) {
          lightPath.style.strokeDashoffset = String(1200 * (1 - progress));
          lightPath.style.opacity = String(0.12 + progress * 0.82);
        }
        if (intro) {
          intro.style.opacity = String(0.25 + progress * 0.75);
          intro.style.transform = `translateY(${(1 - progress) * 28}px)`;
        }
        if (caption) {
          caption.style.opacity = String(progress);
          caption.style.transform = `translateY(${(1 - progress) * 16}px)`;
        }
        if (scrollNote) scrollNote.style.opacity = String(Math.max(0, 1 - progress * 1.6));

        particles.forEach((particle) => {
          const opacity = Number(particle.dataset.opacity || 0);
          const dx = Number(particle.dataset.dx || 0);
          const dy = Number(particle.dataset.dy || 0);
          particle.style.opacity = String(opacity * progress);
          particle.style.transform = `translate3d(${dx * progress}px, ${dy * progress}px, 0)`;
        });
      });
    };

    const onScroll = () => update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    reducedMotion.addEventListener?.("change", onScroll);
    update();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      reducedMotion.removeEventListener?.("change", onScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="parla-story" id="parla-story" aria-label="Parla fragrance campaign">
      <div className="parla-story__stage">
        <img
          className="parla-story__image"
          src={imageSrc}
          alt="Parla perfume bottle in golden light"
          fetchPriority="high"
          loading="eager"
          draggable={false}
        />
        <div className="parla-story__shade" aria-hidden="true" />
        <svg className="parla-story__light" viewBox="0 0 1000 700" preserveAspectRatio="none" aria-hidden="true">
          <path
            pathLength="1200"
            d="M 60 570 C 180 490, 220 600, 340 500 S 470 430, 520 350 S 690 170, 920 120"
          />
        </svg>
        <div className="parla-story__sparkles" aria-hidden="true">
          {sparkles.map((sparkle) => (
            <span
              key={sparkle.id}
              className="parla-story__sparkle"
              data-opacity={sparkle.opacity}
              data-dx={sparkle.driftX}
              data-dy={sparkle.driftY}
              style={{
                left: `${sparkle.x}%`,
                top: `${sparkle.y}%`,
                width: sparkle.size,
                height: sparkle.size,
              }}
            />
          ))}
        </div>
        <div className="parla-story__intro">
          <p className="parla-story__eyebrow">Selected work · 01</p>
          <h2>Parla</h2>
          <p className="parla-story__subhead">A fragrance, brought to light.</p>
        </div>
        <p className="parla-story__caption">Perfume campaign · Video editing · Visual storytelling</p>
        <div className="parla-story__scroll-note" aria-hidden="true">Scroll to reveal</div>
      </div>
    </section>
  );
}
