"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface ScrollPullUpSectionProps {
  children: ReactNode;
  variant?: "turquoise-babyblue" | "sapphire" | "custom";
  className?: string;
  id?: string;
}

/**
 * ScrollPullUpSection — Smooth scroll pull-up page effect.
 * Creates an elevated, overlapping curved card that pulls up over the preceding section as user scrolls.
 * Available in:
 * - "turquoise-babyblue": Rich vibrant medical turquoise & baby blue mix
 * - "sapphire": Deep luminous jewel sapphire blue
 */
export default function ScrollPullUpSection({
  children,
  variant = "turquoise-babyblue",
  className = "",
  id,
}: ScrollPullUpSectionProps) {
  const getBackgroundStyles = () => {
    if (variant === "turquoise-babyblue") {
      return {
        background:
          "linear-gradient(135deg, #0891b2 0%, #0284c7 35%, #38bdf8 70%, #bae6fd 100%)",
        boxShadow: "0 -25px 60px rgba(8, 145, 178, 0.28)",
      };
    }
    if (variant === "sapphire") {
      return {
        background:
          "linear-gradient(140deg, #081a33 0%, #0e2a52 35%, #153f7a 70%, #091a32 100%)",
        boxShadow: "0 -25px 60px rgba(9, 26, 50, 0.45)",
      };
    }
    return {};
  };

  return (
    <motion.section
      id={id}
      initial={{ y: 35, opacity: 0.96 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`relative z-20 rounded-t-[2.5rem] sm:rounded-t-[3.5rem] lg:rounded-t-[4.5rem] -mt-10 sm:-mt-16 lg:-mt-20 overflow-hidden ${
        variant === "sapphire" ? "border-t border-sky-400/20 text-white" : "border-t border-white/40"
      } ${className}`}
      style={getBackgroundStyles()}
    >
      {/* Subtle Specular Top Sheen */}
      <div
        className="absolute top-0 inset-x-0 h-px pointer-events-none opacity-60"
        style={{
          background:
            variant === "sapphire"
              ? "linear-gradient(90deg, transparent, rgba(56, 189, 248, 0.6), transparent)"
              : "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.9), transparent)",
        }}
      />

      {/* Ambient Radial Highlights */}
      {variant === "turquoise-babyblue" && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at top right, rgba(255, 255, 255, 0.25) 0%, transparent 60%), radial-gradient(ellipse at bottom left, rgba(6, 182, 212, 0.3) 0%, transparent 60%)",
          }}
        />
      )}

      {variant === "sapphire" && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at top right, rgba(56, 189, 248, 0.18) 0%, transparent 60%), radial-gradient(ellipse at bottom left, rgba(29, 78, 216, 0.25) 0%, transparent 60%)",
          }}
        />
      )}

      {/* Content wrapper */}
      <div className="relative z-10">{children}</div>
    </motion.section>
  );
}
