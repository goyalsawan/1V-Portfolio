export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  badge: string;
  summary: string;
  glimpse: {
    headline: string;
    stats: { label: string; value: string }[];
    coreTakeaway: string;
  };
  highlights: string[];
  technologies: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  location: string;
  period: string;
  badge: string;
  honors: string[];
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: "Ksquare Systems",
    role: "Senior Software Engineer",
    location: "Jaipur, India (Remote)",
    period: "Jun. 2024 – Present",
    badge: "FULL STACK AI & MULTI-AGENT SYSTEMS",
    summary:
      "Architecting end-to-end full-stack AI products, multi-agent LangGraph orchestrations, conversational Voice AI agents, and high-throughput cloud services. Leading and mentoring teams of up to 5 engineers from ambiguous requirements through scalable, production-grade delivery.",
    glimpse: {
      headline: "REPSS Property AI, Enterprise Knowledge Base & HiRed Agentic Sourcing",
      stats: [
        { label: "Voice AI Latency", value: "< 1.2s p99" },
        { label: "Productivity Gain", value: "30%" },
        { label: "Profiles Sourced", value: "1,000+ / day" },
        { label: "Team Led", value: "Up to 5 Eng" },
      ],
      coreTakeaway:
        "Architected 3 flagship AI systems (REPSS, Enterprise Knowledge Management, HiRed), leading engineering teams across Voice AI, multi-agent RAG, and distributed pipelines.",
    },
    highlights: [
      "REPSS (Real Estate Property Scoring System): Architected end-to-end platform and led/mentored a 5-member team delivering apartment price discovery, legal-history analysis, GIS processing, and OCR-based document extraction.",
      "Reduced comprehensive property analysis from days of manual work to under 2 minutes; built a conversational Voice AI agent with p99 latency below 1.2 seconds that captures buyer requirements and recommends properties.",
      "Enterprise Knowledge Management System: Architected a multi-agent enterprise knowledge platform and spearheaded a 3-member team delivering an evolving knowledge base built from contextual employee interviews.",
      "Saved 10+ hours per employee per week through self-service knowledge access, delivering 30% productivity savings while reducing new-hire training time by 40%.",
      "HiRed (Agentic Hiring Management System): Architected an agentic hiring platform and led a 3-member team orchestrating job-description ingestion, candidate sourcing, outreach, preliminary interviews, and recommendations.",
      "Built resilient sourcing pipelines processing 1,000+ candidate profiles/day across 50+ platforms, automating profile matching and qualified shortlists to reduce recruiter effort and accelerate hiring.",
    ],
    technologies: [
      "Python",
      "Go",
      "FastAPI",
      "LangGraph",
      "OpenAI",
      "ElevenLabs API",
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL / pgvector",
      "Redis",
      "Celery",
      "Playwright",
      "GIS & OCR",
      "Docker",
      "AWS",
    ],
  },
  {
    company: "Saptang Labs",
    role: "Software Engineer",
    location: "Chennai, India",
    period: "Jul. 2022 – Jun. 2024",
    badge: "80M+ EVENTS/HR & HIGH-SCALE DEFENSE",
    summary:
      "Architected and led 2 engineers in designing, load-testing, and validating a real-time bot-mitigation system processing 80M+ events/hour (6 TB/day). Engineered high-concurrency AWS architecture, C++ NGINX reverse-proxy filtering (<500ms blocking), and automated CI/CD pipelines.",
    glimpse: {
      headline: "Excalibur – High-Throughput Bot Intelligence & Distributed Cloud",
      stats: [
        { label: "Throughput", value: "80M+ events/hr" },
        { label: "Traffic Volume", value: "6 TB / day" },
        { label: "Concurrency", value: "60,000 RPS" },
        { label: "p99 Latency", value: "100 ms" },
      ],
      coreTakeaway:
        "Led 2 engineers in delivering real-time bot-mitigation across 200+ EC2 instances, C++ NGINX/WAF in-path filtering, and cutting deployment time by 88% to 1 hour.",
    },
    highlights: [
      "Excalibur (Bot Intelligence Platform): Architected and led 2 engineers in validating a real-time bot-mitigation system processing 80M+ events/hour (6 TB/day); translated input from 5+ stakeholders into scope and acceptance criteria.",
      "Implemented the AWS architecture and C++ NGINX/WAF integration; validated performance across 200+ EC2 instances at 60,000 RPS, 100 ms p99 latency, and sub-500 ms blocking.",
      "Built a Flask, React, and Elasticsearch control plane for a 300+ rule detection engine, improving query performance by 36% and reducing false positives by 40%.",
      "Automated CI/CD and monitoring to cut deployment time by 88% to 1 hour; enabled 5 production iterations per week with zero downtime.",
      "Instrumented end-to-end observability using Prometheus, Grafana, and CloudWatch; validated EC2 Auto Scaling recovery under synthetic burst loads.",
    ],
    technologies: [
      "C++",
      "Go",
      "Python (Flask, FastAPI)",
      "TypeScript",
      "React",
      "NGINX / WAF",
      "MongoDB",
      "Elasticsearch",
      "Kafka",
      "AWS (EC2, S3, Lambda, VPC)",
      "Docker",
      "Jenkins & GitHub Actions",
      "Prometheus & Grafana",
      "Locust & JMeter",
    ],
  },
];

export const EDUCATION: EducationItem = {
  institution: "Indian Institute of Technology Bombay",
  degree: "Bachelor of Technology in Materials Science",
  location: "Mumbai, India",
  period: "2018 – 2022",
  badge: "IIT BOMBAY ALUM",
  honors: [
    "Bachelor of Technology in Materials Science from India's premier technological university.",
    "Rigorous training in core mathematics, engineering computation, algorithms, and analytical problem-solving.",
    "Active contributor and gold medalist representing IIT Bombay in national inter-university technical engineering competitions.",
  ],
};
