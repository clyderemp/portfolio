# clyderemp.github.io/portfolio

Personal portfolio of **Clyde Rempillo** — software engineer and published
Model-Driven Engineering researcher. A single-page, statically-exported
Next.js site deployed to GitHub Pages.

**Live:** https://clyderemp.github.io/portfolio/

## Stack

- **Next.js 16** (App Router, TypeScript, `output: 'export'`) · React 19
- **Tailwind CSS v4 + shadcn/ui** — design system (dark-first, blue–purple gradients)
- **MUI v9 + @mui/lab** — experience Timeline, Snackbar; palette mapped to the
  same CSS tokens, styles scoped to a `mui` cascade layer under Tailwind
- **next-themes** — dark (default) / light toggle via the `.dark` class
- **motion** — scroll reveals and micro-interactions
- **react-hook-form + zod** — contact form validation

## Development

Use Node.js 22 and npm. Commit dependency changes with `package-lock.json`;
use npm for installs and scripts to match GitHub Actions.

```bash
npm ci          # install the committed dependency versions
npm run dev     # http://localhost:3000
npm run build   # static export to out/
npm run lint
```

For shorter commands in zsh, add `alias nr='npm run'` to `~/.zshrc`, then
run `source ~/.zshrc` or open a new terminal:

```bash
nr dev
nr build
nr lint
```

The shortcut runs npm scripts in your current directory.

For testing on your local network, `192.168.8.50` is listed in
`allowedDevOrigins` in `next.config.ts` so hot reload can connect. If your
Mac's network address changes, update that entry and restart `npm run dev`.

To preview the export exactly as GitHub Pages serves it (under `/portfolio`):

```bash
NEXT_PUBLIC_BASE_PATH=/portfolio npm run build
mkdir -p /tmp/pages && ln -sfn "$PWD/out" /tmp/pages/portfolio
python3 -m http.server 4173 -d /tmp/pages
# open http://localhost:4173/portfolio/
```

## Editing content

All copy lives in typed modules under `src/content/` (`profile.ts`,
`experience.ts`, `organizations.ts`, `projects.ts`, `skills.ts`, `education.ts`, `awards.ts`) —
components never hard-code copy. The résumé PDF is `public/resume/CV.pdf`, project
and organization logos are `public/images/`. Logo provenance is recorded in
`docs/logo-sources.md`.

Non-`next/*` asset URLs (plain `<a href>`, and `next/image` with
`images.unoptimized`) must go through `withBasePath()` from
`src/lib/base-path.ts`, or they will 404 under the `/portfolio` prefix.

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds with
`NEXT_PUBLIC_BASE_PATH=/portfolio` and publishes `out/` to GitHub Pages.
One-time setup: repo **Settings → Pages → Source → GitHub Actions**.

### Contact form

`src/lib/contact.ts` posts to [Web3Forms](https://web3forms.com) when a
`WEB3FORMS_KEY` repo secret is configured (exposed at build time as
`NEXT_PUBLIC_WEB3FORMS_KEY`); without it, the form opens a prefilled
`mailto:` draft instead. Transport failures surface a Snackbar with a
mailto fallback.
