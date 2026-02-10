export default function NoAdvertising() {
  return (
    <section className="py-16 md:py-20 bg-fog">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="order-2 lg:order-1 bg-white rounded-lg p-8">
            <h3 className="font-semibold text-charcoal mb-4">Where the Money Goes</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-slate text-sm">National Brand Ad Budget</span>
                <span className="text-charcoal font-medium">$100M+/year</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate text-sm">Dutch Craft Ad Budget</span>
                <span className="text-sage font-medium">Minimal</span>
              </div>
              <hr className="border-border" />
              <p className="text-slate text-sm">
                The difference goes directly into better foams, stronger coils, and
                premium fabrics—materials you&apos;ll actually sleep on.
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-charcoal mb-6">No Advertising = Better Materials</h2>
            <p className="text-slate mb-6">
              National mattress brands spend hundreds of millions on TV commercials, celebrity
              endorsements, and flashy showrooms. That money has to come from somewhere—and
              it&apos;s usually from the materials in your mattress.
            </p>
            <p className="text-slate">
              We skip the expensive marketing and put those dollars where they matter:
              into the quality of your sleep surface.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
