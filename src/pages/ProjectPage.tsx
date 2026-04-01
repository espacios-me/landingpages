import { Building2, Images, MapPin, TrendingUp } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import AreaSnapshotModal from '../components/AreaSnapshotModal';
import InvestorSnapModal from '../components/InvestorSnapModal';
import ProjectGalleryModal from '../components/ProjectGalleryModal';
import ProjectMap from '../components/ProjectMap';
import RelatedProjectsGrid from '../components/RelatedProjectsGrid';
import WhatsAppCTA from '../components/WhatsAppCTA';
import { projectBySlug, projects } from '../data/projects';
import type { GalleryCategory, MetricView } from '../types/project';

export default function ProjectPage() {
  const { slug = '' } = useParams();
  const project = projectBySlug.get(slug);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryCategory, setGalleryCategory] = useState<GalleryCategory>('all');
  const [showInvestor, setShowInvestor] = useState(false);
  const [showArea, setShowArea] = useState(false);
  const [metricView, setMetricView] = useState<MetricView>('psf');

  const related = useMemo(() => projects.filter((p) => p.slug !== slug), [slug]);

  if (!project) return <Navigate to="/" replace />;

  return (
    <main className="mx-auto max-w-7xl px-4 py-6">
      <Link to="/" className="text-sm text-white/70">← Back to all projects</Link>
      <section className="mt-3 rounded-3xl border border-white/10 overflow-hidden bg-white/5">
        <div className="relative min-h-[340px] p-6">
          <img src={project.heroImage} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08111f] via-[#08111f]/50 to-transparent" />
          <div className="relative z-10">
            <div className="flex flex-wrap gap-2 mb-4">
              <button onClick={() => { setGalleryCategory('all'); setGalleryOpen(true); }} className="chip"><Images size={14} />Gallery</button>
              <button onClick={() => setShowInvestor(true)} className="chip"><TrendingUp size={14} />Investor Snap</button>
              <button onClick={() => setShowArea(true)} className="chip"><Building2 size={14} />Area Snapshot</button>
              <WhatsAppCTA title={project.title} />
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-black/25 px-3 py-1 text-sm"><MapPin size={14} />{project.location}</div>
            <h1 className="mt-3 text-4xl font-semibold">{project.title}</h1>
            <p className="text-white/75">{project.type}</p>
            <div className="mt-4 flex flex-wrap gap-2">{[['From', project.price], ['Plan', project.paymentPlan], ['Handover', project.handover], ['Area', project.size]].map(([k, v]) => <div key={k} className="chip">{k}: {v}</div>)}</div>
          </div>
        </div>
      </section>

      <section className="mt-6 grid md:grid-cols-2 gap-4">
        <Board title="Exteriors" subtitle="Facade and architecture" image={project.gallery.exteriors[0] ?? project.heroImage} onClick={() => { setGalleryCategory('exteriors'); setGalleryOpen(true); }} />
        <Board title="Interiors" subtitle="Design and finishes" image={project.gallery.interiors[0] ?? project.heroImage} onClick={() => { setGalleryCategory('interiors'); setGalleryOpen(true); }} />
      </section>

      <ProjectMap location={project.location} />
      <RelatedProjectsGrid current={project} all={related} />

      <ProjectGalleryModal open={galleryOpen} onClose={() => setGalleryOpen(false)} project={project} category={galleryCategory} setCategory={setGalleryCategory} />
      <InvestorSnapModal open={showInvestor} onClose={() => setShowInvestor(false)} project={project} metricView={metricView} setMetricView={setMetricView} />
      <AreaSnapshotModal open={showArea} onClose={() => setShowArea(false)} project={project} />
    </main>
  );
}

function Board({ title, subtitle, image, onClick }: { title: string; subtitle: string; image: string; onClick: () => void }) {
  return (
    <button onClick={onClick} className="group relative rounded-3xl overflow-hidden border border-white/10 text-left">
      <img src={image} className="h-72 w-full object-cover transition group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#08111f] via-[#08111f]/20 to-transparent" />
      <div className="absolute bottom-0 p-4">
        <div className="text-2xl font-semibold">{title}</div>
        <div className="text-sm text-white/70">{subtitle}</div>
      </div>
    </button>
  );
}
