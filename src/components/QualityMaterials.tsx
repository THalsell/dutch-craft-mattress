import Image from "next/image";

export default function QualityMaterials() {
  const materials = [
    "High-density foams for lasting support and comfort",
    "Premium coil systems including pocketed coils for motion isolation",
    "Gel-infused memory foam options for cooler sleep",
    "Natural latex and eco-friendly material options",
    "Two-sided construction available for extended mattress life",
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative aspect-4/3 rounded-lg overflow-hidden">
            <Image
              src="/bed.png"
              alt="Dutch Craft mattress quality"
              fill
              className="object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-charcoal mb-6">Premium Quality Materials</h2>
            <p className="text-base md:text-lg leading-relaxed text-slate mb-6 max-w-2xl">
              From foams to fabrics and springs to cotton, compare our materials to any national brand
              and discover why our mattresses are built to last.
            </p>
            <ul className="space-y-4">
              {materials.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-sky-300 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-base md:text-lg leading-relaxed text-slate">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
