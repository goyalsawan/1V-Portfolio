"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Menu, X } from "lucide-react";
import { BrutalistButton } from "@/components/ui/BrutalistButton";

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#12151c]/90 backdrop-blur-md border-b border-[#242b3a] text-[#e2e8f0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link href="/#hero" className="flex items-center gap-2.5 group">
          <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-[#2c3547] bg-[#1a1f2c] shrink-0 group-hover:border-calm-indigo-400/60 transition-colors">
            <img
              src="/images/sawan-goyal.png"
              alt="Sawan Goyal"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-base tracking-tight leading-none text-[#f1f5f9]">
              Sawan Goyal<span className="text-calm-indigo-400 font-bold">.</span>
            </span>
            <span className="font-mono text-[10px] text-zinc-400 font-medium">
              Software Engineer &bull; IIT Bombay
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-6 font-sans text-sm font-medium text-zinc-400">
          <Link href="/#hero" className="hover:text-zinc-200 transition-colors">
            Overview
          </Link>
          <Link href="/#about" className="hover:text-zinc-200 transition-colors">
            Who am I?
          </Link>
          <Link href="/projects/" className="hover:text-zinc-200 transition-colors flex items-center gap-1.5 text-zinc-200 font-semibold">
            <span>Projects</span>
            <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-calm-indigo-950/60 text-calm-indigo-400 border border-calm-indigo-800/50">
              3
            </span>
          </Link>
          <Link href="/services/" className="hover:text-zinc-200 transition-colors">
            Services
          </Link>
          <Link href="/#skills" className="hover:text-zinc-200 transition-colors">
            Toolchain
          </Link>
          <Link href="/experience/" className="hover:text-zinc-200 transition-colors">
            Experience
          </Link>
          <Link href="/#education" className="hover:text-zinc-200 transition-colors">
            Education
          </Link>
        </nav>

        {/* Primary CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <BrutalistButton
            size="sm"
            variant="secondary"
            asAnchor
            href="/#contact"
            icon={<Mail className="w-3.5 h-3.5" />}
          >
            Get In Touch
          </BrutalistButton>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg border border-[#242b3a] text-zinc-300 hover:bg-[#1a1f2c] transition-colors"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#242b3a] bg-[#12151c] p-4 font-sans text-sm font-medium space-y-2 animate-in slide-in-from-top-2">
          <Link
            href="/#hero"
            onClick={() => setMobileMenuOpen(false)}
            className="block p-2.5 rounded-lg hover:bg-[#1a1f2c] text-zinc-200 transition-colors"
          >
            01. Overview
          </Link>
          <Link
            href="/#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block p-2.5 rounded-lg hover:bg-[#1a1f2c] text-calm-indigo-400 font-semibold transition-colors"
          >
            02. Who am I? (Profile)
          </Link>
          <Link
            href="/projects/"
            onClick={() => setMobileMenuOpen(false)}
            className="block p-2.5 rounded-lg hover:bg-[#1a1f2c] text-zinc-200 transition-colors"
          >
            03. Projects Hub (3 Systems)
          </Link>
          <Link
            href="/services/"
            onClick={() => setMobileMenuOpen(false)}
            className="block p-2.5 rounded-lg hover:bg-[#1a1f2c] text-zinc-200 transition-colors"
          >
            04. Services &amp; Capabilities
          </Link>
          <Link
            href="/#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="block p-2.5 rounded-lg hover:bg-[#1a1f2c] text-zinc-200 transition-colors"
          >
            05. Production Toolchain
          </Link>
          <Link
            href="/experience/"
            onClick={() => setMobileMenuOpen(false)}
            className="block p-2.5 rounded-lg hover:bg-[#1a1f2c] text-zinc-200 transition-colors"
          >
            06. Experience (KSquare &amp; Saptang)
          </Link>
          <Link
            href="/#education"
            onClick={() => setMobileMenuOpen(false)}
            className="block p-2.5 rounded-lg hover:bg-[#1a1f2c] text-zinc-200 transition-colors"
          >
            07. Education (IIT Bombay)
          </Link>
          <Link
            href="/#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block p-2.5 rounded-lg hover:bg-[#1a1f2c] text-zinc-200 transition-colors"
          >
            08. Direct Contact &amp; Dispatcher
          </Link>

          <div className="pt-2">
            <BrutalistButton
              size="sm"
              variant="secondary"
              className="w-full"
              asAnchor
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get In Touch
            </BrutalistButton>
          </div>
        </div>
      )}
    </header>
  );
};
