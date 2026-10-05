"use client";

import Image from "next/image";
import { Dna, Activity, Apple, Stethoscope } from "lucide-react";
import {
  StaggerContainer,
  StaggerItem,
  AnimatedSection,
} from "@/components/common/AnimatedSection";

export default function WhyHairFallHappens() {
  const causes = [
    {
      icon: Dna,
      title: "Genetics & DHT Sensitivity",
      desc: "Inherited sensitivity to dihydrotestosterone causes progressive follicle miniaturization, resulting in shorter growth cycles and thinning.",
      artType: "dna",
    },
    {
      icon: Activity,
      title: "Chronic Stress & Cortisol",
      desc: "Prolonged mental or physical stress triggers early follicle transition from anagen (growth) into telogen (shedding) effluvium.",
      artType: "stress",
    },
    {
      icon: Apple,
      title: "Nutritional Deficiencies",
      desc: "Low serum ferritin, vitamin D3, vitamin B12, or amino acids starve the follicular matrix of essential cellular building blocks.",
      artType: "nutrition",
    },
  ];

  return (
    <section
      className="relative overflow-hidden pt-12 sm:pt-16 lg:pt-20"
      style={{ paddingBottom: "clamp(180px, 15vw, 220px)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 border border-white/30 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-sm backdrop-blur-md mb-4">
            Biological Drivers
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-5xl font-bold text-white mt-1 mb-5">
            Why Hair Fall{" "}
            <span className="text-[#071930] font-extrabold relative inline-block drop-shadow-sm">
              Happens
              {/* Underline Accent matching Sapphire tone */}
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-[#071930]"
                viewBox="0 0 100 12"
                preserveAspectRatio="none"
                fill="none"
              >
                <path
                  d="M0,8 Q50,0 100,6"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          <p className="text-base sm:text-lg text-sky-50 leading-relaxed max-w-2xl mx-auto">
            Hair loss is rarely just superficial. It is a biological signal of
            internal, hormonal, genetic, or micro-environmental distress.
            Effective treatment requires pinpointing your exact root causes.
          </p>
        </AnimatedSection>

        {/* 3 Luxury Cards side-by-side */}
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full items-stretch">
          {causes.map((cause, idx) => {
            const Icon = cause.icon;
            return (
              <StaggerItem key={idx} className="h-full">
                <div className="group h-full bg-white rounded-3xl p-7 sm:p-8 border border-white/90 shadow-[0_20px_50px_rgba(0,35,70,0.22)] hover:shadow-[0_25px_60px_rgba(0,35,70,0.32)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative overflow-hidden">
                  {/* Bottom wave gradient inside card */}
                  <div className="absolute bottom-0 inset-x-0 h-36 bg-gradient-to-t from-sky-50/80 via-sky-50/20 to-transparent pointer-events-none rounded-b-3xl" />

                  {/* Card Top Content */}
                  <div className="relative z-10">
                    {/* Top Rounded Gradient Icon Box */}
                    <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 text-white flex items-center justify-center mb-6 shadow-md shadow-blue-500/25 group-hover:scale-105 transition-transform duration-200">
                      <Icon className="w-7 h-7 stroke-[2.2]" />
                    </div>

                    <h3 className="font-serif text-2xl font-bold text-navy-950 mb-3 tracking-tight">
                      {cause.title}
                    </h3>

                    <p className="text-sm text-slate-700 leading-relaxed font-normal">
                      {cause.desc}
                    </p>
                  </div>

                  {/* Card Bottom: Clinical Tag + Custom Artistic Illustration */}
                  <div className="relative z-10 mt-10 pt-4 flex items-end justify-between">
                    <div>
                      {/* Short Accent Divider */}
                      <div className="w-10 h-0.5 bg-blue-300 rounded-full mb-3" />

                      <div className="flex items-center gap-2 text-xs font-semibold text-blue-700">
                        <Stethoscope className="w-4 h-4 text-blue-600" />
                        <span>Clinical diagnostic indicator</span>
                      </div>
                    </div>

                    {/* Bottom-Right Custom Illustrated Graphics */}
                    <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex-shrink-0 mb-0 mr-0 pointer-events-none">
                      {cause.artType === "dna" && (
                        /* DNA Strand 3D Double Helix Graphic */
                        <svg
                          className="w-full h-full drop-shadow-md"
                          viewBox="0 0 120 120"
                          fill="none"
                        >
                          <defs>
                            <linearGradient id="dnaStrandA" x1="10" y1="10" x2="110" y2="110" gradientUnits="userSpaceOnUse">
                              <stop offset="0%" stopColor="#38bdf8" />
                              <stop offset="50%" stopColor="#0284c7" />
                              <stop offset="100%" stopColor="#1d4ed8" />
                            </linearGradient>
                            <linearGradient id="dnaStrandB" x1="110" y1="10" x2="10" y2="110" gradientUnits="userSpaceOnUse">
                              <stop offset="0%" stopColor="#60a5fa" />
                              <stop offset="50%" stopColor="#3b82f6" />
                              <stop offset="100%" stopColor="#1e3a8a" />
                            </linearGradient>
                            <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                              <stop offset="0%" stopColor="#ffffff" />
                              <stop offset="60%" stopColor="#38bdf8" />
                              <stop offset="100%" stopColor="#0284c7" />
                            </radialGradient>
                          </defs>

                          {/* Base Pair Connecting Bars & Rungs */}
                          <line x1="30" y1="20" x2="90" y2="28" stroke="#0284c7" strokeWidth="2.5" strokeLinecap="round" opacity="0.65" />
                          <circle cx="30" cy="20" r="3" fill="url(#nodeGlow)" />
                          <circle cx="90" cy="28" r="3" fill="#60a5fa" />

                          <line x1="42" y1="38" x2="78" y2="44" stroke="#0284c7" strokeWidth="2.5" strokeLinecap="round" opacity="0.75" />
                          <circle cx="42" cy="38" r="3" fill="#38bdf8" />
                          <circle cx="78" cy="44" r="3" fill="url(#nodeGlow)" />

                          <line x1="56" y1="58" x2="64" y2="60" stroke="#0284c7" strokeWidth="3" strokeLinecap="round" />
                          <circle cx="56" cy="58" r="3.5" fill="url(#nodeGlow)" />
                          <circle cx="64" cy="60" r="3.5" fill="#1d4ed8" />

                          <line x1="78" y1="76" x2="42" y2="82" stroke="#0284c7" strokeWidth="2.5" strokeLinecap="round" opacity="0.75" />
                          <circle cx="78" cy="76" r="3" fill="url(#nodeGlow)" />
                          <circle cx="42" cy="82" r="3" fill="#38bdf8" />

                          <line x1="90" y1="96" x2="30" y2="102" stroke="#0284c7" strokeWidth="2.5" strokeLinecap="round" opacity="0.65" />
                          <circle cx="90" cy="96" r="3" fill="#60a5fa" />
                          <circle cx="30" cy="102" r="3" fill="url(#nodeGlow)" />

                          {/* Strand A: Smooth sinusoidal helix wave */}
                          <path
                            d="M25,15 C45,28 65,48 58,62 C50,75 25,92 28,105"
                            stroke="url(#dnaStrandA)"
                            strokeWidth="5"
                            strokeLinecap="round"
                          />

                          {/* Strand B: Counter sinusoidal helix wave */}
                          <path
                            d="M95,25 C75,38 55,56 62,70 C70,85 95,90 92,108"
                            stroke="url(#dnaStrandB)"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeDasharray="3 2"
                          />

                          {/* Orbiting molecular micro-spheres */}
                          <circle cx="18" cy="45" r="2" fill="#38bdf8" opacity="0.8" />
                          <circle cx="102" cy="65" r="2.5" fill="#60a5fa" opacity="0.8" />
                          <circle cx="50" cy="110" r="1.5" fill="#93c5fd" opacity="0.7" />
                        </svg>
                      )}

                      {cause.artType === "stress" && (
                        /* User-specified Stress & Cortisol Clinical Vector Illustration */
                        <div className="w-full h-full flex items-center justify-center p-1">
                          <Image
                            src="/images/stress-cortisol.png"
                            alt="Chronic Stress & Cortisol"
                            width={160}
                            height={160}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      )}

                      {cause.artType === "nutrition" && (
                        /* Enhanced Nutritional Cellular Matrix & Micronutrient Spheres */
                        <svg
                          className="w-full h-full drop-shadow-md"
                          viewBox="0 0 120 120"
                          fill="none"
                        >
                          <defs>
                            <linearGradient id="ironSphere" x1="55" y1="12" x2="95" y2="52" gradientUnits="userSpaceOnUse">
                              <stop offset="0%" stopColor="#38bdf8" />
                              <stop offset="60%" stopColor="#0284c7" />
                              <stop offset="100%" stopColor="#1e3a8a" />
                            </linearGradient>
                            <linearGradient id="d3Sphere" x1="18" y1="42" x2="58" y2="82" gradientUnits="userSpaceOnUse">
                              <stop offset="0%" stopColor="#fde047" />
                              <stop offset="60%" stopColor="#f59e0b" />
                              <stop offset="100%" stopColor="#d97706" />
                            </linearGradient>
                            <linearGradient id="b12Sphere" x1="68" y1="58" x2="108" y2="98" gradientUnits="userSpaceOnUse">
                              <stop offset="0%" stopColor="#818cf8" />
                              <stop offset="60%" stopColor="#4f46e5" />
                              <stop offset="100%" stopColor="#312e81" />
                            </linearGradient>
                            <linearGradient id="zincSphere" x1="20" y1="80" x2="45" y2="105" gradientUnits="userSpaceOnUse">
                              <stop offset="0%" stopColor="#34d399" />
                              <stop offset="100%" stopColor="#059669" />
                            </linearGradient>
                          </defs>

                          {/* Capillary Blood Micro-Loop providing Follicle Matrix Nutrients */}
                          <path
                            d="M20,105 C35,85 45,70 55,60 C68,48 85,40 105,42"
                            stroke="#0284c7"
                            strokeWidth="2.5"
                            strokeDasharray="3 3"
                            opacity="0.5"
                          />

                          {/* Botanical Revitalization Leaf */}
                          <path
                            d="M88,110 C98,98 106,75 102,58 C90,70 85,88 88,110 Z"
                            fill="#10b981"
                            opacity="0.85"
                          />
                          <path
                            d="M80,110 C88,94 94,84 100,75 C90,82 84,96 80,110 Z"
                            fill="#34d399"
                            opacity="0.9"
                          />

                          {/* Primary 3D Sphere 1: Fe (Iron Core) */}
                          <circle cx="75" cy="32" r="17" fill="url(#ironSphere)" />
                          <circle cx="70" cy="27" r="5" fill="#ffffff" opacity="0.6" />
                          <text x="75" y="38" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold" fontFamily="sans-serif">
                            Fe
                          </text>

                          {/* Primary 3D Sphere 2: D3 (Cholecalciferol) */}
                          <circle cx="42" cy="65" r="19" fill="url(#d3Sphere)" />
                          <circle cx="37" cy="59" r="5.5" fill="#ffffff" opacity="0.65" />
                          <text x="42" y="71" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="bold" fontFamily="sans-serif">
                            D3
                          </text>

                          {/* Primary 3D Sphere 3: B12 (Cobalamin) */}
                          <circle cx="85" cy="74" r="15" fill="url(#b12Sphere)" />
                          <circle cx="81" cy="69" r="4" fill="#ffffff" opacity="0.6" />
                          <text x="85" y="79" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold" fontFamily="sans-serif">
                            B12
                          </text>

                          {/* Small Floating Micro-Sphere: Zn (Zinc) */}
                          <circle cx="28" cy="92" r="10" fill="url(#zincSphere)" />
                          <circle cx="25" cy="89" r="3" fill="#ffffff" opacity="0.6" />
                          <text x="28" y="96" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="bold" fontFamily="sans-serif">
                            Zn
                          </text>

                          {/* Micro-Nutrient Sparkles */}
                          <circle cx="60" cy="98" r="2" fill="#38bdf8" />
                          <circle cx="102" cy="24" r="2.5" fill="#fde047" opacity="0.8" />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
