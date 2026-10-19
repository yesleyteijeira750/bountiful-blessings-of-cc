import React from "react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1800"
        alt="Volunteers sharing food with the community"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/75 to-foreground/40" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 sm:py-36 text-primary-foreground">
        <p className="uppercase tracking-[0.25em] text-xs sm:text-sm font-semibold text-accent mb-5">Charlotte County Food Pantry</p>
        <h1 className="font-heading text-4xl sm:text-6xl font-semibold leading-[1.05] max-w-3xl">
          Feeding families with dignity, hope and love.
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-primary-foreground/85 max-w-2xl leading-relaxed">
          Bountiful Blessings provides free food distributions and community support to our neighbors in need.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a href="/#announcements" className="px-7 py-3.5 rounded-full bg-accent text-accent-foreground font-semibold text-center hover:bg-accent/90 transition-colors">
            See Upcoming Distributions
          </a>
          <a href="/#updates" className="px-7 py-3.5 rounded-full border border-primary-foreground/60 font-semibold text-center hover:bg-primary-foreground/10 transition-colors">
            Get Email Updates
          </a>
        </div>
      </div>
    </section>
  );
}