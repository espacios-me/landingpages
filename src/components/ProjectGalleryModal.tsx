import type { GalleryCategory, Project } from '../types/project';

export default function ProjectGalleryModal({
  open,
  onClose,
  project,
  category,
  setCategory,
}: {
  open: boolean;
  onClose: () => void;
  project: Project;
  category: GalleryCategory;
  setCategory: (c: GalleryCategory) => void;
}) {
  if (!open) return null;
  const images =
    category === 'all'
      ? [...project.gallery.exteriors, ...project.gallery.interiors, ...project.gallery.community]
      : project.gallery[category];

  return (
    <div className="fixed inset-0 z-50 bg-black/90 p-4">
      <div className="mx-auto h-full max-w-6xl overflow-auto rounded-3xl border border-white/10 bg-[#0b1220] p-4">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">{project.title} Gallery</h2>
          <button onClick={onClose}>Close</button>
        </div>
        <div className="mb-4 flex gap-2 flex-wrap">{(['all', 'exteriors', 'interiors', 'community'] as GalleryCategory[]).map((tab) => <button key={tab} onClick={() => setCategory(tab)} className={`rounded-full px-3 py-1 text-sm ${category === tab ? 'bg-white text-black' : 'bg-white/10'}`}>{tab}</button>)}</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
          {images.map((image, i) => (
            <img key={i} src={image} className="h-64 w-full object-cover rounded-2xl" />
          ))}
        </div>
      </div>
    </div>
  );
}
