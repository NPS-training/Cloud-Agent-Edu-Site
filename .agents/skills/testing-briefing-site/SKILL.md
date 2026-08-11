---
name: testing-briefing-site
description: How to run and test the password-gated Cloud-Based AI Engineering briefing microsite locally (auth gate, theme toggle, responsive widths).
---

# Testing the briefing microsite

## Running it

- `npm install && npm run dev` in the repo root. The dev script may bind `0.0.0.0`; check with `ps aux | grep next` before starting a second server.
- Gate credentials: middleware reads `SITE_PASSWORD` (default `cloud-agents-dev` in dev) and `COOKIE_SECRET` (default `development-cookie-secret`). See `src/middleware.ts` and `src/app/api/auth/route.ts`.

## Host gotcha (important)

`/api/auth` builds its post-login redirect from `req.url`, which is the bind host. When the server
binds `0.0.0.0`, logging in from `http://localhost:3000` sets the `site_access` cookie on host
`0.0.0.0` and you get bounced back to `/login` on `localhost` forever. **Use `http://0.0.0.0:3000`
consistently for the whole browser session**, or start the dev server without `--hostname 0.0.0.0`.
Naive waits on the post-login URL also break because the redirect target is `http://0.0.0.0:3000/`.

## Auth checks that work

- `curl -sI localhost:3000/` → 307 to `/login`; `view-source:` of `/` shows only login markup.
- `curl -si -X POST -d "password=<pw>" localhost:3000/api/auth` shows the `Set-Cookie` with
  `HttpOnly; SameSite=lax`.
- Forge tampering: edit the `site_access` value in DevTools → Application → Cookies to
  `granted.badsignature123` and reload; the HMAC check must bounce you to `/login`.
- `/opengraph-image` and `/icon.svg` are intentionally exempt from the middleware matcher.

## Responsive testing

- Chrome cannot be resized narrower than ~532px via `wmctrl`; use DevTools device mode for 390px.
  Docking DevTools to the bottom/right shrinks the emulated viewport — **undock DevTools into a
  separate window** (⋮ → Dock side → Undock) and move it offscreen with
  `wmctrl -i -r <devtools_win_id> -e 0,1100,600,500,500` so the full mobile viewport is visible.
  Set the zoom selector to 100%, not "Fit".
- Breakpoints that matter: `900px` (nav links hidden, evolution matrix swaps to the L0–L5 tab row,
  grids collapse) and `560px`.

## Known/likely issues to re-check

- `ThemeToggle` is rendered twice (nav + footer) with independent `useState`, so clicking one leaves
  the other's label stale. If a fix lands, verify both labels flip together.
- The nav link row can overflow its container at ~1440px, producing a visible scrollbar in the header
  and clipping the last item. Check the header at 1280/1440/1600 in BOTH themes — the scrollbar is a
  bright white bar in dark mode.
- `.chart` bar heights are inline `value * 25` px in `src/components/Proof.tsx` while `.chart` has a
  fixed height at ≤560px, so the tallest bar can exceed the box. Measure with
  `document.querySelector('.chart').clientHeight` vs the bars' `getBoundingClientRect().height`.
- Layout script CDP may be unavailable (Chrome launched with an empty `--remote-debugging-port`), so
  the `browser_console` tool can fail; type measurement JS into the DevTools console UI instead.

## Devin Secrets Needed

None. The gate defaults are hardcoded for development.
