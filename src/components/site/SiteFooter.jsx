import React from "react";
import { Link } from "react-router-dom";
import { base44 } from "@/api/base44Client";
import { SITE } from "@/lib/site";

export default function SiteFooter({ user }) {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-heading text-2xl font-semibold mb-3">{SITE.name}</p>
          <p className="text-background/70 max-w-sm leading-relaxed">
            A non-profit food pantry serving families in Charlotte County, Florida with food, dignity and love.
          </p>
          <p className="mt-4 text-background/70 text-sm">{SITE.phone} · {SITE.email}</p>
        </div>
        <div>
          <p className="font-semibold mb-3 uppercase text-xs tracking-widest text-background/60">Explore</p>
          <ul className="space-y-2 text-background/80">
            <li><a href="/#about" className="hover:text-background">About</a></li>
            <li><a href="/#announcements" className="hover:text-background">Announcements</a></li>
            <li><a href="/#gallery" className="hover:text-background">Gallery</a></li>
            <li><a href="/#contact" className="hover:text-background">Contact</a></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-3 uppercase text-xs tracking-widest text-background/60">Legal</p>
          <ul className="space-y-2 text-background/80">
            <li><Link to="/privacy" className="hover:text-background">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-background">Terms of Use</Link></li>
            <li><Link to="/disclaimer" className="hover:text-background">Disclaimer</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/15">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row gap-3 justify-between text-sm text-background/60">
          <p>© {year} {SITE.legalName} All rights reserved. Non-profit organization.</p>
          {user?.role === "admin" ? (
            <Link to="/AdminPortal" className="hover:text-background">Admin</Link>
          ) : !user ? (
            <button onClick={() => base44.auth.redirectToLogin(window.location.href)} className="text-left hover:text-background">Staff sign in</button>
          ) : null}
        </div>
      </div>
    </footer>
  );
}