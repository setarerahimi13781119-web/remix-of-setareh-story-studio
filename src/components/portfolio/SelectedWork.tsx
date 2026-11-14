import { ArrowUpRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { nikmehrWork, projects, work } from "@/data/portfolio";

import junoonPoster from "@/assets/junoon_case_file_poster.jpg.asset.json";
import junoonGhostship from "@/assets/junoon_case_ghostship.jpg.asset.json";
import junoonMcnally from "@/assets/junoon_case_mcnally.jpg.asset.json";
import junoonRogers from "@/assets/junoon_case_rogers.jpg.asset.json";
import junoonUnterweger from "@/assets/junoon_case_unterweger.jpg.asset.json";
import kms1 from "@/assets/khaneh_mod_setareh_slide_01.png.asset.json";
import kms2 from "@/assets/khaneh_mod_setareh_slide_02.png.asset.json";
import kms3 from "@/assets/khaneh_mod_setareh_slide_03.png.asset.json";
import kms4 from "@/assets/khaneh_mod_setareh_slide_04.png.asset.json";
import kms5 from "@/assets/khaneh_mod_setareh_slide_05.png.asset.json";

// Lovable stores uploaded artwork behind its asset endpoint. On Vercel these
// relative URLs would incorrectly resolve against the portfolio domain, so
// keep the source host explicit while leaving the Lovable project untouched.
const LOVABLE_ASSET_ORIGIN =
  "https://id-preview--c40cda6a-8161-45d2-9902-76acbf71b9f3.lovable.app";
const assetUrl = (path: string) => new URL(path, LOVABLE_ASSET_ORIGIN).toString();
const turquoiseCover =
  "https://www.dropbox.com/scl/fi/xu02n0326lzvadfh33fp6/final_carousel_slide_2_profile.jpg?rlkey=4pt5kfu7ajf95ni41a1une5i8&raw=1";
const turquoiseDetail =
  "https://www.dropbox.com/scl/fi/ysxlzqdqlbk000m10b36c/21c32000c543e8a70848b02e0dda227d65e0c2ee6d02316fd106f7308ff2c10f.png?rlkey=hgnv2et8heg9fassv18w175qt&raw=1";

const khanehShalvarImages = [
  { src: "https://www.dropbox.com/scl/fi/tj2gt8xclv481hdxyyini/grok_1794593164081.jpg?rlkey=tmq9k2vxeu1rxjlb0v5z0iu0i&raw=1", alt: "Khaneh Shalvar autumn campaign visual 01" },
  { src: "https://www.dropbox.com/scl/fi/sxdoctzwlc3rco09v2skp/IMG_20261113_211756_521.jpg?rlkey=fswq0c1qhe6yly5cc01uzz7g8&raw=1", alt: "Khaneh Shalvar autumn campaign visual 02" },
  { src: "https://www.dropbox.com/scl/fi/fco3cuj6iehy23rt8k8go/IMG_20261113_211816_095.jpg?rlkey=qyjaayzcmam273jhzav06u2dy&raw=1", alt: "Khaneh Shalvar autumn campaign visual 03" },
  { src: "https://www.dropbox.com/scl/fi/n4p2k6ic613vc2fk6tv5n/IMG_20261113_211915_319.jpg?rlkey=rzeg27hvku6wmijat6mem9vd4&raw=1", alt: "Khaneh Shalvar autumn campaign visual 04" },
  { src: "https://www.dropbox.com/scl/fi/fiox9e6ibonzy1r88ry4p/IMG_20261113_211925_973.jpg?rlkey=7harvn76dtwvtk9nf0uxbw1nh&raw=1", alt: "Khaneh Shalvar autumn campaign visual 05" },
  { src: "https://www.dropbox.com/scl/fi/vxb6xr81fejax5ga9qi95/IMG_20261113_211937_951.jpg?rlkey=ur02358bez5qia0jmfi7dx2r8&raw=1", alt: "Khaneh Shalvar autumn campaign visual 06" },
  { src: "https://www.dropbox.com/scl/fi/pfyvapnem382ce2tm2q34/IMG_20261113_211945_305.jpg?rlkey=66ozr21hu7uilf5tqsxgwkcc9&raw=1", alt: "Khaneh Shalvar autumn campaign visual 07" },
];

function TurquoiseJewelryGallery() {
  return (
    <figure className="border-t border-rule pt-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <img
          src={turquoiseCover}
          alt="AI-generated model image wearing the turquoise jewelry set"
          loading="lazy"
          className="w-full bg-card object-contain"
        />
        <img
          src={turquoiseDetail}
          alt="Close-up AI-generated product visual showing details of the turquoise necklace"
          loading="lazy"
          className="w-full bg-card object-contain"
        />
      </div>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-foreground">
        AI-generated concept imagery · Model view and product detail · Self-initiated project
      </figcaption>
    </figure>
  );
}

const junoonSquares = [
  {
    src: assetUrl(junoonGhostship.url),
    alt: "Documentary crime-podcast cover exploration: Ghostship case",
  },
  {
    src: assetUrl(junoonMcnally.url),
    alt: "Documentary crime-podcast cover exploration: McNally case",
  },
  {
    src: assetUrl(junoonRogers.url),
    alt: "Documentary crime-podcast cover exploration: Rogers case",
  },
  {
    src: assetUrl(junoonUnterweger.url),
    alt: "Documentary crime-podcast cover exploration: Unterweger case",
  },
];

const kmsSlides = [
  {
    src: assetUrl(kms1.url),
    alt: "Slide 01 of 05: The digital experience — Khaneh Mod Setareh storefront cover",
  },
  {
    src: assetUrl(kms2.url),
    alt: "Slide 02 of 05: One brand, two screens — desktop and mobile header side by side",
  },
  {
    src: assetUrl(kms3.url),
    alt: "Slide 03 of 05: The visual system — colour palette, typeface and hierarchy",
  },
  { src: assetUrl(kms4.url), alt: "Slide 04 of 05: The complete experience — full page layout" },
  { src: assetUrl(kms5.url), alt: "Slide 05 of 05: The final note — closing slide" },
];

function KhanehModGallery() {
  return (
    <figure className="border-t border-rule pt-5">
      <ol className="grid gap-3 sm:grid-cols-2">
        {kmsSlides.map((img, i) => (
          <li key={img.src} className={i === 0 ? "sm:col-span-2" : ""}>
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="aspect-[4/5] w-full bg-card object-contain"
            />
          </li>
        ))}
      </ol>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-foreground">
        Presentation slides 01–05 · Khaneh Mod Setareh ecommerce visual design exploration by
        Setareh Rahimi.
      </figcaption>
    </figure>
  );
}

function KhanehShalvarGallery() {
  return (
    <figure className="border-t border-rule pt-5">
      <ol className="grid gap-3 sm:grid-cols-2">
        {khanehShalvarImages.map((img, index) => (
          <li key={img.src} className={index === 0 ? "sm:col-span-2" : ""}>
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="max-h-[36rem] w-full bg-card object-contain"
            />
          </li>
        ))}
      </ol>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-foreground">
        Product and campaign visuals · Khaneh Shalvar autumn ecommerce campaign exploration.
      </figcaption>
    </figure>
  );
}

function JunoonGallery() {
  return (
    <figure className="border-t border-rule pt-5">
      <div className="grid gap-3 sm:grid-cols-2">
        <img
          src={assetUrl(junoonPoster.url)}
          alt="Vertical evidence-file style poster exploration with Junoon stamp"
          loading="lazy"
          className="h-full w-full bg-card object-contain"
        />
        <div className="grid grid-cols-2 content-start gap-3">
          {junoonSquares.map((img) => (
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="aspect-square w-full bg-card object-contain"
            />
          ))}
        </div>
      </div>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-foreground">
        Visual design explorations by Setareh Rahimi · created during a recent team collaboration · not the podcast's original identity.
      </figcaption>
    </figure>
  );
}

function PageLinks() {
  return (
    <ul className="mt-5 flex flex-wrap gap-3" aria-label="Nikmehr Instagram pages">
      {nikmehrWork.pages.map((page) => (
        <li key={page.name}>
          {page.href && (
            <Button
              asChild
              variant="outline"
              className="h-auto gap-2 rounded-none border-foreground bg-transparent px-4 py-2 font-normal shadow-none hover:bg-foreground hover:text-background"
            >
              <a href={page.href} target="_blank" rel="noopener noreferrer">
                <span dir="rtl">{page.name}</span>
                <ArrowUpRight aria-hidden="true" />
                <span className="sr-only">(opens Instagram in a new tab)</span>
              </a>
            </Button>
          )}
        </li>
      ))}
    </ul>
  );
}

function PublishedExamples({ compact = false }: { compact?: boolean }) {
  return (
    <ul
      className={
        compact ? "mt-4 grid gap-3 sm:grid-cols-2" : "mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
      }
    >
      {work.map((reel, index) => (
        <li key={reel.id}>
          <a
            href={reel.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-full min-h-44 flex-col justify-between border border-rule bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="font-mono text-xs tracking-[0.18em] text-muted-foreground">
                {String(index + 1).padStart(2, "0")} / 04
              </span>
              <span className="eyebrow">
                {reel.platform} · {reel.kind}
              </span>
            </div>
            <div className="mt-8 flex items-end justify-between gap-3">
              <div>
                <p className="font-display text-xl leading-tight">{reel.label}</p>
                <span className="mt-3 inline-flex items-center gap-2 text-xs text-muted-foreground transition-colors group-hover:text-accent">
                  View original reel <ArrowUpRight className="size-3" aria-hidden="true" />
                </span>
              </div>
              <ArrowUpRight
                className="size-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
                aria-hidden="true"
              />
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}

export function SelectedWork() {
  return (
    <>
      <ol className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <li key={project.id} className="min-w-0">
            <Dialog>
              <article className="flex h-full flex-col border border-rule p-5 md:p-6">
                <DialogTrigger asChild>
                  <Button
                    variant="ghost"
                    aria-label={`View ${project.title} project`}
                    className="group relative flex h-auto w-full flex-col items-stretch justify-between gap-6 whitespace-normal rounded-none bg-card p-5 text-left font-normal hover:bg-secondary md:p-7 aspect-[4/3]"
                  >
                    <span className="eyebrow flex items-center justify-between gap-3">
                      <span>{project.coverLabel}</span>
                      <Plus className="shrink-0 text-foreground" aria-hidden="true" />
                    </span>
                    {project.id === "junoon-podcast" ? (
                      <img
                        src={assetUrl(junoonPoster.url)}
                        alt=""
                        aria-hidden="true"
                        className="min-h-0 flex-1 w-full object-contain"
                      />
                    ) : project.id === "khaneh-mod-setareh" ? (
                      <img
                        src={assetUrl(kms1.url)}
                        alt=""
                        aria-hidden="true"
                        className="min-h-0 flex-1 w-full object-contain"
                      />
                    ) : project.id === "visual-identity-case-study" ? (
                      <span className="relative flex min-h-0 flex-1 flex-col justify-between overflow-hidden border-y border-rule py-5">
                        <span className="eyebrow">VISUAL IDENTITY / CASE STUDY</span>
                        <span className="font-display text-5xl leading-none tracking-tight text-accent md:text-7xl">FORM<br/><span className="text-foreground">IN SYSTEM</span></span>
                        <span className="text-xs text-muted-foreground">View original LinkedIn publication</span>
                      </span>
                    ) : project.id === "khaneh-shalvar" ? (
                      <img
                        src={khanehShalvarImages[0].src}
                        alt=""
                        aria-hidden="true"
                        className="min-h-0 flex-1 w-full bg-card object-contain"
                      />
                    ) : project.id === "ai-visual-storytelling" ? (
                      <span className="relative flex min-h-0 flex-1 flex-col justify-between overflow-hidden border-y border-rule py-5">
                        <span className="eyebrow flex items-center justify-between">
                          <span>VISUAL ARCHIVE</span>
                          <span>1950 / PA</span>
                        </span>
                        <span className="font-display text-[clamp(5rem,14vw,9rem)] leading-[0.8] tracking-[-0.07em] text-accent">
                          1950
                        </span>
                        <span className="grid grid-cols-[1fr_auto] items-end gap-3 border-t border-rule pt-3">
                          <span className="text-xs leading-relaxed text-muted-foreground">
                            Historical Iranian immigrant scenes
                            <br />
                            AI-assisted image studies
                          </span>
                          <span className="eyebrow text-foreground">STUDY 04</span>
                        </span>
                      </span>
                    ) : project.id === "moodbean" ? (
                      <img
                        src="https://screenshot2.lovable.dev/lovp_1h4v9rfq2v8c5t2hgfqsp74k92/5f6a8a905d7ec7c86a1f73fe87d4ca09_1794284897805.png"
                        alt="Moodbean Coffee Finder interface preview"
                        aria-hidden="true"
                        className="min-h-0 flex-1 w-full bg-card object-contain"
                      />
                    ) : project.id === "turquoise-jewelry-set" ? (
                      <img
                        src={turquoiseCover}
                        alt=""
                        aria-hidden="true"
                        className="min-h-0 flex-1 w-full object-contain"
                      />
                    ) : project.id === "nikmehr" ? (
                      <span className="relative flex min-h-0 flex-1 flex-col justify-between overflow-hidden border-y border-rule py-5">
                        <span className="eyebrow flex items-center justify-between">
                          <span>MEDIA / OPERATIONS</span>
                          <span>VERIFIED ROLE</span>
                        </span>
                        <span className="space-y-2">
                          <span className="block font-display text-[clamp(2.8rem,7vw,5rem)] leading-[0.85] tracking-[-0.05em]">
                            CONTENT
                          </span>
                          <span className="flex items-center gap-2 pl-[12%]">
                            <span className="h-px flex-1 bg-accent" />
                            <span className="font-mono text-xs tracking-[0.2em] text-accent">
                              →
                            </span>
                          </span>
                          <span className="block pl-[12%] font-display text-[clamp(2.8rem,7vw,5rem)] leading-[0.85] tracking-[-0.05em] text-accent">
                            PUBLISH
                          </span>
                        </span>
                        <span className="border-t border-rule pt-3 text-xs leading-relaxed text-muted-foreground">
                          Posts + stories · Coordination & publishing
                        </span>
                      </span>
                    ) : (
                      <span className="flex min-h-0 flex-1 flex-col justify-center gap-4 border-y border-rule py-6">
                        <span className="eyebrow text-muted-foreground">{project.category}</span>
                        <span className="font-display text-3xl leading-tight text-accent md:text-4xl">
                          {project.coverLabel}
                        </span>
                        <span className="max-w-sm text-sm leading-relaxed text-muted-foreground">
                          {project.role}
                        </span>
                      </span>
                    )}
                    <span className="border-t border-rule pt-4 font-display text-3xl leading-tight md:text-4xl">
                      {project.title}
                    </span>
                  </Button>
                </DialogTrigger>
                <div className="mt-5 flex flex-1 flex-col">
                  <p className="eyebrow">{project.category}</p>
                  <p className="mt-2 text-sm text-accent">{project.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {project.summary}
                  </p>
                  {project.id === "junoon-podcast" && (
                    <div className="mt-5 border-t border-rule pt-5">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <section>
                          <p className="eyebrow">01 / Video editing</p>
                          <p className="mt-2 text-sm font-medium">Brian Yassipour case</p>
                          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                            Full episode edit, carried through to final export.
                          </p>
                        </section>
                        <section>
                          <p className="eyebrow">02 / Visual exploration</p>
                          <p className="mt-2 text-sm font-medium">Documentary crime-podcast visuals</p>
                          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                            Personal cover and social visual explorations — separate from Junoon's original identity.
                          </p>
                        </section>
                      </div>
                    </div>
                  )}
                  {project.id === "nikmehr" && <PageLinks />}
                  <DialogTrigger asChild>
                    <Button
                      variant="link"
                      className="mt-auto h-auto justify-start self-start rounded-none px-0 pt-5 pb-0 font-normal"
                    >
                      Project context
                      <Plus aria-hidden="true" />
                      <span className="sr-only">: {project.title}</span>
                    </Button>
                  </DialogTrigger>
                </div>
              </article>
              <DialogContent className="z-[70] max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-3xl gap-5 overflow-y-auto rounded-none p-6 shadow-none sm:rounded-none md:p-10">
                <p className="eyebrow pr-8">
                  {project.category} ·{" "}
                  {project.status === "exploration"
                    ? "Exploration"
                    : project.status === "team-collaboration"
                      ? "Recent team collaboration"
                      : "Verified role"}
                </p>
                <DialogTitle className="pr-6 font-display text-3xl font-normal leading-tight tracking-normal md:text-5xl">
                  {project.title}
                </DialogTitle>
                <DialogDescription className="text-base leading-relaxed">
                  {project.context}
                </DialogDescription>
                <dl className="border-t border-rule pt-5">
                  <dt className="eyebrow">Role</dt>
                  <dd className="mt-2 text-accent">{project.role}</dd>
                  <dt className="eyebrow mt-6">Scope</dt>
                  <dd>
                    <ul className="mt-2 space-y-2">
                      {project.scope.map((item) => (
                        <li key={item} className="flex gap-3 text-sm leading-relaxed">
                          <span aria-hidden="true" className="text-accent">
                            —
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </dl>
                {project.id === "khaneh-shalvar" && <KhanehShalvarGallery />}
                {project.id === "junoon-podcast" && <JunoonGallery />}
                {project.tracks?.map((track) => (
                  <section key={track.title} className="border-t border-rule pt-5">
                    <h3 className="font-display text-2xl">{track.title}</h3>
                    <p className="eyebrow mt-2">{track.label}</p>
                    <ul className="mt-3 space-y-2">
                      {track.items.map((item) => (
                        <li key={item} className="flex gap-3 text-sm leading-relaxed">
                          <span aria-hidden="true" className="text-accent">
                            —
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
                {project.id === "visual-identity-case-study" && project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-fit items-center gap-2 border border-foreground px-4 py-3 text-sm transition-colors hover:bg-foreground hover:text-background"
                  >
                    View original LinkedIn case study
                    <ArrowUpRight aria-hidden="true" className="size-4" />
                  </a>
                )}
                {project.id === "turkish-coffee-packaging" && project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-fit items-center gap-2 border border-foreground px-4 py-3 text-sm transition-colors hover:bg-foreground hover:text-background"
                  >
                    View original LinkedIn packaging project
                    <ArrowUpRight aria-hidden="true" className="size-4" />
                  </a>
                )}
                {project.id === "moodbean" && project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-fit items-center gap-2 border border-foreground px-4 py-3 text-sm transition-colors hover:bg-foreground hover:text-background"
                  >
                    Explore the live coffee finder
                    <ArrowUpRight aria-hidden="true" className="size-4" />
                  </a>
                )}
                {project.id === "khaneh-mod-setareh" && <KhanehModGallery />}
                {project.id === "turquoise-jewelry-set" && <TurquoiseJewelryGallery />}
                <p className="border-t border-rule pt-5 text-sm leading-relaxed text-muted-foreground">
                  {project.note}
                </p>
                {project.id === "nikmehr" && <PageLinks />}
              </DialogContent>
            </Dialog>
          </li>
        ))}
      </ol>
      <div className="mt-12 border-t border-rule pt-6">
        <p className="eyebrow">Nikmehr · Selected published content</p>
        <p className="mt-2 max-w-prose text-sm leading-relaxed text-muted-foreground">
          Published examples associated with the Nikmehr coordination and publishing role; not
          attributed to either page individually.
        </p>
        <PublishedExamples />
      </div>
    </>
  );
}
