import { useEffect, useState } from "react";

const liquidStages = [
  "M-120 820 C90 760 210 830 380 790 C540 750 620 790 720 800 C850 810 930 745 1080 785 C1230 825 1350 755 1560 815 L1560 1120 L-120 1120Z",
  "M-120 820 C90 760 210 830 380 790 C520 755 550 610 650 570 C735 535 790 610 860 690 C930 760 990 745 1080 785 C1230 825 1350 755 1560 815 L1560 1120 L-120 1120Z",
  "M-120 820 C90 760 210 830 380 790 C500 760 510 560 600 470 C660 410 700 520 720 575 C740 520 780 410 840 470 C930 560 940 760 1080 785 C1230 825 1350 755 1560 815 L1560 1120 L-120 1120Z",
  "M-120 820 C90 760 210 830 360 790 C470 760 470 560 555 455 C625 365 685 460 720 520 C755 460 815 365 885 455 C970 560 970 760 1080 785 C1230 825 1350 755 1560 815 L1560 1120 L-120 1120Z",
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

/** A vivid, continuous material study that gathers into a sculptural arch as the page moves. */
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

  const build = Math.min(1, Math.max(0, (progress - 0.42) / 0.5));
  const finale = Math.min(1, Math.max(0, (progress - 0.84) / 0.16));
  const surfacePath = shapeAt(progress);
  const rise = progress * 190;

  return (
    <div className="pm-world" aria-hidden="true">
      <svg className="pm-world__art" viewBox="0 0 1440 1100" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="pm-liquid-pink" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ffd9e8" /><stop offset=".34" stopColor="#f58fbd" /><stop offset=".72" stopColor="#e65b9c" /><stop offset="1" stopColor="#b93678" />
          </linearGradient>
          <linearGradient id="pm-liquid-lime" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#f4ffbf" /><stop offset=".42" stopColor="#c9ef62" /><stop offset=".78" stopColor="#91ca3e" /><stop offset="1" stopColor="#579b39" />
          </linearGradient>
          <linearGradient id="pm-liquid-cream" x1="0" y1="0" x2=".15" y2="1">
            <stop offset="0" stopColor="#fff9e9" /><stop offset=".52" stopColor="#f3d9bd" /><stop offset="1" stopColor="#d99c83" />
          </linearGradient>
          <radialGradient id="pm-liquid-shine" cx="28%" cy="16%" r="85%">
            <stop offset="0" stopColor="#fff" stopOpacity=".95" /><stop offset=".32" stopColor="#fff" stopOpacity=".28" /><stop offset="1" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
          <filter id="pm-goo" x="-25%" y="-35%" width="150%" height="180%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="16" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -8" result="goo" />
          </filter>
          <filter id="pm-depth" x="-30%" y="-35%" width="160%" height="180%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="20" result="shadow" />
            <feOffset in="shadow" dy="24" result="offset" />
            <feColorMatrix in="offset" type="matrix" values="0 0 0 0 .18  0 0 0 0 .13  0 0 0 0 .19  0 0 0 .22 0" result="shade" />
            <feMerge><feMergeNode in="shade" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        <g className="pm-world__liquid" filter="url(#pm-goo)">
          <path d={surfacePath} fill="url(#pm-liquid-pink)" />
          <ellipse cx="210" cy={815 - rise * .34} rx={210 + progress * 25} ry={118 + progress * 30} fill="url(#pm-liquid-lime)" />
          <ellipse cx="720" cy={835 - rise * .56} rx={240 - progress * 40} ry={124 + progress * 42} fill="url(#pm-liquid-cream)" />
          <ellipse cx="1230" cy={815 - rise * .34} rx={218 + progress * 20} ry={132 + progress * 25} fill="url(#pm-liquid-pink)" />
          <path d={`M720 900 C${590 - progress * 65} 770 ${600 - progress * 70} ${680 - rise} 720 ${650 - rise} C${840 + progress * 70} ${680 - rise} ${850 + progress * 65} 770 720 900Z`} fill="url(#pm-liquid-lime)" />
          <circle cx={420 - progress * 65} cy={730 - rise * .72} r={52 + progress * 35} fill="url(#pm-liquid-lime)" />
          <circle cx={1020 + progress * 65} cy={730 - rise * .72} r={60 + progress * 32} fill="url(#pm-liquid-pink)" />
        </g>

        <g className="pm-world__gloss" opacity=".8">
          <path d={surfacePath} fill="url(#pm-liquid-shine)" />
          <path d={`M90 ${780 - rise * .4} C270 ${700 - rise * .42} 370 ${825 - rise * .5} 520 ${720 - rise * .75} S830 ${690 - rise * .72} 970 ${750 - rise * .48} S1200 ${810 - rise * .38} 1360 ${730 - rise * .5}`} fill="none" stroke="#fff" strokeWidth={12 + progress * 15} strokeLinecap="round" opacity=".58" />
          <ellipse cx={340 + progress * 220} cy={690 - rise * .7} rx="115" ry="25" fill="#fff" opacity=".56" />
        </g>

        <g className="pm-world__sculpture" opacity={build} transform={`translate(0 ${(1 - build) * 100})`} filter="url(#pm-depth)">
          <path d="M410 850 V590 C410 430 525 325 665 325 H780 C920 325 1030 430 1030 590 V850 H920 V600 C920 505 855 435 775 435 H665 C585 435 520 505 520 600 V850Z" fill="url(#pm-liquid-cream)" />
          <path d="M535 850 V620 C535 525 590 475 665 475 H780 C850 475 905 525 905 620 V850 H825 V625 C825 580 805 555 775 555 H665 C630 555 610 580 610 625 V850Z" fill="url(#pm-liquid-lime)" />
          <path d="M665 850 V690 C665 650 685 625 720 625 C755 625 775 650 775 690 V850Z" fill="url(#pm-liquid-pink)" />
          <path d="M320 835 C475 770 560 850 720 815 C890 780 1000 770 1120 835 L1080 900 H360Z" fill="url(#pm-liquid-lime)" />
          <path d="M535 465 C575 390 635 365 700 365" fill="none" stroke="#fff" strokeWidth="15" strokeLinecap="round" opacity=".82" />
          <path d="M800 365 C885 385 930 440 950 510" fill="none" stroke="#fff" strokeWidth="12" strokeLinecap="round" opacity=".7" />
        </g>
        <g opacity={finale} transform={`translate(0 ${(1 - finale) * 34})`}>
          <ellipse cx="720" cy="280" rx="185" ry="70" fill="url(#pm-liquid-shine)" />
          <circle cx="720" cy="265" r="30" fill="url(#pm-liquid-pink)" />
          <circle cx="709" cy="254" r="10" fill="#fff" opacity=".8" />
        </g>
      </svg>
      <div className="pm-world__wash" />
    </div>
  );
}
