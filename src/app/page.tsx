"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();

  useEffect(() => {
    const hasVisited = localStorage.getItem("smartkids_visited");
    if (hasVisited) {
      router.replace("/home");
    } else {
      router.replace("/onboarding");
    }
  }, [router]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-purple-200 border-t-purple-600" />
    </div>
  );
}
