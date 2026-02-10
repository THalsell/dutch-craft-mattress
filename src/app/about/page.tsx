import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import ManufacturingExcellence from "@/src/components/ManufacturingExcellence";
import QualityMaterials from "@/src/components/QualityMaterials";
import OurValues from "@/src/components/OurValues";
import FeaturedCollections from "@/src/components/FeaturedCollections";
import DutchCraftPromise from "@/src/components/DutchCraftPromise";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative min-h-64 md:min-h-80 lg:min-h-100 flex items-center">
        <Image
          src="/about-us.png"
          alt="Dutch Craft Mattress craftsmanship"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Dutch Craft
          </h1>
          <p className="text-white/90 leading-relaxed text-lg md:text-xl">
            Traditionally Built Better
          </p>
        </div>
      </section>

      {/* Heritage Intro */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-2xl md:text-3xl text-charcoal font-light leading-relaxed">
            One of the most trusted names in handcrafted sleep products, Dutch Craft has been
            delivering superior quality mattresses to families across America.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-20 bg-fog">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-charcoal mb-6">Our Story</h2>
              <p className="text-slate leading-relaxed mb-5">
                Eli Schmucker, Founder and President of Dutch Craft Sleep Products, grew up in the small town
                of Middlefield, Ohio—about 30 miles east of Cleveland. Following the Amish tradition, he
                went to work after graduating from the eighth grade at the local Amish school. After years
                of carpentry, masonry, and farm work, he entered the mattress industry.
              </p>
              <p className="text-slate leading-relaxed mb-5">
                At twenty-four, Eli moved to Tennessee to start his own factory with one mission: build
                quality mattresses at honest prices. Since the beginning, Dutch Craft has grown by leaps
                and bounds.
              </p>
              <p className="text-slate leading-relaxed">
                Today, Dutch Craft ships to dealers across over half the country, with multiple US factories
                including a foam cutting plant and sewing division—all ensuring the highest quality in
                every mattress we make.
              </p>
            </div>
            <div className="relative aspect-4/3 rounded-lg overflow-hidden">
              <Image
                src="/lifestyle.png"
                alt="Dutch Craft craftsmanship"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <ManufacturingExcellence />

      {/* Why Choose Dutch Craft */}
      <section className="py-16 md:py-20 bg-charcoal text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Why Choose Dutch Craft?</h2>
          <p className="text-white/70 text-center max-w-2xl mx-auto mb-12">
            When you choose Dutch Craft, you&apos;re choosing a mattress built with integrity, quality materials, and generations of craftsmanship.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-sage mb-2">100%</div>
              <p className="text-white/80">American Made</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-sage mb-2">No</div>
              <p className="text-white/80">Inferior Foams or Fiber</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-sage mb-2">15 Yr</div>
              <p className="text-white/80">Warranties Available</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-sage mb-2">9+</div>
              <p className="text-white/80">Product Collections</p>
            </div>
          </div>
        </div>
      </section>

      <QualityMaterials />
      <OurValues />
      <FeaturedCollections />
      <DutchCraftPromise />

      <Footer />
    </div>
  );
}
