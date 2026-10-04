import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from "@/components/common/AnimatedSection";

export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden py-14 sm:py-20 lg:py-26">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100/90 border border-sky-200 shadow-sm text-xs sm:text-sm font-bold uppercase tracking-wider text-sky-800 mb-4">
            Patient Stories
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-navy-950 mt-1 mb-5">
            Trusted by Our{" "}
            <span className="text-blue-600 relative inline-block">
              Patients
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-sky-400"
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
              </svg>
            </span>
          </h2>
          <p className="text-base sm:text-lg text-ink-900 leading-relaxed max-w-2xl mx-auto">
            Read about real journeys of recovery, scalp comfort, and restored
            confidence from patients treated at our clinic.
          </p>
        </AnimatedSection>

        {/* Fixed 3-Column Single Row Desktop Grid (Stacked on Mobile) */}
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full items-stretch">
          {TESTIMONIALS.slice(0, 3).map((item, idx) => (
            <StaggerItem key={idx} className="h-full">
              <div className="h-full bg-white/95 backdrop-blur-md rounded-3xl p-7 sm:p-8 border border-sky-100 shadow-[0_12px_35px_rgba(2,132,199,0.06)] hover:shadow-[0_20px_45px_rgba(2,132,199,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <span className="text-xs font-semibold text-blue-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
                      {item.treatment}
                    </span>
                  </div>

                  <Quote className="w-8 h-8 text-sky-300/60 mb-3" />

                  <p className="text-base text-ink-900 leading-relaxed italic mb-6">
                    {item.quote}
                  </p>
                </div>

                <div className="pt-4 border-t border-sky-100 flex items-center justify-between mt-auto">
                  <div>
                    <h3 className="font-serif text-base font-bold text-navy-950">
                      {item.name}
                    </h3>
                    <p className="text-xs text-gray-500">Verified Clinic Patient</p>
                  </div>
                  <span className="text-xs text-blue-700 font-semibold bg-sky-50 px-2.5 py-1 rounded-full border border-sky-100">
                    Google Review
                  </span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
