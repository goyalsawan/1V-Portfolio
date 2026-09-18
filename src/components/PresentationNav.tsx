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
  { id: "services", label: "Services & Capabilities", shortLabel: "Services" },
  { id: "skills", label: "Production AI Stack", shortLabel: "Toolchain" },
  { id: "experience", label: "Enterprise Track Record", shortLabel: "Experience" },
  { id: "education", label: "Academic Foundation", shortLabel: "Education" },
  { id: "contact", label: "Direct Channels & Contact", shortLabel: "Contact" },
];

export const PresentationNav: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const activeSlideRef = useRef(activeSlide);
  activeSlideRef.current = activeSlide;
  const isTransitioningRef = useRef(false);

  const scrollToSlide = useCallback((index: number) => {
    if (index < 0 || index >= SLIDES.length) return;
    const slide = SLIDES[index];
    const container = document.getElementById("deck-container");
    const element = document.getElementById(slide.id);

    if (container && element) {
      isTransitioningRef.current = true;
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSlide(index);
      captureEvent("presentation_slide_selected", {
        slide_id: slide.id,
        slide_index: index + 1,
      });

      setTimeout(() => {
        isTransitioningRef.current = false;
      }, 700);
    }
  }, []);

  useEffect(() => {
    const container = document.getElementById("deck-container");
    if (!container) return;

    // Scroll spy for deck container
    const handleScroll = () => {
      if (isTransitioningRef.current) return;
      const height = container.clientHeight || window.innerHeight;
      const scrollTop = container.scrollTop;
      const currentIdx = Math.min(
        SLIDES.length - 1,
        Math.max(0, Math.round(scrollTop / height))
      );
      setActiveSlide(currentIdx);
    };

    // Keyboard listener for slide transitions
    const handleKeyDown = (e: KeyboardEvent) => {
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

      const current = activeSlideRef.current;

      if (e.key === "ArrowDown" || e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") {
        e.preventDefault();
        scrollToSlide(Math.min(SLIDES.length - 1, current + 1));
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        scrollToSlide(Math.max(0, current - 1));
      } else if (e.key === "Home") {
        e.preventDefault();
        scrollToSlide(0);
      } else if (e.key === "End") {
        e.preventDefault();
        scrollToSlide(SLIDES.length - 1);
      } else if (e.key >= "1" && e.key <= "8") {
        const targetSlide = parseInt(e.key, 10) - 1;
        if (targetSlide >= 0 && targetSlide < SLIDES.length) {
          e.preventDefault();
          scrollToSlide(targetSlide);
        }
      }
    };

    // Touch swipe gestures for mobile deck navigation
    let touchStartY = 0;
    let touchStartX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
      touchStartX = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndY = e.changedTouches[0].clientY;
      const touchEndX = e.changedTouches[0].clientX;
      const deltaY = touchStartY - touchEndY;
      const deltaX = touchStartX - touchEndX;

      // Ensure vertical swipe is dominant
      if (Math.abs(deltaY) > 50 && Math.abs(deltaY) > Math.abs(deltaX)) {
        const current = activeSlideRef.current;
        if (deltaY > 0) {
          // Swipe up -> Next slide
          scrollToSlide(Math.min(SLIDES.length - 1, current + 1));
        } else {
          // Swipe down -> Previous slide
          scrollToSlide(Math.max(0, current - 1));
        }
      }
    };

    // Header link click interceptor for deck scrolling
    const handleHashClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest("a");
      if (!target) return;
      const href = target.getAttribute("href");
      if (href && href.startsWith("/#")) {
        const id = href.replace("/#", "");
        const slideIndex = SLIDES.findIndex((s) => s.id === id);
        if (slideIndex !== -1) {
          e.preventDefault();
          scrollToSlide(slideIndex);
        }
      } else if (href && href.startsWith("#")) {
        const id = href.replace("#", "");
        const slideIndex = SLIDES.findIndex((s) => s.id === id);
        if (slideIndex !== -1) {
          e.preventDefault();
          scrollToSlide(slideIndex);
        }
      }
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("keydown", handleKeyDown);
    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    container.addEventListener("touchend", handleTouchEnd, { passive: true });
    document.addEventListener("click", handleHashClick);

    // Initial check from URL hash
    if (typeof window !== "undefined" && window.location.hash) {
      const hashId = window.location.hash.replace("#", "");
      const foundIdx = SLIDES.findIndex((s) => s.id === hashId);
      if (foundIdx !== -1) {
        setTimeout(() => scrollToSlide(foundIdx), 150);
      }
    }

    return () => {
      container.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchend", handleTouchEnd);
      document.removeEventListener("click", handleHashClick);
    };
  }, [scrollToSlide]);

  return (
    <>
      {/* Top Presentation Progress Bar */}
      <div className="fixed top-16 left-0 right-0 z-40 h-[3px] bg-[#181d28]/80 backdrop-blur-sm pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-calm-indigo-500 via-calm-indigo-400 to-calm-emerald-400 transition-all duration-300 ease-out shadow-[0_0_8px_rgba(99,102,241,0.6)]"
          style={{ width: `${((activeSlide + 1) / SLIDES.length) * 100}%` }}
        />
      </div>

      {/* Floating Right-Side Deck Controls & Chapter Dots */}
      <aside className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end gap-2.5 select-none">
        {/* Slide Counter Badge */}
        <div className="font-mono text-[11px] font-bold text-zinc-300 bg-[#181d28]/95 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#283144] shadow-lg mb-1 flex items-center gap-1.5">
          <span className="text-calm-indigo-400 font-extrabold text-xs">0{activeSlide + 1}</span>
          <span className="text-zinc-500">/</span>
          <span className="text-zinc-400">0{SLIDES.length}</span>
        </div>

        {/* Slide Indicator Dots with Labels */}
        <div className="flex flex-col items-end gap-2 p-2.5 bg-[#181d28]/90 backdrop-blur-md rounded-2xl border border-[#283144] shadow-xl">
          {SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => scrollToSlide(idx)}
              className="group flex items-center gap-2.5 text-right transition-all cursor-pointer py-1"
              aria-label={`Jump to slide ${idx + 1}: ${slide.label}`}
              title={`${idx + 1}. ${slide.label} (Press ${idx + 1})`}
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
                    ? "w-2.5 h-6 bg-calm-indigo-500 shadow-[0_0_12px_rgba(99,102,241,0.8)]"
                    : "w-2 h-2 bg-[#333d52] group-hover:bg-zinc-300 group-hover:scale-125"
                }`}
              />
            </button>
          ))}
        </div>

        {/* Up / Down Jump Arrows */}
        <div className="flex gap-1.5 pt-1">
          <button
            onClick={() => scrollToSlide(Math.max(0, activeSlide - 1))}
            disabled={activeSlide === 0}
            className="p-2 rounded-xl bg-[#181d28]/90 border border-[#283144] text-zinc-400 hover:text-[#f1f5f9] hover:border-calm-indigo-500/50 hover:bg-[#1e2638] disabled:opacity-25 disabled:pointer-events-none transition-all shadow-md cursor-pointer"
            aria-label="Previous slide (Arrow Up)"
            title="Previous slide (↑ / ←)"
          >
            <ChevronUp className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => scrollToSlide(Math.min(SLIDES.length - 1, activeSlide + 1))}
            disabled={activeSlide === SLIDES.length - 1}
            className="p-2 rounded-xl bg-[#181d28]/90 border border-[#283144] text-zinc-400 hover:text-[#f1f5f9] hover:border-calm-indigo-500/50 hover:bg-[#1e2638] disabled:opacity-25 disabled:pointer-events-none transition-all shadow-md cursor-pointer"
            aria-label="Next slide (Arrow Down)"
            title="Next slide (↓ / → / Space)"
          >
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
        </div>
      </aside>

      {/* Bottom Floating Deck Status Bar */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-30 hidden sm:flex items-center gap-3 px-4 py-2 rounded-full bg-[#181d28]/90 backdrop-blur-md border border-[#283144] shadow-xl text-xs font-mono text-zinc-400 select-none">
        <span className="flex items-center gap-1.5 text-[#f1f5f9] font-medium">
          <span className="w-2 h-2 rounded-full bg-calm-indigo-400 animate-pulse" />
          <span>Slide 0{activeSlide + 1}:</span>
          <span className="text-calm-indigo-300 font-semibold">
            {SLIDES[activeSlide]?.label || ""}
          </span>
        </span>
        <span className="text-zinc-600">|</span>
        <span className="text-[11px] text-zinc-500 flex items-center gap-1">
          Use <kbd className="px-1.5 py-0.5 rounded bg-[#141822] border border-[#283144] text-zinc-300 font-mono text-[10px]">↓</kbd> <kbd className="px-1.5 py-0.5 rounded bg-[#141822] border border-[#283144] text-zinc-300 font-mono text-[10px]">↑</kbd> or <kbd className="px-1.5 py-0.5 rounded bg-[#141822] border border-[#283144] text-zinc-300 font-mono text-[10px]">1-8</kbd> to navigate
        </span>
      </div>
    </>
  );
};
