import Image from "next/image";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { stats } from "@/data/portfolio";

export function AboutSection() {
  return (
    <section id="about" className="section-spacing">
      <div className="section-shell grid items-center gap-16 lg:grid-cols-[.9fr_1.1fr]">
        <Reveal>
          <GlassCard className="p-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[20px]">
              <Image
                src="/images/hez-about.jpeg"
                alt="Workspace and collaboration"
                fill
                sizes="(max-width: 1024px) 90vw, 480px"
                className="object-cover"
              />
            </div>
          </GlassCard>
        </Reveal>
        <div>
          <Reveal>
            <p className="section-eyebrow">About</p>
            <h2 className="section-title text-balance">
              Engineering with adaptability, curiosity, and purpose.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="body-copy mt-8">
             I’m someone who adapts quickly, enjoys working with different people, and believes that good work is rarely built alone.
             My background combines software development, database management, and everyday digital workflows. 
             I work with technologies such as PHP, Laravel, Java, SQL, MySQL, PostgreSQL, and other tools to build useful and reliable software. 
             I’m also comfortable with Microsoft Office, especially Excel and Word, and understand the practical side of office work and
             information management.
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 0.06}>
                <GlassCard className="p-6 md:p-8">
                  <p className="text-3xl font-[650] md:text-4xl">{stat.value}</p>
                  <p className="mt-2 text-sm text-muted">{stat.label}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
