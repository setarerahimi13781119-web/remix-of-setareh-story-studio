import { useEffect, useRef } from "react";

const liquidStages = [
  "M-120 820 C90 760 210 830 380 790 C540 750 620 790 720 800 C850 810 930 745 1080 785 C1230 825 1350 755 1560 815 L1560 1120 L-120 1120Z",
  "M-120 820 C90 760 210 830 380 790 C520 755 550 610 650 570 C735 535 790 610 860 690 C930 760 990 745 1080 785 C1230 825 1350 755 1560 815 L1560 1120 L-120 1120Z",
  "M-120 820 C90 760 210 830 380 790 C500 760 510 560 600 470 C660 410 700 520 720 575 C740 520 780 410 840 470 C930 560 940 760 1080 785 C1230 825 1350 755 1560 815 L1560 1120 L-120 1120Z",
  "M-120 820 C90 760 210 830 360 790 C470 760 470 560 555 455 C625 365 685 460 720 520 C755 460 815 365 885 455 C970 560 970 760 1080 785 C1230 825 1350 755 1560 815 L1560 1120 L-120 1120Z",
];

const parsedStages = liquidStages.map((path) => ({
  parts: path.split(/-?\d+(?:\.\d+)?/g),
  values: path.match(/-?\d+(?:\.\d+)?/g)?.map(Number) ?? [],
}));

function mixPath(fromStage: number, toStage: number, amount: number) {
  const from = parsedStages[fromStage];
  const to = parsedStages[toStage];
  let result = "";

  for (let index = 0; index < from.values.length; index += 1) {
    const value = from.values[index] + (to.values[index] - from.values[index]) * amount;
    result += from.parts[index] + value.toFixed(1);
  }

  return result + from.parts[from.parts.length - 1];
}

function shapeAt(progress: number) {
  const scaled = Math.min(liquidStages.length - 1, Math.max(0, progress) * (liquidStages.length - 1));
  const stage = Math.floor(scaled);
  return stage >= liquidStages.length - 1
    ? liquidStages[liquidStages.length - 1]
    : mixPath(stage, stage + 1, scaled - stage);
}

