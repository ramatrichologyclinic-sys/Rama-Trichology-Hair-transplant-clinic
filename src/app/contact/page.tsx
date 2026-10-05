"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Calendar,
  CheckCircle2,
  AlertCircle,
  Send,
} from "lucide-react";
import { CLINIC_INFO, SERVICES } from "@/lib/constants";
import { AnimatedSection } from "@/components/common/AnimatedSection";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "hair-fall",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("");

    const selectedService =
      SERVICES.find((s) => s.slug === formData.service)?.title ||
      (formData.service === "general-consultation"
        ? "General Trichology Consultation"
        : formData.service);

    // Format: New Inquiry from Website%0A Name: {name}%0A Phone: {phone}%0A Service Interested In: {service}%0A Message: {message}
    const messageLines = [
      "New Inquiry from Website",
      ` Name: ${formData.name}`,
      ` Phone: ${formData.phone}`,
      ` Service Interested In: ${selectedService}`,
      ` Message: ${formData.message}`,
    ];
    const encodedMessage = encodeURIComponent(messageLines.join("\n"));
    const whatsappRedirectUrl = `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    if (typeof window !== "undefined") {
      window.open(whatsappRedirectUrl, "_blank", "noopener,noreferrer");
    }

    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: CLINIC_INFO.web3FormsAccessKey,
          subject: `New Consultation Inquiry from ${formData.name}`,
          from_name: formData.name,
          to_name: CLINIC_INFO.brandName,
          ...formData,
          service: selectedService,
        }),
      });

      setIsSubmitted(true);
      setStatusMessage(
        "Thank you! Your inquiry has been sent and WhatsApp has been opened in a new tab to connect directly with Dr. Ritesh Safariya."
      );
    } catch {
      setIsSubmitted(true);
      setStatusMessage("Thank you! WhatsApp has been opened with your consultation details.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative">
      {/* Page Hero */}
      <section className="relative pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-10 lg:pb-12">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-blue-700 bg-white/90 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-sky-100 inline-block mb-4 shadow-sm">
              Get in Touch
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-navy-950 mb-6 leading-tight">
              Contact &amp; Clinic Appointments
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-ink-900 leading-relaxed">
              Have questions or ready to book your polarized trichoscopic evaluation? Reach our reception via phone, WhatsApp, or instant online scheduling.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Content: Split Contact Form & Direct Details */}
      <section className="pt-8 sm:pt-10 lg:pt-12 pb-10 sm:pb-12">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Form Column */}
            <div className="lg:col-span-6 space-y-8">
              <AnimatedSection>
                <div className="border-b border-gray-100 pb-4 mb-6">
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950">
                    Send an Inquiry
                  </h2>
                  <p className="text-sm text-ink-900 mt-1">
                    Fill out the form below and our clinical team will get back to you within 24 business hours.
                  </p>
                </div>

                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-navy-950 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Jane Doe"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm text-ink-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-phone" className="block text-xs font-bold uppercase tracking-wider text-navy-950 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="contact-phone"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. +91 00000 00000"
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm text-ink-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                      </div>

                      <div>
                        <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-navy-950 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="contact-email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. jane@example.com"
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm text-ink-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-service" className="block text-xs font-bold uppercase tracking-wider text-navy-950 mb-1">
                        Area of Concern / Clinical Service
                      </label>
                      <select
                        id="contact-service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm text-ink-900 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
                      >
                        {SERVICES.map((s) => (
                          <option key={s.slug} value={s.slug}>
                            {s.title}
                          </option>
                        ))}
                        <option value="general-consultation">General Trichology Consultation</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-navy-950 mb-1">
                        Your Message / Symptoms
                      </label>
                      <textarea
                        id="contact-message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Briefly describe your shedding duration, scalp irritation, or any previous treatments..."
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm text-ink-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-xl font-semibold text-white bg-blue-700 hover:bg-navy-950 active:scale-95 transition-all shadow-md text-sm sm:text-base flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-blue-400"
                    >
                      {isSubmitting ? (
                        <span>Sending message...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Consultation Request</span>
                        </>
                      )}
                    </button>
                  </form>
                ) : (
                  <div className="bg-ice-50 rounded-2xl p-8 border border-gray-200 text-center space-y-4">
                    <CheckCircle2 className="w-12 h-12 text-blue-700 mx-auto" />
                    <h3 className="font-serif text-2xl font-bold text-navy-950">
                      Message Sent Successfully
                    </h3>
                    <p className="text-sm text-ink-900 max-w-md mx-auto">
                      {statusMessage}
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: "",
                          phone: "",
                          email: "",
                          service: "hair-fall",
                          message: "",
                        });
                      }}
                      className="text-xs text-blue-700 font-bold hover:underline"
                    >
                      Send another inquiry
                    </button>
                  </div>
                )}
              </AnimatedSection>
            </div>

            {/* Direct Contact Info & Hours */}
            <div className="lg:col-span-6 space-y-8">
              <AnimatedSection delay={0.1}>
                <div className="bg-ice-50 rounded-3xl p-8 border border-gray-200 shadow-soft space-y-6">
                  <h3 className="font-serif text-2xl font-bold text-navy-950 border-b border-gray-200/80 pb-4">
                    Clinic Details &amp; Location
                  </h3>

                  <div className="space-y-5 text-sm text-ink-900">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-blue-700 flex-shrink-0 shadow-sm">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <strong className="block text-navy-950 font-bold">Clinic Address</strong>
                        <p>{CLINIC_INFO.address}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-blue-700 flex-shrink-0 shadow-sm">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <strong className="block text-navy-950 font-bold">Direct Phone</strong>
                        <a href={`tel:${CLINIC_INFO.phone}`} className="text-blue-700 hover:underline">
                          {CLINIC_INFO.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-blue-700 flex-shrink-0 shadow-sm">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <strong className="block text-navy-950 font-bold">Email</strong>
                        <a href={`mailto:${CLINIC_INFO.email}`} className="text-blue-700 hover:underline">
                          {CLINIC_INFO.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-blue-700 flex-shrink-0 shadow-sm">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <strong className="block text-navy-950 font-bold">Consultation Hours</strong>
                        <p>{CLINIC_INFO.hours}</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200/80">
                    <a
                      href={CLINIC_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] active:scale-95 transition-all shadow-sm text-sm"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>Direct WhatsApp Inquiries</span>
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Clinic Location & Google Maps Section */}
      <section id="location" className="pt-4 sm:pt-6 pb-16 sm:py-20 lg:py-24 relative scroll-mt-24">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-soft overflow-hidden">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 pb-6 border-b border-gray-100">
                <div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-ice-50 border border-gray-200 text-xs font-bold uppercase tracking-wider text-blue-700 mb-2">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Clinic Location &amp; Directions</span>
                  </div>
                  <h2 className="font-serif text-2xl sm:text-4xl font-bold text-navy-950">
                    Find Rama Trichology Clinic
                  </h2>
                  <p className="text-sm sm:text-base text-ink-900 mt-1 max-w-2xl">
                    Located in Shanti Nagar, Mira Road (East). Private clinical suites, dedicated parking, and full microscopic diagnostic facilities.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="https://maps.google.com/?q=A2-104,+1st+Floor,+Prabhakar+CHS+Society,+Shanti+Nagar,+Sec.+4,+Mira+Road+(E),+Mira+Bhayandar,+Maharashtra+401107"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-white bg-blue-700 hover:bg-navy-950 text-sm transition-all shadow-sm focus-visible:ring-2 focus-visible:ring-blue-400"
                  >
                    <MapPin className="w-4 h-4" />
                    <span>Open in Google Maps</span>
                  </a>
                  <a
                    href={`tel:${CLINIC_INFO.phone}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-navy-950 bg-ice-50 hover:bg-gray-100 border border-gray-200 text-sm transition-all focus-visible:ring-2 focus-visible:ring-blue-400"
                  >
                    <Phone className="w-4 h-4 text-blue-700" />
                    <span>Call Reception</span>
                  </a>
                </div>
              </div>

              {/* Full-Width Interactive Google Maps Embed with Location Marker (Reduced by 25%) */}
              <div className="relative w-full h-[340px] sm:h-[390px] rounded-2xl overflow-hidden border border-gray-200 shadow-inner bg-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.862413725553!2d72.86214347598357!3d19.288339945242277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b036573752e5%3A0xc3b44b827dbd8761!2sShanti%20Nagar%2C%20Mira%20Road%20East%2C%20Mira%20Bhayandar%2C%20Maharashtra%20401107!5e0!3m2!1sen!2sin!4v1711000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Rama Trichology Clinic Location Map — Shanti Nagar, Mira Road (East)"
                  className="w-full h-full"
                />
              </div>

              {/* Bottom Quick Reference Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 pt-6 border-t border-gray-100 text-xs sm:text-sm text-ink-900">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-ice-50 border border-gray-200 flex items-center justify-center text-blue-700 flex-shrink-0 font-bold">
                    1
                  </div>
                  <div>
                    <strong className="block text-navy-950 font-bold">Full Clinic Address</strong>
                    <p className="text-ink-900/90 leading-relaxed mt-0.5">{CLINIC_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-ice-50 border border-gray-200 flex items-center justify-center text-blue-700 flex-shrink-0 font-bold">
                    2
                  </div>
                  <div>
                    <strong className="block text-navy-950 font-bold">Transit &amp; Accessibility</strong>
                    <p className="text-ink-900/90 leading-relaxed mt-0.5">
                      Short auto/taxi ride from Mira Road Railway Station. Quick access from Western Express Highway.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-ice-50 border border-gray-200 flex items-center justify-center text-blue-700 flex-shrink-0 font-bold">
                    3
                  </div>
                  <div>
                    <strong className="block text-navy-950 font-bold">Appointments &amp; Timings</strong>
                    <p className="text-ink-900/90 leading-relaxed mt-0.5">
                      {CLINIC_INFO.hours}. Private slots scheduled in advance to ensure zero waiting time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
