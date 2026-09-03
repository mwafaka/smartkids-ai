"use client";

import { useEffect } from "react";
import { Sidebar } from "./sidebar";
import { MobileNav } from "./mobile-nav";
import { Header } from "./header";
import { Footer } from "./footer";
import { useAppStore } from "@/stores/app-store";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const loadFromLocalStorage = useAppStore((s) => s.loadFromLocalStorage);

  useEffect(() => {
    loadFromLocalStorage();
  }, [loadFromLocalStorage]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className="lg:ml-64">
        <Header />
        <main className="px-4 py-6 pb-24 lg:px-8 lg:py-8">
          {children}
        </main>
        <Footer />
      </div>
      <MobileNav />
    </div>
  );
}
