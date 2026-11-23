import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import {
  About,
  Capabilities,
  Contact,
  Experience,
  Header,
  Hero,
  Work,
} from "@/components/portfolio/Portfolio";

const title = "Setareh Rahimi | Creative Portfolio — Visual Design, Video & Content";
const description =
  "Explore the portfolio of Setareh Rahimi: media content coordination, publishing operations, video editing and visual storytelling projects.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://setareh-portfolio.vercel.app/" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "https://setareh-portfolio.vercel.app/" }],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    const root = document.documentElement;
    const stops = [
      [244, 241, 234], // portfolio cream
      [229, 236, 220], // softened portfolio sage
      [245, 230, 237], // softened portfolio pink
      [232, 238, 222], // softened portfolio sage
      [244, 241, 234], // portfolio cream
    ];
    let frame = 0;

    const updateBackground = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
        const progress = Math.min(1, Math.max(0, window.scrollY / maxScroll));
        root.style.setProperty("--scroll-progress", String(progress));
        const lerp = (a: number, b: number) => a + (b - a) * progress;
        root.style.setProperty("--shape-a-x", `${lerp(-19, 14)}vw`);
        root.style.setProperty("--shape-a-y", `${lerp(-18, 21)}vh`);
        root.style.setProperty("--shape-a-r", `${lerp(-18, 32)}deg`);
        root.style.setProperty("--shape-a-s", String(lerp(1.08, 0.82)));
        root.style.setProperty("--shape-b-x", `${lerp(17, -18)}vw`);
        root.style.setProperty("--shape-b-y", `${lerp(20, -13)}vh`);
        root.style.setProperty("--shape-b-r", `${lerp(22, -26)}deg`);
        root.style.setProperty("--shape-b-s", String(lerp(0.9, 1.18)));
        root.style.setProperty("--shape-c-x", `${lerp(0, 10)}vw`);
        root.style.setProperty("--shape-c-y", `${lerp(24, -20)}vh`);
        root.style.setProperty("--shape-c-r", `${lerp(-8, 24)}deg`);
        root.style.setProperty("--shape-c-s", String(lerp(0.78, 1.12)));
        const scaled = progress * (stops.length - 1);
        const index = Math.min(stops.length - 2, Math.floor(scaled));
        const mix = scaled - index;
        const color = stops[index].map((value, channel) =>
          Math.round(value + (stops[index + 1][channel] - value) * mix)
        );
        root.style.setProperty("--scroll-background", `rgb(${color.join(" ")})`);
      });
    };

    const revealTargets = new Set<Element>();
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scroll-in-view");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    const observeRevealTargets = (scope: ParentNode) => {
      scope.querySelectorAll(".portfolio-category-section, .portfolio-work-item").forEach((element) => {
        if (!revealTargets.has(element)) {
          revealTargets.add(element);
          revealObserver.observe(element);
        }
      });
    };
    root.classList.add("has-scroll-observer");
    observeRevealTargets(document);
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof Element) {
            if (node.matches(".portfolio-category-section, .portfolio-work-item")) {
              observeRevealTargets(node.parentElement ?? document);
            } else {
              observeRevealTargets(node);
            }
          }
        });
      });
    });
    mutationObserver.observe(document.querySelector("main") ?? document.body, {
      childList: true,
      subtree: true,
    });

    updateBackground();
    window.addEventListener("scroll", updateBackground, { passive: true });
    window.addEventListener("resize", updateBackground);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateBackground);
      window.removeEventListener("resize", updateBackground);
      mutationObserver.disconnect();
      revealObserver.disconnect();
      root.classList.remove("has-scroll-observer");
      root.style.removeProperty("--scroll-background");
      root.style.removeProperty("--scroll-progress");
    };
  }, []);

  return (
    <div className="grain min-h-screen">
      <div className="scroll-progress" aria-hidden="true" />
      <div className="scroll-art-layer" aria-hidden="true">
        <span className="scroll-art-shape scroll-art-shape-a" />
        <span className="scroll-art-shape scroll-art-shape-b" />
        <span className="scroll-art-shape scroll-art-shape-c" />
        <span className="scroll-art-orbit" />
      </div>
      <style>{`
        .grain > .scroll-art-layer { position: fixed !important; z-index: 0 !important; inset: 0; overflow: hidden; pointer-events: none; isolation: isolate; }
        .scroll-art-shape { position: absolute; display: block; border-radius: 46% 54% 62% 38% / 43% 38% 62% 57%; will-change: transform; mix-blend-mode: multiply; }
        .scroll-art-shape-a { width: min(68vw, 880px); height: min(66vw, 820px); left: -23vw; top: -32vh; transform: translate3d(var(--shape-a-x),var(--shape-a-y),0) rotate(var(--shape-a-r)) scale(var(--shape-a-s)); background: radial-gradient(ellipse at 62% 60%,rgba(158,182,122,.78),rgba(158,182,122,.56) 48%,rgba(158,182,122,0) 73%); }
        .scroll-art-shape-b { width: min(76vw, 980px); height: min(70vw, 900px); right: -32vw; top: 8vh; transform: translate3d(var(--shape-b-x),var(--shape-b-y),0) rotate(var(--shape-b-r)) scale(var(--shape-b-s)); background: radial-gradient(ellipse at 42% 45%,rgba(193,40,100,.23),rgba(245,230,237,.9) 54%,rgba(245,230,237,0) 74%); }
        .scroll-art-shape-c { width: min(70vw, 850px); height: min(52vw, 660px); left: 24vw; bottom: -38vh; transform: translate3d(var(--shape-c-x),var(--shape-c-y),0) rotate(var(--shape-c-r)) scale(var(--shape-c-s)); background: radial-gradient(ellipse at 48% 38%,rgba(36,62,36,.22),rgba(158,182,122,.2) 53%,rgba(158,182,122,0) 75%); }
        .scroll-art-orbit { position: absolute; width: 76vw; height: 48vw; min-height: 360px; left: 12vw; top: 28vh; border: 1px solid rgba(36,62,36,.13); border-radius: 50%; transform: rotate(calc(-12deg + var(--scroll-progress,0) * 28deg)) scale(calc(1 + var(--scroll-progress,0) * .12)); opacity: .7; }
        .grain > :not(.pm-world):not(.scroll-art-layer) { position: relative; z-index: 1; }
        @media (max-width:767px) { .scroll-art-shape-a { width: 105vw; height: 100vw; left:-48vw; top:-22vh; } .scroll-art-shape-b { width:110vw; height:105vw; right:-60vw; top:25vh; } .scroll-art-shape-c { width:110vw; height:95vw; left:8vw; bottom:-23vh; } .scroll-art-orbit { width:125vw; height:82vw; left:-12vw; top:34vh; } }
        @media (prefers-reduced-motion:reduce) { .scroll-art-shape,.scroll-art-orbit { transform:none !important; } }
      `}</style>
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[70] focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        Skip to work
      </a>
      <Header />
      <main>
        <Hero />
        <Work />
        <Capabilities />
        <Experience />
        <About />
      </main>
      <Contact />
    </div>
  );
}
