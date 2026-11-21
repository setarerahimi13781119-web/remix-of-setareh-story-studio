import { describe, expect, it } from "vitest";
import { profile, nikmehrWork, projects, work, capabilities, experience } from "@/data/portfolio";

describe("Profile contact links", () => {
  it("keeps the confirmed LinkedIn and JobVision CV destinations", () => {
    expect(profile.linkedin).toBe("https://linkedin.com/in/setare-rahimi-968a0a274");
    expect(profile.cv).toBe("https://jobvision.ir/cv/setare-rahimi-174320");
  });

  it("uses valid secure external destinations", () => {
    for (const url of [profile.linkedin, profile.cv]) {
      expect(new URL(url).protocol).toBe("https:");
    }
  });
});

describe("Portfolio project integrity", () => {
  it("keeps the five currently approved projects in the intended order", () => {
    expect(projects.map((project) => project.id)).toEqual([
      "nikmehr",
      "khaneh-shalvar",
      "khaneh-mod-setareh",
      "touch-ups",
      "junoon-podcast",
    ]);
    expect(new Set(projects.map((project) => project.id)).size).toBe(5);
  });

  it("distinguishes verified work, explorations and team collaboration", () => {
    expect(projects.filter((project) => project.status === "verified-role").map((p) => p.id))
      .toEqual(["nikmehr"]);
    expect(projects.filter((project) => project.status === "exploration").map((p) => p.id))
      .toEqual(["khaneh-shalvar", "khaneh-mod-setareh", "touch-ups"]);
    expect(projects.filter((project) => project.status === "team-collaboration").map((p) => p.id))
      .toEqual(["junoon-podcast"]);
  });

  it("requires every project to have a unique id and complete case-study content", () => {
    for (const project of projects) {
      expect(project.id.trim()).not.toBe("");
      expect(project.title.trim()).not.toBe("");
      expect(project.role.trim()).not.toBe("");
      expect(project.summary.trim()).not.toBe("");
      expect(project.context.trim()).not.toBe("");
      expect(project.scope.length).toBeGreaterThan(0);
      expect(project.note.trim()).not.toBe("");
    }
  });

  it("separates Junoon into video editing and visual exploration tracks", () => {
    const junoon = projects.find((project) => project.id === "junoon-podcast");
    expect(junoon?.tracks?.map((track) => track.title)).toEqual([
      "Video Editing",
      "Visual Design Exploration",
    ]);
    expect(junoon?.tracks?.[0]?.label).toContain("Brian Yassipour");
  });
});

describe("Verified Nikmehr work", () => {
  it("preserves both confirmed page destinations including the full 1001 query", () => {
    expect(nikmehrWork.pages.map((page) => page.href)).toEqual([
      "https://www.instagram.com/jenabkhan/",
      "https://www.instagram.com/1001tvshow?srtk=MXE4MHU1ZDR4dTJwYg==",
    ]);
  });

  it("retains the four published example URLs without individual page attribution", () => {
    expect(work.map((reel) => reel.href)).toEqual([
      "https://www.instagram.com/reel/DHBNnH_sr1q/",
      "https://www.instagram.com/reel/DGNOEYosMEl/",
      "https://www.instagram.com/reel/DHN8T5PsF3a/",
      "https://www.instagram.com/reel/DG0vrqaID2v/",
    ]);
    for (const reel of work) expect(reel).not.toHaveProperty("page");
  });
});

describe("Portfolio sections", () => {
  it("provides non-empty capability and experience content", () => {
    expect(capabilities.length).toBeGreaterThan(0);
    expect(experience.length).toBeGreaterThan(0);
    for (const item of capabilities) {
      expect(item.name.trim()).not.toBe("");
      expect(item.note.trim()).not.toBe("");
    }
    for (const item of experience) {
      expect(item.role.trim()).not.toBe("");
      expect(item.org.trim()).not.toBe("");
      expect(item.period.trim()).not.toBe("");
      expect(item.description.trim()).not.toBe("");
    }
  });
});
