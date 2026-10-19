import React from "react";
import { Apple, Users, HandHeart, Package } from "lucide-react";

const ITEMS = [
  { icon: Apple, title: "Food Distributions", text: "Regular free distributions of fresh produce, groceries and pantry staples." },
  { icon: Users, title: "Community Events", text: "Gatherings that bring neighbors together and connect families to support." },
  { icon: HandHeart, title: "Volunteering", text: "Neighbors helping neighbors — every pair of hands makes a difference." },
  { icon: Package, title: "Donation Drives", text: "Collecting food and essentials so no family in our county goes hungry." },
];

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid gap-14 lg:grid-cols-2 items-start">
        <div>
          <p className="uppercase tracking-[0.25em] text-xs font-semibold text-accent mb-4">Who we are</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold leading-tight mb-6">
            A non-profit rooted in faith and service to Charlotte County.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Bountiful Blessings of Charlotte County Inc. is a non-profit food pantry dedicated to making sure every
            family has food on the table. We welcome everyone with compassion and respect, no questions asked.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {ITEMS.map(({ icon: Icon, title, text }) => (
            <div key={title} className="p-6 rounded-2xl bg-card border border-border">
              <div className="w-12 h-12 rounded-xl bg-secondary text-primary flex items-center justify-center mb-4">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}