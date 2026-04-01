export type GalleryCategory = 'all' | 'exteriors' | 'interiors' | 'community';
export type MetricView = 'psf' | 'price';

export type MarketBenchmarkPoint = {
  name: string;
  psf?: number;
  price?: number;
};

export type MarketBenchmark = {
  title: string;
  subtitle: string;
  data: MarketBenchmarkPoint[];
};

export type AreaSnapshot = {
  schools: string[];
  hospitals: string[];
  malls: string[];
  recreation: string[];
};

export type Project = {
  id: number;
  slug: string;
  title: string;
  developer: string;
  location: string;
  type: string;
  handover: string;
  price: string;
  paymentPlan: string;
  size: string;
  bedrooms: string;
  bathrooms: string;
  heroImage: string;
  gallery: Record<Exclude<GalleryCategory, 'all'>, string[]>;
  investorSnap: string[];
  areaSnapshot: AreaSnapshot;
  marketBenchmarks?: MarketBenchmark;
};

export type RawProject = Omit<Project, 'slug'> & { slug?: string };
