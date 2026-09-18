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
  accentColor: "yellow" | "lime" | "cyan" | "pink" | "purple" | "orange";
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
    slug: "customer-support-agent-platform",
    title: "Autonomous Enterprise Customer Support & Resolution Platform",
    badge: "MULTI-AGENT ORCHESTRATION / RAG",
    tagline: "Autonomous multi-agent platform resolving Tier-1 & Tier-2 enterprise support tickets with deterministic tool-calling and Zendesk/Salesforce HITL handoff.",
    clientContext: "Engineered at Ksquare Systems for Enterprise B2B SaaS, E-Commerce & FinTech Clients",
    role: "Full-Stack AI Engineer / Solution Architect",
    accentColor: "cyan",
    status: "PRODUCTION",
    overview:
      "Enterprise support operations were crippled by high ticket volumes and slow human response times. Traditional rule-based bots couldn't handle complex, multi-turn transactional workflows (e.g. issuing selective refunds, updating subscriptions, diagnosing API errors). We built an autonomous multi-agent platform that executes verified actions with zero-retention PII scrubbing and seamless agent escalation.",
    problem:
      "High inbound ticket queues with 4+ hour median first response time. Legacy support bots suffered from high hallucination rates, lacked API integration capabilities, and could not safely execute financial or account operations without human intervention.",
    solution:
      "A supervisor-coordinated multi-agent architecture combining hybrid vector/BM25 retrieval over client knowledge bases, idempotent schema-validated tool-calling sagas for billing/CRM updates, and real-time sentiment-based human-in-the-loop (HITL) handoff.",
    tags: [
      "Multi-Agent Systems",
      "LangGraph",
      "pgvector",
      "FastAPI",
      "HITL Handoff",
      "PII Redaction",
      "SSE Streaming",
      "Langfuse Evals",
    ],
    impactPoints: [
      "64.2% autonomous deflection rate achieved across 45,000+ monthly Tier-1/Tier-2 enterprise support tickets with zero human intervention.",
      "Reduced median resolution turnaround time from 4.2 hours to <45 seconds with sub-500ms time-to-first-token streaming.",
      "99.98% PII redaction accuracy via Presidio regex/NER scrubbing, eliminating compliance risks across financial & CRM workflows.",
    ],
    metrics: [
      {
        label: "Autonomous Deflection Rate",
        value: "64.2%",
        delta: "+42%",
        description: "Inbound Tier-1/Tier-2 support tickets completely resolved without human agent touch.",
      },
      {
        label: "Time to First Token (TTFT)",
        value: "480ms",
        delta: "3.2x faster",
        description: "Streaming response latency achieved via prompt caching and speculative intent classification.",
      },
      {
        label: "Escalation Resolution Time",
        value: "-35%",
        delta: "Saved 6.5m/ticket",
        description: "Human agents resolved escalated tickets faster thanks to 3-bullet AI context & troubleshooting summaries.",
      },
      {
        label: "CSAT Score",
        value: "4.7 / 5.0",
        delta: "98.1% positive",
        description: "Customer satisfaction sustained across 120,000+ automated resolution conversations.",
      },
    ],
    architectureNodes: [
      {
        title: "Omnichannel Ingestion & Webhooks",
        category: "Ingestion",
        description: "Ingests messages from embeddable React Web Component (<45KB), Zendesk, Slack Connect, and email webhooks.",
        tech: ["Next.js", "WebSockets", "Zendesk API", "SendGrid"],
      },
      {
        title: "Enterprise Gateway & PII Redactor",
        category: "Gateway & Security",
        description: "Zero-retention PII scrubbing (Presidio/Regex) stripping SSNs, cards, and auth tokens before LLM context ingestion.",
        tech: ["FastAPI", "Microsoft Presidio", "Redis Rate Limiter", "SAML SSO"],
      },
      {
        title: "Supervisor Intent Router & Agents",
        category: "Agentic Core",
        description: "Coordinates intent routing (<150ms), Knowledge RAG Agent, Transactional Action Agent, and HITL Escalation Agent.",
        tech: ["LangGraph", "Claude 3.5 Sonnet", "GPT-4o-mini", "Pydantic"],
      },
      {
        title: "Multi-Tenant Vector & Session Store",
        category: "Storage & Vector",
        description: "Tenant-partitioned hybrid retrieval combining dense embeddings with sparse BM25 and Cohere Rerank.",
        tech: ["PostgreSQL (pgvector)", "Redis Pub/Sub", "Cohere Rerank v3"],
      },
      {
        title: "Streaming Engine & Langfuse Observability",
        category: "Streaming & Output",
        description: "Server-Sent Events (SSE) streaming engine with live token cost tracking, Ragas faithfulness evals, and audit logs.",
        tech: ["SSE", "Langfuse", "OpenTelemetry", "Datadog"],
      },
    ],
    keyPillars: [
      {
        title: "Multi-Tenant Isolated RAG & Dynamic Ingestion",
        description: "Partitioned vector search with daily automated syncs of client documentation.",
        bulletPoints: [
          "Row-level security (RLS) and tenant namespace isolation in PostgreSQL pgvector.",
          "Dynamic sync pipelines crawling Confluence wikis, Notion, and Zendesk Help Centers.",
          "Reciprocal Rank Fusion (RRF) merging dense embeddings and sparse BM25 keyword matching.",
        ],
      },
      {
        title: "Deterministic Tool Execution & Saga Rollbacks",
        description: "Safely execute financial and account modifications with strict guarantees.",
        bulletPoints: [
          "JSON-Schema validated tool calling interfacing directly with Stripe, Shopify, and Salesforce.",
          "Redis distributed locks and transaction idempotency keys preventing double-refund bugs.",
          "Role-based action execution bounds preventing unauthorized privilege escalations.",
        ],
      },
      {
        title: "Seamless Human-in-the-Loop (HITL) Handoff",
        description: "Zero-loss context transfer to human support agents when confidence drops.",
        bulletPoints: [
          "Real-time sentiment analyzer and ambiguity detector triggering transfer when confidence <0.80.",
          "Auto-generates structured 3-bullet handover notes in Zendesk/Intercom internal agent notes.",
          "Preserves full conversation token telemetry and diagnostic logs.",
        ],
      },
    ],
    engineeringChallenges: [
      {
        challenge: "Hallucination in Policy Guidance",
        solution: "Implemented strict Citation Grounding requiring the model to tag exact chunk IDs. Unbacked assertions fail verification and trigger graceful agent fallback.",
        impact: "Reduced hallucinated policy claims to <0.2% across audited production logs.",
      },
      {
        challenge: "Multi-Turn Context Window Degradation & Token Cost",
        solution: "Built a recursive context-compactor that compresses earlier turns into structured state summaries while preserving the last 3 turns raw.",
        impact: "Decreased per-conversation token expenditure by 44% while maintaining 99.4% intent recall.",
      },
    ],
    techStack: [
      { category: "AI & Agents", items: ["LangGraph", "Claude 3.5 Sonnet", "GPT-4o-mini", "Cohere Rerank v3", "Langfuse"] },
      { category: "Backend & Systems", items: ["Python (FastAPI)", "Celery", "Redis Pub/Sub", "Temporal", "Docker"] },
      { category: "Databases", items: ["PostgreSQL (pgvector)", "Redis Cache", "Supabase"] },
      { category: "Frontend & Integrations", items: ["Next.js", "TypeScript", "Tailwind CSS", "Zendesk API", "Stripe API"] },
    ],
    mockDemo: {
      prompt: "Can you refund my enterprise invoice #INV-9281? We were double charged due to an API timeout.",
      response:
        "I have verified your account and located invoice #INV-9281 for $499.00. Our transaction logs confirm duplicate debit entries at 10:14:02 UTC. I have executed an automated refund of $499.00 to your original payment method (Visa ending in 4192) via Stripe. You will receive confirmation email #REF-8812 within 10 minutes.",
      toolCallExecuted: {
        name: "stripe_issue_refund",
        parameters: { invoiceId: "INV-9281", amountCents: 49900, reason: "duplicate_charge", idempotencyKey: "ref_inv_9281_001" },
        result: { status: "succeeded", refundId: "re_3N9z8L4E2", creditedAmount: "$499.00" },
      },
      latencyMs: 512,
      tokensPerSec: 68,
      faithfulnessScore: 0.99,
    },
  },
  {
    id: "02",
    slug: "real-estate-property-intelligence",
    title: "Multimodal Real Estate Property Intelligence & Valuation Engine",
    badge: "MULTIMODAL VISION / GEOSPATIAL AVM",
    tagline: "Commercial real estate deal intelligence platform automating 100-page appraisal parsing, CV condition scoring, and PostGIS spatial valuation.",
    clientContext: "Engineered at Ksquare Systems for Commercial Real Estate (CRE) Enterprises & Institutional Funds",
    role: "Lead AI Engineer & Full-Stack Architect",
    accentColor: "yellow",
    status: "ENTERPRISE DEPLOYED",
    overview:
      "Institutional real estate investors and acquisitions teams analyze hundreds of complex multi-family and commercial deals monthly. Manual underwriting required 3–5 business days per asset to extract tables from 100-page appraisal PDFs, calculate usable GLA from floor plans, and review property condition photos. We engineered an end-to-end multimodal intelligence platform reducing deal screening time to 90 seconds.",
    problem:
      "Underwriting bottlenecks caused by disparate unstructured data sources (scanned appraisal PDFs, non-standard rent rolls, blueprints, inspection photos, county tax records). Acquisitions teams were missing off-market deal windows.",
    solution:
      "A multimodal extraction and intelligence engine utilizing LayoutLMv3 and Vision LLMs for tabular financial extraction, Vision Transformers for architectural condition scoring, PostGIS/Uber H3 for geospatial analytics, and a hybrid XGBoost + LLM deal memo generator.",
    tags: [
      "Multimodal AI",
      "Vision LLMs",
      "LayoutLMv3",
      "PostGIS Spatial",
      "XGBoost AVM",
      "FastAPI / Ray",
      "Mapbox GL",
      "Deck.gl",
    ],
    impactPoints: [
      "98.4% precision on financial table extraction across 100+ page scanned appraisal PDFs, rent rolls, and T12 statements.",
      "Reduced underwriting screening cycle time from 4 business days to under 90 seconds per commercial asset.",
      "Enabled 5.2x higher deal screening volume with zero additional analyst headcount, delivering $1.2M+ in annual operational savings.",
    ],
    metrics: [
      {
        label: "Underwriting Cycle Time",
        value: "90 sec",
        delta: "from 4 days",
        description: "Full financial extraction, CapEx synthesis, and pro-forma deal memo generation per property.",
      },
      {
        label: "Financial Table Extraction",
        value: "98.4%",
        delta: "Pydantic validated",
        description: "Precision on complex trailing-12 (T12) statements and multi-tenant rent rolls.",
      },
      {
        label: "Deal Screening Throughput",
        value: "5.2x",
        delta: "Zero headcount add",
        description: "Acquisitions teams evaluated 5x more portfolio opportunities without hiring additional analysts.",
      },
      {
        label: "Valuation Accuracy (MAE)",
        value: "3.8%",
        delta: "-14% error vs MLS",
        description: "Mean Absolute Error on commercial/multi-family valuation comps compared to baseline AVMs.",
      },
    ],
    architectureNodes: [
      {
        title: "Enterprise Document & Listing Ingestion",
        category: "Ingestion",
        description: "Batch ingestion of 50-150 page PDF appraisal packages, high-res photo zips, blueprints, and MLS listing feeds.",
        tech: ["AWS S3", "Celery Workers", "Ray Distributed", "Marker/Unstructured"],
      },
      {
        title: "Multimodal Document & Table Parser",
        category: "Gateway & Security",
        description: "Layout-aware vision parsing extracting tenant rolls, NOI, CapEx reserves, and property specs into validated Pydantic models.",
        tech: ["Claude 3.5 Sonnet Vision", "Gemini 1.5 Pro", "LayoutLMv3", "Pydantic"],
      },
      {
        title: "Computer Vision Condition Grader",
        category: "Agentic Core",
        description: "Classifies room finishes (Class A/B/C) and detects deferred maintenance (roof damage, water stains, parking cracks).",
        tech: ["Fine-tuned ViT", "YOLOv8", "CLIP Embeddings", "PyTorch"],
      },
      {
        title: "Geospatial & Spatial Valuation Core",
        category: "Storage & Vector",
        description: "Spatial indexing with Uber H3 hexagons, POI proximity, flood zone mapping, and XGBoost comparative market analysis.",
        tech: ["PostgreSQL (PostGIS)", "Uber H3", "XGBoost", "pgvector"],
      },
      {
        title: "Interactive Underwriting Workstation",
        category: "Streaming & Output",
        description: "Mapbox geospatial exploration, natural language deal filtering, and 1-click 10-page PDF Investment Committee memo export.",
        tech: ["Next.js (App Router)", "Mapbox GL", "Deck.gl", "Tremor Analytics"],
      },
    ],
    keyPillars: [
      {
        title: "High-Precision Financial PDF Normalization",
        description: "Extracting messy financial tables from scanned appraisals and rent rolls.",
        bulletPoints: [
          "Hybrid OCR + LayoutLM + Vision LLM parsing handling multi-page spanning tables.",
          "Automated arithmetic consistency checking (verifying tenant itemized rents equal gross reported revenue).",
          "Automated reconciliation of trailing-12 (T12) operating statements into normalized accounting taxonomies.",
        ],
      },
      {
        title: "Computer Vision Condition & Finishes Grading",
        description: "Automated physical inspection grading from listing photos.",
        bulletPoints: [
          "Classifies interior finishes (granite vs laminate countertops, hardwood vs carpet, appliance age tiers).",
          "Calculates deferred maintenance liability scoring used in CapEx underwriting adjustments.",
          "Blueprint GLA vectorization extracting net rentable square footage directly from CAD/PDF floor plans.",
        ],
      },
      {
        title: "Natural Language Spatial Deal Screener",
        description: "Translates conversational investor criteria into spatial SQL and vector comps.",
        bulletPoints: [
          "Translates complex prompts into PostGIS boundary polygons and financial metric filters.",
          "Generates dynamic pro-forma IRR, Cash-on-Cash, and sensitivity matrices across changing interest rate curves.",
          "Generates audited investment committee memorandums with exact source document page citations.",
        ],
      },
    ],
    engineeringChallenges: [
      {
        challenge: "Scanned & Rotated Table Extraction in 100+ Page PDFs",
        solution: "Engineered a chunked parallel vision-routing pipeline that identifies table-dense pages, applies deskew/contrast enhancement, and uses large-context Vision LLMs with strict JSON schema validators.",
        impact: "Eliminated manual transcription errors and achieved 98.4% table extraction precision.",
      },
      {
        challenge: "Sub-Second Spatial Query Latency Across Millions of Properties",
        solution: "Implemented Uber H3 discrete spatial indexing at Resolution 8 combined with PostGIS spatial GIST indices and pgvector cosine indices.",
        impact: "Achieved <120ms response time on complex spatial-financial hybrid queries.",
      },
    ],
    techStack: [
      { category: "AI & Multimodal", items: ["Claude 3.5 Sonnet Vision", "Gemini 1.5 Pro", "YOLOv8", "LayoutLMv3", "CLIP"] },
      { category: "Data & Geospatial", items: ["PostgreSQL + PostGIS", "Uber H3", "XGBoost", "pgvector", "Ray"] },
      { category: "Backend Infrastructure", items: ["Python (FastAPI)", "Celery", "AWS S3 / ECS", "Docker"] },
      { category: "Frontend & Maps", items: ["Next.js", "TypeScript", "Mapbox GL", "Deck.gl", "Recharts / Tremor"] },
    ],
    mockDemo: {
      prompt: "Underwrite 1420 S Congress Ave: Multi-family 48 units. Calculate projected NOI, CapEx reserve, and Cap Rate based on attached T12 PDF.",
      response:
        "Underwriting completed for 1420 S Congress Ave (48 units). \n• Gross Potential Rent: $1,382,400/yr ($2,400/unit/mo avg)\n• Economic Occupancy: 94.2% (Effective Gross Income: $1,302,220)\n• Operating Expenses (T12): $481,821 (OpEx Ratio: 37.0%)\n• Net Operating Income (NOI): $820,399\n• CV Condition Score: Grade B+ (Classified recent quartz updates; flagged $38,500 roof deferred maintenance)\n• Estimated Valuation: $13,673,000 at a 6.00% Market Cap Rate.",
      toolCallExecuted: {
        name: "calculate_property_underwriting",
        parameters: { propertyId: "TX-ATX-1420", units: 48, capRateTarget: 0.06, opexAdjustmentPct: 0.02 },
        result: { noi: 820399, valuation: 13673316, estimatedIrr5Yr: "14.8%" },
      },
      latencyMs: 840,
      tokensPerSec: 62,
      faithfulnessScore: 0.98,
    },
  },
  {
    id: "03",
    slug: "ai-learning-management-platform",
    title: "AI-First Enterprise Adaptive Learning & Socratic Upskilling Platform",
    badge: "ADAPTIVE KNOWLEDGE GRAPH / SOCRATIC AI",
    tagline: "Autonomous enterprise LMS turning internal wikis & codebases into personalized micro-courses with real-time Socratic AI tutoring and sandboxed code grading.",
    clientContext: "Engineered at Ksquare Systems for Enterprise Workforce Upskilling & Technical Enablement",
    role: "Full-Stack AI Engineer & Lead System Designer",
    accentColor: "lime",
    status: "PRODUCTION",
    overview:
      "Enterprise training programs suffer from poor engagement (<15% completion rates) because one-size-fits-all video courses fail to adapt to employee knowledge gaps. Meanwhile, instructional designers spent months manually creating internal courses from enterprise SOPs and technical repos. We architected an AI-first adaptive learning platform that compiles enterprise knowledge into dynamic mastery graphs with a real-time Socratic AI tutor.",
    problem:
      "High drop-off rates on corporate training, slow 3-day manual grading cycles for coding/scenario assignments, and weeks of engineering overhead required to build onboarding curricula.",
    solution:
      "An automated knowledge graph compiler that builds concept dependency DAGs from enterprise docs, coupled with a Socratic AI tutor that never leaks direct answers, isolated code execution sandboxes for instant grading, and Bayesian Knowledge Tracing.",
    tags: [
      "Socratic AI Tutor",
      "Knowledge Graph DAG",
      "Bayesian Knowledge Tracing",
      "Code Sandboxing (gVisor)",
      "Automated Curriculum Gen",
      "Monaco Editor",
      "WebSockets",
      "SCORM / xAPI",
    ],
    impactPoints: [
      "52.4% course completion rate achieved across enterprise cohorts (3.7x higher than the 14% asynchronous LMS industry average).",
      "Reduced curriculum authoring overhead from 4 weeks to 25 minutes via automated document-to-concept DAG compilation.",
      "Grading and code execution SLA decreased from 72 hours to <4 seconds via secure gVisor containerized sandboxes.",
    ],
    metrics: [
      {
        label: "Course Completion Rate",
        value: "52.4%",
        delta: "3.7x baseline",
        description: "Compared to industry average 14% completion on traditional asynchronous corporate LMSs.",
      },
      {
        label: "Curriculum Authoring Speed",
        value: "25 min",
        delta: "from 4 weeks",
        description: "Automated ingestion of raw documentation into structured interactive micro-learning modules.",
      },
      {
        label: "Assignment Grading SLA",
        value: "<4 sec",
        delta: "from 72 hours",
        description: "Instant feedback loop with automated code unit test execution and rubric-based feedback.",
      },
      {
        label: "Onboarding Ramp Velocity",
        value: "+40%",
        delta: "Faster time to commit",
        description: "New hire software engineers completed repo onboarding and submitted their first PR in 6 days vs 10 days.",
      },
    ],
    architectureNodes: [
      {
        title: "Enterprise Knowledge & Git Ingestion",
        category: "Ingestion",
        description: "Parses Confluence spaces, Notion, GitHub repositories, PDF engineering runbooks, and lecture videos.",
        tech: ["Git API", "Whisper STT", "Unstructured", "FastAPI"],
      },
      {
        title: "Knowledge Graph & Curriculum Compiler",
        category: "Gateway & Security",
        description: "Extracts atomic skill concepts and builds Directed Acyclic Graphs (DAGs) of prerequisites and learning pathways.",
        tech: ["NetworkX", "PostgreSQL", "Claude 3.5 Sonnet", "Pydantic"],
      },
      {
        title: "Socratic AI Tutor & Voice Agent",
        category: "Agentic Core",
        description: "Pedagogical prompt guardrails providing scaffolded hints without leaking solutions, with voice roleplay support.",
        tech: ["WebSockets", "Claude 3.5 Sonnet", "ElevenLabs / WebRTC", "LangGraph"],
      },
      {
        title: "Sandboxed Code Runner & Rubric Grader",
        category: "Storage & Vector",
        description: "Isolated container execution environment running student code against test suites with LLM code quality analysis.",
        tech: ["Docker / gVisor", "Pyodide (WASM)", "pgvector", "Redis Queue"],
      },
      {
        title: "Enterprise Learning Analytics & HRIS",
        category: "Streaming & Output",
        description: "Manager competency heatmaps, skill-gap forecasting, SCORM/xAPI compliant exports, and Workday sync.",
        tech: ["Next.js", "Monaco Editor", "KaTeX", "Tailwind CSS", "Recharts"],
      },
    ],
    keyPillars: [
      {
        title: "Autonomous Curriculum Generation from Code & Wikis",
        description: "Compiles enterprise documentation into interactive learning modules.",
        bulletPoints: [
          "Extracts prerequisite relationships into atomic concept nodes (e.g. Docker Basics -> Kubernetes Pods -> Helm Deployments).",
          "Generates high-discrimination multiple choice quizzes with realistic distractors and explanation keys.",
          "Synthesizes hands-on coding exercises with automated test assertions directly from source repositories.",
        ],
      },
      {
        title: "Scaffolded Socratic AI Tutor",
        description: "Guided learning engine that teaches conceptual problem solving.",
        bulletPoints: [
          "Strict pedagogical guardrails preventing direct answer reveals; uses 3-tier scaffolded hinting.",
          "Context-aware real-time debugging inside Monaco Code Editor with inline line annotations.",
          "Live mathematical formula rendering via KaTeX and interactive architectural ASCII diagrams.",
        ],
      },
      {
        title: "Bayesian Knowledge Tracing & Skill Gap Analytics",
        description: "Dynamic probabilistic tracking of student mastery.",
        bulletPoints: [
          "Tracks real-time mastery probabilities $P(L_t)$ for every skill node in the corporate curriculum.",
          "Automatically inserts remedial micro-lessons when a student struggles with downstream concepts.",
          "Empowers engineering managers with team-wide competency heatmaps to pinpoint technical risks.",
        ],
      },
    ],
    engineeringChallenges: [
      {
        challenge: "Preventing LLM Tutor from Leaking Code Answers",
        solution: "Engineered a dual-model Socratic referee system: if the candidate response contains copy-pasteable solution code, the referee intercepts and converts it into a guiding conceptual question.",
        impact: "100% compliance with pedagogical standards and zero answer leakage across 50,000+ tutoring sessions.",
      },
      {
        challenge: "Secure, Sub-Second Multi-Language Code Execution at Scale",
        solution: "Built a tiered execution model: in-browser client-side WebAssembly (Pyodide) for quick Python scripts, and isolated lightweight gVisor micro-containers on backend workers for multi-file projects.",
        impact: "Achieved average execution feedback turnaround of <850ms with zero security sandbox escapes.",
      },
    ],
    techStack: [
      { category: "AI & Pedagogy", items: ["Claude 3.5 Sonnet", "GPT-4o-mini", "Whisper", "NetworkX (DAGs)", "Langfuse"] },
      { category: "Execution & Sandboxing", items: ["Docker", "gVisor", "Pyodide (WASM)", "Python (FastAPI)", "Celery"] },
      { category: "Databases & Graph", items: ["PostgreSQL (pgvector)", "Redis Cache", "Supabase RLS"] },
      { category: "Frontend & Interactive", items: ["Next.js", "TypeScript", "Monaco Editor", "KaTeX", "WebSockets", "Tailwind CSS"] },
    ],
    mockDemo: {
      prompt: "I'm trying to implement a distributed rate limiter in Redis using a sliding window log, but my sorted set query keeps returning empty results.",
      response:
        "Let's look at how you're scoring your entries in the Redis Sorted Set (ZSET). \n\n1. What timestamp value are you passing as the score when calling `ZADD`?\n2. In your `ZREMRANGEBYSCORE` call, what is the lower bound and upper bound of your time window relative to `now()`?\n\nTake a look at line 14 where you compute `window_start = now - window_size`. Are you passing `window_start` or `now` to `ZCOUNT`?",
      toolCallExecuted: {
        name: "analyze_student_code_ast",
        parameters: { language: "python", file: "rate_limiter.py", errorType: "logical_window_boundary" },
        result: { flaggedLines: [14, 18], issue: "ZCOUNT query upper bound used window_start instead of now" },
      },
      latencyMs: 380,
      tokensPerSec: 74,
      faithfulnessScore: 0.99,
    },
  },
];
