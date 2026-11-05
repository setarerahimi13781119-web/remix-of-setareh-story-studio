import { ArrowUpRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
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

const junoonSquares = [
  { src: junoonGhostship.url, alt: "Monochrome ship illustration in a circular frame with red accents" },
  { src: junoonMcnally.url, alt: "Documentary-style black-and-white portrait in a circular vignette with red strokes" },
  { src: junoonRogers.url, alt: "Black-and-white family portrait in a circular frame with red marks" },
  { src: junoonUnterweger.url, alt: "Black-and-white portrait in a circular frame with red slashes and Persian text" },
];

const kmsSlides = [
  { src: kms1.url, alt: "Slide 01 of 05: The digital experience — Khaneh Mod Setareh storefront cover" },
  { src: kms2.url, alt: "Slide 02 of 05: One brand, two screens — desktop and mobile header side by side" },
  { src: kms3.url, alt: "Slide 03 of 05: The visual system — colour palette, typeface and hierarchy" },
  { src: kms4.url, alt: "Slide 04 of 05: The complete experience — full page layout" },
  { src: kms5.url, alt: "Slide 05 of 05: The final note — closing slide" },
];

function KhanehModGallery() {
  return (
    <figure className="border-t border-rule pt-5">
      <ol className="grid gap-3 sm:grid-cols-2">
        {kmsSlides.map((img, i) => (
          <li key={img.src} className={i === 0 ? "sm:col-span-2" : ""}>
            <img src={img.src} alt={img.alt} loading="lazy" className="aspect-[4/5] w-full bg-card object-contain" />
          </li>
        ))}
      </ol>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-foreground">Presentation slides 01–05 · Khaneh Mod Setareh ecommerce visual design exploration by Setareh Rahimi.</figcaption>
    </figure>
  );
}

function JunoonGallery() {
  return (
    <figure className="mt-5">
      <div className="grid gap-3 sm:grid-cols-2">
        <img src={junoonPoster.url} alt="Vertical evidence-file style poster exploration with Junoon stamp" loading="lazy" className="h-full w-full bg-card object-contain" />
        <div className="grid grid-cols-2 content-start gap-3">
          {junoonSquares.map((img) => (
            <img key={img.src} src={img.src} alt={img.alt} loading="lazy" className="aspect-square w-full bg-card object-contain" />
          ))}
        </div>
      </div>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-foreground">Visual design explorations by Setareh Rahimi · created during a recent team collaboration · not the podcast's original identity.</figcaption>
    </figure>
  );
}

function PageLinks() {
  return (
    <ul className="mt-5 flex flex-wrap gap-3" aria-label="Nikmehr Instagram pages">
      {nikmehrWork.pages.map((page) => (
        <li key={page.name}>
          {page.href && (
            <Button asChild variant="outline" className="h-auto gap-2 rounded-none border-foreground bg-transparent px-4 py-2 font-normal shadow-none hover:bg-foreground hover:text-background">
              <a href={page.href} target="_blank" rel="noopener noreferrer">
                <span dir="rtl">{page.name}</span><ArrowUpRight aria-hidden="true" />
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
    <ul className={compact ? "mt-4 grid gap-3 sm:grid-cols-2" : "mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"}>
      {work.map((reel) => (
        <li key={reel.id}>
          <a href={reel.href} target="_blank" rel="noopener noreferrer" className="group block border border-rule p-5 transition-colors hover:border-accent">
            {!compact && (
              <div aria-hidden="true" className="relative flex aspect-[9/14] items-end overflow-hidden bg-card p-4">
                <span className="absolute top-3 left-4 eyebrow">{reel.kind}</span>
                <span className="absolute inset-x-4 top-1/2 h-px bg-rule" />
                <span className="font-display text-8xl leading-none transition-all duration-500 group-hover:-translate-y-2 group-hover:text-accent">{reel.id}</span>
              </div>
            )}
            <div className={`flex items-start justify-between gap-3 ${compact ? "" : "mt-4"}`}>
              <div>
                <p className="eyebrow">{reel.platform} · {reel.kind}</p>
                <p className="mt-1 font-display text-xl">{reel.label}</p>
              </div>
              <ArrowUpRight className="size-4 shrink-0" aria-hidden="true" />
            </div>
            <span className="sr-only">(opens Instagram in a new tab)</span>
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
        {projects.map((project, index) => (
          <li key={project.id} className="min-w-0">
            <Dialog>
              <article className="flex h-full flex-col border border-rule p-5 md:p-6">
                <DialogTrigger asChild>
                  <Button variant="ghost" aria-label={`View ${project.title} project`} className="group relative flex h-auto w-full flex-col items-stretch justify-between gap-6 whitespace-normal rounded-none bg-card p-5 text-left font-normal hover:bg-secondary md:p-7 aspect-[4/3]">
                    <span className="eyebrow flex items-center justify-between gap-3">
                      <span>{project.coverLabel}</span><Plus className="shrink-0 text-foreground" aria-hidden="true" />
                    </span>
                    {project.id === "junoon-podcast" ? (
                      <img src={junoonPoster.url} alt="" aria-hidden="true" className="min-h-0 flex-1 w-full object-contain" />
                    ) : project.id === "khaneh-mod-setareh" ? (
                      <img src={kms1.url} alt="" aria-hidden="true" className="min-h-0 flex-1 w-full object-contain" />
                    ) : (
                      <span className="font-display text-7xl leading-none text-accent/80 md:text-8xl" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                    )}
                    <span className="border-t border-rule pt-4 font-display text-3xl leading-tight md:text-4xl">{project.title}</span>
                  </Button>
                </DialogTrigger>
                <div className="mt-5 flex flex-1 flex-col">
                  <p className="eyebrow">{project.category}</p>
                  <h3 className="mt-2 font-display text-2xl">{project.title}</h3>
                  <p className="mt-2 text-sm text-accent">{project.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
                  {project.id === "nikmehr" && <PageLinks />}
                  <DialogTrigger asChild>
                    <Button variant="link" className="mt-auto h-auto justify-start self-start rounded-none px-0 pt-5 pb-0 font-normal">
                      Project context<Plus aria-hidden="true" /><span className="sr-only">: {project.title}</span>
                    </Button>
                  </DialogTrigger>
                </div>
              </article>
              <DialogContent className="z-[70] max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-3xl gap-5 overflow-y-auto rounded-none p-6 shadow-none sm:rounded-none md:p-10">
                <p className="eyebrow pr-8">{project.category} · {project.status === "exploration" ? "Exploration" : project.status === "team-collaboration" ? "Recent team collaboration" : "Verified role"}</p>
                <DialogTitle className="pr-6 font-display text-3xl font-normal leading-tight tracking-normal md:text-5xl">{project.title}</DialogTitle>
                <DialogDescription className="text-base leading-relaxed">{project.context}</DialogDescription>
                <dl className="border-t border-rule pt-5">
                  <dt className="eyebrow">Role</dt>
                  <dd className="mt-2 text-accent">{project.role}</dd>
                  <dt className="eyebrow mt-6">Scope</dt>
                  <dd><ul className="mt-2 space-y-2">{project.scope.map((item) => <li key={item} className="flex gap-3 text-sm leading-relaxed"><span aria-hidden="true" className="text-accent">—</span>{item}</li>)}</ul></dd>
                </dl>
                {project.tracks?.map((track) => (
                  <section key={track.title} className="border-t border-rule pt-5">
                    <h3 className="font-display text-2xl">{track.title}</h3>
                    <p className="eyebrow mt-2">{track.label}</p>
                    <ul className="mt-3 space-y-2">{track.items.map((item) => <li key={item} className="flex gap-3 text-sm leading-relaxed"><span aria-hidden="true" className="text-accent">—</span>{item}</li>)}</ul>
                    {project.id === "junoon-podcast" && track.title === "Visual Design Exploration" && <JunoonGallery />}
                  </section>
                ))}
                {project.id === "khaneh-mod-setareh" && <KhanehModGallery />}
                <p className="border-t border-rule pt-5 text-sm leading-relaxed text-muted-foreground">{project.note}</p>
                {project.id === "nikmehr" && (
                  <div>
                    <PageLinks />
                    <p className="eyebrow mt-8">Selected published content · Nikmehr</p>
                    <PublishedExamples compact />
                  </div>
                )}
              </DialogContent>
            </Dialog>
          </li>
        ))}
      </ol>
      <div className="mt-12 border-t border-rule pt-6">
        <p className="eyebrow">Nikmehr · Selected published content</p>
        <p className="mt-2 max-w-prose text-sm leading-relaxed text-muted-foreground">Published examples associated with the Nikmehr coordination and publishing role; not attributed to either page individually.</p>
        <PublishedExamples />
      </div>
    </>
  );
}