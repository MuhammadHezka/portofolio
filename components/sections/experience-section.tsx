import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { timeline } from "@/data/portfolio";

export function ExperienceSection() {
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
                <GlassCard className="p-8">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex h-[30px] items-center rounded-full bg-accent/15 px-3 text-[13px] font-medium text-accent">
                      {item.year}
                    </span>
                    <span className="text-[13px] font-medium text-muted">{item.label}</span>
                  </div>
                  <h3 className="mt-6 text-[30px] font-[650] leading-tight tracking-[-0.03em]">{item.title}</h3>
                  <p className="body-copy mt-4 text-base">{item.description}</p>
                </GlassCard>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
