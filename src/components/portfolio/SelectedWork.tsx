import { ArrowUpRight, Play, Plus } from "lucide-react";
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
const turquoiseVideo =
  "https://www.dropbox.com/scl/fi/83wizcnapp7geg9n0t5j1/lv_0_20260924152412.mp4?rlkey=nfirr8y5k3tov77hodlhsbw2m&raw=1";
const turkishCoffeeCover =
  "https://www.dropbox.com/scl/fi/kvfuw5kdovtngybol6ia0/lv_0_20260919130442.jpg?rlkey=h11cbdjbe82q6ztuygi7zq91g&raw=1";
const setareFashionFilmVideo =
  "https://www.dropbox.com/scl/fi/ekhldz7uwyjlww1o6s5eq/VID_20261118_085945_038_bsl.mp4?rlkey=51mztc574pp8rb9faplrqyxq9&raw=1";

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
      <video
        controls
        playsInline
        preload="metadata"
        poster={turquoiseCover}
        className="mt-4 max-h-[560px] w-full bg-card"
      >
        <source src={turquoiseVideo} type="video/mp4" />
        Your browser does not support the video element.
      </video>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-foreground">
        AI-generated concept imagery · Model view, product detail and video · Self-initiated project
      </figcaption>
    </figure>
  );
}


function SayehGallery() {
  return (
    <figure className="border-t border-rule pt-5">
      <div className="flex min-h-72 flex-col items-center justify-center border border-rule bg-card p-8 text-center">
        <p className="eyebrow text-accent">CHARACTER DESIGN / VISUAL DEVELOPMENT</p>
        <p className="mt-5 font-display text-5xl tracking-tight text-accent">SAYEH</p>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          Original character design · Turnaround · Expression studies · Detail development
        </p>
        <p className="mt-6 border-t border-rule pt-4 text-xs text-muted-foreground">
          Character sheet artwork is awaiting its repository asset upload.
        </p>
      </div>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-foreground">
        Original character designed independently by Setareh Rahimi, from concept through final presentation.
      </figcaption>
    </figure>
  );
}

