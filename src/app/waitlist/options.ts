// Plain shared constants for the waitlist form and its server action.
// Kept out of actions.ts because a "use server" module may only export
// async functions.

export const AUDIENCE_OPTIONS = [
  { value: "student", label: "Student" },
  { value: "freelancer", label: "Freelancer / solo" },
  { value: "business", label: "Business owner" },
  { value: "professional", label: "Working professional" },
  { value: "switcher", label: "Career switcher" },
  { value: "educator", label: "Educator / team lead" },
  { value: "other", label: "Something else" },
] as const;

export const TOPIC_OPTIONS = [
  {
    value: "software",
    label: "Software development",
    desc: "Build real apps with AI as your pair.",
  },
  {
    value: "design",
    label: "Design",
    desc: "UI, UX, and product design workflows.",
  },
  {
    value: "video",
    label: "Video",
    desc: "AI-assisted production and editing.",
  },
  {
    value: "seo",
    label: "SEO",
    desc: "Rank and grow with AI-driven content.",
  },
  {
    value: "automation",
    label: "Automation",
    desc: "Agents and workflows that run themselves.",
  },
  {
    value: "ai-foundations",
    label: "AI fundamentals",
    desc: "Prompting and tools, from the ground up.",
  },
  {
    value: "data",
    label: "Data & analytics",
    desc: "Turn data into decisions with AI.",
  },
  {
    value: "marketing",
    label: "Marketing & content",
    desc: "Copy, social, and campaigns with AI.",
  },
  {
    value: "business",
    label: "AI for business & ops",
    desc: "Cut busywork across your operations.",
  },
  {
    value: "nocode",
    label: "No-code app building",
    desc: "Ship useful tools without writing code.",
  },
] as const;

export const EXPERIENCE_OPTIONS = [
  { value: "new", label: "New to this" },
  { value: "some", label: "Some experience" },
  { value: "experienced", label: "Experienced" },
] as const;

export const FORMAT_OPTIONS = [
  { value: "live", label: "Live online cohort" },
  { value: "self-paced", label: "Self-paced" },
  { value: "mentorship", label: "1:1 mentorship" },
  { value: "in-person", label: "In person, in Iligan" },
  { value: "unsure", label: "No preference yet" },
] as const;

export function labelFor(
  options: ReadonlyArray<{ value: string; label: string }>,
  value: string,
) {
  return options.find((o) => o.value === value)?.label ?? value;
}
