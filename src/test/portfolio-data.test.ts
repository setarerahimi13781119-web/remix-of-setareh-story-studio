import { describe, expect, it } from "vitest";
import { profile, nikmehrWork, projects, work } from "@/data/portfolio";

describe("Profile contact links", () => {
  it("keeps the confirmed LinkedIn and JobVision CV destinations", () => {
    expect(profile.linkedin).toBe("https://linkedin.com/in/setare-rahimi-968a0a274");
    expect(profile.cv).toBe("https://jobvision.ir/cv/setare-rahimi-174320");
  });
});

describe("Verified portfolio project boundaries", () => {
  it("keeps the current portfolio project order and all thirteen projects", () => {
    expect(projects.map((project) => project.id)).toEqual([
      "parla-perfume-ad",
      "sayeh-character-design",
      "setare-fashion-house-film",
      "khaneh-shalvar",
      "khaneh-mod-setareh",
      "junoon-podcast",
      "moodbean",
      "random-pieces",
      "turquoise-jewelry-set",
      "turkish-coffee-packaging",
      "nikmehr",
      "touch-ups",
      "stillness-wellness-spaces",
    ]);
    expect(new Set(projects.map((project) => project.id)).size).toBe(13);
  });

  it("treats independent visual projects as explorations, not verified delivered roles", () => {
    expect(
      projects.filter((project) => project.status === "exploration").map((project) => project.id),
    ).toEqual([
      "parla-perfume-ad",
      "sayeh-character-design",
      "setare-fashion-house-film",
      "khaneh-shalvar",
      "khaneh-mod-setareh",
      "moodbean",
      "random-pieces",
      "turquoise-jewelry-set",
      "turkish-coffee-packaging",
      "touch-ups",
      "stillness-wellness-spaces",
    ]);
    expect(projects.find((p) => p.id === "junoon-podcast")?.status).toBe("team-collaboration");
    expect(
      projects.filter((project) => project.status === "verified-role").map((project) => project.id),
    ).toEqual(["nikmehr"]);
  });

  it("keeps Coffee Assets described as a growing visual collection", () => {
    const coffeeAssets = projects.find((p) => p.id === "moodbean");
    expect(coffeeAssets?.title).toBe("Coffee Assets");
    expect(coffeeAssets?.scope).toContain("Coffee-themed visual asset collection");
    expect(coffeeAssets?.context).toContain("gallery currently includes eight selected images");
  });
  it("separates Junoon into video editing (Brian Yassipour) and visual exploration tracks", () => {
    const junoon = projects.find((p) => p.id === "junoon-podcast");
    expect(junoon?.tracks?.map((t) => t.title)).toEqual([
      "Video Editing",
      "Visual Design Exploration",
    ]);
    expect(junoon?.tracks?.[0]?.label).toContain("Brian Yassipour");
  });

  it("preserves both confirmed page destinations including the full 1001 query", () => {
    expect(nikmehrWork.pages.map((page) => page.href)).toEqual([
      "https://www.instagram.com/jenabkhan/",
      "https://www.instagram.com/1001tvshow?srtk=MXE4MHU1ZDR4dTJwYg==",
    ]);
  });

  it("retains the four published example URLs without an individual page attribution", () => {
    expect(work.map((reel) => reel.href)).toEqual([
      "https://www.instagram.com/reel/DHBNnH_sr1q/",
      "https://www.instagram.com/reel/DGNOEYosMEl/",
      "https://www.instagram.com/reel/DHN8T5PsF3a/",
      "https://www.instagram.com/reel/DG0vrqaID2v/",
    ]);
    for (const reel of work) expect(reel).not.toHaveProperty("page");
  });
});
