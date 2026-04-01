import type { Project, RawProject } from '../types/project';
import { slugify } from './slugify';

type RawRow = Record<string, string | number | undefined | null>;

const asText = (v: unknown) => (v == null ? '' : String(v).trim());

export function normalizeProject(raw: RawProject): Project {
  return {
    ...raw,
    slug: raw.slug ? slugify(raw.slug) : slugify(raw.title),
  };
}

// Example adapter for CSV/spreadsheet rows.
export function normalizeSpreadsheetRow(row: RawRow): Project {
  const title = asText(row.title || row.project_title);
  return normalizeProject({
    id: Number(row.id),
    title,
    developer: asText(row.developer),
    location: asText(row.location),
    type: asText(row.type),
    handover: asText(row.handover),
    price: asText(row.price),
    paymentPlan: asText(row.paymentPlan || row.payment_plan),
    size: asText(row.size),
    bedrooms: asText(row.bedrooms),
    bathrooms: asText(row.bathrooms),
    heroImage: asText(row.heroImage || row.hero_image),
    gallery: {
      exteriors: [],
      interiors: [],
      community: [],
    },
    investorSnap: [],
    areaSnapshot: { schools: [], hospitals: [], malls: [], recreation: [] },
  });
}

export function normalizeProjectDataset(input: RawProject[]): Project[] {
  return input.map(normalizeProject);
}
