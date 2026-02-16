import Link from "next/link";

export default function RetailerBanner() {
  return (
    <section className="py-12 md:py-16 bg-fog">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-white rounded-xl border border-border px-8 md:px-10 py-8 flex flex-col md:flex-row items-center gap-6 md:gap-8">
          {/* Location icon */}
          <div className="shrink-0">
            <svg
              className="w-10 h-10 text-slate"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
          </div>

          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl font-semibold text-charcoal mb-1">
              Find a Retailer Near You
            </h3>
            <p className="text-slate text-sm md:text-base">
              Experience Dutch Craft Mattress quality in person at an authorized retailer.
            </p>
          </div>

          {/* CTA */}
          <Link
            href="/find-a-retailer"
            className="shrink-0 inline-flex items-center gap-2 bg-sky-300 text-white font-semibold px-6 py-3 rounded-lg hover:bg-navy-700 transition-colors"
          >
            Visit a store
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
