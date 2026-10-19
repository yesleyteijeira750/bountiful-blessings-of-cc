import { SITE } from "@/lib/site";

const UPDATED = "September 2026";
const CONTACT = `${SITE.legalName} · Phone ${SITE.phone} · Email ${SITE.email}`;

export const PRIVACY = {
  title: "Privacy Policy",
  updated: UPDATED,
  intro: `${SITE.legalName} ("we", "us") is a non-profit organization. This policy explains what information we collect through our website and how we use it.`,
  sections: [
    { heading: "Information we collect", body: [
      "You can browse our website without creating an account or giving us any personal information.",
      "If you choose to create an account, we collect your name and email address so we can send you announcements. We may also collect basic technical information (such as browser type and pages visited) to keep the website working and secure.",
    ] },
    { heading: "How we use your information", body: [
      "We use your email address only to send you announcements about food distributions, events and other updates from our organization.",
      "We do not sell, rent or trade your personal information to anyone.",
    ] },
    { heading: "Sharing", body: [
      "We only share information with service providers that help us run the website and send emails, or when required by law.",
    ] },
    { heading: "Your choices", body: [
      "You may ask us at any time to stop sending you emails, to correct your information, or to delete your account and data by contacting us.",
    ] },
    { heading: "Children's privacy", body: [
      "Our website is not directed to children under 13 and we do not knowingly collect their personal information. If you believe a child has provided us information, please contact us and we will delete it.",
    ] },
    { heading: "Security", body: [
      "We use reasonable measures, including encrypted connections, to protect your information. No method of transmission over the internet is 100% secure.",
    ] },
    { heading: "Changes and contact", body: [
      "We may update this policy from time to time. The date above shows the latest version.",
      `Questions: ${CONTACT}.`,
    ] },
  ],
};

export const TERMS = {
  title: "Terms of Use",
  updated: UPDATED,
  intro: "By using this website you agree to these terms. If you do not agree, please do not use the website.",
  sections: [
    { heading: "Use of the website", body: [
      "This website is provided to share information about our food pantry, distributions and community events. You agree to use it only for lawful purposes and not to interfere with its operation.",
    ] },
    { heading: "Accounts", body: [
      "Creating an account is optional and only used to receive email updates. You are responsible for keeping your login information secure.",
    ] },
    { heading: "Content", body: [
      "All text, logos and photos on this website belong to our organization or are used with permission. You may not copy or reuse them for commercial purposes without our written consent.",
    ] },
    { heading: "Services and eligibility", body: [
      "Food assistance is provided as available and while supplies last. Schedules, locations and eligibility may change without notice.",
    ] },
    { heading: "Limitation of liability", body: [
      "The website is provided \"as is\". To the fullest extent permitted by law, our organization is not liable for any damages arising from your use of the website.",
    ] },
    { heading: "Governing law", body: [
      "These terms are governed by the laws of the State of Florida, United States.",
      `Contact: ${CONTACT}.`,
    ] },
  ],
};

export const DISCLAIMER = {
  title: "Disclaimer",
  updated: UPDATED,
  sections: [
    { heading: "General information", body: [
      "The information on this website is provided for general community information only. While we do our best to keep dates, times and locations accurate, events may be changed, delayed or cancelled due to weather, supply or other circumstances.",
    ] },
    { heading: "No professional advice", body: [
      "Nothing on this website is medical, nutritional, legal or financial advice. Please consult a qualified professional for your specific needs.",
    ] },
    { heading: "Food safety and allergies", body: [
      "Donated food is distributed in good faith. Please check labels and expiration dates and be aware of any allergies before consuming items. Food donations in Florida are distributed under the protection of the Bill Emerson Good Samaritan Food Donation Act.",
    ] },
    { heading: "External links", body: [
      "Links to other websites (such as maps) are provided for convenience. We are not responsible for their content or privacy practices.",
    ] },
    { heading: "Non-discrimination", body: [
      "We serve everyone in our community regardless of race, color, national origin, religion, sex, age, disability or any other protected status.",
    ] },
    { heading: "Non-profit status", body: [
      `${SITE.legalName} is a non-profit organization. Photos shown may include volunteers and community members who have given permission to be pictured.`,
      `Contact: ${CONTACT}.`,
    ] },
  ],
};