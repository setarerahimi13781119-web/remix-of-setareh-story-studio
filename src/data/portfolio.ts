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
  liveUrl?: string;
};

export const projects: PortfolioProject[] = [
  {
    id: "parla-perfume-ad",
    title: "Parla — Perfume Campaign",
    coverLabel: "Fragrance video ad",
    category: "Fragrance · Video content",
    role: "Video editing & visual content",
    summary:
      "A vertical short-form advertisement created for a Parla fragrance, presented as a finished video piece.",
    context:
      "A perfume advertising video for Parla, prepared in a vertical 9:16 format for social media placement.",
    scope: [
      "Short-form fragrance advertising video",
      "Vertical 9:16 video presentation",
    ],
    status: "exploration",
    note: "Presented as a video-content project. Production, scripting and art-direction responsibilities are not claimed.",
  },
  {
    id: "sayeh-character-design",
    title: "SAYEH — Character Design",
    coverLabel: "Original character design dossier",
    category: "Character Design · Visual Development",
    role: "Independent Character Designer & Visual Developer",
    summary:
      "An original character developed independently from concept through final visual presentation, with a structured design dossier covering proportions, turnarounds, expressions and defining details.",
    context:
      "SAYEH is an original character design created entirely by Setareh Rahimi. The project documents the character’s visual development and consistency across multiple views, expressions and detail studies.",
    scope: [
      "Original character concept, appearance and styling",
      "Front, three-quarter and profile turnaround views",
      "Anatomical proportions and measurement sheet",
      "Facial expression studies",
      "Detail studies: eyes, ears, skin markings, hair, tail, accessories and clothing",
      "Material definition, color palette and final visual documentation",
    ],
    status: "exploration",
    note:
      "An independently designed original character. All character design and visual development were completed by Setareh Rahimi.",
  },
  {
    id: "setare-fashion-house-film",
    title: "Setare Fashion House — Autumn Collection Film",
    coverLabel: "Personal fashion film",
    category: "Fashion · Video & Motion Content",
    role: "Personal concept & video creation",
    summary:
      "A self-directed fashion film created around an autumn collection concept for Setare Fashion House.",
    context:
      "An independent fashion video project developed as a personal creative work, separate from the Khaneh Mod Setareh and Khaneh Shalvar projects.",
    scope: [
      "Autumn collection fashion-film concept",
      "Video creation and visual presentation",
    ],
    status: "exploration",
    note: "A self-directed personal project.",
  },
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
    id: "moodbean",
    title: "Coffee Assets",
    coverLabel: "Coffee visual collection",
    category: "Coffee · Visual Assets",
    role: "Visual exploration & asset creation",
    summary:
      "A growing collection of coffee-related visual assets, bringing together atmospheric imagery and creative explorations.",
    context:
      "An evolving visual collection focused on coffee, its rituals, textures and atmosphere. The gallery currently includes eight selected images and will be expanded as additional assets are added.",
    scope: [
      "Coffee-themed visual asset collection",
      "Atmospheric imagery and creative visual explorations",
      "Ongoing gallery development",
    ],
    status: "exploration",
    note: "A growing visual collection. Additional assets will be added as the project develops.",
  },
  {
    id: "random-pieces",
    title: "Random Pieces",
    coverLabel: "Poster & graphic design collection",
    category: "Graphic Design · Posters",
    role: "Poster design & visual exploration",
    summary:
      "A selection of standalone poster and graphic-design pieces gathered into an evolving visual collection.",
    context:
      "Random Pieces brings together selected poster works and graphic experiments that sit outside the larger case studies in this portfolio.",
    scope: [
      "Selected poster designs",
      "Standalone graphic compositions",
      "An evolving collection of visual experiments",
    ],
    status: "exploration",
    note: "A curated collection of individual pieces rather than one continuous client project.",
  },
  {
    id: "turquoise-jewelry-set",
    title: "Turquoise Jewelry Set",
    coverLabel: "AI-generated product concept",
    category: "AI-assisted · Product visual design",
    role: "AI Art Direction · Concept Development · Product Visual Creation",
    summary:
      "An end-to-end AI-generated turquoise jewelry concept, developed from the initial idea through the final product visuals.",
    context:
      "A self-directed AI product-visual project exploring a coordinated turquoise jewelry set. The concept, design development and final imagery were all created with AI tools.",
    scope: [
      "AI-assisted concept development",
      "Jewelry set design exploration",
      "AI-generated product and model imagery",
      "Art direction and visual refinement",
    ],
    status: "exploration",
    note: "All visuals are AI-generated concept imagery; they do not document a physically manufactured product or a real-life photoshoot.",
  },
  {
    id: "turkish-coffee-packaging",
    title: "Turkish Coffee Packaging Concept",
    coverLabel: "Three roast colorways",
    category: "Coffee · Packaging Design",
    role: "Front-of-pack visual design",
    summary:
      "Front-of-pack design for a conceptual Turkish coffee brand, presented as a consistent three-product range with color variations for each roast.",
    context:
      "A self-initiated packaging concept for a Turkish coffee brand, exploring a unified visual system across three roast varieties.",
    scope: [
      "Front-of-pack design for three coffee roast varieties",
      "Consistent layout and graphic system across the product range",
      "Color variations to distinguish the three roasts",
    ],
    status: "exploration",
    note: "A self-initiated concept project. The three variants share the same design and differ only in color; no separate visual identities are claimed.",
    liveUrl: "https://lnkd.in/p/eYKH42N3",
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
  {
    id: "touch-ups",
    title: "Touch Ups",
    coverLabel: "Restaurant food retouching",
    category: "Food Photography · Retouching · Motion",
    role: "Food photo retouching & logo motion",
    summary: "A before-and-after collection of restaurant food image retouching, accompanied by a motion treatment for the Chenjeh logo.",
    context: "A visual editing project focused on refining restaurant food photography, presenting each original image alongside its retouched result, with an additional animated logo treatment for Chenjeh.",
    scope: [
      "Restaurant food image retouching — four before-and-after pairs",
      "Logo motion — animated treatment of the Chenjeh logo",
    ],
    status: "exploration",
    note: "The four food-photo pairs show direct retouching work, and the Chenjeh logo animation is a separate motion piece. The tea BEFORE/AFTER cover is an AI-assisted visual reconstruction based on the original photograph, not a pixel-level retouch of that file.",
  },
  {
    id: "stillness-wellness-spaces",
    title: "STILLNESS — Wellness Space Concepts",
    coverLabel: "Restorative environments · Motion & stills",
    category: "Visual Concept · AI-assisted Imagery · Motion",
    role: "Visual concept development & motion studies",
    summary:
      "A visual exploration of calm, nature-led environments, bringing together atmospheric still imagery and motion pieces.",
    context:
      "An independent visual study of restorative spaces and quiet moments in nature. The work is presented as a multimedia exploration through still images and motion clips.",
    scope: [
      "AI-assisted visual exploration of wellness and meditation environments",
      "Motion studies and video presentation",
      "Art direction around atmosphere, natural materials and visual calm",
    ],
    status: "exploration",
    note: "A conceptual visual project, not architectural documentation or a claim of built interior-design work.",
  },
];

export const capabilities = [
  {
    name: "Content coordination & publishing",
    note: "Coordinating and publishing posts and stories across social media channels, based on the verified Nikmehr role.",
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
      "Coordinated and published posts and stories for the Jenab Khan and 1001 Instagram pages as part of the content team.",
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
