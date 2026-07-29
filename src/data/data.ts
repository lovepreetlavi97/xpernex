export interface Service {
  slug: string;
  title: string;
  description: string;
  iconName: string;
  fullDescription: string;
  features: string[];
  process: { step: string; title: string; desc: string }[];
  metrics: { label: string; value: string }[];
}

export interface Project {
  slug: string;
  title: string;
  client: string;
  description: string;
  category: string;
  industry: string;
  metrics: { label: string; value: string }[];
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  image: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: { name: string; role: string; avatar: string };
  date: string;
  readTime: string;
  tags: string[];
  image: string;
}

export interface JobOpening {
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  salaryRange: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin: string;
}

export const servicesData: Service[] = [
  {
    slug: "vas",
    title: "VAS (Value Added Services)",
    description: "Developing high-throughput mobile integrations, SMS gateways, and telecom microservices.",
    iconName: "Smartphone",
    fullDescription: "Xpernex designs and delivers carrier-grade Value Added Services (VAS) architectures. We construct high-throughput SMS gateways, USSD messaging platforms, direct carrier billing (DCB) integrations, and mobile subscription middleware. Our solutions are engineered for sub-millisecond dispatch times and absolute fault tolerance, ensuring massive transaction handling under peak telecom loads.",
    features: [
      "High-performance SMS/MMS gateway APIs & SMTP integrations",
      "USSD menu orchestrations and interactive response scripts",
      "Direct Carrier Billing (DCB) & subscription ledger middleware",
      "Real-time mobile content delivery pipelines",
      "SMPP protocol connections and load-balanced traffic routing"
    ],
    process: [
      { step: "01", title: "Protocol Integration", desc: "Setting up secure SMPP, HTTP, and carrier core API connections." },
      { step: "02", title: "Routing Architecture", desc: "Designing load balancers and queues to sustain peak message volumes." },
      { step: "03", title: "Ledger Setup", desc: "Configuring atomic transactions for direct billing and ledger tracking." },
      { step: "04", title: "Load Validation", desc: "Simulating heavy traffic spikes to verify carrier gateway SLA limits." }
    ],
    metrics: [
      { label: "Dispatch Speed", value: "<15ms" },
      { label: "Throughput Capacity", value: "85k/sec" },
      { label: "Delivery SLA Ratio", value: "99.999%" }
    ]
  },
  {
    slug: "artificial-intelligence",
    title: "Artificial Intelligence",
    description: "Architecting generative AI pipelines, specialized LLM fine-tuning, and cognitive automation systems.",
    iconName: "BrainCircuit",
    fullDescription: "Xpernex designs and implements custom AI architectures that move beyond simple API integrations. We build intelligent agent networks, semantic knowledge bases, and custom reinforcement learning loops tailored to industry-specific datasets. Our solutions empower enterprises to automate reasoning, synthesize complex data, and build hyper-personalized customer experiences.",
    features: [
      "Custom Large Language Model (LLM) fine-tuning & deployment",
      "Retrieval-Augmented Generation (RAG) with vector databases",
      "Autonomous AI Agents for workflow orchestration",
      "Computer vision systems and natural language processing pipelines",
      "Ethical AI compliance, safety frameworks, and model alignment"
    ],
    process: [
      { step: "01", title: "Feasibility Assessment", desc: "Evaluating current data models, pipelines, and alignment opportunities." },
      { step: "02", title: "Architecture Design", desc: "Selecting the optimal foundation models, embedding strategies, and vector indexing." },
      { step: "03", title: "Training & RAG Setup", desc: "Fine-tuning models on proprietary corporate data and hooking up secure vector stores." },
      { step: "04", title: "Integration & Scaling", desc: "Deploying production-ready microservices with optimized token usage and low latency." }
    ],
    metrics: [
      { label: "Automation Efficiency", value: "+85%" },
      { label: "Context Accuracy", value: "99.2%" },
      { label: "Inference Latency", value: "<120ms" }
    ]
  },
  {
    slug: "machine-learning",
    title: "Machine Learning",
    description: "Building predictive scoring engines, anomaly detection, and deep learning analytics.",
    iconName: "TrendingUp",
    fullDescription: "Transform operational and transactional data into predictive business intelligence. We construct machine learning pipelines that train on structured and unstructured data, enabling real-time risk assessment, pricing models, demand forecasting, and predictive maintenance scheduling.",
    features: [
      "Predictive analytics & multi-variate regressions",
      "Anomaly detection for fraud prevention and quality control",
      "Recommendation engines & customer segmentation models",
      "Automated ML (AutoML) pipelines and continuous training loops",
      "Model interpretability and feature importance analysis"
    ],
    process: [
      { step: "01", title: "Data Engineering", desc: "Aggregating, cleaning, and preprocessing high-dimensional datasets." },
      { step: "02", title: "Feature Selection", desc: "Identifying key business variables and establishing evaluation baselines." },
      { step: "03", title: "Model Training", desc: "Executing ensemble, gradient boosting, or neural network algorithms." },
      { step: "04", title: "Deployment (MLOps)", desc: "Packaging models into versioned endpoints with continuous drift monitoring." }
    ],
    metrics: [
      { label: "Prediction Accuracy", value: "96.7%" },
      { label: "Feature Engineering Speed", value: "10x" },
      { label: "Decision Latency", value: "15ms" }
    ]
  },
  {
    slug: "enterprise-software",
    title: "Enterprise Software",
    description: "Developing scalable distributed systems, high-availability architecture, and ERP modules.",
    iconName: "ShieldCheck",
    fullDescription: "We build secure, robust, and highly available core enterprise software designed to scale with your organization. From microservices architectures to high-throughput transactional backends, our enterprise engineering focuses on durability, clean design patterns, and zero downtime integrations.",
    features: [
      "Distributed systems design with Go, Rust, or NestJS",
      "Domain-Driven Design (DDD) to match complex business workflows",
      "Multi-tenant SaaS setups with strict data partitioning",
      "High-throughput messaging queues (Kafka, RabbitMQ)",
      "Zero-trust security modeling and RBAC system design"
    ],
    process: [
      { step: "01", title: "Domain Discovery", desc: "Aligning software boundaries with corporate organizational structures." },
      { step: "02", title: "System Architecture", desc: "Mapping service communications, database schemas, and caching boundaries." },
      { step: "03", title: "Iterative Development", desc: "Rigorous coding with type-safe patterns and automated integration suites." },
      { step: "04", title: "Zero-Downtime Rollout", desc: "Executing blue-green deployments on resilient cloud infrastructure." }
    ],
    metrics: [
      { label: "System Uptime", value: "99.99%" },
      { label: "Request Handling", value: "50k/sec" },
      { label: "Database Latency", value: "<8ms" }
    ]
  },
  {
    slug: "web-development",
    title: "Web Development",
    description: "Crafting beautiful, reactive Next.js frontends, custom static generation, and web apps.",
    iconName: "Code2",
    fullDescription: "Our frontends represent the pinnacle of modern web design, speed, and usability. Leveraging Next.js, React Server Components, and static path optimization, we build web applications that achieve perfect Lighthouse scores, provide fluid, app-like interactivity, and capture organic traffic.",
    features: [
      "Next.js App Router & server-side rendering (SSR)",
      "Interactive interfaces with Tailwind CSS & Framer Motion",
      "Optimized Core Web Vitals and SEO metadata pipelines",
      "Accessibility (WCAG 2.1 AA) compliance",
      "PWA development and progressive web features"
    ],
    process: [
      { step: "01", title: "UX Wireframing", desc: "Defining user journeys and interactive mockups." },
      { step: "02", title: "Component Engineering", desc: "Structuring reusable, accessible UI elements in React." },
      { step: "03", title: "State & API Integration", desc: "Binding dynamic data with optimized client state and server queries." },
      { step: "04", title: "Global CDN Edge Delivery", desc: "Deploying to Vercel/Cloudflare CDN networks for lightning-fast loads." }
    ],
    metrics: [
      { label: "Lighthouse Performance", value: "98/100" },
      { label: "First Contentful Paint", value: "0.4s" },
      { label: "User Retention Rate", value: "+40%" }
    ]
  },
  {
    slug: "mobile-apps",
    title: "Mobile Apps",
    description: "Engineering native-performance React Native and Swift mobile experiences.",
    iconName: "Smartphone",
    fullDescription: "Deliver your digital product directly into users' pockets. We build responsive cross-platform and native mobile apps designed with beautiful tactile feedback, offline capabilities, secure data caching, and native hardware integrations.",
    features: [
      "React Native and native Swift/Kotlin applications",
      "Seamless push notification engines & background synchronization",
      "Biometric security and encrypted local storage",
      "In-app purchases, stripe payments, and subscriptions",
      "Continuous app store publishing pipelines (Fastlane)"
    ],
    process: [
      { step: "01", title: "Interaction Mockup", desc: "Designing tactile mobile user interfaces with dark/light themes." },
      { step: "02", title: "Core Logic Assembly", desc: "Building native modules and offline-first state synchronization." },
      { step: "03", title: "Hardware Integration", desc: "Hooking up GPS, camera, biometric sensors, and local databases." },
      { step: "04", title: "App Store Packaging", desc: "Automated provisioning, beta-testing via TestFlight, and release approval." }
    ],
    metrics: [
      { label: "App Store Rating", value: "4.9/5" },
      { label: "Crash-Free Users", value: "99.9%" },
      { label: "Battery Usage Impact", value: "<1.5%" }
    ]
  },
  {
    slug: "cloud-solutions",
    title: "Cloud Solutions",
    description: "Designing multi-cloud infrastructures, cloud-native deployments, and serverless backends.",
    iconName: "Cloud",
    fullDescription: "Move beyond single-server setups to highly resilient, global cloud architectures. We design secure virtual networks, serverless computation environments, multi-region databases, and auto-scaling logic on major providers to optimize costs and minimize downtime.",
    features: [
      "AWS, Google Cloud, and Microsoft Azure setup & auditing",
      "Serverless computing (AWS Lambda, Google Cloud Run)",
      "Multi-region database replica configurations",
      "Identity & Access Management (IAM) security structuring",
      "Cost optimization, resource grouping, and budgeting audits"
    ],
    process: [
      { step: "01", title: "Infrastructure Audit", desc: "Evaluating current workloads and planning cloud migrations." },
      { step: "02", title: "Multi-Region Topology", desc: "Designing high-availability failovers and CDN distributions." },
      { step: "03", title: "Provisioning", desc: "Automating cloud resource creation via Infrastructure as Code." },
      { step: "04", title: "Load & Chaos Testing", desc: "Simulating outages and peak load spikes to verify auto-recovery systems." }
    ],
    metrics: [
      { label: "Cloud Cost Efficiency", value: "-35%" },
      { label: "Recovery Point Objective", value: "0sec" },
      { label: "Global Edge Locations", value: "200+" }
    ]
  },
  {
    slug: "devops",
    title: "DevOps",
    description: "Automating pipelines with Kubernetes, Docker, and GitOps CI/CD flows.",
    iconName: "Cpu",
    fullDescription: "Eliminate manual release bottlenecks. We implement continuous integration and continuous deployment pipelines, automate infrastructure utilizing Kubernetes and Docker, and configure automated logs, metrics, and health alarms.",
    features: [
      "Infrastructure as Code (IaC) with Terraform & OpenTofu",
      "Kubernetes cluster administration & container orchestration",
      "CI/CD pipelines with GitHub Actions, GitLab, and ArgoCD",
      "Observability stacks (Prometheus, Grafana, Datadog)",
      "GitOps setups for automatic, declarative deployments"
    ],
    process: [
      { step: "01", title: "Flow Assessment", desc: "Identifying bottlenecks in build, test, and release cycles." },
      { step: "02", title: "Containerization", desc: "Creating optimized, slim, secure Docker images for all apps." },
      { step: "03", title: "Pipeline Integration", desc: "Automating static analysis, testing, and registry uploads." },
      { step: "04", title: "Cluster Provisioning", desc: "Spinning up Kubernetes pods, routing, and auto-scalers." }
    ],
    metrics: [
      { label: "Deployment Frequency", value: "Multiple/Day" },
      { label: "Rollback Time", value: "<1min" },
      { label: "Build & Test Time", value: "<5min" }
    ]
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    description: "Crafting beautiful digital experiences, interactive design, and premium typography.",
    iconName: "Palette",
    fullDescription: "Design is not just what it looks like; it's how it feels and works. We create premium design systems, clean animations, and logical structures that visually captivate and structurally guide your users, placing a massive focus on user research and aesthetic polish.",
    features: [
      "Custom premium UI design and layout creation",
      "Figma design systems with component variants and variables",
      "Aesthetic interactions, transitions, and motion styling",
      "User research, feedback tests, and high-fidelity prototypes",
      "Accessibility audits and color palette engineering"
    ],
    process: [
      { step: "01", title: "User Research", desc: "Analyzing user expectations, competitor interfaces, and layout trends." },
      { step: "02", title: "Design System Build", desc: "Establishing strict typography scales, colors, and interactive buttons." },
      { step: "03", title: "High-Fidelity Mockups", desc: "Creating actual screens with realistic typography, images, and content." },
      { step: "04", title: "Developer Handoff", desc: "Exporting structured variables, motion parameters, and pixel guidelines." }
    ],
    metrics: [
      { label: "User Engagement", value: "+60%" },
      { label: "Task Completion Rate", value: "98%" },
      { label: "Accessibility Score", value: "100%" }
    ]
  },
  {
    slug: "saas-development",
    title: "SaaS Development",
    description: "Building subscription portals, tenant databases, and usage-based billing structures.",
    iconName: "Layers",
    fullDescription: "Build your next digital product with modular SaaS blueprints. We set up isolated multi-tenant databases, stripe subscription systems with complex pricing structures, seat provisioning, and user usage tracking dashboards.",
    features: [
      "Multi-tenant database architectures (logical or physical isolation)",
      "Stripe billing integrations (tiers, usage metrics, credits)",
      "Seat management, invitation links, and enterprise SSO (SAML)",
      "Customer metrics dashboards (MRR, Churn, LTV logs)",
      "Modular feature-flagging mechanisms"
    ],
    process: [
      { step: "01", title: "Billing Blueprint", desc: "Designing tiers, free trial structures, and transactional flows." },
      { step: "02", title: "Data Partitioning", desc: "Establishing secure multi-tenant queries and logical database isolations." },
      { step: "03", title: "Portal Implementation", desc: "Building subscription settings, invoice histories, and usage charts." },
      { step: "04", title: "Security Audit", desc: "Checking authorization boundaries to prevent cross-tenant leaks." }
    ],
    metrics: [
      { label: "Billing Reliability", value: "100%" },
      { label: "SaaS Load Capacity", value: "100k+ Users" },
      { label: "Time-to-Market", value: "12 Weeks" }
    ]
  },
  {
    slug: "api-development",
    title: "API Development",
    description: "Developing hyper-performance GraphQL schemas, gRPC pipelines, and REST APIs.",
    iconName: "Network",
    fullDescription: "Connect your applications with clean, fast, and structured APIs. We build ultra-high-throughput endpoints, define type-safe API schema contracts, and deploy developer portals with automated OpenAPI / Swagger documentation.",
    features: [
      "High-speed REST, GraphQL, and gRPC endpoints",
      "Automated documentation generation & interactive sandboxes",
      "API rate limiting, security controls, and bearer authorization",
      "Webhook delivery networks with retries and signature verification",
      "Schema validation & request filtering with Zod / AJV"
    ],
    process: [
      { step: "01", title: "Schema Definition", desc: "Defining strict OpenAPI/GraphQL contracts and JSON schemas." },
      { step: "02", title: "Controller Design", desc: "Coding fast handlers, database queries, and caching keys." },
      { step: "03", title: "Security Layers", desc: "Adding API gateways, DDoS blocks, and JWT verifications." },
      { step: "04", title: "Portal Publishing", desc: "Publishing SDKs, playgrounds, and developer usage charts." }
    ],
    metrics: [
      { label: "Average API Response", value: "4ms" },
      { label: "Endpoint Reliability", value: "99.999%" },
      { label: "SDK Typesafety", value: "100%" }
    ]
  },
  {
    slug: "automation",
    title: "Automation",
    description: "Automating repetitive data pipelines, web scrapers, and bot prevention bypasses.",
    iconName: "Workflow",
    fullDescription: "Save thousands of hours of manual operations. We build complex workflow nodes, data synchronizers, scraper nets, and automated RPA robots that handle file transfers, data entry, and PDF processing reliably.",
    features: [
      "Robotic Process Automation (RPA) & background script runners",
      "ETL data pipelines with database mappings & transformation rules",
      "Web scraping frameworks with proxy pools & JS rendering support",
      "Automated document parsers utilizing OCR & AI vision",
      "Third-party webhook routing and unified messaging layers"
    ],
    process: [
      { step: "01", title: "Workflow Mapping", desc: "Deconstructing manual office tasks into programmatic node loops." },
      { step: "02", title: "Script Drafting", desc: "Creating selectors, data parser modules, and error-catch handlers." },
      { step: "03", title: "Queue Configuration", desc: "Setting up background worker pools to handle retry-logic." },
      { step: "04", title: "Dashboard Launch", desc: "Providing execution charts, logs, and failure alert notifications." }
    ],
    metrics: [
      { label: "Hours Saved / Month", value: "240hrs" },
      { label: "Error Rate Reduction", value: "99.8%" },
      { label: "Execution Time", value: "Seconds" }
    ]
  },
  {
    slug: "digital-transformation",
    title: "Digital Transformation",
    description: "Migrating legacy monolithic databases to serverless networks and microservices.",
    iconName: "Zap",
    fullDescription: "Empower your business for the modern digital era. We audit old legacy architectures, design modern software blueprints, and transition old mainframe databases and codebases to fast, secure, serverless cloud solutions without interrupting operations.",
    features: [
      "Legacy software audit, evaluation, and deprecation plan",
      "Database schema modernization & high-integrity migration pipelines",
      "Monolith decomposition into serverless/microservice layers",
      "Modern development practice training and CI/CD onboarding",
      "Enterprise software integration (CRM, ERP, Billing, SSO)"
    ],
    process: [
      { step: "01", title: "Auditing Systems", desc: "Analyzing legacy databases, schemas, and dependencies." },
      { step: "02", title: "Migration Design", desc: "Drafting a safe zero-downtime, step-by-step database sync scheme." },
      { step: "03", title: "Parallel Running", desc: "Operating old and new systems concurrently to verify consistency." },
      { step: "04", title: "Switchover", desc: "Decommissioning legacy mainframes and scaling up the new cloud stack." }
    ],
    metrics: [
      { label: "Migration Data Loss", value: "0.0%" },
      { label: "Performance Gain", value: "400%" },
      { label: "Maintenance Cost", value: "-60%" }
    ]
  }
];

