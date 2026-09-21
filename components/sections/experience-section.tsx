"use client";

import { useRef, useState } from "react";
import { ContentPreview, ContentPreviewModal } from "@/components/ui/content-preview-modal";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { timeline } from "@/data/portfolio";

export function ExperienceSection() {
  const [selectedItem, setSelectedItem] = useState<ContentPreview | null>(null);
  const lastTrigger = useRef<HTMLButtonElement>(null);

  function closeModal() {
    setSelectedItem(null);
    window.setTimeout(() => lastTrigger.current?.focus(), 0);
  }

  return (
    <section id="experience" className="section-spacing">
      <div className="section-shell grid gap-16 lg:grid-cols-[.8fr_1.2fr]">
        <Reveal>
          <div className="sticky top-28">
            <p className="section-eyebrow">Timeline</p>
            <h2 className="section-title text-balance">
              A quiet accumulation of reps.
            </h2>
          </div>
        </Reveal>
        <div className="relative space-y-6 before:absolute before:left-6 before:top-2 before:h-full before:w-px before:bg-line">
          {timeline.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08} direction={index % 2 === 0 ? "right" : "left"}>
              <div className="relative pl-16">
                <span className="absolute left-[18px] top-8 z-10 size-3 rounded-full bg-accent shadow-[0_0_0_6px_hsl(var(--accent)/.12)]" />
                <GlassCard className="p-0">
                  <button
                    type="button"
                    className="block w-full rounded-[28px] p-8 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                    onClick={(event) => {
                      lastTrigger.current = event.currentTarget;
                      setSelectedItem({ title: item.title, eyebrow: `${item.year} · ${item.label}`, description: item.description });
                    }}
                    aria-label={`Open ${item.title}`}
                  >
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex h-[30px] items-center rounded-full bg-accent/15 px-3 text-[13px] font-medium text-accent">
                      {item.year}
                    </span>
                    <span className="text-[13px] font-medium text-muted">{item.label}</span>
                  </div>
                  <h3 className="mt-6 text-[30px] font-[650] leading-tight tracking-[-0.03em]">{item.title}</h3>
                  <p className="body-copy mt-4 text-base">{item.description}</p>
                  </button>
                </GlassCard>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <ContentPreviewModal item={selectedItem} onClose={closeModal} />
    </section>
  );
}
