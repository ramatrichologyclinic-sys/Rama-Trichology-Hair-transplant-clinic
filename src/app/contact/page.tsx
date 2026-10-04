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
      <section className="relative py-16 sm:py-20 lg:py-24">
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
      <section className="py-16 sm:py-20 lg:py-24">
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

      {/* Calendly Booking Embed & Map Section */}
      <section id="book" className="py-16 sm:py-20 lg:py-24 relative scroll-mt-24">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Calendly Booking Embed Placeholder */}
            <div className="lg:col-span-7 flex flex-col h-full">
              <AnimatedSection className="h-full flex flex-col flex-1">
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-soft h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-4">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-blue-700">Online Scheduler</span>
                        <h3 className="font-serif text-2xl font-bold text-navy-950 mt-1">
                          Book Your Consultation Slot
                        </h3>
                      </div>
                      <Calendar className="w-8 h-8 text-blue-700" />
                    </div>

                    <p className="text-sm text-ink-900 mb-6">
                      Select a date and time convenient for you to meet with {CLINIC_INFO.doctorName}.
                    </p>
                  </div>

                  {/* Calendly iframe placeholder — flex-1 to match map height */}
                  <div className="relative w-full flex-1 min-h-[420px] rounded-2xl overflow-hidden border border-gray-200 bg-gray-50 flex flex-col items-center justify-center p-6 text-center">
                    <iframe
                      src={CLINIC_INFO.calendlyUrl}
                      title="Appointment Booking with Rama Trichology"
                      className="w-full h-full border-0 rounded-xl"
                      loading="lazy"
                    />
                    {/* Fallback overlay in case placeholder URL cannot load in sandbox */}
                    <div className="absolute inset-0 bg-white/95 backdrop-blur-sm p-8 flex flex-col items-center justify-center text-center">
                      <Calendar className="w-12 h-12 text-blue-700 mb-4" />
                      <h4 className="font-serif text-xl font-bold text-navy-950 mb-2">
                        Calendly Scheduling Integration
                      </h4>
                      <p className="text-xs sm:text-sm text-ink-900 max-w-sm mb-6">
                        Integrated Calendly iframe connected to <code className="text-blue-700 bg-ice-50 px-2 py-0.5 rounded">{CLINIC_INFO.calendlyUrl}</code>. Swappable with the client&apos;s live calendar link.
                      </p>
                      <a
                        href={CLINIC_INFO.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-white bg-blue-700 hover:bg-navy-950 text-xs transition-colors"
                      >
                        <span>Or Book Instantly via WhatsApp</span>
                      </a>
                    </div>
                  </div>

                  <div className="text-xs text-ink-900 space-y-1 mt-4 pt-4 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <p className="font-semibold text-navy-950">In-Clinic Trichoscopic Session</p>
                    <p className="text-blue-700 font-medium">Direct evaluation with {CLINIC_INFO.doctorName}</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Google Maps Embed Placeholder */}
            <div className="lg:col-span-5 flex flex-col h-full">
              <AnimatedSection delay={0.2} className="h-full flex flex-col flex-1">
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-soft h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-4">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-blue-700">Find Us</span>
                        <h3 className="font-serif text-2xl font-bold text-navy-950 mt-1">
                          Clinic Map &amp; Directions
                        </h3>
                      </div>
                      <MapPin className="w-8 h-8 text-blue-700" />
                    </div>
                  </div>

                  {/* Google Maps iframe placeholder — flex-1 to match booking height */}
                  <div className="relative w-full flex-1 min-h-[420px] rounded-2xl overflow-hidden border border-gray-200 bg-gray-50 mb-4">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120562.62883492797!2d72.77583649666014!3d19.21345974052309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7134375b63d%3A0x272ab3e3b3c3b0!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Rama Trichology Clinic Location Map"
                      className="w-full h-full"
                    />
                  </div>

                  <div className="text-xs text-ink-900 space-y-1 mt-4 pt-4 border-t border-gray-100">
                    <p className="font-bold text-navy-950">{CLINIC_INFO.brandName} — {CLINIC_INFO.tagline}</p>
                    <p>{CLINIC_INFO.address}</p>
                    <p className="text-blue-700 font-medium">Near public transit &amp; dedicated parking available</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
