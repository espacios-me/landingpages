import type { Project } from '../types/project';

export default function AreaSnapshotModal({ open, onClose, project }: { open: boolean; onClose: () => void; project: Project }) {
  if (!open) return null;
  const blocks = [
    ['Schools', project.areaSnapshot.schools],
    ['Hospitals', project.areaSnapshot.hospitals],
    ['Malls', project.areaSnapshot.malls],
    ['Recreation', project.areaSnapshot.recreation],
  ] as const;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 p-4">
      <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-[#0b1220] p-4">
        <div className="mb-4 flex justify-between"><h2 className="text-2xl font-semibold">Area Snapshot</h2><button onClick={onClose}>Close</button></div>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-3">
          {blocks.map(([title, items]) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-3">
              <h3 className="font-semibold mb-2">{title}</h3>
              <div className="space-y-2">{items.map((i) => <div key={i} className="rounded-xl bg-black/20 p-2 text-sm">{i}</div>)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
