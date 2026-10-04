"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Video,
  MapPin,
  Calendar,
  Clock,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Laptop,
  Building2,
  FileText,
  Camera,
  MessageCircle,
  Mail,
} from "lucide-react";
import {
  ConsultationMode,
  OnlineBookingData,
  ClinicBookingData,
  CONCERN_OPTIONS,
  TIME_SLOT_OPTIONS,
  CLINIC_ADDRESS,
  GOOGLE_MAPS_DIRECTIONS_URL,
  CLINIC_GOOGLE_EMAIL,
  buildGoogleCalendarUrl,
  buildClinicWhatsAppUrl,
} from "@/lib/booking";
import { CLINIC_INFO } from "@/lib/constants";

/**
 * Main Booking Page Component wrapped in Suspense for static build compatibility
 */
export default function BookConsultationPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center p-8">
          <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <BookingContent />
    </Suspense>
  );
}

function BookingContent() {
  const searchParams = useSearchParams();
  const initialMode = searchParams.get("mode");

  const [mode, setMode] = useState<ConsultationMode>(
    initialMode === "clinic" ? "clinic" : "online"
  );

  // Synchronize state if URL query changes
  useEffect(() => {
    const urlMode = searchParams.get("mode");
    if (urlMode === "clinic" || urlMode === "online") {
      setMode(urlMode);
    }
  }, [searchParams]);

  // Handle mode toggle with replaceState (no page reload)
  const handleToggleMode = (newMode: ConsultationMode) => {
    setMode(newMode);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.searchParams.set("mode", newMode);
      window.history.replaceState(null, "", url.toString());
    }
  };

  // Get minimum date for date pickers (today in YYYY-MM-DD)
  const todayDate = new Date().toISOString().split("T")[0];

  // Online Form State & Errors
  const [onlineForm, setOnlineForm] = useState<OnlineBookingData>({
    name: "",
    phone: "",
    email: "",
    concern: "Hair fall",
    date: todayDate,
    time: "Morning",
  });
  const [onlineErrors, setOnlineErrors] = useState<Partial<Record<keyof OnlineBookingData, string>>>({});
  const [onlineSuccess, setOnlineSuccess] = useState(false);

  // Clinic Form State & Errors
  const [clinicForm, setClinicForm] = useState<ClinicBookingData>({
    name: "",
    phone: "",
    concern: "Hair fall",
    date: todayDate,
    time: "Morning",
  });
  const [clinicErrors, setClinicErrors] = useState<Partial<Record<keyof ClinicBookingData, string>>>({});
  const [clinicSuccess, setClinicSuccess] = useState(false);

  // Online Submit Handler — Converts details into Google Calendar event with Google Meet
  const handleOnlineSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Partial<Record<keyof OnlineBookingData, string>> = {};

    if (!onlineForm.name.trim()) {
      errors.name = "Please enter your full name.";
    }
    const cleanPhone = onlineForm.phone.replace(/\D/g, "");
    if (!cleanPhone || cleanPhone.length < 10) {
      errors.phone = "Please enter a valid 10-digit phone number.";
    }
    if (!onlineForm.concern) {
      errors.concern = "Please select your primary concern.";
    }
    if (!onlineForm.date) {
      errors.date = "Please select your preferred date.";
    }

    if (Object.keys(errors).length > 0) {
      setOnlineErrors(errors);
      return;
    }

    setOnlineErrors({});
    const redirectUrl = buildGoogleCalendarUrl(onlineForm);

    if (typeof window !== "undefined") {
      window.open(redirectUrl, "_blank", "noopener,noreferrer");
    }
    setOnlineSuccess(true);
  };

  // Clinic Submit Handler — Redirects to Dr. Ritesh WhatsApp
  const handleClinicSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Partial<Record<keyof ClinicBookingData, string>> = {};

    if (!clinicForm.name.trim()) {
      errors.name = "Please enter your full name.";
    }
    const cleanPhone = clinicForm.phone.replace(/\D/g, "");
    if (!cleanPhone || cleanPhone.length < 10) {
      errors.phone = "Please enter a valid 10-digit phone number.";
    }
    if (!clinicForm.concern) {
      errors.concern = "Please select your primary concern.";
    }
    if (!clinicForm.date) {
      errors.date = "Please select a consultation date.";
    }

    if (Object.keys(errors).length > 0) {
      setClinicErrors(errors);
      return;
    }

    setClinicErrors({});
    const redirectUrl = buildClinicWhatsAppUrl(clinicForm);

    if (typeof window !== "undefined") {
      window.open(redirectUrl, "_blank", "noopener,noreferrer");
    }
    setClinicSuccess(true);
  };

  const scrollToForm = () => {
    const el = document.getElementById("booking-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen py-10 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100/90 border border-sky-200 shadow-sm text-xs sm:text-sm font-bold uppercase tracking-wider text-sky-800 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-700" />
            <span>Consultation Scheduling</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-navy-950 tracking-tight mb-4">
            Book Your Clinical Consultation
          </h1>

          <p className="text-base sm:text-lg text-ink-900 leading-relaxed">
            Direct clinical diagnosis and personalized treatment planning with{" "}
            <span className="font-semibold text-navy-950">Dr. Ritesh Safariya</span>.
          </p>

          {/* Segmented Mode Toggle: Online | In-Clinic */}
          <div className="mt-8 flex justify-center">
            <div
              role="tablist"
              aria-label="Consultation mode"
              className="inline-flex p-1.5 rounded-full bg-slate-200/80 backdrop-blur-md border border-slate-300/80 shadow-inner relative max-w-sm w-full"
            >
              {/* Online Option */}
              <button
                type="button"
                role="tab"
                id="toggle-tab-online"
                aria-selected={mode === "online"}
                aria-controls="mode-panel"
                onClick={() => handleToggleMode("online")}
                className={`relative z-10 flex-1 py-2.5 px-5 rounded-full text-sm font-semibold transition-colors flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                  mode === "online" ? "text-blue-700" : "text-navy-950/70 hover:text-navy-950"
                }`}
              >
                {mode === "online" && (
                  <motion.div
                    layoutId="booking-toggle-pill"
                    transition={{ type: "spring", stiffness: 220, damping: 25 }}
                    className="absolute inset-0 rounded-full bg-white shadow-md border border-sky-100"
                  />
                )}
                <Video className="w-4 h-4 relative z-10" />
                <span className="relative z-10">Online</span>
              </button>

              {/* In-Clinic Option */}
              <button
                type="button"
                role="tab"
                id="toggle-tab-clinic"
                aria-selected={mode === "clinic"}
                aria-controls="mode-panel"
                onClick={() => handleToggleMode("clinic")}
                className={`relative z-10 flex-1 py-2.5 px-5 rounded-full text-sm font-semibold transition-colors flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                  mode === "clinic" ? "text-amber-800" : "text-navy-950/70 hover:text-navy-950"
                }`}
              >
                {mode === "clinic" && (
                  <motion.div
                    layoutId="booking-toggle-pill"
                    transition={{ type: "spring", stiffness: 220, damping: 25 }}
                    className="absolute inset-0 rounded-full bg-white shadow-md border border-amber-100"
                  />
                )}
                <MapPin className="w-4 h-4 relative z-10" />
                <span className="relative z-10">In-Clinic</span>
              </button>
            </div>
          </div>

          {/* Helper Decision Line */}
          <p className="text-xs sm:text-sm text-ink-900/80 max-w-xl mx-auto mt-4 px-2 leading-relaxed">
            Not sure which to pick? Online works well for follow-ups or if you&apos;re outside Mumbai. Choose clinic if you want a hands-on scalp examination.
          </p>
        </div>

        {/* Dynamic Mode Content with Smooth Transition */}
        <div id="mode-panel" role="tabpanel" aria-labelledby={`toggle-tab-${mode}`}>
          <AnimatePresence mode="wait">
            {mode === "online" ? (
              <motion.div
                key="online-panel"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
              >
                {/* Left Column: Visual, 3 Steps & Prep Note (Cool Accent Tint) */}
                <div className="lg:col-span-5 space-y-6">
                  {/* Visual: Laptop/Phone Mockup (Cool Palette Accent) */}
                  <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-sky-50 via-white to-sky-100/60 border border-sky-100 shadow-card overflow-hidden">
                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-2xl bg-sky-100 text-blue-700 flex items-center justify-center mb-4 shadow-sm border border-sky-200/60">
                        <Laptop className="w-6 h-6" />
                      </div>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-navy-950 mb-2">
                        Online Video Consultation
                      </h3>
                      <p className="text-sm text-ink-900 leading-relaxed mb-6">
                        Personalized video consultation with Dr. Ritesh Safariya conducted via Google Meet, accessible from anywhere across India and abroad.
                      </p>

                      {/* Mockup Frame with Google Meet branding */}
                      <div className="relative rounded-2xl bg-white border border-sky-200/80 p-4 shadow-inner">
                        <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-3">
                          <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-xs font-semibold text-navy-950">
                              Dr. Ritesh Safariya
                            </span>
                          </div>
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">
                            Google Meet
                          </span>
                        </div>
                        <div className="aspect-video rounded-xl bg-gradient-to-br from-sky-100/80 to-blue-50 flex flex-col items-center justify-center text-center p-4 border border-sky-100">
                          <Video className="w-8 h-8 text-blue-600 mb-2" />
                          <p className="text-xs font-semibold text-navy-950">
                            Google Meet Automated Link
                          </p>
                          <p className="text-[11px] text-sky-800">
                            Pre-invited on your Google Calendar
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 3-Step "How it Works" */}
                  <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-sky-100 shadow-soft space-y-4">
                    <h4 className="font-serif text-lg font-bold text-navy-950 mb-2">
                      How It Works
                    </h4>
                    <ol className="space-y-4 text-sm">
                      <li className="flex items-start gap-3">
                        <span className="w-7 h-7 rounded-full bg-sky-100 text-blue-700 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                          1
                        </span>
                        <div>
                          <strong className="text-navy-950 block">Book</strong>
                          <span className="text-ink-900 text-xs sm:text-sm">
                            Fill your details, clinical concern, and preferred date/time slot.
                          </span>
                        </div>
                      </li>

                      <li className="flex items-start gap-3">
                        <span className="w-7 h-7 rounded-full bg-sky-100 text-blue-700 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                          2
                        </span>
                        <div>
                          <strong className="text-navy-950 block">
                            Auto Google Meet Invite
                          </strong>
                          <span className="text-ink-900 text-xs sm:text-sm">
                            Your booking opens in Google Calendar with Dr. Ritesh pre-invited ({CLINIC_GOOGLE_EMAIL}).
                          </span>
                        </div>
                      </li>

                      <li className="flex items-start gap-3">
                        <span className="w-7 h-7 rounded-full bg-sky-100 text-blue-700 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                          3
                        </span>
                        <div>
                          <strong className="text-navy-950 block">Consult</strong>
                          <span className="text-ink-900 text-xs sm:text-sm">
                            Join the Google Meet video session directly from your phone or laptop.
                          </span>
                        </div>
                      </li>
                    </ol>
                  </div>

                  {/* Prep Note */}
                  <div className="rounded-2xl p-4 bg-sky-50/90 border border-sky-200/80 flex items-start gap-3">
                    <Camera className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-sky-800 block mb-0.5">
                        Preparation Note
                      </span>
                      <p className="text-xs sm:text-sm text-ink-900 leading-relaxed">
                        Keep clear, well-lit photos of your scalp and hair thinning ready to share during your Google Meet consultation.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Column: Online Booking Form */}
                <div id="booking-form" className="lg:col-span-7">
                  <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-sky-100 shadow-xl">
                    <h3 className="font-serif text-2xl font-bold text-navy-950 mb-1">
                      Online Consultation Details
                    </h3>
                    <p className="text-xs sm:text-sm text-ink-900 mb-5">
                      Your details will be converted into a Google Calendar event with an automatic Google Meet video room.
                    </p>

                    {/* Google Meet Note */}
                    <div className="rounded-2xl p-4 bg-blue-50/90 border border-blue-200/80 flex items-start gap-3.5 mb-6">
                      <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                        <Video className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-blue-900 block mb-0.5">
                          Conducted Exclusively via Google Meet
                        </span>
                        <p className="text-xs sm:text-sm text-navy-950/90 leading-relaxed">
                          All online sessions are conducted through official <strong>Google Meet</strong>. Upon submitting, you will be redirected to Google Calendar where your session details and Google Meet link are automatically generated with Dr. Ritesh Safariya (<span className="font-semibold text-blue-700">{CLINIC_GOOGLE_EMAIL}</span>).
                        </p>
                      </div>
                    </div>

                    {onlineSuccess ? (
                      <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                        <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                        <h4 className="font-serif text-lg font-bold text-navy-950">
                          Redirected to Google Calendar!
                        </h4>
                        <p className="text-sm text-ink-900 max-w-md mx-auto">
                          Google Calendar has opened in a new tab with your consultation details and Google Meet room ready. Simply click <strong>Save</strong> to confirm the event with Dr. Ritesh Safariya ({CLINIC_GOOGLE_EMAIL}).
                        </p>
                        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                          <button
                            type="button"
                            onClick={() => {
                              const url = buildGoogleCalendarUrl(onlineForm);
                              window.open(url, "_blank", "noopener,noreferrer");
                            }}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700"
                          >
                            <Calendar className="w-4 h-4" />
                            <span>Re-open Google Calendar</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => setOnlineSuccess(false)}
                            className="text-xs font-semibold text-blue-700 hover:underline"
                          >
                            Modify booking details
                          </button>
                        </div>
                      </div>
                    ) : (
                      <form onSubmit={handleOnlineSubmit} noValidate className="space-y-5">
                        {/* Full Name */}
                        <div>
                          <label
                            htmlFor="online-name"
                            className="block text-xs font-bold uppercase tracking-wider text-navy-950 mb-1.5"
                          >
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="online-name"
                            value={onlineForm.name}
                            onChange={(e) =>
                              setOnlineForm((prev) => ({ ...prev, name: e.target.value }))
                            }
                            placeholder="e.g. Rahul Sharma"
                            className={`w-full px-4 py-3 rounded-xl border text-sm text-navy-950 focus:outline-none focus:ring-2 transition-all ${
                              onlineErrors.name
                                ? "border-red-400 focus:ring-red-300 bg-red-50/30"
                                : "border-gray-200 focus:border-blue-400 focus:ring-blue-100 bg-white"
                            }`}
                          />
                          {onlineErrors.name && (
                            <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                              <AlertCircle className="w-3.5 h-3.5" />
                              <span>{onlineErrors.name}</span>
                            </p>
                          )}
                        </div>

                        {/* Phone Number */}
                        <div>
                          <label
                            htmlFor="online-phone"
                            className="block text-xs font-bold uppercase tracking-wider text-navy-950 mb-1.5"
                          >
                            Phone Number <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            id="online-phone"
                            value={onlineForm.phone}
                            onChange={(e) =>
                              setOnlineForm((prev) => ({ ...prev, phone: e.target.value }))
                            }
                            placeholder="e.g. 98765 43210"
                            className={`w-full px-4 py-3 rounded-xl border text-sm text-navy-950 focus:outline-none focus:ring-2 transition-all ${
                              onlineErrors.phone
                                ? "border-red-400 focus:ring-red-300 bg-red-50/30"
                                : "border-gray-200 focus:border-blue-400 focus:ring-blue-100 bg-white"
                            }`}
                          />
                          {onlineErrors.phone && (
                            <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                              <AlertCircle className="w-3.5 h-3.5" />
                              <span>{onlineErrors.phone}</span>
                            </p>
                          )}
                        </div>

                        {/* Email Address (for Calendar invite) */}
                        <div>
                          <label
                            htmlFor="online-email"
                            className="block text-xs font-bold uppercase tracking-wider text-navy-950 mb-1.5"
                          >
                            Email Address <span className="text-gray-400 text-[11px] normal-case font-normal">(to receive calendar invite)</span>
                          </label>
                          <div className="relative">
                            <input
                              type="email"
                              id="online-email"
                              value={onlineForm.email}
                              onChange={(e) =>
                                setOnlineForm((prev) => ({ ...prev, email: e.target.value }))
                              }
                              placeholder="e.g. rahul@example.com"
                              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-navy-950 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all pl-10"
                            />
                            <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                          </div>
                        </div>

                        {/* Main Concern Dropdown */}
                        <div>
                          <label
                            htmlFor="online-concern"
                            className="block text-xs font-bold uppercase tracking-wider text-navy-950 mb-1.5"
                          >
                            Main Concern <span className="text-red-500">*</span>
                          </label>
                          <select
                            id="online-concern"
                            value={onlineForm.concern}
                            onChange={(e) =>
                              setOnlineForm((prev) => ({ ...prev, concern: e.target.value }))
                            }
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-navy-950 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                          >
                            {CONCERN_OPTIONS.map((c) => (
                              <option key={c} value={c}>
                                {c}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Preferred Consultation Date */}
                        <div>
                          <label
                            htmlFor="online-date"
                            className="block text-xs font-bold uppercase tracking-wider text-navy-950 mb-1.5"
                          >
                            Preferred Date <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="date"
                            id="online-date"
                            min={todayDate}
                            value={onlineForm.date}
                            onChange={(e) =>
                              setOnlineForm((prev) => ({ ...prev, date: e.target.value }))
                            }
                            className={`w-full px-4 py-3 rounded-xl border text-sm text-navy-950 focus:outline-none focus:ring-2 transition-all ${
                              onlineErrors.date
                                ? "border-red-400 focus:ring-red-300 bg-red-50/30"
                                : "border-gray-200 focus:border-blue-400 focus:ring-blue-100 bg-white"
                            }`}
                          />
                          {onlineErrors.date && (
                            <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                              <AlertCircle className="w-3.5 h-3.5" />
                              <span>{onlineErrors.date}</span>
                            </p>
                          )}
                        </div>

                        {/* Preferred Time Slot */}
                        <div>
                          <label
                            htmlFor="online-time"
                            className="block text-xs font-bold uppercase tracking-wider text-navy-950 mb-1.5"
                          >
                            Preferred Time
                          </label>
                          <select
                            id="online-time"
                            value={onlineForm.time}
                            onChange={(e) =>
                              setOnlineForm((prev) => ({
                                ...prev,
                                time: e.target.value as OnlineBookingData["time"],
                              }))
                            }
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-navy-950 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                          >
                            {TIME_SLOT_OPTIONS.map((slot) => (
                              <option key={slot.value} value={slot.value}>
                                {slot.label}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-2">
                          <button
                            type="submit"
                            className="w-full py-3.5 px-6 rounded-full font-semibold text-white bg-gradient-to-r from-blue-600 via-blue-600 to-blue-700 hover:from-blue-700 hover:to-navy-950 active:scale-98 transition-all shadow-md shadow-blue-600/25 flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-blue-400"
                          >
                            <Calendar className="w-5 h-5" />
                            <span>Continue to Google Calendar &amp; Google Meet</span>
                          </button>
                        </div>

                        {/* Notice Note */}
                        <p className="text-xs text-center text-ink-900/80 leading-relaxed pt-1">
                          You will be redirected to Google Calendar to review and confirm your session. A Google Meet link will be generated automatically.
                        </p>
                      </form>
                    )}
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="clinic-panel"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
              >
                {/* Left Column: Visual, Address, Map & Prep Note (Warm Accent Tint) */}
                <div className="lg:col-span-5 space-y-6">
                  {/* Visual: Clinic Photo Placeholder (Warm Accent Tint) */}
                  <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-amber-50 via-white to-amber-100/60 border border-amber-200/80 shadow-card overflow-hidden">
                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4 shadow-sm border border-amber-200">
                        <Building2 className="w-6 h-6" />
                      </div>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-navy-950 mb-2">
                        In-Person Clinic Visit
                      </h3>
                      <p className="text-sm text-ink-900 leading-relaxed mb-6">
                        Complete polarized trichoscopic scalp scan, follicle root analysis, and direct clinical consultation with Dr. Ritesh Safariya.
                      </p>

                      {/* Clinic Photo Placeholder Frame */}
                      {/* TODO: Replace with actual clinic interior/exterior photo */}
                      <div className="relative rounded-2xl overflow-hidden border-2 border-amber-200/80 bg-stone-100 aspect-[4/3] shadow-inner flex flex-col items-center justify-center text-center p-4">
                        <Building2 className="w-12 h-12 text-amber-700/60 mb-2" />
                        <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                          [Clinic Photo Placeholder]
                        </span>
                        <p className="text-[11px] text-stone-600 mt-1 max-w-xs">
                          Rama Trichology Hair and Scalp Clinic · Mira Road East
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Address Block & Google Map */}
                  <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-amber-100 shadow-soft space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-amber-800 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-serif text-base font-bold text-navy-950">
                          Clinic Location
                        </h4>
                        <p className="text-xs sm:text-sm text-ink-900 mt-1 leading-relaxed">
                          {CLINIC_ADDRESS}
                        </p>
                      </div>
                    </div>

                    {/* Clinic Hours Placeholder (Explicit TODO requirement) */}
                    <div className="rounded-xl p-3.5 bg-amber-50/80 border border-amber-200/60 flex items-start gap-2.5">
                      <Clock className="w-4 h-4 text-amber-800 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-amber-900 block">
                          Consultation Timings
                        </span>
                        {/* TODO: Add Clinic Consultation Hours - Confirm exact operating timings */}
                        <p className="text-xs text-amber-900/90 mt-0.5">
                          {/* TODO Placeholder: Confirm exact operating schedule */}
                          Mon – Sat: 10:00 AM – 8:00 PM | Sun: By appointment
                        </p>
                      </div>
                    </div>

                    {/* Embedded Google Map */}
                    <div className="relative rounded-2xl overflow-hidden border border-gray-200 aspect-[16/9] shadow-inner bg-gray-50">
                      {/* Embedded Google Map iframe */}
                      <iframe
                        title="Rama Trichology Clinic Location on Google Maps"
                        src="https://maps.google.com/maps?q=A2-104%2C%201st%20Floor%2C%20Prabhakar%20CHS%20Society%2C%20Shanti%20Nagar%2C%20Sec.4%2C%20Mira%20Road%20(E)%2C%20Mira%20Bhayandar%2C%20Maharashtra%20401107&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        className="w-full h-full border-0"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>

                    {/* Get Directions Button */}
                    <a
                      href={GOOGLE_MAPS_DIRECTIONS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-amber-900 bg-amber-100 hover:bg-amber-200 transition-colors border border-amber-200"
                    >
                      <MapPin className="w-4 h-4 text-amber-800" />
                      <span>Get Directions on Google Maps</span>
                      <ExternalLink className="w-3.5 h-3.5 text-amber-800" />
                    </a>
                  </div>

                  {/* Prep Note */}
                  <div className="rounded-2xl p-4 bg-amber-50/90 border border-amber-200/80 flex items-start gap-3">
                    <FileText className="w-5 h-5 text-amber-800 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-900 block mb-0.5">
                        Preparation Note
                      </span>
                      <p className="text-xs sm:text-sm text-ink-900 leading-relaxed">
                        What to bring: previous reports and the products you currently use.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Column: Clinic Booking Form */}
                <div id="booking-form" className="lg:col-span-7">
                  <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-amber-100 shadow-xl">
                    <h3 className="font-serif text-2xl font-bold text-navy-950 mb-1">
                      Clinic Visit Details
                    </h3>
                    <p className="text-xs sm:text-sm text-ink-900 mb-6">
                      Schedule your in-person trichoscopy appointment with Dr. Ritesh Safariya.
                    </p>

                    {clinicSuccess ? (
                      <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                        <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                        <h4 className="font-serif text-lg font-bold text-navy-950">
                          WhatsApp Redirected!
                        </h4>
                        <p className="text-sm text-ink-900 max-w-md mx-auto">
                          WhatsApp has opened with your clinic visit request prefilled. Send your message to confirm your slot with Dr. Ritesh Safariya.
                        </p>
                        <button
                          type="button"
                          onClick={() => setClinicSuccess(false)}
                          className="mt-2 text-xs font-semibold text-blue-700 hover:underline"
                        >
                          Modify or book another visit
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleClinicSubmit} noValidate className="space-y-5">
                        {/* Full Name */}
                        <div>
                          <label
                            htmlFor="clinic-name"
                            className="block text-xs font-bold uppercase tracking-wider text-navy-950 mb-1.5"
                          >
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="clinic-name"
                            value={clinicForm.name}
                            onChange={(e) =>
                              setClinicForm((prev) => ({ ...prev, name: e.target.value }))
                            }
                            placeholder="e.g. Priya Patel"
                            className={`w-full px-4 py-3 rounded-xl border text-sm text-navy-950 focus:outline-none focus:ring-2 transition-all ${
                              clinicErrors.name
                                ? "border-red-400 focus:ring-red-300 bg-red-50/30"
                                : "border-gray-200 focus:border-amber-400 focus:ring-amber-100 bg-white"
                            }`}
                          />
                          {clinicErrors.name && (
                            <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                              <AlertCircle className="w-3.5 h-3.5" />
                              <span>{clinicErrors.name}</span>
                            </p>
                          )}
                        </div>

                        {/* Phone Number */}
                        <div>
                          <label
                            htmlFor="clinic-phone"
                            className="block text-xs font-bold uppercase tracking-wider text-navy-950 mb-1.5"
                          >
                            Phone Number (WhatsApp) <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            id="clinic-phone"
                            value={clinicForm.phone}
                            onChange={(e) =>
                              setClinicForm((prev) => ({ ...prev, phone: e.target.value }))
                            }
                            placeholder="e.g. 98765 43210"
                            className={`w-full px-4 py-3 rounded-xl border text-sm text-navy-950 focus:outline-none focus:ring-2 transition-all ${
                              clinicErrors.phone
                                ? "border-red-400 focus:ring-red-300 bg-red-50/30"
                                : "border-gray-200 focus:border-amber-400 focus:ring-amber-100 bg-white"
                            }`}
                          />
                          {clinicErrors.phone && (
                            <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                              <AlertCircle className="w-3.5 h-3.5" />
                              <span>{clinicErrors.phone}</span>
                            </p>
                          )}
                        </div>

                        {/* Main Concern Dropdown */}
                        <div>
                          <label
                            htmlFor="clinic-concern"
                            className="block text-xs font-bold uppercase tracking-wider text-navy-950 mb-1.5"
                          >
                            Main Concern <span className="text-red-500">*</span>
                          </label>
                          <select
                            id="clinic-concern"
                            value={clinicForm.concern}
                            onChange={(e) =>
                              setClinicForm((prev) => ({ ...prev, concern: e.target.value }))
                            }
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-navy-950 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all"
                          >
                            {CONCERN_OPTIONS.map((c) => (
                              <option key={c} value={c}>
                                {c}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Preferred Date (Date picker, no past dates) */}
                        <div>
                          <label
                            htmlFor="clinic-date"
                            className="block text-xs font-bold uppercase tracking-wider text-navy-950 mb-1.5"
                          >
                            Preferred Date <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="date"
                            id="clinic-date"
                            min={todayDate}
                            value={clinicForm.date}
                            onChange={(e) =>
                              setClinicForm((prev) => ({ ...prev, date: e.target.value }))
                            }
                            className={`w-full px-4 py-3 rounded-xl border text-sm text-navy-950 focus:outline-none focus:ring-2 transition-all ${
                              clinicErrors.date
                                ? "border-red-400 focus:ring-red-300 bg-red-50/30"
                                : "border-gray-200 focus:border-amber-400 focus:ring-amber-100 bg-white"
                            }`}
                          />
                          {clinicErrors.date && (
                            <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                              <AlertCircle className="w-3.5 h-3.5" />
                              <span>{clinicErrors.date}</span>
                            </p>
                          )}
                        </div>

                        {/* Preferred Time */}
                        <div>
                          <label
                            htmlFor="clinic-time"
                            className="block text-xs font-bold uppercase tracking-wider text-navy-950 mb-1.5"
                          >
                            Preferred Time
                          </label>
                          <select
                            id="clinic-time"
                            value={clinicForm.time}
                            onChange={(e) =>
                              setClinicForm((prev) => ({
                                ...prev,
                                time: e.target.value as ClinicBookingData["time"],
                              }))
                            }
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-navy-950 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all"
                          >
                            {TIME_SLOT_OPTIONS.map((slot) => (
                              <option key={slot.value} value={slot.value}>
                                {slot.label}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-2">
                          <button
                            type="submit"
                            className="w-full py-3.5 px-6 rounded-full font-semibold text-white bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 hover:from-amber-700 hover:to-navy-950 active:scale-98 transition-all shadow-md shadow-amber-600/25 flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-amber-400"
                          >
                            <Calendar className="w-5 h-5" />
                            <span>Book Clinic Visit</span>
                          </button>
                        </div>

                        {/* WhatsApp Notice Note */}
                        <p className="text-xs text-center text-ink-900/80 leading-relaxed pt-1">
                          You&apos;ll continue on WhatsApp. Our team will confirm your slot there.
                        </p>
                      </form>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile Sticky Bottom CTA */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 p-3 bg-white/95 backdrop-blur-md border-t border-sky-100 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <button
          type="button"
          onClick={scrollToForm}
          className={`w-full py-3 px-5 rounded-full font-semibold text-white text-sm flex items-center justify-center gap-2 shadow-md active:scale-95 transition-all ${
            mode === "online"
              ? "bg-gradient-to-r from-blue-600 to-blue-700 shadow-blue-600/20"
              : "bg-gradient-to-r from-amber-600 to-amber-700 shadow-amber-600/20"
          }`}
        >
          {mode === "online" ? (
            <>
              <Video className="w-4 h-4" />
              <span>Book Online (Google Meet)</span>
            </>
          ) : (
            <>
              <MapPin className="w-4 h-4" />
              <span>Book Clinic Visit</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
