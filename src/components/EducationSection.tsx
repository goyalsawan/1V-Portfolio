"use client";

import React from "react";
import { EDUCATION } from "@/data/experience";
import { BrutalistBadge } from "@/components/ui/BrutalistBadge";
import { GraduationCap, Award, CheckCircle2, ShieldCheck } from "lucide-react";

export const EducationSection: React.FC = () => {
  return (
    <section
      id="education"
      className="snap-slide min-h-screen flex flex-col justify-center py-12 sm:py-16 px-4 sm:px-6 bg-[#12151c] text-[#e2e8f0] border-b border-[#242b3a] relative"
    >
      <div className="max-w-4xl mx-auto w-full space-y-5">
        {/* Header Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-[#242b3a]">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs font-bold text-calm-indigo-400 bg-calm-indigo-950/40 border border-calm-indigo-800/50 px-2.5 py-0.5 rounded">
              07 // ACADEMIC FOUNDATION
            </span>
            <BrutalistBadge color="indigo" size="sm">
              ACADEMIC FOUNDATION
            </BrutalistBadge>
            <BrutalistBadge color="amber" size="sm">
              IIT BOMBAY ALUM
            </BrutalistBadge>
          </div>

          <div className="font-mono text-xs text-zinc-400 bg-[#181d28] border border-[#283144] px-2.5 py-0.5 rounded-md">
            2018 — 2022
          </div>
        </div>

        {/* Title & Value Statement */}
        <div className="space-y-1 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-[#f1f5f9] tracking-tight">
            Education &amp; Academic Foundation
          </h2>
          <p className="text-xs sm:text-sm text-[#94a3b8] font-sans leading-relaxed">
            Rigorous engineering foundation, systems security, and analytical problem-solving from India&apos;s premier technical institute.
          </p>
        </div>

        {/* Single Main Institution Card (IIT Bombay) */}
        <div className="p-6 md:p-8 rounded-2xl bg-[#181d28] border border-[#283144] hover:border-[#38435d] transition-all flex flex-col justify-between space-y-6 shadow-sm font-sans">
          <div className="space-y-6">
            {/* Institution Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#242b3a]">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-calm-indigo-950/50 border border-calm-indigo-800/60 text-calm-indigo-400 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-7 h-7 stroke-[2]" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#f1f5f9]">
                    {EDUCATION.institution}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-zinc-400 mt-0.5">
                    {EDUCATION.degree} &bull; {EDUCATION.location}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 self-start sm:self-center">
                <span className="font-mono text-xs font-bold bg-calm-amber-950/40 text-calm-amber-400 border border-calm-amber-800/50 px-3 py-1 rounded-md">
                  {EDUCATION.badge}
                </span>
                <BrutalistBadge color="neutral" size="sm">
                  {EDUCATION.period}
                </BrutalistBadge>
              </div>
            </div>

            {/* Honors List */}
            <div className="space-y-3">
              <div className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider">
                Academic Milestones &amp; Honors:
              </div>
              <div className="space-y-3 text-xs sm:text-sm text-[#cbd5e1]">
                {EDUCATION.honors.map((honor, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#141822] border border-[#242c3d] flex items-start gap-3.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-calm-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed text-[#cbd5e1]">{honor}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Key Badges */}
          <div className="pt-4 border-t border-[#242b3a] flex flex-wrap items-center gap-2.5 font-mono text-xs text-zinc-400">
            <span className="px-3 py-1.5 rounded-lg bg-[#141822] border border-[#283144] flex items-center gap-1.5 text-calm-amber-400 font-semibold">
              <Award className="w-3.5 h-3.5 text-calm-amber-400" /> NetSec Hackathon Gold
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-[#141822] border border-[#283144] flex items-center gap-1.5 text-calm-indigo-400">
              <ShieldCheck className="w-3.5 h-3.5" /> Systems Security
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-[#141822] border border-[#283144]">
              IIT Bombay B.Tech Alum
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
