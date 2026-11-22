import { useState } from "react";
import "./EntryExperience.css";

type EntryExperienceProps = {
  onEnter: () => void;
  onFinish: () => void;
};

export function EntryExperience({ onEnter, onFinish }: EntryExperienceProps) {
  const [leaving, setLeaving] = useState(false);

  const enter = () => {
    if (leaving) return;
    setLeaving(true);
    onEnter();
  };

  return (
    <div
      className={`pm-entry-screen${leaving ? " is-leaving" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label="Enter Playful Matter portfolio"
      onAnimationEnd={(event) => {
        if (event.target === event.currentTarget && leaving) onFinish();
      }}
    >
      <div className="pm-entry-grain" aria-hidden="true" />
      <div className="pm-entry-orbit pm-entry-orbit--one" aria-hidden="true" />
      <div className="pm-entry-orbit pm-entry-orbit--two" aria-hidden="true" />
      <div className="pm-entry-shape pm-entry-shape--lime" aria-hidden="true" />
      <div className="pm-entry-shape pm-entry-shape--pink" aria-hidden="true" />
      <div className="pm-entry-shape pm-entry-shape--green" aria-hidden="true" />
      <div className="pm-entry-shape pm-entry-shape--cream" aria-hidden="true" />

      <div className="pm-entry-content">
        <p className="pm-entry-eyebrow">A CREATIVE PORTFOLIO · 2026</p>
        <div className="pm-entry-wordmark" aria-label="Playful Matter">
          <span>PLAYFUL</span>
          <span>MATTER<span className="pm-entry-period">.</span></span>
        </div>
        <p className="pm-entry-tagline">Ideas in motion.</p>
        <button className="pm-entry-button" type="button" onClick={enter}>
          <span className="pm-entry-button-label">ENTER THE MOTION</span>
          <span className="pm-entry-button-arrow" aria-hidden="true">↗</span>
        </button>
        <p className="pm-entry-note">TAP TO EXPLORE · SOUND OFF</p>
      </div>

      <div className="pm-entry-footer" aria-hidden="true">
        <span>PLAYFUL MATTER</span>
        <span>FORM / MOTION / STORY</span>
      </div>
    </div>
  );
}
