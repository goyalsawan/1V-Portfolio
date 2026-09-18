"use client";

import React from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
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

        {/* Slide 2: Who am I? (Personal & Academic Profile) */}
        <AboutSection />

        {/* Slide 3: Big Projects Jump Section */}
        <ProjectsTeaser />

        {/* Slide 4: Application Stack Layers & Toolchain */}
        <SkillsGrid />

        {/* Slide 5: Enterprise Track Record @ Saptang Labs */}
        <ExperienceTimeline />

        {/* Slide 6: Standalone Education & Academic Foundation (IIT Bombay) */}
        <EducationSection />

        {/* Slide 7: Direct Contact & Hiring Dispatcher */}
        <ContactSection />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
