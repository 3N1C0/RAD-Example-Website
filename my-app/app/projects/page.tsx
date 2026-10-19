import type { Metadata } from "next";
import ProjectCard from "../project-card";
import { projects } from "../projects-data";
import SiteContact from "../site-contact";
import SiteHeader from "../site-header";

export const metadata: Metadata = {
  title: "Projects | Robotics and Drone Club",
};

export default function ProjectsPage() {
  return (
    <main id="top" className="min-h-screen bg-[#1A1A1A] font-sans text-white">
      <SiteHeader />

      <section className="bg-[#eeeeea] px-5 py-24 text-[#1A1A1A] sm:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7d211e]">
            Projects
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
            From first sketch to first flight.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-black/65 sm:text-lg">
            Our current project list for Fall 2026.
          </p>
          <div className="mt-14 grid gap-x-10 md:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <SiteContact backToTopHref="#top" />
    </main>
  );
}
