import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, ShieldCheck, MessageCircle } from "lucide-react";
import { CLINIC_INFO, SERVICES } from "@/lib/constants";

export default function Footer() {
  return (
    <footer
      className="relative z-30 bg-navy-950 text-white border-t border-navy-950/20 pt-16 pb-12 shadow-[0_-20px_50px_rgba(14,42,77,0.5)]"
      style={{ backgroundColor: "#0E2A4D" }}
    >
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* Brand Info with 10% enlarged logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="relative w-14 h-14 flex-shrink-0 flex items-center justify-center">
                <Image
                  src="/images/logo-clean-white.png"
                  alt={`${CLINIC_INFO.brandName} Logo`}
                  width={68}
                  height={55}
                  className="w-auto h-12 object-contain"
                />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-white tracking-wide">
                  {CLINIC_INFO.brandName}
                </h3>
                <p className="text-xs text-ice-50 uppercase tracking-widest">
                  {CLINIC_INFO.tagline}
                </p>
              </div>
            </div>

            <p className="text-sm text-ice-50/90 leading-relaxed">
              Specialized clinical trichology dedicated to scientific diagnosis and personalized medical restoration of hair loss, follicle thinning, and scalp conditions under Dr. Ritesh Safariya.
            </p>

            <div className="flex items-center gap-2 text-xs text-ice-50/80 bg-white/5 border border-white/10 px-3 py-2 rounded-xl">
              <ShieldCheck className="w-4 h-4 text-blue-400 flex-shrink-0" />
              <span>Evidence-based clinical protocols only</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-base font-semibold text-white tracking-wide mb-4">
              Explore Practice
            </h4>
            <ul className="space-y-2.5 text-sm text-ice-50/90">
              <li>
                <Link href="/" className="hover:text-white hover:underline transition-colors focus-visible:ring-1 focus-visible:ring-blue-400 rounded">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white hover:underline transition-colors focus-visible:ring-1 focus-visible:ring-blue-400 rounded">
                  Clinical Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white hover:underline transition-colors focus-visible:ring-1 focus-visible:ring-blue-400 rounded">
                  About Dr. Ritesh Safariya &amp; Practice
                </Link>
              </li>
              <li>
                <Link href="/results" className="hover:text-white hover:underline transition-colors focus-visible:ring-1 focus-visible:ring-blue-400 rounded">
                  Before &amp; After Case Gallery
                </Link>
              </li>
              <li>
                <Link href="/assessment" className="hover:text-white hover:underline transition-colors focus-visible:ring-1 focus-visible:ring-blue-400 rounded">
                  Free Hair Health Check Quiz
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white hover:underline transition-colors focus-visible:ring-1 focus-visible:ring-blue-400 rounded">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white hover:underline transition-colors focus-visible:ring-1 focus-visible:ring-blue-400 rounded">
                  Contact &amp; Bookings
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-serif text-base font-semibold text-white tracking-wide mb-4">
              Treatment Pillars
            </h4>
            <ul className="space-y-2.5 text-sm text-ice-50/90">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="hover:text-white hover:underline transition-colors focus-visible:ring-1 focus-visible:ring-blue-400 rounded"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Clinic Contact Details */}
          <div>
            <h4 className="font-serif text-base font-semibold text-white tracking-wide mb-4">
              Clinic Details
            </h4>
            <ul className="space-y-3 text-sm text-ice-50/90">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="leading-snug">{CLINIC_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a
                  href={CLINIC_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white hover:underline"
                >
                  WhatsApp: +91 96995 81541
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href={`tel:${CLINIC_INFO.phone}`} className="hover:text-white hover:underline">
                  Phone: {CLINIC_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href={`mailto:${CLINIC_INFO.email}`} className="hover:text-white hover:underline">
                  {CLINIC_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>{CLINIC_INFO.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar — Agency Credit completely removed */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ice-50/80">
          <p>
            © {new Date().getFullYear()} {CLINIC_INFO.brandName} — {CLINIC_INFO.tagline}. All rights reserved.
          </p>
          <p className="text-ice-50/60">
            Clinical Hair and Scalp Care by Dr. Ritesh Safariya
          </p>
        </div>
      </div>
    </footer>
  );
}
