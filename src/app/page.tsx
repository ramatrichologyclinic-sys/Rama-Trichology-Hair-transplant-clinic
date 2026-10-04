import HeroSection from "@/components/home/HeroSection";
import HomeStackingCards from "@/components/home/HomeStackingCards";
import BeforeAfterCarousel from "@/components/home/BeforeAfterCarousel";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FaqAccordion from "@/components/home/FaqAccordion";
import FinalCtaBand from "@/components/home/FinalCtaBand";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section with 4 Clinical Slides */}
      <HeroSection />

      {/* 2. Stacking Scroll Clinical Narrative Sections:
          - Card A: Meet Dr. Ritesh Safariya (incorporating TrustBar at bottom)
          - Card B: Why Hair Fall Happens (Cerulean Blue)
          - Card C: How We Diagnose & Treat (Deep Sapphire)
          - Card D: Our Clinical Services (ServicesGrid) */}
      <HomeStackingCards />

      {/* 4. Documented Transformations */}
      <BeforeAfterCarousel variant="default" />

      {/* 5. Testimonials (Intact) */}
      <TestimonialsSection />

      {/* 6. FAQ Accordion */}
      <FaqAccordion />

      {/* 7. Final CTA Band */}
      <FinalCtaBand />
    </>
  );
}
