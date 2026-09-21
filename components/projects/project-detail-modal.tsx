"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import { useEffect, useRef } from "react";
import type { Project } from "@/types/portfolio";

type ProjectDetailModalProps = { project: Project | null; onClose: () => void };

export function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!project) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKeyDown);
    return () => { document.body.style.overflow = previousOverflow; window.removeEventListener("keydown", onKeyDown); };
  }, [project, onClose]);

  return <AnimatePresence>{project && <motion.div className="project-modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduceMotion ? 0 : 0.22 }} onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
    <motion.article role="dialog" aria-modal="true" aria-labelledby="project-modal-title" className="project-modal" initial={reduceMotion ? false : { opacity: 0, scale: 0.965, y: 14 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.97, y: 8 }} transition={{ type: "spring", stiffness: 360, damping: 30, mass: 0.72 }} onMouseDown={(event) => event.stopPropagation()}>
      <button ref={closeButtonRef} type="button" className="project-modal-close" onClick={onClose} aria-label="Close project details"><X size={19} aria-hidden="true" /></button>
      <div className="project-modal-image">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) calc(100vw - 24px), 720px"
          className="object-cover"
          priority
        />
      </div>

      <div className="project-modal-content">
        <p className="project-modal-category">{project.category}</p>
        <h2 id="project-modal-title">{project.title}</h2>
        <p className="project-modal-description">{project.description}</p>
        {project.details && <p className="project-modal-details">{project.details}</p>}

        <div className="project-modal-tech" aria-label="Technologies used">
          {project.tech.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        <div className="project-modal-actions">
          {project.githubUrl && project.githubUrl !== "#" && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open GitHub repository for ${project.title}`}
            >
              <Github size={17} /> Github
            </a>
          )}

          {project.liveUrl && project.liveUrl !== "#" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open live demo for ${project.title}`}
            >
              <ExternalLink size={17} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  </motion.div>}</AnimatePresence>;
}
