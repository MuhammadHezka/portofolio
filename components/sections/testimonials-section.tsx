"use client";

import { Quote } from "lucide-react";
import { useRef, useState } from "react";
import { ContentPreview, ContentPreviewModal } from "@/components/ui/content-preview-modal";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { testimonials } from "@/data/portfolio";

export function TestimonialsSection() {
  const [selectedItem, setSelectedItem] = useState<ContentPreview | null>(null);
  const lastTrigger = useRef<HTMLButtonElement>(null);

  function closeModal() {
    setSelectedItem(null);
    window.setTimeout(() => lastTrigger.current?.focus(), 0);
  }

  return (
    <section className="section-spacing">
      <div className="section-shell">
        <Reveal>
          <div className="flex snap-x gap-6 overflow-x-auto pb-4">
            {testimonials.map((item) => (
              <GlassCard key={item.name} className="min-w-[min(86vw,680px)] snap-center p-8">
                <button
                  type="button"
                  onClick={(event) => {
                    lastTrigger.current = event.currentTarget;
                    setSelectedItem({ title: item.name, eyebrow: item.role, description: item.quote });
                  }}
                  className="w-full text-left"
                  aria-label={`Open quote from ${item.name}`}
                >
                  <Quote className="text-accent" size={30} />
                  <p className="mt-8 max-w-[600px] text-[22px] font-normal leading-[1.55] text-foreground md:text-2xl">
                    {item.quote}
                  </p>
                  <div className="mt-8">
                    <p className="font-[650]">{item.name}</p>
                    <p className="mt-1 text-sm text-muted">{item.role}</p>
                  </div>
                </button>
              </GlassCard>
            ))}
          </div>
        </Reveal>
      </div>
      <ContentPreviewModal item={selectedItem} onClose={closeModal} />
    </section>
  );
}
