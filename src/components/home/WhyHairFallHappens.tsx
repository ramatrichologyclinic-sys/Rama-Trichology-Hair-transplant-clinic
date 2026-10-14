"use client";

import Image from "next/image";
import {
  StaggerContainer,
  StaggerItem,
  AnimatedSection,
} from "@/components/common/AnimatedSection";

// 9 Root Causes of Hair Fall in user-specified sequence:
// 1. Nutrition
// 2. Dandruff
// 3. Gut Issues
// 4. Stress
// 5. Family History
// 6. Metabolism
// 7. System Diseases
// 8. Few Medications
// 9. Environmental Conditions
const ROOT_CAUSES = [
  {
    title: "Nutrition",
    desc: "A diet low in iron, biotin, or essential proteins deprives the hair matrix and slows follicular regeneration.",
    image: "/images/root-causes/nutrition.png",
  },
  {
    title: "Dandruff",
    desc: "Persistent flaking, sebum imbalance, and scalp inflammation weaken follicle anchor roots and accelerate shedding.",
    image: "/images/root-causes/dandruff.png",
  },
  {
    title: "Gut Issues",
    desc: "Poor microbiome health, chronic acidity, or impaired digestion blocks critical mineral absorption to hair roots.",
    image: "/images/root-causes/gut-issues.png",
  },
  {
    title: "Stress",
    desc: "Elevated cortisol pushes active growing follicles prematurely into the telogen resting phase, causing sudden shedding.",
    image: "/images/root-causes/stress.png",
  },
  {
    title: "Family History",
    desc: "When hair fall runs in your family, genetic sensitivity causes progressive follicle miniaturization over time.",
    image: "/images/root-causes/family-history.png",
  },
  {
    title: "Metabolism",
    desc: "Sluggish cellular metabolism and nutrient transport leave hair strands dry, weak, brittle, and prone to breakage.",
    image: "/images/root-causes/metabolism.png",
  },
  {
    title: "System Diseases",
    desc: "Thyroid irregularities, chronic anemia, insulin resistance, or autoimmune conditions directly disrupt follicle cycling.",
    image: "/images/root-causes/system-diseases.png",
  },
  {
    title: "Few Medications",
    desc: "Certain prescription therapies, blood pressure medications, or hormonal treatments can trigger sudden telogen shedding.",
    image: "/images/root-causes/few-medications.png",
  },
  {
    title: "Environmental Conditions",
    desc: "Hard mineral water, extreme urban pollution, seasonal shifts, and intense UV rays degrade hair cuticles and stress the scalp.",
    image: "/images/root-causes/environmental-conditions.png",
  },
];

export default function WhyHairFallHappens() {
  return (
    <section className="relative overflow-hidden py-14 sm:py-20 lg:py-24 bg-gradient-to-b from-sky-50/50 via-white to-sky-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <AnimatedSection className="max-w-3xl mb-12 sm:mb-16 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100/90 border border-sky-200 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#007baa] mb-3 font-mono shadow-xs">
            ROOT CAUSES
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-[46px] font-bold text-navy-950 tracking-tight leading-tight">
            Why Hair Fall Happens —{" "}
            <span className="text-[#007baa] relative inline-block mt-1 sm:mt-0">
              Hair health starts from within
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

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed mt-4 max-w-2xl">
            Hair loss is rarely just superficial. It is an internal biological signal
            of hormonal, nutritional, genetic, or digestive distress. Effective
            recovery requires pinpointing your root causes.
          </p>
        </AnimatedSection>

        {/* 9 Cards: Exactly 3 rows and 3 cards per row on desktop/laptop (lg:grid-cols-3) */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 items-stretch">
          {ROOT_CAUSES.map((item, idx) => (
            <StaggerItem key={item.title} className="h-full">
              <div className="group h-full bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 lg:p-8 border border-sky-100 shadow-[0_4px_20px_rgba(2,132,199,0.06)] hover:shadow-[0_16px_36px_rgba(2,132,199,0.16)] hover:border-sky-300 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center justify-between">
                {/* Top Circular Artwork Icon - sized prominently bigger than the title */}
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 mb-4 sm:mb-5 flex-shrink-0 group-hover:scale-105 transition-transform duration-300 drop-shadow-sm">
                  <Image
                    src={item.image}
                    alt={`${item.title} — hair fall root cause factor`}
                    width={128}
                    height={128}
                    className="w-full h-full object-contain"
                    priority={idx < 3}
                  />
                </div>

                {/* Title & Caption */}
                <div className="space-y-2 sm:space-y-2.5 max-w-[290px] flex-grow flex flex-col justify-start">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-navy-950 tracking-tight group-hover:text-[#007baa] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-[14.5px] text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                {/* Subtle bottom indicator dot */}
                <div className="mt-5 sm:mt-6 w-2 h-2 rounded-full bg-sky-300 group-hover:bg-[#007baa] transition-colors" />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
