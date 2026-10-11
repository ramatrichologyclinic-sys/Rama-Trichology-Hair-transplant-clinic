"use client";

/**
 * BackgroundWaves — Premium Medical White & Bluish Textured Background
 * Replaces the scientific DNA double helix with pure, elegant clinical texturing:
 * - Ambient white-and-bluish multi-stop gradient glow fields
 * - Fluid medical contour wave curves with subtle cerulean/cyan gradations
 * - Ultra-fine clinical micro-mesh texture for subtle tactile depth
 * - 100% GPU-accelerated, lightweight, zero main-thread overhead
 */
export default function BackgroundWaves() {
  return (
    <div
      aria-hidden="true"
      className="background-textured-canvas fixed inset-0 pointer-events-none select-none overflow-hidden"
      style={{ zIndex: 0, transform: "translateZ(0)", willChange: "transform", contain: "strict" }}
    >
      {/* 1. Base Multi-Layer Ambient Bluish Gradient Blooms */}
      <div className="absolute inset-0 bg-[#fbfdfd]" />

      {/* Soft Blue Radial Ambient Fields */}
      <div
        className="absolute -top-[10%] -right-[5%] w-[65vw] h-[65vw] max-w-[850px] max-h-[850px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(2, 132, 199, 0.075) 0%, rgba(224, 242, 254, 0.35) 40%, rgba(251, 253, 253, 0) 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute top-[35%] -left-[10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(56, 189, 248, 0.065) 0%, rgba(240, 249, 255, 0.35) 45%, rgba(251, 253, 253, 0) 70%)",
          filter: "blur(50px)",
        }}
      />
      <div
        className="absolute -bottom-[15%] right-[10%] w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(0, 123, 170, 0.07) 0%, rgba(224, 242, 254, 0.3) 45%, rgba(251, 253, 253, 0) 75%)",
          filter: "blur(45px)",
        }}
      />

      {/* 2. Fluid Medical Wave Contours & Wave Bands (SVG) */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 900"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Subtle Linear Bluish Gradient for Wave Band 1 */}
          <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0284c7" stopOpacity="0.14" />
            <stop offset="45%" stopColor="#38bdf8" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#e0f2fe" stopOpacity="0.02" />
          </linearGradient>

          {/* Subtle Linear Bluish Gradient for Wave Band 2 */}
          <linearGradient id="waveGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#007baa" stopOpacity="0.12" />
            <stop offset="50%" stopColor="#0284c7" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#e0f2fe" stopOpacity="0.01" />
          </linearGradient>

          {/* Subtle Linear Bluish Gradient for Wave Band 3 */}
          <linearGradient id="waveGrad3" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.10" />
            <stop offset="60%" stopColor="#0284c7" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#bae6fd" stopOpacity="0.01" />
          </linearGradient>

          {/* Wave Stroke Line Gradient */}
          <linearGradient id="strokeGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#007baa" stopOpacity="0.30" />
            <stop offset="35%" stopColor="#0284c7" stopOpacity="0.22" />
            <stop offset="70%" stopColor="#38bdf8" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#0284c7" stopOpacity="0.05" />
          </linearGradient>

          <linearGradient id="strokeGrad2" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#0284c7" stopOpacity="0.25" />
            <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#bae6fd" stopOpacity="0.04" />
          </linearGradient>

          {/* Clinical Fine Micro-Grid Pattern */}
          <pattern id="clinicalMicroGrid" width="48" height="48" patternUnits="userSpaceOnUse">
            <path
              d="M 48 0 L 0 0 0 48"
              fill="none"
              stroke="#0284c7"
              strokeWidth="0.5"
              strokeOpacity="0.04"
            />
            <circle cx="24" cy="24" r="0.8" fill="#007baa" fillOpacity="0.06" />
          </pattern>
        </defs>

        {/* 3. Subtle Tactile Micro-Grid Texture */}
        <rect width="100%" height="100%" fill="url(#clinicalMicroGrid)" />

        {/* 4. Smooth Organic Wave Contour Ribbons (No DNA / No Chemical Hexagons) */}
        {/* Wave Ribbon A (Upper Right across Center) */}
        <path
          d="M 280,-40 C 480,120 740,40 980,180 C 1180,290 1340,240 1520,320 L 1520,-40 Z"
          fill="url(#waveGrad1)"
        />
        <path
          d="M 280,-40 C 480,120 740,40 980,180 C 1180,290 1340,240 1520,320"
          stroke="url(#strokeGrad1)"
          strokeWidth="1.5"
          fill="none"
        />

        {/* Wave Ribbon B (Center sweeping Diagonally) */}
        <path
          d="M -80,420 C 180,360 380,510 680,460 C 960,410 1180,540 1520,480 L 1520,620 C 1180,680 960,560 680,610 C 380,660 180,520 -80,580 Z"
          fill="url(#waveGrad2)"
        />
        <path
          d="M -80,420 C 180,360 380,510 680,460 C 960,410 1180,540 1520,480"
          stroke="url(#strokeGrad2)"
          strokeWidth="1.2"
          fill="none"
        />
        <path
          d="M -80,460 C 190,400 390,550 690,500 C 970,450 1190,580 1520,520"
          stroke="url(#strokeGrad1)"
          strokeWidth="0.8"
          strokeDasharray="4 6"
          strokeOpacity="0.4"
          fill="none"
        />

        {/* Wave Ribbon C (Lower Sweeping Contour) */}
        <path
          d="M -40,720 C 240,680 480,820 780,780 C 1060,740 1300,860 1520,810 L 1520,960 L -40,960 Z"
          fill="url(#waveGrad3)"
        />
        <path
          d="M -40,720 C 240,680 480,820 780,780 C 1060,740 1300,860 1520,810"
          stroke="url(#strokeGrad1)"
          strokeWidth="1.4"
          fill="none"
        />
        <path
          d="M -40,760 C 250,720 490,860 790,820 C 1070,780 1310,900 1520,850"
          stroke="url(#strokeGrad2)"
          strokeWidth="0.9"
          strokeOpacity="0.5"
          fill="none"
        />
      </svg>
    </div>
  );
}
