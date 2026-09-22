"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, Cpu, Eye, Workflow, Sparkles } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { BrutalistBadge } from "@/components/ui/BrutalistBadge";
import { captureEvent } from "@/lib/analytics";

export const ProjectsTeaser: React.FC = () => {
  return (
    <section
      id="projects"
      className="snap-slide min-h-screen flex flex-col justify-center py-20 px-4 sm:px-6 bg-[#12151c] text-[#e2e8f0] border-b border-[#242b3a] relative"
    >
      <div className="max-w-6xl mx-auto w-full space-y-8">
        {/* Header Badges */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#242b3a]">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs font-bold text-calm-indigo-400 bg-calm-indigo-950/40 border border-calm-indigo-800/50 px-2.5 py-0.5 rounded">
              03 // PROJECTS
            </span>
            <BrutalistBadge color="indigo" size="md">
              ENTERPRISE AI PORTFOLIO
            </BrutalistBadge>
            <BrutalistBadge color="emerald" size="md">
              PRODUCTION VERIFIED
            </BrutalistBadge>
          </div>

          <div className="font-mono text-xs text-zinc-400 bg-[#181d28] border border-[#283144] px-3 py-1 rounded-md">
            {PROJECTS.length} Enterprise Flagship Systems
          </div>
        </div>

        {/* Big Projects Banner & Description */}
        <div className="space-y-4 max-w-4xl">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-heading text-[#f1f5f9] tracking-tight leading-none">
            Projects<span className="text-calm-indigo-400">.</span>
          </h2>
          <p className="text-lg sm:text-xl text-[#94a3b8] font-sans leading-relaxed font-normal">
            Explore battle-tested enterprise architectures, autonomous multi-agent workflows, and multimodal intelligence engines to see how my engineering capabilities align with your product roadmap and technical challenges.
          </p>
        </div>

        {/* 4 Quick Preview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 font-sans">
          {PROJECTS.map((project, idx) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              onClick={() =>
                captureEvent("project_preview_selected", {
                  project_slug: project.slug,
                  source: "projects_teaser",
                })
              }
              className="p-4 rounded-2xl bg-[#181d28] border border-[#283144] hover:border-[#3d4d6e] hover:bg-[#1c2230] transition-all flex flex-col justify-between space-y-3 group shadow-sm"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-[10px] font-bold text-calm-indigo-400 bg-[#141822] border border-[#283144] px-1.5 py-0.5 rounded">
                    0{idx + 1}
                  </span>
                  <span className="text-[9px] font-mono text-zinc-400 uppercase truncate">
                    {project.badge.split(" • ")[0].split(" / ")[0]}
                  </span>
                </div>
                <h3 className="text-sm font-bold font-heading text-[#f1f5f9] group-hover:text-calm-indigo-300 transition-colors leading-snug line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-[11px] text-[#94a3b8] line-clamp-2 leading-relaxed">
                  {project.tagline}
                </p>
              </div>

              <div className="pt-2.5 border-t border-[#242b3a] flex items-center justify-between text-xs font-mono text-zinc-400">
                <span className="text-calm-emerald-400 font-semibold">{project.metrics[0].value}</span>
                <span className="text-[10px] text-zinc-500 truncate max-w-[100px]">{project.metrics[0].label}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Big Action Card with Large Right Arrow */}
        <div className="pt-2">
          <Link
            href="/projects/"
            className="w-full p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#181d28] to-[#1e2638] border border-[#283144] hover:border-calm-indigo-500/60 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] transition-all flex flex-col sm:flex-row items-center justify-between gap-6 group"
          >
            <div className="space-y-2 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-calm-indigo-400 animate-pulse" />
                <span className="font-mono text-xs font-semibold text-calm-indigo-300 uppercase tracking-wider">
                  Complete Technical Case Studies & Architectures
                </span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold font-heading text-[#f1f5f9]">
                Explore All {PROJECTS.length} Production Systems
              </div>
              <p className="text-xs sm:text-sm text-[#94a3b8] max-w-2xl font-sans">
                Review verified business ROI, 5-stage system architecture diagrams, and production edge-case fixes in 2-column card view.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <span className="font-sans font-bold text-sm sm:text-base text-zinc-200 group-hover:text-white transition-colors hidden md:inline">
                Open Projects Hub
              </span>
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-calm-indigo-500/20 border border-calm-indigo-500/40 text-calm-indigo-400 flex items-center justify-center group-hover:bg-calm-indigo-500 group-hover:text-white group-hover:scale-105 group-hover:translate-x-1 transition-all shadow-md">
                <ArrowRight className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2.5]" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