/** A vivid, continuous material study that gathers into a sculptural arch as the page moves. */
export function ScrollWorld() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const surfacePaths = svg.querySelectorAll<SVGPathElement>("[data-scroll-surface]");
    const leftLiquid = svg.querySelector<SVGEllipseElement>("[data-scroll-left-liquid]");
    const centerLiquid = svg.querySelector<SVGEllipseElement>("[data-scroll-center-liquid]");
    const rightLiquid = svg.querySelector<SVGEllipseElement>("[data-scroll-right-liquid]");
    const arch = svg.querySelector<SVGPathElement>("[data-scroll-arch]");
    const leftCircle = svg.querySelector<SVGCircleElement>("[data-scroll-left-circle]");
    const rightCircle = svg.querySelector<SVGCircleElement>("[data-scroll-right-circle]");
    const glossPath = svg.querySelector<SVGPathElement>("[data-scroll-gloss-path]");
    const glossStroke = svg.querySelector<SVGPathElement>("[data-scroll-gloss-stroke]");
    const glossEllipse = svg.querySelector<SVGEllipseElement>("[data-scroll-gloss-ellipse]");
    const sculpture = svg.querySelector<SVGGElement>("[data-scroll-sculpture]");
    const finale = svg.querySelector<SVGGElement>("[data-scroll-finale]");

    const setAttr = (element: Element | null, name: string, value: number | string) => {
      element?.setAttribute(name, String(value));
    };

    const update = () => {
      const root = document.documentElement;
      const range = Math.max(1, root.scrollHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, window.scrollY / range));
      const build = Math.min(1, Math.max(0, (progress - 0.42) / 0.5));
      const finaleProgress = Math.min(1, Math.max(0, (progress - 0.84) / 0.16));
      const rise = progress * 190;

      const surfacePath = shapeAt(progress);
      surfacePaths.forEach((path) => setAttr(path, "d", surfacePath));

      setAttr(leftLiquid, "cy", 815 - rise * 0.34);
      setAttr(leftLiquid, "rx", 210 + progress * 25);
      setAttr(leftLiquid, "ry", 118 + progress * 30);

      setAttr(centerLiquid, "cy", 835 - rise * 0.56);
      setAttr(centerLiquid, "rx", 240 - progress * 40);
      setAttr(centerLiquid, "ry", 124 + progress * 42);

      setAttr(rightLiquid, "cy", 815 - rise * 0.34);
      setAttr(rightLiquid, "rx", 218 + progress * 20);
      setAttr(rightLiquid, "ry", 132 + progress * 25);

      const archPath =
        "M720 900 C" +
        (590 - progress * 65) +
        " 770 " +
        (600 - progress * 70) +
        " " +
        (680 - rise) +
        " 720 " +
        (650 - rise) +
        " C" +
        (840 + progress * 70) +
        " " +
        (680 - rise) +
        " " +
        (850 + progress * 65) +
        " 770 720 900Z";
      setAttr(arch, "d", archPath);

      setAttr(leftCircle, "cx", 420 - progress * 65);
      setAttr(leftCircle, "cy", 730 - rise * 0.72);
      setAttr(leftCircle, "r", 52 + progress * 35);

      setAttr(rightCircle, "cx", 1020 + progress * 65);
      setAttr(rightCircle, "cy", 730 - rise * 0.72);
      setAttr(rightCircle, "r", 60 + progress * 32);

      const glossPathValue =
        "M90 " +
        (780 - rise * 0.4) +
        " C270 " +
        (700 - rise * 0.42) +
        " 370 " +
        (825 - rise * 0.5) +
        " 520 " +
        (720 - rise * 0.75) +
        " S830 " +
        (690 - rise * 0.72) +
        " 970 " +
        (750 - rise * 0.48) +
        " S1200 " +
        (810 - rise * 0.38) +
        " 1360 " +
        (730 - rise * 0.5);
      setAttr(glossPath, "d", glossPathValue);
      setAttr(glossStroke, "stroke-width", 12 + progress * 15);

      setAttr(glossEllipse, "cx", 340 + progress * 220);
      setAttr(glossEllipse, "cy", 690 - rise * 0.7);

      setAttr(sculpture, "opacity", build);
      setAttr(sculpture, "transform", "translate(0 " + (1 - build) * 100 + ")");
      setAttr(finale, "opacity", finaleProgress);
      setAttr(finale, "transform", "translate(0 " + (1 - finaleProgress) * 34 + ")");
    };

    let frame = 0;
    const scheduleUpdate = () => {
      if (frame !== 0) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        update();
      });
    };

    update();
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!reducedMotion.matches) {
      window.addEventListener("scroll", scheduleUpdate, { passive: true });
      window.addEventListener("resize", scheduleUpdate);
    }

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

  return (
    <div className="pm-world" aria-hidden="true">
      <svg
        ref={svgRef}
        className="pm-world__art"
        viewBox="0 0 1440 1100"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
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
          <path data-scroll-surface d={liquidStages[0]} fill="url(#pm-liquid-pink)" />
          <ellipse data-scroll-left-liquid cx="210" cy="815" rx="210" ry="118" fill="url(#pm-liquid-lime)" />
          <ellipse data-scroll-center-liquid cx="720" cy="835" rx="240" ry="124" fill="url(#pm-liquid-cream)" />
          <ellipse data-scroll-right-liquid cx="1230" cy="815" rx="218" ry="132" fill="url(#pm-liquid-pink)" />
          <path
            data-scroll-arch
            d="M720 900 C590 770 600 680 720 650 C840 680 850 770 720 900Z"
            fill="url(#pm-liquid-lime)"
          />
          <circle data-scroll-left-circle cx="420" cy="730" r="52" fill="url(#pm-liquid-lime)" />
          <circle data-scroll-right-circle cx="1020" cy="730" r="60" fill="url(#pm-liquid-pink)" />
        </g>

        <g className="pm-world__gloss" opacity=".8">
          <path data-scroll-surface d={liquidStages[0]} fill="url(#pm-liquid-shine)" />
          <path
            data-scroll-gloss-path
            d="M90 780 C270 700 370 825 520 720 S830 690 970 750 S1200 810 1360 730"
            fill="none"
            stroke="#fff"
            data-scroll-gloss-stroke
            strokeWidth="12"
            strokeLinecap="round"
            opacity=".58"
          />
          <ellipse data-scroll-gloss-ellipse cx="340" cy="690" rx="115" ry="25" fill="#fff" opacity=".56" />
        </g>

        <g
          data-scroll-sculpture
          className="pm-world__sculpture"
          opacity="0"
          transform="translate(0 100)"
          filter="url(#pm-depth)"
        >
          <path d="M410 850 V590 C410 430 525 325 665 325 H780 C920 325 1030 430 1030 590 V850 H920 V600 C920 505 855 435 775 435 H665 C585 435 520 505 520 600 V850Z" fill="url(#pm-liquid-cream)" />
          <path d="M535 850 V620 C535 525 590 475 665 475 H780 C850 475 905 525 905 620 V850 H825 V625 C825 580 805 555 775 555 H665 C630 555 610 580 610 625 V850Z" fill="url(#pm-liquid-lime)" />
          <path d="M665 850 V690 C665 650 685 625 720 625 C755 625 775 650 775 690 V850Z" fill="url(#pm-liquid-pink)" />
          <path d="M320 835 C475 770 560 850 720 815 C890 780 1000 770 1120 835 L1080 900 H360Z" fill="url(#pm-liquid-lime)" />
          <path d="M535 465 C575 390 635 365 700 365" fill="none" stroke="#fff" strokeWidth="15" strokeLinecap="round" opacity=".82" />
          <path d="M800 365 C885 385 930 440 950 510" fill="none" stroke="#fff" strokeWidth="12" strokeLinecap="round" opacity=".7" />
        </g>
        <g
          data-scroll-finale
          opacity="0"
          transform="translate(0 34)"
        >
          <ellipse cx="720" cy="280" rx="185" ry="70" fill="url(#pm-liquid-shine)" />
          <circle cx="720" cy="265" r="30" fill="url(#pm-liquid-pink)" />
          <circle cx="709" cy="254" r="10" fill="#fff" opacity=".8" />
        </g>
      </svg>
      <div className="pm-world__wash" />
    </div>
  );
}
