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
        const selectedWorkHeading = document.querySelector("#work");
        if (selectedWorkHeading) {
          const headingBottom = selectedWorkHeading.getBoundingClientRect().bottom + window.scrollY;
          root.style.setProperty("--art-start-y", `${headingBottom}px`);
        }
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
        root.style.setProperty("--orbit-r", `${lerp(-12, 16)}deg`);
        root.style.setProperty("--orbit-s", String(lerp(1, 1.12)));
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
      root.style.removeProperty("--art-start-y");
    };
  }, []);

  return (
    <div className="grain min-h-screen">
      <div className="scroll-progress" aria-hidden="true" />
      <div className="scroll-art-layer" aria-hidden="true">
        <span className="scroll-art-shape scroll-art-shape-a" />
        <span className="scroll-art-shape scroll-art-shape-b" />
        <span className="scroll-art-shape scroll-art-shape-c" />
        <span className="scroll-art-shape scroll-art-shape-d" />
        <span className="scroll-art-shape scroll-art-shape-e" />
        <span className="scroll-art-shape scroll-art-shape-f" />
        <span className="scroll-art-shape scroll-art-shape-g" />
        <span className="scroll-art-shape scroll-art-shape-h" />
        <span className="scroll-art-orbit" />
      </div>
      <style>{`
        .grain > .scroll-art-layer { position: absolute !important; z-index: 0 !important; top: var(--art-start-y, 0px); right: 0; bottom: 0; left: 0; min-height: 0; overflow: hidden; pointer-events: none; isolation: isolate; }
        .scroll-art-shape { position: absolute; display: block; border-radius: 46% 54% 62% 38% / 43% 38% 62% 57%; will-change: transform; opacity: .9; filter: saturate(1.12); }
        .scroll-art-shape-a { width: clamp(190px,27vw,390px); height: clamp(180px,25vw,360px); left:-9vw; top:19vh; transform:translate3d(calc(var(--scroll-progress,0) * 18vw),calc(var(--scroll-progress,0) * 22vh),0) rotate(calc(-18deg + var(--scroll-progress,0) * 48deg)); background:radial-gradient(ellipse at 62% 60%,rgba(158,182,122,.78),rgba(158,182,122,.36) 52%,transparent 74%); }
        .scroll-art-shape-b { width:clamp(190px,25vw,350px); height:clamp(190px,24vw,340px); right:-9vw; top:23vh; transform:translate3d(calc(var(--scroll-progress,0) * -18vw),calc(var(--scroll-progress,0) * 14vh),0) rotate(calc(22deg - var(--scroll-progress,0) * 48deg)); background:radial-gradient(ellipse at 42% 45%,rgba(193,40,100,.36),rgba(245,230,237,.8) 54%,transparent 75%); }
        .scroll-art-shape-c { width:clamp(210px,29vw,410px); height:clamp(170px,22vw,310px); left:34vw; bottom:-16vh; transform:translate3d(calc(var(--scroll-progress,0) * 8vw),calc(var(--scroll-progress,0) * -25vh),0) rotate(calc(-8deg + var(--scroll-progress,0) * 32deg)); background:radial-gradient(ellipse at 48% 38%,rgba(36,62,36,.24),rgba(158,182,122,.34) 53%,transparent 76%); }
        .scroll-art-shape-d { width:clamp(105px,14vw,205px); height:clamp(100px,13vw,190px); left:19vw; top:36vh; transform:translate3d(calc(var(--scroll-progress,0) * -10vw),calc(var(--scroll-progress,0) * 30vh),0) rotate(calc(12deg + var(--scroll-progress,0) * 65deg)); background:radial-gradient(ellipse,rgba(193,40,100,.35),rgba(193,40,100,.12) 58%,transparent 75%); }
        .scroll-art-shape-e { width:clamp(125px,17vw,240px); height:clamp(115px,16vw,225px); right:22vw; bottom:16vh; transform:translate3d(calc(var(--scroll-progress,0) * 12vw),calc(var(--scroll-progress,0) * -18vh),0) rotate(calc(-20deg + var(--scroll-progress,0) * 55deg)); background:radial-gradient(ellipse,rgba(158,182,122,.72),rgba(158,182,122,.2) 60%,transparent 76%); }
        .scroll-art-shape-f { width:clamp(85px,11vw,155px); height:clamp(85px,11vw,155px); left:54vw; top:25vh; transform:translate3d(calc(var(--scroll-progress,0) * -14vw),calc(var(--scroll-progress,0) * 38vh),0) rotate(calc(25deg - var(--scroll-progress,0) * 70deg)); background:radial-gradient(ellipse,rgba(245,230,237,.98),rgba(193,40,100,.22) 62%,transparent 77%); }
        .scroll-art-shape-g { width:clamp(100px,13vw,185px); height:clamp(95px,12vw,170px); left:4vw; bottom:8vh; transform:translate3d(calc(var(--scroll-progress,0) * 22vw),calc(var(--scroll-progress,0) * -20vh),0) rotate(calc(-12deg + var(--scroll-progress,0) * 50deg)); background:radial-gradient(ellipse,rgba(36,62,36,.28),rgba(158,182,122,.24) 60%,transparent 77%); }
        .scroll-art-shape-h { width:clamp(95px,12vw,170px); height:clamp(95px,12vw,170px); right:5vw; bottom:-5vh; transform:translate3d(calc(var(--scroll-progress,0) * -20vw),calc(var(--scroll-progress,0) * -28vh),0) rotate(calc(18deg - var(--scroll-progress,0) * 42deg)); background:radial-gradient(ellipse,rgba(193,40,100,.27),rgba(245,230,237,.6) 58%,transparent 78%); }
        .scroll-art-orbit { position:absolute; width:62vw; height:40vw; min-height:300px; left:19vw; top:40vh; border:1px solid rgba(36,62,36,.12); border-radius:50%; transform:rotate(var(--orbit-r,-12deg)) scale(var(--orbit-s,1)); opacity:.55; }
        .grain > :not(.pm-world):not(.scroll-art-layer) { position:relative; z-index:1; }
        @media (max-width:767px) {
          .scroll-art-shape-a { width:48vw; height:46vw; left:-16vw; top:20vh; }
          .scroll-art-shape-b { width:44vw; height:43vw; right:-15vw; top:26vh; }
          .scroll-art-shape-c { width:52vw; height:43vw; left:38vw; bottom:-8vh; }
          .scroll-art-shape-d { width:24vw; height:23vw; left:14vw; top:32vh; }
          .scroll-art-shape-e { width:28vw; height:27vw; right:12vw; bottom:20vh; }
          .scroll-art-shape-f { width:20vw; height:20vw; left:61vw; top:23vh; }
          .scroll-art-shape-g { width:22vw; height:21vw; left:0; bottom:9vh; }
          .scroll-art-shape-h { width:21vw; height:21vw; right:-4vw; bottom:-2vh; }
          .scroll-art-orbit { width:112vw; height:70vw; left:-6vw; top:42vh; }
        }
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
