# Portfolio Website - Abhishek Mohan

## Overview

This is a personal portfolio website for Abhishek Mohan, a B.Tech CSE student and Co-Founder of Appoointo. The site is a single-page application with sections for Hero, About, Experience, Projects, Certificates, and Contact. It features a dark "deep space" theme with neon cyan/purple accents, particle background animations, scroll-triggered animations via Framer Motion, and a contact form that persists messages to a PostgreSQL database.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Framework**: React 18 with TypeScript, bundled by Vite
- **Routing**: Wouter (lightweight client-side router) — single page at `/`, plus a 404 fallback
- **Styling**: Tailwind CSS with CSS variables for theming (dark mode default). Custom theme uses Orbitron (display font) and Inter (body font)
- **UI Components**: shadcn/ui (new-york style) built on Radix UI primitives. Components live in `client/src/components/ui/`
- **Animations**: Framer Motion for scroll-triggered animations, typewriter effect, and page transitions. Canvas-based particle background (`ParticleBackground.tsx`)
- **State Management**: TanStack React Query for server state (contact form mutation). Local state via React hooks
- **Theme**: Custom ThemeProvider supporting dark/light toggle, defaults to dark. CSS variables defined in `client/src/index.css`
- **Forms**: React Hook Form with Zod validation (via `@hookform/resolvers`) using shared schema validators

### Backend
- **Runtime**: Node.js with Express 5
- **Language**: TypeScript, executed via `tsx` in development
- **API**: Single REST endpoint `POST /api/contact` for contact form submissions
- **API Contract**: Shared route definitions in `shared/routes.ts` with Zod schemas for input validation and response types. Both client and server import from this shared module
- **Development Server**: Vite dev server runs as Express middleware (in `server/vite.ts`) with HMR support
- **Production**: Client built to `dist/public/`, server bundled via esbuild to `dist/index.cjs`. Static files served by Express with SPA fallback

### Shared Code
- `shared/schema.ts` — Drizzle ORM table definitions and Zod insert schemas (single `messages` table)
- `shared/routes.ts` — API route contract (paths, methods, input/output schemas) shared between client and server

### Database
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Driver**: `pg` (node-postgres) Pool
- **Schema**: Single `messages` table with `id` (serial), `name` (text), `email` (text), `message` (text), `createdAt` (timestamp)
- **Migrations**: Drizzle Kit with `drizzle-kit push` for schema sync. Config in `drizzle.config.ts`
- **Connection**: Requires `DATABASE_URL` environment variable

### Build System
- **Dev**: `tsx server/index.ts` runs the Express server with Vite middleware
- **Build**: Custom `script/build.ts` that runs Vite build (client) then esbuild (server). Server dependencies are selectively bundled vs externalized for faster cold starts
- **Production**: `node dist/index.cjs` serves the built app

### Key Design Decisions

1. **Monorepo with shared types**: The `shared/` directory ensures type-safe API contracts between client and server without code duplication. Zod schemas serve both runtime validation and TypeScript inference.

2. **Single-page portfolio**: All sections (Hero, About, Experience, Projects, Certificates, Contact) render on one page with smooth scroll navigation. This keeps the UX simple and avoids unnecessary page loads.

3. **shadcn/ui component library**: Pre-built but customizable components using Radix primitives. The full set is included in `client/src/components/ui/` for flexibility, even though not all are currently used.

4. **Dark-first theming**: The portfolio uses a "deep space" dark theme as default with electric cyan (`#00f3ff`) and purple (`#bc13fe`) neon accents. Light mode is available via toggle.

5. **Storage abstraction**: `server/storage.ts` defines an `IStorage` interface with a `DatabaseStorage` implementation, making it possible to swap storage backends if needed.

## External Dependencies

### Database
- **PostgreSQL** — Required. Connection via `DATABASE_URL` environment variable. Used with Drizzle ORM and `pg` driver. Session store uses `connect-pg-simple`.

### Key NPM Packages
- **Frontend**: React, Vite, Tailwind CSS, Framer Motion, TanStack React Query, Wouter, React Hook Form, Zod, Embla Carousel, Lucide icons
- **Backend**: Express 5, Drizzle ORM, pg (node-postgres), Zod
- **Build**: esbuild, tsx, drizzle-kit

### External APIs/Services
- **Google Fonts** — Orbitron and Inter fonts loaded via CDN
- **LinkedIn CDN** — Certificate/achievement images hosted on LinkedIn's media CDN (may expire)
- **Unsplash** — Project thumbnail images loaded from Unsplash

### Replit-Specific
- `@replit/vite-plugin-runtime-error-modal` — Runtime error overlay in development
- `@replit/vite-plugin-cartographer` and `@replit/vite-plugin-dev-banner` — Development-only Replit integrations