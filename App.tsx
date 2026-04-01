import React, { useMemo, useState } from 'react';
import {
  MapPin,
  Images,
  ChevronRight,
  MessageCircle,
  TrendingUp,
  Building2,
  GraduationCap,
  Cross,
  ShoppingBag,
  Trees,
  X,
} from 'lucide-react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

type GalleryCategory = 'all' | 'exteriors' | 'interiors' | 'community';
type OverlayType = 'investor' | 'area' | null;
type MetricView = 'psf' | 'price';

type Project = {
  id: number;
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
  investorSnap: string[];
  areaSnapshot: {
    schools: string[];
    hospitals: string[];
    malls: string[];
    recreation: string[];
  };
  gallery: Record<Exclude<GalleryCategory, 'all'>, string[]>;
};

const whatsappNumber = '971559424193';
const nareenName = 'Nareen Alharbi';
const whatsappMessage = (title: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi Nareen, I’m interested in ${title}. Please share full details, floor plans, investor metrics, and current availability.`)}`;

const projects: Project[] = [
  {
    id: 1,
    title: 'Mirage at The Oasis',
    developer: 'Emaar Properties',
    location: 'The Oasis, Dubailand',
    type: '5–6 BR Villas & Mansions',
    handover: 'Q2 2028',
    price: 'AED 15.8M',
    paymentPlan: '90/10',
    size: '10,225 – 12,967 sq.ft',
    bedrooms: '5–6 BR',
    bathrooms: '7+ Bath',
    heroImage: 'https://cdn.opr.ae/photo/Oasis_Mirage.jpg',
    investorSnap: [
      'Mirage 5BR is positioned below wider Oasis 5BR median, which supports a value-entry sales angle.',
      'Low-density ultra-luxury villa stock gives stronger long-term resale storytelling than mass-market family communities.',
      'Lagoon-led masterplan and branded Emaar delivery help frame the project as scarcity-driven end-user and investor stock.',
      'Use this for buyers comparing prestige communities, not yield-led apartment investors.',
    ],
    areaSnapshot: {
      schools: ['Schools planned inside The Oasis', 'Chubby Cheeks Nursery', 'South View School', 'The International School of Choueifat'],
      hospitals: ['NMC Specialty Hospital', 'NMC Royal Hospital', 'Aster Clinic DIP'],
      malls: ['Circle Mall', 'City Centre Me’aisem', 'Town Square Community Center', 'The Ranches Souk'],
      recreation: ['Trump International Golf Club', 'Jumeirah Golf Estates', 'The Els Club', 'Hamdan Sports Complex', 'Dubai Miracle Garden'],
    },
    gallery: {
      exteriors: [
        'https://cdn.opr.ae/photo/Oasis_Mirage.jpg',
        'https://i.1.creatium.io/disk2/1b/e9/3c/f15c840c3ff67cd53e6750dd182ebe9e64/mob_header.jpg',
      ],
      interiors: ['https://i.1.creatium.io/disk2/1b/e9/3c/f15c840c3ff67cd53e6750dd182ebe9e64/mob_header.jpg'],
      community: ['https://cdn.opr.ae/photo/Oasis_Mirage.jpg'],
    },
  },
  {
    id: 2,
    title: 'Address The Bay',
    developer: 'Emaar Properties',
    location: 'Emaar Beachfront, Dubai Harbour',
    type: '1–3 BR Branded Apartments',
    handover: 'Q4 2026',
    price: 'AED 3.323M',
    paymentPlan: '80/20',
    size: '803 – 1,970 sq.ft',
    bedrooms: '1–3 BR',
    bathrooms: '2–4 Bath',
    heroImage: 'https://i.1.creatium.io/fc/a1/94/1fb95fdb5719498c9a4675c6fa615f78a5/1header.jpg',
    investorSnap: [
      'Premium branded waterfront positioning supports stronger resale narrative than generic apartment stock.',
      'Recent Emaar Beachfront transaction medians show deep pricing demand in 1BR and 2BR categories.',
      'For investors, this works best as a capital-growth and branded-rental story rather than a bargain buy.',
      'Use the beach access and district prestige as the lead, then back it up with market comps.',
    ],
    areaSnapshot: {
      schools: ['Blossom Palm Jumeirah Nursery', 'Jumeirah International Nurseries', 'Raffles Nursery Dubai Marina', 'International School of Choueifat'],
      hospitals: ['Al Zahra Hospital Dubai', 'Saudi German Hospital Dubai', 'Marina Medical Center'],
      malls: ['Dubai Marina Mall', 'Nakheel Mall', 'Mall of the Emirates'],
      recreation: ['Private beach access', 'Dubai Marina', 'Skydive Dubai', 'Palm Jumeirah boardwalk', 'Dubai Harbour promenade'],
    },
    gallery: {
      exteriors: [
        'https://i.1.creatium.io/fc/a1/94/1fb95fdb5719498c9a4675c6fa615f78a5/1header.jpg',
        'https://cdn.opr.ae/icons/Beach-Mansion-at-Emaar-Beachfront.jpg',
      ],
      interiors: ['https://cdn.opr.ae/icons/shorefront-residences/Emaar-Beachfront.jpg'],
      community: [
        'https://cdn.opr.ae/icons/Beach-Mansion-at-Emaar-Beachfront.jpg',
        'https://cdn.opr.ae/icons/shorefront-residences/Emaar-Beachfront.jpg',
      ],
    },
  },
  {
    id: 3,
    title: 'Elie Saab Villas',
    developer: 'Emaar Properties',
    location: 'Dubai Hills Estate',
    type: 'Designer Villas',
    handover: 'Ready / By Phase',
    price: 'AED 18M',
    paymentPlan: '60/40',
    size: '5,500 – 6,500 sq.ft',
    bedrooms: '5 BR',
    bathrooms: '6+ Bath',
    heroImage: 'https://437e81e1-5ed1-4d53-bed7-e6f8d97dcc9b.selcdn.net/47/ee/72/cb69ebbb564321739cc2076f27eaef2b93/1161x832q8/Header.jpg',
    investorSnap: [
      'Dubai Hills gives the cleanest premium-villa comparison set, which makes investor justification much easier.',
      'This is a design-led product inside one of Dubai’s most proven family districts.',
      'Use the Dubai Hills pricing ladder to show where Elie Saab sits between broad market confidence and top-tier cluster scarcity.',
      'This works well for buyers focused on preservation of capital and prestige-led resale.',
    ],
    areaSnapshot: {
      schools: ['GEMS International School', 'GEMS Wellington Academy', 'GEMS New Millennium School'],
      hospitals: ['King’s College Hospital'],
      malls: ['Dubai Hills Mall'],
      recreation: ['Dubai Hills Park', 'Dubai Hills Golf Club', 'Open green spaces and play areas'],
    },
    gallery: {
      exteriors: [
        'https://437e81e1-5ed1-4d53-bed7-e6f8d97dcc9b.selcdn.net/47/ee/72/cb69ebbb564321739cc2076f27eaef2b93/1161x832q8/Header.jpg',
        'https://i.1.creatium.io/e7/5b/11/ed18eec8930a4fcd095e249c6e08e1bb69/golf-place.jpg',
      ],
      interiors: [
        'https://i.1.creatium.io/17/b7/bc/b0acf2c391b4b4c851ec03c92920937d58/golf-place-30.jpg',
        'https://i.1.creatium.io/c0/4a/81/66d58f6ea1e67c4ff1fb4447d802ad318b/0.jpg',
      ],
      community: ['https://i.1.creatium.io/e7/5b/11/ed18eec8930a4fcd095e249c6e08e1bb69/golf-place.jpg'],
    },
  },
  {
    id: 4,
    title: 'Bayn by ORA',
    developer: 'ORA Developers',
    location: 'Ghantoot',
    type: 'Townhouses & Villas',
    handover: 'Announced / By Unit Type',
    price: 'From AED 2.75M',
    paymentPlan: 'Flexible',
    size: 'Multiple layouts',
    bedrooms: '3–5 BR',
    bathrooms: 'Varies',
    heroImage: 'https://metropolitan.realestate/wp-content/uploads/2025/04/Bayn-by-Ora-1-1024x585.webp',
    investorSnap: [
      'This is more of a first-mover coastal masterplan play than a mature transaction-data story.',
      'Use lifestyle, scale, and between-two-cities positioning as the primary investor hook.',
      'Best for buyers who want early entry into a large waterfront destination with future upside potential.',
      'Until we have richer comps, keep the pitch qualitative rather than over-claiming market precision.',
    ],
    areaSnapshot: {
      schools: ['Schools and education services planned within the master community'],
      hospitals: ['Healthcare services planned within the master community'],
      malls: ['Retail and dining zones within the development'],
      recreation: ['Private beach', 'Marina and lagoon promenades', 'Parks and green trails', 'Sports club', 'Jogging and cycling paths'],
    },
    gallery: {
      exteriors: [
        'https://metropolitan.realestate/wp-content/uploads/2025/04/Bayn-by-Ora-1-1024x585.webp',
        'https://metropolitan.realestate/wp-content/uploads/2025/04/Bayn-by-Ora-4-1024x585.webp',
      ],
      interiors: ['https://metropolitan.realestate/wp-content/uploads/2025/04/Bayn-by-Ora-4-1024x585.webp'],
      community: [
        'https://metropolitan.realestate/wp-content/uploads/2025/04/Bayn-by-Ora-2-1024x585.webp',
        'https://metropolitan.realestate/wp-content/uploads/2025/04/Bayn-by-Ora-1-1024x585.webp',
      ],
    },
  },
];

const marketBenchmarks: Record<number, { title: string; subtitle: string; data: { name: string; psf?: number; price?: number }[] }> = {
  1: {
    title: 'Investor Snap',
    subtitle: 'Recent transaction medians · The Oasis',
    data: [
      { name: 'Mirage 5BR', psf: 1610, price: 17.8 },
      { name: 'Oasis 5BR', psf: 1790, price: 19.3 },
      { name: 'Ostra 5BR', psf: 1830, price: 19.8 },
      { name: 'Tierra 5BR', psf: 1750, price: 19.0 },
    ],
  },
  2: {
    title: 'Investor Snap',
    subtitle: 'Recent transaction medians · Emaar Beachfront',
    data: [
      { name: 'Address 1BR', psf: 3680, price: 3.1 },
      { name: 'BF 1BR', psf: 3420, price: 2.7 },
      { name: 'Address 2BR', psf: 3740, price: 5.0 },
      { name: 'BF 2BR', psf: 3860, price: 5.1 },
    ],
  },
  3: {
    title: 'Investor Snap',
    subtitle: 'Recent transaction medians · Dubai Hills Estate',
    data: [
      { name: 'Dubai Hills 5BR', psf: 2430, price: 15.9 },
      { name: 'Park Gate 5BR', psf: 2370, price: 15.0 },
      { name: 'Palm Hills 5BR', psf: 2550, price: 19.0 },
      { name: 'Golf Place 5BR', psf: 2810, price: 22.9 },
    ],
  },
};

const galleryTabs: { key: GalleryCategory; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'exteriors', label: 'Exteriors' },
  { key: 'interiors', label: 'Interiors' },
  { key: 'community', label: 'Community' },
];

