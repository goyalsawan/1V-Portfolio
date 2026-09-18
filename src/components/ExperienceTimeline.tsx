"use client";

import React from "react";
import Link from "next/link";
import { EXPERIENCES, EDUCATION } from "@/data/experience";
import { BrutalistBadge } from "@/components/ui/BrutalistBadge";
import { Building2, Calendar, MapPin, ArrowRight, Award, GraduationCap, Zap, Server } from "lucide-react";

export const ExperienceTimeline: React.FC = () => {
  return (
    <section
      id="experience"
      className="snap-slide min-h-screen flex flex-col justify-center py-20 px-4 sm:px-6 bg-[#12151c] text-[#e2e8f0] border-b border-[#242b3a] relative"
    >
      <div className="max-w-6xl mx-auto w-full space-y-7">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#242b3a]">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs font-bold text-calm-rose-400 bg-calm-rose-950/40 border border-calm-rose-800/50 px-2.5 py-0.5 rounded">
              CHAPTER 04
            </span>
            <BrutalistBadge color="rose" size="md">
              PROFESSIONAL TRACK RECORD
            </BrutalistBadge>
            <BrutalistBadge color="amber" size="md">
              HIGH-SCALE CLOUD SYSTEMS
            </BrutalistBadge>
          </div>

          <div className="font-mono text-xs text-zinc-400 bg-[#181d28] border border-[#283144] px-3 py-1 rounded-md">
            Saptang Labs &bull; IIT Bombay
          </div>
        </div>

        {/* Title & Value Statement */}
        <div className="space-y-1.5 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-[#f1f5f9] tracking-tight">
            Track Record & Experience
          </h2>
          <p className="text-sm sm:text-base text-[#94a3b8] font-sans leading-relaxed">
            High-throughput distributed systems, C++ NGINX reverse-proxy filtering, and cloud architectures benchmarked at <strong className="text-zinc-200 font-semibold">80M+ events/hr (6 TB/day)</strong>.
          </p>
        </div>

        {/* Glimpse Cards Grid (2 Columns: Saptang Labs Engineer + Cybersecurity/IIT Bombay) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans">
          {/* Card 1: Saptang Labs Software Engineer Glimpse */}
          <div className="p-6 rounded-2xl bg-[#181d28] border border-[#283144] hover:border-[#38435d] transition-all flex flex-col justify-between space-y-5 shadow-sm group">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-mono text-xs font-bold text-calm-indigo-400 bg-[#141822] border border-[#283144] px-2.5 py-0.5 rounded">
                  SOFTWARE ENGINEER
                </span>
                <span className="font-mono text-xs text-zinc-400">
                  Jul. 2022 – Jun. 2024
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold font-heading text-[#f1f5f9] group-hover:text-calm-indigo-300 transition-colors">
                  Saptang Labs
                </h3>
                <p className="text-xs text-zinc-400 font-mono mt-0.5">
                  Excalibur Bot-Detection Platform &bull; Chennai / Bengaluru
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
                Led 3 engineers in designing & validating an end-to-end bot mitigation platform on AWS (200+ EC2 instances), custom C++ NGINX reverse-proxy filtering, and automated CI/CD pipelines.
              </p>

              {/* Key Glimpse Metrics */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <div className="p-2.5 rounded-xl bg-[#141822] border border-[#242c3d]">
                  <div className="text-lg font-bold font-heading text-[#f1f5f9]">80M+ /hr</div>
                  <div className="text-[10px] font-mono text-zinc-400">Throughput (6 TB/day)</div>
                </div>
                <div className="p-2.5 rounded-xl bg-[#141822] border border-[#242c3d]">
                  <div className="text-lg font-bold font-heading text-[#f1f5f9]">60k RPS</div>
                  <div className="text-[10px] font-mono text-zinc-400">100ms p99 Latency</div>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[#242b3a] flex items-center justify-between text-xs font-mono text-zinc-400">
              <span className="text-calm-emerald-400 font-medium">88% Deploy Time Cut</span>
              <span>Prometheus &bull; Grafana</span>
            </div>
          </div>

          {/* Card 2: Saptang Labs Intern + IIT Bombay Glimpse */}
          <div className="p-6 rounded-2xl bg-[#181d28] border border-[#283144] hover:border-[#38435d] transition-all flex flex-col justify-between space-y-5 shadow-sm group">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-mono text-xs font-bold text-calm-amber-400 bg-calm-amber-950/40 border border-calm-amber-800/50 px-2.5 py-0.5 rounded">
                  INTER-IIT GOLD MEDALIST
                </span>
                <span className="font-mono text-xs text-zinc-400">
                  2018 – 2022
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold font-heading text-[#f1f5f9] group-hover:text-calm-amber-300 transition-colors">
                  IIT Bombay &amp; Security Research
                </h3>
                <p className="text-xs text-zinc-400 font-mono mt-0.5">
                  Bachelor of Technology (B.Tech) &bull; Saptang Labs Intern
                </p>
              </div>

              <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
                Awarded Gold Medal in the National NetSec Hackathon at Inter-IIT Tech Meet 9.0; built 8 CVE proof-of-concept testbeds in isolated Docker sandboxes and documented remediation insights.
              </p>

              {/* Key Glimpse Metrics */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <div className="p-2.5 rounded-xl bg-[#141822] border border-[#242c3d]">
                  <div className="text-lg font-bold font-heading text-[#f1f5f9]">Gold Medal</div>
                  <div className="text-[10px] font-mono text-zinc-400">NetSec Hackathon</div>
                </div>
                <div className="p-2.5 rounded-xl bg-[#141822] border border-[#242c3d]">
                  <div className="text-lg font-bold font-heading text-[#f1f5f9]">8 CVEs</div>
                  <div className="text-[10px] font-mono text-zinc-400">Docker Sandboxes</div>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[#242b3a] flex items-center justify-between text-xs font-mono text-zinc-400">
              <span className="text-calm-indigo-400 font-medium">IIT Bombay Alum</span>
              <span>C++ &bull; Python &bull; Linux</span>
            </div>
          </div>
        </div>

        {/* Prominent CTA to Full Experience Page */}
        <div className="pt-2">
          <Link
            href="/experience/"
            className="w-full p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#181d28] to-[#1e2638] border border-[#283144] hover:border-calm-indigo-500/60 transition-all flex items-center justify-between gap-4 group"
          >
            <div className="space-y-0.5">
              <div className="text-sm sm:text-base font-bold font-heading text-[#f1f5f9] flex items-center gap-2">
                <span>Explore Full Technical Track Record &amp; Architecture Deliverables</span>
                <span className="text-xs font-mono font-normal text-zinc-400 hidden sm:inline">&bull; 7+ Detailed Case Deliverables</span>
              </div>
              <p className="text-xs text-[#94a3b8] font-sans">
                Review complete AWS infrastructure specs, NGINX module integration, rule engine benchmarks, and academic honors.
              </p>
            </div>

            <div className="w-10 h-10 rounded-xl bg-calm-indigo-500/20 border border-calm-indigo-500/40 text-calm-indigo-400 flex items-center justify-center group-hover:bg-calm-indigo-500 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0">
              <ArrowRight className="w-5 h-5 stroke-[2.5]" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
