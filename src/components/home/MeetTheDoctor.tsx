"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Award, Stethoscope } from "lucide-react";
import { motion } from "framer-motion";
import { CLINIC_INFO } from "@/lib/constants";
import { AnimatedSection } from "@/components/common/AnimatedSection";
import TrustBar from "@/components/home/TrustBar";

/**
 * Animated letters popping up sequentially from below
 */
function PoppingLetters({
  text,
  className = "",
  delayOffset = 0,
}: {
  text: string;
  className?: string;
  delayOffset?: number;
}) {
  const letters = Array.from(text);
  return (
    <span className={`inline-block whitespace-pre ${className}`}>
      {letters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ y: 45, opacity: 0, scale: 0.5 }}
          whileInView={{ y: 0, opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            type: "spring",
            stiffness: 420,
            damping: 18,
            delay: delayOffset + index * 0.035,
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

export default function MeetTheDoctor() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        paddingTop: "clamp(48px, 6vw, 80px)",
        paddingBottom: "clamp(180px, 15vw, 214px)",
      }}
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/2 -left-20 w-96 h-96 bg-sky-500/15 rounded-full blur-[90px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Doctor Portrait Photo: Creative Pop-Up from Left-Bottom (Rectangular Pattern) */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ x: -80, y: 80, opacity: 0, scale: 0.85, rotate: -3 }}
              whileInView={{ x: 0, y: 0, opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 16,
                mass: 0.9,
                delay: 0.1,
              }}
              className="relative mx-auto max-w-lg lg:max-w-none"
            >
              <div className="relative aspect-[16/10] sm:aspect-[1.68/1] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.4)] border-4 sm:border-8 border-white/90 bg-white">
                <Image
                  src="/images/doctor-photo.jpg"
                  alt="Dr. Ritesh Safariya - Lead Consultant & Trichologist at Rama Trichology Clinic"
                  width={1024}
                  height={611}
                  priority
                  className="object-cover object-center w-full h-full"
                />
              </div>

              {/* Experience floating chip */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                  delay: 0.45,
                }}
                className="absolute -bottom-5 -left-2 sm:-left-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-3 sm:p-3.5 border border-sky-100 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 flex-shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] text-gray-500 block font-medium">
                    Clinical Practice
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-navy-950">
                    {CLINIC_INFO.experience}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Doctor Bio & Clinical Philosophy */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <AnimatedSection delay={0.15}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 text-sky-200 border border-white/20 shadow-sm text-xs sm:text-sm font-bold uppercase tracking-wider backdrop-blur-md">
                Clinical Leadership
              </div>

              {/* Title with Letters Popping from Below Animation */}
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-4 flex flex-wrap items-baseline justify-center lg:justify-start gap-x-2.5">
                <PoppingLetters text="Meet " delayOffset={0.15} />
                <span className="text-sky-300 relative inline-block">
                  <PoppingLetters text={CLINIC_INFO.doctorName} delayOffset={0.3} />
                  <motion.svg
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.85, ease: "easeOut" }}
                    className="absolute -bottom-1.5 left-0 w-full h-2.5 text-sky-400"
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
                  </motion.svg>
                </span>
              </h2>

              <p className="text-base sm:text-lg text-sky-100/90 leading-relaxed">
                With over {CLINIC_INFO.experience} in medical dermatology and
                specialized follicular pathology,{" "}
                <span className="font-semibold text-white">
                  {CLINIC_INFO.doctorName}
                </span>{" "}
                founded Rama Trichology to bridge the gap between commercial hair
                salons and hospital-grade clinical science.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <blockquote className="border-l-4 border-sky-400 pl-4 py-2 italic text-white font-serif text-base sm:text-lg bg-white/10 backdrop-blur-md rounded-r-2xl p-4 border border-white/15 shadow-sm">
                &ldquo;Effective hair restoration begins with honest,
                high-magnification diagnosis. We never prescribe generic
                off-the-shelf bundles or propose surgical procedures unless
                genuinely indicated.&rdquo;
              </blockquote>
            </AnimatedSection>

            <AnimatedSection delay={0.35}>
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <Stethoscope className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-sky-100/90">
                    <strong className="text-white font-semibold">
                      Specialized Trichoscopy:
                    </strong>{" "}
                    Every patient evaluation includes polarized digital
                    micro-scans of follicle ostia, sebum density, and vascular
                    patterns.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-sky-100/90">
                    <strong className="text-white font-semibold">
                      Biochemical Rigor:
                    </strong>{" "}
                    Treatment regimens integrate blood biomarkers (ferritin,
                    thyroid panel, vitamin D3, hormone ratios) for holistic
                    internal restoration.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-sky-100/90">
                    <strong className="text-white font-semibold">
                      Independent Solo Practice:
                    </strong>{" "}
                    Direct, unhurried one-on-one doctor consultations with
                    comprehensive progress reviews at every follow-up.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 active:scale-95 transition-all shadow-md shadow-blue-500/25 focus-visible:ring-2 focus-visible:ring-blue-400"
                >
                  <span>Read Full Doctor Profile</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/contact#book"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-semibold text-white bg-white/15 hover:bg-white/25 border border-white/25 backdrop-blur-md active:scale-95 transition-all shadow-sm focus-visible:ring-2 focus-visible:ring-blue-400"
                >
                  <span>Schedule Consultation</span>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Clinical Credentials & Trust Statistics */}
        <TrustBar />
      </div>
    </section>
  );
}
