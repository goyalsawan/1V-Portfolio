export interface ServiceDeliverable {
  title: string;
  points: string[];
}

export interface ServicePillar {
  id: string;
  title: string;
  shortTitle: string;
  badge: string;
  color: "indigo" | "emerald" | "sky" | "purple" | "amber";
  tagline: string;
  description: string;
  deliverables: string[];
  technologies: string[];
  relatedProjectSlug?: string;
  relatedProjectTitle?: string;
}

export interface EngagementModel {
  title: string;
  timeline: string;
  bestFor: string;
  description: string;
  badge: string;
  color: "indigo" | "emerald" | "amber";
}

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    id: "backend-architecture",
    title: "Backend & Distributed Systems Architecture",
    shortTitle: "Backend Architecture",
    badge: "HIGH-THROUGHPUT & RELIABILITY",
    color: "indigo",
    tagline: "Architecting resilient, low-latency microservices, streaming pipelines, and robust database layers.",
    description: "Designing end-to-end backend systems that handle high concurrency, stream LLM generation, and orchestrate complex asynchronous workflows with 99.9% uptime SLAs.",
    deliverables: [
      "High-throughput REST, GraphQL & gRPC API design",
      "Sub-100ms streaming LLM generation & WebSocket pipelines",
      "Asynchronous task queues (Celery, Redis, Kafka)",
      "Database schema architecture (PostgreSQL, pgvector, Redis, MongoDB)",
      "Role-Based Access Control (RBAC), OAuth2 & rate limiting"
    ],
    technologies: ["Python", "FastAPI", "Go", "Node.js", "PostgreSQL", "pgvector", "Redis", "Kafka", "Docker"],
    relatedProjectSlug: "customer-support-agent-platform",
    relatedProjectTitle: "Support Agent Platform"
  },
  {
    id: "frontend-engineering",
    title: "Full-Stack & Interactive Frontend Engineering",
    shortTitle: "Frontend Engineering",
    badge: "MODERN UX & STREAMING UI",
    color: "sky",
    tagline: "Building high-performance, responsive web dashboards with real-time generative AI interfaces.",
    description: "Translating complex AI workflows and spatial data into intuitive, lightning-fast user interfaces with component design systems and smooth animation states.",
    deliverables: [
      "Production Next.js / React / TypeScript web applications",
      "Real-time streaming generative AI interfaces & tool-call inspectors",
      "Design systems & accessible component libraries (Tailwind CSS, Radix UI)",
      "High-density analytics dashboards & spatial map visualizations",
      "Client-side performance optimization & Core Web Vitals tuning"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Mapbox", "Zustand"],
    relatedProjectSlug: "real-estate-property-intelligence",
    relatedProjectTitle: "Real Estate Property Intelligence"
  },
  {
    id: "cloud-devops",
    title: "Cloud Infrastructure, DevOps & Cost Optimization",
    shortTitle: "Cloud & DevOps",
    badge: "SCALABLE & COST-EFFICIENT",
    color: "emerald",
    tagline: "Designing scalable cloud architectures on AWS/GCP with automated CI/CD and cost governance.",
    description: "Deploying multi-tenant, zero-downtime infrastructure using infrastructure-as-code principles, automated testing gates, and aggressive cloud spend reduction.",
    deliverables: [
      "AWS & GCP cloud architecture (ECS, Cloud Run, Lambda, RDS, S3)",
      "Docker containerization & multi-stage lightweight builds",
      "Automated CI/CD pipelines via GitHub Actions with lint/test gates",
      "Cloud spend audits & compute optimization (downsizing waste)",
      "Infrastructure monitoring, logging & alert dispatchers"
    ],
    technologies: ["AWS", "GCP", "Docker", "Kubernetes", "GitHub Actions", "Terraform", "Cloudflare"],
    relatedProjectSlug: "ai-learning-management-platform",
    relatedProjectTitle: "AI Learning Management Platform"
  },
  {
    id: "ai-agentic-systems",
    title: "Production AI & Agentic Systems Engineering",
    shortTitle: "AI & Agentic Systems",
    badge: "MULTI-AGENT & RAG",
    color: "purple",
    tagline: "Developing production-grade Multi-Agent orchestrations, hybrid RAG pipelines, and LLM guardrails.",
    description: "Bridging the gap between raw foundation models and enterprise reality through deterministic tool-calling, hybrid vector retrieval, and automated quality evaluation.",
    deliverables: [
      "Autonomous multi-agent workflows with state machines & fallback logic",
      "Enterprise RAG pipelines with hybrid dense + sparse vector search",
      "LLM latency optimization (prompt caching, speculative execution)",
      "Evaluation suites for hallucination prevention & output faithfulness",
      "Custom tool integration & external API execution sandboxes"
    ],
    technologies: ["LangChain", "LlamaIndex", "pgvector", "OpenAI / Claude APIs", "DeepEval", "Ollama", "Python"],
    relatedProjectSlug: "customer-support-agent-platform",
    relatedProjectTitle: "Support Agent Platform"
  },
  {
    id: "ai-business-consulting",
    title: "AI Strategy, Feasibility & Business Impact Consulting",
    shortTitle: "AI Strategy & Consulting",
    badge: "ROI & FEASIBILITY",
    color: "amber",
    tagline: "Consulting leadership teams on AI feasibility, ROI roadmaps, and secure enterprise adoption.",
    description: "Helping founders, engineering leaders, and product teams cut through AI hype to identify high-ROI opportunities, evaluate technical feasibility, and de-risk deployment.",
    deliverables: [
      "Technical AI feasibility audits & build-vs-buy decision matrix",
      "AI ROI calculation & token cost modeling for scale",
      "Data readiness assessments & proprietary knowledge indexing strategy",
      "Security, privacy & compliance review for enterprise LLM usage",
      "Technical architecture blueprints for executive leadership"
    ],
    technologies: ["AI Strategy", "ROI Modeling", "System Architecture", "Security Audits", "Data Governance"]
  }
];

export const ENGAGEMENT_MODELS: EngagementModel[] = [
  {
    title: "Contract MVP / Architecture Sprint",
    timeline: "2 to 6 Weeks",
    bestFor: "Early-stage startups & teams needing rapid 0-to-1 build or critical system overhaul.",
    description: "Fast-paced, scoped engagements to architect, build, and deploy production-ready AI backends, fullstack MVPs, or cloud pipelines.",
    badge: "HIGH VELOCITY",
    color: "indigo"
  },
  {
    title: "Fractional Architect / Tech Lead",
    timeline: "Monthly Retainer (10-20 hrs/week)",
    bestFor: "Growing engineering teams needing senior architectural oversight and AI guidance.",
    description: "Ongoing advisory on system design, code reviews, AI/LLM evaluation, cloud cost optimization, and upskilling in-house developers.",
    badge: "ADVISORY & LEADERSHIP",
    color: "emerald"
  },
  {
    title: "Full-Time Roles (Selective)",
    timeline: "Full-Time Commitment",
    bestFor: "Ambitious tech companies building mission-critical AI products with strong engineering culture.",
    description: "Open to compelling full-time roles as Senior Software Engineer, Full-Stack AI Engineer, or Solution Architect with high ownership.",
    badge: "HIGH OWNERSHIP",
    color: "amber"
  }
];
