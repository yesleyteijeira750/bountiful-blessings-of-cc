export const SITE = {
  name: "Bountiful Blessings of Charlotte County",
  legalName: "Bountiful Blessings of Charlotte County Inc.",
  logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e4114143e84ad0df65d068/512622c87_1762982225481.jpg",
  phone: "(941) 883-8439",
  phoneHref: "tel:+19418838439",
  email: "aguilesa@gmail.com",
  supportEmail: "yesleyteijeira750@gmail.com",
  domain: "bountifulblessingsofcharlottecountyinc.org",
};

export const formatTime = (t) =>
  t ? new Date(`2000-01-01T${t}`).toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" }) : "";

export const formatDate = (d) =>
  d ? new Date(`${d}T00:00:00`).toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" }) : "";