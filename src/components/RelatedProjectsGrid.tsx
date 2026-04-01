import type { Project } from '../types/project';
import ProjectCard from './ProjectCard';

export default function RelatedProjectsGrid({ current, all }: { current: Project; all: Project[] }) {
  const related = all
    .filter((p) => p.slug !== current.slug)
    .sort((a, b) => Number(b.developer === current.developer) - Number(a.developer === current.developer))
    .slice(0, 6);

  return (
    <section className="mt-8">
      <h3 className="mb-3 text-lg font-semibold">Related Projects</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {related.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
