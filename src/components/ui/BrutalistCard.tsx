"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface BrutalistCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  headerBarTitle?: string;
  headerBarColor?: string;
  headerBarControls?: boolean;
  shadow?: "none" | "sm" | "normal" | "lg" | "xl";
  className?: string;
}

export const BrutalistCard: React.FC<BrutalistCardProps> = ({
  children,
  headerBarTitle,
  headerBarColor,
  headerBarControls = false,
  shadow = "normal",
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "bg-white rounded-xl border border-zinc-200/90 shadow-card hover:shadow-cardHover transition-shadow overflow-hidden",
        className
      )}
      {...props}
    >
      {headerBarTitle && (
        <div className="flex items-center justify-between px-5 py-3 border-b border-zinc-100 bg-zinc-50/60 font-mono text-xs font-semibold text-zinc-600">
          <div className="flex items-center gap-2 truncate">
            <span className="inline-block w-2 h-2 rounded-full bg-zinc-400" />
            <span className="truncate uppercase tracking-wider">{headerBarTitle}</span>
          </div>

          {headerBarControls && (
            <div className="flex items-center gap-1.5 shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-calm-rose-400 inline-block" />
            </div>
          )}
        </div>
      )}
      <div className="p-5 md:p-6">{children}</div>
    </div>
  );
};
