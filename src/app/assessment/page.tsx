"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AssessmentPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/book-consultation");
  }, [router]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center p-8">
      <div className="text-center">
        <div className="w-10 h-10 border-4 border-[#007baa] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-sm font-semibold text-navy-950">
          Redirecting to Clinical Consultation...
        </p>
      </div>
    </div>
  );
}
