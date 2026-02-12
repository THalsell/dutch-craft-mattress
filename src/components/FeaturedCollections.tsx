import Image from "next/image";
import Link from "next/link";
import { collections } from "@/src/data/collections";

const featuredSlugs = ["comfort", "nightfall", "posture-perfect-gel", "comfort-response"];

export default function FeaturedCollections() {
  const featured = featuredSlugs
    .map((slug) => collections.find((c) => c.slug === slug))
    .filter(Boolean) as typeof collections;

  return (
    <section className="py-16 md:py-20 bg-fog">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-charcoal text-center mb-4">Find Your Perfect Mattress</h2>
        <p className="text-slate text-center max-w-2xl mx-auto mb-12">
          Explore our most popular collections, each handcrafted to meet different sleep needs and preferences.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((collection) => (
            <div
              key={collection.slug}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <div className="relative aspect-4/3 bg-sage/10">
                {collection.image && (
                  <Image
                    src={collection.image}
                    alt={collection.name}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-charcoal mb-2">{collection.name}</h3>
                <p className="text-slate text-sm mb-2">{collection.description}</p>
                <p className="text-slate text-xs mb-4">{collection.features}</p>
                <Link
                  href={`/collections/${collection.slug}`}
                  className="mt-auto inline-block text-center bg-sage text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-sage-dark transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/collections"
            className="inline-block bg-charcoal text-white font-semibold px-8 py-3 rounded-full hover:bg-charcoal/90 transition-colors"
          >
            View All Collections
          </Link>
        </div>
      </div>
    </section>
  );
}
