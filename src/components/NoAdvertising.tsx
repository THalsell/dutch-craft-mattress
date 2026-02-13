export default function NoAdvertising() {
  return (
    <section className="py-20 md:py-28 bg-charcoal">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-6">No Advertising = Better Materials</h2>
            <p className="text-base md:text-lg leading-relaxed text-white/60 mb-6 max-w-2xl">
              National mattress brands spend hundreds of millions on TV commercials, celebrity
              endorsements, and flashy showrooms. That money has to come from somewhere—and
              it&apos;s usually from the materials in your mattress.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-white/60 max-w-2xl">
              We skip the expensive marketing and put those dollars where they matter:
              into the quality of your sleep surface.
            </p>
          </div>
          <div className="bg-white/10 rounded-lg p-8">
            <h3 className="text-lg font-bold text-white mb-6">Where the Money Goes</h3>
            <div className="space-y-5">
              <div className="flex justify-between items-center">
                <span className="text-base text-white/60">National Brand Ad Budget</span>
                <span className="text-2xl font-bold text-white">$100M+/year</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-base text-white/60">Dutch Craft Ad Budget</span>
                <span className="text-2xl font-bold text-sky-300">Minimal</span>
              </div>
              <hr className="border-white/20" />
              <p className="text-base leading-relaxed text-white/50">
                The difference goes directly into better foams, stronger coils, and
                premium fabrics—materials you&apos;ll actually sleep on.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
