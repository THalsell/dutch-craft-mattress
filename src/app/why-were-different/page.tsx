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
