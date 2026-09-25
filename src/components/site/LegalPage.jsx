import React from "react";

export default function LegalPage({ doc }) {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <p className="uppercase tracking-[0.25em] text-xs font-semibold text-accent mb-4">Legal</p>
      <h1 className="font-heading text-4xl sm:text-5xl font-semibold mb-3">{doc.title}</h1>
      <p className="text-muted-foreground mb-10">Last updated: {doc.updated}</p>
      {doc.intro && <p className="text-lg leading-relaxed mb-10">{doc.intro}</p>}
      <div className="space-y-10">
        {doc.sections.map((s) => (
          <section key={s.heading}>
            <h2 className="font-heading text-2xl font-semibold mb-3">{s.heading}</h2>
            {s.body.map((p, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed mb-3">{p}</p>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
}