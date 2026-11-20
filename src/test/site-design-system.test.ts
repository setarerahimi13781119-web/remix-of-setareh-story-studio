import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const readSource = (path: string) => readFileSync(new URL(path, import.meta.url), "utf8");

describe("Portfolio visual design system", () => {
  it("loads Manrope for English and Vazirmatn for Persian", () => {
    const root = readSource("../routes/__root.tsx");
    const styles = readSource("../styles.css");

    expect(root).toContain("family=Manrope");
    expect(root).toContain("family=Vazirmatn");
    expect(styles).toContain('--font-sans: "Manrope"');
    expect(styles).toContain('--font-persian: "Vazirmatn"');
    expect(styles).toContain("@utility font-persian");
  });

  it("defines the approved green, pink and silver palette", () => {
    const styles = readSource("../styles.css");

    for (const color of [
      "#214C3E",
      "#A45170",
      "#F5F7F5",
      "#E8ECE9",
      "#DDE8E1",
      "#F4E3EA",
    ]) {
      expect(styles).toContain(color);
    }
  });

  it("keeps visible keyboard focus and concise press feedback", () => {
    const styles = readSource("../styles.css");
    const button = readSource("../components/ui/button.tsx");

    expect(styles).toContain(":focus-visible");
    expect(button).toContain("active:scale-[0.98]");
    expect(button).toMatch(/duration-(100|150|200)/);
  });

  it("respects reduced-motion preferences", () => {
    const styles = readSource("../styles.css");

    expect(styles).toContain("@media (prefers-reduced-motion: reduce)");
    expect(styles).toContain("transition-duration: 0.01ms");
    expect(styles).toContain("animation-duration: 0.01ms");
  });
});
