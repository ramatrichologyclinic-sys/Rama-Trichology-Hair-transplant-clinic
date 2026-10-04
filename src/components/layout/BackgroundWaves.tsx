"use client";

import { useMemo } from "react";

/**
 * BackgroundWaves — Medical & Genetics Scientific Background.
 * Faithfully mirrors the reference image:
 * - Sweeping diagonal DNA double helix with base-pair rungs and nucleotide nodes.
 * - Prominent multi-ring chemical hexagons (benzene clusters) with bonds and terminal atom dots.
 * - Soft hexagonal honeycomb mesh (lattice) creating background depth.
 * - Branching node-and-link molecular chains with concentric target circles.
 * - Ultra-smooth, minimalistic infinite floating animations.
 */
export default function BackgroundWaves() {
  // Color palette matching the reference image
  const navy = "#163859"; // Deep primary scientific navy for atoms & main bonds
  const darkBlue = "#1d476f"; // Secondary structure dark blue
  const cyanBlue = "#0284c7"; // Cerulean cyan accent
  const lightCyan = "#38bdf8"; // Light cyan highlight
  const slate = "#64748b"; // Clean structural slate
  const faintSlate = "#94a3b8"; // Soft honeycomb mesh & background links

  // Generate DNA Helix Coordinates
  const { strandAPath, strandBPath, rungs, outerNodes } = useMemo(() => {
    // Diagonal axis from bottom-center/right (670, 830) to top-right (1370, -20)
    const p0 = { x: 670, y: 830 };
    const p1 = { x: 1370, y: -20 };
    const dx = p1.x - p0.x;
    const dy = p1.y - p0.y;
    const len = Math.hypot(dx, dy);
    const nx = -dy / len;
    const ny = dx / len;
    const R = 46; // Amplitude radius of the helix
    const periods = 3.2; // 3.2 complete twists matching reference
    const steps = 140;

    const ptsA: { x: number; y: number; theta: number; sinVal: number }[] = [];
    const ptsB: { x: number; y: number; theta: number; sinVal: number }[] = [];

    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      const cx = p0.x + t * dx;
      const cy = p0.y + t * dy;
      const theta = 2 * Math.PI * periods * t;
      const sinVal = Math.sin(theta);

      const ax = +(cx + nx * R * sinVal).toFixed(1);
      const ay = +(cy + ny * R * sinVal).toFixed(1);
      const bx = +(cx - nx * R * sinVal).toFixed(1);
      const by = +(cy - ny * R * sinVal).toFixed(1);

      ptsA.push({ x: ax, y: ay, theta, sinVal });
      ptsB.push({ x: bx, y: by, theta, sinVal });
    }

    // Build SVG smooth path strings
    const pathA = ptsA.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ");
    const pathB = ptsB.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ");

    // Base pair rungs connecting Strand A and Strand B
    const rungsList: {
      x1: number;
      y1: number;
      x2: number;
      y2: number;
      opacity: number;
      isDouble: boolean;
      r: number;
    }[] = [];

    const nodesList: { x: number; y: number; r: number; fill: string }[] = [];

    for (let i = 4; i < steps - 3; i += 3) {
      const a = ptsA[i];
      const b = ptsB[i];
      const dist = Math.hypot(a.x - b.x, a.y - b.y);

      // Only draw rungs when strands are sufficiently separated
      if (dist > 14) {
        const isDouble = i % 6 === 0;
        const opacity = Math.min(0.85, 0.35 + (dist / (2 * R)) * 0.5);
        rungsList.push({
          x1: a.x,
          y1: a.y,
          x2: b.x,
          y2: b.y,
          opacity,
          isDouble,
          r: 2.5,
        });
      }

      // Add prominent nodes along the peaks
      if (Math.abs(a.sinVal) > 0.88 && i % 4 === 0) {
        nodesList.push({ x: a.x, y: a.y, r: 4.2, fill: navy });
        nodesList.push({ x: b.x, y: b.y, r: 3.5, fill: cyanBlue });
      } else if (i % 7 === 0) {
        nodesList.push({ x: a.x, y: a.y, r: 2.8, fill: darkBlue });
      }
    }

    return {
      strandAPath: pathA,
      strandBPath: pathB,
      rungs: rungsList,
      outerNodes: nodesList,
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="background-waves-canvas fixed inset-0 pointer-events-none select-none overflow-hidden"
      style={{ zIndex: 0, transform: "translateZ(0)", willChange: "transform", contain: "strict" }}
    >
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 900"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Subtle soft backdrop gradient */}
          <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f8fbfd" />
            <stop offset="60%" stopColor="#f1f7fc" />
            <stop offset="100%" stopColor="#f8fbfd" />
          </linearGradient>

          {/* DNA Strand Gradients */}
          <linearGradient id="dnaStrandA" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={cyanBlue} />
            <stop offset="50%" stopColor={navy} />
            <stop offset="100%" stopColor={darkBlue} />
          </linearGradient>

          <linearGradient id="dnaStrandB" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={darkBlue} />
            <stop offset="50%" stopColor={cyanBlue} />
            <stop offset="100%" stopColor={lightCyan} />
          </linearGradient>

          {/* Reusable Hexagon Symbol (r=30) */}
          <polygon
            id="hexCell"
            points="25.98,15 0,30 -25.98,15 -25.98,-15 0,-30 25.98,-15"
          />
        </defs>

        {/* ═══════════════════════════════════════════════════════════════
            1. FAINT HEXAGONAL HONEYCOMB MESH (BACKGROUND DEPTH)
            As shown across the middle and background of the reference
            ═══════════════════════════════════════════════════════════════ */}
        <g
          stroke={faintSlate}
          strokeWidth="1"
          fill="none"
          className="anim-bg-mesh"
        >
          {/* Hexagonal grid columns across center and background */}
          {[
            // Col 1 (x: 440)
            { x: 440, y: 310 },
            { x: 440, y: 414 },
            { x: 440, y: 518 },
            // Col 2 (x: 492)
            { x: 492, y: 258 },
            { x: 492, y: 362 },
            { x: 492, y: 466 },
            { x: 492, y: 570 },
            // Col 3 (x: 544)
            { x: 544, y: 310 },
            { x: 544, y: 414 },
            { x: 544, y: 518 },
            { x: 544, y: 622 },
            // Col 4 (x: 596)
            { x: 596, y: 362 },
            { x: 596, y: 466 },
            { x: 596, y: 570 },
            // Col 5 (x: 720)
            { x: 720, y: 154 },
            { x: 720, y: 258 },
            { x: 720, y: 362 },
            // Col 6 (x: 772)
            { x: 772, y: 206 },
            { x: 772, y: 310 },
            { x: 772, y: 414 },
            { x: 772, y: 518 },
            // Col 7 (x: 824)
            { x: 824, y: 258 },
            { x: 824, y: 362 },
            { x: 824, y: 466 },
            { x: 824, y: 570 },
            // Col 8 (x: 948)
            { x: 948, y: 362 },
            { x: 948, y: 466 },
            { x: 948, y: 570 },
            { x: 948, y: 674 },
            // Col 9 (x: 1000)
            { x: 1000, y: 310 },
            { x: 1000, y: 414 },
            { x: 1000, y: 518 },
            { x: 1000, y: 622 },
            // Col 10 (x: 1052)
            { x: 1052, y: 362 },
            { x: 1052, y: 466 },
            { x: 1052, y: 570 },
          ].map((h, idx) => (
            <use key={`mesh-${idx}`} href="#hexCell" x={h.x} y={h.y} />
          ))}

          {/* Background Mesh Junction Micro-Nodes */}
          {[
            { cx: 440, cy: 340 },
            { cx: 492, cy: 392 },
            { cx: 544, cy: 340 },
            { cx: 596, cy: 392 },
            { cx: 720, cy: 184 },
            { cx: 772, cy: 236 },
            { cx: 824, cy: 288 },
            { cx: 948, cy: 392 },
            { cx: 1000, cy: 444 },
            { cx: 1052, cy: 392 },
          ].map((pt, idx) => (
            <circle
              key={`mnode-${idx}`}
              cx={pt.cx}
              cy={pt.cy}
              r="2.2"
              fill={faintSlate}
              stroke="none"
              opacity="0.6"
            />
          ))}
        </g>

        {/* ═══════════════════════════════════════════════════════════════
            2. BRANCHING NODE-AND-LINK CHAINS & CONCENTRIC CIRCLES
            (Upper-Left, Far-Left, Bottom-Right target symbols from image)
            ═══════════════════════════════════════════════════════════════ */}
        {/* Top-Left Concentric Target & Branching Chain */}
        <g className="anim-bg-float-2">
          {/* Concentric Node at (130, 90) */}
          <circle cx="130" cy="90" r="22" stroke={faintSlate} strokeWidth="1.2" fill="none" opacity="0.45" />
          <circle cx="130" cy="90" r="14" stroke={darkBlue} strokeWidth="1.3" fill="none" opacity="0.65" />
          <circle cx="130" cy="90" r="5" fill={darkBlue} opacity="0.75" />

          {/* Connecting Branches */}
          <line x1="130" y1="68" x2="130" y2="35" stroke={slate} strokeWidth="1.2" opacity="0.5" />
          <circle cx="130" cy="35" r="4" fill={navy} opacity="0.8" />

          <line x1="152" y1="90" x2="245" y2="45" stroke={slate} strokeWidth="1.2" opacity="0.5" />
          <circle cx="245" cy="45" r="5" fill={navy} opacity="0.85" />
          <circle cx="245" cy="45" r="9" stroke={cyanBlue} strokeWidth="1" fill="none" opacity="0.5" />

          <line x1="245" y1="45" x2="310" y2="70" stroke={faintSlate} strokeWidth="1" opacity="0.45" />
          <circle cx="310" cy="70" r="3.2" fill={darkBlue} opacity="0.7" />

          <line x1="110" y1="102" x2="45" y2="135" stroke={faintSlate} strokeWidth="1" opacity="0.45" />
          <circle cx="45" cy="135" r="3.5" fill={slate} opacity="0.6" />

          <line x1="130" y1="112" x2="130" y2="195" stroke={faintSlate} strokeWidth="1" opacity="0.4" />
          <circle cx="130" cy="195" r="4" fill={cyanBlue} opacity="0.7" />
        </g>

        {/* Bottom-Left Concentric Target & Branching Chain */}
        <g className="anim-bg-float-3">
          {/* Concentric Node at (90, 810) */}
          <circle cx="90" cy="810" r="24" stroke={faintSlate} strokeWidth="1.2" fill="none" opacity="0.4" />
          <circle cx="90" cy="810" r="15" stroke={darkBlue} strokeWidth="1.3" fill="none" opacity="0.6" />
          <circle cx="90" cy="810" r="5.5" fill={navy} opacity="0.75" />

          <line x1="114" y1="810" x2="190" y2="810" stroke={slate} strokeWidth="1.2" opacity="0.5" />
          <circle cx="190" cy="810" r="4.5" fill={darkBlue} opacity="0.8" />

          <line x1="90" y1="786" x2="90" y2="710" stroke={slate} strokeWidth="1.2" opacity="0.45" />
          <circle cx="90" cy="710" r="4" fill={navy} opacity="0.75" />

          <line x1="68" y1="810" x2="25" y2="810" stroke={faintSlate} strokeWidth="1" opacity="0.4" />
          <circle cx="25" cy="810" r="3.5" fill={slate} opacity="0.55" />
        </g>

        {/* ═══════════════════════════════════════════════════════════════
            3. PROMINENT HEXAGONAL CHEMICAL STRUCTURES (BENZENE CLUSTERS)
            Directly matching the molecular models from the reference image
            ═══════════════════════════════════════════════════════════════ */}

        {/* ── CLUSTER A: Upper-Center Molecular Complex (above DNA) ── */}
        <g
          stroke={navy}
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="anim-bg-float-4"
        >
          {/* Ring 1 at (680, 160) */}
          <polygon
            points="680,130 706,145 706,175 680,190 654,175 654,145"
            stroke={navy}
            opacity="0.85"
          />
          {/* Inner double bond line */}
          <line x1="680" y1="136" x2="700" y2="148" stroke={slate} strokeWidth="1.2" opacity="0.7" />
          <line x1="660" y1="172" x2="680" y2="184" stroke={slate} strokeWidth="1.2" opacity="0.7" />

          {/* Ring 2 connected at (630, 230) */}
          <polygon
            points="630,200 656,215 656,245 630,260 604,245 604,215"
            stroke={darkBlue}
            opacity="0.8"
          />
          <line x1="654" y1="175" x2="630" y2="200" stroke={navy} strokeWidth="1.6" opacity="0.85" />

          {/* Branching Arms & Terminal Nodes */}
          <line x1="680" y1="130" x2="660" y2="95" stroke={navy} opacity="0.85" />
          <circle cx="660" cy="95" r="4.2" fill={navy} stroke="none" />

          <line x1="660" y1="95" x2="675" y2="70" stroke={slate} strokeWidth="1.2" opacity="0.7" />
          <circle cx="675" cy="70" r="3" fill={cyanBlue} stroke="none" />

          <line x1="706" y1="145" x2="750" y2="145" stroke={navy} opacity="0.8" />
          <circle cx="750" cy="145" r="4.5" fill={darkBlue} stroke="none" />

          <line x1="750" y1="145" x2="775" y2="180" stroke={slate} strokeWidth="1.2" opacity="0.7" />
          <circle cx="775" cy="180" r="3.5" fill={cyanBlue} stroke="none" />

          <line x1="604" y1="215" x2="570" y2="200" stroke={navy} opacity="0.85" />
          <circle cx="570" cy="200" r="4.2" fill={navy} stroke="none" />

          <line x1="630" y1="260" x2="630" y2="300" stroke={navy} opacity="0.85" />
          <circle cx="630" cy="300" r="4" fill={darkBlue} stroke="none" />

          <line x1="630" y1="300" x2="665" y2="320" stroke={slate} strokeWidth="1.2" opacity="0.7" />
          <circle cx="665" cy="320" r="3" fill={cyanBlue} stroke="none" />

          {/* Ring vertex atom dots */}
          <circle cx="680" cy="190" r="3.2" fill={navy} stroke="none" />
          <circle cx="654" cy="145" r="3.2" fill={navy} stroke="none" />
          <circle cx="656" cy="245" r="3.2" fill={darkBlue} stroke="none" />
        </g>

        {/* ── CLUSTER B: Mid-Left Multi-Ring Chemical Complex ── */}
        <g
          stroke={navy}
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="anim-bg-float-5"
        >
          {/* Ring 1 at (430, 640) */}
          <polygon
            points="430,610 456,625 456,655 430,670 404,655 404,625"
            stroke={navy}
            opacity="0.85"
          />
          <line x1="430" y1="616" x2="450" y2="628" stroke={slate} strokeWidth="1.2" opacity="0.7" />

          {/* Ring 2 fused/linked at (495, 640) */}
          <polygon
            points="495,610 521,625 521,655 495,670 469,655 469,625"
            stroke={darkBlue}
            opacity="0.8"
          />
          <line x1="456" y1="640" x2="469" y2="640" stroke={navy} strokeWidth="2" opacity="0.9" />

          {/* Branching chains radiating left and up */}
          <line x1="404" y1="625" x2="365" y2="600" stroke={navy} opacity="0.85" />
          <circle cx="365" cy="600" r="4.5" fill={navy} stroke="none" />

          <line x1="365" y1="600" x2="330" y2="620" stroke={slate} strokeWidth="1.2" opacity="0.75" />
          <circle cx="330" cy="620" r="3.8" fill={cyanBlue} stroke="none" />

          <line x1="365" y1="600" x2="365" y2="555" stroke={navy} opacity="0.8" />
          <circle cx="365" cy="555" r="4.2" fill={navy} stroke="none" />

          <line x1="365" y1="555" x2="335" y2="535" stroke={slate} strokeWidth="1.2" opacity="0.7" />
          <circle cx="335" cy="535" r="3.2" fill={darkBlue} stroke="none" />

          <line x1="404" y1="655" x2="370" y2="690" stroke={navy} opacity="0.85" />
          <circle cx="370" cy="690" r="4.5" fill={navy} stroke="none" />

          <line x1="370" y1="690" x2="320" y2="690" stroke={navy} opacity="0.8" />
          <circle cx="320" cy="690" r="4" fill={darkBlue} stroke="none" />

          <line x1="521" y1="625" x2="560" y2="625" stroke={slate} strokeWidth="1.2" opacity="0.7" />
          <circle cx="560" cy="625" r="3.5" fill={cyanBlue} stroke="none" />

          <line x1="495" y1="670" x2="515" y2="705" stroke={navy} opacity="0.8" />
          <circle cx="515" cy="705" r="4" fill={navy} stroke="none" />

          {/* Atom dots on vertices */}
          <circle cx="430" cy="610" r="3.5" fill={navy} stroke="none" />
          <circle cx="456" cy="655" r="3.5" fill={navy} stroke="none" />
          <circle cx="495" cy="610" r="3.5" fill={darkBlue} stroke="none" />
          <circle cx="521" cy="655" r="3.5" fill={cyanBlue} stroke="none" />
        </g>

        {/* ── CLUSTER C: Bottom-Left Benzene Ring with Radiating Bonds ── */}
        <g
          stroke={navy}
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="anim-bg-float-1"
        >
          <polygon
            points="220,740 246,755 246,785 220,800 194,785 194,755"
            stroke={navy}
            opacity="0.85"
          />
          <line x1="220" y1="746" x2="240" y2="758" stroke={slate} strokeWidth="1.2" opacity="0.65" />

          <line x1="220" y1="740" x2="220" y2="700" stroke={navy} opacity="0.85" />
          <circle cx="220" cy="700" r="4.2" fill={navy} stroke="none" />

          <line x1="246" y1="785" x2="285" y2="810" stroke={navy} opacity="0.8" />
          <circle cx="285" cy="810" r="4.5" fill={darkBlue} stroke="none" />

          <line x1="194" y1="785" x2="160" y2="810" stroke={slate} strokeWidth="1.2" opacity="0.75" />
          <circle cx="160" cy="810" r="3.8" fill={cyanBlue} stroke="none" />

          <circle cx="220" cy="800" r="3.5" fill={navy} stroke="none" />
          <circle cx="194" cy="755" r="3.5" fill={navy} stroke="none" />
        </g>

        {/* ── CLUSTER D: Lower-Right of DNA Molecule ── */}
        <g
          stroke={navy}
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="anim-bg-float-8"
        >
          <polygon
            points="960,700 986,715 986,745 960,760 934,745 934,715"
            stroke={darkBlue}
            opacity="0.85"
          />
          <line x1="960" y1="706" x2="980" y2="718" stroke={slate} strokeWidth="1.2" opacity="0.65" />

          <line x1="986" y1="715" x2="1030" y2="700" stroke={navy} opacity="0.8" />
          <circle cx="1030" cy="700" r="4.2" fill={navy} stroke="none" />

          <line x1="960" y1="760" x2="960" y2="800" stroke={slate} strokeWidth="1.2" opacity="0.75" />
          <circle cx="960" cy="800" r="3.8" fill={cyanBlue} stroke="none" />

          <line x1="934" y1="715" x2="900" y2="700" stroke={navy} opacity="0.8" />
          <circle cx="900" cy="700" r="4" fill={darkBlue} stroke="none" />

          <circle cx="986" cy="745" r="3.2" fill={navy} stroke="none" />
          <circle cx="934" cy="745" r="3.2" fill={darkBlue} stroke="none" />
        </g>

        {/* ── CLUSTER E: Far-Right Hexagonal Structure ── */}
        <g
          stroke={navy}
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="anim-bg-float-6"
        >
          <polygon
            points="1290,620 1316,635 1316,665 1290,680 1264,665 1264,635"
            stroke={navy}
            opacity="0.85"
          />
          <line x1="1290" y1="626" x2="1310" y2="638" stroke={slate} strokeWidth="1.2" opacity="0.65" />

          <line x1="1264" y1="635" x2="1225" y2="600" stroke={navy} opacity="0.85" />
          <circle cx="1225" cy="600" r="4.5" fill={navy} stroke="none" />

          <line x1="1225" y1="600" x2="1190" y2="615" stroke={slate} strokeWidth="1.2" opacity="0.7" />
          <circle cx="1190" cy="615" r="3.5" fill={cyanBlue} stroke="none" />

          <line x1="1316" y1="635" x2="1360" y2="620" stroke={navy} opacity="0.8" />
          <circle cx="1360" cy="620" r="4.2" fill={darkBlue} stroke="none" />

          <line x1="1290" y1="680" x2="1290" y2="725" stroke={slate} strokeWidth="1.2" opacity="0.75" />
          <circle cx="1290" cy="725" r="3.8" fill={cyanBlue} stroke="none" />

          <circle cx="1316" cy="665" r="3.2" fill={navy} stroke="none" />
          <circle cx="1264" cy="665" r="3.2" fill={darkBlue} stroke="none" />
        </g>

        {/* ── CLUSTER F: Upper-Right Molecular Node ── */}
        <g
          stroke={darkBlue}
          strokeWidth="1.4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="anim-bg-float-9"
        >
          <polygon
            points="1360,250 1386,265 1386,295 1360,310 1334,295 1334,265"
            stroke={darkBlue}
            opacity="0.8"
          />
          <line x1="1334" y1="265" x2="1300" y2="245" stroke={navy} opacity="0.85" />
          <circle cx="1300" cy="245" r="4" fill={navy} stroke="none" />

          <line x1="1360" y1="310" x2="1360" y2="350" stroke={slate} strokeWidth="1.2" opacity="0.7" />
          <circle cx="1360" cy="350" r="3.5" fill={cyanBlue} stroke="none" />

          <circle cx="1386" cy="265" r="3" fill={cyanBlue} stroke="none" />
          <circle cx="1334" cy="295" r="3" fill={darkBlue} stroke="none" />
        </g>

        {/* ═══════════════════════════════════════════════════════════════
            4. THE DIAGONAL DNA DOUBLE HELIX (CENTERPIECE)
            Sweeping diagonally across the center-right to top-right
            ═══════════════════════════════════════════════════════════════ */}
        <g className="anim-bg-helix">
          {/* Base Pair Rungs */}
          {rungs.map((r, idx) => (
            <g key={`rung-${idx}`} opacity={r.opacity}>
              {/* Primary rung bar */}
              <line
                x1={r.x1}
                y1={r.y1}
                x2={r.x2}
                y2={r.y2}
                stroke={idx % 4 === 0 ? navy : slate}
                strokeWidth={r.isDouble ? "1.6" : "1.2"}
                strokeLinecap="round"
              />
              {/* If double bond, subtle offset parallel line */}
              {r.isDouble && (
                <line
                  x1={r.x1 + 1.5}
                  y1={r.y1 + 1.2}
                  x2={r.x2 + 1.5}
                  y2={r.y2 + 1.2}
                  stroke={cyanBlue}
                  strokeWidth="0.9"
                  opacity="0.6"
                />
              )}
              {/* Nucleotide terminal dots at strand junctions */}
              <circle cx={r.x1} cy={r.y1} r={r.r} fill={darkBlue} opacity="0.85" />
              <circle cx={r.x2} cy={r.y2} r={r.r} fill={cyanBlue} opacity="0.85" />
            </g>
          ))}

          {/* Strand B (Underlying Strand) */}
          <path
            d={strandBPath}
            stroke="url(#dnaStrandB)"
            strokeWidth="2.2"
            fill="none"
            strokeLinecap="round"
            opacity="0.85"
          />

          {/* Strand A (Foreground Strand) */}
          <path
            d={strandAPath}
            stroke="url(#dnaStrandA)"
            strokeWidth="2.4"
            fill="none"
            strokeLinecap="round"
            opacity="0.9"
          />

          {/* Outer Strand Peak Nodes */}
          {outerNodes.map((node, idx) => (
            <circle
              key={`onode-${idx}`}
              cx={node.x}
              cy={node.y}
              r={node.r}
              fill={node.fill}
              opacity="0.9"
            />
          ))}
        </g>

        {/* ═══════════════════════════════════════════════════════════════
            5. SCATTERED SCIENTIFIC DATA POINTS & ATOMS (ATMOSPHERE)
            Small floating nodes giving depth as in the reference image
            ═══════════════════════════════════════════════════════════════ */}
        <g opacity="0.65">
          {[
            { cx: 80, cy: 320, r: 4.5, fill: slate },
            { cx: 160, cy: 380, r: 3, fill: darkBlue },
            { cx: 210, cy: 460, r: 5, fill: navy },
            { cx: 280, cy: 390, r: 2.5, fill: cyanBlue },
            { cx: 340, cy: 260, r: 4, fill: darkBlue },
            { cx: 520, cy: 110, r: 3.5, fill: slate },
            { cx: 830, cy: 80, r: 4, fill: navy },
            { cx: 890, cy: 140, r: 3, fill: cyanBlue },
            { cx: 1140, cy: 90, r: 4.5, fill: darkBlue },
            { cx: 1240, cy: 150, r: 3, fill: slate },
            { cx: 1120, cy: 780, r: 3.5, fill: navy },
            { cx: 1220, cy: 840, r: 4, fill: cyanBlue },
            { cx: 750, cy: 750, r: 3, fill: slate },
            { cx: 620, cy: 850, r: 4, fill: darkBlue },
          ].map((dot, idx) => (
            <circle
              key={`dot-${idx}`}
              cx={dot.cx}
              cy={dot.cy}
              r={dot.r}
              fill={dot.fill}
            />
          ))}
        </g>
      </svg>

      {/* Frosted Morphism Layer (15% glassmorphism overlay) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          transform: "translateZ(0)",
        }}
      />
    </div>
  );
}
