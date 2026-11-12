/**
 * Portfolio content.
 *
 * EDITORIAL NOTE: The Nikmehr work below is verified: Setareh coordinated and
 * published posts and stories for the Instagram pages "جناب خان" and "هزار و یک"
 * as part of her Content Specialist role at Nikmehr. Present this as content
 * coordination and publishing/distribution only — never as authorship,
 * copywriting, design, video editing, strategy, or account ownership.
 * Preserve each confirmed page URL exactly, including query parameters.
 * The four reels are selected published content examples from this work and are
 * NOT attributed to either page individually.
 * The other projects are user-confirmed explorations, not client-delivery claims.
 * Replace typographic covers only with verified project assets. Add fuller
 * case-study details only when supplied; do not infer dates, results or ownership.
 */

export const profile = {
  name: "Setareh Rahimi",
  headline: "Content Coordination · Video Editing · Visual Design",
  intro:
    "I coordinate media content and publishing workflows, with hands-on experience in full video editing and visual design exploration through collaborative and self-directed projects.",
  email: "setarerahimi1119@gmail.com",
  linkedin: "https://linkedin.com/in/setare-rahimi-968a0a274",
  cv: "https://jobvision.ir/cv/setare-rahimi-174320",
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
  {
    id: "01",
    label: "Published Reel 01",
    platform: "Instagram",
    kind: "Reel",
    href: "https://www.instagram.com/reel/DHBNnH_sr1q/",
  },
  {
    id: "02",
    label: "Published Reel 02",
    platform: "Instagram",
    kind: "Reel",
    href: "https://www.instagram.com/reel/DGNOEYosMEl/",
  },
  {
    id: "03",
    label: "Published Reel 03",
    platform: "Instagram",
    kind: "Reel",
    href: "https://www.instagram.com/reel/DHN8T5PsF3a/",
  },
  {
    id: "04",
    label: "Published Reel 04",
    platform: "Instagram",
    kind: "Reel",
    href: "https://www.instagram.com/reel/DG0vrqaID2v/",
  },
];

export type PortfolioProject = {
  id: string;
  title: string;
  coverLabel: string;
  category: string;
  role: string;
  summary: string;
  context: string;
  scope: string[];
  status: "exploration" | "verified-role" | "team-collaboration";
  note: string;
  /** Optional separately attributed work tracks shown in the detail view. */
  tracks?: { title: string; label: string; items: string[] }[];
};

