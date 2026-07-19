"use client";

import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/types/project";

type Props = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: Props) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-emerald-500/10 bg-black/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/40 hover:shadow-[0_0_46px_rgba(16,185,129,0.14)]">
      {/* Glow */}
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
        style={{ background: "var(--gradient-hero)" }}
      />

      <div className="flex flex-1 flex-col p-6 lg:p-7">
        {/* TOP BAR */}
        <div className="mb-5 flex items-start justify-between">
          <span className="font-mono text-xs text-gray-500">
            {String(index + 1).padStart(2, "0")}
          </span>

          <div className="flex gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-emerald-500/20 p-2 text-gray-400 transition hover:border-emerald-400 hover:text-emerald-300"
              >
                <Github size={14} />
              </a>
            )}

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-emerald-500/20 p-2 text-gray-400 transition hover:border-emerald-400 hover:text-emerald-300"
              >
                <ArrowUpRight size={14} />
              </a>
            )}
          </div>
        </div>

        {/* TITLE */}
        <h3 className="mb-2 text-xl font-semibold text-white group-hover:text-emerald-300">
          {project.name}
        </h3>

        {/* DESCRIPTION */}
        <p className="mb-5 flex-1 text-sm text-gray-400">
          {project.description}
        </p>

        {/* PROJECT TYPE BADGES */}
        <div className="mb-4 flex flex-wrap gap-2">
          <span className="rounded-full border border-teal-400/30 bg-teal-500/10 px-2.5 py-1 text-[11px] text-teal-300 capitalize">
            {project.category}
          </span>

          <span className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-2.5 py-1 text-[11px] text-cyan-300 capitalize">
            {project.collaboration}
          </span>

          {project.featured && (
            <span className="rounded-full border border-emerald-400/40 bg-emerald-500/10 px-2.5 py-1 text-[11px] text-emerald-300">
              featured
            </span>
          )}
        </div>

        {/* TECH STACK */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-emerald-500/20 bg-emerald-500/5 px-2.5 py-1 text-[11px] text-emerald-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
