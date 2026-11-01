/**
 * Portfolio content.
 *
 * EDITORIAL NOTE: Work entries below use neutral labels on purpose.
 * The contribution/role for each Instagram link has not yet been verified.
 * When verified, fill in `title`, `role` and `description` for each entry
 * (they render automatically when present). Do not add claims that can't be backed up.
 */

export const profile = {
  name: "Setareh Rahimi",
  headline: "Creative Content & Storytelling",
  intro:
    "Content development, creative concepts and social storytelling for digital platforms.",
  email: "setarerahimi1119@gmail.com",
  // Edit freely — keep phrasing neutral unless availability is current.
  availability: "Open to conversations about freelance and in-house roles.",
};

export type WorkItem = {
  id: string;
  label: string;
  platform: string;
  kind: string;
  href: string;
  title?: string;
  role?: string;
  description?: string;
};

export const work: WorkItem[] = [
  { id: "00", label: "Instagram account reference", platform: "Instagram", kind: "Account", href: "https://www.instagram.com/jenabkhan/" },
  { id: "01", label: "Selected video 01", platform: "Instagram", kind: "Reel", href: "https://www.instagram.com/reel/DHBNnH_sr1q/" },
  { id: "02", label: "Selected video 02", platform: "Instagram", kind: "Reel", href: "https://www.instagram.com/reel/DGNOEYosMEl/" },
  { id: "03", label: "Selected video 03", platform: "Instagram", kind: "Reel", href: "https://www.instagram.com/reel/DHN8T5PsF3a/" },
  { id: "04", label: "Selected video 04", platform: "Instagram", kind: "Reel", href: "https://www.instagram.com/reel/DG0vrqaID2v/" },
];

export const capabilities = [
  { name: "Content planning", note: "Structuring themes, calendars and formats around a clear purpose." },
  { name: "Creative concept development", note: "Shaping ideas into angles that suit the platform and audience." },
  { name: "Copywriting", note: "Captions, short-form text and messaging with a consistent voice." },
  { name: "Video scripting", note: "Outlining hooks, beats and on-screen text for short-form video." },
  { name: "Social media content", note: "Preparing posts and stories with attention to rhythm and tone." },
  { name: "Visual storytelling", note: "Thinking in sequence, framing and pacing, not just words." },
  { name: "Editorial coordination", note: "Keeping drafts, feedback and deadlines moving between people." },
];

export const experience = [
  {
    role: "Content Specialist",
    org: "Nikmehr",
    period: "Mar 2025 — Mar 2026",
    description:
      "Developed and coordinated content for digital channels, supported idea development and followed tasks through to publication while keeping communication with the audience in view.",
  },
  {
    role: "Content Production Assistant",
    org: "Fatemi Publishing House",
    period: "Nov 2022 — Jul 2023",
    description:
      "Supported the content production process, assisted with coordination between team members and followed up on tasks to keep editorial work on schedule.",
  },
];

export const about = {
  education: { degree: "BA in History", school: "University of Tehran" },
  languages: [
    { name: "Turkish", level: "Advanced" },
    { name: "English", level: "Good working proficiency" },
  ],
};
