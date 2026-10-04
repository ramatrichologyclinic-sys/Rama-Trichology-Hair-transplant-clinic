"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Sparkles,
  Calendar,
  Video,
  Building2,
  MapPin,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SERVICES, CLINIC_INFO } from "@/lib/constants";

interface NavItem {
  name: string;
  href: string;
  hasDropdown?: boolean;
  icon?: typeof Sparkles;
}

const NAV_ITEMS: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "About", href: "/about" },
  { name: "Results", href: "/results" },
  { name: "Free Quiz", href: "/assessment", icon: Sparkles },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isBookOpen, setIsBookOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileBookOpen, setIsMobileBookOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const bookDropdownRef = useRef<HTMLDivElement>(null);
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const bookTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close dropdowns on click outside or escape key
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
      if (
        bookDropdownRef.current &&
        !bookDropdownRef.current.contains(event.target as Node)
      ) {
        setIsBookOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsServicesOpen(false);
        setIsBookOpen(false);
        setIsMobileMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Close menus on route change
  useEffect(() => {
    setIsServicesOpen(false);
    setIsBookOpen(false);
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
    setIsMobileBookOpen(false);
  }, [pathname]);

  const handleServicesEnter = () => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    setIsServicesOpen(true);
  };

  const handleServicesLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150);
  };

  const handleBookEnter = () => {
    if (bookTimeoutRef.current) clearTimeout(bookTimeoutRef.current);
    setIsBookOpen(true);
  };

  const handleBookLeave = () => {
    bookTimeoutRef.current = setTimeout(() => {
      setIsBookOpen(false);
    }, 150);
  };

  return (
    <header className="sticky top-0 z-50 w-full pt-2 sm:pt-3 pb-2 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-full border border-sky-100 shadow-[0_8px_30px_rgba(2,132,199,0.07)] px-4 sm:px-6 h-18 sm:h-20 flex items-center justify-between">
          {/* Logo — circular frame removed, enlarged and crisp directly */}
          <Link
            href="/"
            className="flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-xl py-1 pr-2"
            aria-label={`${CLINIC_INFO.brandName} Home`}
          >
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 flex items-center justify-center">
              <Image
                src="/images/logo-clean.png"
                alt="Rama Trichology Hair and Scalp Clinic official logo"
                width={80}
                height={64}
                priority
                className="w-auto h-[51px] sm:h-[60px] object-contain hover:scale-105 transition-transform duration-200"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-navy-950 group-hover:text-blue-700 transition-colors">
                {CLINIC_INFO.brandName}
              </span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-sky-800 font-semibold -mt-0.5">
                {CLINIC_INFO.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation with Sliding Gliding Capsule Hover Animation */}
          <nav
            className="hidden lg:flex items-center gap-1 relative"
            aria-label="Main Navigation"
            onMouseLeave={() => setHoveredNav(null)}
          >
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              const isHovered = hoveredNav === item.href;
              const hasPill = isHovered || (hoveredNav === null && isActive);
              const Icon = item.icon;

              if (item.hasDropdown) {
                return (
                  <div
                    key={item.name}
                    ref={dropdownRef}
                    className="relative inline-block"
                    onMouseEnter={() => {
                      setHoveredNav(item.href);
                      handleServicesEnter();
                    }}
                    onMouseLeave={() => {
                      handleServicesLeave();
                    }}
                  >
                    <div className="relative flex items-center">
                      {hasPill && (
                        <motion.div
                          layoutId="nav-sliding-pill"
                          transition={{
                            type: "spring",
                            stiffness: 160,
                            damping: 24,
                            mass: 0.9,
                          }}
                          className="absolute inset-0 rounded-full bg-sky-100/90 shadow-sm border border-sky-200/60"
                        />
                      )}
                      <Link
                        href="/services"
                        className={`relative z-10 px-3.5 py-1.5 text-[15px] font-semibold transition-colors flex items-center gap-1.5 ${
                          isActive
                            ? "text-blue-700"
                            : "text-navy-950 hover:text-blue-700"
                        }`}
                        aria-haspopup="true"
                        aria-expanded={isServicesOpen}
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isServicesOpen ? "transform rotate-180" : ""
                          }`}
                        />
                      </Link>
                    </div>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.98 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-0 mt-2 w-80 lg:w-96 rounded-2xl bg-white shadow-2xl border border-sky-100 py-3 px-2 z-50"
                          role="menu"
                          aria-orientation="vertical"
                        >
                          <div className="px-3 py-2 border-b border-gray-100 flex items-center justify-between">
                            <span className="text-xs font-bold uppercase tracking-wider text-sky-800">
                              Clinical Specializations
                            </span>
                            <Link
                              href="/services"
                              className="text-xs font-semibold text-blue-700 hover:underline flex items-center gap-1"
                              onClick={() => setIsServicesOpen(false)}
                            >
                              Overview <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>

                          <div className="mt-2 space-y-1">
                            {SERVICES.map((service) => {
                              const isCurrent =
                                pathname === `/services/${service.slug}`;
                              return (
                                <Link
                                  key={service.slug}
                                  href={`/services/${service.slug}`}
                                  role="menuitem"
                                  className={`group block px-3 py-2.5 rounded-xl transition-all duration-200 ${
                                    isCurrent
                                      ? "bg-sky-50 text-blue-700 border-l-4 border-blue-700"
                                      : "text-navy-950 hover:bg-sky-50/80 hover:text-blue-700 hover:pl-4 border-l-4 border-transparent hover:border-blue-400"
                                  } focus-visible:ring-2 focus-visible:ring-blue-400`}
                                  onClick={() => setIsServicesOpen(false)}
                                >
                                  <div className="font-semibold text-sm text-navy-950 group-hover:text-blue-700 transition-colors">
                                    {service.title}
                                  </div>
                                  <p className="text-xs text-ink-900 line-clamp-1 mt-0.5">
                                    {service.shortDesc}
                                  </p>
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <div
                  key={item.name}
                  className="relative inline-block"
                  onMouseEnter={() => setHoveredNav(item.href)}
                >
                  {hasPill && (
                    <motion.div
                      layoutId="nav-sliding-pill"
                      transition={{
                        type: "spring",
                        stiffness: 160,
                        damping: 24,
                        mass: 0.9,
                      }}
                      className="absolute inset-0 rounded-full bg-sky-100/90 shadow-sm border border-sky-200/60"
                    />
                  )}
                  <Link
                    href={item.href}
                    className={`relative z-10 px-3.5 py-1.5 rounded-full text-[15px] font-semibold transition-colors flex items-center gap-1.5 ${
                      isActive
                        ? "text-blue-700"
                        : "text-navy-950 hover:text-blue-700"
                    }`}
                  >
                    {Icon && <Icon className="w-4 h-4 text-blue-700" />}
                    <span>{item.name}</span>
                  </Link>
                </div>
              );
            })}
          </nav>

          {/* Primary CTA with Online / Offline Dropdown & Mobile Toggle */}
          <div className="flex items-center gap-3">
            {/* Book Consultation Dropdown Button */}
            <div
              ref={bookDropdownRef}
              className="relative hidden sm:inline-block"
              onMouseEnter={handleBookEnter}
              onMouseLeave={handleBookLeave}
              onFocus={handleBookEnter}
              onBlur={(e) => {
                if (
                  bookDropdownRef.current &&
                  !bookDropdownRef.current.contains(e.relatedTarget as Node)
                ) {
                  setIsBookOpen(false);
                }
              }}
            >
              <button
                type="button"
                onClick={() => setIsBookOpen((prev) => !prev)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setIsBookOpen((prev) => !prev);
                  }
                  if (e.key === "Escape") {
                    setIsBookOpen(false);
                  }
                }}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-[15px] font-semibold text-white bg-gradient-to-r from-blue-600 via-blue-600 to-blue-700 hover:from-blue-700 hover:to-navy-950 active:scale-95 transition-all shadow-md shadow-blue-600/25 focus-visible:ring-2 focus-visible:ring-blue-400"
                aria-haspopup="true"
                aria-expanded={isBookOpen}
                aria-label="Book Consultation options"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Book Consultation</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    isBookOpen ? "transform rotate-180" : ""
                  }`}
                />
              </button>

              {/* Book Consultation Dropdown: Two Cards with Cool & Warm Accents */}
              <AnimatePresence>
                {isBookOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 w-80 sm:w-96 rounded-2xl bg-white shadow-2xl border border-sky-100 p-3 z-50 focus:outline-none"
                    role="menu"
                    aria-label="Consultation mode options"
                  >
                    <div className="px-2 py-1.5 border-b border-gray-100 mb-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-sky-800">
                        Choose Consultation Mode
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      {/* Card 1: Online Consultation (Cool Accent Tint) */}
                      <Link
                        href="/book-consultation?mode=online"
                        onClick={() => setIsBookOpen(false)}
                        role="menuitem"
                        className="flex items-start gap-3.5 p-3.5 rounded-xl bg-sky-50/70 border border-sky-100 hover:bg-sky-100/80 hover:border-sky-300 transition-all duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                      >
                        <div className="w-10 h-10 rounded-xl bg-sky-100 text-blue-700 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-sm">
                          <Video className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-bold text-navy-950 group-hover:text-blue-700 transition-colors">
                              Online Consultation
                            </span>
                            <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-sky-100 text-blue-700 border border-sky-200/60">
                              Virtual
                            </span>
                          </div>
                          <p className="text-xs text-ink-900 mt-0.5">
                            Consult from anywhere in India
                          </p>
                          <p className="text-[11px] text-sky-700 font-medium mt-1">
                            Google Meet Video Call
                          </p>
                        </div>
                      </Link>

                      {/* Card 2: Clinic Visit (Warm Accent Tint) */}
                      <Link
                        href="/book-consultation?mode=clinic"
                        onClick={() => setIsBookOpen(false)}
                        role="menuitem"
                        className="flex items-start gap-3.5 p-3.5 rounded-xl bg-amber-50/70 border border-amber-100 hover:bg-amber-100/80 hover:border-amber-300 transition-all duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                      >
                        <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-600 group-hover:text-white transition-colors shadow-sm">
                          <MapPin className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-bold text-navy-950 group-hover:text-amber-800 transition-colors">
                              Clinic Visit
                            </span>
                            <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-200/60">
                              In-Person
                            </span>
                          </div>
                          <p className="text-xs text-ink-900 mt-0.5">
                            In-person scalp &amp; hair analysis
                          </p>
                          <p className="text-[11px] text-amber-800 font-medium mt-1">
                            Mira Road East · By appointment
                          </p>
                        </div>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Hamburger Button for Mobile */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="lg:hidden p-2 rounded-xl text-navy-950 hover:bg-sky-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer with Smooth Animation and Body Scroll Lock */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="lg:hidden fixed inset-x-0 top-20 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-xl max-h-[calc(100vh-5rem)] overflow-y-auto z-40"
          >
            <div className="px-4 py-6 space-y-3">
              {/* 1. Home */}
              <Link
                href="/"
                className={`block px-4 py-3 rounded-xl font-semibold text-base ${
                  pathname === "/"
                    ? "bg-sky-50 text-blue-700"
                    : "text-navy-950 hover:bg-gray-50"
                }`}
              >
                Home
              </Link>

              {/* 2. Services Accordion */}
              <div className="rounded-xl border border-gray-200 overflow-hidden">
                <div className="flex items-center justify-between bg-gray-50 px-4 py-3">
                  <Link
                    href="/services"
                    className="font-semibold text-base text-navy-950 hover:text-blue-700 flex-1"
                  >
                    Services Overview
                  </Link>
                  <button
                    type="button"
                    onClick={() => setIsMobileServicesOpen((prev) => !prev)}
                    className="p-1 text-navy-950 hover:text-blue-700 focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
                    aria-label="Expand services list"
                    aria-expanded={isMobileServicesOpen}
                  >
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-200 ${
                        isMobileServicesOpen ? "transform rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                {isMobileServicesOpen && (
                  <div className="bg-white py-2 px-3 space-y-1 divide-y divide-gray-100">
                    {SERVICES.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="block py-2.5 px-3 rounded-lg text-sm text-navy-950 hover:bg-sky-50 hover:text-blue-700 transition-colors"
                      >
                        <div className="font-semibold text-navy-950">
                          {service.title}
                        </div>
                        <div className="text-xs text-ink-900 line-clamp-1 mt-0.5">
                          {service.shortDesc}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* 3. About */}
              <Link
                href="/about"
                className={`block px-4 py-3 rounded-xl font-semibold text-base ${
                  pathname === "/about"
                    ? "bg-sky-50 text-blue-700"
                    : "text-navy-950 hover:bg-gray-50"
                }`}
              >
                About Dr. Ritesh Safariya &amp; Practice
              </Link>

              {/* 4. Results */}
              <Link
                href="/results"
                className={`block px-4 py-3 rounded-xl font-semibold text-base ${
                  pathname === "/results"
                    ? "bg-sky-50 text-blue-700"
                    : "text-navy-950 hover:bg-gray-50"
                }`}
              >
                Before &amp; After Gallery
              </Link>

              {/* 5. Free Quiz */}
              <Link
                href="/assessment"
                className={`block px-4 py-3 rounded-xl font-semibold text-base flex items-center justify-between ${
                  pathname === "/assessment"
                    ? "bg-sky-50 text-blue-700"
                    : "text-navy-950 hover:bg-gray-50"
                }`}
              >
                <span>Free Hair Health Quiz</span>
                <span className="text-xs bg-blue-700 text-white px-2 py-0.5 rounded-full font-medium">
                  3 Mins
                </span>
              </Link>

              {/* 6. FAQ */}
              <Link
                href="/faq"
                className={`block px-4 py-3 rounded-xl font-semibold text-base ${
                  pathname === "/faq"
                    ? "bg-sky-50 text-blue-700"
                    : "text-navy-950 hover:bg-gray-50"
                }`}
              >
                FAQ
              </Link>

              {/* 7. Contact */}
              <Link
                href="/contact"
                className={`block px-4 py-3 rounded-xl font-semibold text-base ${
                  pathname === "/contact"
                    ? "bg-sky-50 text-blue-700"
                    : "text-navy-950 hover:bg-gray-50"
                }`}
              >
                Contact &amp; Directions
              </Link>

              {/* Consultation Booking Mode Accordion for Mobile */}
              <div className="pt-2 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => setIsMobileBookOpen((prev) => !prev)}
                  aria-expanded={isMobileBookOpen}
                  aria-controls="mobile-book-accordion"
                  className="w-full flex items-center justify-between px-5 py-3 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-navy-950 transition-colors shadow-sm focus-visible:ring-2 focus-visible:ring-blue-400"
                >
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-white" />
                    <span>Book Consultation</span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isMobileBookOpen ? "transform rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isMobileBookOpen && (
                    <motion.div
                      id="mobile-book-accordion"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="mt-2 space-y-2 p-2 bg-sky-50/80 rounded-xl border border-sky-100">
                        {/* Card 1: Online */}
                        <Link
                          href="/book-consultation?mode=online"
                          onClick={() => {
                            setIsMobileBookOpen(false);
                            setIsMobileMenuOpen(false);
                          }}
                          className="flex items-start gap-3 p-3 rounded-xl bg-white border border-sky-100 hover:bg-sky-50 transition-colors"
                        >
                          <div className="w-9 h-9 rounded-lg bg-sky-100 text-blue-700 flex items-center justify-center flex-shrink-0">
                            <Video className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-navy-950">
                              Online Consultation
                            </div>
                            <div className="text-xs text-ink-900 mt-0.5">
                              Consult from anywhere in India
                            </div>
                            <div className="text-[11px] text-blue-700 font-medium mt-0.5">
                              Google Meet Video Call
                            </div>
                          </div>
                        </Link>

                        {/* Card 2: Clinic Visit */}
                        <Link
                          href="/book-consultation?mode=clinic"
                          onClick={() => {
                            setIsMobileBookOpen(false);
                            setIsMobileMenuOpen(false);
                          }}
                          className="flex items-start gap-3 p-3 rounded-xl bg-white border border-amber-100 hover:bg-amber-50 transition-colors"
                        >
                          <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center flex-shrink-0">
                            <MapPin className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-navy-950">
                              Clinic Visit
                            </div>
                            <div className="text-xs text-ink-900 mt-0.5">
                              In-person scalp &amp; hair analysis
                            </div>
                            <div className="text-[11px] text-amber-800 font-medium mt-0.5">
                              Mira Road East · By appointment
                            </div>
                          </div>
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
