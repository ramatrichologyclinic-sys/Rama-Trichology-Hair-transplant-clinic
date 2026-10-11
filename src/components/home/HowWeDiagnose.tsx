"use client";

import Image from "next/image";
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
      image: "/images/diagnose-scalp-scan.jpg",
      title: "Comprehensive Scalp & Follicle Scan",
      desc: "We begin with high-magnification polarized digital trichoscopy, inspecting follicle density, diameter diversity, sebum buildup, and micro-vascular inflammation across the crown, temples, and donor areas.",
    },
    {
      step: "02",
      image: "/images/diagnose-pathology-lab.jpg",
      title: "Root-Cause Pathology Identification",
      desc: "We cross-examine microscopic findings against your medical history, hormonal markers, and nutritional profiles to differentiate between androgenetic thinning, telogen effluvium, or autoimmune scalp conditions.",
    },
    {
      step: "03",
      image: "/images/diagnose-personalized-protocol.jpg",
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

        {/* Steps Container: Single row on desktop (lg:grid-cols-3), 1 card at a time on mobile and tablet (grid-cols-1) */}
        <div className="relative">
          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 relative z-10 items-stretch">
            {steps.map((item, idx) => (
              <StaggerItem key={idx} className="h-full">
                <div className="group h-full bg-white rounded-3xl overflow-hidden border border-white/90 shadow-[0_20px_50px_rgba(0,0,0,0.32)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.42)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
                  {/* Fitted Image Header */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={800}
                      height={500}
                      className="object-cover object-center w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Phase Badge */}
                    <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-navy-950/85 backdrop-blur-md text-white border border-white/20 text-xs font-bold tracking-wider font-mono">
                      Phase {item.step}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#007baa] mb-2 block font-mono">
                        Clinical Step {item.step}
                      </span>

                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-navy-950 mb-3 group-hover:text-[#007baa] transition-colors leading-snug">
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>

                    <div className="mt-5 pt-3.5 border-t border-sky-100 flex items-center justify-between text-xs font-semibold text-[#007baa]">
                      <span>Evidence-Based Diagnostics</span>
                      <span className="font-mono text-slate-400">0{idx + 1}/03</span>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
