"use client";

import React from "react";
import { ArrowDown, ArrowDownRight, Mail } from "lucide-react";
import { BrutalistButton } from "@/components/ui/BrutalistButton";
import { BrutalistBadge } from "@/components/ui/BrutalistBadge";

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="snap-slide min-h-screen flex flex-col justify-center bg-[#12151c] text-[#e2e8f0] pt-20 pb-16 px-4 sm:px-6 relative border-b border-[#242b3a]"
    >
      <div className="max-w-6xl mx-auto w-full space-y-8">
        {/* Top Badges */}
        <div className="inline-flex flex-wrap items-center gap-2">
          <BrutalistBadge color="indigo" size="md">
            SOFTWARE ENGINEER & AI SYSTEMS
          </BrutalistBadge>
          <BrutalistBadge color="emerald" size="md">
            IIT BOMBAY GRADUATE
          </BrutalistBadge>
          <span className="font-mono text-xs font-semibold text-zinc-400 bg-[#181d28] border border-[#283144] px-3 py-1 rounded-md">
            EX-SAPTANG LABS (80M+ EVENTS/HR SCALE)
          </span>
        </div>

        {/* Hero Title & Value Proposition */}
        <div className="space-y-5 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-heading tracking-tight text-[#f1f5f9] leading-[1.1]">
            Architecting <span className="text-calm-indigo-400">High-Throughput & Production AI</span> Systems.
          </h1>

          <p className="text-lg sm:text-xl text-[#94a3b8] font-sans leading-relaxed font-normal max-w-3xl">
            Software Engineer (IIT Bombay) specializing in **high-scale distributed backends (80M+ events/hr, 60,000 RPS), multi-agent LLM systems, C++ NGINX reverse-proxy filtering, and low-latency cloud infrastructure**. Experienced across Python, Go, C++, AWS, and AI architectures.
          </p>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <BrutalistButton
            size="lg"
            variant="secondary"
            asAnchor
            href="/projects/"
            icon={<ArrowDownRight className="w-4 h-4 stroke-[2.5]" />}
          >
            Explore Flagship Systems
          </BrutalistButton>

          <BrutalistButton
            size="lg"
            variant="outline"
            asAnchor
            href="#contact"
            icon={<Mail className="w-4 h-4 text-zinc-400" />}
          >
            Contact & Availability
          </BrutalistButton>
        </div>

        {/* Proof-Point Summary Bar */}
        <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-[#242b3a]">
          <div className="p-3.5 bg-[#181d28] rounded-xl border border-[#283144] shadow-sm">
            <div className="text-2xl sm:text-3xl font-bold font-heading text-[#f1f5f9]">64.2%</div>
            <div className="text-xs text-zinc-400 font-medium mt-0.5">Autonomous Deflection</div>
          </div>
          <div className="p-3.5 bg-[#181d28] rounded-xl border border-[#283144] shadow-sm">
            <div className="text-2xl sm:text-3xl font-bold font-heading text-[#f1f5f9]">&lt;500ms</div>
            <div className="text-xs text-zinc-400 font-medium mt-0.5">Time to First Token</div>
          </div>
          <div className="p-3.5 bg-[#181d28] rounded-xl border border-[#283144] shadow-sm">
            <div className="text-2xl sm:text-3xl font-bold font-heading text-[#f1f5f9]">98.4%</div>
            <div className="text-xs text-zinc-400 font-medium mt-0.5">PDF Table Precision</div>
          </div>
          <div className="p-3.5 bg-[#181d28] rounded-xl border border-[#283144] shadow-sm">
            <div className="text-2xl sm:text-3xl font-bold font-heading text-[#f1f5f9]">52.4%</div>
            <div className="text-xs text-zinc-400 font-medium mt-0.5">LMS Completion Rate</div>
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
