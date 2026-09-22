"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Server, 
  Layout, 
  Cloud, 
  Cpu, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  ExternalLink
} from "lucide-react";
import { SERVICE_PILLARS, ENGAGEMENT_MODELS } from "@/data/services";
import { BrutalistBadge } from "@/components/ui/BrutalistBadge";
import { BrutalistButton } from "@/components/ui/BrutalistButton";

const ICONS_MAP: Record<string, React.ReactNode> = {
  "backend-architecture": <Server className="w-4 h-4 text-calm-indigo-400" />,
  "frontend-engineering": <Layout className="w-4 h-4 text-calm-sky-400" />,
  "cloud-devops": <Cloud className="w-4 h-4 text-emerald-400" />,
  "ai-agentic-systems": <Cpu className="w-4 h-4 text-purple-400" />,
  "ai-business-consulting": <TrendingUp className="w-4 h-4 text-amber-400" />
};

export const ServicesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(SERVICE_PILLARS[0].id);
  const activePillar = SERVICE_PILLARS.find((p) => p.id === activeTab) || SERVICE_PILLARS[0];

  return (
    <section
      id="services"
      className="snap-slide min-h-screen flex flex-col justify-center py-12 sm:py-16 px-4 sm:px-6 bg-[#12151c] text-[#e2e8f0] border-b border-[#242b3a] relative"
    >
      <div className="max-w-6xl mx-auto w-full space-y-5">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-[#242b3a]">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs font-bold text-calm-indigo-400 bg-calm-indigo-950/40 border border-calm-indigo-800/50 px-2.5 py-0.5 rounded">
              04 // SERVICES &amp; ADVISORY
            </span>
            <BrutalistBadge color="indigo" size="sm">
              SERVICES &amp; ADVISORY
            </BrutalistBadge>
            <BrutalistBadge color="emerald" size="sm">
              5 CORE PILLARS
            </BrutalistBadge>
          </div>

          <Link
            href="/services/"
            className="text-xs font-mono text-calm-indigo-400 hover:text-calm-indigo-300 flex items-center gap-1 transition-colors"
          >
            <span>Detailed Deep-Dive &amp; Rates</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Title & Value Statement */}
        <div className="space-y-1 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-[#f1f5f9] tracking-tight">
            How I Help Teams Build & Scale
          </h2>
          <p className="text-xs sm:text-sm text-[#94a3b8] font-sans leading-relaxed">
            From greenfield architecture and 0-to-1 MVP velocity to enterprise AI advisory, distributed backends, and responsive generative interfaces.
          </p>
        </div>

        {/* Interactive Service Explorer (Pill Selector + Split Card) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Left Column: 5 Service Tabs */}
          <div className="lg:col-span-5 space-y-2">
            {SERVICE_PILLARS.map((service) => {
              const isActive = service.id === activeTab;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`w-full text-left p-3 rounded-xl border transition-all flex items-center justify-between group ${
                    isActive
                      ? "bg-[#1e2536] border-calm-indigo-500/70 shadow-md shadow-calm-indigo-950/40"
                      : "bg-[#181d28]/70 border-[#283144] hover:bg-[#181d28] hover:border-[#38435d]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#12151c] border border-[#283144]">
                      {ICONS_MAP[service.id]}
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-[#f1f5f9] group-hover:text-calm-indigo-300 transition-colors">
                        {service.shortTitle}
                      </div>
                      <div className="text-[11px] text-[#94a3b8] font-mono line-clamp-1">
                        {service.badge}
                      </div>
                    </div>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isActive
                        ? "text-calm-indigo-400 translate-x-0.5"
                        : "text-zinc-600 opacity-0 group-hover:opacity-100"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Pillar Spotlight & Deliverables */}
          <div className="lg:col-span-7 bg-[#181d28] border border-[#283144] rounded-2xl p-5 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              {/* Header inside card */}
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <BrutalistBadge color={activePillar.color} size="sm">
                      {activePillar.badge}
                    </BrutalistBadge>
                    {activePillar.relatedProjectSlug && (
                      <Link
                        href={`/projects/${activePillar.relatedProjectSlug}`}
                        className="text-[11px] font-mono text-calm-sky-400 hover:text-calm-sky-300 flex items-center gap-1"
                      >
                        <span>Case Study: {activePillar.relatedProjectTitle}</span>
                        <ExternalLink className="w-3 h-3" />
                      </Link>
                    )}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold font-heading text-[#f1f5f9]">
                    {activePillar.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed">
                {activePillar.description}
              </p>

              {/* Core Deliverables Checklist */}
              <div className="space-y-1.5 pt-1">
                <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                  Key Scope & Deliverables
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {activePillar.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-zinc-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Badges */}
              <div className="space-y-1.5 pt-1">
                <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-semibold">
                  Core Technologies
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {activePillar.technologies.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-[#12151c] border border-[#283144] font-mono text-[11px] text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-3 border-t border-[#242b3a] flex flex-wrap items-center justify-between gap-2">
              <Link
                href="/services/"
                className="text-xs font-mono text-zinc-400 hover:text-zinc-200 flex items-center gap-1 transition-colors"
              >
                <span>View Full Scope & SLA Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <BrutalistButton
                size="sm"
                variant="primary"
                asAnchor
                href="/#contact"
                icon={<Sparkles className="w-3.5 h-3.5 text-yellow-300" />}
              >
                Discuss This Project
              </BrutalistButton>
            </div>
          </div>
        </div>

        {/* Engagement Models Banner */}
        <div className="p-3 rounded-xl bg-[#151923] border border-[#242b3a] flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] uppercase font-bold text-amber-400 bg-amber-950/50 border border-amber-800/60 px-2 py-0.5 rounded">
              ENGAGEMENT MODELS
            </span>
            <span className="text-zinc-300 font-sans">
              Contract MVP Sprints &bull; Fractional Tech Lead (10–20h/wk) &bull; High-Impact Full-Time
            </span>
          </div>

          <Link
            href="/services/#engagement-models"
            className="font-mono text-calm-indigo-400 hover:text-calm-indigo-300 flex items-center gap-1 font-semibold shrink-0"
          >
            <span>Compare Engagement Options</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
