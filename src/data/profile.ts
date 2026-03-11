export type ImpactMetric = {
  label: string;
  value: number;
  suffix?: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  duration: string;
  description: string;
  achievements: string[];
  techStack: string[];
};

export type ProjectCaseStudy = {
  id: string;
  name: string;
  domain: string;
  overview: string;
  problem: string;
  solution: string;
  techStack: string[];
  impact: string[];
};

export const hero = {
  name: "Frontend Engineer",
  title: "Senior Frontend Engineer building scalable, high‑performance React & Next.js applications.",
  subtitle:
    "I design modular architectures, craft reusable component systems, and integrate complex APIs to ship resilient frontends that scale with the product roadmap.",
  location: "India",
};

export const impactMetrics: ImpactMetric[] = [
  { label: "UX improvement", value: 40, suffix: "%" },
  { label: "Performance optimization", value: 30, suffix: "%" },
  { label: "Engagement increase", value: 25, suffix: "%" },
  { label: "Load time reduction", value: 20, suffix: "%" },
];

export const about = {
  summary:
    "Over the last 4+ years, I have grown from shipping individual features to architecting React and Next.js platforms in EdTech, Travel, and FinTech. I focus on building systems that are easy to extend, measure, and maintain.",
  narrative: [
    "I started my journey in early frontend roles, learning how to turn product specs into interfaces that users actually enjoy using. Working closely with designers and backend teams, I learned to translate ambiguous requirements into clear components, data contracts, and interaction patterns.",
    "In the EdTech and FinTech space, I worked on dashboards, onboarding flows, and transactional journeys where reliability and clarity directly impacted revenue and trust. That pushed me to care deeply about performance budgets, meaningful loading states, and edge‑case handling.",
    "More recently, I have been responsible for React/Next.js architecture: defining folder structures, setting up design systems, and introducing patterns for state management, API integration, and caching. I partner with product managers, designers, and QA engineers in agile squads to iterate quickly while keeping technical debt under control.",
  ],
  collaboration:
    "I work best in cross‑functional agile teams, where I can pair with designers on UX details, sync with backend engineers on API contracts, and guide junior developers on frontend best practices.",
};

export const skills = {
  frontend: [
    "React.js",
    "Next.js App Router",
    "TypeScript",
    "JavaScript (ES2020+)",
    "HTML5",
    "CSS3",
  ],
  stateManagement: ["Redux", "Redux Toolkit", "React Query", "Context API"],
  uiFrameworks: ["Tailwind CSS", "Framer Motion", "Material UI", "Ant Design"],
  architecture: [
    "Modular feature‑based architecture",
    "Reusable component libraries",
    "Design systems",
    "API layer abstraction",
    "Performance budgeting & profiling",
    "Responsive & accessible UI",
  ],
  tools: [
    "Git & GitHub",
    "Jira / Agile boards",
    "Figma handoff & inspection",
    "ESLint & Prettier",
    "Postman",
  ],
};

export const experiences: ExperienceItem[] = [
  {
    company: "Insphere Solution Pvt Ltd",
    role: "Frontend Engineer",
    duration: "2023 — Present",
    description:
      "Building scalable React/Next.js platforms in FinTech with a focus on dashboards and high‑traffic transactional flows.",
    achievements: [
      "Led performance optimization initiatives that reduced key page load times and improved Core Web Vitals.",
      "Introduced a reusable component library shared across multiple FinTech products, reducing duplication and inconsistencies.",
      "Collaborated with product and design to refine complex money‑movement journeys with measurable UX improvements.",
    ],
    techStack: ["React", "Next.js", "TypeScript", "Redux Toolkit", "Tailwind CSS"],
  },
  {
    company: "WebETechies Pvt Ltd",
    role: "Frontend Developer",
    duration: "2021 — 2023",
    description:
      "Worked on EdTech and Travel platforms, building responsive user journeys and maintaining production applications.",
    achievements: [
      "Implemented modular UI architecture for a travel booking platform, improving feature delivery speed.",
      "Improved engagement on key learning and booking flows by refining UX and adding data‑driven UI enhancements.",
      "Partnered with backend teams to define API contracts and handle edge cases gracefully in the UI.",
    ],
    techStack: ["React", "JavaScript", "Redux", "REST APIs", "CSS Modules"],
  },
  {
    company: "Quantum Asia Pvt Ltd",
    role: "Frontend Developer",
    duration: "2019 — 2021",
    description:
      "Contributed to early frontend initiatives, focusing on pixel‑perfect implementations and component reuse.",
    achievements: [
      "Migrated legacy UI pieces into reusable React components to reduce maintenance overhead.",
      "Collaborated in agile sprints with QA and backend teams to ship reliable releases.",
      "Helped standardize basic coding practices and Git workflows within the team.",
    ],
    techStack: ["React", "JavaScript", "Bootstrap", "jQuery"],
  },
];

