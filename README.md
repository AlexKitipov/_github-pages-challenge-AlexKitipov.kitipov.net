# 🌐 Aleksandar Kitipov Portfolio Foundation

This repository now contains a Vite-powered React TypeScript foundation for the `kitipov.net` GitHub Pages site. The current milestone intentionally focuses on the project scaffold and deployment baseline rather than the final visual design.

## ✅ Current stack

- [Vite](https://vite.dev/) for local development and static production builds
- React with TypeScript for the application layer
- GitHub Pages-compatible static output through the `dist/` directory
- Custom domain support through `public/CNAME`

## 📁 Project structure

```text
.
├── docs/legacy/                # Archived static HTML version for reference
│   ├── index.html
│   ├── about.html
│   ├── contacts.html
│   ├── links.html
│   └── screenshots/            # Archived screenshots from the previous site
├── public/
│   └── CNAME                   # Copied into dist/ during Vite builds
├── src/
│   ├── assets/images/          # App-owned image assets
│   ├── styles/globals.css      # Global application styles
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── index.html                  # Vite HTML entry point
├── package.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## 🚀 Getting started

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Build the static site:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## 🌍 Domain and GitHub Pages notes

- Custom domain: `kitipov.net`
- The root `CNAME` file is retained for domain reference.
- `public/CNAME` is the deployment source of truth for Vite builds because files in `public/` are copied directly into `dist/`.
- After running `npm run build`, confirm `dist/CNAME` exists before publishing the build output to GitHub Pages.

## 🧭 Legacy archive

The original static site files were moved to `docs/legacy/` instead of being deleted. This keeps the previous HTML-only implementation available for review while allowing the root `index.html` to become the Vite entry point.

Archived files:

- `docs/legacy/index.html`
- `docs/legacy/about.html`
- `docs/legacy/contacts.html`
- `docs/legacy/links.html`
- `docs/legacy/screenshots/`

The previous `background.png` asset now lives at `src/assets/images/background.png` and is imported by the React app.

## 📜 License

This project is released under the [MIT License](LICENSE).
