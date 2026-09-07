# Next.js Portfolio Redesign Implementation Plan

> **For agentic workers:** Executed inline in the authoring session (autonomous run) per superpowers:executing-plans. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the static HTML/CSS portfolio as a statically-exported Next.js 16 app using shadcn/ui + MUI v9, with a contact form and résumé download, deployable to GitHub Pages at `/portfolio`.

**Architecture:** Single-page App Router site; typed content modules feed section components; shadcn (Tailwind v4) is the design system, MUI provides Timeline/Snackbar/Tooltip mapped onto the same CSS tokens; next-themes drives both via the `.dark` class.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind v4 + shadcn/ui, MUI v9 + @mui/lab, next-themes, motion, react-hook-form + zod, Geist fonts.

## Global Constraints

- `next.config.ts`: `output: 'export'`, `basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? ''`, `images.unoptimized: true`
- All copy in `src/content/*.ts`; components never hard-code copy
- Non-`next/*` asset URLs go through `withBasePath()` from `src/lib/base-path.ts`
- Dark mode is default; every surface must render correctly in both schemes
- Verification: `npm run build` then serve `out/` at `/portfolio` prefix + screenshots

### Task 1: Scaffold & toolchain
- [x] `create-next-app` (TS, Tailwind, ESLint, App Router, src dir) scaffolded in scratchpad, merged into repo root
- [x] Delete legacy template files (`index.html`, `single.html`, `css/`, `js/`, `scss/`, `fonts/`, `prepros-6.config`); move `images/` + `resume/` → `public/`
- [x] `shadcn init` + add: button card badge input textarea label separator sheet
- [x] Install: `@mui/material @mui/lab @mui/material-nextjs @emotion/react @emotion/styled next-themes motion react-hook-form zod @hookform/resolvers`
- [x] Configure `next.config.ts` per Global Constraints; add `.github/workflows/deploy.yml` (Pages via Actions)
- [x] Verify: `npm run build` succeeds → commit

### Task 2: Theme foundation
- [x] `src/app/globals.css`: design tokens (dark-first palette, accent, fonts) for Tailwind v4 `@theme inline` + shadcn vars
- [x] `src/theme/mui-theme.ts`: `createTheme({ cssVariables: { colorSchemeSelector: 'class' }, colorSchemes: {...} })` mapped to the same hex values
- [x] `src/theme/providers.tsx`: AppRouterCacheProvider + next-themes ThemeProvider + MUI ThemeProvider; `src/app/layout.tsx`: Geist fonts, metadata, InitColorSchemeScript
- [x] `src/lib/base-path.ts`: `withBasePath(path)` helper
- [x] Verify: build passes → commit

### Task 3: Content modules
- [x] `src/content/profile.ts`, `experience.ts` (6 roles), `projects.ts` (6 projects), `skills.ts`, `education.ts` (3), `awards.ts` (3) — migrated from index.html with typos fixed
- [x] Verify: `tsc --noEmit` clean → commit

### Task 4: Header + Hero
- [x] `site-header.tsx` (sticky glass nav, Sheet mobile menu, theme-toggle, résumé button), `theme-toggle.tsx`, `section-heading.tsx`
- [x] `sections/hero.tsx`: availability badge, display name, typewriter roles, mono metadata, CTAs, terminal profile card
- [x] Verify: build + screenshot → commit

### Task 5: About + Experience
- [ ] `sections/about.tsx` (bio + facts grid), `sections/experience.tsx` (MUI Timeline, alternating on desktop / left-aligned mobile)
- [ ] Verify: build + screenshot → commit

### Task 6: Projects + Skills
- [ ] `sections/projects.tsx` (card grid, logos, tag badges, external links), `sections/skills.tsx` (grouped capability cards + stats)
- [ ] Verify: build + screenshot → commit

### Task 7: Education/Awards + Contact + Footer
- [ ] `sections/education-awards.tsx`, `sections/contact.tsx` (react-hook-form + zod; transport in `src/lib/contact.ts`: Web3Forms if key set, else mailto; MUI Snackbar feedback), `sections/footer.tsx`
- [ ] Verify: build + screenshot → commit

### Task 8: Final verification
- [ ] `npm run build` with `NEXT_PUBLIC_BASE_PATH=/portfolio`; serve `out/` under `/portfolio`, screenshot every section in dark + light, mobile + desktop; fix issues
- [ ] Lint clean; README updated; final commit
