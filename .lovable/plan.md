# Junoon case study page

Add one new page at `/work/junoon` for the Junoon true-crime visual exploration. The home page, its design, navigation, content and links all stay as they are. The only visible change on the home page is a new "Read case study" link on the Junoon card.

## Page content (only what you supplied)

1. **Top:** "Exploration" label, the title "Junoon — True Crime Visual Exploration", and a short introduction about documentary portraiture, stark contrast and a restrained use of red.
2. **Project details** (label and value pairs):
   - Project type: Visual identity and art direction exploration
   - Focus: True-crime podcast visual direction
   - Visual language: Monochrome portraiture, red accent
3. **Visual direction:** six short items: monochrome portraits, deep blacks, grain, distressed print and collage textures, circular framing, and the red accent.
4. **From portrait to case-file language:** the process section, written only from the points above.
5. **Note:** the same wording the card already uses: "Presented as visual identity and art direction exploration, not a fully delivered client identity."
6. **Gallery:** none for now. I'd rather not show empty boxes on a page clients will see. If you want spaces held for images, I can add 3 boxes labelled "Image pending — source artwork not yet uploaded".
7. **Bottom:** a "Back to Selected Work" link and the existing contact section.

No testimonials, clients, dates, results or generated artwork.

## How people reach it

- The Junoon card on the home page gets a "Read case study" link next to its "Project context" button. The pop-up stays as it is.
- The new page has a small top bar with the name (links home) and "Back to work" (goes to the home page's work section). I won't reuse the home page menu as-is because its links jump to sections on the same page, so they wouldn't work from a separate page.

## Technical details

Files:
- `src/data/portfolio.ts`: add an optional `caseStudy` field to `PortfolioProject` (intro, metadata, visualDirection[], process) and fill it in for `junoon-podcast` only. Update the editorial note at the top of the file.
- `src/routes/work.junoon.tsx` (new): `createFileRoute("/work/junoon")`, with its own `head()` (title, description, og:title, og:description, og:type "article", twitter:card, relative canonical and og:url). No og:image. Content uses `<article>` with one `h1` and `h2`s for each section, a `<dl>` for the metadata, and the existing design tokens and classes (`eyebrow`, `font-display`, `border-rule`, `grain`). It reuses `Contact` from Portfolio.tsx.
- `src/components/portfolio/SelectedWork.tsx`: when `project.caseStudy` is present, render a `<Link to="/work/junoon">` with the same styling as the existing link button. Use a slug field so the code isn't hardcoded.
- `AGENTS.md`: replace the existing rule with: case studies live in typed data, are shown as dialogs, and get optional dedicated `/work/<slug>` routes when a full write-up exists.
- Tests: in `app-routing.test.tsx`, check that `/work/junoon` matches a route. In `portfolio-data.test.ts`, check that only Junoon has a case study and that its status is still "exploration".

## Uncertainties

- **The rule that the portfolio stays one page.** A project rule says the site keeps a single-page structure. This plan is the first exception to it, and it only adds one linked page. Approving the plan approves that change, and I'll update the rule.
- **The process section.** It will be 2–3 sentences built only from the visual elements listed above. Send any real process steps and I'll use those instead.
- **Placeholder boxes for images.** Gallery boxes are left out by default. Tell me if you'd like them added.
- **The home page link to the work section.** It relies on the browser jumping to that section after the page loads. I'll check this works on desktop and mobile.
