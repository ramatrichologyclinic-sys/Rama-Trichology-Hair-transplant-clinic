import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, HeartHandshake, Calendar } from "lucide-react";
import { CLINIC_INFO, SERVICES } from "@/lib/constants";
import { AnimatedSection } from "@/components/common/AnimatedSection";

const service = SERVICES.find((s) => s.slug === "wigs-extensions")!;

export const metadata: Metadata = {
  title: `${service.title} | ${CLINIC_INFO.brandName}`,
  description: service.shortDesc,
};

export default function WigsExtensionsPage() {
  return (
    <div className="relative">
      {/* Hero Band */}
      <section className="relative pt-16 sm:pt-20 lg:pt-24 pb-14 sm:pb-17 lg:pb-20">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-700 bg-white/90 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-sky-100 inline-block mb-4 shadow-sm">
              Cranial Prostheses
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-navy-950 mb-6 leading-tight">
              {service.title} (Medical Hair Systems)
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-ink-900 leading-relaxed">
              {service.shortDesc}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Explainer Block */}
      <section className="pt-14 sm:pt-17 pb-16 sm:pb-20">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <AnimatedSection>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-700 bg-ice-50 px-3.5 py-1.5 rounded-full border border-gray-200 inline-block mb-3">
                  Medical-Grade Cranial Prosthetics
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-950">
                  What Are Clinical Hair Systems?
                </h2>
                <div className="space-y-4 text-base text-ink-900 leading-relaxed pt-2">
                  <p>
                    Unlike synthetic commercial wigs that trap heat, cause friction, and irritate sensitive scalp tissue, medical cranial prostheses are individually sculpted using ultra-fine breathable bio-membranes and hand-ventilated 100% human Remy hair.
                  </p>
                  <p>
                    Under our clinical guidance, each system is measured to your unique cranial contour, ensuring secure attachment that allows active sports, showering, and daily life while preserving the underlying scalp ecosystem.
                  </p>
                </div>

                <div className="pt-4 flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-sm text-navy-950 font-semibold bg-ice-50 px-4 py-2 rounded-xl border border-gray-200">
                    <HeartHandshake className="w-4 h-4 text-blue-700" />
                    <span>Hypoallergenic &amp; Breathable</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-navy-950 font-semibold bg-ice-50 px-4 py-2 rounded-xl border border-gray-200">
                    <ShieldCheck className="w-4 h-4 text-blue-700" />
                    <span>100% Remy Natural Human Hair</span>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Hair System Image Placeholder */}
            <div className="lg:col-span-5">
              <AnimatedSection delay={0.2}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-card border-4 border-ice-50 bg-ice-50">
                  <Image
                    src={service.placeholderImage}
                    alt={`Placeholder: ${service.title}`}
                    width={800}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs font-bold uppercase tracking-wider text-ice-50">Custom Cranial Fit</p>
                    <p className="text-sm font-semibold">Undetectable hairline transition</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* Candidacy & Causes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
            <AnimatedSection delay={0.1}>
              <div className="h-full bg-ice-50 rounded-2xl p-8 border border-gray-200">
                <h3 className="font-serif text-2xl font-bold text-navy-950 mb-4">
                  Clinical Indications
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
                  Why Choose Medical Systems
                </h3>
                <ul className="space-y-3 text-sm text-ink-900">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-700 flex-shrink-0 mt-0.5" />
                    <span>Dermatologically tested medical adhesives safe for fragile skin</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-700 flex-shrink-0 mt-0.5" />
                    <span>Breathable micro-pore lace base allows moisture and heat release</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-700 flex-shrink-0 mt-0.5" />
                    <span>Private styling and customized cut-in consultation suites</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-700 flex-shrink-0 mt-0.5" />
                    <span>Empathetic, discrete guidance for chemotherapy and alopecia patients</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>

          {/* Our Approach (4 Steps) */}
          <div className="my-16">
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-700 bg-ice-50 px-3.5 py-1.5 rounded-full border border-gray-200">
                Bespoke Fitting
              </span>
              <h3 className="font-serif text-3xl font-bold text-navy-950 mt-3 mb-2">
                Our 4-Stage Custom Protocol
              </h3>
              <p className="text-sm text-ink-900">
                From precision scalp molding to seamless cut-in styling.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.approachSteps.map((step, idx) => (
                <AnimatedSection key={idx} delay={idx * 0.1}>
                  <div className="h-full bg-white rounded-2xl p-6 border border-gray-200 shadow-soft">
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
          </div>

          {/* Case Showcase */}
          <div className="my-16 bg-ice-50 rounded-3xl p-6 sm:p-10 border border-gray-200">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-white px-3 py-1 rounded-full border border-gray-200">
                Documented Case
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950 mt-3 mb-2">
                Custom Cranial Prosthesis Fit
              </h3>
              <p className="text-sm text-ink-900">
                [Patient Case — Female, 36 Years Old, Total Scarring Alopecia]. Undetectable full human hair system integration.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full">
              <div className="relative rounded-2xl overflow-hidden border border-gray-200 bg-white aspect-[4/3] shadow-sm">
                <Image
                  src="/images/wigs-extensions-case-before.jpg"
                  alt="Female patient before cranial prosthesis fitting showing extensive thinning"
                  width={800}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  className="object-cover object-top w-full h-full"
                />
                <div className="absolute top-3 left-3 bg-navy-950/80 text-white text-xs font-bold px-3 py-1 rounded-md shadow-sm">
                  BEFORE FITTING
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-gray-200 bg-white aspect-[4/3] shadow-sm">
                <Image
                  src="/images/wigs-extensions-case-after.png"
                  alt="Female patient after custom cranial prosthesis hair system fitting showing full natural coverage"
                  width={800}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  className="object-cover object-top w-full h-full"
                />
                <div className="absolute top-3 left-3 bg-blue-700 text-white text-xs font-bold px-3 py-1 rounded-md shadow-sm">
                  AFTER CUSTOM FIT
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
              Discrete, Private Consultation
            </h2>
            <p className="text-base text-ice-50 mb-8 max-w-xl mx-auto">
              Schedule an empathetic consultation in our private clinical suite to explore custom medical hair systems.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact#book"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-navy-950 bg-white hover:bg-ice-50 transition-all shadow-md focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <Calendar className="w-4 h-4 text-blue-700" />
                <span>Book Private Consultation</span>
                <ArrowRight className="w-4 h-4 text-blue-700" />
              </Link>
              <Link
                href="/results"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-blue-700 hover:bg-blue-700/90 transition-all shadow-sm focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <span>View More Patient Cases</span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
