import React from "react";
import { Mail, CheckCircle2 } from "lucide-react";
import { base44 } from "@/api/base44Client";

export default function SubscribeSection({ user }) {
  return (
    <section id="updates" className="scroll-mt-24 py-20 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-primary text-primary-foreground p-8 sm:p-14 text-center">
          <div className="w-14 h-14 rounded-2xl bg-primary-foreground/15 flex items-center justify-center mx-auto mb-6">
            <Mail className="w-7 h-7" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold mb-4">Know when we open</h2>
          <p className="text-primary-foreground/85 text-lg max-w-2xl mx-auto leading-relaxed">
            You don't need an account to visit our website. But if you create a free account, we'll email you every
            time we announce a food distribution or event.
          </p>
          {user ? (
            <p className="mt-8 inline-flex items-center gap-2 font-semibold bg-primary-foreground/15 px-6 py-3 rounded-full">
              <CheckCircle2 className="w-5 h-5" /> You're signed up — emails go to {user.email}
            </p>
          ) : (
            <button
              onClick={() => base44.auth.redirectToLogin(window.location.href)}
              className="mt-8 px-8 py-4 rounded-full bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-colors"
            >
              Sign up for email updates
            </button>
          )}
        </div>
      </div>
    </section>
  );
}