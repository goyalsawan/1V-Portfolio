export interface TerminalCommandOutput {
  type: "text" | "table" | "json" | "success" | "warning" | "error" | "ascii";
  content: string;
}

export const TERMINAL_HELP = `
AVAILABLE CLI COMMANDS:
--------------------------------------------------------------------------------
  help                     Show this interactive command manual
  projects                 List all 3 flagship production AI projects
  cat projects/<1|2|3>     View full technical architecture & spec for a project
  skills                   Display categorized production AI skills & tech stack
  experience               View enterprise consulting background at Ksquare Systems
  eval-benchmark           Run real-time simulated AI evaluation & latency benchmark
  architecture             View core production AI engineering design pillars
  contact                  Display direct contact info, email, LinkedIn, and GitHub
  whoami                   Display current AI engineer profile & specialization
  clear                    Clear terminal screen
--------------------------------------------------------------------------------
Tip: You can also click the buttons or scroll down to explore visual case studies.
`;

export const WHOAMI_OUTPUT = `
AI ENGINEER PROFILE:
================================================================================
Role:           Staff / Senior Full-Stack AI Engineer
Specialization: Production Multi-Agent Systems, High-Throughput RAG & Multimodal AI
Background:     Engineered B2B Enterprise AI Platforms at Ksquare Systems
Focus Areas:    Deterministic Tool-Calling, Latency & Token Optimization, Evals
Availability:   Open to Senior/Staff AI Engineering & AI Architect Roles
================================================================================
`;
