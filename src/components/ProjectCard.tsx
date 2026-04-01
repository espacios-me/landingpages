import { Link } from 'react-router-dom';
import type { Project } from '../types/project';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link to={`/project/${project.slug}`} className="rounded-2xl border border-white/10 bg-white/6 p-3 hover:bg-white/10 transition block">
      <img src={project.heroImage} alt={project.title} className="h-44 w-full rounded-xl object-cover" />
      <div className="mt-3 text-sm font-semibold">{project.title}</div>
      <div className="text-xs text-white/65">{project.location}</div>
      <div className="mt-1 text-xs text-white/80">{project.price}</div>
    </Link>
  );
}
