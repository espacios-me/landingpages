# Landing Pages (Vite + React + Cloudflare Pages)

Scalable real-estate landing page system with one route per project.

## Routes
- `/` project listing page (search + filter + sort)
- `/project/:slug` project page

## Local setup
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```
Build output goes to `dist/`.

## Cloudflare Pages deployment
1. Connect repo in Cloudflare Pages.
2. Build command: `npm run build`
3. Output directory: `dist`
4. Include `public/_redirects` (`/* /index.html 200`) so direct navigation to `/project/:slug` works.

## Data architecture
- `src/types/project.ts` — normalized schema
- `src/data/projects.ts` — project dataset source
- `src/lib/normalizeProjectData.ts` — transformation layer for CSV/spreadsheet imports

## Contact CTA
Primary action is WhatsApp:
`https://wa.me/971559424193?text=...`
