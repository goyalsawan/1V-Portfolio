"use client";

import React from "react";
import { ArrowDown, ArrowDownRight, Mail } from "lucide-react";
import { BrutalistButton } from "@/components/ui/BrutalistButton";
import { BrutalistBadge } from "@/components/ui/BrutalistBadge";
import { captureEvent } from "@/lib/analytics";

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="snap-slide min-h-screen flex flex-col justify-center bg-[#12151c] text-[#e2e8f0] py-12 sm:py-16 px-4 sm:px-6 relative border-b border-[#242b3a]"
    >
      <div className="max-w-6xl mx-auto w-full space-y-6">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-[#242b3a]">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs font-bold text-calm-indigo-400 bg-calm-indigo-950/40 border border-calm-indigo-800/50 px-2.5 py-0.5 rounded">
              01 // OVERVIEW
            </span>
            <BrutalistBadge color="indigo" size="sm">
              SOFTWARE ENGINEER | FULL STACK AI SYSTEMS
            </BrutalistBadge>
            <BrutalistBadge color="emerald" size="sm">
              IIT BOMBAY GRADUATE
            </BrutalistBadge>
          </div>
          <span className="font-mono text-xs font-semibold text-zinc-400 bg-[#181d28] border border-[#283144] px-2.5 py-0.5 rounded-md">
            4+ YEARS &bull; TEAMS UP TO 5 ENG
          </span>
        </div>

        {/* Hero Title & Value Proposition */}
        <div className="space-y-4 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight text-[#f1f5f9] leading-[1.15]">
            Architecting <span className="text-calm-indigo-400">Full-Stack AI &amp; High-Throughput</span> Systems.
          </h1>

          <p className="text-base sm:text-lg text-[#94a3b8] font-sans leading-relaxed font-normal max-w-3xl">
            Product-minded Software Engineer (IIT Bombay) with 4+ years of experience architecting and leading full-stack AI products, multi-agent LangGraph systems, conversational Voice AI, and high-throughput cloud services (80M+ events/hr). Led teams of up to 5 engineers from ambiguous requirements through scalable delivery.
          </p>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <BrutalistButton
            size="lg"
            variant="secondary"
            asAnchor
            href="/projects/"
            onClick={() => captureEvent("projects_hub_opened", { source: "hero" })}
            icon={<ArrowDownRight className="w-4 h-4 stroke-[2.5]" />}
          >
            Explore Flagship Systems
          </BrutalistButton>

          <BrutalistButton
            size="lg"
            variant="outline"
            asAnchor
            href="#contact"
            onClick={() => captureEvent("contact_section_opened", { source: "hero" })}
            icon={<Mail className="w-4 h-4 text-zinc-400" />}
          >
            Contact & Availability
          </BrutalistButton>
        </div>

        {/* Architectural Competencies & Business Financial Impact Bar */}
        <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5 border-t border-[#242b3a]">
          {/* Card 1: Multi-Agent & Voice AI */}
          <div className="p-3.5 bg-[#181d28] rounded-xl border border-[#283144] hover:border-calm-indigo-500/50 transition-colors shadow-sm flex flex-col justify-between">
            <div className="space-y-1">
              <span className="font-mono text-[10px] font-bold text-calm-indigo-400 bg-calm-indigo-950/50 border border-calm-indigo-800/50 px-1.5 py-0.5 rounded">
                01 // AI &amp; VOICE
              </span>
              <div className="text-sm font-bold font-heading text-[#f1f5f9] pt-1">
                LangGraph &amp; Voice AI
              </div>
              <p className="text-[11px] text-zinc-400 leading-snug">
                Sub-1.2s Voice AI (ElevenLabs), supervisor graphs &amp; multi-agent RAG.
              </p>
            </div>
          </div>

          {/* Card 2: High-Scale Distributed Cloud */}
          <div className="p-3.5 bg-[#181d28] rounded-xl border border-[#283144] hover:border-calm-sky-500/50 transition-colors shadow-sm flex flex-col justify-between">
            <div className="space-y-1">
              <span className="font-mono text-[10px] font-bold text-calm-sky-400 bg-calm-sky-950/50 border border-calm-sky-800/50 px-1.5 py-0.5 rounded">
                02 // DISTRIBUTED SCALE
              </span>
              <div className="text-sm font-bold font-heading text-[#f1f5f9] pt-1">
                80M+ Events/Hr (60k RPS)
              </div>
              <p className="text-[11px] text-zinc-400 leading-snug">
                200+ AWS EC2 nodes, Kafka streaming buses &amp; sub-second SLAs.
              </p>
            </div>
          </div>

          {/* Card 3: Low-Latency Systems */}
          <div className="p-3.5 bg-[#181d28] rounded-xl border border-[#283144] hover:border-calm-rose-500/50 transition-colors shadow-sm flex flex-col justify-between">
            <div className="space-y-1">
              <span className="font-mono text-[10px] font-bold text-calm-rose-400 bg-calm-rose-950/50 border border-calm-rose-800/50 px-1.5 py-0.5 rounded">
                03 // SYSTEMS &amp; WAF
              </span>
              <div className="text-sm font-bold font-heading text-[#f1f5f9] pt-1">
                C++ NGINX Modules
              </div>
              <p className="text-[11px] text-zinc-400 leading-snug">
                Sub-500ms real-time blocking &amp; 100ms p99 API threat mitigation.
              </p>
            </div>
          </div>

          {/* Card 4: Business Financial Impact */}
          <div className="p-3.5 bg-[#181d28] rounded-xl border border-calm-emerald-800/60 bg-gradient-to-br from-[#181d28] to-calm-emerald-950/30 hover:border-emerald-500/50 transition-colors shadow-sm flex flex-col justify-between">
            <div className="space-y-1">
              <span className="font-mono text-[10px] font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-1.5 py-0.5 rounded">
                04 // FINANCIAL IMPACT
              </span>
              <div className="text-sm font-bold font-heading text-emerald-300 pt-1">
                $1M+ Impact Created
              </div>
              <p className="text-[11px] text-zinc-300 leading-snug">
                30% team productivity gains &amp; cutting days of manual work to &lt;2 min.
              </p>
            </div>
          </div>

          {/* Card 5: Engineering Leadership */}
          <div className="p-3.5 bg-[#181d28] rounded-xl border border-[#283144] hover:border-amber-500/50 transition-colors shadow-sm flex flex-col justify-between">
            <div className="space-y-1">
              <span className="font-mono text-[10px] font-bold text-amber-400 bg-amber-950/50 border border-amber-800/50 px-1.5 py-0.5 rounded">
                05 // LEADERSHIP
              </span>
              <div className="text-sm font-bold font-heading text-[#f1f5f9] pt-1">
                Teams of up to 5 Eng
              </div>
              <p className="text-[11px] text-zinc-400 leading-snug">
                0-to-1 architecture ownership from ambiguous specs to delivery.
              </p>
            </div>
          </div>
        </div>

        {/* Scroll prompt */}
        <div className="pt-4 flex items-center gap-2 text-xs font-mono text-zinc-400">
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-calm-indigo-400" />
          <span>Scroll down or use ↓ keys to navigate presentation</span>
        </div>
      </div>
    </section>
  );
};
