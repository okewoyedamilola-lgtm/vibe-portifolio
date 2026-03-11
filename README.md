# Damilola Israel Okewoye — Product Manager Portfolio

A minimal, static portfolio site built with **Next.js** and **Tailwind CSS**, suitable for Vercel.

## Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Add your CV**
   - Export your CV as a PDF named `cv.pdf`.
   - Put it in the `public/` folder so the CV page can preview and offer a download.

3. **Contact form (Formspree)**
   - Go to [formspree.io](https://formspree.io), create a form, and get your form ID.
   - In `src/app/contact/page.tsx`, replace `YOUR_FORM_ID` in `FORMSPREE_ENDPOINT` with your Formspree form ID.

4. **Optional: case study PDFs**
   - You can add PDFs for project case studies in `public/case-studies/` (e.g. `daminvest.pdf`, `enoverlab.pdf`) so the “View / Download PDF” links on project pages work.

## Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for production (static export)

```bash
npm run build
```

The static site is in the `out/` folder. You can deploy `out/` to Vercel (or any static host).

## Deploy on Vercel

- Push the repo to GitHub and connect it in [Vercel](https://vercel.com). Vercel will detect Next.js and use the static export from `next build`.

## Structure

- `src/app/` — Pages (Home, About, Projects, CV, Contact) and layout
- `src/components/` — Navbar, Footer, ProjectCard, SkillSection
- `public/` — Static assets; put `cv.pdf` here

Replace placeholder content with your own copy and update social links on the Contact page.
