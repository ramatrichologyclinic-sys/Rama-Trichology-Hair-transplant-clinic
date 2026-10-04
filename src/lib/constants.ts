export interface ServiceItem {
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  causes: string[];
  approachSteps: { title: string; desc: string }[];
  placeholderImage: string;
}

export const CLINIC_INFO = {
  brandName: "Rama Trichology",
  tagline: "Hair and Scalp Clinic",
  doctorName: "Dr. Ritesh Safariya",
  credentials: "[MBBS, MD — Dermatology]",
  experience: "15+ Years of Experience",
  address:
    "A2-104, 1st Floor, Prabhakar CHS Society, Shanti Nagar, Sec. 4, Mira Road (E), Mira Bhayandar, Maharashtra 401107, India",
  phone: "+91 96995 81541",
  email: "ramatrichology@gmail.com",
  whatsappNumber: "919699581541",
  whatsappUrl: "https://wa.me/919699581541",
  stats: {
    years: "15+",
    patients: "500+",
    rating: "4.8",
    certifications: "12+",
  },
  hours: "Mon – Sat: 10:00 AM – 8:00 PM | Sun: By Appointment",
  calendlyUrl: "https://calendly.com/PLACEHOLDER-LINK",
  web3FormsAccessKey: "YOUR_ACCESS_KEY_HERE",
};

