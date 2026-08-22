"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-navy/95 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20"
          : "bg-navy/80 backdrop-blur-md"
      )}
    >
      <nav
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex h-[68px] items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-xl font-extrabold text-white tracking-tight"
            aria-label="Raza Shah Home"
          >
            Raza<span className="text-emerald-400">Shah</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-white/70 hover:text-white transition-colors duration-200 font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="#contact"
              className="rounded-md bg-emerald-500 px-4 py-2 text-sm font-semibold font-display text-white hover:bg-emerald-600 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
            >
              Book Free QA Assessment
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden text-white/80 hover:text-white p-2 rounded-md"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden border-t border-white/10 py-4 pb-6"
          >
            <div className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-2 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-md transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#contact"
                className="mt-3 rounded-md bg-emerald-500 px-4 py-3 text-center text-sm font-semibold font-display text-white hover:bg-emerald-600 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Book Free QA Assessment
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
