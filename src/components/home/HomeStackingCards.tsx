"use client";

import React from "react";
import TrichoscopySlideshowSection from "@/components/home/TrichoscopySlideshowSection";
import WhyHairFallHappens from "@/components/home/WhyHairFallHappens";
import HowWeDiagnose from "@/components/home/HowWeDiagnose";
import ServicesGrid from "@/components/home/ServicesGrid";

/**
 * HomeStackingCards
 *
 * Renders the home page clinical narrative sections in seamless natural scroll flow:
 * - Section A: High-Magnification Trichoscopy Showcase (Luminous Sapphire)
 * - Section B: Why Hair Fall Happens (Rich Cerulean Blue)
 * - Section C: How We Diagnose & Treat (Deep Midnight Sapphire)
 * - Section D: Our Clinical Services (ServicesGrid)
 *
 * Provides smooth, natural native scroll behavior without sticky page-up pinning,
 * while preserving all reveal-on-scroll animations for inner elements.
 */
export default function HomeStackingCards() {
  return (
    <div className="relative w-full">
      {/* SECTION A: High-Magnification Trichoscopy Showcase */}
      <section
        className="w-full relative z-10"
        style={{
          background: "linear-gradient(145deg, #071930 0%, #0c274c 50%, #103160 100%)",
        }}
      >
        <TrichoscopySlideshowSection />
      </section>

      {/* SECTION B: Why Hair Fall Happens */}
      <section
        className="w-full relative z-10"
        style={{
          background: "linear-gradient(145deg, #0076a3 0%, #0088bc 50%, #006691 100%)",
        }}
      >
        <WhyHairFallHappens />
      </section>

      {/* SECTION C: How We Diagnose & Treat */}
      <section
        className="w-full relative z-10"
        style={{
          background: "linear-gradient(145deg, #051329 0%, #091e3a 50%, #0d2d56 100%)",
        }}
      >
        <HowWeDiagnose variant="sapphire" />
      </section>

      {/* SECTION D: Our Clinical Services */}
      <section className="w-full relative z-10">
        <ServicesGrid />
      </section>
    </div>
  );
}
