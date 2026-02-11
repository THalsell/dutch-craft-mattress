"use client";

import { useState } from "react";
import type { DiagramVariant } from "@/src/data/collections";

export default function DiagramCarousel({ modelName, diagrams }: { modelName: string; diagrams: DiagramVariant[] }) {
  const [index, setIndex] = useState(0);
  const variant = diagrams[index];

  return (
    <div className="mt-12">
      {diagrams.length > 1 && (
        <h3 className="text-sm font-bold text-charcoal uppercase tracking-wide mb-8 text-center">Available Comfort Levels</h3>
      )}
      <div className="relative">
        {diagrams.length > 1 && (
          <>
            <button
              onClick={() => setIndex((i) => (i - 1 + diagrams.length) % diagrams.length)}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 text-charcoal/60 hover:text-charcoal transition-colors"
              aria-label="Previous comfort level"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setIndex((i) => (i + 1) % diagrams.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 text-charcoal/60 hover:text-charcoal transition-colors"
              aria-label="Next comfort level"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Content */}
        <div className={`text-center ${diagrams.length > 1 ? 'px-12' : ''}`}>
          {diagrams.length > 1 && (
            <h4 className="text-xl font-semibold text-charcoal mb-4">{variant.label}</h4>
          )}
          <img
            src={variant.diagram}
            alt={`${modelName} ${variant.label} diagram`}
            className="mx-auto mb-4"
          />
          {variant.iconsImage && (
            <img
              src={variant.iconsImage}
              alt={`${modelName} ${variant.label} features`}
              className="mx-auto"
            />
          )}
        </div>

        {diagrams.length > 1 && (
          <div className="flex justify-center gap-2 mt-6">
            {diagrams.map((d, i) => (
              <button
                key={d.label}
                onClick={() => setIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${i === index ? "bg-charcoal" : "bg-charcoal/25"}`}
                aria-label={`Show ${d.label}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
