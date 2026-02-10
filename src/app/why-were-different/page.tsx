import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import HandcraftedVsMassProduced from "@/src/components/HandcraftedVsMassProduced";
import NoAdvertising from "@/src/components/NoAdvertising";
import FamilyVsCorporate from "@/src/components/FamilyVsCorporate";
import BuiltForLongevity from "@/src/components/BuiltForLongevity";

export default function WhyWereDifferentPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="bg-fog py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">
            Why We&apos;re Different
          </h1>
          <p className="text-slate text-lg max-w-2xl mx-auto">
            Not all mattresses are created equal. Here&apos;s what sets Dutch Craft apart from
            national brands and big-box retailers.
          </p>
        </div>
      </section>

      <HandcraftedVsMassProduced />
      <NoAdvertising />
      <FamilyVsCorporate />
      <BuiltForLongevity />

      {/* CTA */}
      <section className="py-16 md:py-20 bg-sage text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Experience the Difference</h2>
          <p className="text-white/80 mb-8">
            Visit an authorized retailer to feel the Dutch Craft difference for yourself.
          </p>
          <a
            href="/find-a-retailer"
            className="inline-block bg-white hover:bg-fog text-sage font-semibold px-8 py-4 rounded-full transition-colors"
          >
            Find a Retailer Near You
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
