import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ScrollWorld } from "@/components/portfolio/ScrollWorld";
import { EntryExperience } from "@/components/portfolio/EntryExperience";
import {
  About,
  Capabilities,
  Contact,
  Experience,
  Header,
  Hero,
  Work,
} from "@/components/portfolio/Portfolio";

const title = "Setareh Rahimi | Content Specialist & Content Coordination";
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
  const [showIntro, setShowIntro] = useState(true);
  const [videoActive, setVideoActive] = useState(false);

  useEffect(() => {
    try {
      if (window.localStorage.getItem("pm-entry-complete") === "yes") {
        setShowIntro(false);
        setVideoActive(true);
      }
    } catch {
      // If storage is unavailable, show the intro for this visit.
    }
  }, []);

  const startExperience = () => {
    setVideoActive(true);
    try {
      window.localStorage.setItem("pm-entry-complete", "yes");
    } catch {
      // The experience still works when storage is unavailable.
    }
  };

  return (
    <div className="grain min-h-screen">
      <ScrollWorld />
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[70] focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        Skip to work
      </a>
      <Header />
      <main>
        <Hero videoActive={videoActive} />
        <Work />
        <Capabilities />
        <Experience />
        <About />
      </main>
      <Contact />
      {showIntro && (
        <EntryExperience
          onEnter={startExperience}
          onFinish={() => setShowIntro(false)}
        />
      )}
    </div>
  );
}
