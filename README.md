# Setareh Rahimi — Portfolio

A responsive editorial-style personal portfolio presenting Setareh Rahimi's experience in content coordination and publishing operations, alongside selected creative explorations and team-collaboration work. The site is intended for prospective employers and freelance clients.

## Portfolio content

- **Nikmehr:** verified coordination and publishing of posts and stories for the Jenab Khan and 1001 Instagram pages. Four linked Reels are presented as selected examples of the overall Nikmehr work and are not attributed to either page individually.
- **Junoon Podcast:** a recent team collaboration on a long-running true-crime podcast. The portfolio separates full video editing of the first completed Brian Yassipour episode from Setareh's own cover and social visual explorations. The podcast and its original identity predate this collaboration.
- **Khaneh Shalvar, Khaneh Mod Setareh, AI-assisted visual storytelling, and Cafe & food social content:** presented as explorations, not as claims of completed client delivery.

LinkedIn: https://linkedin.com/in/setare-rahimi-968a0a274
CV: https://jobvision.ir/cv/setare-rahimi-174320

## Tech stack

- React 19 and TypeScript
- TanStack Start and TanStack Router
- Vite
- Tailwind CSS 4
- Radix UI primitives and reusable UI components
- Vitest and Testing Library
- Bun lockfile (bun.lock)

## Project structure

```text
src/
  assets/                 Portfolio image assets and asset metadata
  components/
    portfolio/            Hero, navigation, sections and selected-work presentation
    ui/                   Reusable UI primitives
  data/
    portfolio.ts          Profile, experience, capabilities and project content
  lib/                    Shared utilities and error reporting
  routes/
    __root.tsx            Root document, shared metadata and app shell
    index.tsx             Home page and page-specific SEO/social metadata
  test/                   Portfolio data and route tests
  styles.css              Global styles and design tokens
.lovable/                 Lovable project metadata and working notes
```

## Local development

Requirements: Bun (recommended; the repository includes bun.lock) and a recent Node.js runtime.

```bash
git clone https://github.com/setarerahimi13781119-web/remix-of-setareh-story-studio.git
cd remix-of-setareh-story-studio
bun install
bun run dev
```

The development server prints the local URL when it starts.

## Quality checks

```bash
bun run test
bun run lint
bun run build
```

Other available scripts: bun run build:dev and bun run preview.

## Content and attribution

Keep project descriptions tied to confirmed contributions. Do not invent outcomes, metrics, testimonials, client delivery, authorship or ownership. Nikmehr is described as coordination and publishing. Junoon is described as a collaboration that began after the podcast and its original identity already existed. AI-assisted images are identified as AI-assisted, not documentary photographs.

## SEO and social metadata

The shared root document contains site-wide metadata. The home route owns its page title, description, Open Graph title/description/type, and Twitter card/title/description. Canonical and og:url are intentionally omitted until the published URL for this exact project can be independently verified.