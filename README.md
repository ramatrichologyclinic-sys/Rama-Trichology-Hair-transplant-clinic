# Rama Trichology — Hair and Scalp Clinic

Production-grade marketing and lead-generation website for **Rama Trichology — Hair and Scalp Clinic**.

Built with Next.js 14+ (App Router), TypeScript, Tailwind CSS, Framer Motion, and Lenis smooth scrolling.

---

## 🎨 Design Tokens & WCAG AA Contrast Compliance

Defined in `src/app/globals.css` and `tailwind.config.ts`:

- `--navy-950`: `#0E2A4D` (headings, nav text, footer background)
- `--blue-700`: `#1D4E7E` (primary buttons, links, active states)
- `--blue-400`: `#3FA0D9` (hover states, accent icons, highlights, focus rings)
- `--ice-50`:   `#EAF3FA` (alternate section backgrounds)
- `--white`:    `#FFFFFF` (base background)
- `--ink-900`:  #14202B` (body text — near-black navy, NOT pure black)

### Contrast Rules:
- Only `white` or `ice-50` text on `navy-950` or `blue-700` backgrounds.
- Only `ink-900` or `navy-950` text on `white` or `ice-50` backgrounds.
- `blue-400` is never used as body text on light backgrounds (reserved for icons, focus rings, and dark background accents).

---

## 🧭 Site Architecture & Pages

- **Home (`/`)**: 10 structured sections including Hero, Trust Bar, Why Hair Fall Happens, Services Grid, Meet the Doctor, How We Diagnose, Before/After Carousel, Testimonials, FAQ Accordion, and Final CTA Band.
- **About (`/about`)**: Biography of Dr. Ritesh Safariya, clinical philosophy, trichology vs general dermatology.
- **Services Overview (`/services`)**: Detailed clinical breakdowns of all 5 clinical pillars.
- **Service Detail Pages**:
  - `/services/hair-fall`: Features interactive Male / Female / Kids Framer Motion tab switcher.
  - `/services/hair-scalp-diseases`: Dedicated scalp conditions, infections, and microbiome restoration.
  - `/services/hair-transplant`: Advanced Micro-FUE & DHI protocols.
  - `/services/hair-camouflage`: Scalp Micropigmentation (SMP) and density enhancement.
  - `/services/wigs-extensions`: Medical-grade cranial prostheses and breathable human hair systems.
- **Results (`/results`)**: Clean Before & After case studies with timeline and clinical outcome notes.
- **Assessment (`/assessment`)**: 6-step interactive client-side quiz with rule-based diagnostic indication and Web3Forms lead capture.
- **Contact (`/contact`)**: Lead capture form, embedded Calendly scheduling placeholder, Google Maps iframe, and clinic hours.
- **FAQ (`/faq`)**: Clean accessible accordion answering 10 essential patient inquiries.

---

## 🛠️ Agency Swapping Guide

1. **Doctor Name & Credentials**:
   - Update in `src/lib/constants.ts` under `CLINIC_INFO.doctorName` and `CLINIC_INFO.credentials`.
2. **Doctor Photo**:
   - Swap `https://placehold.co/600x700?text=Doctor+Portrait` in `src/components/home/MeetTheDoctor.tsx` and `src/app/about/page.tsx` with your local image asset (e.g. `/images/doctor.jpg`).
3. **Web3Forms Access Key**:
   - Set `WEB3FORMS_ACCESS_KEY` in `.env.local`.
4. **Calendly URL**:
   - Update `NEXT_PUBLIC_CALENDLY_URL` or `CLINIC_INFO.calendlyUrl` in `src/lib/constants.ts`.
5. **WhatsApp Number & Clinic Phone**:
   - Update in `src/lib/constants.ts` under `CLINIC_INFO.whatsappNumber` and `CLINIC_INFO.phone`.

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```
