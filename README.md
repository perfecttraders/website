# Perfect Traders Website

Production-ready forex broker landing website for **Perfect Traders** built with **React + Vite + Tailwind CSS**.

## Setup

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
npm run preview
```

## Environment

Copy `.env.example` to `.env` and adjust:

- `VITE_BASE_PATH` (for GitHub Pages deployment path)
- `VITE_PLATFORM_URL`
- `VITE_SUPPORT_EMAIL`
- `VITE_USE_HASH_ROUTER` (`true` by default for static hosts without route rewrites)

## Routing note

By default, the app uses `HashRouter` so pages work out-of-the-box on GitHub Pages/shared hosting.
If your hosting supports SPA rewrites, set `VITE_USE_HASH_ROUTER=false` to use clean BrowserRouter URLs.
