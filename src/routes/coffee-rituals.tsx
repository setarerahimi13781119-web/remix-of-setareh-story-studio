import { createFileRoute, Link } from "@tanstack/react-router";

const pageUrl = "https://setareh-portfolio.vercel.app/coffee-rituals";
const cover = "https://www.dropbox.com/scl/fi/niwau2i7okvwh0o2whh2v/ai-image-generator-1.jpg?rlkey=buddyp8xmtvpwkjzbutdnvd60&raw=1";
const description =
  "A visual exploration of coffee rituals, from bean preparation and grinding to the final espresso extraction.";

export const Route = createFileRoute("/coffee-rituals")({
  head: () => ({
    meta: [
      { title: "Coffee Rituals — Setareh Rahimi" },
      { name: "description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:site_name", content: "Setareh Rahimi" },
      { property: "og:title", content: "Coffee Rituals | From Bean to Espresso" },
      { property: "og:description", content: description },
      { property: "og:url", content: pageUrl },
      { property: "og:image", content: cover },
      { property: "og:image:alt", content: "Coffee Rituals visual — coffee preparation and espresso" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Coffee Rituals | From Bean to Espresso" },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: cover },
    ],
    links: [{ rel: "canonical", href: pageUrl }],
  }),
  component: CoffeeRitualsPage,
});

function CoffeeRitualsPage() {
  return (
    <main className="grain min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-5xl px-5 py-8 md:px-10 md:py-14">
        <Link to="/" className="eyebrow inline-flex items-center gap-2 text-muted-foreground hover:text-foreground">
          ← BACK TO PORTFOLIO
        </Link>
        <article className="mt-10">
          <p className="eyebrow">COFFEE · VISUAL ASSETS</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl font-normal leading-tight md:text-7xl">
            Coffee Rituals
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {description}
          </p>
          <img
            src={cover}
            alt="Coffee Rituals — coffee visual exploration"
            className="mt-10 max-h-[680px] w-full bg-card object-contain"
          />
          <section className="mt-12 grid gap-8 border-t border-rule pt-8 md:grid-cols-[1fr_2fr]">
            <div>
              <p className="eyebrow">ROLE</p>
              <p className="mt-2 text-accent">Visual exploration & asset creation</p>
            </div>
            <div>
              <p className="eyebrow">SCOPE</p>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                <li>— Coffee visual direction and atmospheric imagery</li>
                <li>— Espresso preparation film: beans, grinding and extraction</li>
                <li>— Visual storytelling around coffee rituals</li>
              </ul>
            </div>
          </section>
          <section className="mt-12 border-t border-rule pt-8">
            <p className="eyebrow">01 / FROM BEAN TO ESPRESSO</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">The espresso process</h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              A short film following the process — from whole beans and grinding to the final extraction.
            </p>
            <div className="mt-6 aspect-video w-full overflow-hidden bg-card">
              <video
                controls
                playsInline
                preload="metadata"
                aria-label="Espresso preparation from coffee beans to final extraction"
                className="h-full w-full object-contain"
              >
                <source
                  src="https://d2ol7oe51mr4n9.cloudfront.net/user_3Fw2wGhFNYuCWeWgkK1Dh6MD224/44248333-f525-47ec-a054-e6b9d5a94fa7.mp4"
                  type="video/mp4"
                />
                Your browser does not support HTML video playback.
              </video>
            </div>
          </section>
          <section className="mt-12 border-t border-rule pt-8">
            <p className="eyebrow">02 / STILL IMAGERY</p>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {["/assets/portfolio/coffee-2.webp", "/assets/portfolio/coffee-3.webp"].map((src, index) => (
                <img
                  key={src}
                  src={src}
                  alt={`Coffee visual asset ${index + 1}`}
                  loading="lazy"
                  className="aspect-[4/5] w-full bg-card object-cover"
                />
              ))}
            </div>
          </section>
          <div className="mt-14 border-t border-rule pt-6">
            <Link to="/" className="text-sm text-accent underline underline-offset-4">
              Explore more selected work
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}
