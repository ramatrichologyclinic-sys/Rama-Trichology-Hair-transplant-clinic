"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Calendar,
  Check,
} from "lucide-react";
import { CLINIC_INFO } from "@/lib/constants";
import { AnimatedSection } from "@/components/common/AnimatedSection";

const HERO_SLIDES = [
  {
    src: "/images/hero-slide-01.jpg",
    alt: "Clinical hairline measurement and surgical laser planning",
    tag: "ADVANCED TRICHOSCOPY",
    title: "High-magnification root cause analysis",
  },
  {
    src: "/images/hero-slide-02.jpg",
    alt: "Precision follicular unit extraction and implantation under surgical light",
    tag: "SURGICAL EXPERTISE",
    title: "Micro-follicular unit extraction & restoration",
  },
  {
    src: "/images/hero-slide-03.jpg",
    alt: "Microscopic follicle stem cell matrix and root vitality assessment",
    tag: "CELLULAR REGENERATION",
    title: "Bio-active follicle stem cell matrix vitality",
  },
  {
    src: "/images/hero-slide-04.jpg",
    alt: "Targeted follicular cellular pipeline and dermal papilla regenerative mapping",
    tag: "TARGETED DIAGNOSTICS",
    title: "Follicular pipeline & root pathology mapping",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Respect prefers-reduced-motion: keep first image static
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden pt-7 pb-14 sm:pt-10 sm:pb-16 lg:pt-12 lg:pb-24">


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-center lg:text-left">
            {/* Dr. Safariya Circular Animating Portrait (Reference Style) */}
            <AnimatedSection delay={0.05} className="flex justify-center lg:justify-start">
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 220,
                  damping: 18,
                }}
                className="relative inline-block"
              >
                {/* Elegant warm golden/metallic circular framed portrait matching reference style */}
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full p-1 sm:p-1.5 bg-gradient-to-b from-[#e6c875] via-[#c59b27] to-[#8d6914] shadow-[0_12px_30px_rgba(0,0,0,0.18)] hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full rounded-full overflow-hidden border-2 border-white/90 bg-navy-950 relative">
                    <Image
                      src="/images/doctor-photo.jpg"
                      alt={`${CLINIC_INFO.doctorName} - Lead Consultant & Trichologist`}
                      width={240}
                      height={240}
                      priority
                      className="object-cover object-[center_20%] w-full h-full"
                    />
                  </div>
                </div>

                {/* Status indicator badge */}
                <div className="absolute -bottom-1 -right-1 bg-white/95 backdrop-blur-md rounded-full shadow-md py-0.5 px-2.5 border border-sky-100 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] sm:text-xs font-bold text-navy-950">Dr. Safariya</span>
                </div>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-sky-100/90 border border-sky-200 shadow-sm text-xs sm:text-sm font-semibold text-sky-900">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-500 animate-pulse" />
                <span>Specialized Medical Trichology Practice</span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-navy-950 leading-[1.14]">
                Scientific Hair &amp; Scalp Care Guided by{" "}
                <span className="text-blue-600 relative inline-block">
                  Clinical Expertise
                  {/* Subtle underline curve accent */}
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
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <p className="text-base sm:text-lg lg:text-xl text-ink-900 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Targeted, root-cause medical trichology for progressive hair
                fall, thinning, and scalp conditions. Led by{" "}
                <span className="font-semibold text-blue-700">
                  {CLINIC_INFO.doctorName}
                </span>{" "}
                ({CLINIC_INFO.credentials}) using advanced digital trichoscopic
                diagnostics.
              </p>
            </AnimatedSection>

            {/* Value checklist matching Reference 1 style */}
            <AnimatedSection delay={0.35}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs sm:text-sm text-ink-900 max-w-lg mx-auto lg:mx-0 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="font-medium text-navy-950">
                    Microscopic Follicle Scans
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="font-medium text-navy-950">
                    No False Promises or Gimmicks
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="font-medium text-navy-950">
                    Personalized Regimens
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="font-medium text-navy-950">
                    Quarterly Growth Tracking
                  </span>
                </div>
              </div>
            </AnimatedSection>

            {/* Dual CTAs matching Reference Image 1 */}
            <AnimatedSection delay={0.4}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href="/contact#book"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-blue-600 via-blue-600 to-blue-700 hover:from-blue-700 hover:to-navy-950 active:scale-95 transition-all shadow-lg shadow-blue-500/25 focus-visible:ring-2 focus-visible:ring-blue-400"
                >
                  <Calendar className="w-4 h-4 text-white" />
                  <span>Book Free Consultation</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </Link>

                <a
                  href={CLINIC_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full font-semibold text-sky-900 bg-white border border-sky-200 hover:bg-sky-50 active:scale-95 transition-all shadow-sm focus-visible:ring-2 focus-visible:ring-blue-400"
                >
                  <MessageCircle className="w-5 h-5 text-blue-600" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </AnimatedSection>
          </div>

          {/* Hero Visual: 3-Image Auto Slideshow with Floating Badges matching Reference 1 */}
          <div className="lg:col-span-5">
            <AnimatedSection delay={0.3} yOffset={20}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative aspect-[4/4] rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(2,132,199,0.18)] border-4 sm:border-8 border-white bg-white">
                  {HERO_SLIDES.map((slide, index) => (
                    <div
                      key={slide.src}
                      className={`absolute inset-0 transition-opacity duration-[800ms] ease-in-out ${
                        currentSlide === index
                          ? "opacity-100 z-10"
                          : "opacity-0 z-0 pointer-events-none"
                      }`}
                    >
                      <Image
                        src={slide.src}
                        alt={slide.alt}
                        fill
                        priority={index === 0}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  ))}

                  {/* Visual Scrim for contrast overlay */}
                  <div className="absolute inset-0 z-20 bg-gradient-to-t from-navy-950/75 via-transparent to-transparent pointer-events-none" />

                  {/* Scrim Overlay Text with WCAG AA compliance */}
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 z-20 text-white flex items-end justify-between">
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-sky-300 font-bold">
                        {HERO_SLIDES[currentSlide]?.tag || "ADVANCED TRICHOSCOPY"}
                      </p>
                      <p className="text-xs sm:text-sm font-semibold text-white mt-0.5 line-clamp-1">
                        {HERO_SLIDES[currentSlide]?.title || "High-magnification root cause analysis"}
                      </p>
                    </div>

                    {/* Dot indicators */}
                    <div className="flex items-center gap-1.5 flex-shrink-0 ml-3 mb-0.5">
                      {HERO_SLIDES.map((_, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setCurrentSlide(idx)}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            currentSlide === idx
                              ? "w-5 bg-white shadow-sm"
                              : "w-1.5 bg-white/45 hover:bg-white/80"
                          }`}
                          aria-label={`Slide ${idx + 1} of ${HERO_SLIDES.length}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating Badge 1: Top-Left (Approach: 100% Medical Science) */}
                <div className="absolute -top-5 -left-4 sm:-left-6 z-30 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-3 sm:p-4 border border-sky-100 flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 flex-shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-medium">Approach</div>
                    <div className="text-sm font-bold text-navy-950">
                      100% Medical Science
                    </div>
                  </div>
                </div>

                {/* Floating Badge 2: Bottom-Right (Free Assessment: Take 3-Min Quiz ->) */}
                <div className="absolute -bottom-5 -right-4 sm:-right-6 z-30 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-3 sm:p-4 border border-sky-100 flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 flex-shrink-0">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-medium">
                      Free Assessment
                    </div>
                    <Link
                      href="/assessment"
                      className="text-sm font-bold text-blue-700 hover:underline flex items-center gap-1"
                    >
                      <span>Take 3-Min Quiz</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
