import React, { useMemo, useState } from 'react';
import {
  MapPin,
  Building2,
  CreditCard,
  CalendarDays,
  Ruler,
  Images,
  ChevronRight,
  Bath,
  BedDouble,
  MessageCircle,
  Sparkles,
} from 'lucide-react';

type GalleryCategory = 'all' | 'exteriors' | 'interiors' | 'community';

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
  communityHighlights: string[];
  gallery: Record<Exclude<GalleryCategory, 'all'>, string[]>;
};

const whatsappNumber = '971559424193';
const nareenName = 'Nareen Alharbi';
const whatsappMessage = (title: string) =>
  `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hi Nareen, I’m interested in ${title}. Please share full details and availability.`)}`;

const projects: Project[] = [
  {
    id: 1,
    title: 'Mirage at The Oasis',
    developer: 'Emaar Properties',
    location: 'Dubailand, Dubai',
    type: '5–6 BR Villas & Mansions',
    handover: 'Q2 2028',
    price: 'AED 15.8M',
    paymentPlan: '90/10',
    size: '10,225 – 12,967 sq.ft',
    bedrooms: '5–6 BR',
    bathrooms: '7+ Bath',
    heroImage: 'https://cdn.opr.ae/photo/Oasis_Mirage.jpg',
    communityHighlights: [
      'Swimmable lagoon and waterfront lifestyle',
      'Lush green areas, parks and jogging tracks',
      'Approx. 20 min to Downtown Dubai',
      'Approx. 30 min to DXB Airport',
    ],
    gallery: {
      exteriors: [
        'https://cdn.opr.ae/photo/Oasis_Mirage.jpg',
        'https://i.1.creatium.io/disk2/1b/e9/3c/f15c840c3ff67cd53e6750dd182ebe9e64/mob_header.jpg',
      ],
      interiors: [
        'https://i.1.creatium.io/disk2/1b/e9/3c/f15c840c3ff67cd53e6750dd182ebe9e64/mob_header.jpg',
      ],
      community: [
        'https://cdn.opr.ae/photo/Oasis_Mirage.jpg',
      ],
    },
  },
  {
    id: 2,
    title: 'Address The Bay',
    developer: 'Emaar Properties',
    location: 'Emaar Beachfront, Dubai',
    type: '1–3 BR Branded Apartments',
    handover: 'Q4 2026',
    price: 'AED 3.323M',
    paymentPlan: '80/20',
    size: '803 – 1,970 sq.ft',
    bedrooms: '1–3 BR',
    bathrooms: '2–4 Bath',
    heroImage: 'https://i.1.creatium.io/fc/a1/94/1fb95fdb5719498c9a4675c6fa615f78a5/1header.jpg',
    communityHighlights: [
      'Private beach access and infinity pool',
      'Prime plot within Emaar Beachfront',
      'Views toward Palm Jumeirah, Dubai Marina and the sea',
      'Direct access to Sheikh Zayed Road within minutes',
    ],
    gallery: {
      exteriors: [
        'https://i.1.creatium.io/fc/a1/94/1fb95fdb5719498c9a4675c6fa615f78a5/1header.jpg',
        'https://cdn.opr.ae/icons/Beach-Mansion-at-Emaar-Beachfront.jpg',
      ],
      interiors: [
        'https://cdn.opr.ae/icons/shorefront-residences/Emaar-Beachfront.jpg',
      ],
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
    location: 'Dubai Hills Estate, Dubai',
    type: 'Designer Villas',
    handover: 'Ready / By Phase',
    price: 'AED 18M',
    paymentPlan: '60/40',
    size: '5,500 – 6,500 sq.ft',
    bedrooms: '5 BR',
    bathrooms: '6+ Bath',
    heroImage: 'https://437e81e1-5ed1-4d53-bed7-e6f8d97dcc9b.selcdn.net/47/ee/72/cb69ebbb564321739cc2076f27eaef2b93/1161x832q8/Header.jpg',
    communityHighlights: [
      'Master-planned setting within Dubai Hills Estate',
      'Golf course lifestyle and landscaped green surroundings',
      'Close to Al Khail Road, Downtown Dubai and Dubai Mall',
      'Strong family appeal with premium Emaar community infrastructure',
    ],
    gallery: {
      exteriors: [
        'https://437e81e1-5ed1-4d53-bed7-e6f8d97dcc9b.selcdn.net/47/ee/72/cb69ebbb564321739cc2076f27eaef2b93/1161x832q8/Header.jpg',
        'https://i.1.creatium.io/e7/5b/11/ed18eec8930a4fcd095e249c6e08e1bb69/golf-place.jpg',
      ],
      interiors: [
        'https://i.1.creatium.io/17/b7/bc/b0acf2c391b4b4c851ec03c92920937d58/golf-place-30.jpg',
        'https://i.1.creatium.io/c0/4a/81/66d58f6ea1e67c4ff1fb4447d802ad318b/0.jpg',
      ],
      community: [
        'https://i.1.creatium.io/e7/5b/11/ed18eec8930a4fcd095e249c6e08e1bb69/golf-place.jpg',
      ],
    },
  },
  {
    id: 4,
    title: 'Bayn by ORA',
    developer: 'ORA Developers',
    location: 'Ghantoot, UAE',
    type: 'Townhouses & Villas',
    handover: 'Announced / By Unit Type',
    price: 'From AED 2.75M',
    paymentPlan: 'Flexible',
    size: 'Multiple layouts',
    bedrooms: '3–5 BR',
    bathrooms: 'Varies',
    heroImage: 'https://metropolitan.realestate/wp-content/uploads/2025/04/Bayn-by-Ora-1-1024x585.webp',
    communityHighlights: [
      'Waterfront masterplan in Ghantoot',
      'Mix of villas, townhouses and canal-facing zones',
      'Resort-style community positioning with landscaped open space',
      'Strong lifestyle focus around coastal living and leisure',
    ],
    gallery: {
      exteriors: [
        'https://metropolitan.realestate/wp-content/uploads/2025/04/Bayn-by-Ora-1-1024x585.webp',
        'https://metropolitan.realestate/wp-content/uploads/2025/04/Bayn-by-Ora-4-1024x585.webp',
      ],
      interiors: [
        'https://metropolitan.realestate/wp-content/uploads/2025/04/Bayn-by-Ora-4-1024x585.webp',
      ],
      community: [
        'https://metropolitan.realestate/wp-content/uploads/2025/04/Bayn-by-Ora-2-1024x585.webp',
        'https://metropolitan.realestate/wp-content/uploads/2025/04/Bayn-by-Ora-1-1024x585.webp',
      ],
    },
  },
];

const metricClass =
  'rounded-3xl border border-white/15 bg-white/8 backdrop-blur-xl p-4 sm:p-5 shadow-[0_12px_30px_rgba(0,0,0,0.12)]';

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

  const project = useMemo(
    () => projects.find((item) => item.id === activeId) ?? projects[0],
    [activeId]
  );

  const galleryImages = useMemo(() => {
    if (galleryCategory === 'all') {
      return [
        ...project.gallery.exteriors,
        ...project.gallery.interiors,
        ...project.gallery.community,
      ];
    }
    return project.gallery[galleryCategory];
  }, [project, galleryCategory]);

  return (
    <div className="min-h-screen bg-[#0d1320] text-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
        <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-[0_20px_70px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
          <div className="grid grid-cols-1 xl:grid-cols-[1.3fr_0.7fr]">
            <section className="p-4 sm:p-6 lg:p-8">
              <div className="grid grid-cols-1 gap-4 lg:gap-6">
                <div className="relative overflow-hidden rounded-[28px] border border-white/10 min-h-[360px] sm:min-h-[460px] lg:min-h-[540px]">
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08111f] via-[#08111f]/55 to-transparent" />

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
                      <h1 className="max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                        {project.title}
                      </h1>
                      <p className="mt-3 max-w-2xl text-sm text-white/78 sm:text-base lg:text-lg">
                        {project.type}
                      </p>

                      <div className="mt-5 flex flex-wrap items-center gap-3 sm:gap-4">
                        <div className="rounded-2xl border border-white/15 bg-black/20 px-4 py-3 backdrop-blur-md">
                          <div className="text-[11px] uppercase tracking-[0.2em] text-white/60">Starting Price</div>
                          <div className="mt-1 text-xl font-semibold sm:text-2xl">{project.price}</div>
                        </div>
                        <div className="rounded-2xl border border-white/15 bg-black/20 px-4 py-3 backdrop-blur-md">
                          <div className="text-[11px] uppercase tracking-[0.2em] text-white/60">Payment Plan</div>
                          <div className="mt-1 text-xl font-semibold sm:text-2xl">{project.paymentPlan}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
                  <div className={metricClass}>
                    <Building2 className="mb-4 text-white/55" size={20} />
                    <div className="text-[11px] uppercase tracking-[0.2em] text-white/55">Property Type</div>
                    <div className="mt-2 text-sm font-semibold text-white sm:text-base">{project.type}</div>
                  </div>
                  <div className={metricClass}>
                    <Ruler className="mb-4 text-white/55" size={20} />
                    <div className="text-[11px] uppercase tracking-[0.2em] text-white/55">Built-up Area</div>
                    <div className="mt-2 text-sm font-semibold text-white sm:text-base">{project.size}</div>
                  </div>
                  <div className={metricClass}>
                    <CalendarDays className="mb-4 text-white/55" size={20} />
                    <div className="text-[11px] uppercase tracking-[0.2em] text-white/55">Handover</div>
                    <div className="mt-2 text-sm font-semibold text-white sm:text-base">{project.handover}</div>
                  </div>
                  <div className={metricClass}>
                    <CreditCard className="mb-4 text-white/55" size={20} />
                    <div className="text-[11px] uppercase tracking-[0.2em] text-white/55">Payment Plan</div>
                    <div className="mt-2 text-sm font-semibold text-white sm:text-base">{project.paymentPlan}</div>
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
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <div>
                      <div className="text-[11px] uppercase tracking-[0.2em] text-white/55">Project Overview</div>
                      <h2 className="mt-2 text-xl font-semibold">{project.title}</h2>
                    </div>
                    <div className="rounded-2xl bg-white/10 px-3 py-2 text-xs text-white/80">{project.developer}</div>
                  </div>

                  <div className="space-y-3">
                    <InfoRow label="Location" value={project.location} />
                    <InfoRow label="Starting Price" value={project.price} />
                    <InfoRow label="Property Type" value={project.type} />
                    <InfoRow label="Area" value={project.size} />
                    <InfoRow label="Plan" value={project.paymentPlan} />
                    <InfoRow label="Handover" value={project.handover} />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <SmallStat icon={<BedDouble size={18} />} label="Bedrooms" value={project.bedrooms} />
                  <SmallStat icon={<Bath size={18} />} label="Bathrooms" value={project.bathrooms} />
                </div>

                <div className="rounded-[24px] border border-white/10 bg-white/6 p-4 shadow-[0_12px_30px_rgba(0,0,0,0.12)] sm:p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">Community Highlights</h3>
                      <p className="mt-1 text-sm text-white/55">DXB-style location cues and project context</p>
                    </div>
                    <Sparkles className="text-white/45" size={18} />
                  </div>
                  <div className="space-y-3">
                    {project.communityHighlights.map((highlight) => (
                      <div key={highlight} className="rounded-2xl border border-white/8 bg-black/10 px-4 py-3 text-sm text-white/85">
                        {highlight}
                      </div>
                    ))}
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
                            active
                              ? 'border-white/25 bg-white/14'
                              : 'border-white/8 bg-white/5 hover:bg-white/10'
                          }`}
                        >
                          <img
                            src={item.heroImage}
                            alt={item.title}
                            className="h-16 w-16 rounded-xl object-cover"
                          />
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
                        className={`rounded-full px-4 py-2 text-sm transition ${
                          active
                            ? 'bg-white text-[#0b1220]'
                            : 'border border-white/15 bg-white/8 text-white hover:bg-white/14'
                        }`}
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
                    <img
                      src={image}
                      alt={`${project.title} ${index + 1}`}
                      className="h-[260px] w-full object-cover sm:h-[300px]"
                    />
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

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-2xl border border-white/8 bg-black/10 px-4 py-3">
      <span className="text-sm text-white/55">{label}</span>
      <span className="max-w-[60%] text-right text-sm font-medium text-white">{value}</span>
    </div>
  );
}

function SmallStat({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[22px] border border-white/10 bg-white/6 p-4 shadow-[0_12px_30px_rgba(0,0,0,0.12)]">
      <div className="mb-3 text-white/55">{icon}</div>
      <div className="text-[11px] uppercase tracking-[0.2em] text-white/50">{label}</div>
      <div className="mt-2 text-base font-semibold text-white">{value}</div>
    </div>
  );
}
