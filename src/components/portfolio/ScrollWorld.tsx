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

  return (
    <div className="pm-world" aria-hidden="true" style={{ "--scene-progress": progress } as React.CSSProperties}>
      <div className="pm-world__atmosphere" />
      <div className="pm-world__stage">
        <div className="pm-world__orbit pm-world__orbit--outer"><span /></div>
        <div className="pm-world__orbit pm-world__orbit--middle"><span /></div>
        <div className="pm-world__orbit pm-world__orbit--inner"><span /></div>
        <div className="pm-world__core"><i className="pm-world__core-light" /><i className="pm-world__core-shadow" /></div>
        <div className="pm-world__ribbon pm-world__ribbon--lime" />
        <div className="pm-world__ribbon pm-world__ribbon--pink" />
        <div className="pm-world__ribbon pm-world__ribbon--cream" />
        <div className="pm-world__satellite pm-world__satellite--one" />
        <div className="pm-world__satellite pm-world__satellite--two" />
      </div>
      <div className="pm-world__grain" />
      <div className="pm-world__fade" />
    </div>
  );
}
