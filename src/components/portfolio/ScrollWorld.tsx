import { useEffect, useState } from "react";

/**
 * A quiet, scroll-built Playful Matter environment.
 * The artwork is decorative; its stages are driven by the document scroll timeline in CSS.
 */
export function ScrollWorld() {
  const [supported, setSupported] = useState(false);

  useEffect(() => {
    setSupported(
      typeof CSS !== "undefined" &&
        CSS.supports("animation-timeline: scroll(root block)"),
    );
  }, []);

  return (
    <div
      className={`pm-world${supported ? " pm-world--scroll-ready" : ""}`}
      aria-hidden="true"
    >
      <svg
        className="pm-world__art"
        viewBox="0 0 1440 1000"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="pm-liquid-pink" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ffd0dc" />
            <stop offset=".48" stopColor="#f18db8" />
            <stop offset="1" stopColor="#e96f9f" />
          </linearGradient>
          <linearGradient id="pm-liquid-lime" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#dff68c" />
            <stop offset=".55" stopColor="#a8d84f" />
            <stop offset="1" stopColor="#72bd48" />
          </linearGradient>
          <linearGradient id="pm-cream" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#fff9ed" />
            <stop offset="1" stopColor="#eadfc9" />
          </linearGradient>
          <radialGradient id="pm-glow">
            <stop offset="0" stopColor="#fff7df" stopOpacity=".9" />
            <stop offset="1" stopColor="#fff7df" stopOpacity="0" />
          </radialGradient>
          <filter id="pm-soft-shadow" x="-30%" y="-30%" width="160%" height="170%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="18" />
            <feOffset dy="16" />
            <feComponentTransfer>
              <feFuncA type="linear" slope=".16" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <ellipse cx="740" cy="810" rx="560" ry="140" fill="#e8d9c7" opacity=".22" />
        <g className="pm-world__early">
          <circle cx="260" cy="260" r="92" fill="url(#pm-liquid-lime)" opacity=".8" />
          <circle cx="1150" cy="230" r="62" fill="url(#pm-liquid-pink)" opacity=".8" />
          <circle cx="990" cy="430" r="28" fill="#f6c5d5" opacity=".85" />
          <circle cx="420" cy="560" r="20" fill="#b8df69" opacity=".9" />
          <path d="M80 720 C230 650 300 760 430 700 S650 670 740 730" fill="none" stroke="url(#pm-liquid-pink)" strokeWidth="34" strokeLinecap="round" opacity=".62" />
        </g>

        <g className="pm-world__flow" filter="url(#pm-soft-shadow)">
          <path d="M-80 780 C120 690 210 830 390 750 S650 650 780 720 S1040 810 1190 690 S1390 620 1530 700" fill="none" stroke="url(#pm-liquid-pink)" strokeWidth="76" strokeLinecap="round" />
          <path d="M-70 768 C130 680 220 815 390 738 S650 640 780 706 S1040 790 1190 675 S1390 608 1520 684" fill="none" stroke="#fff0e9" strokeWidth="7" strokeLinecap="round" opacity=".55" />
          <path d="M250 900 C360 820 470 890 560 810 S720 760 840 815" fill="none" stroke="url(#pm-liquid-lime)" strokeWidth="46" strokeLinecap="round" />
        </g>

        <g className="pm-world__assembly" filter="url(#pm-soft-shadow)">
          <path d="M430 730 V590 C430 485 510 410 610 410 H820 C930 410 1000 485 1000 590 V730" fill="none" stroke="url(#pm-cream)" strokeWidth="86" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M530 730 V600 C530 535 575 490 640 490 H790 C855 490 900 535 900 600 V730" fill="none" stroke="url(#pm-liquid-lime)" strokeWidth="58" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M660 730 V620 C660 590 682 568 712 568 H720 C750 568 772 590 772 620 V730" fill="none" stroke="url(#pm-liquid-pink)" strokeWidth="46" strokeLinecap="round" />
          <path d="M360 730 H1080" stroke="#fff8e9" strokeWidth="28" strokeLinecap="round" />
          <path d="M480 780 H960" stroke="#b6d96a" strokeWidth="30" strokeLinecap="round" />
          <path d="M570 830 H870" stroke="#f2a4c1" strokeWidth="26" strokeLinecap="round" />
        </g>

        <g className="pm-world__details">
          <ellipse cx="720" cy="475" rx="210" ry="190" fill="url(#pm-glow)" />
          <circle cx="720" cy="370" r="44" fill="url(#pm-liquid-pink)" />
          <circle cx="720" cy="370" r="15" fill="#fff8e9" opacity=".72" />
          <circle cx="340" cy="610" r="22" fill="#f4b4cb" />
          <circle cx="1090" cy="570" r="30" fill="#b6dc63" />
          <circle cx="1080" cy="570" r="10" fill="#f8f1df" opacity=".8" />
          <path d="M680 330 Q720 275 760 330" fill="none" stroke="#fff8e9" strokeWidth="8" strokeLinecap="round" opacity=".85" />
          <path d="M690 300 L720 265 L750 300" fill="none" stroke="#f18db8" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
      <div className="pm-world__wash" />
    </div>
  );
}
