"use client";

import { useState, useEffect } from "react";
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

  useEffect(() => {
    if (hoveredCard !== null) {
      document.body.classList.add("services-hovering");
    } else {
      document.body.classList.remove("services-hovering");
    }
    return () => {
      document.body.classList.remove("services-hovering");
    };
  }, [hoveredCard]);

  return (
    <section className={`services-section relative overflow-hidden py-14 sm:py-20 lg:py-26 transition-all duration-300 ${hoveredCard !== null ? "z-40" : "z-10"}`}>
      {/* Embedded style for hover glow on active card + dimming background & inactive cards */}
      <style jsx>{`
        .services-bg-layer,
        .services-header-content,
        .service-card-wrapper {
          transition: filter 0.3s ease, opacity 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease, border-color 0.3s ease;
        }

        @media (hover: hover) {
          /* Dim section background layers when any card in the section is hovered */
          .services-section:has(.service-card-wrapper:hover) .services-bg-layer {
            filter: brightness(0.55);
          }

          /* Dim section header content when any card in the section is hovered */
          .services-section:has(.service-card-wrapper:hover) .services-header-content {
            opacity: 0.55;
            filter: brightness(0.55);
          }

          /* Dim all other service cards when a service card is hovered */
          .services-cards-grid:has(.service-card-wrapper:hover) .service-card-wrapper:not(:hover) {
            opacity: 0.6;
            filter: brightness(0.55);
          }

          /* Active hovered card: Highlighting glowing box-shadow, pure solid white background, pops out at full brightness */
          .service-card-wrapper:hover {
            box-shadow: 0 0 0 2.5px #0284c7, 0 20px 45px -10px rgba(2, 132, 199, 0.45), 0 0 50px 12px rgba(14, 165, 233, 0.35) !important;
            filter: brightness(1) opacity(1) !important;
            background: #ffffff !important;
            transform: translateY(-8px);
            z-index: 50 !important;
          }
        }
      `}</style>

      {/* Smooth top-left to bottom-right white-to-skyblue gradient */}
      <div
        className="services-bg-layer absolute inset-0 pointer-events-none transition-[filter] duration-300 ease-out"
        style={{
          background:
            "linear-gradient(135deg, #ffffff 0%, #f4faff 35%, #e1f2fe 75%, #cae8ff 100%)",
          filter: hoveredCard !== null ? "brightness(0.6)" : "brightness(1)",
        }}
      />

      {/* Subtle ambient light orb */}
      <div
        className="services-bg-layer absolute top-1/4 -right-20 w-96 h-96 rounded-full blur-[100px] pointer-events-none transition-[filter] duration-300 ease-out"
        style={{
          background: "rgba(56, 189, 248, 0.2)",
          filter: hoveredCard !== null ? "brightness(0.6)" : "brightness(1)",
          transform: "translateZ(0)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection
          className={`services-header-content text-center max-w-3xl mx-auto mb-14 sm:mb-18 transition-[filter] duration-300 ${
            hoveredCard !== null ? "brightness-[0.6]" : ""
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100/90 border border-sky-200 shadow-sm text-xs sm:text-sm font-bold uppercase tracking-wider text-sky-800 mb-4">
            Specialized Care Pillars
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-navy-950 mt-1 mb-5">
            Our Clinical{" "}
            <span className="text-blue-600 relative inline-block">
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
        <StaggerContainer className="services-cards-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 items-stretch">
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
                className={`h-full ${colClasses} ${isHovered ? "relative z-50" : "relative z-10"}`}
              >
                <div
                  onMouseEnter={() => setHoveredCard(idx)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`service-card-wrapper relative h-full rounded-3xl p-7 sm:p-8 border transition-all duration-300 flex flex-col justify-between group overflow-hidden ${
                    isHovered
                      ? "border-sky-500 -translate-y-2 z-50 ring-2 ring-sky-400/60"
                      : isOtherDimmed
                      ? "border-sky-100/40 z-10 opacity-60"
                      : "border-sky-100/90 hover:-translate-y-1.5 z-10"
                  }`}
                  style={{
                    backgroundColor: isHovered ? "#ffffff" : undefined,
                    boxShadow: isHovered
                      ? "0 0 0 2.5px #0284c7, 0 20px 45px -10px rgba(2, 132, 199, 0.45), 0 0 50px 12px rgba(14, 165, 233, 0.35)"
                      : "0 12px 35px rgba(2, 132, 199, 0.07)",
                    filter: isOtherDimmed ? "brightness(0.55)" : "brightness(1)",
                  }}
                >
                  {/* Clean card background layer */}
                  <div
                    className={`service-card-bg absolute inset-0 rounded-3xl pointer-events-none transition-all duration-300 ${
                      isHovered
                        ? "bg-white opacity-100"
                        : "bg-white/95"
                    }`}
                  />

                  {/* Card Content: Text, icons, and buttons remain 100% opaque and fully readable */}
                  <div className="relative z-10 flex flex-col justify-between h-full">
                    <div>
                      {/* Top Bar: Icon on Left, Explore Link on Top Right */}
                      <div className="flex items-start justify-between gap-4 mb-6">
                        <div
                          className={`w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 text-white flex items-center justify-center transition-all duration-300 ${
                            isHovered
                              ? "scale-105 shadow-[0_0_22px_rgba(2,132,199,0.4)]"
                              : "shadow-md shadow-blue-500/20 group-hover:scale-105"
                          }`}
                        >
                          <Icon className="w-7 h-7" />
                        </div>

                        {/* Explore link positioned top right opposite the icon */}
                        <Link
                          href={`/services/${service.slug}`}
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-blue-700 bg-sky-50/90 hover:bg-blue-600 hover:text-white border border-sky-200/70 shadow-xs transition-all duration-200 group/btn"
                          aria-label={`Explore ${service.title} details`}
                        >
                          <span>Explore</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                        </Link>
                      </div>

                      {/* Content without redundant bottom whitespace */}
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-navy-950 mb-3 group-hover:text-blue-700 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-ink-900 leading-relaxed font-normal">
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
