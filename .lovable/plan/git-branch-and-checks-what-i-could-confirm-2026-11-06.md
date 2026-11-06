# Git branch and checks: what I could confirm

## What I found (read-only checks)
- **Current branch in my workspace:** `edit/edt-a649786c-…`. That's Lovable's own internal working branch. It is **not** `portfolio-metadata-polish`, and it isn't `main` either.
- **Where my changes go:** Lovable's own internal code store. I don't push to GitHub myself. Git sync copies changes to the one GitHub branch picked in Project settings → Git. I can't see that setting or the GitHub connection from here.
- **So I can't promise that edits will land only on `portfolio-metadata-polish`.** That depends on the branch picker in Project settings → Git. Only you can see and change it.
- **Live URL:** this project shows **no published address**, only a preview address. I can't confirm that `setareh-creative-journal.lovable.app` belongs to this project, so I won't use it.
- **Latest saved changes:** "Add project README", then the Khaneh Mod Setareh slide fix.

## Checks I can run and read
- Tests: the portfolio data test and the page routing test, run directly and read in full.
- Lint: I can run it and read the output.
- TypeScript and production build: these run automatically after each edit, and I read the result from the build log. I don't start them by hand.
- Visual check: I can open the preview on phone and desktop sizes, take screenshots and look for console errors.

## Before any edit, you need to
1. Open Project settings → Git and check that the selected branch is `portfolio-metadata-polish`. Switch to it if it isn't.
2. Tell me what the metadata polish should change.

## Implementation and validation steps (after you approve)
1. Make only the changes you ask for, and keep the design and content as they are.
2. Run the tests and lint, then check that the build log says the build is OK.
3. Check the preview on phone and desktop sizes.
4. Don't merge, publish or deploy.

## Open questions
- Which GitHub branch is selected (only visible to you).
- Whether the live URL belongs to this project or to another one.
- What exactly the metadata polish should cover.
