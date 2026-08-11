# Cloud-Based AI Engineering

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

The development default passphrase is `cloud-agents-dev`. Set `SITE_PASSWORD` in `.env.local` to change it. `COOKIE_SECRET` signs the httpOnly access cookie and should be a long random value in production.

## Verify and deploy

```bash
npm run lint
npm run typecheck
npm run build
```

Import the repository into Vercel and configure both `SITE_PASSWORD` and `COOKIE_SECRET` as Vercel environment variables for **Production** and **Preview** deployments. The app-level gate is intentional because Vercel's built-in password protection is a paid-plan feature. The app is a static-friendly Next.js 15 App Router site with an Edge-compatible middleware gate.

## Content

Copy, stats, lists, matrix data, and presentation constants live in `src/content/site.ts`. `SESSION_URL` and `BUILD_COST` are exported there for easy correction before sharing. Each page section has its own component under `src/components/`; shared primitives are `Section`, `Reveal`, `Nav`, and `ThemeToggle`. The authoritative source is `/home/ubuntu/site-content.md`.
