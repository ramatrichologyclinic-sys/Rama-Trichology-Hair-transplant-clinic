"use client";

import {
  StaggerContainer,
  StaggerItem,
  AnimatedSection,
} from "@/components/common/AnimatedSection";

// Custom SVG Icons matching Reference Images (Olive green line art style)
function NutritionIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="w-7 h-7 sm:w-9 sm:h-9 text-current">
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
    <svg viewBox="0 0 80 80" fill="none" className="w-7 h-7 sm:w-9 sm:h-9 text-current">
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
    <svg viewBox="0 0 80 80" fill="none" className="w-7 h-7 sm:w-9 sm:h-9 text-current">
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
    <svg viewBox="0 0 80 80" fill="none" className="w-7 h-7 sm:w-9 sm:h-9 text-current">
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
    <svg viewBox="0 0 80 80" fill="none" className="w-7 h-7 sm:w-9 sm:h-9 text-current">
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
    <svg viewBox="0 0 80 80" fill="none" className="w-7 h-7 sm:w-9 sm:h-9 text-current">
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

function SystemicDiseasesIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="w-7 h-7 sm:w-9 sm:h-9 text-current">
      <path
        d="M40 64S18 48 18 32C18 24 24 18 32 18C36 18 39 20 40 22C41 20 44 18 48 18C56 18 62 24 62 32C62 48 40 64 40 64Z"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26 36H33L37 28L43 44L47 36H54"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MedicationsIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="w-7 h-7 sm:w-9 sm:h-9 text-current">
      <rect
        x="24"
        y="36"
        width="40"
        height="18"
        rx="9"
        transform="rotate(-45 24 36)"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <line
        x1="33"
        y1="40"
        x2="45"
        y2="28"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="58" cy="54" r="8" stroke="currentColor" strokeWidth="2.8" />
      <line x1="53" y1="54" x2="63" y2="54" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
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
  {
    title: "Systemic Diseases",
    desc: "Thyroid imbalances, chronic anemia, or autoimmune disorders directly disrupt follicle cycling.",
    icon: SystemicDiseasesIcon,
  },
  {
    title: "Few Medications",
    desc: "Certain prescription drugs, antihypertensives, or hormonal treatments can trigger sudden telogen shedding.",
    icon: MedicationsIcon,
  },
];

export default function WhyHairFallHappens() {
  return (
    <section className="relative overflow-hidden py-14 sm:py-20 lg:py-24 bg-gradient-to-b from-sky-50/50 via-white to-sky-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <AnimatedSection className="max-w-3xl mb-10 sm:mb-14 text-center sm:text-left">
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

        {/* 8 Cards: 4 cards per row on laptop (lg:grid-cols-4), 2 cards per row on mobile/tablet (grid-cols-2) */}
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5 lg:gap-6 items-stretch">
          {ROOT_CAUSES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={idx} className="h-full">
                <div className="group h-full bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-7 border border-sky-100 shadow-[0_4px_20px_rgba(2,132,199,0.06)] hover:shadow-[0_14px_32px_rgba(2,132,199,0.18)] hover:border-sky-300 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center justify-between">
                  {/* Top Centered Icon with subtle blue styling */}
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-sky-50 text-[#007baa] border border-sky-100/80 flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-105 group-hover:bg-[#007baa] group-hover:text-white transition-all duration-300 shadow-xs">
                    <Icon />
                  </div>

                  {/* Title & Description with larger font */}
                  <div className="space-y-1.5 sm:space-y-2.5 max-w-[270px]">
                    <h3 className="font-serif text-base sm:text-xl lg:text-[22px] font-bold text-navy-950 tracking-tight group-hover:text-[#007baa] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs lg:text-sm text-slate-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>

                  {/* Subtle bottom indicator dot */}
                  <div className="mt-3 sm:mt-5 w-1.5 h-1.5 rounded-full bg-sky-300 group-hover:bg-[#007baa] transition-colors" />
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
