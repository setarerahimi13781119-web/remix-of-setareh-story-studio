import { useEffect, useState } from "react";
import "./intro-overlay.css";

export function IntroOverlay() {
  const [phase, setPhase] = useState<"enter" | "exit">("enter");
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const exitTimer = window.setTimeout(() => setPhase("exit"), reducedMotion ? 250 : 1450);
    const finishTimer = window.setTimeout(() => setFinished(true), reducedMotion ? 450 : 2150);
    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(finishTimer);
    };
  }, []);

  if (finished) return null;

  return (
    <div className="intro-overlay" data-phase={phase} role="status" aria-label="Opening portfolio">
      <div className="intro-overlay__content">
        <div className="intro-overlay__monogram" aria-hidden="true">
          SR<span>.</span>
        </div>
        <div className="intro-overlay__rule">
          <i />
        </div>
        <p className="intro-overlay__name">SETAREH RAHIMI</p>
        <p className="intro-overlay__caption">
          CREATIVE PORTFOLIO <span>—</span> 2026
        </p>
      </div>
    </div>
  );
}
