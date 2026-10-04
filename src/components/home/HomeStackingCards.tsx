"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import MeetTheDoctor from "@/components/home/MeetTheDoctor";
import WhyHairFallHappens from "@/components/home/WhyHairFallHappens";
import HowWeDiagnose from "@/components/home/HowWeDiagnose";
import ServicesGrid from "@/components/home/ServicesGrid";

/**
 * HomeStackingCards
 *
 * Implements pure CSS `position: sticky` stacking cards with GPU-accelerated
 * Framer Motion scroll progress transforms and calibrated scroll buffers:
 * - Card A: Meet Dr. Ritesh Safariya + Stats Bar (Luminous Sapphire)
 * - Card B: Why Hair Fall Happens (Rich Cerulean Blue)
 * - Card C: How We Diagnose & Treat (Deep Midnight Sapphire)
 * - Card D: Our Clinical Services (ServicesGrid)
 *
 * Each incoming section slides UP and OVER the previous one like a sheet of paper.
 * The section underneath pins and subtly recedes (scale ~0.95, brightness ~0.90).
 * Calibrated scroll buffers guarantee that all bottom content and empty breathing spaces
 * (214px below doctor buttons and 220px below hair fall cards) are 100% visible at rest
 * before the incoming sheet begins to cover them.
 */
