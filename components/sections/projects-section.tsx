"use client";

import { FileText, Github } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { ProjectDetailModal } from "@/components/projects/project-detail-modal";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { projects } from "@/data/portfolio";
import type { Project } from "@/types/portfolio";

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const lastTrigger = useRef<HTMLButtonElement>(null);

  function closeModal() {
    setSelectedProject(null);
    window.setTimeout(() => lastTrigger.current?.focus(), 0);
  }

  return (
    <section id="projects" className="section-spacing">
      <div className="section-shell">
        <Reveal>
          <p className="section-eyebrow">Projects</p>
          <h2 className="section-title text-balance">
            Selected work built like digital objects.
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:gap-6 md:grid-cols-2 lg:gap-7">
          {projects.map((project, index) => (
            <Reveal
              key={project.title}
              delay={index * 0.08}
              direction="right"
              className="min-w-0"
            >
              <GlassCard className="group flex h-full min-w-0 flex-col overflow-hidden rounded-[28px] border-foreground/[0.07] bg-surface/72 p-4 shadow-[0_16px_48px_hsl(var(--shadow)/.08)] transition-[transform,box-shadow,border-color] duration-200 hover:scale-100 hover:border-foreground/[0.13] hover:shadow-[0_24px_56px_hsl(var(--shadow)/.13)] sm:p-5">
                <div className="relative aspect-video w-full shrink-0 overflow-hidden rounded-[20px] bg-foreground/5">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 767px) calc(100vw - 64px), (max-width: 1180px) calc(50vw - 44px), 552px"
                    data-image-reveal
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 min-w-0 flex-col pt-5 sm:pt-6">
                  <p className="text-[13px] font-medium text-accent">{project.category}</p>
                  <h3 className="mt-2 text-[27px] font-[650] leading-[1.06] tracking-[-0.035em] text-foreground sm:text-[30px]">
                    {project.title}
                  </h3>
                  <p className="mt-3 line-clamp-2 text-[15px] leading-6 text-muted/80 sm:text-base sm:leading-7">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex min-h-[30px] items-center rounded-full border border-line/80 bg-foreground/[0.04] px-3 text-[13px] font-medium text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3 pt-1">
                    <Button
                      type="button"
                      className="min-h-11 px-5 sm:px-[22px]"
                      onClick={(event) => {
                        lastTrigger.current = event.currentTarget;
                        setSelectedProject(project);
                      }}
                    >
                      <FileText size={16} /> Description
                    </Button>
                    <Button asChild variant="ghost" className="min-h-11 px-5 sm:px-[22px]">
                      <a href={project.githubUrl} aria-label={`View GitHub repository for ${project.title}`}>
                        <Github size={16} /> Github
                      </a>
                    </Button>
                  </div>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
      <ProjectDetailModal project={selectedProject} onClose={closeModal} />
    </section>
  );
}
