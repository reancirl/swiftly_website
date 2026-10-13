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
      "Expert-led, AI-assisted delivery",
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
      "An expert engineer or engineering pod embedded with your team — understanding your operations, deciding what to build, and bringing software into real use.",
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
    body: "Our team designs, engineers, and tests the solution — AI-assisted, expert-reviewed.",
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
  "You need expert engineering embedded with your team for a season",
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
    a: "Either. An engagement may involve a named expert engineer or an appropriately sized engineering pod, depending on the scope and the problem we are solving.",
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
    "Expert-led software engineering",
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
    body: "Our engineers take the top prioritized request into your single active workstream, assisted by AI tools and expert review.",
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
    title: "Expert-led engineering",
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
    body: "A lean studio in the Philippines, which is how we keep expert engineering at an accessible international price.",
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
    body: "An expert-led team with international client experience and modern engineering practices.",
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
  service?: "seo" | "development" | "content";
  client: string;
  title: string;
  type: string;
  outcome: string;
  metric: string;
  cover: string;
  coverFit?: "cover" | "contain";
  coverBackground?: "dark" | "light";
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
    slug: "uglq-connect-members-management",
    service: "development",
    client: "United Grand Lodge of Queensland",
    title: "Members management system for Freemasons Queensland",
    type: "Members portal · Web application · Membership management",
    outcome: "A secure home for members and lodges",
    metric: "~300 lodges statewide",
    cover: "/images/uglq-connect-cover.png",
    coverFit: "contain",
    coverBackground: "light",
    brief:
      "The United Grand Lodge of Queensland (Freemasons Queensland) is a fraternal organisation with nearly 300 lodges across the state. Swiftlyph built Connect — its members management system — a secure web application where members sign in and the organisation manages membership and lodge activity in one place.",
    challenge:
      "A statewide organisation with hundreds of independent lodges needs its membership information to be accurate, secure, and accessible to the right people. The system has to handle authenticated member access, membership and lodge records, and day-to-day administration while protecting members' privacy and keeping a long-standing institution's data in good order.",
    approach: [
      "Built Connect as a secure, authenticated members portal and management system.",
      "Modelled membership and lodge administration for an organisation spanning nearly 300 lodges.",
      "Focused on member self-service and clear access to the information members and administrators need.",
      "Engineered the platform for privacy, reliability, and ongoing growth as the organisation's needs evolve.",
    ],
    outcomeBody:
      "Freemasons Queensland has a central, secure members management system in Connect. Members sign in to a single portal, and the organisation administers membership and lodge information across the state in one place — replacing scattered records with a modern, maintainable web application.",
    stats: [
      { label: "Organisation", value: "Freemasons QLD" },
      { label: "Lodges", value: "~300 statewide" },
      { label: "Product", value: "Members portal" },
    ],
    stack: [
      "Next.js",
      "React",
      "Authentication",
      "Membership management",
      "Web application",
    ],
    website: "https://connect.uglq.org.au/login",
    publishedAt: "2026-10-13",
  },
  {
    slug: "buffalo-built-wyoming-design-build",
    service: "development",
    client: "Buffalo Built",
    title: "Website and new-community launch for a Wyoming design-build homebuilder",
    type: "Design-build · Website · Community launch",
    outcome: "A buy-direct homebuying experience",
    metric: "Cornerstone Estates launch",
    cover: "/images/buffalo-built-cover.webp",
    brief:
      "Buffalo Built is a Wyoming design-build homebuilder serving Buffalo, Sheridan, Gillette, and the surrounding area with new homes, custom homes, and remodels. Swiftlyph built the company's website and the launch experience for Cornerstone Estates, a new single-story home community — helping buyers purchase directly from the builder, without a realtor.",
    challenge:
      "The site needed to serve two audiences at once: buyers looking for a ready, pre-designed home in a new community, and clients who want a custom home or a remodel on their own land. It also had to make a brand-new development feel tangible — browsable home models, standard features like in-floor heat and quartz countertops, lot availability, and a clear path to contact the builder directly.",
    approach: [
      "Designed and built a marketing site covering the builder's three paths — find a home, build a custom home, and remodel.",
      "Created the Cornerstone Estates launch experience with single-story home models, standard features, and community context near downtown Buffalo.",
      "Made buying directly from the builder straightforward, with clear inquiry paths and no realtor required.",
      "Built a responsive, image-forward experience with a gallery and location details to help buyers picture living there.",
    ],
    outcomeBody:
      "Buffalo Built has a website that works as both a homebuilder portfolio and the launch platform for a new community. Prospective buyers can explore Cornerstone Estates home models and features, understand the buy-direct process, and reach the builder without a realtor — while custom-home and remodel clients have a clear way to start a conversation.",
    stats: [
      { label: "Location", value: "Buffalo, WY" },
      { label: "Scope", value: "Website" },
      { label: "Community", value: "Cornerstone Estates" },
    ],
    stack: [
      "Web development",
      "Responsive design",
      "Landing pages",
      "SEO",
      "Lead capture",
    ],
    website: "https://buffalobuiltllc.com",
    publishedAt: "2026-10-13",
  },
  {
    slug: "buffalo-built-internal-operations-tool",
    service: "development",
    client: "Buffalo Built",
    title: "Internal operations tool for a Wyoming homebuilder",
    type: "Internal tool · Web application · Operations",
    outcome: "One place to run the business",
    metric: "Custom internal system",
    cover: "/images/buffalo-built-internal-cover.png",
    coverFit: "contain",
    brief:
      "Beyond their public website, Buffalo Built needed a private system to run the business behind the homes. Swiftlyph built a custom internal tool — a secure web application the team signs in to for day-to-day operations across their homes, lots, and buyers.",
    challenge:
      "A growing design-build homebuilder juggles home models, lot availability in a new community, buyer enquiries, and sales operations — often across spreadsheets and disconnected tools. The team needed a single, secure internal application that keeps this information in one place and reflects how they actually work.",
    approach: [
      "Built a secure, login-protected internal web application for the Buffalo Built team.",
      "Centralised the operational information behind their homes, lots, and buyer activity.",
      "Shaped the tool around real day-to-day workflows rather than off-the-shelf software.",
      "Engineered it to grow with the business as Cornerstone Estates and their operations expand.",
    ],
    outcomeBody:
      "Buffalo Built has a private operations tool that complements their public website. The team signs in to manage the business behind the homes in one place — a custom internal system built around how they work, rather than forcing their process into generic software.",
    stats: [
      { label: "Client", value: "Buffalo Built" },
      { label: "Type", value: "Internal tool" },
      { label: "Access", value: "Team login" },
    ],
    stack: [
      "Web application",
      "Authentication",
      "Internal tooling",
      "Dashboard",
    ],
    website: "https://internal.buffalobuiltusa.com/login",
    publishedAt: "2026-10-13",
  },
  {
    slug: "blue-mountain-co-au-marketplace",
    service: "development",
    client: "Blue Mountain Co",
    title: "Shopify storefront for an Australian water-management brand",
    type: "Shopify · Ecommerce · Storefront",
    outcome: "A clear store for technical water products",
    metric: "Shopify commerce",
    cover: "/images/bmco-marketplace-cover.png",
    brief:
      "Blue Mountain Co (BMCO) is a Queensland-based water-management company. Swiftlyph supports its Australian online store — Blue Mountain Co Marketplace — a Shopify storefront selling rain harvesting, gutter protection, plumbing, and smart water-monitoring products to residential and commercial customers.",
    challenge:
      "A technical product range — rainwater filters, diverters, tank gauges, gutter mesh, plumbing, and IoT water devices — needs a storefront that helps customers choose the right parts and kits with confidence. Product discovery, customisation tools, account and purchase-order flows, and GST-aware checkout all need to work cleanly for Australian buyers.",
    approach: [
      "Support and develop the Shopify storefront for BMCO's Australian market.",
      "Help customers navigate a technical catalogue across rain harvesting, gutter mesh, plumbing, and smart devices.",
      "Support product customisation and kit-building, account access, and purchase-order workflows.",
      "Ship ongoing improvements and maintenance around a live ecommerce operation.",
    ],
    outcomeBody:
      "Blue Mountain Co has a maintained, improving Shopify storefront for its Australian customers, bringing a technical water-management catalogue — from rainwater harvesting components to smart monitoring devices — into one clear buying experience.",
    stats: [
      { label: "Market", value: "Australia" },
      { label: "Platform", value: "Shopify" },
      { label: "Category", value: "Water management" },
    ],
    stack: ["Shopify", "Liquid", "JavaScript", "Ecommerce", "Storefront"],
    website: "https://aumarketplace.bluemountainco.com",
    publishedAt: "2026-10-13",
  },
  {
    slug: "bmco-squid-operations-app",
    service: "development",
    client: "Blue Mountain Co",
    title: "Squid — an internal operations app for Blue Mountain Co",
    type: "Web app · Operations · Internal tool",
    outcome: "A custom app for the team",
    metric: "Internal web app",
    cover: "/images/squid-cover.png",
    coverFit: "contain",
    coverBackground: "light",
    brief:
      "Squid is an internal web application Swiftlyph builds for Blue Mountain Co (BMCO), the Queensland water-management company. It gives the BMCO team a secure, login-protected tool for running the operations behind their products and storefront.",
    challenge:
      "Alongside a live Shopify storefront, BMCO's team needs internal systems that reflect how the business actually runs — beyond what off-the-shelf ecommerce admin provides. Squid has to be secure, reliable, and shaped around real operational workflows.",
    approach: [
      "Build Squid as a secure, authenticated internal web application for the BMCO team.",
      "Model the operational workflows that sit behind BMCO's products and storefront.",
      "Design for clarity and day-to-day usability for internal users.",
      "Engineer the app for reliability and ongoing growth as operations evolve.",
    ],
    outcomeBody:
      "Blue Mountain Co has Squid — a custom internal application that complements its public storefront. The team signs in to manage operational work in one purpose-built tool, rather than stretching generic software to fit.",
    stats: [
      { label: "Client", value: "Blue Mountain Co" },
      { label: "Product", value: "Squid app" },
      { label: "Access", value: "Team login" },
    ],
    stack: ["Next.js", "React", "Authentication", "Internal tooling", "Web application"],
    website: "https://squid.bmco.com.au",
    publishedAt: "2026-10-13",
  },
  {
    slug: "elite-anywhere-terminal",
    service: "development",
    client: "Elite Anywhere",
    title: "Terminal — an internal operations platform for a white-glove logistics company",
    type: "Web app · Logistics operations · Internal tool",
    outcome: "One system to run the operation",
    metric: "Internal operations platform",
    cover: "/images/elite-terminal-cover.png",
    brief:
      "Elite Anywhere is a nationwide white-glove delivery and logistics company — receiving, warehousing, delivery, and installation handled as one. Swiftlyph builds Terminal, its internal operations platform: a secure, login-protected application the team uses to run the day-to-day business across warehouses and deliveries.",
    challenge:
      "Coordinating high-value, white-glove logistics across many warehouse locations and a nationwide delivery network is complex. The team needs an internal system that reflects how the operation actually works — receiving, warehousing, scheduling, and final-mile delivery — rather than stitching together generic tools.",
    approach: [
      "Build Terminal as a secure, authenticated internal platform for the Elite Anywhere team.",
      "Model the operational workflows behind receiving, warehousing, and white-glove delivery.",
      "Design for clarity and speed for staff working across locations.",
      "Engineer the platform for reliability and ongoing growth as the operation scales.",
    ],
    outcomeBody:
      "Elite Anywhere has Terminal — a custom internal platform built around its white-glove logistics operation. The team signs in to one purpose-built system to manage the work behind receiving, warehousing, and delivery, instead of forcing their process into off-the-shelf software.",
    stats: [
      { label: "Client", value: "Elite Anywhere" },
      { label: "Product", value: "Terminal" },
      { label: "Domain", value: "Logistics ops" },
    ],
    stack: ["Node.js", "Express", "JavaScript", "Internal tooling", "Web application"],
    website: "https://terminal.eliteanywhere.com/login",
    publishedAt: "2026-10-13",
  },
  {
    slug: "debtease-loan-management-platform",
    service: "development",
    client: "DebtEase",
    title: "Loan and repayment management platform for an Australian lender",
    type: "Fintech · Lending platform · Payments",
    outcome: "The hard parts of lending, engineered",
    metric: "Loan management platform",
    cover: "/images/debtease-cover.png",
    coverFit: "contain",
    coverBackground: "light",
    brief:
      "DebtEase is a new venture from Flash Money, an Australian consumer lender. Swiftlyph is building its loan management platform — the system of record that handles the full lifecycle of a loan, from balances and repayment schedules to direct debit, reconciliation, and arrears, under Australian credit regulation.",
    challenge:
      "Lending software is unforgiving: every cent has to be right, every time. A platform like this has to track loan balances with accruing interest and fees, generate and adjust repayment schedules, move money by direct debit and other payment rails, and reconcile what actually cleared against what was expected — all while handling the messy real world of dishonoured payments, partial payments, hardship, and restructures, and staying compliant, auditable, and private under Australia's credit regulations.",
    approach: [
      "Model the loan ledger and lifecycle — balances, interest and fee accrual, and repayment schedules — as a single source of truth.",
      "Engineer scheduled repayments and direct-debit collection with idempotency, safe retries on dishonour, and reconciliation against bank and provider records.",
      "Build arrears, hardship, and repayment-restructuring workflows that reflect how real accounts behave, not just the happy path.",
      "Prioritise correctness, auditability, privacy, and compliance with Australian credit regulation throughout.",
    ],
    outcomeBody:
      "DebtEase gets a loan management platform built for the realities of consumer lending in Australia — accurate ledgers, scheduled and reconciled payments, and the arrears and hardship handling that lending actually requires. The focus is on getting the money movement and the compliance right, so the business can lend and collect with confidence.",
    stats: [
      { label: "Market", value: "Australia" },
      { label: "Domain", value: "Lending & payments" },
      { label: "Parent", value: "Flash Money" },
    ],
    stack: [
      "Loan management",
      "Direct debit & payments",
      "Reconciliation",
      "Compliance",
      "Web application",
    ],
    website: "https://www.debtease.com.au",
    publishedAt: "2026-10-13",
  },
  {
    slug: "8drive-car-rental-erp",
    service: "development",
    client: "8 Drive Car Rental",
    title: "Car rental ERP software for a Philippine vehicle-hire company",
    type: "ERP · Car rental operations · Web application",
    outcome: "A rebuilt system to run the whole operation",
    metric: "Car rental ERP",
    cover: "/images/8drive-erp-cover.png",
    coverFit: "contain",
    coverBackground: "light",
    brief:
      "8 Drive Car Rental is a Philippine self-drive and chauffeur-driven vehicle-hire company. Swiftlyph built its car rental ERP — a rebuilt, improved replacement for the company's previous system — bringing fleet, bookings, rental agreements, and billing into one platform the team runs the business on.",
    challenge:
      "A car rental operation has many moving parts: a fleet of vehicles to track and keep available, bookings and schedules that must not collide, rental agreements and deposits, chauffeur and self-drive workflows, rates that vary by vehicle and period, maintenance, and invoicing and payments. The previous ERP had grown hard to work with, and the business needed a cleaner, more reliable system that matched how it actually operates.",
    approach: [
      "Rebuild the ERP as an improved second-generation system, learning from the limitations of the previous one.",
      "Bring fleet and vehicle management, availability, and booking schedules into one place so vehicles and dates do not conflict.",
      "Model rental agreements, rates, deposits, invoicing, and payments for both self-drive and chauffeur-driven hire.",
      "Give the team operational tooling and reporting to run day-to-day rentals with less friction.",
    ],
    outcomeBody:
      "8 Drive Car Rental runs on a rebuilt ERP that consolidates fleet, bookings, agreements, and billing into one system. The second-generation platform replaces one that had outgrown the business with software shaped around how the company actually operates — easier to use and built to grow with the fleet.",
    stats: [
      { label: "Market", value: "Philippines" },
      { label: "Product", value: "Car rental ERP" },
      { label: "Version", value: "Rebuilt v2" },
    ],
    stack: [
      "Car rental ERP",
      "Fleet management",
      "Bookings & scheduling",
      "Billing",
      "Web application",
    ],
    website: "https://8drivecars.com",
    publishedAt: "2026-10-13",
  },
  {
    slug: "mikaro-erp-car-dealership",
    service: "development",
    client: "Mikaro ERP",
    title: "Mikaro ERP — a car dealership platform, first deployed for Wuling",
    type: "ERP · Car dealership · Product",
    outcome: "A dealership platform, productised",
    metric: "Dealership ERP product",
    cover: "/images/mikaro-wuling-cover.svg",
    coverFit: "contain",
    coverBackground: "light",
    brief:
      "Mikaro ERP is a car dealership platform Swiftlyph is building as a product. Its first deployment powers Wuling's dealership operations at wuling.mikaroerp.com — running the business of selling and servicing cars, from vehicle inventory to sales and after-sales, in one system.",
    challenge:
      "A car dealership runs on more than a showroom: vehicle inventory and variants, customer leads and the sales pipeline, quotations, financing and insurance, trade-ins, after-sales service and parts, invoicing, and reporting — often across branches. Building this as a product, rather than a one-off, means designing it to serve a dealership like Wuling today and additional clients tomorrow.",
    approach: [
      "Design Mikaro ERP as a product that can serve multiple dealerships, with Wuling as the first client on its own branded instance.",
      "Model the dealership lifecycle — vehicle inventory, leads and sales, quotations, and after-sales service and parts.",
      "Bring sales, service, invoicing, and reporting into one operational system for the dealership team.",
      "Engineer for reliability and growth so new dealerships can be onboarded over time.",
    ],
    outcomeBody:
      "Wuling runs its dealership operations on Mikaro ERP, and Swiftlyph has a dealership platform built to grow beyond a single client. It is an example of taking real operational software and shaping it into a product — one dealership live today, with the foundations to serve more.",
    stats: [
      { label: "Product", value: "Mikaro ERP" },
      { label: "First client", value: "Wuling" },
      { label: "Domain", value: "Car dealership" },
    ],
    stack: [
      "Car dealership ERP",
      "Inventory & sales",
      "After-sales & service",
      "Multi-tenant",
      "Web application",
    ],
    website: "https://wuling.mikaroerp.com",
    publishedAt: "2026-10-13",
  },
  {
    slug: "connect-nigeria-marketplace-platform",
    service: "development",
    client: "Connect Nigeria",
    title: "Marketplace Platform Development for Nigeria's Business Ecosystem",
    type: "Next.js · Marketplace development · Business discovery",
    outcome: "A unified discovery and lead-generation platform",
    metric: "1.2M business records",
    cover: "https://www.connectnigeria.com/og-image.png",
    brief:
      "Connect Nigeria is a national information and business-discovery platform bringing together company listings, quote requests, jobs, events, deals, cars, real estate, and editorial content. Swiftlyph developed a modern marketplace experience that helps people find trusted providers while giving Nigerian businesses practical ways to build visibility and win new customers.",
    challenge:
      "The platform needed to organize a large and varied information ecosystem without fragmenting the user journey. Consumers need fast search, filters, trusted business profiles, reviews, direct contact options, and competitive quotes, while business owners need onboarding, listing management, verification, lead-generation tools, advertising opportunities, and clear paths into premium services.",
    approach: [
      "Developed a responsive Next.js platform for business discovery across listings, jobs, events, deals, cars, real estate, and service categories.",
      "Built searchable directory and profile experiences around categories, Nigerian states and local government areas, business details, reviews, contact actions, and verification signals.",
      "Connected customer quote requests with vendor onboarding, matching, responses, and service-provider plans to support a two-sided lead-generation marketplace.",
      "Integrated authentication, analytics, progressive-web-app capabilities, advertising surfaces, and the existing editorial publication into a cohesive product ecosystem.",
    ],
    outcomeBody:
      "Connect Nigeria now provides a unified digital platform for discovering businesses and opportunities across Nigeria. Consumers can move from search to trusted profiles, direct enquiries, and competing quotes, while businesses can manage their presence, demonstrate credibility, and access new demand. The platform combines a large national directory with marketplace workflows, editorial discovery, advertising, and mobile-ready access in one extensible product.",
    stats: [
      { label: "Directory", value: "1.2M records" },
      { label: "Platform", value: "Next.js" },
      { label: "Market", value: "Nigeria" },
    ],
    stack: [
      "Next.js",
      "React",
      "Auth.js",
      "Vercel",
      "WordPress",
      "Progressive Web App",
    ],
    website: "https://www.connectnigeria.com",
    publishedAt: "2026-07-08",
  },
  {
    slug: "canwell-telehealth-platform",
    service: "content",
    client: "Canwell",
    title: "Telehealth Platform Development for an Australian Healthcare Clinic",
    type: "Telehealth · Platform development · Patient experience",
    outcome: "A connected patient journey from booking to fulfilment",
    metric: "End-to-end telehealth",
    cover:
      "https://www.canwell.com.au/images/v2/hero-natural-medicine.jpg",
    brief:
      "Canwell is an Australian telehealth platform that connects patients with AHPRA-registered practitioners for holistic healthcare and natural medicine consultations. Swiftlyph supports the digital experience across patient acquisition, account creation, appointment booking, consultation preparation, and access to prescribed products.",
    challenge:
      "The platform needs to make a regulated healthcare journey feel clear and convenient without compromising trust, privacy, or informed consent. Marketing pages, eligibility guidance, patient registration, practitioner availability, consultation forms, reminders, prescriptions, payments, and pharmacy fulfilment all need to work as one coherent experience across public and authenticated surfaces.",
    approach: [
      "Develop and refine the patient-facing platform across registration, secure account access, appointment booking, and consultation preparation.",
      "Connect public treatment, practitioner, pricing, and eligibility content with clear paths into the authenticated patient journey.",
      "Support operational workflows around patient forms, consent, appointment communications, prescriptions, payments, and pharmacy fulfilment.",
      "Ship ongoing platform improvements with careful attention to responsive usability, privacy, healthcare compliance, and live-service reliability.",
    ],
    outcomeBody:
      "Canwell has an end-to-end digital healthcare experience that helps patients move from learning about treatment options to booking a practitioner and managing the next steps of care. Public information, account access, appointment workflows, consultation preparation, and prescription fulfilment work together in one platform. Swiftlyph continues to support the experience as Canwell expands its services and patient journeys.",
    stats: [
      { label: "Market", value: "Australia" },
      { label: "Product", value: "Telehealth" },
      { label: "Scope", value: "Platform support" },
    ],
    stack: [
      "Laravel",
      "JavaScript",
      "Telehealth workflows",
      "Patient experience",
      "Platform maintenance",
    ],
    website: "https://www.canwell.com.au",
    publishedAt: "2026-07-08",
  },
  {
    slug: "the-telecom-shop-magento-commerce",
    service: "development",
    client: "The Telecom Shop",
    title: "Magento Ecommerce Development for a Telecom and IT Retailer",
    type: "Magento · Ecommerce development · Ongoing support",
    outcome: "A scalable storefront for a specialist catalog",
    metric: "Magento commerce",
    cover: "/images/the-telecom-shop-cover.svg",
    brief:
      "The Telecom Shop is an Australian specialist retailer for business telephone systems, headsets, conferencing equipment, networking, security, and related IT products. Swiftlyph supports the Magento storefront through ecommerce development and ongoing improvements across merchandising, product discovery, and conversion paths.",
    challenge:
      "The storefront brings together a large, technically detailed catalog serving both business buyers and individual customers. Shoppers need to move from broad equipment categories to compatible products, understand specifications and availability, compare options, and reach support content without adding friction to account, cart, and checkout journeys.",
    approach: [
      "Develop and refine Magento storefront experiences around a broad telecom, conferencing, networking, and IT catalog.",
      "Improve category, search, merchandising, and product-detail paths so specialist equipment remains practical to discover and compare.",
      "Support promotional content, customer accounts, cart, checkout, and operational integrations across the live ecommerce journey.",
      "Ship scoped enhancements, quality checks, performance improvements, and ongoing maintenance without disrupting day-to-day trading.",
    ],
    outcomeBody:
      "The Telecom Shop has a commerce platform that connects a specialist product range with the information and support customers need to purchase with confidence. Clear category journeys, detailed product pages, promotions, account tools, and service content work together across the storefront. Swiftlyph continues to support the site as its catalog, campaigns, and operational requirements evolve.",
    stats: [
      { label: "Engagement", value: "Ongoing" },
      { label: "Platform", value: "Magento" },
      { label: "Market", value: "Australia" },
    ],
    stack: [
      "Magento",
      "PHP",
      "JavaScript",
      "Ecommerce development",
      "Storefront maintenance",
    ],
    website: "https://www.thetelecomshop.com/au/",
    publishedAt: "2026-07-07",
  },
  {
    slug: "jovadi-shopify-storefront",
    service: "development",
    client: "Jovadi",
    title: "Shopify Storefront Development for a Fine Jewellery House",
    type: "Shopify · Ecommerce development · Ongoing support",
    outcome: "A collection-led global storefront",
    metric: "Shopify commerce",
    cover: "/images/jovadi-ring-cover-hq.png",
    brief:
      "Jovadi is a fine jewellery house with collection-led commerce, bespoke consultations, and an international customer base. Swiftlyph supports the Shopify storefront through theme development, experience refinements, and ongoing improvements across merchandising, content, and conversion paths.",
    challenge:
      "The storefront needed to balance a high-touch luxury presentation with practical ecommerce flows. Collection campaigns, product discovery, private commissions, international markets, and editorial storytelling all had to work together without slowing the live store or making routine merchandising difficult.",
    approach: [
      "Develop and refine the Shopify theme around Jovadi's visual identity and collection-led storytelling.",
      "Improve the paths between campaign content, collections, products, and bespoke consultation requests.",
      "Support international shopping flows across markets, currencies, and language options.",
      "Ship scoped storefront enhancements, quality checks, and ongoing maintenance without interrupting live commerce.",
    ],
    outcomeBody:
      "Jovadi has a polished Shopify storefront that supports both direct ecommerce and the more considered journey behind private commissions. The site gives each collection room to make an impression while keeping product discovery, international shopping, and consultation paths clear. Swiftlyph continues to support the storefront as campaigns, products, and operational needs evolve.",
    stats: [
      { label: "Engagement", value: "Ongoing" },
      { label: "Platform", value: "Shopify" },
      { label: "Scope", value: "Storefront support" },
    ],
    stack: [
      "Shopify",
      "Liquid",
      "JavaScript",
      "Theme development",
      "International commerce",
    ],
    website: "https://www.jovadi.com",
    publishedAt: "2026-06-30",
  },
  {
    slug: "dekayed-shopify-storefront",
    service: "seo",
    client: "Dekayed",
    title:
      "Shopify Storefront Development and SEO for an Alternative Fashion Brand",
    type: "Shopify · Ecommerce development · Ongoing support",
    outcome: "A global storefront for a growing catalog",
    metric: "Shopify commerce",
    cover: "/images/dekayed-storefront.jpg",
    brief:
      "Dekayed is an alternative clothing and accessories brand built around individuality, collection-driven releases, and a global community. Swiftlyph supports the Shopify storefront through theme development, merchandising refinements, and ongoing improvements across product discovery, international shopping, and conversion paths.",
    challenge:
      "The storefront brings together apparel, jewellery, accessories, limited releases, and themed collections in one fast-moving catalog. The experience needs to make product discovery clear, give new drops room to stand out, and support variants, inventory, customer accounts, package tracking, and international markets without making day-to-day merchandising difficult.",
    approach: [
      "Develop and refine the Shopify theme around Dekayed's visual identity, campaign launches, and product-led storytelling.",
      "Improve collection architecture and navigation across tops, bottoms, accessories, and limited releases.",
      "Strengthen product detail, variant, inventory, cart, and conversion paths for a broad and frequently changing catalog.",
      "Support international markets, operational integrations, quality checks, and ongoing storefront maintenance.",
    ],
    outcomeBody:
      "Dekayed has a flexible Shopify storefront that can support both evergreen products and collection-driven drops. The site connects the brand's story with a large catalog while keeping product discovery, international shopping, and customer-service paths accessible. Swiftlyph continues to support the storefront as campaigns, inventory, and operational needs evolve.",
    stats: [
      { label: "Engagement", value: "Ongoing" },
      { label: "Platform", value: "Shopify" },
      { label: "Scope", value: "Storefront support" },
    ],
    stack: [
      "Shopify",
      "Liquid",
      "JavaScript",
      "Theme development",
      "International commerce",
    ],
    website: "https://dekayedclothing.store",
    publishedAt: "2026-07-02",
  },
  {
    slug: "wigs-com-shopify-storefront",
    service: "development",
    client: "Wigs.com",
    title: "Shopify storefront development for an alternative hair retailer",
    type: "Shopify · Ecommerce development · Ongoing support",
    outcome: "A guided storefront for a complex catalog",
    metric: "Shopify commerce",
    cover:
      "https://www.wigs.com/cdn/shop/files/wigs_com_logo.svg?v=1714753364",
    coverFit: "contain",
    coverBackground: "light",
    brief:
      "Wigs.com is a specialist alternative hair retailer with a large product catalog, extensive educational content, and customers who need confidence in color, fit, construction, and care. Swiftlyph supports the Shopify storefront through development, merchandising refinements, and ongoing improvements across product discovery and conversion paths.",
    challenge:
      "The storefront has to make a technically detailed catalog approachable without flattening the choices that matter. Shoppers need to compare hair types, cap constructions, lengths, colors, and brands while also finding sizing guidance, consultations, care resources, reviews, promotions, and dependable customer-service information.",
    approach: [
      "Develop and refine Shopify theme experiences around campaign launches, product discovery, and a large alternative hair catalog.",
      "Improve navigation and merchandising paths across departments, hair types, styles, brands, and educational resources.",
      "Strengthen product, variant, color, availability, cart, and supporting content experiences for considered purchases.",
      "Ship scoped storefront enhancements, quality checks, and ongoing maintenance without interrupting live commerce.",
    ],
    outcomeBody:
      "Wigs.com has a content-rich Shopify storefront that connects a broad catalog with the education and expert support customers need to make a confident purchase. Campaigns and product discovery remain prominent, while detailed product information, consultations, returns, and care guidance support the full customer journey. Swiftlyph continues to support the storefront as merchandising and operational needs evolve.",
    stats: [
      { label: "Engagement", value: "Ongoing" },
      { label: "Platform", value: "Shopify" },
      { label: "Scope", value: "Storefront support" },
    ],
    stack: [
      "Shopify",
      "Liquid",
      "JavaScript",
      "Theme development",
      "Ecommerce maintenance",
    ],
    website: "https://www.wigs.com",
    publishedAt: "2026-07-02",
  },
  {
    slug: "the-wilds-venue-wordpress-website",
    service: "development",
    client: "The Wilds Venue",
    title: "WordPress website development for a destination wedding venue",
    type: "WordPress · Website development · Ongoing support",
    outcome: "A photo-led booking journey for a private venue",
    metric: "Lead generation",
    cover: "/images/the-wilds-venue-cover.png",
    brief:
      "The Wilds is a destination wedding and event venue set on 125 private acres in Brown County, Indiana. Swiftlyph supports its WordPress website through development, content presentation, lead-generation improvements, and ongoing refinements across the venue discovery and tour-booking journey.",
    challenge:
      "The website needs to turn an emotional, image-led venue search into a clear booking decision. Couples need to understand the setting, amenities, inclusions, pricing, availability, planning support, and real wedding experience while the team needs practical ways to keep time-sensitive details current and convert interest into private tours.",
    approach: [
      "Develop and refine the WordPress experience around The Wilds' editorial identity and photography-led venue presentation.",
      "Organize wedding details, amenities, investment, availability, FAQs, and planning resources into clear decision paths.",
      "Strengthen conversion journeys from venue discovery and real wedding inspiration through contact and private tour scheduling.",
      "Support content updates, quality checks, performance improvements, and ongoing maintenance across the live website.",
    ],
    outcomeBody:
      "The Wilds has a content-rich website that presents the property with the visual depth expected of a destination venue while keeping practical planning information accessible. Real wedding galleries, transparent pricing, availability, resources, and tour calls to action work together to help couples move from inspiration to inquiry. Swiftlyph continues to support the site as events, content, and booking needs evolve.",
    stats: [
      { label: "Engagement", value: "Ongoing" },
      { label: "Platform", value: "WordPress" },
      { label: "Scope", value: "Website support" },
    ],
    stack: [
      "WordPress",
      "Elementor",
      "Gravity Forms",
      "JavaScript",
      "Website maintenance",
    ],
    website: "https://thewildsvenue.com",
    publishedAt: "2026-07-02",
  },
  {
    slug: "healthnile-seo-content-platform",
    service: "content",
    client: "Healthnile",
    title: "SEO and content development for a health and wellness publisher",
    type: "SEO · Content production · WordPress development",
    outcome: "A search-led wellness content platform",
    metric: "Organic growth",
    cover: "/images/healthnile-cover-hq.png",
    brief:
      "Healthnile is a digital health and wellness publisher covering nutrition, fitness, general health, ENT, skin, and hair. Swiftlyph supports the platform through SEO strategy, content production, and WordPress development designed to make a growing library of educational articles discoverable, readable, and maintainable.",
    challenge:
      "Health content has to serve search intent clearly while remaining structured, approachable, and responsible. The platform needs a coherent topic architecture, consistent article templates, strong internal discovery, reliable publishing workflows, and the technical performance required to support organic growth across a broad wellness library.",
    approach: [
      "Shape keyword, topic, and category architecture around real wellness questions and related search intent.",
      "Produce and optimize readable articles with clear headings, supporting context, internal links, and appropriate health disclaimers.",
      "Develop and refine WordPress templates, taxonomy, navigation, media handling, and technical SEO foundations for scalable publishing.",
      "Support ongoing content updates, quality checks, performance improvements, and search measurement as the library grows.",
    ],
    outcomeBody:
      "Healthnile has a search-led publishing platform that organizes a broad wellness library into clear categories and accessible article journeys. SEO strategy, content production, and WordPress development work together so new topics can be published consistently, discovered through search, and explored through related content. Swiftlyph continues to support the platform as its editorial coverage and organic-growth priorities evolve.",
    stats: [
      { label: "Engagement", value: "Ongoing" },
      { label: "Platform", value: "WordPress" },
      { label: "Scope", value: "SEO + content" },
    ],
    stack: [
      "WordPress",
      "Technical SEO",
      "Content strategy",
      "On-page SEO",
      "Search Console",
    ],
    website: "https://healthnile.com",
    publishedAt: "2026-07-02",
  },
  {
    slug: "symptomsweb-astro-content-platform",
    service: "content",
    client: "SymptomsWeb",
    title: "Astro website development for a health content publisher",
    type: "Astro · Website development · Technical SEO",
    outcome: "A fast static publishing platform for a large health library",
    metric: "1,800+ indexed URLs",
    cover: "/images/symptomsweb-cover-hq.png",
    brief:
      "SymptomsWeb is a health information publisher offering plain-language guides to symptoms, conditions, nutrition, fitness, and natural remedies. Swiftlyph developed a static Astro publishing experience designed to preserve a large content library while improving speed, consistency, and technical SEO.",
    challenge:
      "The platform needed to serve more than a thousand content and archive URLs without losing the familiar browsing patterns of the existing publication. Article pagination, categories, authors, legal pages, search, advertising, analytics, media delivery, and search-engine discoverability all had to remain dependable while the frontend moved to a faster static architecture.",
    approach: [
      "Rebuilt the publication frontend in Astro with reusable layouts for articles, archives, authors, search, legal pages, and error states.",
      "Preserved established URLs, metadata, pagination, canonical links, and structured data to support continuity across the content library.",
      "Integrated Cloudflare media delivery, Google Tag Manager, and advertising while keeping the rendered experience lightweight.",
      "Created responsive editorial components and publishing templates that keep large volumes of health content consistent and maintainable.",
    ],
    outcomeBody:
      "SymptomsWeb now runs as a statically rendered Astro publication with a consistent editorial system across its article and archive surfaces. The platform serves more than 1,800 sitemap URLs, uses Cloudflare for delivery and image transformation, and retains the metadata, structured content, analytics, and monetization integrations required for a search-led publisher.",
    stats: [
      { label: "Platform", value: "Astro" },
      { label: "Library", value: "1,800+ URLs" },
      { label: "Scope", value: "Build + SEO" },
    ],
    stack: [
      "Astro",
      "TypeScript",
      "Cloudflare",
      "Technical SEO",
      "Structured data",
      "Google Tag Manager",
    ],
    website: "https://symptomsweb.com",
    publishedAt: "2026-07-03",
  },
  {
    slug: "dogfix-astro-content-platform",
    service: "content",
    client: "Dogfix.com",
    title: "Astro website development for a dog care publisher",
    type: "Astro · Website development · Technical SEO",
    outcome: "A fast publishing platform for practical dog care content",
    metric: "900+ indexed URLs",
    cover: "/images/dogfix-homepage-hero.jpg",
    brief:
      "Dogfix.com is an educational publisher covering dog care, nutrition, breeds, training, puppy guidance, and veterinarian-led answers. Swiftlyph developed a static Astro publishing experience that makes a large article library faster to browse, easier to maintain, and ready for continued search growth.",
    challenge:
      "The publication needed to serve hundreds of established articles and archive pages while retaining the discovery paths readers already relied on. Categories, search, pagination, editorial profiles, legal pages, analytics, advertising, and media delivery all had to remain dependable as the frontend moved to a modern static architecture.",
    approach: [
      "Built the publication frontend in Astro with reusable templates for the homepage, articles, categories, search, team profiles, and policy pages.",
      "Preserved established URL structures, metadata, pagination, internal discovery, and sitemap coverage across the existing content library.",
      "Integrated Cloudflare media delivery, Netlify hosting, Google Tag Manager, and monetization tooling around a lightweight rendered experience.",
      "Created responsive editorial components that keep dog care, nutrition, breed, and training content consistent across devices.",
    ],
    outcomeBody:
      "Dogfix.com now runs as a statically rendered Astro publication with a coherent editorial system across its article, category, search, and company surfaces. The platform serves more than 900 sitemap URLs, delivers optimized media through Cloudflare, and retains the analytics, advertising, and search foundations required for an established content publisher.",
    stats: [
      { label: "Platform", value: "Astro" },
      { label: "Library", value: "900+ URLs" },
      { label: "Scope", value: "Build + SEO" },
    ],
    stack: [
      "Astro",
      "TypeScript",
      "Cloudflare",
      "Netlify",
      "Technical SEO",
      "Google Tag Manager",
    ],
    website: "https://dogfix.com",
    publishedAt: "2026-07-03",
  },
  {
    slug: "carolina-fine-foods-astro-website",
    service: "seo",
    client: "Carolina Fine Foods",
    title: "Astro Website Development for a Family-Owned Southern Restaurant",
    type: "Astro · Website development · Local SEO",
    outcome: "A story-led restaurant website built for local discovery",
    metric: "6-page website",
    cover: "/images/carolina-fine-foods-cover-clear.jpg",
    brief:
      "Carolina Fine Foods is a family-owned restaurant that has served Simpsonville, South Carolina since 1983. Swiftlyph developed a fast, story-led Astro website that brings its Southern hospitality online while making menus, reviews, private dining, ordering, and visit information easy to find.",
    challenge:
      "The website needed to express more than a menu. It had to preserve the character of a long-running local restaurant, help new guests understand the food and family story, and give returning customers direct paths to current hours, directions, ordering, reservations, reviews, and private dining information across mobile and desktop.",
    approach: [
      "Built a six-page Astro website with focused routes for the restaurant story, menu, gallery, reviews, private dining, and visit information.",
      "Created an editorial visual system around the restaurant's photography, heritage, and Southern hospitality while keeping primary actions prominent.",
      "Implemented local-search foundations with page-specific metadata, canonical URLs, XML sitemaps, and structured data for the restaurant, menu, location, and services.",
      "Optimized delivery with static rendering, self-hosted fonts, responsive WebP imagery, selective hydration, and accessible interactive components.",
    ],
    outcomeBody:
      "Carolina Fine Foods now has a focused digital home that connects its family history and food photography with the practical information guests need before visiting. Six purpose-built pages support local discovery and move customers toward ordering, calling, getting directions, reading reviews, or planning a private gathering without losing the warmth of the restaurant's identity.",
    stats: [
      { label: "Platform", value: "Astro" },
      { label: "Pages", value: "6" },
      { label: "Scope", value: "Build + local SEO" },
    ],
    stack: [
      "Astro",
      "TypeScript",
      "Vercel",
      "Local SEO",
      "Structured data",
      "Responsive media",
    ],
    website: "https://www.cffsimpsonville.com",
    publishedAt: "2026-07-06",
  },
  {
    slug: "archant-shopify-maintenance",
    service: "development",
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
    service: "development",
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
