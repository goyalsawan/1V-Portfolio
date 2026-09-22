"use client";

import React from "react";
import Link from "next/link";
import { EXPERIENCES } from "@/data/experience";
import { BrutalistBadge } from "@/components/ui/BrutalistBadge";
import { Building2, Calendar, MapPin, ArrowRight, Cpu, Server, Shield, Sparkles } from "lucide-react";

export const ExperienceTimeline: React.FC = () => {
  const ksquare = EXPERIENCES[0];
  const saptang = EXPERIENCES[1];

  return (
    <section
      id="experience"
      className="snap-slide min-h-screen flex flex-col justify-center py-12 sm:py-16 px-4 sm:px-6 bg-[#12151c] text-[#e2e8f0] border-b border-[#242b3a] relative"
    >
      <div className="max-w-6xl mx-auto w-full space-y-5">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-[#242b3a]">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs font-bold text-calm-rose-400 bg-calm-rose-950/40 border border-calm-rose-800/50 px-2.5 py-0.5 rounded">
              06 // INDUSTRY TRACK RECORD
            </span>
            <BrutalistBadge color="rose" size="sm">
              PROFESSIONAL TRACK RECORD
            </BrutalistBadge>
            <BrutalistBadge color="emerald" size="sm">
              PRODUCTION SCALE &amp; AI
            </BrutalistBadge>
          </div>

          <div className="font-mono text-xs text-zinc-400 bg-[#181d28] border border-[#283144] px-2.5 py-0.5 rounded-md">
            Ksquare Systems &bull; Saptang Labs
          </div>
        </div>

        {/* Title & Value Statement */}
        <div className="space-y-1 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-[#f1f5f9] tracking-tight">
            Track Record &amp; Experience
          </h2>
          <p className="text-xs sm:text-sm text-[#94a3b8] font-sans leading-relaxed">
            Hands-on technical leadership across autonomous multi-agent AI systems and high-throughput distributed backends benchmarked at <strong className="text-zinc-200 font-semibold">80M+ events/hr</strong>.
          </p>
        </div>

        {/* Glimpse Cards Grid (2 Columns: Ksquare Systems + Saptang Labs) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans">
          {/* Card 1: Ksquare Systems */}
          <div className="p-5 rounded-2xl bg-[#181d28] border border-[#283144] hover:border-[#38435d] transition-all flex flex-col justify-between space-y-4 shadow-sm group">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-mono text-[11px] font-bold text-calm-indigo-400 bg-[#141822] border border-[#283144] px-2 py-0.5 rounded">
                  SENIOR SOFTWARE ENGINEER
                </span>
                <span className="font-mono text-xs text-calm-emerald-400 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {ksquare.period}
                </span>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-bold font-heading text-[#f1f5f9] group-hover:text-calm-indigo-300 transition-colors">
                  {ksquare.company}
                </h3>
                <p className="text-xs text-zinc-400 font-mono mt-0.5">
                  REPSS (Voice AI) &bull; Knowledge Base &bull; HiRed &bull; Jaipur (Remote)
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed line-clamp-3">
                {ksquare.summary}
              </p>

              {/* Key Glimpse Metrics */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <div className="p-2 rounded-xl bg-[#141822] border border-[#242c3d]">
                  <div className="text-base sm:text-lg font-bold font-heading text-[#f1f5f9]">&lt; 1.2s</div>
                  <div className="text-[10px] font-mono text-zinc-400">Voice AI p99 Latency</div>
                </div>
                <div className="p-2 rounded-xl bg-[#141822] border border-[#242c3d]">
                  <div className="text-base sm:text-lg font-bold font-heading text-[#f1f5f9]">30%</div>
                  <div className="text-[10px] font-mono text-zinc-400">Productivity Savings</div>
                </div>
              </div>
            </div>

            <div className="pt-2.5 border-t border-[#242b3a] flex items-center justify-between text-xs font-mono text-zinc-400">
              <span className="text-calm-indigo-400 font-medium">Led Teams of up to 5</span>
              <span>LangGraph &bull; ElevenLabs &bull; pgvector</span>
            </div>
          </div>

          {/* Card 2: Saptang Labs */}
          <div className="p-5 rounded-2xl bg-[#181d28] border border-[#283144] hover:border-[#38435d] transition-all flex flex-col justify-between space-y-4 shadow-sm group">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-mono text-[11px] font-bold text-calm-amber-400 bg-calm-amber-950/40 border border-calm-amber-800/50 px-2 py-0.5 rounded">
                  SOFTWARE ENGINEER
                </span>
                <span className="font-mono text-xs text-zinc-400">
                  {saptang.period}
                </span>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-bold font-heading text-[#f1f5f9] group-hover:text-calm-amber-300 transition-colors">
                  {saptang.company}
                </h3>
                <p className="text-xs text-zinc-400 font-mono mt-0.5">
                  Excalibur Bot-Mitigation Platform &bull; Chennai, India
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed line-clamp-3">
                {saptang.summary}
              </p>

              {/* Key Glimpse Metrics */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <div className="p-2 rounded-xl bg-[#141822] border border-[#242c3d]">
                  <div className="text-base sm:text-lg font-bold font-heading text-[#f1f5f9]">80M+ /hr</div>
                  <div className="text-[10px] font-mono text-zinc-400">Throughput (6 TB/day)</div>
                </div>
                <div className="p-2 rounded-xl bg-[#141822] border border-[#242c3d]">
                  <div className="text-base sm:text-lg font-bold font-heading text-[#f1f5f9]">60k RPS</div>
                  <div className="text-[10px] font-mono text-zinc-400">100ms p99 Latency</div>
                </div>
              </div>
            </div>

            <div className="pt-2.5 border-t border-[#242b3a] flex items-center justify-between text-xs font-mono text-zinc-400">
              <span className="text-calm-emerald-400 font-medium">88% Deploy Time Cut</span>
              <span>C++ &bull; AWS &bull; NGINX &bull; Kafka</span>
            </div>
          </div>
        </div>

        {/* CTA to Full Experience Page */}
        <div className="pt-1">
          <Link
            href="/experience/"
            className="w-full p-3.5 sm:p-4 rounded-xl bg-gradient-to-r from-[#181d28] to-[#1e2638] border border-[#283144] hover:border-calm-indigo-500/60 transition-all flex items-center justify-between gap-4 group"
          >
            <div className="space-y-0.5">
              <div className="text-xs sm:text-sm font-bold font-heading text-[#f1f5f9] flex items-center gap-2">
                <span>Explore Full Technical Track Record &amp; Architecture Deliverables</span>
                <span className="text-xs font-mono font-normal text-zinc-400 hidden sm:inline">&bull; KSquare Systems &amp; Saptang Labs</span>
              </div>
              <p className="text-[11px] text-[#94a3b8] font-sans">
                Review complete AWS infrastructure specs, NGINX module integration, multi-agent evaluation suites, and system benchmarks.
              </p>
            </div>

            <div className="w-8 h-8 rounded-lg bg-calm-indigo-500/20 border border-calm-indigo-500/40 text-calm-indigo-400 flex items-center justify-center group-hover:bg-calm-indigo-500 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0">
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
