import type { Project } from "./projects-data";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="border-t border-black/20 py-6">
      <p className="text-sm font-medium text-[#7d211e]">{String(index + 1).padStart(2, "0")}</p>
      <h3 className="mt-8 text-xl font-semibold">{project.title}</h3>
      <p className="mt-3 text-sm leading-6 text-black/65">{project.description}</p>
    </article>
  );
}
