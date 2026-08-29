import { Reveal } from "@/components/ui/reveal";
import { skills } from "@/data/portfolio";

export function SkillsSection() {
  return (
    <section className="section-spacing">
      <div className="section-shell">
        <Reveal>
          <h2 className="section-title text-balance">
            Tools I reach for when ideas need to become real.
          </h2>
        </Reveal>
        <div className="mt-12 flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <Reveal key={skill} delay={index * 0.025}>
              <span className="inline-flex h-[30px] items-center rounded-full border border-line bg-foreground/5 px-3 text-[13px] font-medium text-foreground shadow-[0_10px_30px_hsl(var(--shadow)/.08)] backdrop-blur-xl transition duration-[250ms] hover:-translate-y-1 hover:border-accent/60 hover:bg-accent/10">
                {skill}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