function SetareFashionFilmGallery() {
  return (
    <figure className="border-t border-rule pt-5">
      <video
        controls
        playsInline
        preload="metadata"
        className="mx-auto max-h-[720px] w-full bg-card object-contain"
      >
        <source src={setareFashionFilmVideo} type="video/mp4" />
        Your browser does not support the video element.
      </video>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-foreground">
        Setare Fashion House · Autumn Collection · Self-directed fashion film
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
  const looks = [
    {
      title: "Navy Ribbed Turtleneck",
      images: [
        {
          label: "Original · Tailor’s Dummy",
          src: "https://www.dropbox.com/scl/fi/fiox9e6ibonzy1r88ry4p/IMG_20261113_211925_973.jpg?rlkey=7harvn76dtwvtk9nf0uxbw1nh&raw=1",
        },
        {
          label: "Ghost Mannequin",
          src: "https://www.dropbox.com/scl/fi/pfyvapnem382ce2tm2q34/IMG_20261113_211945_305.jpg?rlkey=66ozr21hu7uilf5tqsxgwkcc9&raw=1",
        },
        {
          label: "On-Model Fit",
          src: "https://www.dropbox.com/scl/fi/vxb6xr81fejax5ga9qi95/IMG_20261113_211937_951.jpg?rlkey=ur02358bez5qia0jmfi7dx2r8&raw=1",
        },
      ],
    },
    {
      title: "Grey Ribbed Turtleneck",
      images: [
        {
          label: "Original · Tailor’s Dummy",
          src: "https://www.dropbox.com/scl/fi/bl4e6trc55k9h83y23uoy/.jpg?rlkey=dynw62cfxsyajju4trmcsumrt&raw=1",
        },
        {
          label: "Ghost Mannequin",
          src: "https://www.dropbox.com/scl/fi/u05hhyzrg6ahlivriqpqo/.png?rlkey=hw438msqjd8fxoqm2iqfbw2ur&raw=1",
        },
        {
          label: "On-Model Fit",
          src: "https://www.dropbox.com/scl/fi/5c2hna2hvzuzv7fuz4cpr/.jpg?rlkey=26znd195tigvaudqhrxyfl5ln&raw=1",
        },
      ],
    },
  ];

  return (
    <figure className="space-y-8 border-t border-rule pt-6">
      {looks.map((look) => (
        <section key={look.title} className="space-y-3">
          <h3 className="eyebrow text-foreground">{look.title} · Product Transformation</h3>
          <ol className="grid gap-3 sm:grid-cols-3">
            {look.images.map((image) => (
              <li key={image.label} className="border border-rule bg-card p-3">
                <img
                  src={image.src}
                  alt={`${look.title} — ${image.label}`}
                  loading="lazy"
                  className="aspect-[3/4] w-full bg-background/50 object-contain"
                />
                <p className="mt-3 border-t border-rule pt-2 text-center font-mono text-xs text-muted-foreground">
                  {image.label}
                </p>
              </li>
            ))}
          </ol>
        </section>
      ))}
      <figcaption className="text-xs leading-relaxed text-muted-foreground">
        Product image transformation · Original tailor’s dummy, ghost mannequin and on-model presentation.
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
                    {project.id === "sayeh-character-design" ? (
                      <span className="relative flex min-h-0 flex-1 flex-col justify-between overflow-hidden border-y border-rule py-5">
                        <span className="eyebrow">CHARACTER DESIGN / VISUAL DEVELOPMENT</span>
                        <span className="font-display text-6xl leading-none tracking-tight text-accent md:text-7xl">SAYEH</span>
                        <span className="text-xs text-muted-foreground">Original character · Design dossier</span>
                      </span>
                    ) : project.id === "junoon-podcast" ? (
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
                        src="https://www.dropbox.com/scl/fi/9opb0khn2jedpgufmwtvl/copilot_image_1794860807764.png?rlkey=1rebrjfdhj9dqjbevync482ub&raw=1"
                        alt=""
                        aria-hidden="true"
                        className="min-h-0 flex-1 w-full bg-card object-contain"
                      />
                    ) : project.id === "moodbean" ? (
                      <img
                        src="https://screenshot2.lovable.dev/lovp_1h4v9rfq2v8c5t2hgfqsp74k92/5f6a8a905d7ec7c86a1f73fe87d4ca09_1794284897805.png"
                        alt="Moodbean Coffee Finder interface preview"
                        aria-hidden="true"
                        className="min-h-0 flex-1 w-full bg-card object-contain"
                      />
                    ) : project.id === "turkish-coffee-packaging" ? (
                      <img
                        src={turkishCoffeeCover}
                        alt=""
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
                    ) : project.id === "setare-fashion-house-film" ? (
                      <span className="relative flex min-h-0 flex-1 flex-col justify-between overflow-hidden border-y border-rule py-5">
                        <span className="eyebrow flex items-center justify-between gap-3">
                          <span>FASHION FILM / PERSONAL PROJECT</span>
                          <span className="inline-flex items-center gap-1.5 text-accent">
                            <Play className="size-3 fill-current" aria-hidden="true" />
                            <span>VIDEO</span>
                          </span>
                        </span>
                        <span className="font-display text-4xl leading-[0.95] tracking-tight text-accent md:text-5xl">
                          SETARE
                          <br />
                          <span className="text-foreground">FASHION HOUSE</span>
                        </span>
                        <span className="flex items-center justify-between border-t border-rule pt-3 text-xs tracking-[0.18em] text-muted-foreground">
                          <span>AUTUMN COLLECTION</span>
                          <span className="inline-flex items-center gap-2 text-accent">
                            <Play className="size-3 fill-current" aria-hidden="true" />
                            WATCH FILM
                          </span>
                        </span>
                        <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
                          <span className="flex size-14 items-center justify-center rounded-full border border-accent/70 bg-background/90 text-accent shadow-lg transition-transform duration-300 group-hover:scale-110">
                            <Play className="ml-1 size-6 fill-current" aria-hidden="true" />
                          </span>
                        </span>
                      </span>
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
                {project.id === "sayeh-character-design" && <SayehGallery />}
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
                {project.id === "setare-fashion-house-film" && <SetareFashionFilmGallery />}
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
