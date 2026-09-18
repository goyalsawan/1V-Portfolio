"use client";

import React from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProjectsTeaser } from "@/components/ProjectsTeaser";
import { SkillsGrid } from "@/components/SkillsGrid";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { EducationSection } from "@/components/EducationSection";
import { ContactSection, Footer } from "@/components/ContactSection";
import { PresentationNav } from "@/components/PresentationNav";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#12151c] text-[#e2e8f0]">
      {/* Sleek Top Navigation */}
      <Header />

      {/* Floating Presentation Navigator (Side Dots + Keypad Jump Controls + Progress Bar) */}
      <PresentationNav />

      {/* Presentation Slides Flow */}
      <div className="w-full">
        {/* Slide 1: Executive Overview */}
        <Hero />

        {/* Slide 2: Big Projects Jump Section */}
        <ProjectsTeaser />

        {/* Slide 3: Application Stack Layers & Toolchain */}
        <SkillsGrid />

        {/* Slide 4: Enterprise Track Record @ Saptang Labs */}
        <ExperienceTimeline />

        {/* Slide 5: Standalone Education & Academic Foundation (IIT Bombay) */}
        <EducationSection />

        {/* Slide 6: Direct Contact & Hiring Dispatcher */}
        <ContactSection />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
