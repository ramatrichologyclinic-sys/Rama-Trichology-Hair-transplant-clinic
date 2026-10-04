"use client";

import { Search, Activity, HeartHandshake } from "lucide-react";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/common/AnimatedSection";

interface HowWeDiagnoseProps {
  variant?: "default" | "sapphire";
}

export default function HowWeDiagnose({ variant = "sapphire" }: HowWeDiagnoseProps) {
  const isSapphire = variant === "sapphire";
  const steps = [
    {
      step: "01",
      icon: Search,
      title: "Comprehensive Scalp & Follicle Scan",
      desc: "We begin with high-magnification polarized digital trichoscopy, inspecting follicle density, diameter diversity, sebum buildup, and micro-vascular inflammation across the crown, temples, and donor areas.",
    },
    {
      step: "02",
      icon: Activity,
      title: "Root-Cause Pathology Identification",
      desc: "We cross-examine microscopic findings against your medical history, hormonal markers, and nutritional profiles to differentiate between androgenetic thinning, telogen effluvium, or autoimmune scalp conditions.",
    },
    {
      step: "03",
      icon: HeartHandshake,
      title: "Personalized Protocol & Digital Tracking",
      desc: "You receive an exact medical prescription combining evidence-backed pharmaceuticals, clinical scalp therapies, and nutritional optimization, supported by scheduled quarterly photographic check-ins.",
    },
  ];

  return (
    <section className="relative overflow-hidden pt-12 sm:pt-16 lg:pt-18 pb-24 sm:pb-28 lg:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full shadow-sm text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 ${
              isSapphire
                ? "bg-white/15 text-sky-200 border border-white/20 backdrop-blur-md"
                : "bg-sky-100/90 border border-sky-200 text-sky-800"
            }`}
          >
            Our Clinical Methodology
          </div>
          <h2
            className={`font-serif text-3xl sm:text-5xl font-bold mt-1 mb-5 ${
              isSapphire ? "text-white" : "text-navy-950"
            }`}
          >
            How We Diagnose &amp;{" "}
            <span className={`${isSapphire ? "text-sky-300" : "text-blue-600"} relative inline-block`}>
              Treat
              <svg
                className={`absolute -bottom-2 left-0 w-full h-3 ${isSapphire ? "text-sky-400" : "text-sky-400"}`}
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
          <p
            className={`text-base sm:text-lg leading-relaxed max-w-2xl mx-auto ${
              isSapphire ? "text-sky-100/90" : "text-ink-900"
            }`}
          >
            Our three-tier clinical pathway removes trial-and-error, targeting
            the biological mechanisms of hair loss directly.
          </p>
        </AnimatedSection>

        {/* Steps Container */}
        <div className="relative">
          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={idx}>
                  <div className="group h-full bg-white rounded-3xl p-8 border border-white/90 shadow-[0_20px_50px_rgba(0,0,0,0.32)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.42)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:shadow-[0_0_25px_rgba(56,189,248,0.9),0_0_40px_rgba(37,99,235,0.5)] group-hover:scale-110 transition-all duration-300">
                          <Icon className="w-7 h-7" />
                        </div>
                        <span className="font-serif text-3xl font-bold text-sky-600">
                          {item.step}
                        </span>
                      </div>

                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-navy-950 mb-3">
                        {item.title}
                      </h3>

                      <p className="text-sm text-slate-700 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>

                    <div className="mt-8 pt-4 border-t border-sky-100 flex items-center gap-2 text-xs font-semibold text-blue-700">
                      <span>Phase {item.step} Protocol</span>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
