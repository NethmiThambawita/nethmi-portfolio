"use client";

import Reveal from "@/components/Reveal";
import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";
import data from "@/lib/data";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden py-20 sm:py-28 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/25 to-transparent" />

      <Container>
        {/* HEADER */}
        <div className="mb-12 sm:mb-16">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-emerald-400">
            {"// projects"}
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Selected <span className="text-emerald-400">work</span>
          </h2>

          <p className="mt-4 max-w-2xl text-sm text-gray-400 sm:text-base">
            Client engagements, research work, and personal projects across
            full-stack web, mobile, and data reporting systems.
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {data.projects.map((project, i) => (
            <Reveal key={project.id} delay={0.06 * i}>
              <ProjectCard project={project} index={i} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
