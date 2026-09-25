import React from "react";
import { Phone, Mail, Globe } from "lucide-react";
import { SITE } from "@/lib/site";

const ITEMS = [
  { icon: Phone, label: "Call us", value: SITE.phone, href: SITE.phoneHref },
  { icon: Mail, label: "Email us", value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: Globe, label: "Website", value: SITE.domain, href: `https://${SITE.domain}` },
];

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="uppercase tracking-[0.25em] text-xs font-semibold text-accent mb-4">Contact</p>
        <h2 className="font-heading text-3xl sm:text-4xl font-semibold mb-10">We're here to help</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {ITEMS.map(({ icon: Icon, label, value, href }) => (
            <a key={label} href={href} className="p-6 rounded-2xl bg-card border border-border hover:border-primary transition-colors">
              <Icon className="w-6 h-6 text-primary mb-4" />
              <p className="text-sm text-muted-foreground">{label}</p>
              <p className="font-semibold break-all">{value}</p>
            </a>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          Website questions or technical issues: <a href={`mailto:${SITE.supportEmail}`} className="underline hover:text-primary">{SITE.supportEmail}</a>
        </p>
      </div>
    </section>
  );
}