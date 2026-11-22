import { useEffect, useState } from "react";

const liquidStages = [
  "M-90 760 C150 680 260 790 470 750 C620 720 820 720 970 750 C1180 800 1300 680 1530 740 L1530 1050 L-90 1050Z",
  "M-90 760 C150 680 260 790 470 700 C590 650 610 500 720 500 C830 500 850 650 970 700 C1180 800 1300 680 1530 740 L1530 1050 L-90 1050Z",
  "M-90 760 C150 680 260 790 470 650 C560 580 550 350 650 350 C710 350 680 570 720 570 C760 570 730 350 790 350 C890 350 880 580 970 650 C1180 800 1300 680 1530 740 L1530 1050 L-90 1050Z",
  "M-90 760 C150 680 260 790 430 650 C500 590 470 390 570 330 C650 280 680 430 720 470 C760 430 790 280 870 330 C970 390 940 590 1010 650 C1180 800 1300 680 1530 740 L1530 1050 L-90 1050Z",
];

function mixPath(from: string, to: string, amount: number) {
  const a = from.match(/-?\d+(?:\.\d+)?/g)?.map(Number) ?? [];
  const b = to.match(/-?\d+(?:\.\d+)?/g)?.map(Number) ?? [];
  let index = 0;
  return from.replace(/-?\d+(?:\.\d+)?/g, () => {
    const value = a[index] + (b[index] - a[index]) * amount;
    index += 1;
    return value.toFixed(1);
  });
}

function shapeAt(progress: number) {
  const scaled = Math.min(liquidStages.length - 1, Math.max(0, progress) * (liquidStages.length - 1));
  const stage = Math.floor(scaled);
  return stage >= liquidStages.length - 1
    ? liquidStages[liquidStages.length - 1]
    : mixPath(liquidStages[stage], liquidStages[stage + 1], scaled - stage);
}

