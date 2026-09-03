import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-neutral-900">
              <span className="text-[9px] font-bold text-white">SK</span>
            </div>
            <span className="text-xs text-neutral-500">
              © {new Date().getFullYear()} SmartKids AI. Alle Rechte vorbehalten.
            </span>
          </div>
          <nav className="flex items-center gap-4 text-xs text-neutral-500">
            <Link href="/impressum" className="hover:text-neutral-900 transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-neutral-900 transition-colors">
              Datenschutz
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
