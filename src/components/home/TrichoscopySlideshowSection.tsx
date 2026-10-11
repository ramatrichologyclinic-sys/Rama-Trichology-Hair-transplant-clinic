"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Microscope,
  Sparkles,
  Calendar,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { CLINIC_INFO } from "@/lib/constants";
import { AnimatedSection } from "@/components/common/AnimatedSection";

const MAGNIFIED_SLIDES = [
  {
    src: "/images/magnified-hair-shaft.jpg",
    alt: "Clinical micro-examination of human scalp and hair follicles under polarized light",
    tag: "POLARIZED SCALP TRICHOSCOPY",
    title: "Follicular Density & Scalp Ostia Scan",
    description:
      "Direct polarized clinical magnification visualizing follicle cluster density, terminal hair caliber, and scalp surface vascularity.",
  },
  {
    src: "/images/magnified-follicle-cross-section.jpg",
    alt: "High-magnification analysis of hair shafts under incident toplight microscopy",
    tag: "MICRO-ANALYSIS OF HAIR SHAFTS",
    title: "Hair Shaft Caliber & Cuticle Integrity",
    description:
      "Incident toplight microscopy analyzing individual hair shaft diameters, cuticle patterns, and structural fiber integrity.",
  },
  {
    src: "/images/magnified-trichoscopy-screen.jpg",
    alt: "Real-time clinical digital trichoscopy monitor examining scalp follicles",
    tag: "LIVE TRICHOSCOPY MONITOR",
    title: "Real-Time Digital Trichoscopy Scan",
    description:
      "Direct in-clinic polarized micro-scan measuring follicle density diversity, terminal-to-vellus ratios, and sebum buildup.",
  },
  {
    src: "/images/magnified-hair-root.jpg",
    alt: "Histological magnification of hair follicle dermal papilla root bulb",
    tag: "DERMAL PAPILLA HISTOLOGY",
    title: "Deep Vascular Root Vitality Analysis",
    description:
      "High-resolution evaluation of root matrix nutrition, micro-capillary blood supply, and dermal papilla health.",
  },
];

export default function TrichoscopySlideshowSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % MAGNIFIED_SLIDES.length);
    }, 3800);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative overflow-hidden text-white"
      style={{
        paddingTop: "clamp(52px, 6vw, 84px)",
        paddingBottom: "clamp(52px, 6vw, 84px)",
      }}
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/2 -left-20 w-96 h-96 bg-sky-500/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[110px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Clinical Diagnostic Narrative */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <AnimatedSection delay={0.1}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-sky-200 border border-white/15 shadow-sm text-xs sm:text-sm font-bold uppercase tracking-wider backdrop-blur-md">
                <Microscope className="w-4 h-4 text-sky-300" />
                <span>High-Magnification Diagnostics</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-4 leading-tight">
                High-Resolution{" "}
                <span className="text-sky-300 relative inline-block">
                  Trichoscopy
                </span>{" "}
                &amp; Follicular Pathology
              </h2>

              <p className="text-base sm:text-lg text-sky-100/90 leading-relaxed">
                Every clinical evaluation begins under polarized digital magnification.
                We examine follicle ostia, sebum density, and vascularization up to
                200x magnification to diagnose root causes before prescribing therapy.
              </p>
            </AnimatedSection>

            {/* Diagnostic Pillars */}
            <AnimatedSection delay={0.25}>
              <div className="space-y-3 pt-1">
                <div className="flex items-start gap-3 text-left">
                  <CheckCircle2 className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-sky-100/90">
                    <strong className="text-white font-semibold">
                      Follicle Miniaturization Mapping:
                    </strong>{" "}
                    Differentiates androgenetic thinning from telogen effluvium by
                    measuring follicle diameter diversity under polarized zoom.
                  </p>
                </div>
                <div className="flex items-start gap-3 text-left">
                  <CheckCircle2 className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-sky-100/90">
                    <strong className="text-white font-semibold">
                      Root &amp; Scalp Micro-Environment:
                    </strong>{" "}
                    Detects early perifollicular halos, micro-vascular erythema, and
                    sebum buildup before visible balding develops.
                  </p>
                </div>
                <div className="flex items-start gap-3 text-left">
                  <CheckCircle2 className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-sky-100/90">
                    <strong className="text-white font-semibold">
                      Standardized Photographic Tracking:
                    </strong>{" "}
                    Calibrated quarterly folli-metric comparisons allow you to verify
                    new follicle emergence with scientific accuracy.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Dual CTAs */}
            <AnimatedSection delay={0.35}>
              <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-3.5">
                <Link
                  href="/contact#book"
                  className="inline-flex items-center gap-2.5 px-8 py-3.5 sm:py-4 rounded-full font-bold text-white bg-[#007baa] hover:bg-[#006992] active:scale-95 transition-all shadow-md shadow-[#007baa]/30 focus-visible:ring-2 focus-visible:ring-[#007baa] text-base sm:text-lg whitespace-nowrap"
                >
                  <Calendar className="w-5 h-5 text-white" />
                  <span>Book Consultation</span>
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md active:scale-95 transition-all shadow-sm focus-visible:ring-2 focus-visible:ring-sky-400 text-sm sm:text-base whitespace-nowrap"
                >
                  <span>Explore Clinical Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column: Magnified Hair & Scalp Images Slideshow */}
          <div className="lg:col-span-6">
            <AnimatedSection delay={0.2} yOffset={20}>
              <div className="relative mx-auto max-w-[560px] lg:max-w-none">
                {/* Slideshow Display Frame */}
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_24px_55px_rgba(0,0,0,0.42)] border-4 sm:border-8 border-white/95 bg-navy-950">
                  {MAGNIFIED_SLIDES.map((slide, index) => (
                    <div
                      key={slide.src}
                      className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                        currentSlide === index
                          ? "opacity-100 pointer-events-auto"
                          : "opacity-0 pointer-events-none"
                      }`}
                    >
                      <Image
                        src={slide.src}
                        alt={slide.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 550px"
                        priority={index === 0}
                        className="object-cover object-center w-full h-full scale-[1.01]"
                      />

                      {/* Gradient overlay for bottom badge text */}
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/30 to-transparent pointer-events-none" />

                      {/* Slide Info Overlay */}
                      <div className="absolute bottom-0 inset-x-0 p-5 sm:p-7 text-left text-white">
                        <span className="inline-block px-3 py-1 rounded-full bg-[#007baa]/90 text-white text-[11px] font-bold tracking-wider uppercase mb-1.5 shadow-sm">
                          {slide.tag}
                        </span>
                        <h3 className="font-serif text-lg sm:text-xl font-bold text-white mb-1">
                          {slide.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-sky-100/90 line-clamp-2">
                          {slide.description}
                        </p>
                      </div>
                    </div>
                  ))}

                  {/* Top-Right Magnification Chip */}
                  <div className="absolute top-3.5 right-3.5 z-20 bg-navy-950/85 backdrop-blur-md rounded-full px-3 py-1 border border-white/20 text-[11px] font-semibold text-sky-300 flex items-center gap-1.5 shadow-md">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Digital Zoom Active</span>
                  </div>
                </div>

                {/* Thumbnail / Slide Indicator Controls */}
                <div className="mt-4 flex items-center justify-center gap-2">
                  {MAGNIFIED_SLIDES.map((slide, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setCurrentSlide(idx)}
                      className={`transition-all duration-300 rounded-full ${
                        currentSlide === idx
                          ? "w-8 h-2.5 bg-[#007baa]"
                          : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
                      }`}
                      aria-label={`Go to magnified slide ${idx + 1}: ${slide.title}`}
                    />
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
