import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, GraduationCap, Microscope, ShieldCheck, CheckCircle2 } from "lucide-react";
import { CLINIC_INFO } from "@/lib/constants";
import { AnimatedSection } from "@/components/common/AnimatedSection";

export const metadata: Metadata = {
  title: `About ${CLINIC_INFO.doctorName} & Practice | ${CLINIC_INFO.brandName}`,
  description: `Learn about ${CLINIC_INFO.doctorName}, specialized clinical trichologist and dermatologist with ${CLINIC_INFO.experience}. Dedicated to evidence-based root-cause hair restoration.`,
};

export default function AboutPage() {
  return (
    <div className="relative">
      {/* Page Hero */}
      <section className="relative pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-10 lg:pb-12">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-700 bg-white/90 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-sky-100 inline-block mb-4 shadow-sm">
              About the Practice
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-navy-950 mb-6 leading-tight">
              Clinical Science, Compassionate Trichology
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-ink-900 leading-relaxed">
              Rama Trichology is an independent, doctor-led clinical practice founded to provide rigorous medical diagnosis and genuine root-cause treatments for men, women, and adolescents experiencing hair and scalp distress.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Doctor Biography Section */}
      <section className="pt-8 sm:pt-10 lg:pt-12 pb-12 sm:pb-16 lg:pb-20">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            {/* Header: Doctor Profile tag, Name, Credentials */}
            <AnimatedSection delay={0.1} className="space-y-4">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-700 bg-ice-50 px-3.5 py-1.5 rounded-full border border-gray-200 inline-block">
                Doctor Profile
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950">
                {CLINIC_INFO.doctorName}
              </h2>
              <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-navy-950 font-semibold pt-1">
                <span className="bg-ice-50 px-3.5 py-1.5 rounded-lg border border-gray-200 flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-blue-700" />
                  {CLINIC_INFO.credentials}
                </span>
                <span className="bg-ice-50 px-3.5 py-1.5 rounded-lg border border-gray-200 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-blue-700" />
                  {CLINIC_INFO.experience}
                </span>
              </div>
            </AnimatedSection>

            {/* Doctor Portrait Photo with Full Uncropped Centered Framing */}
            <AnimatedSection delay={0.2}>
              <div className="relative mx-auto max-w-3xl lg:max-w-4xl">
                <div className="relative aspect-[16/10] sm:aspect-[1.62/1] rounded-3xl overflow-hidden shadow-[0_24px_55px_rgba(0,0,0,0.18)] border-4 sm:border-8 border-white/95 bg-white">
                  <Image
                    src="/images/doctor-photo.jpg"
                    alt="Dr. Ritesh Safariya - Lead Consultant & Trichologist at Rama Trichology"
                    width={1200}
                    height={750}
                    priority
                    className="object-cover object-center w-full h-full"
                  />

                  {/* Doctor's Team Card attached at bottom right */}
                  <div className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-2 sm:p-3 border-2 border-white shadow-2xl flex items-center gap-2.5 sm:gap-3.5 max-w-[240px] sm:max-w-[320px]">
                    <div className="relative w-16 h-12 sm:w-24 sm:h-18 rounded-xl overflow-hidden flex-shrink-0 border border-sky-100 shadow-sm bg-slate-100">
                      <Image
                        src="/images/clinical-team.jpg"
                        alt="Dr. Ritesh Safariya with the Clinical Team"
                        width={240}
                        height={180}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="text-left">
                      <span className="text-[10px] sm:text-xs font-bold text-[#007baa] uppercase tracking-wider block font-mono">
                        Clinical Team
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-navy-950 block leading-tight">
                        Support &amp; Surgical Specialists
                      </span>
                      <span className="text-[10px] sm:text-[11px] text-slate-600 hidden sm:block leading-tight mt-0.5">
                        In-Clinic Medical Team
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 max-w-xl mx-auto bg-white/90 backdrop-blur-md rounded-2xl p-4 border border-sky-100 flex flex-col sm:flex-row items-center justify-center gap-2 text-xs sm:text-sm text-ink-900 shadow-sm text-center">
                  <span className="font-semibold text-navy-950">Clinical Focus:</span>
                  <span>Polarized Trichoscopy, Root-Cause Pathology, Hair Regrowth</span>
                </div>
              </div>
            </AnimatedSection>

            {/* Biography Content - Centered */}
            <div className="space-y-8 max-w-4xl mx-auto">
              <AnimatedSection delay={0.3} className="space-y-4 text-base sm:text-lg text-ink-900 leading-relaxed text-center">
                <p>
                  Dr. Ritesh Safariya is a distinguished clinical dermatologist and certified trichologist with over 15+ years of clinical experience specializing in follicular biology, scalp disorders, and hair restoration therapies.
                </p>
                <p>
                  Having evaluated and guided thousands of patients through complex shedding episodes, Dr. Ritesh Safariya emphasizes that hair follicles are sensitive barometers of human physiology. Rather than applying quick topical fixes, our practice treats each condition as a multifaceted medical puzzle requiring microscopic inspection and biological profiling.
                </p>
                <p>
                  As an active participant in international trichology symposia, Dr. Ritesh Safariya combines pharmaceutical dermatological protocols with advanced in-clinic regenerative therapies, ensuring every patient benefits from modern medical breakthroughs.
                </p>
              </AnimatedSection>

              {/* 4 Feature Items: Single line in laptop layout (lg:grid-cols-4), 2 in each row on mobile/tablet (grid-cols-2) */}
              <AnimatedSection delay={0.35} className="pt-2">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 text-sm max-w-4xl mx-auto">
                  <div className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-white border border-gray-200 shadow-xs text-center">
                    <CheckCircle2 className="w-4.5 h-4.5 text-blue-700 flex-shrink-0" />
                    <span className="text-navy-950 font-medium text-xs sm:text-sm whitespace-nowrap">Solo Doctor Practice</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-white border border-gray-200 shadow-xs text-center">
                    <CheckCircle2 className="w-4.5 h-4.5 text-blue-700 flex-shrink-0" />
                    <span className="text-navy-950 font-medium text-xs sm:text-sm whitespace-nowrap">Polarized Micro-Imaging</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-white border border-gray-200 shadow-xs text-center">
                    <CheckCircle2 className="w-4.5 h-4.5 text-blue-700 flex-shrink-0" />
                    <span className="text-navy-950 font-medium text-xs sm:text-sm whitespace-nowrap">Clear Treatment Timelines</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-white border border-gray-200 shadow-xs text-center">
                    <CheckCircle2 className="w-4.5 h-4.5 text-blue-700 flex-shrink-0" />
                    <span className="text-navy-950 font-medium text-xs sm:text-sm whitespace-nowrap">Comprehensive Biomarkers</span>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Philosophy: Trichology vs General Dermatology */}
      <section className="relative pt-10 sm:pt-12 lg:pt-14 pb-12 sm:pb-14 lg:pb-16">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mb-12">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-700 bg-white/90 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-sky-100 shadow-sm">
              Clinical Philosophy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 mt-4 mb-4">
              Trichology vs. Standard Dermatology
            </h2>
            <p className="text-base sm:text-lg text-ink-900 leading-relaxed">
              Why specialized focus matters when addressing stubborn hair thinning and scalp conditions.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="h-full bg-white rounded-2xl p-8 border border-gray-200 shadow-soft">
                <div className="w-12 h-12 rounded-xl bg-ice-50 flex items-center justify-center text-blue-700 mb-6">
                  <Microscope className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-navy-950 mb-4">
                  The Trichological Method
                </h3>
                <p className="text-sm sm:text-base text-ink-900 leading-relaxed mb-4">
                  Trichology is the specialized branch of dermatology dedicated strictly to the hair follicle, hair shaft, and scalp epidermis. Because hair follicles have one of the highest cellular turnover rates in the human body, they respond acutely to metabolic, hormonal, and micronutrient changes.
                </p>
                <p className="text-sm sm:text-base text-ink-900 leading-relaxed">
                  Our clinic uses specialized trichoscopes that magnify the scalp up to 200x, allowing us to evaluate the follicle ostia, perimeter redness, and empty follicular units long before baldness becomes visible to the naked eye.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="h-full bg-white rounded-2xl p-8 border border-gray-200 shadow-soft">
                <div className="w-12 h-12 rounded-xl bg-ice-50 flex items-center justify-center text-blue-700 mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-navy-950 mb-4">
                  Evidence-Based Patient Care
                </h3>
                <p className="text-sm sm:text-base text-ink-900 leading-relaxed mb-4">
                  The commercial hair market is saturated with unproven oils, salon masks, and miracle claims that cause patients to lose critical months of early follicular intervention.
                </p>
                <p className="text-sm sm:text-base text-ink-900 leading-relaxed">
                  At Rama Trichology, we only prescribe treatments validated by peer-reviewed clinical dermatological literature. If a follicle is permanently scarred or miniaturized beyond recovery, we advise honest restorative alternatives rather than taking you through indefinite unhelpful cycles.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 
        // TODO: v2 - "Inside the Clinic" (Consultation suites, trichoscopy lab photos)
        // and "Patient-First Ethics" sections will be added in v2 pass after client sign-off.
      */}

      {/* CTA Section */}
      <section className="relative pt-10 sm:pt-12 pb-14 sm:pb-18 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy-950 mb-4">
              Schedule Your Private Consultation
            </h2>
            <p className="text-base sm:text-lg text-ink-900 mb-8">
              Discuss your hair health directly with {CLINIC_INFO.doctorName}. We take the time to answer every question and explain your diagnostic scans clearly.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact#book"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white bg-blue-700 hover:bg-navy-950 transition-all shadow-sm focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <span>Book Appointment</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-navy-950 bg-ice-50 hover:bg-gray-100 border border-gray-200 transition-all focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <span>View Treatment Pillars</span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