export const projectsData: Project[] = [
  {
    slug: "aurora-ai-financial-analytics",
    title: "Aurora AI: Financial Analytics Platform",
    client: "Aurora Asset Management",
    description: "A high-performance trading analytics dashboard processing millions of real-time market data points and generating predictive trend scores.",
    category: "Artificial Intelligence",
    industry: "Finance",
    metrics: [
      { label: "Data Throughput", value: "1.2M/sec" },
      { label: "Forecast Accuracy", value: "94.2%" },
      { label: "Response Latency", value: "8ms" }
    ],
    challenge: "Aurora Asset Management struggled to ingest multiple market streams and calculate risk models on the fly. Their legacy database locked up under volatile market activity, causing portfolio managers to make decisions on stale financial indexes.",
    solution: "We designed a real-time event pipeline using Apache Kafka and Apache Flink, writing normalized data into a PostgreSQL cluster with TimescaleDB. The dashboard front-end was crafted with Next.js and high-frequency WebSocket channels, backed by custom AI-driven risk evaluation microservices written in Go.",
    results: [
      "Eliminated system lockups during peak market volatility.",
      "Improved portfolio manager decision speeds by 12x.",
      "Enabled real-time risk simulation calculations, previously taking 2 hours, in under 1.5 seconds."
    ],
    technologies: ["Next.js", "Go", "Kafka", "TimescaleDB", "TensorFlow", "React Three Fiber"],
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200&auto=format&fit=crop"
  },

  {
    slug: "apex-logistics-fleet-optimization",
    title: "Apex: Global Logistics Coordinator",
    client: "Apex Cargo Group",
    description: "A machine learning navigation routing engine coordinating over 15,000 active delivery vehicles and optimizing fuel consumption.",
    category: "Machine Learning",
    industry: "Logistics",
    metrics: [
      { label: "Fuel Expenses Saved", value: "$4.2M/yr" },
      { label: "On-Time Delivery", value: "98.9%" },
      { label: "Active Routes Scheduled", value: "15k" }
    ],
    challenge: "Apex Cargo Group was experiencing extreme fuel price volatility. Delivery routes planned with standard mapping software failed to account for commercial vehicle profiles, dynamic traffic jams, and drop-off time slots, wasting millions annually.",
    solution: "We constructed a multi-agent reinforcement learning algorithm that runs on AWS SageMaker. The system ingests live vehicle GPS updates, local weather reports, and traffic speeds, calculating optimal route re-dispatching instructions on the fly.",
    results: [
      "Optimized dispatch routes dynamically, reducing empty driving miles by 18%.",
      "Improved overall fleet punctuality rate to 98.9%.",
      "Allowed automated scheduling of complex multi-stop routes in under 3 minutes."
    ],
    technologies: ["Python", "TensorFlow", "Kubernetes", "AWS SageMaker", "Go", "Redis", "Google Cloud Maps"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop"
  },
  {
    slug: "velox-saas-b2b-billing",
    title: "Velox: High-Velocity SaaS Billing Engine",
    client: "Velox Technologies",
    description: "An SDK-driven API platform managing high-frequency recurring billing, billing metrics, and seat allocations for global software businesses.",
    category: "SaaS Development",
    industry: "Software",
    metrics: [
      { label: "Billing Queries / Sec", value: "25k" },
      { label: "Transaction Volume", value: "$180M" },
      { label: "API SLA Uptime", value: "99.999%" }
    ],
    challenge: "Velox needed a billing backend capable of handling millions of micro-transactions, subscription upgrades, and downgrades across various geographic currencies without dropping billing records or generating duplicate transactions.",
    solution: "We designed a ledger-first billing engine written in Rust and Node.js. By utilizing PostgreSQL's transactional locks and Redis clusters to check user seat state, we ensured double-spend protection. We built a beautiful dashboard with Next.js to provide clear visualizations of key SaaS metrics (MRR, LTV).",
    results: [
      "Deployed a billing API with a sub-5ms response rate globally.",
      "Safely processed $180M in transaction volume without a single ledger conflict.",
      "Provided an intuitive customer dashboard that reduced billing-related support tickets by 65%."
    ],
    technologies: ["Next.js", "Node.js", "Rust", "PostgreSQL", "Redis", "GraphQL", "Docker"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
  },
  {
    slug: "ecomflow-headless-retail-network",
    title: "EcomFlow: Global Headless Commerce",
    client: "Zenith Retail Brands",
    description: "A lightning-fast, headless e-commerce frontend architecture linked to multiple inventory warehouses and payment systems.",
    category: "Web Development",
    industry: "Retail",
    metrics: [
      { label: "Page Load Speed", value: "0.3s" },
      { label: "Checkout Conversions", value: "+32%" },
      { label: "Monthly Web Visitors", value: "4.5M" }
    ],
    challenge: "Zenith Retail Brands operated a monolithic web storefront that took 4.5 seconds to load on mobile devices, leading to high cart abandonment rates and low conversion statistics.",
    solution: "We designed a headless, serverless store architecture. We implemented a Next.js App Router frontend deployed on Vercel's global edge network, fetching structured product data from dynamic GraphQL APIs and caching inventory status via Redis keys.",
    results: [
      "Accelerated page speed significantly, capturing immediate mobile checkouts.",
      "Booster conversion metrics by 32% within the first month of deployment.",
      "Lowered checkout database overhead cost by cache-optimizing catalog indexes."
    ],
    technologies: ["Next.js", "Tailwind CSS", "GraphQL", "Redis", "Stripe API", "Vercel"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
  },
  {
    slug: "quantum-smart-grid-automation",
    title: "Quantum: Smart Grid Infrastructure",
    client: "Quantum Power Grid",
    description: "An automated grid distribution manager predicting energy spikes, scheduling battery cycles, and dispatching warning flags.",
    category: "Automation",
    industry: "Manufacturing",
    metrics: [
      { label: "Energy Storage Efficiency", value: "+22%" },
      { label: "Power Blackout Incidents", value: "0" },
      { label: "Warning Alert Speed", value: "2s" }
    ],
    challenge: "Quantum Power Grid needed to balance energy input from fluctuating renewable sources (wind, solar) with peak consumer grid demands, while preventing overloads on aging transformers.",
    solution: "We built an automation dashboard that connects to thousands of smart grid IoT relays. The system processes streams through Python ML microservices, which predict peak loads and trigger automated switch relays to distribute load safely.",
    results: [
      "Improved green energy utilization efficiency by 22%.",
      "Prevented local transformer overloads by automating dynamic load balancing.",
      "Provided maintenance technicians with instant warning logs on smart handheld devices."
    ],
    technologies: ["Python", "NestJS", "Docker", "Kubernetes", "Google Cloud IoT", "PostgreSQL", "REST API"],
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1200&auto=format&fit=crop"
  }
];

export const blogPostsData: BlogPost[] = [
  {
    slug: "architecting-nextjs-15-enterprise-applications",
    title: "Architecting Next.js 15 for High-Throughput Enterprise Systems",
    excerpt: "Explore advanced architectural strategies for Next.js 15 App Router, focusing on route optimization, React Server Components (RSC), and edge caching configurations.",
    content: "Next.js 15 marks a significant milestone in modern web architecture. By combining React Server Components (RSC), edge handlers, and fine-grained cache control, developers can build interfaces that feel instantaneous while maintaining robust database integrity. In this article, we deep-dive into domain segmentation, database query caching, and dynamic rendering strategies designed to handle over 100,000 concurrent sessions without hitting database bottlenecks...",
    category: "Web Development",
    author: { name: "Sarah Lin", role: "Principal Frontend Architect", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop" },
    date: "July 24, 2026",
    readTime: "6 min read",
    tags: ["Next.js", "React Server Components", "Architecture", "Web Development"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop"
  },
  {
    slug: "optimizing-token-costs-rag-pipelines",
    title: "Reducing Vector Context Overhead and Token Costs in LLM RAG Pipelines",
    excerpt: "Learn how to save up to 60% on OpenAI and Anthropic API fees by optimizing vector search embeddings, semantic chunking, and context ranking.",
    content: "Large Language Models have revolutionized enterprise workflows, but semantic search queries can quickly run up massive token bills. By implementing advanced semantic chunking, multi-level indexing, and cross-encoder ranking, companies can construct RAG pipelines that send highly precise context snippets to the LLM, reducing input token size, lowering billing overheads, and improving response accuracy...",
    category: "Artificial Intelligence",
    author: { name: "Dr. Alex Rivera", role: "Director of AI Research", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" },
    date: "July 18, 2026",
    readTime: "8 min read",
    tags: ["AI", "RAG", "Vector Databases", "OpenAI", "Finance"],
    image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=800&auto=format&fit=crop"
  },
  {
    slug: "rust-vs-go-microservices-latency",
    title: "Rust vs. Go for Enterprise Microservices: A Real-World Performance Analysis",
    excerpt: "An in-depth comparison of microservice performance metrics, including CPU footprint, garbage collection latency, and deployment complexity.",
    content: "When choosing a backend stack for high-throughput distributed systems, developers often weigh Go's developer velocity against Rust's raw execution speed. We migrated one of our core client transaction microservices from Node.js to Go and Rust to measure performance. The results highlight how each language handles memory allocations, network concurrency, and long-running database sessions under load...",
    category: "Enterprise Software",
    author: { name: "Marcus Thorne", role: "VP of Engineering", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop" },
    date: "July 12, 2026",
    readTime: "10 min read",
    tags: ["Rust", "Go", "Microservices", "DevOps", "Backend"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop"
  },
  {
    slug: "designing-accessible-glassmorphic-uis",
    title: "Designing Accessible Glassmorphic Interfaces for Modern Web Dashboards",
    excerpt: "How to maintain high visual appeal using backdrop-filters and shadows while fully complying with WCAG 2.1 contrast rules.",
    content: "Glassmorphism provides depth, premium hierarchy, and sleek styling to modern dashboards. However, translucent panels and vibrant background glows often result in poor text contrast, making interfaces difficult to navigate for visually impaired users. In this design log, we explore how to layer solid backup elements, configure dynamic focus borders, and use proper ARIA roles to build stunning and accessible interfaces...",
    category: "UI/UX Design",
    author: { name: "Elena Rostova", role: "Creative Director", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop" },
    date: "July 05, 2026",
    readTime: "5 min read",
    tags: ["UI/UX", "Glassmorphism", "CSS", "Accessibility"],
    image: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?q=80&w=800&auto=format&fit=crop"
  },
  {
    slug: "continuous-deployment-kubernetes-gitops",
    title: "Securing Continuous Deployment on Kubernetes with GitOps Principles",
    excerpt: "How to eliminate direct cluster access credentials by deploying ArgoCD and syncing declarative configurations automatically.",
    content: "Traditional CI/CD pipelines push builds directly to Kubernetes clusters, which requires storing highly sensitive admin keys inside repository configuration files. By reversing this workflow using GitOps tools like ArgoCD, the cluster pulls updates from a secure git repository. This approach increases overall system security, creates an audit log of all changes, and simplifies recovery in the event of an outage...",
    category: "DevOps",
    author: { name: "Devon Miller", role: "Lead DevSecOps Architect", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=100&auto=format&fit=crop" },
    date: "June 28, 2026",
    readTime: "7 min read",
    tags: ["DevOps", "Kubernetes", "Docker", "GitOps", "Security"],
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=800&auto=format&fit=crop"
  },
  {
    slug: "building-saas-stripe-billing",
    title: "Structuring Complex Usage-Based Billing Cycles with Stripe API",
    excerpt: "A guide to building flexible SaaS billing portals, handling usage reporting, and updating customer seat tiers in real time.",
    content: "Transitioning a SaaS product from static monthly tiers to usage-based billing can be highly complex. You need to report usage metrics reliably, manage seat updates, and handle invoice periods without generating calculation disputes. In this article, we outline database schema patterns and Stripe API configurations designed to handle dynamic billing structures seamlessly...",
    category: "SaaS Development",
    author: { name: "Jason Vance", role: "SaaS Systems Specialist", avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=100&auto=format&fit=crop" },
    date: "June 20, 2026",
    readTime: "9 min read",
    tags: ["SaaS", "Stripe", "Database", "Node.js", "API"],
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=800&auto=format&fit=crop"
  }
];

export const careersData: JobOpening[] = [
  {
    slug: "senior-ai-engineer-llms",
    title: "Senior AI Engineer - Large Language Models",
    department: "Artificial Intelligence",
    location: "San Francisco, CA / Remote",
    type: "Full-Time",
    description: "We are looking for a Senior AI Engineer to spearhead our LLM fine-tuning, RAG infrastructure, and agentic workflows. You will design, build, and deploy high-performance reasoning engines for enterprise clients across finance and healthcare.",
    requirements: [
      "5+ years of software development experience with Python, PyTorch, and ML engineering tools",
      "Deep understanding of LLM architectures, transformer layers, embedding spaces, and vector search mechanics",
      "Practical experience deploying open-source models (Llama, Mistral) on cloud cluster infrastructure",
      "Strong background in vector databases (Pinecone, Milvus, Qdrant) and RAG frameworks (LangChain, LlamaIndex)",
      "MS or PhD in Computer Science, Machine Learning, Mathematics, or equivalent research background is preferred"
    ],
    responsibilities: [
      "Fine-tune and deploy custom open-source foundation models for specific vertical industries",
      "Design and maintain scalable semantic search indexes and document chunking pipelines",
      "Collaborate with backend architects to integrate low-latency AI endpoints into client applications",
      "Conduct rigorous model evaluation tests, evaluating hallucinations, bias, and context alignment",
      "Write clean, documented, production-ready code with comprehensive unit test coverage"
    ],
    salaryRange: "$160,000 - $220,000 + Equity"
  },
  {
    slug: "principal-frontend-architect",
    title: "Principal Frontend Architect (Next.js)",
    department: "Web Development",
    location: "New York, NY / Hybrid",
    type: "Full-Time",
    description: "We are seeking a Principal Frontend Architect to define our frontend standards, design reusable UI systems, and build high-performance Next.js 15 web applications for global organizations.",
    requirements: [
      "8+ years of web engineering experience, focusing on React, Next.js, and TypeScript",
      "Exemplary knowledge of CSS layouts, tailwind configurations, and motion frameworks (Framer Motion, GSAP)",
      "Deep understanding of Next.js App Router, React Server Components (RSC), and edge computing models",
      "Strong commitment to web accessibility standards (WCAG 2.1 AA) and semantic markup layouts",
      "Proven track record of optimizing page load times, web vitals, and frontend bundlers"
    ],
    responsibilities: [
      "Lead the engineering of Next.js frontend web portals, ensuring top performance and accessibility",
      "Maintain and expand our core component libraries and theme standards",
      "Mentor mid-level frontend engineers and establish clear testing guidelines",
      "Collaborate with UI/UX designers to translate Figma frames into smooth animations",
      "Optimize client-side bundles and asset caching strategies on edge servers"
    ],
    salaryRange: "$180,000 - $240,000 + Equity"
  },
  {
    slug: "senior-distributed-systems-engineer",
    title: "Senior Distributed Systems Engineer (Go)",
    department: "Enterprise Software",
    location: "Remote (USA / Europe)",
    type: "Full-Time",
    description: "Join our core backend group to design resilient distributed systems, transaction ledgers, and API architectures capable of managing thousands of concurrent requests.",
    requirements: [
      "6+ years of software engineering experience, with 3+ years writing Go or Rust in production",
      "Excellent understanding of database architectures, schema optimization, and SQL transactions",
      "Hands-on experience configuring event streams (Kafka, RabbitMQ) and cache clusters (Redis)",
      "Familiarity with container systems (Docker, Kubernetes) and microservice routing schemes",
      "Degree in Computer Science, Software Engineering, or equivalent background"
    ],
    responsibilities: [
      "Develop and scale transaction engines, SaaS backends, and high-performance APIs in Go",
      "Optimize PostgreSQL database schemas, indexing strategies, and connection pools",
      "Build modular microservices with clean API contracts using REST, gRPC, and GraphQL",
      "Implement zero-trust security controls, OAuth flows, and strict RBAC architectures",
      "Write automated integration tests and load-test systems using k6 or similar frameworks"
    ],
    salaryRange: "$150,000 - $210,000 + Equity"
  },
  {
    slug: "devops-engineer-kubernetes",
    title: "DevOps Engineer (Kubernetes & GitOps)",
    department: "DevOps",
    location: "Remote (Global)",
    type: "Full-Time",
    description: "We are hiring a DevOps Engineer to automate and scale Kubernetes cluster deployments, build secure CI/CD pipelines, and manage our cloud infrastructure utilizing GitOps.",
    requirements: [
      "4+ years managing cloud infrastructure on AWS, Google Cloud, or Azure",
      "Expert knowledge of Kubernetes administration, Helm charts, and networking ingress controls",
      "Experience writing Infrastructure as Code (IaC) using Terraform or OpenTofu",
      "Proficiency with CI/CD tools (GitHub Actions, GitLab CI, ArgoCD)",
      "Background with monitoring systems (Prometheus, Grafana, Datadog, ELK stack)"
    ],
    responsibilities: [
      "Provision and maintain Kubernetes clusters, configuring auto-scaling and network security",
      "Build and secure continuous deployment pipelines using ArgoCD and GitOps practices",
      "Automate cloud resource provisioning via reusable Terraform modules",
      "Configure cluster monitoring, logs dashboards, and alert notification triggers",
      "Conduct regular security vulnerability scans on container images and cloud networks"
    ],
    salaryRange: "$140,000 - $190,000 + Equity"
  }
];

export const faqsData: FAQItem[] = [
  {
    id: "faq-1",
    question: "What industries does Xpernex specialize in?",
    answer: "Xpernex builds software and AI architectures for ambitious businesses across multiple verticals. We specialize in Healthcare (HIPAA-compliant platforms), Finance (real-time analytic engines), Logistics (routing optimization), Retail (headless commerce), Manufacturing (smart grid IoT systems), and high-growth SaaS Enterprises."
  },
  {
    id: "faq-2",
    question: "Do you integrate AI systems with existing legacy software?",
    answer: "Yes, we regularly integrate AI pipelines and Large Language Models with legacy systems. We audit your existing architecture, design secure proxy APIs, build vector databases to ingest your proprietary company records, and deploy models that securely communicate with your legacy databases."
  },
  {
    id: "faq-3",
    question: "What is your project development process?",
    answer: "We follow a 7-step process designed for enterprise scale: Discover (user research, technical feasibility), Plan (system architecture, backlog), Design (Figma system building), Develop (RSC frontends, Go/Rust backends), Test (automated integration and load audits), Deploy (Vercel and Kubernetes rollouts), and Scale (observability drift checks)."
  },
  {
    id: "faq-4",
    question: "Do you work with startups, or only enterprise companies?",
    answer: "We partner with ambitious startups and mid-market organizations, as well as global enterprises. We tailor our design systems and architectures to scale with your user growth, ensuring that early-stage platforms can transition into large-scale systems seamlessly."
  },
  {
    id: "faq-5",
    question: "How do you ensure data security and compliance?",
    answer: "Security is built into our development process. We implement zero-trust authorization systems, role-based access controls, database row-level security, and encrypted transport protocols. For specialized domains, we build systems that comply with regulations like HIPAA and SOC2."
  }
];

export const teamMembers: TeamMember[] = [
  {
    name: "Marcus Thorne",
    role: "Co-Founder & VP of Engineering",
    bio: "Ex-NVIDIA, ex-Tesla lead systems architect. Focuses on high-performance distributed systems, microservices, and database scaling.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Dr. Alex Rivera",
    role: "Co-Founder & Director of AI",
    bio: "PhD in Machine Learning from Stanford. Former senior AI research scientist at OpenAI and Google DeepMind.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Elena Rostova",
    role: "Creative Director & UX Architect",
    bio: "Ex-Apple, ex-Stripe lead designer. Passionate about typography, responsive layouts, motion choreography, and design systems.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Sarah Lin",
    role: "Principal Frontend Architect",
    bio: "Next.js core contributor and web performance evangelist. Dedicated to optimization, accessibility, and clean React code.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=300&auto=format&fit=crop",
    linkedin: "https://linkedin.com"
  }
];

export const statsData = [
  { label: "Years of Industry Experience", value: "6+" },
  { label: "Custom Mobile App Delivered", value: "30+" }
];
