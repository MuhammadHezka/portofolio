"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";
import { X } from "lucide-react";

export type ContentPreview = {
  title: string;
  eyebrow: string;
  description?: string;
  image?: string;
};

type ContentPreviewModalProps = {
  item: ContentPreview | null;
  onClose: () => void;
};

export function ContentPreviewModal({ item, onClose }: ContentPreviewModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!item) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKeyDown);
    return () => { document.body.style.overflow = previousOverflow; window.removeEventListener("keydown", onKeyDown); };
  }, [item, onClose]);

  return <AnimatePresence>{item && <motion.div className="project-modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduceMotion ? 0 : 0.22 }} onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
    <motion.article role="dialog" aria-modal="true" aria-labelledby="content-preview-title" className="project-modal content-preview-modal" initial={reduceMotion ? false : { opacity: 0, scale: 0.965, y: 14 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.97, y: 8 }} transition={{ type: "spring", stiffness: 360, damping: 30, mass: 0.72 }} onMouseDown={(event) => event.stopPropagation()}>
      <button ref={closeButtonRef} type="button" className="project-modal-close" onClick={onClose} aria-label="Close preview"><X size={19} aria-hidden="true" /></button>
      {item.image && <div className="project-modal-image"><Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) calc(100vw - 24px), 720px" className="object-contain object-center" priority /></div>}
      <div className="project-modal-content"><p className="project-modal-category">{item.eyebrow}</p><h2 id="content-preview-title">{item.title}</h2>{item.description && <p className="project-modal-description">{item.description}</p>}</div>
    </motion.article>
  </motion.div>}</AnimatePresence>;
}
