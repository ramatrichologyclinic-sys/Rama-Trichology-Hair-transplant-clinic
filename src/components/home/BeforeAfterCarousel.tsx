import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/common/AnimatedSection";

export const SAMPLE_CASES = [
  {
    id: "case-1",
    title: "Androgenetic Alopecia (Crown Thinning)",
    patient: "[Patient Case 1]",
    timeline: "4 Months of Clinical Regimen",
    beforeImage: "/images/case1-before.jpg",
    afterImage: "/images/case1-after.jpg",
    notes: "Documented 38% increase in follicular unit density and visible crown coverage.",
  },
  {
    id: "case-2",
    title: "Seborrheic Dermatitis & Scalp Scaling",
    patient: "[Patient Case 2]",
    timeline: "6 Weeks of Targeted Therapy",
    beforeImage: "/images/case2-before.jpg",
    afterImage: "/images/case2-after.jpg",
    notes: "Eradication of Malassezia flaking, inflammation, and follicular erythema.",
  },
  {
    id: "case-3",
    title: "Micro-FUE Hairline Restoration",
    patient: "[Patient Case 3]",
    timeline: "9 Months Post-Procedure",
    beforeImage: "/images/case3-before.jpg",
    afterImage: "/images/case3-after.jpg",
    notes: "Natural temporal peak alignment and dense aesthetic hairline framing.",
  },
  {
    id: "case-4",
    title: "Scalp Micropigmentation (SMP)",
    patient: "[Patient Case 4]",
    timeline: "2 Clinical Sessions",
    beforeImage: "/images/case4-before.jpg",
    afterImage: "/images/case4-after.jpg",
    notes: "Instant 3D visual density camouflaging diffuse crown thinning without downtime.",
  },
];

interface BeforeAfterCarouselProps {
  variant?: "default" | "sapphire";
}

export default function BeforeAfterCarousel({ variant = "sapphire" }: BeforeAfterCarouselProps) {
  const isSapphire = variant === "sapphire";

  return (
    <section className="relative py-13 sm:py-16 lg:py-20">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <span
              className={`text-xs sm:text-sm font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full ${
                isSapphire
                  ? "bg-white/15 text-sky-200 border border-white/20 backdrop-blur-md"
                  : "text-blue-700 bg-ice-50 border border-gray-200"
              }`}
            >
              Clinical Results
            </span>
            <h2
              className={`font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-3 ${
                isSapphire ? "text-white" : "text-navy-950"
              }`}
            >
              Documented Transformations
            </h2>
            <p
              className={`text-base sm:text-lg leading-relaxed ${
                isSapphire ? "text-sky-100/90" : "text-ink-900"
              }`}
            >
              Real clinical progression verified through standardized digital photography and trichoscopic folli-metric comparisons.
            </p>
          </div>

          <Link
            href="/results"
            className={`inline-flex items-center gap-2 text-sm font-bold transition-colors focus-visible:ring-2 focus-visible:ring-blue-400 rounded-md py-1 ${
              isSapphire ? "text-sky-300 hover:text-white" : "text-blue-700 hover:text-navy-950"
            }`}
          >
            <span>View All Clinical Cases</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>

        {/* Grid of Before / After Cases */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {SAMPLE_CASES.map((item) => (
            <StaggerItem key={item.id}>
              <div className="bg-ice-50 rounded-2xl p-6 sm:p-7 border border-gray-200 shadow-soft hover:shadow-card transition-all flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-white px-3 py-1 rounded-full border border-gray-200">
                      {item.patient}
                    </span>
                    <span className="text-xs font-semibold text-ink-900 flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-blue-700" />
                      {item.timeline}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-navy-950 mb-5">
                    {item.title}
                  </h3>

                  {/* Before / After Images Side by Side */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4">
                    {/* Before Image */}
                    <div className="relative rounded-xl overflow-hidden border border-gray-200 bg-white">
                      <div className="relative aspect-square">
                        <Image
                          src={item.beforeImage}
                          alt={`${item.patient.replace(/\[|\]/g, "")} before treatment`}
                          width={400}
                          height={400}
                          loading="lazy"
                          className="object-cover object-top w-full h-full"
                        />
                      </div>
                      <div className="absolute top-2 left-2 bg-navy-950/80 backdrop-blur-sm text-white text-[11px] font-bold px-2 py-0.5 rounded">
                        BEFORE
                      </div>
                    </div>

                    {/* After Image */}
                    <div className="relative rounded-xl overflow-hidden border border-gray-200 bg-white">
                      <div className="relative aspect-square">
                        <Image
                          src={item.afterImage}
                          alt={`${item.patient.replace(/\[|\]/g, "")} after treatment`}
                          width={400}
                          height={400}
                          loading="lazy"
                          className="object-cover object-top w-full h-full"
                        />
                      </div>
                      <div className="absolute top-2 left-2 bg-blue-700 text-white text-[11px] font-bold px-2 py-0.5 rounded">
                        AFTER
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-200/80 text-xs text-ink-900 leading-relaxed">
                  <strong className="text-navy-950 font-semibold">Outcome: </strong>
                  {item.notes}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
