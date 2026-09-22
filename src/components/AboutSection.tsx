"use client";

import React from "react";
import Image from "next/image";
import { GraduationCap, MapPin, Award, ArrowRight, Mail, Briefcase } from "lucide-react";
import { BrutalistBadge } from "@/components/ui/BrutalistBadge";
import { BrutalistButton } from "@/components/ui/BrutalistButton";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="snap-slide h-screen min-h-screen flex flex-col justify-center px-4 sm:px-6 bg-[#12151c] text-[#e2e8f0] border-b border-[#242b3a] relative py-8"
    >
      <div className="max-w-5xl mx-auto w-full space-y-5">
        {/* Header Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-[#242b3a]">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs font-bold text-calm-indigo-400 bg-calm-indigo-950/40 border border-calm-indigo-800/50 px-2.5 py-0.5 rounded">
              02 // PROFILE
            </span>
            <BrutalistBadge color="indigo" size="sm">
              WHO AM I?
            </BrutalistBadge>
            <BrutalistBadge color="amber" size="sm">
              IIT BOMBAY ALUM
            </BrutalistBadge>
          </div>

          <div className="font-mono text-xs text-zinc-400 bg-[#181d28] border border-[#283144] px-2.5 py-0.5 rounded-md flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Bengaluru, KA, India</span>
          </div>
        </div>

        {/* Section Heading */}
        <div className="space-y-1 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-[#f1f5f9] tracking-tight">
            Who am I<span className="text-calm-indigo-400">?</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#94a3b8] font-sans">
            Product-minded Software Engineer &amp; Full-Stack AI Systems Architect with 4+ years of experience leading teams of up to 5 engineers.
          </p>
        </div>

        {/* 2-Column Compact Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center font-sans">
          {/* Left Column: Compact Framed Portrait */}
          <div className="md:col-span-4 flex flex-col items-center">
            <div className="relative w-full max-w-[240px] group">
              {/* Outer decorative glow */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-calm-indigo-500/30 via-[#283144] to-calm-emerald-500/20 rounded-2xl blur-md opacity-75 group-hover:opacity-100 transition-opacity" />

              {/* Photo Container */}
              <div className="relative rounded-2xl overflow-hidden border border-[#283144] bg-[#181d28] shadow-xl">
                <div className="relative aspect-[4/4] w-full">
                  <Image
                    src="/images/sawan-goyal.png"
                    alt="Sawan Goyal"
                    fill
                    sizes="(max-width: 768px) 100vw, 240px"
                    className="object-cover object-top filter brightness-[1.02] contrast-[1.02] group-hover:scale-105 transition-transform duration-300"
                    priority
                  />
                </div>

                {/* Compact Info Strip */}
                <div className="p-3 bg-[#141822]/95 backdrop-blur-md border-t border-[#242c3d] space-y-1.5">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-heading font-bold text-sm text-[#f1f5f9]">
                        Sawan Goyal
                      </h3>
                      <p className="font-mono text-[10px] text-calm-indigo-400">
                        IIT Bombay &bull; Senior SWE @ Ksquare
                      </p>
                    </div>
                    <span className="px-1.5 py-0.5 rounded bg-calm-emerald-950/50 border border-calm-emerald-800/60 text-calm-emerald-400 font-mono text-[9px] font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      AVAILABLE
                    </span>
                  </div>

                  {/* Social Buttons */}
                  <div className="flex items-center gap-1.5 pt-1 border-t border-[#242b3a]">
                    <a
                      href="https://linkedin.com/in/sawan-goyal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-1 px-2 rounded-lg bg-[#181d28] hover:bg-[#202737] border border-[#283144] text-[11px] font-mono text-zinc-300 hover:text-[#f1f5f9] flex items-center justify-center gap-1 transition-colors"
                    >
                      <LinkedinIcon className="w-3 h-3 text-calm-indigo-400" />
                      <span>LinkedIn</span>
                    </a>
                    <a
                      href="https://github.com/Sawan895"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-1 px-2 rounded-lg bg-[#181d28] hover:bg-[#202737] border border-[#283144] text-[11px] font-mono text-zinc-300 hover:text-[#f1f5f9] flex items-center justify-center gap-1 transition-colors"
                    >
                      <GithubIcon className="w-3 h-3 text-zinc-400" />
                      <span>GitHub</span>
                    </a>
                    <a
                      href="#contact"
                      className="py-1 px-2 rounded-lg bg-calm-indigo-950/40 hover:bg-calm-indigo-900/50 border border-calm-indigo-800/50 text-[11px] font-mono text-calm-indigo-300 flex items-center justify-center transition-colors"
                      title="Direct Contact"
                    >
                      <Mail className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Short Narrative & 4 Quick Facts */}
          <div className="md:col-span-8 space-y-4">
            {/* Concise Bio Narrative */}
            <div className="space-y-2 text-xs sm:text-sm text-[#cbd5e1] leading-relaxed">
              <p>
                I&apos;m <strong className="text-[#f1f5f9] font-semibold">Sawan Goyal</strong>, a product-minded Software Engineer and Full-Stack AI Systems Architect based in <strong className="text-[#f1f5f9] font-medium">Bengaluru, Karnataka</strong>. I graduated with a <strong className="text-calm-indigo-300 font-medium">B.Tech in Materials Science from IIT Bombay (2018–2022)</strong> and was awarded a <strong className="text-calm-amber-400 font-medium">Gold Medal</strong> at the Inter-IIT Tech Meet NetSec Hackathon.
              </p>

              <p>
                With <strong className="text-zinc-100 font-semibold">4+ years of experience</strong>, I lead engineering teams of up to 5 developers from ambiguous specs through production delivery. At <strong className="text-[#f1f5f9] font-medium">Ksquare Systems</strong>, I architected REPSS (Voice AI + Spatial Property Scoring), Enterprise Knowledge Base (30% productivity gain), and HiRed (Agentic Hiring across 50+ platforms). Previously at <strong className="text-[#f1f5f9] font-medium">Saptang Labs</strong>, I led 2 engineers delivering Excalibur, a real-time bot-mitigation platform processing <strong className="text-calm-emerald-400 font-semibold">80M+ events/hr (6 TB/day) and 60,000 RPS</strong> with C++ NGINX/WAF in-path filtering.
              </p>
            </div>

            {/* 4 Quick Facts (2x2 Grid) */}
            <div className="grid grid-cols-2 gap-2.5 pt-1">
              <div className="p-2.5 rounded-xl bg-[#181d28] border border-[#283144] flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-calm-indigo-950/40 border border-calm-indigo-800/50 text-calm-indigo-400 shrink-0">
                  <GraduationCap className="w-3.5 h-3.5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-mono text-zinc-400 uppercase font-semibold">Education</div>
                  <div className="text-xs font-bold text-[#f1f5f9] truncate">B.Tech &bull; IIT Bombay</div>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-[#181d28] border border-[#283144] flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-calm-rose-950/40 border border-calm-rose-800/50 text-calm-rose-400 shrink-0">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-mono text-zinc-400 uppercase font-semibold">Location</div>
                  <div className="text-xs font-bold text-[#f1f5f9] truncate">Bengaluru, KA, India</div>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-[#181d28] border border-[#283144] flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-calm-amber-950/40 border border-calm-amber-800/50 text-calm-amber-400 shrink-0">
                  <Award className="w-3.5 h-3.5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-mono text-zinc-400 uppercase font-semibold">Honors</div>
                  <div className="text-xs font-bold text-[#f1f5f9] truncate">Inter-IIT Gold Medalist</div>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-[#181d28] border border-[#283144] flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-calm-emerald-950/40 border border-calm-emerald-800/50 text-calm-emerald-400 shrink-0">
                  <Briefcase className="w-3.5 h-3.5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-mono text-zinc-400 uppercase font-semibold">Focus</div>
                  <div className="text-xs font-bold text-[#f1f5f9] truncate">High-Scale &amp; AI Systems</div>
                </div>
              </div>
            </div>

            {/* Quick Action CTAs */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <BrutalistButton
                size="sm"
                variant="secondary"
                asAnchor
                href="/projects/"
                icon={<ArrowRight className="w-3.5 h-3.5" />}
              >
                Explore Flagship Projects
              </BrutalistButton>

              <BrutalistButton
                size="sm"
                variant="outline"
                asAnchor
                href="#contact"
                icon={<Mail className="w-3.5 h-3.5 text-zinc-400" />}
              >
                Get In Touch
              </BrutalistButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
