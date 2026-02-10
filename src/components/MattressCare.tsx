export default function MattressCare() {
  const dos = [
    { title: "Rotate regularly", desc: "Every 3-6 months to ensure even wear" },
    { title: "Use proper support", desc: "A quality foundation or platform bed" },
    { title: "Use a mattress protector", desc: "Protects against spills and stains" },
    { title: "Keep the law tag", desc: "Required for warranty identification" },
    { title: "Allow to breathe", desc: "Use breathable bedding materials" },
    { title: "Spot clean when needed", desc: "Use mild soap and water" },
  ];

  const donts = [
    { title: "Don't bend or fold", desc: "Can damage internal structure" },
    { title: "Don't jump on the mattress", desc: "Causes premature wear" },
    { title: "Don't use without support", desc: "Floor use voids warranty" },
    { title: "Don't remove the law tag", desc: "Needed for warranty claims" },
    { title: "Don't soak or steam clean", desc: "Moisture damages materials" },
    { title: "Don't use improper foundations", desc: "Ensure center support for queen+" },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-charcoal text-center mb-4">Mattress Care</h2>
        <p className="text-slate text-center mb-10 max-w-2xl mx-auto">
          Proper care will extend the life of your mattress and keep it comfortable for years to come.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-sage/10 border border-sage/30 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-charcoal mb-4 flex items-center gap-2">
              <svg className="w-6 h-6 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Do&apos;s
            </h3>
            <ul className="space-y-3 text-slate text-sm">
              {dos.map((item) => (
                <li key={item.title} className="flex gap-3">
                  <span className="text-sage">•</span>
                  <span><strong>{item.title}</strong> — {item.desc}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-charcoal mb-4 flex items-center gap-2">
              <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              Don&apos;ts
            </h3>
            <ul className="space-y-3 text-slate text-sm">
              {donts.map((item) => (
                <li key={item.title} className="flex gap-3">
                  <span className="text-red-500">•</span>
                  <span><strong>{item.title}</strong> — {item.desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
