import { useEffect, useState } from "react";
import "./intro-overlay.css";

export function IntroOverlay() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 2100);
    return () => window.clearTimeout(timer);
  }, []);
  if (!visible) return null;
  return (
    <div className="intro-overlay" aria-label="Setareh Rahimi portfolio introduction">
      <div className="intro-overlay__frame">
        <span className="intro-overlay__eyebrow">INDEPENDENT CREATIVE PRACTICE</span>
        <div className="intro-overlay__monogram">SR<span>.</span></div>
        <div className="intro-overlay__rule" />
        <span className="intro-overlay__name">SETAREH RAHIMI</span>
        <span className="intro-overlay__discipline">CONTENT · VIDEO · VISUAL STORYTELLING</span>
      </div>
    </div>
  );
}
