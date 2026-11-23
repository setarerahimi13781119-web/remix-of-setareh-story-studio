import { useEffect, useState } from "react";

const liquidStages = [
  "M-120 820 C90 760 210 830 380 790 C540 750 620 790 720 800 C850 810 930 745 1080 785 C1230 825 1350 755 1560 815 L1560 1120 L-120 1120Z",
  "M-120 820 C90 760 210 830 380 790 C520 755 550 610 650 570 C735 535 790 610 860 690 C930 760 990 745 1080 785 C1230 825 1350 755 1560 815 L1560 1120 L-120 1120Z",
  "M-120 820 C90 760 210 830 380 790 C500 760 510 560 600 470 C660 410 700 405 720 405 C740 405 780 410 840 470 C930 560 940 760 1080 785 C1230 825 1350 755 1560 815 L1560 1120 L-120 1120Z",
  "M-120 820 C90 760 210 830 360 790 C470 760 470 560 555 455 C625 385 685 365 720 365 C755 365 815 385 885 455 C970 560 970 760 1080 785 C1230 825 1350 755 1560 815 L1560 1120 L-120 1120Z",
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

/** A continuous hybrid petal sculpture that opens and rises throughout the scroll journey. */
export function ScrollWorld() {
  const [progress, setProgress] = useState(0);
  const [scrollImpulse, setScrollImpulse] = useState(0);
  const [chaser, setChaser] = useState({ x: 0, y: 0, active: false });

  useEffect(() => {
    let frame = 0;
    let previousY = window.scrollY;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const root = document.documentElement;
        const currentY = window.scrollY;
        const range = Math.max(1, root.scrollHeight - window.innerHeight);
        const delta = currentY - previousY;
        previousY = currentY;
        setProgress(Math.min(1, Math.max(0, currentY / range)));
        if (Math.abs(delta) > 0.5) setScrollImpulse(Math.max(-1, Math.min(1, delta / 42)));
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

  useEffect(() => {
    const trackFinger = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (!touch) return;
      setChaser({ x: touch.clientX, y: touch.clientY, active: true });
    };
    const releaseFinger = () => setChaser((point) => ({ ...point, active: false }));
    document.addEventListener("touchstart", trackFinger, { capture: true, passive: true });
    document.addEventListener("touchmove", trackFinger, { capture: true, passive: true });
    document.addEventListener("touchend", releaseFinger, { capture: true, passive: true });
    document.addEventListener("touchcancel", releaseFinger, { capture: true, passive: true });
    return () => {
      document.removeEventListener("touchstart", trackFinger, true);
      document.removeEventListener("touchmove", trackFinger, true);
      document.removeEventListener("touchend", releaseFinger, true);
      document.removeEventListener("touchcancel", releaseFinger, true);
    };
  }, []);

  useEffect(() => {
    if (Math.abs(scrollImpulse) < 0.008) {
      if (scrollImpulse !== 0) setScrollImpulse(0);
      return;
    }
    const frame = requestAnimationFrame(() => setScrollImpulse((value) => value * 0.86));
    return () => cancelAnimationFrame(frame);
  }, [scrollImpulse]);

  const finale = Math.min(1, Math.max(0, (progress - 0.84) / 0.16));

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

          <linearGradient id="pm-glass-pink" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#fff" stopOpacity="1" />
            <stop offset=".12" stopColor="#ffe8f2" stopOpacity=".98" />
            <stop offset=".3" stopColor="#f4a4c8" stopOpacity=".94" />
            <stop offset=".58" stopColor="#df6da7" stopOpacity=".96" />
            <stop offset=".82" stopColor="#a93c78" stopOpacity=".98" />
            <stop offset="1" stopColor="#68284f" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="pm-glass-lime" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#fff" stopOpacity="1" />
            <stop offset=".18" stopColor="#f7ffd9" stopOpacity=".98" />
            <stop offset=".42" stopColor="#d6f18a" stopOpacity=".96" />
            <stop offset=".72" stopColor="#9fc94b" stopOpacity=".98" />
            <stop offset="1" stopColor="#4c7830" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="pm-glass-cream" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#fff" stopOpacity="1" />
            <stop offset=".22" stopColor="#fff8e9" stopOpacity=".98" />
            <stop offset=".55" stopColor="#e9d1b6" stopOpacity=".96" />
            <stop offset=".82" stopColor="#bd9478" stopOpacity=".98" />
            <stop offset="1" stopColor="#80604f" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="pm-glass-rim" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#fff" stopOpacity=".98" />
            <stop offset=".22" stopColor="#fff" stopOpacity=".56" />
            <stop offset=".58" stopColor="#fff" stopOpacity=".08" />
            <stop offset=".82" stopColor="#6b4260" stopOpacity=".22" />
            <stop offset="1" stopColor="#fff" stopOpacity=".72" />
          </linearGradient>
          <linearGradient id="pm-glass-core" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#fff" stopOpacity=".9" />
            <stop offset=".5" stopColor="#fff" stopOpacity=".06" />
            <stop offset="1" stopColor="#fff" stopOpacity=".68" />
          </linearGradient>
          <radialGradient id="pm-glass-caustic" cx="35%" cy="24%" r="78%">
            <stop offset="0" stopColor="#fff" stopOpacity=".98" />
            <stop offset=".24" stopColor="#fff" stopOpacity=".45" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
          <filter id="pm-glass-shadow" x="-45%" y="-45%" width="190%" height="210%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="19" result="blur"/>
            <feOffset in="blur" dx="5" dy="29" result="offset"/>
            <feColorMatrix in="offset" type="matrix" values="0 0 0 0 .20  0 0 0 0 .13  0 0 0 0 .17  0 0 0 .32 0" result="shadow"/>
            <feMerge><feMergeNode in="shadow"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="pm-glass-soft-highlight" x="-30%" y="-40%" width="160%" height="180%">
            <feGaussianBlur stdDeviation="5" />
          </filter>
        </defs>

        <g
          className="pm-world__liquid pm-world__glass-sculpture"
          transform={`translate(720 ${770 - progress * 90}) rotate(${-8 + progress * 16}) scale(${0.88 + progress * 0.12}) translate(-720 -770)`}
          opacity={0.98}
        >
          {/* Rear opal loop: a broad, softly lit ceramic-glass form. */}
          <g fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M505 650 C500 500 620 405 765 420 C910 435 1010 545 980 680 C952 805 820 875 690 835 C585 803 520 735 505 650Z"
              stroke="#765b50" strokeWidth="102" opacity=".24" transform="translate(0 20)"/>
            <path d="M505 650 C500 500 620 405 765 420 C910 435 1010 545 980 680 C952 805 820 875 690 835 C585 803 520 735 505 650Z"
              stroke="url(#pm-glass-cream)" strokeWidth="88"/>
            <path d="M505 650 C500 500 620 405 765 420 C910 435 1010 545 980 680 C952 805 820 875 690 835 C585 803 520 735 505 650Z"
              stroke="#fff9ec" strokeWidth="5" opacity=".88" transform="translate(-3 -7)"/>
            <path d="M545 585 C570 485 660 445 755 452" stroke="#fff" strokeWidth="13" opacity=".62" filter="url(#pm-glass-soft-highlight)"/>
            <path d="M545 585 C570 485 660 445 755 452" stroke="#fff" strokeWidth="5" opacity=".94"/>
          </g>

          {/* Lime loop crosses behind the pink band; its darker edge gives it a separate silhouette. */}
          <g fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M620 850 C485 785 465 640 555 535 C650 425 810 455 880 565 C950 675 910 810 805 870 C735 910 670 895 620 850Z"
              stroke="#45652d" strokeWidth="88" opacity=".34" transform="translate(5 18)"/>
            <path d="M620 850 C485 785 465 640 555 535 C650 425 810 455 880 565 C950 675 910 810 805 870 C735 910 670 895 620 850Z"
              stroke="url(#pm-glass-lime)" strokeWidth="73"/>
            <path d="M620 850 C485 785 465 640 555 535 C650 425 810 455 880 565 C950 675 910 810 805 870 C735 910 670 895 620 850Z"
              stroke="url(#pm-glass-rim)" strokeWidth="59" opacity=".88"/>
            <path d="M620 850 C485 785 465 640 555 535 C650 425 810 455 880 565 C950 675 910 810 805 870 C735 910 670 895 620 850Z"
              stroke="#fff" strokeWidth="4" opacity=".9" transform="translate(-4 -6)"/>
            <path d="M505 685 C500 610 535 550 590 510" stroke="#fff" strokeWidth="16" opacity=".54" filter="url(#pm-glass-soft-highlight)"/>
            <path d="M505 685 C500 610 535 550 590 510" stroke="#fff" strokeWidth="6" opacity=".95"/>
          </g>

          {/* Foreground pink ribbon: diagonal, tighter and visibly more translucent. */}
          <g fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M520 790 C600 900 790 910 900 805 C1010 700 955 545 840 505 C740 470 640 525 625 620 C612 700 680 770 760 755 C820 744 845 690 820 645"
              stroke="#6d3154" strokeWidth="104" opacity=".42" transform="translate(3 22)"/>
            <path d="M520 790 C600 900 790 910 900 805 C1010 700 955 545 840 505 C740 470 640 525 625 620 C612 700 680 770 760 755 C820 744 845 690 820 645"
              stroke="url(#pm-glass-pink)" strokeWidth="88"/>
            <path d="M520 790 C600 900 790 910 900 805 C1010 700 955 545 840 505 C740 470 640 525 625 620 C612 700 680 770 760 755 C820 744 845 690 820 645"
              stroke="url(#pm-glass-rim)" strokeWidth="70" opacity=".9"/>
            <path d="M520 790 C600 900 790 910 900 805 C1010 700 955 545 840 505 C740 470 640 525 625 620 C612 700 680 770 760 755 C820 744 845 690 820 645"
              stroke="#fff" strokeWidth="5" opacity=".94" transform="translate(-4 -7)"/>
            <path d="M560 820 C635 885 755 884 830 835" stroke="#fff" strokeWidth="18" opacity=".48" filter="url(#pm-glass-soft-highlight)"/>
            <path d="M560 820 C635 885 755 884 830 835" stroke="#fff" strokeWidth="6" opacity=".9"/>
          </g>

          {/* Small caustic reflections and hard glints make the glass catch light, not just glow. */}
          <ellipse cx="715" cy="650" rx="190" ry="115" fill="url(#pm-glass-caustic)" opacity=".26" transform="rotate(-24 715 650)"/>
          <path d="M884 548 Q910 565 918 595" fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" opacity=".92"/>
          <circle cx="918" cy="595" r="5" fill="#fff"/>
          <circle cx="918" cy="595" r="17" fill="#fff" opacity=".2" filter="url(#pm-glass-soft-highlight)"/>
          <path d="M545 755 Q555 780 580 795" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" opacity=".82"/>
          <circle cx="580" cy="795" r="4" fill="#fff"/>
        </g>

        <g className="pm-world__glitter" pointerEvents="none" fill="#fff9e9">\n          <circle cx="155" cy="700" r="3"><animate attributeName="opacity" values=".15;.9;.3;.15" dur="5s" repeatCount="indefinite"/><animateTransform attributeName="transform" type="translate" values="0 0;-12 -22;8 -38;0 0" dur="9s" repeatCount="indefinite"/></circle>\n          <circle cx="285" cy="745" r="2"><animate attributeName="opacity" values=".2;.8;.2" dur="6s" repeatCount="indefinite"/><animateTransform attributeName="transform" type="translate" values="0 0;14 -18;-4 -34;0 0" dur="10s" repeatCount="indefinite"/></circle>\n          <circle cx="365" cy="650" r="2.5"><animate attributeName="opacity" values=".1;.9;.25;.1" dur="7s" repeatCount="indefinite"/><animateTransform attributeName="transform" type="translate" values="0 0;10 -20;-8 -36;0 0" dur="8s" repeatCount="indefinite"/></circle>\n          <circle cx="495" cy="760" r="2"><animate attributeName="opacity" values=".2;.85;.2" dur="5.8s" repeatCount="indefinite"/><animateTransform attributeName="transform" type="translate" values="0 0;-14 -16;5 -30;0 0" dur="11s" repeatCount="indefinite"/></circle>\n          <circle cx="585" cy="680" r="3"><animate attributeName="opacity" values=".15;.9;.15" dur="6.5s" repeatCount="indefinite"/><animateTransform attributeName="transform" type="translate" values="0 0;12 -24;-5 -40;0 0" dur="9.5s" repeatCount="indefinite"/></circle>\n          <circle cx="665" cy="735" r="2"><animate attributeName="opacity" values=".1;.8;.2" dur="5.4s" repeatCount="indefinite"/><animateTransform attributeName="transform" type="translate" values="0 0;-9 -18;8 -32;0 0" dur="8.5s" repeatCount="indefinite"/></circle>\n          <circle cx="790" cy="665" r="2.5"><animate attributeName="opacity" values=".15;.9;.15" dur="7.2s" repeatCount="indefinite"/><animateTransform attributeName="transform" type="translate" values="0 0;14 -20;-6 -36;0 0" dur="10.5s" repeatCount="indefinite"/></circle>\n          <circle cx="875" cy="745" r="3"><animate attributeName="opacity" values=".2;.85;.2" dur="6s" repeatCount="indefinite"/><animateTransform attributeName="transform" type="translate" values="0 0;-12 -22;7 -38;0 0" dur="9s" repeatCount="indefinite"/></circle>\n          <circle cx="980" cy="680" r="2"><animate attributeName="opacity" values=".1;.9;.2" dur="5.5s" repeatCount="indefinite"/><animateTransform attributeName="transform" type="translate" values="0 0;11 -17;-5 -31;0 0" dur="8s" repeatCount="indefinite"/></circle>\n          <circle cx="1090" cy="735" r="2.5"><animate attributeName="opacity" values=".15;.85;.15" dur="6.8s" repeatCount="indefinite"/><animateTransform attributeName="transform" type="translate" values="0 0;-13 -19;6 -35;0 0" dur="10s" repeatCount="indefinite"/></circle>\n          <circle cx="1190" cy="660" r="3"><animate attributeName="opacity" values=".1;.9;.2" dur="5.9s" repeatCount="indefinite"/><animateTransform attributeName="transform" type="translate" values="0 0;12 -21;-7 -37;0 0" dur="9.2s" repeatCount="indefinite"/></circle>\n          <circle cx="1310" cy="730" r="2"><animate attributeName="opacity" values=".2;.8;.2" dur="7s" repeatCount="indefinite"/><animateTransform attributeName="transform" type="translate" values="0 0;-10 -18;5 -32;0 0" dur="11s" repeatCount="indefinite"/></circle>\n          <path d="M0 -7L2 -2L7 0L2 2L0 7L-2 2L-7 0L-2 -2Z" transform="translate(555 705)"><animate attributeName="opacity" values=".2;.9;.2" dur="4.5s" repeatCount="indefinite"/><animateTransform attributeName="transform" additive="sum" type="translate" values="0 0;10 -22;0 0" dur="9s" repeatCount="indefinite"/></path>\n          <path d="M0 -5L1.5 -1.5L5 0L1.5 1.5L0 5L-1.5 1.5L-5 0L-1.5 -1.5Z" transform="translate(1135 690)"><animate attributeName="opacity" values=".15;.85;.15" dur="5.5s" repeatCount="indefinite"/><animateTransform attributeName="transform" additive="sum" type="translate" values="0 0;-12 -20;0 0" dur="11s" repeatCount="indefinite"/></path>\n        </g>\n\n        <g opacity={finale} transform={`translate(0 ${(1 - finale) * 34})`}>
          <ellipse cx="720" cy="280" rx="185" ry="70" fill="url(#pm-liquid-shine)" />
          <circle cx="720" cy="265" r="30" fill="url(#pm-liquid-pink)" />
          <circle cx="709" cy="254" r="10" fill="#fff" opacity=".8" />
        </g>

        <g className="pm-world__glitter-visible" pointerEvents="none">
          {Array.from({ length: 28 }, (_, i) => {
            const x = 90 + ((i * 173) % 1260);
            const y = 390 + ((i * 97) % 480);
            const drift = i % 2 === 0 ? 1 : -1;
            const duration = 6 + (i % 5) * 1.7;
            const radius = i % 4 === 0 ? 4 : i % 3 === 0 ? 3 : 2.2;
            return (
              <g key={i} transform={`translate(${x} ${y})`}>
                <circle r={radius * 2.8} fill={i % 3 === 0 ? "#f58fbd" : "#fff9e9"} opacity=".16">
                  <animate attributeName="opacity" values=".05;.42;.12;.05" dur={`${duration}s`} begin={`${-i * .41}s`} repeatCount="indefinite" />
                </circle>
                <circle r={radius} fill={i % 3 === 0 ? "#fff0f7" : "#ffffff"} opacity=".9">
                  <animate attributeName="opacity" values=".25;1;.45;.25" dur={`${duration}s`} begin={`${-i * .41}s`} repeatCount="indefinite" />
                  <animateTransform attributeName="transform" type="translate" values={`0 0; ${drift * 24} -22; ${drift * 8} -48; ${-drift * 18} -24; 0 0`} dur={`${duration + 2}s`} begin={`${-i * .37}s`} repeatCount="indefinite" />
                </circle>
              </g>
            );
          })}
          <g fill="#fff" opacity=".95">
            <path d="M0 -10L2.5 -2.5L10 0L2.5 2.5L0 10L-2.5 2.5L-10 0L-2.5 -2.5Z" transform="translate(300 540)"><animateTransform attributeName="transform" type="translate" values="300 540;330 505;300 540" dur="8s" repeatCount="indefinite"/><animate attributeName="opacity" values=".2;1;.3;.2" dur="4s" repeatCount="indefinite"/></path>
            <path d="M0 -8L2 -2L8 0L2 2L0 8L-2 2L-8 0L-2 -2Z" transform="translate(1050 590)"><animateTransform attributeName="transform" type="translate" values="1050 590;1018 555;1050 590" dur="9s" repeatCount="indefinite"/><animate attributeName="opacity" values=".25;1;.35;.25" dur="5s" repeatCount="indefinite"/></path>
          </g>
        </g>
      </svg>
      <div
        className="pm-world__finger-drop"
        style={{ left: chaser.x, top: chaser.y, opacity: chaser.active ? 1 : 0 }}
      >
        <span />
      </div>
      <div className="pm-world__wash" />
    </div>
  );
}