export const projects: PortfolioProject[] = [
  {
    id: "khaneh-shalvar",
    title: "Khaneh Shalvar",
    coverLabel: "Autumn campaign",
    category: "Fashion · Ecommerce",
    role: "Art direction & visual design exploration",
    summary:
      "Autumn fashion campaign visuals explored across desktop and mobile ecommerce hero banners.",
    context:
      "A seasonal fashion direction for Khaneh Shalvar, exploring how a campaign visual translates into desktop and mobile banner formats.",
    scope: [
      "Autumn fashion campaign art direction",
      "Desktop ecommerce hero banner exploration",
      "Mobile campaign banner exploration",
    ],
    status: "exploration",
    note: "Presented as a design exploration; client delivery and ownership are not claimed.",
  },
  {
    id: "khaneh-mod-setareh",
    title: "Khaneh Mod Setareh",
    coverLabel: "Fashion storefront",
    category: "Fashion · Ecommerce",
    role: "Ecommerce visual design exploration",
    summary:
      "Desktop and mobile store headers, campaign visuals and a LinkedIn presentation for a separate fashion ecommerce project.",
    context:
      "A fashion storefront visual project for Khaneh Mod Setareh, separate from the Khaneh Shalvar autumn campaign.",
    scope: [
      "Desktop and mobile store header / banner design",
      "Fashion campaign visual exploration",
      "LinkedIn presentation",
    ],
    status: "exploration",
    note: "The LinkedIn presentation is part of the project scope; no publication or client-delivery claim is made.",
  },
  {
    id: "junoon-podcast",
    title: "Junoon Podcast",
    coverLabel: "Recent team collaboration",
    category: "Podcast · Video editing & visual design",
    role: "Full video editing · Visual design exploration",
    summary:
      "Recently joined the team of this long-running true-crime podcast: full editing of the first completed video, plus personal cover and social visual explorations.",
    context:
      "Junoon is a long-running true-crime podcast that existed before this collaboration. Setareh recently joined the team; her contribution is limited to the two tracks below.",
    scope: [
      "Full video editing — first completed video: Brian Yassipour",
      "Personal documentary crime-podcast cover and social visual explorations",
    ],
    status: "team-collaboration",
    note: "The podcast, its original identity and its brand history predate this collaboration and are not claimed. The five images shown here are Setareh's own visual explorations from this collaboration; no video file has been added to this portfolio.",
    tracks: [
      {
        title: "Video Editing",
        label: "Full video editing · First completed video: Brian Yassipour (برایان یاسی‌پور)",
        items: [
          "End-to-end editing of the episode video on the Brian Yassipour case",
          "Carried through from editing to final export",
        ],
      },
      {
        title: "Visual Design Exploration",
        label: "Own contribution · Exploration",
        items: [
          "Documentary crime-podcast cover explorations",
          "High-contrast portrait treatments with red / black / white accents",
          "Social visual treatments for highlight and reels covers",
        ],
      },
    ],
  },
  {
    id: "ai-visual-storytelling",
    title: "AI-assisted visual storytelling",
    coverLabel: "Pennsylvania, 1950",
    category: "AI-assisted · Image production",
    role: "AI-assisted visual storytelling & image production",
    summary:
      "Photoreal character scenes of historical Iranian immigrants in 1950 Pennsylvania, with vintage photographic treatments.",
    context:
      "AI-assisted scene production exploring historical Iranian immigrant characters in Pennsylvania in 1950, with a vintage photographic visual language.",
    scope: [
      "Historical Iranian immigrant character scenes",
      "Photoreal visual production",
      "Vintage photographic treatments",
    ],
    status: "exploration",
    note: "These are AI-assisted images, not photographs or documentary records.",
  },
  {
    id: "cafe-social-content",
    title: "Cafe & food social content",
    coverLabel: "Social carousel",
    category: "Social content · Image editing",
    role: "Social content design & image editing exploration",
    summary:
      "Original cafe and restaurant image editing, Pinterest-inspired doodles and 3:4 carousel layouts for visual merchandising.",
    context:
      "A social content exploration combining cafe and restaurant image editing with illustrated accents and carousel-based visual merchandising.",
    scope: [
      "Original cafe / restaurant image editing",
      "Pinterest-inspired doodle treatment",
      "3:4 carousel slide design",
      "Visual merchandising",
    ],
    status: "exploration",
    note: "Presented as social content design and image editing exploration; publication and client delivery are not claimed.",
  },
  {
    id: "nikmehr",
    title: "Nikmehr",
    coverLabel: "Content publishing",
    category: "Media · Content operations",
    role: "Content coordination & publishing",
    summary: nikmehrWork.description,
    context:
      "As part of the Content Specialist role at Nikmehr, coordinated and published posts and stories for the Jenab Khan and 1001 Instagram pages.",
    scope: [
      "Coordination of posts and stories",
      "Publishing / distribution for Jenab Khan and 1001",
    ],
    status: "verified-role",
    note: "The role was coordination and publishing, not authorship, copywriting, graphic design, video editing, strategy ownership or account ownership. The selected reels relate to this Nikmehr work overall and are not assigned to either page individually.",
  },
];

export const capabilities = [
  {
    name: "Content coordination & publishing",
    note: "Coordinating and publishing posts and stories across media social channels, based on the verified Nikmehr role.",
  },
  {
    name: "Video editing",
    note: "End-to-end editing and final export of the first completed Junoon Podcast episode on the Brian Yassipour case.",
  },
  {
    name: "Visual design exploration",
    note: "Developing campaign, ecommerce and social visual directions through self-directed studies and recent team collaboration.",
  },
  {
    name: "Image editing & social layouts",
    note: "Editing cafe and restaurant imagery, adding illustrated accents and exploring 3:4 carousel compositions.",
  },
  {
    name: "AI-assisted image production",
    note: "Creating photoreal visual scenes and applying vintage photographic treatments for historical storytelling studies.",
  },
  {
    name: "Production workflow support",
    note: "Following up on assigned tasks and execution details while supporting content planning and production workflows.",
  },
  {
    name: "Publishing operations & audience communication",
    note: "Supporting day-to-day publishing operations, order follow-up and audience communication in a publishing-house environment.",
  },
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
