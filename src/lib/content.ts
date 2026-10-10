import {
  Code2,
  Layers,
  Boxes,
  LayoutDashboard,
  Plug,
  Sparkles,
  Workflow,
  ShoppingCart,
  Wrench,
  Gauge,
  Send,
  ListChecks,
  Cpu,
  Eye,
  Repeat,
  Rocket,
  ShieldCheck,
  Users,
  GitBranch,
  Terminal,
  PenTool,
  Database,
  MapPin,
  type LucideIcon,
} from "lucide-react";

/* ================================================================== */
/* Brand philosophy — the central identity                           */
/* ================================================================== */

export type Principle = {
  icon: LucideIcon;
  title: string;
  body: string;
};

export const principles: Principle[] = [
  {
    icon: Rocket,
    title: "Build swiftly",
    body: "Momentum matters. We move quickly — but swiftly means disciplined, not reckless. Speed never comes at the cost of quality or sound judgment.",
  },
  {
    icon: ListChecks,
    title: "Focus on what matters",
    body: "We solve the actual business problem and build only what is needed. Less complexity, fewer distractions, more progress.",
  },
  {
    icon: ShieldCheck,
    title: "Engineer with honesty",
    body: "Clear communication, transparency about limitations, and human accountability for every decision we ship. No unrealistic promises.",
  },
];

/** Typographic transitions for the philosophy band. */
export const lessMore: { less: string; more: string }[] = [
  { less: "Less complexity.", more: "More clarity." },
  { less: "Less busywork.", more: "More building." },
  { less: "Less noise.", more: "More progress." },
];

/* ================================================================== */
/* AI-assisted engineering                                            */
/* ================================================================== */

export const aiAssist: { icon: LucideIcon; label: string }[] = [
  { icon: ListChecks, label: "Requirements refinement" },
  { icon: PenTool, label: "Planning and scoping" },
  { icon: Code2, label: "Implementation" },
  { icon: Eye, label: "Code analysis and review" },
  { icon: Terminal, label: "Testing assistance" },
  { icon: GitBranch, label: "Documentation" },
  { icon: Cpu, label: "Repetitive engineering tasks" },
  { icon: Workflow, label: "Workflow automation" },
];

/* ================================================================== */
/* Three engagement models                                            */
/* ================================================================== */

export type EngagementModel = {
  id: string;
  motif: "custom" | "subscription" | "fde";
  index: string;
  icon: LucideIcon;
  title: string;
  line: string; // the "we build it for you" one-liner
  price: string;
  priceNote?: string;
  forWho: string;
  description: string;
  points: string[];
  cta: { label: string; href: string };
};

export const engagementModels: EngagementModel[] = [
  {
    id: "custom",
    motif: "custom",
    index: "01",
    icon: Boxes,
    title: "Custom Software Development",
    line: "We build it for you.",
    price: "Custom quotation",
    forWho: "Complete products and defined software projects.",
    description:
      "Our traditional agency model. Hire us to design and build a product, modernize an existing system, or deliver a larger engagement against an agreed scope and milestones.",
    points: [
      "Defined scope, milestones, and terms",
      "Discovery and technical approach",
      "Full design, build, and testing",
      "Deployment and ongoing support",
    ],
    cta: { label: "Explore custom development", href: "/custom-development" },
  },
  {
    id: "subscription",
    motif: "subscription",
    index: "02",
    icon: Repeat,
    title: "Development Subscription",
    line: "We build continuously.",
    price: "$1,498 / month",
    priceNote: "One active development workstream",
    forWho: "Businesses with ongoing, evolving development needs.",
    description:
      "A flat monthly subscription for continuous development. Keep an unlimited backlog of requests; we work through them one active workstream at a time.",
    points: [
      "Unlimited queued requests",
      "One active development workstream",
      "Senior-led, AI-assisted delivery",
      "Access to our proprietary platform",
    ],
    cta: { label: "Explore the subscription", href: "/subscription" },
  },
  {
    id: "fde",
    motif: "fde",
    index: "03",
    icon: Users,
    title: "Forward Deployed Engineering",
    line: "We build alongside you.",
    price: "Custom engagement",
    forWho: "Organizations needing embedded engineering expertise.",
    description:
      "A senior engineer or engineering pod embedded with your team — understanding your operations, deciding what to build, and bringing software into real use.",
    points: [
      "Embedded with your stakeholders",
      "Owns problems end to end",
      "Integration and automation focus",
      "Engagement terms agreed per client",
    ],
    cta: { label: "Explore FDE services", href: "/forward-deployed-engineering" },
  },
];

