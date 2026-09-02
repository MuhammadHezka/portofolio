import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import type { Project, SocialLink, TimelineItem } from "@/types/portfolio";

export const stats = [
  { label: "Years Learning", value: "3+" },
  { label: "Projects", value: "10+" },
  { label: "Clients", value: "10+" },
  { label: "Years of Experience", value: "1+" }
];

export const projects: Project[] = [
  {
    title: "Website Inventory Management",
    category: "full-stack development",
    description: "A web-based system for managing products, stock, and inventory data.",
    image: "/images/inventory-web.jpeg",
    tech: ["PHP", "SQL", "JavaScript"],
    liveUrl: "#",
    githubUrl: "https://github.com/MuhammadHezka?tab=overview&from=2026-08-01&to=2026-08-28",
    size: "large"
  },
  {
    title: "Accounting & Office Management",
    category: "Accounting",
    description: "Managing financial records, documents, and daily office tasks using Excel and Word.",
    image: "/images/project.jpeg",
    tech: ["Excel", "Word", "Finance"],
    liveUrl: "#",
    githubUrl: "https://github.com/MuhammadHezka?tab=overview&from=2026-08-01&to=2026-08-28",
    size: "wide"
  },
  {
    title: "Point of Sale (POS) System",
    category: "Sales & Inventory",
    description: "A simple POS system for handling sales, products, stock, and receipts.",
    image: "/images/payment-web.jpeg",
    tech: ["Laravel", "JavaScript", "Next.js"],
    liveUrl: "#",
    githubUrl: "https://github.com/MuhammadHezka?tab=overview&from=2026-08-01&to=2026-08-28",
    size: "tall"
  },
  
  {
    title: "Database Development",
    category: "database",
    description: "Designing and managing databases for applications and business data.",
    image: "/images/db-dev.jpeg",
    tech: ["SQL", "PostgreSQL", "MySQL"],
    liveUrl: "#",
    githubUrl: "https://github.com/MuhammadHezka?tab=overview&from=2026-08-01&to=2026-08-28",
    size: "small"
  }
];

export const skills = [
  "Java",
  "Spring Boot",
  "Laravel",
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind",
  "Python",
  "TensorFlow",
  "MySQL",
  "PostgreSQL",
  "Docker",
  "AWS",
  "Prompt Engineering"
];

export const timeline: TimelineItem[] = [
  {
    year: "2024",
    title: "Software Engineering Foundation",
    label: "Education",
    description:
      "Built my foundation in programming, algorithms, web development, databases, and software development while studying at vocational school."
  },

  {
    year: "2025",
    title: "College & Freelance Work",
    label: "Freelance",
    description:
      "Balanced college with freelance work, building websites, helping with MATLAB projects, and creating designs and digital products using tools like Canva."
  },

  {
    year: "2026",
    title: "Independent Projects & Advanced Freelance",
    label: "Experience",
    description:
      "Continuing my studies while taking on more advanced freelance work and building independent projects to strengthen my technical and problem-solving skills."
  }
];

export const gallery = [
  {
    src: "/images/gallery-one.jpeg",
    caption: "Interface experiments"
  },
  {
    src: "/images/gallery-two.jpeg",
    caption: "AI research notes"
  },
  {
    src: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=900&auto=format&fit=crop",
    caption: "Code and craft"
  },
  {
    src: "/images/gallery-three.jpeg",
    caption: "Quiet thinking space"
  }
];

export const testimonials = [
  {
    quote:
      "Once you stop learning, you start dying.",
    name: "albert einstein",
    role: "Physicist"
  },
  {
    quote:
      "A person who never made a mistake never tried anything new.",
    name: "Albert Einstein",
    role: "Physicist"
  }
];

export const posts = [
  {
    title: "Building AI Automation That Stays Human",
    date: "12 Jun 2026",
    image: "https://images.unsplash.com/photo-1675557009875-436f71457475?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Next.js App Router Learning Notes",
    date: "02 Mei 2026",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Why UI Details Make Products Feel Expensive",
    date: "18 Apr 2026",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000&auto=format&fit=crop"
  }
];

export const socials: SocialLink[] = [
  { label: "Github", href: "https://github.com/MuhammadHezka", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/", icon: Linkedin },
  { label: "Instagram", href: "https://instagram.com/hszkaa_", icon: Instagram },
  { label: "Email", href: "muhammadhezka@gmail.com", icon: Mail }
];