export const SERVICES: ServiceItem[] = [
  {
    slug: "hair-fall",
    title: "Hair Fall Treatment",
    shortDesc: "Targeted clinical therapy for androgenetic alopecia, telogen effluvium, and diffuse thinning.",
    fullDesc: "Clinical trichological intervention addressing root biological drivers of hair thinning, follicle miniaturization, and shedding across men, women, and children.",
    causes: [
      "Genetic predisposition & DHT sensitivity",
      "Nutritional deficiencies (Iron, Vitamin D3, B12, Zinc)",
      "Chronic stress & physiological cortisol surges",
      "Hormonal fluctuations (Thyroid, PCOS, postpartum)",
      "Post-viral or acute medical illness effluvium",
    ],
    approachSteps: [
      {
        title: "Digital Trichoscopic Follicle Scan",
        desc: "High-magnification microscopic scalp analysis to gauge follicular unit density, caliber variation, and empty ostia.",
      },
      {
        title: "Biomarker & Root-Cause Profiling",
        desc: "Targeted diagnostic evaluation of metabolic, hormonal, and micronutrient blood parameters.",
      },
      {
        title: "Synergistic Medical Therapy",
        desc: "Evidence-backed pharmaceutical topical/oral regimens combined with in-clinic scalp infusion protocols.",
      },
      {
        title: "Continuous Digital Tracking",
        desc: "Quarterly photographic and trichometric monitoring to ensure tangible follicular recovery.",
      },
    ],
    placeholderImage: "/images/hair-fall-treatment-card.jpg",
  },
  {
    slug: "hair-scalp-diseases",
    title: "Hair & Scalp Diseases",
    shortDesc: "Medical diagnosis and management of severe dandruff, psoriasis, dermatitis, and scalp infections.",
    fullDesc: "Comprehensive dermatological care for complex inflammatory, autoimmune, and microbial scalp conditions that compromise follicle health.",
    causes: [
      "Seborrheic dermatitis & Malassezia yeast overgrowth",
      "Autoimmune scalp psoriasis & thick silvery plaques",
      "Alopecia areata (patchy autoimmune follicle attack)",
      "Bacterial or fungal folliculitis & pustular lesions",
      "Contact irritant dermatitis from harsh cosmetic treatments",
    ],
    approachSteps: [
      {
        title: "Microbial & Epidermal Evaluation",
        desc: "Distinguishing fungal, autoimmune, and inflammatory etiologies via dermatoscopy and gentle scraping when indicated.",
      },
      {
        title: "Barrier Restoration Protocol",
        desc: "Therapeutic pH-balancing and anti-inflammatory formulations to soothe itching, scaling, and erythema.",
      },
      {
        title: "Immunomodulatory Care",
        desc: "Targeted topical or intralesional medical interventions to halt autoimmune follicle damage.",
      },
      {
        title: "Preventive Maintenance Regimen",
        desc: "Long-term home-care strategies to prevent recurrence and sustain a pristine scalp microbiome.",
      },
    ],
    placeholderImage: "/images/hair-scalp-diseases-card.jpg",
  },
  {
    slug: "hair-transplant",
    title: "Hair Transplant",
    shortDesc: "Advanced, natural follicular unit restoration and micro-grafting for permanent density.",
    fullDesc: "Surgical trichology utilizing state-of-the-art Follicular Unit Extraction (FUE) and Direct Hair Implantation protocols for natural hairlines and lifelong graft survival.",
    causes: [
      "Advanced male pattern baldness (Norwood Stages III – VII)",
      "Female pattern hair thinning unresponsive to medical therapy",
      "Traction alopecia or traumatic hairline scarring",
      "Receded temporal peaks and thinning crown vertex",
    ],
    approachSteps: [
      {
        title: "Facial Anatomy & Hairline Design",
        desc: "Custom aesthetic mapping tailored to patient age, bone structure, and future aging projections.",
      },
      {
        title: "Safe Donor Zone Preservation",
        desc: "Gentle motor-assisted micro-punch extraction ensuring zero over-harvesting or donor thinning.",
      },
      {
        title: "Precise Angle & Depth Implantation",
        desc: "Single and multi-hair graft placement mimicking natural follicle angles and direction.",
      },
      {
        title: "Comprehensive Post-Op Growth Plan",
        desc: "Dedicated healing washes, medical support, and growth factor therapies to accelerate density.",
      },
    ],
    placeholderImage: "/images/hair-transplant-card.jpg",
  },
  {
    slug: "hair-camouflage",
    title: "Hair Camouflage",
    shortDesc: "Non-invasive Scalp Micropigmentation (SMP) and density enhancement for immediate visual fullness.",
    fullDesc: "Artistic, medical-grade pigment implantation that replicates shaved hair follicles or creates the visual illusion of thicker density in thinning areas.",
    causes: [
      "Diffuse thinning where surgical grafting is not yet indicated",
      "Post-transplant linear or punch scar concealment",
      "Total alopecia wanting a clean, youthful buzz-cut aesthetic",
      "Hypopigmented scalp patches and birthmark camouflaging",
    ],
    approachSteps: [
      {
        title: "Skin Tone & Follicle Matching",
        desc: "Custom carbon-based pigment blending perfectly calibrated to your natural root color.",
      },
      {
        title: "Layered Micro-Point Implantation",
        desc: "Careful multi-session dotting technique at the precise epidermal-dermal junction.",
      },
      {
        title: "Seamless Transition Shading",
        desc: "Softening boundaries along temples and crown for completely undetectable realism.",
      },
      {
        title: "Long-Term Retention Protocol",
        desc: "UV protection and maintenance guidelines for 3–5+ years of crisp, fade-resistant color.",
      },
    ],
    placeholderImage: "/images/hair-camouflage-card.jpg",
  },
  {
    slug: "wigs-extensions",
    title: "Wigs & Extensions",
    shortDesc: "Custom-fitted, medical-grade breathable hair systems and scalp-safe cranial prostheses.",
    fullDesc: "Compassionate, bespoke non-surgical hair restoration systems tailored for medical alopecia, chemotherapy patients, and instant full-coverage needs.",
    causes: [
      "Alopecia totalis or universalis",
      "Chemotherapy and medical treatment-induced hair loss",
      "Extensive scarring alopecia unsuited for surgical grafting",
      "Patients seeking immediate non-invasive volume without downtime",
    ],
    approachSteps: [
      {
        title: "Scalp Topography Measurement",
        desc: "3D cranial contour mapping ensuring a secure, snug, and comfortable custom fit.",
      },
      {
        title: "100% Remy Human Hair Selection",
        desc: "Hand-tied premium cuticle-intact hair matched to your exact color, texture, and wave pattern.",
      },
      {
        title: "Breathable Bio-Skin / Lace Base",
        desc: "Ultra-thin, hypoallergenic permeable bases allowing natural scalp respiration and moisture transfer.",
      },
      {
        title: "Styling, Cut-In & Home Care Coaching",
        desc: "Professional blending with your natural hair, grooming guidance, and scalp hygiene protocols.",
      },
    ],
    placeholderImage: "/images/wigs-extensions-card.jpg",
  },
];

