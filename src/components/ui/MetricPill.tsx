"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface MetricPillProps {
  label: string;
  value: string;
  delta?: string;
  description?: string;
  color?: string;
  className?: string;
}

export const MetricPill: React.FC<MetricPillProps> = ({
  label,
  value,
  delta,
  description,
  className,
}) => {
  return (
    <div
      className={cn(
        "rounded-xl border border-[#283144] bg-[#181d28] p-4 flex flex-col justify-between transition-colors shadow-sm",
        className
      )}
    >
      <div className="flex items-center justify-between gap-2 mb-2">
        <span className="text-[11px] font-mono font-medium uppercase text-zinc-400 tracking-wider">
          {label}
        </span>
        {delta && (
          <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-calm-emerald-950/40 text-calm-emerald-400 border border-calm-emerald-800/40">
            {delta}
          </span>
        )}
      </div>

      <div className="text-2xl md:text-3xl font-extrabold font-heading tracking-tight text-[#f1f5f9] mb-1">
        {value}
      </div>

      {description && (
        <p className="text-xs text-[#94a3b8] font-sans leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
