import { base44 } from "@/api/base44Client";
import { SITE, formatDate, formatTime } from "@/lib/site";

const esc = (s = "") => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// Emails a new announcement to every registered user. Returns how many were sent.
export async function emailAnnouncement(a) {
  const users = (await base44.entities.User.list()).filter((u) => u.email);
  const when = `${formatDate(a.date)}${a.start_time ? ` · ${formatTime(a.start_time)}` : ""}${a.end_time ? ` – ${formatTime(a.end_time)}` : ""}`;
  const html = `<div style="font-family:Arial,sans-serif;background:#FBF6EE;padding:24px;color:#4A2A12">
<div style="max-width:560px;margin:0 auto;background:#fff;border-radius:14px;overflow:hidden">
<div style="background:#8B4513;color:#fff;padding:28px 24px;text-align:center"><h1 style="margin:0;font-size:22px">${esc(SITE.name)}</h1></div>
<div style="padding:28px 24px">
<h2 style="margin:0 0 12px;font-size:22px">${esc(a.title)}</h2>
<p style="margin:0 0 16px;color:#8B4513;font-weight:bold">${esc(when)}</p>
<p style="line-height:1.6;white-space:pre-line">${esc(a.description)}</p>
${a.address ? `<p><strong>Location:</strong> ${esc(a.address)}</p>` : ""}
<p style="text-align:center;margin-top:28px"><a href="${window.location.origin}/#announcements" style="background:#8B4513;color:#fff;padding:12px 26px;border-radius:24px;text-decoration:none;font-weight:bold">View on our website</a></p>
</div>
<div style="padding:18px 24px;background:#F5EFE6;font-size:12px;text-align:center;color:#8B4513">You receive this because you have an account on our website. To stop these emails, contact us at ${esc(SITE.email)}.</div>
</div></div>`;
  const results = await Promise.allSettled(
    users.map((u) =>
      base44.integrations.Core.SendEmail({ from_name: SITE.name, to: u.email, subject: `${a.title} — ${formatDate(a.date)}`, body: html })
    )
  );
  return results.filter((r) => r.status === "fulfilled").length;
}