import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { SITE } from "@/lib/site";

const LINKS = [
  ["About", "/#about"],
  ["Announcements", "/#announcements"],
  ["Gallery", "/#gallery"],
  ["Contact", "/#contact"],
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
        <a href="/" className="flex items-center gap-3 min-w-0">
          <img src={SITE.logo} alt="Bountiful Blessings logo" className="h-12 w-auto rounded-md" />
          <div className="leading-tight min-w-0">
            <p className="font-heading text-lg font-semibold truncate">Bountiful Blessings</p>
            <p className="text-[11px] text-muted-foreground uppercase tracking-[0.2em]">of Charlotte County</p>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-1">
          {LINKS.map(([label, href]) => (
            <a key={href} href={href} className="px-3 py-2 text-sm font-medium hover:text-primary transition-colors">{label}</a>
          ))}
          <a href="/#updates" className="ml-3 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors">
            Get Updates
          </a>
        </nav>
        <button className="md:hidden p-2 rounded-md hover:bg-secondary" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {open && (
        <nav className="md:hidden border-t border-border px-4 py-3 flex flex-col bg-background">
          {[...LINKS, ["Get Updates", "/#updates"]].map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)} className="py-3 font-medium border-b border-border last:border-0">{label}</a>
          ))}
        </nav>
      )}
    </header>
  );
}