export default function HomeStackingCards() {
  const cardARef = useRef<HTMLDivElement>(null);
  const cardBRef = useRef<HTMLDivElement>(null);
  const cardCRef = useRef<HTMLDivElement>(null);
  const cardDRef = useRef<HTMLDivElement>(null);

  const prefersReduced = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);
  const [offsets, setOffsets] = useState({ cardA: 0, cardB: 0, cardC: 0 });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const calcOffsets = () => {
      const vh = window.innerHeight;
      const getOffset = (el: HTMLElement | null) => {
        if (!el) return 0;
        const h = el.offsetHeight;
        return Math.min(0, vh - h);
      };

      setOffsets({
        cardA: getOffset(cardARef.current),
        cardB: getOffset(cardBRef.current),
        cardC: getOffset(cardCRef.current),
      });
    };

    calcOffsets();
    window.addEventListener("resize", calcOffsets);

    const ro = new ResizeObserver(calcOffsets);
    if (cardARef.current) ro.observe(cardARef.current);
    if (cardBRef.current) ro.observe(cardBRef.current);
    if (cardCRef.current) ro.observe(cardCRef.current);

    return () => {
      window.removeEventListener("resize", calcOffsets);
      ro.disconnect();
    };
  }, []);

  const isMotionActive = !prefersReduced && !isMobile;

  // Track Card B pulling up over Card A
  const { scrollYProgress: cardBProgress } = useScroll({
    target: cardBRef,
    offset: ["start end", "start start"],
  });

  // Track Card C pulling up over Card B
  const { scrollYProgress: cardCProgress } = useScroll({
    target: cardCRef,
    offset: ["start end", "start start"],
  });

  // Track Card D (ServicesGrid) pulling up over Card C
  const { scrollYProgress: cardDProgress } = useScroll({
    target: cardDRef,
    offset: ["start end", "start start"],
  });

  // Receding GPU-accelerated transform & dimming for Card A as Card B pulls over it
  const cardAScale = useTransform(cardBProgress, [0, 1], isMotionActive ? [1, 0.95] : [1, 1]);
  const cardADarkness = useTransform(cardBProgress, [0, 1], isMotionActive ? [0, 0.1] : [0, 0]);

  // Receding GPU-accelerated transform & dimming for Card B as Card C pulls over it
  const cardBScale = useTransform(cardCProgress, [0, 1], isMotionActive ? [1, 0.95] : [1, 1]);
  const cardBDarkness = useTransform(cardCProgress, [0, 1], isMotionActive ? [0, 0.1] : [0, 0]);

  // Receding GPU-accelerated transform & dimming for Card C as Card D pulls over it
  const cardCScale = useTransform(cardDProgress, [0, 1], isMotionActive ? [1, 0.95] : [1, 1]);
  const cardCDarkness = useTransform(cardDProgress, [0, 1], isMotionActive ? [0, 0.1] : [0, 0]);

  return (
    <div className="relative w-full">
      {/* ========================================================
          CARD A: Meet Dr. Ritesh Safariya + TrustBar
          Luminous Sapphire Blue Palette
          Ends with 214px of empty space below doctor buttons,
          followed by the Stats Bar (TrustBar)
          ======================================================== */}
      <div
        ref={cardARef}
        className="sticky z-10 w-full rounded-t-[32px] sm:rounded-t-[48px] home-stacking-card-a"
        style={{
          top: `${offsets.cardA}px`,
          background: "linear-gradient(145deg, #071930 0%, #0c274c 50%, #103160 100%)",
          boxShadow: "0 -25px 60px rgba(7, 25, 48, 0.25)",
          outline: "1px solid transparent",
        }}
      >
        <motion.div
          style={{
            scale: cardAScale,
            transformOrigin: "top center",
            willChange: isMotionActive ? "transform" : "auto",
          }}
          className="w-full flex flex-col relative"
        >
          <MeetTheDoctor />
          <motion.div
            style={{ opacity: cardADarkness }}
            className="absolute inset-0 bg-black pointer-events-none rounded-t-[32px] sm:rounded-t-[48px] z-20"
          />
        </motion.div>
      </div>

      {/* Scroll track spacer between Card A and Card B:
          Ensures the doctor section, buttons, empty space, and stats bar
          are fully visible and resting on screen before Card B begins pulling up */}
      <div className="h-[20vh] sm:h-[35vh] pointer-events-none" />

      {/* ========================================================
          CARD B: Why Hair Fall Happens
          Rich Cerulean Blue Palette
          Pulls UP and OVER Card A; ends with 220px of empty space below cards
          ======================================================== */}
      <div
        ref={cardBRef}
        className="sticky z-20 w-full min-h-screen rounded-t-[32px] sm:rounded-t-[48px] home-stacking-card-b"
        style={{
          top: `${offsets.cardB}px`,
          background: "linear-gradient(145deg, #0076a3 0%, #0088bc 50%, #006691 100%)",
          boxShadow: "0 -30px 60px rgba(0, 0, 0, 0.22)",
          outline: "1px solid transparent",
        }}
      >
        <motion.div
          style={{
            scale: cardBScale,
            transformOrigin: "top center",
            willChange: isMotionActive ? "transform" : "auto",
          }}
          className="w-full flex flex-col relative"
        >
          <WhyHairFallHappens />
          <motion.div
            style={{ opacity: cardBDarkness }}
            className="absolute inset-0 bg-black pointer-events-none rounded-t-[32px] sm:rounded-t-[48px] z-20"
          />
        </motion.div>
      </div>

      {/* Scroll track spacer between Card B and Card C:
          Ensures Why Hair Fall cards and the 220px empty space below them
          are fully visible and resting on screen before Card C begins pulling up */}
      <div className="h-[20vh] sm:h-[35vh] pointer-events-none" />

      {/* ========================================================
          CARD C: How We Diagnose and Treat
          Deep Midnight Sapphire Tone
          Pulls UP and OVER Card B
          ======================================================== */}
      <div
        ref={cardCRef}
        className="sticky z-30 w-full min-h-screen rounded-t-[32px] sm:rounded-t-[48px] home-stacking-card-c"
        style={{
          top: `${offsets.cardC}px`,
          background: "linear-gradient(145deg, #051329 0%, #091e3a 50%, #0d2d56 100%)",
          boxShadow: "0 -30px 60px rgba(0, 0, 0, 0.28)",
          outline: "1px solid transparent",
        }}
      >
        <motion.div
          style={{
            scale: cardCScale,
            transformOrigin: "top center",
            willChange: isMotionActive ? "transform" : "auto",
          }}
          className="w-full flex flex-col relative"
        >
          <HowWeDiagnose variant="sapphire" />
          <motion.div
            style={{ opacity: cardCDarkness }}
            className="absolute inset-0 bg-black pointer-events-none rounded-t-[32px] sm:rounded-t-[48px] z-20"
          />
        </motion.div>
      </div>

      {/* Scroll track spacer between Card C and Card D */}
      <div className="h-[20vh] sm:h-[35vh] pointer-events-none" />

      {/* ========================================================
          CARD D: Our Clinical Services (ServicesGrid)
          Pulls UP and OVER Card C
          ======================================================== */}
      <div
        ref={cardDRef}
        className="relative z-40 w-full rounded-t-[32px] sm:rounded-t-[48px]"
        style={{
          boxShadow: "0 -30px 60px rgba(0, 0, 0, 0.28)",
          outline: "1px solid transparent",
        }}
      >
        <ServicesGrid />
      </div>
    </div>
  );
}