/** One continuous liquid body that physically changes silhouette with page scroll. */
export function ScrollWorld() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const root = document.documentElement;
        const range = Math.max(1, root.scrollHeight - window.innerHeight);
        setProgress(Math.min(1, Math.max(0, window.scrollY / range)));
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

  const build = Math.min(1, Math.max(0, (progress - 0.48) / 0.48));
  const finale = Math.min(1, Math.max(0, (progress - 0.86) / 0.14));
  const surfacePath = shapeAt(progress);
  const wobble = 10 + progress * 24;

  return (
    <div className="pm-world" aria-hidden="true">
      <svg className="pm-world__art" viewBox="0 0 1440 1000" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="pm-liquid-pink" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ffe5ed" /><stop offset=".38" stopColor="#f6a2c4" /><stop offset=".78" stopColor="#e96fa5" /><stop offset="1" stopColor="#c94f85" />
          </linearGradient>
          <linearGradient id="pm-liquid-lime" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#f1ffb8" /><stop offset=".5" stopColor="#c9ed72" /><stop offset="1" stopColor="#82bd4c" />
          </linearGradient>
          <linearGradient id="pm-liquid-cream" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#fff5df" /><stop offset="1" stopColor="#efc3a9" />
          </linearGradient>
          <radialGradient id="pm-liquid-shine" cx="28%" cy="18%" r="82%">
            <stop offset="0" stopColor="#fff" stopOpacity=".92" /><stop offset=".34" stopColor="#fff" stopOpacity=".22" /><stop offset="1" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
          <filter id="pm-goo" x="-25%" y="-35%" width="150%" height="180%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="19" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -9" result="goo" />
          </filter>
          <filter id="pm-depth" x="-30%" y="-35%" width="160%" height="180%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="18" result="shadow" />
            <feOffset in="shadow" dy="22" result="offset" />
            <feColorMatrix in="offset" type="matrix" values="0 0 0 0 .22  0 0 0 0 .18  0 0 0 0 .23  0 0 0 .18 0" result="shade" />
            <feMerge><feMergeNode in="shade" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* The same pool stretches upward; overlapping volumes fuse into one silhouette. */}
        <g className="pm-world__liquid" filter="url(#pm-goo)">
          <path d={surfacePath} fill="url(#pm-liquid-pink)" />
          <ellipse cx="260" cy="770" rx="205" ry="116" fill="url(#pm-liquid-lime)" />
          <ellipse cx="720" cy={790 - progress * 155} rx={235 - progress * 38} ry={112 + progress * 48} fill="url(#pm-liquid-cream)" />
          <ellipse cx="1180" cy="770" rx="220" ry="128" fill="url(#pm-liquid-pink)" />
          <path d={`M720 860 C${600 - progress * 45} 760 ${640 - progress * 65} ${620 - progress * 235} 720 ${610 - progress * 250} C${800 + progress * 65} ${620 - progress * 235} ${840 + progress * 45} 760 720 860Z`} fill="url(#pm-liquid-lime)" opacity=".96" />
          <circle cx={440 - progress * 65} cy={690 - progress * 210} r={48 + progress * 34} fill="url(#pm-liquid-lime)" />
          <circle cx={1000 + progress * 55} cy={690 - progress * 210} r={55 + progress * 34} fill="url(#pm-liquid-pink)" />
        </g>

        {/* A moving highlight makes the surface read as glossy, viscous material. */}
        <g className="pm-world__liquid-gloss" opacity=".62">
          <path d={surfacePath} fill="url(#pm-liquid-shine)" />
          <path d={`M80 ${735 - progress * 120} C260 ${665 - progress * 90} 360 ${790 - progress * 160} 520 ${690 - progress * 240} S820 ${660 - progress * 230} 970 ${710 - progress * 150} S1200 ${770 - progress * 90} 1370 ${690 - progress * 140}`} fill="none" stroke="#fff" strokeWidth={wobble} strokeLinecap="round" opacity=".46" />
          <ellipse cx={350 + progress * 210} cy={650 - progress * 185} rx="112" ry="24" fill="#fff" opacity=".42" />
        </g>

        {/* The final arch is revealed only after the liquid has already grown into it. */}
        <g className="pm-world__sculpture" opacity={build} transform={`translate(0 ${(1 - build) * 105})`} filter="url(#pm-depth)">
          <path d="M410 780 V565 C410 420 520 330 655 330 H790 C925 330 1030 425 1030 565 V780 H930 V570 C930 480 865 425 785 425 H660 C575 425 510 480 510 570 V780Z" fill="url(#pm-liquid-cream)" />
          <path d="M530 780 V600 C530 520 585 470 660 470 H785 C860 470 910 520 910 600 V780 H835 V610 C835 565 815 545 775 545 H670 C630 545 605 565 605 610 V780Z" fill="url(#pm-liquid-lime)" />
          <path d="M665 780 V660 C665 625 685 605 720 605 C755 605 775 625 775 660 V780Z" fill="url(#pm-liquid-pink)" />
          <path d="M330 770 C470 720 550 795 720 765 C890 735 990 720 1110 770 L1080 835 H360Z" fill="url(#pm-liquid-lime)" />
          <path d="M520 455 C560 375 635 360 700 360" fill="none" stroke="#fff" strokeWidth="13" strokeLinecap="round" opacity=".68" />
          <path d="M800 360 C890 380 930 430 945 490" fill="none" stroke="#fff" strokeWidth="11" strokeLinecap="round" opacity=".56" />
        </g>
        <g opacity={finale} transform={`translate(0 ${(1 - finale) * 35})`}>
          <ellipse cx="720" cy="300" rx="175" ry="66" fill="url(#pm-liquid-shine)" />
          <circle cx="720" cy="286" r="28" fill="url(#pm-liquid-pink)" />
          <circle cx="710" cy="277" r="9" fill="#fff" opacity=".72" />
        </g>
      </svg>
      <div className="pm-world__wash" />
    </div>
  );
}
