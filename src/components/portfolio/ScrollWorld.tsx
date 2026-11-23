import { useEffect, useState } from "react";

export function ScrollWorld() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
        setProgress(Math.min(1, Math.max(0, window.scrollY / max)));
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

  const turn = -10 + progress * 34;
  const lift = progress * -18;
  const fold = progress * 18;

  return (
    <div className="pm-world" aria-hidden="true">
      <div className="pm-world__art" style={{ opacity: 0.62 - progress * 0.12 }}>
        <svg className="pm-world__mark" viewBox="0 0 440 320" role="presentation">
          <defs>
            <filter id="pm-paper-shadow" x="-35%" y="-35%" width="170%" height="180%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="7" />
              <feOffset dy="11" />
              <feComponentTransfer><feFuncA type="linear" slope=".2" /></feComponentTransfer>
              <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <linearGradient id="pm-lime-paper" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#dcebb9" />
              <stop offset="1" stopColor="#9eb67a" />
            </linearGradient>
            <linearGradient id="pm-pink-paper" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#f5e6ed" />
              <stop offset="1" stopColor="#c12864" />
            </linearGradient>
          </defs>
          <g className="pm-world__composition" style={{ transform: `translateY(${lift}px) rotate(${turn}deg)` }}>
            <path d="M94 177 C65 126 97 72 154 70 C194 69 215 99 212 132 C209 166 180 190 147 185 C118 181 111 151 126 132 C139 115 163 117 173 132"
              fill="none" stroke="#243e24" strokeWidth="34" strokeLinecap="round" opacity=".10" transform="translate(0 9)" />
            <path d="M94 177 C65 126 97 72 154 70 C194 69 215 99 212 132 C209 166 180 190 147 185 C118 181 111 151 126 132 C139 115 163 117 173 132"
              fill="none" stroke="url(#pm-lime-paper)" strokeWidth="30" strokeLinecap="round" filter="url(#pm-paper-shadow)" />
            <path d="M211 132 C239 92 293 91 322 122 C351 153 340 205 303 221 C273 234 241 218 239 189 C237 167 255 150 275 155"
              fill="none" stroke="#c12864" strokeWidth="29" strokeLinecap="round" filter="url(#pm-paper-shadow)"
              style={{ transform: `rotate(${fold}deg)`, transformOrigin: "245px 166px" }} />
            <path d="M116 220 C150 257 218 267 268 238 C296 222 310 197 306 173"
              fill="none" stroke="#f5e6ed" strokeWidth="22" strokeLinecap="round" filter="url(#pm-paper-shadow)"
              style={{ transform: `translateY(${-progress * 10}px)` }} />
            <circle cx="214" cy="164" r="23" fill="#f4f1ea" stroke="#243e24" strokeWidth="2" filter="url(#pm-paper-shadow)" />
            <circle cx="214" cy="164" r="8" fill="#c12864" />
            <circle cx="82" cy="222" r="8" fill="#9eb67a" />
            <circle cx="348" cy="102" r="6" fill="#c12864" />
            <path d="M68 265 H372" stroke="#243e24" strokeWidth="1" opacity=".18" />
          </g>
        </svg>
      </div>
    </div>
  );
}
