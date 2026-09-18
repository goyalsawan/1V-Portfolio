"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, ShieldAlert, ArrowRight } from "lucide-react";
import { ProjectData } from "@/data/projects";
import { BrutalistBadge } from "@/components/ui/BrutalistBadge";
import { BrutalistButton } from "@/components/ui/BrutalistButton";

interface ProjectCardProps {
  project: ProjectData;
  chapterIndex: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, chapterIndex }) => {
  return (
    <section
      id={project.slug}
      className="snap-slide min-h-screen flex flex-col justify-center py-20 px-4 sm:px-6 bg-[#12151c] text-[#e2e8f0] border-b border-[#242b3a] relative"
    >
      <div className="max-w-6xl mx-auto w-full space-y-6">
        {/* Slide Header & Meta */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#242b3a]">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs font-bold text-calm-indigo-400 bg-calm-indigo-950/40 border border-calm-indigo-800/50 px-2.5 py-0.5 rounded">
              CASE STUDY 0{chapterIndex}
            </span>
            <BrutalistBadge color={project.accentColor} size="md">
              {project.badge}
            </BrutalistBadge>
            <BrutalistBadge color="dark" size="md">
              {project.status}
            </BrutalistBadge>
          </div>

          <div className="font-mono text-xs text-zinc-400 bg-[#181d28] border border-[#283144] px-3 py-1 rounded-md">
            {project.clientContext}
          </div>
        </div>

        {/* Title & Tagline */}
        <div className="space-y-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-[#f1f5f9] tracking-tight leading-tight">
            {project.title}
          </h2>
          <p className="text-base sm:text-lg text-[#94a3b8] font-sans leading-relaxed max-w-4xl font-normal">
            {project.tagline}
          </p>
        </div>

        {/* Executive Problem vs Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans">
          <div className="p-5 rounded-2xl bg-[#181d28] border border-calm-rose-900/30 space-y-2">
            <div className="text-xs font-mono font-semibold text-calm-rose-400 uppercase flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-calm-rose-400 shrink-0" /> The Business Problem:
            </div>
            <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed font-normal">
              {project.problem}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#181d28] border border-calm-emerald-900/30 space-y-2">
            <div className="text-xs font-mono font-semibold text-calm-emerald-400 uppercase flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-calm-emerald-400 shrink-0" /> The Architectural Solution:
            </div>
            <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed font-normal">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Key Verified Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
          {project.metrics.map((metric, idx) => (
            <div key={idx} className="p-3.5 bg-[#181d28] rounded-xl border border-[#283144] shadow-sm">
              <div className="flex items-center justify-between gap-1 mb-1">
                <span className="text-[10px] font-mono text-zinc-400 uppercase truncate">{metric.label}</span>
                {metric.delta && (
                  <span className="text-[9px] font-mono text-calm-emerald-400 bg-calm-emerald-950/40 px-1.5 py-0.5 rounded border border-calm-emerald-800/40">
                    {metric.delta}
                  </span>
                )}
              </div>
              <div className="text-2xl font-bold font-heading text-[#f1f5f9]">{metric.value}</div>
              <p className="text-[11px] text-[#94a3b8] leading-tight mt-0.5 truncate">{metric.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom Bar: Action Link to Full Case Study & Tech Stack */}
        <div className="pt-4 border-t border-[#242b3a] flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs text-zinc-400">
            <span className="font-semibold uppercase text-zinc-500 text-[11px]">Toolchain:</span>
            {project.tags.slice(0, 5).map((tag, ti) => (
              <span key={ti} className="px-2.5 py-0.5 rounded bg-[#181d28] border border-[#283144] text-[#cbd5e1] text-[11px]">
                {tag}
              </span>
            ))}
          </div>

          <BrutalistButton
            size="md"
            variant="secondary"
            asAnchor
            href={`/projects/${project.slug}/`}
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Explore Full Architecture & Case Study
          </BrutalistButton>
        </div>
      </div>
    </section>
  );
};