export const TESTIMONIALS = [
  {
    name: "Nazmeen Mulla",
    treatment: "Hair Fall & Scalp Restoration",
    rating: 5,
    quote:
      "\"Really good doctor and clinic staff! The treatment is truly effective—after struggling for years with chronic hair fall and scalp inflammation, Dr. Ritesh diagnosed the root cause with digital trichoscopy. Within just a few visits, my shedding stopped and healthy hair growth returned. So grateful! 👍\"",
  },
  {
    name: "Raksha Parmar",
    treatment: "Root-Cause Follicular Therapy",
    rating: 5,
    quote:
      "\"I'm thoroughly impressed with Dr. Ritesh! Not only is he an exceptional trichologist and dermatologist with a keen eye for microscopic detail, but he's also an incredibly kind and compassionate person. He explained my hair thinning root causes honestly without pushing unnecessary procedures. His consultation fees and treatment plans are very reasonable and pocket-friendly.\"",
  },
  {
    name: "Faisal Qureshi",
    treatment: "Comprehensive Hair & Scalp Care",
    rating: 5,
    quote:
      "\"Top notch clinical care! I have been visiting Dr. Ritesh since 2016 for hair maintenance and scalp health, and they have never compromised on the quality of treatment. Dr. Ritesh is exceptionally good at what he does—always providing scientifically sound medical advice, genuine follicle evaluations, and safe, pocket-friendly regimens.\"",
  },
];

export const HOME_FAQS = [
  {
    question: "What is the difference between a Trichologist and a General Dermatologist?",
    answer:
      "While general dermatologists manage conditions of the entire skin organ, a trichologist focuses specifically on the scientific pathology of hair follicles, scalp health, and biochemical causes of thinning. At Rama Trichology, clinical care combines medical dermatology with specialized follicular trichoscopy for focused, root-cause results.",
  },
  {
    question: "How soon can I expect to see visible results from hair loss treatments?",
    answer:
      "Hair grows in natural biological cycles (Anagen, Catagen, Telogen). Reduction in daily shedding is typically observed within 4 to 8 weeks. Visible follicular thickening, increased hair caliber, and new growth generally become documented via trichoscopic follow-ups at 3 to 6 months of disciplined treatment.",
  },
  {
    question: "Is the initial consultation painful or invasive?",
    answer:
      "Not at all. The consultation involves a detailed medical history intake, physical scalp inspection, and non-invasive digital trichoscopy (a specialized high-definition microscope placed gently on the scalp). No needles or skin punctures are involved in the initial diagnostic assessment.",
  },
  {
    question: "Do you offer non-surgical alternatives to hair transplants?",
    answer:
      "Yes, the vast majority of our patients are treated successfully through non-surgical protocols, including targeted pharmacological regimens, nutritional rebalancing, customized scalp infusions, and scalp micropigmentation camouflage.",
  },
  {
    question: "How do I prepare for my first appointment at Rama Trichology?",
    answer:
      "Please arrive with clean, dry hair. Refrain from applying hair styling gels, concealers, or fibers on the morning of your visit so our trichoscopic imaging can evaluate your scalp in its natural state. Bringing any recent blood test reports (within the last 6 months) is also helpful.",
  },
];
