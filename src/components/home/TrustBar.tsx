import { CLINIC_INFO } from "@/lib/constants";
import { Award, Users, Star, GraduationCap } from "lucide-react";
import { AnimatedSection } from "@/components/common/AnimatedSection";

export default function TrustBar() {
  const stats = [
    {
      icon: Award,
      value: CLINIC_INFO.stats.years,
      label: "Years Clinical Experience",
      sub: "Specialized practice",
    },
    {
      icon: Users,
      value: CLINIC_INFO.stats.patients,
      label: "Patients Treated",
      sub: "Documented cases",
    },
    {
      icon: Star,
      value: `${CLINIC_INFO.stats.rating}★`,
      label: "Patient Satisfaction",
      sub: "Google verified rating",
    },
    {
      icon: GraduationCap,
      value: CLINIC_INFO.stats.certifications,
      label: "Medical Certifications",
      sub: "Trichology & Dermatology",
    },
  ];

  return (
    <div
      className="w-full"
      style={{
        marginTop: "clamp(40px, 5vw, 72px)",
      }}
    >
      <AnimatedSection delay={0.2}>
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl border border-white/80 shadow-[0_20px_50px_rgba(0,0,0,0.35)] py-8 sm:py-10 px-6 sm:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 sm:gap-x-8 gap-y-7 sm:gap-y-8 lg:gap-y-0 lg:divide-x lg:divide-sky-100">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center text-center justify-start h-full py-1 sm:py-0 lg:px-6 lg:first:pl-0 lg:last:pr-0"
                >
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center text-white mb-2.5 sm:mb-3 shadow-md shadow-blue-500/20 flex-shrink-0">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span className="font-serif text-3xl sm:text-4xl font-bold text-navy-950 block leading-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-navy-950 mt-1 min-h-[2.5rem] flex items-center justify-center text-center leading-snug">
                    {stat.label}
                  </span>
                  <span className="text-[11px] sm:text-xs text-sky-800 font-medium mt-0.5 block">
                    {stat.sub}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}
