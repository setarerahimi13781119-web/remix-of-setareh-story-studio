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

const title = "Setareh Rahimi | AI Creative Lead — AI-Driven Creative Development";
const description =
  "Explore the portfolio of Setareh Rahimi, AI Creative Lead focused on AI-driven creative development, visual design, video editing and content production.";

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
