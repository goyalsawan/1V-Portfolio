import React from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  ArrowRight, 
  Server, 
  Layout, 
  Cloud, 
  Cpu, 
  TrendingUp, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  Briefcase,
  ExternalLink,
  ShieldCheck,
  Zap,
  Clock
} from "lucide-react";
import { SERVICE_PILLARS, ENGAGEMENT_MODELS } from "@/data/services";
import { Header } from "@/components/Header";
import { Footer } from "@/components/ContactSection";
import { BrutalistBadge } from "@/components/ui/BrutalistBadge";
import { BrutalistButton } from "@/components/ui/BrutalistButton";

export const metadata = {
  title: "Services & Technical Advisory | Sawan Goyal",
  description:
    "Explore engineering services and consulting provided by Sawan Goyal: Backend Architecture, Modern Frontend, Cloud & DevOps, Multi-Agent AI Systems, and AI Business Impact Consulting.",
};

const ICONS_MAP: Record<string, React.ReactNode> = {
  "backend-architecture": <Server className="w-5 h-5 text-calm-indigo-400" />,
  "frontend-engineering": <Layout className="w-5 h-5 text-calm-sky-400" />,
  "cloud-devops": <Cloud className="w-5 h-5 text-emerald-400" />,
  "ai-agentic-systems": <Cpu className="w-5 h-5 text-purple-400" />,
  "ai-business-consulting": <TrendingUp className="w-5 h-5 text-amber-400" />
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#12151c] text-[#e2e8f0] selection:bg-[#3b4261] selection:text-[#f1f5f9]">
      {/* Top Navigation */}
      <Header />

      <main className="pt-24 pb-20 px-4 sm:px-6 max-w-5xl mx-auto space-y-14 font-sans">
        {/* Breadcrumb & Navigation */}
        <div className="flex items-center justify-between gap-4 border-b border-[#242b3a] pb-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono font-medium text-zinc-400 hover:text-[#f1f5f9] transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform text-calm-indigo-400" />
            <span>← Back to Presentation</span>
          </Link>

          <div className="font-mono text-xs text-zinc-400">
            5 Core Pillars &bull; 3 Engagement Models
          </div>
        </div>

        {/* Page Header */}
        <header className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-calm-indigo-400 bg-calm-indigo-950/40 border border-calm-indigo-800/50 px-2.5 py-0.5 rounded">
              SERVICES &amp; CAPABILITIES
            </span>
            <BrutalistBadge color="emerald" size="sm">
              PRODUCTION SPEED-TO-VALUE
            </BrutalistBadge>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-[#f1f5f9] tracking-tight">
            How I Can Help Your Team
          </h1>

          <p className="text-base sm:text-lg text-[#94a3b8] leading-relaxed">
            I partner with founders, engineering teams, and enterprise leadership to architect, build, and scale mission-critical software systems and generative AI infrastructure.
          </p>
        </header>

        {/* Section 1: Detailed 5 Service Pillars */}
        <section className="space-y-8">
          <div className="flex items-center justify-between border-b border-[#242b3a] pb-2">
            <div className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider">
              01 // Core Service Pillars &amp; Deliverables
            </div>
            <div className="text-xs font-mono text-calm-indigo-400">
              End-to-End Execution
            </div>
          </div>

          <div className="space-y-6">
            {SERVICE_PILLARS.map((service, idx) => (
              <div
                key={service.id}
                id={service.id}
                className="p-6 md:p-8 rounded-2xl bg-[#181d28] border border-[#283144] hover:border-[#38435d] transition-all space-y-6 shadow-sm"
              >
                {/* Pillar Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 pb-4 border-b border-[#242b3a]">
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-[#12151c] border border-[#283144] shrink-0 mt-0.5">
                      {ICONS_MAP[service.id]}
                    </div>
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-xs font-bold text-zinc-400">
                          PILLAR 0{idx + 1}
                        </span>
                        <BrutalistBadge color={service.color} size="sm">
                          {service.badge}
                        </BrutalistBadge>
                      </div>
                      <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#f1f5f9]">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  {service.relatedProjectSlug && (
                    <Link
                      href={`/projects/${service.relatedProjectSlug}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141822] border border-[#283144] hover:border-calm-sky-500/50 text-xs font-mono text-calm-sky-400 transition-colors"
                    >
                      <span>Case Study: {service.relatedProjectTitle}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </Link>
                  )}
                </div>

                {/* Tagline & Deep Dive */}
                <div className="space-y-3">
                  <p className="text-sm sm:text-base font-medium text-zinc-200 leading-relaxed">
                    {service.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Deliverables Checklist Grid */}
                <div className="space-y-3 pt-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Included Scope &amp; Production Deliverables</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                    {service.deliverables.map((item, dIdx) => (
                      <div
                        key={dIdx}
                        className="flex items-start gap-2.5 p-3 rounded-lg bg-[#141822] border border-[#242b3a]/80 text-xs sm:text-sm text-zinc-200"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Badges & CTA */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#242b3a]">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-[11px] font-mono text-zinc-500 mr-1">Stack:</span>
                    {service.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded bg-[#12151c] border border-[#283144] font-mono text-xs text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <BrutalistButton
                    size="sm"
                    variant="secondary"
                    asAnchor
                    href="/#contact"
                    icon={<Sparkles className="w-3.5 h-3.5 text-yellow-300" />}
                  >
                    Inquire for {service.shortTitle}
                  </BrutalistButton>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Engagement Models */}
        <section id="engagement-models" className="space-y-8 pt-4">
          <div className="flex items-center justify-between border-b border-[#242b3a] pb-2">
            <div className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider">
              02 // Ways We Can Collaborate
            </div>
            <div className="text-xs font-mono text-amber-400">
              Flexible Partnership Models
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {ENGAGEMENT_MODELS.map((model, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#181d28] border border-[#283144] flex flex-col justify-between space-y-5 shadow-sm hover:border-[#38435d] transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <BrutalistBadge color={model.color} size="sm">
                      {model.badge}
                    </BrutalistBadge>
                    <div className="flex items-center gap-1 text-[11px] font-mono text-zinc-400">
                      <Clock className="w-3 h-3 text-zinc-500" />
                      <span>{model.timeline}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold font-heading text-[#f1f5f9]">
                    {model.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed">
                    {model.description}
                  </p>

                  <div className="pt-2 border-t border-[#242b3a] space-y-1">
                    <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
                      Ideal For:
                    </div>
                    <div className="text-xs text-zinc-300 leading-snug">
                      {model.bestFor}
                    </div>
                  </div>
                </div>

                <BrutalistButton
                  size="sm"
                  variant="secondary"
                  className="w-full"
                  asAnchor
                  href="/#contact"
                >
                  Discuss Engagement
                </BrutalistButton>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Call to Action Banner */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-calm-indigo-950/50 via-[#181d28] to-[#12151c] border border-calm-indigo-800/40 space-y-4 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 max-w-xl">
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#f1f5f9]">
              Have a specific system in mind?
            </h3>
            <p className="text-xs sm:text-sm text-[#94a3b8]">
              Whether you need greenfield architecture, an AI audit, or rapid full-stack execution, let's connect and scope out the solution.
            </p>
          </div>

          <BrutalistButton
            size="md"
            variant="primary"
            asAnchor
            href="/#contact"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Start a Conversation
          </BrutalistButton>
        </div>
      </main>

      <Footer />
    </div>
  );
}
