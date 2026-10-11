"use client";

import {
  StaggerContainer,
  StaggerItem,
  AnimatedSection,
} from "@/components/common/AnimatedSection";

// Custom SVG Icons matching Reference Images (Olive green line art style)
function NutritionIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="w-16 h-16 text-[#5E7127]">
      {/* Bowl */}
      <path
        d="M18 47C18 60 30 66 40 66C50 66 62 60 62 47H18Z"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M16 47H64" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
      {/* Broccoli Floret */}
      <path
        d="M32 45V36C32 36 26 35 26 29C26 24 31 22 35 24C36 20 40 18 44 20C48 18 52 21 52 25C56 25 58 29 56 33C54 36 48 36 48 36V45"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Leaf */}
      <path
        d="M54 34C58 27 66 28 66 28C66 28 66 36 60 40C57 41 54 38 54 34Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DandruffIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="w-16 h-16 text-[#5E7127]">
      {/* Scalp surface line with follicle opening */}
      <path
        d="M14 58C24 58 30 58 34 58C36 58 38 52 38 46C38 52 40 58 42 58C46 58 52 58 66 58"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      {/* Hair shaft emerging from scalp */}
      <path
        d="M37 56C35 42 38 28 48 18"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <path
        d="M41 56C39 44 42 32 52 20"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      {/* Dandruff flakes */}
      <circle cx="26" cy="46" r="1.8" fill="currentColor" />
      <circle cx="30" cy="38" r="2" fill="currentColor" />
      <circle cx="34" cy="46" r="1.8" fill="currentColor" />
      <circle cx="56" cy="46" r="2" fill="currentColor" />
      <circle cx="60" cy="50" r="1.8" fill="currentColor" />
      <circle cx="58" cy="38" r="1.8" fill="currentColor" />
    </svg>
  );
}

function GutIssuesIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="w-16 h-16 text-[#5E7127]">
      {/* Digestive intestine coils */}
      <path
        d="M38 18V26C38 31 48 31 48 36C48 41 32 41 32 47C32 53 48 53 48 59C48 64 38 64 38 68"
        stroke="currentColor"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M42 18V24C42 29 52 29 52 36C52 43 36 43 36 49C36 55 52 55 52 61C52 66 42 66 42 68"
        stroke="currentColor"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StressIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="w-16 h-16 text-[#5E7127]">
      {/* Stress pulse waveform line */}
      <path
        d="M12 44H24L32 24L44 60L52 36L58 44H68"
        stroke="currentColor"
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FamilyHistoryIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="w-16 h-16 text-[#5E7127]">
      {/* DNA double helix */}
      <path
        d="M30 18C30 32 50 38 50 52C50 66 30 72 30 72"
        stroke="currentColor"
        strokeWidth="3.4"
        strokeLinecap="round"
      />
      <path
        d="M50 18C50 32 30 38 30 52C30 66 50 72 50 72"
        stroke="currentColor"
        strokeWidth="3.4"
        strokeLinecap="round"
      />
      {/* Base pair connections */}
      <line x1="33" y1="26" x2="47" y2="26" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
      <line x1="33" y1="64" x2="47" y2="64" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
      <line x1="38" y1="45" x2="42" y2="45" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function MetabolismIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="w-16 h-16 text-[#5E7127]">
      {/* Torso / waist silhouette */}
      <path
        d="M28 18C28 28 24 38 24 48C24 58 26 66 26 68"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <path
        d="M52 18C52 28 56 38 56 48C56 58 54 66 54 68"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      {/* Navel dot */}
      <circle cx="40" cy="38" r="2.2" fill="currentColor" />
      {/* Briefs / pelvis outline */}
      <path
        d="M25 44C33 46 47 46 55 44"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M33 50C37 60 40 68 40 68C40 68 43 60 47 50"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

const ROOT_CAUSES = [
  {
    title: "Nutrition",
    desc: "A diet low in iron, biotin, or protein can slow down hair growth significantly.",
    icon: NutritionIcon,
  },
  {
    title: "Dandruff",
    desc: "Constant flaking and itching weaken the scalp and trigger faster hair fall.",
    icon: DandruffIcon,
  },
  {
    title: "Gut Issues",
    desc: "Bloating, acidity or weak digestion blocks nutrients to the hair and slows growth.",
    icon: GutIssuesIcon,
  },
  {
    title: "Stress",
    desc: "High stress pushes hair follicles into a resting phase, leading to excess fall.",
    icon: StressIcon,
  },
  {
    title: "Family History",
    desc: "When hair fall runs in your family, hair grows back finer and weaker over time.",
    icon: FamilyHistoryIcon,
  },
  {
    title: "Metabolism",
    desc: "When your body can't absorb nutrients well, hair becomes dry, weak, and brittle.",
    icon: MetabolismIcon,
  },
];

export default function WhyHairFallHappens() {
  return (
    <section className="relative overflow-hidden py-14 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header matching Reference Image */}
        <AnimatedSection className="max-w-3xl mb-12 sm:mb-16 text-center sm:text-left">
          <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#5E7127] mb-2 font-mono">
            ROOT CAUSES
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-[46px] font-bold text-navy-950 tracking-tight leading-tight">
            Why Hair Fall Happens —{" "}
            <span className="text-[#5E7127] block sm:inline">
              Hair health starts from within
            </span>
          </h2>

          <p className="text-base sm:text-lg text-ink-900/80 leading-relaxed mt-4 max-w-2xl">
            Hair loss is rarely just superficial. It is an internal biological signal
            of hormonal, nutritional, genetic, or digestive distress. Effective
            recovery requires pinpointing your root causes.
          </p>
        </AnimatedSection>

        {/* 6 Cards aligned into 2 rows, 3 cards each row */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          {ROOT_CAUSES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={idx} className="h-full">
                <div className="group h-full bg-[#FAF7EE] rounded-[28px] p-8 sm:p-9 border border-[#EDE7D9] flex flex-col items-center text-center justify-between shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(94,113,39,0.12)] hover:-translate-y-1.5 transition-all duration-300">
                  {/* Top Centered Icon */}
                  <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-200">
                    <Icon />
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2.5 max-w-[270px]">
                    <h3 className="font-serif text-xl sm:text-[22px] font-bold text-[#1E293B] tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#475569] leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>

                  {/* Subtle bottom indicator dot */}
                  <div className="mt-6 w-1.5 h-1.5 rounded-full bg-[#5E7127]/40 group-hover:bg-[#5E7127] transition-colors" />
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
