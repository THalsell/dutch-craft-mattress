import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import { collections, type Model } from "@/src/data/collections";

function slugify(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

function ModelGrid({ models, collectionSlug }: { models: Model[]; collectionSlug: string }) {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {models.map((model) => (
        <div
          key={model.name}
          className="relative rounded-lg overflow-hidden h-64 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
          style={model.image ? {
            backgroundImage: `url(${model.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          } : undefined}
        >
          {!model.image && <div className="absolute inset-0 bg-sage/20" />}
          <div className="absolute inset-0 bg-linear-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="text-lg font-semibold mb-2">{model.name}</h3>
            <p className="text-white/80 text-sm mb-4">{model.details}</p>
            <Link
              href={`/collections/${collectionSlug}/${slugify(model.name)}`}
              className="inline-block bg-white text-charcoal px-4 py-2 rounded text-sm font-medium hover:bg-white/90 transition-colors"
            >
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export default async function CollectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const collection = collections.find((c) => c.slug === slug);

  if (!collection) return notFound();

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section
        className={`relative bg-sage bg-cover bg-center ${collection.heroImage ? 'py-20 md:py-40 lg:py-56' : 'py-16'}`}
        style={{
          ...(collection.heroColor ? { backgroundColor: collection.heroColor } : {}),
          ...(collection.heroImage ? { backgroundImage: `url(${collection.heroImage})` } : {}),
        }}
      >
        <div className="flex justify-center md:justify-end px-4 md:px-0">
          <div className={`relative ${collection.heroImage ? 'bg-black/50 backdrop-blur-sm rounded-lg md:rounded-r-none md:rounded-l-lg p-4 md:p-6 lg:p-8 xl:p-10 2xl:p-12' : ''} max-w-xs md:max-w-sm lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl text-center md:text-right`}>
            <h1 className={`text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white ${collection.heroImage ? '' : 'mb-2 md:mb-3'}`}>{collection.name}</h1>
            {!collection.heroImage && (
              <>
                <p className="text-white/80 text-sm md:text-base mb-2 md:mb-3">{collection.description}</p>
                <p className="text-white/70 text-xs">{collection.features}</p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Models */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-charcoal text-center mb-12">Models</h2>
          {collection.subCollections ? (
            collection.subCollections.map((sub) => (
              <div key={sub.name} className="mb-16 last:mb-0">
                <h3 className="text-2xl font-semibold text-charcoal mb-8">{sub.name}</h3>
                <ModelGrid models={sub.models} collectionSlug={collection.slug} />
              </div>
            ))
          ) : (
            <ModelGrid models={collection.models ?? []} collectionSlug={collection.slug} />
          )}
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-fog py-6">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-muted text-xs text-center">
            *Model names, specifications, and availability may vary by region. Please contact your local retailer for the most up-to-date product information.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
