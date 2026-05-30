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
  keyFeatures: string[];
  impact: string[];
};

export const hero = {
  name: "Priti Singh",
  designation: "Software Engineer (Frontend)",
  title: "Building scalable React & Next.js applications that ship real value.",
  subtitle:
    "I architect modular frontend systems, build reusable component libraries, and integrate complex APIs to deliver production-ready UIs across Government EdTech, FinTech, and Travel platforms.",
  location: "India",
  availability: "Open to Remote & Hybrid · ₹10–12+ LPA",
};

export const impactMetrics: ImpactMetric[] = [
  { label: "Years of frontend experience", value: 3, suffix: "+" },
  { label: "Production platforms delivered", value: 6, suffix: "+" },
  { label: "Industry domains", value: 3 },
  { label: "User roles & RBAC systems built", value: 4, suffix: "+" },
];

export const about = {
  summary:
    "I'm a Frontend Engineer with 3+ years of experience building production React and Next.js platforms across Government EdTech, FinTech, and Travel. I specialise in scalable component architecture, role-based access systems, and API-driven UIs that serve real users at scale.",
  narrative: [
    "At WebETechies, I spent 2+ years building FinTech and Travel products — Pay2Mobiles (BBPS, AEPS, DMT, mobile recharge) and TripScroll (flights, hotels, buses with seat/meal selection). Working on high-volume transactional UIs sharpened my instincts for state management, form validation, and resilient error handling in flows where every click carries real financial weight.",
    "At Insphere Solutions, I'm building frontend systems for government-scale EdTech — a platform serving students, volunteer teachers, and multi-level administrators through complex role-based access control and permission-driven dashboards. I also built Inspro, a School ERP with dedicated portals for students, parents, staff, and admins, covering attendance, fees, assignments, leave, and notices.",
    "Before moving into frontend, I spent 1.5 years as an Android Developer at Quantum Asia (NIC Patna), building government mobile applications for Bihar's field workforce. That grounding in reliability-first development, low-resource environments, and government-scale constraints still informs how I approach frontend engineering today.",
  ],
  collaboration:
    "I work best in cross-functional agile teams — collaborating with designers on UX precision, syncing with backend engineers on API contracts, and writing clean, composable frontends that the whole team can extend confidently.",
};

export const skills = {
  frontend: [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript (ES2020+)",
    "HTML5",
    "CSS3 / SCSS / SASS",
  ],
  stateManagement: [
    "Redux Toolkit",
    "Redux",
    "React Query",
    "Context API",
    "React Hooks",
  ],
  uiFrameworks: [
    "Tailwind CSS",
    "Material UI",
    "Bootstrap",
    "Framer Motion",
  ],
  architecture: [
    "Role-based access control (RBAC)",
    "Modular feature-based architecture",
    "Reusable component libraries",
    "Permission-based dashboard design",
    "API layer abstraction",
    "Responsive & accessible UI",
  ],
  tools: [
    "Git · GitHub · Bitbucket",
    "Jira · Agile workflows",
    "Postman · REST API testing",
    "Figma handoff & inspection",
    "ESLint & Prettier",
  ],
};

