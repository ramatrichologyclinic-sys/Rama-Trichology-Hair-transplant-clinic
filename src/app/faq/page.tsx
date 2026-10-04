"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight, HelpCircle, Sparkles, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CLINIC_INFO } from "@/lib/constants";
import { AnimatedSection } from "@/components/common/AnimatedSection";

const DETAILED_FAQS = [
  {
    q: "What happens during my initial consultation at Rama Trichology?",
    a: "Your initial visit includes an unhurried, private 45-minute clinical evaluation directly with Dr. Ritesh Safariya. We take a detailed medical, genetic, and lifestyle history, perform a physical scalp inspection, and conduct polarized digital trichoscopy at up to 200x magnification. We show you the live scans on-screen so you understand the exact health of your follicles before any regimen is formulated.",
  },
  {
    q: "How does polarized digital trichoscopy work?",
    a: "Digital trichoscopy is a non-invasive medical imaging technique. A high-definition specialized lens is placed directly against the scalp. It reveals follicular density per square centimeter, follicular unit caliber variation, perifollicular erythema, sebum plugging, and empty follicular ostia that are completely invisible to the unaided human eye.",
  },
  {
    q: "Are the hair regrowth results permanent?",
    a: "Hair biology requires ongoing maintenance because genetic and hormonal factors (such as DHT) persist throughout life. However, once follicular miniaturization is arrested and active growth cycles are re-established, the intensive treatment phase transitions into a simplified, low-effort maintenance regimen to preserve your density indefinitely.",
  },
  {
    q: "How soon can I expect noticeable reduction in shedding and new hair growth?",
    a: "Because hair follicles follow a biological growth rhythm, shedding stabilization typically occurs between weeks 4 and 8. Measurable follicle thickening and reduction in central parting or crown gaps are documented via follow-up trichoscopic photography at months 3 to 6.",
  },
  {
    q: "Do your medical hair loss treatments cause adverse side effects?",
    a: "Patient safety is our primary clinical obligation. Dr. Ritesh Safariya prescribes therapies based on your individual health profile and blood biomarkers. Where appropriate, we utilize localized topical delivery, peptide mesotherapy, and natural botanical modulators that minimize or eliminate systemic absorption.",
  },
  {
    q: "Can women and adolescents receive safe treatment at your clinic?",
    a: "Absolutely. Women and adolescents represent a significant portion of our practice. Female hair loss requires specialized evaluation of iron stores (ferritin), thyroid function, PCOS, and hormonal transitions. For teenagers, we employ gentle, non-aggressive, pediatric-safe nutritional and topical protocols.",
  },
  {
    q: "How does Scalp Micropigmentation (SMP) differ from a standard tattoo?",
    a: "SMP uses medical-grade, carbon-based organic pigments deposited strictly into the upper dermal layer at micro-dot depths (1.5mm to 2mm). Unlike conventional tattoo inks, SMP pigments do not contain heavy metals, do not bleed or turn blue/green over time, and are formulated to naturally mirror biological hair follicles.",
  },
  {
    q: "What is the difference between FUE hair transplants and medical therapy?",
    a: "Medical therapy aims to revive, rescue, and thicken miniaturized living follicles. A hair transplant is a surgical redistribution procedure for areas where follicles have permanently scarred or ceased to exist. We evaluate your donor viability to determine whether non-surgical therapy is sufficient or if micro-grafting is required.",
  },
  {
    q: "How do I schedule an appointment with Dr. Ritesh Safariya?",
    a: "You can book directly via our online Calendly scheduler on the contact page, call our reception line, or message our clinical coordinator directly via WhatsApp for same-day confirmation.",
  },
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex((current) => (current === idx ? null : idx));
  };

  return (
    <div className="relative">
      {/* Page Hero */}
      <section className="relative pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-10 lg:pb-12">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-700 bg-white/90 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-sky-100 inline-block mb-4 shadow-sm">
              Knowledge &amp; Clarity
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-navy-950 mb-6 leading-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-ink-900 leading-relaxed">
              Transparent answers regarding our clinical trichology consultations, diagnostic methods, timelines, and scientific therapies.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* 
        // TODO: v2 - Categorized search and filter UI
        // will be added in v2 pass after client sign-off.
      */}

      {/* Plain Accordion for V1 */}
      <section className="pt-6 sm:pt-8 lg:pt-9 pb-16 sm:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {DETAILED_FAQS.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-200 bg-white shadow-soft"
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(idx)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 bg-white hover:bg-ice-50/50 transition-colors"
                    aria-expanded={isOpen}
                    aria-controls={`faq-item-ans-${idx}`}
                    id={`faq-item-q-${idx}`}
                  >
                    <span className="font-serif text-lg sm:text-xl font-bold text-navy-950 flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-blue-700 flex-shrink-0" />
                      <span>{faq.q}</span>
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-navy-950 flex-shrink-0 transition-transform duration-300 ease-out ${
                        isOpen ? "transform rotate-180 text-blue-700" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-item-ans-${idx}`}
                        role="region"
                        aria-labelledby={`faq-item-q-${idx}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                          transition: {
                            height: { duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] },
                            opacity: { duration: 0.25, delay: 0.1 },
                          },
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                          transition: {
                            height: { duration: 0.25, ease: [0.04, 0.62, 0.23, 0.98] },
                            opacity: { duration: 0.15 },
                          },
                        }}
                        className="overflow-hidden border-t border-gray-100 bg-white"
                      >
                        <div className="px-6 pb-6 pt-3 text-sm sm:text-base text-ink-900 leading-relaxed">
                          <p>{faq.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="bg-navy-950 text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
              Have a Specific Concern Not Listed Here?
            </h2>
            <p className="text-base text-ice-50 mb-8 max-w-xl mx-auto">
              Our clinical coordinator is available on WhatsApp or phone to answer your questions and assist with scheduling.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact#book"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-navy-950 bg-white hover:bg-ice-50 transition-all shadow-md focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <Calendar className="w-4 h-4 text-blue-700" />
                <span>Book Doctor Consultation</span>
                <ArrowRight className="w-4 h-4 text-blue-700" />
              </Link>
              <Link
                href="/assessment"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-blue-700 hover:bg-blue-700/90 transition-all shadow-sm focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <span>Take 3-Min Assessment</span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
