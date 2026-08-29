import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-line py-12">
      <div className="section-shell flex flex-col gap-6 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <p>&quot;Build softly. Ship precisely.&quot;</p>
        <p>Copyright © 2026 Muhammad Hezka.</p>
        <a href="#home" className="inline-flex items-center gap-2 text-foreground transition hover:text-accent">
          Back to Top <ArrowUp size={16} />
        </a>
      </div>
    </footer>
  );
}
