export default function BuiltForLongevity() {
  const stats = [
    { value: "15+", label: "Year warranties available" },
    { value: "100%", label: "American made materials" },
    { value: "Two-Sided", label: "Options for extended life" },
  ];

  return (
    <section className="py-20 md:py-28 bg-charcoal text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">Built for Longevity</h2>
        <p className="text-base md:text-lg leading-relaxed text-white/60 mb-16 max-w-xl mx-auto">
          A good mattress should be an investment, not a recurring expense.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white/10 rounded-lg p-10">
              <div className="text-5xl md:text-6xl font-bold text-sky-300 mb-4">{stat.value}</div>
              <p className="text-xs uppercase tracking-widest text-white/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
