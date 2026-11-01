import { createFileRoute } from "@tanstack/react-router";
import { About, Capabilities, Contact, Experience, Header, Hero, Work } from "@/components/portfolio/Portfolio";

const title = "Setareh Rahimi — Creative Content & Storytelling";
const description =
  "Portfolio of Setareh Rahimi: content development, creative concepts and social storytelling for digital platforms.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="grain min-h-screen">
      <a href="#work" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[70] focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground">
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
