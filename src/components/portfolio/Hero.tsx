const autumnCollectionCover =
  "https://www.dropbox.com/scl/fi/cv8n8v95qob28spz7hw9s/file_000000001e08820aba357c22c6315627.png?rlkey=yaf88ili4km1o2vpxi6usg52h&raw=1";

export function Hero() {
  return (
    <section
      id="top"
      aria-label="Autumn Collection campaign cover"
      className="flex min-h-[calc(100svh-5rem)] w-full items-center justify-center overflow-hidden bg-[var(--portfolio-cream)] px-4 py-5 sm:px-6 lg:px-10"
    >
      <img
        src={autumnCollectionCover}
        alt="Autumn Collection campaign cover"
        className="block h-auto max-h-[calc(100svh-7.5rem)] w-full object-contain object-center"
        fetchPriority="high"
        loading="eager"
        decoding="async"
        draggable={false}
      />
    </section>
  );
}
