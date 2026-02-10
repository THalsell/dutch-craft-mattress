export default function BuiltSmarter() {
  const points = [
    {
      title: "No National Advertising Spend",
      description: "While others spend millions on TV ads and celebrity endorsements, we put that money into better materials.",
    },
    {
      title: "Low Overhead Operations",
      description: "Our showroom is steps from the factory—no expensive corporate campus or distant headquarters.",
    },
    {
      title: "No Outside Investors",
      description: "We answer to our customers, not shareholders or a board of directors demanding higher margins.",
    },
    {
      title: "Savings Passed to You",
      description: "Every dollar we save in overhead goes directly into giving you a better mattress at a fair price.",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-fog">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-charcoal mb-4">Built Smarter, Priced Fairly</h2>
            <p className="text-slate mb-8">
              We believe you shouldn&apos;t pay for someone else&apos;s marketing budget. Here&apos;s how we keep
              quality high and prices honest.
            </p>
            <div className="space-y-6">
              {points.map((point) => (
                <div key={point.title} className="flex gap-4">
                  <div className="shrink-0 w-6 h-6 bg-sage rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">{point.title}</h3>
                    <p className="text-slate text-sm">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="text-center">
              <p className="text-lg text-charcoal mb-2">Where Your Money Goes</p>
              <div className="space-y-4 mt-6">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate">Quality Materials</span>
                    <span className="font-semibold text-sage">Maximum</span>
                  </div>
                  <div className="h-3 bg-sage/20 rounded-full overflow-hidden">
                    <div className="h-full bg-sage rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate">Skilled Craftsmanship</span>
                    <span className="font-semibold text-sage">High</span>
                  </div>
                  <div className="h-3 bg-sage/20 rounded-full overflow-hidden">
                    <div className="h-full bg-sage rounded-full" style={{ width: "70%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate">Advertising</span>
                    <span className="font-semibold text-charcoal">Minimal</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gray-400 rounded-full" style={{ width: "10%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate">Corporate Overhead</span>
                    <span className="font-semibold text-charcoal">Minimal</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gray-400 rounded-full" style={{ width: "5%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
