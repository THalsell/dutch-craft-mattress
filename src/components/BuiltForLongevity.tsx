export default function BuiltForLongevity() {
  const stats = [
    { value: "15+", label: "Year warranties available" },
    { value: "100%", label: "American made materials" },
    { value: "Two-Sided", label: "Options for extended life" },
  ];

  return (
    <section className="py-16 md:py-20 bg-fog">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-charcoal mb-6">Built for Longevity</h2>
        <p className="text-slate mb-8 max-w-2xl mx-auto">
          We don&apos;t build mattresses to be replaced in a few years. We build them to
          provide lasting comfort—because a good mattress should be an investment, not
          a recurring expense.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-lg p-6">
              <div className="text-3xl font-bold text-sage mb-2">{stat.value}</div>
              <p className="text-slate text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
