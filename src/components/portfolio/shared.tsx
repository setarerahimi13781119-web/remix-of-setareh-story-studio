import { useEffect, useRef, useState, type ReactNode } from "react";

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Keep content visible in browsers that do not support IntersectionObserver.
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => e?.isIntersecting && (setVisible(true), io.disconnect()),
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} data-visible={visible} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

function SectionHead({ index, title, id }: { index: string; title: string; id: string }) {
  return (
    <div className="grid grid-cols-12 gap-6 border-t border-rule pt-5 pb-12 md:pb-16">
      <p className="eyebrow col-span-4 md:col-span-3">§ {index}</p>
      <h2
        id={id}
        className="col-span-8 md:col-span-9 font-display text-4xl md:text-6xl leading-none tracking-tight"
      >
        {title}
      </h2>
    </div>
  );
}
