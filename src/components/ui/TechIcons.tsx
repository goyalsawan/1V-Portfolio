"use client";

import React from "react";

interface TechIconProps {
  name: string;
  className?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = "w-8 h-8" }) => {
  const normalized = name.toLowerCase();

  // Python
  if (normalized.includes("python")) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none">
        <path
          d="M63.5 13.2c-15.6 0-24.8 6.8-24.8 20v10.3h25.4v3.5H28.4C14.7 47 4 58.7 4 72.8c0 14.8 11.8 24.8 25.5 24.8h6.9v-9.6c0-10.9 9.3-20.2 20.2-20.2h25.4c8.4 0 15.2-6.9 15.2-15.2V33.2c0-13.2-10-20-23.7-20zm-8.8 7.4c2.5 0 4.6 2.1 4.6 4.6 0 2.5-2.1 4.6-4.6 4.6s-4.6-2.1-4.6-4.6c0-2.5 2-4.6 4.6-4.6z"
          fill="url(#py-blue)"
        />
        <path
          d="M64.5 114.8c15.6 0 24.8-6.8 24.8-20V84.5H63.9V81h35.7c13.7 0 24.4-11.7 24.4-25.8 0-14.8-11.8-24.8-25.5-24.8h-6.9v9.6c0 10.9-9.3 20.2-20.2 20.2H46c-8.4 0-15.2 6.9-15.2 15.2v19.4c0 13.2 10 20.2 23.7 20.2zm8.8-7.4c-2.5 0-4.6-2.1-4.6-4.6 0-2.5 2.1-4.6 4.6-4.6s4.6 2.1 4.6 4.6c0 2.5-2.1 4.6-4.6 4.6z"
          fill="url(#py-yellow)"
        />
        <defs>
          <linearGradient id="py-blue" x1="10" y1="10" x2="80" y2="80" gradientUnits="userSpaceOnUse">
            <stop stopColor="#387EB8" />
            <stop offset="1" stopColor="#366994" />
          </linearGradient>
          <linearGradient id="py-yellow" x1="60" y1="60" x2="120" y2="120" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFE873" />
            <stop offset="1" stopColor="#FFD43B" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // OpenAI / GPT-4o
  if (normalized.includes("openai") || normalized.includes("gpt")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#10A37F">
        <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zm-1.22-9.92a4.47 4.47 0 0 1 2.345-1.974v5.676a.79.79 0 0 0 .392.682l5.844 3.369-2.02 1.168a.078.078 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.38 8.384zm15.65 3.518l-5.844-3.369 2.02-1.168a.078.078 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.68 8.02v-5.6a.79.79 0 0 0-.397-.674zm2.37-4.47a4.47 4.47 0 0 1 .535 3.014l-.142-.085-4.783-2.759a.771.771 0 0 0-.78 0L9.945 10.97V8.638a.08.08 0 0 1 .033-.062L14.82 5.78a4.5 4.5 0 0 1 6.14 1.646zM8.308 13.277l-2.02-1.168a.071.071 0 0 1-.038-.052V6.474a4.504 4.504 0 0 1 7.37-3.453l-.142.08-4.778 2.758a.795.795 0 0 0-.392.681v6.737zm1.142-2.128l2.55-1.472 2.55 1.472v2.944l-2.55 1.472-2.55-1.472v-2.944z" />
      </svg>
    );
  }

  // Claude / Anthropic
  if (normalized.includes("claude") || normalized.includes("anthropic")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#D97706">
        <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="#F59E0B" />
        <circle cx="12" cy="12" r="3" fill="#D97706" />
      </svg>
    );
  }

  // LangChain / LangGraph
  if (normalized.includes("langgraph") || normalized.includes("langchain")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#1C3C3C" />
        <circle cx="7" cy="12" r="2.5" fill="#22D3EE" />
        <circle cx="17" cy="7" r="2.5" fill="#34D399" />
        <circle cx="17" cy="17" r="2.5" fill="#F472B6" />
        <path d="M9.5 12L14.5 7.5M9.5 12L14.5 16.5" stroke="#E2E8F0" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  // Pydantic
  if (normalized.includes("pydantic")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#1E293B" />
        <path d="M7 6H13.5C15.9853 6 18 8.01472 18 10.5C18 12.9853 15.9853 15 13.5 15H10.5V18H7V6Z" fill="#E92063" />
        <circle cx="10.5" cy="10.5" r="1.5" fill="#FFFFFF" />
      </svg>
    );
  }

  // PostgreSQL / pgvector
  if (normalized.includes("postgres") || normalized.includes("pgvector")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#1E293B" />
        <path
          d="M12 4C8.5 4 6 6.5 6 10C6 13 7.5 15.5 10 16.5V20H14V16.5C16.5 15.5 18 13 18 10C18 6.5 15.5 4 12 4ZM10 8C10.55 8 11 8.45 11 9C11 9.55 10.55 10 10 10C9.45 10 9 9.55 9 9C9 8.45 9.45 8 10 8ZM14 10C13.45 10 13 9.55 13 9C13 8.45 13.45 8 14 8C14.55 8 15 8.45 15 9C15 9.55 14.55 10 14 10Z"
          fill="#336791"
        />
        <circle cx="10" cy="9" r="1" fill="#60A5FA" />
        <circle cx="14" cy="9" r="1" fill="#60A5FA" />
      </svg>
    );
  }

  // Cohere
  if (normalized.includes("cohere")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#2E1065" />
        <circle cx="9" cy="12" r="4.5" fill="#D946EF" />
        <circle cx="15" cy="12" r="4.5" fill="#38BDF8" fillOpacity="0.8" />
      </svg>
    );
  }

  // Redis
  if (normalized.includes("redis")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#1E293B" />
        <path d="M4 8L12 4L20 8L12 12L4 8Z" fill="#DC382D" />
        <path d="M4 12L12 16L20 12V14L12 18L4 14V12Z" fill="#B91C1C" />
        <path d="M4 16L12 20L20 16V17.5L12 21.5L4 17.5V16Z" fill="#991B1B" />
      </svg>
    );
  }

  // PyTorch
  if (normalized.includes("pytorch")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#1E293B" />
        <path
          d="M13.5 4.5C13.5 4.5 10.5 7.5 10.5 11C10.5 12.5 11.5 13.5 12.5 14.5C10 15 7.5 13.5 7.5 10C7.5 6 12 4 12 4L13.5 4.5Z"
          fill="#EE4C2C"
        />
        <circle cx="15.5" cy="7.5" r="1.5" fill="#EE4C2C" />
      </svg>
    );
  }

  // Hugging Face
  if (normalized.includes("hugging") || normalized.includes("layoutlm") || normalized.includes("transformer")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#1E293B" />
        <circle cx="12" cy="12" r="7" fill="#FFD21E" />
        <circle cx="9.5" cy="10.5" r="1" fill="#1E293B" />
        <circle cx="14.5" cy="10.5" r="1" fill="#1E293B" />
        <path d="M9 14.5C10 16 14 16 15 14.5" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  // OpenCV / Computer Vision / YOLO
  if (normalized.includes("opencv") || normalized.includes("yolo") || normalized.includes("vision")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#1E293B" />
        <circle cx="12" cy="8" r="3" fill="#EF4444" />
        <circle cx="7.5" cy="15.5" r="3" fill="#10B981" />
        <circle cx="16.5" cy="15.5" r="3" fill="#3B82F6" />
      </svg>
    );
  }

  // PostGIS / Uber H3 / Spatial
  if (normalized.includes("postgis") || normalized.includes("spatial") || normalized.includes("h3")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#064E3B" />
        <path d="M12 4L19 8V16L12 20L5 16V8L12 4Z" stroke="#34D399" strokeWidth="1.5" fill="#047857" fillOpacity="0.5" />
        <circle cx="12" cy="12" r="2" fill="#6EE7B7" />
      </svg>
    );
  }

  // Whisper / Audio
  if (normalized.includes("whisper") || normalized.includes("speech") || normalized.includes("audio")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#1E293B" />
        <path d="M6 10V14M9 7V17M12 4V20M15 8V16M18 11V13" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  // XGBoost / LightGBM / ML
  if (normalized.includes("xgboost") || normalized.includes("lightgbm") || normalized.includes("tabular")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#1E293B" />
        <path d="M5 19L9 13L13 16L19 6" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="19" cy="6" r="2" fill="#F97316" />
      </svg>
    );
  }

  // FastAPI
  if (normalized.includes("fastapi")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#042F2E" />
        <circle cx="12" cy="12" r="8" fill="#009688" />
        <path d="M13 7L8 13H12L11 17L16 11H12L13 7Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // Docker
  if (normalized.includes("docker")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#0F172A" />
        <path
          d="M13 10H15V8H13V10ZM10 10H12V8H10V10ZM7 10H9V8H7V10ZM10 7H12V5H10V7ZM13 7H15V5H13V7ZM4 10H6V8H4V10ZM20.5 10.5C20.2 10.3 19.4 10.2 18.5 10.4C18.3 9.7 17.9 9.1 17.3 8.7L16.9 8.5L16.6 8.9C16.1 9.7 16 10.7 16.3 11.6C16.1 11.7 15.8 11.9 15.4 11.9H2.5C2.2 11.9 2 12.1 2 12.4C2.3 13.5 2.6 14.6 3.2 15.5C4.2 17 5.6 18 7.3 18.3C8.4 18.5 9.5 18.5 10.6 18.3C12.2 18 13.7 17.1 14.7 15.9C15.8 14.6 17 14 18.3 14C19.3 14 20.3 14.5 21 15.2C21.4 14.5 21.7 13.7 21.8 12.8C22 11.6 21.4 10.8 20.5 10.5Z"
          fill="#2496ED"
        />
      </svg>
    );
  }

  // Next.js / React
  if (normalized.includes("next.js") || normalized.includes("react")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#020617" />
        <circle cx="12" cy="12" r="2" fill="#61DAFB" />
        <ellipse cx="12" cy="12" rx="7.5" ry="3" stroke="#61DAFB" strokeWidth="1.2" />
        <ellipse cx="12" cy="12" rx="7.5" ry="3" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="7.5" ry="3" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(120 12 12)" />
      </svg>
    );
  }

  // Celery / Distributed Queues
  if (normalized.includes("celery") || normalized.includes("queue")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#052E16" />
        <path d="M12 4C9 4 7 7 8 11L12 20L16 11C17 7 15 4 12 4Z" fill="#22C55E" />
        <path d="M12 6V18" stroke="#FFFFFF" strokeWidth="1.5" />
      </svg>
    );
  }

  // Ray
  if (normalized.includes("ray") || normalized.includes("temporal")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#0C4A6E" />
        <circle cx="12" cy="12" r="3" fill="#38BDF8" />
        <path d="M12 4V7M12 17V20M4 12H7M17 12H20M6.3 6.3L8.5 8.5M15.5 15.5L17.7 17.7M6.3 17.7L8.5 15.5M15.5 8.5L17.7 6.3" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  // gVisor / Linux Sandboxes
  if (normalized.includes("gvisor") || normalized.includes("sandbox") || normalized.includes("linux")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#1E1B4B" />
        <path d="M12 4L19 7.5V13C19 17 16 20 12 21C8 20 5 17 5 13V7.5L12 4Z" fill="#6366F1" />
        <path d="M9 12.5L11 14.5L15 9.5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  // Langfuse / Arize
  if (normalized.includes("langfuse") || normalized.includes("arize") || normalized.includes("eval")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#311302" />
        <path d="M12 4C7 8 7 13 9 16C10 17.5 11 19 12 20C13 19 14 17.5 15 16C17 13 17 8 12 4Z" fill="#F97316" />
        <circle cx="12" cy="14" r="2" fill="#FEF08A" />
      </svg>
    );
  }

  // Microsoft Presidio / PII / Security
  if (normalized.includes("presidio") || normalized.includes("pii") || normalized.includes("security")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#0C4A6E" />
        <path d="M12 4L18 6.5V11C18 15 15.5 18.5 12 19.5C8.5 18.5 6 11 6 11V6.5L12 4Z" fill="#0EA5E9" />
        <circle cx="12" cy="11.5" r="2" fill="#FFFFFF" />
      </svg>
    );
  }

  // Prometheus / OpenTelemetry / Metrics
  if (normalized.includes("telemetry") || normalized.includes("prometheus") || normalized.includes("grafana")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="6" fill="#3B0764" />
        <path d="M5 16V19H19V16" stroke="#C084FC" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 14V11M12 14V7M16 14V9" stroke="#E879F9" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    );
  }

  // Fallback icon
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="6" fill="#1E293B" />
      <circle cx="12" cy="12" r="4" fill="#818CF8" />
    </svg>
  );
};
