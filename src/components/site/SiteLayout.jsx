import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { base44 } from "@/api/base44Client";
import { LanguageProvider } from "@/components/i18n/LanguageProvider";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";

export default function SiteLayout() {
  const [user, setUser] = useState(null);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    base44.auth.me().then(setUser).catch(() => setUser(null));
  }, []);

  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-background text-foreground font-body">
        <SiteHeader />
        <main className="flex-1">
          <Outlet context={{ user }} />
        </main>
        <SiteFooter user={user} />
      </div>
    </LanguageProvider>
  );
}