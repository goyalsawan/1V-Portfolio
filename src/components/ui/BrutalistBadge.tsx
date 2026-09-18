"use client";

import React from "react";
import { cn } from "@/lib/utils";

export type BadgeColor =
  | "indigo"
  | "emerald"
  | "amber"
  | "sky"
  | "rose"
  | "purple"
  | "neutral"
  | "yellow"
  | "lime"
  | "cyan"
  | "pink"
  | "orange"
  | "white"
  | "dark";

interface BrutalistBadgeProps {
  children: React.ReactNode;
  color?: BadgeColor;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const COLOR_MAP: Record<string, string> = {
  indigo: "bg-indigo-950/40 text-indigo-300 border-indigo-800/50",
  emerald: "bg-emerald-950/40 text-emerald-300 border-emerald-800/50",
  lime: "bg-emerald-950/40 text-emerald-300 border-emerald-800/50",
  amber: "bg-amber-950/40 text-amber-300 border-amber-800/50",
  yellow: "bg-amber-950/40 text-amber-300 border-amber-800/50",
  orange: "bg-amber-950/40 text-amber-300 border-amber-800/50",
  sky: "bg-sky-950/40 text-sky-300 border-sky-800/50",
  cyan: "bg-sky-950/40 text-sky-300 border-sky-800/50",
  rose: "bg-rose-950/40 text-rose-300 border-rose-800/50",
  pink: "bg-rose-950/40 text-rose-300 border-rose-800/50",
  purple: "bg-purple-950/40 text-purple-300 border-purple-800/50",
  neutral: "bg-[#181d28] text-zinc-300 border-[#283144]",
  white: "bg-[#181d28] text-[#f1f5f9] border-[#283144]",
  dark: "bg-[#141822] text-zinc-300 border-[#283144]",
};

const SIZE_MAP = {
  sm: "text-[11px] px-2 py-0.5 font-semibold font-mono tracking-normal",
  md: "text-xs px-2.5 py-1 font-semibold font-mono tracking-normal",
  lg: "text-xs md:text-sm px-3 py-1.5 font-bold font-mono tracking-normal",
};

export const BrutalistBadge: React.FC<BrutalistBadgeProps> = ({
  children,
  color = "indigo",
  className,
  size = "md",
}) => {
  const resolvedColor = COLOR_MAP[color] || COLOR_MAP.neutral;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md border select-none transition-colors",
        resolvedColor,
        SIZE_MAP[size],
        className
      )}
    >
      {children}
    </span>
  );
};
