"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface BrutalistButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent" | "danger" | "dark" | "outline";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  asAnchor?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

const VARIANT_MAP = {
  primary: "bg-[#252e42] text-[#f1f5f9] hover:bg-[#323d57] border border-[#3b4764] shadow-sm",
  secondary: "bg-[#1c2333] text-indigo-300 hover:bg-[#252f44] border border-indigo-900/50 shadow-sm",
  accent: "bg-[#162721] text-emerald-300 hover:bg-[#1e362d] border border-emerald-900/50 shadow-sm",
  danger: "bg-[#2a171d] text-rose-300 hover:bg-[#3a2028] border border-rose-900/50 shadow-sm",
  dark: "bg-[#141822] text-zinc-300 hover:bg-[#1c2230] border border-[#283144] shadow-sm",
  outline: "bg-[#181d28] text-zinc-300 hover:bg-[#202737] hover:text-[#f1f5f9] border border-[#283144] shadow-sm",
};

const SIZE_MAP = {
  sm: "px-3 py-1.5 text-xs font-semibold rounded-md",
  md: "px-4 py-2 text-sm font-semibold rounded-lg",
  lg: "px-5 py-2.5 text-base font-semibold rounded-lg",
};

export const BrutalistButton: React.FC<BrutalistButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  icon,
  className,
  asAnchor,
  href,
  target,
  rel,
  ...props
}) => {
  const commonClasses = cn(
    "inline-flex items-center justify-center gap-2 transition-all duration-150 cursor-pointer select-none active:scale-[0.98] font-sans",
    VARIANT_MAP[variant],
    SIZE_MAP[size],
    className
  );

  if (asAnchor && href) {
    return (
      <a href={href} target={target} rel={rel} className={commonClasses}>
        {icon && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button className={commonClasses} {...props}>
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};
