import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Building2, Calendar, MapPin, CheckCircle2, GraduationCap, Award, Server, ShieldCheck, Cpu } from "lucide-react";
import { EXPERIENCES, EDUCATION } from "@/data/experience";
import { Header } from "@/components/Header";
import { Footer } from "@/components/ContactSection";
import { BrutalistBadge } from "@/components/ui/BrutalistBadge";

export const metadata = {
  title: "Professional Experience & Track Record | Sawan Goyal",
  description:
    "Explore the professional track record, high-scale bot detection architectures (80M+ events/hr), and IIT Bombay background of Sawan Goyal.",
};

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-[#12151c] text-[#e2e8f0] selection:bg-[#3b4261] selection:text-[#f1f5f9]">
      {/* Top Navigation */}
      <Header />

      <main className="pt-24 pb-20 px-4 sm:px-6 max-w-5xl mx-auto space-y-12 font-sans">
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
            Ksquare Systems &bull; Saptang Labs
          </div>
        </div>

        {/* Page Header */}
        <header className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-calm-rose-400 bg-calm-rose-950/40 border border-calm-rose-800/50 px-2.5 py-0.5 rounded">
              CAREER TRACK RECORD
            </span>
            <BrutalistBadge color="amber" size="sm">
              PRODUCTION AI &amp; DISTRIBUTED SYSTEMS
            </BrutalistBadge>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-[#f1f5f9] tracking-tight">
            Professional Experience
          </h1>

          <p className="text-base sm:text-lg text-[#94a3b8] leading-relaxed">
            4+ years of hands-on technical leadership across full-stack AI products, multi-agent systems, Voice AI, and high-scale distributed backends (80M+ events/hr).
          </p>
        </header>

        {/* Work Experience Section */}
        <section className="space-y-6">
          <div className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider">
            01 // Industry Experience & Technical Leadership
          </div>

          <div className="space-y-6">
            {EXPERIENCES.map((exp, idx) => (
              <div
                key={idx}
                className="p-6 md:p-8 rounded-2xl bg-[#181d28] border border-[#283144] space-y-6 shadow-sm"
              >
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#242b3a]">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold font-heading text-[#f1f5f9]">
                      {exp.role}
                    </h2>
                    <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-zinc-400 mt-1">
                      <span className="flex items-center gap-1 font-semibold text-zinc-200">
                        <Building2 className="w-3.5 h-3.5 text-calm-indigo-400" /> {exp.company}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-zinc-400" /> {exp.period}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-zinc-400" /> {exp.location}
                      </span>
                    </div>
                  </div>

                  <BrutalistBadge color="amber" size="md">
                    {exp.badge}
                  </BrutalistBadge>
                </div>

                {/* Summary */}
                <p className="text-sm sm:text-base text-[#94a3b8] leading-relaxed">
                  {exp.summary}
                </p>

                {/* Key Deliverables Grid */}
                <div className="space-y-3">
                  <div className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider">
                    Key Technical Deliverables & Verified Metrics:
                  </div>

                  <div className="space-y-2.5">
                    {exp.highlights.map((item, hi) => (
                      <div
                        key={hi}
                        className="p-3.5 rounded-xl bg-[#141822] border border-[#242c3d] text-xs sm:text-sm text-[#cbd5e1] flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-4 h-4 text-calm-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Toolchain */}
                <div className="pt-3 border-t border-[#242b3a] flex flex-wrap items-center gap-1.5 font-mono text-xs">
                  <span className="font-semibold text-zinc-500 uppercase mr-1 text-[11px]">Toolchain:</span>
                  {exp.technologies.map((t, ti) => (
                    <span
                      key={ti}
                      className="px-2.5 py-0.5 rounded bg-[#141822] border border-[#283144] text-[#cbd5e1] font-medium text-[11px]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="space-y-4 pt-4 border-t border-[#242b3a]">
          <div className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider">
            02 // Academic Background & Honors
          </div>

          <div className="p-6 md:p-8 rounded-2xl bg-[#181d28] border border-[#283144] space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#242b3a]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-calm-indigo-950/40 border border-calm-indigo-800/50 text-calm-indigo-400 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-6 h-6 stroke-[2]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading text-[#f1f5f9]">
                    {EDUCATION.institution}
                  </h3>
                  <p className="text-xs font-mono text-zinc-400">
                    {EDUCATION.degree} &bull; {EDUCATION.location} &bull; {EDUCATION.period}
                  </p>
                </div>
              </div>

              <span className="font-mono text-xs font-bold bg-calm-amber-950/40 text-calm-amber-400 border border-calm-amber-800/50 px-3 py-1 rounded-md self-start sm:self-center">
                {EDUCATION.badge}
              </span>
            </div>

            <div className="space-y-2 pt-1">
              <div className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider">
                Institute Highlights & Honors:
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-[#cbd5e1]">
                {EDUCATION.honors.map((honor, hi) => (
                  <li key={hi} className="flex items-start gap-2">
                    <span className="text-calm-amber-400 font-bold">▸</span>
                    <span className="leading-relaxed text-[#94a3b8]">{honor}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
