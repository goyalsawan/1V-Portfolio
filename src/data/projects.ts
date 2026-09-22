export interface ProjectMetric {
  label: string;
  value: string;
  delta?: string;
  description: string;
}

export interface ArchitectureNode {
  title: string;
  category: "Ingestion" | "Gateway & Security" | "Agentic Core" | "Storage & Vector" | "Streaming & Output";
  description: string;
  tech: string[];
}

export interface ProjectData {
  id: string;
  slug: string;
  title: string;
  badge: string;
  tagline: string;
  clientContext: string;
  role: string;
  overview: string;
  problem: string;
  solution: string;
  accentColor: "cyan" | "purple" | "emerald" | "amber" | "rose" | "indigo";
  status: "PRODUCTION" | "ENTERPRISE DEPLOYED";
  tags: string[];
  impactPoints: string[];
  metrics: ProjectMetric[];
  architectureNodes: ArchitectureNode[];
  keyPillars: {
    title: string;
    description: string;
    bulletPoints: string[];
  }[];
  engineeringChallenges: {
    challenge: string;
    solution: string;
    impact: string;
  }[];
  techStack: {
    category: string;
    items: string[];
  }[];
  mockDemo: {
    prompt: string;
    response: string;
    toolCallExecuted?: {
      name: string;
      parameters: Record<string, unknown>;
      result: Record<string, unknown>;
    };
    latencyMs: number;
    tokensPerSec: number;
    faithfulnessScore: number;
  };
}

