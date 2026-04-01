import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import type { MetricView, Project } from '../types/project';

export default function InvestorSnapModal({ open, onClose, project, metricView, setMetricView }: { open: boolean; onClose: () => void; project: Project; metricView: MetricView; setMetricView: (v: MetricView) => void }) {
  if (!open) return null;
  const benchmark = project.marketBenchmarks;
  return (
    <div className="fixed inset-0 z-50 bg-black/85 p-4">
      <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-[#0b1220] p-4">
        <div className="mb-4 flex justify-between"><h2 className="text-2xl font-semibold">Investor Snap</h2><button onClick={onClose}>Close</button></div>
        <div className="grid lg:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-white/10 p-4 bg-white/5">
            {benchmark ? (
              <>
                <div className="mb-2 flex gap-2"><button onClick={() => setMetricView('psf')} className="rounded-full bg-white/10 px-3 py-1">AED/sq.ft</button><button onClick={() => setMetricView('price')} className="rounded-full bg-white/10 px-3 py-1">Median Price</button></div>
                <div className="h-72"><ResponsiveContainer width="100%" height="100%"><BarChart data={benchmark.data}><CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} /><XAxis dataKey="name" /><YAxis /><Tooltip /><Bar dataKey={metricView === 'psf' ? 'psf' : 'price'} fill="rgba(255,255,255,0.88)" /></BarChart></ResponsiveContainer></div>
              </>
            ) : <div className="text-white/60">No benchmark data available.</div>}
          </div>
          <div className="rounded-2xl border border-white/10 p-4 bg-white/5 space-y-2">{project.investorSnap.map((s) => <div key={s} className="rounded-xl bg-black/20 p-3">{s}</div>)}</div>
        </div>
      </div>
    </div>
  );
}
