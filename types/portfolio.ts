import type { LucideIcon } from "lucide-react";

export type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  size: "large" | "wide" | "tall" | "small";
};

export type TimelineItem = {
  year: string;
  title: string;
  label: string;
  description: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};
