import React, { useEffect, useState } from "react";
import { Plus, Megaphone } from "lucide-react";
import { base44 } from "@/api/base44Client";
import { useToast } from "@/components/ui/use-toast";
import AnnouncementForm from "@/components/announcements/AnnouncementForm";
import AnnouncementItem from "@/components/site/AnnouncementItem";
import { emailAnnouncement } from "@/lib/announcementEmail";

export default function AnnouncementsSection({ user }) {
  const [items, setItems] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const { toast } = useToast();
  const isAdmin = user?.role === "admin";

  const load = async () => {
    const data = await base44.entities.Announcement.list("-date", 50);
    setItems(data.sort((a, b) => (b.is_pinned ? 1 : 0) - (a.is_pinned ? 1 : 0)));
  };
  useEffect(() => { load(); }, []);

  const handleSubmit = async (data) => {
    const created = await base44.entities.Announcement.create(data);
    setShowForm(false);
    load();
    toast({ title: "Announcement published", description: "Emailing registered visitors…" });
    emailAnnouncement(created).then((count) => toast({ title: "Emails sent", description: `${count} people were notified.` }));
  };

  return (
    <section id="announcements" className="scroll-mt-24 py-20 sm:py-28 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="uppercase tracking-[0.25em] text-xs font-semibold text-accent mb-4">Announcements</p>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold">When we're open & what's happening</h2>
          </div>
          {isAdmin && !showForm && (
            <button onClick={() => setShowForm(true)} className="flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90">
              <Plus className="w-4 h-4" /> New announcement
            </button>
          )}
        </div>
        {showForm && <div className="mb-10"><AnnouncementForm onSubmit={handleSubmit} onCancel={() => setShowForm(false)} /></div>}
        {items === null ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => <div key={i} className="h-72 rounded-2xl bg-card animate-pulse" />)}
          </div>
        ) : items.length === 0 ? (
          <div className="text-center py-16 bg-card rounded-2xl border border-border">
            <Megaphone className="w-10 h-10 mx-auto text-primary mb-4" />
            <p className="font-heading text-xl font-semibold">No announcements right now</p>
            <p className="text-muted-foreground mt-2">Check back soon, or sign up below to get an email when we open.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.slice(0, 9).map((a) => <AnnouncementItem key={a.id} a={a} />)}
          </div>
        )}
      </div>
    </section>
  );
}