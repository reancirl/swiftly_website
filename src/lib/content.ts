import { Code2, Search, Feather, type LucideIcon } from "lucide-react";

export type Service = {
  id: string;
  slug: string;
  icon: LucideIcon;
  title: string;
  short: string;
  description: string;
  deliverables: string[];
  stack: string[];
};

export const services: Service[] = [
  {
    id: "tech",
    slug: "tech",
    icon: Code2,
    title: "Development",
    short:
      "Production-grade websites and growth systems engineered with the discipline of a senior team.",
    description:
      "We build the kind of systems that compound — fast, accessible, observable, and easy to extend. From marketing sites to full product surfaces, we ship with the performance budgets and engineering rigor of teams much larger than us.",
    deliverables: [
      "Next.js marketing and product sites with full SSR/SSG",
      "Headless commerce, CMS, and integration work",
      "Performance and Core Web Vitals remediation",
      "Custom internal tools, dashboards, and APIs",
      "Migration off legacy stacks and rebuilds",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Tailwind CSS",
      "Vercel",
      "Sanity / Contentful",
    ],
  },
  {
    id: "seo",
    slug: "seo",
    icon: Search,
    title: "SEO strategy",
    short:
      "Technical and editorial SEO that earns compounding traffic — built into the codebase, not bolted on.",
    description:
      "SEO is engineering, not magic. We audit the technical foundations, fix what's quietly costing you rankings, and ship the on-page architecture that lets your best content reach the people searching for it.",
    deliverables: [
      "Full technical and on-page audits with prioritized fixes",
      "Keyword and intent mapping by funnel stage",
      "Programmatic SEO architecture and templates",
      "Schema.org structured data implementation",
      "Internal linking systems and content hubs",
    ],
    stack: [
      "Ahrefs",
      "Search Console",
      "Screaming Frog",
      "Schema.org",
      "Looker Studio",
    ],
  },
  {
    id: "content",
    slug: "content",
    icon: Feather,
    title: "Content production",
    short:
      "Long-form, well-researched content that earns trust and ranks — written by people who understand the subject.",
    description:
      "We write the way senior practitioners read: precise, opinionated, and grounded in real work. Our writers come from the disciplines they cover, so the output reads like expertise — because it is.",
    deliverables: [
      "Editorial strategy and content calendars",
      "Pillar pages and supporting cluster content",
      "Customer case studies and long-form essays",
      "Conversion-focused landing page copy",
      "Email courses and lifecycle sequences",
    ],
    stack: ["Notion", "Figma", "Grammarly Pro", "Surfer SEO"],
  },
];

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

export const faqs = [
  {
    q: "What does an engagement with Swiftly look like?",
    a: "Most projects begin with a two-week discovery — interviews, audits, and a written plan with a fixed scope and timeline. From there we work in two-week cycles, shipping continuously and reviewing every Friday with the client team. Engagements are typically 8 to 16 weeks for a build, with optional retainer support after launch.",
  },
  {
    q: "Are you a full-time team or a network of freelancers?",
    a: "Swiftly is a small core team based in Iligan with a curated bench of senior collaborators we have worked with for years. Every project is led by a Swiftly principal who is on the engagement from kickoff to launch — there is no junior handoff and no offshore translation layer.",
  },
  {
    q: "How do you price work?",
    a: "Fixed price for defined-scope projects, monthly retainers for ongoing work. We share a written estimate with assumptions and a payment schedule before any contract is signed. We do not charge by the hour for project work, because we are paid for outcomes, not time.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes. About a third of our work is for clients in the US, Singapore, and Australia. We work in English, run two daily windows of overlap with each region, and our delivery process does not depend on real-time presence.",
  },
  {
    q: "What is the Isaiah 60:22 reference?",
    a: "It is the verse the studio is named for. We take it as a working philosophy — that small, disciplined work compounds, and that there is a season for ambitious things to happen quickly. It shapes how we think about quality and patience, not the work we accept.",
  },
];
