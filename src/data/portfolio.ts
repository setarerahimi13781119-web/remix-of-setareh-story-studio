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
  headline: "Content Specialist | Content Production & Coordination",
  intro:
    "Content professional with experience in media content production and publishing operations — focused on coordination, task follow-up and audience communication.",
  email: "setarerahimi1119@gmail.com",
  // Availability preference, not a credential — keep phrasing as a preference.
  availability: "Currently open to conversations about freelance and in-house opportunities.",
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
  { id: "01", label: "Selected video reference 01", platform: "Instagram", kind: "Reel", href: "https://www.instagram.com/reel/DHBNnH_sr1q/" },
  { id: "02", label: "Selected video reference 02", platform: "Instagram", kind: "Reel", href: "https://www.instagram.com/reel/DGNOEYosMEl/" },
  { id: "03", label: "Selected video reference 03", platform: "Instagram", kind: "Reel", href: "https://www.instagram.com/reel/DHN8T5PsF3a/" },
  { id: "04", label: "Selected video reference 04", platform: "Instagram", kind: "Reel", href: "https://www.instagram.com/reel/DG0vrqaID2v/" },
];

export const capabilities = [
  { name: "Content production coordination", note: "Coordinating with content teams to keep production moving from planning to publication." },
  { name: "Task and workflow follow-up", note: "Tracking assigned tasks and execution details so nothing falls through." },
  { name: "Media content planning support", note: "Participating in the planning and production of media content." },
  { name: "Audience communication", note: "Keeping clear, consistent communication with audiences." },
  { name: "Order follow-up", note: "Following up on orders and day-to-day operational tasks." },
  { name: "Team collaboration", note: "Working closely with team members to keep shared work on track." },
  { name: "Publishing operations support", note: "Supporting the continuity of day-to-day publishing workflows." },
];

export const experience = [
  {
    role: "Content Specialist",
    org: "Nikmehr",
    period: "Mar 2025 — Mar 2026",
    description:
      "Coordinated with the content team, followed up on assigned tasks, participated in the planning and production of media content, and tracked execution details.",
  },
  {
    role: "Content Production Assistant",
    org: "Fatemi Publishing House",
    period: "Nov 2022 — Jul 2023",
    description:
      "Followed up on orders and day-to-day operational tasks, communicated with audiences, and supported the continuity of the publishing workflow.",
  },
];

export const about = {
  bio: "Content professional with experience supporting media content production at Nikmehr and day-to-day publishing operations at Fatemi Publishing House. Holds a B.A. in History from the University of Tehran. Brings a structured approach to coordination, task follow-up, and audience communication.",
  education: {
    degree: "B.A. in History",
    school: "University of Tehran",
    period: "1397–1400",
    gpa: "GPA 16.2/20",
  },
  languages: [
    { name: "Turkish", level: "Advanced" },
    { name: "English", level: "Good working proficiency" },
  ],
};
