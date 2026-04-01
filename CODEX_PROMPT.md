# Dataset Expansion Prompt

To add new projects at scale:
1. ingest CSV/spreadsheet rows
2. map columns through `normalizeSpreadsheetRow` in `src/lib/normalizeProjectData.ts`
3. export normalized array from `src/data/projects.ts`
4. run `npm run build` and deploy `dist` to Cloudflare Pages

Schema source of truth: `src/types/project.ts`.
