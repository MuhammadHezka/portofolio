import Image from "next/image";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { posts } from "@/data/portfolio";

export function BlogSection() {
  return (
    <section id="blog" className="section-spacing">
      <div className="section-shell">
        <Reveal>
          <p className="section-eyebrow">Blog</p>
          <h2 className="section-title">Recent notes.</h2>
        </Reveal>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {posts.map((post, index) => (
            <Reveal key={post.title} delay={index * 0.08}>
              <GlassCard className="group overflow-hidden p-4">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[20px]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 92vw, 33vw"
                    data-image-reveal
                    className="object-cover transition duration-[800ms] ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-4">
                  <p className="text-[13px] font-medium text-muted">{post.date}</p>
                  <h3 className="mt-3 text-xl font-[650] leading-7 tracking-[-0.03em]">{post.title}</h3>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
