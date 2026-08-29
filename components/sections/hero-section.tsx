"use client";

import { ArrowDown, MessageCircle } from "lucide-react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";

export function HeroSection() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.22], [0, -120]);
  const scale = useTransform(scrollYProgress, [0, 0.22], [1, 0.94]);

  return (
    <section id="home" className="relative overflow-hidden pt-32 md:pt-40">
      <div className="hero-ambient absolute inset-0" />
      <motion.div
        style={{ y, scale }}
        className="section-shell relative grid min-h-[760px] items-center gap-16 pb-32 lg:grid-cols-[1.08fr_.92fr]"
      >
        <div>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="section-eyebrow"
          >
            Personal Portfolio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 34, filter: "blur(14px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="hero-title text-balance font-display"
          >
            Muhammad Hezka
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.18 }}
            className="mt-8 flex flex-wrap gap-3 text-base font-medium text-muted md:text-lg"
          >
            <span>Software Engineer</span>
            <span className="text-line">/</span>
            <span>Data Engineer</span>
            <span className="text-line">/</span>
            <span>Problem Solver</span>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.28 }}
            className="body-copy mt-8 text-balance"
          >
            I build software, manage databases, and turn ideas into practical digital solutions.
             Experienced with Microsoft Office, Excel, Word, and everyday office workflows
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.38 }}
            className="mt-12 flex flex-wrap gap-4"
          >
            <Button asChild>
              <a href="#projects">
                View Projects <ArrowDown size={18} />
              </a>
            </Button>
            <Button asChild variant="ghost">
              <a href="#contact">
                Let&apos;s Talk <MessageCircle size={18} />
              </a>
            </Button>
          </motion.div>
        </div>

        <GlassCard className="mx-auto w-full max-w-[420px] p-4">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[20px]">
            <Image
              src="/images/hez-profile.jpeg"
              alt="Portrait placeholder for Muhammad Hezka"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 430px"
              data-image-reveal
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-white/10" />
          </div>
        </GlassCard>
      </motion.div>
    </section>
  );
}
