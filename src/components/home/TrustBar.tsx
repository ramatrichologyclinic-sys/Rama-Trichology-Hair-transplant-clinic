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
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-sky-100">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className={`flex flex-col items-center text-center ${
                    idx !== 0 ? "pt-6 sm:pt-0 sm:pl-6 lg:pl-8" : ""
                  }`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center text-white mb-3 shadow-md shadow-blue-500/20">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-serif text-3xl sm:text-4xl font-bold text-navy-950">
                    {stat.value}
                  </span>
                  <span className="text-sm font-semibold text-navy-950 mt-1">
                    {stat.label}
                  </span>
                  <span className="text-xs text-sky-800 font-medium mt-0.5">
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
