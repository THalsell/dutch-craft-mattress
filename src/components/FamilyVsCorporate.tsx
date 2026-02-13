export default function FamilyVsCorporate() {
  const corporate = [
    "Quarterly profit targets drive decisions",
    "Investors demand cost-cutting",
    "Frequent ownership changes",
    "Anonymous customer relationships",
  ];

  const dutchCraft = [
    "Customer satisfaction drives decisions",
    "No outside investors",
    "Same family ownership since day one",
    "Personal relationships with retailers",
  ];

  return (
    <section className="py-20 md:py-28 bg-fog">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-charcoal mb-4">Family Owned vs. Corporate Driven</h2>
          <p className="text-base md:text-lg leading-relaxed text-slate max-w-2xl">
            When you buy from Dutch Craft, you&apos;re supporting a family business that
            answers to customers—not shareholders demanding higher margins.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="bg-fog border border-border rounded-lg p-8">
            <h3 className="text-lg font-semibold text-muted mb-6">Corporate Mattress Companies</h3>
            <ul className="space-y-4">
              {corporate.map((item) => (
                <li key={item} className="flex gap-3">
                  <svg className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-base text-slate">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="border-2 border-sky-300 rounded-xl p-8 bg-white shadow-lg md:-mt-2">
            <h3 className="text-xl font-bold text-charcoal mb-6">Dutch Craft</h3>
            <ul className="space-y-4">
              {dutchCraft.map((item) => (
                <li key={item} className="flex gap-3">
                  <svg className="w-5 h-5 text-sky-300 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base font-medium text-charcoal">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
