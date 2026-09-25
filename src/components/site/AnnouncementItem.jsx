import React from "react";
import { CalendarDays, MapPin, Pin } from "lucide-react";
import { formatDate, formatTime } from "@/lib/site";

const LABELS = {
  food_distribution: "Food Distribution",
  community_event: "Community Event",
  volunteer: "Volunteer",
  donation_drive: "Donation Drive",
  news: "News",
};

export default function AnnouncementItem({ a }) {
  const time = a.start_time ? ` · ${formatTime(a.start_time)}${a.end_time ? ` – ${formatTime(a.end_time)}` : ""}` : "";
  return (
    <article className="bg-card rounded-2xl border border-border overflow-hidden flex flex-col">
      {a.image_url && <img src={a.image_url} alt={a.title} className="h-48 w-full object-cover" />}
      <div className="p-6 flex flex-col gap-3 flex-1">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-semibold uppercase tracking-wide bg-secondary text-secondary-foreground px-3 py-1 rounded-full">
            {LABELS[a.category] || "News"}
          </span>
          {a.is_pinned && <span className="flex items-center gap-1 text-xs font-semibold text-accent"><Pin className="w-3 h-3" /> Pinned</span>}
        </div>
        <h3 className="font-heading text-xl font-semibold leading-snug">{a.title}</h3>
        <p className="flex items-center gap-2 text-sm font-medium text-primary">
          <CalendarDays className="w-4 h-4 shrink-0" /> {formatDate(a.date)}{time}
        </p>
        <p className="text-muted-foreground whitespace-pre-line leading-relaxed">{a.description}</p>
        {a.address && (
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(a.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto pt-2 flex items-start gap-2 text-sm font-medium hover:text-primary"
          >
            <MapPin className="w-4 h-4 mt-0.5 shrink-0" /> {a.address}
          </a>
        )}
      </div>
    </article>
  );
}