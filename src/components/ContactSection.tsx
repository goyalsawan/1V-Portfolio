"use client";

import React, { useState } from "react";
import { Mail, Send, Copy, Check, ArrowUpRight, Phone, MapPin, GraduationCap } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { BrutalistButton } from "@/components/ui/BrutalistButton";
import { BrutalistBadge } from "@/components/ui/BrutalistBadge";
import { captureEvent } from "@/lib/analytics";

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", roleOrProject: "", message: "" });

  const myEmail = "sawangoyal895@gmail.com";
  const myPhone = "+91-8504959517";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(myEmail);
    captureEvent("contact_detail_copied", { channel: "email" });
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(myPhone);
    captureEvent("contact_detail_copied", { channel: "phone" });
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    captureEvent("contact_form_submitted", { form: "portfolio_contact" });
    setFormSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="snap-slide min-h-screen flex flex-col justify-center py-20 px-4 sm:px-6 bg-[#12151c] text-[#e2e8f0] border-b border-[#242b3a] relative"
    >
      <div className="max-w-6xl mx-auto w-full space-y-6">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#242b3a]">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs font-bold text-calm-amber-400 bg-calm-amber-950/40 border border-calm-amber-800/50 px-2.5 py-0.5 rounded">
              CHAPTER 06
            </span>
            <BrutalistBadge color="amber" size="md">
              GET IN TOUCH
            </BrutalistBadge>
            <BrutalistBadge color="emerald" size="md">
              OPEN FOR ENGINEERING ROLES
            </BrutalistBadge>
          </div>

          <div className="font-mono text-xs text-zinc-400 bg-[#181d28] border border-[#283144] px-3 py-1 rounded-md">
            Direct Inbox &bull; Bengaluru, IN
          </div>
        </div>

        <div className="space-y-1.5 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-[#f1f5f9] tracking-tight">
            Let&apos;s Connect & Build Systems
          </h2>
          <p className="text-sm sm:text-base text-[#94a3b8] font-sans leading-relaxed">
            Available for full-time Software Engineer, AI Systems, Cloud & High-Throughput Distributed Infrastructure roles.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Direct Channels */}
          <div className="lg:col-span-5 space-y-3 font-sans">
            <div className="p-6 rounded-2xl bg-[#181d28] border border-[#283144] space-y-4 text-xs">
              <div className="font-mono font-semibold text-zinc-400 uppercase tracking-wider text-[11px]">
                Direct Contact & Channels
              </div>

              {/* Email */}
              <div className="p-3.5 bg-[#141822] rounded-xl border border-[#242c3d] flex items-center justify-between gap-2 shadow-sm">
                <div className="flex items-center gap-2 truncate">
                  <Mail className="w-4 h-4 text-calm-indigo-400 shrink-0" />
                  <span className="font-mono font-medium text-zinc-200 truncate">{myEmail}</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 rounded-md bg-[#181d28] hover:bg-[#202737] font-mono text-[11px] font-semibold uppercase flex items-center gap-1 transition-colors shrink-0 text-zinc-300 border border-[#2c374e]"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-calm-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  {copiedEmail ? "COPIED" : "COPY"}
                </button>
              </div>

              {/* Phone */}
              <div className="p-3.5 bg-[#141822] rounded-xl border border-[#242c3d] flex items-center justify-between gap-2 shadow-sm">
                <div className="flex items-center gap-2 truncate">
                  <Phone className="w-4 h-4 text-calm-emerald-400 shrink-0" />
                  <span className="font-mono font-medium text-zinc-200 truncate">{myPhone}</span>
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="px-2.5 py-1 rounded-md bg-[#181d28] hover:bg-[#202737] font-mono text-[11px] font-semibold uppercase flex items-center gap-1 transition-colors shrink-0 text-zinc-300 border border-[#2c374e]"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-calm-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  {copiedPhone ? "COPIED" : "COPY"}
                </button>
              </div>

              {/* Location & Alma Mater */}
              <div className="grid grid-cols-2 gap-2 text-xs font-mono text-zinc-300">
                <div className="p-3 rounded-xl bg-[#141822] border border-[#242c3d] flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-calm-rose-400 shrink-0" />
                  <span className="truncate">Bengaluru, KA</span>
                </div>
                <div className="p-3 rounded-xl bg-[#141822] border border-[#242c3d] flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-calm-amber-400 shrink-0" />
                  <span className="truncate">IIT Bombay</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-calm-amber-950/25 border border-calm-amber-800/30 text-xs text-zinc-300 leading-relaxed">
                ⚡ <strong>Availability:</strong> Immediate availability for Software Engineer, Backend/Cloud Systems, and Full-Stack AI Engineer opportunities.
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 md:p-8 rounded-2xl bg-[#181d28] border border-[#283144]">
              <div className="font-mono font-semibold text-zinc-400 uppercase tracking-wider text-[11px] mb-4">
                Message Dispatcher
              </div>

              {formSubmitted ? (
                <div className="p-6 text-center space-y-3 font-sans">
                  <div className="w-10 h-10 rounded-full bg-calm-emerald-950/40 text-calm-emerald-400 border border-calm-emerald-800/50 flex items-center justify-center mx-auto">
                    <Check className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#f1f5f9]">
                    Message Dispatched Successfully!
                  </h3>
                  <p className="text-xs text-[#94a3b8] max-w-md mx-auto">
                    Thank you for reaching out. I will respond within 24 hours. You can also reach me directly at {myEmail}.
                  </p>
                  <BrutalistButton
                    size="sm"
                    variant="outline"
                    onClick={() => setFormSubmitted(false)}
                  >
                    Send Another Message
                  </BrutalistButton>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5 text-xs font-sans">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div className="space-y-1">
                      <label className="font-medium text-zinc-400">Your Name *</label>
                      <input
                        required
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Engineering Leader"
                        className="w-full p-2.5 rounded-xl bg-[#141822] border border-[#242c3d] text-xs sm:text-sm focus:outline-none focus:border-calm-indigo-500 shadow-sm text-zinc-200"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-medium text-zinc-400">Email Address *</label>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. recruiter@company.com"
                        className="w-full p-2.5 rounded-xl bg-[#141822] border border-[#242c3d] text-xs sm:text-sm focus:outline-none focus:border-calm-indigo-500 shadow-sm text-zinc-200"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="font-medium text-zinc-400">Opportunity / Role Details</label>
                    <input
                      type="text"
                      value={formData.roleOrProject}
                      onChange={(e) => setFormData({ ...formData, roleOrProject: e.target.value })}
                      placeholder="e.g. Software Engineer (Cloud & High Scale), Full-Stack AI Engineer"
                      className="w-full p-2.5 rounded-xl bg-[#141822] border border-[#242c3d] text-xs sm:text-sm focus:outline-none focus:border-calm-indigo-500 shadow-sm text-zinc-200"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-medium text-zinc-400">Message / Inquiries *</label>
                    <textarea
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share project details, team requirements, or schedule an interview..."
                      className="w-full p-2.5 rounded-xl bg-[#141822] border border-[#242c3d] text-xs sm:text-sm focus:outline-none focus:border-calm-indigo-500 shadow-sm text-zinc-200"
                    />
                  </div>

                  <BrutalistButton
                    type="submit"
                    size="md"
                    variant="secondary"
                    className="w-full"
                    icon={<Send className="w-3.5 h-3.5" />}
                  >
                    Dispatch Message
                  </BrutalistButton>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#242b3a] bg-[#12151c] text-[#e2e8f0] py-12 px-4 sm:px-6 font-sans text-xs text-zinc-400">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-calm-indigo-400" />
            <span className="font-bold text-sm text-[#f1f5f9] tracking-tight font-heading">
              SAWAN GOYAL // SOFTWARE ENGINEER & AI SYSTEMS
            </span>
          </div>
          <p className="text-zinc-500 text-[11px]">
            IIT Bombay Graduate &bull; Ex-Saptang Labs &bull; Bengaluru, India.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-zinc-400">
          <a href="/#hero" className="hover:text-zinc-200 transition-colors">Overview</a>
          <a href="/projects/" className="hover:text-zinc-200 transition-colors">Projects</a>
          <a href="/#skills" className="hover:text-zinc-200 transition-colors">Stack</a>
          <a href="/#experience" className="hover:text-zinc-200 transition-colors">Track Record</a>
          <a href="/#contact" className="hover:text-zinc-200 transition-colors">Contact</a>
        </div>

        <div className="text-[11px] text-zinc-500">
          © {new Date().getFullYear()} SAWAN GOYAL. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};
