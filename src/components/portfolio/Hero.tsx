import { useState } from "react";
import { profile } from "@/data/portfolio";
import { Reveal } from "./shared";

const identityArtwork =
  "https://www.dropbox.com/scl/fi/qvqr9usadtyvlz88bhtzb/file_0000000031dc8210ab260c3660f34e9e.png?rlkey=yfkgjtljb3i3c1v3lykyaenl3&raw=1";
const portraitVideo =
  "https://www.dropbox.com/scl/fi/9mcod1ulkfy8jej9eyjdk/904378526_1795363121570568.mp4?rlkey=hww5vo4rfmhnjp1kto3w93mko&raw=1";

export function Hero() {
  const [portraitUnavailable, setPortraitUnavailable] = useState(false);

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="pm-hero pm-hero--fullbleed"
    >
      <Reveal className="pm-hero-copy col-span-1 md:col-span-7">
        <p className="pm-hero-eyebrow eyebrow mb-7 flex items-center gap-3">
          <span className="pm-eyebrow-dot" aria-hidden="true" />
          <span>PORTFOLIO — 2026</span>
        </p>

        <h1 id="hero-title" className="pm-hero-title">
          <span>PLAYFUL</span>
          <span className="pm-hero-title-accent">MATTER</span>
        </h1>

        <p className="pm-hero-tagline">Ideas in motion.</p>
        <p className="pm-hero-roles">
          Creative Direction <i aria-hidden="true">·</i> Video Editing <i aria-hidden="true">·</i> Visual Storytelling
        </p>

        <div className="pm-hero-actions">
          <a href="#work" className="pm-cta-primary">
            Explore selected work <span aria-hidden="true">↓</span>
          </a>
        </div>

        <p className="pm-hero-availability">{profile.availability}</p>
      </Reveal>

      <Reveal className="pm-hero-visual-col col-span-1 md:col-span-5">
        <div className="pm-hero-art" aria-label="Playful Matter portrait and sculptural artwork">
          <div className="pm-sculpture-stage" aria-hidden="true">
            <svg className="sr-only" aria-hidden="true" focusable="false">
              <defs>
                <filter id="pm-liquid-warp" x="-35%" y="-35%" width="170%" height="170%" colorInterpolationFilters="sRGB">
                  <feTurbulence type="fractalNoise" baseFrequency="0.014 0.021" numOctaves="2" seed="8" result="liquidNoise">
                    <animate attributeName="baseFrequency" values="0.010 0.015;0.022 0.012;0.013 0.024;0.010 0.015" dur="7.2s" repeatCount="indefinite" />
                  </feTurbulence>
                  <feDisplacementMap in="SourceGraphic" in2="liquidNoise" scale="20" xChannelSelector="R" yChannelSelector="G">
                    <animate attributeName="scale" values="16;30;20;27;16" dur="6.4s" repeatCount="indefinite" />
                  </feDisplacementMap>
                </filter>
              </defs>
            </svg>
            <img
              className="pm-sculpture"
              src={identityArtwork}
              alt=""
              fetchPriority="high"
              draggable={false}
              onError={(event) => {
                event.currentTarget.style.visibility = "hidden";
              }}
            />
            <span className="pm-form pm-form--lime" />
            <span className="pm-form pm-form--pink" />
            <span className="pm-form pm-form--cream" />
            <span className="pm-form pm-form--green" />
          </div>

          <div className="pm-portrait-wrap">
            <div className="pm-portrait-fallback" aria-hidden="true">
              <span>Portrait</span>
              <small>Ideas in motion</small>
            </div>
            {!portraitUnavailable && (
              <video
                className="pm-portrait-video"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster={identityArtwork}
                aria-label="Animated portrait"
                onError={() => setPortraitUnavailable(true)}
              >
                <source src={portraitVideo} type="video/mp4" />
              </video>
            )}
          </div>

          <p className="pm-art-caption">
            <span className="pm-art-caption-mark" aria-hidden="true" />
            A little life, in motion
          </p>
          <span className="pm-art-index" aria-hidden="true">PM — 001 / FORM STUDY</span>
        </div>
      </Reveal>
    </section>
  );
}
