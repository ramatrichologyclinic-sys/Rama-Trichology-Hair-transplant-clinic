import Link from "next/link";
import { Phone, MessageCircle, MapPin, ArrowRight, Calendar } from "lucide-react";
import { CLINIC_INFO } from "@/lib/constants";
import { AnimatedSection } from "@/components/common/AnimatedSection";

export default function FinalCtaBand() {
  return (
    <section className="bg-navy-950 text-white py-13 sm:py-16 lg:py-20">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Main Callout */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <AnimatedSection delay={0.1}>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-ice-50 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15">
                Take the First Step
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-4">
                Begin Your Personalized Hair &amp; Scalp Journey Today
              </h2>
              <p className="text-base sm:text-lg text-ice-50 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Book a confidential, one-on-one trichology consultation with {CLINIC_INFO.doctorName}. We examine your follicles under polarized digital magnification to design your custom recovery protocol.
              </p>
            </AnimatedSection>

            {/* CTAs */}
            <AnimatedSection delay={0.2}>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href="/contact#book"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-navy-950 bg-white hover:bg-ice-50 active:scale-95 transition-all shadow-md focus-visible:ring-2 focus-visible:ring-blue-400"
                >
                  <Calendar className="w-4 h-4 text-blue-700" />
                  <span>Schedule Consultation</span>
                  <ArrowRight className="w-4 h-4 text-blue-700" />
                </Link>

                <a
                  href={CLINIC_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-blue-700 hover:bg-blue-700/90 active:scale-95 transition-all shadow-sm focus-visible:ring-2 focus-visible:ring-blue-400"
                >
                  <MessageCircle className="w-5 h-5 text-white" />
                  <span>Instant WhatsApp Booking</span>
                </a>
              </div>
            </AnimatedSection>
          </div>

          {/* Quick Contact & Location Card */}
          <div className="lg:col-span-5">
            <AnimatedSection delay={0.2} yOffset={20}>
              <div className="bg-white/5 border border-white/15 rounded-2xl p-6 sm:p-8 backdrop-blur-sm space-y-6">
                <h3 className="font-serif text-xl font-bold text-white border-b border-white/10 pb-4">
                  Direct Clinic Contacts
                </h3>

                <div className="space-y-4 text-sm text-ice-50">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-semibold text-white">Clinic Location</span>
                      <p className="text-ice-50/90">{CLINIC_INFO.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-semibold text-white">Phone Support</span>
                      <a href={`tel:${CLINIC_INFO.phone}`} className="text-ice-50/90 hover:text-white hover:underline">
                        {CLINIC_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      href="/contact"
                      className="block text-center py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-colors border border-white/10 focus-visible:ring-2 focus-visible:ring-blue-400"
                    >
                      View Map &amp; Full Hours →
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
