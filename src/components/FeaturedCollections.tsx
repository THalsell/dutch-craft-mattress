"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { collections } from "@/src/data/collections";

const visibleCollections = collections.filter((c) => !c.comingSoon);

export default function FeaturedCollections() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  function updateArrows() {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }

  useEffect(() => {
    updateArrows();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, []);

  function scroll(direction: "left" | "right") {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.7;
    el.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  }

  return (
    <section className="py-20 md:py-28 bg-fog">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-charcoal text-center mb-4">
          Find Your Perfect Mattress
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-slate text-center max-w-2xl mx-auto mb-14">
          Explore our collections, each handcrafted to meet different sleep needs and preferences.
        </p>

        <div className="relative">
          {/* Left arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute -left-10 md:-left-12 top-1/3 -translate-y-1/2 z-10 text-charcoal hover:text-sky-300 transition-colors"
            aria-label="Scroll left"
          >
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute -right-10 md:-right-12 top-1/3 -translate-y-1/2 z-10 text-charcoal hover:text-sky-300 transition-colors"
            aria-label="Scroll right"
          >
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Scrollable track */}
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto scroll-smooth scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {visibleCollections.map((collection) => (
              <div
                key={collection.slug}
                className="flex flex-col items-center text-center flex-shrink-0 w-[calc(50%-16px)] sm:w-[calc(50%-16px)] lg:w-[calc(25%-24px)] snap-start"
              >
                <div className="relative aspect-square w-full rounded-lg overflow-hidden bg-sky-300/10 mb-5">
                  {collection.image && (
                    <Image
                      src={collection.image}
                      alt={collection.name}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
                <h3 className="text-lg font-bold text-charcoal mb-2">{collection.name}</h3>
                <p className="text-slate text-sm mb-1">{collection.description}</p>
                <p className="text-slate text-xs mb-5 flex-1">{collection.features}</p>
                <Link
                  href={`/collections/${collection.slug}`}
                  className="inline-block text-center bg-sky-300 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-navy-700 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <Link
            href="/collections"
            className="inline-block text-charcoal font-semibold underline underline-offset-4 hover:text-sky-300 transition-colors"
          >
            View All Collections
          </Link>
        </div>
      </div>
    </section>
  );
}
