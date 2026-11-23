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

/** A vivid, continuous material study that gathers into a sculptural arch as the page moves. */
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

  const build = Math.min(1, Math.max(0, (progress - 0.42) / 0.5));
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

        <g className="pm-world__liquid" transform={`translate(0 ${liquidShift})`}>
          <path d={surfacePath} fill="url(#pm-glass-pink)" opacity=".62" filter="url(#pm-depth)" />

          <g transform={`translate(0 ${-rise * .16})`} filter="url(#pm-depth)" opacity=".9">
            <path d="M-100 760 C35 710 125 755 235 716 C350 675 420 760 535 710 C650 660 710 724 820 682 C940 635 1010 733 1125 694 C1250 650 1370 735 1540 680 L1540 1120 L-100 1120Z" fill="url(#pm-glass-pink)" />
            <path d="M-100 760 C35 710 125 755 235 716 C350 675 420 760 535 710 C650 660 710 724 820 682 C940 635 1010 733 1125 694 C1250 650 1370 735 1540 680" fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" opacity=".58" />
            <path d="M80 772 C210 720 300 770 400 735 C500 700 565 770 670 730 C770 690 850 750 950 714 C1060 675 1140 755 1250 720" fill="none" stroke="#fff" strokeWidth="2" opacity=".46" />
          </g>

          <g transform={`translate(0 ${-rise * .31})`} filter="url(#pm-depth)" opacity=".94">
            <path d="M-100 842 C40 790 145 850 265 804 C380 760 455 846 570 800 C690 752 760 825 875 778 C990 730 1080 824 1190 780 C1320 730 1410 810 1540 760 L1540 1120 L-100 1120Z" fill="url(#pm-glass-lime)" />
            <path d="M-100 842 C40 790 145 850 265 804 C380 760 455 846 570 800 C690 752 760 825 875 778 C990 730 1080 824 1190 780 C1320 730 1410 810 1540 760" fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" opacity=".68" />
            <path d="M190 856 C300 810 385 858 490 820 C600 780 675 850 780 810 C885 770 970 830 1075 792" fill="none" stroke="#fff" strokeWidth="2.5" opacity=".5" />
          </g>

          <g transform={`translate(0 ${-rise * .48})`} filter="url(#pm-depth)" opacity=".96">
            <path d="M-100 930 C30 880 155 940 280 892 C405 845 480 930 600 882 C720 834 800 910 920 862 C1040 814 1120 900 1240 850 C1360 800 1450 880 1540 835 L1540 1120 L-100 1120Z" fill="url(#pm-glass-cream)" />
            <path d="M-100 930 C30 880 155 940 280 892 C405 845 480 930 600 882 C720 834 800 910 920 862 C1040 814 1120 900 1240 850 C1360 800 1450 880 1540 835" fill="none" stroke="#fff" strokeWidth="7" strokeLinecap="round" opacity=".78" />
            <path d="M230 940 C350 895 435 940 545 900 C655 860 745 930 850 890 C960 850 1045 910 1155 870" fill="none" stroke="#fff" strokeWidth="2.5" opacity=".58" />
          </g>

          <g transform={`translate(0 ${-rise * .56})`} opacity=".64">
            <path d="M430 880 C470 770 540 710 620 690 C680 675 700 620 720 575 C740 620 760 675 820 690 C900 710 970 770 1010 880 C930 842 885 850 840 824 C790 795 760 810 720 790 C680 810 650 795 600 824 C555 850 510 842 430 880Z" fill="url(#pm-glass-pink)" />
            <path d="M490 850 C530 760 585 730 650 710 C690 698 705 665 720 632 C735 665 750 698 790 710 C855 730 910 760 950 850" fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" opacity=".78" />
            <path d="M555 835 C590 780 635 760 680 744 C700 736 712 710 720 690 C728 710 740 736 760 744 C805 760 850 780 885 835" fill="none" stroke="#fff" strokeWidth="3" opacity=".58" />
          </g>
        </g>

        <g className="pm-world__glitter" pointerEvents="none" fill="#fff9e9">\n          <circle cx="155" cy="700" r="3"><animate attributeName="opacity" values=".15;.9;.3;.15" dur="5s" repeatCount="indefinite"/><animateTransform attributeName="transform" type="translate" values="0 0;-12 -22;8 -38;0 0" dur="9s" repeatCount="indefinite"/></circle>\n          <circle cx="285" cy="745" r="2"><animate attributeName="opacity" values=".2;.8;.2" dur="6s" repeatCount="indefinite"/><animateTransform attributeName="transform" type="translate" values="0 0;14 -18;-4 -34;0 0" dur="10s" repeatCount="indefinite"/></circle>\n          <circle cx="365" cy="650" r="2.5"><animate attributeName="opacity" values=".1;.9;.25;.1" dur="7s" repeatCount="indefinite"/><animateTransform attributeName="transform" type="translate" values="0 0;10 -20;-8 -36;0 0" dur="8s" repeatCount="indefinite"/></circle>\n          <circle cx="495" cy="760" r="2"><animate attributeName="opacity" values=".2;.85;.2" dur="5.8s" repeatCount="indefinite"/><animateTransform attributeName="transform" type="translate" values="0 0;-14 -16;5 -30;0 0" dur="11s" repeatCount="indefinite"/></circle>\n          <circle cx="585" cy="680" r="3"><animate attributeName="opacity" values=".15;.9;.15" dur="6.5s" repeatCount="indefinite"/><animateTransform attributeName="transform" type="translate" values="0 0;12 -24;-5 -40;0 0" dur="9.5s" repeatCount="indefinite"/></circle>\n          <circle cx="665" cy="735" r="2"><animate attributeName="opacity" values=".1;.8;.2" dur="5.4s" repeatCount="indefinite"/><animateTransform attributeName="transform" type="translate" values="0 0;-9 -18;8 -32;0 0" dur="8.5s" repeatCount="indefinite"/></circle>\n          <circle cx="790" cy="665" r="2.5"><animate attributeName="opacity" values=".15;.9;.15" dur="7.2s" repeatCount="indefinite"/><animateTransform attributeName="transform" type="translate" values="0 0;14 -20;-6 -36;0 0" dur="10.5s" repeatCount="indefinite"/></circle>\n          <circle cx="875" cy="745" r="3"><animate attributeName="opacity" values=".2;.85;.2" dur="6s" repeatCount="indefinite"/><animateTransform attributeName="transform" type="translate" values="0 0;-12 -22;7 -38;0 0" dur="9s" repeatCount="indefinite"/></circle>\n          <circle cx="980" cy="680" r="2"><animate attributeName="opacity" values=".1;.9;.2" dur="5.5s" repeatCount="indefinite"/><animateTransform attributeName="transform" type="translate" values="0 0;11 -17;-5 -31;0 0" dur="8s" repeatCount="indefinite"/></circle>\n          <circle cx="1090" cy="735" r="2.5"><animate attributeName="opacity" values=".15;.85;.15" dur="6.8s" repeatCount="indefinite"/><animateTransform attributeName="transform" type="translate" values="0 0;-13 -19;6 -35;0 0" dur="10s" repeatCount="indefinite"/></circle>\n          <circle cx="1190" cy="660" r="3"><animate attributeName="opacity" values=".1;.9;.2" dur="5.9s" repeatCount="indefinite"/><animateTransform attributeName="transform" type="translate" values="0 0;12 -21;-7 -37;0 0" dur="9.2s" repeatCount="indefinite"/></circle>\n          <circle cx="1310" cy="730" r="2"><animate attributeName="opacity" values=".2;.8;.2" dur="7s" repeatCount="indefinite"/><animateTransform attributeName="transform" type="translate" values="0 0;-10 -18;5 -32;0 0" dur="11s" repeatCount="indefinite"/></circle>\n          <path d="M0 -7L2 -2L7 0L2 2L0 7L-2 2L-7 0L-2 -2Z" transform="translate(555 705)"><animate attributeName="opacity" values=".2;.9;.2" dur="4.5s" repeatCount="indefinite"/><animateTransform attributeName="transform" additive="sum" type="translate" values="0 0;10 -22;0 0" dur="9s" repeatCount="indefinite"/></path>\n          <path d="M0 -5L1.5 -1.5L5 0L1.5 1.5L0 5L-1.5 1.5L-5 0L-1.5 -1.5Z" transform="translate(1135 690)"><animate attributeName="opacity" values=".15;.85;.15" dur="5.5s" repeatCount="indefinite"/><animateTransform attributeName="transform" additive="sum" type="translate" values="0 0;-12 -20;0 0" dur="11s" repeatCount="indefinite"/></path>\n        </g>\n\n        <g className="pm-world__gloss" opacity=".8" transform={`translate(0 ${liquidShift * 0.72}) translate(720 820) scale(1 ${1 + Math.abs(scrollImpulse) * 0.025}) translate(-720 -820)`}>
          <path d={surfacePath} fill="url(#pm-liquid-shine)" />
          <path d={`M90 ${780 - rise * .4} C270 ${700 - rise * .42} 370 ${825 - rise * .5} 520 ${720 - rise * .75} S830 ${690 - rise * .72} 970 ${750 - rise * .48} S1200 ${810 - rise * .38} 1360 ${730 - rise * .5}`} fill="none" stroke="#fff" strokeWidth={12 + progress * 15} strokeLinecap="round" opacity=".58" />
          <ellipse cx={340 + progress * 220} cy={690 - rise * .7} rx="115" ry="25" fill="#fff" opacity=".56" />
        </g>

        <g className="pm-world__sculpture" opacity={build} transform={`translate(0 ${(1 - build) * 78}) scale(${.94 + build * .06} 1)`} filter="url(#pm-depth)">
          <path d="M720 810 C625 735 570 660 565 585 C560 510 620 455 720 420 C820 455 880 510 875 585 C870 660 815 735 720 810Z" fill="url(#pm-glass-cream)" opacity=".72" />
          <path d="M720 785 C650 718 610 655 610 590 C610 530 650 490 720 458 C790 490 830 530 830 590 C830 655 790 718 720 785Z" fill="url(#pm-glass-lime)" opacity=".68" />
          <path d="M720 750 C675 700 650 650 655 600 C660 555 680 525 720 500 C760 525 780 555 785 600 C790 650 765 700 720 750Z" fill="url(#pm-glass-pink)" opacity=".7" />
          <path d="M565 585 C590 550 620 535 650 535 C675 535 695 550 720 575 C745 550 765 535 790 535 C820 535 850 550 875 585" fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" opacity=".78" />
          <path d="M610 590 C640 565 665 565 690 590 C705 605 712 615 720 625 C728 615 735 605 750 590 C775 565 800 565 830 590" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" opacity=".66" />
          <path d="M720 458 C705 490 700 520 720 575 C740 520 735 490 720 458Z" fill="url(#pm-glass-reflection)" opacity=".72" />
        </g>
        <g opacity={finale} transform={`translate(0 ${(1 - finale) * 34})`}>
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
