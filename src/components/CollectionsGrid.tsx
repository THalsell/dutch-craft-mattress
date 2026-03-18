import Image from "next/image";
import Link from "next/link";
import { collections } from "@/src/data/collections";

export default function CollectionsGrid() {
  return (
    <section id="collections">
      {/* Heading */}
      <div className="py-14 bg-white text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-3">
          Our Collections
        </h1>
        <p className="text-slate text-lg max-w-xl mx-auto">
          Handcrafted in Tennessee. Built to last.
        </p>
      </div>

      {/* Full-bleed alternating rows */}
      <div className="flex flex-col">
        {collections.map((c, i) => (
          <div
            key={c.slug}
            className={`flex flex-col md:flex-row ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
          >
            {/* Image */}
            <div className="relative w-full md:w-1/2 h-72 md:h-[480px] bg-sky-300/10">
              {c.image && (
                <Image
                  src={c.image}
                  alt={c.name}
                  fill
                  className="object-cover"
                />
              )}
              {c.comingSoon && (
                <div className="absolute top-4 right-4 bg-sky-300 text-white text-sm font-semibold px-4 py-1.5 rounded-full shadow-md">
                  Coming Soon
                </div>
              )}
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2 flex items-center justify-center bg-white px-10 py-12 md:px-16">
              <div className="text-center">
                {c.nameImage ? (
                  <Image
                    src={c.nameImage}
                    alt={c.name}
                    width={320}
                    height={160}
                    className={c.nameImageClassName ?? "mb-4 w-auto max-h-20 object-contain"}
                  />
                ) : (
                  <h2 className="text-3xl font-bold text-charcoal mb-3">{c.name}</h2>
                )}
                {!c.comingSoon && (
                  <Link
                    href={`/collections/${c.slug}`}
                    className="inline-block bg-sky-300 text-white font-semibold px-6 py-3 rounded-full hover:bg-navy-700 transition-colors text-sm"
                  >
                    View All Models &rarr;
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
