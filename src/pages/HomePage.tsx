import { useMemo, useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { developers, locations, projects } from '../data/projects';

function parsePrice(value: string): number {
  const m = value.replace(/,/g, '').match(/\d+(\.\d+)?/);
  return m ? Number(m[0]) : Number.MAX_SAFE_INTEGER;
}

export default function HomePage() {
  const [search, setSearch] = useState('');
  const [developer, setDeveloper] = useState('all');
  const [location, setLocation] = useState('all');
  const [sortBy, setSortBy] = useState<'title' | 'price'>('title');

  const filtered = useMemo(() => {
    return [...projects]
      .filter((p) => (developer === 'all' ? true : p.developer === developer))
      .filter((p) => (location === 'all' ? true : p.location === location))
      .filter((p) => `${p.title} ${p.location}`.toLowerCase().includes(search.toLowerCase()))
      .sort((a, b) => (sortBy === 'title' ? a.title.localeCompare(b.title) : parsePrice(a.price) - parsePrice(b.price)));
  }, [developer, location, search, sortBy]);

  return (
    <main className="mx-auto max-w-7xl px-4 py-6">
      <h1 className="text-3xl font-semibold mb-4">Espacios Project Pages</h1>
      <div className="grid md:grid-cols-4 gap-3 mb-5">
        <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search project..." className="rounded-xl bg-white/10 border border-white/10 px-3 py-2" />
        <select value={developer} onChange={(e) => setDeveloper(e.target.value)} className="rounded-xl bg-[#0d1320] border border-white/10 px-3 py-2"> <option value="all">All developers</option>{developers.map((d) => <option key={d} value={d}>{d}</option>)} </select>
        <select value={location} onChange={(e) => setLocation(e.target.value)} className="rounded-xl bg-[#0d1320] border border-white/10 px-3 py-2"> <option value="all">All locations</option>{locations.map((l) => <option key={l} value={l}>{l}</option>)} </select>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value as 'title' | 'price')} className="rounded-xl bg-[#0d1320] border border-white/10 px-3 py-2"><option value="title">Sort by title</option><option value="price">Sort by price</option></select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  );
}
