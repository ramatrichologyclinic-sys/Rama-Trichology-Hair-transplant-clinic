import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Microscope, Calendar } from "lucide-react";
import { CLINIC_INFO, SERVICES } from "@/lib/constants";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import ScrollPullUpSection from "@/components/common/ScrollPullUpSection";

const service = SERVICES.find((s) => s.slug === "hair-scalp-diseases")!;

export const metadata: Metadata = {
  title: `${service.title} | ${CLINIC_INFO.brandName}`,
  description: service.shortDesc,
};

export default function ScalpDiseasesPage() {
  return (
    <div className="relative">
      {/* Hero Band */}
      <section className="relative pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-14 lg:pb-16">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-700 bg-white/90 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-sky-100 inline-block mb-4 shadow-sm">
              Clinical Specialization
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-navy-950 mb-6 leading-tight">
              {service.title}
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-ink-900 leading-relaxed">
              {service.shortDesc}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Explainer Block */}
      <section className="pt-12 sm:pt-14 pb-16 sm:pb-20">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <AnimatedSection>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-700 bg-ice-50 px-3.5 py-1.5 rounded-full border border-gray-200 inline-block mb-3">
                  Scalp Dermatology
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-950">
                  What Are Hair &amp; Scalp Diseases?
                </h2>
                <div className="space-y-4 text-base text-ink-900 leading-relaxed pt-2">
                  <p>
                    A diseased or inflamed scalp cannot sustain healthy hair growth. Scalp disorders such as severe seborrheic dermatitis, scalp psoriasis, folliculitis, and alopecia areata cause chronic epidermal disruption that constricts blood supply to the hair matrix and causes accelerated shedding.
                  </p>
                  <p>
                    Standard anti-dandruff retail shampoos often strip natural lipids, worsening the rebound overproduction of sebum and aggravating the fungal biome. Our medical approach restores the delicate epidermal barrier through prescription antimicrobials, anti-inflammatories, and pH-balancing protocols.
                  </p>
                </div>

                <div className="pt-4 flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-sm text-navy-950 font-semibold bg-ice-50 px-4 py-2 rounded-xl border border-gray-200">
                    <Microscope className="w-4 h-4 text-blue-700" />
                    <span>Microbial &amp; Epidermal Profiling</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-navy-950 font-semibold bg-ice-50 px-4 py-2 rounded-xl border border-gray-200">
                    <ShieldCheck className="w-4 h-4 text-blue-700" />
                    <span>Barrier-Restoring Medical Care</span>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Process / Scalp Diagnosis Image */}
            <div className="lg:col-span-5">
              <AnimatedSection delay={0.2}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-card border-4 border-ice-50 bg-ice-50">
                  <Image
                    src={service.placeholderImage}
                    alt="Trichoscopic scalp examination and medical therapy at Rama Trichology"
                    width={800}
                    height={600}
                    loading="lazy"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs font-bold uppercase tracking-wider text-ice-50">Trichoscopy Examination</p>
                    <p className="text-sm font-semibold">Identifying fungal plaques and vascular inflammation</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* Common Causes & Who Needs This */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
            <AnimatedSection delay={0.1}>
              <div className="h-full bg-ice-50 rounded-2xl p-8 border border-gray-200">
                <h3 className="font-serif text-2xl font-bold text-navy-950 mb-4">
                  Conditions Diagnosed &amp; Treated
                </h3>
                <ul className="space-y-3 text-sm text-ink-900">
                  {service.causes.map((cause, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-700 flex-shrink-0 mt-0.5" />
                      <span>{cause}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="h-full bg-ice-50 rounded-2xl p-8 border border-gray-200">
                <h3 className="font-serif text-2xl font-bold text-navy-950 mb-4">
                  Who Needs This Evaluation
                </h3>
                <ul className="space-y-3 text-sm text-ink-900">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-700 flex-shrink-0 mt-0.5" />
                    <span>Persistent scalp itching, burning, soreness, or redness</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-700 flex-shrink-0 mt-0.5" />
                    <span>Thick greasy or silvery flakes that return immediately after washing</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-700 flex-shrink-0 mt-0.5" />
                    <span>Sudden round, smooth coin-sized patches of hair loss (Alopecia Areata)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-700 flex-shrink-0 mt-0.5" />
                    <span>Painful pimples, pustules, or scabs around follicle roots</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>

          {/* Clinical Pathway in Sapphire Scroll Pull-Up Band */}
          <ScrollPullUpSection variant="sapphire" className="rounded-3xl p-8 sm:p-12 lg:p-16 my-16 shadow-[0_-20px_50px_rgba(9,26,50,0.4)]">
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-sky-200 bg-white/15 px-3.5 py-1.5 rounded-full border border-white/20 backdrop-blur-md">
                Clinical Pathway
              </span>
              <h3 className="font-serif text-3xl font-bold text-white mt-3 mb-2">
                Our Scalp Recovery Approach
              </h3>
              <p className="text-sm text-sky-100/90">
                Four phases to eradicate pathogens, calm inflammation, and restore follicle vitality.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.approachSteps.map((step, idx) => (
                <AnimatedSection key={idx} delay={idx * 0.1}>
                  <div className="h-full bg-white/95 backdrop-blur-md rounded-2xl p-6 border border-white/40 shadow-xl">
                    <span className="font-serif text-3xl font-bold text-navy-950 block mb-3">
                      0{idx + 1}
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

          {/* Case Showcase */}
          <div className="my-16 bg-ice-50 rounded-3xl p-6 sm:p-10 border border-gray-200">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-white px-3 py-1 rounded-full border border-gray-200">
                Documented Case
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950 mt-3 mb-2">
                6-Week Seborrheic Scalp Resolution
              </h3>
              <p className="text-sm text-ink-900">
                [Patient Case — Female, 28 Years Old]. Severe itching, heavy erythema, and sticky follicular flakes fully cleared.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full">
              <div className="relative rounded-2xl overflow-hidden border border-gray-200 bg-white aspect-[4/3] shadow-sm">
                <Image
                  src="/images/scalp-disease-case-before.jpg"
                  alt="Patient scalp with severe seborrheic dermatitis before therapy"
                  width={800}
                  height={600}
                  loading="lazy"
                  className="object-cover object-top w-full h-full"
                />
                <div className="absolute top-3 left-3 bg-navy-950/80 text-white text-xs font-bold px-3 py-1 rounded-md shadow-sm">
                  BEFORE THERAPY
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-gray-200 bg-white aspect-[4/3] shadow-sm">
                <Image
                  src="/images/scalp-disease-case-after.jpg"
                  alt="Patient scalp completely cleared of dermatitis and flakes after 6 weeks"
                  width={800}
                  height={600}
                  loading="lazy"
                  className="object-cover object-top w-full h-full"
                />
                <div className="absolute top-3 left-3 bg-blue-700 text-white text-xs font-bold px-3 py-1 rounded-md shadow-sm">
                  AFTER 6 WEEKS
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
              Eliminate Scalp Discomfort Permanently
            </h2>
            <p className="text-base text-ice-50 mb-8 max-w-xl mx-auto">
              Get an accurate dermatological assessment from {CLINIC_INFO.doctorName} to soothe irritation and protect your follicles.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact#book"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-navy-950 bg-white hover:bg-ice-50 transition-all shadow-md focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <Calendar className="w-4 h-4 text-blue-700" />
                <span>Book Clinical Examination</span>
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
