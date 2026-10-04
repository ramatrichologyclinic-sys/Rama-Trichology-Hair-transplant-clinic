"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Users, Baby, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

type Segment = "male" | "female" | "kids";

interface SegmentData {
  title: string;
  subtitle: string;
  causes: string[];
  approach: { title: string; desc: string }[];
  highlight: string;
}

const SEGMENT_CONTENT: Record<Segment, SegmentData> = {
  male: {
    title: "Male Hair Fall & Pattern Baldness",
    subtitle: "Targeting follicular DHT sensitivity, temporal recession, and crown thinning.",
    causes: [
      "Genetic 5-alpha reductase enzyme hyperactivity converting testosterone to follicle-choking DHT",
      "Progressive miniaturization along Norwood hairline stages I through VI",
      "Elevated cortisol levels accelerating follicle transition into resting phase",
      "Micro-inflammation around follicle infundibulum impeding blood supply",
    ],
    approach: [
      {
        title: "Trichoscopic Miniaturization Mapping",
        desc: "Quantifying percentage of vellus vs terminal hair follicles across vertex and temporal zones.",
      },
      {
        title: "Targeted Medical DHT Modulation",
        desc: "Clinically validated pharmacological and peptide protocols to stabilize shedding without unnecessary systemic side-effects.",
      },
      {
        title: "Scalp Micro-Infusion Therapy",
        desc: "Delivering bio-identical growth factors and vasodilators directly to weakened follicular matrices.",
      },
    ],
    highlight: "87% of male patients achieve shedding arrest within 8 to 12 weeks of compliant medical therapy.",
  },
  female: {
    title: "Female Hair Thinning & Hormonal Shedding",
    subtitle: "Addressing diffuse parting-line widening, hormonal fluctuations, and micronutrient gaps.",
    causes: [
      "Hormonal imbalances including PCOS, thyroid dysregulation, postpartum shifts, and menopause",
      "Hidden nutritional deficiencies: low serum ferritin (iron stores), Vitamin D3, and Vitamin B12",
      "Chronic stress-induced telogen effluvium triggered by illness or emotional fatigue",
      "Mechanical traction alopecia from tight ponytails or heavy extensions",
    ],
    approach: [
      {
        title: "Complete Endocrine & Ferritin Profiling",
        desc: "Analyzing metabolic and micronutrient blood biomarkers to pinpoint exact nutritional triggers.",
      },
      {
        title: "Hormone-Safe Follicle Stimulation",
        desc: "Customized topical solutions formulated specifically for female follicular physiology without harsh rebound effects.",
      },
      {
        title: "Cellular Bio-Nutrient Restoration",
        desc: "Combining in-clinic concentrated peptide mesotherapy with targeted bio-available supplementation.",
      },
    ],
    highlight: "Preserves natural hairline framing while systematically rebuilding center-parting hair caliber.",
  },
  kids: {
    title: "Pediatric & Adolescent Hair Fall",
    subtitle: "Gentle, non-invasive trichological care for young scalps and developing follicles.",
    causes: [
      "Nutritional deficits during rapid adolescent physical growth spurts",
      "Pediatric fungal or bacterial scalp infections (such as Tinea Capitis)",
      "High academic stress or post-viral fever shedding episodes",
      "Trichotillomania (unconscious hair pulling) or excessive scalp friction",
    ],
    approach: [
      {
        title: "Gentle Micro-Scrape & Dermoscopy",
        desc: "Completely painless microscopic scalp analysis without needles or invasive probes.",
      },
      {
        title: "Pediatric-Safe Formulations",
        desc: "Zero aggressive systemic pharmaceuticals. We use gentle, pH-balanced barrier soothers and natural botanical actives.",
      },
      {
        title: "Nutritional & Behavioral Counseling",
        desc: "Guidance on dietary iron, protein intake, and compassionate reassurance for parents and youth.",
      },
    ],
    highlight: "Child-friendly, calm clinical environment designed to alleviate anxiety for both parents and young patients.",
  },
};

