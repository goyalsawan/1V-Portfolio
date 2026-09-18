import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { Header } from "@/components/Header";
import { Footer } from "@/components/ContactSection";
import { BrutalistBadge } from "@/components/ui/BrutalistBadge";

export const metadata = {
  title: "Flagship Production AI Projects | Enterprise Case Studies",
  description:
    "Explore enterprise-grade AI platforms, multi-agent systems, multimodal document parsing engines, and adaptive LMS platforms engineered by a Staff / Senior AI Engineer.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#12151c] text-[#e2e8f0] selection:bg-[#3b4261] selection:text-[#f1f5f9]">
      {/* Sleek Top Navigation */}
      <Header />

      <main className="pt-24 pb-20 px-4 sm:px-6 max-w-6xl mx-auto space-y-12 font-sans">
        {/* Breadcrumb & Navigation */}
        <div className="flex items-center justify-between gap-4 border-b border-[#242b3a] pb-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono font-medium text-zinc-400 hover:text-[#f1f5f9] transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform text-calm-indigo-400" />
            <span>← Back to Home</span>
          </Link>

          <div className="font-mono text-xs text-zinc-400">
            <span className="text-calm-indigo-400 font-bold">{PROJECTS.length}</span> Flagship Production Systems
          </div>
        </div>

        {/* Page Header */}
        <header className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-calm-indigo-400 bg-calm-indigo-950/40 border border-calm-indigo-800/50 px-2.5 py-0.5 rounded">
              ENTERPRISE AI PORTFOLIO
            </span>
            <BrutalistBadge color="emerald" size="sm">
              PRODUCTION VERIFIED
            </BrutalistBadge>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-[#f1f5f9] tracking-tight">
            Flagship Production Systems
          </h1>

          <p className="text-base sm:text-lg text-[#94a3b8] leading-relaxed">
            High-throughput multi-agent architectures, multimodal intelligence pipelines, and adaptive AI systems architected and deployed for B2B enterprise clients at <strong className="text-zinc-200 font-semibold">Ksquare Systems</strong>.
          </p>
        </header>

        {/* 2 Cards Per Row Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, index) => (
            <div
              key={project.id}
              className="p-6 md:p-8 rounded-2xl bg-[#181d28] border border-[#283144] hover:border-[#38435d] transition-all flex flex-col justify-between space-y-6 group shadow-sm"
            >
              <div className="space-y-5">
                {/* Card Meta & Badge */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-zinc-400 bg-[#141822] border border-[#283144] px-2 py-0.5 rounded">
                      0{index + 1}
                    </span>
                    <BrutalistBadge color={project.accentColor} size="sm">
                      {project.badge}
                    </BrutalistBadge>
                  </div>

                  <span className="font-mono text-[11px] text-zinc-400">
                    {project.status}
                  </span>
                </div>

                {/* Project Title */}
                <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#f1f5f9] group-hover:text-calm-indigo-300 transition-colors leading-snug">
                  <Link href={`/projects/${project.slug}/`}>
                    {project.title}
                  </Link>
                </h2>

                {/* Tech Stack */}
                <div className="space-y-1.5">
                  <div className="text-[11px] font-mono font-semibold uppercase text-zinc-400 tracking-wider">
                    Tech Stack:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, ti) => (
                      <span
                        key={ti}
                        className="px-2.5 py-0.5 rounded bg-[#141822] border border-[#283144] text-[#cbd5e1] font-mono text-[11px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 3 Business Impact Points */}
                <div className="space-y-2.5 pt-2 border-t border-[#242b3a]">
                  <div className="text-[11px] font-mono font-semibold uppercase text-calm-emerald-400 tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-calm-emerald-400" />
                    Business Impact & ROI:
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#cbd5e1]">
                    {project.impactPoints.map((point, pi) => (
                      <li key={pi} className="flex items-start gap-2">
                        <span className="text-calm-indigo-400 font-bold mt-0.5">▸</span>
                        <span className="leading-relaxed text-[#94a3b8]">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-[#242b3a]">
                <Link
                  href={`/projects/${project.slug}/`}
                  className="w-full inline-flex items-center justify-center gap-2 p-2.5 rounded-xl bg-[#141822] hover:bg-[#1e2638] text-xs font-semibold text-[#f1f5f9] border border-[#283144] hover:border-calm-indigo-500/50 transition-all font-sans group/btn"
                >
                  <span>Explore Architecture & Deep-Dive Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform text-calm-indigo-400" />
                </Link>
              </div>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