/* ================================================================== */
/* Shared step type                                                   */
/* ================================================================== */

export type Step = {
  n: string;
  icon: LucideIcon;
  title: string;
  body: string;
};

/* ================================================================== */
/* Custom software development                                        */
/* ================================================================== */

export const customFor: string[] = [
  "You have a product or system to build from the ground up",
  "You need an MVP shaped and shipped",
  "You are modernizing or rebuilding a legacy system",
  "You need a defined project with milestones and a fixed scope",
  "You want dedicated project delivery for a specific outcome",
];

export const customProcess: Step[] = [
  {
    n: "01",
    icon: Eye,
    title: "Understand",
    body: "We start with the business problem and the outcome you actually need — not a feature list.",
  },
  {
    n: "02",
    icon: ListChecks,
    title: "Define",
    body: "We identify the essential requirements and the capabilities that deliver real value.",
  },
  {
    n: "03",
    icon: PenTool,
    title: "Approach",
    body: "We determine an appropriate technical approach, then agree on scope, milestones, and terms.",
  },
  {
    n: "04",
    icon: Code2,
    title: "Build & test",
    body: "Our team designs, engineers, and tests the solution — AI-assisted, senior-reviewed.",
  },
  {
    n: "05",
    icon: Rocket,
    title: "Deliver",
    body: "We deploy, support, and improve according to the agreement.",
  },
];

export const customFaqs: Faq[] = [
  {
    q: "How is custom development priced?",
    a: "Custom projects are quoted individually. After we understand the problem and scope, we share a written proposal with milestones and commercial terms — there is no publicly advertised fixed price.",
  },
  {
    q: "Can you work with our existing system?",
    a: "Yes. We regularly improve, extend, integrate with, and modernize existing software rather than insisting on a rebuild. We will tell you honestly when a rebuild is — and is not — worth it.",
  },
  {
    q: "What happens after launch?",
    a: "We deploy and support according to the agreement. Many clients continue with us afterward through the Development Subscription for ongoing work, or a new scoped engagement for the next phase.",
  },
  {
    q: "Do you use AI to build our software?",
    a: "We use AI across requirements, implementation, testing, and documentation to work efficiently. Experienced engineers remain accountable for architecture, decisions, and everything we ship.",
  },
];

/* ================================================================== */
/* Forward Deployed Engineering                                       */
/* ================================================================== */

export const fdeFor: string[] = [
  "You have a problem that nobody currently owns end to end",
  "You need engineering that understands your business, not just your backlog",
  "You are integrating AI or automation into real operations",
  "You are modernizing legacy systems or connecting fragmented tools",
  "You need senior engineering embedded with your team for a season",
];

export const fdeResponsibilities: string[] = [
  "Work directly with your stakeholders and teams",
  "Understand business workflows and find technical bottlenecks",
  "Translate business requirements into engineering solutions",
  "Design and implement applications and integrations",
  "Build AI-powered workflows and automate repetitive operations",
  "Work with your existing software infrastructure",
  "Help deploy and improve production systems",
  "Transfer knowledge and document what we build",
];

