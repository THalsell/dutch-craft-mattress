import Image from "next/image";

export default function ManufacturingExcellence() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-charcoal text-center mb-4">Manufacturing Excellence</h2>
        <p className="text-base md:text-lg leading-relaxed text-slate text-center max-w-3xl mx-auto mb-14">
          Eli now operates multiple factories in the US, giving Dutch Craft complete control over quality at every step of production.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group relative rounded-lg overflow-hidden aspect-[3/4] hover:scale-[1.02] transition-transform duration-300">
            <Image
              src="/factory.png"
              alt="Mattress factory"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
              <h3 className="text-2xl font-bold text-white mb-2">Mattress Factory</h3>
              <p className="text-white/75 text-sm">
                Skilled craftsmen hand-assemble every mattress with meticulous attention to detail.
              </p>
            </div>
          </div>
          <div className="group relative rounded-lg overflow-hidden aspect-[3/4] hover:scale-[1.02] transition-transform duration-300">
            <Image
              src="/foam-cutting.png"
              alt="Foam cutting plant"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
              <h3 className="text-2xl font-bold text-white mb-2">Foam Cutting Plant</h3>
              <p className="text-white/75 text-sm">
                All foams cut in-house for complete quality control and competitive pricing.
              </p>
            </div>
          </div>
          <div className="group relative rounded-lg overflow-hidden aspect-[3/4] hover:scale-[1.02] transition-transform duration-300">
            <Image
              src="/sewing.png"
              alt="Sewing division"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
              <h3 className="text-2xl font-bold text-white mb-2">Sewing Division</h3>
              <p className="text-white/75 text-sm">
                Every cover sewn in our dedicated facility with consistent craftsmanship.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
