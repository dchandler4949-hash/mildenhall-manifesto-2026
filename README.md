# Mildenhall Manifesto 2026

Campaign website for the 2026 election, served at **[davidchandler.uk](https://davidchandler.uk)** via GitHub Pages.

## Pages deployment

The full React/Vite website lives in the `docs/` folder and is automatically built and deployed to GitHub Pages on every push to `main` via the workflow at `.github/workflows/deploy-pages.yml`.

### How it works

1. On push to `main`, GitHub Actions runs `pnpm install` (root workspace) then `pnpm --filter @workspace/manifesto run build`.
2. The built output (`docs/dist/`) is uploaded as a Pages artifact and deployed.
3. A `CNAME` file ensures `davidchandler.uk` is used as the custom domain.
4. `404.html` (a copy of `index.html`) is included so deep-link navigation and page refreshes work correctly with the client-side router.

## Running locally

### Prerequisites

- [Node.js 20+](https://nodejs.org/)
- [pnpm 10+](https://pnpm.io/): `npm install -g pnpm`

### Install

```bash
pnpm install
```

### Start the dev server

```bash
cd docs
PORT=3000 pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for production

```bash
pnpm --filter @workspace/manifesto run build
# Output is in docs/dist/
```

## Configuring backend API endpoints

The surveys, contact form, and admin portal pages make API calls to a backend service (Express + PostgreSQL). By default, they call relative paths (e.g. `/api/surveys`) which works when the API and frontend share the same origin.

To point the frontend at an external API (e.g. hosted on Render, Fly.io, or Railway):

1. In `Manifesto-Builder/lib/api-client-react/src/custom-fetch.ts`, the `setBaseUrl` function accepts a full URL.
2. Call `setBaseUrl("https://api.davidchandler.uk")` early in your app entry (e.g. `docs/src/main.tsx`) before any API calls are made.

For the backend deployment:

- Source: `Manifesto-Builder/artifacts/api-server/`
- Database schema: `Manifesto-Builder/lib/db/` (Drizzle ORM + PostgreSQL)
- Survey seed data: `Manifesto-Builder/scripts/`

Set the `DATABASE_URL` environment variable on your hosting platform. Keep the database private (no public inbound access) — only the API server needs to reach it.

## Repository structure

```
docs/                    Full React campaign website (GitHub Pages source)
  src/pages/             All site pages (home, manifesto, policies, parishes, legal…)
  public/                Static assets (images, favicon, sitemap, robots.txt)
  CNAME                  Custom domain: davidchandler.uk
Manifesto-Builder/       Workspace root for the full-stack project
  artifacts/manifesto/   Original Vite app (mirrors docs/)
  artifacts/api-server/  Express REST API
  lib/api-client-react/  Generated React Query hooks shared by the frontend
  lib/db/                Drizzle schema for PostgreSQL
  scripts/               Database seed scripts
.github/workflows/       CI / Pages deploy workflow
```

## Survey demographics

Surveys collect privacy-safe demographics only:

- **Area**: Mildenhall High Town, Barton Mills, Worlington, Freckenham, Other West Suffolk, Elsewhere in Suffolk, Elsewhere in England, Outside England, Prefer not to say
- **Postcode area** (first 1–2 letters, e.g. `IP`, `CB`) — not the full postcode
- **Age group**: Under 18, 18–24, 25–34, 35–44, 45–54, 55–64, 65–74, 75+, Prefer not to say
- **Gender**: Male, Female, Non-binary, Prefer to self-describe, Prefer not to say

Submissions are stored server-side with a UUID and UTC timestamp as an evidence-grade audit trail.
