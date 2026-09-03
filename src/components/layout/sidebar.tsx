"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Compass,
  MessageSquare,
  Baby,
  BarChart3,
  Settings,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/home", label: "Home", icon: Home },
  { href: "/activities", label: "Activities", icon: Compass },
  { href: "/assistant", label: "AI Assistant", icon: MessageSquare },
  { href: "/my-child", label: "My Child", icon: Baby },
  { href: "/progress", label: "Progress", icon: BarChart3 },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-40 hidden h-screen w-60 border-r border-neutral-200 bg-white lg:block">
      <div className="flex h-full flex-col">
        <div className="flex items-center gap-2.5 border-b border-neutral-200 px-5 py-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-900">
            <span className="text-xs font-bold text-white">SK</span>
          </div>
          <div>
            <h1 className="text-sm font-semibold text-neutral-900 tracking-tight">SmartKids</h1>
            <p className="text-[11px] text-neutral-400">AI Parenting Guide</p>
          </div>
        </div>

        <nav className="flex-1 space-y-0.5 p-3">
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-neutral-100 text-neutral-900"
                    : "text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900"
                )}
              >
                <item.icon
                  className={cn(
                    "h-4 w-4",
                    isActive ? "text-neutral-900" : "text-neutral-400"
                  )}
                />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-neutral-200 p-3">
          <Link
            href="/settings"
            className={cn(
              "flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
              pathname === "/settings"
                ? "bg-neutral-100 text-neutral-900"
                : "text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900"
            )}
          >
            <Settings className="h-4 w-4" />
            Settings
          </Link>
        </div>
      </div>
    </aside>
  );
}