export const fdeProcess: Step[] = [
  {
    n: "01",
    icon: Eye,
    title: "Discover",
    body: "Understand the business, technology, and operational challenges — and what success actually looks like.",
  },
  {
    n: "02",
    icon: Users,
    title: "Embed",
    body: "Collaborate closely with your stakeholders and existing teams under an engagement model we agree together.",
  },
  {
    n: "03",
    icon: Code2,
    title: "Engineer",
    body: "Implement solutions, integrations, automations, and applications — owning the problem end to end.",
  },
  {
    n: "04",
    icon: Rocket,
    title: "Deploy",
    body: "Put approved solutions into production and validate them against the outcome we set out to reach.",
  },
  {
    n: "05",
    icon: Repeat,
    title: "Evolve",
    body: "Improve the software and transfer knowledge as the engagement progresses, so value compounds over time.",
  },
];

export const fdeUseCases: { icon: LucideIcon; title: string }[] = [
  { icon: Sparkles, title: "AI integration into existing businesses" },
  { icon: Layers, title: "Legacy system modernization" },
  { icon: Workflow, title: "Operational automation" },
  { icon: Wrench, title: "Custom internal systems" },
  { icon: Database, title: "Data integration" },
  { icon: GitBranch, title: "Complex business processes" },
  { icon: Gauge, title: "Workflow optimization" },
  { icon: Rocket, title: "Rapid internal prototyping" },
  { icon: Plug, title: "Enterprise software integration" },
];

export const fdeDifferentiators: { title: string; body: string }[] = [
  {
    title: "vs. staff augmentation",
    body: "Staff augmentation adds hands to a backlog you already understand. A forward deployed engineer takes ownership of outcomes — helping decide what to build in the first place, not just working the tickets.",
  },
  {
    title: "vs. a traditional agency project",
    body: "A project delivers a defined scope and ends. An FDE stays embedded in your operating environment, brings continuity, and adapts as the business learns what it actually needs.",
  },
  {
    title: "vs. the development subscription",
    body: "The subscription works through a request queue at arm's length. FDE goes deeper — sitting with your team, understanding workflows, and owning problems from discovery through production.",
  },
];

export const fdeFaqs: Faq[] = [
  {
    q: "Is this just staff augmentation with a new name?",
    a: "No. Staff augmentation gives you extra hands who work to your direction. A forward deployed engineer takes ownership of outcomes — understanding the business, proposing what to build, implementing it, and helping put it into real use.",
  },
  {
    q: "Will the engineer be on-site or full-time?",
    a: "The working arrangement — remote or on-site, time commitment, communication rhythm, and time-zone overlap — is agreed per client. We do not promise on-site or full-time availability by default; we define what the engagement actually needs together.",
  },
  {
    q: "Is it one engineer or a team?",
    a: "Either. An engagement may involve a named senior engineer or an appropriately sized engineering pod, depending on the scope and the problem we are solving.",
  },
  {
    q: "How is FDE priced?",
    a: "As a custom monthly engagement or quotation, agreed with each client. It is a separate service — it is not part of the $1,498 Development Subscription.",
  },
  {
    q: "How does AI fit in?",
    a: "Our engineers are AI-native: we use AI to move faster on requirements, implementation, testing, and documentation. Humans remain accountable for architecture, decisions, and delivery.",
  },
];

/* ================================================================== */
/* The subscription — preserved commercial model                     */
/* ================================================================== */

export const subscriptionPlan = {
  name: "Development Subscription",
  price: "$1,498",
  period: "/ month",
  primaryFeature: "One active development workstream",
  summary:
    "Add as many requests as you need. We work through them one at a time, keeping development focused and moving forward.",
  features: [
    "Unlimited requests in your backlog",
    "One active development workstream at a time",
    "Senior-led software engineering",
    "Frontend and backend development",
    "Websites, web apps, and SaaS features",
    "Internal tools, dashboards, and APIs",
    "Bug fixes, maintenance, and improvements",
    "AI feature and automation development",
    "AI-assisted engineering workflow",
    "Access to our proprietary client platform",
    "Progress tracking and review workflow",
  ],
  clarifier:
    "One request is actively worked on at a time. Larger features are broken into manageable milestones.",
} as const;

