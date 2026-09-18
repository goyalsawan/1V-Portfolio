import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ShieldAlert, CheckCircle2, Cpu, Database, Layers, Radio, Shield, Sparkles, Mail } from "lucide-react";
import { PROJECTS, ProjectData } from "@/data/projects";
import { BrutalistBadge } from "@/components/ui/BrutalistBadge";
import { BrutalistButton } from "@/components/ui/BrutalistButton";
import { MetricPill } from "@/components/ui/MetricPill";
import { ArchitectureViewer } from "@/components/ArchitectureViewer";
import { Header } from "@/components/Header";
import { Footer } from "@/components/ContactSection";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} | Production AI Case Study`,
    description: project.tagline,
  };
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const projectIndex = PROJECTS.findIndex((p) => p.slug === slug);
  if (projectIndex === -1) notFound();

  const project: ProjectData = PROJECTS[projectIndex];
  const prevProject = projectIndex > 0 ? PROJECTS[projectIndex - 1] : null;
  const nextProject = projectIndex < PROJECTS.length - 1 ? PROJECTS[projectIndex + 1] : null;

  return (
    <div className="min-h-screen bg-[#12151c] text-[#e2e8f0] selection:bg-[#3b4261] selection:text-[#f1f5f9]">
      {/* Top Navigation */}
      <Header />

      <main className="pt-24 pb-20 px-4 sm:px-6 max-w-5xl mx-auto space-y-16 font-sans">
        {/* Breadcrumb / Back Link */}
        <div className="flex items-center justify-between gap-4 border-b border-[#242b3a] pb-4">
          <Link
            href="/projects/"
            className="inline-flex items-center gap-2 text-xs font-mono font-medium text-zinc-400 hover:text-[#f1f5f9] transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform text-calm-indigo-400" />
            <span>← Back to Projects</span>
          </Link>

          <span className="font-mono text-xs text-zinc-400">
            Case Study 0{project.id} of 0{PROJECTS.length}
          </span>
        </div>

        {/* Project Hero Header */}
        <header className="space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <BrutalistBadge color={project.accentColor} size="lg">
              {project.badge}
            </BrutalistBadge>
            <BrutalistBadge color="dark" size="lg">
              {project.status}
            </BrutalistBadge>
            <span className="font-mono text-xs font-semibold text-zinc-400 bg-[#181d28] border border-[#283144] px-3 py-1 rounded-md">
              {project.clientContext}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-[#f1f5f9] tracking-tight leading-[1.12]">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-[#94a3b8] font-sans leading-relaxed">
            {project.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400 pt-2">
            <div>Role: <strong className="text-[#f1f5f9]">{project.role}</strong></div>
            <div>•</div>
            <div>Agency: <strong className="text-[#f1f5f9]">Ksquare Systems</strong></div>
            <div>•</div>
            <div>Target Audience: <strong className="text-[#f1f5f9]">Enterprise B2B Operations</strong></div>
          </div>
        </header>

        {/* Key Metrics Grid */}
        <section className="space-y-3">
          <div className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider">
            Verified Production Metrics & Business ROI:
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="p-4 bg-[#181d28] rounded-xl border border-[#283144] shadow-sm">
                <div className="flex items-center justify-between gap-1 mb-1.5">
                  <span className="text-[10px] font-mono text-zinc-400 uppercase truncate">{metric.label}</span>
                  {metric.delta && (
                    <span className="text-[9px] font-mono text-calm-emerald-400 bg-calm-emerald-950/40 px-1.5 py-0.5 rounded border border-calm-emerald-800/40">
                      {metric.delta}
                    </span>
                  )}
                </div>
                <div className="text-2xl sm:text-3xl font-bold font-heading text-[#f1f5f9]">{metric.value}</div>
                <p className="text-xs text-[#94a3b8] leading-relaxed mt-1">{metric.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Problem vs Solution Deep Dive */}
        <section className="space-y-4 pt-4 border-t border-[#242b3a]">
          <div className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider">
            01 // Business Problem & Architectural Solution
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#181d28] border border-calm-rose-900/30 space-y-3">
              <div className="text-xs font-mono font-semibold text-calm-rose-400 uppercase flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-calm-rose-400 shrink-0" /> The Business Problem:
              </div>
              <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#181d28] border border-calm-emerald-900/30 space-y-3">
              <div className="text-xs font-mono font-semibold text-calm-emerald-400 uppercase flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-calm-emerald-400 shrink-0" /> The Architectural Solution:
              </div>
              <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-[#181d28] border border-[#283144] text-xs sm:text-sm text-[#cbd5e1] leading-relaxed">
            <strong className="text-[#f1f5f9] font-mono uppercase text-xs block mb-1">Executive Summary:</strong>
            {project.overview}
          </div>
        </section>

        {/* 5-Stage System Architecture Flowchart */}
        <section className="space-y-4 pt-4 border-t border-[#242b3a]">
          <div className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider">
            02 // End-to-End System Architecture & Data Flow
          </div>

          <div className="bg-[#181d28] p-6 rounded-2xl border border-[#283144] space-y-4">
            <ArchitectureViewer nodes={project.architectureNodes} />
          </div>
        </section>

        {/* Technical Implementations & Architectural Pillars */}
        <section className="space-y-4 pt-4 border-t border-[#242b3a]">
          <div className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider">
            03 // Core Technical Implementations & Engineering Pillars
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {project.keyPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#181d28] border border-[#283144] flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="text-[10px] font-mono font-semibold text-calm-indigo-400 uppercase mb-1">
                    Pillar 0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-[#f1f5f9] leading-snug mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#94a3b8] mb-3 leading-relaxed">
                    {pillar.description}
                  </p>
                  <ul className="space-y-2 text-xs text-[#cbd5e1]">
                    {pillar.bulletPoints.map((bp, bpi) => (
                      <li key={bpi} className="flex items-start gap-1.5">
                        <span className="text-calm-indigo-400 font-bold">▸</span>
                        <span className="leading-relaxed">{bp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Production Edge Cases Solved */}
        <section className="space-y-4 pt-4 border-t border-[#242b3a]">
          <div className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider">
            04 // Production Edge Cases & Exact Engineering Fixes
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.engineeringChallenges.map((ch, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#181d28] border border-[#283144] space-y-2"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-bold text-[#f1f5f9]">
                    {ch.challenge}
                  </span>
                  <span className="text-[10px] font-mono font-semibold text-calm-emerald-400 bg-calm-emerald-950/40 px-2 py-0.5 rounded border border-calm-emerald-800/40 shrink-0">
                    {ch.impact}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed">
                  <strong className="text-[#f1f5f9] font-medium">Engineering Fix: </strong>
                  {ch.solution}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Complete Tech Stack Breakdown */}
        <section className="space-y-4 pt-4 border-t border-[#242b3a]">
          <div className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider">
            05 // Production Tech Stack & Ecosystem
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {project.techStack.map((stack, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#181d28] border border-[#283144] space-y-2 font-mono">
                <div className="text-xs font-bold text-calm-sky-400 uppercase">{stack.category}</div>
                <div className="flex flex-wrap gap-1.5">
                  {stack.items.map((item, ii) => (
                    <span key={ii} className="text-[11px] px-2 py-0.5 rounded bg-[#141822] border border-[#283144] text-[#cbd5e1]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Prev / Next Project Navigator */}
        <nav className="pt-10 border-t border-[#242b3a] grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="p-5 rounded-2xl bg-[#181d28] border border-[#283144] hover:border-[#38435d] transition-colors text-left space-y-1 group"
            >
              <div className="text-xs font-mono text-zinc-400 group-hover:text-calm-indigo-400 transition-colors">
                ← Previous Case Study
              </div>
              <div className="font-bold text-[#f1f5f9] text-sm sm:text-base">{prevProject.title}</div>
            </Link>
          ) : <div />}

          {nextProject ? (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="p-5 rounded-2xl bg-[#181d28] border border-[#283144] hover:border-[#38435d] transition-colors text-right space-y-1 group"
            >
              <div className="text-xs font-mono text-zinc-400 group-hover:text-calm-indigo-400 transition-colors">
                Next Case Study →
              </div>
              <div className="font-bold text-[#f1f5f9] text-sm sm:text-base">{nextProject.title}</div>
            </Link>
          ) : <div />}
        </nav>
      </main>

      <Footer />
    </div>
  );
}
