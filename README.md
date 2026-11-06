# Setareh Rahimi — Portfolio

One-page editorial portfolio for Setareh Rahimi (Content Specialist | Content Production & Coordination).

## Structure
- `src/routes/index.tsx` — the page and its title/description/share metadata
- `src/routes/__root.tsx` — sitewide defaults (fonts, viewport, site name)
- `src/data/portfolio.ts` — all content: profile, links, projects, experience
- `src/components/portfolio/` — page sections and the Selected Work cards/dialogs
- `src/test/` — content and routing tests

## Setup
```
bun install
bun run dev      # local preview
bun run test     # tests
bun run lint     # lint
bun run build    # production build
```

Content rule: only verified scope is shown; edit `src/data/portfolio.ts` to update it.