export const howItWorks: Step[] = [
  {
    n: "01",
    icon: Send,
    title: "Subscribe",
    body: "Start your subscription and get access to our workflow platform. One flat monthly price, no scoping call required to begin.",
  },
  {
    n: "02",
    icon: ListChecks,
    title: "Submit requests",
    body: "Add as many features, bugs, enhancements, and integrations as you like. Prioritize your backlog however you need it.",
  },
  {
    n: "03",
    icon: Code2,
    title: "We build",
    body: "Our engineers take the top prioritized request into your single active workstream, assisted by AI tools and senior review.",
  },
  {
    n: "04",
    icon: Repeat,
    title: "Review & repeat",
    body: "You review the delivered work. Once it is approved or ready to advance, we move to the next request in your queue.",
  },
];

export const requestExamples: string[] = [
  "Build a new feature for your web app",
  "Fix a bug affecting production",
  "Add a dashboard or reporting view",
  "Integrate a third-party API or payment flow",
  "Add an AI-powered feature to your product",
  "Automate a repetitive internal process",
  "Improve performance and technical SEO",
  "Refactor or extend an existing system",
];

export const outsideScope: string[] = [
  "A dedicated full-time developer or exclusive engineering team",
  "A guaranteed number of hours or completed tasks per month",
  "Unlimited parallel or simultaneous active projects",
  "Guaranteed delivery of an entire platform within one billing cycle",
  "Third-party costs such as hosting, licenses, or paid APIs",
  "Unusually large or specially scoped builds, which may need a separate custom quotation",
];

/* ================================================================== */
/* Proprietary platform — operational differentiator                 */
/* ================================================================== */

export const platformSteps: Step[] = [
  {
    n: "01",
    icon: Send,
    title: "Submit requests",
    body: "Clients submit bugs, features, enhancements, integrations, and requirements directly through our platform.",
  },
  {
    n: "02",
    icon: Sparkles,
    title: "AI-assisted preparation",
    body: "AI helps organize requests, clarify requirements, and shape them into structured, buildable development tasks.",
  },
  {
    n: "03",
    icon: Eye,
    title: "Engineering review",
    body: "Our developers review requirements, evaluate feasibility, and prepare the work for execution.",
  },
  {
    n: "04",
    icon: Cpu,
    title: "Development",
    body: "Human engineers build and supervise the work, using AI to move efficiently without giving up accountability.",
  },
  {
    n: "05",
    icon: Gauge,
    title: "Track progress",
    body: "Follow request statuses and development progress as work moves through the queue.",
  },
  {
    n: "06",
    icon: Repeat,
    title: "Review & deliver",
    body: "Completed work goes through review, testing, and approval. Then we move to the next prioritized request.",
  },
];

/* ================================================================== */
/* Why Swiftly — value propositions (kept)                           */
/* ================================================================== */

export type ValuePoint = {
  icon: LucideIcon;
  title: string;
  body: string;
};

export const whyPoints: ValuePoint[] = [
  {
    icon: ShieldCheck,
    title: "Senior-led engineering",
    body: "Experienced engineers own architecture, decisions, and review. AI assists the work; it does not replace the judgment behind it.",
  },
  {
    icon: ListChecks,
    title: "Focused on essentials",
    body: "We build what moves the business forward and cut what does not. Less complexity, more working software.",
  },
  {
    icon: Sparkles,
    title: "AI-assisted workflow",
    body: "We use AI across requirements, implementation, and testing to move faster — always under human oversight.",
  },
  {
    icon: LayoutDashboard,
    title: "Our own platform",
    body: "Requests and progress flow through a workflow platform we build ourselves, not a generic board bolted on.",
  },
  {
    icon: Workflow,
    title: "Three ways to engage",
    body: "A custom build, a monthly subscription, or embedded forward deployed engineering — whichever fits the work.",
  },
  {
    icon: MapPin,
    title: "Philippine advantage",
    body: "A lean studio in the Philippines, which is how we keep senior engineering at an accessible international price.",
  },
];

/* ================================================================== */
/* What we build — capabilities                                       */
/* ================================================================== */

