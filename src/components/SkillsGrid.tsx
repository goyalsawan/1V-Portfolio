"use client";

import React from "react";
import { STACK_LAYERS } from "@/data/skills";
import { BrutalistBadge } from "@/components/ui/BrutalistBadge";
import { TechIcon } from "@/components/ui/TechIcons";

export const SkillsGrid: React.FC = () => {
  // Stacking: Layer 05 (Top) -> Layer 04 -> Layer 03 -> Layer 02 -> Layer 01 (Foundation)
  const stackedLayers = [...STACK_LAYERS].reverse();

  return (
    <section
      id="skills"
      className="snap-slide min-h-screen flex flex-col justify-center py-16 px-4 sm:px-6 bg-[#12151c] text-[#e2e8f0] border-b border-[#242b3a] relative"
    >
      <div className="max-w-6xl mx-auto w-full space-y-5">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-[#242b3a]">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs font-bold text-calm-sky-400 bg-calm-sky-950/40 border border-calm-sky-800/50 px-2.5 py-0.5 rounded">
              CHAPTER 03
            </span>
            <BrutalistBadge color="sky" size="sm">
              APPLICATION STACK ARCHITECTURE
            </BrutalistBadge>
            <BrutalistBadge color="emerald" size="sm">
              PRODUCTION SPEED-TO-VALUE
            </BrutalistBadge>
          </div>

          <div className="font-mono text-xs text-zinc-400 bg-[#181d28] border border-[#283144] px-3 py-1 rounded-md">
            5 Stacked Architectural Tiers
          </div>
        </div>

        {/* Title & Value Statement */}
        <div className="space-y-1 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-[#f1f5f9] tracking-tight">
            Production AI Application Stack
          </h2>
          <p className="text-xs sm:text-sm text-[#94a3b8] font-sans leading-relaxed">
            Architected as integrated vertical tiers — from foundation models and retrieval up to serving pipelines and real-time observability.
          </p>
        </div>

        {/* Stacked Vertical Tiers (Each Layer covers an entire row, connected with Up Arrows) */}
        <div className="space-y-2">
          {stackedLayers.map((layer, index) => {
            const isLast = index === stackedLayers.length - 1;

            return (
              <React.Fragment key={layer.layerNumber}>
                {/* Full-Row Tier Card */}
                <div className="p-3 sm:p-4 rounded-xl bg-[#181d28] border border-[#283144] hover:border-[#38435d] transition-all flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 shadow-sm group">
                  {/* Left: Layer Meta & Info */}
                  <div className="space-y-1 min-w-[260px] md:max-w-xs shrink-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono font-bold text-calm-indigo-400 bg-[#141822] border border-[#283144] px-2 py-0.5 rounded">
                        LAYER {layer.layerNumber}
                      </span>
                      <BrutalistBadge color={layer.color} size="sm">
                        {layer.badge}
                      </BrutalistBadge>
                    </div>

                    <h3 className="text-sm sm:text-base font-bold font-heading text-[#f1f5f9] leading-snug group-hover:text-calm-indigo-300 transition-colors">
                      {layer.title}
                    </h3>

                    <p className="text-[11px] text-[#94a3b8] font-sans leading-tight line-clamp-1">
                      {layer.purpose}
                    </p>
                  </div>

                  {/* Right: Colored Tech Icons in Horizontal Row */}
                  <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                    {layer.technologies.map((tech, ti) => (
                      <div
                        key={ti}
                        className="group/icon flex flex-col items-center justify-center p-2 sm:p-2.5 rounded-lg bg-[#141822] border border-[#242c3d] hover:border-calm-indigo-500/50 hover:bg-[#1a2130] transition-all hover:scale-105 shadow-sm min-w-[58px] sm:min-w-[64px]"
                        title={tech.name}
                      >
                        <TechIcon name={tech.iconName} className="w-6 h-6 sm:w-7 sm:h-7" />
                        <span className="text-[9px] sm:text-[10px] font-mono text-zinc-400 mt-1 text-center truncate max-w-[60px] group-hover/icon:text-zinc-200 transition-colors font-medium">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};
