import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import { collections, type Collection, type Model } from "@/src/data/collections";
import DiagramCarousel from "@/src/components/DiagramCarousel";

function slugify(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

function getAllModels(collection: Collection): Model[] {
  if (collection.subCollections) {
    return collection.subCollections.flatMap(sc => sc.models);
  }
  return collection.models ?? [];
}

export function generateStaticParams() {
  const params: { slug: string; model: string }[] = [];
  for (const collection of collections) {
    for (const model of getAllModels(collection)) {
      params.push({ slug: collection.slug, model: slugify(model.name) });
    }
  }
  return params;
}

export default async function ModelPage({ params }: { params: Promise<{ slug: string; model: string }> }) {
  const { slug, model: modelSlug } = await params;
  const collection = collections.find((c) => c.slug === slug);

  if (!collection) return notFound();

  const model = getAllModels(collection).find((m) => slugify(m.name) === modelSlug);

  if (!model) return notFound();

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section
        className={`relative bg-sage bg-cover bg-center ${model.image ? 'py-20 md:py-40 lg:py-56' : 'py-16'}`}
        style={{
          ...(collection.heroColor ? { backgroundColor: collection.heroColor } : {}),
          ...(model.image ? { backgroundImage: `url(${model.image})` } : {}),
        }}
      >
        {model.image ? (
          <div className="flex justify-center md:justify-end px-4 md:px-0">
            <div className="relative bg-black/50 backdrop-blur-sm rounded-lg md:rounded-r-none md:rounded-l-lg p-4 md:p-6 lg:p-8 xl:p-10 2xl:p-12 max-w-xs md:max-w-sm lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl text-center md:text-right">
              <p className="text-white/70 text-xs md:text-sm mb-2">{collection.name} Collection</p>
              <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white">{model.name}</h1>
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-white/70 text-sm mb-2">{collection.name} Collection</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{model.name}</h1>
            <p className="text-white/80 text-lg">{model.details}</p>
          </div>
        )}
      </section>

      {/* Details */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          {/* Layout for models with modelDetails */}
          {model.modelDetails ? (
            <div className="mb-12">
              {/* Top: Mattress image left, name container right */}
              <div className="flex flex-col-reverse lg:flex-row gap-8 mb-10">
                {model.mattressImage && (
                  <div className="lg:w-1/2">
                    <img
                      src={model.mattressImage}
                      alt={`${model.name} mattress`}
                      className="w-full rounded-lg"
                    />
                  </div>
                )}
                <div className="lg:w-1/2 flex flex-col justify-center">
                  <div className="p-8 text-center" style={{ backgroundColor: collection.modelBoxColor || '#6b8494' }}>
                    <h2 className="text-4xl font-bold text-white">{model.name}</h2>
                  </div>
                  <p className="text-charcoal mt-3 text-center text-lg">
                    {model.modelDetails.subtitle}
                    {model.modelDetails.firmModelAvailable && (
                      <span className="text-slate text-sm ml-2">*also available in firm</span>
                    )}
                    {model.modelDetails.alsoAvailable && (
                      <span className="text-slate text-sm ml-2">*{model.modelDetails.alsoAvailable}</span>
                    )}
                  </p>
                </div>
              </div>

              {/* Info Grid */}
              <div className="flex flex-wrap justify-center gap-8">
                {/* Construction, Materials & Specs */}
                {(model.modelDetails.comfortLevel || model.modelDetails.supportSystem || model.modelDetails.specs) && (
                  <div className="bg-gray-50 rounded-lg p-6 text-center w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)]">
                    <h3 className="text-sm font-bold text-charcoal uppercase tracking-wide mb-4">Construction & Materials</h3>
                    <div className="space-y-2 text-sm text-slate">
                      {model.modelDetails.comfortLevel && <p><span className="font-medium text-charcoal">Comfort Level:</span> {model.modelDetails.comfortLevel}</p>}
                      {model.modelDetails.coverFabric && <p><span className="font-medium text-charcoal">Cover Fabric:</span> {model.modelDetails.coverFabric}</p>}
                      {model.modelDetails.design && <p><span className="font-medium text-charcoal">Design:</span> {model.modelDetails.design}</p>}
                      {model.modelDetails.specs?.height && <p><span className="font-medium text-charcoal">Height:</span> {model.modelDetails.specs.height}</p>}
                      {model.modelDetails.specs?.warranty && <p><span className="font-medium text-charcoal">Warranty:</span> {model.modelDetails.specs.warranty}</p>}
                      {model.modelDetails.specs?.flippable && <p><span className="font-medium text-charcoal">Flippable:</span> {model.modelDetails.specs.flippable}</p>}
                    </div>
                  </div>
                )}

                {/* Performance & Benefits */}
                {model.modelDetails.performance && (
                  <div className="bg-gray-50 rounded-lg p-6 text-center w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)]">
                    <h3 className="text-sm font-bold text-charcoal uppercase tracking-wide mb-4">Performance & Benefits</h3>
                    <ul className="space-y-2 text-sm text-slate">
                      {model.modelDetails.performance.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>

              {/* Icons */}
              {model.modelDetails.iconsImage && (
                <div className="mt-8">
                  <img
                    src={model.modelDetails.iconsImage}
                    alt={`${model.name} features`}
                    className="mx-auto"
                  />
                </div>
              )}

              {/* Diagrams Carousel */}
              {model.modelDetails.diagrams && model.modelDetails.diagrams.length > 0 && (
                <DiagramCarousel modelName={model.name} diagrams={model.modelDetails.diagrams} />
              )}
            </div>
          ) : (
            <>
              {/* Fallback for models without modelDetails */}
              {(model.mattressImage || model.benefits) && (
                <div className="mb-12 flex flex-col lg:flex-row items-start gap-16">
                  {model.benefits && (
                    <div className="flex-shrink-0 w-full lg:w-1/3">
                      <h3 className="text-sm font-bold text-charcoal uppercase tracking-wide mb-6 text-center">Key Benefits</h3>
                      <div className="flex justify-center gap-8">
                        {model.benefits.map((benefit) => (
                          <div key={benefit.label} className="text-center">
                            <img
                              src={benefit.icon}
                              alt={benefit.label}
                              className={`${benefit.size || 'w-40 h-40'} mx-auto mb-2 object-contain contrast-125 brightness-75`}
                            />
                            <p className="text-sm text-slate">{benefit.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {model.mattressImage && (
                    <div className="flex-1">
                      <img
                        src={model.mattressImage}
                        alt={`${model.name} mattress`}
                        className="w-full"
                      />
                    </div>
                  )}
                </div>
              )}

              {model.diagram && (
                <div className="mb-8 text-center">
                  <h3 className="text-sm font-bold text-charcoal uppercase tracking-wide mb-6">See What&apos;s Inside</h3>
                  <img
                    src={model.diagram}
                    alt={`${model.name} diagram`}
                    className="mx-auto mb-4"
                  />
                  <p className="text-muted text-xs">*Elements may vary depending on specific model</p>
                </div>
              )}
            </>
          )}

          <Link
            href={`/collections/${collection.slug}`}
            className="inline-flex items-center text-sage hover:text-sage/80 font-medium mt-12"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to {collection.name} Collection
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
