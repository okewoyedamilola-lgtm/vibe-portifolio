# Deploy pm-portfolio to Cloudflare Pages

## Option A: Deploy from your machine (Wrangler CLI)

1. **Log in to Cloudflare** (one-time):
   ```bash
   npx wrangler login
   ```
   A browser window will open to authenticate.

2. **Create the Pages project** (one-time, if it doesn’t exist):
   ```bash
   npx wrangler pages project create pm-portfolio
   ```
   If the project already exists, skip this.

3. **Build and deploy**:
   ```bash
   npm run deploy:cf
   ```
   This runs `npm run build` and then deploys the `out/` folder to Cloudflare Pages.

4. Your site will be live at:
   `https://pm-portfolio.pages.dev` (or the custom domain you set in the dashboard).

---

## Option B: Deploy via Git (Cloudflare builds on every push)

1. Push your repo to **GitHub** (or GitLab).

2. In [Cloudflare Dashboard](https://dash.cloudflare.com) go to **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.

3. Select your repo and configure:
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Root directory:** (leave default)

4. Click **Save and Deploy**. Future pushes to the connected branch will trigger new deployments.

---

## Build settings (for Option B)

| Setting              | Value              |
|----------------------|--------------------|
| Build command        | `npm run build`    |
| Build output dir     | `out`              |
| Node.js version      | 18 or 20 (default)|
