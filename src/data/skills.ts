export interface TechIconItem {
  name: string;
  iconName: string;
}

export interface StackLayer {
  layerNumber: string;
  title: string;
  badge: string;
  color: "cyan" | "yellow" | "lime" | "pink" | "purple" | "orange";
  purpose: string;
  technologies: TechIconItem[];
}

export const STACK_LAYERS: StackLayer[] = [
  {
    layerNumber: "01",
    title: "Agentic Orchestration & Core Models",
    badge: "ORCHESTRATION LAYER",
    color: "cyan",
    purpose: "Stateful agent coordination, deterministic function calling & supervisor graphs.",
    technologies: [
      { name: "Python", iconName: "python" },
      { name: "LangGraph", iconName: "langgraph" },
      { name: "Claude 3.5 Sonnet", iconName: "claude" },
      { name: "OpenAI GPT-4o", iconName: "openai" },
      { name: "Pydantic", iconName: "pydantic" },
    ],
  },
  {
    layerNumber: "02",
    title: "High-Throughput Retrieval & Vector Layer",
    badge: "RETRIEVAL & SEARCH",
    color: "yellow",
    purpose: "Multi-tenant vector search, hybrid dense/sparse retrieval & semantic reranking.",
    technologies: [
      { name: "PostgreSQL", iconName: "postgres" },
      { name: "pgvector", iconName: "pgvector" },
      { name: "Cohere Rerank", iconName: "cohere" },
      { name: "Redis Cache", iconName: "redis" },
      { name: "BM25 Hybrid", iconName: "postgres" },
    ],
  },
  {
    layerNumber: "03",
    title: "Multimodal Vision & Document Ingestion",
    badge: "VISION & INGESTION",
    color: "pink",
    purpose: "Unstructured document parsing, layout analysis, computer vision & spatial indexing.",
    technologies: [
      { name: "PyTorch", iconName: "pytorch" },
      { name: "Hugging Face / LayoutLM", iconName: "hugging" },
      { name: "OpenCV / YOLO", iconName: "opencv" },
      { name: "PostGIS / Uber H3", iconName: "postgis" },
      { name: "Whisper STT", iconName: "whisper" },
      { name: "XGBoost", iconName: "xgboost" },
    ],
  },
  {
    layerNumber: "04",
    title: "Backend Serving, Queues & Sandboxing",
    badge: "SYSTEMS & BACKEND",
    color: "lime",
    purpose: "Sub-500ms streaming APIs, distributed worker queues & secure code sandboxes.",
    technologies: [
      { name: "FastAPI", iconName: "fastapi" },
      { name: "Docker", iconName: "docker" },
      { name: "Next.js / React", iconName: "react" },
      { name: "Celery & Ray", iconName: "ray" },
      { name: "gVisor Sandboxes", iconName: "gvisor" },
    ],
  },
  {
    layerNumber: "05",
    title: "Evaluation, Guardrails & Observability",
    badge: "RELIABILITY & SAFETY",
    color: "purple",
    purpose: "Session tracing, continuous hallucination evals, PII scrubbing & telemetry.",
    technologies: [
      { name: "Langfuse", iconName: "langfuse" },
      { name: "Microsoft Presidio", iconName: "presidio" },
      { name: "OpenTelemetry", iconName: "telemetry" },
      { name: "Prometheus", iconName: "telemetry" },
    ],
  },
];
