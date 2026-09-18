"use client";

import React, { useEffect, useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

export interface SlideItem {
  id: string;
  label: string;
  shortLabel: string;
}

export const SLIDES: SlideItem[] = [
  { id: "hero", label: "Executive Overview", shortLabel: "Overview" },
  { id: "projects", label: "Flagship AI Projects", shortLabel: "Projects" },
  { id: "skills", label: "Production AI Stack", shortLabel: "Toolchain" },
  { id: "experience", label: "Enterprise Track Record", shortLabel: "Experience" },
  { id: "education", label: "Academic Foundation", shortLabel: "Education" },
  { id: "contact", label: "Direct Channels & Contact", shortLabel: "Contact" },
];

export const PresentationNav: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Find the slide closest to the top
      SLIDES.forEach((slide, index) => {
        const el = document.getElementById(slide.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= windowHeight * 0.4 && rect.bottom >= windowHeight * 0.4) {
            setActiveSlide(index);
          }
        }
      });
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        const next = Math.min(SLIDES.length - 1, activeSlide + 1);
        document.getElementById(SLIDES[next].id)?.scrollIntoView({ behavior: "smooth" });
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        const prev = Math.max(0, activeSlide - 1);
        document.getElementById(SLIDES[prev].id)?.scrollIntoView({ behavior: "smooth" });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeSlide]);

  const scrollToSlide = (index: number) => {
    document.getElementById(SLIDES[index].id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Top Progress Bar */}
      <div className="fixed top-16 left-0 right-0 z-40 h-[2px] bg-[#181d28]">
        <div
          className="h-full bg-calm-indigo-500 transition-all duration-300 ease-out"
          style={{ width: `${((activeSlide + 1) / SLIDES.length) * 100}%` }}
        />
      </div>

      {/* Floating Right-Side Chapter Indicators */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end gap-3 select-none">
        {/* Slide Counter */}
        <div className="font-mono text-[11px] font-bold text-zinc-400 bg-[#181d28]/95 backdrop-blur-md px-2.5 py-1 rounded-full border border-[#283144] shadow-sm mb-1">
          <span className="text-calm-indigo-400">0{activeSlide + 1}</span> / 0{SLIDES.length}
        </div>

        {/* Indicator Dots with Tooltips */}
        <div className="flex flex-col items-end gap-2.5 p-2 bg-[#181d28]/90 backdrop-blur-md rounded-2xl border border-[#283144] shadow-md">
          {SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => scrollToSlide(idx)}
              className="group flex items-center gap-2 text-right transition-all"
              aria-label={`Go to ${slide.label}`}
            >
              <span
                className={`text-[11px] font-mono font-medium transition-all opacity-0 group-hover:opacity-100 ${
                  activeSlide === idx ? "opacity-100 text-[#f1f5f9] font-bold" : "text-zinc-400"
                }`}
              >
                {slide.shortLabel}
              </span>
              <span
                className={`rounded-full transition-all ${
                  activeSlide === idx
                    ? "w-2.5 h-6 bg-calm-indigo-500 shadow-[0_0_12px_rgba(99,102,241,0.6)]"
                    : "w-2 h-2 bg-[#333d52] group-hover:bg-zinc-400"
                }`}
              />
            </button>
          ))}
        </div>

        {/* Up / Down Arrow Jump Controls */}
        <div className="flex gap-1 pt-1">
          <button
            onClick={() => scrollToSlide(Math.max(0, activeSlide - 1))}
            disabled={activeSlide === 0}
            className="p-1.5 rounded-lg bg-[#181d28]/90 border border-[#283144] text-zinc-400 hover:text-[#f1f5f9] disabled:opacity-30 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronUp className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => scrollToSlide(Math.min(SLIDES.length - 1, activeSlide + 1))}
            disabled={activeSlide === SLIDES.length - 1}
            className="p-1.5 rounded-lg bg-[#181d28]/90 border border-[#283144] text-zinc-400 hover:text-[#f1f5f9] disabled:opacity-30 transition-colors"
            aria-label="Next slide"
          >
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </>
  );
};
