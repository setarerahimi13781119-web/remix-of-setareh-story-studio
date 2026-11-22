import { useEffect, useState } from "react";

/**
 * Scroll-linked liquid artwork. The material follows document progress directly,
 * then solidifies into the final Playful Matter sculpture near the page end.
 */
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

  const liquidY = 125 - progress * 148;
  const liquidScale = 0.82 + progress * 0.2;
  const build = Math.min(1, Math.max(0, (progress - 0.28) / 0.58));
  const finale = Math.min(1, Math.max(0, (progress - 0.72) / 0.25));

  return (
    <div className="pm-world" aria-hidden="true">
      <svg className="pm-world__art" viewBox="0 0 1440 1000" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="pm-liquid-pink" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ffe0e8" /><stop offset=".38" stopColor="#f6a2c4" /><stop offset=".75" stopColor="#ed78aa" /><stop offset="1" stopColor="#d95b91" />
          </linearGradient>
          <linearGradient id="pm-liquid-lime" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#efffae" /><stop offset=".48" stopColor="#c8eb70" /><stop offset="1" stopColor="#83c84f" />
          </linearGradient>
          <linearGradient id="pm-liquid-peach" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#fff1d9" /><stop offset="1" stopColor="#f4c4a9" />
          </linearGradient>
          <radialGradient id="pm-liquid-gloss" cx="30%" cy="20%" r="80%">
            <stop offset="0" stopColor="#fff" stopOpacity=".88" /><stop offset=".28" stopColor="#fff" stopOpacity=".22" /><stop offset="1" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
          <filter id="pm-goo" x="-30%" y="-35%" width="160%" height="180%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="23" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 26 -11" result="goo" />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
          <filter id="pm-depth" x="-35%" y="-35%" width="170%" height="180%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="17" result="shadow" />
            <feOffset in="shadow" dy="20" result="offset" />
            <feColorMatrix in="offset" type="matrix" values="0 0 0 0 .22  0 0 0 0 .19  0 0 0 0 .24  0 0 0 .17 0" result="shade" />
            <feMerge><feMergeNode in="shade" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* Early droplets gather into one continuous, soft-edged liquid body. */}
        <g className="pm-world__droplets" opacity={1 - build * .9} transform={`translate(0 ${progress * 42})`}>
          <ellipse cx="250" cy="250" rx="112" ry="72" fill="url(#pm-liquid-lime)" />
          <ellipse cx="1130" cy="270" rx="92" ry="64" fill="url(#pm-liquid-pink)" />
          <ellipse cx="1010" cy="440" rx="34" ry="25" fill="url(#pm-liquid-peach)" />
          <ellipse cx="390" cy="550" rx="26" ry="20" fill="url(#pm-liquid-lime)" />
        </g>

        {/* The goo filter makes the streams merge as one viscous, organic material. */}
        <g className="pm-world__liquid" filter="url(#pm-goo)" transform={`translate(0 ${liquidY}) translate(720 690) scale(${liquidScale}) translate(-720 -690)`}>
          <path d="M-90 760 C80 625 220 850 390 740 C520 655 580 675 700 720 C835 770 925 835 1055 730 C1180 630 1330 650 1530 720 L1530 1040 L-90 1040Z" fill="url(#pm-liquid-pink)" />
          <ellipse cx="245" cy="745" rx="190" ry="115" fill="url(#pm-liquid-lime)" />
          <ellipse cx="710" cy="770" rx="250" ry="105" fill="url(#pm-liquid-peach)" />
          <ellipse cx="1190" cy="735" rx="210" ry="125" fill="url(#pm-liquid-pink)" />
          <circle cx="425" cy="680" r="82" fill="url(#pm-liquid-lime)" />
          <circle cx="980" cy="680" r="95" fill="url(#pm-liquid-pink)" />
          <path d="M-30 735 C170 625 265 815 430 715 S680 650 820 720 S1060 820 1210 700 S1410 665 1510 715" fill="none" stroke="#fff4e8" strokeWidth="13" strokeLinecap="round" opacity=".56" />
        </g>
        <g className="pm-world__liquid-gloss" opacity={.24 + progress * .18} transform={`translate(0 ${liquidY}) translate(720 690) scale(${liquidScale}) translate(-720 -690)`}>
          <path d="M40 725 C190 650 280 775 420 700 S670 660 800 710 S1040 785 1190 690" fill="none" stroke="url(#pm-liquid-gloss)" strokeWidth="28" strokeLinecap="round" />
          <ellipse cx="360" cy="680" rx="105" ry="24" fill="#fff" opacity=".3" />
          <ellipse cx="1080" cy="682" rx="92" ry="22" fill="#fff" opacity=".26" />
        </g>

        {/* A single sculptural world rises out of the liquid as the page progresses. */}
        <g className="pm-world__sculpture" opacity={build} transform={`translate(0 ${(1 - build) * 155}) scale(${.86 + build * .14})`} transform-origin="720 680" filter="url(#pm-depth)">
          <path d="M410 760 V565 C410 420 520 330 655 330 H790 C925 330 1030 425 1030 565 V760 H930 V570 C930 480 865 425 785 425 H660 C575 425 510 480 510 570 V760Z" fill="url(#pm-liquid-peach)" />
          <path d="M530 760 V600 C530 520 585 470 660 470 H785 C860 470 910 520 910 600 V760 H835 V610 C835 565 815 545 775 545 H670 C630 545 605 565 605 610 V760Z" fill="url(#pm-liquid-lime)" />
          <path d="M665 760 V660 C665 625 685 605 720 605 C755 605 775 625 775 660 V760Z" fill="url(#pm-liquid-pink)" />
          <path d="M330 760 C470 720 550 785 720 760 C890 735 990 720 1110 760 L1080 820 H360Z" fill="url(#pm-liquid-lime)" />
          <path d="M470 820 C560 790 640 830 720 815 C810 798 895 790 970 820 L940 860 H500Z" fill="url(#pm-liquid-pink)" />
          <path d="M520 460 C560 375 635 360 700 360" fill="none" stroke="#fff" strokeWidth="12" strokeLinecap="round" opacity=".56" />
          <path d="M800 360 C890 380 930 430 945 490" fill="none" stroke="#fff" strokeWidth="10" strokeLinecap="round" opacity=".48" />
        </g>
        <g className="pm-world__finish" opacity={finale} transform={`translate(0 ${(1 - finale) * 45})`}>
          <ellipse cx="720" cy="315" rx="185" ry="82" fill="url(#pm-liquid-gloss)" />
          <circle cx="720" cy="300" r="37" fill="url(#pm-liquid-pink)" />
          <circle cx="720" cy="288" r="12" fill="#fff" opacity=".65" />
          <path d="M690 250 Q720 220 750 250" fill="none" stroke="#fff" strokeWidth="8" strokeLinecap="round" opacity=".72" />
        </g>
      </svg>
      <div className="pm-world__wash" />
    </div>
  );
}
