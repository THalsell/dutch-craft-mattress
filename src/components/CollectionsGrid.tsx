import Image from "next/image";
import { collections } from "@/src/data/collections";

export default function CollectionsGrid() {
  return (
    <section id="collections" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-charcoal text-center mb-16">Our Collections</h2>
        <div className="flex flex-col gap-20">
          {collections.map((c, i) => (
            <div
              key={c.slug}
              className={`flex flex-col md:flex-row items-center gap-10 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <div className="relative bg-sage/15 rounded-lg aspect-4/3 overflow-hidden">
                  {c.image && <Image src={c.image} alt={c.name} fill className="object-fill" />}
                  {c.comingSoon && (
                    <div className="absolute top-4 right-4 bg-sage text-white text-sm font-semibold px-4 py-1.5 rounded-full shadow-md">
                      Coming Soon
                    </div>
                  )}
                </div>
              </div>
              {/* Text */}
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl font-bold text-charcoal mb-3">{c.name}</h3>
                <p className="text-slate mb-2">{c.description}</p>
                <p className="text-slate text-sm mb-4">{c.features}</p>
                <p className="text-sm text-muted mb-6">{c.warranty}</p>
                <a
                  href={`/collections/${c.slug}`}
                  className="inline-block bg-sage text-white font-semibold px-6 py-3 rounded-full hover:bg-sage-dark transition-colors text-sm"
                >
                  View All Models &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
