import { useEffect, useRef, useState } from "react";
import "./observer-story.css";
import junoonPoster from "@/assets/junoon_case_file_poster.jpg.asset.json";
import junoonGhostship from "@/assets/junoon_case_ghostship.jpg.asset.json";
import junoonMcnally from "@/assets/junoon_case_mcnally.jpg.asset.json";
import khanehModSystem from "@/assets/khaneh_mod_setareh_slide_03.png.asset.json";

const ASSET_ORIGIN =
  "https://id-preview--c40cda6a-8161-45d2-9902-76acbf71b9f3.lovable.app";
const assetUrl = (path: string) => new URL(path, ASSET_ORIGIN).toString();

const shalvarOne =
  "https://www.dropbox.com/scl/fi/tj2gt8xclv481hdxyyini/grok_1794593164081.jpg?rlkey=tmq9k2vxeu1rxjlb0v5z0iu0i&raw=1";
const shalvarTwo =
  "https://www.dropbox.com/scl/fi/sxdoctzwlc3rco09v2skp/IMG_20261113_211756_521.jpg?rlkey=fswq0c1qhe6yly5cc01uzz7g8&raw=1";

const frames = [
  {
    src: assetUrl(junoonPoster.url),
    alt: "Junoon Podcast — documentary crime-podcast cover exploration",
    label: "JUNOON / PORTRAIT",
  },
  {
    src: shalvarOne,
    alt: "Khaneh Shalvar — autumn fashion campaign visual",
    label: "SHALVAR / CAMPAIGN",
  },
  {
    src: assetUrl(khanehModSystem.url),
    alt: "Khaneh Mod Setareh — visual system and typography study",
    label: "KHANEH MOD / SYSTEM",
  },
  {
    src: assetUrl(junoonGhostship.url),
    alt: "Junoon Podcast — Ghostship case cover exploration",
    label: "JUNOON / DETAIL",
  },
  {
    src: shalvarTwo,
    alt: "Khaneh Shalvar — fashion product visual exploration",
    label: "SHALVAR / FORM",
  },
  {
    src: assetUrl(junoonMcnally.url),
    alt: "Junoon Podcast — McNally case cover exploration",
    label: "JUNOON / IMAGE",
  },
];

type Phase = "opening" | "details" | "reveal";

export function ObserverStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const [phase, setPhase] = useState<Phase>("opening");

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = section.getBoundingClientRect();
        const travel = Math.max(1, section.offsetHeight - window.innerHeight);
        const progress = Math.min(1, Math.max(0, -rect.top / travel));
        const next: Phase =
          progress < 0.34 ? "opening" : progress < 0.68 ? "details" : "reveal";
        section.dataset.phase = next;
        section.style.setProperty("--observer-progress", progress.toFixed(3));
        setPhase((current) => (current === next ? current : next));
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="observer"
      className="observer-story"
      data-phase={phase}
      aria-labelledby="observer-title"
    >
      <div className="observer-story__sticky">
        <div className="observer-story__topline">
          <span>01 / THE OBSERVER</span>
          <span className="observer-story__topline-note">A STUDY IN PERSPECTIVE</span>
        </div>

        <div className="observer-story__hero-image" aria-hidden="true">
          <img src={frames[0].src} alt="" />
          <span className="observer-story__image-index">FIG. 01 — FIRST IMPRESSION</span>
        </div>

        <div className="observer-story__opening">
          <p className="observer-story__eyebrow">THE FIRST ACT IS PAYING ATTENTION</p>
          <h2 id="observer-title">
            LOOK
            <br />
            CLOSER<span>.</span>
          </h2>
          <p className="observer-story__scroll-cue">SCROLL TO SHIFT THE FRAME <span>↓</span></p>
        </div>

        <div className="observer-story__details" aria-label="Details from selected visual projects">
          <div className="observer-story__details-heading">
            <span>NOTICED IN THE DETAILS</span>
            <span>SHAPE / TEXTURE / CONTEXT</span>
          </div>
          {frames.slice(1, 4).map((frame, index) => (
            <figure className={`observer-story__detail observer-story__detail--${index + 1}`} key={frame.label}>
              <img src={frame.src} alt={frame.alt} loading="lazy" />
              <figcaption>{frame.label}</figcaption>
            </figure>
          ))}
          <p className="observer-story__detail-word observer-story__detail-word--one">SHAPE</p>
          <p className="observer-story__detail-word observer-story__detail-word--two">CONTEXT</p>
        </div>

        <div className="observer-story__reveal">
          <div className="observer-story__reveal-copy">
            <p className="observer-story__eyebrow">A DIFFERENT WAY OF SEEING</p>
            <h2>
              A DIFFERENT
              <br />
              PERSPECTIVE
              <br />
              CHANGES
              <br />
              EVERYTHING<span>.</span>
            </h2>
            <p className="observer-story__reveal-note">
              One point of view. Many ways to frame it.
            </p>
          </div>
          <div className="observer-story__collage" aria-label="A collage of work across three projects">
            {frames.map((frame, index) => (
              <figure className={`observer-story__collage-item observer-story__collage-item--${index + 1}`} key={frame.label}>
                <img src={frame.src} alt={frame.alt} loading="lazy" />
                <figcaption>{frame.label}</figcaption>
              </figure>
            ))}
            <span className="observer-story__silver-mark" aria-hidden="true">SR / 01</span>
          </div>
          <div className="observer-story__transition">
            <span>FROM SEEING</span>
            <span className="observer-story__transition-line" />
            <span>TO EXPLORING <b>02 ↗</b></span>
          </div>
        </div>

        <div className="observer-story__progress" aria-hidden="true">
          <span />
        </div>
      </div>
      <p className="sr-only" aria-live="polite">
        {phase === "opening"
          ? "The Observer. Look closer."
          : phase === "details"
            ? "The image separates into details from three visual projects."
            : "The details come together into a collage across three projects."}
      </p>
    </section>
  );
}
