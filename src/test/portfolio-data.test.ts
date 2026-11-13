import { describe, expect, it } from "vitest";
import { profile, nikmehrWork, projects, work } from "@/data/portfolio";

describe("Profile contact links", () => {
  it("keeps the confirmed LinkedIn and JobVision CV destinations", () => {
    expect(profile.linkedin).toBe("https://linkedin.com/in/setare-rahimi-968a0a274");
    expect(profile.cv).toBe("https://jobvision.ir/cv/setare-rahimi-174320");
  });
});

describe("Verified portfolio project boundaries", () => {
  it("keeps the portfolio project order and all seven projects", () => {
    expect(projects.map((project) => project.id)).toEqual([
      "khaneh-shalvar",
      "khaneh-mod-setareh",
      "junoon-podcast",
      "ai-visual-storytelling",
      "moodbean",
      "turquoise-jewelry-set",
      "nikmehr",
    ]);
    expect(new Set(projects.map((project) => project.id)).size).toBe(7);
  });

  it("treats the five visual explorations as explorations, not verified delivered roles", () => {
    expect(
      projects.filter((project) => project.status === "exploration").map((project) => project.id),
    ).toEqual([
      "khaneh-shalvar",
      "khaneh-mod-setareh",
      "ai-visual-storytelling",
      "moodbean",
      "turquoise-jewelry-set",
    ]);
    expect(projects.find((p) => p.id === "junoon-podcast")?.status).toBe("team-collaboration");
    expect(
      projects.filter((project) => project.status === "verified-role").map((project) => project.id),
    ).toEqual(["nikmehr"]);
  });

  it("describes Moodbean as an independent coffee discovery product, not generic cafe social content", () => {
    const moodbean = projects.find((p) => p.id === "moodbean");
    expect(moodbean?.title).toBe("Moodbean — Coffee by Mood");
    expect(moodbean?.scope).toContain("Mood- and occasion-based coffee discovery");
    expect(moodbean?.scope).toContain("Interactive cart quantities and order placement flow");
    expect(projects.some((p) => p.id === "cafe-social-content")).toBe(false);
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