export const experiences: ExperienceItem[] = [
  {
    company: "Insphere Solutions Pvt. Ltd.",
    role: "Software Engineer (Frontend)",
    duration: "Jun 2025 — Present",
    description:
      "Building government-scale EdTech platforms and enterprise School ERP systems with complex multi-role hierarchies, permission-based dashboards, and CMS-driven content architecture.",
    achievements: [
      "Architected RBAC for a Government EdTech platform with 3+ distinct user tiers — students, volunteer teachers, and multi-level admins — each with role-specific onboarding, dashboards, and permission-gated access.",
      "Built Inspro School ERP from the ground up: four dedicated portals (Student, Parent, Staff, Admin) covering attendance, fee management, leave, assignments, and notices.",
      "Developed CMS-driven dynamic content platforms using reusable React component patterns, significantly reducing effort for new content page delivery.",
      "Established structured API integration patterns with typed hooks, consistent loading states, and graceful error handling across all user flows.",
    ],
    techStack: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "React Query",
      "Tailwind CSS",
      "Material UI",
    ],
  },
  {
    company: "WebETechies Pvt. Ltd.",
    role: "Frontend Developer",
    duration: "Jan 2023 — May 2025",
    description:
      "Built and maintained production FinTech and Travel platforms handling high-volume transactions, multi-step booking flows, and real-time state management for both end users and operators.",
    achievements: [
      "Developed Pay2Mobiles, a multi-service FinTech platform supporting BBPS bill payments, AEPS cash operations, DMT remittances, and mobile recharges — with real-time transaction feedback, status clarity, and duplicate-submission safeguards.",
      "Built the Pay2Mobiles Admin console covering user onboarding, Aadhaar-based KYC verification, wallet management, credit/debit controls, and full transaction tracking.",
      "Delivered TripScroll, a travel booking platform with end-to-end flows for flights, hotels, and buses — including seat selection, meal preferences, fare tracking, and booking management.",
      "Standardised reusable component patterns (tables, filters, forms, modals) across all products, reducing duplication and accelerating feature delivery.",
    ],
    techStack: [
      "React.js",
      "TypeScript",
      "JavaScript",
      "Redux",
      "Redux Toolkit",
      "Tailwind CSS",
      "Bootstrap",
      "REST APIs",
    ],
  },
  {
    company: "Quantum Asia Pvt. Ltd. (NIC Patna)",
    role: "Android Application Developer",
    duration: "Jan 2018 — Jul 2019",
    description:
      "Contract role building government mobile applications for Bihar state — focused on offline-capable field data collection and internal workforce management.",
    achievements: [
      "Developed a field data collection app used by Bihar government Sevikas, built for reliability in low-connectivity environments with offline-first data sync.",
      "Built an internal employee attendance management application with daily tracking, reporting, and admin visibility features.",
      "Delivered both projects on contract schedule, coordinating directly with NIC Patna's technical team for integration and sign-off.",
    ],
    techStack: ["Android", "Java", "SQLite", "REST APIs"],
  },
];

export const projects: ProjectCaseStudy[] = [
  {
    id: "edtech-platform",
    name: "Government EdTech Platform",
    domain: "EdTech / Government",
    overview:
      "A government-scale EdTech platform serving students, volunteer teachers, and multi-level administrators — each with tailored onboarding flows, role-specific dashboards, and permission-gated access.",
    problem:
      "A government education programme needed a single frontend system to serve 3+ distinct user types with completely different workflows, data access, and UI requirements — without building separate apps or duplicating business logic.",
    solution:
      "Designed a modular RBAC architecture mapping user roles to permission sets, dynamically rendering dashboards and navigation per role. Built shared onboarding primitives (multi-step forms, document upload, verification steps) reused across all user types with role-specific configuration.",
    techStack: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "React Query",
      "Tailwind CSS",
    ],
    keyFeatures: [
      "Multi-tier RBAC: student, volunteer teacher, and admin hierarchies",
      "Role-specific onboarding flows with shared component primitives",
      "Permission-based dashboard rendering per user type",
      "Volunteer teacher onboarding with verification steps",
      "Scalable API integration layer with typed hooks and error states",
    ],
    impact: [
      "Single codebase serves 3+ distinct user roles with fully separate experiences",
      "Shared onboarding components cut duplication and reduced time to add new roles",
      "Centralised permission architecture makes access changes safe and auditable",
    ],
  },
  {
    id: "inspro-school-erp",
    name: "Inspro — School ERP System",
    domain: "EdTech / Enterprise ERP",
    overview:
      "A full-featured School ERP with four dedicated portals — Student, Parent, Staff, and Admin — covering attendance, fee management, assignments, leave, and notices.",
    problem:
      "Schools needed a unified system for 4 distinct user groups, each with different daily workflows, data visibility, and management tasks — while keeping the codebase maintainable and the UX intuitive per role.",
    solution:
      "Built a multi-portal ERP with shared UI primitives but role-specific route guards, form workflows, and data views. Used Redux Toolkit for cross-portal state and React Query for server-state caching to keep each portal fast and consistent.",
    techStack: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "React Query",
      "Material UI",
    ],
    keyFeatures: [
      "Four dedicated portals: Student, Parent, Staff, Admin",
      "Attendance tracking with daily and monthly reporting",
      "Fee management with payment history and due-date tracking",
      "Leave and assignment management with approval workflows",
      "Notices and announcements module across all portals",
    ],
    impact: [
      "Consolidated 4 distinct user workflows into one maintainable codebase",
      "Shared component library across portals reduced development overhead significantly",
      "Role-specific route protection ensured data-access security at the UI level",
    ],
  },
  {
    id: "tripscroll",
    name: "TripScroll — Travel Booking Platform",
    domain: "Travel / Consumer",
    overview:
      "An end-to-end travel booking platform covering flights, hotels, and buses — with real-time seat selection, meal preferences, fare tracking, and full booking management.",
    problem:
      "Fragmented booking flows across transport and accommodation led to user drop-offs during search and multi-step checkout. Real-time fare changes and seat availability updates caused state inconsistencies and confusion.",
    solution:
      "Architected a modular booking flow with clear step separation and persistent booking state. Implemented debounced search, skeleton loading states, real-time fare tracking, and optimistic UI patterns to keep users in flow without disruption.",
    techStack: [
      "React.js",
      "TypeScript",
      "Redux",
      "REST APIs",
      "Tailwind CSS",
    ],
    keyFeatures: [
      "Flight, hotel, and bus booking in a unified platform",
      "Interactive seat selection UI with live availability indicators",
      "Meal selection and passenger preference management",
      "Live fare tracking with change notifications",
      "Full booking management and itinerary dashboard",
    ],
    impact: [
      "Modular booking architecture reduced time-to-ship for new travel verticals",
      "Skeleton states and debounced search improved perceived performance on high-latency search flows",
      "Consistent error and edge-case handling reduced booking abandonment",
    ],
  },
  {
    id: "pay2mobiles",
    name: "Pay2Mobiles — FinTech Platform",
    domain: "FinTech / Payments",
    overview:
      "A multi-service FinTech platform for retail agents handling BBPS bill payments, AEPS cash operations, DMT remittances, and mobile recharges — paired with a full admin console for operations and compliance.",
    problem:
      "Retail agents executing high-volume financial transactions needed fast, unambiguous UIs with zero tolerance for duplicate submissions or unclear status. Admin teams lacked a unified view for KYC, wallet management, and transaction monitoring.",
    solution:
      "Built the retail panel with real-time status indicators, duplicate-submission guards, and clear transaction history. The admin console consolidates user onboarding, Aadhaar KYC verification, wallet controls, and transaction tracking into reusable table-and-filter components.",
    techStack: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "React Query",
      "REST APIs",
    ],
    keyFeatures: [
      "BBPS, AEPS, DMT, and mobile recharge on a single platform",
      "Real-time transaction status with failure reasons and retry handling",
      "Admin: Aadhaar-based KYC verification flow",
      "Wallet and credit/debit management for agent accounts",
      "Transaction history with search, filters, and export",
    ],
    impact: [
      "Reduced transaction errors through strict validation, status clarity, and duplicate guards",
      "Consolidated admin operations into one dashboard, improving ops-team response time",
      "Reusable table and filter components accelerated delivery of new admin features",
    ],
  },
];

