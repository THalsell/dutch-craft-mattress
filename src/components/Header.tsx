"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const collections = [
  { name: "Comfort", slug: "comfort" },
  { name: "Comfort Response", slug: "comfort-response" },
  { name: "Heirloom", slug: "heirloom" },
  { name: "Nightfall", slug: "nightfall" },
  { name: "Posture Perfect", slug: "posture-perfect" },
  { name: "Posture Perfect Gel", slug: "posture-perfect-gel" },
  { name: "Posture Perfect ICE", slug: "posture-perfect-ice" },
  { name: "Legacy Elite HD", slug: "legacy-elite-hd" },
];

const aboutSubLinks = [
  { href: "/about", label: "Our Story" },
  { href: "/why-were-different", label: "Why We're Different" },
  { href: "/warranty-and-care", label: "Warranty & Care" },
];

const linkClass = "font-bold text-charcoal hover:text-sky-300 transition-colors";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [collectionsOpen, setCollectionsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const handler = () => { if (mq.matches) setMenuOpen(false); };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top row */}
        <div className="flex items-center justify-between md:justify-center py-4">
          <Link href="/">
            <Image
              src="/dutch-craft-logo.png"
              alt="Dutch Craft Mattress"
              width={180}
              height={40}
              className="h-12 w-auto md:h-20 md:w-auto"
              priority
            />
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="md:hidden text-charcoal p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex justify-center gap-8 pb-3 text-base">
          {/* Collections dropdown */}
          <div className="relative group">
            <Link href="/collections" className={linkClass}>
              Collections
            </Link>
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 hidden group-hover:block z-50">
              <div className="bg-white border border-border rounded-lg shadow-lg py-2 min-w-55">
                {collections.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/collections/${c.slug}`}
                    className="block px-4 py-2 text-sm text-charcoal hover:bg-fog hover:text-sky-300 transition-colors"
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* About Us dropdown */}
          <div className="relative group">
            <Link href="/about" className={linkClass}>
              About Us
            </Link>
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 hidden group-hover:block z-50">
              <div className="bg-white border border-border rounded-lg shadow-lg py-2 min-w-48">
                {aboutSubLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2 text-sm text-charcoal hover:bg-fog hover:text-sky-300 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/find-a-retailer" className={linkClass}>
            Find a Retailer
          </Link>

          <Link href="/shop" className={`${linkClass} inline-flex items-center gap-1`}>
            Shop From Home
          </Link>

          <Link href="/partner-with-us" className={linkClass}>
            Partner with Us
          </Link>

          <Link href="/contact" className={linkClass}>
            Contact
          </Link>
        </nav>

        {/* Mobile slide-down nav */}
        <nav
          className={`md:hidden border-t border-border flex flex-col gap-4 text-sm overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-200 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
          }`}
        >
          {/* Collections */}
          <div>
            <button
              onClick={() => setCollectionsOpen(!collectionsOpen)}
              className={`${linkClass} flex items-center gap-1`}
            >
              Collections
              <svg
                className={`w-4 h-4 transition-transform ${collectionsOpen ? "rotate-180" : ""}`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {collectionsOpen && (
              <div className="flex flex-col gap-2 pl-4 mt-2">
                {collections.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/collections/${c.slug}`}
                    onClick={() => setMenuOpen(false)}
                    className="text-sm text-charcoal hover:text-sky-300 transition-colors"
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* About Us */}
          <div>
            <button
              onClick={() => setAboutOpen(!aboutOpen)}
              className={`${linkClass} flex items-center gap-1`}
            >
              About Us
              <svg
                className={`w-4 h-4 transition-transform ${aboutOpen ? "rotate-180" : ""}`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {aboutOpen && (
              <div className="flex flex-col gap-2 pl-4 mt-2">
                {aboutSubLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-sm text-charcoal hover:text-sky-300 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/find-a-retailer"
            onClick={() => setMenuOpen(false)}
            className={linkClass}
          >
            Find a Retailer
          </Link>

          <Link
            href="/shop"
            onClick={() => setMenuOpen(false)}
            className={`${linkClass} inline-flex items-center gap-1`}
          >
            Shop From Home
          </Link>

          <Link
            href="/partner-with-us"
            onClick={() => setMenuOpen(false)}
            className={linkClass}
          >
            Partner with Us
          </Link>

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className={linkClass}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
