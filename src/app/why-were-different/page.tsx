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

      <CTASection
        theme="sage"
        heading="Experience the Difference"
        description="Visit an authorized retailer to feel the Dutch Craft difference for yourself."
        buttons={[{ label: "Find a Retailer Near You", href: "/find-a-retailer" }]}
      />

      <Footer />
    </div>
  );
}