export type Capability = {
  icon: LucideIcon;
  title: string;
  body: string;
};

export const capabilities: Capability[] = [
  {
    icon: Layers,
    title: "Web applications",
    body: "Production web apps on a modern, maintainable stack.",
  },
  {
    icon: Boxes,
    title: "SaaS platforms",
    body: "Multi-tenant products, billing, auth, and features you sell.",
  },
  {
    icon: Workflow,
    title: "Business systems",
    body: "ERP-style systems and back-office tooling that run operations.",
  },
  {
    icon: Plug,
    title: "APIs & integrations",
    body: "Connect payments, CRMs, and the services you depend on.",
  },
  {
    icon: Sparkles,
    title: "AI-powered software",
    body: "Practical AI features built into your product with guardrails.",
  },
  {
    icon: Cpu,
    title: "Workflow automation",
    body: "Automate repetitive work so the busywork runs itself.",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce engineering",
    body: "Storefront work and custom commerce features.",
  },
  {
    icon: Wrench,
    title: "Internal tools",
    body: "Purpose-built tools that replace spreadsheets and manual steps.",
  },
  {
    icon: Gauge,
    title: "Software improvements",
    body: "Bug fixes, performance, and steady improvements over time.",
  },
];

/* ================================================================== */
/* Philippine engineering advantage                                   */
/* ================================================================== */

export const philippineAdvantages: { title: string; body: string }[] = [
  {
    title: "Strong engineering standards",
    body: "A senior-led team with international client experience and modern engineering practices.",
  },
  {
    title: "Efficient operating model",
    body: "A lean studio based in the Philippines — how we keep pricing accessible without cutting corners.",
  },
  {
    title: "Direct communication",
    body: "You work with the people doing the work, in clear English, with overlap across US, EU, and APAC hours.",
  },
  {
    title: "AI-assisted productivity",
    body: "Modern, AI-assisted workflows that improve speed and consistency under human oversight.",
  },
];

/* ================================================================== */
/* FAQ (general / subscription)                                       */
/* ================================================================== */

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "Does the subscription include a full-time developer?",
    a: "No. Your subscription gives you one active development workstream managed by our engineering team. It is designed for continuous development requests rather than dedicated full-time staffing.",
  },
  {
    q: "What does unlimited requests mean?",
    a: "You can submit and prioritize as many development requests as you like. Our team works on one active request at a time, moving through your backlog as work is completed.",
  },
  {
    q: "How much development can I expect each month?",
    a: "Delivery depends on the complexity of your requests. Small improvements may be completed relatively quickly, while larger features require additional implementation, testing, and review. We break complex requests into manageable milestones and keep progress visible.",
  },
  {
    q: "Can you build an entire SaaS platform?",
    a: "Yes, we build SaaS applications. A larger platform may require multiple development cycles or a separate custom project engagement depending on scope, complexity, and delivery expectations.",
  },
  {
    q: "What technology do you use?",
    a: "We work across a modern web stack — including Next.js, TypeScript, and common databases and cloud platforms — and choose the right tools for each request rather than forcing a single template.",
  },
  {
    q: "How does AI fit into development?",
    a: "We use AI to assist with organizing requirements, implementation, and testing so we can move efficiently. Human engineers perform and supervise the work — AI assists, it does not replace engineering judgment.",
  },
  {
    q: "What if I need a larger, scoped project?",
    a: "We also take on custom software development and forward deployed engineering. If a request is better suited to one of those, we will say so.",
  },
  {
    q: "What is the Isaiah 60:22 reference?",
    a: "It is the verse the studio is named for. We take it as a working philosophy — that small, disciplined work compounds, and that there is a season for ambitious things to happen swiftly. It shapes how we think about quality and patience.",
  },
];

/* ================================================================== */
/* Case studies — preserved, legitimate client work                  */
/* ================================================================== */

