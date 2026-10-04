import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Microscope, Calendar } from "lucide-react";
import { CLINIC_INFO, SERVICES } from "@/lib/constants";
import { AnimatedSection } from "@/components/common/AnimatedSection";

const service = SERVICES.find((s) => s.slug === "hair-camouflage")!;

export const metadata: Metadata = {
  title: `${service.title} (Scalp Micropigmentation) | ${CLINIC_INFO.brandName}`,
  description: service.shortDesc,
};

export default function HairCamouflagePage() {
  return (
    <div className="relative">
      {/* Hero Band */}
      <section className="relative pt-16 sm:pt-20 lg:pt-24 pb-14 sm:pb-17 lg:pb-20">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-700 bg-white/90 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-sky-100 inline-block mb-4 shadow-sm">
              Non-Invasive Aesthetic
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-navy-950 mb-6 leading-tight">
              {service.title} (Scalp Micropigmentation)
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
                  Immediate 3D Follicle Simulation
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-950">
                  What is Hair Camouflage &amp; SMP?
                </h2>
                <div className="space-y-4 text-base text-ink-900 leading-relaxed pt-2">
                  <p>
                    Scalp Micropigmentation (SMP) is a specialized, medical-grade cosmetic pigmentation procedure that deposits organic micro-dots of carbon pigment into the upper dermis of the scalp.
                  </p>
                  <p>
                    For patients with diffuse thinning where the scalp reflects harsh light, SMP dramatically reduces scalp show-through, creating the visual impression of substantial thickness. For individuals with total baldness, SMP replicates a sharp, full-coverage buzz-cut appearance with zero downtime.
                  </p>
                </div>

                <div className="pt-4 flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-sm text-navy-950 font-semibold bg-ice-50 px-4 py-2 rounded-xl border border-gray-200">
                    <Microscope className="w-4 h-4 text-blue-700" />
                    <span>Exact Pigment Matching</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-navy-950 font-semibold bg-ice-50 px-4 py-2 rounded-xl border border-gray-200">
                    <ShieldCheck className="w-4 h-4 text-blue-700" />
                    <span>Non-Surgical &amp; Zero Downtime</span>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* SMP Image Placeholder */}
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
                    <p className="text-xs font-bold uppercase tracking-wider text-ice-50">Micro-Dot Precision</p>
                    <p className="text-sm font-semibold">Natural epidermal pigment integration</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* Common Applications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
            <AnimatedSection delay={0.1}>
              <div className="h-full bg-ice-50 rounded-2xl p-8 border border-gray-200">
                <h3 className="font-serif text-2xl font-bold text-navy-950 mb-4">
                  Best Suited For
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
                  Key Advantages
                </h3>
                <ul className="space-y-3 text-sm text-ink-900">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-700 flex-shrink-0 mt-0.5" />
                    <span>Instant visual results from the very first session</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-700 flex-shrink-0 mt-0.5" />
                    <span>100% hypoallergenic, non-toxic organic medical pigments</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-700 flex-shrink-0 mt-0.5" />
                    <span>No surgery, incisions, scarring, or recovery downtime</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-700 flex-shrink-0 mt-0.5" />
                    <span>Lasts 3 to 5+ years before requiring a brief touch-up</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>

          {/* Our Approach (4 Steps) */}
          <div className="my-16">
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-700 bg-ice-50 px-3.5 py-1.5 rounded-full border border-gray-200">
                Precision Process
              </span>
              <h3 className="font-serif text-3xl font-bold text-navy-950 mt-3 mb-2">
                Our 4-Stage SMP Protocol
              </h3>
              <p className="text-sm text-ink-900">
                Calibrated shade layering to replicate biological follicular shadow depth.
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
                2-Session Scalp Micropigmentation
              </h3>
              <p className="text-sm text-ink-900">
                [Patient Case — Male, 42 Years Old]. Crown scalp show-through camouflaged with seamless natural density.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full">
              <div className="relative rounded-2xl overflow-hidden border border-gray-200 bg-white aspect-[4/3] shadow-sm">
                <Image
                  src="/images/case4-before.jpg"
                  alt="Patient Case crown thinning before scalp micropigmentation"
                  width={800}
                  height={600}
                  loading="lazy"
                  className="object-cover object-top w-full h-full"
                />
                <div className="absolute top-3 left-3 bg-navy-950/80 text-white text-xs font-bold px-3 py-1 rounded-md shadow-sm">
                  BEFORE SMP
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-gray-200 bg-white aspect-[4/3] shadow-sm">
                <Image
                  src="/images/case4-after.jpg"
                  alt="Patient Case instant visual density after 2 SMP clinical sessions"
                  width={800}
                  height={600}
                  loading="lazy"
                  className="object-cover object-top w-full h-full"
                />
                <div className="absolute top-3 left-3 bg-blue-700 text-white text-xs font-bold px-3 py-1 rounded-md shadow-sm">
                  AFTER 2 SESSIONS
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
              Restore Immediate Visual Fullness
            </h2>
            <p className="text-base text-ice-50 mb-8 max-w-xl mx-auto">
              Schedule a personalized pigment matching consultation with {CLINIC_INFO.doctorName}.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact#book"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-navy-950 bg-white hover:bg-ice-50 transition-all shadow-md focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <Calendar className="w-4 h-4 text-blue-700" />
                <span>Book SMP Consultation</span>
                <ArrowRight className="w-4 h-4 text-blue-700" />
              </Link>
              <Link
                href="/results"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-blue-700 hover:bg-blue-700/90 transition-all shadow-sm focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <span>View Before/After Gallery</span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
