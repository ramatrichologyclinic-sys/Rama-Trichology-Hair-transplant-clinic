/**
 * Shared Consultation Booking Utilities
 * Rama Trichology Hair & Scalp Clinic
 */

export type ConsultationMode = "online" | "clinic";

export interface OnlineBookingData {
  name: string;
  phone: string;
  email?: string;
  concern: string;
  date: string;
  time: "Morning" | "Afternoon" | "Evening";
}

export interface ClinicBookingData {
  name: string;
  phone: string;
  concern: string;
  date: string;
  time: "Morning" | "Afternoon" | "Evening";
}

export const CONCERN_OPTIONS = [
  "Hair fall",
  "Scalp/hair disease",
  "Hair transplant",
  "Camouflage",
  "Wigs & extensions",
  "Other",
] as const;

export const TIME_SLOT_OPTIONS = [
  { value: "Morning", label: "Morning (10:00 AM – 1:00 PM)" },
  { value: "Afternoon", label: "Afternoon (1:00 PM – 5:00 PM)" },
  { value: "Evening", label: "Evening (5:00 PM – 8:00 PM)" },
] as const;

export const CLINIC_ADDRESS =
  "A2-104, 1st Floor, Prabhakar CHS Society, Shanti Nagar, Sec.4, Mira Road (E), Mira Bhayandar, Maharashtra 401107";

export const GOOGLE_MAPS_DIRECTIONS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  CLINIC_ADDRESS
)}`;

export const CLINIC_WHATSAPP_NUMBER = "919699581541";
export const CLINIC_GOOGLE_EMAIL = "ramatrichology@gmail.com";

/**
 * Builds a pre-filled Google Calendar event URL that automatically invites
 * the clinic (ramatrichology@gmail.com) and attaches Google Meet conferencing.
 */
export function buildGoogleCalendarUrl(data: OnlineBookingData): string {
  const cleanDate = (data.date || new Date().toISOString().split("T")[0]).replace(/-/g, "");

  // Time slots in 24hr format
  let startHour = "110000";
  let endHour = "114500";
  if (data.time === "Afternoon") {
    startHour = "143000";
    endHour = "151500";
  } else if (data.time === "Evening") {
    startHour = "180000";
    endHour = "184500";
  }

  const datesParam = `${cleanDate}T${startHour}/${cleanDate}T${endHour}`;
  const title = `Online Consultation - ${data.name} | Dr. Ritesh Safariya`;

  const detailsLines = [
    "🩺 RAMA TRICHOLOGY CLINICAL CONSULTATION",
    "========================================",
    `Patient Name: ${data.name}`,
    `Phone: ${data.phone}`,
    data.email ? `Patient Email: ${data.email}` : "",
    `Primary Concern: ${data.concern}`,
    `Preferred Time Slot: ${data.time}`,
    "----------------------------------------",
    "Doctor: Dr. Ritesh Safariya (Lead Consultant & Trichologist)",
    "Video Platform: Google Meet",
    `Clinic Calendar: ${CLINIC_GOOGLE_EMAIL}`,
    "Clinic Contact: +91 96995 81541",
    "----------------------------------------",
    "PREPARATION NOTE:",
    "Please have clear, well-lit photos of your scalp ready to share during the call.",
  ].filter(Boolean);

  const attendees = data.email
    ? `${CLINIC_GOOGLE_EMAIL},${data.email.trim()}`
    : CLINIC_GOOGLE_EMAIL;

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: title,
    dates: datesParam,
    details: detailsLines.join("\n"),
    location: "Google Meet",
    add: attendees,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

/**
 * Format and encode prefilled WhatsApp message for Clinic (in-person) consultation
 */
export function buildClinicWhatsAppUrl(data: ClinicBookingData): string {
  const message = `[CLINIC VISIT] Hi, I'd like to book a clinic visit. Name: ${data.name}. Phone: ${data.phone}. Concern: ${data.concern}. Preferred date: ${data.date}. Preferred time: ${data.time}.`;
  return `https://wa.me/${CLINIC_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
