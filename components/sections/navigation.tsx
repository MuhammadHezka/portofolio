"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, Clock3, FileText, FolderGit2, Home, Images, UserRound } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { navigationItems } from "@/constants/navigation";

const mobileIcons = {
  "#home": Home,
  "#about": UserRound,
  "#projects": FolderGit2,
  "#experience": Clock3,
  "#gallery": Images,
  "#blog": FileText,
  "#contact": BriefcaseBusiness
};

export function Navigation() {
  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -24, x: "-50%" }}
        animate={{ opacity: 1, y: 0, x: "-50%" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed left-1/2 top-5 z-40 hidden w-[min(calc(100%-48px),860px)] -translate-x-1/2 rounded-[22px] border border-white/50 bg-background/68 p-1.5 shadow-[0_16px_48px_hsl(var(--shadow)/.14)] backdrop-blur-2xl md:block dark:border-white/10"
        aria-label="Primary navigation"
      >
        <div className="flex items-center justify-between gap-1">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-[16px] px-4 py-2.5 text-sm font-medium text-muted transition duration-200 hover:bg-foreground/[.07] hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent lg:px-5"
            >
              {item.label}
            </a>
          ))}
          <span className="mx-1 h-6 w-px bg-line/70" aria-hidden="true" />
          <ThemeToggle className="size-9 border-transparent bg-foreground/[.06]" />
        </div>
      </motion.nav>

      <motion.nav
        initial={{ opacity: 0, y: 24, x: "-50%" }}
        animate={{ opacity: 1, y: 0, x: "-50%" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed bottom-[max(12px,env(safe-area-inset-bottom))] left-1/2 z-40 w-[min(calc(100%-20px),440px)] -translate-x-1/2 rounded-[24px] border border-white/55 bg-background/72 p-1.5 shadow-[0_14px_42px_hsl(var(--shadow)/.18)] backdrop-blur-2xl md:hidden dark:border-white/10"
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between gap-0.5">
          {navigationItems.map((item) => {
            const Icon = mobileIcons[item.href as keyof typeof mobileIcons];

            return (
              <a
                key={item.href}
                href={item.href}
                className="inline-flex size-9 shrink-0 items-center justify-center rounded-[14px] text-muted transition duration-200 hover:bg-foreground/[.08] hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:size-10"
                aria-label={item.label}
                title={item.label}
              >
                <Icon className="size-[17px] sm:size-[18px]" strokeWidth={1.8} />
              </a>
            );
          })}
          <ThemeToggle className="size-9 shrink-0 rounded-[14px] border-transparent bg-foreground/[.06] sm:size-10" />
        </div>
      </motion.nav>
    </>
  );
}