export const projects: ProjectCaseStudy[] = [
  {
    id: "tripscroll",
    name: "TripScroll — Travel Booking Platform",
    domain: "Travel / SaaS",
    overview:
      "TripScroll is a responsive travel booking experience for flights, hotels, and packages, designed for high conversion on both desktop and mobile.",
    problem:
      "Legacy booking flows were fragmented and slow, leading to drop‑offs during search and checkout on mobile devices.",
    solution:
      "Designed a modular React architecture with reusable search, filter, and checkout components. Implemented skeleton states, debounced search, and clear error handling to keep users in flow.",
    techStack: ["React", "TypeScript", "Redux", "REST APIs", "Tailwind CSS"],
    impact: [
      "Improved task completion for booking flows by ~40%",
      "Reduced perceived load time on search results via skeletons and incremental data loading",
    ],
  },
  {
    id: "pay2mobiles-retail",
    name: "Pay2Mobiles — AEPS/DMT Retail Panel",
    domain: "FinTech / AEPS & DMT",
    overview:
      "A transaction‑heavy AEPS/DMT retailer panel for agents to perform cash‑in, cash‑out, and remittance operations with confidence.",
    problem:
      "Agents needed a fast, reliable way to execute high‑volume transactions with clear feedback on success, failure, and settlement status.",
    solution:
      "Built a dashboard with real‑time status indicators, clear transactional histories, and guardrails against duplicate submissions. Introduced consistent form patterns and validation across all flows.",
    techStack: ["React", "Next.js", "TypeScript", "Redux Toolkit", "REST APIs"],
    impact: [
      "Reduced transaction errors by improving validation and UX copy",
      "Increased agent throughput by making critical actions reachable within 1–2 clicks",
    ],
  },
  {
    id: "pay2mobiles-admin",
    name: "Pay2Mobiles — Admin Dashboard",
    domain: "FinTech / Admin",
    overview:
      "An internal admin console for monitoring AEPS/DMT performance, reconciling transactions, and managing users and limits.",
    problem:
      "Operations teams lacked a unified, real‑time view of system health and transaction anomalies, slowing down resolution.",
    solution:
      "Implemented configurable tables, drill‑down views, and alerting surfaces. Standardized filters, exports, and detail views as reusable building blocks.",
    techStack: ["React", "Next.js", "TypeScript", "React Query", "Tailwind CSS"],
    impact: [
      "Improved time‑to‑insight for operations teams by consolidating key metrics into a single dashboard",
      "Enabled faster investigation via reusable filter and drill‑down patterns",
    ],
  },
  {
    id: "loan-portal",
    name: "Loan Processing Portal",
    domain: "FinTech / Lending",
    overview:
      "A multi‑step loan processing portal covering application intake, document upload, verification, and status tracking.",
    problem:
      "Existing loan processing required multiple disjointed tools, causing confusion for both customers and operations teams.",
    solution:
      "Designed guided multi‑step flows with progress tracking, contextual validation, and clear document requirements. Integrated with backend APIs for eligibility checks and status updates.",
    techStack: ["React", "TypeScript", "Redux", "REST APIs"],
    impact: [
      "Reduced application abandonment by clarifying steps and requirements",
      "Decreased support queries by surfacing real‑time status and next best actions",
    ],
  },
];

export const architectureThinking = {
  pillars: [
    {
      title: "Reusable component design",
      description:
        "I design components as part of a system, not single screens — with clear responsibilities, composition patterns, and props contracts that make future features cheaper to ship.",
      bullets: [
        "Establish UI primitives (layout, typography, buttons, cards) that scale across products.",
        "Standardize form, table, and modal patterns to keep UX consistent and reduce rework.",
        "Document component usage and constraints to make onboarding new developers easier.",
      ],
    },
    {
      title: "Redux & state optimization",
      description:
        "I use Redux and modern data libraries where they add clarity, keeping local and server state separate and predictable.",
      bullets: [
        "Normalize complex data in Redux to avoid duplication and stale caches.",
        "Use slices and selectors to keep components lean and testable.",
        "Leverage React Query or similar tools for server state where appropriate.",
      ],
    },
    {
      title: "API and caching strategy",
      description:
        "I treat the API layer as a first‑class part of the frontend architecture, with clear abstractions and caching strategies.",
      bullets: [
        "Abstract API calls behind typed client utilities or hooks.",
        "Use caching and invalidation rules to minimize over‑fetching.",
        "Design loading and error states that keep users informed without overwhelming them.",
      ],
    },
    {
      title: "Performance & DX",
      description:
        "I profile what matters, define budgets, and use modern tooling so teams can ship quickly without sacrificing quality.",
      bullets: [
        "Measure performance with Lighthouse and browser devtools, focusing on real user journeys.",
        "Use code‑splitting, lazy loading, and memoization where they offer meaningful wins.",
        "Keep the project structure predictable so teams can navigate and extend it confidently.",
      ],
    },
  ],
};

