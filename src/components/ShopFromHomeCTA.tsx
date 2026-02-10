export default function ShopFromHomeCTA() {
  return (
    <section className="py-16 md:py-20 bg-charcoal text-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Experience Better Sleep?
        </h2>
        <p className="text-white/80 mb-8 text-lg">
          Browse our complete collection online and have your handcrafted mattress delivered directly to your door.
        </p>
        <a
          href="/shop-from-home"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-sage hover:bg-sage-dark text-white font-semibold px-8 py-4 rounded-full transition-colors text-lg"
        >
          Shop From Home
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
        <p className="text-white/60 text-sm mt-4">
          You&apos;ll be redirected to our official online store
        </p>
      </div>
    </section>
  );
}
