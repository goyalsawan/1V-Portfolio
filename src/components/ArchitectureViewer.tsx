"use client";

import React from "react";
import { Layers, Database, Shield, Radio, Cpu } from "lucide-react";
import { ArchitectureNode } from "@/data/projects";

interface ArchitectureViewerProps {
  nodes: ArchitectureNode[];
}

const CATEGORY_ICONS = {
  Ingestion: <Radio className="w-3.5 h-3.5 text-calm-rose-400" />,
  "Gateway & Security": <Shield className="w-3.5 h-3.5 text-calm-sky-400" />,
  "Agentic Core": <Cpu className="w-3.5 h-3.5 text-calm-amber-400" />,
  "Storage & Vector": <Database className="w-3.5 h-3.5 text-calm-purple-400" />,
  "Streaming & Output": <Layers className="w-3.5 h-3.5 text-calm-emerald-400" />,
};

export const ArchitectureViewer: React.FC<ArchitectureViewerProps> = ({ nodes }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-2.5 font-sans">
      {nodes.map((node, index) => (
        <div
          key={index}
          className="flex flex-col justify-between p-3 rounded-lg bg-[#141822] border border-[#242c3d] hover:border-[#38435d] transition-colors"
        >
          <div>
            <div className="flex items-center justify-between gap-1 mb-1.5">
              <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-[#242c3d] text-zinc-300">
                0{index + 1}
              </span>
              <span className="p-1 rounded bg-[#181d28] border border-[#283144]">
                {CATEGORY_ICONS[node.category]}
              </span>
            </div>

            <div className="text-[10px] font-mono font-medium text-zinc-400 uppercase tracking-wide mb-0.5">
              {node.category}
            </div>

            <h4 className="text-xs font-bold text-[#f1f5f9] leading-snug mb-1.5">
              {node.title}
            </h4>

            <p className="text-[11px] text-[#94a3b8] leading-relaxed line-clamp-3 mb-2">
              {node.description}
            </p>
          </div>

          <div className="pt-1.5 border-t border-[#242c3d]">
            <div className="flex flex-wrap gap-1">
              {node.tech.slice(0, 2).map((t, ti) => (
                <span
                  key={ti}
                  className="text-[9px] font-mono font-medium px-1.5 py-0.5 rounded bg-[#181d28] border border-[#283144] text-zinc-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
