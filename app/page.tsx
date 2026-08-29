import { AboutSection } from "@/components/sections/about-section";
import { BlogSection } from "@/components/sections/blog-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { Footer } from "@/components/sections/footer";
import { GallerySection } from "@/components/sections/gallery-section";
import { GsapScrollEffects } from "@/components/gsap-scroll-effects";
import { HeroSection } from "@/components/sections/hero-section";
import { Navigation } from "@/components/sections/navigation";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <GsapScrollEffects />
      <Navigation />
      <main>
        {/* Urutan section dibuat seperti alur membaca cerita portfolio. */}
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <GallerySection />
        <TestimonialsSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </SmoothScrollProvider>
  );
}
