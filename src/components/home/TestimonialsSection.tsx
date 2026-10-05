"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/common/AnimatedSection";

export default function TestimonialsSection() {
  const total = TESTIMONIALS.length;
  // Duplicate array 3 times for seamless infinite cycling on mobile
  const extendedTestimonials = [
    ...TESTIMONIALS,
    ...TESTIMONIALS,
    ...TESTIMONIALS,
  ];

  // Start in the middle set to allow seamless infinite loops
  const [currentIndex, setCurrentIndex] = useState(total);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Auto-advance carousel to the left every 3 seconds on mobile
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(timer);
  }, [isPaused]);

  // Seamless infinite loop normalization
  useEffect(() => {
    if (currentIndex >= total * 2) {
      const resetTimer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(total);
      }, 520);
      return () => clearTimeout(resetTimer);
    } else if (currentIndex < total) {
      const resetTimer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(total * 2 - 1);
      }, 520);
      return () => clearTimeout(resetTimer);
    }
  }, [currentIndex, total]);

  const handleNext = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const handlePrev = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    // Resume auto-play after 2.5s of touch inactivity
    setTimeout(() => setIsPaused(false), 2500);
  };

  const activeIndex = ((currentIndex % total) + total) % total;

  return (
    <section className="relative overflow-hidden py-14 sm:py-20 lg:py-26">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-18">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100/90 border border-sky-200 shadow-sm text-xs sm:text-sm font-bold uppercase tracking-wider text-sky-800 mb-4">
            Patient Stories
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-navy-950 mt-1 mb-5">
            Trusted by Our{" "}
            <span className="text-blue-600 relative inline-block">
              Patients
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-sky-400"
                viewBox="0 0 100 12"
                preserveAspectRatio="none"
                fill="none"
              >
                <path
                  d="M0,8 Q50,0 100,6"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
          <p className="text-base sm:text-lg text-ink-900 leading-relaxed max-w-2xl mx-auto">
            Read about real journeys of recovery, scalp comfort, and restored
            confidence from patients treated at our clinic.
          </p>
        </AnimatedSection>

        {/* ── 1. Desktop / Laptop Layout: Fixed 3-Column Grid (Untouched) ── */}
        <div className="hidden lg:block">
          <StaggerContainer className="grid grid-cols-3 gap-8 w-full items-stretch">
            {TESTIMONIALS.slice(0, 3).map((item, idx) => (
              <StaggerItem key={idx} className="h-full">
                <div className="h-full bg-white/95 backdrop-blur-md rounded-3xl p-7 sm:p-8 border border-sky-100 shadow-[0_12px_35px_rgba(2,132,199,0.06)] hover:shadow-[0_20px_45px_rgba(2,132,199,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1 text-amber-500">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-amber-400 text-amber-400"
                          />
                        ))}
                      </div>
                      <span className="text-xs font-semibold text-blue-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
                        {item.treatment}
                      </span>
                    </div>

                    <Quote className="w-8 h-8 text-sky-300/60 mb-3" />

                    <p className="text-base text-ink-900 leading-relaxed italic mb-6">
                      {item.quote}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-sky-100 flex items-center justify-between mt-auto">
                    <div>
                      <h3 className="font-serif text-base font-bold text-navy-950">
                        {item.name}
                      </h3>
                      <p className="text-xs text-gray-500">Verified Clinic Patient</p>
                    </div>
                    <span className="text-xs text-blue-700 font-semibold bg-sky-50 px-2.5 py-1 rounded-full border border-sky-100">
                      Google Review
                    </span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* ── 2. Mobile Layout: Infinite Animating Carousel (Moves Left Every 1.5s) ── */}
        <div
          className="block lg:hidden relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Overflow viewport container */}
          <div className="overflow-hidden w-full px-1">
            <div
              className={`flex w-full ${
                isTransitioning
                  ? "transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
                  : "transition-none"
              }`}
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {extendedTestimonials.map((item, idx) => (
                <div key={idx} className="w-full flex-shrink-0 px-1.5">
                  <div className="h-full bg-white rounded-3xl p-6 sm:p-7 border border-sky-100 shadow-[0_12px_35px_rgba(2,132,199,0.08)] flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3.5">
                        <div className="flex items-center gap-1 text-amber-500">
                          {[...Array(item.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 fill-amber-400 text-amber-400"
                            />
                          ))}
                        </div>
                        <span className="text-[11px] sm:text-xs font-semibold text-blue-700 bg-sky-50 px-2.5 py-1 rounded-full border border-sky-100">
                          {item.treatment}
                        </span>
                      </div>

                      <Quote className="w-7 h-7 text-sky-300/60 mb-2.5" />

                      <p className="text-sm sm:text-base text-ink-900 leading-relaxed italic mb-5 line-clamp-6">
                        {item.quote}
                      </p>
                    </div>

                    <div className="pt-3.5 border-t border-sky-100 flex items-center justify-between mt-auto">
                      <div>
                        <h3 className="font-serif text-sm sm:text-base font-bold text-navy-950">
                          {item.name}
                        </h3>
                        <p className="text-[11px] sm:text-xs text-gray-500">Verified Clinic Patient</p>
                      </div>
                      <span className="text-[11px] sm:text-xs text-blue-700 font-semibold bg-sky-50 px-2.5 py-1 rounded-full border border-sky-100">
                        Google Review
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Navigation Dots and Controls */}
          <div className="flex items-center justify-between px-2 mt-5">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="w-9 h-9 rounded-full bg-white border border-sky-200 text-sky-800 flex items-center justify-center shadow-xs active:scale-95 transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Pagination Indicators */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => {
                    setIsTransitioning(true);
                    setCurrentIndex(total + dotIdx);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === dotIdx
                      ? "w-7 bg-blue-600"
                      : "w-2 bg-sky-200 hover:bg-sky-300"
                  }`}
                  aria-label={`Jump to testimonial ${dotIdx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="w-9 h-9 rounded-full bg-white border border-sky-200 text-sky-800 flex items-center justify-center shadow-xs active:scale-95 transition-all"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
