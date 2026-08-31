# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing/booking site for "Las Princesas" cabin resort (Los Reartes, Argentina), built with Next.js 12 (Pages Router) + TypeScript + styled-components. Content is fetched from Contentful; contact/booking inquiries are emailed via SendGrid.

## Commands

```bash
yarn dev      # start dev server (localhost:3000)
yarn build    # production build
yarn start    # run production build
yarn lint     # next lint (eslint-config-next, extends next/core-web-vitals)
```

There is no test suite configured in this repo.

## Environment variables

- `ACCESS_TOKEN_CONTENTFUL` — Contentful CDA token (used in `lib/contentful.ts`)
- `API_SENDGRID` — SendGrid API key (used in `lib/sendgrid.ts`)
- `NEXT_PUBLIC_GOOGLE_ANALYTICS` — GA measurement ID, injected in `pages/_app.tsx`

Note: several data-fetching call sites (`lib/index.ts`, `pages/alojamientos/[cabana].tsx`, `pages/complejo.tsx`) hit the Contentful CDA REST endpoint directly with a **hardcoded** space ID and access token in the URL, rather than going through `lib/contentful.ts`/env vars. This is existing/inconsistent behavior, not something to "fix" incidentally — flag it if asked to touch these files.

## Architecture

**Data flow: Contentful → controllers → components/pages.** There are two parallel ways content gets fetched, and both funnel through the same shaping helpers:

1. **Client-side (SWR)** — `hooks/index.ts` defines hooks like `useAlojamientos()` / `useServicios()` that call `contentFetcher` (`lib/index.ts`, a raw `fetch` against the Contentful CDA REST API) via `useSWRImmutable`, then map the raw entries into view-model shapes.
2. **Build-time (SSG)** — pages like `pages/complejo.tsx` and `pages/alojamientos/[cabana].tsx` fetch content in `getStaticProps`/`getStaticPaths` and pass it down as props. `pages/alojamientos/[cabana].tsx` generates one static page per cabin from a hardcoded slug list in `getStaticPaths`.

In both paths, the raw Contentful response (`items` + `includes.Asset`) is normalized by helpers in `controllers/contentful.ts` (`getImageContentful`, `getMultipleImagesContentful`, `getCabanaData`, `getComplejoImages`) — these resolve Contentful's asset-link references into plain image URLs and reshape `fields` into the props components expect. When adding a new content type, follow this pattern: add a shaping function in `controllers/contentful.ts`, then either a hook in `hooks/index.ts` (client-side) or inline fetch + shaping in `getStaticProps` (build-time).

**API routes** (`pages/api/*`) follow a middleware-wrapping pattern: `controllers/middlewares.ts` exports `validateBody(schema, handler)`, a higher-order function that validates `req.body` against a `yup` schema before invoking the handler, responding `422` on failure. `pages/api/contact.ts` composes this with `controllers/sendEmail.ts` (builds the HTML email) and `lib/sendgrid.ts` (sends via `@sendgrid/mail`). Follow this same `validateBody(schema, handler)` wrapping convention for new API routes.

**Component structure**: every component lives in `components/<name>/` (or `ui/<name>/`) as a folder with `index.tsx` (JSX/logic) + `styled.ts` (styled-components definitions, imported into `index.tsx`). `ui/` holds generic design-system primitives (`buttons`, `cards`, `icons`, `inputs`, `typography`); `components/` holds page-specific composites. Pages in `pages/*.tsx` are thin: they assemble `Header` + feature components + `Footer` inside a `<Head>` block, with no page-level styling.

**Styling**: styled-components (compiled via the `compiler.styledComponents` flag in `next.config.js`), themed through CSS custom properties defined in `styles/globals.css` (e.g. `var(--gray-strong)`, `var(--cream)`, `var(--yellow)`) rather than a JS theme object. Typography primitives (`Title`, `Subtitle`, `Body`, etc., in `ui/typography/index.ts`) take `color`/`align`/`weight` props for per-usage overrides.

**Path imports**: `tsconfig.json` sets `baseUrl: "."`, so imports use bare paths from the repo root (`components/...`, `controllers/...`, `lib/...`, `ui/...`) instead of relative paths — follow this convention for new files.

**Images**: `next.config.js` allowlists `cdn.contentful.com`, `assets.vercel.com`, `images.ctfassets.net` for `next/image`, and enables `avif`/`webp` output. SVGs are imported as React components via `next-svgr` (see `ui/icons/index.tsx`).
