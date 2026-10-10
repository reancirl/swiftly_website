import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const SITE = {
  name: "Swiftlyph",
  url: "https://swiftlyph.com",
  shortName: "Swiftly",
  tagline: "Great software, built swiftly.",
  eyebrow: "Software Engineering Studio · Philippines",
  description:
    "Swiftlyph is a Philippine-based software engineering studio. We build, improve, and scale software through thoughtful engineering and AI-assisted workflows — available as a custom build, a monthly development subscription, or embedded forward deployed engineering.",
  email: "hello@swiftlyph.com",
  location: "Iligan, Philippines",
  price: {
    amount: "$1,498",
    currency: "USD",
    period: "month",
    display: "$1,498/month",
  },
  social: {
    facebook: "https://www.facebook.com/swiftlyph6022",
    instagram: "https://www.instagram.com/swiftlyph_/",
    linkedin: "https://www.linkedin.com/company/swiftly-ph/",
  },
  verse: {
    text: "The least of you will become a thousand, the smallest a mighty nation. I am the Lord; in its time I will do this swiftly.",
    reference: "Isaiah 60:22",
  },
} as const;
