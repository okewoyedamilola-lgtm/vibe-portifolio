# Agent guide — pm-portfolio

This file documents the **pm-portfolio** project for AI agents and developers. Use it to understand structure, conventions, and how to run or change the app.

---

## Project overview

- **Name:** pm-portfolio  
- **Purpose:** Minimal, static portfolio site for **Damilola Israel Okewoye** (Product Manager).  
- **Stack:** Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS.  
- **Output:** Static export (`output: 'export'` in `next.config.js`). Build produces static files in `out/` for deployment (e.g. Vercel, Cloudflare Pages).

---

## Repo structure

| Path | Purpose |
|------|--------|
| `src/app/` | App Router pages and layout (Home, About, Projects, CV, Contact). |
| `src/components/` | Shared UI: `Navbar`, `Footer`, `ProjectCard`, `SkillSection`. |
| `public/` | Static assets. Put `cv.pdf` here; optional case studies in `public/case-studies/`. |
| `tailwind.config.ts` | Tailwind theme (fonts, accent colors). |
| `next.config.js` | Next config; only `output: 'export'` is set. |

---

## Routes and pages

- **`/`** — Home: hero, featured projects (from inline array), skills snapshot, CTA.  
- **`/about`** — About page.  
- **`/projects`** — Projects list; data in `src/app/projects/page.tsx` (array of `{ title, description, href }`).  
- **`/projects/[slug]`** — Project detail; data in `src/app/projects/[slug]/page.tsx` in a `projects` object keyed by slug (e.g. `daminvest`, `enoverlab`). Uses `generateStaticParams()` for static generation. Unknown slug → `notFound()`.  
- **`/cv`** — CV page; expects `public/cv.pdf` for preview/download.  
- **`/contact`** — Contact form; submits to Formspree. Replace `YOUR_FORM_ID` in `src/app/contact/page.tsx` with real Formspree form ID.

---

## Key components

- **`Navbar`** — Sticky header, nav links (Home, About, Projects, CV, Contact), mobile hamburger, active state via `usePathname()`. Client component (`'use client'`).  
- **`Footer`** — Site footer (e.g. copyright, links).  
- **`ProjectCard`** — Card for a project: `title`, `description`, `href`; optional `linkLabel`.  
- **`SkillSection`** — Renders a skills list (used where needed).  
- **Root layout** (`src/app/layout.tsx`) — Wraps all pages with `Navbar`, `main`, `Footer`; loads Montserrat + Khand from `next/font/google` and `globals.css`.

---

## Scripts and running the app

- **`npm run dev`** — Start Next.js dev server.  
  - Default URL: **http://localhost:3000**. If port 3000 is in use, Next.js will use **http://localhost:3001**.  
  - On **Windows PowerShell**, use `;` instead of `&&` to chain commands (e.g. `Set-Location "path"; npm run dev`).  
- **`npm run build`** — Production build; static export goes to `out/`.  
- **`npm run start`** — Serve production build locally.  
- **`npm run lint`** — Run Next.js ESLint.  
- **`npm run deploy:cf`** — Build and deploy to Cloudflare Pages (requires Wrangler login and a Pages project named `pm-portfolio`).

---

## Configuration and conventions

- **Path alias:** `@/` → `src/` (e.g. `@/components/Navbar`).  
- **Fonts:** `--font-montserrat` (sans), `--font-khand` (display); set in `layout.tsx` and `tailwind.config.ts`.  
- **Colors:** Accent `#2563eb`, accent-hover `#1d4ed8` in Tailwind config.  
- **Content width:** Pages use `max-w-4xl mx-auto px-6` for consistent width.  
- **Contact form:** Formspree; endpoint in `src/app/contact/page.tsx` (`FORMSPREE_ENDPOINT`). Replace `YOUR_FORM_ID` before using.

---

## Data and content

- **Projects list:** Defined in `src/app/projects/page.tsx` and on the home page in `src/app/page.tsx` (featured subset). Keep in sync when adding/editing projects.  
- **Project detail:** Single source of truth is the `projects` object in `src/app/projects/[slug]/page.tsx`. Keys are URL slugs. Each project has: `title`, `subtitle?`, `problem`, `research`, `solution`, `productStrategy`, `outcome`, `caseStudyPdf?`.  
- **Case study PDFs:** Optional. Place in `public/case-studies/` (e.g. `daminvest.pdf`, `enoverlab.pdf`) and set `caseStudyPdf` in the project object (e.g. `'/case-studies/daminvest.pdf'`).  
- **CV:** Place `cv.pdf` in `public/` for the CV page to work.

---

## Optional setup (for humans/deploy)

1. **CV:** Add `public/cv.pdf`.  
2. **Formspree:** Create a form at [formspree.io](https://formspree.io), then set `FORMSPREE_ENDPOINT` in `src/app/contact/page.tsx`.  
3. **Case studies:** Add PDFs to `public/case-studies/` and set `caseStudyPdf` in `src/app/projects/[slug]/page.tsx` for each project.  
4. **Deploy:**  
   - **Cloudflare Pages:** Run `npm run deploy:cf` (after `npx wrangler login` and creating a Pages project), or connect the repo in [Cloudflare Dashboard](https://dash.cloudflare.com) → Pages → Create project → Git; set **Build command** `npm run build`, **Build output directory** `out`.  
   - **Vercel:** Push to GitHub and connect to Vercel; static export works automatically.  
   - **Other:** Deploy the `out/` folder to any static host.

---

## Summary for agents

- This is a **static Next.js 14 App Router** portfolio. No API routes; contact form uses Formspree.  
- **Add a project:** (1) Add entry to the array in `src/app/projects/page.tsx` (and optionally to featured on `src/app/page.tsx`). (2) Add full detail entry to the `projects` object in `src/app/projects/[slug]/page.tsx` with the same slug. Optionally add a PDF to `public/case-studies/` and set `caseStudyPdf`.  
- **Run dev:** `npm run dev` (PowerShell: use `;` to chain). App at http://localhost:3000 or 3001.  
- **Styling:** Tailwind only; theme and fonts in `tailwind.config.ts` and `src/app/layout.tsx`.