export const architectureThinking = {
  pillars: [
    {
      title: "RBAC & permission-driven UI",
      description:
        "I treat access control as a first-class frontend concern — mapping roles to permissions centrally and letting the UI render dynamically from those rules rather than scattering conditionals through components.",
      bullets: [
        "Map user roles to permission sets at the API layer, not hardcoded in JSX.",
        "Drive navigation, dashboard layout, and route guards from a single permission context.",
        "Keep access logic centralised so any permission change reflects consistently across the app.",
      ],
    },
    {
      title: "Reusable component architecture",
      description:
        "I design components as part of a system — with clear responsibilities, composition patterns, and prop contracts that make new features cheaper to ship and existing ones easier to maintain.",
      bullets: [
        "Establish shared primitives (forms, tables, modals, layouts) reused across product verticals.",
        "Standardise multi-step form, filter, and data-table patterns to eliminate per-feature rework.",
        "Keep component APIs narrow and composable so they stay reusable as requirements evolve.",
      ],
    },
    {
      title: "State management strategy",
      description:
        "I keep client state and server state separated by concern — Redux Toolkit for global UI/auth state, React Query for server-state caching and invalidation, and local state for everything else.",
      bullets: [
        "Use Redux Toolkit slices for auth, permissions, and cross-component UI state.",
        "Use React Query for data fetching with explicit stale-time policies and background refetch.",
        "Keep component-local state local — only lift what genuinely needs to be shared.",
      ],
    },
    {
      title: "API integration & resilience",
      description:
        "I abstract the API layer behind typed hooks and service utilities, and design loading, empty, and error states as first-class parts of every data-dependent surface.",
      bullets: [
        "Abstract all API calls behind typed hooks — no raw fetch scattered through components.",
        "Design loading, empty, error, and stale states for every data-dependent UI surface.",
        "Use optimistic updates and retries where they meaningfully reduce perceived friction.",
      ],
    },
  ],
};
