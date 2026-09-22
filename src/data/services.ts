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
    tagline: "Architecting resilient, low-latency microservices, Kafka streaming buses, and robust database layers.",
    description: "Designing end-to-end backend systems that handle high concurrency, stream real-time events at 80M+/hr, and orchestrate complex asynchronous workflows with 99.9% uptime SLAs.",
    deliverables: [
      "High-throughput REST, gRPC & WebSocket API design",
      "Event-driven streaming architectures (Kafka, Redis Pub/Sub)",
      "Asynchronous task worker queues (Celery, Redis, background jobs)",
      "Database schema architecture (PostgreSQL, pgvector, MongoDB, Elasticsearch)",
      "C++ in-path reverse-proxy modules & NGINX/WAF security integration"
    ],
    technologies: ["Python", "FastAPI", "Go", "C++", "Kafka", "PostgreSQL", "Redis", "Celery", "Elasticsearch"],
    relatedProjectSlug: "excalibur-bot-intelligence",
    relatedProjectTitle: "Excalibur Bot Defense"
  },
  {
    id: "frontend-engineering",
    title: "Full-Stack & Interactive Frontend Engineering",
    shortTitle: "Frontend Engineering",
    badge: "MODERN UX & STREAMING UI",
    color: "sky",
    tagline: "Building high-performance, responsive web dashboards with real-time audio playback and GIS maps.",
    description: "Translating complex AI workflows, spatial datasets, and candidate matching pipelines into intuitive, lightning-fast user interfaces with component design systems.",
    deliverables: [
      "Production Next.js / React / TypeScript web applications",
      "Real-time audio player interfaces & Voice AI interaction states",
      "Interactive GIS spatial mapping overlays & polygon visualizers",
      "Recruiter & analytics dashboards with 1-click decision controls",
      "Client-side performance optimization & Core Web Vitals tuning"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "GIS", "WebSockets"],
    relatedProjectSlug: "repss-property-scoring",
    relatedProjectTitle: "REPSS Property AI"
  },
  {
    id: "cloud-devops",
    title: "Cloud Infrastructure, DevOps & Observability",
    shortTitle: "Cloud & DevOps",
    badge: "SCALABLE & COST-EFFICIENT",
    color: "emerald",
    tagline: "Designing scalable cloud architectures on AWS (200+ EC2s) with automated CI/CD and telemetry.",
    description: "Deploying multi-tenant, zero-downtime infrastructure using AWS VPC, CloudFormation, Docker containerization, automated testing gates (Locust/JMeter), and Prometheus/Grafana monitoring.",
    deliverables: [
      "AWS cloud architecture (EC2, S3, Lambda, VPC, RDS, CloudFront)",
      "Docker containerization & multi-stage lightweight builds",
      "Automated CI/CD pipelines via Jenkins & GitHub Actions (88% faster deploys)",
      "Load testing & performance benchmarking (Locust, JMeter at 60k RPS)",
      "Production observability & metric dashboards (Prometheus, Grafana, CloudWatch)"
    ],
    technologies: ["AWS (EC2/S3/Lambda/VPC)", "Docker", "Jenkins", "GitHub Actions", "CloudFormation", "Prometheus", "Grafana", "Locust"],
    relatedProjectSlug: "excalibur-bot-intelligence",
    relatedProjectTitle: "Excalibur AWS Infrastructure"
  },
  {
    id: "ai-agentic-systems",
    title: "Production AI, Multi-Agent & Voice Systems",
    shortTitle: "AI & Voice Systems",
    badge: "MULTI-AGENT & VOICE AI",
    color: "purple",
    tagline: "Developing production-grade LangGraph Multi-Agent workflows, ElevenLabs Voice AI, and hybrid RAG.",
    description: "Bridging the gap between raw LLMs and business reality through stateful LangGraph agents, sub-1.2s conversational Voice AI, Playwright automated scrapers, and pgvector semantic retrieval.",
    deliverables: [
      "Conversational Voice AI agents with sub-1.2s p99 latency (ElevenLabs, STT/TTS)",
      "Stateful LangGraph supervisor workflows with deterministic function calling",
      "Multi-platform automated candidate/data sourcing grids (Playwright, Celery)",
      "Enterprise RAG pipelines with pgvector hybrid search & source citations",
      "OCR-based unstructured document parsing & legal history extraction"
    ],
    technologies: ["LangGraph", "OpenAI", "ElevenLabs API", "Voice AI", "pgvector", "Playwright", "OCR"],
    relatedProjectSlug: "repss-property-scoring",
    relatedProjectTitle: "REPSS & HiRed Systems"
  },
  {
    id: "ai-business-consulting",
    title: "AI Strategy, Team Leadership & Business Impact",
    shortTitle: "Strategy & Leadership",
    badge: "ROI & LEADERSHIP",
    color: "amber",
    tagline: "Leading engineering teams of up to 5 engineers and translating ambiguous specs into $1M+ business value.",
    description: "Helping founders, engineering leaders, and product teams cut through AI hype, architect scalable systems from 0-to-1, lead sprint execution, and deliver 30%+ operational efficiency gains.",
    deliverables: [
      "0-to-1 architecture ownership from ambiguous requirements to production",
      "Engineering team leadership, technical mentorship & code review (teams of 3–5)",
      "AI ROI calculation & token/compute cost modeling for enterprise scale",
      "Turnaround time reduction audits (slashing days of manual work to <2 minutes)",
      "Technical architecture blueprints & stakeholder acceptance roadmaps"
    ],
    technologies: ["Engineering Leadership", "System Architecture", "ROI Modeling", "Team Mentorship", "Agile Execution"],
    relatedProjectSlug: "enterprise-knowledge-management",
    relatedProjectTitle: "Enterprise Knowledge Management"
  }
];

export const ENGAGEMENT_MODELS: EngagementModel[] = [
  {
    title: "Contract MVP / Architecture Sprint",
    timeline: "2 to 6 Weeks",
    bestFor: "Early-stage startups & teams needing rapid 0-to-1 build or critical system overhaul.",
    description: "Fast-paced, scoped engagements to architect, build, and deploy production-ready AI backends, Voice AI pipelines, or cloud systems.",
    badge: "HIGH VELOCITY",
    color: "indigo"
  },
  {
    title: "Fractional Architect / Tech Lead",
    timeline: "Monthly Retainer (10-20 hrs/week)",
    bestFor: "Growing engineering teams needing senior architectural oversight and AI guidance.",
    description: "Ongoing advisory on system design, code reviews, Voice/Agentic pipelines, cloud cost optimization, and upskilling in-house developers.",
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
