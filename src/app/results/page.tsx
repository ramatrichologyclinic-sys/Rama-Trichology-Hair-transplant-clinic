import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, AlertCircle } from "lucide-react";
import { CLINIC_INFO } from "@/lib/constants";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/common/AnimatedSection";

export const metadata: Metadata = {
  title: `Before & After Clinical Results Gallery | ${CLINIC_INFO.brandName}`,
  description: "View real documented patient transformations across hair fall stabilization, scalp disease treatments, hair transplants, and scalp micropigmentation under Dr. Ritesh Safariya.",
};

interface ResultCase {
  id: string;
  category: string;
  patientToken: string;
  title: string;
  timeline: string;
  beforeImg: string;
  afterImg: string;
  outcome: string;
}

const ALL_CASES: ResultCase[] = [
  {
    id: "case-1",
    category: "Hair Fall Treatment",
    patientToken: "[Patient Case 1]",
    title: "Androgenetic Crown Thinning (Grade II)",
    timeline: "4 Months of Clinical Regimen",
    beforeImg: "/images/case1-before.webp",
    afterImg: "/images/case1-after.webp",
    outcome: "Marked follicle diameter increase and 38% increase in hair density across the crown vertex.",
  },
  {
    id: "case-2",
    category: "Scalp Diseases",
    patientToken: "[Patient Case 2]",
    title: "Severe Seborrheic Dermatitis & Erythema",
    timeline: "6 Weeks of Targeted Therapy",
    beforeImg: "/images/scalp-disease-case-before.webp",
    afterImg: "/images/scalp-disease-case-after.webp",
    outcome: "Complete clearance of adherent greasy plaques, cessation of scalp pruritus, and restored barrier.",
  },
  {
    id: "case-3",
    category: "Hair Transplant",
    patientToken: "[Patient Case 3]",
    title: "Micro-FUE Frontal Hairline Restoration",
    timeline: "9 Months Post-Procedure",
    beforeImg: "/images/case2-before.webp",
    afterImg: "/images/case2-after.webp",
    outcome: "2,400 follicular unit grafts successfully grown with high density and natural temple contouring.",
  },
  {
    id: "case-4",
    category: "Hair Camouflage",
    patientToken: "[Patient Case 4]",
    title: "Scalp Micropigmentation (SMP) Fullness",
    timeline: "2 Clinical Sessions",
    beforeImg: "/images/case3-before.webp",
    afterImg: "/images/case3-after.webp",
    outcome: "Elimination of scalp show-through under direct overhead light via precise microscopic dotting.",
  },
  {
    id: "case-5",
    category: "Hair Fall Treatment",
    patientToken: "[Patient Case 5]",
    title: "Female Diffuse Telogen Effluvium",
    timeline: "5 Months of Multi-Factor Care",
    beforeImg: "/images/hair-fall-case-before.webp",
    afterImg: "/images/hair-fall-case-after.webp",
    outcome: "Parting line width reduced by 50% following corrected ferritin levels and topical peptide therapy.",
  },
  {
    id: "case-6",
    category: "Wigs & Extensions",
    patientToken: "[Patient Case 6]",
    title: "Medical Cranial Prosthesis Custom Fit",
    timeline: "Immediate Restoration",
    beforeImg: "/images/wigs-extensions-case-before.webp",
    afterImg: "/images/wigs-extensions-case-after.webp",
    outcome: "Undetectable human hair cranial integration providing complete coverage and comfort.",
  },
];

export default function ResultsPage() {
  return (
    <div className="relative">
      {/* Page Hero */}
      <section className="relative pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-10 lg:pb-12">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-700 bg-white/90 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-sky-100 inline-block mb-4 shadow-sm">
              Clinical Evidence
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-navy-950 mb-6 leading-tight">
              Before &amp; After Clinical Gallery
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-ink-900 leading-relaxed">
              Standardized photographic records demonstrating measurable follicle recovery, scalp healing, and hairline restoration.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* 
        // TODO: v2 - Filterable-by-category gallery UI and patient-age fields
        // will be added in v2 pass after client sign-off.
      */}

      {/* Unfiltered Simple Case Grid for V1 */}
      <section className="pt-8 sm:pt-10 lg:pt-12 pb-12 sm:pb-14 lg:pb-16">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ALL_CASES.map((item) => (
              <StaggerItem key={item.id}>
                <div className="bg-ice-50 rounded-2xl p-6 border border-gray-200 shadow-soft hover:shadow-card transition-all flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-white px-3 py-1 rounded-full border border-gray-200">
                        {item.patientToken}
                      </span>
                      <span className="text-xs font-semibold text-ink-900 flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5 text-blue-700" />
                        {item.timeline}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg font-bold text-navy-950 mb-4">
                      {item.title}
                    </h3>

                    {/* Side-by-side Before/After */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="relative rounded-xl overflow-hidden border border-gray-200 bg-white aspect-square">
                        <Image
                          src={item.beforeImg}
                          alt={`${item.title} - Before Treatment`}
                          width={400}
                          height={400}
                          loading="lazy"
                          decoding="async"
                          className="object-cover w-full h-full"
                        />
                        <div className="absolute top-2 left-2 bg-navy-950/80 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                          BEFORE
                        </div>
                      </div>

                      <div className="relative rounded-xl overflow-hidden border border-gray-200 bg-white aspect-square">
                        <Image
                          src={item.afterImg}
                          alt={`${item.title} - After Treatment`}
                          width={400}
                          height={400}
                          loading="lazy"
                          decoding="async"
                          className="object-cover w-full h-full"
                        />
                        <div className="absolute top-2 left-2 bg-blue-700 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                          AFTER
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-gray-200 text-xs text-ink-900 leading-relaxed">
                    <strong className="text-navy-950 font-semibold">Clinical Note: </strong>
                    {item.outcome}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Medical Disclaimer */}
          <div className="mt-10 sm:mt-12 bg-white border border-gray-200 rounded-2xl p-6 flex items-start gap-4 shadow-sm max-w-3xl mx-auto">
            <AlertCircle className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-ink-900 leading-relaxed">
              <strong className="text-navy-950 font-bold block mb-1">Standard Medical Disclaimer:</strong>
              Individual biological outcomes vary depending on degree of follicle miniaturization, age, medical history, compliance with topical and nutritional regimens, and underlying genetic predisposition. All photographic records presented are unretouched and taken under standardized polarizing clinical lighting.
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative pt-10 sm:pt-12 pb-14 sm:pb-18 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-950 mb-4">
              Begin Your Own Transformation
            </h2>
            <p className="text-base text-ink-900 mb-8 max-w-xl mx-auto">
              Book a consultation with {CLINIC_INFO.doctorName} to diagnose your scalp under digital magnification and set realistic recovery targets.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact#book"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white bg-blue-700 hover:bg-navy-950 transition-all shadow-sm focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <span>Book Doctor Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/assessment"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-navy-950 bg-white hover:bg-gray-50 border border-gray-200 transition-all focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <span>Take Free Assessment</span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
