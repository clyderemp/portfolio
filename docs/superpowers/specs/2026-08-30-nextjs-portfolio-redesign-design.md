# Next.js Portfolio Redesign — Design Spec

**Date:** 2026-08-30 · **Author:** Claude (autonomous session for Clyde Rempillo)

## Goal

Replace the Colorlib Bootstrap HTML/CSS template with a modern, senior-level, tech-focused
portfolio built on Next.js, using shadcn/ui (Tailwind v4) as the design system and MUI where
it earns its place. Add a contact form and a download-résumé button. Keep the site deployable
to the existing GitHub Pages URL (`https://clyderemp.github.io/portfolio/`).

## Assumptions (made autonomously — flag if wrong)

1. **Deployment stays on GitHub Pages** → static export (`output: 'export'`),
   `basePath` = `/portfolio` in production, GitHub Actions workflow added.
   The Pages source must be switched to "GitHub Actions" in repo settings (manual, one-time).
2. **Contact form transport:** no server exists on Pages, so the form POSTs client-side to
   Web3Forms when `NEXT_PUBLIC_WEB3FORMS_KEY` is configured; otherwise it falls back to
   opening a prefilled `mailto:clyderemp@gmail.com`. Swappable in one file.
3. **Phone number:** the old site displayed `+971 50 751 7446` but linked `tel:+1 437 983 0818`;
   the displayed UAE number is treated as current.
4. Content typos in the old site (e.g. "Portoflio", "Gradaute", "Septemeber") are corrected.
5. `single.html` (lorem-ipsum template leftover) and all template CSS/JS/SCSS are deleted.

## Stack

- **Next.js 16** (App Router, TypeScript, static export) · React 19
- **Tailwind CSS v4 + shadcn/ui** — design system: buttons, cards, badges, inputs, sheet (mobile nav)
- **MUI v9** (`cssVariables`, `colorSchemeSelector: 'class'`) + **@mui/lab Timeline** — experience/education
  timelines, tooltips, snackbar feedback; theme palette mapped to the same CSS tokens as Tailwind
- **next-themes** — dark (default) / light toggle driving both libraries via the `.dark` class
- **motion** (Framer Motion successor) — scroll-reveal and micro-interactions
- **react-hook-form + zod** — contact form validation
- **next/font/google**: Geist Sans (UI), Geist Mono (labels, code motifs)

## Architecture

Single-page portfolio (`app/page.tsx`) composed of section components; all copy lives in typed
data modules so content edits never touch components.

```
src/
  app/            layout.tsx (fonts, providers, metadata), page.tsx, globals.css
  components/
    ui/           shadcn primitives
    sections/     hero, about, experience, projects, skills, education-awards, contact, footer
    site-header.tsx, theme-toggle.tsx, section-heading.tsx
  content/        profile.ts, experience.ts, projects.ts, skills.ts, education.ts, awards.ts
  lib/            utils.ts, base-path.ts, contact.ts (form transport)
  theme/          mui-theme.ts, providers.tsx
public/           images/, resume/Clyde-Rempillo-CV.pdf
```

## Page design (dark-first, "systems engineering" aesthetic)

1. **Header** — sticky glass nav, monogram, section links, theme toggle, résumé button.
2. **Hero** — availability badge, name in display type, typewriter roles, location/degree
   metadata in mono, CTAs (Get in touch / Download résumé); right: terminal-style profile
   card rendered as syntax-highlighted config — the "tech-focused" motif.
3. **About** — bio + facts grid (education, location, email, LinkedIn).
4. **Experience** — MUI alternating Timeline of the 6 roles, employer chips, highlight bullets.
5. **Projects** — shadcn card grid (6 projects), logo area, tag badges, external links.
6. **Skills** — grouped capability cards (Languages / Frameworks / DevTools / OS / Domains)
   with mono chips + years-of-experience stats. No junior-style progress bars.
7. **Education & Awards** — two-column: degrees timeline + awards/publication cards.
8. **Contact** — validated form (name, email, message) with MUI Snackbar feedback +
   direct-contact cards (email, phone, LinkedIn).
9. **Footer** — identity, quick links, copyright.

## Error handling & testing

- Form: zod validation inline; transport failure → Snackbar error + mailto fallback offered.
- Verification: `npm run build` (static export must succeed), then serve `out/` under a
  `/portfolio` prefix and screenshot-check all sections in dark and light modes.

## Out of scope

Blog, CMS, analytics, i18n, per-project detail pages.
