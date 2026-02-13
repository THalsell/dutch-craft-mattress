import type { Metadata } from "next";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import CTASection from "@/src/components/CTASection";
import HandcraftedVsMassProduced from "@/src/components/HandcraftedVsMassProduced";
import NoAdvertising from "@/src/components/NoAdvertising";
import FamilyVsCorporate from "@/src/components/FamilyVsCorporate";
import BuiltForLongevity from "@/src/components/BuiltForLongevity";

export const metadata: Metadata = {
  title: "Why We're Different | Dutch Craft Mattress",
  description: "Discover what sets Dutch Craft apart — handcrafted construction, no advertising overhead, family values, and mattresses built to last.",
};

export default function WhyWereDifferentPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="bg-charcoal py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            Why We&apos;re Different
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed text-white/70 max-w-2xl mx-auto">
            Most mattresses today are built to be replaced.<br />
            Ours are built to last.
          </p>
        </div>
      </section>

      {/* Statement Break #1 */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-2xl md:text-3xl font-semibold tracking-tight text-charcoal leading-snug">
            We don&apos;t build mattresses to hit quotas.<br />
            We build them to be slept on for decades.
          </p>
        </div>
      </section>

      <HandcraftedVsMassProduced />

      {/* Statement Break #2 */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-2xl md:text-3xl font-semibold tracking-tight text-charcoal leading-snug">
            We don&apos;t pay for celebrity endorsements.<br />
            We pay for better foam, coils, and fabrics.
          </p>
        </div>
      </section>

      <NoAdvertising />
      <FamilyVsCorporate />

      {/* Statement Break #3 */}
      <section className="py-16 md:py-20 bg-fog">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-2xl md:text-3xl font-semibold tracking-tight text-charcoal leading-snug">
            A good mattress shouldn&apos;t be disposable.
          </p>
        </div>
      </section>

      <BuiltForLongevity />

      <CTASection
        theme="charcoal"
        heading="Experience the Difference"
        description="Visit an authorized retailer to feel the Dutch Craft difference for yourself."
        buttons={[{ label: "Find a Retailer Near You", href: "/find-a-retailer" }]}
      />

      <Footer />
    </div>
  );
}
