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
    title: "AI, Agents & Voice Engineering",
    badge: "AGENTIC & VOICE AI",
    color: "cyan",
    purpose: "Stateful LangGraph supervisor workflows, ElevenLabs conversational Voice AI, OpenAI, and multi-agent RAG pipelines.",
    technologies: [
      { name: "LangGraph", iconName: "langgraph" },
      { name: "OpenAI", iconName: "openai" },
      { name: "Voice AI", iconName: "whisper" },
      { name: "ElevenLabs", iconName: "whisper" },
      { name: "RAG & Prompts", iconName: "pydantic" },
    ],
  },
  {
    layerNumber: "02",
    title: "High-Throughput Backend & Distributed Systems",
    badge: "BACKEND & DISTRIBUTED",
    color: "lime",
    purpose: "Microservices, async workers, and high-concurrency event brokers built for sub-second SLAs and 80M+ events/hr.",
    technologies: [
      { name: "FastAPI", iconName: "fastapi" },
      { name: "Python", iconName: "python" },
      { name: "Go", iconName: "python" },
      { name: "C++", iconName: "python" },
      { name: "Kafka", iconName: "ray" },
      { name: "Redis & Celery", iconName: "redis" },
      { name: "gRPC & REST", iconName: "fastapi" },
    ],
  },
  {
    layerNumber: "03",
    title: "Data Storage, Vector Search & Automation",
    badge: "DATA & AUTOMATION",
    color: "yellow",
    purpose: "Multi-tenant vector search, document OCR parsing, GIS spatial indexing, and Playwright headless web scraping.",
    technologies: [
      { name: "PostgreSQL", iconName: "postgres" },
      { name: "pgvector", iconName: "pgvector" },
      { name: "Elasticsearch", iconName: "postgres" },
      { name: "MongoDB", iconName: "postgres" },
      { name: "Playwright", iconName: "docker" },
      { name: "GIS & OCR", iconName: "postgis" },
    ],
  },
  {
    layerNumber: "04",
    title: "Frontend Engineering & Interactive UX",
    badge: "MODERN WEB & UI",
    color: "pink",
    purpose: "High-performance responsive web dashboards, real-time audio playback, and generative AI streaming interfaces.",
    technologies: [
      { name: "Next.js", iconName: "react" },
      { name: "React", iconName: "react" },
      { name: "TypeScript", iconName: "python" },
      { name: "Tailwind CSS", iconName: "react" },
    ],
  },
  {
    layerNumber: "05",
    title: "Cloud Infrastructure, DevOps & Observability",
    badge: "CLOUD, IAC & RELIABILITY",
    color: "purple",
    purpose: "Production AWS architectures (200+ EC2s), NGINX reverse-proxies, Docker CI/CD, and real-time Prometheus monitoring.",
    technologies: [
      { name: "AWS (EC2/S3/Lambda/VPC)", iconName: "docker" },
      { name: "NGINX & WAF", iconName: "docker" },
      { name: "Docker", iconName: "docker" },
      { name: "Jenkins & GitHub Actions", iconName: "docker" },
      { name: "CloudFormation", iconName: "docker" },
      { name: "Prometheus & Grafana", iconName: "telemetry" },
      { name: "Locust & JMeter", iconName: "telemetry" },
    ],
  },
];
