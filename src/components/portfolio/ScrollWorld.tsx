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

  const build = progress;
  const finale = Math.min(1, Math.max(0, (progress - 0.84) / 0.16));
  const surfacePath = shapeAt(progress);
  const rise = progress * 190;
  const liquidShift = -scrollImpulse * 17;
  const liquidStretch = 1 + Math.abs(scrollImpulse) * 0.045;

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

          <linearGradient id="pm-glass-pink" x1="0" y1="0" x2="0.9" y2="1">
            <stop offset="0" stopColor="#fff7fb" stopOpacity=".94" />
            <stop offset=".28" stopColor="#f6b4d0" stopOpacity=".78" />
            <stop offset=".72" stopColor="#e987b5" stopOpacity=".64" />
            <stop offset="1" stopColor="#c95d91" stopOpacity=".78" />
          </linearGradient>
          <linearGradient id="pm-glass-lime" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#fbffe9" stopOpacity=".94" />
            <stop offset=".38" stopColor="#d9f29a" stopOpacity=".78" />
            <stop offset=".78" stopColor="#acd65e" stopOpacity=".68" />
            <stop offset="1" stopColor="#83b94b" stopOpacity=".78" />
          </linearGradient>
          <linearGradient id="pm-glass-cream" x1="0" y1="0" x2="0.2" y2="1">
            <stop offset="0" stopColor="#fffefa" stopOpacity=".96" />
            <stop offset=".46" stopColor="#f7e8d7" stopOpacity=".82" />
            <stop offset="1" stopColor="#e6cbb5" stopOpacity=".88" />
          </linearGradient>
          <linearGradient id="pm-glass-reflection" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#fff" stopOpacity=".88" />
            <stop offset=".42" stopColor="#fff" stopOpacity=".12" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
        </defs>

        <g
          className="pm-world__liquid pm-world__glass-sculpture"
          transform={`translate(720 ${790 - progress * 115}) rotate(${-10 + progress * 22}) scale(${0.78 + progress * 0.2}) translate(-720 -790)`}
          opacity={0.72 + progress * 0.24}
        >
          {/* Three interwoven glass ribbons: the silhouette is visible immediately, then opens and lifts with scroll. */}
          <g fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path
              d="M500 760 C465 645 548 530 674 520 C812 508 925 608 918 720 C912 818 814 875 720 835 C638 800 603 713 650 645 C692 584 780 584 829 637 C870 682 855 741 813 770"
              stroke="url(#pm-glass-pink)" strokeWidth={58} strokeOpacity=".86"
            />
            <path
              d="M500 760 C465 645 548 530 674 520 C812 508 925 608 918 720 C912 818 814 875 720 835 C638 800 603 713 650 645 C692 584 780 584 829 637 C870 682 855 741 813 770"
              stroke="#fff" strokeWidth="4" strokeOpacity=".78"
            />
            <path
              d="M575 835 C650 900 780 900 870 818 C960 735 944 610 850 550 C770 500 660 530 620 602"
              stroke="url(#pm-glass-lime)" strokeWidth="42" strokeOpacity=".78"
            />
            <path
              d="M575 835 C650 900 780 900 870 818 C960 735 944 610 850 550 C770 500 660 530 620 602"
              stroke="#fff" strokeWidth="3" strokeOpacity=".7"
            />
            <path
              d="M610 570 C700 470 850 470 930 575 C1000 666 958 790 870 830"
              stroke="url(#pm-glass-cream)" strokeWidth="30" strokeOpacity=".9"
            />
            <path
              d="M610 570 C700 470 850 470 930 575 C1000 666 958 790 870 830"
              stroke="#fff" strokeWidth="2.5" strokeOpacity=".8"
            />
          </g>
          {/* Refraction bands and small caustic highlights make the ribbons read as glass, not rubber. */}
          <path d="M535 683 C550 590 630 548 705 548" fill="none" stroke="#fff" strokeWidth="11" strokeLinecap="round" opacity=".48" />
          <path d="M685 853 C780 880 862 833 892 775" fill="none" stroke="#fff" strokeWidth="8" strokeLinecap="round" opacity=".42" />
          <ellipse cx="718" cy="694" rx="118" ry="72" fill="url(#pm-glass-reflection)" opacity=".22" transform={`rotate(-24 718 694) scale(${0.92 + progress * 0.08})`} />
          <circle cx="915" cy="596" r="8" fill="#fff" opacity=".88" />
          <circle cx="915" cy="596" r="18" fill="#fff" opacity=".16" />
          <circle cx="575" cy="835" r="5" fill="#fff" opacity=".8" />
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
