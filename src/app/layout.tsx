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
    "Rama Trichology",
  ],
  authors: [{ name: `${CLINIC_INFO.brandName}` }],
  creator: `${CLINIC_INFO.brandName}`,
  metadataBase: new URL("https://ramatrichology.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ramatrichology.com",
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
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased text-ink-900 relative" style={{ backgroundColor: "#f8fbff" }}>
        <BackgroundWaves />
        {/* GPU-composited full-page service hover dimming overlay */}
        <div id="page-hover-dim-overlay" aria-hidden="true" />
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
