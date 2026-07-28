# Cloudflare Pages Setup Instructions for AMLAACH Portfolio

Connecting your GitHub repository (`https://github.com/Amlaach/personal-site`) to **Cloudflare Pages** enables ultra-fast global CDN delivery, automatic SSL certificates, HTTP/3, and zero-config deployment on every `git push`.

---

## Quick Setup Steps (Cloudflare Dashboard)

1. Log in to your [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. In the left navigation sidebar, click **Workers & Pages**.
3. Click **Create Application** -> Select **Pages** tab -> Click **Connect to Git**.
4. Select your GitHub account and authorize access to the repository: `Amlaach/personal-site`.
5. Configure deployment settings:
   - **Project Name**: `amlaach-site` (or your preferred name)
   - **Production Branch**: `main`
   - **Framework preset**: `None`
   - **Build command**: *(leave blank - static HTML/CSS/JS)*
   - **Build output directory**: `/` (or leave blank)
6. Click **Save and Deploy**.

---

## Included Cloudflare Optimizations

The repository includes pre-configured Cloudflare Pages files:

- **`_headers`**: Enforces HTTP Security Headers (CSP, HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy) and sets 1-year immutable caching for static assets (`style.css`, `app.js`, `favicon.svg`).
- **`_redirects`**: Configures clean routing on Cloudflare Pages edge servers.

---

## Custom Domain (Optional)

To connect your custom domain (e.g., `amlaach.com`):
1. In Cloudflare Pages dashboard, open your project -> **Custom Domains**.
2. Click **Set up a custom domain** and enter your domain name.
3. Cloudflare will automatically configure DNS records and issue a free SSL/TLS certificate.