export const PROJECTS: ProjectData[] = [
  {
    id: "01",
    slug: "repss-property-scoring",
    title: "REPSS – Real Estate Property Scoring System",
    badge: "VOICE AI & SPATIAL INTELLIGENCE",
    tagline: "End-to-end property intelligence platform automating apartment price discovery, legal-history analysis, GIS processing, and conversational Voice AI recommendations.",
    clientContext: "Engineered at Ksquare Systems (Jaipur, Remote)",
    role: "Senior Software Engineer (Architected Platform & Led 5 Engineers)",
    accentColor: "cyan",
    status: "PRODUCTION",
    overview:
      "Real estate evaluation and appraisal screening historically required days of manual title-deed inspection, zoning validation, and comparable sales research. We architected REPSS to automate apartment price discovery, legal history verification, GIS spatial mapping, and OCR-based document extraction while introducing a low-latency conversational Voice AI agent for real-time buyer advisory.",
    problem:
      "Comprehensive property underwriting and title analysis took 3–5 business days per property due to fragmented municipal land records, multi-page unstandardized legal deeds, and slow buyer requirement onboarding via static search forms.",
    solution:
      "An integrated full-stack AI platform combining OCR document parsers, GIS spatial polygon indexing, LangGraph multi-agent reasoning, and an ElevenLabs Voice AI pipeline with sub-1.2s p99 latency for dynamic buyer requirement capture and instant algorithmic property scoring.",
    tags: [
      "Voice AI (ElevenLabs)",
      "LangGraph",
      "FastAPI",
      "GIS & Spatial",
      "OCR Extraction",
      "Next.js",
      "PostgreSQL",
      "AWS",
      "Team Lead (5 Eng)",
    ],
    impactPoints: [
      "Reduced comprehensive property analysis from days of manual work to under 2 minutes (98.5% time reduction).",
      "Architected conversational Voice AI agent with p99 response latency below 1.2 seconds that captures buyer intent and surfaces algorithmic property matches.",
      "Mentored and led a 5-member engineering team delivering GIS mapping, legal deed OCR parsing, and price valuation pipelines.",
      "Engineered automated title-deed legal history verification with OCR layout extraction across multi-page property documents.",
    ],
    metrics: [
      {
        label: "Analysis Turnaround",
        value: "< 2 min",
        delta: "From 3-5 days",
        description: "End-to-end price discovery, legal risk check & GIS analysis turnaround time.",
      },
      {
        label: "Voice AI p99 Latency",
        value: "< 1.2s",
        delta: "Sub-second TTFT",
        description: "Conversational voice interaction latency powered by ElevenLabs & streaming LLMs.",
      },
      {
        label: "Team Mentored",
        value: "5 Engineers",
        delta: "Full 0-to-1 build",
        description: "Cross-functional engineering team led across frontend, backend, OCR & GIS pipelines.",
      },
      {
        label: "OCR & Legal Extraction",
        value: "99.1%",
        delta: "+45% efficiency",
        description: "Field extraction accuracy on unstandardized title deeds and municipal registry PDFs.",
      },
    ],
    architectureNodes: [
      {
        title: "Voice Streaming & Requirement Gateway",
        category: "Gateway & Security",
        description: "WebSocket bi-directional audio gateway streaming voice inputs directly to ElevenLabs API and STT/TTS pipelines with audio chunk buffering.",
        tech: ["ElevenLabs API", "WebSockets", "FastAPI", "Python"],
      },
      {
        title: "Document OCR & Legal Risk Extractor",
        category: "Ingestion",
        description: "Multi-page deed OCR pipeline extracting boundary clauses, encumbrance history, and mortgage liens with structured Pydantic schema validation.",
        tech: ["OCR Engines", "Python", "Pydantic", "AWS S3"],
      },
      {
        title: "LangGraph Spatial & Valuation Engine",
        category: "Agentic Core",
        description: "Multi-agent LangGraph workflow executing comparable sales regression, zoning compliance checks, and proximity scoring.",
        tech: ["LangGraph", "OpenAI", "Go", "FastAPI"],
      },
      {
        title: "GIS & Relational Property Store",
        category: "Storage & Vector",
        description: "PostgreSQL database with GIS spatial indexing for neighborhood polygons, transit proximity, and historical transaction ledgers.",
        tech: ["PostgreSQL", "GIS", "Redis Cache", "AWS RDS"],
      },
      {
        title: "Interactive Next.js Underwriting Hub",
        category: "Streaming & Output",
        description: "Responsive Next.js web application with interactive GIS map overlays, live property score breakdowns, and conversational audio playback.",
        tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      },
    ],
    keyPillars: [
      {
        title: "Conversational Voice AI Agent",
        description: "Sub-1.2s Voice Interface for Real-Time Buyer Discovery",
        bulletPoints: [
          "Streaming audio pipeline connecting WebSockets to ElevenLabs for natural conversational cadence.",
          "Dynamic intent slot-filling capturing budget, location radius, school tier, and commute tolerance.",
          "Automatic fallback to text chat when background noise exceeds audio signal thresholds.",
        ],
      },
      {
        title: "Automated Legal & OCR Deed Processing",
        description: "Unstructured Document Extraction & Title Risk Scoring",
        bulletPoints: [
          "Extracts property lineage, prior mortgages, and encumbrances across unstandardized deed scans.",
          "Flags legal ambiguity, missing chain-of-title links, and municipal zoning disputes.",
          "Transforms multi-page legal documents into structured JSON risk scorecards in seconds.",
        ],
      },
      {
        title: "GIS Spatial Intelligence & Valuation",
        description: "Location Scoring with Geospatial Indexing",
        bulletPoints: [
          "Calculates micro-market price per sq.ft based on recent verified transactions.",
          "Spatial distance calculations for schools, transit hubs, green zones, and flood plains.",
          "Composite REPSS algorithm generating transparent, explainable 0–100 property scorecards.",
        ],
      },
    ],
    engineeringChallenges: [
      {
        challenge: "Maintaining sub-1.2s conversational voice latency while executing heavy spatial valuation queries.",
        solution: "Decoupled voice conversational intent parsing from background spatial queries via async Redis task queues, streaming interim conversational acknowledgment while fetching GIS scores.",
        impact: "Sustained p99 voice latency under 1.2 seconds without blocking conversational flow.",
      },
      {
        challenge: "Accurately extracting legal encumbrances from noisy, scanned municipal deeds with varying typography.",
        solution: "Built a dual-pass OCR pipeline combining layout detection with LLM schema-constrained validation and cross-referencing against municipal registry tables.",
        impact: "Achieved 99.1% extraction accuracy across complex multi-page legal documents.",
      },
    ],
    techStack: [
      { category: "Languages & Frameworks", items: ["Python", "Go", "FastAPI", "Next.js", "TypeScript"] },
      { category: "AI, Agents & Voice", items: ["LangGraph", "OpenAI", "ElevenLabs API", "Voice AI", "OCR"] },
      { category: "Databases & Spatial", items: ["PostgreSQL", "GIS", "Redis", "AWS RDS"] },
      { category: "Cloud & Infrastructure", items: ["AWS (EC2, S3, Lambda, VPC)", "Docker", "GitHub Actions"] },
    ],
    mockDemo: {
      prompt: "Find 3BHK properties under $850k near top-tier schools with clean legal titles in the North Corridor.",
      response: "Analyzed 42 properties in North Corridor. Found 3 matches meeting all criteria: Top match is 'The Luminary Residence' (Score: 94/100, $820k, 0.4 miles to Greenwood Academy, verified zero encumbrances on 20-year title deed). Analysis completed in 1.1s.",
      toolCallExecuted: {
        name: "repss_spatial_valuation_query",
        parameters: { budget_max: 850000, bedrooms: 3, zone: "North Corridor", legal_status: "verified_clean" },
        result: { properties_scanned: 42, matches_found: 3, top_score: 94, legal_risk: "LOW" },
      },
      latencyMs: 1140,
      tokensPerSec: 62.5,
      faithfulnessScore: 0.99,
    },
  },
  {
    id: "02",
    slug: "enterprise-knowledge-management",
    title: "Enterprise Knowledge Management System",
    badge: "MULTI-AGENT RAG & KNOWLEDGE EXTRACTION",
    tagline: "Multi-agent knowledge platform capturing tacit institutional knowledge from contextual employee interviews to build a self-service organizational intelligence base.",
    clientContext: "Engineered at Ksquare Systems (Jaipur, Remote)",
    role: "Senior Software Engineer (Architected Platform & Spearheaded 3 Engineers)",
    accentColor: "purple",
    status: "PRODUCTION",
    overview:
      "Enterprise knowledge is frequently trapped in silos, scattered Slack threads, and unwritten employee experience. We architected a multi-agent knowledge platform that conducts automated contextual employee interviews, structures tribal knowledge into vector-indexed knowledge graphs, and empowers teams with instant self-service answers.",
    problem:
      "Employees spent 10+ hours per week searching for internal documentation or waiting for subject matter experts (SMEs). Onboarding new engineers took 6–8 weeks due to outdated documentation and institutional knowledge loss when senior employees departed.",
    solution:
      "A supervisor-coordinated multi-agent system combining LangGraph interview agents, automated transcription ingestion, hybrid pgvector semantic search, and citation-backed knowledge synthesis that continuously updates internal playbooks without manual writing.",
    tags: [
      "Multi-Agent RAG",
      "LangGraph",
      "FastAPI",
      "PostgreSQL / pgvector",
      "Redis",
      "Next.js",
      "Docker",
      "AWS",
      "Team Lead (3 Eng)",
    ],
    impactPoints: [
      "Saved 10+ hours per employee per week through self-service knowledge access, delivering 30% organizational productivity savings.",
      "Reduced new-hire technical training and ramp-up time by 40% across engineering and operations teams.",
      "Spearheaded and mentored a 3-member engineering team architecting the multi-agent interview & retrieval pipelines.",
      "Engineered hybrid pgvector semantic search with 99.4% citation faithfulness, ensuring answers link to originating interview sources.",
    ],
    metrics: [
      {
        label: "Productivity Savings",
        value: "30%",
        delta: "10+ hrs/emp/wk",
        description: "Self-service knowledge retrieval eliminating manual documentation searches.",
      },
      {
        label: "Onboarding Ramp Time",
        value: "-40%",
        delta: "2.5 weeks saved",
        description: "Reduction in new-hire time-to-first-commit and operational readiness.",
      },
      {
        label: "Team Spearheaded",
        value: "3 Engineers",
        delta: "Enterprise Rollout",
        description: "Led engineers across agentic interview loops, vector retrieval & React UI.",
      },
      {
        label: "Citation Faithfulness",
        value: "99.4%",
        delta: "Zero Hallucination",
        description: "Answers strictly backed by verified internal transcripts and playbooks.",
      },
    ],
    architectureNodes: [
      {
        title: "Contextual Interview Conductor Agent",
        category: "Agentic Core",
        description: "LangGraph conversational agent conducting structured, non-intrusive interviews with employees to extract project post-mortems and architecture rationale.",
        tech: ["LangGraph", "OpenAI", "FastAPI", "Python"],
      },
      {
        title: "Knowledge Synthesis & Chunking Pipeline",
        category: "Ingestion",
        description: "Extracts action items, technical decisions, and troubleshooting runbooks with hierarchical semantic chunking and metadata enrichment.",
        tech: ["Python", "Pydantic", "Redis Queue", "Docker"],
      },
      {
        title: "pgvector Semantic & Hybrid Retrieval",
        category: "Storage & Vector",
        description: "PostgreSQL pgvector cluster storing contextual embeddings with dense + sparse keyword indexing for exact technical term lookups.",
        tech: ["PostgreSQL", "pgvector", "Redis Cache", "AWS RDS"],
      },
      {
        title: "Enterprise Query API & Guardrails",
        category: "Gateway & Security",
        description: "FastAPI gateway enforcing RBAC access controls, tenant isolation, and strict citation verification before returning answers.",
        tech: ["FastAPI", "JWT RBAC", "OpenAI", "AWS ECS"],
      },
      {
        title: "Self-Service Knowledge Portal",
        category: "Streaming & Output",
        description: "Next.js search hub with streaming markdown answers, interactive knowledge graph explorers, and 1-click source transcript inspection.",
        tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      },
    ],
    keyPillars: [
      {
        title: "Automated Knowledge Extraction Interviews",
        description: "Capturing Tacit Knowledge Directly from Employees",
        bulletPoints: [
          "Dynamic interview agent asks clarifying follow-ups when explanations lack technical context.",
          "Auto-synthesizes messy conversation transcripts into structured Markdown runbooks.",
          "Periodically polls system owners when architecture components or APIs change.",
        ],
      },
      {
        title: "Hybrid Semantic & Keyword Retrieval",
        description: "Precision Search Across Exact Code & Conceptual Queries",
        bulletPoints: [
          "pgvector dense embeddings combined with keyword search for exact error codes and function names.",
          "Hierarchical chunking preserving parent document context during granular code snippet retrieval.",
          "Sub-200ms vector lookups cached in Redis for high-frequency queries.",
        ],
      },
      {
        title: "Strict Citation & Hallucination Guardrails",
        description: "100% Verifiable Enterprise Knowledge Synthesis",
        bulletPoints: [
          "Every generated response includes inline bracketed citations linked to source interview transcripts.",
          "Hallucination guardrail automatically suppresses answers when source confidence is below 85%.",
          "RBAC permission filtering prevents unauthorized disclosure of sensitive team documentation.",
        ],
      },
    ],
    engineeringChallenges: [
      {
        challenge: "Extracting cohesive, structured knowledge from unorganized spoken employee interview transcripts.",
        solution: "Implemented a multi-step LangGraph refinement loop that first normalizes transcripts, identifies domain entities, extracts architectural decisions, and verifies logic before indexing.",
        impact: "Converted 100+ hours of raw audio interviews into 350+ structured, search-ready internal runbooks.",
      },
      {
        challenge: "Preventing cross-department data leaks in a shared multi-tenant knowledge base.",
        solution: "Enforced row-level security (RLS) in PostgreSQL with tenant-partitioned vector namespaces and JWT permission claims evaluated on every retrieval query.",
        impact: "Guaranteed 100% departmental isolation with zero cross-tenant leakage.",
      },
    ],
    techStack: [
      { category: "Languages & Frameworks", items: ["Python", "FastAPI", "Next.js", "React", "TypeScript"] },
      { category: "AI & Agents", items: ["LangGraph", "OpenAI", "RAG", "Prompt Engineering"] },
      { category: "Databases & Vector", items: ["PostgreSQL", "pgvector", "Redis Cache", "AWS RDS"] },
      { category: "DevOps & Infrastructure", items: ["Docker", "AWS (EC2, S3, VPC)", "GitHub Actions"] },
    ],
    mockDemo: {
      prompt: "How do we recover from a Kafka consumer lag spike in our payment processing pipeline?",
      response: "Based on the post-mortem interview with Senior Infrastructure Team (Oct 14): To recover from a Kafka lag spike in payments: 1) Scale consumer pods from 3 to 8 using `kubectl scale deployment payment-worker --replicas=8`, 2) Verify Redis idempotency cache has not reached memory limit (eviction policy: allkeys-lru), 3) If lag persists >10k msgs, enable bypass queue for non-critical webhooks. [Sources: Incident Runbook #42, Interview Transcript @payments-eng].",
      toolCallExecuted: {
        name: "query_enterprise_knowledge_graph",
        parameters: { domain: "payments", topic: "kafka_consumer_lag_recovery" },
        result: { source_found: true, playbook_id: "RUNBOOK-42", citations_verified: 2 },
      },
      latencyMs: 380,
      tokensPerSec: 74.0,
      faithfulnessScore: 0.99,
    },
  },
  {
    id: "03",
    slug: "hired-agentic-hiring",
    title: "HiRed – Agentic Hiring Management System",
    badge: "AUTONOMOUS SOURCING & RECRUITMENT AGENTS",
    tagline: "Autonomous hiring platform orchestrating multi-platform candidate sourcing across 50+ portals, JD ingestion, automated outreach, preliminary interviews, and qualified shortlisting.",
    clientContext: "Engineered at Ksquare Systems (Jaipur, Remote)",
    role: "Senior Software Engineer (Architected Platform & Led 3 Engineers)",
    accentColor: "emerald",
    status: "PRODUCTION",
    overview:
      "Talent acquisition teams face massive friction manually sourcing candidates across fragmented job portals, evaluating thousands of resumes, and conducting preliminary screening calls. We architected HiRed to autonomously ingest job descriptions, source 1,000+ candidates per day across 50+ platforms, conduct preliminary technical screening, and surface ranked qualified shortlists.",
    problem:
      "Technical recruiters spent 70% of their working hours manually scrolling job boards, copying profile URLs, sending cold outreach, and screening unqualified applicants, resulting in a 45-day average time-to-hire.",
    solution:
      "An autonomous agentic hiring system powered by Playwright web scrapers, Celery distributed tasks, LangGraph evaluation workflows, and pgvector semantic resume-to-JD matching that delivers pre-screened candidate shortlists directly to hiring managers.",
    tags: [
      "Agentic Sourcing",
      "LangGraph",
      "Playwright",
      "FastAPI",
      "PostgreSQL / pgvector",
      "Celery & Redis",
      "Docker",
      "AWS",
      "Team Lead (3 Eng)",
    ],
    impactPoints: [
      "Built resilient sourcing pipelines processing 1,000+ candidate profiles/day across 50+ hiring platforms and professional communities.",
      "Automated job-description ingestion, profile matching, personalized outreach, and preliminary screening interviews.",
      "Led and mentored a 3-member engineering team delivering distributed scrapers, vector matching, and recruiter dashboards.",
      "Reduced recruiter manual sourcing effort by 65% and cut candidate shortlisting turnaround from 14 days to under 48 hours.",
    ],
    metrics: [
      {
        label: "Profiles Sourced",
        value: "1,000+ / day",
        delta: "50+ Platforms",
        description: "Continuous automated candidate pipeline ingestion with rate-limit evasion.",
      },
      {
        label: "Recruiter Effort Saved",
        value: "65%",
        delta: "From 20h to 7h/wk",
        description: "Manual sourcing and resume screening hours automated through agent workflows.",
      },
      {
        label: "Shortlist Turnaround",
        value: "< 48 hrs",
        delta: "7x Faster",
        description: "Time from job description upload to vetted candidate shortlist presentation.",
      },
      {
        label: "Team Led",
        value: "3 Engineers",
        delta: "Full Delivery",
        description: "Spearheaded engineers across scraping infrastructure, LangGraph & database.",
      },
    ],
    architectureNodes: [
      {
        title: "Multi-Platform Playwright Sourcing Grid",
        category: "Ingestion",
        description: "Distributed headless Playwright worker cluster running on AWS ECS with intelligent proxy rotation and rate-limit backoff across 50+ job boards.",
        tech: ["Playwright", "Python", "Celery", "AWS ECS"],
      },
      {
        title: "JD Ingestion & Semantic Skill Extractor",
        category: "Agentic Core",
        description: "Extracts core hard skills, seniority thresholds, and project requirements from free-text job descriptions into structured search schemas.",
        tech: ["LangGraph", "OpenAI", "Pydantic", "FastAPI"],
      },
      {
        title: "pgvector Matcher & Candidate Scoring",
        category: "Storage & Vector",
        description: "Vector database computing multi-dimensional cosine similarity across candidate experience, tech stack overlap, and past project impact.",
        tech: ["PostgreSQL", "pgvector", "Redis", "AWS RDS"],
      },
      {
        title: "Automated Outreach & Interview Agent",
        category: "Gateway & Security",
        description: "Generates hyper-personalized outreach messages and conducts asynchronous preliminary text/voice screening interviews.",
        tech: ["FastAPI", "OpenAI", "Celery Task Queue", "Docker"],
      },
      {
        title: "Recruiter Command & Shortlist Dashboard",
        category: "Streaming & Output",
        description: "Next.js dashboard for recruiters featuring 1-click candidate approve/reject, skill match radars, and interview summary audits.",
        tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      },
    ],
    keyPillars: [
      {
        title: "Distributed Sourcing Pipeline (50+ Platforms)",
        description: "High-Volume Candidate Discovery with Zero Downtime",
        bulletPoints: [
          "Scalable Celery task pool running headless browser sessions with dynamic fingerprinting.",
          "Deduplicates candidates across multiple platforms using normalized email and profile hashes.",
          "Ingests 1,000+ candidate profiles daily with automatic proxy failover and session persistence.",
        ],
      },
      {
        title: "Multi-Agent Candidate Screening & Ranking",
        description: "Objective Technical Competency Evaluation",
        bulletPoints: [
          "Compares candidate github repositories, past work, and experience against JD criteria.",
          "Ranks candidates on verified technical depth rather than keyword stuffing.",
          "Conducts conversational preliminary interviews verifying availability, salary, and core skills.",
        ],
      },
      {
        title: "Automated Outreach & Recruiter Shortlisting",
        description: "End-to-End Pipeline from Discovery to Calendar Invite",
        bulletPoints: [
          "Generates tailored outreach referencing specific candidate achievements and projects.",
          "Provides hiring managers with a 3-bullet executive summary and skill-fit breakdown for each candidate.",
          "Integrates with ATS platforms and Google Calendar for instant interview scheduling.",
        ],
      },
    ],
    engineeringChallenges: [
      {
        challenge: "Scraping candidate profiles across 50+ platforms with aggressive anti-bot rate limits and dynamic captchas.",
        solution: "Engineered an asynchronous task queue with Playwright stealth plugins, residential proxy rotation, and adaptive exponential backoff.",
        impact: "Maintained 99.6% scraping uptime while sourcing 1,000+ verified profiles daily.",
      },
      {
        challenge: "Matching candidates accurately based on underlying engineering skills rather than exact keyword matches.",
        solution: "Implemented dual-embedding search with pgvector: one vector representing high-level architecture competence and another representing specific framework fluency.",
        impact: "Increased hiring manager interview pass-through rate from 24% to 68%.",
      },
    ],
    techStack: [
      { category: "Languages & Frameworks", items: ["Python", "FastAPI", "Next.js", "React", "TypeScript"] },
      { category: "Automation & Scraping", items: ["Playwright", "Celery", "Redis", "Docker"] },
      { category: "AI & Agents", items: ["LangGraph", "OpenAI", "pgvector", "RAG"] },
      { category: "Cloud & Storage", items: ["AWS (EC2, S3, Lambda, VPC)", "PostgreSQL", "GitHub Actions"] },
    ],
    mockDemo: {
      prompt: "Source 5 Senior Full-Stack Engineers with 4+ years in Next.js, Python FastAPI, and LangGraph multi-agent experience.",
      response: "Dispatched HiRed sourcing agents across 50+ platforms. Ingested 142 relevant profiles; filtered to top 5 verified candidates with 4+ yrs experience and demonstrated LangGraph repos. Top candidate: Alex M. (Ex-Fintech, built 3 LangGraph multi-agent systems, 96% JD match score). Outreach draft generated and queued for review.",
      toolCallExecuted: {
        name: "hired_autonomous_sourcing_pipeline",
        parameters: { role: "Senior Full-Stack AI Engineer", stack: ["Next.js", "FastAPI", "LangGraph"], min_exp_years: 4 },
        result: { profiles_scanned: 142, qualified_shortlist: 5, avg_match_score: "94.2%" },
      },
      latencyMs: 920,
      tokensPerSec: 68.4,
      faithfulnessScore: 0.98,
    },
  },
  {
    id: "04",
    slug: "excalibur-bot-intelligence",
    title: "Excalibur – Bot Intelligence & High-Scale Defense",
    badge: "80M+ EVENTS/HR • 60K RPS • C++ NGINX",
    tagline: "Real-time bot-mitigation platform processing 80M+ events/hour (6 TB/day) across 200+ EC2 instances with C++ NGINX reverse-proxy filtering, 100ms p99 latency, and sub-500ms blocking.",
    clientContext: "Engineered at Saptang Labs (Chennai, India)",
    role: "Software Engineer (Architected Platform & Led 2 Engineers)",
    accentColor: "rose",
    status: "ENTERPRISE DEPLOYED",
    overview:
      "Sophisticated botnets and scraping farms constantly attack enterprise web endpoints, degrading infrastructure and stealing proprietary data. At Saptang Labs, we architected and validated Excalibur — an enterprise-grade real-time bot mitigation system processing 80M+ browser events per hour (6 TB/day) across 200+ AWS EC2 instances with in-path C++ NGINX reverse-proxy filtering.",
    problem:
      "Enterprise clients suffered millions of malicious bot requests per hour, causing severe server degradation, credential stuffing, and data scraping. Existing cloud WAF solutions were slow (1+ sec latency) and produced unacceptable false positive rates (>15%).",
    solution:
      "A high-throughput distributed defense architecture combining custom C++ NGINX reverse-proxy modules, a 300+ rule classification engine in Flask/Elasticsearch, Kafka event streaming, and automated CI/CD deployment pipelines on AWS.",
    tags: [
      "C++ & NGINX/WAF",
      "80M+ Events/Hr",
      "60,000 RPS",
      "AWS (200+ EC2s)",
      "Kafka & Redis",
      "Elasticsearch",
      "Flask & React",
      "Prometheus & Grafana",
      "Team Lead (2 Eng)",
    ],
    impactPoints: [
      "Architected and led 2 engineers in validating real-time bot-mitigation system processing 80M+ events/hour (6 TB/day).",
      "Implemented AWS architecture and C++ NGINX/WAF integration; validated performance across 200+ EC2 instances at 60,000 RPS with 100ms p99 latency and sub-500ms blocking.",
      "Built Flask, React, and Elasticsearch control plane for 300+ rule detection engine, improving query performance by 36% and cutting false positives by 40%.",
      "Automated CI/CD and monitoring pipelines cutting deployment time by 88% (from 1 full day to 1 hour).",
    ],
    metrics: [
      {
        label: "Event Throughput",
        value: "80M+ / hr",
        delta: "6 TB / day",
        description: "Continuous real-time telemetry processing across high-scale distributed nodes.",
      },
      {
        label: "Peak Concurrency",
        value: "60,000 RPS",
        delta: "200+ EC2s",
        description: "Benchmarked load-tested concurrency across multi-region AWS infrastructure.",
      },
      {
        label: "p99 API Latency",
        value: "100 ms",
        delta: "<500ms Blocking",
        description: "Sub-second real-time in-line traffic filtering and threat mitigation.",
      },
      {
        label: "Deployment Speed",
        value: "-88%",
        delta: "Down to 1 hr",
        description: "Automated CI/CD with Jenkins & GitHub Actions enabling 5 releases/week.",
      },
    ],
    architectureNodes: [
      {
        title: "C++ NGINX Reverse-Proxy / WAF Module",
        category: "Gateway & Security",
        description: "High-performance C++ module embedded directly in the NGINX traffic path inspecting browser fingerprinting hashes with sub-500ms blocking.",
        tech: ["C++", "NGINX", "WAF", "Linux Sockets"],
      },
      {
        title: "Kafka High-Throughput Ingestion Bus",
        category: "Ingestion",
        description: "Multi-broker Apache Kafka cluster ingesting 80M+ telemetry events/hour (6 TB/day) with zero message loss and partition sharding.",
        tech: ["Apache Kafka", "Go", "Docker", "AWS EC2"],
      },
      {
        title: "300+ Rule Classification Engine",
        category: "Agentic Core",
        description: "Rule-based and behavioral scoring engine evaluating headless browser signatures, cursor dynamics, and IP reputation.",
        tech: ["Python", "Flask", "C++", "Elasticsearch"],
      },
      {
        title: "Elasticsearch & Redis Threat Ledger",
        category: "Storage & Vector",
        description: "Elasticsearch cluster indexing billions of security events for real-time forensics paired with Redis for sub-millisecond IP blacklists.",
        tech: ["Elasticsearch", "Redis", "MongoDB", "AWS S3"],
      },
      {
        title: "Forensics Dashboard & Control Plane",
        category: "Streaming & Output",
        description: "Flask and React administration console visualizing threat maps, rule execution speeds, and automated alert dispatchers.",
        tech: ["React", "TypeScript", "Flask", "Prometheus & Grafana"],
      },
    ],
    keyPillars: [
      {
        title: "In-Path C++ Reverse Proxy Threat Mitigation",
        description: "Sub-500ms Real-Time Threat Filtering at Scale",
        bulletPoints: [
          "Custom C++ module embedded inside NGINX workers inspecting request headers and TLS fingerprints.",
          "Maintains low memory footprint (<50MB per worker) under heavy 60,000 RPS burst loads.",
          "Synchronizes blacklist updates across 200+ EC2 instances via distributed Redis Pub/Sub in under 200ms.",
        ],
      },
      {
        title: "High-Throughput Stream Processing (80M+ Events/Hr)",
        description: "6 TB/Day Telemetry Streaming on AWS Infrastructure",
        bulletPoints: [
          "Partition-aware Kafka event consumers written in Go and Python processing high-density payloads.",
          "Elasticsearch tuning (sharding, bulk indexing) improving search query speed by 36%.",
          "Automated EC2 Auto Scaling recovering gracefully within 60 seconds during synthetic failure chaos tests.",
        ],
      },
      {
        title: "Automated CI/CD & Production Observability",
        description: "88% Faster Deployments with Zero Downtime",
        bulletPoints: [
          "End-to-end GitHub Actions and Jenkins pipelines cutting deploy cycles from 1 day to 1 hour.",
          "Continuous load testing suites using Locust and JMeter to validate 60,000 RPS benchmarks.",
          "Prometheus & Grafana dashboards tracking p95/p99 latencies, CPU thresholds, and bot deflection rates.",
        ],
      },
    ],
    engineeringChallenges: [
      {
        challenge: "Filtering millions of requests without introducing noticeable latency to legitimate human users.",
        solution: "Engineered an in-memory C++ Bloom filter and LRU cache directly in NGINX memory, allowing clean traffic to bypass downstream scoring in <2ms.",
        impact: "Maintained 100ms p99 response latency while blocking malicious bot requests in under 500ms.",
      },
      {
        challenge: "High query latency in Elasticsearch when security analysts investigated 300+ rule matches over billions of records.",
        solution: "Restructured index lifecycle policies, introduced rollover indices, and optimized nested query schemas.",
        impact: "Improved query performance by 36% and reduced false positives by 40%.",
      },
    ],
    techStack: [
      { category: "Languages & Systems", items: ["C++", "Go", "Python", "TypeScript", "Flask", "React"] },
      { category: "Infrastructure & Cloud", items: ["AWS (EC2, S3, Lambda, VPC)", "NGINX/WAF", "Docker", "Jenkins"] },
      { category: "Databases & Messaging", items: ["Apache Kafka", "Elasticsearch", "MongoDB", "Redis"] },
      { category: "Observability & Testing", items: ["Prometheus", "Grafana", "CloudWatch", "Locust", "JMeter"] },
    ],
    mockDemo: {
      prompt: "Simulate bot mitigation for high-concurrency credential stuffing attack (60,000 RPS burst on /api/login).",
      response: "Excalibur C++ WAF detected abnormal TLS fingerprint anomaly and headless Chrome canvas hash across 45,000 requests. Automated rule #142 triggered: Rate-limited offending ASN, dispatched Redis blacklist payload to all 200+ EC2 proxy nodes in 180ms. Malicious traffic blocked with 0 false positives on legitimate human sessions. p99 latency remained steady at 98ms.",
      toolCallExecuted: {
        name: "excalibur_waf_threat_interceptor",
        parameters: { target_endpoint: "/api/login", rps_burst: 60000, threat_signature: "headless_chrome_canvas" },
        result: { blocked_requests: 45000, latency_p99_ms: 98, cluster_sync_time_ms: 180, false_positives: 0 },
      },
      latencyMs: 98,
      tokensPerSec: 88.5,
      faithfulnessScore: 1.0,
    },
  },
];
