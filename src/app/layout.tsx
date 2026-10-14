import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/common/FloatingWhatsApp";
import SmoothScroll from "@/components/layout/SmoothScroll";
import BackgroundWaves from "@/components/layout/BackgroundWaves";
import { CLINIC_INFO } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz"],
});

export const metadata: Metadata = {
  title: {
    default: `${CLINIC_INFO.brandName} — ${CLINIC_INFO.tagline}`,
    template: `%s | ${CLINIC_INFO.brandName}`,
  },
  description:
    "Specialized trichology clinic providing clinical hair fall diagnosis, scalp disease treatment, advanced hair transplants, scalp micropigmentation, and medical hair systems.",
  keywords: [
    "trichology clinic",
    "hair fall treatment",
    "scalp specialist",
    "hair loss doctor",
    "dermatologist",
    "alopecia treatment",
    "hair transplant",
    "scalp micropigmentation",
    "Rama Hair Clinic",
  ],
  authors: [{ name: `${CLINIC_INFO.brandName}` }],
  creator: `${CLINIC_INFO.brandName}`,
  metadataBase: new URL("https://ramahairclinic.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ramahairclinic.com",
    siteName: `${CLINIC_INFO.brandName} — ${CLINIC_INFO.tagline}`,
    title: `${CLINIC_INFO.brandName} — ${CLINIC_INFO.tagline}`,
    description:
      "Evidence-based clinical trichology and hair restoration under the direction of Dr. Ritesh Safariya.",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: `${CLINIC_INFO.brandName} Official Logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${CLINIC_INFO.brandName} — ${CLINIC_INFO.tagline}`,
    description:
      "Evidence-based clinical trichology and hair restoration under the direction of Dr. Ritesh Safariya.",
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/favicon.png`, type: "image/png" },
      { url: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/favicon-32x32.png`, sizes: "32x32", type: "image/png" },
      { url: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/favicon-16x16.png`, sizes: "16x16", type: "image/png" },
      { url: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/icon.png`, type: "image/png" },
      { url: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/favicon.ico`, sizes: "any" },
    ],
    apple: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/apple-touch-icon.png`,
    shortcut: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/favicon.ico`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: CLINIC_INFO.brandName,
    alternateName: `${CLINIC_INFO.brandName} — ${CLINIC_INFO.tagline}`,
    image: "https://ramatrichology.com/images/logo.png",
    telephone: CLINIC_INFO.phone,
    email: CLINIC_INFO.email,
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "A2-104, 1st Floor, Prabhakar CHS Society, Shanti Nagar, Sec. 4",
      addressLocality: "Mira Road (E), Mira Bhayandar",
      addressRegion: "Maharashtra",
      postalCode: "401107",
      addressCountry: "IN",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "10:00",
        closes: "20:00",
      },
    ],
    medicalSpecialty: ["Dermatology", "Trichology"],
    physician: {
      "@type": "Physician",
      name: CLINIC_INFO.doctorName,
      medicalSpecialty: "Trichology",
      jobTitle: "Chief Trichologist & Dermatologist",
    },
  };

  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <head>
        <link rel="icon" href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/favicon.png`} type="image/png" />
        <link rel="icon" href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/favicon-32x32.png`} sizes="32x32" type="image/png" />
        <link rel="icon" href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/favicon-16x16.png`} sizes="16x16" type="image/png" />
        <link rel="icon" href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/icon.png`} type="image/png" />
        <link rel="icon" href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/favicon.ico`} sizes="any" />
        <link rel="shortcut icon" href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/favicon.ico`} />
        <link rel="apple-touch-icon" href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/apple-touch-icon.png`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  var base = window.location.pathname.startsWith('/Rama-Trichology-Hair-transplant-clinic') ? '/Rama-Trichology-Hair-transplant-clinic' : '';
                  navigator.serviceWorker.register(base + '/sw.js', { scope: base + '/' }).catch(function() {});
                });
              }
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Google Translate React DOM Crash Guard
              if (typeof window !== 'undefined' && typeof Node === 'function' && Node.prototype) {
                const origRemoveChild = Node.prototype.removeChild;
                Node.prototype.removeChild = function(child) {
                  if (child.parentNode !== this) {
                    return child;
                  }
                  return origRemoveChild.apply(this, arguments);
                };
                const origInsertBefore = Node.prototype.insertBefore;
                Node.prototype.insertBefore = function(newNode, referenceNode) {
                  if (referenceNode && referenceNode.parentNode !== this) {
                    return newNode;
                  }
                  return origInsertBefore.apply(this, arguments);
                };
              }
            `,
          }}
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              body > .skiptranslate,
              body > iframe.skiptranslate,
              iframe.skiptranslate,
              iframe[class*="skiptranslate"],
              iframe[id*=":1"],
              iframe[id*=":2"],
              iframe[id*="container"],
              .goog-te-banner-frame,
              .goog-te-banner-frame.skiptranslate,
              iframe.goog-te-banner-frame,
              .VIpgJd-ZVi9od-aZ2wEe-wOHMyf,
              .VIpgJd-ZVi9od-xl07Ob-OEVmcd,
              div.skiptranslate[style*="visibility: visible"],
              div.VIpgJd-ZVi9od-aZ2wEe-wOHMyf {
                visibility: hidden !important;
                opacity: 0 !important;
                position: fixed !important;
                top: -9999px !important;
                left: -9999px !important;
                width: 1px !important;
                height: 1px !important;
                max-width: 1px !important;
                max-height: 1px !important;
                overflow: hidden !important;
                pointer-events: none !important;
                z-index: -9999 !important;
              }
              #goog-gt-tt,
              .goog-te-balloon-frame,
              .VIpgJd-ZVi9od-ORHb-OEVmcd {
                display: none !important;
                visibility: hidden !important;
              }
              body {
                top: 0px !important;
                position: static !important;
              }
              html {
                top: 0px !important;
              }
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased text-ink-900 relative" style={{ backgroundColor: "#f8fbff" }}>
        <div id="google_translate_element" style={{ display: "none" }} aria-hidden="true" className="hidden notranslate" />
        <BackgroundWaves />
        <SmoothScroll>
          <Navbar />
          <main id="main-content" className="flex-grow relative">
            {children}
          </main>
          <Footer />
          <FloatingWhatsApp />
        </SmoothScroll>
      </body>
    </html>
  );
}
