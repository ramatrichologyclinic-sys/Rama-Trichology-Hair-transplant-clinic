import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Microscope, Calendar } from "lucide-react";
import { CLINIC_INFO } from "@/lib/constants";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import HairFallSegmentTabs from "@/components/services/HairFallSegmentTabs";
import ScrollPullUpSection from "@/components/common/ScrollPullUpSection";

export const metadata: Metadata = {
  title: `Hair Fall Treatment & Regrowth Therapy | ${CLINIC_INFO.brandName}`,
  description: "Specialized clinical hair fall solutions for androgenetic alopecia, telogen effluvium, and diffuse thinning under Dr. Ritesh Safariya. Microscopic trichoscopic diagnosis and personalized medical therapies.",
};

export default function HairFallPage() {
  return (
    <div className="relative">
      {/* Hero Band */}
      <section className="relative pt-16 sm:pt-20 lg:pt-24 pb-9 sm:pb-10 lg:pb-12">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-700 bg-white/90 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-sky-100 inline-block mb-4 shadow-sm">
              Clinical Specialization
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-navy-950 mb-6 leading-tight">
              Hair Fall Treatment &amp; Restoration
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-ink-900 leading-relaxed">
              Targeted clinical intervention addressing the root biological drivers of hair thinning, follicle miniaturization, and excessive shedding across men, women, and adolescents.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Explainer Block */}
      <section className="pt-9 sm:pt-11 lg:pt-11 pb-16 sm:pb-20">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <AnimatedSection>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-700 bg-ice-50 px-3.5 py-1.5 rounded-full border border-gray-200 inline-block mb-3">
                  Understanding Follicular Science
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-950">
                  What is Clinical Hair Fall Treatment?
                </h2>
                <div className="space-y-4 text-base text-ink-900 leading-relaxed pt-2">
                  <p>
                    Every healthy scalp sheds between 50 to 100 hairs daily as part of the natural telogen exfoliation cycle. However, when daily shedding exceeds this threshold, or when regrowth emerges significantly thinner, follicle miniaturization is underway.
                  </p>
                  <p>
                    Unlike commercial cosmetic products that merely coat the outer cuticle, our clinical trichological treatments act at the dermal papilla level. We restore microcirculation, modulate hormonal receptors, and supply concentrated micronutrients directly to anagen-phase roots.
                  </p>
                </div>

                <div className="pt-4 flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-sm text-navy-950 font-semibold bg-ice-50 px-4 py-2 rounded-xl border border-gray-200">
                    <Microscope className="w-4 h-4 text-blue-700" />
                    <span>Digital Trichoscopy Guided</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-navy-950 font-semibold bg-ice-50 px-4 py-2 rounded-xl border border-gray-200">
                    <ShieldCheck className="w-4 h-4 text-blue-700" />
                    <span>Evidence-Backed Therapeutics</span>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Process / Treatment Image */}
            <div className="lg:col-span-5">
              <AnimatedSection delay={0.2}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-card border-4 border-ice-50 bg-ice-50">
                  <Image
                    src="/images/hair-fall-treatment-card.jpg"
                    alt="Clinical hair fall treatment and follicular science at Rama Trichology"
                    width={800}
                    height={600}
                    loading="lazy"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs font-bold uppercase tracking-wider text-ice-50">Diagnostic Scan</p>
                    <p className="text-sm font-semibold">Measuring follicle diameter and density</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* Demographic Tab Switcher (Male / Female / Kids) */}
          <HairFallSegmentTabs />

          {/* Common Causes & Who Needs This */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
            <AnimatedSection delay={0.1}>
              <div className="h-full bg-ice-50 rounded-2xl p-8 border border-gray-200">
                <h3 className="font-serif text-2xl font-bold text-navy-950 mb-4">
                  Common Root Causes
                </h3>
                <ul className="space-y-3 text-sm text-ink-900">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-700 flex-shrink-0 mt-0.5" />
                    <span>Androgenetic Alopecia (genetic crown and hairline thinning)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-700 flex-shrink-0 mt-0.5" />
                    <span>Telogen Effluvium (stress, post-illness, or nutritional crash shedding)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-700 flex-shrink-0 mt-0.5" />
                    <span>Hormonal imbalances (Thyroid disorders, PCOS, postpartum shifts)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-700 flex-shrink-0 mt-0.5" />
                    <span>Severe nutritional deficiencies in Ferritin, Vitamin D3, or Zinc</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="h-full bg-ice-50 rounded-2xl p-8 border border-gray-200">
                <h3 className="font-serif text-2xl font-bold text-navy-950 mb-4">
                  Who Needs This Clinical Evaluation
                </h3>
                <ul className="space-y-3 text-sm text-ink-900">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-700 flex-shrink-0 mt-0.5" />
                    <span>Individuals observing clumps of hair during showering or brushing</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-700 flex-shrink-0 mt-0.5" />
                    <span>Noticeable widening of the central parting or receding temples</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-700 flex-shrink-0 mt-0.5" />
                    <span>Patients who tried shampoos, oils, and home remedies without success</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-700 flex-shrink-0 mt-0.5" />
                    <span>Anyone with a family history of progressive baldness seeking early defense</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>

          {/* Our Approach (3-4 Steps) in Sapphire Scroll Pull-Up Band */}
          <ScrollPullUpSection variant="sapphire" className="rounded-3xl p-8 sm:p-12 lg:p-16 my-16 shadow-[0_-20px_50px_rgba(9,26,50,0.4)]">
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-sky-200 bg-white/15 px-3.5 py-1.5 rounded-full border border-white/20 backdrop-blur-md">
                The Protocol
              </span>
              <h3 className="font-serif text-3xl font-bold text-white mt-3 mb-2">
                Our 4-Step Treatment Approach
              </h3>
              <p className="text-sm text-sky-100/90">
                Systematic clinical workflow designed to arrest shedding and stimulate thicker hair fibers.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Digital Trichoscopy",
                  desc: "Polarized high-definition imaging of follicle counts and miniaturization ratios.",
                },
                {
                  step: "02",
                  title: "Biomarker Profiling",
                  desc: "Complete nutritional, thyroid, and metabolic blood test cross-examination.",
                },
                {
                  step: "03",
                  title: "Therapeutic Regimen",
                  desc: "Prescription topical/oral medication paired with customized in-clinic scalp infusions.",
                },
                {
                  step: "04",
                  title: "Quarterly Monitoring",
                  desc: "Follow-up photographic scans every 90 days to verify tangible caliber gains.",
                },
              ].map((step, idx) => (
                <AnimatedSection key={idx} delay={idx * 0.1}>
                  <div className="h-full bg-white/95 backdrop-blur-md rounded-2xl p-6 border border-white/40 shadow-xl">
                    <span className="font-serif text-3xl font-bold text-navy-950 block mb-3">
                      {step.step}
                    </span>
                    <h4 className="font-serif text-lg font-bold text-navy-950 mb-2">
                      {step.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-ink-900 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </ScrollPullUpSection>

          {/* Before/After Case Showcase */}
          <div className="my-16 bg-ice-50 rounded-3xl p-6 sm:p-10 border border-gray-200">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-white px-3 py-1 rounded-full border border-gray-200">
                Documented Case
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950 mt-3 mb-2">
                4-Month Clinical Regrowth Case
              </h3>
              <p className="text-sm text-ink-900">
                [Patient Case — Male, 31 Years Old, Grade II Crown Thinning]. Stabilized with targeted medical therapy and peptide infusions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full">
              <div className="relative rounded-2xl overflow-hidden border border-gray-200 bg-white aspect-[4/3] shadow-sm">
                <Image
                  src="/images/hair-fall-case-before.jpg"
                  alt="Patient Case crown thinning before clinical hair fall treatment"
                  width={800}
                  height={600}
                  loading="lazy"
                  className="object-cover object-top w-full h-full"
                />
                <div className="absolute top-3 left-3 bg-navy-950/80 text-white text-xs font-bold px-3 py-1 rounded-md shadow-sm">
                  BEFORE TREATMENT
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-gray-200 bg-white aspect-[4/3] shadow-sm">
                <Image
                  src="/images/hair-fall-case-after.jpg"
                  alt="Patient Case visible crown coverage and regrowth after 4 months"
                  width={800}
                  height={600}
                  loading="lazy"
                  className="object-cover object-top w-full h-full"
                />
                <div className="absolute top-3 left-3 bg-blue-700 text-white text-xs font-bold px-3 py-1 rounded-md shadow-sm">
                  AFTER 4 MONTHS
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="bg-navy-950 text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
              Stop Guessing. Discover Your True Root Cause.
            </h2>
            <p className="text-base text-ice-50 mb-8 max-w-xl mx-auto">
              Schedule your comprehensive trichoscopy assessment with {CLINIC_INFO.doctorName} or take our free 3-minute quiz.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact#book"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-navy-950 bg-white hover:bg-ice-50 transition-all shadow-md focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <Calendar className="w-4 h-4 text-blue-700" />
                <span>Book Consultation</span>
                <ArrowRight className="w-4 h-4 text-blue-700" />
              </Link>
              <Link
                href="/assessment"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-blue-700 hover:bg-blue-700/90 transition-all shadow-sm focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <span>Free Hair Health Quiz</span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
