/**
 * Portfolio content.
 *
 * EDITORIAL NOTE: The Nikmehr work below is verified: Setareh coordinated and
 * published posts and stories for the Instagram pages "جناب خان" and "هزار و یک"
 * as part of her Content Specialist role at Nikmehr. Present this as content
 * coordination and publishing/distribution only — never as authorship,
 * copywriting, design, video editing, strategy, or account ownership.
 * "هزار و یک" intentionally has no URL yet; add one only when confirmed.
 * The four reels are selected published content examples from this work and are
 * NOT attributed to either page individually.
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

export const nikmehrWork = {
  org: "Nikmehr",
  title: "Instagram content coordination & publishing",
  description:
    "As Content Specialist at Nikmehr, coordinated the content workflow and published posts and stories for two Instagram pages.",
  pages: [
    { name: "جناب خان", href: "https://www.instagram.com/jenabkhan/" },
    { name: "هزار و یک", href: "https://www.instagram.com/1001tvshow?srtk=MXE4MHU1ZDR4dTJwYg==" },
  ] as { name: string; href?: string }[],
};

export const work: WorkItem[] = [
  { id: "01", label: "Selected published content 01", platform: "Instagram", kind: "Reel", href: "https://www.instagram.com/reel/DHBNnH_sr1q/" },
  { id: "02", label: "Selected published content 02", platform: "Instagram", kind: "Reel", href: "https://www.instagram.com/reel/DGNOEYosMEl/" },
  { id: "03", label: "Selected published content 03", platform: "Instagram", kind: "Reel", href: "https://www.instagram.com/reel/DHN8T5PsF3a/" },
  { id: "04", label: "Selected published content 04", platform: "Instagram", kind: "Reel", href: "https://www.instagram.com/reel/DG0vrqaID2v/" },
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
