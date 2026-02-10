export default function HandcraftedVsMassProduced() {
  const benefits = [
    "Hand-assembled with attention to detail",
    "Quality inspected at every stage",
    "Built to last, not to be replaced",
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-charcoal mb-6">Handcrafted vs. Mass-Produced</h2>
            <p className="text-slate mb-6">
              Every Dutch Craft mattress is built by skilled craftsmen who take pride in their work.
              We don&apos;t rush production to meet quotas—we focus on getting it right.
            </p>
            <ul className="space-y-4">
              {benefits.map((item) => (
                <li key={item} className="flex gap-3">
                  <div className="shrink-0 w-6 h-6 bg-sage rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-fog rounded-lg p-8">
            <h3 className="font-semibold text-charcoal mb-4">The Difference You&apos;ll Feel</h3>
            <p className="text-slate text-sm mb-4">
              Mass-produced mattresses prioritize speed and volume. Our craftsmen prioritize
              your comfort and the longevity of your mattress.
            </p>
            <p className="text-slate text-sm">
              When you lie down on a Dutch Craft mattress, you&apos;re feeling decades of
              expertise and genuine care in every layer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
