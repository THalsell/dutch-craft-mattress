export default function HandcraftedVsMassProduced() {
  const benefits = [
    "Hand-assembled with attention to detail",
    "Quality inspected at every stage",
    "Built to last, not to be replaced",
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-charcoal mb-6">Handcrafted vs. Mass-Produced</h2>
            <p className="text-base md:text-lg leading-relaxed text-slate mb-6 max-w-2xl">
              Every Dutch Craft mattress is built by skilled craftsmen who take pride in their work.
              We don&apos;t rush production to meet quotas—we focus on getting it right.
            </p>
            <ul className="space-y-4">
              {benefits.map((item) => (
                <li key={item} className="flex gap-3">
                  <div className="shrink-0 w-6 h-6 bg-sky-300 rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-base md:text-lg leading-relaxed text-slate">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-charcoal rounded-lg p-8">
            <h3 className="text-lg font-bold text-white mb-4">This is what craftsmanship feels like.</h3>
            <p className="text-base leading-relaxed text-white/70 mb-4">
              Mass-produced mattresses prioritize speed and volume. Our craftsmen prioritize
              your comfort and the longevity of your mattress.
            </p>
            <p className="text-base leading-relaxed text-white/70">
              When you lie down on a Dutch Craft mattress, you&apos;re feeling decades of
              expertise and genuine care in every layer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
