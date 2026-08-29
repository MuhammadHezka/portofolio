import Image from "next/image";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { gallery } from "@/data/portfolio";

export function GallerySection() {
  return (
    <section id="gallery" className="section-spacing">
      <div className="section-shell">
        <Reveal>
          <p className="section-eyebrow">Gallery</p>
          <h2 className="section-title text-balance">
            Fragments from the making process.
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {gallery.map((item, index) => (
            <Reveal key={item.src} delay={index * 0.08} scale>
              <GlassCard className="group overflow-hidden p-3">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[20px]">
                  <Image
                    src={item.src}
                    alt={item.caption}
                    fill
                    sizes="(max-width: 768px) 92vw, 25vw"
                    data-image-reveal
                    className="object-cover transition duration-[800ms] ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/75 via-transparent to-transparent p-5 opacity-0 transition duration-300 group-hover:opacity-100">
                    <p className="text-sm">{item.caption}</p>
                  </div>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
