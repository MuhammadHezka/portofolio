import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { socials } from "@/data/portfolio";

export function ContactSection() {
  return (
    <section id="contact" className="section-spacing">
      <div className="section-shell">
        <Reveal>
          <GlassCard className="grid gap-12 p-6 md:p-8 lg:grid-cols-[.9fr_1.1fr]">
            <div>
              <p className="section-eyebrow">Contact</p>
              <h2 className="section-title text-balance">
                Let&apos;s build something precise.
              </h2>
              <p className="body-copy mt-8">
                Tell me the idea, problem, or product you want to build. I&apos;ll help turn it into a clear system.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className="inline-flex size-11 items-center justify-center rounded-full border border-line bg-foreground/5 text-muted transition duration-[250ms] hover:-translate-y-1 hover:text-foreground"
                      aria-label={social.label}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
            <form className="space-y-4">
              {/* Form ini masih static; sambungkan ke API route atau form service saat deploy. */}
              <input className="w-full rounded-[20px] border border-line bg-foreground/5 px-5 py-4 text-base text-foreground outline-none transition duration-[250ms] placeholder:text-muted focus:border-accent" placeholder="Name" />
              <input className="w-full rounded-[20px] border border-line bg-foreground/5 px-5 py-4 text-base text-foreground outline-none transition duration-[250ms] placeholder:text-muted focus:border-accent" placeholder="Email" type="email" />
              <textarea className="min-h-40 w-full resize-none rounded-[20px] border border-line bg-foreground/5 px-5 py-4 text-base text-foreground outline-none transition duration-[250ms] placeholder:text-muted focus:border-accent" placeholder="Project or message" />
              <Button className="w-full" type="button">
                Send Message <Send size={18} />
              </Button>
            </form>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
