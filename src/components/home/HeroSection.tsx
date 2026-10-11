"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Calendar,
  MessageCircle,
  Award,
  Stethoscope,
  CheckCircle2,
  Check,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { CLINIC_INFO } from "@/lib/constants";
import { AnimatedSection } from "@/components/common/AnimatedSection";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-6 pb-12 sm:pt-9 sm:pb-16 lg:pt-10 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="space-y-8 sm:space-y-10">
          {/* 1. Main Header Title */}
          <div className="text-center max-w-4xl mx-auto">
            <AnimatedSection delay={0.05}>
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-sky-100/90 border border-sky-200 shadow-sm text-xs sm:text-sm font-semibold text-sky-900 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-[#007baa] animate-pulse" />
                <span>Specialized Medical Trichology Practice</span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-navy-950 leading-[1.16]">
                Scientific Hair &amp; Scalp Clinic{" "}
                <br className="hidden sm:inline" />
                <span className="text-[#007baa] relative inline-block mt-1">
                  Guided by 18 years of Clinical Expertise
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
          </div>

          {/* 2. Lead Section: Meet Dr. Ritesh Safariya with Rectangular Image & Clinical Narrative */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Column A: Doctor Image & Targeted Clinical Scope Statement directly below */}
            <div className="lg:col-span-5 space-y-6">
              <AnimatedSection delay={0.2} yOffset={20}>
                {/* Doctor Section Header on Mobile & Desktop */}
                <div className="text-center lg:text-left mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#007baa] bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
                    Lead Consultant &amp; Dermatologist
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950 mt-2">
                    Meet Dr. Ritesh Safariya
                  </h2>
                </div>

                {/* Rectangular Pattern Doctor Portrait */}
                <div className="relative mx-auto max-w-[460px] lg:max-w-none">
                  <div className="relative aspect-[16/11] sm:aspect-[1.5/1] rounded-3xl overflow-hidden shadow-[0_20px_45px_rgba(2,132,199,0.18)] border-4 sm:border-6 border-white bg-white">
                    <Image
                      src="/images/doctor-photo.jpg"
                      alt={`${CLINIC_INFO.doctorName} - Lead Consultant & Trichologist`}
                      width={900}
                      height={600}
                      priority
                      className="object-cover object-center w-full h-full"
                    />
                  </div>

                  {/* Experience Badge Chip */}
                  <div className="absolute -bottom-3.5 -right-2 sm:right-3 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg py-2 px-3.5 border border-sky-100 flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-sky-400 to-[#007baa] flex items-center justify-center text-white shadow-sm flex-shrink-0">
                      <Award className="w-4 h-4" />
                    </div>
                    <div className="text-left">
                      <span className="text-[10px] text-gray-500 block font-medium leading-none">
                        Clinical Practice
                      </span>
                      <span className="text-xs font-bold text-navy-950">
                        18+ Years Experience
                      </span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Exact statement placed directly below the doctor's image */}
              <AnimatedSection delay={0.3}>
                <div className="p-4 sm:p-5 rounded-2xl bg-sky-50/80 border border-sky-100 text-left">
                  <p className="text-sm sm:text-base text-ink-900 leading-relaxed">
                    Targeted, root-cause medical trichology for progressive hair
                    fall, thinning, and scalp conditions. Led by{" "}
                    <span className="font-semibold text-navy-950">
                      Dr. Ritesh Safariya
                    </span>{" "}
                    (<span className="font-medium text-[#007baa]">MBBS, MD — Dermatology</span>)
                    using advanced digital trichoscopic diagnostics.
                  </p>
                </div>
              </AnimatedSection>
            </div>

            {/* Column B: Doctor Full Clinical Description & Treatment Philosophy */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <AnimatedSection delay={0.25}>
                <p className="text-base sm:text-lg text-ink-900 leading-relaxed">
                  With over 18+ Years of Experience in medical dermatology and
                  specialized follicular pathology,{" "}
                  <span className="font-semibold text-navy-950">
                    Dr. Ritesh Safariya
                  </span>{" "}
                  founded Rama Trichology to bridge the gap between commercial hair
                  salons and hospital-grade clinical science.
                </p>

                <blockquote className="mt-4 border-l-4 border-[#007baa] pl-4 py-2 italic text-navy-950 font-serif text-sm sm:text-base bg-sky-50/50 rounded-r-xl border border-sky-100 text-left">
                  &ldquo;Effective hair restoration begins with honest,
                  high-magnification diagnosis. We never prescribe generic
                  off-the-shelf bundles or propose surgical procedures unless
                  genuinely indicated.&rdquo;
                </blockquote>
              </AnimatedSection>

              {/* 3 Clinical Highlights */}
              <AnimatedSection delay={0.35}>
                <div className="space-y-3 pt-1 text-left">
                  <div className="flex items-start gap-3">
                    <Stethoscope className="w-5 h-5 text-[#007baa] flex-shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-ink-900">
                      <strong className="text-navy-950 font-semibold">
                        Specialized Trichoscopy:
                      </strong>{" "}
                      Every patient evaluation includes polarized digital
                      micro-scans of follicle ostia, sebum density, and vascular
                      patterns.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#007baa] flex-shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-ink-900">
                      <strong className="text-navy-950 font-semibold">
                        Biochemical Rigor:
                      </strong>{" "}
                      Treatment regimens integrate blood biomarkers (ferritin,
                      thyroid panel, vitamin D3, hormone ratios) for holistic
                      internal restoration.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#007baa] flex-shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-ink-900">
                      <strong className="text-navy-950 font-semibold">
                        Independent Solo Practice:
                      </strong>{" "}
                      Direct, unhurried one-on-one doctor consultations with
                      comprehensive progress reviews at every follow-up.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              {/* Value Checklist */}
              <AnimatedSection delay={0.4}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-ink-900 text-left pt-2">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span>Direct Solo Doctor Consultations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span>Zero Salon-Style Upselling</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span>Polarized Trichoscopy Scans</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span>Quarterly Growth Tracking</span>
                  </div>
                </div>
              </AnimatedSection>

              {/* Dual CTAs with balanced, appropriate spacing */}
              <AnimatedSection delay={0.45}>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                  <Link
                    href="/contact#book"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-white bg-[#007baa] hover:bg-[#006992] active:scale-95 transition-all shadow-md shadow-[#007baa]/25 focus-visible:ring-2 focus-visible:ring-[#007baa] text-sm sm:text-base whitespace-nowrap"
                  >
                    <Calendar className="w-4 h-4 text-white" />
                    <span>Book Consultation</span>
                  </Link>

                  <a
                    href={CLINIC_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-semibold text-sky-900 bg-white border border-sky-200 hover:bg-sky-50 active:scale-95 transition-all shadow-xs focus-visible:ring-2 focus-visible:ring-[#007baa] text-sm sm:text-base whitespace-nowrap"
                  >
                    <MessageCircle className="w-4 h-4 text-[#007baa]" />
                    <span>Chat on WhatsApp</span>
                  </a>

                  <Link
                    href="/about"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#007baa] hover:underline px-2 py-1"
                  >
                    <span>Read Full Profile</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
