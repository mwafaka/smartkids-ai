"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Compass, MessageSquare, Baby, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/home", label: "Home", icon: Home },
  { href: "/activities", label: "Explore", icon: Compass },
  { href: "/assistant", label: "AI Chat", icon: MessageSquare },
  { href: "/my-child", label: "Child", icon: Baby },
  { href: "/progress", label: "Progress", icon: BarChart3 },
];

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-neutral-200 bg-white lg:hidden safe-area-bottom">
      <div className="flex items-center justify-around px-2 py-1.5">
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center gap-0.5 rounded-lg px-3 py-1.5 text-[10px] font-medium transition-colors",
                isActive
                  ? "text-neutral-900"
                  : "text-neutral-400"
              )}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}