import Image from "next/image";
import Link from "next/link";
import { collections } from "@/src/data/collections";

export default function FeaturedCollections() {
  const featuredCollections = collections.slice(0, 4);

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-charcoal text-center mb-4">Our Collections</h2>
        <p className="text-slate text-center max-w-2xl mx-auto mb-12">
          Explore our range of handcrafted mattress collections, each designed to meet different sleep needs and preferences.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {featuredCollections.map((collection) => (
            <Link
              key={collection.slug}
              href={`/collections/${collection.slug}`}
              className="group"
            >
              <div className="relative aspect-square bg-fog rounded-lg overflow-hidden mb-3">
                {collection.image && (
                  <Image
                    src={collection.image}
                    alt={collection.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                )}
              </div>
              <h3 className="text-charcoal font-semibold group-hover:text-sage transition-colors">
                {collection.name}
              </h3>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/collections"
            className="inline-block bg-sage text-white font-semibold px-8 py-3 rounded-full hover:bg-sage-dark transition-colors"
          >
            View All Collections
          </Link>
        </div>
      </div>
    </section>
  );
}
