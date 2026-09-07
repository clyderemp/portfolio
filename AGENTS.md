# Repository Guidelines

## Project Structure & Module Organization

This is a single-page Next.js 16 portfolio using React 19 and strict TypeScript, exported to GitHub Pages.

- `src/app/`: page composition, root layout, and global CSS tokens.
- `src/components/sections/`: portfolio sections; `src/components/ui/`: shadcn/ui primitives; shared components sit directly in `src/components/`.
- `src/content/`: typed profile, project, experience, skills, education, and awards data. Update portfolio copy here.
- `src/theme/`: MUI theme and providers; `src/lib/`: contact transport, asset paths, and utilities.
- `public/images/` and `public/resume/`: images and résumé PDFs.
- `docs/superpowers/`: design specifications and implementation plans. `.github/workflows/deploy.yml` builds and deploys `out/`.

## Build, Test, and Development Commands

Use Node.js 22 to match CI and npm with the tracked `package-lock.json`.

- `npm ci`: install locked dependencies.
- `npm run dev`: start local development at `http://localhost:3000`.
- `npm run lint`: run ESLint with Next.js Core Web Vitals and TypeScript rules.
- `npx tsc --noEmit`: check TypeScript without emitting files.
- `npm run build`: generate the static site in `out/`.
- `NEXT_PUBLIC_BASE_PATH=/portfolio npm run build`: reproduce the deployment path.

Follow the README's HTTP-server preview instructions for the exported site; `npm run start` is unsuitable for this static-export configuration.

## Coding Style & Naming Conventions

Match existing code: two-space indentation, double quotes, semicolons, and trailing commas. Use kebab-case filenames (`section-heading.tsx`), PascalCase components/types, and camelCase functions/variables. Prefer `@/` imports for modules under `src/`. No dedicated formatter is configured.

Reuse Tailwind/shadcn tokens from `globals.css`; keep MUI colors aligned through `src/theme/`. Add `"use client"` when components need hooks or browser APIs.

## Testing Guidelines

No automated test framework, test naming convention, or coverage threshold is configured. Before submitting, run lint, type checking, and a production build. Manually verify mobile/desktop layouts, both themes, navigation, image and résumé links under `/portfolio`, and contact validation/mailto fallback.

## Commit & Pull Request Guidelines

Recent commits use concise imperative subjects, such as `Add Projects and Skills sections`. Follow that style and keep commits focused. PRs should explain the change, link relevant issues, report validation, and include screenshots for visual updates.

## Deployment & Configuration

Preserve static-export compatibility. Route local asset URLs in plain anchors and unoptimized images through `withBasePath()` from `src/lib/base-path.ts`. Pushes to `main` deploy automatically. Optional `NEXT_PUBLIC_WEB3FORMS_KEY` enables form delivery; without it, contact uses mailto. Public environment variables are bundled into browser code; never put private credentials there.
