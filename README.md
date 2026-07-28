# AMLAACH | Personal Portfolio Website

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)
![Bilingual](https://img.shields.io/badge/i18n-Hebrew%20%7C%20English-purple.svg)
![RTL](https://img.shields.io/badge/direction-RTL%20%26%20LTR-orange.svg)
![Hosting](https://img.shields.io/badge/hosting-Cloudflare%20Pages%20%2F%20GitHub%20Pages-black.svg)

A production-ready, ultra-fast personal portfolio website for **AMLAACH** built with vanilla HTML5, CSS3, and ES6 JavaScript. Designed with aesthetics inspired by Vercel, Apple, and GitHub.

---

## 🌟 Key Features

- 🌓 **Dark & Light Themes**: Dark mode default with smooth toggle and `localStorage` preference persistence.
- 🌐 **Bilingual (Hebrew & English)**: Full RTL (Right-to-Left) and LTR (Left-to-Right) dynamic layout switching with font pairings (*Heebo* / *Rubik* for Hebrew, *Inter* for English).
- 📱 **Mobile-First & Responsive**: Dynamic grid layout, glassmorphic navbar with mobile drawer navigation.
- ✨ **Micro-Animations & Glassmorphism**: Scroll-reveal animations via `IntersectionObserver`, `ScrollSpy` active link highlighting, floating cards, specular borders, and text shimmer gradients.
- ⚡ **Zero Framework Dependencies**: Lightweight, high performance, clean architecture with 100/100 target Lighthouse metrics.
- 🔍 **SEO & Social Cards**: Full Open Graph (`og:*`), Twitter Cards (`twitter:*`), meta description, canonical tags, and dynamic SVG favicon.
- ♿ **Accessibility (A11y)**: Accessible focus rings (`:focus-visible`), ARIA roles, skip-to-content links.
- ☁️ **Cloudflare Pages & GitHub Pages Ready**: Pre-configured `_headers` (HSTS, CSP, 1-year asset caching), `_redirects`, and `.github/workflows/deploy.yml` for automated CI/CD deployment.

---

## 📂 Project Structure

```text
amlaach-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions auto-deploy to GitHub Pages
├── _headers                # Cloudflare Pages HTTP security & caching headers
├── _redirects              # Cloudflare Pages routing rules
├── index.html              # Main semantic HTML structure & i18n data
├── style.css              # Design tokens, themes, layouts & glassmorphism
├── app.js                 # State manager (i18n, themes, scroll reveal, scrollspy)
├── favicon.svg            # Vector SVG developer icon
├── CLOUDFLARE.md          # Cloudflare Pages setup instructions
└── README.md              # Project documentation
```

---

## 🚀 Local Development

To run the site locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/Amlaach/personal-site.git
   cd personal-site
   ```

2. Serve with any static HTTP server:
   ```bash
   # Using Python
   python -m http.server 3000

   # Or using Node serve
   npx serve .
   ```

3. Open `http://localhost:3000` in your browser.

---

## ☁️ Deployment

### 1. Cloudflare Pages
- Connect repository `Amlaach/personal-site` in Cloudflare Pages dashboard.
- Set build directory to `/` and framework preset to `None`.
- Cloudflare will deploy automatically on every commit. See [CLOUDFLARE.md](CLOUDFLARE.md) for full guide.

### 2. GitHub Pages
- Go to repository **Settings** -> **Pages**.
- Under **Build and deployment**, select **GitHub Actions**.
- The included `.github/workflows/deploy.yml` workflow will automatically build and publish the site.

---

## 👤 Owner

- **Developer**: AMLAACH
- **GitHub**: [@AMLAACH](https://github.com/AMLAACH)
- **Repository**: [personal-site](https://github.com/Amlaach/personal-site)
