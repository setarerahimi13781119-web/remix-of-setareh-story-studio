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

  const mobile = typeof window !== "undefined" && window.innerWidth < 768;
  const stageTransform = `translate3d(-50%, ${(mobile ? -40 : -43) - progress * (mobile ? 3 : 5)}vh, 0) rotateX(${(mobile ? 66 : 62) - progress * (mobile ? 12 : 18)}deg) rotateZ(${-22 + progress * 48}deg) scale(${(mobile ? .5 : .64) + progress * .32})`;

  return (
    <div className="pm-world" aria-hidden="true" style={{ "--scene-progress": progress } as React.CSSProperties}>
      <div className="pm-world__atmosphere" style={{ opacity: .48 + progress * .34, transform: `scale(${.88 + progress * .2})` }} />
      <div className="pm-world__stage" style={{ width: mobile ? "118vw" : "min(76vw, 780px)", transform: stageTransform }}>
        <div className="pm-world__orbit pm-world__orbit--outer" style={{ transform: `rotateX(68deg) rotateZ(${-18 + progress * 130}deg)` }}><span /></div>
        <div className="pm-world__orbit pm-world__orbit--middle" style={{ transform: `rotateX(72deg) rotateZ(${48 - progress * 170}deg)` }}><span /></div>
        <div className="pm-world__orbit pm-world__orbit--inner" style={{ transform: `rotateX(68deg) rotateZ(${-55 + progress * 210}deg)` }}><span /></div>
        <div className="pm-world__core" style={{ transform: `translateZ(72px) rotateZ(${progress * 110}deg) scale(${.76 + progress * .5})` }}><i className="pm-world__core-light" /><i className="pm-world__core-shadow" /></div>
        <div className="pm-world__ribbon pm-world__ribbon--lime" style={{ transform: `translate3d(${progress * 24}%, ${progress * 30}%, 35px) rotateZ(${-34 + progress * 72}deg) rotateY(24deg)` }} />
        <div className="pm-world__ribbon pm-world__ribbon--pink" style={{ transform: `translate3d(${progress * -24}%, ${progress * -27}%, 88px) rotateZ(${38 - progress * 86}deg) rotateY(-28deg)` }} />
        <div className="pm-world__ribbon pm-world__ribbon--cream" style={{ transform: `translate3d(0, ${progress * -35}%, 122px) rotateZ(${-12 + progress * 46}deg)` }} />
        <div className="pm-world__satellite pm-world__satellite--one" style={{ transform: `translate3d(${progress * 220}px, ${progress * -170}px, 160px)` }} />
        <div className="pm-world__satellite pm-world__satellite--two" style={{ transform: `translate3d(${progress * -190}px, ${progress * 190}px, 110px)` }} />
      </div>
      <div className="pm-world__grain" />
      <div className="pm-world__fade" />
    </div>
  );
}
