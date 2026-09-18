"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GraduationCap, MapPin, Award, Terminal, ArrowRight, Mail, Sparkles, Code2, Briefcase } from "lucide-react";
import { BrutalistBadge } from "@/components/ui/BrutalistBadge";
import { BrutalistButton } from "@/components/ui/BrutalistButton";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="snap-slide min-h-screen flex flex-col justify-center py-20 px-4 sm:px-6 bg-[#12151c] text-[#e2e8f0] border-b border-[#242b3a] relative"
    >
      <div className="max-w-6xl mx-auto w-full space-y-8">
        {/* Header Badges */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#242b3a]">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs font-bold text-calm-indigo-400 bg-calm-indigo-950/40 border border-calm-indigo-800/50 px-2.5 py-0.5 rounded">
              ABOUT
            </span>
            <BrutalistBadge color="indigo" size="md">
              WHO AM I?
            </BrutalistBadge>
            <BrutalistBadge color="amber" size="md">
              IIT BOMBAY GRADUATE
            </BrutalistBadge>
          </div>

          <div className="font-mono text-xs text-zinc-400 bg-[#181d28] border border-[#283144] px-3 py-1 rounded-md flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Bengaluru, Karnataka, India</span>
          </div>
        </div>

        {/* Section Heading */}
        <div className="space-y-2 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-[#f1f5f9] tracking-tight">
            Who am I<span className="text-calm-indigo-400">?</span>
          </h2>
          <p className="text-base sm:text-lg text-[#94a3b8] font-sans leading-relaxed">
            Software Engineer &amp; AI Systems Architect bridging high-throughput cloud backends with next-generation agentic intelligence.
          </p>
        </div>

        {/* Main 2-Column Content Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center font-sans">
          {/* Left Column: Framed Portrait Image & Status Pill */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-[340px] group">
              {/* Outer decorative glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-calm-indigo-500/30 via-[#283144] to-calm-emerald-500/20 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Photo Container */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#283144] bg-[#181d28] shadow-2xl">
                <div className="relative aspect-square w-full">
                  <Image
                    src="/images/sawan-goyal.png"
                    alt="Sawan Goyal - Software & AI Systems Engineer"
                    fill
                    sizes="(max-width: 768px) 100vw, 340px"
                    className="object-cover object-top filter brightness-[1.02] contrast-[1.02] group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>

                {/* Bottom Overlay Card */}
                <div className="p-4 bg-[#141822]/95 backdrop-blur-md border-t border-[#242c3d] space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-heading font-bold text-base text-[#f1f5f9]">
                        Sawan Goyal
                      </h3>
                      <p className="font-mono text-xs text-calm-indigo-400">
                        IIT Bombay &bull; Ex-Saptang Labs
                      </p>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-calm-emerald-950/50 border border-calm-emerald-800/60 text-calm-emerald-400 font-mono text-[10px] font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      AVAILABLE
                    </span>
                  </div>

                  {/* Quick Social & Direct Links */}
                  <div className="flex items-center gap-2 pt-1 border-t border-[#242b3a]">
                    <a
                      href="https://linkedin.com/in/sawan-goyal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-1.5 px-2 rounded-lg bg-[#181d28] hover:bg-[#202737] border border-[#283144] text-xs font-mono text-zinc-300 hover:text-[#f1f5f9] flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <LinkedinIcon className="w-3.5 h-3.5 text-calm-indigo-400" />
                      <span>LinkedIn</span>
                    </a>
                    <a
                      href="https://github.com/Sawan895"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-1.5 px-2 rounded-lg bg-[#181d28] hover:bg-[#202737] border border-[#283144] text-xs font-mono text-zinc-300 hover:text-[#f1f5f9] flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5 text-zinc-400" />
                      <span>GitHub</span>
                    </a>
                    <a
                      href="#contact"
                      className="py-1.5 px-2.5 rounded-lg bg-calm-indigo-950/40 hover:bg-calm-indigo-900/50 border border-calm-indigo-800/50 text-xs font-mono text-calm-indigo-300 flex items-center justify-center transition-colors"
                      title="Contact"
                    >
                      <Mail className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative & Key Quick Facts */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-sm sm:text-base text-[#94a3b8] leading-relaxed">
              <p>
                Hello! I&apos;m <strong className="text-[#f1f5f9] font-semibold">Sawan Goyal</strong>, a Software Engineer and AI Systems Architect with a passion for building robust, high-throughput cloud infrastructure and production-grade artificial intelligence systems.
              </p>

              <p>
                I graduated with a <strong className="text-[#f1f5f9] font-medium">Bachelor of Technology (B.Tech) from the Indian Institute of Technology Bombay (IIT Bombay)</strong> in 2022. During my time at IIT Bombay, I developed a strong foundation in systems programming, security, and algorithmic engineering — earning a <strong className="text-calm-amber-400 font-medium">Gold Medal</strong> representing IIT Bombay in the National NetSec Hackathon at Inter-IIT Tech Meet 9.0.
              </p>

              <p>
                Professionally, I led engineering initiatives at <strong className="text-[#f1f5f9] font-medium">Saptang Labs</strong>, where I spearheaded the architecture of an enterprise bot-detection platform benchmarked at <strong className="text-zinc-200 font-semibold">80M+ browser events/hour (6 TB/day) and 60,000 RPS</strong> with custom C++ NGINX reverse-proxy filtering. I also engineer end-to-end multi-agent LLM systems, hybrid RAG pipelines, and multimodal document intelligence platforms.
              </p>

              <p>
                Originally from India, I am currently living and working in <strong className="text-[#f1f5f9] font-medium">Bengaluru, Karnataka</strong>. When I&apos;m not architecting distributed pipelines or training agent supervisors, I enjoy diving into open-source systems, exploring distributed databases, and optimizing low-latency architectures.
              </p>
            </div>

            {/* 4 Quick Fact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-[#181d28] border border-[#283144] flex items-start gap-3">
                <div className="p-2 rounded-lg bg-calm-indigo-950/40 border border-calm-indigo-800/50 text-calm-indigo-400 shrink-0">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-zinc-400 uppercase font-semibold">Education</div>
                  <div className="text-xs sm:text-sm font-bold text-[#f1f5f9]">B.Tech &bull; IIT Bombay</div>
                  <div className="text-[11px] text-zinc-400 font-mono">Class of 2018–2022</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#181d28] border border-[#283144] flex items-start gap-3">
                <div className="p-2 rounded-lg bg-calm-rose-950/40 border border-calm-rose-800/50 text-calm-rose-400 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-zinc-400 uppercase font-semibold">Location</div>
                  <div className="text-xs sm:text-sm font-bold text-[#f1f5f9]">Bengaluru, Karnataka</div>
                  <div className="text-[11px] text-zinc-400 font-mono">India &bull; Open to Relocate/Remote</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#181d28] border border-[#283144] flex items-start gap-3">
                <div className="p-2 rounded-lg bg-calm-amber-950/40 border border-calm-amber-800/50 text-calm-amber-400 shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-zinc-400 uppercase font-semibold">Honors</div>
                  <div className="text-xs sm:text-sm font-bold text-[#f1f5f9]">Inter-IIT Gold Medalist</div>
                  <div className="text-[11px] text-zinc-400 font-mono">National NetSec Hackathon</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#181d28] border border-[#283144] flex items-start gap-3">
                <div className="p-2 rounded-lg bg-calm-emerald-950/40 border border-calm-emerald-800/50 text-calm-emerald-400 shrink-0">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-zinc-400 uppercase font-semibold">Specialization</div>
                  <div className="text-xs sm:text-sm font-bold text-[#f1f5f9]">Distributed &amp; AI Systems</div>
                  <div className="text-[11px] text-zinc-400 font-mono">80M+ /hr Scale &bull; Multi-Agent</div>
                </div>
              </div>
            </div>

            {/* Quick CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <BrutalistButton
                size="md"
                variant="secondary"
                asAnchor
                href="#projects"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Explore Flagship Projects
              </BrutalistButton>

              <BrutalistButton
                size="md"
                variant="outline"
                asAnchor
                href="#contact"
                icon={<Mail className="w-4 h-4 text-zinc-400" />}
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
