"use client";

import React from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsTeaser } from "@/components/ProjectsTeaser";
import { ServicesSection } from "@/components/ServicesSection";
import { SkillsGrid } from "@/components/SkillsGrid";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { EducationSection } from "@/components/EducationSection";
import { ContactSection } from "@/components/ContactSection";
import { PresentationNav } from "@/components/PresentationNav";

export default function Home() {
  return (
    <main className="h-screen w-full overflow-hidden bg-[#12151c] text-[#e2e8f0] relative">
      {/* Sleek Top Navigation */}
      <Header />

      {/* Floating Presentation Navigator (Side Dots + Keypad Jump Controls + Progress Bar) */}
      <PresentationNav />

      {/* Presentation Deck Snap Container */}
      <div id="deck-container" className="deck-container">
        {/* Slide 1: Executive Overview */}
        <Hero />

        {/* Slide 2: Who am I? (Personal & Academic Profile) */}
        <AboutSection />

        {/* Slide 3: Big Projects Jump Section */}
        <ProjectsTeaser />

        {/* Slide 4: Services & High-Impact Capabilities */}
        <ServicesSection />

        {/* Slide 5: Application Stack Layers & Toolchain */}
        <SkillsGrid />

        {/* Slide 6: Enterprise Track Record @ KSquare & Saptang */}
        <ExperienceTimeline />

        {/* Slide 7: Standalone Education & Academic Foundation (IIT Bombay) */}
        <EducationSection />

        {/* Slide 8: Direct Contact & Hiring Dispatcher */}
        <ContactSection />
      </div>
    </main>
  );
}