export default function App() {
  const [activeId, setActiveId] = useState(1);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryCategory, setGalleryCategory] = useState<GalleryCategory>('all');
  const [overlay, setOverlay] = useState<OverlayType>(null);
  const [metricView, setMetricView] = useState<MetricView>('psf');

  const project = useMemo(() => projects.find((item) => item.id === activeId) ?? projects[0], [activeId]);

  const galleryImages = useMemo(() => {
    if (galleryCategory === 'all') {
      return [...project.gallery.exteriors, ...project.gallery.interiors, ...project.gallery.community];
    }
    return project.gallery[galleryCategory];
  }, [project, galleryCategory]);

  const benchmark = marketBenchmarks[project.id];

  return (
    <div className="min-h-screen bg-[#0d1320] text-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
        <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-[0_20px_70px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
          <div className="grid grid-cols-1 xl:grid-cols-[1.35fr_0.65fr]">
            <section className="p-4 sm:p-6 lg:p-8">
              <div className="grid grid-cols-1 gap-4 lg:gap-6">
                <div className="relative overflow-hidden rounded-[28px] border border-white/10 min-h-[360px] sm:min-h-[460px] lg:min-h-[560px]">
                  <img src={project.heroImage} alt={project.title} className="absolute inset-0 h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08111f] via-[#08111f]/50 to-transparent" />

                  <div className="relative flex h-full flex-col justify-between p-5 sm:p-6 lg:p-8">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="rounded-full border border-white/15 bg-black/20 px-3 py-1 text-xs font-medium tracking-[0.18em] text-white/80 uppercase backdrop-blur-md">
                        {project.developer}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <button
                          onClick={() => {
                            setGalleryCategory('all');
                            setGalleryOpen(true);
                          }}
                          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/12 px-4 py-2 text-sm font-medium backdrop-blur-md transition hover:bg-white/20"
                        >
                          <Images size={16} />
                          Gallery
                        </button>
                        <a
                          href={whatsappMessage(project.title)}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-[#25D366]/30 bg-[#25D366]/90 px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.02]"
                        >
                          <MessageCircle size={16} />
                          WhatsApp Nareen
                        </a>
                      </div>
                    </div>

                    <div className="max-w-3xl">
                      <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-black/25 px-3 py-1.5 text-sm text-white/85 backdrop-blur-md">
                        <MapPin size={15} />
                        {project.location}
                      </div>
                      <h1 className="max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">{project.title}</h1>
                      <p className="mt-3 max-w-2xl text-sm text-white/78 sm:text-base lg:text-lg">{project.type}</p>

                      <div className="mt-5 flex flex-wrap gap-3">
                        <SnapshotChip label="From" value={project.price} />
                        <SnapshotChip label="Plan" value={project.paymentPlan} />
                        <SnapshotChip label="Handover" value={project.handover} />
                        <SnapshotChip label="Area" value={project.size} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                  <ActionTile
                    icon={<TrendingUp size={18} />}
                    title="Investor Snap"
                    description="ROI angle, growth signals, medians and investment story"
                    onClick={() => setOverlay('investor')}
                  />
                  <ActionTile
                    icon={<Building2 size={18} />}
                    title="Area Snapshot"
                    description="Schools, hospitals, malls and recreation nearby"
                    onClick={() => setOverlay('area')}
                  />
                  <a
                    href={whatsappMessage(project.title)}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-[24px] border border-[#25D366]/20 bg-[#25D366]/10 p-4 shadow-[0_12px_30px_rgba(0,0,0,0.12)] transition hover:bg-[#25D366]/15"
                  >
                    <div className="mb-5 inline-flex rounded-2xl bg-[#25D366] p-3 text-white">
                      <MessageCircle size={18} />
                    </div>
                    <div className="text-lg font-semibold">Chat with Nareen</div>
                    <div className="mt-1 text-sm text-white/65">All enquiries routed through WhatsApp</div>
                  </a>
                </div>

                <div className="rounded-[26px] border border-white/10 bg-white/6 p-4 shadow-[0_12px_30px_rgba(0,0,0,0.12)]">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <div>
                      <div className="text-[11px] uppercase tracking-[0.2em] text-white/50">Project Snapshot</div>
                      <h3 className="mt-2 text-lg font-semibold">Clean view for mobile</h3>
                    </div>
                    <div className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs text-white/60">Minimal layout</div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                    <MiniMetric label="Property" value={project.type} />
                    <MiniMetric label="Bedrooms" value={project.bedrooms} />
                    <MiniMetric label="Bathrooms" value={project.bathrooms} />
                    <MiniMetric label="Developer" value={project.developer} />
                  </div>
                </div>
              </div>
            </section>

            <aside className="border-t border-white/10 p-4 sm:p-6 xl:border-l xl:border-t-0 xl:p-8">
              <div className="grid grid-cols-1 gap-4">
                <div className="rounded-[24px] border border-white/10 bg-white/6 p-4 shadow-[0_12px_30px_rgba(0,0,0,0.12)] sm:p-5">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <div>
                      <div className="text-[11px] uppercase tracking-[0.2em] text-white/55">Agent</div>
                      <h2 className="mt-2 text-xl font-semibold">{nareenName}</h2>
                    </div>
                    <div className="rounded-2xl bg-[#25D366]/15 px-3 py-2 text-xs text-[#9ff0bc]">WhatsApp Only</div>
                  </div>

                  <div className="rounded-2xl border border-white/8 bg-black/10 p-4">
                    <div className="text-sm text-white/65">Primary contact for all enquiries</div>
                    <div className="mt-2 text-lg font-semibold">+971 55 942 4193</div>
                    <a
                      href={whatsappMessage(project.title)}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition hover:scale-[1.01]"
                    >
                      <MessageCircle size={18} />
                      Chat with Nareen on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="rounded-[24px] border border-white/10 bg-white/6 p-4 shadow-[0_12px_30px_rgba(0,0,0,0.12)] sm:p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Other Projects</h3>
                    <span className="text-xs uppercase tracking-[0.2em] text-white/45">Switch</span>
                  </div>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-1">
                    {projects.map((item) => {
                      const active = item.id === project.id;
                      return (
                        <button
                          key={item.id}
                          onClick={() => setActiveId(item.id)}
                          className={`group flex items-center gap-3 rounded-2xl border px-3 py-3 text-left transition ${
                            active ? 'border-white/25 bg-white/14' : 'border-white/8 bg-white/5 hover:bg-white/10'
                          }`}
                        >
                          <img src={item.heroImage} alt={item.title} className="h-16 w-16 rounded-xl object-cover" />
                          <div className="min-w-0 flex-1">
                            <div className="truncate text-sm font-semibold">{item.title}</div>
                            <div className="mt-1 truncate text-xs text-white/60">{item.location}</div>
                          </div>
                          <ChevronRight className="shrink-0 text-white/35 group-hover:text-white/70" size={18} />
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {overlay && (
        <div className="fixed inset-0 z-50 bg-black/85 p-4 backdrop-blur-xl sm:p-6 lg:p-8">
          <div className="mx-auto flex h-full w-full max-w-6xl flex-col overflow-hidden rounded-[34px] border border-white/10 bg-[#0b1220] shadow-[0_30px_100px_rgba(0,0,0,0.45)]">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-4 sm:px-6">
              <div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-white/50">{project.title}</div>
                <h2 className="mt-1 text-2xl font-semibold">{overlay === 'investor' ? 'Investor Snap' : 'Area Snapshot'}</h2>
              </div>
              <button
                onClick={() => setOverlay(null)}
                className="rounded-full border border-white/15 bg-white/8 p-2 text-white transition hover:bg-white/14"
              >
                <X size={20} />
              </button>
            </div>

            {overlay === 'investor' ? (
              <div className="flex-1 overflow-y-auto p-4 sm:p-6">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                  <div className="rounded-[28px] border border-white/10 bg-white/6 p-4 sm:p-5">
                    <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <div className="text-[11px] uppercase tracking-[0.2em] text-white/50">Market Read</div>
                        <h3 className="mt-2 text-xl font-semibold">{benchmark ? benchmark.title : 'Investor Snap'}</h3>
                        <p className="mt-1 text-sm text-white/55">{benchmark ? benchmark.subtitle : 'Use qualitative positioning for this project.'}</p>
                      </div>
                      {benchmark && (
                        <div className="flex gap-2">
                          <button
                            onClick={() => setMetricView('psf')}
                            className={`rounded-full px-4 py-2 text-sm ${metricView === 'psf' ? 'bg-white text-[#0b1220]' : 'border border-white/15 bg-white/8 text-white'}`}
                          >
                            AED / sq.ft
                          </button>
                          <button
                            onClick={() => setMetricView('price')}
                            className={`rounded-full px-4 py-2 text-sm ${metricView === 'price' ? 'bg-white text-[#0b1220]' : 'border border-white/15 bg-white/8 text-white'}`}
                          >
                            Median Price
                          </button>
                        </div>
                      )}
                    </div>

                    <div className="h-[320px] w-full">
                      {benchmark ? (
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={benchmark.data}>
                            <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
                            <XAxis dataKey="name" tick={{ fill: 'rgba(255,255,255,0.65)', fontSize: 11 }} axisLine={false} tickLine={false} />
                            <YAxis tick={{ fill: 'rgba(255,255,255,0.55)', fontSize: 11 }} axisLine={false} tickLine={false} />
                            <Tooltip
                              contentStyle={{
                                background: '#101826',
                                border: '1px solid rgba(255,255,255,0.12)',
                                borderRadius: 16,
                                color: '#fff',
                              }}
                              formatter={(value: number) =>
                                metricView === 'psf' ? [`AED ${value.toLocaleString()}`, 'Median AED/sq.ft'] : [`AED ${value}M`, 'Median Price']
                              }
                            />
                            <Bar dataKey={metricView === 'psf' ? 'psf' : 'price'} fill="rgba(255,255,255,0.88)" radius={[10, 10, 0, 0]} />
                          </BarChart>
                        </ResponsiveContainer>
                      ) : (
                        <div className="flex h-full items-center justify-center rounded-[24px] border border-dashed border-white/10 text-center text-sm text-white/55">
                          Investor positioning available, but no strong chartable transaction set yet.
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="rounded-[28px] border border-white/10 bg-white/6 p-4 sm:p-5">
                    <div className="text-[11px] uppercase tracking-[0.2em] text-white/50">Quick read for Nareen</div>
                    <div className="mt-4 grid grid-cols-1 gap-3">
                      {project.investorSnap.map((item) => (
                        <div key={item} className="rounded-2xl border border-white/8 bg-black/10 px-4 py-3 text-sm text-white/84">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex-1 overflow-y-auto p-4 sm:p-6">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
                  <AreaCard icon={<GraduationCap size={18} />} title="Schools" items={project.areaSnapshot.schools} />
                  <AreaCard icon={<Cross size={18} />} title="Hospitals" items={project.areaSnapshot.hospitals} />
                  <AreaCard icon={<ShoppingBag size={18} />} title="Malls" items={project.areaSnapshot.malls} />
                  <AreaCard icon={<Trees size={18} />} title="Recreation" items={project.areaSnapshot.recreation} />
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {galleryOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 p-4 backdrop-blur-xl sm:p-6 lg:p-8">
          <div className="mx-auto flex h-full w-full max-w-7xl flex-col overflow-hidden rounded-[30px] border border-white/10 bg-[#0b1220]">
            <div className="border-b border-white/10 px-4 py-4 sm:px-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-white/50">Project Gallery</div>
                  <h2 className="mt-1 text-xl font-semibold sm:text-2xl">{project.title}</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {galleryTabs.map((tab) => {
                    const active = galleryCategory === tab.key;
                    return (
                      <button
                        key={tab.key}
                        onClick={() => setGalleryCategory(tab.key)}
                        className={`rounded-full px-4 py-2 text-sm transition ${active ? 'bg-white text-[#0b1220]' : 'border border-white/15 bg-white/8 text-white hover:bg-white/14'}`}
                      >
                        {tab.label}
                      </button>
                    );
                  })}
                  <button
                    onClick={() => setGalleryOpen(false)}
                    className="rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm font-medium transition hover:bg-white/14"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 sm:p-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {galleryImages.map((image, index) => (
                  <div key={`${project.id}-${galleryCategory}-${index}`} className="overflow-hidden rounded-[24px] border border-white/10 bg-white/5">
                    <img src={image} alt={`${project.title} ${index + 1}`} className="h-[260px] w-full object-cover sm:h-[300px]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function SnapshotChip({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-full border border-white/15 bg-black/20 px-4 py-2 backdrop-blur-md">
      <span className="mr-2 text-xs uppercase tracking-[0.18em] text-white/50">{label}</span>
      <span className="text-sm font-semibold text-white">{value}</span>
    </div>
  );
}

function ActionTile({
  icon,
  title,
  description,
  onClick,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="rounded-[24px] border border-white/10 bg-white/6 p-4 text-left shadow-[0_12px_30px_rgba(0,0,0,0.12)] transition hover:bg-white/10"
    >
      <div className="mb-5 inline-flex rounded-2xl bg-white/10 p-3 text-white">{icon}</div>
      <div className="text-lg font-semibold">{title}</div>
      <div className="mt-1 text-sm text-white/62">{description}</div>
    </button>
  );
}

function MiniMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[20px] border border-white/8 bg-black/10 p-4">
      <div className="text-[11px] uppercase tracking-[0.18em] text-white/45">{label}</div>
      <div className="mt-2 text-sm font-semibold text-white">{value}</div>
    </div>
  );
}

function AreaCard({ icon, title, items }: { icon: React.ReactNode; title: string; items: string[] }) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-white/6 p-4 sm:p-5">
      <div className="mb-4 inline-flex rounded-2xl bg-white/10 p-3 text-white">{icon}</div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="mt-4 grid grid-cols-1 gap-3">
        {items.map((item) => (
          <div key={item} className="rounded-2xl border border-white/8 bg-black/10 px-4 py-3 text-sm text-white/84">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
