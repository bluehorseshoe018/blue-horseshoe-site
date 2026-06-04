"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-300 to-amber-600 text-slate-950 font-black">
            BH
          </div>

          <div>
            <p className="text-lg font-bold tracking-tight text-white">
              Blue Horseshoe
            </p>

            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              Foundation
            </p>
          </div>
        </Link>

        <nav className="hidden gap-8 text-sm text-slate-300 md:flex">
          <Link href="/about" className="transition hover:text-white">
            About
          </Link>

          <Link href="/programs" className="transition hover:text-white">
            Programs
          </Link>

          <Link href="/media" className="transition hover:text-white">
            Media
          </Link>

          <Link href="/get-involved" className="transition hover:text-white">
            Get Involved
          </Link>
          <Link href="/profile" className="transition hover:text-white">
            Profile
          </Link>
          <Link href="/contact" className="transition hover:text-white">
            Contact
          </Link>
        </nav>

        <Link
          href="/get-involved"
          className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-yellow-300"
        >
          Join Us
        </Link>
      </div>
    </header>
  );
}
