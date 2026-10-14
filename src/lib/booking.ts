/**
 * Shared Consultation Booking Utilities
 * Rama Hair Clinic – Trichology Center
 */

export type ConsultationMode = "online" | "clinic";

export const CLINIC_WEBSITE_URL =
  "https://ramahairclinic.com/";

export const CLINIC_GOOGLE_MEET_URL = "https://meet.google.com/rtc-hair-meet";

export const CONCERN_OPTIONS = [
  "Hair fall",
  "Scalp/hair disease",
  "Hair transplant",
  "Camouflage",
  "Wigs & extensions",
  "Other",
] as const;

export const TIME_SLOT_OPTIONS = [
  { value: "10:00 AM – 11:00 AM", label: "10:00 AM – 11:00 AM" },
  { value: "11:00 AM – 12:00 PM", label: "11:00 AM – 12:00 PM" },
  { value: "12:00 PM – 01:00 PM", label: "12:00 PM – 01:00 PM" },
  { value: "01:00 PM – 02:00 PM", label: "01:00 PM – 02:00 PM" },
  { value: "02:00 PM – 03:00 PM", label: "02:00 PM – 03:00 PM" },
  { value: "03:00 PM – 04:00 PM", label: "03:00 PM – 04:00 PM" },
  { value: "04:00 PM – 05:00 PM", label: "04:00 PM – 05:00 PM" },
  { value: "05:00 PM – 06:00 PM", label: "05:00 PM – 06:00 PM" },
  { value: "06:00 PM – 07:00 PM", label: "06:00 PM – 07:00 PM" },
  { value: "07:00 PM – 08:00 PM", label: "07:00 PM – 08:00 PM" },
] as const;

export type TimeSlotValue = (typeof TIME_SLOT_OPTIONS)[number]["value"];

export interface OnlineBookingData {
  name: string;
  phone: string;
  email?: string;
  concern: string;
  date: string;
  time: TimeSlotValue | string;
}

export interface ClinicBookingData {
  name: string;
  phone: string;
  concern: string;
  date: string;
  time: TimeSlotValue | string;
}

export const CLINIC_ADDRESS =
  "A2-104, 1st Floor, Prabhakar CHS Society, Shanti Nagar, Sec.4, Mira Road (E), Mira Bhayandar, Maharashtra 401107";

export const GOOGLE_MAPS_DIRECTIONS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  CLINIC_ADDRESS
)}`;

export const CLINIC_WHATSAPP_NUMBER = "919699581541";
export const CLINIC_GOOGLE_EMAIL = "ramatrichologyclinic@gmail.com";

const TIME_SLOT_HOURS: Record<string, { start: string; end: string }> = {
  "10:00 AM – 11:00 AM": { start: "100000", end: "110000" },
  "11:00 AM – 12:00 PM": { start: "110000", end: "120000" },
  "12:00 PM – 01:00 PM": { start: "120000", end: "130000" },
  "01:00 PM – 02:00 PM": { start: "130000", end: "140000" },
  "02:00 PM – 03:00 PM": { start: "140000", end: "150000" },
  "03:00 PM – 04:00 PM": { start: "150000", end: "160000" },
  "04:00 PM – 05:00 PM": { start: "160000", end: "170000" },
  "05:00 PM – 06:00 PM": { start: "170000", end: "180000" },
  "06:00 PM – 07:00 PM": { start: "180000", end: "190000" },
  "07:00 PM – 08:00 PM": { start: "190000", end: "200000" },
};

/**
 * Builds a pre-filled Google Calendar event URL that automatically invites
 * the clinic (ramatrichologyclinic@gmail.com) and attaches Google Meet conferencing.
 */
export function buildGoogleCalendarUrl(
  data: OnlineBookingData,
  meetUrl: string = CLINIC_GOOGLE_MEET_URL
): string {
  const cleanDate = (data.date || new Date().toISOString().split("T")[0]).replace(/-/g, "");

  const slotHours = TIME_SLOT_HOURS[data.time] || { start: "100000", end: "110000" };
  const datesParam = `${cleanDate}T${slotHours.start}/${cleanDate}T${slotHours.end}`;
  const title = `Online Video Consultation - ${data.name} | Dr. Ritesh Safariya`;

  const detailsLines = [
    "🩺 Rama Hair Clinic – Trichology CenterAL CONSULTATION",
    "========================================",
    `Patient Name: ${data.name}`,
    `Phone: ${data.phone}`,
    data.email ? `Patient Email: ${data.email}` : "",
    `Primary Concern: ${data.concern}`,
    `Date & Time Slot: ${data.date} (${data.time})`,
    "----------------------------------------",
    "Doctor: Dr. Ritesh Safariya (Lead Consultant & Trichologist)",
    "Consultation Mode: Online Video Consultation (Google Meet)",
    `Google Meet Video Call Link: ${meetUrl}`,
    `Clinic Calendar & Email: ${CLINIC_GOOGLE_EMAIL}`,
    "Clinic Contact: +91 96995 81541",
    `Clinic Website: ${CLINIC_WEBSITE_URL}`,
    "----------------------------------------",
    "PREPARATION NOTE:",
    "Please have clear, well-lit photos of your scalp/hair ready to share during the video call.",
  ].filter(Boolean);

  const attendees = data.email
    ? `${CLINIC_GOOGLE_EMAIL},${data.email.trim()}`
    : CLINIC_GOOGLE_EMAIL;

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: title,
    dates: datesParam,
    details: detailsLines.join("\n"),
    location: meetUrl,
    add: attendees,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

/**
 * Format and encode prefilled WhatsApp message for Clinic (in-person) consultation
 */
export function buildClinicWhatsAppUrl(data: ClinicBookingData): string {
  const message = `[CLINIC VISIT] Hi, I'd like to book an in-person clinic visit. Name: ${data.name}. Phone: ${data.phone}. Concern: ${data.concern}. Preferred date: ${data.date}. Preferred time slot: ${data.time}.`;
  return `https://wa.me/${CLINIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
