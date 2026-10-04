import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck } from "lucide-react";
import { SERVICES, CLINIC_INFO } from "@/lib/constants";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/common/AnimatedSection";

export const metadata: Metadata = {
  title: `Clinical Services Overview | ${CLINIC_INFO.brandName}`,
  description: "Explore our comprehensive clinical trichology services including medical hair fall therapy, scalp disease treatments, advanced hair transplants, SMP camouflage, and medical hair systems.",
};

const SERVICE_ALT_TEXTS: Record<string, string> = {
  "hair-fall": "Hair fall treatment at Rama Trichology",
  "hair-scalp-diseases": "Trichoscopic examination and medical therapy for hair and scalp diseases at Rama Trichology",
  "hair-transplant": "Advanced follicular unit hair transplant procedure at Rama Trichology",
  "hair-camouflage": "Medical grade scalp micropigmentation equipment and hairline camouflage at Rama Trichology",
  "wigs-extensions": "Custom-fitted medical hair system fitment and styling at Rama Trichology",
};

export default function ServicesPage() {
  return (
    <div className="relative">
      {/* Page Hero */}
      <section className="relative pt-16 sm:pt-20 lg:pt-24 pb-10 sm:pb-13 lg:pb-16">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-700 bg-white/90 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-sky-100 inline-block mb-4 shadow-sm">
              Clinical Specializations
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-navy-950 mb-6 leading-tight">
              Medical Hair &amp; Scalp Treatments
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-ink-900 leading-relaxed">
              Every scalp is unique. Our clinical care combines microscopic diagnosis with evidence-based pharmaceutical, regenerative, and aesthetic restorative therapies.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services List Detailed Cards */}
      <section className="pt-11 sm:pt-13 lg:pt-15 pb-12 sm:pb-14 lg:pb-18">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 lg:space-y-24">
            {SERVICES.map((service, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <div
                  key={service.slug}
                  id={service.slug}
                  className="scroll-mt-28"
                >
                  <AnimatedSection delay={0.1}>
                    <div className="bg-white rounded-3xl border border-gray-200 shadow-soft overflow-hidden">
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-8 lg:p-12">
                        {/* Image Placeholder */}
                        <div
                          className={`lg:col-span-5 ${
                            isEven ? "lg:order-2" : "lg:order-1"
                          }`}
                        >
                          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-gray-200 bg-ice-50 shadow-sm">
                            <Image
                              src={service.placeholderImage}
                              alt={
                                SERVICE_ALT_TEXTS[service.slug] ||
                                `${service.title} at Rama Trichology`
                              }
                              width={800}
                              height={600}
                              loading="lazy"
                              className="object-cover w-full h-full"
                            />
                            <div className="absolute top-3 left-3 bg-navy-950/80 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">
                              Pillar 0{idx + 1}
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <div
                          className={`lg:col-span-7 space-y-6 ${
                            isEven ? "lg:order-1" : "lg:order-2"
                          }`}
                        >
                          <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-ice-50 px-3 py-1 rounded-full border border-gray-200 inline-block mb-3">
                              Clinical Specialization
                            </span>
                            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-950">
                              {service.title}
                            </h2>
                            <p className="text-sm sm:text-base text-ink-900 mt-3 leading-relaxed">
                              {service.fullDesc}
                            </p>
                          </div>

                          {/* Key causes or indicators */}
                          <div>
                            <h4 className="text-xs font-bold uppercase tracking-wider text-navy-950 mb-3">
                              Common Diagnostic Indicators:
                            </h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-ink-900">
                              {service.causes.slice(0, 4).map((cause, cIdx) => (
                                <li key={cIdx} className="flex items-start gap-2">
                                  <CheckCircle2 className="w-4 h-4 text-blue-700 flex-shrink-0 mt-0.5" />
                                  <span>{cause}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* CTA button */}
                          <div className="pt-2 flex flex-wrap items-center gap-4">
                            <Link
                              href={`/services/${service.slug}`}
                              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-blue-700 hover:bg-navy-950 active:scale-95 transition-all shadow-sm focus-visible:ring-2 focus-visible:ring-blue-400 text-sm"
                            >
                              <span>Explore Full Protocol</span>
                              <ArrowRight className="w-4 h-4" />
                            </Link>

                            <Link
                              href="/contact#book"
                              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-navy-950 bg-ice-50 hover:bg-gray-100 border border-gray-200 active:scale-95 transition-all focus-visible:ring-2 focus-visible:ring-blue-400 text-sm"
                            >
                              <span>Book Consultation</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AnimatedSection>
                </div>
              );
            })}
          </div>

          {/* 
            // TODO: v2 - Treatment selector / condition-matcher interactive table
            // will be implemented in v2 pass after client sign-off.
          */}
        </div>
      </section>

      {/* Free Quiz Promo Banner */}
      <section className="relative pt-12 pb-16 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-gray-200 text-xs font-semibold text-blue-700 mb-4 shadow-sm">
              <Sparkles className="w-4 h-4" />
              <span>Not Sure Which Treatment You Need?</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-950 mb-4">
              Take Our Free 3-Minute Hair Health Assessment
            </h2>
            <p className="text-base text-ink-900 mb-8 max-w-xl mx-auto">
              Answer 6 quick questions regarding your shedding duration, scalp symptoms, and genetics for an instant rule-based recommendation.
            </p>
            <Link
              href="/assessment"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white bg-blue-700 hover:bg-navy-950 active:scale-95 transition-all shadow-md focus-visible:ring-2 focus-visible:ring-blue-400 text-base"
            >
              <span>Start Free Assessment Quiz</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
