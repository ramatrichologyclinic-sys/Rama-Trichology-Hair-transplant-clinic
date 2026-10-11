"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Feather,
  ShieldAlert,
  Cpu,
  Layers,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";
import {
  StaggerContainer,
  StaggerItem,
  AnimatedSection,
} from "@/components/common/AnimatedSection";

const ICONS = [Feather, ShieldAlert, Cpu, Sparkles, Layers];

export default function ServicesGrid() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="services-section relative overflow-hidden pt-12 sm:pt-16 pb-8 sm:pb-12 transition-all duration-300">
      {/* Smooth top-left to bottom-right white-to-skyblue gradient */}
      <div
        className="services-bg-layer absolute inset-0 pointer-events-none transition-all duration-300 ease-out"
        style={{
          background:
            "linear-gradient(135deg, #ffffff 0%, #f4faff 35%, #e1f2fe 75%, #cae8ff 100%)",
        }}
      />

      {/* Subtle ambient light orb */}
      <div
        className="absolute top-1/4 -right-20 w-96 h-96 rounded-full blur-[100px] pointer-events-none"
        style={{
          background: "rgba(56, 189, 248, 0.2)",
          transform: "translateZ(0)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection
          className={`services-header-content text-center max-w-3xl mx-auto mb-10 sm:mb-14 transition-opacity duration-300 ${
            hoveredCard !== null ? "opacity-75" : "opacity-100"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100/90 border border-sky-200 shadow-sm text-xs sm:text-sm font-bold uppercase tracking-wider text-sky-800 mb-4">
            Specialized Care Pillars
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-navy-950 mt-1 mb-5">
            Our Clinical{" "}
            <span className="text-[#007baa] relative inline-block">
              Services
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
            From early medical intervention to advanced surgical
            micro-restoration and non-invasive camouflage, our clinic provides
            tailored scientific solutions for every stage of hair loss.
          </p>
        </AnimatedSection>

        {/* 5-Card Layout: Row 1 has 3 cards, Row 2 has 2 cards centered between columns */}
        <StaggerContainer className="services-cards-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8 items-stretch">
          {SERVICES.map((service, idx) => {
            const Icon = ICONS[idx % ICONS.length];
            const isHovered = hoveredCard === idx;
            const isOtherDimmed = hoveredCard !== null && !isHovered;

            // Row 1: Cards 0, 1, 2 each span 2 cols (cols 1-2, 3-4, 5-6)
            // Row 2: Card 3 is col-start-2 col-span-2 (centered under 1 & 2)
            //        Card 4 is col-start-4 col-span-2 (centered under 2 & 3)
            let colClasses = "lg:col-span-2";
            if (idx === 3) {
              colClasses = "lg:col-start-2 lg:col-span-2";
            } else if (idx === 4) {
              colClasses = "lg:col-start-4 lg:col-span-2";
            }

            return (
              <StaggerItem
                key={service.slug}
                className={`h-full ${colClasses} ${isHovered ? "relative z-30" : "relative z-10"}`}
              >
                <div
                  onMouseEnter={() => setHoveredCard(idx)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`service-card-wrapper relative h-full rounded-3xl p-6 sm:p-7 pb-4 sm:pb-5 min-h-[220px] sm:min-h-[235px] border transition-all duration-300 flex flex-col justify-between group overflow-hidden ${
                    isHovered
                      ? "border-[#007baa] -translate-y-2 scale-[1.02] shadow-[0_20px_45px_rgba(0,123,170,0.22)] ring-2 ring-[#007baa] bg-white opacity-100 z-30"
                      : isOtherDimmed
                      ? "border-sky-100/50 bg-white/70 opacity-40 scale-[0.98] z-10"
                      : "border-sky-100 bg-white hover:-translate-y-1 shadow-[0_8px_30px_rgba(2,132,199,0.06)] opacity-100 z-10"
                  }`}
                >
                  {/* Card Content: Text, icons, and buttons remain 100% opaque and fully readable */}
                  <div className="relative z-10 flex flex-col h-full">
                    <div>
                      {/* Top Bar: Icon on Left, Explore Link on Top Right */}
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div
                          className={`w-[54px] h-[54px] sm:w-[60px] sm:h-[60px] rounded-2xl bg-gradient-to-br from-sky-400 to-[#007baa] text-white flex items-center justify-center transition-all duration-300 ${
                            isHovered
                              ? "scale-105 shadow-[0_0_20px_rgba(0,123,170,0.4)]"
                              : "shadow-md shadow-blue-500/20 group-hover:scale-105"
                          }`}
                        >
                          <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                        </div>

                        {/* Explore link positioned top right opposite the icon */}
                        <Link
                          href={`/services/${service.slug}`}
                          className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold text-[#007baa] bg-sky-50/90 hover:bg-[#007baa] hover:text-white border border-sky-200/70 shadow-xs transition-all duration-200 group/btn"
                          aria-label={`Explore ${service.title} details`}
                        >
                          <span>Explore</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                        </Link>
                      </div>

                      {/* Content */}
                      <h3 className="font-serif text-lg sm:text-xl lg:text-[22px] font-bold text-navy-950 mb-2 group-hover:text-[#007baa] transition-colors leading-snug">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                        {service.shortDesc}
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
