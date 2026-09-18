"use client";

import React, { useEffect, useState, useCallback, useRef } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { captureEvent } from "@/lib/analytics";

export interface SlideItem {
  id: string;
  label: string;
  shortLabel: string;
}

export const SLIDES: SlideItem[] = [
  { id: "hero", label: "Executive Overview", shortLabel: "Overview" },
  { id: "about", label: "Who am I?", shortLabel: "About" },
  { id: "projects", label: "Flagship AI Projects", shortLabel: "Projects" },
  { id: "skills", label: "Production AI Stack", shortLabel: "Toolchain" },
  { id: "experience", label: "Enterprise Track Record", shortLabel: "Experience" },
  { id: "education", label: "Academic Foundation", shortLabel: "Education" },
  { id: "contact", label: "Direct Channels & Contact", shortLabel: "Contact" },
];

export const PresentationNav: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const activeSlideRef = useRef(activeSlide);
  activeSlideRef.current = activeSlide;

  const scrollToSlide = useCallback((index: number) => {
    if (index < 0 || index >= SLIDES.length) return;
    const slide = SLIDES[index];
    const element = document.getElementById(slide.id);

    if (element) {
      const headerOffset = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: "smooth",
      });
      setActiveSlide(index);
      captureEvent("presentation_slide_selected", {
        slide_id: slide.id,
        slide_index: index + 1,
      });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      // If at or very close to bottom of page, highlight last slide
      if (scrollY + windowHeight >= fullHeight - 100) {
        setActiveSlide(SLIDES.length - 1);
        return;
      }

      // If at top of page, highlight first slide
      if (scrollY < 120) {
        setActiveSlide(0);
        return;
      }

      // Calculate which slide center is closest to viewport mid-point
      const viewportMid = scrollY + windowHeight * 0.45;
      let currentIdx = 0;
      let minDistance = Infinity;

      SLIDES.forEach((slide, idx) => {
        const el = document.getElementById(slide.id);
        if (el) {
          const top = el.offsetTop - 64;
          const bottom = top + el.offsetHeight;
          if (viewportMid >= top && viewportMid <= bottom) {
            currentIdx = idx;
          } else {
            const distance = Math.abs(viewportMid - (top + el.offsetHeight / 2));
            if (distance < minDistance) {
              minDistance = distance;
              currentIdx = idx;
            }
          }
        }
      });

      setActiveSlide(currentIdx);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger presentation navigation when typing in inputs or textareas
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.tagName === "SELECT" ||
          target.isContentEditable)
      ) {
        return;
      }

      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        const current = activeSlideRef.current;
        const next = Math.min(SLIDES.length - 1, current + 1);
        scrollToSlide(next);
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        const current = activeSlideRef.current;
        const prev = Math.max(0, current - 1);
        scrollToSlide(prev);
      } else if (e.key === "Home") {
        e.preventDefault();
        scrollToSlide(0);
      } else if (e.key === "End") {
        e.preventDefault();
        scrollToSlide(SLIDES.length - 1);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("keydown", handleKeyDown);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [scrollToSlide]);

  return (
    <>
      {/* Top Progress Bar */}
      <div className="fixed top-16 left-0 right-0 z-40 h-[3px] bg-[#181d28]/80 backdrop-blur-sm pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-calm-indigo-500 via-calm-indigo-400 to-calm-emerald-400 transition-all duration-300 ease-out shadow-[0_0_8px_rgba(99,102,241,0.5)]"
          style={{ width: `${((activeSlide + 1) / SLIDES.length) * 100}%` }}
        />
      </div>

      {/* Floating Right-Side Chapter Indicators */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end gap-2.5 select-none">
        {/* Slide Counter */}
        <div className="font-mono text-[11px] font-bold text-zinc-300 bg-[#181d28]/95 backdrop-blur-md px-3 py-1 rounded-full border border-[#283144] shadow-lg mb-1">
          <span className="text-calm-indigo-400 font-extrabold">0{activeSlide + 1}</span> / 0{SLIDES.length}
        </div>

        {/* Indicator Dots with Tooltips */}
        <div className="flex flex-col items-end gap-2 p-2.5 bg-[#181d28]/90 backdrop-blur-md rounded-2xl border border-[#283144] shadow-xl">
          {SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => scrollToSlide(idx)}
              className="group flex items-center gap-2.5 text-right transition-all cursor-pointer py-1"
              aria-label={`Go to slide: ${slide.label}`}
            >
              <span
                className={`text-[11px] font-mono font-medium transition-all ${
                  activeSlide === idx
                    ? "opacity-100 text-[#f1f5f9] font-bold translate-x-0"
                    : "opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 text-zinc-400"
                }`}
              >
                {slide.shortLabel}
              </span>
              <span
                className={`rounded-full transition-all duration-200 ${
                  activeSlide === idx
                    ? "w-2.5 h-6 bg-calm-indigo-500 shadow-[0_0_12px_rgba(99,102,241,0.7)]"
                    : "w-2 h-2 bg-[#333d52] group-hover:bg-zinc-300 group-hover:scale-125"
                }`}
              />
            </button>
          ))}
        </div>

        {/* Up / Down Arrow Jump Controls */}
        <div className="flex gap-1.5 pt-1">
          <button
            onClick={() => scrollToSlide(Math.max(0, activeSlide - 1))}
            disabled={activeSlide === 0}
            className="p-2 rounded-xl bg-[#181d28]/90 border border-[#283144] text-zinc-400 hover:text-[#f1f5f9] hover:border-calm-indigo-500/50 hover:bg-[#1e2638] disabled:opacity-25 disabled:pointer-events-none transition-all shadow-md cursor-pointer"
            aria-label="Previous slide (Arrow Up)"
            title="Previous slide (↑)"
          >
            <ChevronUp className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => scrollToSlide(Math.min(SLIDES.length - 1, activeSlide + 1))}
            disabled={activeSlide === SLIDES.length - 1}
            className="p-2 rounded-xl bg-[#181d28]/90 border border-[#283144] text-zinc-400 hover:text-[#f1f5f9] hover:border-calm-indigo-500/50 hover:bg-[#1e2638] disabled:opacity-25 disabled:pointer-events-none transition-all shadow-md cursor-pointer"
            aria-label="Next slide (Arrow Down)"
            title="Next slide (↓)"
          >
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </>
  );
};