export default function HairFallSegmentTabs() {
  const [activeSegment, setActiveSegment] = useState<Segment>("male");
  const data = SEGMENT_CONTENT[activeSegment];

  return (
    <div className="bg-white rounded-3xl border border-gray-200 shadow-soft p-6 sm:p-10 my-12">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-ice-50 px-3 py-1 rounded-full border border-gray-200">
          Tailored Patient Segmentation
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950 mt-3 mb-2">
          Targeted Protocols by Demographic
        </h3>
        <p className="text-sm text-ink-900">
          Hair loss biology differs dramatically between men, women, and adolescents. Toggle below to review our customized diagnostic protocols.
        </p>
      </div>

      {/* Tabs Switcher */}
      <div className="flex items-center justify-center gap-2 sm:gap-4 p-1.5 bg-ice-50 rounded-2xl max-w-md mx-auto mb-8 border border-gray-200">
        <button
          type="button"
          onClick={() => setActiveSegment("male")}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all focus-visible:ring-2 focus-visible:ring-blue-400 ${
            activeSegment === "male"
              ? "bg-blue-700 text-white shadow-sm"
              : "text-navy-950 hover:text-blue-700 hover:bg-white/60"
          }`}
        >
          <User className="w-4 h-4" />
          <span>Men</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveSegment("female")}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all focus-visible:ring-2 focus-visible:ring-blue-400 ${
            activeSegment === "female"
              ? "bg-blue-700 text-white shadow-sm"
              : "text-navy-950 hover:text-blue-700 hover:bg-white/60"
          }`}
        >
          <Users className="w-4 h-4" />
          <span>Women</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveSegment("kids")}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all focus-visible:ring-2 focus-visible:ring-blue-400 ${
            activeSegment === "kids"
              ? "bg-blue-700 text-white shadow-sm"
              : "text-navy-950 hover:text-blue-700 hover:bg-white/60"
          }`}
        >
          <Baby className="w-4 h-4" />
          <span>Kids &amp; Teens</span>
        </button>
      </div>

      {/* Animated Tab Content using Framer Motion */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSegment}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="space-y-8"
        >
          <div className="border-b border-gray-100 pb-4">
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-navy-950">
              {data.title}
            </h4>
            <p className="text-sm text-ink-900 mt-1">{data.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Causes Column */}
            <div className="bg-ice-50 rounded-2xl p-6 border border-gray-200">
              <h5 className="font-serif text-lg font-bold text-navy-950 mb-4 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-700" />
                <span>Primary Biological Causes</span>
              </h5>
              <ul className="space-y-3">
                {data.causes.map((cause, cIdx) => (
                  <li key={cIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-ink-900">
                    <CheckCircle2 className="w-4 h-4 text-blue-700 flex-shrink-0 mt-0.5" />
                    <span>{cause}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Approach Column */}
            <div className="bg-ice-50 rounded-2xl p-6 border border-gray-200">
              <h5 className="font-serif text-lg font-bold text-navy-950 mb-4 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-700" />
                <span>Clinical Approach</span>
              </h5>
              <div className="space-y-4">
                {data.approach.map((step, sIdx) => (
                  <div key={sIdx} className="text-xs sm:text-sm">
                    <span className="font-bold text-navy-950 block">
                      {sIdx + 1}. {step.title}
                    </span>
                    <p className="text-ink-900 mt-0.5">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Demographic Clinical Highlight */}
          <div className="bg-blue-700 text-white rounded-2xl p-5 flex items-center gap-3.5 shadow-sm">
            <Sparkles className="w-5 h-5 text-ice-50 flex-shrink-0" />
            <p className="text-xs sm:text-sm text-white font-medium">
              <strong className="text-ice-50">Clinical Insight: </strong>
              {data.highlight}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
