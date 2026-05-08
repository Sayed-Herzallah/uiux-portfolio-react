# Hanaa Mahmoud Portfolio

A UI/UX designer portfolio website converted from Figma design, showcasing services, professional experience, and contact information.

## Run & Operate

- **Dev**: `npm run dev` (serves on port 5000)
- **Build**: `npm run build`
- **Start (prod)**: `npm run start`
- **DB push**: `npm run db:push`

No required env vars for basic operation (portfolio is static content). DATABASE_URL is auto-provided by Replit's PostgreSQL integration.

## Stack

- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS v3, shadcn/ui (Radix UI)
- **Backend**: Express 5, Node.js 20
- **ORM**: Drizzle ORM with PostgreSQL (drizzle-kit)
- **Routing**: Wouter (client-side)
- **Fonts**: Poppins, Unbounded (Google Fonts)

## Where things live

- `client/src/pages/` — page components (`All.tsx` is the single-page portfolio)
- `client/src/pages/sections/` — individual page sections (Header, Hero, Services, Portfolio, CallToAction, FAQ)
- `client/src/components/ui/` — shadcn/ui component library
- `client/public/figmaAssets/` — all images/SVGs exported from Figma
- `shared/schema.ts` — Drizzle DB schema
- `server/` — Express server, routes, storage
- `tailwind.config.ts` — custom brand colors (wwwatnndesigncom* prefix)

## Architecture decisions

- Single-page portfolio layout: all sections rendered sequentially in `All.tsx`
- Figma assets served as static files from `client/public/figmaAssets/`
- Custom Tailwind color tokens match Figma design tokens exactly (e.g. `wwwatnndesigncomlinen`)
- Express serves both API and Vite dev server in development; static build in production
- CSS `@import` for Google Fonts placed at the top of `index.css` (required by PostCSS)

## Product

- Header with logo and CV download link
- Hero section with designer intro and "Contact Me" CTA
- Services grid (6 service cards: UI/UX, UX, WordPress, Tools, Additional, CTA)
- About Me section with portrait photo
- Portfolio/Experience section with work samples and marquee band
- "Let's Work Together" contact section with email, WhatsApp, location
- FAQ accordion section
- Decorative footer

## User preferences

_Populate as you build_

## Gotchas

- `tailwind.config.ts` uses `module.exports` (CommonJS); the Replit cartographer plugin skips it with a warning — this is harmless, the config still works via Vite
- Figma asset filenames contain special characters (spaces, dashes) — reference them via `/figmaAssets/` paths exactly as exported
- CSS `@import` must be the very first line in `index.css` — PostCSS enforces this

## Pointers

- [Tailwind config](./tailwind.config.ts)
- [DB schema](./shared/schema.ts)
- [Figma design](https://www.figma.com/design/dxMbS0y1oH0BHdWwgIMeWs/)
