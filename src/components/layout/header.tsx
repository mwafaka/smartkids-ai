"use client";

import { Search, Bell } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-neutral-200 bg-white">
      <div className="flex h-14 items-center justify-between px-4 lg:px-6">
        <div className="flex items-center gap-2.5 lg:hidden">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-neutral-900">
            <span className="text-[10px] font-bold text-white">SK</span>
          </div>
          <h1 className="text-sm font-semibold text-neutral-900">SmartKids</h1>
        </div>

        <div className="hidden md:flex flex-1 max-w-sm">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              placeholder="Search activities..."
              className="w-full rounded-lg border border-neutral-200 bg-neutral-50 py-2 pl-9 pr-4 text-sm transition-colors focus:border-neutral-400 focus:bg-white focus:outline-none placeholder:text-neutral-400"
            />
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button className="relative rounded-lg p-2 text-neutral-500 hover:bg-neutral-100 transition-colors">
            <Bell className="h-4 w-4" />
            <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-neutral-900" />
          </button>
        </div>
      </div>
    </header>
  );
}