export type CaseStudy = {
  slug: string;
  client: string;
  title: string;
  type: string;
  outcome: string;
  metric: string;
  cover: string;
  coverFit?: "cover" | "contain";
  brief: string;
  challenge: string;
  approach: string[];
  outcomeBody: string;
  stats: { label: string; value: string }[];
  stack: string[];
  testimonial?: { quote: string; author: string; role: string };
  website?: string;
  publishedAt: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "archant-shopify-maintenance",
    client: "Archant",
    title: "Shopify maintenance and custom apps for a design commerce brand",
    type: "Shopify · Maintenance · Custom apps",
    outcome: "Ongoing ecommerce improvements",
    metric: "Shopify support",
    cover: "/images/archant-homepage.jpg",
    brief:
      "Archant is an Australia-based design commerce brand with an established Shopify storefront. Swiftlyph supports the existing site through maintenance, targeted improvements, and custom app work. We did not build the original store; our role is to improve and extend it carefully around live commerce operations.",
    challenge:
      "Archant's Shopify site supports product discovery, trade account flows, editorial inspiration, and ecommerce conversion. The work requires steady technical maintenance and scoped improvements without interrupting customers, internal teams, or day-to-day store operations.",
    approach: [
      "Maintain and improve the existing Shopify theme and app surface without unnecessary rebuild work.",
      "Ship scoped frontend and backend improvements around real commerce workflows.",
      "Build custom Shopify app functionality where off-the-shelf tooling does not fit the operational need.",
      "Handle technical fixes, quality checks, and incremental enhancements with care for the live storefront.",
    ],
    outcomeBody:
      "Archant has an ongoing technical partner for Shopify maintenance, improvements, and custom app work. The engagement is intentionally practical: keep the existing commerce platform stable, make the right improvements at the right time, and extend Shopify where the business needs more than standard theme or app configuration.",
    stats: [
      { label: "Engagement", value: "Ongoing" },
      { label: "Platform", value: "Shopify" },
      { label: "Scope", value: "Maintenance + apps" },
    ],
    stack: [
      "Shopify",
      "Liquid",
      "JavaScript",
      "Shopify apps",
      "Ecommerce maintenance",
    ],
    website: "https://www.archant.com.au",
    publishedAt: "2026-06-25",
  },
  {
    slug: "crateonscene-mvp",
    client: "CrateOnScene",
    title: "MVP build for a national car event discovery platform",
    type: "MVP · Product build · Ongoing support",
    outcome: "From ideation to live product",
    metric: "MVP launched",
    cover: "/images/crateos-logo.png",
    coverFit: "contain",
    brief:
      "CrateOnScene is a car-event discovery platform for spectators, drivers, event producers, and businesses connected to the automotive scene. Swiftlyph helped take the product from ideation through MVP design, build, and deployment, then continued with new features, bug fixes, and product improvements after launch.",
    challenge:
      "The product needed to move quickly from concept to a usable public platform while supporting several real workflows: event discovery, event detail pages, business profiles, user registration, role-specific onboarding, and a lightweight app-like experience for repeat users.",
    approach: [
      "Shaped the MVP scope from the initial product idea into a buildable launch plan.",
      "Built and deployed the public event-discovery experience with event listings, featured spotlights, and location/date context.",
      "Implemented account flows and role-specific paths for spectators, drivers, businesses, and event producers.",
      "Continued post-launch development with new features, bug fixes, UX refinements, and operational support.",
    ],
    outcomeBody:
      "CrateOnScene launched as a working MVP with a live public event directory and the foundations for a broader automotive-scene platform. The work did not stop at deployment: Swiftlyph continues to support the product through feature development, bug fixing, and practical improvements informed by real usage.",
    stats: [
      { label: "Stage", value: "MVP to live" },
      { label: "Scope", value: "Build + support" },
      { label: "Product", value: "Event platform" },
    ],
    stack: [
      "Product strategy",
      "Full-stack development",
      "MVP delivery",
      "Deployment",
      "Feature support",
    ],
    website: "https://crateonscene.com",
    publishedAt: "2026-06-25",
  },
];
