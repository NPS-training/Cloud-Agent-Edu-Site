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

Copy, stats, lists, matrix data, and presentation constants live in `src/content/site.ts`. `SESSION_URL` and `BUILD_COST` are exported there for easy correction before sharing. Each page section has its own component under `src/components/`; shared primitives are `Section`, `Reveal`, `Nav`, and `ThemeToggle`. Content is derived from the source deck and its walkthrough transcript, which are not kept in this repository.

Two sections have external sources worth knowing about before editing them:

- `programs` quotes program titles and curriculum numbers from the NPS Marine Corps Graduate Programs Menu (March 2025). Its lede states that the examples describe Devin as it exists today rather than current NPS practice, which keeps the section honest for an NPS audience. Do not restate either as fact about the school.
- `demo` drives the walkthrough stepper. Its prompts quote real paths and configuration keywords from `NPS-training/Labtainers-Devin` so a presenter can paste them verbatim during the live portion. If a prompt changes, check it against that repository first, and keep the security-scan step's findings generic rather than promising specific counts.

Visible copy must contain no em dashes; `npm run lint` runs `scripts/check-no-em-dash.mjs`, which fails the build if one appears in `src/`.

## Deployment note

The Vercel team hosting this site is on the Hobby plan, which blocks CLI deployments that carry git metadata from a private repository. Such deployments are created as `BLOCKED` with no build logs. Deploying from a copy of the tree without `.git` works:

```bash
rm -rf /tmp/deploy-src && mkdir -p /tmp/deploy-src
tar --exclude=.git --exclude=node_modules --exclude=.next --exclude=.env.local -cf - . \
  | tar -xf - -C /tmp/deploy-src
cd /tmp/deploy-src && npx vercel@latest deploy --prod --yes --token "$VERCEL_TOKEN"
```

Push-to-deploy from GitHub requires a paid plan.
