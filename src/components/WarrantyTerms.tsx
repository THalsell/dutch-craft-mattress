export default function WarrantyTerms() {
  const covered = [
    "Manufacturing defects in materials and workmanship",
    "Body impressions greater than 1.5 inches",
    "Structural defects in coils or foam",
  ];

  const notCovered = [
    "Cover fabric and handles",
    "Normal wear and comfort preferences",
    "Damage from improper support or misuse",
  ];

  const requirements = [
    "Original purchase receipt is required",
    "Mattress must be clean and unstained",
    "Proper foundation with center support must be used",
    "Law tag must be attached for identification",
    "Transportation costs are customer responsibility",
    "Repair or replacement at Dutch Craft's discretion",
  ];

  return (
    <section className="py-16 md:py-20 bg-fog">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-charcoal text-center mb-4">Warranty Terms</h2>
        <p className="text-slate text-center mb-10 max-w-2xl mx-auto">
          Please review these terms to understand what&apos;s covered under your Dutch Craft warranty.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6">
            <h3 className="font-semibold text-charcoal mb-4">What&apos;s Covered</h3>
            <ul className="space-y-3 text-slate text-sm">
              {covered.map((item) => (
                <li key={item} className="flex gap-3">
                  <svg className="w-5 h-5 text-sage shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6">
            <h3 className="font-semibold text-charcoal mb-4">What&apos;s Not Covered</h3>
            <ul className="space-y-3 text-slate text-sm">
              {notCovered.map((item) => (
                <li key={item} className="flex gap-3">
                  <svg className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg p-6">
          <h3 className="font-semibold text-charcoal mb-4">Requirements for Warranty Claims</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate text-sm">
            {requirements.map((item, index) => (
              <li key={item} className="flex gap-3">
                <span className="text-sage font-bold">{index + 1}.</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
