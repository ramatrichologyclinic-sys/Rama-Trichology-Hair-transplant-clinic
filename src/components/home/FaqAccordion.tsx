"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { HOME_FAQS } from "@/lib/constants";
import { AnimatedSection } from "@/components/common/AnimatedSection";

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex((current) => (current === idx ? null : idx));
  };

  return (
    <section className="relative py-13 sm:py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-700 bg-ice-50 px-3.5 py-1.5 rounded-full border border-gray-200">
            Common Inquiries
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 mt-4 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-ink-900 leading-relaxed">
            Essential facts on clinical trichology, consultation expectations, and treatment cycles.
          </p>
        </AnimatedSection>

        {/* Plain Accordion for V1 (No search/filter UI) */}
        {/* // TODO: v2 - Categorized search and filter UI */}
        <AnimatedSection delay={0.2} className="space-y-4">
          {HOME_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-gray-200 rounded-2xl overflow-hidden transition-colors duration-200 bg-white shadow-soft"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 bg-white hover:bg-ice-50/50 transition-colors"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  id={`faq-question-${idx}`}
                >
                  <span className="font-serif text-lg sm:text-xl font-bold text-navy-950 flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-blue-700 flex-shrink-0" />
                    <span>{faq.question}</span>
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
                      id={`faq-answer-${idx}`}
                      role="region"
                      aria-labelledby={`faq-question-${idx}`}
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
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </AnimatedSection>

        <AnimatedSection delay={0.3} className="text-center mt-10">
          <p className="text-sm text-ink-900">
            Have more questions?{" "}
            <Link
              href="/faq"
              className="text-blue-700 font-bold hover:underline inline-flex items-center gap-1"
            >
              Visit our Full FAQ Page <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
