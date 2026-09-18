export interface PhilosophyPillar {
  number: string;
  title: string;
  subtitle: string;
  accent: "yellow" | "lime" | "cyan" | "pink" | "purple";
  badge: string;
  description: string;
  rules: {
    principle: string;
    detail: string;
  }[];
  codeSnippet?: string;
}

export const ARCHITECTURE_PILLARS: PhilosophyPillar[] = [
  {
    number: "01",
    title: "Deterministic Guardrails Over Vague Prompts",
    subtitle: "Why schema validation and structured tools beat raw natural language in enterprise systems.",
    accent: "cyan",
    badge: "RELIABILITY & SAFETY",
    description:
      "LLMs should never execute unvalidated free-text actions in production environments. We enforce strict Pydantic schemas, function-calling constraints, and idempotency locks on every mutating transaction.",
    rules: [
      {
        principle: "Constrained JSON Schema Tool Execution",
        detail: "Models generate typed JSON payloads that are rigorously validated before hitting Stripe, Salesforce, or internal databases.",
      },
      {
        principle: "Distributed Idempotency Keys",
        detail: "Every financial or account-modifying action uses a unique hash key stored in Redis to guarantee exactly-once execution.",
      },
      {
        principle: "Citation-Grounded Fallbacks",
        detail: "If an assertion cannot be mapped to an exact retrieved document chunk ID with >0.85 similarity, the response is discarded or flagged for human review.",
      },
    ],
  },
  {
    number: "02",
    title: "Hybrid Retrieval & Reranking vs Plain Vector Search",
    subtitle: "Why standard cosine similarity on vector stores fails without sparse keyword awareness.",
    accent: "yellow",
    badge: "RAG BEST PRACTICES",
    description:
      "Pure semantic vector search fails on product codes, exact invoice IDs, alphanumeric skus, and boolean metadata filters. We build hybrid retrieval engines combining dense neural embeddings with sparse BM25 and Cross-Encoder rerankers.",
    rules: [
      {
        principle: "Reciprocal Rank Fusion (RRF)",
        detail: "Merges top-K dense embeddings (text-embedding-3-small) with sparse full-text search (PostgreSQL tsvector) to capture both semantic meaning and exact keywords.",
      },
      {
        principle: "Two-Stage Reranking",
        detail: "Retrieves top 30 candidate chunks with fast index lookup, then applies Cohere Rerank v3 to condense to the top 4 highly relevant context chunks.",
      },
      {
        principle: "Tenant-Isolated Row Level Security",
        detail: "Applies database-level tenant filters (`tenant_id = 'org_xyz'`) to prevent cross-tenant data leaks in enterprise multi-tenant deployments.",
      },
    ],
  },
  {
    number: "03",
    title: "Sub-500ms Latency Budget & Token Economics",
    subtitle: "Optimizing streaming throughput, prompt caching, and recursive context compaction.",
    accent: "lime",
    badge: "PERFORMANCE & COST",
    description:
      "Production users expect immediate responses. We engineer systems with aggressive token cost optimization, speculative routing, and Server-Sent Events (SSE) streaming.",
    rules: [
      {
        principle: "Prompt Caching & Static Prefixes",
        detail: "Structures system prompts with static system instructions first to leverage Anthropic/OpenAI prompt cache hits, cutting input token costs by 50% and latency by 60%.",
      },
      {
        principle: "Small-Model Intent Routing (<150ms)",
        detail: "Uses lightweight models (GPT-4o-mini / Haiku) or fast classifiers for triage, reserving expensive Claude 3.5 Sonnet / GPT-4o for complex multi-step reasoning.",
      },
      {
        principle: "Stateful Sliding-Window Compaction",
        detail: "Compresses past conversation turns into structured state representations in Redis rather than sending bloated 20k-token conversation histories.",
      },
    ],
  },
  {
    number: "04",
    title: "Continuous Evals & Closed-Loop Observability",
    subtitle: "You cannot improve what you do not systematically benchmark with synthetic datasets and live telemetry.",
    accent: "pink",
    badge: "EVALUATION PIPELINES",
    description:
      "Enterprise AI engineering requires rigorous CI/CD evaluation suites. Every prompt change or retrieval refactor is benchmarked against regression datasets before hitting production.",
    rules: [
      {
        principle: "Triad of RAG Metrics (Ragas / Langfuse)",
        detail: "Automated scoring of Faithfulness (groundedness in context), Answer Relevance (directly answering query), and Context Precision.",
      },
      {
        principle: "Synthetic Benchmark Test Suites",
        detail: "Automated generation of 500+ edge-case evaluation queries per release to stress-test jailbreak resistance and tool parameter accuracy.",
      },
      {
        principle: "Live Session Tracing & Replay",
        detail: "Every user turn is traced with Langfuse with step-by-step latency breakdown, token cost metrics, and user feedback tagging.",
      },
    ],
  },
];
