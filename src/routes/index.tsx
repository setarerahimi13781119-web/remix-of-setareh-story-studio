import { createFileRoute } from "@tanstack/react-router";
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
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="grain min-h-screen">
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
